import { createRoute, z } from '@hono/zod-openapi'

const ApplicationArnSchema = z
  .string()
  .regex(/arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[a-z0-9]+/)
  .openapi('ApplicationArn')

const AttributeGroupArnSchema = z
  .string()
  .regex(
    /arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/attribute-groups\/[-.\w]+/,
  )
  .openapi('AttributeGroupArn')

const AssociateAttributeGroupResponseSchema = z
  .object({
    applicationArn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) of the application that was augmented with attributes.',
        }),
    ).exactOptional(),
    attributeGroupArn: AttributeGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateAttributeGroupResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ArnSchema = z
  .string()
  .regex(/arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/)
  .min(1)
  .max(1600)
  .openapi('Arn')

const AssociateResourceResponseSchema = z
  .object({
    applicationArn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) of the application that was augmented with attributes.',
        }),
    ).exactOptional(),
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon resource name (ARN) that specifies the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateResourceResponse')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ApplicationIdSchema = z
  .string()
  .regex(/[a-z0-9]+/)
  .length(26)
  .openapi('ApplicationId')

const NameSchema = z
  .string()
  .regex(/[-.\w]+/)
  .min(1)
  .max(256)
  .openapi('Name')

const DescriptionSchema = z.string().max(1024).openapi('Description')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TagValueSchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@]*/u)
  .max(256)
  .openapi('TagValue')

const TagsSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('Tags')

const ApplicationSchema = z
  .object({
    id: ApplicationIdSchema.and(
      z.any().openapi({ description: 'The identifier of the application.' }),
    ).exactOptional(),
    arn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) that specifies the application across services.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application. The name must be unique in the region in which you are creating the application.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment when the application was created.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ISO-8601 formatted timestamp of the moment when the application was last updated.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'Key-value pairs you can use to associate with the application.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions.',
    required: [],
  })
  .openapi('Application')

const CreateApplicationResponseSchema = z
  .object({
    application: ApplicationSchema.and(
      z.any().openapi({ description: 'Information about the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateApplicationResponse')

const AttributeGroupIdSchema = z
  .string()
  .regex(/[-.\w]+/)
  .min(1)
  .max(256)
  .openapi('AttributeGroupId')

const AttributeGroupSchema = z
  .object({
    id: AttributeGroupIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The globally unique attribute group identifier of the attribute group.',
        }),
    ).exactOptional(),
    arn: AttributeGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) that specifies the attribute group across services.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the attribute group.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the attribute group that the user provides.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment the attribute group was created.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs you can use to associate with the attribute group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.',
    required: [],
  })
  .openapi('AttributeGroup')

const CreateAttributeGroupResponseSchema = z
  .object({
    attributeGroup: AttributeGroupSchema.and(
      z.any().openapi({ description: 'Information about the attribute group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAttributeGroupResponse')

const ApplicationSummarySchema = z
  .object({
    id: ApplicationIdSchema.and(
      z.any().openapi({ description: 'The identifier of the application.' }),
    ).exactOptional(),
    arn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) that specifies the application across services.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application. The name must be unique in the region in which you are creating the application.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment when the application was created.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ISO-8601 formatted timestamp of the moment when the application was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of a Amazon Web Services Service Catalog AppRegistry application.',
    required: [],
  })
  .openapi('ApplicationSummary')

const DeleteApplicationResponseSchema = z
  .object({
    application: ApplicationSummarySchema.and(
      z.any().openapi({ description: 'Information about the deleted application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteApplicationResponse')

const CreatedBySchema = z
  .string()
  .regex(/^(?!-)([a-z0-9-]+\.)+(aws\.internal|amazonaws\.com(\.cn)?)$/)
  .min(1)
  .max(128)
  .openapi('CreatedBy')

const AttributeGroupSummarySchema = z
  .object({
    id: AttributeGroupIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The globally unique attribute group identifier of the attribute group.',
        }),
    ).exactOptional(),
    arn: AttributeGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) that specifies the attribute group across services.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the attribute group.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the attribute group that the user provides.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment the attribute group was created.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.',
        }),
    ).exactOptional(),
    createdBy: CreatedBySchema.and(
      z.any().openapi({ description: 'The service principal that created the attribute group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.',
    required: [],
  })
  .openapi('AttributeGroupSummary')

const DeleteAttributeGroupResponseSchema = z
  .object({
    attributeGroup: AttributeGroupSummarySchema.and(
      z.any().openapi({ description: 'Information about the deleted attribute group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteAttributeGroupResponse')

const DisassociateAttributeGroupResponseSchema = z
  .object({
    applicationArn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon resource name (ARN) that specifies the application.' }),
    ).exactOptional(),
    attributeGroupArn: AttributeGroupArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon resource name (ARN) that specifies the attribute group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateAttributeGroupResponse')

const DisassociateResourceResponseSchema = z
  .object({
    applicationArn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon resource name (ARN) that specifies the application.' }),
    ).exactOptional(),
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon resource name (ARN) that specifies the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateResourceResponse')

const AssociationCountSchema = z.int().min(0).openapi('AssociationCount')

const ResourceGroupStateSchema = z
  .enum([
    'CREATING',
    'CREATE_COMPLETE',
    'CREATE_FAILED',
    'UPDATING',
    'UPDATE_COMPLETE',
    'UPDATE_FAILED',
  ])
  .openapi('ResourceGroupState')

const StringSchema = z.string().openapi('String')

const ResourceGroupSchema = z
  .object({
    state: ResourceGroupStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the propagation process for the resource group. The states includes:</p> <p> <code>CREATING </code>if the resource group is in the process of being created.</p> <p> <code>CREATE_COMPLETE</code> if the resource group was created successfully.</p> <p> <code>CREATE_FAILED</code> if the resource group failed to be created.</p> <p> <code>UPDATING</code> if the resource group is in the process of being updated.</p> <p> <code>UPDATE_COMPLETE</code> if the resource group updated successfully.</p> <p> <code>UPDATE_FAILED</code> if the resource group could not update successfully.</p>',
        }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon resource name (ARN) of the resource group.' }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message that generates when the propagation process for the resource group fails.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The information about the resource group integration.', required: [] })
  .openapi('ResourceGroup')

const IntegrationsSchema = z
  .object({
    resourceGroup: ResourceGroupSchema.and(
      z.any().openapi({ description: ' The information about the resource group integration.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The information about the service integration.', required: [] })
  .openapi('Integrations')

const GetApplicationResponseSchema = z
  .object({
    id: ApplicationIdSchema.and(
      z.any().openapi({ description: 'The identifier of the application.' }),
    ).exactOptional(),
    arn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) that specifies the application across services.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application. The name must be unique in the region in which you are creating the application.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment when the application was created.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment when the application was last updated.',
        }),
    ).exactOptional(),
    associatedResourceCount: AssociationCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of top-level resources that were registered as part of this application.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'Key-value pairs associated with the application.' }),
    ).exactOptional(),
    integrations: IntegrationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The information about the integration of the application with other services, such as Resource Groups. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetApplicationResponse')

const ResourceSpecifierSchema = z.string().regex(/\S+/).min(1).max(256).openapi('ResourceSpecifier')

const StackArnSchema = z
  .string()
  .regex(
    /arn:aws[-a-z]*:cloudformation:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:stack\/[a-zA-Z][-A-Za-z0-9]{0,127}\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/,
  )
  .openapi('StackArn')

const ResourceIntegrationsSchema = z
  .object({
    resourceGroup: ResourceGroupSchema.and(
      z.any().openapi({ description: 'The information about the integration of Resource Groups.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The service integration information about the resource.', required: [] })
  .openapi('ResourceIntegrations')

const ResourceSchema = z
  .object({
    name: ResourceSpecifierSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    arn: StackArnSchema.and(
      z.any().openapi({ description: 'The Amazon resource name (ARN) of the resource.' }),
    ).exactOptional(),
    associationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time the resource was associated with the application.' }),
    ).exactOptional(),
    integrations: ResourceIntegrationsSchema.and(
      z.any().openapi({ description: 'The service integration information about the resource. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The information about the resource.', required: [] })
  .openapi('Resource')

const GetAssociatedResourceResponseSchema = z
  .object({
    resource: ResourceSchema.and(
      z.any().openapi({ description: 'The resource associated with the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAssociatedResourceResponse')

const AttributesSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(8000)
  .openapi('Attributes')

const GetAttributeGroupResponseSchema = z
  .object({
    id: AttributeGroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of the attribute group.' }),
    ).exactOptional(),
    arn: AttributeGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) that specifies the attribute group across services.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the attribute group.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the attribute group that the user provides.' }),
    ).exactOptional(),
    attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.',
        }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment the attribute group was created.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'Key-value pairs associated with the attribute group.' }),
    ).exactOptional(),
    createdBy: CreatedBySchema.and(
      z.any().openapi({ description: 'The service principal that created the attribute group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAttributeGroupResponse')

const TagKeyConfigSchema = z
  .string()
  .regex(/^(?!\s+$)[\p{L}\p{Z}\p{N}_.:\/=+\-@]*/u)
  .min(0)
  .max(128)
  .openapi('TagKeyConfig')

const TagQueryConfigurationSchema = z
  .object({
    tagKey: TagKeyConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' Condition in the IAM policy that associates resources to an application. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The definition of <code>tagQuery</code>. Specifies which resources are associated with an application. ',
    required: [],
  })
  .openapi('TagQueryConfiguration')

const AppRegistryConfigurationSchema = z
  .object({
    tagQueryConfiguration: TagQueryConfigurationSchema.and(
      z.any().openapi({ description: ' Includes the definition of a <code>tagQuery</code>. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Includes all of the AppRegistry settings. ', required: [] })
  .openapi('AppRegistryConfiguration')

const GetConfigurationResponseSchema = z
  .object({
    configuration: AppRegistryConfigurationSchema.and(
      z
        .any()
        .openapi({ description: ' Retrieves <code>TagKey</code> configuration from an account. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConfigurationResponse')

const ApplicationSummariesSchema = z.array(ApplicationSummarySchema).openapi('ApplicationSummaries')

const NextTokenSchema = z
  .string()
  .regex(/[A-Za-z0-9+\/=]+/)
  .min(1)
  .max(2024)
  .openapi('NextToken')

const ListApplicationsResponseSchema = z
  .object({
    applications: ApplicationSummariesSchema.and(
      z.any().openapi({ description: 'This list of applications.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next page of results after a previous API call. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationsResponse')

const AttributeGroupIdsSchema = z.array(AttributeGroupIdSchema).openapi('AttributeGroupIds')

const ListAssociatedAttributeGroupsResponseSchema = z
  .object({
    attributeGroups: AttributeGroupIdsSchema.and(
      z.any().openapi({ description: 'A list of attribute group IDs.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next page of results after a previous API call. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssociatedAttributeGroupsResponse')

const ResourceTypeSchema = z.enum(['CFN_STACK', 'RESOURCE_TAG_VALUE']).openapi('ResourceType')

const ResourceDetailsSchema = z
  .object({
    tagValue: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The details related to the resource. ', required: [] })
  .openapi('ResourceDetails')

const ResourceInfoSchema = z
  .object({
    name: ResourceSpecifierSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) that specifies the resource across services.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides information about the Service Catalog App Registry resource type. ',
        }),
    ).exactOptional(),
    resourceDetails: ResourceDetailsSchema.and(
      z.any().openapi({ description: ' The details related to the resource. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The information about the resource.', required: [] })
  .openapi('ResourceInfo')

const ResourcesSchema = z.array(ResourceInfoSchema).openapi('Resources')

const ListAssociatedResourcesResponseSchema = z
  .object({
    resources: ResourcesSchema.and(
      z.any().openapi({ description: 'Information about the resources.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next page of results after a previous API call. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssociatedResourcesResponse')

const AttributeGroupSummariesSchema = z
  .array(AttributeGroupSummarySchema)
  .openapi('AttributeGroupSummaries')

const ListAttributeGroupsResponseSchema = z
  .object({
    attributeGroups: AttributeGroupSummariesSchema.and(
      z.any().openapi({ description: 'This list of attribute groups.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next page of results after a previous API call. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAttributeGroupsResponse')

const AttributeGroupDetailsSchema = z
  .object({
    id: AttributeGroupIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the attribute group.' }),
    ).exactOptional(),
    arn: AttributeGroupArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon resource name (ARN) that specifies the attribute group.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "<important> <p> This field is no longer supported. We recommend you don't use the field when using <code>ListAttributeGroupsForApplication</code>. </p> </important> <p> The name of the attribute group. </p>This field is deprecated. We recommend not using the field when using ListAttributeGroupsForApplication.",
        }),
    ).exactOptional(),
    createdBy: CreatedBySchema.and(
      z.any().openapi({ description: 'The service principal that created the attribute group.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The details related to a specific AttributeGroup. ', required: [] })
  .openapi('AttributeGroupDetails')

const AttributeGroupDetailsListSchema = z
  .array(AttributeGroupDetailsSchema)
  .openapi('AttributeGroupDetailsList')

const ListAttributeGroupsForApplicationResponseSchema = z
  .object({
    attributeGroupsDetails: AttributeGroupDetailsListSchema.and(
      z.any().openapi({ description: ' The details related to a specific attribute group. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next page of results after a previous API call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAttributeGroupsForApplicationResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags on the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const SyncActionSchema = z.enum(['START_SYNC', 'NO_ACTION']).openapi('SyncAction')

const SyncResourceResponseSchema = z
  .object({
    applicationArn: ApplicationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon resource name (ARN) that specifies the application.' }),
    ).exactOptional(),
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon resource name (ARN) that specifies the resource.' }),
    ).exactOptional(),
    actionTaken: SyncActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The results of the output if an application is associated with an ARN value, which could be <code>syncStarted</code> or None.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SyncResourceResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/[a-zA-Z+-=._:\/]+/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateApplicationResponseSchema = z
  .object({
    application: ApplicationSchema.and(
      z.any().openapi({ description: 'The updated information of the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateApplicationResponse')

const UpdateAttributeGroupResponseSchema = z
  .object({
    attributeGroup: AttributeGroupSchema.and(
      z.any().openapi({ description: 'The updated information of the attribute group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAttributeGroupResponse')

const ApplicationSpecifierSchema = z
  .string()
  .regex(
    /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
  )
  .min(1)
  .max(256)
  .openapi('ApplicationSpecifier')

const AttributeGroupSpecifierSchema = z
  .string()
  .regex(
    /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/attribute-groups\/[-.\w]+)/,
  )
  .min(1)
  .max(512)
  .openapi('AttributeGroupSpecifier')

const AssociateAttributeGroupRequestSchema = z
  .object({})
  .openapi({ title: 'AssociateAttributeGroupRequest' })
  .openapi('AssociateAttributeGroupRequest')

const AssociateResourceRequestSchema = z
  .object({})
  .openapi({ title: 'AssociateResourceRequest' })
  .openapi('AssociateResourceRequest')

const ClientTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(128)
  .openapi('ClientToken')

const CreateApplicationRequestSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application. The name must be unique in the region in which you are creating the application.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'Key-value pairs you can use to associate with the application.' }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.',
        }),
    ),
  })
  .openapi({ required: ['name', 'clientToken'], title: 'CreateApplicationRequest' })
  .openapi('CreateApplicationRequest')

const CreateAttributeGroupRequestSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the attribute group.' })),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the attribute group that the user provides.' }),
    ).exactOptional(),
    attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs you can use to associate with the attribute group.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'attributes', 'clientToken'],
    title: 'CreateAttributeGroupRequest',
  })
  .openapi('CreateAttributeGroupRequest')

const DeleteApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const DeleteAttributeGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAttributeGroupRequest' })
  .openapi('DeleteAttributeGroupRequest')

const DisassociateAttributeGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateAttributeGroupRequest' })
  .openapi('DisassociateAttributeGroupRequest')

const DisassociateResourceRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateResourceRequest' })
  .openapi('DisassociateResourceRequest')

const GetApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'GetApplicationRequest' })
  .openapi('GetApplicationRequest')

const GetAssociatedResourceRequestSchema = z
  .object({})
  .openapi({ title: 'GetAssociatedResourceRequest' })
  .openapi('GetAssociatedResourceRequest')

const GetAttributeGroupRequestSchema = z
  .object({})
  .openapi({ title: 'GetAttributeGroupRequest' })
  .openapi('GetAttributeGroupRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListApplicationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListApplicationsRequest' })
  .openapi('ListApplicationsRequest')

const ListAssociatedAttributeGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssociatedAttributeGroupsRequest' })
  .openapi('ListAssociatedAttributeGroupsRequest')

const ListAssociatedResourcesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssociatedResourcesRequest' })
  .openapi('ListAssociatedResourcesRequest')

const ListAttributeGroupsForApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'ListAttributeGroupsForApplicationRequest' })
  .openapi('ListAttributeGroupsForApplicationRequest')

const ListAttributeGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAttributeGroupsRequest' })
  .openapi('ListAttributeGroupsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutConfigurationRequestSchema = z
  .object({
    configuration: AppRegistryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: ' Associates a <code>TagKey</code> configuration to an account. ',
        }),
    ),
  })
  .openapi({ required: ['configuration'], title: 'PutConfigurationRequest' })
  .openapi('PutConfigurationRequest')

const SyncResourceRequestSchema = z
  .object({})
  .openapi({ title: 'SyncResourceRequest' })
  .openapi('SyncResourceRequest')

const TagKeysSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The new or modified tags for the resource.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationRequestSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Deprecated: The new name of the application. The name must be unique in the region in which you are updating the application. Please do not use this field as we have stopped supporting name updates.Name update for application is deprecated.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The new description of the application.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateApplicationRequest', required: [] })
  .openapi('UpdateApplicationRequest')

const UpdateAttributeGroupRequestSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Deprecated: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group. Please do not use this field as we have stopped supporting name updates.Name update for attribute group is deprecated.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the attribute group that the user provides.' }),
    ).exactOptional(),
    attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAttributeGroupRequest', required: [] })
  .openapi('UpdateAttributeGroupRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const putApplicationsApplicationAttributeGroupsAttributeGroupRoute = createRoute({
  method: 'put',
  path: '/applications/{application}/attribute-groups/{attributeGroup}',
  description:
    "Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.",
  operationId: 'AssociateAttributeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
      attributeGroup: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/attribute-groups\/[-.\w]+)/,
        )
        .min(1)
        .max(512)
        .openapi({
          param: {
            name: 'attributeGroup',
            in: 'path',
            required: true,
            description:
              ' The name, ID, or ARN of the attribute group that holds the attributes to describe the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/attribute-groups/[-.\\w]+)',
              minLength: 1,
              maxLength: 512,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateAttributeGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteApplicationsApplicationAttributeGroupsAttributeGroupRoute = createRoute({
  method: 'delete',
  path: '/applications/{application}/attribute-groups/{attributeGroup}',
  description:
    "Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.",
  operationId: 'DisassociateAttributeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
      attributeGroup: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/attribute-groups\/[-.\w]+)/,
        )
        .min(1)
        .max(512)
        .openapi({
          param: {
            name: 'attributeGroup',
            in: 'path',
            required: true,
            description:
              ' The name, ID, or ARN of the attribute group that holds the attributes to describe the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/attribute-groups/[-.\\w]+)',
              minLength: 1,
              maxLength: 512,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateAttributeGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationResourcesResourceTypeResourceRoute = createRoute({
  method: 'get',
  path: '/applications/{application}/resources/{resourceType}/{resource}',
  description: 'Gets the resource associated with the application.',
  operationId: 'GetAssociatedResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
      resourceType: z
        .enum(['CFN_STACK', 'RESOURCE_TAG_VALUE'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'path',
            required: true,
            description: 'The type of resource associated with the application.',
            schema: { type: 'string', enum: ['CFN_STACK', 'RESOURCE_TAG_VALUE'] },
          },
        }),
      resource: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'resource',
            in: 'path',
            required: true,
            description: 'The name or ID of the resource associated with the application.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssociatedResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putApplicationsApplicationResourcesResourceTypeResourceRoute = createRoute({
  method: 'put',
  path: '/applications/{application}/resources/{resourceType}/{resource}',
  description:
    ' Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. ',
  operationId: 'AssociateResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
      resourceType: z
        .enum(['CFN_STACK', 'RESOURCE_TAG_VALUE'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'path',
            required: true,
            description: 'The type of resource of which the application will be associated.',
            schema: { type: 'string', enum: ['CFN_STACK', 'RESOURCE_TAG_VALUE'] },
          },
        }),
      resource: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'resource',
            in: 'path',
            required: true,
            description:
              'The name or ID of the resource of which the application will be associated.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteApplicationsApplicationResourcesResourceTypeResourceRoute = createRoute({
  method: 'delete',
  path: '/applications/{application}/resources/{resourceType}/{resource}',
  description:
    'Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.',
  operationId: 'DisassociateResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: 'The name or ID of the application.',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
      resourceType: z
        .enum(['CFN_STACK', 'RESOURCE_TAG_VALUE'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'path',
            required: true,
            description: 'The type of the resource that is being disassociated.',
            schema: { type: 'string', enum: ['CFN_STACK', 'RESOURCE_TAG_VALUE'] },
          },
        }),
      resource: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'resource',
            in: 'path',
            required: true,
            description: 'The name or ID of the resource.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getApplicationsRoute = createRoute({
  method: 'get',
  path: '/applications',
  description: 'Retrieves a list of all of your applications. Results are paginated.',
  operationId: 'ListApplications',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(2024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token to use to get the next page of results after a previous API call. ',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 2024 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postApplicationsRoute = createRoute({
  method: 'post',
  path: '/applications',
  description:
    'Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.',
  operationId: 'CreateApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/[-.\w]+/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The name of the application. The name must be unique in the region in which you are creating the application.',
                }),
              description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the application.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description: 'Key-value pairs you can use to associate with the application.',
                }),
              clientToken: z
                .string()
                .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.',
                }),
            })
            .openapi({ required: ['name', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationResponseSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAttributeGroupsRoute = createRoute({
  method: 'get',
  path: '/attribute-groups',
  description: 'Lists all attribute groups which you have access to. Results are paginated.',
  operationId: 'ListAttributeGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(2024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token to use to get the next page of results after a previous API call. ',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 2024 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAttributeGroupsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postAttributeGroupsRoute = createRoute({
  method: 'post',
  path: '/attribute-groups',
  description:
    "Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.",
  operationId: 'CreateAttributeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/[-.\w]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the attribute group.' }),
              description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The description of the attribute group that the user provides.',
                }),
              attributes: z
                .string()
                .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
                .min(1)
                .max(8000)
                .openapi({
                  description:
                    'A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description: 'Key-value pairs you can use to associate with the attribute group.',
                }),
              clientToken: z
                .string()
                .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.',
                }),
            })
            .openapi({ required: ['name', 'attributes', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAttributeGroupResponseSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationRoute = createRoute({
  method: 'get',
  path: '/applications/{application}',
  description:
    ' Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. ',
  operationId: 'GetApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApplicationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteApplicationsApplicationRoute = createRoute({
  method: 'delete',
  path: '/applications/{application}',
  description:
    'Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.',
  operationId: 'DeleteApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchApplicationsApplicationRoute = createRoute({
  method: 'patch',
  path: '/applications/{application}',
  description: 'Updates an existing application with new attributes.',
  operationId: 'UpdateApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application that will be updated. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/[-.\w]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Deprecated: The new name of the application. The name must be unique in the region in which you are updating the application. Please do not use this field as we have stopped supporting name updates.',
                }),
              description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The new description of the application.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApplicationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAttributeGroupsAttributeGroupRoute = createRoute({
  method: 'get',
  path: '/attribute-groups/{attributeGroup}',
  description:
    ' Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. ',
  operationId: 'GetAttributeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attributeGroup: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/attribute-groups\/[-.\w]+)/,
        )
        .min(1)
        .max(512)
        .openapi({
          param: {
            name: 'attributeGroup',
            in: 'path',
            required: true,
            description:
              ' The name, ID, or ARN of the attribute group that holds the attributes to describe the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/attribute-groups/[-.\\w]+)',
              minLength: 1,
              maxLength: 512,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAttributeGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteAttributeGroupsAttributeGroupRoute = createRoute({
  method: 'delete',
  path: '/attribute-groups/{attributeGroup}',
  description:
    'Deletes an attribute group, specified either by its attribute group ID, name, or ARN.',
  operationId: 'DeleteAttributeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attributeGroup: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/attribute-groups\/[-.\w]+)/,
        )
        .min(1)
        .max(512)
        .openapi({
          param: {
            name: 'attributeGroup',
            in: 'path',
            required: true,
            description:
              ' The name, ID, or ARN of the attribute group that holds the attributes to describe the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/attribute-groups/[-.\\w]+)',
              minLength: 1,
              maxLength: 512,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAttributeGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchAttributeGroupsAttributeGroupRoute = createRoute({
  method: 'patch',
  path: '/attribute-groups/{attributeGroup}',
  description: 'Updates an existing attribute group with new details. ',
  operationId: 'UpdateAttributeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attributeGroup: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/attribute-groups\/[-.\w]+)/,
        )
        .min(1)
        .max(512)
        .openapi({
          param: {
            name: 'attributeGroup',
            in: 'path',
            required: true,
            description:
              ' The name, ID, or ARN of the attribute group that holds the attributes to describe the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/attribute-groups/[-.\\w]+)',
              minLength: 1,
              maxLength: 512,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/[-.\w]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Deprecated: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group. Please do not use this field as we have stopped supporting name updates.',
                }),
              description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The description of the attribute group that the user provides.',
                }),
              attributes: z
                .string()
                .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
                .min(1)
                .max(8000)
                .exactOptional()
                .openapi({
                  description:
                    'A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAttributeGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getConfigurationRoute = createRoute({
  method: 'get',
  path: '/configuration',
  description: ' Retrieves a <code>TagKey</code> configuration from an account. ',
  operationId: 'GetConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConfigurationResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putConfigurationRoute = createRoute({
  method: 'put',
  path: '/configuration',
  description: ' Associates a <code>TagKey</code> configuration to an account. ',
  operationId: 'PutConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configuration: z
                .object({
                  tagQueryConfiguration: TagQueryConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Includes the definition of a <code>tagQuery</code>. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: ' Includes all of the AppRegistry settings. ',
                  required: [],
                }),
            })
            .openapi({ required: ['configuration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationAttributeGroupsRoute = createRoute({
  method: 'get',
  path: '/applications/{application}/attribute-groups',
  description:
    'Lists all attribute groups that are associated with specified application. Results are paginated.',
  operationId: 'ListAssociatedAttributeGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: 'The name or ID of the application.',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(2024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token to use to get the next page of results after a previous API call. ',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 2024 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssociatedAttributeGroupsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationResourcesRoute = createRoute({
  method: 'get',
  path: '/applications/{application}/resources',
  description:
    '<p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>',
  operationId: 'ListAssociatedResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: ' The name, ID, or ARN of the application. ',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(2024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token to use to get the next page of results after a previous API call. ',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 2024 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssociatedResourcesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationAttributeGroupDetailsRoute = createRoute({
  method: 'get',
  path: '/applications/{application}/attribute-group-details',
  description:
    'Lists the details of all attribute groups associated with a specific application. The results display in pages.',
  operationId: 'ListAttributeGroupsForApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      application: z
        .string()
        .regex(
          /([-.\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[-.\w]+)/,
        )
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'application',
            in: 'path',
            required: true,
            description: 'The name or ID of the application.',
            schema: {
              type: 'string',
              pattern:
                '([-.\\w]+)|(arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[-.\\w]+)',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(2024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'This token retrieves the next page of results after a previous API call.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 2024 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAttributeGroupsForApplicationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists all of the tags on the resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon resource name (ARN) that specifies the resource.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\\-])+:([a-z]{2}(-gov)?-[a-z]+-\\d{1})?:(\\d{12})?:(.*)',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    '<p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon resource name (ARN) that specifies the resource.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\\-])+:([a-z]{2}(-gov)?-[a-z]+-\\d{1})?:(\\d{12})?:(.*)',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The new or modified tags for the resource.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postSyncResourceTypeResourceRoute = createRoute({
  method: 'post',
  path: '/sync/{resourceType}/{resource}',
  description:
    "<p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>",
  operationId: 'SyncResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceType: z
        .enum(['CFN_STACK', 'RESOURCE_TAG_VALUE'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'path',
            required: true,
            description: 'The type of resource of which the application will be associated.',
            schema: { type: 'string', enum: ['CFN_STACK', 'RESOURCE_TAG_VALUE'] },
          },
        }),
      resource: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'resource',
            in: 'path',
            required: true,
            description:
              'An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an Amazon Web Services CloudFormation stack, or an Amazon S3 bucket.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SyncResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    '<p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon resource name (ARN) that specifies the resource.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\\-])+:([a-z]{2}(-gov)?-[a-z]+-\\d{1})?:(\\d{12})?:(.*)',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of the tag keys to remove from the specified resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
