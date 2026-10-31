import { createRoute, z } from '@hono/zod-openapi'

const ArnSchema = z
  .string()
  .regex(
    /^arn:aws:[A-Za-z0-9][A-Za-z0-9_\/.-]{0,62}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,1023}$/,
  )
  .min(1)
  .max(2048)
  .openapi('Arn')

const UUIDSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .openapi('UUID')

const NameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\._\-]+$/)
  .min(1)
  .max(255)
  .openapi('Name')

const DescriptionSchema = z.string().regex(/.*/).min(1).max(1000).openapi('Description')

const NonBlankStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(255)
  .openapi('NonBlankString')

const SourceURISchema = z
  .string()
  .regex(
    /^(\w+\:\/\/[\w.-]+[\w\/!@#+=.-]+$)|(\w+\:\/\/[\w.-]+[\w\/!@#+=.-]+[\w\/!@#+=.-]+[\w\/!@#+=.,-]+$)/,
  )
  .min(1)
  .max(1000)
  .openapi('SourceURI')

const ObjectSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\._\-]+$/)
  .min(1)
  .max(255)
  .openapi('Object')

const ScheduleConfigurationSchema = z
  .object({
    FirstExecutionFrom: NonBlankStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format.',
        }),
    ).exactOptional(),
    Object: ObjectSchema.and(
      z.any().openapi({ description: 'The name of the object to pull from the data source.' }),
    ).exactOptional(),
    ScheduleExpression: NonBlankStringSchema.and(
      z.any().openapi({ description: 'How often the data should be pulled from data source.' }),
    ),
  })
  .openapi({
    required: ['ScheduleExpression'],
    description: 'The name of the data and how often it should be pulled from the source.',
  })
  .openapi('ScheduleConfiguration')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const IdempotencyTokenSchema = z.string().regex(/.*/).min(1).max(2048).openapi('IdempotencyToken')

const NonBlankLongStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(200)
  .openapi('NonBlankLongString')

const FolderListSchema = z.array(NonBlankLongStringSchema).min(1).max(10).openapi('FolderList')

const FieldsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\._\-]+$/)
  .min(1)
  .max(255)
  .openapi('Fields')

const FieldsListSchema = z.array(FieldsSchema).min(1).max(2048).openapi('FieldsList')

const FieldsMapSchema = z.record(z.string(), FieldsListSchema).openapi('FieldsMap')

const FileConfigurationSchema = z
  .object({
    Folders: FolderListSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifiers for the source folders to pull all files from recursively.',
        }),
    ),
    Filters: FieldsMapSchema.and(
      z
        .any()
        .openapi({ description: 'Restrictions for what files should be pulled from the source.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Folders'],
    description: 'The configuration for what files should be pulled from the source.',
  })
  .openapi('FileConfiguration')

const ObjectConfigurationSchema = z
  .record(z.string(), FieldsMapSchema)
  .openapi({ description: 'The configuration for what data should be pulled from the source.' })
  .openapi('ObjectConfiguration')

const CreateDataIntegrationResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN)' }),
    ).exactOptional(),
    Id: UUIDSchema.and(z.any().openapi({ description: 'A unique identifier.' })).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the DataIntegration.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the DataIntegration.' }),
    ).exactOptional(),
    KmsKey: NonBlankStringSchema.and(
      z.any().openapi({ description: 'The KMS key for the DataIntegration.' }),
    ).exactOptional(),
    SourceURI: SourceURISchema.and(
      z.any().openapi({ description: 'The URI of the data source.' }),
    ).exactOptional(),
    ScheduleConfiguration: ScheduleConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the data and how often it should be pulled from the source.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ).exactOptional(),
    ClientToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ).exactOptional(),
    FileConfiguration: FileConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for what files should be pulled from the source.',
        }),
    ).exactOptional(),
    ObjectConfiguration: ObjectConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for what data should be pulled from the source.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDataIntegrationResponse')

const InternalServiceErrorSchema = z.any().openapi('InternalServiceError')

const ResourceQuotaExceededExceptionSchema = z.any().openapi('ResourceQuotaExceededException')

const DuplicateResourceExceptionSchema = z.any().openapi('DuplicateResourceException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const CreateEventIntegrationResponseSchema = z
  .object({
    EventIntegrationArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the event integration. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEventIntegrationResponse')

const SourceSchema = z
  .string()
  .regex(/^aws\.partner\/.*$/)
  .min(1)
  .max(256)
  .openapi('Source')

const DeleteDataIntegrationResponseSchema = z.object({}).openapi('DeleteDataIntegrationResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeleteEventIntegrationResponseSchema = z.object({}).openapi('DeleteEventIntegrationResponse')

const GetDataIntegrationResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the DataIntegration.' }),
    ).exactOptional(),
    Id: UUIDSchema.and(z.any().openapi({ description: 'A unique identifier.' })).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the DataIntegration.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The KMS key for the DataIntegration.' }),
    ).exactOptional(),
    KmsKey: NonBlankStringSchema.and(
      z.any().openapi({ description: 'The KMS key for the DataIntegration.' }),
    ).exactOptional(),
    SourceURI: SourceURISchema.and(
      z.any().openapi({ description: 'The URI of the data source.' }),
    ).exactOptional(),
    ScheduleConfiguration: ScheduleConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the data and how often it should be pulled from the source.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ).exactOptional(),
    FileConfiguration: FileConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for what files should be pulled from the source.',
        }),
    ).exactOptional(),
    ObjectConfiguration: ObjectConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for what data should be pulled from the source.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataIntegrationResponse')

const EventBridgeBusSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\._\-]+$/)
  .min(1)
  .max(255)
  .openapi('EventBridgeBus')

const EventFilterSchema = z
  .object({
    Source: SourceSchema.and(z.any().openapi({ description: 'The source of the events.' })),
  })
  .openapi({ required: ['Source'], description: 'The event filter.' })
  .openapi('EventFilter')

const GetEventIntegrationResponseSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the event integration. ' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the event integration.' }),
    ).exactOptional(),
    EventIntegrationArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the event integration.' }),
    ).exactOptional(),
    EventBridgeBus: EventBridgeBusSchema.and(
      z.any().openapi({ description: 'The EventBridge bus.' }),
    ).exactOptional(),
    EventFilter: EventFilterSchema.and(
      z.any().openapi({ description: 'The event filter.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventIntegrationResponse')

const ClientIdSchema = z.string().regex(/.*/).min(1).max(255).openapi('ClientId')

const DataIntegrationAssociationSummarySchema = z
  .object({
    DataIntegrationAssociationArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the DataIntegration association.',
        }),
    ).exactOptional(),
    DataIntegrationArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the DataIntegration.' }),
    ).exactOptional(),
    ClientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the client that is associated with the DataIntegration association.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary information about the DataIntegration association.',
    required: [],
  })
  .openapi('DataIntegrationAssociationSummary')

const DataIntegrationAssociationsListSchema = z
  .array(DataIntegrationAssociationSummarySchema)
  .min(1)
  .max(50)
  .openapi('DataIntegrationAssociationsList')

const NextTokenSchema = z.string().regex(/.*/).min(1).max(1000).openapi('NextToken')

const ListDataIntegrationAssociationsResponseSchema = z
  .object({
    DataIntegrationAssociations: DataIntegrationAssociationsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) and unique ID of the DataIntegration association.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataIntegrationAssociationsResponse')

const DataIntegrationSummarySchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the DataIntegration.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the DataIntegration.' }),
    ).exactOptional(),
    SourceURI: SourceURISchema.and(
      z.any().openapi({ description: 'The URI of the data source.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about the DataIntegration.', required: [] })
  .openapi('DataIntegrationSummary')

const DataIntegrationsListSchema = z
  .array(DataIntegrationSummarySchema)
  .min(1)
  .max(50)
  .openapi('DataIntegrationsList')

const ListDataIntegrationsResponseSchema = z
  .object({
    DataIntegrations: DataIntegrationsListSchema.and(
      z.any().openapi({ description: 'The DataIntegrations associated with this account.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataIntegrationsResponse')

const EventBridgeRuleNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\._\-]+$/)
  .min(1)
  .max(2048)
  .openapi('EventBridgeRuleName')

const ClientAssociationMetadataSchema = z
  .record(z.string(), NonBlankStringSchema)
  .openapi('ClientAssociationMetadata')

const EventIntegrationAssociationSchema = z
  .object({
    EventIntegrationAssociationArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) for the event integration association.',
        }),
    ).exactOptional(),
    EventIntegrationAssociationId: UUIDSchema.and(
      z.any().openapi({ description: 'The identifier for the event integration association.' }),
    ).exactOptional(),
    EventIntegrationName: NameSchema.and(
      z.any().openapi({ description: 'The name of the event integration.' }),
    ).exactOptional(),
    ClientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the client that is associated with the event integration.',
        }),
    ).exactOptional(),
    EventBridgeRuleName: EventBridgeRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the EventBridge rule.' }),
    ).exactOptional(),
    ClientAssociationMetadata: ClientAssociationMetadataSchema.and(
      z.any().openapi({ description: 'The metadata associated with the client.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The event integration association.', required: [] })
  .openapi('EventIntegrationAssociation')

const EventIntegrationAssociationsListSchema = z
  .array(EventIntegrationAssociationSchema)
  .min(1)
  .max(50)
  .openapi('EventIntegrationAssociationsList')

const ListEventIntegrationAssociationsResponseSchema = z
  .object({
    EventIntegrationAssociations: EventIntegrationAssociationsListSchema.and(
      z.any().openapi({ description: 'The event integration associations.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventIntegrationAssociationsResponse')

const EventIntegrationSchema = z
  .object({
    EventIntegrationArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the event integration.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the event integration.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The event integration description.' }),
    ).exactOptional(),
    EventFilter: EventFilterSchema.and(
      z.any().openapi({ description: 'The event integration filter.' }),
    ).exactOptional(),
    EventBridgeBus: EventBridgeBusSchema.and(
      z.any().openapi({ description: 'The Amazon EventBridge bus for the event integration.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The event integration.', required: [] })
  .openapi('EventIntegration')

const EventIntegrationsListSchema = z
  .array(EventIntegrationSchema)
  .min(1)
  .max(50)
  .openapi('EventIntegrationsList')

const ListEventIntegrationsResponseSchema = z
  .object({
    EventIntegrations: EventIntegrationsListSchema.and(
      z.any().openapi({ description: 'The event integrations.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventIntegrationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateDataIntegrationResponseSchema = z.object({}).openapi('UpdateDataIntegrationResponse')

const UpdateEventIntegrationResponseSchema = z.object({}).openapi('UpdateEventIntegrationResponse')

const CreateDataIntegrationRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the DataIntegration.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the DataIntegration.' }),
    ).exactOptional(),
    KmsKey: NonBlankStringSchema.and(
      z.any().openapi({ description: 'The KMS key for the DataIntegration.' }),
    ),
    SourceURI: SourceURISchema.and(z.any().openapi({ description: 'The URI of the data source.' })),
    ScheduleConfig: ScheduleConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the data and how often it should be pulled from the source.',
        }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ).exactOptional(),
    ClientToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ).exactOptional(),
    FileConfiguration: FileConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for what files should be pulled from the source.',
        }),
    ).exactOptional(),
    ObjectConfiguration: ObjectConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for what data should be pulled from the source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'KmsKey', 'SourceURI', 'ScheduleConfig'],
    title: 'CreateDataIntegrationRequest',
  })
  .openapi('CreateDataIntegrationRequest')

const CreateEventIntegrationRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the event integration.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the event integration.' }),
    ).exactOptional(),
    EventFilter: EventFilterSchema.and(z.any().openapi({ description: 'The event filter.' })),
    EventBridgeBus: EventBridgeBusSchema.and(
      z.any().openapi({ description: 'The EventBridge bus.' }),
    ),
    ClientToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'EventFilter', 'EventBridgeBus'],
    title: 'CreateEventIntegrationRequest',
  })
  .openapi('CreateEventIntegrationRequest')

const IdentifierSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(255)
  .openapi('Identifier')

const DeleteDataIntegrationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDataIntegrationRequest' })
  .openapi('DeleteDataIntegrationRequest')

const DeleteEventIntegrationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEventIntegrationRequest' })
  .openapi('DeleteEventIntegrationRequest')

const GetDataIntegrationRequestSchema = z
  .object({})
  .openapi({ title: 'GetDataIntegrationRequest' })
  .openapi('GetDataIntegrationRequest')

const GetEventIntegrationRequestSchema = z
  .object({})
  .openapi({ title: 'GetEventIntegrationRequest' })
  .openapi('GetEventIntegrationRequest')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const ListDataIntegrationAssociationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDataIntegrationAssociationsRequest' })
  .openapi('ListDataIntegrationAssociationsRequest')

const ListDataIntegrationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDataIntegrationsRequest' })
  .openapi('ListDataIntegrationsRequest')

const ListEventIntegrationAssociationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEventIntegrationAssociationsRequest' })
  .openapi('ListEventIntegrationAssociationsRequest')

const ListEventIntegrationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEventIntegrationsRequest' })
  .openapi('ListEventIntegrationsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDataIntegrationRequestSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the DataIntegration.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the DataIntegration.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDataIntegrationRequest', required: [] })
  .openapi('UpdateDataIntegrationRequest')

const UpdateEventIntegrationRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the event inegration.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEventIntegrationRequest', required: [] })
  .openapi('UpdateEventIntegrationRequest')

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

export const getDataIntegrationsRoute = createRoute({
  method: 'get',
  path: '/dataIntegrations',
  description:
    '<p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>',
  operationId: 'ListDataIntegrations',
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
        .regex(/.*/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 1000 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataIntegrationsResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDataIntegrationsRoute = createRoute({
  method: 'post',
  path: '/dataIntegrations',
  description:
    '<p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>',
  operationId: 'CreateDataIntegration',
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
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9\/\._\-]+$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the DataIntegration.' }),
              Description: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'A description of the DataIntegration.' }),
              KmsKey: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The KMS key for the DataIntegration.' }),
              SourceURI: z
                .string()
                .regex(
                  /^(\w+\:\/\/[\w.-]+[\w\/!@#+=.-]+$)|(\w+\:\/\/[\w.-]+[\w\/!@#+=.-]+[\w\/!@#+=.-]+[\w\/!@#+=.,-]+$)/,
                )
                .min(1)
                .max(1000)
                .openapi({ description: 'The URI of the data source.' }),
              ScheduleConfig: z
                .object({
                  FirstExecutionFrom: NonBlankStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format.',
                      }),
                  ).exactOptional(),
                  Object: ObjectSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The name of the object to pull from the data source.',
                      }),
                  ).exactOptional(),
                  ScheduleExpression: NonBlankStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'How often the data should be pulled from data source.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The name of the data and how often it should be pulled from the source.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
                }),
              ClientToken: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
                }),
              FileConfiguration: z
                .object({
                  Folders: FolderListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Identifiers for the source folders to pull all files from recursively.',
                      }),
                  ).exactOptional(),
                  Filters: FieldsMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Restrictions for what files should be pulled from the source.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The configuration for what files should be pulled from the source.',
                  required: [],
                }),
              ObjectConfiguration: z
                .record(z.string(), FieldsMapSchema)
                .exactOptional()
                .openapi({
                  description: 'The configuration for what data should be pulled from the source.',
                }),
            })
            .openapi({ required: ['Name', 'KmsKey', 'SourceURI', 'ScheduleConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ResourceQuotaExceededException',
      content: { 'application/json': { schema: ResourceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'DuplicateResourceException',
      content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getEventIntegrationsRoute = createRoute({
  method: 'get',
  path: '/eventIntegrations',
  description: 'Returns a paginated list of event integrations in the account.',
  operationId: 'ListEventIntegrations',
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
        .regex(/.*/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 1000 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventIntegrationsResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postEventIntegrationsRoute = createRoute({
  method: 'post',
  path: '/eventIntegrations',
  description:
    'Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.',
  operationId: 'CreateEventIntegration',
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
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9\/\._\-]+$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the event integration.' }),
              Description: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The description of the event integration.' }),
              EventFilter: z
                .object({
                  Source: SourceSchema.and(
                    z.any().openapi({ description: 'The source of the events.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The event filter.', required: [] }),
              EventBridgeBus: z
                .string()
                .regex(/^[a-zA-Z0-9\/\._\-]+$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The EventBridge bus.' }),
              ClientToken: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
                }),
            })
            .openapi({ required: ['Name', 'EventFilter', 'EventBridgeBus'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEventIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ResourceQuotaExceededException',
      content: { 'application/json': { schema: ResourceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'DuplicateResourceException',
      content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getDataIntegrationsIdentifierRoute = createRoute({
  method: 'get',
  path: '/dataIntegrations/{Identifier}',
  description:
    '<p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>',
  operationId: 'GetDataIntegration',
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
      Identifier: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'A unique identifier.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const deleteDataIntegrationsIdentifierRoute = createRoute({
  method: 'delete',
  path: '/dataIntegrations/{Identifier}',
  description:
    '<p>Deletes the DataIntegration. Only DataIntegrations that don\'t have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>',
  operationId: 'DeleteDataIntegration',
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
      Identifier: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'A unique identifier for the DataIntegration.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDataIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const patchDataIntegrationsIdentifierRoute = createRoute({
  method: 'patch',
  path: '/dataIntegrations/{Identifier}',
  description:
    '<p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>',
  operationId: 'UpdateDataIntegration',
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
      Identifier: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'A unique identifier for the DataIntegration.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9\/\._\-]+$/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the DataIntegration.' }),
              Description: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'A description of the DataIntegration.' }),
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
      content: { 'application/json': { schema: UpdateDataIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getEventIntegrationsNameRoute = createRoute({
  method: 'get',
  path: '/eventIntegrations/{Name}',
  description: 'Returns information about the event integration.',
  operationId: 'GetEventIntegration',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z0-9\/\._\-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the event integration. ',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9\\/\\._\\-]+$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const deleteEventIntegrationsNameRoute = createRoute({
  method: 'delete',
  path: '/eventIntegrations/{Name}',
  description:
    'Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.',
  operationId: 'DeleteEventIntegration',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z0-9\/\._\-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the event integration.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9\\/\\._\\-]+$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEventIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const patchEventIntegrationsNameRoute = createRoute({
  method: 'patch',
  path: '/eventIntegrations/{Name}',
  description: 'Updates the description of an event integration.',
  operationId: 'UpdateEventIntegration',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z0-9\/\._\-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the event integration.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9\\/\\._\\-]+$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The description of the event inegration.' }),
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
      content: { 'application/json': { schema: UpdateEventIntegrationResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getDataIntegrationsIdentifierAssociationsRoute = createRoute({
  method: 'get',
  path: '/dataIntegrations/{Identifier}/associations',
  description:
    '<p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>',
  operationId: 'ListDataIntegrationAssociations',
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
      Identifier: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'A unique identifier for the DataIntegration.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/.*/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 1000 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataIntegrationAssociationsResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getEventIntegrationsNameAssociationsRoute = createRoute({
  method: 'get',
  path: '/eventIntegrations/{Name}/associations',
  description: 'Returns a paginated list of event integration associations in the account. ',
  operationId: 'ListEventIntegrationAssociations',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z0-9\/\._\-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the event integration. ',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9\\/\\._\\-]+$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/.*/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 1000 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventIntegrationAssociationsResponseSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags for the specified resource.',
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
          /^arn:aws:[A-Za-z0-9][A-Za-z0-9_\/.-]{0,62}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,1023}$/,
        )
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource. ',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$',
              minLength: 1,
              maxLength: 2048,
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds the specified tags to the specified resource.',
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
          /^arn:aws:[A-Za-z0-9][A-Za-z0-9_\/.-]{0,62}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,1023}$/,
        )
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$',
              minLength: 1,
              maxLength: 2048,
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
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
                }),
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes the specified tags from the specified resource.',
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
          /^arn:aws:[A-Za-z0-9][A-Za-z0-9_\/.-]{0,62}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,1023}$/,
        )
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$',
              minLength: 1,
              maxLength: 2048,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 200,
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
