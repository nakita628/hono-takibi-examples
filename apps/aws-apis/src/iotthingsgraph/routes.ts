import { createRoute, z } from '@hono/zod-openapi'

const AssociateEntityToThingResponseSchema = z
  .looseObject({})
  .openapi('AssociateEntityToThingResponse')

const ThingNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9:_-]+/)
  .min(1)
  .max(128)
  .openapi('ThingName')

const UrnSchema = z
  .string()
  .max(160)
  .openapi({
    pattern:
      '^urn:tdm:(([a-z]{2}-(gov-)?[a-z]{4,9}-[0-9]{1,3}/[0-9]+/)*[\\p{Alnum}_]+(/[\\p{Alnum}_]+)*):([\\p{Alpha}]*):([\\p{Alnum}_]+(/[\\p{Alnum}_]+)*)$',
  })
  .openapi('Urn')

const VersionSchema = z.int().openapi('Version')

const AssociateEntityToThingRequestSchema = z
  .object({
    thingName: ThingNameSchema.openapi({
      description: 'The name of the thing to which the entity is to be associated.',
    }),
    entityId: UrnSchema.openapi({
      description:
        '<p>The ID of the device to be associated with the thing.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code> </p>',
    }),
    namespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "The version of the user's namespace. Defaults to the latest version of the user's namespace.",
    }),
  })
  .openapi({ required: ['thingName', 'entityId'], title: 'AssociateEntityToThingRequest' })
  .openapi('AssociateEntityToThingRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ArnSchema = z.string().openapi('Arn')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const FlowTemplateSummarySchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({ description: 'The ID of the workflow.' }),
    arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the workflow.' }),
    revisionNumber: VersionSchema.exactOptional().openapi({
      description: 'The revision number of the workflow.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'The date when the workflow was created.',
    }),
  })
  .openapi({
    description: 'An object that contains summary information about a workflow.',
    required: [],
  })
  .openapi('FlowTemplateSummary')

const CreateFlowTemplateResponseSchema = z
  .object({
    summary: FlowTemplateSummarySchema.exactOptional().openapi({
      description: 'The summary object that describes the created workflow.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateFlowTemplateResponse')

const DefinitionLanguageSchema = z.literal('GRAPHQL').openapi('DefinitionLanguage')

const DefinitionTextSchema = z.string().max(1048576).openapi('DefinitionText')

const DefinitionDocumentSchema = z
  .object({
    language: DefinitionLanguageSchema.openapi({
      description:
        'The language used to define the entity. <code>GRAPHQL</code> is the only valid value.',
    }),
    text: DefinitionTextSchema.openapi({
      description: 'The GraphQL text that defines the entity.',
    }),
  })
  .openapi({ required: ['language', 'text'], description: 'A document that defines an entity. ' })
  .openapi('DefinitionDocument')

const CreateFlowTemplateRequestSchema = z
  .object({
    definition: DefinitionDocumentSchema.openapi({
      description: 'The workflow <code>DefinitionDocument</code>.',
    }),
    compatibleNamespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        '<p>The namespace version in which the workflow is to be created.</p> <p>If no value is specified, the latest version is used by default.</p>',
    }),
  })
  .openapi({ required: ['definition'], title: 'CreateFlowTemplateRequest' })
  .openapi('CreateFlowTemplateRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const SystemInstanceDeploymentStatusSchema = z
  .enum([
    'NOT_DEPLOYED',
    'BOOTSTRAP',
    'DEPLOY_IN_PROGRESS',
    'DEPLOYED_IN_TARGET',
    'UNDEPLOY_IN_PROGRESS',
    'FAILED',
    'PENDING_DELETE',
    'DELETED_IN_TARGET',
  ])
  .openapi('SystemInstanceDeploymentStatus')

const DeploymentTargetSchema = z.enum(['GREENGRASS', 'CLOUD']).openapi('DeploymentTarget')

const GroupNameSchema = z.string().openapi('GroupName')

const GreengrassGroupIdSchema = z.string().openapi('GreengrassGroupId')

const GreengrassGroupVersionIdSchema = z.string().openapi('GreengrassGroupVersionId')

const SystemInstanceSummarySchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({ description: 'The ID of the system instance.' }),
    arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the system instance.' }),
    status: SystemInstanceDeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the system instance.',
    }),
    target: DeploymentTargetSchema.exactOptional().openapi({
      description: 'The target of the system instance.',
    }),
    greengrassGroupName: GroupNameSchema.exactOptional().openapi({
      description: 'The ID of the Greengrass group where the system instance is deployed.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'The date when the system instance was created.',
    }),
    updatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The date and time when the system instance was last updated.',
    }),
    greengrassGroupId: GreengrassGroupIdSchema.exactOptional().openapi({
      description: 'The ID of the Greengrass group where the system instance is deployed.',
    }),
    greengrassGroupVersionId: GreengrassGroupVersionIdSchema.exactOptional().openapi({
      description: 'The version of the Greengrass group where the system instance is deployed.',
    }),
  })
  .openapi({
    description: 'An object that contains summary information about a system instance.',
    required: [],
  })
  .openapi('SystemInstanceSummary')

const CreateSystemInstanceResponseSchema = z
  .object({
    summary: SystemInstanceSummarySchema.exactOptional().openapi({
      description: 'The summary object that describes the new system instance.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSystemInstanceResponse')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z.string().min(1).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.openapi({
      description:
        'The required name of the tag. The string value can be from 1 to 128 Unicode characters in length.',
    }),
    value: TagValueSchema.openapi({
      description:
        'The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length.',
    }),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      'Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(50).openapi('TagList')

const S3BucketNameSchema = z.string().openapi('S3BucketName')

const EnabledSchema = z.boolean().openapi('Enabled')

const RoleArnSchema = z.string().min(20).max(2048).openapi('RoleArn')

const MetricsConfigurationSchema = z
  .object({
    cloudMetricEnabled: EnabledSchema.exactOptional().openapi({
      description: 'A Boolean that specifies whether cloud metrics are collected.',
    }),
    metricRuleRoleArn: RoleArnSchema.exactOptional().openapi({
      description: 'The ARN of the role that is used to collect cloud metrics.',
    }),
  })
  .openapi({
    description:
      'An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.',
    required: [],
  })
  .openapi('MetricsConfiguration')

const CreateSystemInstanceRequestSchema = z
  .object({
    tags: TagListSchema.exactOptional().openapi({
      description:
        'Metadata, consisting of key-value pairs, that can be used to categorize your system instances.',
    }),
    definition: DefinitionDocumentSchema,
    target: DeploymentTargetSchema.openapi({
      description:
        'The target type of the deployment. Valid values are <code>GREENGRASS</code> and <code>CLOUD</code>.',
    }),
    greengrassGroupName: GroupNameSchema.exactOptional().openapi({
      description:
        'The name of the Greengrass group where the system instance will be deployed. This value is required if the value of the <code>target</code> parameter is <code>GREENGRASS</code>.',
    }),
    s3BucketName: S3BucketNameSchema.exactOptional().openapi({
      description:
        "The name of the Amazon Simple Storage Service bucket that will be used to store and deploy the system instance's resource file. This value is required if the value of the <code>target</code> parameter is <code>GREENGRASS</code>.",
    }),
    metricsConfiguration: MetricsConfigurationSchema.exactOptional(),
    flowActionsRoleArn: RoleArnSchema.exactOptional().openapi({
      description:
        'The ARN of the IAM role that AWS IoT Things Graph will assume when it executes the flow. This role must have read and write access to AWS Lambda and AWS IoT and any other AWS services that the flow uses when it executes. This value is required if the value of the <code>target</code> parameter is <code>CLOUD</code>.',
    }),
  })
  .openapi({ required: ['definition', 'target'], title: 'CreateSystemInstanceRequest' })
  .openapi('CreateSystemInstanceRequest')

const SystemTemplateSummarySchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({ description: 'The ID of the system.' }),
    arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the system.' }),
    revisionNumber: VersionSchema.exactOptional().openapi({
      description: 'The revision number of the system.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'The date when the system was created.',
    }),
  })
  .openapi({ description: 'An object that contains information about a system.', required: [] })
  .openapi('SystemTemplateSummary')

const CreateSystemTemplateResponseSchema = z
  .object({
    summary: SystemTemplateSummarySchema.exactOptional().openapi({
      description: 'The summary object that describes the created system.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSystemTemplateResponse')

const CreateSystemTemplateRequestSchema = z
  .object({
    definition: DefinitionDocumentSchema.openapi({
      description: 'The <code>DefinitionDocument</code> used to create the system.',
    }),
    compatibleNamespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        '<p>The namespace version in which the system is to be created.</p> <p>If no value is specified, the latest version is used by default.</p>',
    }),
  })
  .openapi({ required: ['definition'], title: 'CreateSystemTemplateRequest' })
  .openapi('CreateSystemTemplateRequest')

const DeleteFlowTemplateResponseSchema = z.looseObject({}).openapi('DeleteFlowTemplateResponse')

const DeleteFlowTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the workflow to be deleted.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code> </p>',
    }),
  })
  .openapi({ required: ['id'], title: 'DeleteFlowTemplateRequest' })
  .openapi('DeleteFlowTemplateRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const NamespaceNameSchema = z.string().max(128).openapi('NamespaceName')

const DeleteNamespaceResponseSchema = z
  .object({
    namespaceArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the namespace to be deleted.',
    }),
    namespaceName: NamespaceNameSchema.exactOptional().openapi({
      description: 'The name of the namespace to be deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteNamespaceResponse')

const DeleteNamespaceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteNamespaceRequest' })
  .openapi('DeleteNamespaceRequest')

const DeleteSystemInstanceResponseSchema = z.looseObject({}).openapi('DeleteSystemInstanceResponse')

const DeleteSystemInstanceRequestSchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({
      description: 'The ID of the system instance to be deleted.',
    }),
  })
  .openapi({ title: 'DeleteSystemInstanceRequest', required: [] })
  .openapi('DeleteSystemInstanceRequest')

const DeleteSystemTemplateResponseSchema = z.looseObject({}).openapi('DeleteSystemTemplateResponse')

const DeleteSystemTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the system to be deleted.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code> </p>',
    }),
  })
  .openapi({ required: ['id'], title: 'DeleteSystemTemplateRequest' })
  .openapi('DeleteSystemTemplateRequest')

const GreengrassDeploymentIdSchema = z.string().openapi('GreengrassDeploymentId')

const DeploySystemInstanceResponseSchema = z
  .object({
    summary: SystemInstanceSummarySchema.openapi({
      description:
        'An object that contains summary information about a system instance that was deployed. ',
    }),
    greengrassDeploymentId: GreengrassDeploymentIdSchema.exactOptional().openapi({
      description: 'The ID of the Greengrass deployment used to deploy the system instance.',
    }),
  })
  .openapi({ required: ['summary'] })
  .openapi('DeploySystemInstanceResponse')

const DeploySystemInstanceRequestSchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({
      description:
        '<p>The ID of the system instance. This value is returned by the <code>CreateSystemInstance</code> action.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME</code> </p>',
    }),
  })
  .openapi({ title: 'DeploySystemInstanceRequest', required: [] })
  .openapi('DeploySystemInstanceRequest')

const DeprecateFlowTemplateResponseSchema = z
  .looseObject({})
  .openapi('DeprecateFlowTemplateResponse')

const DeprecateFlowTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the workflow to be deleted.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code> </p>',
    }),
  })
  .openapi({ required: ['id'], title: 'DeprecateFlowTemplateRequest' })
  .openapi('DeprecateFlowTemplateRequest')

const DeprecateSystemTemplateResponseSchema = z
  .looseObject({})
  .openapi('DeprecateSystemTemplateResponse')

const DeprecateSystemTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the system to delete.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code> </p>',
    }),
  })
  .openapi({ required: ['id'], title: 'DeprecateSystemTemplateRequest' })
  .openapi('DeprecateSystemTemplateRequest')

const DescribeNamespaceResponseSchema = z
  .object({
    namespaceArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the namespace.' }),
    namespaceName: NamespaceNameSchema.exactOptional().openapi({
      description: 'The name of the namespace.',
    }),
    trackingNamespaceName: NamespaceNameSchema.exactOptional().openapi({
      description:
        'The name of the public namespace that the latest namespace version is tracking.',
    }),
    trackingNamespaceVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the public namespace that the latest version is tracking.',
    }),
    namespaceVersion: VersionSchema.exactOptional().openapi({
      description: "The version of the user's namespace to describe.",
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeNamespaceResponse')

const DescribeNamespaceRequestSchema = z
  .object({
    namespaceName: NamespaceNameSchema.exactOptional().openapi({
      description:
        "The name of the user's namespace. Set this to <code>aws</code> to get the public namespace.",
    }),
  })
  .openapi({ title: 'DescribeNamespaceRequest', required: [] })
  .openapi('DescribeNamespaceRequest')

const DissociateEntityFromThingResponseSchema = z
  .looseObject({})
  .openapi('DissociateEntityFromThingResponse')

const EntityTypeSchema = z
  .enum([
    'DEVICE',
    'SERVICE',
    'DEVICE_MODEL',
    'CAPABILITY',
    'STATE',
    'ACTION',
    'EVENT',
    'PROPERTY',
    'MAPPING',
    'ENUM',
  ])
  .openapi('EntityType')

const DissociateEntityFromThingRequestSchema = z
  .object({
    thingName: ThingNameSchema.openapi({ description: 'The name of the thing to disassociate.' }),
    entityType: EntityTypeSchema.openapi({
      description: 'The entity type from which to disassociate the thing.',
    }),
  })
  .openapi({ required: ['thingName', 'entityType'], title: 'DissociateEntityFromThingRequest' })
  .openapi('DissociateEntityFromThingRequest')

const EntityDescriptionSchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({ description: 'The entity ID.' }),
    arn: ArnSchema.exactOptional().openapi({ description: 'The entity ARN.' }),
    type: EntityTypeSchema.exactOptional().openapi({ description: 'The entity type.' }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'The time at which the entity was created.',
    }),
    definition: DefinitionDocumentSchema.exactOptional().openapi({
      description: 'The definition document of the entity.',
    }),
  })
  .openapi({ description: 'Describes the properties of an entity.', required: [] })
  .openapi('EntityDescription')

const EntityDescriptionsSchema = z.array(EntityDescriptionSchema).openapi('EntityDescriptions')

const GetEntitiesResponseSchema = z
  .object({
    descriptions: EntityDescriptionsSchema.exactOptional().openapi({
      description: 'An array of descriptions for the specified entities.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEntitiesResponse')

const UrnsSchema = z.array(UrnSchema).min(0).max(25).openapi('Urns')

const GetEntitiesRequestSchema = z
  .object({
    ids: UrnsSchema.openapi({
      description:
        '<p>An array of entity IDs.</p> <p>The IDs should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code> </p>',
    }),
    namespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "The version of the user's namespace. Defaults to the latest version of the user's namespace.",
    }),
  })
  .openapi({ required: ['ids'], title: 'GetEntitiesRequest' })
  .openapi('GetEntitiesRequest')

const FlowTemplateDescriptionSchema = z
  .object({
    summary: FlowTemplateSummarySchema.exactOptional().openapi({
      description: 'An object that contains summary information about a workflow.',
    }),
    definition: DefinitionDocumentSchema.exactOptional().openapi({
      description: "A workflow's definition document.",
    }),
    validatedNamespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "The version of the user's namespace against which the workflow was validated. Use this value in your system instance.",
    }),
  })
  .openapi({
    description: "An object that contains a workflow's definition and summary information.",
    required: [],
  })
  .openapi('FlowTemplateDescription')

const GetFlowTemplateResponseSchema = z
  .object({
    description: FlowTemplateDescriptionSchema.exactOptional().openapi({
      description: 'The object that describes the specified workflow.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetFlowTemplateResponse')

const GetFlowTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the workflow.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code> </p>',
    }),
    revisionNumber: VersionSchema.exactOptional().openapi({
      description: 'The number of the workflow revision to retrieve.',
    }),
  })
  .openapi({ required: ['id'], title: 'GetFlowTemplateRequest' })
  .openapi('GetFlowTemplateRequest')

const FlowTemplateSummariesSchema = z
  .array(FlowTemplateSummarySchema)
  .openapi('FlowTemplateSummaries')

const NextTokenSchema = z.string().openapi('NextToken')

const GetFlowTemplateRevisionsResponseSchema = z
  .object({
    summaries: FlowTemplateSummariesSchema.exactOptional().openapi({
      description: 'An array of objects that provide summary data about each revision.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetFlowTemplateRevisionsResponse')

const MaxResultsSchema = z.int().min(1).max(250).openapi('MaxResults')

const GetFlowTemplateRevisionsRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the workflow.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code> </p>',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
  })
  .openapi({ required: ['id'], title: 'GetFlowTemplateRevisionsRequest' })
  .openapi('GetFlowTemplateRevisionsRequest')

const NamespaceDeletionStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('NamespaceDeletionStatus')

const NamespaceDeletionStatusErrorCodesSchema = z
  .literal('VALIDATION_FAILED')
  .openapi('NamespaceDeletionStatusErrorCodes')

const StringSchema = z.string().openapi('String')

const GetNamespaceDeletionStatusResponseSchema = z
  .object({
    namespaceArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the namespace that is being deleted.',
    }),
    namespaceName: NamespaceNameSchema.exactOptional().openapi({
      description: 'The name of the namespace that is being deleted.',
    }),
    status: NamespaceDeletionStatusSchema.exactOptional().openapi({
      description: 'The status of the deletion request.',
    }),
    errorCode: NamespaceDeletionStatusErrorCodesSchema.exactOptional().openapi({
      description: 'An error code returned by the namespace deletion task.',
    }),
    errorMessage: StringSchema.exactOptional().openapi({
      description: 'An error code returned by the namespace deletion task.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetNamespaceDeletionStatusResponse')

const GetNamespaceDeletionStatusRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetNamespaceDeletionStatusRequest' })
  .openapi('GetNamespaceDeletionStatusRequest')

const DependencyRevisionSchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({ description: 'The ID of the workflow or system.' }),
    revisionNumber: VersionSchema.exactOptional().openapi({
      description: 'The revision number of the workflow or system.',
    }),
  })
  .openapi({
    description:
      'An object that contains the ID and revision number of a workflow or system that is part of a deployment.',
    required: [],
  })
  .openapi('DependencyRevision')

const DependencyRevisionsSchema = z.array(DependencyRevisionSchema).openapi('DependencyRevisions')

const SystemInstanceDescriptionSchema = z
  .object({
    summary: SystemInstanceSummarySchema.exactOptional().openapi({
      description: 'An object that contains summary information about a system instance.',
    }),
    definition: DefinitionDocumentSchema.exactOptional(),
    s3BucketName: S3BucketNameSchema.exactOptional().openapi({
      description:
        'The Amazon Simple Storage Service bucket where information about a system instance is stored.',
    }),
    metricsConfiguration: MetricsConfigurationSchema.exactOptional(),
    validatedNamespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "The version of the user's namespace against which the system instance was validated.",
    }),
    validatedDependencyRevisions: DependencyRevisionsSchema.exactOptional().openapi({
      description:
        'A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.',
    }),
    flowActionsRoleArn: RoleArnSchema.exactOptional().openapi({
      description:
        'The AWS Identity and Access Management (IAM) role that AWS IoT Things Graph assumes during flow execution in a cloud deployment. This role must have read and write permissionss to AWS Lambda and AWS IoT and to any other AWS services that the flow uses.',
    }),
  })
  .openapi({
    description: 'An object that contains a system instance definition and summary information.',
    required: [],
  })
  .openapi('SystemInstanceDescription')

const GetSystemInstanceResponseSchema = z
  .object({
    description: SystemInstanceDescriptionSchema.exactOptional().openapi({
      description: 'An object that describes the system instance.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSystemInstanceResponse')

const GetSystemInstanceRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the system deployment instance. This value is returned by <code>CreateSystemInstance</code>.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME</code> </p>',
    }),
  })
  .openapi({ required: ['id'], title: 'GetSystemInstanceRequest' })
  .openapi('GetSystemInstanceRequest')

const SystemTemplateDescriptionSchema = z
  .object({
    summary: SystemTemplateSummarySchema.exactOptional().openapi({
      description: 'An object that contains summary information about a system.',
    }),
    definition: DefinitionDocumentSchema.exactOptional().openapi({
      description: 'The definition document of a system.',
    }),
    validatedNamespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        'The namespace version against which the system was validated. Use this value in your system instance.',
    }),
  })
  .openapi({
    description: "An object that contains a system's definition document and summary information.",
    required: [],
  })
  .openapi('SystemTemplateDescription')

const GetSystemTemplateResponseSchema = z
  .object({
    description: SystemTemplateDescriptionSchema.exactOptional().openapi({
      description: 'An object that contains summary data about the system.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSystemTemplateResponse')

const GetSystemTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        "<p>The ID of the system to get. This ID must be in the user's namespace.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code> </p>",
    }),
    revisionNumber: VersionSchema.exactOptional().openapi({
      description: 'The number that specifies the revision of the system to get.',
    }),
  })
  .openapi({ required: ['id'], title: 'GetSystemTemplateRequest' })
  .openapi('GetSystemTemplateRequest')

const SystemTemplateSummariesSchema = z
  .array(SystemTemplateSummarySchema)
  .openapi('SystemTemplateSummaries')

const GetSystemTemplateRevisionsResponseSchema = z
  .object({
    summaries: SystemTemplateSummariesSchema.exactOptional().openapi({
      description:
        'An array of objects that contain summary data about the system template revisions.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSystemTemplateRevisionsResponse')

const GetSystemTemplateRevisionsRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the system template.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code> </p>',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
  })
  .openapi({ required: ['id'], title: 'GetSystemTemplateRevisionsRequest' })
  .openapi('GetSystemTemplateRevisionsRequest')

const UploadIdSchema = z.string().min(1).max(40).openapi('UploadId')

const UploadStatusSchema = z.enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED']).openapi('UploadStatus')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const GetUploadStatusResponseSchema = z
  .object({
    uploadId: UploadIdSchema.openapi({ description: 'The ID of the upload.' }),
    uploadStatus: UploadStatusSchema.openapi({
      description:
        'The status of the upload. The initial status is <code>IN_PROGRESS</code>. The response show all validation failures if the upload fails.',
    }),
    namespaceArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the upload.' }),
    namespaceName: NamespaceNameSchema.exactOptional().openapi({
      description: "The name of the upload's namespace.",
    }),
    namespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "The version of the user's namespace. Defaults to the latest version of the user's namespace.",
    }),
    failureReason: StringListSchema.exactOptional().openapi({
      description: 'The reason for an upload failure.',
    }),
    createdDate: TimestampSchema.openapi({
      description: 'The date at which the upload was created.',
    }),
  })
  .openapi({ required: ['uploadId', 'uploadStatus', 'createdDate'] })
  .openapi('GetUploadStatusResponse')

const GetUploadStatusRequestSchema = z
  .object({
    uploadId: UploadIdSchema.openapi({
      description:
        'The ID of the upload. This value is returned by the <code>UploadEntityDefinitions</code> action.',
    }),
  })
  .openapi({ required: ['uploadId'], title: 'GetUploadStatusRequest' })
  .openapi('GetUploadStatusRequest')

const FlowExecutionMessageIdSchema = z.string().openapi('FlowExecutionMessageId')

const FlowExecutionEventTypeSchema = z
  .enum([
    'EXECUTION_STARTED',
    'EXECUTION_FAILED',
    'EXECUTION_ABORTED',
    'EXECUTION_SUCCEEDED',
    'STEP_STARTED',
    'STEP_FAILED',
    'STEP_SUCCEEDED',
    'ACTIVITY_SCHEDULED',
    'ACTIVITY_STARTED',
    'ACTIVITY_FAILED',
    'ACTIVITY_SUCCEEDED',
    'START_FLOW_EXECUTION_TASK',
    'SCHEDULE_NEXT_READY_STEPS_TASK',
    'THING_ACTION_TASK',
    'THING_ACTION_TASK_FAILED',
    'THING_ACTION_TASK_SUCCEEDED',
    'ACKNOWLEDGE_TASK_MESSAGE',
  ])
  .openapi('FlowExecutionEventType')

const FlowExecutionMessagePayloadSchema = z.string().openapi('FlowExecutionMessagePayload')

const FlowExecutionMessageSchema = z
  .object({
    messageId: FlowExecutionMessageIdSchema.exactOptional().openapi({
      description: 'The unique identifier of the message.',
    }),
    eventType: FlowExecutionEventTypeSchema.exactOptional().openapi({
      description: 'The type of flow event .',
    }),
    timestamp: TimestampSchema.exactOptional().openapi({
      description: 'The date and time when the message was last updated.',
    }),
    payload: FlowExecutionMessagePayloadSchema.exactOptional().openapi({
      description: 'A string containing information about the flow event.',
    }),
  })
  .openapi({ description: 'An object that contains information about a flow event.', required: [] })
  .openapi('FlowExecutionMessage')

const FlowExecutionMessagesSchema = z
  .array(FlowExecutionMessageSchema)
  .openapi('FlowExecutionMessages')

const ListFlowExecutionMessagesResponseSchema = z
  .object({
    messages: FlowExecutionMessagesSchema.exactOptional().openapi({
      description:
        'A list of objects that contain information about events in the specified flow execution.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFlowExecutionMessagesResponse')

const FlowExecutionIdSchema = z.string().openapi('FlowExecutionId')

const ListFlowExecutionMessagesRequestSchema = z
  .object({
    flowExecutionId: FlowExecutionIdSchema.openapi({
      description: 'The ID of the flow execution.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
  })
  .openapi({ required: ['flowExecutionId'], title: 'ListFlowExecutionMessagesRequest' })
  .openapi('ListFlowExecutionMessagesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagListSchema.exactOptional().openapi({
      description: 'List of tags returned by the <code>ListTagsForResource</code> operation.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token that specifies the next page of results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ResourceArnSchema = z.string().min(1).max(2048).openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of tags to return.',
    }),
    resourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the resource whose tags are to be returned.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token that specifies the next page of results to return.',
    }),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const SearchEntitiesResponseSchema = z
  .object({
    descriptions: EntityDescriptionsSchema.exactOptional().openapi({
      description: 'An array of descriptions for each entity returned in the search result.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchEntitiesResponse')

const EntityTypesSchema = z.array(EntityTypeSchema).openapi('EntityTypes')

const EntityFilterNameSchema = z
  .enum(['NAME', 'NAMESPACE', 'SEMANTIC_TYPE_PATH', 'REFERENCED_ENTITY_ID'])
  .openapi('EntityFilterName')

const EntityFilterValueSchema = z.string().openapi('EntityFilterValue')

const EntityFilterValuesSchema = z.array(EntityFilterValueSchema).openapi('EntityFilterValues')

const EntityFilterSchema = z
  .object({
    name: EntityFilterNameSchema.exactOptional().openapi({
      description:
        'The name of the entity search filter field. <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example, you can filter on the ID of a property that is used in a state.',
    }),
    value: EntityFilterValuesSchema.exactOptional().openapi({
      description:
        'An array of string values for the search filter field. Multiple values function as AND criteria in the search.',
    }),
  })
  .openapi({
    description:
      'An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.',
    required: [],
  })
  .openapi('EntityFilter')

const EntityFiltersSchema = z.array(EntityFilterSchema).openapi('EntityFilters')

const SearchEntitiesRequestSchema = z
  .object({
    entityTypes: EntityTypesSchema.openapi({
      description: 'The entity types for which to search.',
    }),
    filters: EntityFiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional filter to apply to the search. Valid filters are <code>NAME</code> <code>NAMESPACE</code>, <code>SEMANTIC_TYPE_PATH</code> and <code>REFERENCED_ENTITY_ID</code>. <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example, you can filter on the ID of a property that is used in a state.</p> <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
    namespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "The version of the user's namespace. Defaults to the latest version of the user's namespace.",
    }),
  })
  .openapi({ required: ['entityTypes'], title: 'SearchEntitiesRequest' })
  .openapi('SearchEntitiesRequest')

const FlowExecutionStatusSchema = z
  .enum(['RUNNING', 'ABORTED', 'SUCCEEDED', 'FAILED'])
  .openapi('FlowExecutionStatus')

const FlowExecutionSummarySchema = z
  .object({
    flowExecutionId: FlowExecutionIdSchema.exactOptional().openapi({
      description: 'The ID of the flow execution.',
    }),
    status: FlowExecutionStatusSchema.exactOptional().openapi({
      description: 'The current status of the flow execution.',
    }),
    systemInstanceId: UrnSchema.exactOptional().openapi({
      description: 'The ID of the system instance that contains the flow.',
    }),
    flowTemplateId: UrnSchema.exactOptional().openapi({ description: 'The ID of the flow.' }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'The date and time when the flow execution summary was created.',
    }),
    updatedAt: TimestampSchema.exactOptional().openapi({
      description: 'The date and time when the flow execution summary was last updated.',
    }),
  })
  .openapi({
    description: 'An object that contains summary information about a flow execution.',
    required: [],
  })
  .openapi('FlowExecutionSummary')

const FlowExecutionSummariesSchema = z
  .array(FlowExecutionSummarySchema)
  .openapi('FlowExecutionSummaries')

const SearchFlowExecutionsResponseSchema = z
  .object({
    summaries: FlowExecutionSummariesSchema.exactOptional().openapi({
      description:
        'An array of objects that contain summary information about each workflow execution in the result set.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchFlowExecutionsResponse')

const SearchFlowExecutionsRequestSchema = z
  .object({
    systemInstanceId: UrnSchema.openapi({
      description: 'The ID of the system instance that contains the flow.',
    }),
    flowExecutionId: FlowExecutionIdSchema.exactOptional().openapi({
      description: 'The ID of a flow execution.',
    }),
    startTime: TimestampSchema.exactOptional().openapi({
      description: 'The date and time of the earliest flow execution to return.',
    }),
    endTime: TimestampSchema.exactOptional().openapi({
      description: 'The date and time of the latest flow execution to return.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
  })
  .openapi({ required: ['systemInstanceId'], title: 'SearchFlowExecutionsRequest' })
  .openapi('SearchFlowExecutionsRequest')

const SearchFlowTemplatesResponseSchema = z
  .object({
    summaries: FlowTemplateSummariesSchema.exactOptional().openapi({
      description:
        'An array of objects that contain summary information about each workflow in the result set.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchFlowTemplatesResponse')

const FlowTemplateFilterNameSchema = z.literal('DEVICE_MODEL_ID').openapi('FlowTemplateFilterName')

const FlowTemplateFilterValueSchema = z
  .string()
  .openapi({
    pattern:
      '^urn:tdm:(([a-z]{2}-(gov-)?[a-z]{4,9}-[0-9]{1,3}/[0-9]+/)*[\\p{Alnum}_]+(/[\\p{Alnum}_]+)*):([\\p{Alpha}]*):([\\p{Alnum}_]+(/[\\p{Alnum}_]+)*)$',
  })
  .openapi('FlowTemplateFilterValue')

const FlowTemplateFilterValuesSchema = z
  .array(FlowTemplateFilterValueSchema)
  .openapi('FlowTemplateFilterValues')

const FlowTemplateFilterSchema = z
  .object({
    name: FlowTemplateFilterNameSchema.openapi({
      description: 'The name of the search filter field.',
    }),
    value: FlowTemplateFilterValuesSchema.openapi({
      description:
        'An array of string values for the search filter field. Multiple values function as AND criteria in the search.',
    }),
  })
  .openapi({
    required: ['name', 'value'],
    description: 'An object that filters a workflow search.',
  })
  .openapi('FlowTemplateFilter')

const FlowTemplateFiltersSchema = z.array(FlowTemplateFilterSchema).openapi('FlowTemplateFilters')

const SearchFlowTemplatesRequestSchema = z
  .object({
    filters: FlowTemplateFiltersSchema.exactOptional().openapi({
      description:
        'An array of objects that limit the result set. The only valid filter is <code>DEVICE_MODEL_ID</code>.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
  })
  .openapi({ title: 'SearchFlowTemplatesRequest', required: [] })
  .openapi('SearchFlowTemplatesRequest')

const SystemInstanceSummariesSchema = z
  .array(SystemInstanceSummarySchema)
  .openapi('SystemInstanceSummaries')

const SearchSystemInstancesResponseSchema = z
  .object({
    summaries: SystemInstanceSummariesSchema.exactOptional().openapi({
      description:
        'An array of objects that contain summary data abour the system instances in the result set.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchSystemInstancesResponse')

const SystemInstanceFilterNameSchema = z
  .enum(['SYSTEM_TEMPLATE_ID', 'STATUS', 'GREENGRASS_GROUP_NAME'])
  .openapi('SystemInstanceFilterName')

const SystemInstanceFilterValueSchema = z.string().openapi('SystemInstanceFilterValue')

const SystemInstanceFilterValuesSchema = z
  .array(SystemInstanceFilterValueSchema)
  .openapi('SystemInstanceFilterValues')

const SystemInstanceFilterSchema = z
  .object({
    name: SystemInstanceFilterNameSchema.exactOptional().openapi({
      description: 'The name of the search filter field.',
    }),
    value: SystemInstanceFilterValuesSchema.exactOptional().openapi({
      description:
        'An array of string values for the search filter field. Multiple values function as AND criteria in the search. ',
    }),
  })
  .openapi({
    description:
      'An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.',
    required: [],
  })
  .openapi('SystemInstanceFilter')

const SystemInstanceFiltersSchema = z
  .array(SystemInstanceFilterSchema)
  .openapi('SystemInstanceFilters')

const SearchSystemInstancesRequestSchema = z
  .object({
    filters: SystemInstanceFiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional filter to apply to the search. Valid filters are <code>SYSTEM_TEMPLATE_ID</code>, <code>STATUS</code>, and <code>GREENGRASS_GROUP_NAME</code>.</p> <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
  })
  .openapi({ title: 'SearchSystemInstancesRequest', required: [] })
  .openapi('SearchSystemInstancesRequest')

const SearchSystemTemplatesResponseSchema = z
  .object({
    summaries: SystemTemplateSummariesSchema.exactOptional().openapi({
      description:
        'An array of objects that contain summary information about each system deployment in the result set.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchSystemTemplatesResponse')

const SystemTemplateFilterNameSchema = z
  .literal('FLOW_TEMPLATE_ID')
  .openapi('SystemTemplateFilterName')

const SystemTemplateFilterValueSchema = z
  .string()
  .openapi({
    pattern:
      '^urn:tdm:(([a-z]{2}-(gov-)?[a-z]{4,9}-[0-9]{1,3}/[0-9]+/)*[\\p{Alnum}_]+(/[\\p{Alnum}_]+)*):([\\p{Alpha}]*):([\\p{Alnum}_]+(/[\\p{Alnum}_]+)*)$',
  })
  .openapi('SystemTemplateFilterValue')

const SystemTemplateFilterValuesSchema = z
  .array(SystemTemplateFilterValueSchema)
  .openapi('SystemTemplateFilterValues')

const SystemTemplateFilterSchema = z
  .object({
    name: SystemTemplateFilterNameSchema.openapi({
      description: 'The name of the system search filter field.',
    }),
    value: SystemTemplateFilterValuesSchema.openapi({
      description:
        'An array of string values for the search filter field. Multiple values function as AND criteria in the search.',
    }),
  })
  .openapi({ required: ['name', 'value'], description: 'An object that filters a system search.' })
  .openapi('SystemTemplateFilter')

const SystemTemplateFiltersSchema = z
  .array(SystemTemplateFilterSchema)
  .openapi('SystemTemplateFilters')

const SearchSystemTemplatesRequestSchema = z
  .object({
    filters: SystemTemplateFiltersSchema.exactOptional().openapi({
      description:
        'An array of filters that limit the result set. The only valid filter is <code>FLOW_TEMPLATE_ID</code>.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
  })
  .openapi({ title: 'SearchSystemTemplatesRequest', required: [] })
  .openapi('SearchSystemTemplatesRequest')

const ThingArnSchema = z.string().openapi('ThingArn')

const ThingSchema = z
  .object({
    thingArn: ThingArnSchema.exactOptional().openapi({ description: 'The ARN of the thing.' }),
    thingName: ThingNameSchema.exactOptional().openapi({ description: 'The name of the thing.' }),
  })
  .openapi({ description: 'An AWS IoT thing.', required: [] })
  .openapi('Thing')

const ThingsSchema = z.array(ThingSchema).openapi('Things')

const SearchThingsResponseSchema = z
  .object({
    things: ThingsSchema.exactOptional().openapi({
      description: 'An array of things in the result set.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The string to specify as <code>nextToken</code> when you request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchThingsResponse')

const SearchThingsRequestSchema = z
  .object({
    entityId: UrnSchema.openapi({
      description:
        '<p>The ID of the entity to which the things are associated.</p> <p>The IDs should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code> </p>',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        "The string that specifies the next page of results. Use this when you're paginating results.",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of results to return in the response.',
    }),
    namespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "The version of the user's namespace. Defaults to the latest version of the user's namespace.",
    }),
  })
  .openapi({ required: ['entityId'], title: 'SearchThingsRequest' })
  .openapi('SearchThingsRequest')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    resourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the resource whose tags are returned.',
    }),
    tags: TagListSchema.openapi({ description: 'A list of tags to add to the resource.&gt;' }),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UndeploySystemInstanceResponseSchema = z
  .object({
    summary: SystemInstanceSummarySchema.exactOptional().openapi({
      description:
        'An object that contains summary information about the system instance that was removed from its target.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UndeploySystemInstanceResponse')

const UndeploySystemInstanceRequestSchema = z
  .object({
    id: UrnSchema.exactOptional().openapi({
      description: 'The ID of the system instance to remove from its target.',
    }),
  })
  .openapi({ title: 'UndeploySystemInstanceRequest', required: [] })
  .openapi('UndeploySystemInstanceRequest')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the resource whose tags are to be removed.',
    }),
    tagKeys: TagKeyListSchema.openapi({
      description:
        '<p>A list of tag key names to remove from the resource. You don\'t specify the value. Both the key and its associated value are removed. </p> <p>This parameter to the API requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html#cli-using-param-json">Using JSON for Parameters</a> in the <i>AWS CLI User Guide</i>. </p>',
    }),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateFlowTemplateResponseSchema = z
  .object({
    summary: FlowTemplateSummarySchema.exactOptional().openapi({
      description: 'An object containing summary information about the updated workflow.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlowTemplateResponse')

const UpdateFlowTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the workflow to be updated.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code> </p>',
    }),
    definition: DefinitionDocumentSchema.openapi({
      description:
        'The <code>DefinitionDocument</code> that contains the updated workflow definition.',
    }),
    compatibleNamespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "<p>The version of the user's namespace.</p> <p>If no value is specified, the latest version is used by default. Use the <code>GetFlowTemplateRevisions</code> if you want to find earlier revisions of the flow to update.</p>",
    }),
  })
  .openapi({ required: ['id', 'definition'], title: 'UpdateFlowTemplateRequest' })
  .openapi('UpdateFlowTemplateRequest')

const UpdateSystemTemplateResponseSchema = z
  .object({
    summary: SystemTemplateSummarySchema.exactOptional().openapi({
      description: 'An object containing summary information about the updated system.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemTemplateResponse')

const UpdateSystemTemplateRequestSchema = z
  .object({
    id: UrnSchema.openapi({
      description:
        '<p>The ID of the system to be updated.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code> </p>',
    }),
    definition: DefinitionDocumentSchema.openapi({
      description:
        'The <code>DefinitionDocument</code> that contains the updated system definition.',
    }),
    compatibleNamespaceVersion: VersionSchema.exactOptional().openapi({
      description:
        "<p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p> <p>If no value is specified, the latest version is used by default.</p>",
    }),
  })
  .openapi({ required: ['id', 'definition'], title: 'UpdateSystemTemplateRequest' })
  .openapi('UpdateSystemTemplateRequest')

const UploadEntityDefinitionsResponseSchema = z
  .object({
    uploadId: UploadIdSchema.openapi({
      description:
        'The ID that specifies the upload action. You can use this to track the status of the upload.',
    }),
  })
  .openapi({ required: ['uploadId'] })
  .openapi('UploadEntityDefinitionsResponse')

const SyncWithPublicNamespaceSchema = z.boolean().openapi('SyncWithPublicNamespace')

const DeprecateExistingEntitiesSchema = z.boolean().openapi('DeprecateExistingEntities')

const UploadEntityDefinitionsRequestSchema = z
  .object({
    document: DefinitionDocumentSchema.exactOptional().openapi({
      description: 'The <code>DefinitionDocument</code> that defines the updated entities.',
    }),
    syncWithPublicNamespace: SyncWithPublicNamespaceSchema.exactOptional().openapi({
      description:
        'A Boolean that specifies whether to synchronize with the latest version of the public namespace. If set to <code>true</code>, the upload will create a new namespace version.',
    }),
    deprecateExistingEntities: DeprecateExistingEntitiesSchema.exactOptional().openapi({
      description:
        'A Boolean that specifies whether to deprecate all entities in the latest version before uploading the new <code>DefinitionDocument</code>. If set to <code>true</code>, the upload will create a new namespace version.',
    }),
  })
  .openapi({ title: 'UploadEntityDefinitionsRequest', required: [] })
  .openapi('UploadEntityDefinitionsRequest')

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

export const postXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing',
  description:
    "<p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>",
  operationId: 'AssociateEntityToThing',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.AssociateEntityToThing')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.AssociateEntityToThing'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateEntityToThingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateEntityToThingResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate',
  description:
    "Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.",
  operationId: 'CreateFlowTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.CreateFlowTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.CreateFlowTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFlowTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFlowTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance',
  description:
    "<p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>",
  operationId: 'CreateSystemInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.CreateSystemInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.CreateSystemInstance'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSystemInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSystemInstanceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate',
  description:
    "Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.",
  operationId: 'CreateSystemTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.CreateSystemTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.CreateSystemTemplate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSystemTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSystemTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate',
  description:
    'Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).',
  operationId: 'DeleteFlowTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DeleteFlowTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.DeleteFlowTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFlowTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFlowTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace',
  description:
    'Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.',
  operationId: 'DeleteNamespace',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DeleteNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.DeleteNamespace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNamespaceResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance',
  description:
    '<p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>',
  operationId: 'DeleteSystemInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DeleteSystemInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.DeleteSystemInstance'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSystemInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSystemInstanceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate',
  description:
    "Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.",
  operationId: 'DeleteSystemTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DeleteSystemTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.DeleteSystemTemplate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSystemTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSystemTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance',
  description:
    '<p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller\'s behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>',
  operationId: 'DeploySystemInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DeploySystemInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.DeploySystemInstance'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeploySystemInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeploySystemInstanceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate',
  description:
    "Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.",
  operationId: 'DeprecateFlowTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DeprecateFlowTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.DeprecateFlowTemplate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeprecateFlowTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeprecateFlowTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate',
  description: 'Deprecates the specified system.',
  operationId: 'DeprecateSystemTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DeprecateSystemTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.DeprecateSystemTemplate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeprecateSystemTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeprecateSystemTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace',
  description:
    "Gets the latest version of the user's namespace and the public version that it is tracking.",
  operationId: 'DescribeNamespace',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.DescribeNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.DescribeNamespace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeNamespaceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing',
    description:
      'Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.',
    operationId: 'DissociateEntityFromThing',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('IotThingsGraphFrontEndService.DissociateEntityFromThing')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['IotThingsGraphFrontEndService.DissociateEntityFromThing'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DissociateEntityFromThingRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DissociateEntityFromThingResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
    deprecated: true,
  })

export const postXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities',
  description:
    "<p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>",
  operationId: 'GetEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.GetEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.GetEntities'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetEntitiesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEntitiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate',
  description:
    'Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.',
  operationId: 'GetFlowTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.GetFlowTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.GetFlowTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFlowTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFlowTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions',
    description:
      "Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.",
    operationId: 'GetFlowTemplateRevisions',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('IotThingsGraphFrontEndService.GetFlowTemplateRevisions')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['IotThingsGraphFrontEndService.GetFlowTemplateRevisions'],
              },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetFlowTemplateRevisionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetFlowTemplateRevisionsResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
    deprecated: true,
  },
)

export const postXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus',
    description: 'Gets the status of a namespace deletion task.',
    operationId: 'GetNamespaceDeletionStatus',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('IotThingsGraphFrontEndService.GetNamespaceDeletionStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['IotThingsGraphFrontEndService.GetNamespaceDeletionStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetNamespaceDeletionStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetNamespaceDeletionStatusResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
    deprecated: true,
  })

export const postXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance',
  description: 'Gets a system instance.',
  operationId: 'GetSystemInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.GetSystemInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.GetSystemInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSystemInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSystemInstanceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate',
  description: 'Gets a system.',
  operationId: 'GetSystemTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.GetSystemTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.GetSystemTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSystemTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSystemTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions',
    description:
      "Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.",
    operationId: 'GetSystemTemplateRevisions',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('IotThingsGraphFrontEndService.GetSystemTemplateRevisions')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['IotThingsGraphFrontEndService.GetSystemTemplateRevisions'],
              },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetSystemTemplateRevisionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetSystemTemplateRevisionsResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
    deprecated: true,
  })

export const postXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus',
  description: 'Gets the status of the specified upload.',
  operationId: 'GetUploadStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.GetUploadStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.GetUploadStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetUploadStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUploadStatusResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages',
    description:
      'Returns a list of objects that contain information about events in a flow execution.',
    operationId: 'ListFlowExecutionMessages',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('IotThingsGraphFrontEndService.ListFlowExecutionMessages')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['IotThingsGraphFrontEndService.ListFlowExecutionMessages'],
              },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListFlowExecutionMessagesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListFlowExecutionMessagesResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
    deprecated: true,
  })

export const postXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource',
  description: 'Lists all tags on an AWS IoT Things Graph resource.',
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
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.ListTagsForResource'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities',
  description:
    "Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.",
  operationId: 'SearchEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.SearchEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.SearchEntities'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchEntitiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions',
  description: 'Searches for AWS IoT Things Graph workflow execution instances.',
  operationId: 'SearchFlowExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.SearchFlowExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.SearchFlowExecutions'],
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchFlowExecutionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchFlowExecutionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates',
  description: 'Searches for summary information about workflows.',
  operationId: 'SearchFlowTemplates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.SearchFlowTemplates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.SearchFlowTemplates'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchFlowTemplatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchFlowTemplatesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances',
  description: "Searches for system instances in the user's account.",
  operationId: 'SearchSystemInstances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.SearchSystemInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.SearchSystemInstances'],
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchSystemInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchSystemInstancesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates',
  description:
    "Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.",
  operationId: 'SearchSystemTemplates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.SearchSystemTemplates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.SearchSystemTemplates'],
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchSystemTemplatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchSystemTemplatesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceSearchThingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings',
  description:
    "<p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>",
  operationId: 'SearchThings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.SearchThings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.SearchThings'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchThingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchThingsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.TagResource',
  description: 'Creates a tag for the specified resource.',
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
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance',
  description: 'Removes a system instance from its target (Cloud or Greengrass).',
  operationId: 'UndeploySystemInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.UndeploySystemInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.UndeploySystemInstance'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UndeploySystemInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UndeploySystemInstanceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource',
  description: 'Removes a tag from the specified resource.',
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
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate',
  description:
    "Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. ",
  operationId: 'UpdateFlowTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.UpdateFlowTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IotThingsGraphFrontEndService.UpdateFlowTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFlowTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlowTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate',
  description:
    "Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.",
  operationId: 'UpdateSystemTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.UpdateSystemTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.UpdateSystemTemplate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSystemTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSystemTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions',
  description:
    "<p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>",
  operationId: 'UploadEntityDefinitions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('IotThingsGraphFrontEndService.UploadEntityDefinitions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['IotThingsGraphFrontEndService.UploadEntityDefinitions'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UploadEntityDefinitionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UploadEntityDefinitionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})
