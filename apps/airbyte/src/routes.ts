import { createRoute, z } from '@hono/zod-openapi'

const EndpointPrivateLinkServiceConfigSchema = z
  .object({
    type: z.literal('endpoint'),
    name: z
      .string()
      .regex(/^com\.amazonaws\.vpce\.[a-z0-9-]+\.vpce-svc-[a-z0-9]+$/)
      .max(255),
    region: z
      .string()
      .regex(/^[a-z]{2,3}-[a-z]+(-[a-z]+)?-\d+$/)
      .max(30),
  })
  .openapi({ required: ['type', 'name', 'region'] })
  .openapi('EndpointPrivateLinkServiceConfig')

const StoragePrivateLinkServiceConfigSchema = z
  .object({
    type: z.literal('storage'),
    region: z
      .string()
      .regex(/^[a-z]{2,3}-[a-z]+(-[a-z]+)?-\d+$/)
      .max(30),
    bucket: z
      .string()
      .regex(/^(?!.*\.\.)(?!\d+\.\d+\.\d+\.\d+$)[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/)
      .min(3)
      .max(63),
  })
  .openapi({ required: ['type', 'region', 'bucket'] })
  .openapi('StoragePrivateLinkServiceConfig')

type PrivateLinkServiceConfigType =
  | z.infer<typeof EndpointPrivateLinkServiceConfigSchema>
  | z.infer<typeof StoragePrivateLinkServiceConfigSchema>

const ConnectionEventIdSchema = z.uuid().openapi('ConnectionEventId')

const ConnectionIdSchema = z.uuid().openapi('ConnectionId')

const ConnectionEventTypeSchema = z
  .enum([
    'SYNC_STARTED',
    'SYNC_SUCCEEDED',
    'SYNC_INCOMPLETE',
    'SYNC_FAILED',
    'SYNC_CANCELLED',
    'REFRESH_STARTED',
    'REFRESH_SUCCEEDED',
    'REFRESH_INCOMPLETE',
    'REFRESH_FAILED',
    'REFRESH_CANCELLED',
    'CLEAR_STARTED',
    'CLEAR_SUCCEEDED',
    'CLEAR_INCOMPLETE',
    'CLEAR_FAILED',
    'CLEAR_CANCELLED',
    'CONNECTION_SETTINGS_UPDATE',
    'CONNECTION_ENABLED',
    'CONNECTION_DISABLED',
    'SCHEMA_UPDATE',
    'SCHEMA_CONFIG_UPDATE',
    'CONNECTOR_UPDATE',
    'UNKNOWN',
  ])
  .openapi('ConnectionEventType')

const UserReadInConnectionEventSchema = z
  .object({
    id: z.uuid().exactOptional(),
    email: z.email().exactOptional(),
    name: z.string().exactOptional(),
    isDeleted: z.boolean().default(false),
  })
  .openapi({ required: ['isDeleted'] })
  .openapi('UserReadInConnectionEvent')

type ConnectionEventType = {
  id: z.infer<typeof ConnectionEventIdSchema>
  connectionId: z.infer<typeof ConnectionIdSchema>
  eventType: z.infer<typeof ConnectionEventTypeSchema>
  summary: { [key: string]: unknown }
  createdAt?: bigint
  user?: z.infer<typeof UserReadInConnectionEventSchema>
}

const HashingMapperConfigurationSchema = z
  .object({
    fieldNameSuffix: z
      .string()
      .openapi({
        title: 'Field name suffix',
        description: 'The suffix to append to the field name after hashing.',
      }),
    method: z
      .enum(['MD2', 'MD5', 'SHA-1', 'SHA-224', 'SHA-256', 'SHA-384', 'SHA-512'])
      .openapi({ title: 'Hashing method', description: 'The hashing algorithm to use.' }),
    targetField: z
      .string()
      .openapi({
        title: 'Original Field Name',
        description: 'The name of the field to be hashed.',
      }),
  })
  .openapi({
    title: 'Hashing',
    required: ['fieldNameSuffix', 'method', 'targetField'],
    'x-sdk-component': true,
  })
  .openapi('HashingMapperConfiguration')

const FieldFilteringMapperConfigurationSchema = z
  .object({
    targetField: z
      .string()
      .openapi({ title: 'The Field to Filter', description: 'The name of the field to filter.' }),
  })
  .openapi({ title: 'Field Filtering', required: ['targetField'], 'x-sdk-component': true })
  .openapi('FieldFilteringMapperConfiguration')

const FieldRenamingMapperConfigurationSchema = z
  .object({
    newFieldName: z
      .string()
      .openapi({
        title: 'New Field Name',
        description: 'The new name for the field after renaming.',
      }),
    originalFieldName: z
      .string()
      .openapi({
        title: 'Original Field Name',
        description: 'The current name of the field to rename.',
      }),
  })
  .openapi({
    title: 'Field Renaming',
    required: ['newFieldName', 'originalFieldName'],
    'x-sdk-component': true,
  })
  .openapi('FieldRenamingMapperConfiguration')

const RowFilteringOperationSchema: z.ZodType<RowFilteringOperationType> = z
  .lazy(() =>
    z
      .xor([RowFilteringOperationEqualSchema, RowFilteringOperationNotSchema])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            EQUAL: '#/components/schemas/RowFilteringOperationEqual',
            NOT: '#/components/schemas/RowFilteringOperationNot',
          },
        },
        'x-sdk-component': true,
        'x-airbyte-circular-ref': true,
      }),
  )
  .openapi('RowFilteringOperation')

const RowFilteringMapperConfigurationSchema = z
  .object({ conditions: RowFilteringOperationSchema })
  .openapi({ title: 'Row Filtering', required: ['conditions'], 'x-sdk-component': true })
  .openapi('RowFilteringMapperConfiguration')

const EncryptionMapperAlgorithmSchema = z
  .enum(['RSA', 'AES'])
  .openapi({ 'x-sdk-component': true })
  .openapi('EncryptionMapperAlgorithm')

const EncryptionMapperRSAConfigurationSchema = z
  .object({
    algorithm: EncryptionMapperAlgorithmSchema,
    fieldNameSuffix: z.string(),
    publicKey: z.string(),
    targetField: z.string(),
  })
  .openapi({
    title: 'Encryption - RSA',
    required: ['algorithm', 'publicKey', 'targetField', 'fieldNameSuffix'],
    'x-sdk-component': true,
  })
  .openapi('EncryptionMapperRSAConfiguration')

const EncryptionMapperAESConfigurationSchema = z
  .object({
    algorithm: EncryptionMapperAlgorithmSchema,
    fieldNameSuffix: z.string(),
    key: z.string().openapi({ 'x-sdk-param-sensitive': true }),
    mode: z.enum(['CBC', 'CFB', 'OFB', 'CTR', 'GCM', 'ECB']),
    padding: z.enum(['NoPadding', 'PKCS5Padding']),
    targetField: z.string(),
  })
  .openapi({
    title: 'Encryption - AES',
    required: ['algorithm', 'key', 'mode', 'padding', 'targetField', 'fieldNameSuffix'],
    'x-sdk-component': true,
  })
  .openapi('EncryptionMapperAESConfiguration')

const EncryptionMapperConfigurationSchema = z
  .xor([EncryptionMapperRSAConfigurationSchema, EncryptionMapperAESConfigurationSchema])
  .openapi({
    title: 'Encryption',
    discriminator: {
      propertyName: 'algorithm',
      mapping: {
        RSA: '#/components/schemas/EncryptionMapperRSAConfiguration',
        AES: '#/components/schemas/EncryptionMapperAESConfiguration',
      },
    },
    'x-sdk-component': true,
  })
  .openapi('EncryptionMapperConfiguration')

type MapperConfigurationType =
  | z.infer<typeof HashingMapperConfigurationSchema>
  | z.infer<typeof FieldFilteringMapperConfigurationSchema>
  | z.infer<typeof FieldRenamingMapperConfigurationSchema>
  | z.infer<typeof RowFilteringMapperConfigurationSchema>
  | z.infer<typeof EncryptionMapperConfigurationSchema>

type RowFilteringOperationTypeType = 'EQUAL' | 'NOT'

const RowFilteringOperationTypeSchema: z.ZodType<RowFilteringOperationTypeType> = z
  .enum(['EQUAL', 'NOT'])
  .openapi({ 'x-sdk-component': true })
  .openapi('RowFilteringOperationType')

type RowFilteringOperationEqualType = {
  comparisonValue: string
  fieldName: string
  type: z.infer<typeof RowFilteringOperationTypeSchema>
}

type RowFilteringOperationNotType = {
  conditions: z.infer<typeof RowFilteringOperationSchema>[]
  type: z.infer<typeof RowFilteringOperationTypeSchema>
}

const RowFilteringOperationEqualSchema: z.ZodType<RowFilteringOperationEqualType> = z
  .object({
    comparisonValue: z
      .string()
      .openapi({
        title: 'Comparison Value',
        description: 'The value to compare the field against.',
      }),
    fieldName: z
      .string()
      .openapi({
        title: 'Field Name',
        description: 'The name of the field to apply the operation on.',
      }),
    type: RowFilteringOperationTypeSchema,
  })
  .openapi({
    title: 'EQUAL',
    required: ['comparisonValue', 'fieldName', 'type'],
    'x-sdk-component': true,
  })
  .openapi('RowFilteringOperationEqual')

const RowFilteringOperationNotSchema: z.ZodType<RowFilteringOperationNotType> = z
  .lazy(() =>
    z
      .object({
        conditions: z
          .array(RowFilteringOperationSchema)
          .min(1)
          .openapi({
            title: 'Sub-Conditions (NOT)',
            description: 'Conditions to evaluate with the NOT operator.',
          }),
        type: RowFilteringOperationTypeSchema,
      })
      .openapi({ title: 'NOT', required: ['conditions', 'type'], 'x-sdk-component': true }),
  )
  .openapi('RowFilteringOperationNot')

type RowFilteringOperationType =
  | z.infer<typeof RowFilteringOperationEqualSchema>
  | z.infer<typeof RowFilteringOperationNotSchema>

const EmailNotificationConfigSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({
    description: 'Configures an email notification.',
    'x-sdk-entity': 'Workspace',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('EmailNotificationConfig')

const WebhookNotificationConfigSchema = z
  .object({ enabled: z.boolean().exactOptional(), url: z.string().exactOptional() })
  .openapi({
    description: 'Configures a webhook notification.',
    'x-sdk-entity': 'Workspace',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('WebhookNotificationConfig')

type NotificationConfigType = {
  email?: z.infer<typeof EmailNotificationConfigSchema>
  webhook?: z.infer<typeof WebhookNotificationConfigSchema>
}

const FusionUsageWindowSchema = z
  .object({
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 0,
        description: 'Resolved allowance; null means unlimited.',
      }),
    used: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 0,
        description:
          'Best-effort enforcement counter; null means unavailable. Unlimited windows do not accumulate counts.',
      }),
    windowStart: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Start of the UTC calendar window.' }),
    resetsAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Exclusive end of the UTC calendar window.' }),
  })
  .openapi({ required: ['limit', 'used', 'windowStart', 'resetsAt'] })
  .openapi('FusionUsageWindow')

const FusionUsageReadSchema = z
  .object({
    organizationId: z.uuid(),
    freeCapsApplicable: z
      .boolean()
      .openapi({ description: 'Whether free tool-call allowances apply to this organization.' }),
    day: FusionUsageWindowSchema,
    month: FusionUsageWindowSchema,
  })
  .openapi({ required: ['organizationId', 'freeCapsApplicable', 'day', 'month'] })
  .openapi('FusionUsageRead')

const FusionSourceEnablementStateSchema = z
  .strictObject({ enable_agent_access: z.boolean(), enable_indexing: z.boolean() })
  .openapi({ required: ['enable_agent_access', 'enable_indexing'] })
  .openapi('FusionSourceEnablementState')

const FusionSourceEnablementCreateSchema = z
  .strictObject({ enable_agent_access: z.boolean(), enable_indexing: z.boolean() })
  .openapi({ required: ['enable_agent_access', 'enable_indexing'] })
  .openapi('FusionSourceEnablementCreate')

const FusionSourceEnablementUpdateSchema = z
  .strictObject({
    enable_agent_access: z.boolean(),
    enable_indexing: z.boolean(),
    expectedState: FusionSourceEnablementStateSchema,
  })
  .openapi({ required: ['enable_agent_access', 'enable_indexing', 'expectedState'] })
  .openapi('FusionSourceEnablementUpdate')

const ActorTypeSchema = z.enum(['source', 'destination']).openapi('ActorType')

const FusionSourceEnablementReadSchema = z
  .strictObject({
    organizationId: z.uuid(),
    workspaceId: z.uuid(),
    actorId: z.uuid(),
    actorType: ActorTypeSchema,
    enable_agent_access: z.boolean(),
    enable_indexing: z.boolean(),
  })
  .openapi({
    required: [
      'organizationId',
      'workspaceId',
      'actorId',
      'actorType',
      'enable_agent_access',
      'enable_indexing',
    ],
  })
  .openapi('FusionSourceEnablementRead')

const FusionDestinationEnablementStateSchema = z
  .strictObject({
    enable_agent_access: z.boolean(),
    enable_indexing: z.boolean(),
    enable_backfill: z.boolean(),
    backfill_start_time: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional backfill start timestamp with timezone and at most six fractional-second digits. Local and normalized UTC years must be 0001-9999 for PostgreSQL and RFC3339 roundtrip. Retained while agent access or backfill is disabled. Null or omission clears the saved timestamp.',
      }),
  })
  .openapi({ required: ['enable_agent_access', 'enable_indexing', 'enable_backfill'] })
  .openapi('FusionDestinationEnablementState')

const FusionDestinationEnablementCreateSchema = z
  .strictObject({
    enable_agent_access: z.boolean(),
    enable_indexing: z.boolean(),
    enable_backfill: z.boolean(),
    backfill_start_time: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional backfill start timestamp with timezone and at most six fractional-second digits. Local and normalized UTC years must be 0001-9999 for PostgreSQL and RFC3339 roundtrip. Retained while agent access or backfill is disabled. Null or omission clears the saved timestamp.',
      }),
  })
  .openapi({ required: ['enable_agent_access', 'enable_indexing', 'enable_backfill'] })
  .openapi('FusionDestinationEnablementCreate')

const FusionDestinationEnablementUpdateSchema = z
  .strictObject({
    enable_agent_access: z.boolean(),
    enable_indexing: z.boolean(),
    enable_backfill: z.boolean(),
    backfill_start_time: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional backfill start timestamp with timezone and at most six fractional-second digits. Local and normalized UTC years must be 0001-9999 for PostgreSQL and RFC3339 roundtrip. Retained while agent access or backfill is disabled. Null or omission clears the saved timestamp.',
      }),
    expectedState: FusionDestinationEnablementStateSchema,
  })
  .openapi({
    required: ['enable_agent_access', 'enable_indexing', 'enable_backfill', 'expectedState'],
  })
  .openapi('FusionDestinationEnablementUpdate')

const FusionDestinationEnablementReadSchema = z
  .strictObject({
    organizationId: z.uuid(),
    workspaceId: z.uuid(),
    actorId: z.uuid(),
    actorType: ActorTypeSchema,
    enable_agent_access: z.boolean(),
    enable_indexing: z.boolean(),
    enable_backfill: z.boolean(),
    backfill_start_time: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional backfill start timestamp with timezone and at most six fractional-second digits. Local and normalized UTC years must be 0001-9999 for PostgreSQL and RFC3339 roundtrip. Retained while agent access or backfill is disabled. Null or omission clears the saved timestamp.',
      }),
  })
  .openapi({
    required: [
      'organizationId',
      'workspaceId',
      'actorId',
      'actorType',
      'enable_agent_access',
      'enable_indexing',
      'enable_backfill',
    ],
  })
  .openapi('FusionDestinationEnablementRead')

const FusionConnectionEnablementStateSchema = z
  .strictObject({ enable_indexing: z.boolean() })
  .openapi({ required: ['enable_indexing'] })
  .openapi('FusionConnectionEnablementState')

const FusionConnectionEnablementCreateSchema = z
  .strictObject({ enable_indexing: z.boolean() })
  .openapi({ required: ['enable_indexing'] })
  .openapi('FusionConnectionEnablementCreate')

const FusionConnectionEnablementUpdateSchema = z
  .strictObject({
    enable_indexing: z.boolean(),
    expectedState: FusionConnectionEnablementStateSchema,
  })
  .openapi({ required: ['enable_indexing', 'expectedState'] })
  .openapi('FusionConnectionEnablementUpdate')

const FusionConnectionEnablementReadSchema = z
  .strictObject({
    organizationId: z.uuid(),
    workspaceId: z.uuid(),
    connectionId: z.uuid(),
    enable_indexing: z.boolean(),
  })
  .openapi({ required: ['organizationId', 'workspaceId', 'connectionId', 'enable_indexing'] })
  .openapi('FusionConnectionEnablementRead')

const FusionEnablementResolveRequestSchema = z
  .strictObject({
    organizationId: z.uuid(),
    workspaceId: z.uuid(),
    connectionId: z.uuid(),
    sourceId: z.uuid(),
    destinationId: z.uuid(),
    dataplaneGroupId: z.uuid(),
    workloadId: z.string().min(1),
  })
  .openapi({
    required: [
      'organizationId',
      'workspaceId',
      'connectionId',
      'sourceId',
      'destinationId',
      'workloadId',
      'dataplaneGroupId',
    ],
  })
  .openapi('FusionEnablementResolveRequest')

const FusionEnablementResolveResponseSchema = z
  .object({
    destinationEnvironment: z.record(z.string(), z.string()),
    injectAwsBootstrapCredentials: z.boolean(),
    reason: z.enum(['rollout_disabled', 'not_enabled', 'enabled']),
  })
  .openapi({ required: ['destinationEnvironment', 'injectAwsBootstrapCredentials', 'reason'] })
  .openapi('FusionEnablementResolveResponse')

const PrivateLinkStatusSchema = z
  .enum([
    'creating',
    'pending_acceptance',
    'configuring',
    'available',
    'create_failed',
    'deleting',
    'delete_failed',
    'deleted',
  ])
  .openapi('PrivateLinkStatus')

const PrivateLinkServiceTypeSchema = z
  .enum(['endpoint', 'storage'])
  .openapi('PrivateLinkServiceType')

const WorkspaceIdSchema = z.uuid().openapi({ 'x-sdk-component': true }).openapi('WorkspaceId')

const PrivateLinkServiceConfigSchema: z.ZodType<PrivateLinkServiceConfigType> = z
  .lazy(() =>
    z
      .xor([EndpointPrivateLinkServiceConfigSchema, StoragePrivateLinkServiceConfigSchema])
      .openapi({
        description: 'Variant config selected by the `type` field (endpoint or storage).',
      }),
  )
  .openapi('PrivateLinkServiceConfig')

const PrivateLinkCreateRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    name: z
      .string()
      .regex(/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/)
      .max(63),
    serviceConfig: PrivateLinkServiceConfigSchema,
  })
  .openapi({ required: ['workspaceId', 'name', 'serviceConfig'] })
  .openapi('PrivateLinkCreateRequestBody')

const PrivateLinkListRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId'] })
  .openapi('PrivateLinkListRequestBody')

const PrivateLinkListByStatusRequestBodySchema = z
  .object({ status: PrivateLinkStatusSchema })
  .openapi({ required: ['status'] })
  .openapi('PrivateLinkListByStatusRequestBody')

const PrivateLinkIdRequestBodySchema = z
  .object({ privateLinkId: z.uuid(), workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['privateLinkId', 'workspaceId'] })
  .openapi('PrivateLinkIdRequestBody')

const PrivateLinkInternalIdRequestBodySchema = z
  .object({ privateLinkId: z.uuid() })
  .openapi({
    description:
      'Internal-only — admin-authenticated lookups by private link id (e.g. infra-worker).',
    required: ['privateLinkId'],
  })
  .openapi('PrivateLinkInternalIdRequestBody')

const PrivateLinkUpdateRequestBodySchema = z
  .object({
    privateLinkId: z.uuid(),
    status: PrivateLinkStatusSchema.exactOptional(),
    endpointId: z.string().exactOptional(),
    dnsName: z.string().exactOptional(),
    scopedConfigurationId: z.uuid().exactOptional(),
    clearScopedConfigurationId: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      'Internal-only — partial update used by infra-worker activities. Only the supplied fields are written.\nSet `clearScopedConfigurationId: true` to null out the existing scoped configuration reference\n(mutually exclusive with `scopedConfigurationId`).\n',
    required: ['privateLinkId'],
  })
  .openapi('PrivateLinkUpdateRequestBody')

const PrivateLinkReadSchema = z
  .object({
    id: z.uuid(),
    workspaceId: WorkspaceIdSchema,
    dataplaneGroupId: z.uuid(),
    dataplaneRegion: z
      .string()
      .exactOptional()
      .openapi({ description: "Region where the private link's VPC endpoint is deployed." }),
    name: z.string(),
    status: PrivateLinkStatusSchema,
    serviceConfig: PrivateLinkServiceConfigSchema,
    endpointId: z.string().exactOptional(),
    dnsName: z.string().exactOptional(),
    scopedConfigurationId: z.uuid().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    required: [
      'id',
      'workspaceId',
      'dataplaneGroupId',
      'name',
      'status',
      'serviceConfig',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('PrivateLinkRead')

const PrivateLinkReadListSchema = z
  .object({ privateLinks: z.array(PrivateLinkReadSchema) })
  .openapi({ required: ['privateLinks'] })
  .openapi('PrivateLinkReadList')

const ScopedConfigurationReadSchema = z
  .object({
    id: z.string().exactOptional(),
    value: z.string().exactOptional(),
    value_name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    reference_url: z.string().exactOptional(),
    config_key: z.string().exactOptional(),
    resource_id: z.string().exactOptional(),
    resource_name: z.string().exactOptional(),
    resource_type: z.string().exactOptional(),
    scope_id: z.string().exactOptional(),
    scope_type: z.string().exactOptional(),
    scope_name: z.string().exactOptional(),
    origin: z.string().exactOptional(),
    origin_type: z.string().exactOptional(),
    origin_name: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    expires_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        'x-field-extra-annotation':
          '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd")',
      }),
  })
  .openapi({ required: [] })
  .openapi('ScopedConfigurationRead')

const ScopedConfigurationListRequestBodySchema = z
  .object({
    config_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key of the configuration to filter by' }),
    origin_type: z.string().exactOptional().openapi({ description: 'Type of origin to filter by' }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 1)
  .openapi({ required: [] })
  .openapi('ScopedConfigurationListRequestBody')

const ScopedConfigurationListResponseSchema = z
  .object({ scopedConfigurations: z.array(ScopedConfigurationReadSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ScopedConfigurationListResponse')

const ScopedConfigurationCreateRequestBodySchema = z
  .object({
    value: z.string(),
    description: z.string().exactOptional(),
    reference_url: z.string().exactOptional(),
    config_key: z.string(),
    resource_id: z.string().exactOptional(),
    resource_type: z.string().exactOptional(),
    scope_id: z.string(),
    scope_type: z.string(),
    origin: z.string(),
    origin_type: z.string(),
    expires_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        'x-field-extra-annotation':
          '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd")',
      }),
  })
  .openapi({ required: ['value', 'config_key', 'scope_id', 'scope_type', 'origin', 'origin_type'] })
  .openapi('ScopedConfigurationCreateRequestBody')

const ScopedConfigurationCreateResponseSchema = z
  .object({ data: ScopedConfigurationReadSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ScopedConfigurationCreateResponse')

const ScopedConfigurationContextRequestBodySchema = z
  .object({
    config_key: z.string(),
    resource_id: z.uuid(),
    resource_type: z.string(),
    scope_id: z.uuid(),
    scope_type: z.string(),
  })
  .openapi({ required: ['config_key', 'resource_id', 'resource_type', 'scope_id', 'scope_type'] })
  .openapi('ScopedConfigurationContextRequestBody')

const ScopedConfigurationContextResponseSchema = z
  .object({
    activeConfiguration: ScopedConfigurationReadSchema.exactOptional(),
    ancestorConfigurations: z
      .array(ScopedConfigurationReadSchema)
      .exactOptional()
      .openapi({
        description:
          'List of configurations that have been created that will get overridden by the scope currently being configured.',
      }),
    descendantConfigurations: z
      .array(ScopedConfigurationReadSchema)
      .exactOptional()
      .openapi({
        description:
          'List of configurations that have been created that will override the scope currently being configured.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ScopedConfigurationContextResponse')

const ScopedConfigurationReadRequestBodySchema = z
  .object({ scopedConfigurationId: z.uuid() })
  .openapi({ required: ['scopedConfigurationId'] })
  .openapi('ScopedConfigurationReadRequestBody')

const ScopedConfigurationReadResponseSchema = z
  .object({ data: ScopedConfigurationReadSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ScopedConfigurationReadResponse')

const ScopedConfigurationUpdateRequestBodySchema = z
  .object({ scopedConfigurationId: z.uuid(), data: ScopedConfigurationCreateRequestBodySchema })
  .openapi({ required: ['scopedConfigurationId', 'data'] })
  .openapi('ScopedConfigurationUpdateRequestBody')

const ScopedConfigurationUpdateResponseSchema = z
  .object({ data: ScopedConfigurationReadSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ScopedConfigurationUpdateResponse')

const ScopedConfigurationDeleteRequestBodySchema = z
  .object({ scopedConfigurationId: z.uuid() })
  .openapi({ required: ['scopedConfigurationId'] })
  .openapi('ScopedConfigurationDeleteRequestBody')

const ScopedConfigurationDeleteResponseSchema = z
  .object({ scopedConfigurationId: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('ScopedConfigurationDeleteResponse')

const ConnectorRolloutStateSchema = z
  .enum([
    'initialized',
    'workflow_started',
    'in_progress',
    'paused',
    'finalizing',
    'succeeded',
    'errored',
    'failed_rolled_back',
    'canceled',
  ])
  .openapi('ConnectorRolloutState')

const ConnectorRolloutStrategySchema = z
  .enum(['manual', 'automated', 'overridden'])
  .openapi('ConnectorRolloutStrategy')

const ConnectorRolloutActorSelectionInfoSchema = z
  .object({
    num_actors: z.int(),
    num_actors_eligible_or_already_pinned: z.int(),
    num_pinned_to_connector_rollout: z.int(),
  })
  .openapi({
    required: [
      'num_actors',
      'num_actors_eligible_or_already_pinned',
      'num_pinned_to_connector_rollout',
    ],
  })
  .openapi('ConnectorRolloutActorSelectionInfo')

const ConnectorRolloutActorSyncInfoSchema = z
  .object({
    actor_id: z.uuid(),
    num_succeeded: z.int(),
    num_failed: z.int(),
    num_connections: z.int(),
  })
  .openapi({ required: ['actor_id', 'num_succeeded', 'num_failed', 'num_connections'] })
  .openapi('ConnectorRolloutActorSyncInfo')

const CustomerTierSchema = z.enum(['TIER_0', 'TIER_1', 'TIER_2', 'ALL']).openapi('CustomerTier')

const ConnectorRolloutReadSchema = z
  .object({
    docker_repository: z.string().exactOptional(),
    docker_image_tag: z.string().exactOptional(),
    id: z.uuid(),
    workflow_run_id: z.string().exactOptional(),
    actor_definition_id: z.uuid(),
    release_candidate_version_id: z.uuid(),
    initial_version_id: z.uuid().exactOptional(),
    state: ConnectorRolloutStateSchema,
    initial_rollout_pct: z.int32().min(0).max(100).exactOptional(),
    current_target_rollout_pct: z.int32().min(0).max(100).exactOptional(),
    final_target_rollout_pct: z.int32().min(0).max(100).exactOptional(),
    has_breaking_changes: z.boolean().exactOptional(),
    max_step_wait_time_mins: z.int32().min(0).exactOptional(),
    updated_by: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    completed_at: z.iso.datetime({ offset: true }).exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    error_msg: z.string().exactOptional(),
    failed_reason: z.string().exactOptional(),
    paused_reason: z.string().exactOptional(),
    rollout_strategy: ConnectorRolloutStrategySchema.exactOptional(),
    actor_selection_info: ConnectorRolloutActorSelectionInfoSchema.exactOptional(),
    actor_syncs: z.record(z.string(), ConnectorRolloutActorSyncInfoSchema).exactOptional(),
    tier: CustomerTierSchema.exactOptional(),
    tag: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'actor_definition_id', 'release_candidate_version_id', 'state'] })
  .openapi('ConnectorRolloutRead')

const ConnectorRolloutStateTerminalSchema = z
  .enum(['succeeded', 'failed_rolled_back', 'canceled'])
  .openapi('ConnectorRolloutStateTerminal')

const ConnectorRolloutTierFilterSchema = z
  .object({ tier: CustomerTierSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ConnectorRolloutTierFilter')

const ConnectorRolloutJobBypassFilterSchema = z
  .object({ shouldIgnoreJobs: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConnectorRolloutJobBypassFilter')

const ConnectorRolloutFiltersSchema = z
  .object({
    tierFilter: ConnectorRolloutTierFilterSchema.exactOptional(),
    jobBypassFilter: ConnectorRolloutJobBypassFilterSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConnectorRolloutFilters')

const ConnectorRolloutListRequestBodySchema = z
  .object({
    docker_repository: z.string().exactOptional(),
    docker_image_tag: z.string(),
    actor_definition_id: z.uuid(),
  })
  .openapi({ required: ['docker_image_tag', 'actor_definition_id'] })
  .openapi('ConnectorRolloutListRequestBody')

const ConnectorRolloutListByActorDefinitionIdRequestBodySchema = z
  .object({ actor_definition_id: z.uuid() })
  .openapi({ required: ['actor_definition_id'] })
  .openapi('ConnectorRolloutListByActorDefinitionIdRequestBody')

const ConnectorRolloutListResponseSchema = z
  .object({ connectorRollouts: z.array(ConnectorRolloutReadSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ConnectorRolloutListResponse')

const ConnectorRolloutReadRequestBodySchema = z
  .object({ id: z.uuid() })
  .openapi({ required: ['id'] })
  .openapi('ConnectorRolloutReadRequestBody')

const ConnectorRolloutReadResponseSchema = z
  .object({ data: ConnectorRolloutReadSchema })
  .openapi({ required: ['data'] })
  .openapi('ConnectorRolloutReadResponse')

const ConnectorRolloutStartRequestBodySchema = z
  .object({
    id: z.uuid(),
    workflow_run_id: z.string(),
    rollout_strategy: ConnectorRolloutStrategySchema,
    updated_by: z.uuid().exactOptional(),
    migrate_pins: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: ['id', 'workflow_run_id', 'rollout_strategy'] })
  .openapi('ConnectorRolloutStartRequestBody')

const ConnectorRolloutStartResponseSchema = z
  .object({ data: ConnectorRolloutReadSchema })
  .openapi({ required: ['data'] })
  .openapi('ConnectorRolloutStartResponse')

const ActorIdSchema = z
  .uuid()
  .openapi({ description: 'A unique identifier for an actor.' })
  .openapi('ActorId')

const ConnectorRolloutRequestBodySchema = z
  .object({
    id: z.uuid(),
    actor_ids: z.array(ActorIdSchema).exactOptional(),
    target_percentage: z.int32().min(1).max(100).exactOptional(),
    rollout_strategy: ConnectorRolloutStrategySchema,
    updated_by: z.uuid().exactOptional(),
  })
  .openapi({ required: ['id', 'rollout_strategy'] })
  .openapi('ConnectorRolloutRequestBody')

const ConnectorRolloutResponseSchema = z
  .object({ data: ConnectorRolloutReadSchema })
  .openapi({ required: ['data'] })
  .openapi('ConnectorRolloutResponse')

const ConnectorRolloutUpdateStateRequestBodySchema = z
  .object({
    id: z.uuid().exactOptional(),
    docker_repository: z.string().exactOptional(),
    docker_image_tag: z.string().exactOptional(),
    actor_definition_id: z.uuid().exactOptional(),
    state: ConnectorRolloutStateSchema,
    error_msg: z.string().exactOptional(),
    failed_reason: z.string().exactOptional(),
    paused_reason: z.string().exactOptional(),
    updated_by: z.uuid().exactOptional(),
  })
  .openapi({ required: ['state'] })
  .openapi('ConnectorRolloutUpdateStateRequestBody')

const ConnectorRolloutFinalizeRequestBodySchema = z
  .object({
    id: z.uuid(),
    state: ConnectorRolloutStateTerminalSchema,
    error_msg: z.string().exactOptional(),
    failed_reason: z.string().exactOptional(),
    rollout_strategy: ConnectorRolloutStrategySchema,
    updated_by: z.uuid().exactOptional(),
    retain_pins_on_cancellation: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: ['id', 'state', 'rollout_strategy'] })
  .openapi('ConnectorRolloutFinalizeRequestBody')

const ConnectorRolloutGetActorSyncInfoRequestBodySchema = z
  .object({ id: z.uuid() })
  .openapi({ required: ['id'] })
  .openapi('ConnectorRolloutGetActorSyncInfoRequestBody')

const ConnectorRolloutActorSyncInfoResponseSchema = z
  .object({
    data: z
      .object({
        actor_selection_info: ConnectorRolloutActorSelectionInfoSchema.exactOptional(),
        syncs: z.record(z.string(), ConnectorRolloutActorSyncInfoSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['data'] })
  .openapi('ConnectorRolloutActorSyncInfoResponse')

const ConnectorRolloutManualRolloutResponseSchema = z
  .object({ status: z.string().exactOptional() })
  .openapi({ required: ['data'] })
  .openapi('ConnectorRolloutManualRolloutResponse')

const ConnectorRolloutManualFinalizeResponseSchema = z
  .object({ status: z.string().exactOptional() })
  .openapi({ required: ['data'] })
  .openapi('ConnectorRolloutManualFinalizeResponse')

const ConnectorRolloutFinalizeResponseSchema = z
  .object({ data: ConnectorRolloutReadSchema })
  .openapi({ required: ['data'] })
  .openapi('ConnectorRolloutFinalizeResponse')

const ConnectorRolloutManualStartRequestBodySchema = z
  .object({
    docker_repository: z.string(),
    docker_image_tag: z.string(),
    actor_definition_id: z.uuid(),
    updated_by: z.uuid(),
    rollout_strategy: ConnectorRolloutStrategySchema,
    initial_rollout_pct: z.int32().min(0).max(100).exactOptional(),
    final_target_rollout_pct: z.int32().min(0).max(100).exactOptional(),
    migrate_pins: z.boolean().default(true).exactOptional(),
    filters: ConnectorRolloutFiltersSchema.exactOptional(),
  })
  .openapi({
    required: [
      'docker_repository',
      'docker_image_tag',
      'actor_definition_id',
      'updated_by',
      'rollout_strategy',
    ],
  })
  .openapi('ConnectorRolloutManualStartRequestBody')

const ConnectorRolloutManualRolloutRequestBodySchema = z
  .object({
    docker_repository: z.string(),
    docker_image_tag: z.string(),
    actor_definition_id: z.uuid(),
    id: z.uuid(),
    updated_by: z.uuid(),
    actor_ids: z.array(ActorIdSchema).exactOptional(),
    target_percentage: z.int32().min(1).max(100).exactOptional(),
    migrate_pins: z.boolean().default(true).exactOptional(),
    filters: ConnectorRolloutFiltersSchema.exactOptional(),
  })
  .openapi({
    required: ['docker_repository', 'docker_image_tag', 'actor_definition_id', 'id', 'updated_by'],
  })
  .openapi('ConnectorRolloutManualRolloutRequestBody')

const ConnectorRolloutManualFinalizeRequestBodySchema = z
  .object({
    docker_repository: z.string(),
    docker_image_tag: z.string(),
    actor_definition_id: z.uuid(),
    id: z.uuid(),
    updated_by: z.uuid(),
    state: ConnectorRolloutStateTerminalSchema,
    error_msg: z.string().exactOptional(),
    failed_reason: z.string().exactOptional(),
    retain_pins_on_cancellation: z.boolean().default(true).exactOptional(),
  })
  .openapi({
    required: [
      'docker_repository',
      'docker_image_tag',
      'actor_definition_id',
      'id',
      'updated_by',
      'state',
    ],
  })
  .openapi('ConnectorRolloutManualFinalizeRequestBody')

const OrganizationIsEntitledRequestBodySchema = z
  .object({ organization_id: z.uuid(), feature_id: z.string() })
  .openapi({ required: ['organization_id', 'feature_id'] })
  .openapi('OrganizationIsEntitledRequestBody')

const OrganizationIsEntitledResponseSchema = z
  .object({
    feature_id: z.string(),
    is_entitled: z.boolean(),
    access_denied_reason: z.string().exactOptional(),
    feature_name: z.string().exactOptional(),
    value: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The numeric value of a numeric entitlement with a finite value. Null for boolean entitlements, unlimited numeric entitlements, and entitlements that are not granted.',
      }),
    is_unlimited: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the entitlement is a granted numeric entitlement that is unlimited.',
      }),
  })
  .openapi({ required: ['feature_id', 'is_entitled'] })
  .openapi('OrganizationIsEntitledResponse')

const GetEntitlementsByOrganizationIdRequestBodySchema = z
  .object({ organization_id: z.uuid() })
  .openapi({ required: ['organization_id'] })
  .openapi('GetEntitlementsByOrganizationIdRequestBody')

const GetEntitlementsByOrganizationIdResponseSchema = z
  .object({ entitlements: z.array(OrganizationIsEntitledResponseSchema) })
  .openapi({ required: ['entitlements'] })
  .openapi('GetEntitlementsByOrganizationIdResponse')

const EntitlementPlanInfoSchema = z
  .object({ plan_id: z.string(), plan_name: z.string() })
  .openapi({ required: ['plan_id', 'plan_name'] })
  .openapi('EntitlementPlanInfo')

const ListAllEntitlementPlansResponseSchema = z
  .object({ plans: z.array(EntitlementPlanInfoSchema) })
  .openapi({ required: ['plans'] })
  .openapi('ListAllEntitlementPlansResponse')

const UpdateOrganizationEntitlementPlanRequestBodySchema = z
  .object({
    organization_id: z.uuid(),
    plan_name: z.enum([
      'CORE',
      'STANDARD',
      'STANDARD_TRIAL',
      'PRO',
      'PARTNER',
      'POV',
      'FLEX',
      'EMBEDDED_PAYG',
      'EMBEDDED_ANNUAL_COMMITMENT',
    ]),
  })
  .openapi({ required: ['organization_id', 'plan_name'] })
  .openapi('UpdateOrganizationEntitlementPlanRequestBody')

const UpdateOrganizationEntitlementPlanResponseSchema = z
  .object({ organization_id: z.uuid(), plan_name: z.string() })
  .openapi({ required: ['organization_id', 'plan_name'] })
  .openapi('UpdateOrganizationEntitlementPlanResponse')

const DomainVerificationCreateRequestBodySchema = z
  .object({ organizationId: z.uuid(), domain: z.string() })
  .openapi({ required: ['organizationId', 'domain'] })
  .openapi('DomainVerificationCreateRequestBody')

const DomainVerificationResponseSchema = z
  .object({
    id: z.uuid(),
    organizationId: z.uuid(),
    domain: z.string(),
    verificationMethod: z.enum(['DNS_TXT', 'LEGACY']),
    status: z.enum(['PENDING', 'VERIFIED', 'FAILED', 'EXPIRED']),
    dnsRecordName: z.string().nullable().exactOptional(),
    dnsRecordValue: z.string().nullable().exactOptional(),
    attempts: z.int(),
    expiresAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    verifiedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    lastCheckedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'id',
      'organizationId',
      'domain',
      'verificationMethod',
      'status',
      'attempts',
      'createdAt',
    ],
  })
  .openapi('DomainVerificationResponse')

const DomainVerificationListResponseSchema = z
  .object({ domainVerifications: z.array(DomainVerificationResponseSchema) })
  .openapi({ required: ['domainVerifications'] })
  .openapi('DomainVerificationListResponse')

const CustomerIdSchema = z.uuid().openapi('CustomerId')

const NotificationTypeSchema = z.enum(['slack', 'customerio']).openapi('NotificationType')

const SlackNotificationConfigurationSchema = z
  .object({ webhook: z.string() })
  .openapi({ required: ['webhook'] })
  .openapi('SlackNotificationConfiguration')

const CustomerioNotificationConfigurationSchema = z
  .object({})
  .openapi('CustomerioNotificationConfiguration')

const NotificationSchema = z
  .object({
    notificationType: NotificationTypeSchema,
    sendOnSuccess: z.boolean().default(false),
    sendOnFailure: z.boolean().default(true),
    slackConfiguration: SlackNotificationConfigurationSchema.exactOptional(),
    customerioConfiguration: CustomerioNotificationConfigurationSchema.exactOptional(),
  })
  .openapi({ required: ['notificationType', 'sendOnSuccess', 'sendOnFailure'] })
  .openapi('Notification')

const NotificationItemSchema = z
  .object({
    notificationType: z.array(NotificationTypeSchema).exactOptional(),
    slackConfiguration: SlackNotificationConfigurationSchema.exactOptional(),
    customerioConfiguration: CustomerioNotificationConfigurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationItem')

const NotificationSettingsSchema = z
  .object({
    sendOnSuccess: NotificationItemSchema.exactOptional(),
    sendOnFailure: NotificationItemSchema.exactOptional(),
    sendOnSyncDisabled: NotificationItemSchema.exactOptional(),
    sendOnSyncDisabledWarning: NotificationItemSchema.exactOptional(),
    sendOnConnectionUpdate: NotificationItemSchema.exactOptional(),
    sendOnConnectionUpdateActionRequired: NotificationItemSchema.exactOptional(),
    sendOnBreakingChangeWarning: NotificationItemSchema.exactOptional(),
    sendOnBreakingChangeSyncsDisabled: NotificationItemSchema.exactOptional(),
    sendOnConnectionSyncQueued: NotificationItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationSettings')

const WebhookConfigWriteSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'human readable name for this webhook e.g. for UI display.' }),
    authToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'an auth token, to be passed as the value for an HTTP Authorization header.',
      }),
    validationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'if supplied, the webhook config will be validated by checking that this URL returns a 2xx response.',
      }),
    customDbtHost: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'if the webhook is of type DBT_CLOUD, this value will be used to construct the execution URL',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookConfigWrite')

const OrganizationIdSchema = z.uuid().openapi({ 'x-sdk-component': true }).openapi('OrganizationId')

const WorkspaceCreateSchema = z
  .object({
    email: z.email().exactOptional(),
    anonymousDataCollection: z.boolean().exactOptional(),
    name: z.string(),
    news: z.boolean().exactOptional(),
    securityUpdates: z.boolean().exactOptional(),
    notifications: z.array(NotificationSchema).exactOptional(),
    notificationSettings: NotificationSettingsSchema.exactOptional(),
    displaySetupWizard: z.boolean().exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    webhookConfigs: z.array(WebhookConfigWriteSchema).exactOptional(),
    organizationId: OrganizationIdSchema,
  })
  .openapi({ required: ['name', 'organizationId'] })
  .openapi('WorkspaceCreate')

const WorkspaceCreateWithIdSchema = z
  .object({
    id: z.uuid(),
    email: z.email().exactOptional(),
    anonymousDataCollection: z.boolean().exactOptional(),
    name: z.string(),
    news: z.boolean().exactOptional(),
    securityUpdates: z.boolean().exactOptional(),
    notifications: z.array(NotificationSchema).exactOptional(),
    notificationSettings: NotificationSettingsSchema.exactOptional(),
    displaySetupWizard: z.boolean().exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    webhookConfigs: z.array(WebhookConfigWriteSchema).exactOptional(),
    organizationId: OrganizationIdSchema.exactOptional().openapi({
      description:
        "Required by create_if_not_exist. Absent when bootstrapping a new user's first workspace, which finds or creates the user's organization.",
    }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('WorkspaceCreateWithId')

const NotificationTriggerSchema = z
  .enum([
    'sync_success',
    'sync_failure',
    'sync_disabled',
    'sync_disabled_warning',
    'connection_update',
    'connection_update_action_required',
    'breaking_change_warning',
    'breaking_change_syncs_disabled',
    'connection_sync_queued',
  ])
  .openapi('NotificationTrigger')

const NotificationReadSchema = z
  .object({ status: z.enum(['succeeded', 'failed']), message: z.string().exactOptional() })
  .openapi({ required: ['status'] })
  .openapi('NotificationRead')

const WorkspaceIdRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema, includeTombstone: z.boolean().exactOptional() })
  .openapi({ required: ['workspaceId'] })
  .openapi('WorkspaceIdRequestBody')

const WorkspaceIdActorDefinitionRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    includeTombstone: z.boolean().exactOptional(),
    filterByUsed: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['workspaceId'] })
  .openapi('WorkspaceIdActorDefinitionRequestBody')

const PaginationSchema = z
  .object({ pageSize: z.int().exactOptional(), rowOffset: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('Pagination')

const TagIdSchema = z.uuid().openapi({ 'x-sdk-component': true }).openapi('TagId')

const ListConnectionsForWorkspacesRequestBodySchema = z
  .object({
    workspaceIds: z.array(WorkspaceIdSchema),
    userId: z.uuid(),
    pagination: PaginationSchema.exactOptional(),
    includeDeleted: z.boolean().default(false).exactOptional(),
    tagIds: z.array(TagIdSchema).exactOptional(),
  })
  .openapi({ required: ['workspaceIds', 'userId'] })
  .openapi('ListConnectionsForWorkspacesRequestBody')

const ListResourcesForWorkspacesRequestBodySchema = z
  .object({
    workspaceIds: z.array(WorkspaceIdSchema),
    includeDeleted: z.boolean().default(false).exactOptional(),
    pagination: PaginationSchema,
    nameContains: z.string().exactOptional(),
  })
  .openapi({ required: ['workspaceIds', 'pagination'] })
  .openapi('ListResourcesForWorkspacesRequestBody')

const WebhookConfigReadSchema = z
  .object({
    id: z.uuid(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'human-readable name e.g. for display in UI' }),
    customDbtHost: z
      .string()
      .exactOptional()
      .openapi({ description: 'If this is a dbt Cloud webhook, this is the custom host' }),
  })
  .openapi({
    description: 'the readable info for a webhook config; omits sensitive info e.g. auth token',
    required: ['id'],
  })
  .openapi('WebhookConfigRead')

const LimitSchema = z
  .object({
    current: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    max: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Absent when the dimension has no limit.',
      }),
  })
  .openapi({ required: ['current'] })
  .openapi('Limit')

const WorkspaceLimitsSchema = z
  .object({ sources: LimitSchema, destinations: LimitSchema, activeConnections: LimitSchema })
  .openapi({ required: ['sources', 'destinations', 'activeConnections'] })
  .openapi('WorkspaceLimits')

const WorkspaceReadSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    customerId: CustomerIdSchema,
    email: z.email().exactOptional(),
    name: z.string(),
    slug: z.string(),
    initialSetupComplete: z.boolean(),
    displaySetupWizard: z.boolean().exactOptional(),
    anonymousDataCollection: z.boolean().exactOptional(),
    news: z.boolean().exactOptional(),
    securityUpdates: z.boolean().exactOptional(),
    notifications: z.array(NotificationSchema).exactOptional(),
    notificationSettings: NotificationSettingsSchema.exactOptional(),
    firstCompletedSync: z.boolean().exactOptional(),
    feedbackDone: z.boolean().exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    webhookConfigs: z.array(WebhookConfigReadSchema).exactOptional(),
    organizationId: OrganizationIdSchema,
    tombstone: z.boolean().exactOptional(),
    workspaceLimits: WorkspaceLimitsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'workspaceId',
      'organizationId',
      'customerId',
      'name',
      'slug',
      'initialSetupComplete',
    ],
  })
  .openapi('WorkspaceRead')

const WorkspaceReadListSchema = z
  .object({
    workspaces: z.array(WorkspaceReadSchema),
    total_workspace_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The total number of non-deleted workspaces in the organization, ignoring pagination and keyword filtering. Only populated by organization-scoped list operations.',
      }),
  })
  .openapi({ required: ['workspaces'] })
  .openapi('WorkspaceReadList')

const TimeWindowRequestBodySchema = z
  .object({
    timeWindowInHours: z.int32().openapi({ description: 'Time window value (in hours), e.g. 48' }),
  })
  .openapi({
    description:
      'Input to filter workspaces with most recently running jobs within the given time window',
    required: ['timeWindowInHours'],
  })
  .openapi('TimeWindowRequestBody')

const WorkspaceIdListSchema = z
  .object({ workspaceIds: z.array(WorkspaceIdSchema) })
  .openapi({ description: 'List of workspace IDs', required: ['workspaceIds'] })
  .openapi('WorkspaceIdList')

const WorkspaceUpdateNameSchema = z
  .object({ workspaceId: WorkspaceIdSchema, name: z.string() })
  .openapi({ required: ['workspaceId', 'name'] })
  .openapi('WorkspaceUpdateName')

const WorkspaceUpdateOrganizationSchema = z
  .object({ workspaceId: WorkspaceIdSchema, organizationId: OrganizationIdSchema })
  .openapi({ required: ['workspaceId', 'organizationId'] })
  .openapi('WorkspaceUpdateOrganization')

const NotificationConfigSchema: z.ZodType<NotificationConfigType> = z
  .lazy(() =>
    z
      .object({
        email: EmailNotificationConfigSchema.exactOptional(),
        webhook: WebhookNotificationConfigSchema.exactOptional(),
      })
      .openapi({
        description: 'Configures a notification.',
        'x-sdk-entity': 'Workspace',
        'x-sdk-param-suppress-computed-diff': true,
        'x-sdk-component': true,
        required: [],
      }),
  )
  .openapi('NotificationConfig')

const NotificationsConfigSchema = z
  .object({
    failure: NotificationConfigSchema.exactOptional(),
    success: NotificationConfigSchema.exactOptional(),
    connectionUpdate: NotificationConfigSchema.exactOptional(),
    connectionUpdateActionRequired: NotificationConfigSchema.exactOptional(),
    syncDisabled: NotificationConfigSchema.exactOptional(),
    syncDisabledWarning: NotificationConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Configures workspace notifications.',
    'x-sdk-entity': 'Workspace',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('NotificationsConfig')

const WorkspaceUpdateSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    name: z.string().exactOptional(),
    email: z.email().exactOptional(),
    initialSetupComplete: z.boolean().exactOptional(),
    displaySetupWizard: z.boolean().exactOptional(),
    anonymousDataCollection: z.boolean().exactOptional(),
    news: z.boolean().exactOptional(),
    securityUpdates: z.boolean().exactOptional(),
    notifications: z.array(NotificationSchema).exactOptional(),
    notificationSettings: NotificationSettingsSchema.exactOptional(),
    notificationsConfig: NotificationsConfigSchema.exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    webhookConfigs: z.array(WebhookConfigWriteSchema).exactOptional(),
  })
  .openapi({
    description:
      'Used to apply a patch-style update to a workspace, which means that null properties remain unchanged',
    required: ['workspaceId'],
  })
  .openapi('WorkspaceUpdate')

const WorkspaceGetDbtJobsRequestSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    dbtConfigId: z
      .uuid()
      .openapi({
        description:
          'The config id associated with the dbt Cloud config, references the webhookConfigId in the core API.',
      }),
  })
  .openapi({
    description: 'Get the available dbt Cloud jobs associated with the given workspace config.',
    required: ['workspaceId', 'dbtConfigId'],
  })
  .openapi('WorkspaceGetDbtJobsRequest')

const DbtCloudJobInfoSchema = z
  .object({
    accountId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The account id associated with the job',
      }),
    jobId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The the specific job id returned by the dbt Cloud API',
      }),
    jobName: z
      .string()
      .openapi({ description: 'The human-readable name of the job returned by the dbt Cloud API' }),
  })
  .openapi({ description: 'A dbt Cloud job', required: ['accountId', 'jobId', 'jobName'] })
  .openapi('DbtCloudJobInfo')

const WorkspaceGetDbtJobsResponseSchema = z
  .object({ availableDbtJobs: z.array(DbtCloudJobInfoSchema) })
  .openapi({
    description: 'The available dbt Cloud jobs for the requested workspace config',
    required: ['availableDbtJobs'],
  })
  .openapi('WorkspaceGetDbtJobsResponse')

const ConsumptionTimeWindowSchema = z
  .enum(['lastMonth', 'lastSixMonths', 'lastYear'])
  .default('lastMonth')
  .openapi('ConsumptionTimeWindow')

const WorkspaceUsageRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema, timeWindow: ConsumptionTimeWindowSchema })
  .openapi({ required: ['workspaceId', 'timeWindow'] })
  .openapi('WorkspaceUsageRequestBody')

const NamespaceDefinitionTypeSchema = z
  .enum(['source', 'destination', 'customformat'])
  .openapi({
    description: 'Method used for computing final namespace in destination',
    'x-sdk-component': true,
  })
  .openapi('NamespaceDefinitionType')

const SourceIdSchema = z.uuid().openapi('SourceId')

const DestinationIdSchema = z.uuid().openapi('DestinationId')

const OperationIdSchema = z.uuid().openapi('OperationId')

const StreamJsonSchemaSchema = z
  .object({})
  .openapi({ description: 'Stream schema using Json Schema specs.' })
  .openapi('StreamJsonSchema')

const SyncModeSchema = z.enum(['full_refresh', 'incremental']).openapi('SyncMode')

const AirbyteStreamSchema = z
  .strictObject({
    name: z.string().openapi({ description: "Stream's name." }),
    jsonSchema: StreamJsonSchemaSchema.exactOptional(),
    supportedSyncModes: z.array(SyncModeSchema).exactOptional(),
    sourceDefinedCursor: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the source defines the cursor field, then any other cursor field inputs will be ignored. If it does not, either the user_provided one is used, or the default one is used as a backup.',
      }),
    defaultCursorField: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Path to the field that will be used to determine if a record is new or modified since the last sync. If not provided by the source, the end user will have to specify the comparable themselves.',
      }),
    sourceDefinedPrimaryKey: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'If the source defines the primary key, paths to the fields that will be used as a primary key. If not provided by the source, the end user will have to specify the primary key themselves.',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional Source-defined namespace. Airbyte streams from the same sources should have the same namespace. Currently only used by JDBC destinations to determine what schema to write to.',
      }),
    isResumable: z.boolean().exactOptional(),
    isFileBased: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the stream supports FileReference.' }),
  })
  .openapi({
    description: 'the immutable schema defined by the source',
    required: ['name', 'json_schema'],
  })
  .openapi('AirbyteStream')

const DestinationSyncModeSchema = z
  .enum(['append', 'overwrite', 'append_dedup', 'overwrite_dedup', 'update', 'soft_delete'])
  .openapi('DestinationSyncMode')

const SelectedFieldInfoSchema = z
  .object({ fieldPath: z.array(z.string()).exactOptional() })
  .openapi({
    description:
      'Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called "foo", this will be ["foo"]. Use multiple path elements for nested schemas.',
    'x-sdk-component': true,
    required: [],
  })
  .openapi('SelectedFieldInfo')

const SelectedFieldsSchema = z
  .array(SelectedFieldInfoSchema)
  .openapi({
    description: 'Paths to the fields that will be included in the configured catalog.',
    'x-sdk-component': true,
  })
  .openapi('SelectedFields')

const StreamMapperTypeSchema = z
  .enum(['hashing', 'field-renaming', 'row-filtering', 'encryption', 'field-filtering'])
  .openapi({ 'x-sdk-component': true })
  .openapi('StreamMapperType')

const MapperConfigurationSchema: z.ZodType<MapperConfigurationType> = z
  .lazy(() =>
    z
      .xor([
        HashingMapperConfigurationSchema,
        FieldFilteringMapperConfigurationSchema,
        FieldRenamingMapperConfigurationSchema,
        RowFilteringMapperConfigurationSchema,
        EncryptionMapperConfigurationSchema,
      ])
      .openapi({
        description: 'The values required to configure the mapper.',
        'x-sdk-component': true,
      }),
  )
  .openapi('MapperConfiguration')

const ConfiguredStreamMapperSchema = z
  .object({
    id: z.uuid().exactOptional(),
    type: StreamMapperTypeSchema,
    mapperConfiguration: MapperConfigurationSchema,
  })
  .openapi({ required: ['type', 'mapperConfiguration'], 'x-sdk-component': true })
  .openapi('ConfiguredStreamMapper')

const AirbyteStreamConfigurationSchema = z
  .strictObject({
    syncMode: SyncModeSchema,
    cursorField: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental`. Otherwise it is ignored.',
      }),
    destinationSyncMode: DestinationSyncModeSchema,
    namespace: z.string().exactOptional().openapi({ description: 'Namespace of the stream.' }),
    primaryKey: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup`. Otherwise it is ignored.',
      }),
    aliasName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alias name to the stream to be used in the destination' }),
    selected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this is true, the stream is selected with all of its properties. For new connections, this considers if the stream is suggested or not',
      }),
    suggested: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Does the connector suggest that this stream be enabled by default?',
      }),
    destinationObjectName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the destination object that this stream will be written to. This is used for data activation destinations.',
      }),
    includeFiles: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should the sync move raw files from the source to the destination?',
      }),
    fieldSelectionEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether field selection should be enabled. If this is true, only the properties in `selectedFields` will be included.',
      }),
    selectedFields: SelectedFieldsSchema.exactOptional().openapi({
      description:
        'This must be set if `fieldSelectedEnabled` is set. An empty list indicates that no properties will be included.',
    }),
    hashedFields: SelectedFieldsSchema.exactOptional().openapi({
      description:
        'Fields that should be hashed before being written to the destination. Deprecated, use `mappers` instead.',
    }),
    mappers: z
      .array(ConfiguredStreamMapperSchema)
      .exactOptional()
      .openapi({
        description:
          'Mappers that should be applied to the stream before writing to the destination.',
      }),
    minimumGenerationId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The minimum generation Id of the stream',
      }),
    generationId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Generation Id of the stream' }),
    syncId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Sync id of the stream.' }),
  })
  .openapi({
    description: 'the mutable part of the stream to configure the destination',
    required: ['syncMode', 'destinationSyncMode'],
  })
  .openapi('AirbyteStreamConfiguration')

const AirbyteStreamAndConfigurationSchema = z
  .strictObject({
    stream: AirbyteStreamSchema.exactOptional(),
    config: AirbyteStreamConfigurationSchema.exactOptional(),
  })
  .openapi({
    description:
      'each stream is split in two parts; the immutable schema from source and mutable configuration for destination',
    required: [],
  })
  .openapi('AirbyteStreamAndConfiguration')

const AirbyteCatalogSchema = z
  .object({ streams: z.array(AirbyteStreamAndConfigurationSchema) })
  .openapi({ description: 'describes the available schema (catalog).', required: ['streams'] })
  .openapi('AirbyteCatalog')

const ConnectionScheduleSchema = z
  .object({
    units: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    timeUnit: z.enum(['minutes', 'hours', 'days', 'weeks', 'months']),
  })
  .openapi({ description: 'if null, then no schedule is set.', required: ['units', 'timeUnit'] })
  .openapi('ConnectionSchedule')

const ConnectionScheduleTypeSchema = z
  .enum(['manual', 'basic', 'cron'])
  .openapi({ description: 'determine how the schedule data should be interpreted' })
  .openapi('ConnectionScheduleType')

const ConnectionScheduleDataSchema = z
  .object({
    basicSchedule: z
      .object({
        timeUnit: z.enum(['minutes', 'hours', 'days', 'weeks', 'months']),
        units: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      })
      .exactOptional()
      .openapi({ required: ['timeUnit', 'units'] }),
    cron: z
      .object({ cronExpression: z.string(), cronTimeZone: z.string() })
      .exactOptional()
      .openapi({ required: ['cronExpression', 'cronTimeZone'] }),
  })
  .openapi({
    description: 'schedule for when the the connection should run, per the schedule type',
    required: [],
  })
  .openapi('ConnectionScheduleData')

const ConnectionStatusSchema = z
  .enum(['active', 'inactive', 'deprecated', 'locked'])
  .openapi({
    description:
      'Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. Locked means the connection is temporarily disabled due to external factors (e.g., payment issues). The schema field describes the elements of the schema that will be synced.',
  })
  .openapi('ConnectionStatus')

const ResourceRequirementsSchema = z
  .object({
    cpu_request: z.string().exactOptional(),
    cpu_limit: z.string().exactOptional(),
    memory_request: z.string().exactOptional(),
    memory_limit: z.string().exactOptional(),
    ephemeral_storage_request: z.string().exactOptional(),
    ephemeral_storage_limit: z.string().exactOptional(),
  })
  .openapi({
    'x-sdk-component': true,
    description: 'optional resource requirements to run workers (blank for unbounded allocations)',
    required: [],
  })
  .openapi('ResourceRequirements')

const NonBreakingChangesPreferenceSchema = z
  .enum(['ignore', 'disable', 'propagate_columns', 'propagate_fully'])
  .openapi({ 'x-sdk-component': true })
  .openapi('NonBreakingChangesPreference')

const SchemaChangeBackfillPreferenceSchema = z
  .enum(['enabled', 'disabled'])
  .openapi('SchemaChangeBackfillPreference')

const TagSchema = z
  .object({
    tagId: TagIdSchema,
    workspaceId: WorkspaceIdSchema,
    name: z.string(),
    color: z.string(),
  })
  .openapi({
    description:
      'A tag that can be associated with a connection. Useful for grouping and organizing connections in a workspace.',
    'x-sdk-component': true,
    required: ['tagId', 'workspaceId', 'name', 'color'],
  })
  .openapi('Tag')

const ConnectionReadSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    name: z.string(),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    sourceId: SourceIdSchema,
    destinationId: DestinationIdSchema,
    operationIds: z.array(OperationIdSchema).exactOptional(),
    syncCatalog: AirbyteCatalogSchema,
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema,
    statusReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional reason explaining the current status of the connection' }),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    destinationCatalogId: z.uuid().exactOptional(),
    breakingChange: z.boolean(),
    notifySchemaChanges: z.boolean().exactOptional(),
    notifySchemaChangesByEmail: z.boolean().exactOptional(),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    backfillPreference: SchemaChangeBackfillPreferenceSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema.exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    tags: z.array(TagSchema).exactOptional(),
    onDemandEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled, this connection will use on-demand capacity if committed capacity is exhausted',
      }),
    enableIndexing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Fusion indexing is enabled for this connection.' }),
  })
  .openapi({
    required: [
      'connectionId',
      'name',
      'sourceId',
      'destinationId',
      'syncCatalog',
      'status',
      'breakingChange',
    ],
  })
  .openapi('ConnectionRead')

const SourceDefinitionIdSchema = z.uuid().openapi('SourceDefinitionId')

const SourceConfigurationSchema = z
  .object({})
  .openapi({
    description:
      'The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.',
    example: { user: 'charles' },
    'x-sdk-component': true,
  })
  .openapi('SourceConfiguration')

const DeadlineActionSchema = z.enum(['auto_upgrade', 'disable']).openapi('DeadlineAction')

const ActorDefinitionBreakingChangeSchema = z
  .object({
    version: z.string(),
    message: z.string(),
    upgradeDeadline: z.iso
      .date()
      .openapi({
        'x-field-extra-annotation':
          '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd")',
      }),
    migrationDocumentationUrl: z.string(),
    deadlineAction: DeadlineActionSchema.exactOptional(),
  })
  .openapi({ required: ['version', 'upgradeDeadline', 'message', 'migrationDocumentationUrl'] })
  .openapi('ActorDefinitionBreakingChange')

const ActorDefinitionVersionBreakingChangesSchema = z
  .object({
    upcomingBreakingChanges: z.array(ActorDefinitionBreakingChangeSchema),
    minUpgradeDeadline: z.iso
      .date()
      .openapi({
        'x-field-extra-annotation':
          '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd")',
      }),
    deadlineAction: DeadlineActionSchema.exactOptional(),
  })
  .openapi({ required: ['upcomingBreakingChanges', 'minUpgradeDeadline'] })
  .openapi('ActorDefinitionVersionBreakingChanges')

const SupportStateSchema = z
  .enum(['supported', 'unsupported', 'deprecated'])
  .openapi('SupportState')

const ActorStatusSchema = z
  .enum(['active', 'inactive'])
  .openapi({
    description:
      'An actor(source/destination) is active if it has at least one active or manual connection.',
  })
  .openapi('ActorStatus')

const JobTypeSchema = z
  .enum([
    'get_spec',
    'check_connection',
    'discover_schema',
    'sync',
    'reset_connection',
    'connection_updater',
    'replicate',
  ])
  .openapi({
    'x-sdk-component': true,
    description: 'enum that describes the different types of jobs that the platform runs.',
  })
  .openapi('JobType')

const JobTypeResourceLimitSchema = z
  .strictObject({ jobType: JobTypeSchema, resourceRequirements: ResourceRequirementsSchema })
  .openapi({
    'x-sdk-component': true,
    description:
      'sets resource requirements for a specific job type for an actor or actor definition. these values override the default, if both are set.',
    required: ['jobType', 'resourceRequirements'],
  })
  .openapi('JobTypeResourceLimit')

const ScopedResourceRequirementsSchema = z
  .strictObject({
    default: ResourceRequirementsSchema.exactOptional(),
    jobSpecific: z.array(JobTypeResourceLimitSchema).exactOptional(),
  })
  .openapi({
    'x-sdk-component': true,
    description:
      'actor or actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.',
    required: [],
  })
  .openapi('ScopedResourceRequirements')

const SourceReadSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceId: SourceIdSchema,
    workspaceId: WorkspaceIdSchema,
    connectionConfiguration: SourceConfigurationSchema,
    name: z.string(),
    sourceName: z.string(),
    icon: z.string().exactOptional(),
    isVersionOverrideApplied: z.boolean().exactOptional(),
    isEntitled: z.boolean().exactOptional(),
    breakingChanges: ActorDefinitionVersionBreakingChangesSchema.exactOptional(),
    supportState: SupportStateSchema.exactOptional(),
    status: ActorStatusSchema.exactOptional(),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    isDraft: z.boolean().exactOptional(),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
    numConnections: z.int().exactOptional(),
    lastSync: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    connectionJobStatuses: z
      .record(z.string(), z.int())
      .exactOptional()
      .openapi({
        description: 'Map of job status to count of connections whose latest job has that status',
      }),
  })
  .openapi({
    required: [
      'sourceDefinitionId',
      'sourceId',
      'workspaceId',
      'connectionConfiguration',
      'name',
      'sourceName',
      'createdAt',
    ],
  })
  .openapi('SourceRead')

const SupportLevelSchema = z
  .enum(['community', 'certified', 'archived', 'none'])
  .openapi('SupportLevel')

const ReleaseStageSchema = z
  .enum(['alpha', 'beta', 'generally_available', 'custom'])
  .openapi('ReleaseStage')

const ISO8601DateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    'x-field-extra-annotation':
      '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd\'T\'HH:mm:ss.SSSZ")',
  })
  .openapi('ISO8601DateTime')

const SourceDefinitionReadSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema,
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    documentationUrl: z.url().exactOptional(),
    icon: z.string().exactOptional(),
    protocolVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Airbyte Protocol version supported by the connector' }),
    custom: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the connector is custom or not' }),
    enterprise: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the connector is an enterprise connector' }),
    supportLevel: SupportLevelSchema.exactOptional(),
    releaseStage: ReleaseStageSchema.exactOptional(),
    releaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date when this connector was first released, in yyyy-mm-dd format.',
        'x-field-extra-annotation':
          '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd")',
      }),
    sourceType: z.enum(['api', 'file', 'database', 'custom']).exactOptional(),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
    maxSecondsBetweenMessages: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Number of seconds allowed between 2 airbyte protocol messages. The source will timeout if this delay is reach',
      }),
    lastPublished: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'The time the connector was modified in the codebase.',
    }),
    cdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the CDK that the connector was built with. e.g. python:0.1.0, java:0.1.0',
      }),
    metrics: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Public metrics for the connector' }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language the connector is written in' }),
  })
  .openapi({ required: ['sourceDefinitionId', 'name', 'dockerRepository', 'dockerImageTag'] })
  .openapi('SourceDefinitionRead')

const DestinationDefinitionIdSchema = z.uuid().openapi('DestinationDefinitionId')

const DestinationConfigurationSchema = z
  .object({})
  .openapi({
    description:
      'The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.',
    example: { user: 'charles' },
    'x-sdk-component': true,
  })
  .openapi('DestinationConfiguration')

const DestinationReadSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    destinationId: DestinationIdSchema,
    workspaceId: WorkspaceIdSchema,
    connectionConfiguration: DestinationConfigurationSchema,
    name: z.string(),
    destinationName: z.string(),
    icon: z.string().exactOptional(),
    isVersionOverrideApplied: z.boolean().exactOptional(),
    isEntitled: z.boolean().exactOptional(),
    breakingChanges: ActorDefinitionVersionBreakingChangesSchema.exactOptional(),
    supportState: SupportStateSchema.exactOptional(),
    status: ActorStatusSchema.exactOptional(),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    isDraft: z.boolean().exactOptional(),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
    numConnections: z.int().exactOptional(),
    lastSync: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    connectionJobStatuses: z
      .record(z.string(), z.int())
      .exactOptional()
      .openapi({
        description: 'Map of job status to count of connections whose latest job has that status',
      }),
  })
  .openapi({
    required: [
      'destinationDefinitionId',
      'destinationId',
      'workspaceId',
      'connectionConfiguration',
      'name',
      'destinationName',
      'createdAt',
    ],
  })
  .openapi('DestinationRead')

const DestinationDefinitionReadSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    documentationUrl: z.url(),
    icon: z.string().exactOptional(),
    protocolVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Airbyte Protocol version supported by the connector' }),
    custom: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the connector is custom or not' }),
    enterprise: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the connector is an enterprise connector' }),
    supportLevel: SupportLevelSchema.exactOptional(),
    releaseStage: ReleaseStageSchema.exactOptional(),
    releaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date when this connector was first released, in yyyy-mm-dd format.',
      }),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
    lastPublished: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'The time the connector was modified in the codebase.',
    }),
    cdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the CDK that the connector was built with. e.g. python:0.1.0, java:0.1.0',
      }),
    metrics: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Public metrics for the connector' }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language the connector is written in' }),
    supportsDataActivation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the connector supports data activation' }),
  })
  .openapi({
    required: [
      'destinationDefinitionId',
      'name',
      'dockerRepository',
      'dockerImageTag',
      'documentationUrl',
    ],
  })
  .openapi('DestinationDefinitionRead')

const TimeframeUsageSchema = z
  .object({ timeframeStart: z.string(), timeframeEnd: z.string(), quantity: z.float64() })
  .openapi({ required: ['timeframeStart', 'timeframeEnd', 'quantity'] })
  .openapi('TimeframeUsage')

const UsageBucketSchema = z
  .object({
    free: z.array(TimeframeUsageSchema),
    regular: z.array(TimeframeUsageSchema),
    internal: z.array(TimeframeUsageSchema),
  })
  .openapi({ required: ['free', 'regular', 'internal'] })
  .openapi('UsageBucket')

const ConnectionUsageReadSchema = z
  .object({
    connection: ConnectionReadSchema,
    source: SourceReadSchema,
    sourceDefinition: SourceDefinitionReadSchema,
    destination: DestinationReadSchema,
    destinationDefinition: DestinationDefinitionReadSchema,
    usage: UsageBucketSchema,
  })
  .openapi({
    required: [
      'connection',
      'source',
      'sourceDefinition',
      'destination',
      'destinationDefinition',
      'usage',
    ],
  })
  .openapi('ConnectionUsageRead')

const WorkspaceUsageReadSchema = z
  .object({ data: z.array(ConnectionUsageReadSchema) })
  .openapi({ required: ['data'] })
  .openapi('WorkspaceUsageRead')

const WorkspaceDataWorkerAvailabilityRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema, organizationId: OrganizationIdSchema })
  .openapi({ required: ['workspaceId', 'organizationId'] })
  .openapi('WorkspaceDataWorkerAvailabilityRequestBody')

const WorkspaceDataWorkerAvailabilityReadSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    organizationId: OrganizationIdSchema,
    outOfDataWorkers: z
      .boolean()
      .openapi({
        description: 'Whether the Data Worker capacity available to this workspace is exhausted.',
      }),
    enforcementEnabled: z
      .boolean()
      .openapi({
        description:
          "Whether Data Worker capacity enforcement is enabled for the workspace's organization.",
      }),
    currentDataWorkers: z
      .float64()
      .openapi({ description: 'Data Worker usage counted against the committed capacity below.' }),
    committedDataWorkers: z
      .float64()
      .openapi({ description: 'Committed Data Worker capacity available to this workspace.' }),
  })
  .openapi({
    required: [
      'workspaceId',
      'organizationId',
      'outOfDataWorkers',
      'enforcementEnabled',
      'currentDataWorkers',
      'committedDataWorkers',
    ],
  })
  .openapi('WorkspaceDataWorkerAvailabilityRead')

const WorkspaceGiveFeedbackSchema = z
  .object({ workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId'] })
  .openapi('WorkspaceGiveFeedback')

const WebBackendWorkspaceStateSchema = z
  .object({ workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId'] })
  .openapi('WebBackendWorkspaceState')

const WebBackendWorkspaceStateResultSchema = z
  .object({ hasConnections: z.boolean(), hasSources: z.boolean(), hasDestinations: z.boolean() })
  .openapi({ required: ['hasConnections', 'hasSources', 'hasDestinations'] })
  .openapi('WebBackendWorkspaceStateResult')

const WebBackendConnectionStatusCountsSchema = z
  .object({
    running: z.int().openapi({ description: 'Number of connections currently running/syncing' }),
    queued: z
      .int()
      .openapi({ description: 'Number of connections currently queued and waiting to start' }),
    healthy: z.int().openapi({ description: 'Number of connections with last sync succeeded' }),
    failed: z
      .int()
      .openapi({ description: 'Number of connections with last sync failed/cancelled/incomplete' }),
    paused: z.int().openapi({ description: 'Number of connections that are inactive' }),
    notSynced: z.int().openapi({ description: 'Number of connections that have not yet synced' }),
  })
  .openapi({ required: ['running', 'queued', 'healthy', 'failed', 'paused', 'notSynced'] })
  .openapi('WebBackendConnectionStatusCounts')

const SlugRequestBodySchema = z
  .object({ slug: z.string() })
  .openapi({ required: ['slug'] })
  .openapi('SlugRequestBody')

const ConnectorBuilderProjectIdSchema = z.uuid().openapi('ConnectorBuilderProjectId')

const DeclarativeManifestSchema = z
  .object({})
  .openapi({
    'x-sdk-component': true,
    'x-speakeasy-type-override': 'any',
    'x-speakeasy-terraform-custom-type': {
      imports: ['github.com/hashicorp/terraform-plugin-framework-jsontypes/jsontypes'],
      schemaType: 'jsontypes.NormalizedType{}',
      valueType: 'jsontypes.Normalized',
    },
    description: 'Low code CDK manifest JSON object',
  })
  .openapi('DeclarativeManifest')

const DeclarativeManifestBaseImageReadSchema = z
  .object({ baseImage: z.string().exactOptional() })
  .openapi({ description: 'Base image associated with a declarative manifest', required: [] })
  .openapi('DeclarativeManifestBaseImageRead')

const ManifestVersionSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64', 'x-sdk-component': true })
  .openapi('ManifestVersion')

const DeclarativeManifestReadSchema = z
  .object({
    manifest: DeclarativeManifestSchema.exactOptional(),
    isDraft: z.boolean().exactOptional(),
    version: ManifestVersionSchema.exactOptional(),
    description: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeclarativeManifestRead')

const DeclarativeManifestRequestBodySchema = z
  .object({ manifest: DeclarativeManifestSchema })
  .openapi({ required: ['manifest'] })
  .openapi('DeclarativeManifestRequestBody')

const NullableActorDefinitionVersionIdSchema = z
  .uuid()
  .nullable()
  .openapi('NullableActorDefinitionVersionId')

const ConnectorBuilderProjectDetailsSchema = z
  .object({
    name: z.string(),
    draftManifest: DeclarativeManifestSchema.exactOptional(),
    yamlManifest: z.string().exactOptional(),
    componentsFileContent: z.string().exactOptional(),
    baseActorDefinitionVersionId: NullableActorDefinitionVersionIdSchema.exactOptional(),
    contributionPullRequestUrl: z.string().nullable().exactOptional(),
    contributionActorDefinitionId: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('ConnectorBuilderProjectDetails')

const ActorDefinitionIdSchema = z
  .uuid()
  .openapi({ description: 'A unique identifier for an actor definition.', 'x-sdk-component': true })
  .openapi('ActorDefinitionId')

const BaseActorDefinitionVersionInfoSchema = z
  .object({
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    actorDefinitionId: ActorDefinitionIdSchema,
    icon: z.string().exactOptional(),
    documentationUrl: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'dockerRepository', 'dockerImageTag', 'actorDefinitionId'] })
  .openapi('BaseActorDefinitionVersionInfo')

const ContributionInfoSchema = z
  .object({ pullRequestUrl: z.string(), actorDefinitionId: ActorDefinitionIdSchema })
  .openapi({ required: ['pullRequestUrl', 'actorDefinitionId'] })
  .openapi('ContributionInfo')

const ConnectorBuilderProjectDetailsReadSchema = z
  .object({
    name: z.string(),
    builderProjectId: ConnectorBuilderProjectIdSchema,
    sourceDefinitionId: SourceDefinitionIdSchema.exactOptional(),
    activeDeclarativeManifestVersion: ManifestVersionSchema.exactOptional(),
    hasDraft: z.boolean(),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Absent when reading a specific manifest version of the project.',
      }),
    baseActorDefinitionVersionInfo: BaseActorDefinitionVersionInfoSchema.exactOptional(),
    contributionInfo: ContributionInfoSchema.exactOptional(),
    componentsFileContent: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'builderProjectId', 'hasDraft'] })
  .openapi('ConnectorBuilderProjectDetailsRead')

const ConnectorBuilderProjectIdWithWorkspaceIdSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    builderProjectId: ConnectorBuilderProjectIdSchema,
    version: ManifestVersionSchema.exactOptional(),
  })
  .openapi({ required: ['workspaceId', 'builderProjectId'] })
  .openapi('ConnectorBuilderProjectIdWithWorkspaceId')

const ConnectorBuilderProjectForkRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema, baseActorDefinitionId: SourceDefinitionIdSchema })
  .openapi({ required: ['workspaceId', 'baseActorDefinitionId'] })
  .openapi('ConnectorBuilderProjectForkRequestBody')

const ExistingConnectorBuilderProjectWithWorkspaceIdSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    builderProjectId: ConnectorBuilderProjectIdSchema,
    builderProject: ConnectorBuilderProjectDetailsSchema,
  })
  .openapi({ required: ['workspaceId', 'builderProjectId', 'builderProject'] })
  .openapi('ExistingConnectorBuilderProjectWithWorkspaceId')

const ConnectorBuilderProjectWithWorkspaceIdSchema = z
  .object({ workspaceId: WorkspaceIdSchema, builderProject: ConnectorBuilderProjectDetailsSchema })
  .openapi({ required: ['workspaceId', 'builderProject'] })
  .openapi('ConnectorBuilderProjectWithWorkspaceId')

const BuilderProjectForDefinitionRequestBodySchema = z
  .object({ actorDefinitionId: ActorDefinitionIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['actorDefinitionId', 'workspaceId'] })
  .openapi('BuilderProjectForDefinitionRequestBody')

const BuilderProjectForDefinitionResponseSchema = z
  .object({
    builderProjectId: z.uuid().nullable().exactOptional(),
    workspaceId: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuilderProjectForDefinitionResponse')

const ConnectorBuilderProjectTestingValuesSchema = z
  .object({})
  .openapi({ description: 'The config blob containing the user inputs for testing' })
  .openapi('ConnectorBuilderProjectTestingValues')

const ConnectorBuilderProjectReadSchema = z
  .object({
    builderProject: ConnectorBuilderProjectDetailsReadSchema,
    declarativeManifest: DeclarativeManifestReadSchema.exactOptional(),
    testingValues: ConnectorBuilderProjectTestingValuesSchema.exactOptional(),
  })
  .openapi({ required: ['builderProject'] })
  .openapi('ConnectorBuilderProjectRead')

const ConnectorBuilderProjectReadListSchema = z
  .object({ projects: z.array(ConnectorBuilderProjectDetailsReadSchema) })
  .openapi({ required: ['projects'] })
  .openapi('ConnectorBuilderProjectReadList')

const SourceDefinitionSpecificationSchema = z
  .object({})
  .openapi({
    description:
      'The specification for what values are required to configure the sourceDefinition.',
    example: { user: { type: 'string' } },
    'x-sdk-component': true,
  })
  .openapi('SourceDefinitionSpecification')

const DeclarativeSourceManifestSchema = z
  .object({
    description: z.string(),
    manifest: DeclarativeManifestSchema,
    spec: SourceDefinitionSpecificationSchema,
    version: ManifestVersionSchema,
  })
  .openapi({ required: ['description', 'manifest', 'spec', 'version'] })
  .openapi('DeclarativeSourceManifest')

const ConnectorBuilderPublishRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    builderProjectId: ConnectorBuilderProjectIdSchema,
    name: z.string(),
    initialDeclarativeManifest: DeclarativeSourceManifestSchema,
    componentsFileContent: z.string().exactOptional(),
  })
  .openapi({ required: ['workspaceId', 'builderProjectId', 'name', 'initialDeclarativeManifest'] })
  .openapi('ConnectorBuilderPublishRequestBody')

const ConnectorBuilderProjectTestingValuesUpdateSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    builderProjectId: ConnectorBuilderProjectIdSchema,
    spec: SourceDefinitionSpecificationSchema,
    testingValues: ConnectorBuilderProjectTestingValuesSchema,
  })
  .openapi({ required: ['workspaceId', 'builderProjectId', 'spec', 'testingValues'] })
  .openapi('ConnectorBuilderProjectTestingValuesUpdate')

const ConnectorBuilderProjectStreamReadRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    builderProjectId: ConnectorBuilderProjectIdSchema,
    manifest: DeclarativeManifestSchema,
    streamName: z.string().openapi({ description: 'Name of the stream to read' }),
    customComponentsCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom components python code to use during source execution' }),
    formGeneratedManifest: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the manifest was auto-generated from the form-based Connector Builder UI',
      }),
    recordLimit: z
      .int()
      .min(1)
      .max(10000)
      .default(1000)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of records that will be returned to the client from connector builder test reads',
      }),
    pageLimit: z
      .int()
      .min(1)
      .max(20)
      .default(5)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of pages that will be returned to the client from connector builder test reads',
      }),
    sliceLimit: z
      .int()
      .min(1)
      .max(20)
      .default(5)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of slices that will be returned to the client from connector builder test reads',
      }),
    state: z
      .array(
        z
          .object({})
          .openapi({
            description:
              'The AirbyteStateMessage object to use as the starting state for this read',
          }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['workspaceId', 'builderProjectId', 'manifest', 'streamName'] })
  .openapi('ConnectorBuilderProjectStreamReadRequestBody')

const ConnectorBuilderHttpRequestSchema = z
  .object({
    url: z.string().openapi({ description: 'URL that the request was sent to' }),
    parameters: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The request parameters that were set on the HTTP request, if any' }),
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the HTTP request, if present' }),
    headers: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The headers of the HTTP request, if any' }),
    http_method: z
      .enum(['GET', 'POST', 'PUT', 'PATCH'])
      .openapi({
        description: 'The http method of the request ("GET", "POST", "PUT", or "PATCH")',
      }),
  })
  .openapi({ required: ['url', 'http_method'] })
  .openapi('ConnectorBuilderHttpRequest')

const ConnectorBuilderHttpResponseSchema = z
  .object({
    status: z.int().openapi({ description: 'The status of the response' }),
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the HTTP response, if present' }),
    headers: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The headers of the HTTP response, if any' }),
  })
  .openapi({ required: ['status'] })
  .openapi('ConnectorBuilderHttpResponse')

const ConnectorBuilderAuxiliaryRequestSchema = z
  .object({
    description: z.string(),
    request: ConnectorBuilderHttpRequestSchema,
    response: ConnectorBuilderHttpResponseSchema,
    title: z.string(),
    type: z.enum([
      'HTTP',
      'AUTH',
      'PARENT_STREAM',
      'ASYNC_CREATE',
      'ASYNC_POLL',
      'ASYNC_ABORT',
      'ASYNC_DELETE',
    ]),
  })
  .openapi({ required: ['description', 'request', 'response', 'title', 'type'] })
  .openapi('ConnectorBuilderAuxiliaryRequest')

const ConnectorBuilderProjectStreamReadSchema = z
  .object({
    logs: z
      .array(
        z
          .object({
            message: z.string(),
            level: z.enum(['INFO', 'WARN', 'ERROR', 'FATAL']),
            internal_message: z.string().exactOptional(),
            stacktrace: z.string().exactOptional(),
          })
          .openapi({ required: ['message', 'level'] }),
      )
      .openapi({
        description: 'The LOG AirbyteMessages that were emitted during the read of this slice',
      }),
    slices: z
      .array(
        z
          .object({
            pages: z
              .array(
                z
                  .object({
                    records: z
                      .array(z.object({}))
                      .openapi({
                        description:
                          'The RECORD AirbyteMessages coming from the read operation for this page',
                      }),
                    request: ConnectorBuilderHttpRequestSchema.exactOptional(),
                    response: ConnectorBuilderHttpResponseSchema.exactOptional(),
                  })
                  .openapi({ required: ['records'] }),
              )
              .openapi({
                description:
                  'The pages returned from the read command. If no pagination is configured, this should contain a single item containing all of the results.',
              }),
            slice_descriptor: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'An object describing the current slice. This can be omitted if a stream slicer is not configured.',
              }),
            state: z
              .array(
                z
                  .object({})
                  .openapi({
                    description:
                      'The STATE AirbyteMessage emitted at the end of this slice. This can be omitted if a stream slicer is not configured.',
                  }),
              )
              .exactOptional(),
            auxiliary_requests: z
              .array(ConnectorBuilderAuxiliaryRequestSchema)
              .exactOptional()
              .openapi({
                description:
                  'Non-data requests made at the slice level, e.g. creation / polling requests for async stream slices',
              }),
          })
          .openapi({ required: ['pages'] }),
      )
      .openapi({
        description:
          'The stream slices returned from the read command. If no stream slicer is configured, this should contain a single item containing all of the results.',
      }),
    test_read_limit_reached: z
      .boolean()
      .openapi({
        description:
          'Whether the maximum number of request per slice or the maximum number of slices queried has been reached',
      }),
    auxiliary_requests: z.array(ConnectorBuilderAuxiliaryRequestSchema).exactOptional(),
    inferred_schema: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The narrowest JSON Schema against which every AirbyteRecord in the slices can validate successfully. This is inferred from reading every record in the output slices.',
      }),
    inferred_datetime_formats: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Fields that match the given datetime format in every encountered record. The property names are the fields, the property values are the datetime formats.',
      }),
    latest_config_update: ConnectorBuilderProjectTestingValuesSchema.exactOptional().openapi({
      description:
        'The latest configuration emitted by the platform. The connector builder uses this to update its state when a new configuration is generated, to ensure that the user always work with the latest configuration.',
    }),
  })
  .openapi({ required: ['logs', 'slices', 'test_read_limit_reached'] })
  .openapi('ConnectorBuilderProjectStreamRead')

const ConnectorBuilderProjectFullResolveRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema.exactOptional(),
    builderProjectId: ConnectorBuilderProjectIdSchema.exactOptional(),
    streamLimit: z
      .int()
      .min(1)
      .max(100)
      .default(5)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of generated streams that will be returned to the client from connector builder test reads',
      }),
    manifest: DeclarativeManifestSchema,
  })
  .openapi({ required: ['manifest'] })
  .openapi('ConnectorBuilderProjectFullResolveRequestBody')

const ConnectorBuilderResolvedManifestSchema = z
  .object({
    manifest: z
      .object({})
      .openapi({
        description:
          'The config-based connector manifest contents with $refs and $parameters resolved',
      }),
  })
  .openapi({ required: ['manifest'] })
  .openapi('ConnectorBuilderResolvedManifest')

const ConnectorBuilderProjectResolveRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema.exactOptional(),
    builderProjectId: ConnectorBuilderProjectIdSchema.exactOptional(),
    manifest: DeclarativeManifestSchema,
  })
  .openapi({ required: ['manifest'] })
  .openapi('ConnectorBuilderProjectResolveRequestBody')

const ConnectorBuilderCapabilitiesSchema = z
  .object({
    customCodeExecution: z
      .boolean()
      .openapi({ description: 'Whether custom code execution is supported' }),
  })
  .openapi({ required: ['customCodeExecution'] })
  .openapi('ConnectorBuilderCapabilities')

const CheckContributionRequestBodySchema = z
  .object({
    connector_image_name: z
      .string()
      .openapi({ description: 'The id of the connector being submitted for contribution' }),
  })
  .openapi({ required: ['connector_image_name'] })
  .openapi('CheckContributionRequestBody')

const CheckContributionReadSchema = z
  .object({
    connector_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the connector in Github, if it exists' }),
    connector_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text description of the connector in Github, if it exists' }),
    github_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Github URL of the connector in the airbyte repository, if it exists',
      }),
    connector_exists: z
      .boolean()
      .openapi({
        description: 'Indicates whether a connector already exists with the provided image name',
      }),
  })
  .openapi({ required: ['connector_exists'] })
  .openapi('CheckContributionRead')

const GenerateContributionRequestBodySchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Name of the connector being contributed, e.g. Google Sheets' }),
    connector_image_name: z
      .string()
      .openapi({ description: 'The name of the connector module, e.g. source-google-sheets' }),
    connector_description: z
      .string()
      .openapi({ description: 'Brief description of the connector and the API it integrates' }),
    github_token: z
      .string()
      .openapi({
        description: 'Github Personal Access Token that should be used to create the PR',
      }),
    manifest_yaml: z.string().openapi({ description: 'The connector manifest in YAML form' }),
    custom_components: z
      .string()
      .exactOptional()
      .openapi({
        description: '(Optional) The file contents for any custom python CDK components',
      }),
    base_image: z.string().openapi({ description: 'The base image to use for the connector' }),
    contribution_description: z
      .string()
      .openapi({
        description:
          'Message describing the content of the contribution, including any changes to the connector',
      }),
  })
  .openapi({
    required: [
      'name',
      'connector_image_name',
      'github_token',
      'manifest_yaml',
      'base_image',
      'connector_description',
      'contribution_description',
    ],
  })
  .openapi('GenerateContributionRequestBody')

const GenerateContributionResponseSchema = z
  .object({
    pull_request_url: z
      .string()
      .openapi({ description: 'URL of the PR that was created or updated' }),
    actor_definition_id: z
      .uuid()
      .openapi({ description: 'The definition ID of the connector that was contributed to' }),
  })
  .openapi({ required: ['pull_request_url', 'actor_definition_id'] })
  .openapi('GenerateContributionResponse')

const AssistV1ProcessRequestBodySchema = z.looseObject({}).openapi('AssistV1ProcessRequestBody')

const AssistV1ProcessSchema = z.looseObject({}).openapi('AssistV1Process')

const SourceDefinitionIdBodySchema = z
  .object({ sourceDefinitionId: SourceDefinitionIdSchema })
  .openapi({ required: ['sourceDefinitionId'] })
  .openapi('SourceDefinitionIdBody')

const ConnectorDocumentationRequestBodySchema = z
  .object({
    actorType: ActorTypeSchema,
    actorDefinitionId: ActorDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
    actorId: ActorIdSchema.exactOptional(),
  })
  .openapi({ required: ['actorType', 'actorDefinitionId', 'workspaceId'] })
  .openapi('ConnectorDocumentationRequestBody')

const ConnectorDocumentationReadSchema = z
  .object({ doc: z.string() })
  .openapi({ required: ['doc'] })
  .openapi('ConnectorDocumentationRead')

const SourceDefinitionIdRequestBodySchema = z
  .object({ sourceDefinitionId: SourceDefinitionIdSchema })
  .openapi({ required: ['sourceDefinitionId'] })
  .openapi('SourceDefinitionIdRequestBody')

const SourceDefinitionCreateSchema = z
  .object({
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    documentationUrl: z.url(),
    icon: z.string().exactOptional(),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
    connectorSpecification: SourceDefinitionSpecificationSchema.exactOptional().openapi({
      description:
        'Optional pre-fetched connector specification. If provided, the backend will skip fetching the spec.',
    }),
  })
  .openapi({ required: ['name', 'dockerRepository', 'dockerImageTag', 'documentationUrl'] })
  .openapi('SourceDefinitionCreate')

const SourceDefinitionUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    sourceDefinitionId: SourceDefinitionIdSchema,
    dockerImageTag: z.string(),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({
    description:
      'Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.',
    required: ['sourceDefinitionId', 'dockerImageTag', 'workspaceId'],
  })
  .openapi('SourceDefinitionUpdate')

const SourceDefinitionReadListSchema = z
  .object({ sourceDefinitions: z.array(SourceDefinitionReadSchema) })
  .openapi({ required: ['sourceDefinitions'] })
  .openapi('SourceDefinitionReadList')

const EnterpriseConnectorStubSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The id of the enterprise source connector stub. We use "source-<name>-enterprise" as the ID since these connectors do not necessarily exist yet, and do not have a guaranteed definitionId',
      }),
    definitionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the source definition associated with the enterprise connector, if one exists',
      }),
    name: z.string().openapi({ description: 'The name of the enterprise connector' }),
    url: z
      .string()
      .openapi({
        description:
          'A url associated with the Enterprise connector. Currently represents a link to the documentation.',
      }),
    icon: z.string().openapi({ description: "The url of the connector's icon" }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connector\'s label (ie, "enterprise")' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connector\'s type (ie, "enterprise_source")' }),
  })
  .openapi({ required: ['id', 'name', 'url', 'icon'] })
  .openapi('EnterpriseConnectorStub')

const EnterpriseConnectorStubsReadListSchema = z
  .object({
    enterpriseConnectorStubs: z
      .array(EnterpriseConnectorStubSchema)
      .openapi({ description: 'A list of source stubs fetched from a JSON file.' }),
  })
  .openapi({ required: ['enterpriseConnectorStubs'] })
  .openapi('EnterpriseConnectorStubsReadList')

const ScopeIdSchema = z.uuid().openapi('ScopeId')

const ScopeTypeSchema = z.enum(['workspace', 'organization']).openapi('ScopeType')

const CustomSourceDefinitionCreateSchema = z
  .object({
    workspaceId: WorkspaceIdSchema.exactOptional(),
    scopeId: ScopeIdSchema.exactOptional(),
    scopeType: ScopeTypeSchema.exactOptional(),
    sourceDefinition: SourceDefinitionCreateSchema,
  })
  .openapi({ required: ['sourceDefinition'] })
  .openapi('CustomSourceDefinitionCreate')

const SourceDefinitionIdWithWorkspaceIdSchema = z
  .object({ sourceDefinitionId: SourceDefinitionIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId'] })
  .openapi('SourceDefinitionIdWithWorkspaceId')

const ActorDefinitionIdWithScopeSchema = z
  .object({
    actorDefinitionId: ActorDefinitionIdSchema,
    scopeId: ScopeIdSchema,
    scopeType: ScopeTypeSchema,
  })
  .openapi({ required: ['actorDefinitionId', 'scopeId', 'scopeType'] })
  .openapi('ActorDefinitionIdWithScope')

const ActorDefinitionSpecSchema = z
  .object({
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    documentationUrl: z.url(),
    icon: z.string().exactOptional(),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'dockerRepository', 'dockerImageTag', 'documentationUrl'] })
  .openapi('ActorDefinitionSpec')

const ActorUpdateRequestSchema = z
  .object({
    actorType: ActorTypeSchema,
    actorDefinitionId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The actor definition ID (null for create operations, required for updates)',
      }),
    imageName: z.string().openapi({ description: 'The Docker image name/repository' }),
    imageTag: z.string().openapi({ description: 'The Docker image tag' }),
  })
  .openapi({ required: ['actorType', 'imageName', 'imageTag'] })
  .openapi('ActorUpdateRequest')

const ActorDefinitionMetadataSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the actor definition' }),
    icon: z.string().exactOptional().openapi({ description: 'URL or path to the icon' }),
    documentationUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to the connector documentation' }),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActorDefinitionMetadata')

const ActorDefinitionFinishRequestSchema = z
  .object({
    actorUpdateRequest: ActorUpdateRequestSchema,
    metadata: ActorDefinitionMetadataSchema,
    commandId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The command ID from the spec command that was executed' }),
    workspaceId: z.uuid().openapi({ description: 'The workspace ID' }),
  })
  .openapi({ required: ['actorUpdateRequest', 'metadata', 'workspaceId'] })
  .openapi('ActorDefinitionFinishRequest')

const ResolveActorDefinitionVersionRequestBodySchema = z
  .object({
    actorDefinitionId: ActorDefinitionIdSchema,
    actorType: ActorTypeSchema,
    dockerImageTag: z.string(),
  })
  .openapi({ required: ['actorDefinitionId', 'actorType', 'dockerImageTag'] })
  .openapi('ResolveActorDefinitionVersionRequestBody')

const GetActorDefinitionVersionDefaultRequestBodySchema = z
  .object({ actorDefinitionId: ActorDefinitionIdSchema })
  .openapi({ required: ['actorDefinitionId'] })
  .openapi('GetActorDefinitionVersionDefaultRequestBody')

const ListDeclarativeManifestsRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema, sourceDefinitionId: SourceDefinitionIdSchema })
  .openapi({ required: ['workspaceId', 'sourceDefinitionId'] })
  .openapi('ListDeclarativeManifestsRequestBody')

const DeclarativeManifestVersionReadSchema = z
  .object({
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    isActive: z.boolean(),
    description: z.string(),
  })
  .openapi({ required: ['version', 'isActive', 'description'] })
  .openapi('DeclarativeManifestVersionRead')

const DeclarativeManifestsReadListSchema = z
  .object({ manifestVersions: z.array(DeclarativeManifestVersionReadSchema) })
  .openapi({ required: ['manifestVersions'] })
  .openapi('DeclarativeManifestsReadList')

const DeclarativeSourceDefinitionCreateManifestRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    sourceDefinitionId: SourceDefinitionIdSchema,
    setAsActiveManifest: z.boolean(),
    declarativeManifest: DeclarativeSourceManifestSchema,
    componentsFileContent: z.string().exactOptional(),
  })
  .openapi({
    required: ['workspaceId', 'sourceDefinitionId', 'setAsActiveManifest', 'declarativeManifest'],
  })
  .openapi('DeclarativeSourceDefinitionCreateManifestRequestBody')

const UpdateActiveManifestRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    sourceDefinitionId: SourceDefinitionIdSchema,
    version: ManifestVersionSchema,
  })
  .openapi({ required: ['workspaceId', 'sourceDefinitionId', 'version'] })
  .openapi('UpdateActiveManifestRequestBody')

const PrivateSourceDefinitionReadSchema = z
  .object({ sourceDefinition: SourceDefinitionReadSchema, granted: z.boolean() })
  .openapi({ required: ['sourceDefinition', 'granted'] })
  .openapi('PrivateSourceDefinitionRead')

const PrivateSourceDefinitionReadListSchema = z
  .object({ sourceDefinitions: z.array(PrivateSourceDefinitionReadSchema) })
  .openapi({ required: ['sourceDefinitions'] })
  .openapi('PrivateSourceDefinitionReadList')

const OAuthConfigurationSchema = z
  .any()
  .openapi({
    description:
      'The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.',
    'x-sdk-component': true,
  })
  .openapi('OAuthConfiguration')

const OAuthConfigSpecificationSchema = z
  .object({
    oauthUserInputFromConnectorConfigSpecification:
      OAuthConfigurationSchema.exactOptional().openapi({
        description:
          "OAuth specific blob. This is a Json Schema used to validate Json configurations used as input to OAuth.\nMust be a valid non-nested JSON that refers to properties from ConnectorSpecification.connectionSpecification\nusing special annotation 'path_in_connector_config'.\nThese are input values the user is entering through the UI to authenticate to the connector, that might also shared\nas inputs for syncing data via the connector.\n\nExamples:\n\nif no connector values is shared during oauth flow, oauth_user_input_from_connector_config_specification=[]\nif connector values such as 'app_id' inside the top level are used to generate the API url for the oauth flow,\n  oauth_user_input_from_connector_config_specification={\n    app_id: {\n      type: string\n      path_in_connector_config: ['app_id']\n    }\n  }\nif connector values such as 'info.app_id' nested inside another object are used to generate the API url for the oauth flow,\n  oauth_user_input_from_connector_config_specification={\n    app_id: {\n      type: string\n      path_in_connector_config: ['info', 'app_id']\n    }\n  }",
      }),
    completeOAuthOutputSpecification: OAuthConfigurationSchema.exactOptional().openapi({
      description:
        "OAuth specific blob. This is a Json Schema used to validate Json configurations produced by the OAuth flows as they are\nreturned by the distant OAuth APIs.\nMust be a valid JSON describing the fields to merge back to `ConnectorSpecification.connectionSpecification`.\nFor each field, a special annotation `path_in_connector_config` can be specified to determine where to merge it,\n\nExamples:\n\n    complete_oauth_output_specification={\n      refresh_token: {\n        type: string,\n        path_in_connector_config: ['credentials', 'refresh_token']\n      }\n    }",
    }),
    completeOAuthServerInputSpecification: OAuthConfigurationSchema.exactOptional().openapi({
      description:
        'OAuth specific blob. This is a Json Schema used to validate Json configurations persisted as Airbyte Server configurations.\nMust be a valid non-nested JSON describing additional fields configured by the Airbyte Instance or Workspace Admins to be used by the\nserver when completing an OAuth flow (typically exchanging an auth code for refresh token).\n\nExamples:\n\n    complete_oauth_server_input_specification={\n      client_id: {\n        type: string\n      },\n      client_secret: {\n        type: string\n      }\n    }',
    }),
    completeOAuthServerOutputSpecification: OAuthConfigurationSchema.exactOptional().openapi({
      description:
        "OAuth specific blob. This is a Json Schema used to validate Json configurations persisted as Airbyte Server configurations that\nalso need to be merged back into the connector configuration at runtime.\nThis is a subset configuration of `complete_oauth_server_input_specification` that filters fields out to retain only the ones that\nare necessary for the connector to function with OAuth. (some fields could be used during oauth flows but not needed afterwards, therefore\nthey would be listed in the `complete_oauth_server_input_specification` but not `complete_oauth_server_output_specification`)\nMust be a valid non-nested JSON describing additional fields configured by the Airbyte Instance or Workspace Admins to be used by the\nconnector when using OAuth flow APIs.\nThese fields are to be merged back to `ConnectorSpecification.connectionSpecification`.\nFor each field, a special annotation `path_in_connector_config` can be specified to determine where to merge it,\n\nExamples:\n\n      complete_oauth_server_output_specification={\n        client_id: {\n          type: string,\n          path_in_connector_config: ['credentials', 'client_id']\n        },\n        client_secret: {\n          type: string,\n          path_in_connector_config: ['credentials', 'client_secret']\n        }\n      }",
    }),
  })
  .openapi({ required: [] })
  .openapi('OAuthConfigSpecification')

const AdvancedAuthSchema = z
  .object({
    authFlowType: z.enum(['oauth2.0', 'oauth1.0']).exactOptional(),
    predicateKey: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Json Path to a field in the connectorSpecification that should exist for the advanced auth to be applicable.',
      }),
    predicateValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of the predicate_key fields for the advanced auth to be applicable.',
      }),
    oauthConfigSpecification: OAuthConfigSpecificationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdvancedAuth')

const JobConfigTypeSchema = z
  .enum([
    'check_connection_source',
    'check_connection_destination',
    'discover_schema',
    'get_spec',
    'sync',
    'reset_connection',
    'refresh',
    'clear',
  ])
  .openapi('JobConfigType')

const LogFormatTypeSchema = z.enum(['formatted', 'structured']).openapi('LogFormatType')

const LogLevelSchema = z.enum(['debug', 'error', 'info', 'trace', 'warn']).openapi('LogLevel')

const LogSourceSchema = z
  .enum(['destination', 'source', 'platform', 'replication-orchestrator'])
  .openapi('LogSource')

const LogCallerSchema = z
  .object({
    className: z.string().exactOptional(),
    methodName: z.string().exactOptional(),
    lineNumber: z.int().exactOptional(),
    threadName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogCaller')

const LogEventSchema = z
  .object({
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    message: z.string(),
    level: LogLevelSchema,
    logSource: LogSourceSchema,
    caller: LogCallerSchema.exactOptional(),
    stackTrace: z.string().exactOptional(),
  })
  .openapi({ required: ['timestamp', 'message', 'level', 'logSource'] })
  .openapi('LogEvent')

const LogEventsSchema = z
  .object({ events: z.array(LogEventSchema), version: z.string().exactOptional() })
  .openapi({ required: ['events'] })
  .openapi('LogEvents')

const LogReadSchema = z
  .object({ logLines: z.array(z.string()) })
  .openapi({ required: ['logLines'] })
  .openapi('LogRead')

const FailureOriginSchema = z
  .enum([
    'source',
    'destination',
    'replication',
    'persistence',
    'airbyte_platform',
    'normalization',
    'dbt',
    'unknown',
  ])
  .openapi({
    description:
      'Indicates where the error originated. If not set, the origin of error is not well known.',
  })
  .openapi('FailureOrigin')

const FailureTypeSchema = z
  .enum([
    'config_error',
    'system_error',
    'manual_cancellation',
    'refresh_schema',
    'heartbeat_timeout',
    'destination_timeout',
    'transient_error',
  ])
  .openapi({
    description:
      'Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known.',
  })
  .openapi('FailureType')

const StreamDescriptorSchema = z
  .object({ name: z.string(), namespace: z.string().exactOptional() })
  .openapi({ required: ['name'] })
  .openapi('StreamDescriptor')

const FailureReasonSchema = z
  .object({
    failureOrigin: FailureOriginSchema.exactOptional(),
    failureType: FailureTypeSchema.exactOptional(),
    externalMessage: z.string().exactOptional(),
    internalMessage: z.string().exactOptional(),
    stacktrace: z.string().exactOptional(),
    retryable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known.',
      }),
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    fromTraceMessage: z.boolean().exactOptional(),
    streamDescriptor: StreamDescriptorSchema.exactOptional(),
  })
  .openapi({ required: ['timestamp'] })
  .openapi('FailureReason')

const SynchronousJobReadSchema = z
  .object({
    id: z.uuid(),
    configType: JobConfigTypeSchema,
    configId: z
      .string()
      .exactOptional()
      .openapi({ description: 'only present if a config id was provided.' }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    endedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    succeeded: z.boolean(),
    connectorConfigurationUpdated: z.boolean().default(false).exactOptional(),
    logType: LogFormatTypeSchema.exactOptional(),
    logs: z.xor([LogEventsSchema, LogReadSchema]).exactOptional(),
    failureReason: FailureReasonSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'configType', 'createdAt', 'endedAt', 'succeeded'] })
  .openapi('SynchronousJobRead')

const SourceDefinitionSpecificationReadSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema,
    documentationUrl: z.string().exactOptional(),
    connectionSpecification: SourceDefinitionSpecificationSchema.exactOptional(),
    advancedAuth: AdvancedAuthSchema.exactOptional(),
    advancedAuthGlobalCredentialsAvailable: z.boolean().exactOptional(),
    jobInfo: SynchronousJobReadSchema,
  })
  .openapi({ required: ['sourceDefinitionId', 'jobInfo'] })
  .openapi('SourceDefinitionSpecificationRead')

const SourceIdRequestBodySchema = z
  .object({ sourceId: SourceIdSchema })
  .openapi({ required: ['sourceId'] })
  .openapi('SourceIdRequestBody')

const SourceIdWithSecretCoordinatesRequestBodySchema = z
  .object({
    sourceId: SourceIdSchema,
    includeSecretCoordinates: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Rather than return *** for secret properties include the secret coordinate information. Coordinates are opaque pointers, not secret values, and resolving one requires access to the secret storage that holds it. They are not stable: a coordinate changes when the secret is rewritten.',
      }),
  })
  .openapi({ required: ['sourceId'] })
  .openapi('SourceIdWithSecretCoordinatesRequestBody')

const SourceCloneConfigurationSchema = z
  .object({
    connectionConfiguration: SourceConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourceCloneConfiguration')

const SourceCloneRequestBodySchema = z
  .object({
    sourceCloneId: SourceIdSchema,
    sourceConfiguration: SourceCloneConfigurationSchema.exactOptional(),
  })
  .openapi({
    description:
      'The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case.',
    required: ['sourceCloneId'],
  })
  .openapi('SourceCloneRequestBody')

const SourceCoreConfigSchema = z
  .object({
    sourceId: SourceIdSchema.exactOptional(),
    sourceDefinitionId: SourceDefinitionIdSchema,
    connectionConfiguration: SourceConfigurationSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['sourceDefinitionId', 'connectionConfiguration', 'workspaceId'] })
  .openapi('SourceCoreConfig')

const SourceCreateSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema,
    connectionConfiguration: SourceConfigurationSchema,
    workspaceId: WorkspaceIdSchema,
    name: z.string(),
    secretId: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'airbyte_oauth_workspace_0509f049-d671-48cb-8105-0a23d47e6db6_secret_e0d38206-034e-4d75-9d21-da5a99b02826_v1',
      }),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
    createAsDraft: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['workspaceId', 'name', 'sourceDefinitionId', 'connectionConfiguration'] })
  .openapi('SourceCreate')

const WorkloadPrioritySchema = z.enum(['high', 'default']).openapi('WorkloadPriority')

const SourceDiscoverSchemaRequestBodySchema = z
  .object({
    sourceId: SourceIdSchema,
    connectionId: z.uuid().exactOptional(),
    disable_cache: z.boolean().exactOptional(),
    priority: WorkloadPrioritySchema.exactOptional(),
  })
  .openapi({ required: ['sourceId'] })
  .openapi('SourceDiscoverSchemaRequestBody')

const DestinationDiscoverSchemaRequestBodySchema = z
  .object({ destinationId: DestinationIdSchema, disableCache: z.boolean().exactOptional() })
  .openapi({ required: ['destinationId'] })
  .openapi('DestinationDiscoverSchemaRequestBody')

const PostprocessDiscoveredCatalogRequestBodySchema = z
  .object({ catalogId: z.uuid(), connectionId: z.uuid() })
  .openapi({ required: ['catalogId', 'connectionId'] })
  .openapi('PostprocessDiscoveredCatalogRequestBody')

const FieldNameSchema = z
  .array(z.string())
  .openapi({ description: 'A field name is a list of strings that form the path to the field.' })
  .openapi('FieldName')

const FieldSchemaSchema = z
  .object({})
  .openapi({ description: 'JSONSchema representation of the field' })
  .openapi('FieldSchema')

const FieldAddSchema = z
  .object({ schema: FieldSchemaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FieldAdd')

const FieldRemoveSchema = z
  .object({ schema: FieldSchemaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FieldRemove')

const FieldSchemaUpdateSchema = z
  .object({ oldSchema: FieldSchemaSchema, newSchema: FieldSchemaSchema })
  .openapi({ required: ['oldSchema', 'newSchema'] })
  .openapi('FieldSchemaUpdate')

const FieldTransformSchema = z
  .object({
    transformType: z.enum(['add_field', 'remove_field', 'update_field_schema']),
    fieldName: FieldNameSchema,
    breaking: z.boolean(),
    addField: FieldAddSchema.exactOptional(),
    removeField: FieldRemoveSchema.exactOptional(),
    updateFieldSchema: FieldSchemaUpdateSchema.exactOptional(),
  })
  .openapi({
    description: 'Describes the difference in a field between two Streams.',
    required: ['transformType', 'fieldName', 'breaking'],
  })
  .openapi('FieldTransform')

const StreamAttributePrimaryKeyUpdateSchema = z
  .object({
    oldPrimaryKey: z.array(FieldNameSchema).exactOptional(),
    newPrimaryKey: z.array(FieldNameSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StreamAttributePrimaryKeyUpdate')

const StreamAttributeTransformSchema = z
  .object({
    transformType: z.literal('update_primary_key'),
    breaking: z.boolean(),
    updatePrimaryKey: StreamAttributePrimaryKeyUpdateSchema.exactOptional(),
  })
  .openapi({
    description: 'Describes the difference in an attribute between two Streams.',
    required: ['transformType', 'breaking'],
  })
  .openapi('StreamAttributeTransform')

const StreamTransformSchema = z
  .object({
    transformType: z.enum(['add_stream', 'remove_stream', 'update_stream']),
    streamDescriptor: StreamDescriptorSchema,
    updateStream: z
      .object({
        fieldTransforms: z
          .array(FieldTransformSchema)
          .openapi({ description: 'list of field transformations. order does not matter.' }),
        streamAttributeTransforms: z
          .array(StreamAttributeTransformSchema)
          .openapi({
            description: 'list of stream attribute transformations. order does not matter.',
          }),
      })
      .exactOptional()
      .openapi({ required: ['fieldTransforms', 'streamAttributeTransforms'] }),
  })
  .openapi({ required: ['transformType', 'streamDescriptor'] })
  .openapi('StreamTransform')

const CatalogDiffSchema = z
  .object({
    transforms: z
      .array(StreamTransformSchema)
      .openapi({ description: 'list of stream transformations. order does not matter.' }),
  })
  .openapi({
    description: 'Describes the difference between two Airbyte catalogs.',
    required: ['transforms'],
  })
  .openapi('CatalogDiff')

const PostprocessDiscoveredCatalogResultSchema = z
  .object({ appliedDiff: CatalogDiffSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PostprocessDiscoveredCatalogResult')

const PartialSourceUpdateSchema = z
  .object({
    sourceId: SourceIdSchema,
    connectionConfiguration: SourceConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    secretId: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'airbyte_oauth_workspace_0509f049-d671-48cb-8105-0a23d47e6db6_secret_e0d38206-034e-4d75-9d21-da5a99b02826_v1',
      }),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: ['sourceId'] })
  .openapi('PartialSourceUpdate')

const SourceUpdateSchema = z
  .object({
    sourceId: SourceIdSchema,
    connectionConfiguration: SourceConfigurationSchema,
    name: z.string(),
    secretId: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'airbyte_oauth_workspace_0509f049-d671-48cb-8105-0a23d47e6db6_secret_e0d38206-034e-4d75-9d21-da5a99b02826_v1',
      }),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: ['sourceId', 'connectionConfiguration', 'name'] })
  .openapi('SourceUpdate')

const SourceMetadataSchema = z
  .object({ workspaceName: z.string() })
  .openapi({ required: ['workspaceName'] })
  .openapi('SourceMetadata')

const SourceReadWithMetadataSchema = SourceReadSchema.and(
  z.object({ metadata: SourceMetadataSchema }).openapi({ required: ['metadata'] }),
).openapi('SourceReadWithMetadata')

const ActorListSortKeySchema = z
  .enum([
    'actorName_asc',
    'actorName_desc',
    'actorDefinitionName_asc',
    'actorDefinitionName_desc',
    'lastSync_asc',
    'lastSync_desc',
  ])
  .openapi({ description: 'Available sort keys for actor list pagination' })
  .openapi('ActorListSortKey')

const ActorListFiltersSchema = z
  .object({
    states: z
      .array(ActorStatusSchema)
      .exactOptional()
      .openapi({ description: 'Filter connections by their active/inactive state' }),
    searchTerm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Search term to filter connections by name, source name, destination name, etc.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ActorListFilters')

const ActorListCursorPaginatedRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    cursor: ConnectionIdSchema.exactOptional(),
    sortKey: ActorListSortKeySchema.exactOptional().openapi({
      description: 'Sort key that determines the order of results',
    }),
    filters: ActorListFiltersSchema.exactOptional().openapi({
      description: 'Filters for list of of results',
    }),
    pageSize: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of actors to return in the list' }),
  })
  .openapi({ required: ['workspaceId'] })
  .openapi('ActorListCursorPaginatedRequestBody')

const SourceSnippetReadSchema = z
  .object({
    sourceId: SourceIdSchema,
    name: z.string(),
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceName: z.string(),
    icon: z.string().exactOptional(),
  })
  .openapi({ required: ['sourceId', 'name', 'sourceDefinitionId', 'sourceName'] })
  .openapi('SourceSnippetRead')

const SourceReadListSchema = z
  .object({
    sources: z.array(SourceReadSchema),
    page_size: z.int().exactOptional(),
    num_connections: z.int().exactOptional(),
  })
  .openapi({ required: ['sources'] })
  .openapi('SourceReadList')

const SourceDiscoverSchemaWriteRequestBodySchema = z
  .object({
    catalog: AirbyteCatalogSchema,
    sourceId: SourceIdSchema.exactOptional(),
    connectorVersion: z.string().exactOptional(),
    configurationHash: z.string().exactOptional(),
  })
  .openapi({ description: 'to write this requested object to database.', required: ['catalog'] })
  .openapi('SourceDiscoverSchemaWriteRequestBody')

const DestinationOperationSchema = z
  .object({
    objectName: z.string(),
    syncMode: DestinationSyncModeSchema,
    schema: StreamJsonSchemaSchema,
    matchingKeys: z.array(FieldNameSchema).exactOptional(),
  })
  .openapi({ required: ['objectName', 'syncMode', 'schema'] })
  .openapi('DestinationOperation')

const DestinationCatalogSchema = z
  .object({ operations: z.array(DestinationOperationSchema) })
  .openapi({ required: ['operations'] })
  .openapi('DestinationCatalog')

const DestinationDiscoverSchemaWriteRequestBodySchema = z
  .object({
    catalog: DestinationCatalogSchema,
    destinationId: DestinationIdSchema.exactOptional(),
    connectorVersion: z.string().exactOptional(),
    configurationHash: z.string().exactOptional(),
  })
  .openapi({ description: 'write this requested object to the database', required: ['catalog'] })
  .openapi('DestinationDiscoverSchemaWriteRequestBody')

const SourceDiscoverSchemaReadSchema = z
  .object({
    catalog: AirbyteCatalogSchema.exactOptional(),
    jobInfo: SynchronousJobReadSchema.exactOptional(),
    catalogId: z.uuid().exactOptional(),
    catalogDiff: CatalogDiffSchema.exactOptional(),
    breakingChange: z.boolean().exactOptional(),
    connectionStatus: ConnectionStatusSchema.exactOptional(),
  })
  .openapi({
    description:
      'Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo is present when a discover job ran, and its status can be used to determine if the job was successful or not. It is absent when the catalog was diffed against a connection.',
    required: [],
  })
  .openapi('SourceDiscoverSchemaRead')

const DestinationDiscoverReadSchema = z
  .object({ catalog: DestinationCatalogSchema, catalogId: z.uuid() })
  .openapi({ required: ['catalog', 'catalogId'] })
  .openapi('DestinationDiscoverRead')

const SourceAutoPropagateChangeSchema = z
  .object({
    catalog: AirbyteCatalogSchema,
    catalogId: z.uuid(),
    sourceId: z.uuid(),
    workspaceId: z.uuid(),
  })
  .openapi({
    description:
      'Input of the source propagation, it contains the discovered catalog and a list of diff that need to be applied to the existing catalog.',
    required: ['catalog', 'catalogId', 'sourceId', 'workspaceId'],
  })
  .openapi('SourceAutoPropagateChange')

const SourceSearchSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema.exactOptional(),
    sourceId: SourceIdSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema.exactOptional(),
    connectionConfiguration: SourceConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    sourceName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourceSearch')

const DestinationDefinitionIdRequestBodySchema = z
  .object({ destinationDefinitionId: DestinationDefinitionIdSchema })
  .openapi({ required: ['destinationDefinitionId'] })
  .openapi('DestinationDefinitionIdRequestBody')

const DestinationDefinitionSpecificationSchema = z
  .object({})
  .openapi({
    description:
      'The specification for what values are required to configure the destinationDefinition.',
    example: { user: { type: 'string' } },
  })
  .openapi('DestinationDefinitionSpecification')

const DestinationDefinitionCreateSchema = z
  .object({
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    documentationUrl: z.url(),
    icon: z.string().exactOptional(),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
    connectorSpecification: DestinationDefinitionSpecificationSchema.exactOptional().openapi({
      description:
        'Optional pre-fetched connector specification. If provided, the backend will skip fetching the spec.',
    }),
  })
  .openapi({ required: ['name', 'dockerRepository', 'dockerImageTag', 'documentationUrl'] })
  .openapi('DestinationDefinitionCreate')

const DestinationDefinitionUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    destinationDefinitionId: DestinationDefinitionIdSchema,
    dockerImageTag: z.string(),
    resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['destinationDefinitionId', 'workspaceId', 'dockerImageTag'] })
  .openapi('DestinationDefinitionUpdate')

const DestinationDefinitionReadListSchema = z
  .object({ destinationDefinitions: z.array(DestinationDefinitionReadSchema) })
  .openapi({ required: ['destinationDefinitions'] })
  .openapi('DestinationDefinitionReadList')

const CustomDestinationDefinitionCreateSchema = z
  .object({
    workspaceId: WorkspaceIdSchema.exactOptional(),
    destinationDefinition: DestinationDefinitionCreateSchema,
    scopeId: ScopeIdSchema.exactOptional(),
    scopeType: ScopeTypeSchema.exactOptional(),
  })
  .openapi({ required: ['destinationDefinition'] })
  .openapi('CustomDestinationDefinitionCreate')

const DestinationDefinitionIdWithWorkspaceIdSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['destinationDefinitionId', 'workspaceId'] })
  .openapi('DestinationDefinitionIdWithWorkspaceId')

const PrivateDestinationDefinitionReadSchema = z
  .object({ destinationDefinition: DestinationDefinitionReadSchema, granted: z.boolean() })
  .openapi({ required: ['destinationDefinition', 'granted'] })
  .openapi('PrivateDestinationDefinitionRead')

const PrivateDestinationDefinitionReadListSchema = z
  .object({ destinationDefinitions: z.array(PrivateDestinationDefinitionReadSchema) })
  .openapi({ required: ['destinationDefinitions'] })
  .openapi('PrivateDestinationDefinitionReadList')

const DestinationDefinitionSpecificationReadSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    documentationUrl: z.string().exactOptional(),
    connectionSpecification: DestinationDefinitionSpecificationSchema.exactOptional(),
    advancedAuth: AdvancedAuthSchema.exactOptional(),
    advancedAuthGlobalCredentialsAvailable: z.boolean().exactOptional(),
    jobInfo: SynchronousJobReadSchema,
    supportedDestinationSyncModes: z.array(DestinationSyncModeSchema).exactOptional(),
  })
  .openapi({ required: ['destinationDefinitionId', 'jobInfo'] })
  .openapi('DestinationDefinitionSpecificationRead')

const DestinationIdRequestBodySchema = z
  .object({ destinationId: DestinationIdSchema })
  .openapi({ required: ['destinationId'] })
  .openapi('DestinationIdRequestBody')

const DestinationCoreConfigSchema = z
  .object({
    destinationId: DestinationIdSchema.exactOptional(),
    destinationDefinitionId: DestinationDefinitionIdSchema,
    connectionConfiguration: DestinationConfigurationSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['workspaceId', 'destinationDefinitionId', 'connectionConfiguration'] })
  .openapi('DestinationCoreConfig')

const DestinationCreateSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    name: z.string(),
    destinationDefinitionId: DestinationDefinitionIdSchema,
    connectionConfiguration: DestinationConfigurationSchema,
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
    createAsDraft: z.boolean().default(false).exactOptional(),
  })
  .openapi({
    required: ['name', 'workspaceId', 'destinationDefinitionId', 'connectionConfiguration'],
  })
  .openapi('DestinationCreate')

const DestinationUpdateSchema = z
  .object({
    destinationId: DestinationIdSchema,
    connectionConfiguration: DestinationConfigurationSchema,
    name: z.string(),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: ['destinationId', 'connectionConfiguration', 'name'] })
  .openapi('DestinationUpdate')

const PartialDestinationUpdateSchema = z
  .object({
    destinationId: DestinationIdSchema.exactOptional(),
    connectionConfiguration: DestinationConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartialDestinationUpdate')

const DestinationCloneConfigurationSchema = z
  .object({
    connectionConfiguration: DestinationConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DestinationCloneConfiguration')

const DestinationCloneRequestBodySchema = z
  .object({
    destinationCloneId: DestinationIdSchema,
    destinationConfiguration: DestinationCloneConfigurationSchema.exactOptional(),
  })
  .openapi({
    description:
      'The values required to configure the destination. The schema for this should have an id of the existing destination along with the configuration you want to change in case.',
    required: ['destinationCloneId'],
  })
  .openapi('DestinationCloneRequestBody')

const DestinationSnippetReadSchema = z
  .object({
    destinationId: DestinationIdSchema,
    name: z.string(),
    destinationDefinitionId: DestinationDefinitionIdSchema,
    destinationName: z.string(),
    icon: z.string().exactOptional(),
  })
  .openapi({ required: ['destinationId', 'name', 'destinationDefinitionId', 'destinationName'] })
  .openapi('DestinationSnippetRead')

const DestinationReadListSchema = z
  .object({
    destinations: z.array(DestinationReadSchema),
    page_size: z.int().exactOptional(),
    num_connections: z.int().exactOptional(),
  })
  .openapi({ required: ['destinations'] })
  .openapi('DestinationReadList')

const DestinationSearchSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema.exactOptional(),
    destinationId: DestinationIdSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema.exactOptional(),
    connectionConfiguration: DestinationConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    destinationName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DestinationSearch')

const ActorDefinitionVersionIdSchema = z.uuid().openapi('ActorDefinitionVersionId')

const ConnectorIPCOptionsSchema = z
  .object({})
  .openapi({ description: 'Connector IPC Options.' })
  .openapi('ConnectorIPCOptions')

const ActorDefinitionVersionReadSchema = z
  .object({
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    supportsRefreshes: z.boolean(),
    isVersionOverrideApplied: z.boolean(),
    supportLevel: SupportLevelSchema.exactOptional(),
    supportState: SupportStateSchema,
    breakingChanges: ActorDefinitionVersionBreakingChangesSchema.exactOptional(),
    lastPublished: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'The time the connector was modified in the codebase.',
    }),
    cdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the CDK that the connector was built with. e.g. python:0.1.0, java:0.1.0',
      }),
    supportsFileTransfer: z.boolean(),
    supportsDataActivation: z.boolean(),
    connectorIPCOptions: ConnectorIPCOptionsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'dockerRepository',
      'dockerImageTag',
      'supportsRefreshes',
      'supportState',
      'isVersionOverrideApplied',
      'supportsFileTransfer',
      'supportsDataActivation',
    ],
  })
  .openapi('ActorDefinitionVersionRead')

const ResolveActorDefinitionVersionResponseSchema = z
  .object({
    versionId: ActorDefinitionVersionIdSchema,
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    supportRefreshes: z.boolean(),
    supportFileTransfer: z.boolean(),
    supportDataActivation: z.boolean(),
    connectorIPCOptions: ConnectorIPCOptionsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'versionId',
      'dockerRepository',
      'dockerImageTag',
      'supportRefreshes',
      'supportFileTransfer',
      'supportDataActivation',
    ],
  })
  .openapi('ResolveActorDefinitionVersionResponse')

const ConnectionIdRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema })
  .openapi({ required: ['connectionId'] })
  .openapi('ConnectionIdRequestBody')

const JobIdSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('JobId')

const ConnectionAndJobIdRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema, jobId: JobIdSchema })
  .openapi({ required: ['connectionId', 'jobId'] })
  .openapi('ConnectionAndJobIdRequestBody')

const ConnectionUptimeHistoryRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema, numberOfJobs: z.int().exactOptional() })
  .openapi({ required: ['connectionId'] })
  .openapi('ConnectionUptimeHistoryRequestBody')

const ConnectionDataHistoryRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema, numberOfJobs: z.int() })
  .openapi({ required: ['connectionId', 'numberOfJobs'] })
  .openapi('ConnectionDataHistoryRequestBody')

const ConnectionStreamHistoryRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema, timezone: z.string() })
  .openapi({ required: ['connectionId', 'timezone'] })
  .openapi('ConnectionStreamHistoryRequestBody')

const ConnectionLastJobPerStreamRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema })
  .openapi({ required: ['connectionId'] })
  .openapi('ConnectionLastJobPerStreamRequestBody')

const ConnectionStreamSchema = z
  .object({ streamName: z.string(), streamNamespace: z.string().exactOptional() })
  .openapi({ required: ['streamName'] })
  .openapi('ConnectionStream')

const ConnectionStreamRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema, streams: z.array(ConnectionStreamSchema) })
  .openapi({ required: ['connectionId', 'streams'] })
  .openapi('ConnectionStreamRequestBody')

const RefreshModeSchema = z.enum(['Truncate', 'Merge']).openapi('RefreshMode')

const ConnectionStreamRefreshRequestBodySchema = z
  .object({
    connectionId: ConnectionIdSchema,
    refreshMode: RefreshModeSchema,
    streams: z.array(ConnectionStreamSchema).exactOptional(),
  })
  .openapi({ required: ['connectionId', 'refreshMode'] })
  .openapi('ConnectionStreamRefreshRequestBody')

const DbMigrationRequestBodySchema = z
  .object({ database: z.string() })
  .openapi({ required: ['database'] })
  .openapi('DbMigrationRequestBody')

const WebBackendConnectionRequestBodySchema = z
  .object({ withRefreshedCatalog: z.boolean().exactOptional(), connectionId: ConnectionIdSchema })
  .openapi({ required: ['connectionId'] })
  .openapi('WebBackendConnectionRequestBody')

const ConnectionCreateSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Optional name of the connection' }),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    sourceId: SourceIdSchema,
    destinationId: DestinationIdSchema,
    operationIds: z.array(OperationIdSchema).exactOptional(),
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema,
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    destinationCatalogId: z.uuid().exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    notifySchemaChangesByEmail: z.boolean().exactOptional(),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    backfillPreference: SchemaChangeBackfillPreferenceSchema.exactOptional(),
    tags: z.array(TagSchema).exactOptional(),
    onDemandEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When enabled, this connection will use on-demand capacity if committed capacity is exhausted',
      }),
    enableIndexing: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Enables Fusion indexing for this connection. Defaults to false. Setting this to true is validated the same way as POST /v1/connections/{connectionId}/enablement: an ineligible organization is rejected before anything is created. If eligible, the connection is created and indexing is then synced to Sonar/Agents; if that sync fails, the create still succeeds and the error is returned, but the connection is left with indexing disabled.',
      }),
  })
  .openapi({ required: ['sourceId', 'destinationId', 'status'] })
  .openapi('ConnectionCreate')

const OperatorTypeSchema = z.enum(['normalization', 'dbt', 'webhook']).openapi('OperatorType')

const OperatorWebhookSchema = z
  .object({
    webhookConfigId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The id of the webhook configs to use from the workspace.' }),
    webhookType: z.literal('dbtCloud').exactOptional(),
    dbtCloud: z
      .object({
        accountId: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The account id associated with the job',
          }),
        jobId: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The job id associated with the job',
          }),
      })
      .exactOptional()
      .openapi({ required: ['accountId', 'jobId'] }),
    executionUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED. Populate dbtCloud instead.', deprecated: true }),
    executionBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED. Populate dbtCloud instead.', deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('OperatorWebhook')

const OperatorConfigurationSchema = z
  .object({ operatorType: OperatorTypeSchema, webhook: OperatorWebhookSchema.exactOptional() })
  .openapi({ required: ['operatorType'] })
  .openapi('OperatorConfiguration')

const OperationCreateSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    name: z.string(),
    operatorConfiguration: OperatorConfigurationSchema,
  })
  .openapi({ required: ['name', 'operatorConfiguration', 'workspaceId'] })
  .openapi('OperationCreate')

const WebBackendConnectionCreateSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Optional name of the connection' }),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    sourceId: SourceIdSchema,
    destinationId: DestinationIdSchema,
    operationIds: z.array(OperationIdSchema).exactOptional(),
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema,
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    operations: z.array(OperationCreateSchema).exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    destinationCatalogId: z.uuid().exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    backfillPreference: SchemaChangeBackfillPreferenceSchema.exactOptional(),
    tags: z.array(TagSchema).exactOptional(),
    onDemandEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When enabled, this connection will use on-demand capacity if committed capacity is exhausted',
      }),
  })
  .openapi({ required: ['sourceId', 'destinationId', 'status'] })
  .openapi('WebBackendConnectionCreate')

const ConnectionStateTypeSchema = z
  .enum(['global', 'stream', 'legacy', 'not_set'])
  .openapi('ConnectionStateType')

const StateBlobSchema = z.object({}).openapi('StateBlob')

const StreamStateSchema = z
  .object({
    streamDescriptor: StreamDescriptorSchema,
    streamState: StateBlobSchema.exactOptional(),
  })
  .openapi({ required: ['streamDescriptor'] })
  .openapi('StreamState')

const GlobalStateSchema = z
  .object({
    shared_state: StateBlobSchema.exactOptional(),
    streamStates: z.array(StreamStateSchema),
  })
  .openapi({ required: ['streamStates'] })
  .openapi('GlobalState')

const ConnectionStateSchema = z
  .object({
    stateType: ConnectionStateTypeSchema,
    connectionId: ConnectionIdSchema,
    state: StateBlobSchema.exactOptional(),
    streamState: z.array(StreamStateSchema).exactOptional(),
    globalState: GlobalStateSchema.exactOptional(),
  })
  .openapi({
    description:
      'Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.',
    required: ['connectionId', 'stateType'],
  })
  .openapi('ConnectionState')

const ConnectionStateCreateOrUpdateSchema = z
  .object({ connectionId: ConnectionIdSchema, connectionState: ConnectionStateSchema })
  .openapi({ required: ['connectionId', 'connectionState'] })
  .openapi('ConnectionStateCreateOrUpdate')

const ConnectionUpdateSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name that will be set to this connection' }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    operationIds: z.array(OperationIdSchema).nullable().exactOptional(),
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema.exactOptional(),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    destinationCatalogId: z.uuid().exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    notifySchemaChangesByEmail: z.boolean().exactOptional(),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    backfillPreference: SchemaChangeBackfillPreferenceSchema.exactOptional(),
    breakingChange: z.boolean().exactOptional(),
    tags: z.array(TagSchema).nullable().exactOptional(),
    onDemandEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled, this connection will use on-demand capacity if committed capacity is exhausted',
      }),
    enableIndexing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Enables or disables Fusion indexing for this connection. Omitted or null leaves the current value unchanged. A value that differs from the current one is validated and applied the same way as PUT /v1/connections/{connectionId}/enablement (organization eligibility, synced to Sonar/Agents); the rest of the update is applied first and stays applied even if this validation or sync then fails, in which case this field's error is returned instead of the update's.",
      }),
  })
  .openapi({
    description:
      'Used to apply a patch-style update to a connection, which means that null properties remain unchanged',
    required: ['connectionId'],
  })
  .openapi('ConnectionUpdate')

const ConnectionUpdateWithReasonSchema = z
  .object({
    connectionUpdate: ConnectionUpdateSchema,
    updateReason: z.string().exactOptional(),
    autoUpdate: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['connectionUpdate'] })
  .openapi('ConnectionUpdateWithReason')

const WebBackendOperationCreateOrUpdateSchema = z
  .object({
    operationId: OperationIdSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema,
    name: z.string(),
    operatorConfiguration: OperatorConfigurationSchema,
  })
  .openapi({ required: ['name', 'operatorConfiguration', 'workspaceId'] })
  .openapi('WebBackendOperationCreateOrUpdate')

const WebBackendConnectionUpdateSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name that will be set to the connection' }),
    connectionId: ConnectionIdSchema,
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema.exactOptional(),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    skipReset: z.boolean().exactOptional(),
    operations: z.array(WebBackendOperationCreateOrUpdateSchema).nullable().exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    destinationCatalogId: z.uuid().exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    notifySchemaChangesByEmail: z.boolean().exactOptional(),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    backfillPreference: SchemaChangeBackfillPreferenceSchema.exactOptional(),
    tags: z.array(TagSchema).nullable().exactOptional(),
    onDemandEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled, this connection will use on-demand capacity if committed capacity is exhausted',
      }),
  })
  .openapi({
    description:
      'Used to apply a patch-style update to a connection, which means that null properties remain unchanged',
    required: ['connectionId'],
  })
  .openapi('WebBackendConnectionUpdate')

const ConnectionStatusesRequestBodySchema = z
  .object({ connectionIds: z.array(ConnectionIdSchema) })
  .openapi({ required: ['connectionIds'] })
  .openapi('ConnectionStatusesRequestBody')

const ConnectionSyncStatusSchema = z
  .enum(['running', 'queued', 'failed', 'paused', 'pending', 'incomplete', 'synced'])
  .openapi({
    description:
      "The first of the following that matches for a given connection:\n  * `RUNNING` - a job is currently running\n  * `QUEUED` - a job is currently queued and waiting to start\n  * `FAILED` - user action is required due to a breaking change or config error\n  * `PAUSED` - connection is not active (inactive or deprecated)\n  * `PENDING` - there is no previous sync job or the last completed job was a reset\n  * `INCOMPLETE` - the last sync job's status is `failed`, user is not expected to be able to fix the issue\n  * `SYNCED` - connection did not meet any of the above conditions, it has synced and is currently at rest\n",
  })
  .openapi('ConnectionSyncStatus')

const JobStatusSchema = z
  .enum(['pending', 'queued', 'running', 'incomplete', 'failed', 'succeeded', 'cancelled'])
  .openapi('JobStatus')

const ResetConfigSchema = z
  .object({ streamsToReset: z.array(StreamDescriptorSchema).exactOptional() })
  .openapi({
    description:
      'contains information about how a reset was configured. only populated if the job was a reset.',
    required: [],
  })
  .openapi('ResetConfig')

const JobRefreshConfigSchema = z
  .object({ streamsToRefresh: z.array(StreamDescriptorSchema).exactOptional() })
  .openapi({
    description:
      'contains information about how a refresh was configured. only populated if the job was a refresh.',
    required: [],
  })
  .openapi('JobRefreshConfig')

const JobAggregatedStatsSchema = z
  .object({
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    bytesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    bytesCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    recordsRejected: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'recordsEmitted',
      'bytesEmitted',
      'recordsCommitted',
      'bytesCommitted',
      'recordsRejected',
    ],
  })
  .openapi('JobAggregatedStats')

const StreamStatsSchema = z
  .object({
    streamName: z.string(),
    streamNamespace: z.string().exactOptional(),
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    bytesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    bytesCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    recordsRejected: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    wasBackfilled: z.boolean().exactOptional(),
    wasResumed: z.boolean().exactOptional(),
  })
  .openapi({
    required: [
      'streamName',
      'recordsEmitted',
      'bytesEmitted',
      'recordsCommitted',
      'bytesCommitted',
      'recordsRejected',
    ],
  })
  .openapi('StreamStats')

const StreamAggregatedStatsSchema = z.array(StreamStatsSchema).openapi('StreamAggregatedStats')

const JobReadSchema = z
  .object({
    id: JobIdSchema,
    configType: JobConfigTypeSchema,
    configId: z.string(),
    enabledStreams: z.array(StreamDescriptorSchema).exactOptional(),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    startedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    status: JobStatusSchema,
    resetConfig: ResetConfigSchema.exactOptional(),
    refreshConfig: JobRefreshConfigSchema.exactOptional(),
    aggregatedStats: JobAggregatedStatsSchema.exactOptional(),
    streamAggregatedStats: StreamAggregatedStatsSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'configType', 'configId', 'createdAt', 'updatedAt', 'status'] })
  .openapi('JobRead')

const AttemptNumberSchema = z.int32().openapi('AttemptNumber')

const ConnectionStatusReadSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    connectionSyncStatus: ConnectionSyncStatusSchema,
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    lastSuccessfulSync: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    activeJob: JobReadSchema.exactOptional(),
    lastSyncJobId: JobIdSchema.exactOptional(),
    lastSyncAttemptNumber: AttemptNumberSchema.exactOptional(),
    lastSyncJobCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    failureReason: FailureReasonSchema.exactOptional(),
  })
  .openapi({ required: ['connectionId', 'connectionSyncStatus'] })
  .openapi('ConnectionStatusRead')

const ConnectionStatusesReadSchema = z
  .array(ConnectionStatusReadSchema)
  .openapi('ConnectionStatusesRead')

const StreamSyncProgressReadItemSchema = z
  .object({
    streamName: z.string(),
    streamNamespace: z.string().exactOptional(),
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    bytesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    bytesCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsRejected: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    configType: JobConfigTypeSchema,
  })
  .openapi({ required: ['streamName', 'configType'] })
  .openapi('StreamSyncProgressReadItem')

const ConnectionSyncProgressReadSchema = z
  .object({
    connectionId: z.uuid(),
    jobId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    streams: z.array(StreamSyncProgressReadItemSchema),
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsRejected: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    bytesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    bytesCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    syncStartedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    configType: JobConfigTypeSchema.exactOptional(),
  })
  .openapi({ required: ['connectionId', 'streams'] })
  .openapi('ConnectionSyncProgressRead')

const ConnectionContextReadSchema = z
  .object({
    connectionId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the relevant connection.' }),
    sourceId: z.uuid().exactOptional().openapi({ description: 'The ID of the relevant source.' }),
    destinationId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the relevant destination.' }),
    sourceDefinitionId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the relevant source definition.' }),
    destinationDefinitionId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the relevant destination definition.' }),
    workspaceId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the workspace related to this workflow' }),
    organizationId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the organization related to this workflow' }),
  })
  .openapi({
    description: 'Ids of related contextual domain models for a connection given connection.',
    required: [],
  })
  .openapi('ConnectionContextRead')

const ConnectionSyncResultReadSchema = z
  .object({
    status: JobStatusSchema,
    streamName: z.string(),
    streamNamespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absent for streams without a namespace.' }),
  })
  .openapi({ required: ['status', 'streamName'] })
  .openapi('ConnectionSyncResultRead')

const JobSyncResultReadSchema = z
  .object({
    jobId: JobIdSchema,
    jobCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    jobUpdatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    streamStatuses: z.array(ConnectionSyncResultReadSchema),
    configType: JobConfigTypeSchema,
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    bytesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    bytesCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    recordsRejected: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'jobId',
      'jobCreatedAt',
      'jobUpdatedAt',
      'streamStatuses',
      'configType',
      'recordsEmitted',
      'recordsCommitted',
      'recordsRejected',
      'bytesEmitted',
      'bytesCommitted',
    ],
  })
  .openapi('JobSyncResultRead')

const ConnectionUptimeHistoryReadSchema = z
  .array(JobSyncResultReadSchema)
  .openapi('ConnectionUptimeHistoryRead')

const ConnectionDataHistoryReadItemSchema = z
  .object({
    timestamp: z.int(),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    jobId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['timestamp', 'recordsCommitted'] })
  .openapi('ConnectionDataHistoryReadItem')

const ConnectionDataHistoryReadSchema = z
  .array(ConnectionDataHistoryReadItemSchema)
  .openapi('ConnectionDataHistoryRead')

const ConnectionStreamHistoryReadItemSchema = z
  .object({
    timestamp: z.int(),
    streamName: z.string(),
    streamNamespace: z.string(),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['timestamp', 'streamName', 'streamNamespace', 'recordsCommitted'] })
  .openapi('ConnectionStreamHistoryReadItem')

const ConnectionStreamHistoryReadSchema = z
  .array(ConnectionStreamHistoryReadItemSchema)
  .openapi('ConnectionStreamHistoryRead')

const ConnectionEventIdRequestBodySchema = z
  .object({ connectionEventId: ConnectionEventIdSchema, connectionId: ConnectionIdSchema })
  .openapi({ required: ['connectionEventId', 'connectionId'] })
  .openapi('ConnectionEventIdRequestBody')

const ConnectionEventSchema: z.ZodType<ConnectionEventType> = z
  .lazy(() =>
    z
      .object({
        id: ConnectionEventIdSchema,
        connectionId: ConnectionIdSchema,
        eventType: ConnectionEventTypeSchema,
        summary: z.object({}).openapi({ description: 'JSON object without event details' }),
        createdAt: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        user: UserReadInConnectionEventSchema.exactOptional(),
      })
      .openapi({ required: ['id', 'connectionId', 'eventType', 'summary', 'created_at'] }),
  )
  .openapi('ConnectionEvent')

const ConnectionEventMinimalSchema = z
  .object({
    eventId: ConnectionEventIdSchema,
    connectionName: z.string(),
    connectionId: ConnectionIdSchema,
    createdAt: ISO8601DateTimeSchema,
    eventType: ConnectionEventTypeSchema,
  })
  .openapi({ required: ['eventId', 'connectionName', 'connectionId', 'createdAt', 'eventType'] })
  .openapi('ConnectionEventMinimal')

const ConnectionEventWithDetailsSchema = z
  .object({
    id: ConnectionEventIdSchema,
    connectionId: ConnectionIdSchema,
    eventType: ConnectionEventTypeSchema,
    summary: z.object({}).openapi({ description: 'JSON object without event details' }),
    details: z
      .object({})
      .exactOptional()
      .openapi({ description: 'JSON object with event details. Not populated yet.' }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    user: UserReadInConnectionEventSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'connectionId', 'eventType', 'summary', 'created_at'] })
  .openapi('ConnectionEventWithDetails')

const ConnectionEventListSchema = z
  .object({ events: z.array(ConnectionEventSchema) })
  .openapi({ required: ['events'] })
  .openapi('ConnectionEventList')

const ConnectionEventListMinimalSchema = z
  .object({ events: z.array(ConnectionEventMinimalSchema) })
  .openapi({ required: ['events'] })
  .openapi('ConnectionEventListMinimal')

const ConnectionEventsRequestBodySchema = z
  .object({
    connectionId: ConnectionIdSchema,
    eventTypes: z
      .array(ConnectionEventTypeSchema)
      .exactOptional()
      .openapi({ description: 'filter events by event types (optional)' }),
    pagination: PaginationSchema.exactOptional(),
    createdAtStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start datetime of a time range to filter by' }),
    createdAtEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end datetime of a time range to filter by' }),
  })
  .openapi({ required: ['connectionId'] })
  .openapi('ConnectionEventsRequestBody')

const ConnectionEventsListMinimalRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    eventTypes: z
      .array(ConnectionEventTypeSchema)
      .openapi({ description: 'filter events by event types' }),
    createdAtStart: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The start datetime of a time range to filter by' }),
    createdAtEnd: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The end datetime of a time range to filter by' }),
  })
  .openapi({ required: ['workspaceId', 'eventTypes', 'createdAtStart', 'createdAtEnd'] })
  .openapi('ConnectionEventsListMinimalRequestBody')

const ConnectionEventsBackfillRequestBodySchema = z
  .object({
    connectionId: ConnectionIdSchema,
    createdAtStart: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The start datetime of a time range to backfill events' }),
    createdAtEnd: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The end datetime of a time range to backfill events' }),
  })
  .openapi({ required: ['connectionId', 'createdAtStart', 'createdAtEnd'] })
  .openapi('ConnectionEventsBackfillRequestBody')

const ConnectionLastJobPerStreamReadItemSchema = z
  .object({
    streamName: z.string(),
    streamNamespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absent for streams without a namespace.' }),
    jobId: JobIdSchema,
    configType: JobConfigTypeSchema,
    jobStatus: JobStatusSchema,
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Absent when the job has no stats for the stream.',
      }),
    bytesCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Absent when the job has no stats for the stream.',
      }),
    startedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Absent when the job has no recorded start time.',
      }),
    endedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['streamName', 'jobId', 'configType', 'jobStatus', 'endedAt'] })
  .openapi('ConnectionLastJobPerStreamReadItem')

const ConnectionLastJobPerStreamReadSchema = z
  .array(ConnectionLastJobPerStreamReadItemSchema)
  .openapi('ConnectionLastJobPerStreamRead')

const SchemaChangeSchema = z.enum(['no_change', 'non_breaking', 'breaking']).openapi('SchemaChange')

const ConnectionSearchSchema = z
  .object({
    connectionId: ConnectionIdSchema.exactOptional(),
    name: z.string().exactOptional(),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    sourceId: SourceIdSchema.exactOptional(),
    destinationId: DestinationIdSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema.exactOptional(),
    source: SourceSearchSchema.exactOptional(),
    destination: DestinationSearchSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConnectionSearch')

const ConnectionReadListSchema = z
  .object({ connections: z.array(ConnectionReadSchema) })
  .openapi({ required: ['connections'] })
  .openapi('ConnectionReadList')

const ConnectionAutoPropagateSchemaChangeSchema = z
  .object({
    catalog: AirbyteCatalogSchema,
    catalogId: z.uuid(),
    connectionId: z.uuid(),
    workspaceId: z.uuid(),
  })
  .openapi({
    description:
      'Input of the schema propagation, with the catalog to be propagated and the connection to propagate to',
    required: ['catalog', 'catalogId', 'connectionId', 'workspaceId'],
  })
  .openapi('ConnectionAutoPropagateSchemaChange')

const ConnectionAutoPropagateResultSchema = z
  .object({ propagatedDiff: CatalogDiffSchema.exactOptional() })
  .openapi({
    description:
      'The result of schema propagation for a given connection, with the diff that was applied via auto-propagation.',
    required: [],
  })
  .openapi('ConnectionAutoPropagateResult')

const OperationIdRequestBodySchema = z
  .object({ operationId: OperationIdSchema })
  .openapi({ required: ['operationId'] })
  .openapi('OperationIdRequestBody')

const OperationUpdateSchema = z
  .object({
    operationId: OperationIdSchema,
    name: z.string(),
    operatorConfiguration: OperatorConfigurationSchema,
  })
  .openapi({ required: ['operationId', 'name', 'operatorConfiguration'] })
  .openapi('OperationUpdate')

const OperationReadSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    operationId: OperationIdSchema,
    name: z.string(),
    operatorConfiguration: OperatorConfigurationSchema,
  })
  .openapi({ required: ['operationId', 'name', 'operatorConfiguration', 'workspaceId'] })
  .openapi('OperationRead')

const OperationReadListSchema = z
  .object({ operations: z.array(OperationReadSchema) })
  .openapi({ required: ['operations'] })
  .openapi('OperationReadList')

const CheckOperationReadSchema = z
  .object({ status: z.enum(['succeeded', 'failed']), message: z.string().exactOptional() })
  .openapi({ required: ['status'] })
  .openapi('CheckOperationRead')

const BillingBackfillUsageRequestSchema = z
  .object({
    jobIds: z.array(
      z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
    ),
    backfillId: z.string(),
  })
  .openapi({ required: ['jobIds', 'backfillId'] })
  .openapi('BillingBackfillUsageRequest')

const CustomerPortalRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    returnUrl: z.string(),
    flow: z.enum(['portal', 'payment_method', 'setup']).default('portal').exactOptional(),
    plan: z
      .enum([
        'standard',
        'plus',
        'plus_40',
        'plus_100',
        'plus_250',
        'plus_500',
        'plus_1000',
        'plus_2000',
      ])
      .default('standard')
      .exactOptional()
      .openapi({
        description:
          'Requested self-serve plan when initiating setup checkout or switching plans. Plus tiers differ only in\nincluded credits and price. `plus` is a legacy alias for `plus_100`. Defaults to standard for backwards\ncompatibility.\n',
      }),
  })
  .openapi({ required: ['organizationId', 'returnUrl'] })
  .openapi('CustomerPortalRequestBody')

const CustomerPortalReadSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('CustomerPortalRead')

const BillingEventSchema = z
  .looseObject({})
  .openapi({ description: 'Generic event for billing, mapped to a JsonNode' })
  .openapi('BillingEvent')

const InvoiceReadSchema = z
  .object({
    id: z.string(),
    number: z.string().exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    currency: z.string(),
    invoiceDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    status: z.enum(['draft', 'open', 'paid', 'void', 'uncollectible']),
    pdfUrl: z.string(),
    invoiceUrl: z.string(),
  })
  .openapi({
    required: ['id', 'total', 'currency', 'invoiceDate', 'status', 'pdfUrl', 'invoiceUrl'],
  })
  .openapi('InvoiceRead')

const ListInvoicesReadSchema = z
  .object({ invoices: z.array(InvoiceReadSchema), hasMore: z.boolean() })
  .openapi({ required: ['invoices', 'hasMore'] })
  .openapi('ListInvoicesRead')

const AddressReadSchema = z
  .object({
    country: z.string().exactOptional(),
    state: z.string().exactOptional(),
    city: z.string().exactOptional(),
    postalCode: z.string().exactOptional(),
    line1: z.string().exactOptional(),
    line2: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddressRead')

const PaymentMethodReadSchema = z
  .object({
    type: z.string(),
    cardBrand: z.string().exactOptional(),
    cardLastDigits: z.string().exactOptional(),
    cardExpireMonth: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    cardExpireYear: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['type'] })
  .openapi('PaymentMethodRead')

const PaymentInformationReadSchema = z
  .object({
    customer: z
      .object({
        email: z.string().exactOptional(),
        customerAddress: AddressReadSchema.exactOptional(),
        shippingAddress: AddressReadSchema.exactOptional(),
        defaultPaymentMethod: PaymentMethodReadSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInformationRead')

const LocalDateSchema = z.iso
  .date()
  .openapi({
    'x-field-extra-annotation':
      '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd")',
  })
  .openapi('LocalDate')

const CreditBlockReadSchema = z
  .object({ amount: z.float64(), expiryDate: ISO8601DateTimeSchema.exactOptional() })
  .openapi({ required: ['amount'] })
  .openapi('CreditBlockRead')

const EntitlementPlanResponseSchema = z
  .object({ planEnum: z.string(), planId: z.string(), planName: z.string() })
  .openapi({ required: ['planEnum', 'planId', 'planName'] })
  .openapi('EntitlementPlanResponse')

const OrganizationSubscriptionInfoReadSchema = z
  .object({
    name: z.string(),
    selfServeSubscription: z.boolean(),
    cancellationDate: ISO8601DateTimeSchema.exactOptional(),
    balanceHidden: z
      .boolean()
      .openapi({
        description:
          'Whether the organization balance is hidden and should not be shown to the user.',
      }),
    upcomingInvoice: z
      .object({
        currency: z.string(),
        amount: z
          .string()
          .openapi({
            description:
              'The amount of the next upcoming invoice formatted as a decimal number wrapped inside a string.',
          }),
        invoiceDate: LocalDateSchema.openapi({
          description: 'The calendar date of the next scheduled invoice.',
        }),
      })
      .exactOptional()
      .openapi({
        description:
          'Describe the current state of the upcoming invoice. If `hidden` is `true`, this will be `null`, since no balance should be shown.',
        required: ['currency', 'amount', 'invoiceDate'],
      }),
    credits: z
      .object({ balance: z.float64(), blocks: z.array(CreditBlockReadSchema) })
      .exactOptional()
      .openapi({ required: ['balance', 'blocks'] }),
    entitlementPlan: EntitlementPlanResponseSchema.exactOptional(),
    selfServePlan: z
      .enum(['standard', 'plus_40', 'plus_100', 'plus_250', 'plus_500', 'plus_1000', 'plus_2000'])
      .exactOptional()
      .openapi({
        description:
          "The self-serve plan the organization's active self-serve subscription is on. Absent when the organization has no subscription on a configured self-serve plan.",
      }),
    pendingPlanChange: z
      .object({
        effectiveDate: ISO8601DateTimeSchema,
        planName: z.string(),
        selfServePlan: z
          .enum([
            'standard',
            'plus_40',
            'plus_100',
            'plus_250',
            'plus_500',
            'plus_1000',
            'plus_2000',
          ])
          .exactOptional()
          .openapi({
            description:
              'The self-serve plan the subscription will move to. Absent when the target plan is not a configured self-serve plan.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "A plan change scheduled on the organization's active self-serve subscription. Absent when no plan change is scheduled.",
        required: ['effectiveDate', 'planName'],
      }),
  })
  .openapi({ required: ['name', 'selfServeSubscription', 'balanceHidden'] })
  .openapi('OrganizationSubscriptionInfoRead')

const OrganizationTrialStatusReadSchema = z
  .object({
    trialStatus: z
      .enum(['pre_trial', 'in_trial', 'post_trial'])
      .openapi({
        description: 'Indicates the status of the trial for an organization',
        'x-enum-descriptions': [
          'The trial has not yet started for this organization',
          'The organization is currently in the trial. End of the trial is indicated by the `trialEndsAt` property',
          'The organization has left the trial already',
        ],
      }),
    trialEndsAt: ISO8601DateTimeSchema.exactOptional(),
  })
  .openapi({ required: ['trialStatus'] })
  .openapi('OrganizationTrialStatusRead')

const CancelSubscriptionReadSchema = z
  .object({ subscriptionEndsAt: ISO8601DateTimeSchema })
  .openapi({ required: ['subscriptionEndsAt'] })
  .openapi('CancelSubscriptionRead')

const OrganizationPaymentConfigReadSchema = z
  .object({
    organizationId: z.uuid(),
    paymentStatus: z.enum([
      'uninitialized',
      'okay',
      'grace_period',
      'disabled',
      'locked',
      'manual',
    ]),
    subscriptionStatus: z.enum(['pre_subscription', 'subscribed', 'unsubscribed']),
    paymentProviderId: z.string().exactOptional(),
    gracePeriodEndAt: ISO8601DateTimeSchema.exactOptional(),
    usageCategoryOverwrite: z.enum(['free', 'internal']).exactOptional(),
  })
  .openapi({ required: ['organizationId', 'paymentStatus', 'subscriptionStatus'] })
  .openapi('OrganizationPaymentConfigRead')

const OrganizationPaymentConfigUpdateRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    paymentStatus: z.enum([
      'uninitialized',
      'okay',
      'grace_period',
      'disabled',
      'locked',
      'manual',
    ]),
    paymentProviderId: z.string().exactOptional(),
    usageCategoryOverwrite: z.enum(['free', 'internal']).exactOptional(),
    gracePeriodEndAt: ISO8601DateTimeSchema.exactOptional(),
    newGracePeriodReason: z.string().exactOptional(),
  })
  .openapi({ required: ['organizationId', 'paymentStatus'] })
  .openapi('OrganizationPaymentConfigUpdateRequestBody')

const BillingNotificationSettingsReadSchema = z
  .object({
    organizationId: z.uuid(),
    configured: z
      .boolean()
      .openapi({
        description:
          'True when the organization has saved settings. False means the thresholds are the defaults and every alert is off.',
      }),
    recipientEmail: z
      .email()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Address that receives billing alerts. Null means the payment provider email is used.',
      }),
    syncCreditThreshold: z
      .number()
      .openapi({
        description: 'Estimated credits consumed by a single sync. 0 disables the alert.',
      }),
    invoiceAmountThreshold: z
      .number()
      .openapi({ description: 'Billing period amount in USD. 0 disables the alert.' }),
  })
  .openapi({
    required: ['organizationId', 'configured', 'syncCreditThreshold', 'invoiceAmountThreshold'],
  })
  .openapi('BillingNotificationSettingsRead')

const BillingNotificationSettingsUpdateRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    recipientEmail: z
      .email()
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Address that receives billing alerts. Null or empty means the payment provider email is used. The update replaces every field, so omit it or send null to clear a stored address.',
      }),
    syncCreditThreshold: z
      .number()
      .min(0)
      .openapi({
        description: 'Estimated credits consumed by a single sync. 0 disables the alert.',
      }),
    invoiceAmountThreshold: z
      .number()
      .min(0)
      .openapi({ description: 'Billing period amount in USD. 0 disables the alert.' }),
  })
  .openapi({ required: ['organizationId', 'syncCreditThreshold', 'invoiceAmountThreshold'] })
  .openapi('BillingNotificationSettingsUpdateRequestBody')

const AuditLogListRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Inclusive start of the time range. Defaults to 30 days before endTime.',
        example: '2026-08-01T00:00:00Z',
      }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Inclusive end of the time range. Defaults to now. The range between startTime and endTime must not exceed 90 days.',
        example: '2026-08-14T00:00:00Z',
      }),
    workspaceId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Convenience filter on the workspace the audited action belongs to. Not an authorization boundary.',
      }),
    actorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Case-insensitive substring match over the actor id and the actor email of an entry.',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({ description: 'Case-insensitive substring match over the operation of an entry.' }),
    success: z.boolean().exactOptional(),
    searchText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Case-insensitive substring match over the operation, actor, and error message of an entry.',
      }),
    pageSize: z.int32().min(1).max(200).default(50).exactOptional(),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Opaque resume token from a previous response's nextPageToken. Must be combined with otherwise-identical query parameters.",
      }),
  })
  .openapi({ required: ['organizationId'] })
  .openapi('AuditLogListRequestBody')

const AuditLogActorSchema = z
  .object({
    actorId: z.string(),
    email: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    userAgent: z.string().exactOptional(),
  })
  .openapi({ required: ['actorId'] })
  .openapi('AuditLogActor')

const AuditLogDetailsSchema = z
  .object({})
  .openapi({
    description:
      "Free-form JSON summary of an audit log entry's request or response, as produced by the audited operation's provider with sensitive fields redacted.",
  })
  .openapi('AuditLogDetails')

const AuditLogReadSchema = z
  .object({
    id: z.uuid(),
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Epoch milliseconds at which the audited action occurred.',
      }),
    actor: AuditLogActorSchema.exactOptional(),
    operation: z.string(),
    request: AuditLogDetailsSchema.exactOptional(),
    response: AuditLogDetailsSchema.exactOptional(),
    success: z.boolean(),
    errorMessage: z.string().exactOptional(),
    organizationId: z.uuid().exactOptional(),
    workspaceId: z.uuid().exactOptional(),
  })
  .openapi({ required: ['id', 'timestamp', 'operation', 'success'] })
  .openapi('AuditLogRead')

const AuditLogReadListSchema = z
  .object({
    auditLogs: z.array(AuditLogReadSchema),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Present when more entries are available; pass as pageToken in a follow-up request.',
      }),
  })
  .openapi({ required: ['auditLogs'] })
  .openapi('AuditLogReadList')

const OrganizationIdRequestBodySchema = z
  .object({ organizationId: z.uuid() })
  .openapi({ required: ['organizationId'] })
  .openapi('OrganizationIdRequestBody')

const OrganizationSemanticSearchEnablementUpdateRequestBodySchema = z
  .object({ organizationId: z.uuid(), semanticSearchEnabled: z.boolean() })
  .openapi({ required: ['organizationId', 'semanticSearchEnabled'] })
  .openapi('OrganizationSemanticSearchEnablementUpdateRequestBody')

const OrganizationSemanticSearchEnablementReadSchema = z
  .object({ organizationId: z.uuid(), semanticSearchEnabled: z.boolean() })
  .openapi({ required: ['organizationId', 'semanticSearchEnabled'] })
  .openapi('OrganizationSemanticSearchEnablementRead')

const OrganizationUpdateRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    organizationName: z.string().exactOptional(),
    email: z.string().exactOptional(),
  })
  .openapi({ required: ['organizationId'] })
  .openapi('OrganizationUpdateRequestBody')

const OrganizationAgenticStatusUpdateRequestBodySchema = z
  .object({ organizationId: z.uuid(), isAgentic: z.boolean() })
  .openapi({ required: ['organizationId', 'isAgentic'] })
  .openapi('OrganizationAgenticStatusUpdateRequestBody')

const OrganizationCreateRequestBodySchema = z
  .object({
    userId: z.uuid(),
    organizationName: z.string(),
    email: z.string().exactOptional(),
    isAgentic: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['userId', 'organizationName'] })
  .openapi('OrganizationCreateRequestBody')

const OrganizationLimitsSchema = z
  .object({ users: LimitSchema.exactOptional(), workspaces: LimitSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('OrganizationLimits')

const OrganizationReadSchema = z
  .object({
    organizationId: z.uuid(),
    organizationName: z.string(),
    email: z.string(),
    ssoRealm: z.string().exactOptional(),
    isAgentic: z.boolean().exactOptional(),
    organizationLimits: OrganizationLimitsSchema.exactOptional(),
  })
  .openapi({ required: ['organizationId', 'organizationName', 'email'] })
  .openapi('OrganizationRead')

const OrganizationInfoReadSchema = z
  .object({
    organizationId: z.uuid(),
    organizationName: z.string(),
    sso: z.boolean(),
    scim: z
      .boolean()
      .openapi({
        description: 'True when SCIM provisioning is currently enabled for the organization.',
      }),
    billing: z
      .object({
        subscriptionStatus: z
          .enum(['pre_subscription', 'unsubscribed', 'subscribed'])
          .exactOptional(),
        paymentStatus: z.enum([
          'uninitialized',
          'okay',
          'grace_period',
          'disabled',
          'locked',
          'manual',
        ]),
        accountType: z.enum(['free', 'internal']).exactOptional(),
        gracePeriodEndsAt: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
      })
      .exactOptional()
      .openapi({ required: ['paymentStatus'] }),
    organizationPlanId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Limited info about an organization that is safe to expose to organization members.',
    required: ['organizationId', 'organizationName', 'sso', 'scim'],
  })
  .openapi('OrganizationInfoRead')

const OrganizationReadListSchema = z
  .object({ organizations: z.array(OrganizationReadSchema) })
  .openapi({ required: ['organizations'] })
  .openapi('OrganizationReadList')

const ListOrganizationsByUserRequestBodySchema = z
  .object({
    userId: z.uuid(),
    pagination: PaginationSchema.exactOptional(),
    nameContains: z.string().exactOptional(),
  })
  .openapi({ required: ['userId'] })
  .openapi('ListOrganizationsByUserRequestBody')

const UserIdSchema = z
  .uuid()
  .openapi({ description: 'Internal Airbyte user ID', 'x-sdk-component': true })
  .openapi('UserId')

const PermissionTypeSchema = z
  .enum([
    'instance_admin',
    'organization_admin',
    'organization_editor',
    'organization_runner',
    'organization_reader',
    'organization_member',
    'workspace_owner',
    'workspace_admin',
    'workspace_runner',
    'workspace_editor',
    'workspace_source_editor',
    'workspace_destination_editor',
    'workspace_reader',
  ])
  .openapi({
    description: 'Describes what actions/endpoints the permission entitles to',
    'x-sdk-component': true,
  })
  .openapi('PermissionType')

const OrganizationUserReadSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Caption name for the user' }),
    userId: UserIdSchema,
    email: z.email(),
    permissionId: z.uuid(),
    permissionType: PermissionTypeSchema,
    organizationId: OrganizationIdSchema,
  })
  .openapi({ required: ['userId', 'email', 'permissionId', 'permissionType', 'organizationId'] })
  .openapi('OrganizationUserRead')

const OrganizationUserReadListSchema = z
  .object({ users: z.array(OrganizationUserReadSchema) })
  .openapi({ required: ['users'] })
  .openapi('OrganizationUserReadList')

const OrganizationUsageRequestBodySchema = z
  .object({ organizationId: OrganizationIdSchema, timeWindow: ConsumptionTimeWindowSchema })
  .openapi({ required: ['organizationId', 'timeWindow'] })
  .openapi('OrganizationUsageRequestBody')

const IndividualWorkspaceUsageReadSchema = z
  .object({
    workspace: z
      .object({ id: WorkspaceIdSchema, name: z.string(), tombstoned: z.boolean() })
      .openapi({ required: ['id', 'name', 'tombstoned'] }),
    usage: UsageBucketSchema,
  })
  .openapi({ required: ['workspace', 'usage'] })
  .openapi('IndividualWorkspaceUsageRead')

const OrganizationUsageReadSchema = z
  .object({ data: z.array(IndividualWorkspaceUsageReadSchema) })
  .openapi({ required: ['data'] })
  .openapi('OrganizationUsageRead')

const OrganizationDataWorkerUsageRequestBodySchema = z
  .object({ organizationId: OrganizationIdSchema, startDate: z.iso.date(), endDate: z.iso.date() })
  .openapi({ required: ['organizationId', 'startDate', 'endDate'] })
  .openapi('OrganizationDataWorkerUsageRequestBody')

const DataWorkerUsageSchema = z
  .object({
    date: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-field-extra-annotation':
          '@com.fasterxml.jackson.annotation.JsonFormat(pattern="yyyy-MM-dd\'T\'HH:mm:ss.SSSZ")',
      }),
    used: z.float64(),
  })
  .openapi({ required: ['date', 'used'] })
  .openapi('DataWorkerUsage')

const WorkspaceDataWorkerUsageSchema = z
  .object({ id: WorkspaceIdSchema, name: z.string(), dataWorkers: z.array(DataWorkerUsageSchema) })
  .openapi({ required: ['id', 'name', 'dataWorkers'] })
  .openapi('WorkspaceDataWorkerUsage')

const RegionDataWorkerUsageSchema = z
  .object({ id: z.uuid(), name: z.string(), workspaces: z.array(WorkspaceDataWorkerUsageSchema) })
  .openapi({ required: ['id', 'name', 'workspaces'] })
  .openapi('RegionDataWorkerUsage')

const OrganizationDataWorkerUsageReadSchema = z
  .object({
    organizationId: OrganizationIdSchema,
    committedDataWorkers: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of contracted/committed data workers for the organization, summed across regions. Null if not set or unlimited.',
      }),
    regions: z.array(RegionDataWorkerUsageSchema),
  })
  .openapi({ required: ['organizationId', 'regions'] })
  .openapi('OrganizationDataWorkerUsageRead')

const ListOrganizationSummariesRequestBodySchema = z
  .object({ userId: UserIdSchema, nameContains: z.string(), pagination: PaginationSchema })
  .openapi({ required: ['userId', 'nameContains', 'pagination'] })
  .openapi('ListOrganizationSummariesRequestBody')

const OrganizationSummarySchema = z
  .object({
    organization: OrganizationReadSchema,
    workspaces: z.array(WorkspaceReadSchema),
    memberCount: z.int(),
  })
  .openapi({ required: ['organization', 'workspaces', 'memberCount'] })
  .openapi('OrganizationSummary')

const ListOrganizationSummariesResponseSchema = z
  .object({ organizationSummaries: z.array(OrganizationSummarySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListOrganizationSummariesResponse')

const DomainVerificationIdRequestBodySchema = z
  .object({ domainVerificationId: z.uuid() })
  .openapi({ required: ['domainVerificationId'] })
  .openapi('DomainVerificationIdRequestBody')

const PermissionIdRequestBodySchema = z
  .object({ permissionId: z.uuid() })
  .openapi({ required: ['permissionId'] })
  .openapi('PermissionIdRequestBody')

const PermissionCreateSchema = z
  .object({
    permissionId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'This is a temporary and optional field just for dual write purpose during the data migration.',
      }),
    permissionType: PermissionTypeSchema,
    userId: UserIdSchema,
    workspaceId: WorkspaceIdSchema.exactOptional(),
    organizationId: OrganizationIdSchema.exactOptional(),
  })
  .openapi({ required: ['permissionType', 'userId'] })
  .openapi('PermissionCreate')

const PermissionDeleteUserFromWorkspaceRequestBodySchema = z
  .object({ userId: UserIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['userId', 'workspaceId'] })
  .openapi('PermissionDeleteUserFromWorkspaceRequestBody')

const PermissionReadSchema = z
  .object({
    permissionId: z.uuid(),
    permissionType: PermissionTypeSchema,
    userId: UserIdSchema.exactOptional().openapi({
      description: 'Absent for permissions that belong to a service account rather than a user.',
    }),
    workspaceId: WorkspaceIdSchema.exactOptional(),
    organizationId: OrganizationIdSchema.exactOptional(),
    groupId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Set when the permission is inherited through a group membership. Such rows are read-only projections: their permissionId cannot be passed to the get, update or delete user-permission endpoints.',
      }),
  })
  .openapi({ required: ['permissionId', 'permissionType'] })
  .openapi('PermissionRead')

const PermissionReadListSchema = z
  .object({ permissions: z.array(PermissionReadSchema) })
  .openapi({ required: ['permissions'] })
  .openapi('PermissionReadList')

const PermissionUpdateSchema = z
  .object({ permissionId: z.uuid(), permissionType: PermissionTypeSchema.exactOptional() })
  .openapi({ required: ['permissionId'] })
  .openapi('PermissionUpdate')

const SSOConfigDefaultRoleSchema = z
  .enum(['organization_admin', 'organization_editor', 'organization_member'])
  .openapi({
    description:
      'Default organization role granted to users provisioned by an SSO configuration. If omitted, defaults to organization_member.',
  })
  .openapi('SSOConfigDefaultRole')

const PublicPermissionTypeSchema = z
  .enum([
    'organization_admin',
    'organization_editor',
    'organization_runner',
    'organization_reader',
    'organization_member',
    'workspace_admin',
    'workspace_editor',
    'workspace_source_editor',
    'workspace_destination_editor',
    'workspace_runner',
    'workspace_reader',
  ])
  .openapi({
    description:
      'Subset of `PermissionType` (removing `instance_admin`), could be used in public-api.',
    'x-sdk-component': true,
  })
  .openapi('PublicPermissionType')

const PermissionCheckRequestSchema = z
  .object({
    permissionType: PermissionTypeSchema,
    userId: UserIdSchema,
    workspaceId: WorkspaceIdSchema.exactOptional(),
    organizationId: OrganizationIdSchema.exactOptional(),
  })
  .openapi({ required: ['permissionType', 'userId'] })
  .openapi('PermissionCheckRequest')

const PermissionsCheckMultipleWorkspacesRequestSchema = z
  .object({
    permissionType: PermissionTypeSchema,
    userId: UserIdSchema,
    workspaceIds: z.array(WorkspaceIdSchema).exactOptional(),
  })
  .openapi({ required: ['permissionType', 'userId'] })
  .openapi('PermissionsCheckMultipleWorkspacesRequest')

const PermissionCheckReadSchema = z
  .object({ status: z.enum(['succeeded', 'failed']), message: z.string().exactOptional() })
  .openapi({ required: ['status'] })
  .openapi('PermissionCheckRead')

const UserIdRequestBodySchema = z
  .object({ userId: UserIdSchema })
  .openapi({ required: ['userId'] })
  .openapi('UserIdRequestBody')

const AuthProviderSchema = z
  .enum(['airbyte', 'google_identity_platform', 'keycloak'])
  .default('airbyte')
  .openapi({ description: 'Auth Provider', 'x-sdk-component': true })
  .openapi('AuthProvider')

const UserStatusSchema = z
  .enum(['invited', 'registered', 'disabled'])
  .openapi({
    description: 'user status',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('UserStatus')

const UserReadSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Caption name for the user' }),
    userId: UserIdSchema,
    defaultWorkspaceId: WorkspaceIdSchema.exactOptional(),
    status: UserStatusSchema.exactOptional(),
    companyName: z.string().exactOptional(),
    email: z.email(),
    news: z.boolean().exactOptional(),
    metadata: z.object({}).openapi({ description: 'UI metadata required by frontend' }),
    agenticEnabledAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp when the user was enabled for agentic features. Null if user is data-replication-only.',
      }),
  })
  .openapi({ required: ['userId', 'email', 'metadata'] })
  .openapi('UserRead')

const UserUpdateSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Caption name for the user' }),
    userId: UserIdSchema,
    defaultWorkspaceId: WorkspaceIdSchema.exactOptional(),
    status: UserStatusSchema.exactOptional(),
    companyName: z.string().exactOptional(),
    news: z.boolean().exactOptional(),
    metadata: z.object({}).exactOptional().openapi({ description: 'UI metadata used in frontend' }),
  })
  .openapi({ required: ['userId'] })
  .openapi('UserUpdate')

const UserAuthIdRequestBodySchema = z
  .object({
    authUserId: z.string(),
    isAgenticUser: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this user should have agentic features enabled.\n\nBehavior:\n- New user + true: User created with agenticEnabledAt timestamp\n- New user + false/omitted: User created as non-agentic (agenticEnabledAt = null)\n- Existing agentic user + any value: Timestamp preserved (immutable, cannot downgrade)\n- Existing non-agentic user + true: User upgraded, agenticEnabledAt set to current time\n- Existing non-agentic user + false/omitted: Remains non-agentic\n\nNote: agenticEnabledAt is one-way - once set, it cannot be unset. Users can be upgraded\nfrom non-agentic to agentic, but not downgraded.\n',
      }),
  })
  .openapi({ required: ['authUserId'] })
  .openapi('UserAuthIdRequestBody')

const UserEmailRequestBodySchema = z
  .object({ email: z.string() })
  .openapi({ required: ['email'] })
  .openapi('UserEmailRequestBody')

const UserGetOrCreateByAuthIdResponseSchema = z
  .object({
    userRead: UserReadSchema,
    authUserId: z.string().openapi({ description: 'The userId from the Auth provider' }),
    authProvider: AuthProviderSchema,
    newUserCreated: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['userRead', 'authUserId', 'authProvider'] })
  .openapi('UserGetOrCreateByAuthIdResponse')

const LogTypeSchema = z
  .enum(['server', 'scheduler'])
  .openapi({ description: 'type/source of logs produced' })
  .openapi('LogType')

const LogsRequestBodySchema = z
  .object({ logType: LogTypeSchema })
  .openapi({ required: ['logType'] })
  .openapi('LogsRequestBody')

const ActorCatalogWithUpdatedAtSchema = z
  .object({
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    catalog: z.object({}).exactOptional(),
  })
  .openapi({
    description: 'A source actor catalog with the timestamp it was mostly recently updated',
    required: [],
  })
  .openapi('ActorCatalogWithUpdatedAt')

const DataTypeSchema = z
  .enum(['string', 'number', 'boolean', 'object', 'array'])
  .openapi('DataType')

const JobCreateSchema = z
  .object({ connectionId: ConnectionIdSchema, isScheduled: z.boolean() })
  .openapi({ required: ['connectionId', 'isScheduled'] })
  .openapi('JobCreate')

const JobListRequestBodySchema = z
  .object({
    configTypes: z.array(JobConfigTypeSchema),
    configId: z.string().exactOptional(),
    includingJobId: JobIdSchema.exactOptional().openapi({
      description:
        'If the job with this ID exists for the specified connection, returns the number of pages of jobs necessary to include this job. Returns an empty list if this job is specified and cannot be found in this connection.',
    }),
    pagination: PaginationSchema.exactOptional(),
    statuses: z
      .array(JobStatusSchema)
      .exactOptional()
      .openapi({ description: 'The Job statuses you want to filter by' }),
    createdAtStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start datetime to filter by' }),
    createdAtEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end datetime to filter by' }),
    updatedAtStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start datetime to filter by' }),
    updatedAtEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end datetime to filter by' }),
    orderByField: z
      .enum(['createdAt', 'updatedAt'])
      .exactOptional()
      .openapi({ description: 'The field to order by' }),
    orderByMethod: z
      .enum(['ASC', 'DESC'])
      .exactOptional()
      .openapi({ description: 'The order by method' }),
  })
  .openapi({ required: ['configTypes'] })
  .openapi('JobListRequestBody')

const JobListForWorkspacesRequestBodySchema = z
  .object({
    configTypes: z.array(JobConfigTypeSchema),
    configId: z.string().exactOptional(),
    workspaceIds: z.array(WorkspaceIdSchema).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    statuses: z
      .array(JobStatusSchema)
      .exactOptional()
      .openapi({ description: 'The Job statuses you want to filter by' }),
    createdAtStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start datetime to filter by' }),
    createdAtEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end datetime to filter by' }),
    updatedAtStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start datetime to filter by' }),
    updatedAtEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end datetime to filter by' }),
    orderByField: z
      .enum(['createdAt', 'updatedAt'])
      .exactOptional()
      .openapi({ description: 'The field to order by' }),
    orderByMethod: z
      .enum(['ASC', 'DESC'])
      .exactOptional()
      .openapi({ description: 'The order by method' }),
  })
  .openapi({ required: ['configTypes'] })
  .openapi('JobListForWorkspacesRequestBody')

const JobIdRequestBodySchema = z
  .object({ id: JobIdSchema })
  .openapi({ required: ['id'] })
  .openapi('JobIdRequestBody')

const JobReadResponseSchema = z
  .object({ job: JobReadSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('JobReadResponse')

const SyncInputSchema = z
  .object({ jobId: JobIdSchema, attemptNumber: AttemptNumberSchema })
  .openapi({ required: ['jobId', 'attemptNumber'] })
  .openapi('SyncInput')

const SyncJobInputReadSchema = z
  .any()
  .openapi({
    description:
      'This return a json blob aimed to be used as a JobInput. It is serialized by the JobInput java class and should be deserialized into it.',
  })
  .openapi('SyncJobInputRead')

const JobDebugReadSchema = z
  .object({
    id: JobIdSchema,
    configType: JobConfigTypeSchema,
    configId: z.string(),
    status: JobStatusSchema,
    airbyteVersion: z.string(),
    sourceDefinition: SourceDefinitionReadSchema,
    destinationDefinition: DestinationDefinitionReadSchema,
  })
  .openapi({
    required: [
      'id',
      'configType',
      'configId',
      'status',
      'airbyteVersion',
      'sourceDefinition',
      'destinationDefinition',
    ],
  })
  .openapi('JobDebugRead')

const WorkflowStateReadSchema = z
  .object({ running: z.boolean() })
  .openapi({ required: ['running'] })
  .openapi('WorkflowStateRead')

const AttemptStatusSchema = z.enum(['running', 'failed', 'succeeded']).openapi('AttemptStatus')

const AttemptStatsSchema = z
  .object({
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    bytesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    stateMessagesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    bytesCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsRejected: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    estimatedRecords: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    estimatedBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    additionalStats: z.record(z.string(), z.number()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttemptStats')

const AttemptStreamStatsSchema = z
  .object({
    streamName: z.string(),
    streamNamespace: z.string().exactOptional(),
    stats: AttemptStatsSchema,
  })
  .openapi({ required: ['streamName', 'stats'] })
  .openapi('AttemptStreamStats')

const AttemptFailureSummarySchema = z
  .object({
    failures: z.array(FailureReasonSchema),
    partialSuccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown.',
      }),
  })
  .openapi({ required: ['failures'] })
  .openapi('AttemptFailureSummary')

const AttemptReadSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    status: AttemptStatusSchema,
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    endedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    bytesSynced: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsSynced: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalStats: AttemptStatsSchema.exactOptional(),
    streamStats: z.array(AttemptStreamStatsSchema).exactOptional(),
    failureSummary: AttemptFailureSummarySchema.exactOptional(),
  })
  .openapi({ required: ['id', 'status', 'createdAt', 'updatedAt'] })
  .openapi('AttemptRead')

const JobWithAttemptsReadSchema = z
  .object({
    job: JobReadSchema.exactOptional(),
    attempts: z.array(AttemptReadSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobWithAttemptsRead')

const JobCreatedAtSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description: 'epoch time of the latest sync job. null if no sync job has taken place.',
  })
  .openapi('JobCreatedAt')

const JobReadListSchema = z
  .object({
    jobs: z.array(JobWithAttemptsReadSchema),
    totalJobCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'the total count of jobs for the specified connection',
      }),
  })
  .openapi({ required: ['jobs', 'totalJobCount'] })
  .openapi('JobReadList')

const AttemptInfoReadSchema = z
  .object({
    attempt: AttemptReadSchema,
    logType: LogFormatTypeSchema.exactOptional(),
    logs: z.xor([LogEventsSchema, LogReadSchema]).exactOptional(),
  })
  .openapi({ required: ['attempt'] })
  .openapi('AttemptInfoRead')

const JobInfoReadSchema = z
  .object({ job: JobReadSchema, attempts: z.array(AttemptInfoReadSchema) })
  .openapi({ required: ['job', 'attempts'] })
  .openapi('JobInfoRead')

const JobInfoLightReadSchema = z
  .object({ job: JobReadSchema })
  .openapi({ required: ['job'] })
  .openapi('JobInfoLightRead')

const CheckDataWorkerCapacityReadSchema = z
  .object({ capacityAvailable: z.boolean(), useOnDemandCapacity: z.boolean() })
  .openapi({ required: ['capacityAvailable', 'useOnDemandCapacity'] })
  .openapi('CheckDataWorkerCapacityRead')

const JobOptionalReadSchema = z
  .object({ job: JobReadSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('JobOptionalRead')

const JobDebugInfoReadSchema = z
  .object({
    job: JobDebugReadSchema,
    attempts: z.array(AttemptInfoReadSchema),
    workflowState: WorkflowStateReadSchema.exactOptional(),
  })
  .openapi({ required: ['job', 'attempts'] })
  .openapi('JobDebugInfoRead')

const JobExplainReadSchema = z
  .object({ jobId: JobIdSchema, explanation: z.string() })
  .openapi({ required: ['jobId', 'explanation'] })
  .openapi('JobExplainRead')

const JobLogsSchema = z
  .object({
    logType: LogFormatTypeSchema,
    logEvents: LogEventsSchema.exactOptional(),
    logLines: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: ['logType'] })
  .openapi('JobLogs')

const HealthCheckReadSchema = z
  .object({ available: z.boolean() })
  .openapi({ required: ['available'] })
  .openapi('HealthCheckRead')

const CheckConnectionReadSchema = z
  .object({
    status: z.enum(['succeeded', 'failed']).exactOptional(),
    message: z.string().exactOptional(),
    jobInfo: SynchronousJobReadSchema,
  })
  .openapi({ required: ['jobInfo'] })
  .openapi('CheckConnectionRead')

const StreamFieldStatusChangedSchema = z
  .object({
    streamName: z.string().exactOptional(),
    streamNamespace: z.string().exactOptional(),
    status: z.enum(['enabled', 'disabled']).exactOptional(),
    fields: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description: 'Describes the fields newly enabled or disabled in a stream.',
    required: [],
  })
  .openapi('StreamFieldStatusChanged')

const StreamPrimaryKeyDiffSchema = z
  .object({
    streamName: z.string().exactOptional(),
    streamNamespace: z.string().exactOptional(),
    prev: z.array(FieldNameSchema).exactOptional(),
    current: z.array(FieldNameSchema).exactOptional(),
  })
  .openapi({ description: 'Primary key changed', required: [] })
  .openapi('StreamPrimaryKeyDiff')

const StreamCursorFieldDiffSchema = z
  .object({
    streamName: z.string().exactOptional(),
    streamNamespace: z.string().exactOptional(),
    prev: z.array(z.string()).exactOptional(),
    current: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'Cursor field changed', required: [] })
  .openapi('StreamCursorFieldDiff')

const StreamSyncModeDiffSchema = z
  .object({
    streamName: z.string().exactOptional(),
    streamNamespace: z.string().exactOptional(),
    prevSourceSyncMode: SyncModeSchema.exactOptional(),
    prevDestinationSyncMode: DestinationSyncModeSchema.exactOptional(),
    currentSourceSyncMode: SyncModeSchema.exactOptional(),
    currentDestinationSyncMode: DestinationSyncModeSchema.exactOptional(),
  })
  .openapi({ description: 'Sync mode changed', required: [] })
  .openapi('StreamSyncModeDiff')

const CatalogConfigDiffSchema = z
  .object({
    streamsEnabled: z
      .array(StreamFieldStatusChangedSchema)
      .exactOptional()
      .openapi({ description: 'list of new streams enabled. Order does not matter.' }),
    streamsDisabled: z
      .array(StreamFieldStatusChangedSchema)
      .exactOptional()
      .openapi({ description: 'list of streams disabled. Order does not matter.' }),
    fieldsEnabled: z
      .array(StreamFieldStatusChangedSchema)
      .exactOptional()
      .openapi({ description: 'list of new fields enabled. Order does not matter.' }),
    fieldsDisabled: z
      .array(StreamFieldStatusChangedSchema)
      .exactOptional()
      .openapi({ description: 'list of fields disabled. Order does not matter.' }),
    primaryKeysChanged: z
      .array(StreamPrimaryKeyDiffSchema)
      .exactOptional()
      .openapi({ description: 'list of changes for primary keys. Order does not matter.' }),
    cursorFieldsChanged: z
      .array(StreamCursorFieldDiffSchema)
      .exactOptional()
      .openapi({ description: 'list of changes for cursor fields. Order does not matter.' }),
    syncModesChanged: z
      .array(StreamSyncModeDiffSchema)
      .exactOptional()
      .openapi({ description: 'list of changes for sync mode. Order does not matter.' }),
  })
  .openapi({
    description: 'Describes the difference between two configured catalogs.',
    required: [],
  })
  .openapi('CatalogConfigDiff')

const AirbyteCatalogDiffSchema = z
  .object({
    catalogDiff: CatalogDiffSchema.exactOptional(),
    catalogConfigDiff: CatalogConfigDiffSchema.exactOptional(),
  })
  .openapi({
    description:
      'Describes the difference between two Airbyte catalogs. Include both source schema diff and schema config diff.',
    required: [],
  })
  .openapi('AirbyteCatalogDiff')

const FieldDataTypeDiffSchema = z
  .object({
    streamName: z.string().exactOptional(),
    streamNamespace: z.string().exactOptional(),
    fieldName: z.string().exactOptional(),
    prev: z.string().exactOptional(),
    current: z.string().exactOptional(),
  })
  .openapi({ description: 'Field data type changed', required: [] })
  .openapi('FieldDataTypeDiff')

const ActorDefinitionRequestBodySchema = z
  .strictObject({ actorDefinitionId: ActorDefinitionIdSchema, actorType: ActorTypeSchema })
  .openapi({ required: ['actorDefinitionId', 'actorType'] })
  .openapi('ActorDefinitionRequestBody')

const DbMigrationStateSchema = z
  .enum([
    'pending',
    'above_target',
    'below_baseline',
    'baseline',
    'ignored',
    'missing_success',
    'missing_failed',
    'success',
    'undone',
    'available',
    'failed',
    'out_of_order',
    'future_success',
    'future_failed',
    'outdated',
    'superseded',
    'deleted',
  ])
  .openapi('DbMigrationState')

const DbMigrationReadSchema = z
  .object({
    migrationType: z.string(),
    migrationVersion: z.string(),
    migrationDescription: z.string(),
    migrationState: DbMigrationStateSchema.exactOptional(),
    migratedBy: z.string().exactOptional(),
    migratedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    migrationScript: z.string().exactOptional(),
  })
  .openapi({ required: ['migrationType', 'migrationVersion', 'migrationDescription'] })
  .openapi('DbMigrationRead')

const DbMigrationReadListSchema = z
  .object({ migrations: z.array(DbMigrationReadSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DbMigrationReadList')

const DbMigrationExecutionReadSchema = z
  .object({
    initialVersion: z.string().exactOptional(),
    targetVersion: z.string().exactOptional(),
    executedMigrations: z.array(DbMigrationReadSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbMigrationExecutionRead')

const OAuthInputConfigurationSchema = OAuthConfigurationSchema.openapi({
  'x-sdk-component': true,
}).openapi('OAuthInputConfiguration')

const EmbeddedSourceOauthConsentRequestSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
    redirectUrl: z
      .string()
      .openapi({ description: 'The url to redirect to after getting the user consent' }),
    sourceId: SourceIdSchema.exactOptional(),
  })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId', 'redirectUrl'] })
  .openapi('EmbeddedSourceOauthConsentRequest')

const SourceOauthConsentRequestSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
    redirectUrl: z
      .string()
      .openapi({ description: 'The url to redirect to after getting the user consent' }),
    oAuthInputConfiguration: OAuthInputConfigurationSchema.exactOptional(),
    sourceId: SourceIdSchema.exactOptional(),
    requestedScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional OAuth scopes to request, overriding the connector's default scopes. Only supported for connectors that define scopes as an array.",
      }),
    requestedOptionalScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional OAuth optional_scopes to request, overriding the connector's default optional_scopes. Only applied when requestedScopes is also provided.",
      }),
  })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId', 'redirectUrl'] })
  .openapi('SourceOauthConsentRequest')

const BuilderProjectOauthConsentRequestSchema = z
  .object({
    builderProjectId: ConnectorBuilderProjectIdSchema,
    workspaceId: WorkspaceIdSchema,
    redirectUrl: z
      .string()
      .openapi({ description: 'The url to redirect to after getting the user consent' }),
    oAuthInputConfiguration: OAuthInputConfigurationSchema.exactOptional(),
  })
  .openapi({ required: ['builderProjectId', 'workspaceId', 'redirectUrl'] })
  .openapi('BuilderProjectOauthConsentRequest')

const DestinationOauthConsentRequestSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
    redirectUrl: z
      .string()
      .openapi({ description: 'The url to redirect to after getting the user consent' }),
    oAuthInputConfiguration: OAuthInputConfigurationSchema.exactOptional(),
    destinationId: DestinationIdSchema.exactOptional(),
  })
  .openapi({ required: ['destinationDefinitionId', 'workspaceId', 'redirectUrl'] })
  .openapi('DestinationOauthConsentRequest')

const OAuthConsentReadSchema = z
  .object({ consentUrl: z.string() })
  .openapi({ required: ['consentUrl'] })
  .openapi('OAuthConsentRead')

const CompleteConnectorBuilderProjectOauthRequestSchema = z
  .object({
    builderProjectId: ConnectorBuilderProjectIdSchema,
    workspaceId: WorkspaceIdSchema,
    queryParams: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The query parameters present in the redirect URL after a user granted consent e.g auth code',
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.',
      }),
  })
  .openapi({ required: ['builderProjectId', 'workspaceId'] })
  .openapi('CompleteConnectorBuilderProjectOauthRequest')

const CompleteSourceOauthRequestSchema = z
  .object({
    sourceDefinitionId: SourceDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.',
      }),
    queryParams: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The query parameters present in the redirect URL after a user granted consent e.g auth code',
      }),
    oAuthInputConfiguration: OAuthInputConfigurationSchema.exactOptional(),
    returnSecretCoordinate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If set to true, returns a secret coordinate which references the stored tokens. By default, returns raw tokens.',
      }),
    sourceId: SourceIdSchema.exactOptional(),
    requestedScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional OAuth scopes to request, overriding the connector's default scopes. Only supported for connectors that define scopes as an array.",
      }),
    requestedOptionalScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional OAuth optional_scopes to request, overriding the connector's default optional_scopes. Only applied when requestedScopes is also provided.",
      }),
  })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId'] })
  .openapi('CompleteSourceOauthRequest')

const RevokeSourceOauthTokensRequestSchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    sourceId: SourceIdSchema,
    sourceDefinitionId: SourceDefinitionIdSchema,
  })
  .openapi({ required: ['sourceId', 'sourceDefinitionId', 'workspaceId'] })
  .openapi('RevokeSourceOauthTokensRequest')

const SourceOAuthScopesRequestSchema = z
  .object({ sourceDefinitionId: SourceDefinitionIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId'] })
  .openapi('SourceOAuthScopesRequest')

const OAuthScopeItemSchema = z
  .object({ scope: z.string() })
  .openapi({ required: ['scope'] })
  .openapi('OAuthScopeItem')

const SourceOAuthScopesReadSchema = z
  .object({
    scopes: z.array(OAuthScopeItemSchema),
    optionalScopes: z.array(OAuthScopeItemSchema),
    scopeJoinStrategy: z.enum(['space', 'comma', 'plus']).default('space'),
  })
  .openapi({ required: ['scopes', 'optionalScopes', 'scopeJoinStrategy'] })
  .openapi('SourceOAuthScopesRead')

const CompleteDestinationOAuthRequestSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.',
      }),
    queryParams: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The query parameters present in the redirect URL after a user granted consent e.g auth code',
      }),
    oAuthInputConfiguration: OAuthInputConfigurationSchema.exactOptional(),
    destinationId: DestinationIdSchema.exactOptional(),
  })
  .openapi({ required: ['destinationDefinitionId', 'workspaceId'] })
  .openapi('CompleteDestinationOAuthRequest')

const CompleteOAuthResponseSchema = z
  .object({
    request_succeeded: z.boolean(),
    request_error: z.string().exactOptional(),
    auth_payload: z.looseObject({}),
  })
  .openapi({ required: ['request_succeeded', 'auth_payload'] })
  .openapi('CompleteOAuthResponse')

const SetInstancewideSourceOauthParamsRequestBodySchema = z
  .object({ sourceDefinitionId: SourceDefinitionIdSchema, params: z.looseObject({}) })
  .openapi({ required: ['sourceDefinitionId', 'params'] })
  .openapi('SetInstancewideSourceOauthParamsRequestBody')

const SetInstancewideDestinationOauthParamsRequestBodySchema = z
  .object({ destinationDefinitionId: DestinationDefinitionIdSchema, params: z.looseObject({}) })
  .openapi({ required: ['destinationDefinitionId', 'params'] })
  .openapi('SetInstancewideDestinationOauthParamsRequestBody')

const WorkspaceOverrideOauthParamsRequestBodySchema = z
  .object({
    definitionId: z.uuid(),
    params: z.looseObject({}),
    workspaceId: WorkspaceIdSchema,
    actorType: ActorTypeSchema,
  })
  .openapi({ required: ['definitionId', 'params', 'workspaceId', 'actorType'] })
  .openapi('WorkspaceOverrideOauthParamsRequestBody')

const WebBackendCheckUpdatesReadSchema = z
  .object({ destinationDefinitions: z.int(), sourceDefinitions: z.int() })
  .openapi({
    description: 'Summary of source and destination definitions that could be updated',
    required: ['destinationDefinitions', 'sourceDefinitions'],
  })
  .openapi('WebBackendCheckUpdatesRead')

const WebBackendValidateMappersRequestBodySchema = z
  .object({
    connectionId: ConnectionIdSchema,
    streamDescriptor: StreamDescriptorSchema,
    mappers: z
      .array(ConfiguredStreamMapperSchema)
      .openapi({
        description:
          'Mappers that should be applied to the stream before writing to the destination.',
      }),
  })
  .openapi({ required: ['connectionId', 'mappers', 'streamDescriptor'] })
  .openapi('WebBackendValidateMappersRequestBody')

const FieldSpecSchema = z
  .object({
    name: z.string(),
    isSelectedPrimaryKey: z.boolean(),
    isSelectedCursor: z.boolean(),
    type: z.enum([
      'STRING',
      'BOOLEAN',
      'DATE',
      'TIMESTAMP_WITHOUT_TIMEZONE',
      'TIMESTAMP_WITH_TIMEZONE',
      'TIME_WITHOUT_TIMEZONE',
      'TIME_WITH_TIMEZONE',
      'INTEGER',
      'NUMBER',
      'ARRAY',
      'OBJECT',
      'MULTI',
      'UNKNOWN',
    ]),
  })
  .openapi({ required: ['name', 'type', 'isSelectedPrimaryKey', 'isSelectedCursor'] })
  .openapi('FieldSpec')

const MapperValidationErrorTypeSchema = z
  .enum(['MISSING_MAPPER', 'INVALID_MAPPER_CONFIG', 'FIELD_NOT_FOUND', 'FIELD_ALREADY_EXISTS'])
  .openapi('MapperValidationErrorType')

const MapperValidationErrorSchema = z
  .object({ type: MapperValidationErrorTypeSchema, message: z.string() })
  .openapi({ required: ['type', 'message'] })
  .openapi('MapperValidationError')

const MapperValidationResultSchema = z
  .object({
    id: z.uuid().exactOptional(),
    outputFields: z.array(FieldSpecSchema),
    inputFields: z.array(FieldSpecSchema),
    validationError: MapperValidationErrorSchema.exactOptional(),
  })
  .openapi({ required: ['outputFields', 'inputFields'] })
  .openapi('MapperValidationResult')

const WebBackendValidateMappersResponseSchema = z
  .object({
    initialFields: z.array(FieldSpecSchema),
    outputFields: z.array(FieldSpecSchema),
    mappers: z.array(MapperValidationResultSchema),
  })
  .openapi({ required: ['initialFields', 'outputFields', 'mappers'] })
  .openapi('WebBackendValidateMappersResponse')

const WebBackendConnectionListSortKeySchema = z
  .enum([
    'connectionName_asc',
    'connectionName_desc',
    'sourceName_asc',
    'sourceName_desc',
    'destinationName_asc',
    'destinationName_desc',
    'lastSync_asc',
    'lastSync_desc',
  ])
  .openapi({ description: 'Available sort keys for connection list pagination' })
  .openapi('WebBackendConnectionListSortKey')

const WebBackendConnectionListFiltersSchema = z
  .object({
    sourceDefinitionIds: z
      .array(SourceDefinitionIdSchema)
      .exactOptional()
      .openapi({ description: 'Filter connections by source connector definition types' }),
    destinationDefinitionIds: z
      .array(DestinationDefinitionIdSchema)
      .exactOptional()
      .openapi({ description: 'Filter connections by destination connector definition types' }),
    statuses: z
      .array(z.enum(['healthy', 'failed', 'running', 'paused']))
      .exactOptional()
      .openapi({ description: 'Filter connections by their current sync status' }),
    states: z
      .array(ActorStatusSchema)
      .exactOptional()
      .openapi({ description: 'Filter connections by their active/inactive state' }),
    tagIds: z
      .array(TagIdSchema)
      .exactOptional()
      .openapi({ description: 'Filter connections by tags' }),
    searchTerm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Search term to filter connections by name, source name, destination name, etc.',
      }),
    onDemandEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Filter connections by whether on-demand capacity fallback is enabled',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebBackendConnectionListFilters')

const WebBackendConnectionListRequestBodySchema = z
  .object({
    workspaceId: WorkspaceIdSchema,
    sourceId: z.array(SourceIdSchema).exactOptional(),
    destinationId: z.array(DestinationIdSchema).exactOptional(),
    cursor: ConnectionIdSchema.exactOptional(),
    sortKey: WebBackendConnectionListSortKeySchema.exactOptional().openapi({
      description: 'Sort key that determines the order of results',
    }),
    filters: WebBackendConnectionListFiltersSchema.exactOptional().openapi({
      description: 'Filters for list of of results',
    }),
    pageSize: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of connections to return in the list' }),
  })
  .openapi({ required: ['workspaceId'] })
  .openapi('WebBackendConnectionListRequestBody')

const WebBackendConnectionListItemSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    name: z.string(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema,
    source: SourceSnippetReadSchema,
    destination: DestinationSnippetReadSchema,
    latestSyncJobCreatedAt: JobCreatedAtSchema.exactOptional(),
    latestSyncJobStatus: JobStatusSchema.exactOptional(),
    isSyncing: z.boolean(),
    schemaChange: SchemaChangeSchema,
    sourceActorDefinitionVersion: ActorDefinitionVersionReadSchema,
    destinationActorDefinitionVersion: ActorDefinitionVersionReadSchema,
    tags: z.array(TagSchema),
    onDemandEnabled: z
      .boolean()
      .openapi({
        description:
          'Whether this connection will use on-demand capacity if committed capacity is exhausted',
      }),
  })
  .openapi({
    description: 'Information about a connection that shows up in the connection list view.',
    required: [
      'connectionId',
      'name',
      'source',
      'destination',
      'status',
      'isSyncing',
      'schemaChange',
      'sourceActorDefinitionVersion',
      'destinationActorDefinitionVersion',
      'tags',
      'onDemandEnabled',
    ],
  })
  .openapi('WebBackendConnectionListItem')

const WebBackendConnectionReadSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    name: z.string(),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    sourceId: SourceIdSchema,
    destinationId: DestinationIdSchema,
    syncCatalog: AirbyteCatalogSchema,
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    status: ConnectionStatusSchema,
    statusReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional reason explaining the current state of the connection' }),
    operationIds: z.array(OperationIdSchema).exactOptional(),
    source: SourceReadSchema,
    destination: DestinationReadSchema,
    operations: z.array(OperationReadSchema).exactOptional(),
    latestSyncJobCreatedAt: JobCreatedAtSchema.exactOptional(),
    latestSyncJobStatus: JobStatusSchema.exactOptional(),
    isSyncing: z.boolean(),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    catalogId: z.uuid().exactOptional(),
    destinationCatalogId: z.uuid().exactOptional(),
    catalogDiff: CatalogDiffSchema.exactOptional(),
    dataplaneGroupId: z.uuid().exactOptional(),
    schemaChange: SchemaChangeSchema,
    notifySchemaChanges: z.boolean(),
    notifySchemaChangesByEmail: z.boolean(),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema,
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    backfillPreference: SchemaChangeBackfillPreferenceSchema.exactOptional(),
    sourceActorDefinitionVersion: ActorDefinitionVersionReadSchema,
    destinationActorDefinitionVersion: ActorDefinitionVersionReadSchema,
    tags: z.array(TagSchema),
    onDemandEnabled: z
      .boolean()
      .openapi({
        description:
          'Whether this connection will use on-demand capacity if committed capacity is exhausted',
      }),
  })
  .openapi({
    required: [
      'connectionId',
      'name',
      'sourceId',
      'destinationId',
      'syncCatalog',
      'status',
      'source',
      'destination',
      'isSyncing',
      'schemaChange',
      'notifySchemaChanges',
      'notifySchemaChangesByEmail',
      'nonBreakingChangesPreference',
      'sourceActorDefinitionVersion',
      'destinationActorDefinitionVersion',
      'tags',
      'onDemandEnabled',
    ],
  })
  .openapi('WebBackendConnectionRead')

const WebBackendDescribeCronExpressionRequestBodySchema = z
  .object({ cronExpression: z.string() })
  .openapi({ required: ['cronExpression'] })
  .openapi('WebBackendDescribeCronExpressionRequestBody')

const WebBackendCronExpressionDescriptionSchema = z
  .object({
    cronExpression: z.string(),
    description: z.string(),
    nextExecutions: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of a scheduled execution',
          }),
      )
      .openapi({ description: 'Array of Unix timestamps for the next execution times' }),
  })
  .openapi({ required: ['cronExpression', 'description', 'nextExecutions'] })
  .openapi('WebBackendCronExpressionDescription')

const WebBackendConnectionReadListSchema = z
  .object({
    connections: z.array(WebBackendConnectionListItemSchema),
    page_size: z.int().exactOptional(),
    num_connections: z.int().exactOptional(),
  })
  .openapi({ required: ['connections'] })
  .openapi('WebBackendConnectionReadList')

const AirbyteArchiveSchema = z
  .file()
  .openapi({
    type: 'string',
    format: 'binary',
    description: 'Tarball Archive (.tar.gz) of Airbyte Configuration and Database',
  })
  .openapi('AirbyteArchive')

const ImportReadSchema = z
  .object({ status: z.enum(['succeeded', 'failed']), reason: z.string().exactOptional() })
  .openapi({ required: ['status'] })
  .openapi('ImportRead')

const ResourceIdSchema = z.uuid().openapi('ResourceId')

const UploadReadSchema = z
  .object({ status: z.enum(['succeeded', 'failed']), resourceId: ResourceIdSchema.exactOptional() })
  .openapi({ required: ['status'] })
  .openapi('UploadRead')

const ImportRequestBodySchema = z
  .object({ resourceId: ResourceIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['resourceId', 'workspaceId'] })
  .openapi('ImportRequestBody')

const WorkflowIdSchema = z.string().openapi('WorkflowId')

const SaveStatsRequestBodySchema = z
  .object({
    jobId: JobIdSchema,
    attemptNumber: AttemptNumberSchema,
    stats: AttemptStatsSchema,
    streamStats: z.array(AttemptStreamStatsSchema).exactOptional(),
    connectionId: ConnectionIdSchema.exactOptional(),
  })
  .openapi({ required: ['jobId', 'attemptNumber', 'stats'] })
  .openapi('SaveStatsRequestBody')

const StreamAttemptMetadataSchema = z
  .object({
    streamName: z.string(),
    streamNamespace: z.string().exactOptional(),
    wasBackfilled: z.boolean(),
    wasResumed: z.boolean(),
  })
  .openapi({ required: ['streamName', 'wasBackfilled', 'wasResumed'] })
  .openapi('StreamAttemptMetadata')

const SaveStreamAttemptMetadataRequestBodySchema = z
  .object({
    jobId: JobIdSchema,
    attemptNumber: AttemptNumberSchema,
    streamMetadata: z.array(StreamAttemptMetadataSchema).exactOptional(),
  })
  .openapi({ required: ['jobId', 'attemptNumber', 'stats'] })
  .openapi('SaveStreamAttemptMetadataRequestBody')

const AttemptSyncConfigSchema = z
  .object({
    sourceConfiguration: SourceConfigurationSchema,
    destinationConfiguration: DestinationConfigurationSchema,
    state: ConnectionStateSchema.exactOptional(),
  })
  .openapi({ required: ['sourceConfiguration', 'destinationConfiguration'] })
  .openapi('AttemptSyncConfig')

const SaveAttemptSyncConfigRequestBodySchema = z
  .object({
    jobId: JobIdSchema,
    attemptNumber: AttemptNumberSchema,
    syncConfig: AttemptSyncConfigSchema,
  })
  .openapi({ required: ['jobId', 'attemptNumber', 'syncConfig'] })
  .openapi('SaveAttemptSyncConfigRequestBody')

const GetAttemptStatsRequestBodySchema = z
  .object({ jobId: JobIdSchema, attemptNumber: AttemptNumberSchema })
  .openapi({ required: ['jobId', 'attemptNumber'] })
  .openapi('GetAttemptStatsRequestBody')

const InternalOperationResultSchema = z
  .object({ succeeded: z.boolean() })
  .openapi({ required: ['succeeded'] })
  .openapi('InternalOperationResult')

const DiscoverCatalogResultSchema = z
  .object({ catalogId: z.uuid() })
  .openapi({ required: ['catalogId'] })
  .openapi('DiscoverCatalogResult')

const StreamStatusIdSchema = z.uuid().openapi('StreamStatusId')

const StreamStatusRunStateSchema = z
  .enum(['PENDING', 'RUNNING', 'COMPLETE', 'INCOMPLETE', 'RATE_LIMITED'])
  .openapi({
    description:
      'Values:\n  * `PENDING` - The stream operation has been selected to run\n  * `RUNNING` - The stream operation is running\n  * `COMPLETE` - The stream operation ran successfully to completion\n  * `INCOMPLETE` - The stream operation has terminated in an incomplete state.\n  See StreamStatusIncompleteRunCause for more details.\n  * `RATE_LIMITED` - The stream is rate limited because the source has run out of API quota.\n',
  })
  .openapi('StreamStatusRunState')

const StreamStatusIncompleteRunCauseSchema = z
  .enum(['FAILED', 'CANCELED'])
  .openapi({
    description:
      'Values:\n  * `FAILED` - A failure has occurred\n  * `CANCELED` - The run has been canceled\n',
  })
  .openapi('StreamStatusIncompleteRunCause')

const StreamStatusJobTypeSchema = z.enum(['SYNC', 'RESET']).openapi('StreamStatusJobType')

const StreamStatusRateLimitedMetadataSchema = z
  .object({
    quotaReset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('StreamStatusRateLimitedMetadata')

const StreamStatusListRequestBodySchema = z
  .object({
    attemptNumber: AttemptNumberSchema.exactOptional(),
    connectionId: ConnectionIdSchema.exactOptional(),
    jobId: JobIdSchema.exactOptional(),
    jobType: StreamStatusJobTypeSchema.exactOptional(),
    pagination: PaginationSchema,
    streamName: z.string().exactOptional(),
    streamNamespace: z.string().exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['pagination', 'workspaceId'] })
  .openapi('StreamStatusListRequestBody')

const StreamStatusCreateRequestBodySchema = z
  .object({
    attemptNumber: AttemptNumberSchema,
    connectionId: ConnectionIdSchema,
    jobId: JobIdSchema,
    incompleteRunCause: StreamStatusIncompleteRunCauseSchema.exactOptional(),
    jobType: StreamStatusJobTypeSchema,
    runState: StreamStatusRunStateSchema,
    streamName: z.string(),
    streamNamespace: z.string().exactOptional(),
    transitionedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    workspaceId: WorkspaceIdSchema,
    metadata: StreamStatusRateLimitedMetadataSchema.exactOptional(),
  })
  .openapi({
    required: [
      'attemptNumber',
      'connectionId',
      'jobId',
      'jobType',
      'runState',
      'streamName',
      'transitionedAt',
      'workspaceId',
    ],
  })
  .openapi('StreamStatusCreateRequestBody')

const StreamStatusUpdateRequestBodySchema = StreamStatusCreateRequestBodySchema.and(
  z.object({ id: StreamStatusIdSchema }).openapi({ required: ['id'] }),
).openapi('StreamStatusUpdateRequestBody')

const AuthConfigurationSchema = z
  .object({
    mode: z.enum(['none', 'simple', 'oidc']),
    clientId: z.string().default('airbyte-webapp').exactOptional(),
    defaultRealm: z.string().default('airbyte').exactOptional(),
    authorizationServerUrl: z.string().exactOptional(),
    audience: z.string().exactOptional(),
    extraScopes: z.string().exactOptional(),
  })
  .openapi({ required: ['mode'] })
  .openapi('AuthConfiguration')

const InstanceConfigurationResponseSchema = z
  .object({
    edition: z.enum(['community', 'pro', 'trial']),
    version: z.string().openapi({ description: 'release version for the corresponding edition' }),
    auth: AuthConfigurationSchema,
    airbyteUrl: z.string(),
    initialSetupComplete: z.boolean(),
    defaultUserId: z.uuid(),
    defaultOrganizationId: z.uuid(),
    defaultOrganizationEmail: z.email(),
    defaultWorkspaceId: z.uuid().exactOptional(),
    trackingStrategy: z.enum(['logging', 'segment']),
  })
  .openapi({
    required: [
      'airbyteUrl',
      'auth',
      'defaultOrganizationId',
      'defaultOrganizationEmail',
      'defaultUserId',
      'edition',
      'initialSetupComplete',
      'trackingStrategy',
      'version',
    ],
  })
  .openapi('InstanceConfigurationResponse')

const InstanceConfigurationSetupRequestBodySchema = z
  .object({
    email: z.string(),
    anonymousDataCollection: z.boolean(),
    initialSetupComplete: z.boolean(),
    displaySetupWizard: z.boolean(),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional name of the user to create. Defaults to 'Default User' if not specified.",
      }),
    organizationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional name of the organization to create. Defaults to 'Default Organization' if not specified.",
      }),
  })
  .openapi({
    required: ['email', 'anonymousDataCollection', 'initialSetupComplete', 'displaySetupWizard'],
  })
  .openapi('InstanceConfigurationSetupRequestBody')

const StreamStatusReadSchema = z
  .object({
    attemptNumber: AttemptNumberSchema,
    connectionId: ConnectionIdSchema,
    id: StreamStatusIdSchema,
    jobId: JobIdSchema,
    incompleteRunCause: StreamStatusIncompleteRunCauseSchema.exactOptional(),
    jobType: StreamStatusJobTypeSchema,
    runState: StreamStatusRunStateSchema,
    streamName: z.string(),
    streamNamespace: z.string().exactOptional(),
    transitionedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    workspaceId: WorkspaceIdSchema,
    metadata: StreamStatusRateLimitedMetadataSchema.exactOptional(),
  })
  .openapi({
    required: [
      'attemptNumber',
      'connectionId',
      'id',
      'jobId',
      'jobType',
      'runState',
      'streamName',
      'transitionedAt',
      'workspaceId',
    ],
  })
  .openapi('StreamStatusRead')

const WebappConfigResponseSchema = z
  .object({
    version: z.string(),
    edition: z.string(),
    datadogApplicationId: z.string().exactOptional(),
    datadogClientToken: z.string().exactOptional(),
    datadogSite: z.string().exactOptional(),
    datadogService: z.string().exactOptional(),
    datadogEnv: z.string().exactOptional(),
    hockeystackApiKey: z.string().exactOptional(),
    keycloakBaseUrl: z.string().exactOptional(),
    launchdarklyKey: z.string().exactOptional(),
    osanoKey: z.string().exactOptional(),
    segmentToken: z.string().exactOptional(),
    sonarApiUrl: z.string().exactOptional(),
    coralAgentsApiUrl: z.string().exactOptional(),
    zendeskKey: z.string().exactOptional(),
    fullstoryGuidesOrgId: z.string().exactOptional(),
  })
  .openapi({ required: ['version', 'edition'] })
  .openapi('WebappConfigResponse')

const StreamStatusReadListSchema = z
  .object({ streamStatuses: z.array(StreamStatusReadSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('StreamStatusReadList')

const NotificationWebhookConfigValidationRequestBodySchema = z
  .object({
    slackConfiguration: SlackNotificationConfigurationSchema,
    notificationTrigger: NotificationTriggerSchema.exactOptional(),
  })
  .openapi({ required: ['NotificationTrigger', 'slackConfiguration'] })
  .openapi('NotificationWebhookConfigValidationRequestBody')

const RetryStateReadSchema = z
  .object({
    id: z.uuid(),
    connectionId: ConnectionIdSchema,
    jobId: JobIdSchema,
    successiveCompleteFailures: z.int(),
    totalCompleteFailures: z.int(),
    successivePartialFailures: z.int(),
    totalPartialFailures: z.int(),
  })
  .openapi({
    required: [
      'id',
      'jobId',
      'connectionId',
      'successiveCompleteFailures',
      'totalCompleteFailures',
      'successivePartialFailures',
      'totalPartialFailures',
    ],
  })
  .openapi('RetryStateRead')

const JobRetryStateRequestBodySchema = z
  .object({
    id: z.uuid().exactOptional(),
    connectionId: ConnectionIdSchema,
    jobId: JobIdSchema,
    successiveCompleteFailures: z.int(),
    totalCompleteFailures: z.int(),
    successivePartialFailures: z.int(),
    totalPartialFailures: z.int(),
  })
  .openapi({
    required: [
      'connectionId',
      'jobId',
      'successiveCompleteFailures',
      'totalCompleteFailures',
      'successivePartialFailures',
      'totalPartialFailures',
    ],
  })
  .openapi('JobRetryStateRequestBody')

const ListWorkspacesInOrganizationRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    pagination: PaginationSchema.exactOptional(),
    nameContains: z.string().exactOptional(),
  })
  .openapi({ required: ['organizationId'] })
  .openapi('ListWorkspacesInOrganizationRequestBody')

const ListWorkspacesByUserRequestBodySchema = z
  .object({
    userId: z.uuid(),
    pagination: PaginationSchema.exactOptional(),
    nameContains: z.string().exactOptional(),
  })
  .openapi({ required: ['userId'] })
  .openapi('ListWorkspacesByUserRequestBody')

const WorkspaceUserReadSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Caption name for the user' }),
    userId: UserIdSchema,
    isDefaultWorkspace: z.boolean().exactOptional(),
    email: z.email(),
    permissionId: z.uuid(),
    permissionType: PermissionTypeSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['userId', 'email', 'permissionId', 'permissionType', 'workspaceId'] })
  .openapi('WorkspaceUserRead')

const WorkspaceUserReadListSchema = z
  .object({ users: z.array(WorkspaceUserReadSchema) })
  .openapi({ required: ['users'] })
  .openapi('WorkspaceUserReadList')

const UserWithPermissionInfoReadSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Caption name for the user' }),
    userId: UserIdSchema.exactOptional(),
    email: z.email().exactOptional(),
    permissionId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserWithPermissionInfoRead')

const UserWithPermissionInfoReadListSchema = z
  .object({ users: z.array(UserWithPermissionInfoReadSchema) })
  .openapi({ required: ['users'] })
  .openapi('UserWithPermissionInfoReadList')

const WorkspaceUserAccessInfoReadSchema = z
  .object({
    userId: UserIdSchema,
    userEmail: z.email(),
    userName: z.string(),
    workspaceId: WorkspaceIdSchema,
    workspacePermission: PermissionReadSchema.exactOptional(),
    organizationPermission: PermissionReadSchema.exactOptional(),
  })
  .openapi({
    description:
      "Information summarizing a user's access to a workspace. Includes the workspace-level and/or organization-level permission\nobject that grants the user access to the workspace in question, as well as basic user information to facilitate access\nmanagement of users in the workspace.\n",
    required: ['userId', 'userEmail', 'userName', 'workspaceId'],
  })
  .openapi('WorkspaceUserAccessInfoRead')

const WorkspaceUserAccessInfoReadListSchema = z
  .object({ usersWithAccess: z.array(WorkspaceUserAccessInfoReadSchema) })
  .openapi({ required: ['usersWithAccess'] })
  .openapi('WorkspaceUserAccessInfoReadList')

const InvalidInputPropertySchema = z
  .object({
    propertyPath: z.string(),
    invalidValue: z.string().exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: ['propertyPath'] })
  .openapi('InvalidInputProperty')

const DeploymentMetadataReadSchema = z
  .object({ id: z.uuid(), mode: z.string(), version: z.string() })
  .openapi({ required: ['id', 'mode', 'version'] })
  .openapi('DeploymentMetadataRead')

const TagListRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId'] })
  .openapi('TagListRequestBody')

const TagUpdateRequestBodySchema = z
  .object({
    tagId: TagIdSchema,
    workspaceId: WorkspaceIdSchema,
    name: z.string(),
    color: z.string(),
  })
  .openapi({ required: ['tagId', 'workspaceId', 'name', 'color'] })
  .openapi('TagUpdateRequestBody')

const TagDeleteRequestBodySchema = z
  .object({ tagId: TagIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['tagId', 'workspaceId'] })
  .openapi('TagDeleteRequestBody')

const TagCreateRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema, name: z.string(), color: z.string() })
  .openapi({ required: ['workspaceId', 'name', 'color'] })
  .openapi('TagCreateRequestBody')

const NotFoundKnownExceptionInfoSchema = z
  .object({
    id: z.string().exactOptional(),
    message: z.string().exactOptional(),
    exceptionClassName: z.string().exactOptional(),
    exceptionStack: z.array(z.string()).exactOptional(),
    rootCauseExceptionClassName: z.string().exactOptional(),
    rootCauseExceptionStack: z.array(z.string()).exactOptional(),
    errorId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotFoundKnownExceptionInfo')

const KnownExceptionInfoSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absent when the underlying exception has no message.' }),
    exceptionClassName: z.string().exactOptional(),
    exceptionStack: z.array(z.string()).exactOptional(),
    rootCauseExceptionClassName: z.string().exactOptional(),
    rootCauseExceptionStack: z.array(z.string()).exactOptional(),
    details: z.object({}).exactOptional(),
    errorId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KnownExceptionInfo')

const InvalidInputExceptionInfoSchema = z
  .object({
    message: z.string(),
    exceptionClassName: z.string().exactOptional(),
    exceptionStack: z.array(z.string()).exactOptional(),
    validationErrors: z.array(InvalidInputPropertySchema),
  })
  .openapi({ required: ['message', 'validationErrors'] })
  .openapi('InvalidInputExceptionInfo')

const ConnectionJobRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema, jobId: JobIdSchema })
  .openapi({ required: ['connectionId', 'jobId'] })
  .openapi('ConnectionJobRequestBody')

const PersistCancelJobRequestBodySchema = z
  .object({
    attemptFailureSummary: z
      .object({})
      .openapi({ description: 'Attempt failure summary serialized as a raw object' }),
    attemptNumber: AttemptNumberSchema,
    connectionId: ConnectionIdSchema,
    jobId: JobIdSchema,
  })
  .openapi({ required: ['attemptFailureSummary', 'attemptNumber', 'connectionId', 'jobId'] })
  .openapi('PersistCancelJobRequestBody')

const BooleanReadSchema = z
  .object({ value: z.boolean() })
  .openapi({ required: ['value'] })
  .openapi('BooleanRead')

const SecretStorageTypeSchema = z
  .enum([
    'local_testing',
    'google_secret_manager',
    'vault',
    'aws_secrets_manager',
    'azure_key_vault',
  ])
  .openapi('SecretStorageType')

const SecretPersistenceConfigurationJsonSchema = z
  .object({})
  .openapi('SecretPersistenceConfigurationJson')

const SecretStorageCreateRequestBodySchema = z
  .object({
    descriptor: z.string(),
    secretStorageType: SecretStorageTypeSchema,
    scopeType: ScopeTypeSchema,
    scopeId: ScopeIdSchema,
    config: SecretPersistenceConfigurationJsonSchema.exactOptional(),
    isConfiguredFromEnvironment: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'Object representing a secret storage create request',
    required: ['descriptor', 'secretStorageType', 'scopeType', 'scopeId'],
  })
  .openapi('SecretStorageCreateRequestBody')

const SecretStorageListRequestBodySchema = z
  .object({ scopeType: ScopeTypeSchema, scopeId: ScopeIdSchema })
  .openapi({
    description: 'Request body for listing secret storage',
    required: ['scopeType', 'scopeId'],
  })
  .openapi('SecretStorageListRequestBody')

const SecretPersistenceTypeSchema = z
  .enum(['testing', 'google', 'vault', 'aws', 'azure'])
  .openapi('SecretPersistenceType')

const CreateOrUpdateSecretsPersistenceConfigRequestBodySchema = z
  .object({
    secretPersistenceType: SecretPersistenceTypeSchema,
    configuration: z.object({}),
    scope: ScopeTypeSchema,
    scopeId: z.uuid(),
  })
  .openapi({
    description: 'Object representing a secret persistence configuration create/update request',
    required: ['secretPersistenceType', 'configuration', 'scope', 'scopeId'],
  })
  .openapi('CreateOrUpdateSecretsPersistenceConfigRequestBody')

const SecretPersistenceConfigSchema = z
  .object({
    secretPersistenceType: SecretPersistenceTypeSchema,
    configuration: SecretPersistenceConfigurationJsonSchema,
    scopeType: ScopeTypeSchema,
    scopeId: z.uuid(),
  })
  .openapi({
    description: 'Object representing a secret persistence configuration',
    required: ['secretPersistenceType', 'configuration', 'scopeType', 'scopeId'],
  })
  .openapi('SecretPersistenceConfig')

const SecretPersistenceConfigGetRequestBodySchema = z
  .object({ scopeType: ScopeTypeSchema, scopeId: ScopeIdSchema })
  .openapi({
    description: 'Request body for getting secret persistence config',
    required: ['scopeType', 'scopeId'],
  })
  .openapi('SecretPersistenceConfigGetRequestBody')

const SecretStorageIdSchema = z.uuid().openapi('SecretStorageId')

const SecretStorageIdRequestBodySchema = z
  .object({ secretStorageId: SecretStorageIdSchema })
  .openapi({
    description: 'Request body containing a secret storage ID',
    required: ['secretStorageId'],
  })
  .openapi('SecretStorageIdRequestBody')

const MigrateSecretStorageRequestBodySchema = z
  .object({
    fromSecretStorageId: SecretStorageIdSchema,
    toSecretStorageId: SecretStorageIdSchema,
    scopeType: ScopeTypeSchema,
    scopeId: z.uuid(),
  })
  .openapi({
    description: 'Request body for migrating secret storage',
    required: ['fromSecretStorageId', 'toSecretStorageId', 'scopeType', 'scopeId'],
  })
  .openapi('MigrateSecretStorageRequestBody')

const SecretStorageReadSchema = z
  .object({
    id: SecretStorageIdSchema,
    secretStorageType: SecretStorageTypeSchema,
    isConfiguredFromEnvironment: z.boolean(),
    scopeType: ScopeTypeSchema,
    scopeId: ScopeIdSchema,
    config: SecretPersistenceConfigurationJsonSchema.exactOptional(),
  })
  .openapi({
    description: 'Object representing a secret storage',
    required: ['id', 'secretStorageType', 'isConfiguredFromEnvironment', 'scopeType', 'scopeId'],
  })
  .openapi('SecretStorageRead')

const SecretStorageReadListSchema = z
  .object({ secretStorages: z.array(SecretStorageReadSchema) })
  .openapi({
    description: 'Object representing a list of secret storages',
    required: ['secretStorages'],
  })
  .openapi('SecretStorageReadList')

const ApplicationCreateSchema = z
  .object({ name: z.string() })
  .openapi({ required: ['name'], 'x-sdk-component': true })
  .openapi('ApplicationCreate')

const ApplicationIdSchema = z.uuid().openapi('ApplicationId')

const ApplicationIdRequestBodySchema = z
  .object({ applicationId: ApplicationIdSchema, includeTombstone: z.boolean().exactOptional() })
  .openapi({ required: ['applicationId'] })
  .openapi('ApplicationIdRequestBody')

const ApplicationReadSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    clientId: z.string(),
    clientSecret: z.string(),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: ['id', 'name', 'clientId', 'clientSecret', 'createdAt'],
    'x-sdk-component': true,
  })
  .openapi('ApplicationRead')

const ApplicationReadListSchema = z
  .object({ applications: z.array(ApplicationReadSchema) })
  .openapi({ required: ['applications'], 'x-sdk-component': true })
  .openapi('ApplicationReadList')

const ApplicationTokenRequestSchema = z
  .object({ client_id: z.string(), client_secret: z.string() })
  .openapi({ required: ['client_id', 'client_secret'] })
  .openapi('ApplicationTokenRequest')

const ApplicationTokenRequestWithGrantSchema = z
  .object({
    client_id: z.string(),
    client_secret: z.string(),
    'grant-type': z.literal('client_credentials').exactOptional(),
  })
  .openapi({ required: ['client_id', 'client_secret', 'grant_type'], 'x-sdk-component': true })
  .openapi('ApplicationTokenRequestWithGrant')

const AccessTokenSchema = z
  .object({ access_token: z.string() })
  .openapi({ required: ['access_token'] })
  .openapi('AccessToken')

const PublicAccessTokenResponseSchema = z
  .object({
    access_token: z.string(),
    token_type: z.literal('Bearer'),
    expires_in: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['access_token', 'token_type', 'expires_in'], 'x-sdk-component': true })
  .openapi('PublicAccessTokenResponse')

const UserInvitationCreateRequestBodySchema = z
  .object({
    invitedEmail: z.email(),
    permissionType: PermissionTypeSchema,
    scopeType: ScopeTypeSchema,
    scopeId: z.uuid(),
  })
  .openapi({ required: ['invitedEmail', 'permissionType', 'scopeType', 'scopeId'] })
  .openapi('UserInvitationCreateRequestBody')

const UserInvitationCreateResponseSchema = z
  .object({
    directlyAdded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the request resulted in the user being directly added, without a created invitation.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UserInvitationCreateResponse')

const UserInvitationStatusSchema = z
  .enum(['pending', 'accepted', 'cancelled', 'declined'])
  .openapi('UserInvitationStatus')

const UserInvitationAdminReadSchema = z
  .object({
    id: z.uuid(),
    inviterUserId: z.uuid(),
    invitedEmail: z.email(),
    scopeId: z.uuid(),
    scopeType: ScopeTypeSchema,
    permissionType: PermissionTypeSchema,
    status: UserInvitationStatusSchema,
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'id',
      'inviterUserId',
      'invitedEmail',
      'scopeId',
      'scopeType',
      'permissionType',
      'status',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('UserInvitationAdminRead')

const UserInvitationListRequestBodySchema = z
  .object({ scopeType: ScopeTypeSchema, scopeId: z.uuid() })
  .openapi({ required: ['scopeType', 'scopeId'] })
  .openapi('UserInvitationListRequestBody')

const UserInvitationReadSchema = z
  .object({
    id: z.uuid(),
    inviteCode: z.string(),
    inviterUserId: z.uuid(),
    invitedEmail: z.email(),
    scopeId: z.uuid(),
    scopeType: ScopeTypeSchema,
    permissionType: PermissionTypeSchema,
    status: UserInvitationStatusSchema,
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'id',
      'inviteCode',
      'inviterUserId',
      'invitedEmail',
      'scopeId',
      'scopeType',
      'permissionType',
      'status',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('UserInvitationRead')

const InviteCodeRequestBodySchema = z
  .object({ inviteCode: z.string() })
  .openapi({ required: ['inviteCode'] })
  .openapi('InviteCodeRequestBody')

const UserInvitationCancelRequestBodySchema = z
  .object({ id: z.uuid().exactOptional(), inviteCode: z.string().exactOptional() })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: [] })
  .openapi('UserInvitationCancelRequestBody')

const RedirectUrlResponseSchema = z
  .object({ redirectUrl: z.url().exactOptional() })
  .openapi({
    title: 'Root Type for RedirectUrlResponse',
    description: '',
    example: { redirectUrl: 'https://example.com' },
    'x-sdk-component': true,
    required: [],
  })
  .openapi('RedirectUrlResponse')

const JobStatusEnumSchema = z
  .enum(['pending', 'queued', 'running', 'incomplete', 'failed', 'succeeded', 'cancelled'])
  .openapi({ 'x-sdk-component': true })
  .openapi('JobStatusEnum')

const JobTypeEnumSchema = z
  .enum(['sync', 'reset', 'refresh', 'clear'])
  .openapi({
    description:
      'Enum that describes the different types of jobs that the platform runs. When not specified, all job types are returned.',
    'x-sdk-component': true,
  })
  .openapi('JobTypeEnum')

const JobResponseSchema = z
  .object({
    jobId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    status: JobStatusEnumSchema,
    jobType: JobTypeEnumSchema,
    startTime: z.string(),
    connectionId: z.string(),
    lastUpdatedAt: z.string().exactOptional(),
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration of a sync in ISO_8601 format' }),
    bytesSynced: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    rowsSynced: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    title: 'Root Type for JobResponse',
    description: 'Provides details of a single job.',
    required: ['jobId', 'status', 'jobType', 'startTime', 'connectionId'],
    example: {
      id: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
      status: 'running',
      jobType: 'sync',
      startTime: '2023-03-25T01:30:50Z',
      duration: 'PT8H6M12S',
    },
    'x-sdk-component': true,
  })
  .openapi('JobResponse')

const JobsResponseSchema = z
  .object({
    previous: z.string().exactOptional(),
    next: z.string().exactOptional(),
    data: z.array(JobResponseSchema),
  })
  .openapi({
    title: 'Root Type for JobsResponse',
    description: '',
    required: ['data'],
    example: {
      next: 'https://api.airbyte.com/v1/jobs?limit=5&offset=10',
      previous: 'https://api.airbyte.com/v1/jobs?limit=5&offset=0',
      data: [
        {
          id: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
          status: 'running',
          jobType: 'sync',
          startTime: '2023-03-25T01:30:50Z',
        },
      ],
    },
    'x-sdk-component': true,
  })
  .openapi('JobsResponse')

const ConnectionSyncModeEnumSchema = z
  .enum([
    'full_refresh_overwrite',
    'full_refresh_overwrite_deduped',
    'full_refresh_append',
    'full_refresh_update',
    'full_refresh_soft_delete',
    'incremental_append',
    'incremental_deduped_history',
    'incremental_update',
    'incremental_soft_delete',
  ])
  .openapi({ 'x-sdk-component': true })
  .openapi('ConnectionSyncModeEnum')

const StreamConfigurationSchema = z
  .object({
    name: z.string(),
    namespace: z.string().exactOptional().openapi({ description: 'Namespace of the stream.' }),
    syncMode: ConnectionSyncModeEnumSchema.exactOptional(),
    cursorField: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental` unless there is a default.',
      }),
    primaryKey: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup` unless it is already supplied by the source schema.',
      }),
    includeFiles: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to move raw files from the source to the destination during the sync.',
      }),
    destinationObjectName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the destination object that this stream will be written to, used for data activation destinations.',
      }),
    selectedFields: SelectedFieldsSchema.exactOptional().openapi({
      description:
        'By default (if not provided in the request) all fields will be synced. Otherwise, only the fields in this list will be synced.',
    }),
    mappers: z
      .array(ConfiguredStreamMapperSchema)
      .exactOptional()
      .openapi({
        description:
          'Mappers that should be applied to the stream before writing to the destination.',
      }),
  })
  .openapi({
    description: 'Configurations for a single stream.',
    required: ['name'],
    'x-sdk-component': true,
  })
  .openapi('StreamConfiguration')

const StreamConfigurationsSchema = z
  .object({ streams: z.array(StreamConfigurationSchema).exactOptional() })
  .openapi({
    description: 'A list of configured stream options for a connection.',
    'x-sdk-component': true,
    required: [],
  })
  .openapi('StreamConfigurations')

const ScheduleTypeEnumSchema = z
  .enum(['manual', 'cron'])
  .openapi({ 'x-sdk-component': true })
  .openapi('ScheduleTypeEnum')

const AirbyteApiConnectionScheduleSchema = z
  .object({
    scheduleType: ScheduleTypeEnumSchema,
    cronExpression: z.string().exactOptional(),
    cronTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Supported timezone ID or fixed offset for the cron schedule; defaults to UTC and cannot start with Etc.',
      }),
  })
  .openapi({
    description: 'schedule for when the the connection should run, per the schedule type',
    required: ['scheduleType'],
    'x-sdk-component': true,
  })
  .openapi('AirbyteApiConnectionSchedule')

const NamespaceDefinitionEnumSchema = z
  .enum(['source', 'destination', 'custom_format'])
  .default('destination')
  .openapi({
    description: 'Define the location where the data will be stored in the destination',
    'x-sdk-component': true,
  })
  .openapi('NamespaceDefinitionEnum')

const NonBreakingSchemaUpdatesBehaviorEnumSchema = z
  .enum(['ignore', 'disable_connection', 'propagate_columns', 'propagate_fully'])
  .default('ignore')
  .openapi({
    description:
      'Set how Airbyte handles syncs when it detects a non-breaking schema change in the source',
    'x-sdk-component': true,
  })
  .openapi('NonBreakingSchemaUpdatesBehaviorEnum')

const ConnectionStatusEnumSchema = z
  .enum(['active', 'inactive', 'deprecated', 'locked'])
  .openapi({ 'x-sdk-component': true })
  .openapi('ConnectionStatusEnum')

const ConnectionCreateRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Optional name of the connection' }),
    sourceId: z.uuid(),
    destinationId: z.uuid(),
    configurations: StreamConfigurationsSchema.exactOptional(),
    schedule: AirbyteApiConnectionScheduleSchema.exactOptional(),
    dataResidency: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        'x-speakeasy-deprecation-message':
          'We no longer support modifying dataResidency on Community and Enterprise connections. All connections will use the dataResidency of their associated workspace.',
      }),
    namespaceDefinition: NamespaceDefinitionEnumSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_” causes “projects” => “airbyte_projects”).',
      }),
    nonBreakingSchemaUpdatesBehavior: NonBreakingSchemaUpdatesBehaviorEnumSchema.exactOptional(),
    status: ConnectionStatusEnumSchema.exactOptional(),
    tags: z.array(TagSchema).exactOptional(),
  })
  .openapi({
    required: ['sourceId', 'destinationId'],
    'x-sdk-entity': 'Connection',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('ConnectionCreateRequest')

const NamespaceDefinitionEnumNoDefaultSchema = z
  .enum(['source', 'destination', 'custom_format'])
  .openapi({
    description: 'Define the location where the data will be stored in the destination',
    'x-sdk-component': true,
  })
  .openapi('NamespaceDefinitionEnumNoDefault')

const NonBreakingSchemaUpdatesBehaviorEnumNoDefaultSchema = z
  .enum(['ignore', 'disable_connection', 'propagate_columns', 'propagate_fully'])
  .openapi({
    description:
      'Set how Airbyte handles syncs when it detects a non-breaking schema change in the source',
    'x-sdk-component': true,
  })
  .openapi('NonBreakingSchemaUpdatesBehaviorEnumNoDefault')

const ConnectionPatchRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Optional name of the connection' }),
    configurations: StreamConfigurationsSchema.exactOptional(),
    schedule: AirbyteApiConnectionScheduleSchema.exactOptional(),
    dataResidency: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        'x-speakeasy-deprecation-message':
          'We no longer support modifying dataResidency on Community and Enterprise connections. All connections will use the dataResidency of their associated workspace.',
      }),
    namespaceDefinition: NamespaceDefinitionEnumNoDefaultSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_” causes “projects” => “airbyte_projects”).',
      }),
    nonBreakingSchemaUpdatesBehavior:
      NonBreakingSchemaUpdatesBehaviorEnumNoDefaultSchema.exactOptional(),
    status: ConnectionStatusEnumSchema.exactOptional(),
    tags: z.array(TagSchema).exactOptional(),
  })
  .openapi({
    'x-sdk-entity': 'Connection',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('ConnectionPatchRequest')

const JobCreateRequestSchema = z
  .object({ connectionId: z.string(), jobType: JobTypeEnumSchema })
  .openapi({
    title: 'Root Type for JobCreate',
    description: 'Creates a new Job from the configuration provided in the request body.',
    required: ['jobType', 'connectionId'],
    example: { connectionId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826', jobType: 'sync' },
    'x-sdk-component': true,
  })
  .openapi('JobCreateRequest')

const FusionSearchStreamSelectorSchema = z
  .strictObject({
    source_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Required for destination search; must match the route for source search.',
      }),
    namespace: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Stream namespace, preserved as supplied without normalizing null or empty values.',
      }),
    stream_name: z.string().min(1).max(1024),
    fields: z
      .array(z.string().min(1).max(1024))
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Projects entity_data only. Null returns all fields; empty returns an empty object. Context may include other indexed fields.',
      }),
  })
  .openapi({ required: ['stream_name'] })
  .openapi('FusionSearchStreamSelector')

const FusionSearchRequestSchema = z
  .strictObject({
    type: z.enum(['keyword', 'semantic', 'hybrid']),
    prompt: z.string().regex(/\S/).min(1).max(2048),
    limit: z.int().min(1).max(100).default(10).exactOptional(),
    max_context_chars: z.int().min(0).max(32768).nullable().exactOptional(),
    min_similarity: z.float64().min(-1).max(1).nullable().default(0.25).exactOptional(),
    max_similarity_diff: z.float64().min(0).max(2).nullable().default(0.15).exactOptional(),
    lookback_s: z.int().min(0).max(316224000).nullable().exactOptional(),
    streams: z
      .array(FusionSearchStreamSelectorSchema)
      .max(64)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Null or omission searches all eligible streams; empty searches none.',
      }),
    destination_id: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['type', 'prompt'] })
  .openapi('FusionSearchRequest')

const FusionSearchHitSchema = z
  .object({
    source_id: z.uuid(),
    stream_name: z.string(),
    entity_id: z.string(),
    entity_data: z.looseObject({}),
    score: z.float64(),
    context: z.string().nullable(),
  })
  .openapi({
    required: ['source_id', 'stream_name', 'entity_id', 'entity_data', 'score', 'context'],
  })
  .openapi('FusionSearchHit')

const FusionSearchSegmentVersionSchema = z
  .object({
    segment_id: z.uuid(),
    serving_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Published version of this active segment, or null before publication.',
      }),
  })
  .openapi({ required: ['segment_id', 'serving_version'] })
  .openapi('FusionSearchSegmentVersion')

const FusionSearchIndexMetadataSchema = z
  .object({
    index_id: z.uuid().exactOptional(),
    segment_versions: z.array(FusionSearchSegmentVersionSchema).exactOptional(),
    source_id: z.uuid(),
    destination_id: z.uuid(),
    namespace: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Stream namespace, preserved as supplied without normalizing null or empty values.',
      }),
    stream_name: z.string(),
    index_name: z.string(),
    error: z.string().nullable(),
    search_time_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'source_id',
      'destination_id',
      'stream_name',
      'index_name',
      'error',
      'search_time_ms',
    ],
  })
  .openapi('FusionSearchIndexMetadata')

const FusionSearchResponseSchema = z
  .object({
    hits: z.array(FusionSearchHitSchema),
    metadata: z.array(FusionSearchIndexMetadataSchema),
    response_time_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['hits', 'metadata', 'response_time_ms'] })
  .openapi('FusionSearchResponse')

const FusionSearchStatusBackfillSchema = z
  .object({
    backfill_start_time: z.iso.datetime({ offset: true }).nullable(),
    expected_total_records: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    collected_records: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    indexed_records: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    started_at: z.iso.datetime({ offset: true }).nullable(),
    completed_at: z.iso.datetime({ offset: true }).nullable(),
    failed_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    cancelled_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    status: z.enum(['starting', 'running', 'finalizing', 'complete', 'failed', 'cancelled']),
    error_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Why a failed run failed: a destination cause such as `nothing_to_backfill`, otherwise `system_error`; null unless failed.',
      }),
    error: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The failure's code with a fixed explanation. Warehouse error text is never included; null unless failed.",
      }),
  })
  .openapi({
    required: [
      'backfill_start_time',
      'expected_total_records',
      'collected_records',
      'indexed_records',
      'started_at',
      'completed_at',
      'status',
    ],
  })
  .openapi('FusionSearchStatusBackfill')

const FusionSearchStatusGapsSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Minibatches of synced input whose records have not reached the searchable index version.',
      }),
    stuck: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Gaps the backend no longer retries on its own; they need an operator replay or a backfill.',
      }),
    oldest_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description: "When the oldest gap's input first arrived for indexing; null without gaps.",
      }),
  })
  .openapi({ required: ['count', 'stuck', 'oldest_at'] })
  .openapi('FusionSearchStatusGaps')

const FusionSearchStatusPublicationHoldSchema = z
  .object({
    since: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'When search started serving an older version while a newer one waits for optimization.',
      }),
    reason: z
      .string()
      .nullable()
      .openapi({
        description: 'Why the newer version waits, e.g. `fts_unindexed` or `vector_unindexed`.',
      }),
  })
  .openapi({ required: ['since', 'reason'] })
  .openapi('FusionSearchStatusPublicationHold')

const FusionSearchStatusIndexSchema = z
  .object({
    index_id: z.uuid().exactOptional(),
    segment_versions: z.array(FusionSearchSegmentVersionSchema).exactOptional(),
    type: z.enum(['keyword', 'semantic']),
    name: z.string().nullable(),
    indexed_records: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    physical_rows: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    optimized_physical_rows: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    updated_at: z.iso.datetime({ offset: true }).nullable(),
    status: z.enum(['backfilling', 'updating', 'optimizing', 'truncating', 'idle']),
    storage_size_mb: z.float64(),
    stats_error: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Set when the counts are approximate: `stored_totals_missing` when the index has no complete stored totals (counts are zeros), or, with live stats, the executor's error for the index (counts fall back to the stored totals, or zeros).",
      }),
    gaps: FusionSearchStatusGapsSchema.exactOptional(),
    publication_held: FusionSearchStatusPublicationHoldSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Set while newly synced records are indexed but not yet searchable, until optimization finishes or a time cap passes. With several segments, the earliest of their holds.',
      }),
    held_records: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Records written to a held (not yet searchable) version beyond the published one, summed over segments; 0 when nothing is held. A segment whose held or published count is not measured yet adds 0.',
      }),
    segments: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "The index's active hash segments; each is a dataset the totals above add up.",
      }),
  })
  .openapi({
    required: [
      'type',
      'name',
      'indexed_records',
      'physical_rows',
      'optimized_physical_rows',
      'updated_at',
      'status',
      'storage_size_mb',
    ],
  })
  .openapi('FusionSearchStatusIndex')

const FusionSearchStatusStreamSchema = z
  .object({
    namespace: z.string().nullable().exactOptional(),
    name: z.string(),
    needs_backfill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The destination warehouse already held this stream's table when indexing was enabled on its connection, and that history is not indexed yet: set until a backfill run of the stream completes. Turning indexing on does not start one; `backfill` tells a requested or running backfill from none. A flagged stream is listed even before it has an index.",
      }),
    backfill: FusionSearchStatusBackfillSchema.nullable().openapi({
      description: 'Null when backfill is disabled.',
    }),
    indexes: z.array(FusionSearchStatusIndexSchema),
    gaps: FusionSearchStatusGapsSchema.exactOptional().openapi({
      description: 'The gaps of every index of the stream.',
    }),
  })
  .openapi({ required: ['name', 'backfill', 'indexes'] })
  .openapi('FusionSearchStatusStream')

const FusionSearchStatusSourceSchema = z
  .object({
    source_id: z.uuid(),
    destination_id: z.uuid(),
    connection_id: z.uuid(),
    needs_backfill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "At least one of the connection's streams needs a backfill (see each stream's needs_backfill): history found when indexing was enabled on the connection that no completed backfill run has indexed yet.",
      }),
    streams: z.array(FusionSearchStatusStreamSchema),
    gaps: FusionSearchStatusGapsSchema.exactOptional().openapi({
      description: "The gaps of every index of the connection's streams.",
    }),
  })
  .openapi({ required: ['source_id', 'destination_id', 'connection_id', 'streams'] })
  .openapi('FusionSearchStatusSource')

const FusionSearchStatusDestinationSchema = z
  .object({
    destination_id: z.uuid(),
    needs_backfill: z
      .boolean()
      .openapi({
        description:
          'Existing destination tables were found when indexing was enabled; request a backfill to index that history. Turning indexing on does not start one. Set while any indexing-enabled connection to the destination has a stream that needs a backfill.',
      }),
  })
  .openapi({ required: ['destination_id', 'needs_backfill'] })
  .openapi('FusionSearchStatusDestination')

const FusionSearchStatusResponseSchema = z
  .object({
    sources: z.array(FusionSearchStatusSourceSchema),
    destinations: z
      .array(FusionSearchStatusDestinationSchema)
      .exactOptional()
      .openapi({
        description:
          "The destinations of the listed connections and of the status's actor's enabled connections.",
      }),
  })
  .openapi({ required: ['sources'] })
  .openapi('FusionSearchStatusResponse')

const FusionConnectionBackfillRequestSchema = z
  .strictObject({
    streams: z
      .array(z.string().min(1))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "Distinct stream names to backfill, one run each. Omitted means every stream the connection's catalog selects.",
      }),
    start_time: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Backfill only rows whose cursor field (a top-level timestamp or date) is at or after this time; streams without such a cursor are backfilled in full. Omitted or null, the whole history. Regular syncs index all data regardless.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FusionConnectionBackfillRequest')

const FusionConnectionBackfillRunSchema = z
  .object({
    id: z.uuid(),
    stream_name: z.string(),
    connection_id: z.uuid().nullable().exactOptional(),
    source_id: z.uuid(),
    destination_id: z.uuid().nullable().exactOptional(),
    workspace_id: z.uuid(),
    requested_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    started_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    completed_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    failed_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    cancel_requested_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    cancelled_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    expected_total_rows: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    error: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      'Allowlisted fields from Agents\' backfill coordinator record. job_id, async_job_id, and the previous_run_* coordinator internals are never exposed, and error is reduced to its code (the text before ": ", or null), so free-form worker error text never reaches the caller.',
    required: ['id', 'stream_name', 'source_id', 'workspace_id'],
  })
  .openapi('FusionConnectionBackfillRun')

const FusionConnectionBackfillStreamOutcomeSchema = z
  .object({
    stream_name: z.string(),
    outcome: z.enum(['requested', 'running', 'failed']),
    run_id: z.uuid().nullable().exactOptional(),
    backfill: FusionConnectionBackfillRunSchema,
  })
  .openapi({ required: ['stream_name', 'outcome', 'backfill'] })
  .openapi('FusionConnectionBackfillStreamOutcome')

const FusionConnectionBackfillResponseSchema = z
  .object({
    streams: z
      .array(FusionConnectionBackfillStreamOutcomeSchema)
      .openapi({ description: 'Per-stream outcome.' }),
  })
  .openapi({ required: ['streams'] })
  .openapi('FusionConnectionBackfillResponse')

const SourceExecuteParamsSchema = z
  .object({})
  .openapi({
    description:
      'Connector-specific JSON parameters, preserving nested nulls. Defaults to an empty object when omitted.',
  })
  .openapi('SourceExecuteParams')

const SourceExecuteRequestSchema = z
  .strictObject({
    entity: z.string().min(1),
    action: z
      .string()
      .min(1)
      .openapi({
        description:
          'Direct read action, such as get, list or api_search, when supported by the connector.',
      }),
    params: SourceExecuteParamsSchema.exactOptional(),
    select_fields: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Dot-path field allowlist. Takes precedence over exclude_fields.' }),
    exclude_fields: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Dot-path fields to omit when select_fields is not provided.' }),
    skip_truncation: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Disable truncation of long text fields in list and api_search responses.',
      }),
    intent: z
      .string()
      .max(512)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Caller-provided purpose recorded with execution auditing.' }),
  })
  .openapi({ required: ['entity', 'action'] })
  .openapi('SourceExecuteRequest')

const SourceExecuteDataSchema = z
  .any()
  .nullable()
  .openapi({
    description:
      'Opaque JSON result, including objects, arrays, scalars or null. Nested values and null-valued properties are preserved.',
  })
  .openapi('SourceExecuteData')

const SourceExecuteMetaSchema = z
  .object({})
  .openapi({
    description:
      'Opaque connector metadata, including pagination cursors when supplied by the connector. Nested values and null-valued properties are preserved.',
  })
  .openapi('SourceExecuteMeta')

const SourceExecuteResponseSchema = z
  .object({ data: SourceExecuteDataSchema, meta: SourceExecuteMetaSchema.exactOptional() })
  .openapi({ required: ['data'] })
  .openapi('SourceExecuteResponse')

const DestinationExecuteParamsSchema = z
  .object({})
  .openapi({
    description:
      'Connector-specific JSON parameters, preserving nested nulls. Defaults to an empty object when omitted.',
  })
  .openapi('DestinationExecuteParams')

const DestinationExecuteRequestSchema = z
  .strictObject({
    entity: z.string().min(1),
    action: z
      .string()
      .min(1)
      .openapi({ description: 'Read-only destination action, such as sql_select.' }),
    params: DestinationExecuteParamsSchema.exactOptional(),
    select_fields: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Dot-path field allowlist. Takes precedence over exclude_fields.' }),
    exclude_fields: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Dot-path fields to omit when select_fields is not provided.' }),
    skip_truncation: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Disable truncation of long text fields in query results.' }),
    intent: z
      .string()
      .max(512)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Caller-provided purpose recorded with execution auditing.' }),
  })
  .openapi({ required: ['entity', 'action'] })
  .openapi('DestinationExecuteRequest')

const DestinationExecuteDataSchema = z
  .any()
  .nullable()
  .openapi({
    description:
      'Opaque JSON result, including objects, arrays, scalars or null. Nested values and null-valued properties are preserved.',
  })
  .openapi('DestinationExecuteData')

const DestinationExecuteMetaSchema = z
  .object({})
  .openapi({
    description:
      'Opaque connector metadata, including pagination cursors when supplied by the connector. Nested values and null-valued properties are preserved.',
  })
  .openapi('DestinationExecuteMeta')

const DestinationExecuteResponseSchema = z
  .object({
    data: DestinationExecuteDataSchema,
    meta: DestinationExecuteMetaSchema.exactOptional(),
  })
  .openapi({ required: ['data'] })
  .openapi('DestinationExecuteResponse')

const SkillDocsResponseSchema = z.looseObject({}).openapi('SkillDocsResponse')

const SourceExecuteProblemSchema = z
  .object({
    status: z.int(),
    type: z.string(),
    title: z.string(),
    detail: z.string(),
    documentationUrl: z.string().nullable().exactOptional(),
    data: z.any().nullable().exactOptional(),
  })
  .openapi({ required: ['status', 'type', 'title', 'detail'] })
  .openapi('SourceExecuteProblem')

const SourceCreateRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the source e.g. dev-mysql-instance.' }),
    definitionId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided.',
      }),
    workspaceId: z.uuid(),
    configuration: SourceConfigurationSchema,
    secretId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional secretID obtained through the  OAuth redirect flow.' }),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'workspaceId', 'configuration'],
    'x-implements': 'io.airbyte.api.common.ConfigurableActor',
    'x-sdk-entity': 'Source',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('SourceCreateRequest')

const SourcePutRequestSchema = z
  .object({
    name: z.string(),
    configuration: SourceConfigurationSchema,
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'configuration'],
    'x-implements': 'io.airbyte.api.common.ConfigurableActor',
    'x-sdk-entity': 'Source',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('SourcePutRequest')

const SourcePatchRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'My source' }),
    workspaceId: z.uuid().exactOptional(),
    configuration: SourceConfigurationSchema.exactOptional(),
    secretId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional secretID obtained through the  OAuth redirect flow.' }),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    'x-implements': 'io.airbyte.api.common.ConfigurableActor',
    'x-sdk-entity': 'Source',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('SourcePatchRequest')

const TagCreateRequestSchema = z
  .object({ name: z.string(), color: z.string(), workspaceId: WorkspaceIdSchema })
  .openapi({
    required: ['name', 'color', 'workspaceId'],
    'x-sdk-entity': 'Tag',
    'x-sdk-component': true,
  })
  .openapi('TagCreateRequest')

const TagPatchRequestSchema = z
  .object({ name: z.string(), color: z.string() })
  .openapi({ required: ['name', 'color'], 'x-sdk-entity': 'Tag', 'x-sdk-component': true })
  .openapi('TagPatchRequest')

const InitiateOauthRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the source to authenticate to. Deprecated - use sourceType instead.',
      }),
    sourceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the source to authenticate to' }),
    redirectUrl: z
      .string()
      .openapi({
        description:
          'Redirect target after OAuth callback. In `api` mode, callback includes `secret_id`, `state`, `workspace_id`, and `definition_id`. In `webapp` mode, callback forwards all provider callback query params.',
      }),
    clientType: z
      .enum(['api', 'webapp'])
      .exactOptional()
      .openapi({
        description:
          'OAuth callback mode. `api` is default when omitted. `webapp` forwards provider callback query params and does not create a secret during callback.',
      }),
    workspaceId: z
      .uuid()
      .openapi({
        description: 'The workspace to create the secret and eventually the full source.',
      }),
    oAuthInputConfiguration: OAuthInputConfigurationSchema.exactOptional().openapi({
      description: 'Input configuration for OAuth required by some sources.',
    }),
    requestedScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional OAuth scopes to request, overriding the connector's default scopes. Only supported for connectors that define scopes as an array.",
      }),
    requestedOptionalScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional OAuth optional_scopes to request, overriding the connector's default optional_scopes. Only applied when requestedScopes is also provided.",
      }),
  })
  .openapi({
    title: 'Root Type for initiate-oauth-post-body',
    required: ['redirectUrl', 'workspaceId'],
    example: {
      redirectUrl: 'https://cloud.airbyte.io/v1/api/oauth/callback',
      workspaceId: '871d9b60-11d1-44cb-8c92-c246d53bf87e',
      destinationId: '3d93b16c-ff5f-421c-8908-5a3c82088f14',
    },
    'x-sdk-component': true,
  })
  .openapi('InitiateOauthRequest')

const ActorTypeEnumSchema = z
  .enum(['source', 'destination'])
  .openapi({
    description: "Whether you're setting this override for a source or destination",
    'x-sdk-component': true,
  })
  .openapi('ActorTypeEnum')

const OAuthCredentialsConfigurationSchema = z
  .object({})
  .openapi({
    description:
      'The configuration for this source/destination based on the OAuth section of the relevant specification.',
    example: {
      credentials: { client_id: '871d9b60-11d1-44cb-8c92-c246d53bf87e', client_secret: 'shhhhhh' },
    },
    'x-sdk-component': true,
  })
  .openapi('OAuthCredentialsConfiguration')

const WorkspaceOAuthCredentialsRequestSchema = z
  .object({
    actorType: ActorTypeEnumSchema,
    name: z.string().openapi({ description: 'The name of the source i.e. google-ads' }),
    configuration: OAuthCredentialsConfigurationSchema,
  })
  .openapi({
    title: 'Root Type for WorkspaceOAuthCredentials',
    description: 'POST body for creating/updating workspace level OAuth credentials',
    required: ['actorType', 'name', 'configuration'],
    'x-sdk-component': true,
  })
  .openapi('WorkspaceOAuthCredentialsRequest')

const OrganizationOAuthCredentialsRequestSchema = z
  .object({
    actorType: ActorTypeEnumSchema,
    name: z.string().openapi({ description: 'The name of the source i.e. google-ads' }),
    configuration: OAuthCredentialsConfigurationSchema,
  })
  .openapi({
    title: 'Root Type for OrganizationOAuthCredentials',
    description: 'POST body for creating/updating organization level OAuth credentials',
    required: ['actorType', 'name', 'configuration'],
    'x-sdk-component': true,
  })
  .openapi('OrganizationOAuthCredentialsRequest')

const ScheduleTypeWithBasicEnumSchema = z
  .enum(['manual', 'cron', 'basic'])
  .openapi({ 'x-sdk-component': true })
  .openapi('ScheduleTypeWithBasicEnum')

const ConnectionScheduleResponseSchema = z
  .object({
    scheduleType: ScheduleTypeWithBasicEnumSchema,
    cronExpression: z.string().exactOptional(),
    basicTiming: z.string().exactOptional(),
  })
  .openapi({
    description: 'schedule for when the the connection should run, per the schedule type',
    required: ['scheduleType'],
    'x-sdk-component': true,
  })
  .openapi('ConnectionScheduleResponse')

const ConnectionResponseSchema = z
  .object({
    connectionId: z.string(),
    name: z.string(),
    sourceId: z.string(),
    destinationId: z.string(),
    workspaceId: z.string(),
    status: ConnectionStatusEnumSchema,
    schedule: ConnectionScheduleResponseSchema,
    nonBreakingSchemaUpdatesBehavior: NonBreakingSchemaUpdatesBehaviorEnumSchema.exactOptional(),
    namespaceDefinition: NamespaceDefinitionEnumSchema.exactOptional(),
    namespaceFormat: z.string().exactOptional(),
    prefix: z.string().exactOptional(),
    configurations: StreamConfigurationsSchema,
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    tags: z.array(TagSchema),
    statusReason: z.string().exactOptional(),
  })
  .openapi({
    title: 'Root Type for ConnectionResponse',
    description: 'Provides details of a single connection.',
    required: [
      'connectionId',
      'name',
      'sourceId',
      'destinationId',
      'workspaceId',
      'status',
      'schedule',
      'configurations',
      'createdAt',
      'tags',
    ],
    'x-sdk-entity': 'Connection',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('ConnectionResponse')

const DestinationResponseSchema = z
  .object({
    destinationId: z.string(),
    name: z.string(),
    destinationType: z.string(),
    definitionId: z.string(),
    workspaceId: z.string(),
    configuration: DestinationConfigurationSchema,
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    title: 'Root Type for DestinationResponse',
    description: 'Provides details of a single destination.',
    required: [
      'destinationId',
      'name',
      'destinationType',
      'definitionId',
      'workspaceId',
      'configuration',
      'createdAt',
    ],
    example: {
      destinationId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
      name: 'Analytics Team Postgres',
      destinationType: 'postgres',
      workspaceId: '871d9b60-11d1-44cb-8c92-c246d53bf87e',
      definitionId: '321d9b60-11d1-44cb-8c92-c246d53bf98e',
    },
    'x-sdk-component': true,
  })
  .openapi('DestinationResponse')

const SourceResponseSchema = z
  .object({
    sourceId: z.string(),
    name: z.string(),
    sourceType: z.string(),
    definitionId: z.string(),
    workspaceId: z.string(),
    configuration: SourceConfigurationSchema,
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    title: 'Root Type for SourceResponse',
    description: 'Provides details of a single source.',
    required: [
      'sourceId',
      'name',
      'sourceType',
      'workspaceId',
      'configuration',
      'definitionId',
      'createdAt',
    ],
    example: {
      sourceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
      name: 'Analytics Team Postgres',
      sourceType: 'postgres',
      workspaceId: '871d9b60-11d1-44cb-8c92-c246d53bf87e',
      definitionId: '321d9b60-11d1-44cb-8c92-c246d53bf98e',
    },
    'x-sdk-component': true,
  })
  .openapi('SourceResponse')

const ConnectorTypeSchema = z
  .enum(['source', 'destination'])
  .openapi({ 'x-sdk-component': true })
  .openapi('ConnectorType')

const ConnectorDefinitionResponseSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    connectorDefinitionType: ConnectorTypeSchema,
    version: z.string(),
  })
  .openapi({
    title: 'Root Type for ConnectorDefinitionResponse',
    description: 'Provides details of a single connector definition.',
    required: ['id', 'connectorDefinitionType', 'name', 'version'],
    example: {
      id: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
      name: 'Postgres',
      connectorDefinnitionType: 'source',
      version: '0.2.0',
    },
    'x-sdk-component': true,
  })
  .openapi('ConnectorDefinitionResponse')

const TagResponseSchema = z
  .object({
    tagId: TagIdSchema,
    name: z.string(),
    color: z.string().openapi({ description: 'A hexadecimal color value' }),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({
    title: 'Root Type for TagResponse',
    description: 'Provides details of a single tag.',
    required: ['tagId', 'name', 'color', 'workspaceId'],
    example: {
      tagId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
      name: 'Analytics Team',
      color: 'FF5733',
      workspaceId: '871d9b60-11d1-44cb-8c92-c246d53bf87e',
    },
    'x-sdk-component': true,
  })
  .openapi('TagResponse')

const DestinationCreateRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the destination e.g. dev-mysql-instance.' }),
    definitionId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided.',
      }),
    workspaceId: z.uuid(),
    configuration: DestinationConfigurationSchema,
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'workspaceId', 'configuration'],
    'x-implements': 'io.airbyte.api.common.ConfigurableActor',
    'x-sdk-entity': 'Destination',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('DestinationCreateRequest')

const DestinationPatchRequestSchema = z
  .object({
    name: z.string().exactOptional(),
    configuration: DestinationConfigurationSchema.exactOptional(),
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    'x-implements': 'io.airbyte.api.common.ConfigurableActor',
    'x-sdk-entity': 'Destination',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('DestinationPatchRequest')

const DestinationPutRequestSchema = z
  .object({
    name: z.string(),
    configuration: DestinationConfigurationSchema,
    resourceAllocation: ScopedResourceRequirementsSchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'configuration'],
    'x-implements': 'io.airbyte.api.common.ConfigurableActor',
    'x-sdk-entity': 'Destination',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('DestinationPutRequest')

const WorkspaceCreateRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the workspace' }),
    organizationId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'ID of organization to add workspace to.' }),
    notifications: NotificationsConfigSchema.exactOptional(),
    regionId: z.uuid().exactOptional(),
  })
  .openapi({
    required: ['name'],
    'x-sdk-entity': 'Workspace',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('WorkspaceCreateRequest')

const WorkspaceUpdateRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the workspace' }),
    notifications: NotificationsConfigSchema.exactOptional(),
    regionId: z.uuid().exactOptional(),
  })
  .openapi({
    'x-sdk-entity': 'Workspace',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('WorkspaceUpdateRequest')

const WorkspaceResponseSchema = z
  .object({
    workspaceId: z.string(),
    name: z.string(),
    dataResidency: z.string(),
    notifications: NotificationsConfigSchema,
  })
  .openapi({
    title: 'Root Type for WorkspaceResponse',
    description: 'Provides details of a single workspace.',
    required: ['workspaceId', 'name', 'dataResidency', 'notifications'],
    'x-sdk-entity': 'Workspace',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('WorkspaceResponse')

const UserResponseSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the user' }),
    id: UserIdSchema,
    email: z.email(),
  })
  .openapi({
    title: 'Root Type for UserResponse',
    description: 'Provides details of a single user in an organization.',
    required: ['id', 'name', 'email'],
    'x-sdk-entity': 'User',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('UserResponse')

const UsersResponseSchema = z
  .object({ data: z.array(UserResponseSchema) })
  .openapi({
    title: 'Root Type for UsersResponse',
    description: 'List/Array of multiple users in an organization',
    required: ['data'],
    'x-sdk-component': true,
    'x-sdk-entity': 'User',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('UsersResponse')

const PermissionCreateRequestSchema = z
  .object({
    permissionType: PublicPermissionTypeSchema,
    userId: UserIdSchema,
    workspaceId: WorkspaceIdSchema.exactOptional(),
    organizationId: OrganizationIdSchema.exactOptional(),
  })
  .openapi({
    required: ['permissionType', 'userId'],
    'x-sdk-entity': 'Permission',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('PermissionCreateRequest')

const PermissionUpdateRequestSchema = z
  .object({ permissionType: PermissionTypeSchema })
  .openapi({
    required: ['permissionType'],
    'x-sdk-entity': 'Permission',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('PermissionUpdateRequest')

const PermissionResponseSchema = z
  .object({
    permissionId: z.uuid(),
    permissionType: PermissionTypeSchema,
    userId: UserIdSchema,
    workspaceId: WorkspaceIdSchema.exactOptional(),
    organizationId: OrganizationIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Root Type for PermissionResponse',
    description: 'Provides details of a single permission.',
    required: ['permissionId', 'permissionType', 'userId'],
    'x-sdk-entity': 'Permission',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('PermissionResponse')

const PermissionScopeSchema = z
  .enum(['workspace', 'organization', 'none'])
  .openapi({
    description: 'Scope of a single permission, e.g. workspace, organization',
    'x-sdk-component': true,
  })
  .openapi('PermissionScope')

const PermissionResponseReadSchema = z
  .object({
    permissionId: z.uuid(),
    permissionType: PermissionTypeSchema,
    userId: UserIdSchema,
    scopeId: z.uuid(),
    scope: PermissionScopeSchema,
  })
  .openapi({
    title: 'Root type for PermissionResponseRead',
    description: 'Reformat PermissionResponse with permission scope',
    required: ['permissionId', 'permissionType', 'userId', 'scope', 'scopeId'],
    'x-sdk-entity': 'Permission',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('PermissionResponseRead')

const PermissionsResponseSchema = z
  .object({ data: z.array(PermissionResponseReadSchema) })
  .openapi({
    title: 'Root Type for PermissionsResponse',
    description: 'List/Array of multiple permissions',
    required: ['data'],
    'x-sdk-component': true,
  })
  .openapi('PermissionsResponse')

const GroupReadSchema = z
  .object({
    groupId: z.uuid(),
    name: z.string(),
    description: z.string().nullable().exactOptional(),
    organizationId: z.uuid(),
    memberCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['groupId', 'name', 'organizationId', 'memberCount'] })
  .openapi('GroupRead')

const GroupReadListSchema = z
  .object({ groups: z.array(GroupReadSchema) })
  .openapi({ required: ['groups'] })
  .openapi('GroupReadList')

const GroupCreateSchema = z
  .object({
    organizationId: z.uuid(),
    name: z.string().min(1).max(256),
    description: z.string().max(1024).exactOptional(),
  })
  .openapi({ required: ['organizationId', 'name'] })
  .openapi('GroupCreate')

const GroupUpdateSchema = z
  .object({
    groupId: z.uuid(),
    name: z.string().min(1).max(256),
    description: z.string().max(1024).nullable().exactOptional(),
  })
  .openapi({ required: ['groupId', 'name'] })
  .openapi('GroupUpdate')

const GroupIdRequestBodySchema = z
  .object({ groupId: z.uuid() })
  .openapi({ required: ['groupId'] })
  .openapi('GroupIdRequestBody')

const GroupMemberReadSchema = z
  .object({
    memberId: z.uuid(),
    groupId: z.uuid(),
    userId: z.uuid(),
    userEmail: z.email(),
    userName: z.string(),
  })
  .openapi({ required: ['memberId', 'groupId', 'userId', 'userEmail', 'userName'] })
  .openapi('GroupMemberRead')

const GroupMemberReadListSchema = z
  .object({ members: z.array(GroupMemberReadSchema) })
  .openapi({ required: ['members'] })
  .openapi('GroupMemberReadList')

const GroupMemberRequestBodySchema = z
  .object({ groupId: z.uuid(), userId: z.uuid() })
  .openapi({ required: ['groupId', 'userId'] })
  .openapi('GroupMemberRequestBody')

const GroupResponseSchema = z
  .object({
    groupId: z.uuid().openapi({ description: 'The ID of the group' }),
    name: z.string().openapi({ description: 'The name of the group' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional description of the group' }),
    organizationId: z
      .uuid()
      .openapi({ description: 'The ID of the organization the group belongs to' }),
    memberCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of members in the group',
      }),
  })
  .openapi({
    title: 'Root Type for GroupResponse',
    description: 'Provides details of a single group',
    required: ['groupId', 'name', 'organizationId', 'memberCount'],
    'x-sdk-component': true,
    'x-sdk-entity': 'Group',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupResponse')

const GroupsResponseSchema = z
  .object({
    data: z.array(GroupResponseSchema),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Link to the next page of results' }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Link to the previous page of results' }),
  })
  .openapi({
    title: 'Root Type for GroupsResponse',
    description: 'List/Array of multiple groups',
    required: ['data'],
    'x-sdk-component': true,
    'x-sdk-entity': 'Group',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupsResponse')

const GroupCreateRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the group' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional description of the group' }),
    organizationId: z
      .uuid()
      .openapi({ description: 'The ID of the organization the group belongs to' }),
  })
  .openapi({
    title: 'Root Type for GroupCreateRequest',
    description: 'Request body for creating a group',
    required: ['name', 'organizationId'],
    'x-sdk-component': true,
    'x-sdk-entity': 'Group',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupCreateRequest')

const GroupUpdateRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The updated name of the group' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The updated description of the group' }),
  })
  .openapi({
    title: 'Root Type for GroupUpdateRequest',
    description: 'Request body for updating a group',
    'x-sdk-component': true,
    'x-sdk-entity': 'Group',
    'x-sdk-param-suppress-computed-diff': true,
    required: [],
  })
  .openapi('GroupUpdateRequest')

const GroupMemberResponseSchema = z
  .object({
    memberId: z.uuid().openapi({ description: 'The ID of the group membership' }),
    groupId: z.uuid().openapi({ description: 'The ID of the group' }),
    userId: z.uuid().openapi({ description: 'The ID of the user' }),
    userEmail: z.email().openapi({ description: 'The email of the user' }),
    userName: z.string().openapi({ description: 'The name of the user' }),
  })
  .openapi({
    title: 'Root Type for GroupMemberResponse',
    description: 'Provides details of a single group member',
    required: ['memberId', 'groupId', 'userId', 'userEmail', 'userName'],
    'x-sdk-component': true,
    'x-sdk-entity': 'GroupMember',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupMemberResponse')

const GroupMembersResponseSchema = z
  .object({
    data: z.array(GroupMemberResponseSchema),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Link to the next page of results' }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Link to the previous page of results' }),
  })
  .openapi({
    title: 'Root Type for GroupMembersResponse',
    description: 'List/Array of group members',
    required: ['data'],
    'x-sdk-component': true,
    'x-sdk-entity': 'GroupMember',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupMembersResponse')

const GroupMemberAddRequestSchema = z
  .object({ userId: z.uuid().openapi({ description: 'The ID of the user to add to the group' }) })
  .openapi({
    title: 'Root Type for GroupMemberAddRequest',
    description: 'Request body for adding a member to a group',
    required: ['userId'],
    'x-sdk-component': true,
    'x-sdk-entity': 'GroupMember',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupMemberAddRequest')

const GroupPermissionResponseSchema = z
  .object({
    permissionId: z.uuid().openapi({ description: 'The ID of the permission' }),
    groupId: z.uuid().openapi({ description: 'The ID of the group' }),
    permissionType: PermissionTypeSchema,
    workspaceId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The workspace ID for workspace-scoped permissions' }),
    organizationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The organization ID for organization-scoped permissions' }),
  })
  .openapi({
    title: 'Root Type for GroupPermissionResponse',
    description: 'Provides details of a single group permission',
    required: ['permissionId', 'groupId', 'permissionType'],
    'x-sdk-component': true,
    'x-sdk-entity': 'GroupPermission',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupPermissionResponse')

const GroupPermissionsResponseSchema = z
  .object({ data: z.array(GroupPermissionResponseSchema) })
  .openapi({
    title: 'Root Type for GroupPermissionsResponse',
    description: 'List/Array of group permissions',
    required: ['data'],
    'x-sdk-component': true,
    'x-sdk-entity': 'GroupPermission',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupPermissionsResponse')

const GroupPermissionCreateRequestSchema = z
  .object({
    permissionType: PermissionTypeSchema,
    workspaceId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Required for workspace-scoped permissions' }),
    organizationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Required for organization-scoped permissions' }),
  })
  .openapi({
    title: 'Root Type for GroupPermissionCreateRequest',
    description:
      'Request body for creating a group permission. Exactly one of workspaceId or organizationId must be set, and the permissionType must match the chosen scope: workspace-scoped permission types require workspaceId, and organization-scoped permission types require organizationId.',
    required: ['permissionType'],
    'x-sdk-component': true,
    'x-sdk-entity': 'GroupPermission',
    'x-sdk-param-suppress-computed-diff': true,
  })
  .openapi('GroupPermissionCreateRequest')

const GroupPermissionReadSchema = z
  .object({
    permissionId: z.uuid(),
    groupId: z.uuid(),
    permissionType: PermissionTypeSchema,
    workspaceId: z.uuid().nullable().exactOptional(),
    organizationId: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['permissionId', 'groupId', 'permissionType'] })
  .openapi('GroupPermissionRead')

const GroupPermissionReadListSchema = z
  .object({ permissions: z.array(GroupPermissionReadSchema) })
  .openapi({ required: ['permissions'] })
  .openapi('GroupPermissionReadList')

const GroupPermissionCreateSchema = z
  .object({
    groupId: z.uuid(),
    permissionType: PublicPermissionTypeSchema,
    workspaceId: z.uuid().nullable().exactOptional(),
    organizationId: z.uuid().nullable().exactOptional(),
  })
  .openapi({
    description:
      'Exactly one of workspaceId or organizationId must be set, and the permissionType must match the chosen scope: workspace-scoped permission types require workspaceId, and organization-scoped permission types require organizationId.',
    required: ['groupId', 'permissionType'],
  })
  .openapi('GroupPermissionCreate')

const GroupPermissionIdRequestBodySchema = z
  .object({ groupId: z.uuid(), permissionId: z.uuid() })
  .openapi({ required: ['groupId', 'permissionId'] })
  .openapi('GroupPermissionIdRequestBody')

const OrganizationResponseSchema = z
  .object({ organizationId: OrganizationIdSchema, organizationName: z.string(), email: z.email() })
  .openapi({
    title: 'Root Type for OrganizationResponse',
    description: 'Provides details of a single organization for a user.',
    required: ['organizationId', 'organizationName', 'email'],
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('OrganizationResponse')

const OrganizationsResponseSchema = z
  .object({ data: z.array(OrganizationResponseSchema) })
  .openapi({
    title: 'Root Type for OrganizationsResponse',
    description: 'List/Array of multiple organizations.',
    required: ['data'],
    'x-sdk-component': true,
  })
  .openapi('OrganizationsResponse')

const ConnectionsResponseSchema = z
  .object({
    previous: z.string().exactOptional(),
    next: z.string().exactOptional(),
    data: z.array(ConnectionResponseSchema).default([]),
  })
  .openapi({
    title: 'Root Type for ConnectionsResponse',
    description: '',
    required: ['data'],
    example: {
      next: 'https://api.airbyte.com/v1/connections?limit=5&offset=10',
      previous: 'https://api.airbyte.com/v1/connections?limit=5&offset=0',
      data: [
        { name: 'test-connection' },
        { connection_id: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826' },
        { sourceId: '49237019-645d-47d4-b45b-5eddf97775ce' },
        { destinationId: 'al312fs-0ab1-4f72-9ed7-0b8fc27c5826' },
        { schedule: { scheduleType: 'manual' } },
        { status: 'active' },
      ],
    },
    'x-sdk-component': true,
  })
  .openapi('ConnectionsResponse')

const SourcesResponseSchema = z
  .object({
    previous: z.string().exactOptional(),
    next: z.string().exactOptional(),
    data: z.array(SourceResponseSchema),
  })
  .openapi({
    title: 'Root Type for SourcesResponse',
    description: '',
    required: ['data'],
    example: {
      next: 'https://api.airbyte.com/v1/sources?limit=5&offset=10',
      previous: 'https://api.airbyte.com/v1/sources?limit=5&offset=0',
      data: {
        sourceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
        name: 'Analytics Team Postgres',
        sourceType: 'postgres',
        workspaceId: '871d9b60-11d1-44cb-8c92-c246d53bf87e',
      },
    },
    'x-sdk-component': true,
  })
  .openapi('SourcesResponse')

const DestinationsResponseSchema = z
  .object({
    previous: z.string().exactOptional(),
    next: z.string().exactOptional(),
    data: z.array(DestinationResponseSchema),
  })
  .openapi({
    title: 'Root Type for DestinationsResponse',
    description: '',
    required: ['data'],
    example: {
      next: 'https://api.airbyte.com/v1/destinations?limit=5&offset=10',
      previous: 'https://api.airbyte.com/v1/destinations?limit=5&offset=0',
      data: {
        destinationId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
        name: 'Analytics Team Postgres',
        destinationType: 'postgres',
        workspaceId: '871d9b60-11d1-44cb-8c92-c246d53bf87e',
      },
    },
    'x-sdk-component': true,
  })
  .openapi('DestinationsResponse')

const ConnectorDefinitionsResponseSchema = z
  .object({ data: z.array(ConnectorDefinitionResponseSchema) })
  .openapi({
    title: 'Root Type for DefinitionsResponse',
    description: '',
    required: ['data'],
    'x-sdk-component': true,
  })
  .openapi('ConnectorDefinitionsResponse')

const CreateDeclarativeSourceDefinitionRequestSchema = z
  .object({ name: z.string(), manifest: DeclarativeManifestSchema })
  .openapi({ 'x-sdk-component': true, required: ['workspaceId', 'name', 'manifest'] })
  .openapi('CreateDeclarativeSourceDefinitionRequest')

const UpdateDeclarativeSourceDefinitionRequestSchema = z
  .object({ manifest: DeclarativeManifestSchema })
  .openapi({ 'x-sdk-component': true, required: ['manifest'] })
  .openapi('UpdateDeclarativeSourceDefinitionRequest')

const DeclarativeSourceDefinitionResponseSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    manifest: DeclarativeManifestSchema,
    version: ManifestVersionSchema.openapi({ 'x-speakeasy-terraform-ignore': true }),
  })
  .openapi({ 'x-sdk-component': true, required: ['id', 'name', 'manifest', 'version'] })
  .openapi('DeclarativeSourceDefinitionResponse')

const DeclarativeSourceDefinitionsResponseSchema = z
  .object({
    previous: z.string().exactOptional(),
    next: z.string().exactOptional(),
    data: z.array(DeclarativeSourceDefinitionResponseSchema),
  })
  .openapi({
    title: 'Root Type for DeclarativeSourceDefinitionsResponse',
    description: '',
    'x-sdk-component': true,
    required: ['data'],
  })
  .openapi('DeclarativeSourceDefinitionsResponse')

const CreateDefinitionRequestSchema = z
  .object({
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    documentationUrl: z.url().exactOptional(),
  })
  .openapi({ 'x-sdk-component': true, required: ['name', 'dockerRepository', 'dockerImageTag'] })
  .openapi('CreateDefinitionRequest')

const UpdateDefinitionRequestSchema = z
  .object({ name: z.string(), dockerImageTag: z.string() })
  .openapi({ 'x-sdk-component': true, required: ['name', 'dockerImageTag'] })
  .openapi('UpdateDefinitionRequest')

const DefinitionResponseSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    dockerRepository: z.string(),
    dockerImageTag: z.string(),
    documentationUrl: z.string().exactOptional(),
  })
  .openapi({
    title: 'Root Type for DefinitionResponse',
    description: 'Provides details of a single connector definition.',
    'x-sdk-component': true,
    required: ['id', 'name', 'dockerRepository', 'dockerImageTag'],
  })
  .openapi('DefinitionResponse')

const DefinitionsResponseSchema = z
  .object({
    previous: z.string().exactOptional(),
    next: z.string().exactOptional(),
    data: z.array(DefinitionResponseSchema),
  })
  .openapi({
    title: 'Root Type for DefinitionsResponse',
    description: '',
    'x-sdk-component': true,
    required: ['data'],
  })
  .openapi('DefinitionsResponse')

const WorkspacesResponseSchema = z
  .object({
    previous: z.string().exactOptional(),
    next: z.string().exactOptional(),
    data: z.array(WorkspaceResponseSchema),
  })
  .openapi({
    title: 'Root Type for WorkspacesResponse',
    description: '',
    required: ['data'],
    example: {
      next: 'https://api.airbyte.com/v1/workspaces?limit=5&offset=10',
      previous: 'https://api.airbyte.com/v1/workspaces?limit=5&offset=0',
      data: {
        workspaceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
        name: 'Acme Company',
        dataResidency: 'auto',
      },
    },
    'x-sdk-component': true,
  })
  .openapi('WorkspacesResponse')

const TagsResponseSchema = z
  .object({ data: z.array(TagResponseSchema) })
  .openapi({
    title: 'Root Type for TagsResponse',
    description: '',
    required: ['data'],
    'x-sdk-component': true,
  })
  .openapi('TagsResponse')

const StreamPropertiesSchema = z
  .object({
    streamName: z.string().exactOptional(),
    syncModes: z.array(ConnectionSyncModeEnumSchema).exactOptional(),
    streamnamespace: z.string().exactOptional(),
    defaultCursorField: z.array(z.string()).exactOptional(),
    sourceDefinedCursorField: z.boolean().exactOptional(),
    sourceDefinedPrimaryKey: z.array(z.array(z.string())).exactOptional(),
    propertyFields: z.array(z.array(z.string())).exactOptional(),
  })
  .openapi({
    description: 'The stream properties associated with a connection.',
    'x-sdk-component': true,
    required: [],
  })
  .openapi('StreamProperties')

const StreamPropertiesResponseSchema = z
  .array(StreamPropertiesSchema)
  .openapi({ description: 'A list of stream properties.', 'x-sdk-component': true })
  .openapi('StreamPropertiesResponse')

const DiagnosticReportRequestBodySchema = z
  .object({ organizationId: OrganizationIdSchema })
  .openapi({ required: ['organizationId'] })
  .openapi('DiagnosticReportRequestBody')

const SignalInputSchema = z
  .object({ workflowType: z.string(), workflowId: z.string() })
  .openapi({ required: ['workflowType', 'workflowId'] })
  .openapi('SignalInput')

const DataplaneGroupCreateRequestBodySchema = z
  .object({ organization_id: z.uuid(), name: z.string(), enabled: z.boolean() })
  .openapi({ required: ['organization_id', 'name', 'enabled'] })
  .openapi('DataplaneGroupCreateRequestBody')

const DataplaneGroupUpdateRequestBodySchema = z
  .object({
    dataplane_group_id: z.uuid(),
    name: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: ['dataplane_group_id'] })
  .openapi('DataplaneGroupUpdateRequestBody')

const DataplaneGroupDeleteRequestBodySchema = z
  .object({ dataplane_group_id: z.uuid() })
  .openapi({ required: ['dataplane_group_id'] })
  .openapi('DataplaneGroupDeleteRequestBody')

const DataplaneGroupListRequestBodySchema = z
  .object({ organization_id: z.uuid() })
  .openapi({ required: ['organization_id'] })
  .openapi('DataplaneGroupListRequestBody')

const DataplaneReadSchema = z
  .object({
    name: z.string(),
    dataplane_id: z.uuid(),
    dataplane_group_id: z.uuid(),
    enabled: z.boolean(),
    created_at: z.iso.datetime({ offset: true }),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    required: ['name', 'dataplane_id', 'dataplane_group_id', 'enabled', 'created_at', 'updated_at'],
  })
  .openapi('DataplaneRead')

const DataplaneGroupReadSchema = z
  .object({
    name: z.string(),
    dataplane_group_id: z.uuid(),
    organization_id: z.uuid(),
    enabled: z.boolean(),
    created_at: z.iso.datetime({ offset: true }),
    updated_at: z.iso.datetime({ offset: true }),
    dataplanes: z.array(DataplaneReadSchema),
  })
  .openapi({
    required: [
      'name',
      'dataplane_group_id',
      'organization_id',
      'enabled',
      'created_at',
      'updated_at',
      'dataplanes',
    ],
  })
  .openapi('DataplaneGroupRead')

const DataplaneGroupListResponseSchema = z
  .object({ dataplaneGroups: z.array(DataplaneGroupReadSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DataplaneGroupListResponse')

const DataWorkerAllocationListRequestBodySchema = z
  .object({ organization_id: z.uuid() })
  .openapi({ required: ['organization_id'] })
  .openapi('DataWorkerAllocationListRequestBody')

const DataWorkerAllocationGetRequestBodySchema = z
  .object({ organization_id: z.uuid(), dataplane_group_id: z.uuid() })
  .openapi({ required: ['organization_id', 'dataplane_group_id'] })
  .openapi('DataWorkerAllocationGetRequestBody')

const DataWorkerReallocateRequestBodySchema = z
  .object({
    organization_id: z.uuid(),
    from_dataplane_group_id: z.uuid(),
    to_dataplane_group_id: z.uuid(),
    amount: z
      .float64()
      .openapi({
        description:
          "Capacity to move out of the source region and into the destination region. Must be positive. The organization's total capacity is unchanged by this operation.",
      }),
  })
  .openapi({
    required: ['organization_id', 'from_dataplane_group_id', 'to_dataplane_group_id', 'amount'],
  })
  .openapi('DataWorkerReallocateRequestBody')

const DataWorkerAddCapacityRequestBodySchema = z
  .object({
    organization_id: z.uuid(),
    dataplane_group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The region to add capacity to. Optional; when omitted, the capacity goes to the default region.',
      }),
    amount: z
      .float64()
      .openapi({
        description:
          "Capacity to add to the region, raising the organization's total. Must be positive.",
      }),
  })
  .openapi({ required: ['organization_id', 'amount'] })
  .openapi('DataWorkerAddCapacityRequestBody')

const DataWorkerRemoveCapacityRequestBodySchema = z
  .object({
    organization_id: z.uuid(),
    dataplane_group_id: z
      .uuid()
      .openapi({
        description:
          'The region to take capacity from. Required because capacity is held per region, so there is no single place to remove it from.',
      }),
    amount: z
      .float64()
      .openapi({
        description:
          "Capacity to remove from the region, lowering the organization's total. Must be positive, and no greater than what the region currently holds.",
      }),
  })
  .openapi({ required: ['organization_id', 'dataplane_group_id', 'amount'] })
  .openapi('DataWorkerRemoveCapacityRequestBody')

const DataWorkerAllocationReadSchema = z
  .object({
    dataplane_group_id: z.uuid(),
    allocated_capacity: z
      .float64()
      .openapi({
        description:
          'Capacity recorded against this region. Zero when the organization holds no capacity here.',
      }),
  })
  .openapi({ required: ['dataplane_group_id', 'allocated_capacity'] })
  .openapi('DataWorkerAllocationRead')

const DataWorkerAllocationListResponseSchema = z
  .object({
    organization_id: z.uuid(),
    total_allocated_capacity: z
      .float64()
      .openapi({
        description:
          'Sum of allocated_capacity across every region below. This is what the allocation table records, which is not necessarily what the organization is entitled to.',
      }),
    allocations: z.array(DataWorkerAllocationReadSchema),
  })
  .openapi({ required: ['organization_id', 'total_allocated_capacity', 'allocations'] })
  .openapi('DataWorkerAllocationListResponse')

const DataplaneCreateRequestBodySchema = z
  .object({
    dataplane_group_id: z.uuid(),
    name: z.string(),
    enabled: z.boolean(),
    instanceScope: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['dataplane_group_id', 'name', 'enabled'] })
  .openapi('DataplaneCreateRequestBody')

const DataplaneCreateResponseSchema = z
  .object({
    dataplane_id: z.uuid(),
    region_id: z.uuid(),
    client_id: z.string(),
    client_secret: z.string(),
  })
  .openapi({ required: ['dataplane_id', 'region_id', 'client_id', 'client_secret'] })
  .openapi('DataplaneCreateResponse')

const DataplaneUpdateRequestBodySchema = z
  .object({
    dataplane_id: z.uuid(),
    name: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: ['dataplane_id'] })
  .openapi('DataplaneUpdateRequestBody')

const DataplaneDeleteRequestBodySchema = z
  .object({ dataplane_id: z.uuid() })
  .openapi({ required: ['dataplane_id'] })
  .openapi('DataplaneDeleteRequestBody')

const DataplaneListRequestBodySchema = z
  .object({ dataplane_group_id: z.uuid() })
  .openapi({ required: ['dataplane_group_id'] })
  .openapi('DataplaneListRequestBody')

const DataplaneListResponseSchema = z
  .object({ dataplanes: z.array(DataplaneReadSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DataplaneListResponse')

const DataplaneTokenRequestBodySchema = z
  .object({ client_id: z.string(), client_secret: z.string() })
  .openapi({ required: ['client_id', 'client_secret'] })
  .openapi('DataplaneTokenRequestBody')

const DataplaneHeartbeatRequestBodySchema = z
  .object({ client_id: z.string() })
  .openapi({ required: ['client_id'] })
  .openapi('DataplaneHeartbeatRequestBody')

const DataplaneHeartbeatResponseSchema = z
  .object({
    dataplane_name: z.string(),
    dataplane_id: z.uuid(),
    dataplane_enabled: z.boolean(),
    dataplane_group_name: z.string(),
    dataplane_group_id: z.uuid(),
    organization_id: z.uuid().exactOptional(),
  })
  .openapi({
    required: [
      'dataplane_name',
      'dataplane_id',
      'dataplane_enabled',
      'dataplane_group_name',
      'dataplane_group_id',
    ],
  })
  .openapi('DataplaneHeartbeatResponse')

const HeartbeatRecordSchema = z
  .object({
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['timestamp'] })
  .openapi('HeartbeatRecord')

const DataplaneHealthReadSchema = z
  .object({
    dataplane_id: z.uuid(),
    dataplane_name: z.string(),
    dataplane_group_id: z.uuid(),
    organization_id: z.uuid(),
    status: z.enum(['HEALTHY', 'DEGRADED', 'UNHEALTHY', 'UNKNOWN']),
    last_heartbeat_timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recent_heartbeats: z.array(HeartbeatRecordSchema).exactOptional(),
    control_plane_version: z.string().exactOptional(),
    dataplane_version: z.string().exactOptional(),
  })
  .openapi({
    required: ['dataplane_id', 'dataplane_name', 'dataplane_group_id', 'organization_id', 'status'],
  })
  .openapi('DataplaneHealthRead')

const DataplaneHealthListResponseSchema = z
  .object({ dataplanes: z.array(DataplaneHealthReadSchema) })
  .openapi({ required: ['dataplanes'] })
  .openapi('DataplaneHealthListResponse')

const DataplaneInitRequestBodySchema = z
  .object({ client_id: z.string() })
  .openapi({ required: ['client_id'] })
  .openapi('DataplaneInitRequestBody')

const DataplaneInitResponseSchema = z
  .object({
    dataplane_name: z.string(),
    dataplane_id: z.uuid(),
    dataplane_enabled: z.boolean(),
    dataplane_group_name: z.string(),
    dataplane_group_id: z.uuid(),
    organization_id: z.uuid().exactOptional(),
  })
  .openapi({
    required: [
      'dataplane_name',
      'dataplane_id',
      'dataplane_enabled',
      'dataplane_group_name',
      'dataplane_group_id',
    ],
  })
  .openapi('DataplaneInitResponse')

const RegionCreateRequestSchema = z
  .object({ name: z.string(), organizationId: z.uuid(), enabled: z.boolean().exactOptional() })
  .openapi({
    required: ['name', 'organizationId'],
    'x-sdk-entity': 'Region',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('RegionCreateRequest')

const RegionPatchRequestSchema = z
  .object({ name: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({
    'x-sdk-entity': 'Region',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('RegionPatchRequest')

const RegionResponseSchema = z
  .object({
    regionId: z.uuid(),
    name: z.string(),
    organizationId: z.uuid(),
    enabled: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .openapi({
    required: ['regionId', 'name', 'organizationId', 'enabled', 'createdAt', 'updatedAt'],
    'x-sdk-entity': 'Region',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('RegionResponse')

const RegionsResponseSchema = z
  .object({ data: z.array(RegionResponseSchema) })
  .openapi({ required: ['data'], 'x-sdk-component': true })
  .openapi('RegionsResponse')

const DataplaneCreateRequestSchema = z
  .object({ regionId: z.uuid(), name: z.string(), enabled: z.boolean().exactOptional() })
  .openapi({
    required: ['regionId', 'name'],
    'x-sdk-entity': 'Dataplane',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('DataplaneCreateRequest')

const DataplaneCreateResponseBodySchema = z
  .object({
    dataplaneId: z.uuid(),
    regionId: z.uuid(),
    clientId: z.string(),
    clientSecret: z.string(),
  })
  .openapi({ required: ['regionId', 'dataplaneId', 'clientId', 'clientSecret'] })
  .openapi('DataplaneCreateResponseBody')

const DataplanePatchRequestSchema = z
  .object({ name: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({
    'x-sdk-entity': 'Dataplane',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
    required: [],
  })
  .openapi('DataplanePatchRequest')

const DataplaneResponseSchema = z
  .object({
    dataplaneId: z.uuid(),
    name: z.string(),
    regionId: z.uuid(),
    enabled: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .openapi({
    required: ['dataplaneId', 'name', 'regionId', 'enabled', 'createdAt', 'updatedAt'],
    'x-sdk-entity': 'Dataplane',
    'x-sdk-param-suppress-computed-diff': true,
    'x-sdk-component': true,
  })
  .openapi('DataplaneResponse')

const DataplanesResponseSchema = z
  .object({ data: z.array(DataplaneResponseSchema) })
  .openapi({ required: ['data'], 'x-sdk-component': true })
  .openapi('DataplanesResponse')

const EmbeddedWidgetRequestSchema = z
  .object({ allowedOrigin: z.string(), externalUserId: z.string(), organizationId: z.uuid() })
  .openapi({
    required: ['allowedOrigin', 'externalUserId', 'organizationId'],
    'x-sdk-component': true,
  })
  .openapi('EmbeddedWidgetRequest')

const EmbeddedWidgetResponseSchema = z
  .object({ token: z.string() })
  .openapi({ required: ['token'], 'x-sdk-component': true })
  .openapi('EmbeddedWidgetResponse')

const EmbeddedScopedTokenRequestSchema = z
  .object({ workspaceId: z.uuid() })
  .openapi({ required: ['workspaceId'], 'x-sdk-component': true })
  .openapi('EmbeddedScopedTokenRequest')

const EmbeddedScopedTokenResponseSchema = z
  .object({ token: z.string() })
  .openapi({ required: ['token'], 'x-sdk-component': true })
  .openapi('EmbeddedScopedTokenResponse')

const ServiceAccountTokenRequestBodySchema = z
  .object({ service_account_id: z.uuid(), secret: z.string() })
  .openapi({ required: ['service_account_id', 'secret'] })
  .openapi('ServiceAccountTokenRequestBody')

const EmbeddedOrganizationListItemSchema = z
  .object({
    organizationId: z.uuid(),
    organizationName: z.string(),
    permission: PermissionTypeSchema,
  })
  .openapi({
    required: ['organizationId', 'organizationName', 'permission'],
    'x-sdk-component': true,
  })
  .openapi('EmbeddedOrganizationListItem')

const EmbeddedOrganizationsListSchema = z
  .object({ organizations: z.array(EmbeddedOrganizationListItemSchema) })
  .openapi({ required: ['organizations'], 'x-sdk-component': true })
  .openapi('EmbeddedOrganizationsList')

const GetSSOConfigRequestBodySchema = z
  .object({ organizationId: z.uuid() })
  .openapi({ required: ['organizationId'] })
  .openapi('GetSSOConfigRequestBody')

const SSOConfigStatusSchema = z
  .enum(['draft', 'active'])
  .openapi({ 'x-sdk-component': true })
  .openapi('SSOConfigStatus')

const SSOConfigReadSchema = z
  .object({
    organizationId: z.uuid().exactOptional(),
    companyIdentifier: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    clientSecret: z.string().exactOptional(),
    emailDomains: z.array(z.string()).exactOptional(),
    status: SSOConfigStatusSchema.exactOptional(),
    defaultRole: SSOConfigDefaultRoleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SSOConfigRead')

const CreateSSOConfigRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    companyIdentifier: z.string().openapi({ description: 'Used to name the keycloak realm' }),
    clientId: z.string(),
    clientSecret: z.string(),
    discoveryUrl: z.url(),
    emailDomain: z.string().exactOptional(),
    status: SSOConfigStatusSchema,
    defaultRole: SSOConfigDefaultRoleSchema.exactOptional(),
  })
  .openapi({
    required: [
      'organizationId',
      'companyIdentifier',
      'clientId',
      'clientSecret',
      'discoveryUrl',
      'status',
    ],
  })
  .openapi('CreateSSOConfigRequestBody')

const DeleteSSOConfigRequestBodySchema = z
  .object({
    organizationId: z.uuid(),
    companyIdentifier: z
      .string()
      .openapi({ description: 'Matches the keycloak realm to be removed' }),
  })
  .openapi({ required: ['organizationId', 'companyIdentifier'] })
  .openapi('DeleteSSOConfigRequestBody')

const UpdateSSOCredentialsRequestBodySchema = z
  .object({ organizationId: z.uuid(), clientId: z.string(), clientSecret: z.string() })
  .openapi({ required: ['organizationId', 'clientId', 'clientSecret'] })
  .openapi('UpdateSSOCredentialsRequestBody')

const ValidateSSOTokenRequestBodySchema = z
  .object({ organizationId: z.uuid(), accessToken: z.string() })
  .openapi({ required: ['organizationId', 'accessToken'] })
  .openapi('ValidateSSOTokenRequestBody')

const ActivateSSOConfigRequestBodySchema = z
  .object({ organizationId: z.uuid(), emailDomain: z.string().exactOptional() })
  .openapi({ required: ['organizationId'] })
  .openapi('ActivateSSOConfigRequestBody')

const ScimIdpProviderSchema = z.enum(['okta', 'microsoft_entra_id']).openapi('ScimIdpProvider')

const ScimConfigStatusSchema = z
  .enum(['not_configured', 'enabled', 'disabled'])
  .openapi('ScimConfigStatus')

const EnableScimRequestBodySchema = z
  .object({ organizationId: z.uuid(), idpProvider: ScimIdpProviderSchema })
  .openapi({ required: ['organizationId', 'idpProvider'] })
  .openapi('EnableScimRequestBody')

const ScimConfigResponseSchema = z
  .object({
    status: ScimConfigStatusSchema,
    idpProvider: ScimIdpProviderSchema.exactOptional(),
    scimBaseUrl: z
      .string()
      .openapi({
        description: 'Absolute Airbyte SCIM endpoint configured in the identity provider.',
      }),
    available: z
      .boolean()
      .openapi({
        description:
          'Whether SCIM is available to this organization (entitlements and rollout gating).',
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One-time bearer token returned only after initial enable or rotation.',
      }),
  })
  .openapi({ required: ['status', 'scimBaseUrl', 'available'] })
  .openapi('ScimConfigResponse')

const CloudExecutionProblemResponseResponse = {
  description: 'Cloud request failed. Error details are sanitized.',
  content: { 'application/json': { schema: SourceExecuteProblemSchema } },
}

const NotFoundResponseResponse = {
  description: 'Object with given id was not found.',
  content: { 'application/json': { schema: NotFoundKnownExceptionInfoSchema } },
}

const InvalidInputResponseResponse = {
  description: 'Input failed validation',
  content: { 'application/json': { schema: InvalidInputExceptionInfoSchema } },
}

const ForbiddenResponseResponse = {
  description: 'Operation forbidden',
  content: { 'application/json': { schema: KnownExceptionInfoSchema } },
}

const ExceptionResponseResponse = {
  description: 'Exception occurred; see message for details.',
  content: { 'application/json': { schema: KnownExceptionInfoSchema } },
}

const InitiateOauthResponseResponse = {
  description:
    "Response from the initiate OAuth call should be an object with a single property which will be the `redirect_url`. If a user is redirected to this URL, they'll be prompted by the identity provider to authenticate.",
  content: {},
}

const AirbyteVersionHeaderParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Airbyte-Version',
      in: 'header',
      required: false,
      description: 'Airbyte application version',
      schema: { type: 'string' },
    },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const postV1SourcesSourceIdSearchRoute = createRoute({
  method: 'post',
  path: '/v1/sources/{sourceId}/search',
  tags: ['fusion_search'],
  summary: 'Search indexed source records (Cloud only)',
  operationId: 'searchFusionSource',
  request: {
    params: z.object({
      sourceId: z
        .uuid()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Search hits and per-index outcomes, including partial failures',
      content: { 'application/json': { schema: FusionSearchResponseSchema } },
    },
    401: { description: 'Authentication required' },
    403: { description: 'Workspace reader permission required' },
    404: { description: 'Actor not found' },
    409: { description: 'Search is unavailable in the current resource state' },
    413: { description: 'Request too large' },
    422: { description: 'Invalid search request' },
    502: { description: 'Invalid upstream response' },
    503: { description: 'Upstream unavailable' },
    504: { description: 'Upstream timed out' },
  },
})

export const postV1DestinationsDestinationIdSearchRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/{destinationId}/search',
  tags: ['fusion_search'],
  summary: 'Search indexed destination records (Cloud only)',
  operationId: 'searchFusionDestination',
  request: {
    params: z.object({
      destinationId: z
        .uuid()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Search hits and per-index outcomes, including partial failures',
      content: { 'application/json': { schema: FusionSearchResponseSchema } },
    },
    401: { description: 'Authentication required' },
    403: { description: 'Workspace reader permission required' },
    404: { description: 'Actor not found' },
    409: { description: 'Search is unavailable in the current resource state' },
    413: { description: 'Request too large' },
    422: { description: 'Invalid search request' },
    502: { description: 'Invalid upstream response' },
    503: { description: 'Upstream unavailable' },
    504: { description: 'Upstream timed out' },
  },
})

export const getV1SourcesSourceIdSearchStatusRoute = createRoute({
  method: 'get',
  path: '/v1/sources/{sourceId}/search-status',
  tags: ['fusion_search'],
  summary: 'Get source search indexing status (Cloud only)',
  operationId: 'getFusionSourceSearchStatus',
  request: {
    params: z.object({
      sourceId: z
        .uuid()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Backfill and index status for each indexed stream',
      content: { 'application/json': { schema: FusionSearchStatusResponseSchema } },
    },
    401: { description: 'Authentication required' },
    403: { description: 'Workspace reader permission required' },
    404: { description: 'Actor not found' },
    409: { description: 'Search status is unavailable in the current resource state' },
    502: { description: 'Invalid upstream response' },
    503: { description: 'Upstream unavailable' },
    504: { description: 'Upstream timed out' },
  },
})

export const getV1DestinationsDestinationIdSearchStatusRoute = createRoute({
  method: 'get',
  path: '/v1/destinations/{destinationId}/search-status',
  tags: ['fusion_search'],
  summary: 'Get destination search indexing status (Cloud only)',
  operationId: 'getFusionDestinationSearchStatus',
  request: {
    params: z.object({
      destinationId: z
        .uuid()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Backfill and index status for each indexed stream',
      content: { 'application/json': { schema: FusionSearchStatusResponseSchema } },
    },
    401: { description: 'Authentication required' },
    403: { description: 'Workspace reader permission required' },
    404: { description: 'Actor not found' },
    409: { description: 'Search status is unavailable in the current resource state' },
    502: { description: 'Invalid upstream response' },
    503: { description: 'Upstream unavailable' },
    504: { description: 'Upstream timed out' },
  },
})

export const getV1SourcesSourceIdEnablementRoute = createRoute({
  method: 'get',
  path: '/v1/sources/{sourceId}/enablement',
  tags: ['fusion_source_enablement'],
  summary: 'Get source enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing requires enable_agent_access. Sources cannot configure enable_backfill or backfill start timestamp. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'getFusionSourceEnablement',
  request: {
    params: z.object({
      sourceId: z
        .uuid()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionSourceEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const putV1SourcesSourceIdEnablementRoute = createRoute({
  method: 'put',
  path: '/v1/sources/{sourceId}/enablement',
  tags: ['fusion_source_enablement'],
  summary: 'Update source enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing requires enable_agent_access. Sources cannot configure enable_backfill or backfill start timestamp. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'updateFusionSourceEnablement',
  request: {
    params: z.object({
      sourceId: z
        .uuid()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionSourceEnablementUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionSourceEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const postV1SourcesSourceIdEnablementRoute = createRoute({
  method: 'post',
  path: '/v1/sources/{sourceId}/enablement',
  tags: ['fusion_source_enablement'],
  summary: 'Create source enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing requires enable_agent_access. Sources cannot configure enable_backfill or backfill start timestamp. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'createFusionSourceEnablement',
  request: {
    params: z.object({
      sourceId: z
        .uuid()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionSourceEnablementCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionSourceEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const deleteV1SourcesSourceIdEnablementRoute = createRoute({
  method: 'delete',
  path: '/v1/sources/{sourceId}/enablement',
  tags: ['fusion_source_enablement'],
  summary: 'Delete source enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing requires enable_agent_access. Sources cannot configure enable_backfill or backfill start timestamp. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'deleteFusionSourceEnablement',
  request: {
    params: z.object({
      sourceId: z
        .uuid()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionSourceEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const getV1DestinationsDestinationIdEnablementRoute = createRoute({
  method: 'get',
  path: '/v1/destinations/{destinationId}/enablement',
  tags: ['fusion_destination_enablement'],
  summary: 'Get destination enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing and enable_backfill independently require enable_agent_access. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'getFusionDestinationEnablement',
  request: {
    params: z.object({
      destinationId: z
        .uuid()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionDestinationEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const putV1DestinationsDestinationIdEnablementRoute = createRoute({
  method: 'put',
  path: '/v1/destinations/{destinationId}/enablement',
  tags: ['fusion_destination_enablement'],
  summary: 'Update destination enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing and enable_backfill independently require enable_agent_access. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'updateFusionDestinationEnablement',
  request: {
    params: z.object({
      destinationId: z
        .uuid()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionDestinationEnablementUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionDestinationEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const postV1DestinationsDestinationIdEnablementRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/{destinationId}/enablement',
  tags: ['fusion_destination_enablement'],
  summary: 'Create destination enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing and enable_backfill independently require enable_agent_access. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'createFusionDestinationEnablement',
  request: {
    params: z.object({
      destinationId: z
        .uuid()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionDestinationEnablementCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionDestinationEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const deleteV1DestinationsDestinationIdEnablementRoute = createRoute({
  method: 'delete',
  path: '/v1/destinations/{destinationId}/enablement',
  tags: ['fusion_destination_enablement'],
  summary: 'Delete destination enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags with null backfill start timestamp or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags and nullable backfill start timestamp, returning 409 on stale state. Omitted or null backfill start timestamp clears the configured value. DELETE clears all flags and backfill start timestamp without deleting the actor. Search indexing and enable_backfill independently require enable_agent_access. Enabling flags or changing backfill start timestamp while enable_backfill is enabled requires an Airbyte-managed region; disabling flags remains possible after region moves.',
  operationId: 'deleteFusionDestinationEnablement',
  request: {
    params: z.object({
      destinationId: z
        .uuid()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Canonical actor enablements',
      content: { 'application/json': { schema: FusionDestinationEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Actor permission required' },
    404: { description: 'Active actor of the requested kind not found' },
    409: { description: 'Stale expected state, conflicting initialization, or ineligible region' },
  },
})

export const getV1ConnectionsConnectionIdEnablementRoute = createRoute({
  method: 'get',
  path: '/v1/connections/{connectionId}/enablement',
  tags: ['fusion_connection_enablement'],
  summary: 'Get connection enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags, returning 409 on stale state. DELETE clears all flags without deleting the connection.',
  operationId: 'getFusionConnectionEnablement',
  request: {
    params: z.object({
      connectionId: z
        .uuid()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Canonical connection enablements',
      content: { 'application/json': { schema: FusionConnectionEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Connection permission required' },
    404: { description: 'Active connection not found' },
    409: { description: 'Stale expected state or conflicting initialization' },
  },
})

export const putV1ConnectionsConnectionIdEnablementRoute = createRoute({
  method: 'put',
  path: '/v1/connections/{connectionId}/enablement',
  tags: ['fusion_connection_enablement'],
  summary: 'Update connection enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags, returning 409 on stale state. DELETE clears all flags without deleting the connection.',
  operationId: 'updateFusionConnectionEnablement',
  request: {
    params: z.object({
      connectionId: z
        .uuid()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionConnectionEnablementUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Canonical connection enablements',
      content: { 'application/json': { schema: FusionConnectionEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Connection permission required' },
    404: { description: 'Active connection not found' },
    409: { description: 'Stale expected state or conflicting initialization' },
  },
})

export const postV1ConnectionsConnectionIdEnablementRoute = createRoute({
  method: 'post',
  path: '/v1/connections/{connectionId}/enablement',
  tags: ['fusion_connection_enablement'],
  summary: 'Create connection enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags, returning 409 on stale state. DELETE clears all flags without deleting the connection.',
  operationId: 'createFusionConnectionEnablement',
  request: {
    params: z.object({
      connectionId: z
        .uuid()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionConnectionEnablementCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Canonical connection enablements',
      content: { 'application/json': { schema: FusionConnectionEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Connection permission required' },
    404: { description: 'Active connection not found' },
    409: { description: 'Stale expected state or conflicting initialization' },
  },
})

export const deleteV1ConnectionsConnectionIdEnablementRoute = createRoute({
  method: 'delete',
  path: '/v1/connections/{connectionId}/enablement',
  tags: ['fusion_connection_enablement'],
  summary: 'Delete connection enablements (Cloud only)',
  description:
    'Internal Config API only. POST initializes all-false flags or retries identical state, otherwise returns 409. PUT requires the last-read expectedState and atomically compares all flags, returning 409 on stale state. DELETE clears all flags without deleting the connection.',
  operationId: 'deleteFusionConnectionEnablement',
  request: {
    params: z.object({
      connectionId: z
        .uuid()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Canonical connection enablements',
      content: { 'application/json': { schema: FusionConnectionEnablementReadSchema } },
    },
    400: { description: 'Invalid enablements' },
    401: { description: 'Authentication required' },
    403: { description: 'Connection permission required' },
    404: { description: 'Active connection not found' },
    409: { description: 'Stale expected state or conflicting initialization' },
  },
})

export const postV1ConnectionsResolveEnablementForSyncRoute = createRoute({
  method: 'post',
  path: '/v1/connections/resolve_enablement_for_sync',
  tags: ['fusion_enablement_resolver'],
  summary: 'Resolve trusted destination runtime settings for an assigned sync (Cloud only)',
  description:
    'Requires a dataplane service account assigned to the persisted workload. All identity assertions and the actual connector image are verified against platform metadata. No secret values are returned. Rollout is disabled by default.',
  operationId: 'resolveFusionEnablementForSync',
  request: {
    body: {
      content: { 'application/json': { schema: FusionEnablementResolveRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Trusted destination settings, or an explicit disabled result',
      content: { 'application/json': { schema: FusionEnablementResolveResponseSchema } },
    },
    403: { description: 'Workload is not assigned to this dataplane identity' },
    404: { description: 'Active sync identity not found' },
    409: {
      description: 'Enabled sync has invalid routing, connector image, or runtime configuration',
    },
  },
})

export const postV1ConnectionsConnectionIdBackfillRoute = createRoute({
  method: 'post',
  path: '/v1/connections/{connectionId}/backfill',
  tags: ['fusion_connection_backfill'],
  summary: 'Request a Fusion backfill for a connection (Cloud only)',
  description:
    "Forwards to Agents, which queues one backfill run per named stream, or one all-streams run when streams is omitted, and reports each stream's outcome. A stream whose current run is still queued or running keeps it and comes back as running, so retrying is safe. Requires the connection to be enabled for Fusion indexing.",
  operationId: 'requestFusionConnectionBackfill',
  request: {
    params: z.object({
      connectionId: z
        .uuid()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FusionConnectionBackfillRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Per-stream backfill outcomes',
      content: { 'application/json': { schema: FusionConnectionBackfillResponseSchema } },
    },
    401: { description: 'Authentication required' },
    403: { description: 'Insufficient workspace permission' },
    404: { description: 'Connection not found' },
    409: {
      description:
        'Connection is not enabled for Fusion backfill, or the request conflicts with the current resource state',
    },
    422: { description: 'Invalid backfill request' },
    502: { description: 'Invalid upstream response' },
    503: { description: 'Upstream unavailable' },
    504: { description: 'Upstream timed out' },
  },
})

export const postV1WorkspacesCreateRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/create',
  tags: ['workspace'],
  summary: 'Creates a workspace',
  operationId: 'createWorkspace',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesCreateIfNotExistRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/create_if_not_exist',
  tags: ['workspace', 'internal'],
  summary:
    'Creates a workspace with an explicit workspace ID. This should be use in acceptance tests only.',
  operationId: 'createWorkspaceIfNotExist',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceCreateWithIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/delete',
  tags: ['workspace'],
  summary: 'Deletes a workspace',
  operationId: 'deleteWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesListPaginatedRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/list_paginated',
  tags: ['workspace'],
  summary:
    'List workspaces by given workspace IDs registered in the current Airbyte deployment. This function also supports pagination.',
  operationId: 'listWorkspacesPaginated',
  request: {
    body: {
      content: { 'application/json': { schema: ListResourcesForWorkspacesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadListSchema } },
    },
  },
})

export const postV1WorkspacesListByOrganizationIdRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/list_by_organization_id',
  tags: ['workspace'],
  summary:
    'List workspaces under the given org id. This function also supports searching by keyword and pagination.',
  operationId: 'listWorkspacesInOrganization',
  request: {
    body: {
      content: { 'application/json': { schema: ListWorkspacesInOrganizationRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved workspaces under the given org id.',
      content: { 'application/json': { schema: WorkspaceReadListSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1WorkspacesListByUserIdRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/list_by_user_id',
  tags: ['workspace'],
  summary:
    'List workspaces by a given user id. The function also supports searching by keyword and pagination.',
  operationId: 'listWorkspacesByUser',
  request: {
    body: { content: { 'application/json': { schema: ListWorkspacesByUserRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully retrieved workspaces by given user id.',
      content: { 'application/json': { schema: WorkspaceReadListSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1WorkspacesGetAvailableDbtJobsRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_available_dbt_jobs',
  tags: ['workspace'],
  summary:
    'Calls the dbt Cloud `List Accounts` and `List jobs` APIs to get the list of available jobs for the dbt auth token associated with the requested workspace config.',
  operationId: 'getAvailableDbtJobsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceGetDbtJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved available dbt Cloud jobs',
      content: { 'application/json': { schema: WorkspaceGetDbtJobsResponseSchema } },
    },
  },
})

export const postV1WorkspacesGetRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get',
  tags: ['workspace'],
  summary: 'Find workspace by ID',
  operationId: 'getWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetBySlugRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_by_slug',
  tags: ['workspace'],
  summary: 'Find workspace by slug',
  operationId: 'getWorkspaceBySlug',
  request: {
    body: { content: { 'application/json': { schema: SlugRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetByConnectionIdRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_by_connection_id',
  tags: ['workspace'],
  summary: 'Find workspace by connection id',
  operationId: 'getWorkspaceByConnectionId',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetByConnectionIdWithTombstoneRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_by_connection_id_with_tombstone',
  tags: ['workspace'],
  summary: 'Find workspace by connection id including the tombstone ones',
  operationId: 'getWorkspaceByConnectionIdWithTombstone',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetOrganizationInfoRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_organization_info',
  tags: ['workspace'],
  summary:
    "Retrieve a workspace's basic organization info that is accessible for all workspace members, regardless of organization membership.",
  operationId: 'getOrganizationInfo',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OrganizationInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/update',
  tags: ['workspace'],
  summary: 'Update workspace state',
  operationId: 'updateWorkspace',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesUpdateNameRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/update_name',
  tags: ['workspace'],
  summary: 'Update workspace name',
  operationId: 'updateWorkspaceName',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceUpdateNameSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesUpdateOrganizationRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/update_organization',
  tags: ['workspace'],
  summary: 'Update workspace organization',
  operationId: 'updateWorkspaceOrganization',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceUpdateOrganizationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetUsageRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_usage',
  tags: ['workspace', 'cloud-only'],
  summary: 'Get usage for a workspace',
  operationId: 'getWorkspaceUsage',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceUsageRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceUsageReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetDataWorkerAvailabilityRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_data_worker_availability',
  tags: ['workspace', 'cloud-only'],
  summary: 'Get Data Worker availability for a workspace',
  operationId: 'getWorkspaceDataWorkerAvailability',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceDataWorkerAvailabilityRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceDataWorkerAvailabilityReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesTagFeedbackStatusAsDoneRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/tag_feedback_status_as_done',
  tags: ['workspace'],
  summary: 'Update workspace feedback state',
  operationId: 'updateWorkspaceFeedback',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceGiveFeedbackSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The feedback state has been properly updated' },
    404: NotFoundResponseResponse,
  },
})

export const postV1NotificationsTryRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/try',
  tags: ['notifications'],
  summary: 'Try sending a notifications; to be deprecated',
  operationId: 'tryNotificationConfig',
  request: {
    body: { content: { 'application/json': { schema: NotificationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: NotificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1NotificationsTryWebhookRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/try_webhook',
  tags: ['notifications'],
  summary: 'Try sending a notifications to webhook',
  operationId: 'tryNotificationWebhookConfig',
  request: {
    body: {
      content: {
        'application/json': { schema: NotificationWebhookConfigValidationRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: NotificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/update',
  tags: ['source_definition'],
  summary: 'Update a sourceDefinition',
  operationId: 'updateSourceDefinition',
  request: { body: { content: { 'application/json': { schema: SourceDefinitionUpdateSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsListRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list',
  tags: ['source_definition'],
  summary: 'List all the sourceDefinitions the current Airbyte deployment is configured to use',
  operationId: 'listSourceDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsListLatestRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_latest',
  tags: ['source_definition'],
  summary: 'List the latest sourceDefinitions Airbyte supports',
  description: 'Guaranteed to retrieve the latest information on supported sources.',
  operationId: 'listLatestSourceDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/get',
  tags: ['source_definition'],
  summary: 'Get source',
  operationId: 'getSourceDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/delete',
  tags: ['source_definition'],
  summary: 'Delete a source definition',
  operationId: 'deleteSourceDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsListPrivateRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_private',
  tags: ['source_definition'],
  summary:
    "List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
  operationId: 'listPrivateSourceDefinitions',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateSourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsListForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_for_workspace',
  tags: ['source_definition'],
  summary: 'List all the sourceDefinitions the given workspace is configured to use',
  operationId: 'listSourceDefinitionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdActorDefinitionRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsListEnterpriseSourceStubsRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_enterprise_source_stubs',
  tags: ['source_definition'],
  summary: 'List all enterprise source connector stubs from a specified GCS bucket.',
  operationId: 'listEnterpriseSourceStubs',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: EnterpriseConnectorStubsReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsListEnterpriseStubsForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_enterprise_stubs_for_workspace',
  tags: ['source_definition'],
  summary: 'List all enterprise source connector stubs for a specified workspace.',
  operationId: 'listEnterpriseSourceStubsForWorkspace',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: EnterpriseConnectorStubsReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsCreateCustomRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/create_custom',
  tags: ['source_definition'],
  summary: 'Creates a custom sourceDefinition for the given workspace or organization',
  operationId: 'createCustomSourceDefinition',
  request: {
    body: { content: { 'application/json': { schema: CustomSourceDefinitionCreateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsGetForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/get_for_workspace',
  tags: ['source_definition'],
  summary: 'Get a sourceDefinition that is configured for the given workspace',
  operationId: 'getSourceDefinitionForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsGetForScopeRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/get_for_scope',
  tags: ['source_definition'],
  summary: 'Get a sourceDefinition that is configured for the given workspace or organization',
  operationId: 'getSourceDefinitionForScope',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionIdWithScopeSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsGrantDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/grant_definition',
  tags: ['source_definition'],
  summary: 'grant a private, non-custom sourceDefinition to a given workspace or organization',
  operationId: 'grantSourceDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionIdWithScopeSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateSourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsRevokeDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/revoke_definition',
  tags: ['source_definition'],
  summary:
    'revoke a grant to a private, non-custom sourceDefinition from a given workspace or organization',
  operationId: 'revokeSourceDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionIdWithScopeSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ActorDefinitionVersionsGetForSourceRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definition_versions/get_for_source',
  tags: ['actor_definition_version'],
  summary: 'Get actor definition version for a source.',
  operationId: 'getActorDefinitionVersionForSourceId',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ActorDefinitionVersionReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1SourceDefinitionSpecificationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/source_definition_specifications/get',
  tags: ['source_definition_specification'],
  summary: 'Get specification for a SourceDefinition.',
  operationId: 'getSourceDefinitionSpecification',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionSpecificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionSpecificationsGetForSourceRoute = createRoute({
  method: 'post',
  path: '/v1/source_definition_specifications/get_for_source',
  tags: ['source_definition_specification'],
  summary: 'Get specification for a source.',
  operationId: 'getSpecificationForSourceId',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionSpecificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ActorDefinitionVersionsResolveRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definition_versions/resolve',
  tags: ['actor_definition_version'],
  summary: 'Resolve an actor definition version by version tag.',
  operationId: 'resolveActorDefinitionVersionByTag',
  request: {
    body: {
      content: { 'application/json': { schema: ResolveActorDefinitionVersionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ResolveActorDefinitionVersionResponseSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1ActorDefinitionVersionsGetDefaultRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definition_versions/get_default',
  tags: ['actor_definition_version'],
  summary: 'Get the default actor definition version for the actor.',
  operationId: 'getActorDefinitionVersionDefault',
  request: {
    body: {
      content: {
        'application/json': { schema: GetActorDefinitionVersionDefaultRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ActorDefinitionVersionReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1ActorDefinitionsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definitions/create',
  tags: ['actor_definition', 'internal'],
  summary:
    'Creates an actor definition (source or destination) for the given workspace or organization',
  operationId: 'createActorDefinition',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              workspaceId: WorkspaceIdSchema.exactOptional(),
              scopeId: ScopeIdSchema.exactOptional(),
              scopeType: ScopeTypeSchema.exactOptional(),
              actorType: ActorTypeSchema,
              actorDefinition: ActorDefinitionSpecSchema,
            })
            .openapi({
              title: 'ActorDefinitionCreateRequest',
              required: ['actorDefinition', 'actorType'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              requestId: z
                .string()
                .openapi({
                  description: 'Unique identifier for the async actor definition creation request',
                }),
            })
            .openapi({ title: 'ActorDefinitionCreateResponse', required: ['requestId'] }),
        },
      },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ActorDefinitionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definitions/update',
  tags: ['actor_definition', 'internal'],
  summary: 'Updates an actor definition (source or destination)',
  operationId: 'updateActorDefinition',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              actorDefinitionId: z
                .uuid()
                .openapi({ description: 'The ID of the actor definition to update' }),
              actorType: ActorTypeSchema,
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional name update (mainly for custom connectors)' }),
              dockerImageTag: z
                .string()
                .openapi({ description: 'The new docker image tag to update to' }),
              resourceRequirements: ScopedResourceRequirementsSchema.exactOptional(),
              workspaceId: WorkspaceIdSchema,
            })
            .openapi({
              title: 'ActorDefinitionUpdateRequest',
              required: ['actorDefinitionId', 'actorType', 'dockerImageTag', 'workspaceId'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              requestId: z
                .string()
                .openapi({
                  description: 'Unique identifier for the async actor definition update request',
                }),
            })
            .openapi({ title: 'ActorDefinitionUpdateResponse', required: ['requestId'] }),
        },
      },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ActorDefinitionsFinishRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definitions/finish',
  tags: ['actor_definition', 'internal'],
  summary: 'Finishes processing an actor definition create or update operation',
  operationId: 'finishActorDefinitionUpdate',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionFinishRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              actorDefinitionId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the actor definition (returned for create operations, null for updates)',
                }),
              failureReason: FailureReasonSchema.exactOptional(),
            })
            .openapi({ title: 'ActorDefinitionFinishResponse', required: [] }),
        },
      },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ActorDefinitionsResultRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definitions/result',
  tags: ['actor_definition', 'internal'],
  summary: 'Get the result of an actor definition create or update operation',
  operationId: 'getActorDefinitionResult',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              requestId: z
                .string()
                .openapi({
                  description: 'The request ID returned from the create or update operation',
                }),
            })
            .openapi({ title: 'ActorDefinitionResultRequest', required: ['requestId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['pending', 'running', 'succeeded', 'failed'])
                .openapi({ description: 'The status of the operation' }),
              actorDefinitionId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the actor definition (only present when status is succeeded and operation was create)',
                }),
              failureReason: FailureReasonSchema.exactOptional(),
            })
            .openapi({ title: 'ActorDefinitionResultResponse', required: ['status'] }),
        },
      },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1DeclarativeSourceDefinitionsCreateManifestRoute = createRoute({
  method: 'post',
  path: '/v1/declarative_source_definitions/create_manifest',
  tags: ['declarative_source_definitions'],
  summary: 'Create a declarative manifest to be used by the specified source definition',
  operationId: 'createDeclarativeSourceDefinitionManifest',
  request: {
    body: {
      content: {
        'application/json': { schema: DeclarativeSourceDefinitionCreateManifestRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Successful operation' },
    400: { description: 'Definition is not declarative source' },
    404: NotFoundResponseResponse,
    409: { description: 'Version already exists for definition id' },
  },
})

export const postV1DeclarativeSourceDefinitionsUpdateActiveManifestRoute = createRoute({
  method: 'post',
  path: '/v1/declarative_source_definitions/update_active_manifest',
  tags: ['declarative_source_definitions'],
  summary: 'Update the declarative manifest version for a source',
  operationId: 'updateDeclarativeManifestVersion',
  request: {
    body: {
      content: { 'application/json': { schema: UpdateActiveManifestRequestBodySchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Successful operation' }, 404: NotFoundResponseResponse },
})

export const postV1DeclarativeSourceDefinitionsListManifestsRoute = createRoute({
  method: 'post',
  path: '/v1/declarative_source_definitions/list_manifests',
  tags: ['declarative_source_definitions'],
  summary: 'List all available declarative manifest versions of a declarative source definition',
  operationId: 'listDeclarativeManifests',
  request: {
    body: {
      content: { 'application/json': { schema: ListDeclarativeManifestsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeclarativeManifestsReadListSchema } },
    },
    400: { description: 'Definition is not declarative source' },
    404: NotFoundResponseResponse,
  },
})

export const postV1ConnectorBuilderProjectsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/create',
  tags: ['connector_builder_project'],
  summary: 'Create new connector builder project',
  operationId: 'createConnectorBuilderProject',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorBuilderProjectWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderProjectIdWithWorkspaceIdSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsPublishRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/publish',
  tags: ['connector_builder_project'],
  summary: 'Publish a connector to the workspace',
  operationId: 'publishConnectorBuilderProject',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorBuilderPublishRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionIdBodySchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsGetBaseImageRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/get_base_image',
  tags: ['connector_builder_project'],
  summary: 'Get the base image for the declarative manifest',
  operationId: 'getDeclarativeManifestBaseImage',
  request: {
    body: {
      content: { 'application/json': { schema: DeclarativeManifestRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeclarativeManifestBaseImageReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1ConnectorBuilderProjectsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/update',
  tags: ['connector_builder_project'],
  summary: 'Update connector builder project',
  operationId: 'updateConnectorBuilderProject',
  request: {
    body: {
      content: {
        'application/json': { schema: ExistingConnectorBuilderProjectWithWorkspaceIdSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const postV1ConnectorBuilderProjectsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/delete',
  tags: ['connector_builder_project'],
  summary: 'Deletes connector builder project',
  operationId: 'deleteConnectorBuilderProject',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorBuilderProjectIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const postV1ConnectorBuilderProjectsListRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/list',
  tags: ['connector_builder_project'],
  summary: 'List connector builder projects for workspace',
  operationId: 'listConnectorBuilderProjects',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderProjectReadListSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsGetWithManifestRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/get_with_manifest',
  tags: ['connector_builder_project'],
  summary: 'Get a connector builder project with draft manifest',
  operationId: 'getConnectorBuilderProject',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorBuilderProjectIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderProjectReadSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsGetForDefinitionIdRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/get_for_definition_id',
  tags: ['connector_builder_project'],
  summary: 'Get a connector builder project by source definition ID',
  operationId: 'getConnectorBuilderProjectIdForDefinitionId',
  request: {
    body: {
      content: { 'application/json': { schema: BuilderProjectForDefinitionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: BuilderProjectForDefinitionResponseSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsUpdateTestingValuesRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/update_testing_values',
  tags: ['connector_builder_project'],
  summary: 'Submit a set of testing values to persist for a connector builder project',
  operationId: 'updateConnectorBuilderProjectTestingValues',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorBuilderProjectTestingValuesUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderProjectTestingValuesSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsReadStreamRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/read_stream',
  tags: ['connector_builder_project'],
  summary:
    'Reads the target stream of the connector builder project using the persisted testing values',
  operationId: 'readConnectorBuilderProjectStream',
  request: {
    body: {
      content: {
        'application/json': { schema: ConnectorBuilderProjectStreamReadRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderProjectStreamReadSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsFullResolveRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/full_resolve',
  tags: ['connector_builder_project'],
  summary:
    'Given a JSON manifest, returns a JSON manifest with all dynamic streams and all of the $refs and $parameters resolved and flattened',
  operationId: 'fullResolveManifestBuilderProject',
  request: {
    body: {
      content: {
        'application/json': { schema: ConnectorBuilderProjectFullResolveRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderResolvedManifestSchema } },
    },
    400: ExceptionResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorBuilderProjectsResolveRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/resolve',
  tags: ['connector_builder_project'],
  summary:
    'Given a JSON manifest, returns a JSON manifest with all of the $refs and $parameters resolved and flattened',
  operationId: 'resolveManifestBuilderProject',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorBuilderProjectResolveRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderResolvedManifestSchema } },
    },
    400: ExceptionResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorBuilderProjectsCapabilitiesRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/capabilities',
  tags: ['connector_builder_project'],
  summary: 'Get connector builder capabilities',
  operationId: 'getConnectorBuilderCapabilities',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderCapabilitiesSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsForkRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/fork',
  tags: ['connector_builder_project'],
  summary: 'Creates a new builder project that is a fork of an existing source definition',
  operationId: 'createForkedConnectorBuilderProject',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorBuilderProjectForkRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorBuilderProjectIdWithWorkspaceIdSchema } },
    },
  },
})

export const postV1ConnectorBuilderProjectsContributeCheckRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/contribute/check',
  tags: ['connector_builder_project'],
  summary: 'Checks if a connector being contributed already exists',
  operationId: 'checkContribution',
  request: {
    body: {
      content: { 'application/json': { schema: CheckContributionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckContributionReadSchema } },
    },
    400: ExceptionResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorBuilderProjectsContributeGenerateRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/contribute/generate',
  tags: ['connector_builder_project'],
  summary: 'Generates a connector module and pushes it to Github as a PR',
  operationId: 'generateContribution',
  request: {
    body: {
      content: { 'application/json': { schema: GenerateContributionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GenerateContributionResponseSchema } },
    },
    400: ExceptionResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorBuilderAssistProcessRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_assist/process',
  tags: ['connector_builder_assist'],
  summary: 'Assist server access point',
  operationId: 'assistV1Process',
  request: {
    body: {
      content: { 'application/json': { schema: AssistV1ProcessRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: AssistV1ProcessSchema } },
    },
    400: ExceptionResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorBuilderAssistWarmRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_assist/warm',
  tags: ['connector_builder_assist'],
  summary: 'Assist server warming access point',
  operationId: 'assistV1Warm',
  request: {
    body: {
      content: { 'application/json': { schema: AssistV1ProcessRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: AssistV1ProcessSchema } },
    },
    400: ExceptionResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorDocumentationGetRoute = createRoute({
  method: 'post',
  path: '/v1/connector_documentation/get',
  tags: ['connector_documentation'],
  summary: 'Get the documentation for a connector',
  operationId: 'getConnectorDocumentation',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorDocumentationRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorDocumentationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesCreateRoute = createRoute({
  method: 'post',
  path: '/v1/sources/create',
  tags: ['source'],
  summary: 'Create a source',
  operationId: 'createSource',
  request: {
    body: { content: { 'application/json': { schema: SourceCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/sources/update',
  tags: ['source'],
  summary: 'Update a source',
  operationId: 'updateSource',
  request: {
    body: { content: { 'application/json': { schema: SourceUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesPartialUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/sources/partial_update',
  tags: ['source'],
  summary: 'Partially update a source',
  operationId: 'partialUpdateSource',
  request: {
    body: {
      content: { 'application/json': { schema: PartialSourceUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesUpgradeVersionRoute = createRoute({
  method: 'post',
  path: '/v1/sources/upgrade_version',
  tags: ['source'],
  summary: 'Upgrade a source to the latest version',
  operationId: 'upgradeSourceVersion',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Successful operation' }, 404: NotFoundResponseResponse },
})

export const postV1SourcesListRoute = createRoute({
  method: 'post',
  path: '/v1/sources/list',
  tags: ['source'],
  summary: 'List sources for workspace',
  description: 'List sources for workspace. Does not return deleted sources.',
  operationId: 'listSourcesForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: ActorListCursorPaginatedRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesListPaginatedRoute = createRoute({
  method: 'post',
  path: '/v1/sources/list_paginated',
  tags: ['source'],
  summary: 'List sources for workspace',
  description: 'List sources for workspace. Does not return deleted sources. Paginated.',
  operationId: 'listSourcesForWorkspacePaginated',
  request: {
    body: {
      content: { 'application/json': { schema: ListResourcesForWorkspacesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesGetRoute = createRoute({
  method: 'post',
  path: '/v1/sources/get',
  tags: ['source'],
  summary: 'Get source',
  operationId: 'getSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesGetWithMetadataRoute = createRoute({
  method: 'post',
  path: '/v1/sources/get_with_metadata',
  tags: ['source'],
  summary: 'Get source with metadata',
  operationId: 'getSourceWithMetadata',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdWithSecretCoordinatesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadWithMetadataSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesMostRecentSourceActorCatalogRoute = createRoute({
  method: 'post',
  path: '/v1/sources/most_recent_source_actor_catalog',
  tags: ['source'],
  summary: 'Get most recent ActorCatalog for source',
  operationId: 'getMostRecentSourceActorCatalog',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ActorCatalogWithUpdatedAtSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesSearchRoute = createRoute({
  method: 'post',
  path: '/v1/sources/search',
  tags: ['source'],
  summary: 'Search sources',
  operationId: 'searchSources',
  request: {
    body: { content: { 'application/json': { schema: SourceSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/sources/delete',
  tags: ['source'],
  summary: 'Delete a source',
  operationId: 'deleteSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const getV1WorkspacesWorkspaceIdSkillsDocsRoute = createRoute({
  method: 'get',
  path: '/v1/workspaces/{workspaceId}/skills/docs',
  tags: ['workspace'],
  summary: 'Read connector skill documentation',
  description:
    'Cloud-only connector documentation. Requires workspace reader access and enabled agent access.',
  operationId: 'getWorkspaceSkillDocs',
  request: {
    params: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    query: z.object({
      id: z
        .string()
        .openapi({
          param: { name: 'id', in: 'query', required: true, schema: { type: 'string' } },
        }),
      section: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'section', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Connector skill documentation.',
      content: { 'application/json': { schema: SkillDocsResponseSchema } },
    },
    401: CloudExecutionProblemResponseResponse,
    403: CloudExecutionProblemResponseResponse,
    404: CloudExecutionProblemResponseResponse,
    422: CloudExecutionProblemResponseResponse,
    502: CloudExecutionProblemResponseResponse,
    503: CloudExecutionProblemResponseResponse,
    504: CloudExecutionProblemResponseResponse,
  },
})

export const postV1DestinationsDestinationIdExecuteRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/{destinationId}/execute',
  tags: ['destination_execution'],
  summary: 'Execute a read-only destination SQL query',
  description:
    'Cloud-only sql_select execution for an enabled destination. Requires workspace reader access.',
  operationId: 'executeDestination',
  request: {
    params: z.object({
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DestinationExecuteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query data and optional metadata.',
      content: { 'application/json': { schema: DestinationExecuteResponseSchema } },
    },
    401: CloudExecutionProblemResponseResponse,
    403: CloudExecutionProblemResponseResponse,
    404: CloudExecutionProblemResponseResponse,
    405: CloudExecutionProblemResponseResponse,
    413: CloudExecutionProblemResponseResponse,
    422: CloudExecutionProblemResponseResponse,
    502: CloudExecutionProblemResponseResponse,
    503: CloudExecutionProblemResponseResponse,
    504: CloudExecutionProblemResponseResponse,
  },
})

export const postV1SourcesSourceIdExecuteRoute = createRoute({
  method: 'post',
  path: '/v1/sources/{sourceId}/execute',
  tags: ['source_execution'],
  summary: 'Execute a read-only source action',
  description:
    'Executes a supported JSON-only direct read for an explicitly enabled Cloud source. Available entities, actions and parameters depend on the source connector. Describe, writes, downloads, streaming and Context Store operations are not supported. Controlled Cloud-only availability; this operation is unavailable (503) until the execution backend is configured. This route is not exposed in non-Cloud deployments. Requires reader access to the source workspace. An organization administrator must enable the Context layer for the organization and workspace, and the source must be enabled for agent access. Semantic-search indexing is not required. Requests are limited to 64 KiB and responses to 1 MiB. Production activation is coordinated separately.',
  operationId: 'executeSource',
  request: {
    params: z.object({
      sourceId: z
        .string()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SourceExecuteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The source action returned JSON data and optional connector metadata.',
      content: { 'application/json': { schema: SourceExecuteResponseSchema } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
    403: {
      description: 'Source execution is not permitted.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
    404: {
      description: 'Source not found.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
    413: {
      description: 'Request exceeds the size limit.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
    422: {
      description: 'Invalid or unsupported input.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
    502: {
      description: 'Execution backend returned an invalid response or failed.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
    503: {
      description: 'Execution is disabled, unavailable, or at capacity.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
    504: {
      description: 'Execution timed out.',
      content: { 'application/json': { schema: SourceExecuteProblemSchema } },
    },
  },
})

export const postV1SourcesCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/sources/check_connection',
  tags: ['source'],
  summary: 'Check connection to the source',
  operationId: 'checkConnectionToSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesCheckConnectionForUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/sources/check_connection_for_update',
  tags: ['source'],
  summary: 'Check connection for a proposed update to a source',
  operationId: 'checkConnectionToSourceForUpdate',
  request: {
    body: { content: { 'application/json': { schema: SourceUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesDiscoverSchemaRoute = createRoute({
  method: 'post',
  path: '/v1/sources/discover_schema',
  tags: ['source'],
  summary: 'Discover the schema catalog of the source',
  operationId: 'discoverSchemaForSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDiscoverSchemaRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDiscoverSchemaReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesApplySchemaChangesRoute = createRoute({
  method: 'post',
  path: '/v1/sources/apply_schema_changes',
  tags: ['source'],
  summary:
    'Auto propagate the change on a catalog to a catalog saved in the DB. It will fetch all the connections linked to a source id and apply the provided diff to their catalog.',
  operationId: 'applySchemaChangeForSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceAutoPropagateChangeSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The schema was properly auto propagate' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesWriteDiscoverCatalogResultRoute = createRoute({
  method: 'post',
  path: '/v1/sources/write_discover_catalog_result',
  tags: ['source', 'internal'],
  summary:
    'Should only be called from job pods, to write result from discover activity back to DB.',
  operationId: 'writeDiscoverCatalogResult',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDiscoverSchemaWriteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: DiscoverCatalogResultSchema } },
    },
  },
})

export const postV1DestinationsWriteDiscoverCatalogResultRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/write_discover_catalog_result',
  tags: ['destination', 'internal'],
  summary:
    'Should only be called from job pods, to write result from destination discover activity back to DB.',
  operationId: 'writeDestinationDiscoverCatalogResult',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDiscoverSchemaWriteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: DiscoverCatalogResultSchema } },
    },
  },
})

export const postV1DestinationDefinitionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/update',
  tags: ['destination_definition'],
  summary: 'Update destinationDefinition',
  operationId: 'updateDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsListRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list',
  tags: ['destination_definition'],
  summary:
    'List all the destinationDefinitions the current Airbyte deployment is configured to use',
  operationId: 'listDestinationDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsListLatestRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list_latest',
  tags: ['destination_definition'],
  summary: 'List the latest destinationDefinitions Airbyte supports',
  description: 'Guaranteed to retrieve the latest information on supported destinations.',
  operationId: 'listLatestDestinationDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/get',
  tags: ['destination_definition'],
  summary: 'Get destinationDefinition',
  operationId: 'getDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/delete',
  tags: ['destination_definition'],
  summary: 'Delete a destination definition',
  operationId: 'deleteDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsListPrivateRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list_private',
  tags: ['destination_definition'],
  summary:
    "List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
  operationId: 'listPrivateDestinationDefinitions',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateDestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsListForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list_for_workspace',
  tags: ['destination_definition'],
  summary: 'List all the destinationDefinitions the given workspace is configured to use',
  operationId: 'listDestinationDefinitionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdActorDefinitionRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsListEnterpriseStubsForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list_enterprise_stubs_for_workspace',
  tags: ['destination_definition'],
  summary: 'List all enterprise destination connector stubs for a specified workspace.',
  operationId: 'listEnterpriseDestinationStubsForWorkspace',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: EnterpriseConnectorStubsReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsCreateCustomRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/create_custom',
  tags: ['destination_definition'],
  summary: 'Creates a custom destinationDefinition for the given workspace',
  operationId: 'createCustomDestinationDefinition',
  request: {
    body: { content: { 'application/json': { schema: CustomDestinationDefinitionCreateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsGetForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/get_for_workspace',
  tags: ['destination_definition'],
  summary: 'Get a destinationDefinition that is configured for the given workspace',
  operationId: 'getDestinationDefinitionForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsGetForScopeRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/get_for_scope',
  tags: ['destination_definition'],
  summary: 'Get a destinationDefinition that is configured for the given scope',
  operationId: 'getDestinationDefinitionForScope',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionIdWithScopeSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsGrantDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/grant_definition',
  tags: ['destination_definition'],
  summary: 'grant a private, non-custom destinationDefinition to a given workspace or organization',
  operationId: 'grantDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionIdWithScopeSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateDestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsRevokeDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/revoke_definition',
  tags: ['destination_definition'],
  summary:
    'revoke a grant to a private, non-custom destinationDefinition from a given workspace or organization',
  operationId: 'revokeDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionIdWithScopeSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ActorDefinitionVersionsGetForDestinationRoute = createRoute({
  method: 'post',
  path: '/v1/actor_definition_versions/get_for_destination',
  tags: ['actor_definition_version'],
  summary: 'Get actor definition version for a destination.',
  operationId: 'getActorDefinitionVersionForDestinationId',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ActorDefinitionVersionReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1DestinationDefinitionSpecificationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definition_specifications/get',
  tags: ['destination_definition_specification'],
  summary: 'Get specification for a destinationDefinition',
  operationId: 'getDestinationDefinitionSpecification',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionSpecificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionSpecificationsGetForDestinationRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definition_specifications/get_for_destination',
  tags: ['destination_definition_specification'],
  summary: 'Get specification for a destination',
  operationId: 'getSpecificationForDestinationId',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionSpecificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/create',
  tags: ['destination'],
  summary: 'Create a destination',
  operationId: 'createDestination',
  request: {
    body: { content: { 'application/json': { schema: DestinationCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/update',
  tags: ['destination'],
  summary: 'Update a destination',
  operationId: 'updateDestination',
  request: {
    body: { content: { 'application/json': { schema: DestinationUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsPartialUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/partial_update',
  tags: ['destination'],
  summary: 'Update a destination partially',
  operationId: 'partialUpdateDestination',
  request: {
    body: {
      content: { 'application/json': { schema: PartialDestinationUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsUpgradeVersionRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/upgrade_version',
  tags: ['destination'],
  summary: 'Upgrade a destination to the latest version',
  operationId: 'upgradeDestinationVersion',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Successful operation' }, 404: NotFoundResponseResponse },
})

export const postV1DestinationsListRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/list',
  tags: ['destination'],
  summary: 'List configured destinations for a workspace',
  operationId: 'listDestinationsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: ActorListCursorPaginatedRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsListPaginatedRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/list_paginated',
  tags: ['destination'],
  summary: 'List configured destinations for a workspace. Pginated',
  operationId: 'listDestinationsForWorkspacesPaginated',
  request: {
    body: {
      content: { 'application/json': { schema: ListResourcesForWorkspacesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/get',
  tags: ['destination'],
  summary: 'Get configured destination',
  operationId: 'getDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsDiscoverSchemaRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/discover_schema',
  tags: ['destination'],
  summary: 'Discover the catalog for a destination',
  operationId: 'discoverCatalogForDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDiscoverSchemaRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDiscoverReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsGetCatalogForConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/get_catalog_for_connection',
  tags: ['destination'],
  summary: 'Get the destination catalog for a connection',
  operationId: 'getCatalogForConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDiscoverReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/search',
  tags: ['destination'],
  summary: 'Search destinations',
  operationId: 'searchDestinations',
  request: {
    body: { content: { 'application/json': { schema: DestinationSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/check_connection',
  tags: ['destination'],
  summary: 'Check connection to the destination',
  operationId: 'checkConnectionToDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsCheckConnectionForUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/check_connection_for_update',
  tags: ['destination'],
  summary: 'Check connection for a proposed update to a destination',
  operationId: 'checkConnectionToDestinationForUpdate',
  request: {
    body: { content: { 'application/json': { schema: DestinationUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/delete',
  tags: ['destination'],
  summary: 'Delete the destination',
  operationId: 'deleteDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/connections/create',
  tags: ['connection'],
  summary: 'Create a connection between a source and a destination',
  operationId: 'createConnection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/connections/update',
  tags: ['connection'],
  summary: 'Update a connection',
  description:
    "Apply a patch-style update to a connection. Only fields present on the update request body will be updated.\nNote that if a catalog is present in the request body, the connection's entire catalog will be replaced\nwith the catalog from the request. This means that to modify a single stream, the entire new catalog\ncontaining the updated stream needs to be sent.\n",
  operationId: 'updateConnection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsUpdateWithReasonRoute = createRoute({
  method: 'post',
  path: '/v1/connections/update_with_reason',
  tags: ['connection'],
  summary: 'Update a connection with reason',
  operationId: 'updateConnectionWithReason',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionUpdateWithReasonSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsListRoute = createRoute({
  method: 'post',
  path: '/v1/connections/list',
  tags: ['connection'],
  summary: 'Returns all connections for a workspace.',
  description: 'List connections for workspace. Does not return deleted connections.',
  operationId: 'listConnectionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsListPaginatedRoute = createRoute({
  method: 'post',
  path: '/v1/connections/list_paginated',
  tags: ['connection'],
  summary: 'Returns all connections for a workspace. Paginated.',
  description: 'List connections for workspace. Does not return deleted connections. Paginated.',
  operationId: 'listConnectionsForWorkspacesPaginated',
  request: {
    body: {
      content: { 'application/json': { schema: ListConnectionsForWorkspacesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsListAllRoute = createRoute({
  method: 'post',
  path: '/v1/connections/list_all',
  tags: ['connection'],
  summary: 'Returns all connections for a workspace, including deleted connections.',
  description: 'List connections for workspace, including deleted connections.',
  operationId: 'listAllConnectionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsStatusRoute = createRoute({
  method: 'post',
  path: '/v1/connections/status',
  tags: ['connection'],
  summary: 'Get the status of multiple connections',
  operationId: 'getConnectionStatuses',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStatusesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStatusesReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsSyncProgressRoute = createRoute({
  method: 'post',
  path: '/v1/connections/sync_progress',
  tags: ['connection'],
  summary: 'Get progress information of the current sync of a connection',
  operationId: 'getConnectionSyncProgress',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionSyncProgressReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsHistoryUptimeRoute = createRoute({
  method: 'post',
  path: '/v1/connections/history/uptime',
  tags: ['connection'],
  summary: 'Get the uptime history of a connection',
  operationId: 'getConnectionUptimeHistory',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionUptimeHistoryRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionUptimeHistoryReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsHistoryDataRoute = createRoute({
  method: 'post',
  path: '/v1/connections/history/data',
  tags: ['connection'],
  summary: 'Get the data history of a connection',
  operationId: 'getConnectionDataHistory',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionDataHistoryRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionUptimeHistoryReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsStreamHistoryRoute = createRoute({
  method: 'post',
  path: '/v1/connections/stream_history',
  tags: ['connection'],
  summary: 'Get the history of a connection',
  operationId: 'getConnectionStreamHistory',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStreamHistoryRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStreamHistoryReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsEventsGetRoute = createRoute({
  method: 'post',
  path: '/v1/connections/events/get',
  tags: ['connection'],
  summary: 'Get a single event (including details) in a connection by given event ID',
  operationId: 'getConnectionEvent',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionEventIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionEventWithDetailsSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsEventsListRoute = createRoute({
  method: 'post',
  path: '/v1/connections/events/list',
  tags: ['connection'],
  summary: 'List most recent events in a connection (optional filters may apply)',
  operationId: 'listConnectionEvents',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionEventsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionEventListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsEventsListMinimalRoute = createRoute({
  method: 'post',
  path: '/v1/connections/events/list_minimal',
  tags: ['connection'],
  summary: 'List all events in a given time span in a minimal representation',
  operationId: 'listConnectionEventsMinimal',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionEventsListMinimalRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionEventListMinimalSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsEventsBackfillRoute = createRoute({
  method: 'post',
  path: '/v1/connections/events/backfill',
  tags: ['connection'],
  summary: 'Backfill events for a connection',
  operationId: 'backfillConnectionEvents',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionEventsBackfillRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful operation' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsEventsListForJobRoute = createRoute({
  method: 'post',
  path: '/v1/connections/events/list_for_job',
  tags: ['connection'],
  summary: 'List all connection events for a given job',
  operationId: 'listConnectionEventsForJob',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionEventListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsLastJobPerStreamRoute = createRoute({
  method: 'post',
  path: '/v1/connections/last_job_per_stream',
  tags: ['connection'],
  summary: 'Get a summary of the last completed job for each indicated stream in the connection.',
  operationId: 'getConnectionLastJobPerStream',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionLastJobPerStreamRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionLastJobPerStreamReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/connections/get',
  tags: ['connection'],
  summary: 'Get a connection',
  operationId: 'getConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsGetForJobRoute = createRoute({
  method: 'post',
  path: '/v1/connections/getForJob',
  tags: ['connection'],
  summary: 'Get a connection for a given jobId',
  operationId: 'getConnectionForJob',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionAndJobIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsListByActorDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/connections/list_by_actor_definition',
  tags: ['connection'],
  summary: 'List all connections that use the provided actor definition',
  operationId: 'listConnectionsByActorDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: ActorDefinitionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsApplySchemaChangesRoute = createRoute({
  method: 'post',
  path: '/v1/connections/apply_schema_changes',
  tags: ['connection'],
  summary:
    'Auto propagate the change on a catalog to a catalog saved in the DB for the given connection.',
  operationId: 'applySchemaChangeForConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionAutoPropagateSchemaChangeSchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The schema was properly auto propagated',
      content: { 'application/json': { schema: ConnectionAutoPropagateResultSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsPostprocessDiscoveredCatalogRoute = createRoute({
  method: 'post',
  path: '/v1/connections/postprocess_discovered_catalog',
  tags: ['connection'],
  summary:
    'Generate the diff between stored catalog for the connection and catalog provided and postprocess as necessary',
  operationId: 'postprocessDiscoveredCatalogForConnection',
  request: {
    body: {
      content: { 'application/json': { schema: PostprocessDiscoveredCatalogRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PostprocessDiscoveredCatalogResultSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsGetContextRoute = createRoute({
  method: 'post',
  path: '/v1/connections/get_context',
  tags: ['connection'],
  summary: 'Retrieves the domain ids for all objects related to a connection.',
  operationId: 'getConnectionContext',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionContextReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1StateGetRoute = createRoute({
  method: 'post',
  path: '/v1/state/get',
  tags: ['state'],
  summary: 'Fetch the current state for a connection.',
  operationId: 'getState',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStateSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1StateCreateOrUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/state/create_or_update',
  tags: ['state', 'internal'],
  summary: 'Create or update the state for a connection.',
  operationId: 'createOrUpdateState',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStateCreateOrUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStateSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1StateCreateOrUpdateSafeRoute = createRoute({
  method: 'post',
  path: '/v1/state/create_or_update_safe',
  tags: ['state'],
  summary:
    'Create or update the state for a connection. Throws error if a sync is currently running when this is called.',
  operationId: 'createOrUpdateStateSafe',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStateCreateOrUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStateSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
    423: ExceptionResponseResponse,
  },
})

export const postV1ConnectionsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/connections/search',
  tags: ['connection'],
  summary: 'Search connections',
  operationId: 'searchConnections',
  request: {
    body: { content: { 'application/json': { schema: ConnectionSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/connections/delete',
  tags: ['connection'],
  summary: 'Delete a connection',
  operationId: 'deleteConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsSyncRoute = createRoute({
  method: 'post',
  path: '/v1/connections/sync',
  tags: ['connection'],
  summary: 'Trigger a manual sync of the connection',
  operationId: 'syncConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsResetRoute = createRoute({
  method: 'post',
  path: '/v1/connections/reset',
  tags: ['connection'],
  summary:
    'Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.',
  operationId: 'resetConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsClearRoute = createRoute({
  method: 'post',
  path: '/v1/connections/clear',
  tags: ['connection'],
  summary:
    'Clear the data for the connection. Deletes data generated by the connection in the destination. Clear any cursors back to initial state.',
  operationId: 'clearConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsAutoDisableRoute = createRoute({
  method: 'post',
  path: '/v1/connections/auto_disable',
  tags: ['connection', 'internal'],
  summary:
    'Sets connection to inactive if it has met any of the auto-disable conditions (i.e. it hits the max number of consecutive job failures or if it hits the max number of days with only failed jobs). Additionally, notifications will be sent if a connection is disabled or warned if it has reached halfway to disable limits. This endpoint is only able to inactivate connections with more than one non-cancelled job.\n',
  operationId: 'autoDisableConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1ConnectionsClearStreamRoute = createRoute({
  method: 'post',
  path: '/v1/connections/clear/stream',
  tags: ['connection'],
  summary:
    'Clear the data for a specific stream in the connection. Deletes data generated by the stream in the destination. Clear any cursors back to initial state.',
  operationId: 'clearConnectionStream',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStreamRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsResetStreamRoute = createRoute({
  method: 'post',
  path: '/v1/connections/reset/stream',
  tags: ['connection'],
  summary:
    'Reset the data for a specific stream in the connection. Deletes data generated by the stream in the destination. Resets any cursors back to initial state.',
  operationId: 'resetConnectionStream',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStreamRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsRefreshRoute = createRoute({
  method: 'post',
  path: '/v1/connections/refresh',
  tags: ['connection'],
  summary:
    'refresh the data for specific streams in the connection. If no stream is specify or the list of stream is empy, all the streams will be refreshed. Resets any cursors back to initial state.',
  operationId: 'refreshConnectionStream',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStreamRefreshRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobReadResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsCheckRoute = createRoute({
  method: 'post',
  path: '/v1/operations/check',
  tags: ['operation'],
  summary: 'Check if an operation to be created is valid',
  operationId: 'checkOperation',
  request: {
    body: {
      content: { 'application/json': { schema: OperatorConfigurationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckOperationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/operations/create',
  tags: ['operation'],
  summary: 'Create an operation to be applied as part of a connection pipeline',
  operationId: 'createOperation',
  request: {
    body: { content: { 'application/json': { schema: OperationCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/operations/update',
  tags: ['operation'],
  summary: 'Update an operation',
  operationId: 'updateOperation',
  request: {
    body: { content: { 'application/json': { schema: OperationUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsListRoute = createRoute({
  method: 'post',
  path: '/v1/operations/list',
  tags: ['operation'],
  summary: 'Returns all operations for a connection.',
  description: 'List operations for connection.',
  operationId: 'listOperationsForConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/operations/get',
  tags: ['operation'],
  summary: 'Returns an operation',
  operationId: 'getOperation',
  request: {
    body: {
      content: { 'application/json': { schema: OperationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/operations/delete',
  tags: ['operation'],
  summary: 'Delete an operation',
  operationId: 'deleteOperation',
  request: {
    body: {
      content: { 'application/json': { schema: OperationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SchedulerSourcesCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/scheduler/sources/check_connection',
  tags: ['scheduler'],
  summary: 'Run check connection for a given source configuration',
  operationId: 'executeSourceCheckConnection',
  request: {
    body: { content: { 'application/json': { schema: SourceCoreConfigSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SchedulerSourcesDiscoverSchemaRoute = createRoute({
  method: 'post',
  path: '/v1/scheduler/sources/discover_schema',
  tags: ['scheduler'],
  summary: 'Run discover schema for a saved source using its configuration',
  description:
    'The sourceId must identify a saved source because the discovery result is written back for that source.',
  operationId: 'executeSourceDiscoverSchema',
  request: {
    body: { content: { 'application/json': { schema: SourceCoreConfigSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDiscoverSchemaReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SchedulerDestinationsCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/scheduler/destinations/check_connection',
  tags: ['scheduler'],
  summary: 'Run check connection for a given destination configuration',
  operationId: 'executeDestinationCheckConnection',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationCoreConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceOauthsOauthParamsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/oauth_params/create',
  tags: ['source_oauth'],
  summary:
    "Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.\n",
  operationId: 'setInstancewideSourceOauthParams',
  request: {
    body: {
      content: {
        'application/json': { schema: SetInstancewideSourceOauthParamsRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful' },
    400: ExceptionResponseResponse,
    404: NotFoundResponseResponse,
  },
})

export const postV1SourceOauthsGetConsentUrlRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/get_consent_url',
  tags: ['source_oauth'],
  summary:
    'Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.',
  operationId: 'getSourceOAuthConsent',
  request: {
    body: {
      content: { 'application/json': { schema: SourceOauthConsentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OAuthConsentReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceOauthsGetEmbeddedConsentUrlRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/get_embedded_consent_url',
  tags: ['source_oauth'],
  summary:
    'Given a source connector definition ID, return the URL to the consent screen where to redirect the user to. This endpoint is specific for the embedded widget, and does not allow configuring the oAuthInputConfiguration for security purposes.',
  operationId: 'getEmbeddedSourceOAuthConsent',
  request: {
    body: {
      content: { 'application/json': { schema: EmbeddedSourceOauthConsentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OAuthConsentReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorBuilderProjectsGetOauthConsentUrlRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/get_oauth_consent_url',
  tags: ['connector_builder_project'],
  summary:
    'Given a connector builder project ID, return the URL to the consent screen where to redirect the user to.',
  operationId: 'getConnectorBuilderProjectOAuthConsent',
  request: {
    body: {
      content: { 'application/json': { schema: BuilderProjectOauthConsentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OAuthConsentReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceOauthsCompleteOauthRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/complete_oauth',
  tags: ['source_oauth'],
  summary: 'Given a source def ID generate an access/refresh token etc.',
  operationId: 'completeSourceOAuth',
  request: {
    body: {
      content: { 'application/json': { schema: CompleteSourceOauthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CompleteOAuthResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorBuilderProjectsCompleteOauthRoute = createRoute({
  method: 'post',
  path: '/v1/connector_builder_projects/complete_oauth',
  tags: ['connector_builder_project'],
  summary: 'Given a builder project Id generate an access/refresh token etc.',
  operationId: 'completeConnectorBuilderProjectOauth',
  request: {
    body: {
      content: {
        'application/json': { schema: CompleteConnectorBuilderProjectOauthRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CompleteOAuthResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceOauthsRevokeRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/revoke',
  tags: ['source_oauth'],
  summary: 'Given a source definition ID and workspace ID revoke access/refresh token etc.',
  operationId: 'revokeSourceOAuthTokens',
  request: {
    body: {
      content: { 'application/json': { schema: RevokeSourceOauthTokensRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful operation' },
    400: ExceptionResponseResponse,
    404: NotFoundResponseResponse,
  },
})

export const postV1SourceOauthsGetScopesRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/get_scopes',
  tags: ['source_oauth'],
  summary: 'Given a source connector definition ID, return the default OAuth scopes.',
  operationId: 'getSourceOAuthScopes',
  request: {
    body: {
      content: { 'application/json': { schema: SourceOAuthScopesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceOAuthScopesReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationOauthsGetConsentUrlRoute = createRoute({
  method: 'post',
  path: '/v1/destination_oauths/get_consent_url',
  tags: ['destination_oauth'],
  summary:
    'Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.',
  operationId: 'getDestinationOAuthConsent',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationOauthConsentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OAuthConsentReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationOauthsCompleteOauthRoute = createRoute({
  method: 'post',
  path: '/v1/destination_oauths/complete_oauth',
  tags: ['destination_oauth'],
  summary: 'Given a destination def ID generate an access/refresh token etc.',
  operationId: 'completeDestinationOAuth',
  request: {
    body: {
      content: { 'application/json': { schema: CompleteDestinationOAuthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CompleteOAuthResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationOauthsOauthParamsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/destination_oauths/oauth_params/create',
  tags: ['destination_oauth'],
  summary:
    "Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.\n",
  operationId: 'setInstancewideDestinationOauthParams',
  request: {
    body: {
      content: {
        'application/json': { schema: SetInstancewideDestinationOauthParamsRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful' },
    400: ExceptionResponseResponse,
    404: NotFoundResponseResponse,
  },
})

export const postV1WebBackendCheckUpdatesRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/check_updates',
  tags: ['web_backend'],
  summary: 'Returns a summary of source and destination definitions that could be updated.',
  operationId: 'webBackendCheckUpdates',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendCheckUpdatesReadSchema } },
    },
  },
})

export const postV1WebBackendMappersValidateRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/mappers/validate',
  tags: ['web_backend'],
  summary: "Validates a draft set of mappers against a connection's configured streams",
  operationId: 'webBackendValidateMappers',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendValidateMappersRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendValidateMappersResponseSchema } },
    },
  },
})

export const postV1WebBackendConnectionsListRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/list',
  tags: ['web_backend'],
  summary: 'Returns all non-deleted connections for a workspace.',
  operationId: 'webBackendListConnectionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionListRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendConnectionsStatusCountsRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/status_counts',
  tags: ['web_backend'],
  summary: 'Returns aggregated connection status counts for a workspace.',
  operationId: 'webBackendGetConnectionStatusCounts',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionStatusCountsSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendConnectionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/get',
  tags: ['web_backend'],
  summary: 'Get a connection',
  operationId: 'webBackendGetConnection',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendConnectionsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/create',
  tags: ['web_backend'],
  summary: 'Create a connection',
  operationId: 'webBackendCreateConnection',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendConnectionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/update',
  tags: ['web_backend'],
  summary: 'Update a connection',
  description:
    "Apply a patch-style update to a connection. Only fields present on the update request body will be updated.\nAny operations that lack an ID will be created. Then, the newly created operationId will be applied to the\nconnection along with the rest of the operationIds in the request body.\nApply a patch-style update to a connection. Only fields present on the update request body will be updated.\nNote that if a catalog is present in the request body, the connection's entire catalog will be replaced\nwith the catalog from the request. This means that to modify a single stream, the entire new catalog\ncontaining the updated stream needs to be sent.\n",
  operationId: 'webBackendUpdateConnection',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendDescribeCronExpressionRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/describe_cron_expression',
  tags: ['web_backend'],
  summary: 'Returns a human-readable description of a CronTrigger expression',
  description:
    'Pass a Quartz CronTrigger expression to be validated and turned into a human-readable description.',
  operationId: 'webBackendDescribeCronExpression',
  request: {
    body: {
      content: {
        'application/json': { schema: WebBackendDescribeCronExpressionRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendCronExpressionDescriptionSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendStateGetTypeRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/state/get_type',
  tags: ['web_backend'],
  summary: 'Fetch the current state type for a connection.',
  operationId: 'getStateType',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStateTypeSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendWorkspaceStateRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/workspace/state',
  tags: ['web_backend'],
  summary: 'Returns the current state of a workspace',
  operationId: 'webBackendGetWorkspaceState',
  request: {
    body: { content: { 'application/json': { schema: WebBackendWorkspaceStateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendWorkspaceStateResultSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const getV1WebBackendConfigRoute = createRoute({
  method: 'get',
  path: '/v1/web_backend/config',
  tags: ['web_backend'],
  summary: 'Fetch webapp configuration',
  operationId: 'getWebappConfig',
  responses: {
    200: {
      description: 'Successfully returned webapp configuration.',
      content: { 'application/json': { schema: WebappConfigResponseSchema } },
    },
    401: { description: 'Webapp configuration failed.' },
  },
  security: [],
})

export const postV1JobsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/create',
  tags: ['jobs', 'internal'],
  summary:
    'Creates a new job for a given connection. If a job is already running for the connection, it will be stopped and a new job will be created.',
  operationId: 'createJob',
  request: {
    body: { content: { 'application/json': { schema: JobCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsJobSuccessWithAttemptNumberRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/job_success_with_attempt_number',
  tags: ['jobs', 'attempt', 'internal'],
  summary: 'For worker to mark an attempt as successful.',
  operationId: 'jobSuccessWithAttemptNumber',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: JobIdSchema,
              attemptNumber: AttemptNumberSchema,
              connectionId: ConnectionIdSchema,
              standardSyncOutput: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Absent when the attempt produced no output; the attempt still succeeds.',
                }),
            })
            .openapi({ required: ['jobId', 'attemptNumber', 'connectionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1JobsListRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/list',
  tags: ['jobs'],
  summary:
    'Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.',
  operationId: 'listJobsFor',
  request: {
    body: { content: { 'application/json': { schema: JobListRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsListForWorkspacesRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/list_for_workspaces',
  tags: ['jobs'],
  summary:
    'Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.',
  operationId: 'listJobsForWorkspaces',
  request: {
    body: {
      content: { 'application/json': { schema: JobListForWorkspacesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get',
  tags: ['jobs'],
  summary: 'Get information about a job',
  operationId: 'getJobInfo',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetLastReplicationJobRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_last_replication_job',
  tags: ['jobs'],
  summary: 'Get the latest job not including the cancel jobs.',
  operationId: 'getLastReplicationJob',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobOptionalReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetLastReplicationJobWithCancelRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_last_replication_job_with_cancel',
  tags: ['jobs', 'internal'],
  summary:
    "Get the latest job including the cancel jobs. This is used for scheduling in order to make sure that we don't immediately start a new job after a cancel.",
  operationId: 'getLastReplicationJobWithCancel',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobOptionalReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetWithoutLogsRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_without_logs',
  tags: ['jobs'],
  summary: 'Get information about a job excluding logs',
  operationId: 'getJobInfoWithoutLogs',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetLightRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_light',
  tags: ['jobs'],
  summary: 'Get information about a job excluding attempt info and logs',
  operationId: 'getJobInfoLight',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoLightReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsCancelRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/cancel',
  tags: ['jobs'],
  summary: 'Cancels a job',
  operationId: 'cancelJob',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetDebugInfoRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_debug_info',
  tags: ['jobs'],
  summary: 'Gets all information needed to debug this job',
  operationId: 'getJobDebugInfo',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobDebugInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetInputRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_input',
  tags: ['jobs', 'internal'],
  summary: 'Get the job input in order to be able to start a synchronization.',
  operationId: 'getJobInput',
  request: {
    body: { content: { 'application/json': { schema: SyncInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SyncJobInputReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1JobsFailNonTerminalRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/fail_non_terminal',
  tags: ['jobs', 'internal'],
  summary: 'Fails all non-terminal jobs for a connection',
  operationId: 'failNonTerminalJobs',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const postV1JobsReportJobStartRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/reportJobStart',
  tags: ['jobs', 'internal'],
  summary: 'For worker to report when a job starts.',
  operationId: 'reportJobStart',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ jobId: JobIdSchema, connectionId: ConnectionIdSchema })
            .openapi({ required: ['jobId', 'connectionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1JobsSetJobQueuedRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/setJobQueued',
  tags: ['jobs', 'internal'],
  summary: 'Set a job status to QUEUED when waiting for Data Worker capacity.',
  operationId: 'setJobQueued',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ jobId: JobIdSchema })
            .openapi({ title: 'SetJobQueuedRequest', required: ['jobId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1JobsCancelQueuedJobRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/cancelQueuedJob',
  tags: ['jobs', 'internal'],
  summary: 'Cancel a job that is still queued while waiting for capacity.',
  operationId: 'cancelQueuedJob',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ jobId: JobIdSchema })
            .openapi({ title: 'CancelQueuedJobRequest', required: ['jobId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1JobsCheckDataWorkerCapacityRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/checkDataWorkerCapacity',
  tags: ['jobs', 'internal'],
  summary: 'Check and reserve Data Worker capacity for a queued job.',
  operationId: 'checkDataWorkerCapacity',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: JobIdSchema,
              connectionId: ConnectionIdSchema,
              organizationId: OrganizationIdSchema,
            })
            .openapi({
              title: 'CheckDataWorkerCapacityRequest',
              required: ['jobId', 'connectionId', 'organizationId'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: CheckDataWorkerCapacityReadSchema } },
    },
  },
})

export const postV1JobsGetWebhookConfigRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/getWebhookConfig',
  tags: ['jobs', 'internal'],
  summary: 'Get a webhook config for a job.',
  operationId: 'getWebhookConfig',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64' }),
            })
            .openapi({ required: ['jobId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: z
            .object({ value: z.string() })
            .openapi({ title: 'GetWebhookConfigResponse', required: ['value'] }),
        },
      },
    },
  },
})

export const postV1JobsJobFailureRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/job_failure',
  tags: ['jobs', 'internal'],
  summary: 'Marks a job as failed',
  operationId: 'jobFailure',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: JobIdSchema,
              attemptNumber: AttemptNumberSchema,
              connectionId: ConnectionIdSchema,
              reason: z.string().openapi({ description: 'Reason of the failure' }),
            })
            .openapi({ required: ['jobId', 'attemptNumber', 'connectionId', 'reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1JobsDeleteStreamResetRecordsRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/delete_stream_reset_records',
  tags: ['jobs', 'internal'],
  summary: 'Deletes all stream reset records for the specified job',
  operationId: 'deleteStreamResetRecordsForJob',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ connectionId: ConnectionIdSchema, jobId: JobIdSchema })
            .openapi({ required: ['connectionId', 'jobId'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Successfully delete stream reset records for job' } },
})

export const postV1JobsExplainRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/explain',
  tags: ['jobs', 'internal'],
  summary: 'Returns a LLM generated description of the result of a given job',
  operationId: 'explainJob',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobExplainReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsEvaluateOutlierRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/evaluate_outlier',
  tags: ['jobs', 'internal'],
  summary: 'evaluate if a job is an outlier',
  operationId: 'evaluateOutlier',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1JobsFinalizeRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/finalize',
  tags: ['jobs', 'internal'],
  summary: 'finalizes a job',
  operationId: 'finalizeJob',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1UsersGetRoute = createRoute({
  method: 'post',
  path: '/v1/users/get',
  tags: ['user'],
  summary: 'Find Airbyte user by internal user ID',
  operationId: 'getUser',
  request: {
    body: { content: { 'application/json': { schema: UserIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: UserReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UsersGetByAuthIdRoute = createRoute({
  method: 'post',
  path: '/v1/users/get_by_auth_id',
  tags: ['user'],
  summary: 'Find Airbyte user by auth id',
  operationId: 'getUserByAuthId',
  request: {
    body: {
      content: { 'application/json': { schema: UserAuthIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: UserReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UsersGetByEmailRoute = createRoute({
  method: 'post',
  path: '/v1/users/get_by_email',
  tags: ['user'],
  summary: 'Find Airbyte user by email',
  operationId: 'getUserByEmail',
  request: {
    body: {
      content: { 'application/json': { schema: UserEmailRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: UserReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UsersGetOrCreateByAuthIdRoute = createRoute({
  method: 'post',
  path: '/v1/users/get_or_create_by_auth_id',
  tags: ['user'],
  summary: 'Find Airbyte user by auth id. If not existed, will create a user.',
  operationId: 'getOrCreateUserByAuthId',
  request: {
    body: {
      content: { 'application/json': { schema: UserAuthIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: UserGetOrCreateByAuthIdResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UsersUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/users/update',
  tags: ['user'],
  summary: 'Update user state',
  operationId: 'updateUser',
  request: {
    body: { content: { 'application/json': { schema: UserUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: UserReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UsersDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/users/delete',
  tags: ['user'],
  summary: 'Deletes a user',
  operationId: 'deleteUser',
  request: {
    body: { content: { 'application/json': { schema: UserIdRequestBodySchema } }, required: true },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UsersListAccessInfoByWorkspaceIdRoute = createRoute({
  method: 'post',
  path: '/v1/users/list_access_info_by_workspace_id',
  tags: ['user'],
  summary: 'List user access info for a particular workspace.',
  operationId: 'listAccessInfoByWorkspaceId',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceUserAccessInfoReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UsersListByOrganizationIdRoute = createRoute({
  method: 'post',
  path: '/v1/users/list_by_organization_id',
  tags: ['user'],
  summary: 'List all users with permissions of the given org',
  operationId: 'listUsersInOrganization',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully retrieved users under the given org id.',
      content: { 'application/json': { schema: OrganizationUserReadListSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1UsersListInstanceAdminRoute = createRoute({
  method: 'post',
  path: '/v1/users/list_instance_admin',
  tags: ['user'],
  summary:
    'List all users with instance admin permissions. Only instance admin has permission to call this.',
  operationId: 'listInstanceAdminUsers',
  responses: {
    200: {
      description: 'List all instance admin users.',
      content: { 'application/json': { schema: UserWithPermissionInfoReadListSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1PermissionsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/create',
  tags: ['permission'],
  summary: 'Creates a permission resource',
  operationId: 'createPermission',
  request: {
    body: { content: { 'application/json': { schema: PermissionCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PermissionReadSchema } },
    },
    422: ExceptionResponseResponse,
  },
})

export const postV1PermissionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/get',
  tags: ['permission'],
  summary: 'Find a permission by ID',
  operationId: 'getPermission',
  request: {
    body: {
      content: { 'application/json': { schema: PermissionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PermissionReadSchema } },
    },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1PermissionsCheckRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/check',
  tags: ['permission'],
  summary: 'Check permissions for user',
  operationId: 'checkPermissions',
  request: {
    body: {
      content: { 'application/json': { schema: PermissionCheckRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PermissionCheckReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1PermissionsCheckMultipleWorkspacesRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/check_multiple_workspaces',
  tags: ['permission'],
  summary: 'Check permissions for user across workspaces',
  operationId: 'checkPermissionsAcrossMultipleWorkspaces',
  request: {
    body: {
      content: { 'application/json': { schema: PermissionsCheckMultipleWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PermissionCheckReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1PermissionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/update',
  tags: ['permission'],
  summary: 'Updates a permission resource',
  operationId: 'updatePermission',
  request: {
    body: { content: { 'application/json': { schema: PermissionUpdateSchema } }, required: true },
  },
  responses: {
    204: { description: 'Successful operation' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SecretsPersistenceConfigGetRoute = createRoute({
  method: 'post',
  path: '/v1/secrets_persistence_config/get',
  tags: ['secrets_persistence_config'],
  summary: 'Get secrets persistence config',
  operationId: 'getSecretsPersistenceConfig',
  request: {
    body: {
      content: { 'application/json': { schema: SecretPersistenceConfigGetRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SecretPersistenceConfigSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SecretsPersistenceConfigCreateOrUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/secrets_persistence_config/create_or_update',
  tags: ['secrets_persistence_config'],
  summary: 'Create or update secrets persistence config',
  operationId: 'createOrUpdateSecretsPersistenceConfig',
  request: {
    body: {
      content: {
        'application/json': { schema: CreateOrUpdateSecretsPersistenceConfigRequestBodySchema },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful operation' }, 422: InvalidInputResponseResponse },
})

export const postV1SecretStorageCreateRoute = createRoute({
  method: 'post',
  path: '/v1/secret_storage/create',
  tags: ['secret_storage'],
  summary: 'Create secret storage',
  operationId: 'createSecretStorage',
  request: {
    body: {
      content: { 'application/json': { schema: SecretStorageCreateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SecretStorageReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SecretStorageListRoute = createRoute({
  method: 'post',
  path: '/v1/secret_storage/list',
  tags: ['secret_storage'],
  summary: 'List all secret storages for a given scope',
  operationId: 'listSecretStorage',
  request: {
    body: {
      content: { 'application/json': { schema: SecretStorageListRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SecretStorageReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SecretStorageDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/secret_storage/delete',
  tags: ['secret_storage'],
  summary: 'Delete secret storage by its id',
  operationId: 'deleteSecretStorage',
  request: {
    body: {
      content: { 'application/json': { schema: SecretStorageIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful operation' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SecretStorageGetRoute = createRoute({
  method: 'post',
  path: '/v1/secret_storage/get',
  tags: ['secret_storage'],
  summary: 'Get secret storage by its id',
  operationId: 'getSecretStorage',
  request: {
    body: {
      content: { 'application/json': { schema: SecretStorageIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SecretStorageReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SecretStorageMigrateRoute = createRoute({
  method: 'post',
  path: '/v1/secret_storage/migrate',
  tags: ['secret_storage'],
  summary: 'Migrate from one secret storage to another',
  operationId: 'migrateSecretStorage',
  request: {
    body: {
      content: { 'application/json': { schema: MigrateSecretStorageRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful operation' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1PermissionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/delete',
  tags: ['permission'],
  summary: 'Deletes a permission resource',
  operationId: 'deletePermission',
  request: {
    body: {
      content: { 'application/json': { schema: PermissionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1PermissionsDeleteUserFromWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/delete_user_from_workspace',
  tags: ['permission'],
  summary: 'Deletes all workspace-level permissions for a particular user and workspace',
  operationId: 'deleteUserFromWorkspace',
  request: {
    body: {
      content: {
        'application/json': { schema: PermissionDeleteUserFromWorkspaceRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1PermissionsListByUserRoute = createRoute({
  method: 'post',
  path: '/v1/permissions/list_by_user',
  tags: ['permission'],
  summary: 'List permissions a user has access to',
  operationId: 'listPermissionsByUser',
  request: {
    body: { content: { 'application/json': { schema: UserIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PermissionReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const getV1HealthRoute = createRoute({
  method: 'get',
  path: '/v1/health',
  tags: ['health'],
  summary: 'Health Check',
  operationId: 'getHealthCheck',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: HealthCheckReadSchema } },
    },
  },
  security: [],
})

export const getV1OpenapiRoute = createRoute({
  method: 'get',
  path: '/v1/openapi',
  tags: ['openapi'],
  summary: 'Returns the openapi specification',
  operationId: 'getOpenApiSpec',
  responses: {
    200: {
      description: 'Returns the openapi specification file',
      content: { 'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const postV1AttemptCreateNewAttemptNumberRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/create_new_attempt_number',
  tags: ['attempt', 'internal'],
  summary: 'For worker to create a new attempt number.',
  operationId: 'createNewAttemptNumber',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ jobId: JobIdSchema }).openapi({ required: ['jobId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: z
            .object({ attemptNumber: AttemptNumberSchema })
            .openapi({ title: 'CreateNewAttemptNumberResponse', required: ['attemptNumber'] }),
        },
      },
    },
  },
})

export const postV1AttemptSaveStreamMetadataRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/save_stream_metadata',
  tags: ['attempt', 'internal'],
  summary: 'Save stream level attempt information',
  operationId: 'saveStreamMetadata',
  request: {
    body: {
      content: { 'application/json': { schema: SaveStreamAttemptMetadataRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1AttemptSaveStatsRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/save_stats',
  tags: ['attempt', 'internal'],
  summary: 'For worker to set sync stats of a running attempt.',
  operationId: 'saveStats',
  request: {
    body: {
      content: { 'application/json': { schema: SaveStatsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1AttemptSaveSyncConfigRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/save_sync_config',
  tags: ['attempt', 'internal'],
  summary: 'For worker to save the AttemptSyncConfig for an attempt.',
  operationId: 'saveSyncConfig',
  request: {
    body: {
      content: { 'application/json': { schema: SaveAttemptSyncConfigRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1AttemptFailRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/fail',
  tags: ['attempt', 'internal'],
  summary: 'Fails an attempt with a failure summary and if provided a sync output.',
  operationId: 'failAttempt',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: JobIdSchema,
              attemptNumber: AttemptNumberSchema,
              failureSummary: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Attempt failure summary serialized as a raw object' }),
              standardSyncOutput: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Sync output serialized as a raw object' }),
            })
            .openapi({ required: ['jobId', 'attemptNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Successfully failed attempt' } },
})

export const postV1AttemptGetCombinedStatsRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/get_combined_stats',
  tags: ['attempt', 'internal'],
  summary: 'For retrieving combined stats for a single attempt',
  operationId: 'getAttemptCombinedStats',
  request: {
    body: {
      content: { 'application/json': { schema: GetAttemptStatsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: AttemptStatsSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1AttemptGetForJobRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/get_for_job',
  tags: ['attempt', 'internal'],
  summary: 'Retrieves an attempt with logs for a job and attempt number.',
  operationId: 'getAttemptForJob',
  request: {
    body: {
      content: { 'application/json': { schema: GetAttemptStatsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: AttemptInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1StreamStatusesListRoute = createRoute({
  method: 'post',
  path: '/v1/stream_statuses/list',
  tags: ['stream_statuses', 'streams'],
  summary: 'Gets a list of stream statuses filtered by parameters (with AND semantics).',
  operationId: 'getStreamStatuses',
  request: {
    body: { content: { 'application/json': { schema: StreamStatusListRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully queried stream statuses.',
      content: { 'application/json': { schema: StreamStatusReadListSchema } },
    },
  },
})

export const postV1StreamStatusesLatestPerRunStateRoute = createRoute({
  method: 'post',
  path: '/v1/stream_statuses/latest_per_run_state',
  tags: ['stream_statuses', 'streams'],
  summary:
    'Gets a list of the latest stream status for each stream and run state for a connection.',
  operationId: 'getStreamStatusesByRunState',
  request: { body: { content: { 'application/json': { schema: ConnectionIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successfully queried stream statuses.',
      content: { 'application/json': { schema: StreamStatusReadListSchema } },
    },
  },
})

export const postV1StreamStatusesCreateRoute = createRoute({
  method: 'post',
  path: '/v1/stream_statuses/create',
  tags: ['stream_statuses', 'streams'],
  summary: 'Creates a stream status.',
  operationId: 'createStreamStatus',
  request: {
    body: { content: { 'application/json': { schema: StreamStatusCreateRequestBodySchema } } },
  },
  responses: {
    201: {
      description: 'Successfully created stream status.',
      content: { 'application/json': { schema: StreamStatusReadSchema } },
    },
  },
})

export const postV1StreamStatusesUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/stream_statuses/update',
  tags: ['stream_statuses', 'streams'],
  summary: 'Updates a stream status.',
  operationId: 'updateStreamStatus',
  request: {
    body: { content: { 'application/json': { schema: StreamStatusUpdateRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully updated stream status.',
      content: { 'application/json': { schema: StreamStatusReadSchema } },
    },
    201: {
      description: 'Successfully created stream status.',
      content: { 'application/json': { schema: StreamStatusReadSchema } },
    },
  },
})

export const getV1InstanceConfigurationRoute = createRoute({
  method: 'get',
  path: '/v1/instance_configuration',
  tags: ['instance_configuration'],
  summary: 'Get instance configuration',
  operationId: 'getInstanceConfiguration',
  responses: {
    200: {
      description: 'Successfully returned instance configuration.',
      content: { 'application/json': { schema: InstanceConfigurationResponseSchema } },
    },
    401: { description: 'Fetching instance configuration failed.' },
  },
})

export const postV1InstanceConfigurationSetupRoute = createRoute({
  method: 'post',
  path: '/v1/instance_configuration/setup',
  tags: ['instance_configuration'],
  summary: 'Setup an instance with user and organization information.',
  operationId: 'setupInstanceConfiguration',
  request: {
    body: {
      content: { 'application/json': { schema: InstanceConfigurationSetupRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successfully setup instance.',
      content: { 'application/json': { schema: InstanceConfigurationResponseSchema } },
    },
    401: { description: 'Instance setup failed.' },
  },
})

export const postV1JobsRetryStatesCreateOrUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/retry_states/create_or_update',
  tags: ['job_retry_states'],
  summary: 'Creates or updates a retry state for a job.',
  operationId: 'createOrUpdate',
  request: {
    body: { content: { 'application/json': { schema: JobRetryStateRequestBodySchema } } },
  },
  responses: { 204: { description: 'Successfully put retry state.' } },
})

export const postV1JobsRetryStatesGetRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/retry_states/get',
  tags: ['job_retry_states'],
  summary: 'Gets a retry state.',
  operationId: 'get',
  request: { body: { content: { 'application/json': { schema: JobIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successfully retrieved retry state for a job.',
      content: { 'application/json': { schema: RetryStateReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1JobsDidPreviousJobSucceedRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/did_previous_job_succeed',
  tags: ['jobs', 'internal'],
  summary: 'Returns whether the job preceding the specified job succeeded',
  operationId: 'didPreviousJobSucceed',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionJobRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: BooleanReadSchema } },
    },
  },
})

export const postV1JobsPersistCancellationRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/persist_cancellation',
  tags: ['jobs', 'internal'],
  summary:
    'Persists the cancellation of a job and kicks off any post processing (e.g notifications).',
  operationId: 'persistJobCancellation',
  request: {
    body: { content: { 'application/json': { schema: PersistCancelJobRequestBodySchema } } },
  },
  responses: { 204: { description: 'Successfully persisted the job cancellation.' } },
})

export const postV1BillingCustomerPortalRoute = createRoute({
  method: 'post',
  path: '/v1/billing/customer_portal',
  tags: ['billing', 'cloud-only'],
  summary: 'Get a link to the customer portal',
  operationId: 'getCustomerPortalLink',
  request: {
    body: { content: { 'application/json': { schema: CustomerPortalRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully got customer portal session',
      content: { 'application/json': { schema: CustomerPortalReadSchema } },
    },
  },
})

export const postV1BillingBackfillUsageRoute = createRoute({
  method: 'post',
  path: '/v1/billing/backfill_usage',
  tags: ['billing', 'cloud-only'],
  summary: 'Backfill usage',
  operationId: 'backfillUsage',
  request: {
    body: { content: { 'application/json': { schema: BillingBackfillUsageRequestSchema } } },
  },
  responses: { 200: { description: 'Successfully backfilled data' } },
})

export const postV1BillingHandleWebhookRoute = createRoute({
  method: 'post',
  path: '/v1/billing/handle_webhook',
  tags: ['billing', 'cloud-only'],
  summary:
    'Handle an external billing event (ie a webhook from an external payment provider service)',
  operationId: 'handleWebhook',
  request: { body: { content: { 'application/json': { schema: BillingEventSchema } } } },
  responses: {
    200: { description: 'Successful operation' },
    400: { description: 'Invalid payload' },
    401: { description: 'Invalid signature' },
  },
  security: [],
})

export const postV1BillingListInvoicesRoute = createRoute({
  method: 'post',
  path: '/v1/billing/list_invoices',
  tags: ['billing', 'cloud-only'],
  summary: 'Get a list of past invoices of the customer',
  operationId: 'listPastInvoices',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully retrieved list of invoices',
      content: { 'application/json': { schema: ListInvoicesReadSchema } },
    },
  },
})

export const postV1BillingPaymentInformationRoute = createRoute({
  method: 'post',
  path: '/v1/billing/payment_information',
  tags: ['billing', 'cloud-only'],
  summary: 'Get a summary of payment information for a specific organization',
  operationId: 'getPaymentInformation',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    200: {
      description: "Successfully got organization's payment information",
      content: { 'application/json': { schema: PaymentInformationReadSchema } },
    },
  },
})

export const postV1BillingSubscriptionInfoRoute = createRoute({
  method: 'post',
  path: '/v1/billing/subscription_info',
  tags: ['billing', 'cloud-only'],
  summary: "Get the current information about the organization's subscription",
  operationId: 'getSubscriptionInfo',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully got organization subscription info',
      content: { 'application/json': { schema: OrganizationSubscriptionInfoReadSchema } },
    },
  },
})

export const postV1BillingTrialStatusRoute = createRoute({
  method: 'post',
  path: '/v1/billing/trial_status',
  tags: ['billing', 'cloud-only'],
  summary: 'Get the current trial status of an organization',
  operationId: 'getOrganizationTrialStatus',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully retrieved the trial status',
      content: { 'application/json': { schema: OrganizationTrialStatusReadSchema } },
    },
  },
})

export const postV1BillingCancelSubscriptionRoute = createRoute({
  method: 'post',
  path: '/v1/billing/cancel_subscription',
  tags: ['billing', 'cloud-only'],
  summary: 'Schedule canceling the subscription of an organization',
  operationId: 'cancelSubscription',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully scheduled cancelation of the subscription',
      content: { 'application/json': { schema: CancelSubscriptionReadSchema } },
    },
  },
})

export const postV1BillingUnscheduleCancelSubscriptionRoute = createRoute({
  method: 'post',
  path: '/v1/billing/unschedule_cancel_subscription',
  tags: ['billing', 'cloud-only'],
  summary: 'Unschedule a scheduled cancelation of the subscription of an organization',
  operationId: 'unscheduleCancelSubscription',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: { 204: { description: 'Successfully unscheduled cancelation of the subscription' } },
})

export const postV1BillingUnschedulePlanChangeRoute = createRoute({
  method: 'post',
  path: '/v1/billing/unschedule_plan_change',
  tags: ['billing', 'cloud-only'],
  summary: 'Unschedule a scheduled plan change of the subscription of an organization',
  operationId: 'unschedulePlanChange',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    204: { description: 'Successfully unscheduled the plan change of the subscription' },
  },
})

export const postV1BillingDisableDelinquentWorkspacesRoute = createRoute({
  method: 'post',
  path: '/v1/billing/disable_delinquent_workspaces',
  tags: ['billing', 'cloud-only'],
  summary: 'Disable connections in workspaces that are delinquent in payment',
  operationId: 'disableDelinquentWorkspaces',
  responses: { 200: { description: 'Success' } },
})

export const postV1BillingNotificationSettingsGetRoute = createRoute({
  method: 'post',
  path: '/v1/billing/notification_settings/get',
  tags: ['billing_notification_settings', 'billing', 'cloud-only'],
  summary: 'Get the billing notification settings for an organization',
  operationId: 'getBillingNotificationSettings',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: BillingNotificationSettingsReadSchema } },
    },
    400: { description: 'The organization id is missing or malformed' },
    403: { description: 'The caller is not an admin of the organization' },
  },
})

export const postV1BillingNotificationSettingsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/billing/notification_settings/update',
  tags: ['billing_notification_settings', 'billing', 'cloud-only'],
  summary: 'Create or update the billing notification settings for an organization',
  operationId: 'updateBillingNotificationSettings',
  request: {
    body: {
      content: {
        'application/json': { schema: BillingNotificationSettingsUpdateRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: BillingNotificationSettingsReadSchema } },
    },
    400: {
      description:
        'A required field is missing, a threshold is below zero, or the recipient email is malformed or longer than 256 characters',
    },
    403: { description: 'The caller is not an admin of the organization' },
  },
})

export const getV1OrganizationPaymentConfigOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/v1/organization_payment_config/{organizationId}',
  tags: ['organization_payment_config', 'billing', 'cloud-only', 'admin-api'],
  summary: 'Get an organization payment config',
  operationId: 'getOrganizationPaymentConfig',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the organization payment config',
      content: { 'application/json': { schema: OrganizationPaymentConfigReadSchema } },
    },
  },
})

export const postV1OrganizationPaymentConfigRoute = createRoute({
  method: 'post',
  path: '/v1/organization_payment_config',
  tags: ['organization_payment_config', 'billing', 'cloud-only', 'admin-api'],
  summary: 'Create or update an organization payment config',
  operationId: 'updateOrganizationPaymentConfig',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationPaymentConfigUpdateRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Updated the organization payment config',
      content: { 'application/json': { schema: OrganizationPaymentConfigReadSchema } },
    },
    404: { description: "Couldn't find the organization id" },
  },
})

export const postV1OrganizationPaymentConfigOrganizationIdEndGracePeriodRoute = createRoute({
  method: 'post',
  path: '/v1/organization_payment_config/{organizationId}/end_grace_period',
  tags: ['organization_payment_config', 'billing', 'cloud-only', 'admin-api'],
  summary: 'End a grace period for an organization',
  operationId: 'endGracePeriod',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful operation' },
    404: { description: "Couldn't find the organization id" },
    409: { description: 'The organization is not in a valid state to end the grace period' },
  },
})

export const postV1OrganizationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/get',
  tags: ['organization'],
  summary: 'Get an organization info',
  operationId: 'getOrganization',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIdRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully retrieved organization info.',
      content: { 'application/json': { schema: OrganizationReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1OrganizationsGetSemanticSearchEnablementRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/get_semantic_search_enablement',
  tags: ['organization_semantic_search', 'cloud-only'],
  summary: 'Get organization semantic search enablement',
  description:
    'Read the saved semantic search setting. Requires access to the organization or one of its workspaces.',
  operationId: 'getOrganizationSemanticSearchEnablement',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The saved semantic search setting, including false when disabled.',
      content: { 'application/json': { schema: OrganizationSemanticSearchEnablementReadSchema } },
    },
    400: {
      description: 'Required request fields are missing or null, or organizationId is invalid.',
    },
    401: { description: 'Authentication required.' },
    403: { description: 'The caller cannot access this organization.' },
    404: { description: 'The organization does not exist or has been deleted.' },
  },
})

export const postV1OrganizationsUpdateSemanticSearchEnablementRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/update_semantic_search_enablement',
  tags: ['organization_semantic_search', 'cloud-only'],
  summary: 'Update organization semantic search enablement',
  description:
    'Organization admins only. Stores the setting without accepting terms, enforcing search access, or deleting indexes.',
  operationId: 'updateOrganizationSemanticSearchEnablement',
  request: {
    body: {
      content: {
        'application/json': { schema: OrganizationSemanticSearchEnablementUpdateRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated semantic search setting.',
      content: { 'application/json': { schema: OrganizationSemanticSearchEnablementReadSchema } },
    },
    400: {
      description: 'Required request fields are missing or null, or organizationId is invalid.',
    },
    401: { description: 'Authentication required.' },
    403: { description: 'Organization admin permission required.' },
    404: { description: 'The organization does not exist or has been deleted.' },
  },
})

export const postV1OrganizationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/create',
  tags: ['organization'],
  summary: 'Create an organization',
  operationId: 'createOrganization',
  request: {
    body: { content: { 'application/json': { schema: OrganizationCreateRequestBodySchema } } },
  },
  responses: {
    201: {
      description: 'Successfully created organization.',
      content: { 'application/json': { schema: OrganizationReadSchema } },
    },
  },
})

export const postV1OrganizationsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/update',
  tags: ['organization'],
  summary: 'Update an organization info',
  operationId: 'updateOrganization',
  request: {
    body: { content: { 'application/json': { schema: OrganizationUpdateRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully updated organization info.',
      content: { 'application/json': { schema: OrganizationReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1OrganizationsAgenticStatusRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/agentic_status',
  tags: ['organization', 'cloud-only', 'admin-api'],
  summary: 'Set whether an organization is agentic',
  operationId: 'setOrganizationAgenticStatus',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationAgenticStatusUpdateRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated organization agentic status.',
      content: { 'application/json': { schema: OrganizationReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1OrganizationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/delete',
  tags: ['organization'],
  summary: 'Delete an organization',
  operationId: 'deleteOrganization',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully deleted organization.' },
    404: NotFoundResponseResponse,
  },
})

export const postV1OrganizationsListByUserIdRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/list_by_user_id',
  tags: ['organization'],
  summary:
    'List organizations by a given user id. The function also supports searching by keyword and pagination.',
  operationId: 'listOrganizationsByUser',
  request: {
    body: { content: { 'application/json': { schema: ListOrganizationsByUserRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully retrieved organizations by given user id.',
      content: { 'application/json': { schema: OrganizationReadListSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1OrganizationsGetUsageRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/get_usage',
  tags: ['organization', 'cloud-only'],
  summary: 'Get usage for an organization',
  operationId: 'getOrganizationUsage',
  request: {
    body: { content: { 'application/json': { schema: OrganizationUsageRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OrganizationUsageReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1OrganizationsGetDataWorkerUsageRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/get_data_worker_usage',
  tags: ['organization'],
  summary: 'Get data worker usage for an organization',
  operationId: 'getOrganizationDataWorkerUsage',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationDataWorkerUsageRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OrganizationDataWorkerUsageReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1OrganizationsListSummariesRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/list_summaries',
  tags: ['organization'],
  summary:
    'Retrieve a paginated list of organizations with an optional filter, containing a summary of various org data',
  operationId: 'listOrganizationSummaries',
  request: {
    body: {
      content: { 'application/json': { schema: ListOrganizationSummariesRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ListOrganizationSummariesResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1OrganizationsGetOrganizationInfoRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/get_organization_info',
  tags: ['organization'],
  summary:
    "Retrieve an organization's basic organization info that is accessible for all organization members.",
  operationId: 'getOrgInfo',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OrganizationInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsListRoute = createRoute({
  method: 'post',
  path: '/v1/groups/list',
  tags: ['group'],
  summary: 'List groups in an organization',
  operationId: 'listGroups',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved groups.',
      content: { 'application/json': { schema: GroupReadListSchema } },
    },
    403: ForbiddenResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsGetRoute = createRoute({
  method: 'post',
  path: '/v1/groups/get',
  tags: ['group'],
  summary: 'Get a group',
  operationId: 'getGroup',
  request: {
    body: { content: { 'application/json': { schema: GroupIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully retrieved group.',
      content: { 'application/json': { schema: GroupReadSchema } },
    },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/groups/create',
  tags: ['group'],
  summary: 'Create a group',
  operationId: 'createGroup',
  request: {
    body: { content: { 'application/json': { schema: GroupCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully created group.',
      content: { 'application/json': { schema: GroupReadSchema } },
    },
    400: { description: 'The group name or description failed validation.' },
    403: ForbiddenResponseResponse,
    409: { description: 'A group with the same name already exists in the organization.' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/groups/update',
  tags: ['group'],
  summary: 'Update a group',
  description:
    'Replaces the mutable fields of the group. Send the whole object: an omitted description is treated as an explicit null and clears the stored description.',
  operationId: 'updateGroup',
  request: {
    body: { content: { 'application/json': { schema: GroupUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully updated group.',
      content: { 'application/json': { schema: GroupReadSchema } },
    },
    400: { description: 'The group name or description failed validation.' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: { description: 'The name is already taken, or SCIM manages the group.' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/groups/delete',
  tags: ['group'],
  summary: 'Delete a group',
  operationId: 'deleteGroup',
  request: {
    body: { content: { 'application/json': { schema: GroupIdRequestBodySchema } }, required: true },
  },
  responses: {
    204: { description: 'Successfully deleted group.' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: { description: 'SCIM manages the group.' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsListMembersRoute = createRoute({
  method: 'post',
  path: '/v1/groups/list_members',
  tags: ['group'],
  summary: 'List group members',
  operationId: 'listGroupMembers',
  request: {
    body: { content: { 'application/json': { schema: GroupIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully retrieved group members.',
      content: { 'application/json': { schema: GroupMemberReadListSchema } },
    },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsAddMemberRoute = createRoute({
  method: 'post',
  path: '/v1/groups/add_member',
  tags: ['group'],
  summary: 'Add a member to a group',
  operationId: 'addGroupMember',
  request: {
    body: {
      content: { 'application/json': { schema: GroupMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added group member.',
      content: { 'application/json': { schema: GroupMemberReadSchema } },
    },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: { description: 'The user is already a member, is inactive, or SCIM manages the group.' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupsRemoveMemberRoute = createRoute({
  method: 'post',
  path: '/v1/groups/remove_member',
  tags: ['group'],
  summary: 'Remove a member from a group',
  operationId: 'removeGroupMember',
  request: {
    body: {
      content: { 'application/json': { schema: GroupMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully removed group member.' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: { description: 'SCIM manages the group.' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupPermissionsListRoute = createRoute({
  method: 'post',
  path: '/v1/group_permissions/list',
  tags: ['group_permission'],
  summary: 'List group permissions',
  operationId: 'listGroupPermissions',
  request: {
    body: { content: { 'application/json': { schema: GroupIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully retrieved group permissions.',
      content: { 'application/json': { schema: GroupPermissionReadListSchema } },
    },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupPermissionsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/group_permissions/create',
  tags: ['group_permission'],
  summary: 'Create a group permission',
  operationId: 'createGroupPermission',
  request: {
    body: {
      content: { 'application/json': { schema: GroupPermissionCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created group permission.',
      content: { 'application/json': { schema: GroupPermissionReadSchema } },
    },
    400: { description: 'The scope is invalid, cross-organization, or missing.' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: { description: 'An equivalent group permission already exists.' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1GroupPermissionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/group_permissions/delete',
  tags: ['group_permission'],
  summary: 'Delete a group permission',
  operationId: 'deleteGroupPermission',
  request: {
    body: {
      content: { 'application/json': { schema: GroupPermissionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully deleted group permission.' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DomainVerificationsListPendingRoute = createRoute({
  method: 'post',
  path: '/v1/domain_verifications/list_pending',
  tags: ['domain_verifications', 'internal'],
  summary: 'Get all pending domain verifications',
  description: 'Internal endpoint to fetch all pending domain verifications for cron processing.',
  operationId: 'listPendingDomainVerifications',
  responses: {
    200: {
      description: 'List of pending domain verifications.',
      content: { 'application/json': { schema: DomainVerificationListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DomainVerificationsCheckRoute = createRoute({
  method: 'post',
  path: '/v1/domain_verifications/check',
  tags: ['domain_verifications', 'internal'],
  summary: 'Check domain verification',
  description: 'Perform DNS lookup and update verification status.',
  operationId: 'checkDomainVerification',
  request: {
    body: {
      content: { 'application/json': { schema: DomainVerificationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Domain verification check completed.',
      content: { 'application/json': { schema: DomainVerificationResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DeploymentMetadataRoute = createRoute({
  method: 'post',
  path: '/v1/deployment/metadata',
  tags: ['deployment_metadata'],
  summary: 'Provides the Airbyte deployment metadata.',
  operationId: 'getDeploymentMetadata',
  responses: {
    200: {
      description: 'The Airbyte deployment metadata.',
      content: { 'application/json': { schema: DeploymentMetadataReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1ApplicationsListRoute = createRoute({
  method: 'post',
  path: '/v1/applications/list',
  tags: ['applications'],
  summary: 'Returns all Applications for a User.',
  description: 'List Applications for a User.',
  operationId: 'listApplications',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApplicationReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ApplicationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/applications/delete',
  tags: ['applications'],
  summary: 'Deletes an Application.',
  description: 'Deletes an Application.',
  operationId: 'deleteApplication',
  request: {
    body: {
      content: { 'application/json': { schema: ApplicationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful operation' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ApplicationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/applications/create',
  tags: ['applications'],
  summary: 'Creates a new Application.',
  description: 'Creates a new Application.',
  operationId: 'createApplication',
  request: {
    body: { content: { 'application/json': { schema: ApplicationCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApplicationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ApplicationsTokenRoute = createRoute({
  method: 'post',
  path: '/v1/applications/token',
  tags: ['applications'],
  summary: 'Grant an Access Token for an Application.',
  description:
    'Takes the client_id and client_secret for an application and returns an Access Token.',
  operationId: 'applicationTokenRequest',
  request: {
    body: {
      content: { 'application/json': { schema: ApplicationTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: AccessTokenSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScopedConfigurationListRoute = createRoute({
  method: 'post',
  path: '/v1/scoped_configuration/list',
  tags: ['scoped_configuration'],
  summary: 'Get all scoped configurations with a given key',
  operationId: 'getScopedConfigurationsList',
  request: {
    body: { content: { 'application/json': { schema: ScopedConfigurationListRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'An array of scoped configurations',
      content: { 'application/json': { schema: ScopedConfigurationListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScopedConfigurationGetContextRoute = createRoute({
  method: 'post',
  path: '/v1/scoped_configuration/get_context',
  tags: ['scoped_configuration'],
  summary: 'Get related configurations for a given scope',
  operationId: 'getScopedConfigurationContext',
  request: {
    body: {
      content: { 'application/json': { schema: ScopedConfigurationContextRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'An array of scoped configurations',
      content: { 'application/json': { schema: ScopedConfigurationContextResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScopedConfigurationCreateRoute = createRoute({
  method: 'post',
  path: '/v1/scoped_configuration/create',
  tags: ['scoped_configuration'],
  summary: 'Create a new scoped configuration',
  operationId: 'createScopedConfiguration',
  request: {
    body: {
      content: { 'application/json': { schema: ScopedConfigurationCreateRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Newly created scoped configuration',
      content: { 'application/json': { schema: ScopedConfigurationCreateResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScopedConfigurationGetRoute = createRoute({
  method: 'post',
  path: '/v1/scoped_configuration/get',
  tags: ['scoped_configuration'],
  summary: 'Get a scoped configuration by ID',
  operationId: 'getScopedConfigurationById',
  request: {
    body: { content: { 'application/json': { schema: ScopedConfigurationReadRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'A Scoped configuration',
      content: { 'application/json': { schema: ScopedConfigurationReadResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScopedConfigurationUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/scoped_configuration/update',
  tags: ['scoped_configuration'],
  summary: 'Update a scoped configuration by ID',
  operationId: 'updateScopedConfiguration',
  request: {
    body: {
      content: { 'application/json': { schema: ScopedConfigurationUpdateRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Updated scoped configuration object',
      content: { 'application/json': { schema: ScopedConfigurationUpdateResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScopedConfigurationDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/scoped_configuration/delete',
  tags: ['scoped_configuration'],
  summary: 'Delete a scoped configuration by ID',
  operationId: 'deleteScopedConfiguration',
  request: {
    body: {
      content: { 'application/json': { schema: ScopedConfigurationDeleteRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Deleted scoped configuration object',
      content: { 'application/json': { schema: ScopedConfigurationDeleteResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutListRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/list',
  tags: ['connector_rollout'],
  summary:
    'Get all connector rollouts matching the provided actor definition ID & docker image version',
  operationId: 'getConnectorRolloutsList',
  request: {
    body: { content: { 'application/json': { schema: ConnectorRolloutListRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'An array of connector rollouts',
      content: { 'application/json': { schema: ConnectorRolloutListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutListByActorDefinitionIdRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/list_by_actor_definition_id',
  tags: ['connector_rollout'],
  summary: 'Get all connector rollouts matching the provided actor definition ID',
  operationId: 'getConnectorRolloutsListByActorDefinitionId',
  request: {
    body: {
      content: {
        'application/json': { schema: ConnectorRolloutListByActorDefinitionIdRequestBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'An array of connector rollouts',
      content: { 'application/json': { schema: ConnectorRolloutListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutListAllRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/list_all',
  tags: ['connector_rollout'],
  summary: 'Get all connector rollouts',
  operationId: 'getConnectorRolloutsListAll',
  responses: {
    200: {
      description: 'An array of connector rollouts',
      content: { 'application/json': { schema: ConnectorRolloutListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutGetRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/get',
  tags: ['connector_rollout'],
  summary: 'Get a connector rollout by actor definition ID and version',
  operationId: 'getConnectorRolloutById',
  request: {
    body: { content: { 'application/json': { schema: ConnectorRolloutReadRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'A connector rollout',
      content: { 'application/json': { schema: ConnectorRolloutReadResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutGetActorSyncInfoRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/get_actor_sync_info',
  tags: ['connector_rollout'],
  summary: 'Get a list of actors pinned to a release candidate, and information about their syncs',
  operationId: 'getConnectorRolloutActorSyncInfo',
  request: {
    body: {
      content: {
        'application/json': { schema: ConnectorRolloutGetActorSyncInfoRequestBodySchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'A list of actors pinned to the release candidate, and information about their syncs',
      content: { 'application/json': { schema: ConnectorRolloutActorSyncInfoResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutStartRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/start',
  tags: ['connector_rollout'],
  summary:
    'Start a connector rollout by ID. This will update the state of the rollout from INITIALIZED to WORKFLOW_STARTED, and add the Temporal run ID of the workflow to the rollout entry.',
  operationId: 'startConnectorRollout',
  request: {
    body: { content: { 'application/json': { schema: ConnectorRolloutStartRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Started connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutStartResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutRolloutRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/rollout',
  tags: ['connector_rollout'],
  summary:
    'Roll out a release candidate. This will pin the actors to the release candidate version ID.',
  operationId: 'doConnectorRollout',
  request: {
    body: { content: { 'application/json': { schema: ConnectorRolloutRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Updated connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutUpdateStateRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/update_state',
  tags: ['connector_rollout'],
  summary: 'Update rollout state',
  operationId: 'updateConnectorRolloutState',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorRolloutUpdateStateRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Updated connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutFinalizeRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/finalize',
  tags: ['connector_rollout'],
  summary:
    'Finalize a connector rollout by ID. This will unpin all actors that have been pinned to the release candidate version.',
  operationId: 'finalizeConnectorRollout',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorRolloutFinalizeRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Finalized connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutFinalizeResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutManualStartRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/manual_start',
  tags: ['connector_rollout'],
  summary:
    'Manually start a connector rollout workflow. This will update the state of the rollout from INITIALIZED to WORKFLOW_STARTED, and add the Temporal run ID of the workflow to the rollout entry.',
  operationId: 'manualStartConnectorRollout',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorRolloutManualStartRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Updated connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutStartResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutManualRolloutRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/manual_rollout',
  tags: ['connector_rollout'],
  summary:
    'Manually roll out a release candidate. This will pin the actors to the release candidate version ID.',
  operationId: 'manualDoConnectorRollout',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorRolloutManualRolloutRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Updated connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutManualRolloutResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutManualFinalizeRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/manual_finalize',
  tags: ['connector_rollout'],
  summary:
    'Manually finalize a connector rollout by ID. This will unpin all actors that have been pinned to the release candidate version.',
  operationId: 'manualFinalizeConnectorRollout',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorRolloutManualFinalizeRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Finalized connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutManualFinalizeResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectorRolloutManualPauseRoute = createRoute({
  method: 'post',
  path: '/v1/connector_rollout/manual_pause',
  tags: ['connector_rollout'],
  summary: 'Update rollout state to paused',
  operationId: 'manualPauseConnectorRollout',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectorRolloutUpdateStateRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Updated connector rollout object',
      content: { 'application/json': { schema: ConnectorRolloutResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1EntitlementsIsEntitledRoute = createRoute({
  method: 'post',
  path: '/v1/entitlements/is_entitled',
  tags: ['entitlements'],
  summary: 'Determine whether the organization is entitled to the specified resource',
  operationId: 'checkEntitlement',
  request: {
    body: { content: { 'application/json': { schema: OrganizationIsEntitledRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Whether the organization is entitled to the specified resource',
      content: { 'application/json': { schema: OrganizationIsEntitledResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1EntitlementsGetEntitlementsRoute = createRoute({
  method: 'post',
  path: '/v1/entitlements/get_entitlements',
  tags: ['entitlements'],
  summary: 'Gets a list of entitlements for the organization',
  operationId: 'getEntitlements',
  request: {
    body: {
      content: { 'application/json': { schema: GetEntitlementsByOrganizationIdRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of entitlements for the organization',
      content: { 'application/json': { schema: GetEntitlementsByOrganizationIdResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1EntitlementsListPlansRoute = createRoute({
  method: 'post',
  path: '/v1/entitlements/list_plans',
  tags: ['entitlements'],
  summary: 'List of all available entitlement plans',
  operationId: 'listAllEntitlementPlans',
  responses: {
    200: {
      description: 'A list of all available entitlement plans',
      content: { 'application/json': { schema: ListAllEntitlementPlansResponseSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1EntitlementsUpdatePlanRoute = createRoute({
  method: 'post',
  path: '/v1/entitlements/update_plan',
  tags: ['entitlements'],
  summary: "Update an organization's entitlement plan",
  operationId: 'updateOrganizationEntitlementPlan',
  request: {
    body: {
      content: {
        'application/json': { schema: UpdateOrganizationEntitlementPlanRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Organization plan updated successfully',
      content: { 'application/json': { schema: UpdateOrganizationEntitlementPlanResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1UserInvitationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/user_invitations/create',
  tags: ['user_invitation'],
  summary: 'Create a user invitation',
  operationId: 'createUserInvitation',
  request: {
    body: { content: { 'application/json': { schema: UserInvitationCreateRequestBodySchema } } },
  },
  responses: {
    201: {
      description: 'Successfully processed user invitation create request.',
      content: { 'application/json': { schema: UserInvitationCreateResponseSchema } },
    },
  },
})

export const getV1UserInvitationsByCodeInviteCodeRoute = createRoute({
  method: 'get',
  path: '/v1/user_invitations/by_code/{inviteCode}',
  tags: ['user_invitation'],
  summary: 'Get a user invitation by its unique code (not primary key ID)',
  operationId: 'getUserInvitation',
  request: {
    params: z.object({
      inviteCode: z
        .string()
        .openapi({
          param: {
            name: 'inviteCode',
            in: 'path',
            description: 'The invite code of the user invitation to get.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved user invitation.',
      content: { 'application/json': { schema: UserInvitationReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1UserInvitationsListPendingRoute = createRoute({
  method: 'post',
  path: '/v1/user_invitations/list_pending',
  tags: ['user_invitation'],
  summary: 'List pending invitations',
  operationId: 'listPendingInvitations',
  request: {
    body: { content: { 'application/json': { schema: UserInvitationListRequestBodySchema } } },
  },
  responses: {
    200: {
      description:
        'A list of pending user invitations, or an empty list if no invitations are found.',
      content: { 'application/json': { schema: z.array(UserInvitationAdminReadSchema) } },
    },
  },
})

export const postV1UserInvitationsAcceptRoute = createRoute({
  method: 'post',
  path: '/v1/user_invitations/accept',
  tags: ['user_invitation'],
  summary: 'Accept a user invitation',
  operationId: 'acceptUserInvitation',
  request: { body: { content: { 'application/json': { schema: InviteCodeRequestBodySchema } } } },
  responses: {
    201: {
      description: 'Successfully accepted user invitation.',
      content: { 'application/json': { schema: UserInvitationReadSchema } },
    },
  },
})

export const postV1UserInvitationsDeclineRoute = createRoute({
  method: 'post',
  path: '/v1/user_invitations/decline',
  tags: ['user_invitation'],
  summary: 'Decline a user invitation',
  operationId: 'declineUserInvitation',
  request: { body: { content: { 'application/json': { schema: InviteCodeRequestBodySchema } } } },
  responses: {
    201: {
      description: 'Successfully declined user invitation.',
      content: { 'application/json': { schema: UserInvitationReadSchema } },
    },
  },
})

export const postV1UserInvitationsCancelRoute = createRoute({
  method: 'post',
  path: '/v1/user_invitations/cancel',
  tags: ['user_invitation'],
  summary: 'Cancel a user invitation',
  operationId: 'cancelUserInvitation',
  request: {
    body: { content: { 'application/json': { schema: UserInvitationCancelRequestBodySchema } } },
  },
  responses: {
    201: {
      description: 'Successfully cancelled user invitation.',
      content: { 'application/json': { schema: UserInvitationAdminReadSchema } },
    },
  },
})

export const postV1TagsListRoute = createRoute({
  method: 'post',
  path: '/v1/tags/list',
  tags: ['tag'],
  summary: 'List tags in a workspace',
  operationId: 'listTags',
  request: { body: { content: { 'application/json': { schema: TagListRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successfully retrieved list of tags.',
      content: { 'application/json': { schema: z.array(TagSchema) } },
    },
  },
})

export const postV1TagsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/tags/update',
  tags: ['tag'],
  summary: 'Update a tag',
  operationId: 'updateTag',
  request: { body: { content: { 'application/json': { schema: TagUpdateRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successfully updated tag.',
      content: { 'application/json': { schema: TagSchema } },
    },
  },
})

export const postV1TagsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/tags/delete',
  tags: ['tag'],
  summary: 'Delete a tag',
  operationId: 'deleteTag',
  request: { body: { content: { 'application/json': { schema: TagDeleteRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successfully deleted tag.',
      content: { 'application/json': { schema: TagSchema } },
    },
  },
})

export const postV1TagsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/tags/create',
  tags: ['tag'],
  summary: 'Create a tag',
  operationId: 'createTag',
  request: { body: { content: { 'application/json': { schema: TagCreateRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successfully created tag.',
      content: { 'application/json': { schema: TagSchema } },
    },
  },
})

export const postV1DiagnosticToolGenerateReportRoute = createRoute({
  method: 'post',
  path: '/v1/diagnostic_tool/generate_report',
  tags: ['diagnostic_tool'],
  summary: 'Generate a diagnostic report',
  operationId: 'generateDiagnosticReport',
  request: {
    body: { content: { 'application/json': { schema: DiagnosticReportRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successfully generated diagnostic report',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SignalRoute = createRoute({
  method: 'post',
  path: '/v1/signal',
  tags: ['signal'],
  summary: 'Signal that an operation is terminal',
  operationId: 'signal',
  request: {
    body: { content: { 'application/json': { schema: SignalInputSchema } }, required: true },
  },
  responses: { 204: { description: 'Successful operation' }, 422: InvalidInputResponseResponse },
})

export const postV1CatalogsDiffRoute = createRoute({
  method: 'post',
  path: '/v1/catalogs/diff',
  tags: ['catalog'],
  summary: 'Compute the diff between two catalogs',
  operationId: 'diffCatalogs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              current_catalog_id: z
                .uuid()
                .openapi({ description: 'The ID of the current catalog' }),
              new_catalog_id: z.uuid().openapi({ description: 'The ID of the new catalog' }),
              connection_id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Optional connection ID for additional workspace validation and breaking change detection based on configured streams',
                }),
              persist_changes: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If true, persist the catalog changes to the connection (requires connection_id and WORKSPACE_EDITOR role). Updates breakingChange flag and status (set to INACTIVE if breaking change detected or if nonBreakingChangesPreference is DISABLE and there are any changes). Does not update sourceCatalogId or syncCatalog.',
                }),
            })
            .openapi({
              title: 'DiffCatalogsRequest',
              required: ['current_catalog_id', 'new_catalog_id'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              catalog_diff: CatalogDiffSchema,
              schema_change: SchemaChangeSchema,
              merged_catalog: AirbyteCatalogSchema.exactOptional().openapi({
                description:
                  "The new catalog merged with the connection's configuration. Only included when connection_id is provided in the request.",
              }),
            })
            .openapi({
              title: 'DiffCatalogsResponse',
              required: ['catalog_diff', 'schema_change'],
            }),
        },
      },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1CommandsRunCheckRoute = createRoute({
  method: 'post',
  path: '/v1/commands/run/check',
  tags: ['command', 'internal'],
  summary: 'Run a Check command for a Connector',
  description:
    'Expected input is an id and either an actor_id to run a check for an existing actor or an actor_definition_id, a workspace_id and a config to validate a config for a given actor definition.\n',
  operationId: 'runCheckCommand',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({ description: 'a command id which acts as an idempotency key.' }),
              workspace_id: z.uuid().exactOptional(),
              actor_id: z.uuid().exactOptional(),
              actor_definition_id: z.uuid().exactOptional(),
              config: z.object({}).exactOptional(),
              job_id: z.string().exactOptional().openapi({ description: 'internal usage' }),
              attempt_number: AttemptNumberSchema.exactOptional(),
              priority: z.string().exactOptional().openapi({ description: 'internal usage' }),
              signal_input: z.string().exactOptional().openapi({ description: 'internal usage' }),
            })
            .openapi({ title: 'RunCheckCommandRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'RunCheckCommandResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsRunDiscoverRoute = createRoute({
  method: 'post',
  path: '/v1/commands/run/discover',
  tags: ['command', 'internal'],
  summary: 'Run a Discover command for a Connector',
  operationId: 'runDiscoverCommand',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({ description: 'a command id which acts as an idempotency key.' }),
              actor_id: z.uuid(),
              jobId: z.string().exactOptional().openapi({ description: 'internal usage' }),
              attemptNumber: AttemptNumberSchema.exactOptional().openapi({
                description: 'internal usage',
              }),
              priority: z.string().exactOptional().openapi({ description: 'internal usage' }),
              signal_input: z.string().exactOptional().openapi({ description: 'internal usage' }),
            })
            .openapi({ title: 'RunDiscoverCommandRequest', required: ['id', 'actor_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'RunDiscoverCommandResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsRunConnectRoute = createRoute({
  method: 'post',
  path: '/v1/commands/run/connect',
  tags: ['command'],
  summary: 'Run a Connect command for a host and port',
  description:
    "Tests whether a TCP connection can be opened from the workspace's data plane to the given host and port.\n",
  operationId: 'runConnectCommand',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({ description: 'a command id which acts as an idempotency key.' }),
              workspace_id: z.uuid(),
              host: z.string().min(1).max(253),
              port: z.int().min(1).max(65535),
            })
            .openapi({
              title: 'RunConnectCommandRequest',
              required: ['id', 'workspace_id', 'host', 'port'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'RunConnectCommandResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsRunReplicateRoute = createRoute({
  method: 'post',
  path: '/v1/commands/run/replicate',
  tags: ['command', 'internal'],
  summary: 'Run a Replicate command for a Connection',
  operationId: 'runReplicateCommand',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({ description: 'a command id which acts as an idempotency key.' }),
              connection_id: z.uuid(),
              job_id: z.string().openapi({ description: 'internal usage' }),
              attempt_number: AttemptNumberSchema.openapi({ description: 'internal usage' }),
              applied_catalog_diff: CatalogDiffSchema.exactOptional().openapi({
                description: 'internal usage',
              }),
              signal_input: z.string().exactOptional().openapi({ description: 'internal usage' }),
            })
            .openapi({
              title: 'RunReplicateCommandRequest',
              required: ['id', 'connection_id', 'job_id', 'attempt_number'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'RunReplicateCommandResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsRunSpecRoute = createRoute({
  method: 'post',
  path: '/v1/commands/run/spec',
  tags: ['command', 'internal'],
  summary: 'Run a Spec command for a Connector',
  description:
    'Expected input is an id and either a docker_image and docker_image_tag to run spec for a custom connector or an actor_definition_id and docker_image_tag to run spec for a registered actor definition.\n',
  operationId: 'runSpecCommand',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({ description: 'a command id which acts as an idempotency key.' }),
              workspace_id: z.uuid(),
              docker_image: z
                .string()
                .exactOptional()
                .openapi({ description: 'the docker image (without tag) for a custom connector' }),
              docker_image_tag: z.string().openapi({ description: 'the docker image tag' }),
              actor_definition_id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'the actor definition id for a registered connector' }),
              signal_input: z.string().exactOptional().openapi({ description: 'internal usage' }),
            })
            .openapi({
              title: 'RunSpecCommandRequest',
              required: ['id', 'workspace_id', 'docker_image_tag'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'RunSpecCommandResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsOutputCheckRoute = createRoute({
  method: 'post',
  path: '/v1/commands/output/check',
  tags: ['command'],
  summary: 'Get the status of a check command',
  operationId: 'getCheckCommandOutput',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string(), with_logs: z.boolean().default(false).exactOptional() })
            .openapi({ title: 'CheckCommandOutputRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              status: z.enum(['succeeded', 'failed']).exactOptional(),
              connectorConfigurationUpdated: z.boolean().exactOptional(),
              message: z.string().exactOptional(),
              failureReason: FailureReasonSchema.exactOptional(),
              logs: JobLogsSchema.exactOptional(),
            })
            .openapi({ title: 'CheckCommandOutputResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsOutputConnectRoute = createRoute({
  method: 'post',
  path: '/v1/commands/output/connect',
  tags: ['command'],
  summary: 'Get the result of a connect command',
  description: 'Responds with a conflict problem while the command is still running.',
  operationId: 'getConnectCommandOutput',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'ConnectCommandOutputRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              reachable: z.boolean(),
              error_code: z.enum([
                'none',
                'dns_failed',
                'connection_refused',
                'timeout',
                'unknown',
              ]),
              message: z.string(),
              resolved_addresses: z.array(z.string()),
              connect_latency_ms: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64' }),
              failure_reason: FailureReasonSchema.exactOptional().openapi({
                description:
                  'Only set when the command failed for platform reasons rather than producing a probe result.',
              }),
            })
            .openapi({
              title: 'ConnectCommandOutputResponse',
              required: [
                'id',
                'reachable',
                'error_code',
                'message',
                'resolved_addresses',
                'connect_latency_ms',
              ],
            }),
        },
      },
    },
  },
})

export const postV1CommandsOutputDiscoverRoute = createRoute({
  method: 'post',
  path: '/v1/commands/output/discover',
  tags: ['command'],
  summary: 'Get the status of a discover command',
  operationId: 'getDiscoverCommandOutput',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string(), with_logs: z.boolean().default(false).exactOptional() })
            .openapi({ title: 'DiscoverCommandOutputRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              status: z.enum(['succeeded', 'failed']).exactOptional(),
              catalog: AirbyteCatalogSchema.exactOptional(),
              catalogId: z.uuid().exactOptional(),
              destinationCatalog: DestinationCatalogSchema.exactOptional(),
              catalogDiff: CatalogDiffSchema.exactOptional(),
              failureReason: FailureReasonSchema.exactOptional(),
              logs: JobLogsSchema.exactOptional(),
            })
            .openapi({ title: 'DiscoverCommandOutputResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsOutputReplicateRoute = createRoute({
  method: 'post',
  path: '/v1/commands/output/replicate',
  tags: ['command'],
  summary: 'Get the status of a replicate command',
  operationId: 'getReplicateCommandOutput',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'ReplicateCommandOutputRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              attempt_summary: z.object({}).exactOptional(),
              failures: z.array(FailureReasonSchema).exactOptional(),
              catalog: AirbyteCatalogSchema.exactOptional(),
            })
            .openapi({ title: 'ReplicateCommandOutputResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsOutputSpecRoute = createRoute({
  method: 'post',
  path: '/v1/commands/output/spec',
  tags: ['command'],
  summary: 'Get the output of a spec command',
  operationId: 'getSpecCommandOutput',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string(), with_logs: z.boolean().default(false).exactOptional() })
            .openapi({ title: 'SpecCommandOutputRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              status: z.enum(['succeeded', 'failed']).exactOptional(),
              spec: z.object({}).exactOptional(),
              failureReason: FailureReasonSchema.exactOptional(),
              logs: JobLogsSchema.exactOptional(),
            })
            .openapi({ title: 'SpecCommandOutputResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsStatusRoute = createRoute({
  method: 'post',
  path: '/v1/commands/status',
  tags: ['command'],
  summary: 'Get the status of command',
  operationId: 'getCommandStatus',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'CommandStatusRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              status: z.enum(['pending', 'running', 'completed', 'cancelled']).exactOptional(),
            })
            .openapi({ title: 'CommandStatusResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1CommandsGetRoute = createRoute({
  method: 'post',
  path: '/v1/commands/get',
  tags: ['command', 'internal'],
  summary: 'Get the a command record',
  operationId: 'getCommand',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'CommandGetRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              workload_id: z.string(),
              command_type: z.string(),
              command_input: z.string(),
              workspace_id: z.uuid(),
              organization_id: z.uuid(),
              created_at: z.iso.datetime({ offset: true }),
              updated_at: z.iso.datetime({ offset: true }),
            })
            .openapi({
              title: 'CommandGetResponse',
              required: [
                'id',
                'workload_id',
                'command_input',
                'command_type',
                'workspace_id',
                'organization_id',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
  },
})

export const postV1CommandsCancelRoute = createRoute({
  method: 'post',
  path: '/v1/commands/cancel',
  tags: ['command'],
  summary: 'Get the status of command',
  operationId: 'cancelCommand',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'CancelCommandRequest', required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ title: 'CancelCommandResponse', required: ['id'] }),
        },
      },
    },
  },
})

export const postV1WorkloadOutputWriteRoute = createRoute({
  method: 'post',
  path: '/v1/workload_output/write',
  tags: ['workload_output'],
  summary: 'Write the output of a workload',
  operationId: 'writeWorkloadOutput',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ workloadId: z.string(), output: z.string() })
            .openapi({ title: 'WorkloadOutputWriteRequest', required: ['workloadId', 'output'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Successfully wrote output' } },
})

export const postV1DataplaneGroupCreateRoute = createRoute({
  method: 'post',
  path: '/v1/dataplane_group/create',
  tags: ['dataplane_group'],
  summary: 'Create a dataplane group',
  operationId: 'createDataplaneGroup',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneGroupCreateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created dataplane group',
      content: { 'application/json': { schema: DataplaneGroupReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplaneGroupUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/dataplane_group/update',
  tags: ['dataplane_group'],
  summary: 'Update a dataplane group',
  operationId: 'updateDataplaneGroup',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneGroupUpdateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated dataplane group',
      content: { 'application/json': { schema: DataplaneGroupReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplaneGroupDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/dataplane_group/delete',
  tags: ['dataplane_group'],
  summary: 'Delete a dataplane group',
  operationId: 'deleteDataplaneGroup',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneGroupDeleteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully deleted dataplane group',
      content: { 'application/json': { schema: DataplaneGroupReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplaneGroupListRoute = createRoute({
  method: 'post',
  path: '/v1/dataplane_group/list',
  tags: ['dataplane_group'],
  summary: 'List dataplane groups for the organization',
  operationId: 'listDataplaneGroups',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneGroupListRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'List of dataplane groups for the organization',
      content: { 'application/json': { schema: DataplaneGroupListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataWorkerAllocationListRoute = createRoute({
  method: 'post',
  path: '/v1/data_worker_allocation/list',
  tags: ['data_worker_allocation'],
  summary: 'List the Data Worker capacity an organization holds in each region',
  operationId: 'listDataWorkerAllocations',
  request: {
    body: {
      content: { 'application/json': { schema: DataWorkerAllocationListRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The organization's capacity per region, and the total across them",
      content: { 'application/json': { schema: DataWorkerAllocationListResponseSchema } },
    },
    403: ForbiddenResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataWorkerAllocationGetRoute = createRoute({
  method: 'post',
  path: '/v1/data_worker_allocation/get',
  tags: ['data_worker_allocation'],
  summary: 'Get the Data Worker capacity an organization holds in one region',
  operationId: 'getDataWorkerAllocation',
  request: {
    body: {
      content: { 'application/json': { schema: DataWorkerAllocationGetRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The organization's capacity in the requested region",
      content: { 'application/json': { schema: DataWorkerAllocationReadSchema } },
    },
    403: ForbiddenResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataWorkerAllocationReallocateRoute = createRoute({
  method: 'post',
  path: '/v1/data_worker_allocation/reallocate',
  tags: ['data_worker_allocation'],
  summary: "Reallocate Data Worker capacity from one of an organization's regions to another",
  operationId: 'reallocateDataWorkerCapacity',
  request: {
    body: {
      content: { 'application/json': { schema: DataWorkerReallocateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The organization's capacity per region after the move",
      content: { 'application/json': { schema: DataWorkerAllocationListResponseSchema } },
    },
    400: { description: 'Same region, invalid amount, unknown or unusable region' },
    403: ForbiddenResponseResponse,
    409: { description: 'The source region holds less than the requested amount' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataWorkerAllocationAddCapacityRoute = createRoute({
  method: 'post',
  path: '/v1/data_worker_allocation/add_capacity',
  tags: ['data_worker_allocation'],
  summary:
    'Grant an organization additional Data Worker capacity in a region, or the default region if none is given',
  operationId: 'addDataWorkerCapacity',
  request: {
    body: {
      content: { 'application/json': { schema: DataWorkerAddCapacityRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The organization's capacity per region after the grant",
      content: { 'application/json': { schema: DataWorkerAllocationListResponseSchema } },
    },
    400: {
      description:
        'Invalid amount, or the region is unknown, deleted, or not usable by the organization',
    },
    403: ForbiddenResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataWorkerAllocationRemoveCapacityRoute = createRoute({
  method: 'post',
  path: '/v1/data_worker_allocation/remove_capacity',
  tags: ['data_worker_allocation'],
  summary: "Take Data Worker capacity away from one of an organization's regions",
  operationId: 'removeDataWorkerCapacity',
  request: {
    body: {
      content: { 'application/json': { schema: DataWorkerRemoveCapacityRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The organization's capacity per region after the removal",
      content: { 'application/json': { schema: DataWorkerAllocationListResponseSchema } },
    },
    400: {
      description:
        'Invalid amount, unknown region, or the region holds less than the requested amount',
    },
    403: ForbiddenResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesCreateRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/create',
  tags: ['dataplane'],
  summary: 'Create a dataplane',
  operationId: 'createDataplane',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneCreateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created dataplane',
      content: { 'application/json': { schema: DataplaneCreateResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/update',
  tags: ['dataplane'],
  summary: 'Update a dataplane',
  operationId: 'updateDataplane',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneUpdateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated dataplane',
      content: { 'application/json': { schema: DataplaneReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/delete',
  tags: ['dataplane'],
  summary: 'Delete a dataplane',
  operationId: 'deleteDataplane',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneDeleteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully deleted dataplane',
      content: { 'application/json': { schema: DataplaneReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesListRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/list',
  tags: ['dataplane'],
  summary: 'List dataplanes for the dataplane group',
  operationId: 'listDataplanes',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneListRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'List of dataplanes for the dataplane group',
      content: { 'application/json': { schema: DataplaneListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesTokenRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/token',
  tags: ['dataplane'],
  summary: 'Get a token for dataplane requests',
  operationId: 'getDataplaneToken',
  request: {
    body: {
      content: {
        'application/json': { schema: DataplaneTokenRequestBodySchema },
        'application/x-www-form-urlencoded': { schema: DataplaneTokenRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved dataplane token',
      content: { 'application/json': { schema: AccessTokenSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesHeartbeatRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/heartbeat',
  tags: ['dataplane'],
  summary: 'For a dataplane to signal it is still alive',
  operationId: 'heartbeatDataplane',
  request: {
    headers: z.object({ 'X-Airbyte-Version': AirbyteVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: DataplaneHeartbeatRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved dataplane heartbeat information',
      content: { 'application/json': { schema: DataplaneHeartbeatResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesHealthRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/health',
  tags: ['dataplanes'],
  summary: 'Get health status for dataplanes',
  operationId: 'listDataplaneHealth',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved dataplane health statuses',
      content: { 'application/json': { schema: DataplaneHealthListResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DataplanesInitializeRoute = createRoute({
  method: 'post',
  path: '/v1/dataplanes/initialize',
  tags: ['dataplane'],
  summary:
    'Returns information needed for dataplane startup and initialization (groups, queues, AuthN identify, etc.)',
  operationId: 'initializeDataplane',
  request: {
    headers: z.object({ 'X-Airbyte-Version': AirbyteVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: DataplaneInitRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved dataplane initialization information',
      content: { 'application/json': { schema: DataplaneInitResponseSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SsoConfigGetRoute = createRoute({
  method: 'post',
  path: '/v1/sso_config/get',
  tags: ['sso_config'],
  summary: 'Retrieve the sso config for an organization',
  operationId: 'getSsoConfig',
  request: {
    body: {
      content: { 'application/json': { schema: GetSSOConfigRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SSO config retrieved successfully',
      content: { 'application/json': { schema: SSOConfigReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SsoConfigCreateRoute = createRoute({
  method: 'post',
  path: '/v1/sso_config/create',
  tags: ['sso_config'],
  summary: 'Onboard a cloud customer to SSO',
  operationId: 'createSsoConfig',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSSOConfigRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Org successfully onboarded to sso' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SsoConfigDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/sso_config/delete',
  tags: ['sso_config'],
  summary: 'Remove an SSO config',
  operationId: 'deleteSsoConfig',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteSSOConfigRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'SSO config successfully deleted' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SsoConfigUpdateCredentialsRoute = createRoute({
  method: 'post',
  path: '/v1/sso_config/update_credentials',
  tags: ['sso_config'],
  summary: 'Update a client id and client secret for an SSO IDP',
  operationId: 'updateSsoCredentials',
  request: {
    body: {
      content: { 'application/json': { schema: UpdateSSOCredentialsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'SSO credentials successfully updates' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SsoConfigActivateRoute = createRoute({
  method: 'post',
  path: '/v1/sso_config/activate',
  tags: ['sso_config'],
  summary: 'Activate a draft SSO config',
  operationId: 'activateSsoConfig',
  request: {
    body: {
      content: { 'application/json': { schema: ActivateSSOConfigRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'SSO config successfully activated' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SsoConfigValidateTokenRoute = createRoute({
  method: 'post',
  path: '/v1/sso_config/validate_token',
  tags: ['sso_config'],
  summary: "Validate an access token against an organization's SSO realm",
  operationId: 'validateSsoToken',
  request: {
    body: {
      content: { 'application/json': { schema: ValidateSSOTokenRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Token is valid' },
    401: { description: 'Token is invalid or validation failed' },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScimConfigGetRoute = createRoute({
  method: 'post',
  path: '/v1/scim_config/get',
  tags: ['scim_config'],
  summary: 'Retrieve the SCIM configuration for an organization',
  operationId: 'getScimConfig',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SCIM configuration retrieved successfully',
      content: { 'application/json': { schema: ScimConfigResponseSchema } },
    },
    403: ForbiddenResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScimConfigEnableRoute = createRoute({
  method: 'post',
  path: '/v1/scim_config/enable',
  tags: ['scim_config'],
  summary: 'Enable SCIM for an organization',
  description:
    'The bearer token is returned only for the initial enable. Clients must not automatically retry this operation.',
  operationId: 'enableScim',
  request: {
    body: {
      content: { 'application/json': { schema: EnableScimRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SCIM enabled or already enabled with the requested provider',
      content: { 'application/json': { schema: ScimConfigResponseSchema } },
    },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: {
      description: 'SCIM configuration state conflicts with the requested enable operation',
      content: { 'application/json': { schema: KnownExceptionInfoSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScimConfigRotateTokenRoute = createRoute({
  method: 'post',
  path: '/v1/scim_config/rotate_token',
  tags: ['scim_config'],
  summary: 'Rotate the SCIM bearer token for an organization',
  description:
    'The previous token is invalidated and the replacement token is returned only once. Clients must not automatically retry this operation.',
  operationId: 'rotateScimToken',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SCIM bearer token rotated successfully',
      content: { 'application/json': { schema: ScimConfigResponseSchema } },
    },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: {
      description: 'SCIM must be enabled before its token can be rotated',
      content: { 'application/json': { schema: KnownExceptionInfoSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ScimConfigDisableRoute = createRoute({
  method: 'post',
  path: '/v1/scim_config/disable',
  tags: ['scim_config'],
  summary: 'Disable SCIM for an organization',
  operationId: 'disableScim',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'SCIM disabled or already absent or disabled' },
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1AuditLogsListRoute = createRoute({
  method: 'post',
  path: '/v1/audit_logs/list',
  tags: ['audit_logs'],
  summary: 'List audit log entries for an organization',
  description:
    "Returns audit log entries for the caller's organization, newest first. Requires the organization admin role and the feature-audit-logging entitlement. The organizationId in the request body must match the organization resolved from the authenticated request context; only that organization's entries are ever returned.",
  operationId: 'listAuditLogs',
  request: {
    body: {
      content: { 'application/json': { schema: AuditLogListRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Audit log entries retrieved successfully',
      content: { 'application/json': { schema: AuditLogReadListSchema } },
    },
    400: ExceptionResponseResponse,
    403: ForbiddenResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const getPublicRoute = createRoute({
  method: 'get',
  path: '/public',
  tags: ['public_root', 'public'],
  summary: 'Root path, currently returns a redirect to the documentation',
  operationId: 'getDocumentation',
  responses: { 200: { description: 'Redirects to documentation', content: {} } },
  security: [],
})

export const getPublicV1HealthRoute = createRoute({
  method: 'get',
  path: '/public/v1/health',
  tags: ['public_health', 'public'],
  summary: 'Health Check',
  operationId: 'publicGetHealthCheck',
  responses: { 200: { description: 'Successful operation' } },
  security: [],
})

export const getPublicV1ApplicationsRoute = createRoute({
  method: 'get',
  path: '/public/v1/applications',
  tags: ['public_applications', 'public', 'Applications'],
  summary: 'List Applications',
  operationId: 'publicListApplications',
  responses: {
    200: {
      description: 'List all Applications a User has permission to view.',
      content: {
        'application/json': {
          schema: ApplicationReadListSchema,
          examples: {
            'Application List Response Example': {
              value: {
                applications: [
                  {
                    id: '780d5bd9-a8a0-43cf-8b35-cc2061ad8319',
                    name: 'test application',
                    clientId: 'b6b159ce-07f4-4699-94b3-3e85b318852e',
                    clientSecret:
                      'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGNvbmRpbWVudHVtIG5lYyBsaWJlcm8gc2VkIGxvYm9ydGlzLg==',
                    createdAt: '2024-06-09T21:50:30Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
  },
})

export const postPublicV1ApplicationsRoute = createRoute({
  method: 'post',
  path: '/public/v1/applications',
  tags: ['public_applications', 'public', 'Applications'],
  summary: 'Create an Application',
  operationId: 'publicCreateApplication',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ApplicationCreateSchema,
          examples: {
            'Application Creation Request Example': { value: { name: 'test application' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Creates a new Application.',
      content: {
        'application/json': {
          schema: ApplicationReadSchema,
          examples: {
            'Application Creation Response Example': {
              value: {
                id: '780d5bd9-a8a0-43cf-8b35-cc2061ad8319',
                name: 'test application',
                clientId: 'b6b159ce-07f4-4699-94b3-3e85b318852e',
                clientSecret:
                  'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGNvbmRpbWVudHVtIG5lYyBsaWJlcm8gc2VkIGxvYm9ydGlzLg==',
                createdAt: '2024-06-09T21:50:30Z',
              },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const getPublicV1ApplicationsApplicationIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/applications/{applicationId}',
  tags: ['public_applications', 'public', 'Applications'],
  summary: 'Get an Application detail',
  operationId: 'publicGetApplication',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: { name: 'applicationId', schema: { type: 'string' }, in: 'path', required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get an Application by the id in the path.',
      content: {
        'application/json': {
          schema: ApplicationReadSchema,
          examples: {
            'Application Get Response Example': {
              value: {
                id: '780d5bd9-a8a0-43cf-8b35-cc2061ad8319',
                name: 'test application',
                clientId: 'b6b159ce-07f4-4699-94b3-3e85b318852e',
                clientSecret:
                  'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGNvbmRpbWVudHVtIG5lYyBsaWJlcm8gc2VkIGxvYm9ydGlzLg==',
                createdAt: '2024-06-09T21:50:30Z',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1ApplicationsApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/applications/{applicationId}',
  tags: ['public_applications', 'public', 'Applications'],
  summary: 'Deletes an Application',
  operationId: 'publicDeleteApplication',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: { name: 'applicationId', schema: { type: 'string' }, in: 'path', required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete an Application.',
      content: {
        'application/json': {
          schema: ApplicationReadSchema,
          examples: {
            'Application Delete Response Example': {
              value: {
                id: '780d5bd9-a8a0-43cf-8b35-cc2061ad8319',
                name: 'test application',
                clientId: 'b6b159ce-07f4-4699-94b3-3e85b318852e',
                clientSecret:
                  'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGNvbmRpbWVudHVtIG5lYyBsaWJlcm8gc2VkIGxvYm9ydGlzLg==',
                createdAt: '2024-06-09T21:50:30Z',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1ApplicationsTokenRoute = createRoute({
  method: 'post',
  path: '/public/v1/applications/token',
  tags: ['public_applications', 'public', 'Applications'],
  summary: 'Get an Access Token',
  operationId: 'publicGetAccessToken',
  request: {
    body: {
      content: {
        'application/json': { schema: ApplicationTokenRequestWithGrantSchema },
        'application/x-www-form-urlencoded': {
          schema: ApplicationTokenRequestWithGrantSchema,
          examples: {
            'Application Token Request Example': {
              value: {
                clientId: '0da998a2-0d7b-49c7-bb6e-9f7eb9cc68a0',
                clientSecret:
                  'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGNvbmRpbWVudHVtIG5lYyBsaWJlcm8gc2VkIGxvYm9ydGlzLg==',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Creates an Access Token.',
      content: {
        'application/json': {
          schema: PublicAccessTokenResponseSchema,
          examples: {
            'Application Creation Response Example': {
              value: {
                access_token:
                  'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGNvbmRpbWVudHVtIG5lYyBsaWJlcm8gc2VkIGxvYm9ydGlzLg==',
              },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
  security: [],
})

export const getPublicV1JobsRoute = createRoute({
  method: 'get',
  path: '/public/v1/jobs',
  tags: ['public_jobs', 'public', 'Jobs'],
  summary: 'List Jobs by sync type',
  operationId: 'listJobs',
  request: {
    query: z.object({
      connectionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'connectionId',
            description: 'Filter the Jobs by connectionId.',
            schema: { format: 'UUID', type: 'string' },
            in: 'query',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: 'Set the limit on the number of Jobs returned. The default is 20 Jobs.',
            schema: { format: 'int32', default: 20, maximum: 100, minimum: 1, type: 'integer' },
            in: 'query',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            description: 'Set the offset to start at when returning Jobs. The default is 0.',
            schema: { format: 'int32', default: 0, minimum: 0, type: 'integer' },
            in: 'query',
            required: false,
          },
        }),
      jobType: JobTypeEnumSchema.openapi({
        param: {
          name: 'jobType',
          description: 'Filter the Jobs by jobType.',
          schema: { $ref: '#/components/schemas/JobTypeEnum' },
          in: 'query',
          required: false,
        },
      }).exactOptional(),
      workspaceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workspaceIds',
            description:
              'The UUIDs of the workspaces you wish to list jobs for. Empty list will retrieve all allowed workspaces.',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            in: 'query',
            required: false,
          },
        }),
      status: JobStatusEnumSchema.openapi({
        param: {
          name: 'status',
          description: 'The Job status you want to filter by',
          schema: { $ref: '#/components/schemas/JobStatusEnum' },
          in: 'query',
          required: false,
        },
      }).exactOptional(),
      createdAtStart: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAtStart',
            description: 'The start date to filter by',
            schema: { type: 'string', format: 'date-time' },
            in: 'query',
            required: false,
            example: '2023-06-22T16:15:00Z',
          },
        }),
      createdAtEnd: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAtEnd',
            description: 'The end date to filter by',
            schema: { type: 'string', format: 'date-time' },
            in: 'query',
            required: false,
            example: '2023-06-22T16:15:00Z',
          },
        }),
      updatedAtStart: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAtStart',
            description: 'The start date to filter by',
            schema: { type: 'string', format: 'date-time' },
            example: '2023-06-22T16:15:00Z',
            in: 'query',
            required: false,
          },
        }),
      updatedAtEnd: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAtEnd',
            description: 'The end date to filter by',
            schema: { type: 'string', format: 'date-time' },
            in: 'query',
            required: false,
            example: '2023-06-22T16:15:00Z',
          },
        }),
      orderBy: z
        .string()
        .regex(/\w+|(ASC|DESC)/)
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            description: 'The field and method to use for ordering',
            schema: { type: 'string', pattern: '\\w+|(ASC|DESC)' },
            in: 'query',
            required: false,
            example: 'updatedAt|DESC',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List all the Jobs by connectionId.',
      content: {
        'application/json': {
          schema: JobsResponseSchema,
          examples: {
            'Job List Response Example': {
              value: {
                next: 'https://api.airbyte.com/v1/jobs?limit=5&offset=10',
                previous: 'https://api.airbyte.com/v1/jobs?limit=5&offset=0',
                data: [
                  {
                    id: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                    status: 'running',
                    jobType: 'sync',
                  },
                ],
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
  },
})

export const postPublicV1JobsRoute = createRoute({
  method: 'post',
  path: '/public/v1/jobs',
  tags: ['public_jobs', 'public', 'Jobs'],
  summary: 'Trigger a sync or reset job of a connection',
  operationId: 'publicCreateJob',
  request: {
    body: {
      content: {
        'application/json': {
          schema: JobCreateRequestSchema,
          examples: {
            'Job Creation Request Example': {
              value: { connectionId: 'e735894a-e773-4938-969f-45f53957b75b', jobType: 'sync' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Kicks off a new Job based on the JobType. The connectionId is the resource that Job will be run for.',
      content: {
        'application/json': {
          schema: JobResponseSchema,
          examples: {
            'Job Creation Response Example': {
              value: { jobId: 1234, status: 'running', jobType: 'sync' },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const getPublicV1JobsJobIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/jobs/{jobId}',
  tags: ['public_jobs', 'public', 'Jobs'],
  summary: 'Get Job status and details',
  operationId: 'getJob',
  request: {
    params: z.object({
      jobId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'jobId',
            schema: { format: 'int64', type: 'integer' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a Job by the id in the path.',
      content: {
        'application/json': {
          schema: JobResponseSchema,
          examples: {
            'Job Get Response Example': {
              value: {
                id: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                status: 'running',
                jobType: 'sync',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1JobsJobIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/jobs/{jobId}',
  tags: ['public_jobs', 'public', 'Jobs'],
  summary: 'Cancel a running Job',
  operationId: 'publicCancelJob',
  request: {
    params: z.object({
      jobId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'jobId',
            schema: { format: 'int64', type: 'integer' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cancel a Job.',
      content: { 'application/json': { schema: JobResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1RegionsRoute = createRoute({
  method: 'get',
  path: '/public/v1/regions',
  tags: ['public_regions', 'public', 'Regions'],
  summary: 'List regions',
  operationId: 'publicListRegions',
  request: {
    query: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            name: 'organizationId',
            description: 'The UUID of the organization to list regions for',
            schema: { type: 'string', format: 'uuid' },
            in: 'query',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List all regions for the organization',
      content: { 'application/json': { schema: RegionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
  },
})

export const postPublicV1RegionsRoute = createRoute({
  method: 'post',
  path: '/public/v1/regions',
  tags: ['public_regions', 'public', 'Regions'],
  summary: 'Create a region',
  operationId: 'publicCreateRegion',
  request: {
    body: {
      content: { 'application/json': { schema: RegionCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created region',
      content: { 'application/json': { schema: RegionResponseSchema } },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const getPublicV1RegionsRegionIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/regions/{regionId}',
  tags: ['public_regions', 'public', 'Regions'],
  summary: 'Get a region',
  operationId: 'publicGetRegion',
  request: {
    params: z.object({
      regionId: z
        .uuid()
        .openapi({
          param: {
            name: 'regionId',
            schema: { type: 'string', format: 'uuid' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a region by the id in the path',
      content: { 'application/json': { schema: RegionResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1RegionsRegionIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/regions/{regionId}',
  tags: ['public_regions', 'public', 'Regions'],
  summary: 'Delete a region',
  operationId: 'publicDeleteRegion',
  request: {
    params: z.object({
      regionId: z
        .uuid()
        .openapi({
          param: {
            name: 'regionId',
            schema: { type: 'string', format: 'uuid' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted region',
      content: { 'application/json': { schema: RegionResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const patchPublicV1RegionsRegionIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/regions/{regionId}',
  tags: ['public_regions', 'public', 'Regions'],
  summary: 'Update a region',
  operationId: 'publicUpdateRegion',
  request: {
    params: z.object({
      regionId: z
        .uuid()
        .openapi({
          param: {
            name: 'regionId',
            schema: { type: 'string', format: 'uuid' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegionPatchRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully updated region',
      content: { 'application/json': { schema: RegionResponseSchema } },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1DataplanesRoute = createRoute({
  method: 'get',
  path: '/public/v1/dataplanes',
  tags: ['public_dataplanes', 'public', 'Dataplanes'],
  summary: 'List dataplanes',
  operationId: 'publicListDataplanes',
  request: {
    query: z.object({
      regionIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'regionIds',
            description:
              'The UUIDs of the regions to filter by. If provided, only dataplanes belonging to these regions will be returned. Empty list will retrieve all dataplanes accessible to the current user.',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List dataplanes accessible to the current user',
      content: { 'application/json': { schema: DataplanesResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1DataplanesRoute = createRoute({
  method: 'post',
  path: '/public/v1/dataplanes',
  tags: ['public_dataplanes', 'public', 'Dataplanes'],
  summary: 'Create a dataplane',
  operationId: 'publicCreateDataplane',
  request: {
    body: {
      content: { 'application/json': { schema: DataplaneCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created dataplane',
      content: { 'application/json': { schema: DataplaneCreateResponseBodySchema } },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1DataplanesDataplaneIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/dataplanes/{dataplaneId}',
  tags: ['public_dataplanes', 'public', 'Dataplanes'],
  summary: 'Get a dataplane',
  operationId: 'publicGetDataplane',
  request: {
    params: z.object({
      dataplaneId: z
        .uuid()
        .openapi({
          param: {
            name: 'dataplaneId',
            schema: { type: 'string', format: 'uuid' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a dataplane by the id in the path',
      content: { 'application/json': { schema: DataplaneResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1DataplanesDataplaneIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/dataplanes/{dataplaneId}',
  tags: ['public_dataplanes', 'public', 'Dataplanes'],
  summary: 'Delete a dataplane',
  operationId: 'publicDeleteDataplane',
  request: {
    params: z.object({
      dataplaneId: z
        .uuid()
        .openapi({
          param: {
            name: 'dataplaneId',
            schema: { type: 'string', format: 'uuid' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted dataplane',
      content: { 'application/json': { schema: DataplaneResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const patchPublicV1DataplanesDataplaneIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/dataplanes/{dataplaneId}',
  tags: ['public_dataplanes', 'public', 'Dataplanes'],
  summary: 'Update a dataplane',
  operationId: 'publicUpdateDataplane',
  request: {
    params: z.object({
      dataplaneId: z
        .uuid()
        .openapi({
          param: {
            name: 'dataplaneId',
            schema: { type: 'string', format: 'uuid' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DataplanePatchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated dataplane',
      content: { 'application/json': { schema: DataplaneResponseSchema } },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1ConnectorDefinitionsRoute = createRoute({
  method: 'get',
  path: '/public/v1/connector_definitions',
  tags: ['public_connector_definitions', 'public', 'ConnectorDefinitions'],
  summary: 'List connector definitions',
  operationId: 'listConnectorDefinitions',
  request: {
    query: z.object({
      type: ConnectorTypeSchema.openapi({
        param: {
          name: 'type',
          description: 'The type of connector definition to list',
          schema: { $ref: '#/components/schemas/ConnectorType' },
          in: 'query',
          required: true,
        },
      }),
      workspaceId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'workspaceId',
            description:
              'The UUID of the workspace you wish to list connector definitions for. One of this or organizationId must be populated.',
            schema: { type: 'string', format: 'uuid' },
            example: 'df08f6b0-b364-4cc1-9b3f-96f5d2fccfb2',
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectorDefinitionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute = createRoute({
  method: 'get',
  path: '/public/v1/workspaces/{workspaceId}/definitions/declarative_sources',
  tags: ['public_declarative_source_definitions', 'public', 'DeclarativeSourceDefinitions'],
  summary: 'List declarative source definitions.',
  operationId: 'publicListDeclarativeSourceDefinitions',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeclarativeSourceDefinitionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute = createRoute({
  method: 'post',
  path: '/public/v1/workspaces/{workspaceId}/definitions/declarative_sources',
  tags: ['public_declarative_source_definitions', 'public', 'DeclarativeSourceDefinitions'],
  summary: 'Create a declarative source definition.',
  operationId: 'publicCreateDeclarativeSourceDefinition',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDeclarativeSourceDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeclarativeSourceDefinitionResponseSchema } },
    },
  },
})

export const getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute =
  createRoute({
    method: 'get',
    path: '/public/v1/workspaces/{workspaceId}/definitions/declarative_sources/{definitionId}',
    tags: ['public_declarative_source_definitions', 'public', 'DeclarativeSourceDefinitions'],
    summary: 'Get declarative source definition details.',
    operationId: 'publicGetDeclarativeSourceDefinition',
    request: {
      params: z.object({
        workspaceId: z
          .uuid()
          .openapi({
            param: {
              name: 'workspaceId',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
        definitionId: z
          .uuid()
          .openapi({
            param: {
              name: 'definitionId',
              'x-speakeasy-match': 'id',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeclarativeSourceDefinitionResponseSchema } },
      },
      403: { description: 'Not allowed' },
      404: { description: 'Not found' },
    },
  })

export const putPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute =
  createRoute({
    method: 'put',
    path: '/public/v1/workspaces/{workspaceId}/definitions/declarative_sources/{definitionId}',
    tags: ['public_declarative_source_definitions', 'public', 'DeclarativeSourceDefinitions'],
    summary: 'Update declarative source definition details.',
    operationId: 'publicUpdateDeclarativeSourceDefinition',
    request: {
      params: z.object({
        workspaceId: z
          .uuid()
          .openapi({
            param: {
              name: 'workspaceId',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
        definitionId: z
          .uuid()
          .openapi({
            param: {
              name: 'definitionId',
              'x-speakeasy-match': 'id',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateDeclarativeSourceDefinitionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeclarativeSourceDefinitionResponseSchema } },
      },
      403: { description: 'Not allowed' },
      404: { description: 'Not found' },
    },
  })

export const deletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute =
  createRoute({
    method: 'delete',
    path: '/public/v1/workspaces/{workspaceId}/definitions/declarative_sources/{definitionId}',
    tags: ['public_declarative_source_definitions', 'public', 'DeclarativeSourceDefinitions'],
    summary: 'Delete a declarative source definition.',
    operationId: 'publicDeleteDeclarativeSourceDefinition',
    request: {
      params: z.object({
        workspaceId: z
          .uuid()
          .openapi({
            param: {
              name: 'workspaceId',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
        definitionId: z
          .uuid()
          .openapi({
            param: {
              name: 'definitionId',
              'x-speakeasy-match': 'id',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeclarativeSourceDefinitionResponseSchema } },
      },
      403: { description: 'Not allowed' },
      404: { description: 'Not found' },
    },
  })

export const getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute = createRoute({
  method: 'get',
  path: '/public/v1/workspaces/{workspaceId}/definitions/sources',
  tags: ['public_source_definitions', 'public', 'SourceDefinitions'],
  summary: 'List source definitions.',
  operationId: 'publicListSourceDefinitions',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DefinitionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute = createRoute({
  method: 'post',
  path: '/public/v1/workspaces/{workspaceId}/definitions/sources',
  tags: ['public_source_definitions', 'public', 'SourceDefinitions'],
  summary: 'Create a source definition.',
  operationId: 'publicCreateSourceDefinition',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DefinitionResponseSchema } },
    },
  },
})

export const getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/workspaces/{workspaceId}/definitions/sources/{definitionId}',
  tags: ['public_source_definitions', 'public', 'SourceDefinitions'],
  summary: 'Get source definition details.',
  operationId: 'publicGetSourceDefinition',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
      definitionId: z
        .uuid()
        .openapi({
          param: {
            name: 'definitionId',
            'x-speakeasy-match': 'id',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DefinitionResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const putPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/public/v1/workspaces/{workspaceId}/definitions/sources/{definitionId}',
  tags: ['public_source_definitions', 'public', 'SourceDefinitions'],
  summary: 'Update source definition details.',
  operationId: 'publicUpdateSourceDefinition',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
      definitionId: z
        .uuid()
        .openapi({
          param: {
            name: 'definitionId',
            'x-speakeasy-match': 'id',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DefinitionResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/workspaces/{workspaceId}/definitions/sources/{definitionId}',
  tags: ['public_source_definitions', 'public', 'SourceDefinitions'],
  summary: 'Delete a source definition.',
  operationId: 'publicDeleteSourceDefinition',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
      definitionId: z
        .uuid()
        .openapi({
          param: {
            name: 'definitionId',
            'x-speakeasy-match': 'id',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DefinitionResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute = createRoute({
  method: 'get',
  path: '/public/v1/workspaces/{workspaceId}/definitions/destinations',
  tags: ['public_destination_definitions', 'public', 'DestinationDefinitions'],
  summary: 'List destination definitions.',
  operationId: 'publicListDestinationDefinitions',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DefinitionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute = createRoute({
  method: 'post',
  path: '/public/v1/workspaces/{workspaceId}/definitions/destinations',
  tags: ['public_destination_definitions', 'public', 'DestinationDefinitions'],
  summary: 'Create a destination definition.',
  operationId: 'publicCreateDestinationDefinition',
  request: {
    params: z.object({
      workspaceId: z
        .uuid()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'uuid', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DefinitionResponseSchema } },
    },
  },
})

export const getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute = createRoute(
  {
    method: 'get',
    path: '/public/v1/workspaces/{workspaceId}/definitions/destinations/{definitionId}',
    tags: ['public_destination_definitions', 'public', 'DestinationDefinitions'],
    summary: 'Get destination definition details.',
    operationId: 'publicGetDestinationDefinition',
    request: {
      params: z.object({
        workspaceId: z
          .uuid()
          .openapi({
            param: {
              name: 'workspaceId',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
        definitionId: z
          .uuid()
          .openapi({
            param: {
              name: 'definitionId',
              'x-speakeasy-match': 'id',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DefinitionResponseSchema } },
      },
      403: { description: 'Not allowed' },
      404: { description: 'Not found' },
    },
  },
)

export const putPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute = createRoute(
  {
    method: 'put',
    path: '/public/v1/workspaces/{workspaceId}/definitions/destinations/{definitionId}',
    tags: ['public_destination_definitions', 'public', 'DestinationDefinitions'],
    summary: 'Update destination definition details.',
    operationId: 'publicUpdateDestinationDefinition',
    request: {
      params: z.object({
        workspaceId: z
          .uuid()
          .openapi({
            param: {
              name: 'workspaceId',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
        definitionId: z
          .uuid()
          .openapi({
            param: {
              name: 'definitionId',
              'x-speakeasy-match': 'id',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateDefinitionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DefinitionResponseSchema } },
      },
      403: { description: 'Not allowed' },
      404: { description: 'Not found' },
    },
  },
)

export const deletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute =
  createRoute({
    method: 'delete',
    path: '/public/v1/workspaces/{workspaceId}/definitions/destinations/{definitionId}',
    tags: ['public_destination_definitions', 'public', 'DestinationDefinitions'],
    summary: 'Delete a destination definition.',
    operationId: 'publicDeleteDestinationDefinition',
    request: {
      params: z.object({
        workspaceId: z
          .uuid()
          .openapi({
            param: {
              name: 'workspaceId',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
        definitionId: z
          .uuid()
          .openapi({
            param: {
              name: 'definitionId',
              'x-speakeasy-match': 'id',
              schema: { format: 'uuid', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DefinitionResponseSchema } },
      },
      403: { description: 'Not allowed' },
      404: { description: 'Not found' },
    },
  })

export const getPublicV1SourcesRoute = createRoute({
  method: 'get',
  path: '/public/v1/sources',
  tags: ['public_sources', 'public', 'Sources'],
  summary: 'List sources',
  operationId: 'listSources',
  request: {
    query: z.object({
      workspaceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workspaceIds',
            description:
              'The UUIDs of the workspaces you wish to list sources for. Empty list will retrieve all allowed workspaces.',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            example: 'df08f6b0-b364-4cc1-9b3f-96f5d2fccfb2,b0796797-de23-4fc7-a5e2-7e131314718c',
            in: 'query',
            required: false,
          },
        }),
      includeDeleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDeleted',
            description: 'Include deleted sources in the returned results.',
            schema: { default: false, type: 'boolean' },
            in: 'query',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: 'Set the limit on the number of sources returned. The default is 20.',
            schema: { format: 'int32', type: 'integer', minimum: 1, maximum: 100, default: 20 },
            in: 'query',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            description: 'Set the offset to start at when returning sources. The default is 0',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourcesResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1SourcesRoute = createRoute({
  method: 'post',
  path: '/public/v1/sources',
  tags: ['public_sources', 'public', 'Sources'],
  summary: 'Create a source',
  description:
    'Creates a source given a name, workspace id, and a json blob containing the configuration for the source.',
  operationId: 'publicCreateSource',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SourceCreateRequestSchema,
          examples: {
            'Source Creation Request Example': {
              value: {
                configuration: {
                  airbyte_source_name: 'google-ads',
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
                name: 'My Source',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: SourceResponseSchema,
          examples: {
            'Source Creation Response Example': {
              value: { sourceId: '0c31738c-0b2d-4887-b506-e2cd1c39cc35' },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const getPublicV1SourcesSourceIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/sources/{sourceId}',
  tags: ['public_sources', 'public', 'Sources'],
  summary: 'Get Source details',
  operationId: 'publicGetSource',
  request: {
    params: z.object({
      sourceId: z
        .string()
        .openapi({
          param: {
            name: 'sourceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    query: z.object({
      includeSecretCoordinates: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeSecretCoordinates',
            schema: { type: 'boolean' },
            required: false,
            description:
              'Rather than return *** for secret properties include the secret coordinate information. Coordinates are opaque pointers, not secret values, and resolving one requires access to the secret storage that holds it. They are not stable: a coordinate changes when the secret is rewritten.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a Source by the id in the path.',
      content: {
        'application/json': {
          schema: SourceResponseSchema,
          examples: {
            'Source Get Response Example': {
              value: {
                sourceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'running',
                sourceType: 'postgres',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const putPublicV1SourcesSourceIdRoute = createRoute({
  method: 'put',
  path: '/public/v1/sources/{sourceId}',
  tags: ['public_sources', 'public', 'Sources'],
  summary: 'Update a Source and fully overwrite it',
  operationId: 'putSource',
  request: {
    params: z.object({
      sourceId: z
        .string()
        .openapi({
          param: {
            name: 'sourceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SourcePutRequestSchema,
          examples: {
            'Source Update Request Example': {
              value: {
                configuration: {
                  airbyte_source_name: 'google-ads',
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
                name: 'My Source',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update a source and fully overwrite it',
      content: {
        'application/json': {
          schema: SourceResponseSchema,
          examples: {
            'Source Update Response Example': {
              value: {
                sourceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'running',
                sourceType: 'postgres',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1SourcesSourceIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/sources/{sourceId}',
  tags: ['public_sources', 'public', 'Sources'],
  summary: 'Delete a Source',
  operationId: 'publicDeleteSource',
  request: {
    params: z.object({
      sourceId: z
        .string()
        .openapi({
          param: {
            name: 'sourceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The resource was deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const patchPublicV1SourcesSourceIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/sources/{sourceId}',
  tags: ['public_sources', 'public', 'Sources'],
  summary: 'Update a Source',
  operationId: 'patchSource',
  request: {
    params: z.object({
      sourceId: z
        .string()
        .openapi({
          param: {
            name: 'sourceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SourcePatchRequestSchema,
          examples: {
            'Source Update Request Example': {
              value: {
                configuration: {
                  airbyte_source_name: 'google-ads',
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
                name: 'My Source',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update a Source',
      content: {
        'application/json': {
          schema: SourceResponseSchema,
          examples: {
            'Source Update Response Example': {
              value: {
                sourceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'running',
                sourceType: 'postgres',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1DestinationsRoute = createRoute({
  method: 'get',
  path: '/public/v1/destinations',
  tags: ['public_destinations', 'public', 'Destinations'],
  summary: 'List destinations',
  operationId: 'listDestinations',
  request: {
    query: z.object({
      workspaceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workspaceIds',
            description:
              'The UUIDs of the workspaces you wish to list destinations for. Empty list will retrieve all allowed workspaces.',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            in: 'query',
            required: false,
          },
        }),
      includeDeleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDeleted',
            description: 'Include deleted destinations in the returned results.',
            schema: { default: false, type: 'boolean' },
            in: 'query',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: 'Set the limit on the number of destinations returned. The default is 20.',
            schema: { format: 'int32', type: 'integer', minimum: 1, maximum: 100, default: 20 },
            in: 'query',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            description: 'Set the offset to start at when returning destinations. The default is 0',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1DestinationsRoute = createRoute({
  method: 'post',
  path: '/public/v1/destinations',
  tags: ['public_destinations', 'public', 'Destinations'],
  summary: 'Create a destination',
  description:
    'Creates a destination given a name, workspace id, and a json blob containing the configuration for the source.',
  operationId: 'publicCreateDestination',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DestinationCreateRequestSchema,
          examples: {
            'Destination Creation Request Example': {
              value: {
                name: 'Postgres',
                workspaceId: '2155ae5a-de39-4808-af6a-16fe7b8b4ed2',
                configuration: {
                  airbyte_destination_name: 'postgres',
                  port: 5432,
                  schema: 'public',
                  ssl_mode: { mode: 'prefer' },
                  tunnel_method: { tunnel_method: 'NO_TUNNEL' },
                  host: 'localhost',
                  database: 'postgres',
                  username: 'postgres',
                  password: 'test',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: DestinationResponseSchema,
          examples: {
            'Destination Creation Response Example': {
              value: { destinationId: 'af0c3c67-aa61-419f-8922-95b0bf840e86' },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1DestinationsDestinationIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/destinations/{destinationId}',
  tags: ['public_destinations', 'public', 'Destinations'],
  summary: 'Get Destination details',
  operationId: 'publicGetDestination',
  request: {
    params: z.object({
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    query: z.object({
      includeSecretCoordinates: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeSecretCoordinates',
            schema: { type: 'boolean' },
            required: false,
            description:
              'Rather than return *** for secret properties include the secret coordinate information. Coordinates are opaque pointers, not secret values, and resolving one requires access to the secret storage that holds it. They are not stable: a coordinate changes when the secret is rewritten.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a Destination by the id in the path.',
      content: {
        'application/json': {
          schema: DestinationResponseSchema,
          examples: {
            'Destination Get Response Example': {
              value: {
                destinationId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'My Destination',
                sourceType: 'postgres',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
                configuration: {
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const putPublicV1DestinationsDestinationIdRoute = createRoute({
  method: 'put',
  path: '/public/v1/destinations/{destinationId}',
  tags: ['public_destinations', 'public', 'Destinations'],
  summary: 'Update a Destination and fully overwrite it',
  operationId: 'putDestination',
  request: {
    params: z.object({
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DestinationPutRequestSchema,
          examples: {
            'Destination Update Request Example': {
              value: {
                configuration: {
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
                name: 'My Destination',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update a Destination and fully overwrite it',
      content: {
        'application/json': {
          schema: DestinationResponseSchema,
          examples: {
            'Destination Update Response Example': {
              value: {
                destinationId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'running',
                sourceType: 'postgres',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
                configuration: {
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1DestinationsDestinationIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/destinations/{destinationId}',
  tags: ['public_destinations', 'public', 'Destinations'],
  summary: 'Delete a Destination',
  operationId: 'publicDeleteDestination',
  request: {
    params: z.object({
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The resource was deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const patchPublicV1DestinationsDestinationIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/destinations/{destinationId}',
  tags: ['public_destinations', 'public', 'Destinations'],
  summary: 'Update a Destination',
  operationId: 'patchDestination',
  request: {
    params: z.object({
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DestinationPatchRequestSchema,
          examples: {
            'Destination Update Request Example': {
              value: {
                configuration: {
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
                name: 'My Destination',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update a Destination',
      content: {
        'application/json': {
          schema: DestinationResponseSchema,
          examples: {
            'Destination Update Response Example': {
              value: {
                destinationId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'running',
                sourceType: 'postgres',
                workspaceId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
                configuration: {
                  conversion_window_days: 14,
                  customer_id: '1234567890',
                  start_date: '2023-01-01',
                  end_date: '2024-01-01',
                },
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1OauthCallbackRoute = createRoute({
  method: 'get',
  path: '/public/v1/oauth/callback',
  tags: ['public_oauth', 'public', 'OAuth'],
  summary: 'Receive OAuth callbacks',
  description: 'Redirected to by identity providers after authentication.',
  operationId: 'oauthCallback',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['queryParams']
        const taken: string[] = []
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          queryParams: z
            .record(z.string(), z.string())
            .exactOptional()
            .openapi({
              param: {
                name: 'queryParams',
                description: 'Query parameters. Should contain state and code.',
                required: false,
                schema: { type: 'object', additionalProperties: { type: 'string' } },
                in: 'query',
              },
            }),
        }),
      ),
  },
  responses: {
    302: {
      description:
        'Redirect to the URL requested in the initiate call. In api mode, includes secret_id and internal IDs. In webapp mode, forwards provider callback query params.',
    },
  },
  security: [],
})

export const postPublicV1SourcesInitiateOAuthRoute = createRoute({
  method: 'post',
  path: '/public/v1/sources/initiateOAuth',
  tags: ['public_sources', 'public', 'Sources'],
  summary: 'Initiate OAuth for a source',
  description:
    'Given a source ID, workspace ID, and redirect URL, initiates OAuth for the source.\n\nThis returns a fully formed URL for performing user authentication against the relevant source identity provider (IdP). Once authentication has been completed, the IdP will redirect to an Airbyte endpoint which will save the access and refresh tokens off as a secret and return the secret ID to the redirect URL specified in the `secret_id` query string parameter.\n\nThat secret ID can be used to create a source with credentials in place of actual tokens. By default (`clientType=api` or omitted), callback behavior is unchanged. If `clientType=webapp`, callback redirects with provider callback query params and does not create a secret during callback.',
  operationId: 'initiateOAuth',
  request: {
    body: {
      content: { 'application/json': { schema: InitiateOauthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: InitiateOauthResponseResponse,
    400: { description: 'A field in the body has not been set appropriately.' },
    403: { description: 'API key is invalid.' },
  },
})

export const getPublicV1ConnectionsRoute = createRoute({
  method: 'get',
  path: '/public/v1/connections',
  tags: ['public_connections', 'public', 'Connections'],
  summary: 'List connections',
  operationId: 'listConnections',
  request: {
    query: z.object({
      workspaceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workspaceIds',
            description:
              'The UUIDs of the workspaces you wish to list connections for. Empty list will retrieve all allowed workspaces.',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            in: 'query',
            required: false,
          },
        }),
      tagIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tagIds',
            description:
              'The UUIDs of the tags you wish to list connections for. Empty list will retrieve all connections.',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            in: 'query',
            required: false,
          },
        }),
      includeDeleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDeleted',
            description: 'Include deleted connections in the returned results.',
            schema: { default: false, type: 'boolean' },
            in: 'query',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: 'Set the limit on the number of Connections returned. The default is 20.',
            schema: { format: 'int32', type: 'integer', minimum: 1, maximum: 100, default: 20 },
            in: 'query',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            description: 'Set the offset to start at when returning Connections. The default is 0',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1ConnectionsRoute = createRoute({
  method: 'post',
  path: '/public/v1/connections',
  tags: ['public_connections', 'public', 'Connections'],
  summary: 'Create a connection',
  operationId: 'publicCreateConnection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ConnectionCreateRequestSchema,
          examples: {
            'Connection Creation Request Example': {
              value: {
                sourceId: '95e66a59-8045-4307-9678-63bc3c9b8c93',
                destinationId: 'e478de0d-a3a0-475c-b019-25f7dd29e281',
                name: 'Postgres-to-Bigquery',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: ConnectionResponseSchema,
          examples: {
            'Connection Creation Response Example': {
              value: { connectionId: '9924bcd0-99be-453d-ba47-c2c9766f7da5' },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const getPublicV1ConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/connections/{connectionId}',
  tags: ['public_connections', 'public', 'Connections'],
  summary: 'Get Connection details',
  operationId: 'publicGetConnection',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a Connection by the id in the path.',
      content: {
        'application/json': {
          schema: ConnectionResponseSchema,
          examples: {
            'Connection Get Response Example': {
              value: {
                workspaceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'Postgres To Snowflake',
                sourceId: '9924bcd0-99be-453d-ba47-c2c9766f7da5',
                destinationId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1ConnectionsConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/connections/{connectionId}',
  tags: ['public_connections', 'public', 'Connections'],
  summary: 'Delete a Connection',
  operationId: 'publicDeleteConnection',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The resource was deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const patchPublicV1ConnectionsConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/connections/{connectionId}',
  tags: ['public_connections', 'public', 'Connections'],
  summary: 'Update Connection details',
  operationId: 'patchConnection',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ConnectionPatchRequestSchema,
          examples: {
            'Connection Update Request Example': {
              value: {
                sourceId: '95e66a59-8045-4307-9678-63bc3c9b8c93',
                destinationId: 'e478de0d-a3a0-475c-b019-25f7dd29e281',
                name: 'Postgres-to-Bigquery',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Update a Connection by the id in the path.',
      content: {
        'application/json': {
          schema: ConnectionResponseSchema,
          examples: {
            'Connection Get Response Example': {
              value: {
                workspaceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'Postgres To Snowflake',
                sourceId: '9924bcd0-99be-453d-ba47-c2c9766f7da5',
                destinationId: '744cc0ed-7f05-4949-9e60-2a814f90c035',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1StreamsRoute = createRoute({
  method: 'get',
  path: '/public/v1/streams',
  tags: ['public_streams', 'public', 'Streams'],
  summary: 'Get stream properties',
  operationId: 'getStreamProperties',
  request: {
    query: z.object({
      sourceId: z
        .string()
        .openapi({
          param: {
            name: 'sourceId',
            description: 'ID of the source',
            schema: { format: 'UUID', type: 'string' },
            in: 'query',
            required: true,
          },
        }),
      destinationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'destinationId',
            description: 'ID of the destination',
            schema: { format: 'UUID', type: 'string' },
            in: 'query',
            required: false,
          },
        }),
      ignoreCache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'ignoreCache',
            description:
              'If true pull the latest schema from the source, else pull from cache (default false)',
            schema: { type: 'boolean', default: false },
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the available streams properties for a source/destination pair.',
      content: { 'application/json': { schema: StreamPropertiesResponseSchema } },
    },
    400: { description: 'Required parameters are missing' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1WorkspacesRoute = createRoute({
  method: 'get',
  path: '/public/v1/workspaces',
  tags: ['public_workspaces', 'public', 'Workspaces'],
  summary: 'List workspaces',
  operationId: 'publicListWorkspaces',
  request: {
    query: z.object({
      workspaceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workspaceIds',
            description:
              'The UUIDs of the workspaces you wish to fetch. Empty list will retrieve all allowed workspaces.',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            in: 'query',
            required: false,
          },
        }),
      includeDeleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDeleted',
            description: 'Include deleted workspaces in the returned results.',
            schema: { default: false, type: 'boolean' },
            in: 'query',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: 'Set the limit on the number of workspaces returned. The default is 20.',
            schema: { format: 'int32', type: 'integer', minimum: 1, maximum: 100, default: 20 },
            in: 'query',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            description: 'Set the offset to start at when returning workspaces. The default is 0',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspacesResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1WorkspacesRoute = createRoute({
  method: 'post',
  path: '/public/v1/workspaces',
  tags: ['public_workspaces', 'public', 'Workspaces'],
  summary: 'Create a workspace',
  operationId: 'publicCreateWorkspace',
  request: {
    body: {
      content: {
        'application/json': {
          schema: WorkspaceCreateRequestSchema,
          examples: {
            'Workspace Creation Request Example': { value: { name: 'Company Workspace Name' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: WorkspaceResponseSchema,
          examples: {
            'Workspace Creation Response Example': {
              value: { workspaceId: '9924bcd0-99be-453d-ba47-c2c9766f7da5' },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const getPublicV1WorkspacesWorkspaceIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/workspaces/{workspaceId}',
  tags: ['public_workspaces', 'public', 'Workspaces'],
  summary: 'Get Workspace details',
  operationId: 'publicGetWorkspace',
  request: {
    params: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a Workspace by the id in the path.',
      content: {
        'application/json': {
          schema: WorkspaceResponseSchema,
          examples: {
            'Workspace Get Response Example': {
              value: {
                workspaceId: '18dccc91-0ab1-4f72-9ed7-0b8fc27c5826',
                name: 'Acme Company',
                dataResidency: 'auto',
              },
            },
          },
        },
      },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1WorkspacesWorkspaceIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/workspaces/{workspaceId}',
  tags: ['public_workspaces', 'public', 'Workspaces'],
  summary: 'Delete a Workspace',
  operationId: 'publicDeleteWorkspace',
  request: {
    params: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The resource was deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const patchPublicV1WorkspacesWorkspaceIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/workspaces/{workspaceId}',
  tags: ['public_workspaces', 'public', 'Workspaces'],
  summary: 'Update a workspace',
  operationId: 'publicUpdateWorkspace',
  request: {
    params: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: WorkspaceUpdateRequestSchema,
          examples: {
            'Workspace Update Request Example': { value: { name: 'Company Workspace Name' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: WorkspaceResponseSchema,
          examples: {
            'Workspace Update Response Example': {
              value: { workspaceId: '9924bcd0-99be-453d-ba47-c2c9766f7da5' },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const putPublicV1WorkspacesWorkspaceIdOauthCredentialsRoute = createRoute({
  method: 'put',
  path: '/public/v1/workspaces/{workspaceId}/oauthCredentials',
  tags: ['public_workspaces', 'public', 'Workspaces'],
  summary: 'Create OAuth override credentials for a workspace and source type.',
  description:
    'Create/update a set of OAuth credentials to override the Airbyte-provided OAuth credentials used for source/destination OAuth.\nIn order to determine what the credential configuration needs to be, please see the connector specification of the relevant source/destination.',
  operationId: 'createOrUpdateWorkspaceOAuthCredentials',
  request: {
    params: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: WorkspaceOAuthCredentialsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OAuth credential override was successful.' },
    400: { description: 'A field in the body has not been set appropriately.' },
    403: { description: 'API key is invalid.' },
  },
})

export const deletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameRoute = createRoute({
  method: 'delete',
  path: '/public/v1/workspaces/{workspaceId}/oauthCredentials/{actorType}/{name}',
  tags: ['public_workspaces', 'public', 'Workspaces'],
  summary: 'Delete OAuth override credentials for a workspace and source/destination type.',
  description:
    'Delete a set of OAuth credentials that overrides the Airbyte-provided OAuth credentials used for source/destination OAuth.\n\n> 🚧Warning > > Deleting an override that is actively used by existing sources or destinations will cause those connectors to fail on their next sync and require re-authentication.',
  operationId: 'deleteWorkspaceOAuthCredentials',
  request: {
    params: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            name: 'workspaceId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
      actorType: ActorTypeEnumSchema.openapi({
        param: {
          name: 'actorType',
          schema: { $ref: '#/components/schemas/ActorTypeEnum' },
          in: 'path',
          required: true,
        },
      }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            schema: { type: 'string' },
            in: 'path',
            required: true,
            description: 'The name of the source or destination i.e. google-ads',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OAuth credential override was deleted successfully.' },
    400: { description: 'A field in the path has not been set appropriately.' },
    403: { description: 'API key is invalid.' },
  },
})

export const getPublicV1PermissionsPermissionIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/permissions/{permissionId}',
  tags: ['public_permissions', 'public', 'Permissions'],
  summary: 'Get Permission details',
  operationId: 'publicGetPermission',
  request: {
    params: z.object({
      permissionId: z
        .string()
        .openapi({
          param: {
            name: 'permissionId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a Permission by the id in the path.',
      content: { 'application/json': { schema: PermissionResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    422: { description: 'Data issue' },
  },
})

export const deletePublicV1PermissionsPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/permissions/{permissionId}',
  tags: ['public_permissions', 'public', 'Permissions'],
  summary: 'Delete a Permission',
  operationId: 'publicDeletePermission',
  request: {
    params: z.object({
      permissionId: z
        .string()
        .openapi({
          param: {
            name: 'permissionId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The resource was deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    422: { description: 'Data issue' },
  },
})

export const patchPublicV1PermissionsPermissionIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/permissions/{permissionId}',
  tags: ['public_permissions', 'public', 'Permissions'],
  summary: 'Update a permission',
  operationId: 'publicUpdatePermission',
  request: {
    params: z.object({
      permissionId: z
        .string()
        .openapi({
          param: {
            name: 'permissionId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PermissionUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: { 'application/json': { schema: PermissionResponseSchema } },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    422: { description: 'Data issue' },
  },
})

export const getPublicV1PermissionsRoute = createRoute({
  method: 'get',
  path: '/public/v1/permissions',
  tags: ['public_permissions', 'public', 'Permissions'],
  summary: 'List Permissions by user id',
  operationId: 'publicListPermissionsByUserId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            description: 'User Id in permission.',
            schema: { format: 'UUID', type: 'string' },
            in: 'query',
            required: false,
          },
        }),
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'organizationId',
            description:
              "This is required if you want to read someone else's permissions, and you should have organization admin or a higher role.",
            schema: { format: 'UUID', type: 'string' },
            in: 'query',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Permissions.',
      content: { 'application/json': { schema: PermissionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1PermissionsRoute = createRoute({
  method: 'post',
  path: '/public/v1/permissions',
  tags: ['public_permissions', 'public', 'Permissions'],
  summary: 'Create a permission',
  operationId: 'publicCreatePermission',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PermissionCreateRequestSchema,
          examples: {
            'Permission Creation Request Example': {
              value: {
                permissionType: 'workspace_admin',
                userId: '7d08fd6c-531e-4a00-937e-3d355f253e63',
                workspaceId: '9924bcd0-99be-453d-ba47-c2c9766f7da5',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: PermissionResponseSchema,
          examples: {
            'Permission Creation Response Example': {
              value: {
                permissionId: '9924bcd0-99be-453d-ba47-c2c9766f7da5',
                permissionType: 'workspace_admin',
                userId: '7d08fd6c-531e-4a00-937e-3d355f253e63',
              },
            },
          },
        },
      },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
  },
})

export const getPublicV1OrganizationsRoute = createRoute({
  method: 'get',
  path: '/public/v1/organizations',
  tags: ['public_organizations', 'public', 'Organizations'],
  summary: 'List all organizations for a user',
  description: 'Lists users organizations.',
  operationId: 'publicListOrganizationsForUser',
  responses: {
    200: {
      description: "List user's organizations.",
      content: { 'application/json': { schema: OrganizationsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const putPublicV1OrganizationsOrganizationIdOauthCredentialsRoute = createRoute({
  method: 'put',
  path: '/public/v1/organizations/{organizationId}/oauthCredentials',
  tags: ['public_organizations', 'public', 'Organizations'],
  summary: 'Create OAuth override credentials for an organization and source type.',
  description:
    'Create/update a set of OAuth credentials to override the Airbyte-provided OAuth credentials used for source/destination OAuth.\nIn order to determine what the credential configuration needs to be, please see the connector specification of the relevant source/destination.',
  operationId: 'createOrUpdateOrganizationOAuthCredentials',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            name: 'organizationId',
            schema: { format: 'UUID', type: 'string' },
            in: 'path',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OrganizationOAuthCredentialsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OAuth credential override was successful.' },
    400: { description: 'A field in the body has not been set appropriately.' },
    403: { description: 'API key is invalid.' },
  },
})

export const deletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameRoute =
  createRoute({
    method: 'delete',
    path: '/public/v1/organizations/{organizationId}/oauthCredentials/{actorType}/{name}',
    tags: ['public_organizations', 'public', 'Organizations'],
    summary: 'Delete OAuth override credentials for an organization and source/destination type.',
    description:
      'Delete a set of OAuth credentials that overrides the Airbyte-provided OAuth credentials used for source/destination OAuth.\n\n> 🚧Warning > > Deleting an override that is actively used by existing sources or destinations will cause those connectors to fail on their next sync and require re-authentication.',
    operationId: 'deleteOrganizationOAuthCredentials',
    request: {
      params: z.object({
        organizationId: z
          .string()
          .openapi({
            param: {
              name: 'organizationId',
              schema: { format: 'UUID', type: 'string' },
              in: 'path',
              required: true,
            },
          }),
        actorType: ActorTypeEnumSchema.openapi({
          param: {
            name: 'actorType',
            schema: { $ref: '#/components/schemas/ActorTypeEnum' },
            in: 'path',
            required: true,
          },
        }),
        name: z
          .string()
          .openapi({
            param: {
              name: 'name',
              schema: { type: 'string' },
              in: 'path',
              required: true,
              description: 'The name of the source or destination i.e. google-ads',
            },
          }),
      }),
    },
    responses: {
      204: { description: 'OAuth credential override was deleted successfully.' },
      400: { description: 'A field in the path has not been set appropriately.' },
      403: { description: 'API key is invalid.' },
    },
  })

export const getPublicV1UsersRoute = createRoute({
  method: 'get',
  path: '/public/v1/users',
  tags: ['public_users', 'public', 'Users'],
  summary: 'List all users within an organization',
  description:
    'Organization Admin user can list all users within the same organization. Also provide filtering on a list of user IDs or/and a list of user emails.',
  operationId: 'publicListUsersWithinAnOrganization',
  request: {
    query: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'organizationId',
            schema: { type: 'string', format: 'UUID' },
            required: true,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ids',
            schema: { type: 'array', items: { type: 'string', format: 'UUID' } },
            description: 'List of user IDs to filter by',
            required: false,
          },
        }),
      emails: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.email()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'emails',
            schema: { type: 'array', items: { type: 'string', format: 'email' } },
            description: 'List of user emails to filter by',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Users.',
      content: { 'application/json': { schema: UsersResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1GroupsRoute = createRoute({
  method: 'get',
  path: '/public/v1/groups',
  tags: ['public_groups', 'public', 'Groups'],
  summary: 'List groups',
  description: 'List all groups, optionally filtered by organization',
  operationId: 'publicListGroups',
  request: {
    query: z.object({
      organizationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'organizationId',
            schema: { type: 'string', format: 'uuid' },
            description: 'Filter groups by organization ID',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', format: 'int32', default: 20, minimum: 1, maximum: 100 },
            description:
              'Set the limit on the number of Groups returned. The default is 20 Groups.',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { type: 'integer', format: 'int32', default: 0, minimum: 0 },
            description: 'Set the offset to start at when returning Groups. The default is 0.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Groups.',
      content: { 'application/json': { schema: GroupsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1GroupsRoute = createRoute({
  method: 'post',
  path: '/public/v1/groups',
  tags: ['public_groups', 'public', 'Groups'],
  summary: 'Create group',
  description: 'Create a new group within an organization',
  operationId: 'publicCreateGroup',
  request: {
    body: { content: { 'application/json': { schema: GroupCreateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Group created successfully.',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    400: { description: 'Invalid input' },
    403: { description: 'Not allowed' },
    409: { description: 'Group with this name already exists in the organization' },
  },
})

export const getPublicV1GroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/groups/{groupId}',
  tags: ['public_groups', 'public', 'Groups'],
  summary: 'Get group details',
  description: 'Get a specific group by ID',
  operationId: 'publicGetGroup',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a Group by the id in the path.',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1GroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/groups/{groupId}',
  tags: ['public_groups', 'public', 'Groups'],
  summary: 'Delete group',
  description: 'Delete a group and remove all associated memberships',
  operationId: 'publicDeleteGroup',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Group deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    409: { description: 'Group is managed by SCIM' },
  },
})

export const patchPublicV1GroupsGroupIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/groups/{groupId}',
  tags: ['public_groups', 'public', 'Groups'],
  summary: 'Update group',
  description: 'Update an existing group',
  operationId: 'publicUpdateGroup',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupUpdateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Group updated successfully.',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    400: { description: 'Invalid input' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    409: { description: 'Group name conflict or group is managed by SCIM' },
  },
})

export const getPublicV1GroupsGroupIdMembersRoute = createRoute({
  method: 'get',
  path: '/public/v1/groups/{groupId}/members',
  tags: ['public_group_members', 'public', 'Groups'],
  summary: 'List group members',
  description: 'Get all members of a specific group',
  operationId: 'publicListGroupMembers',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', format: 'int32', default: 20, minimum: 1, maximum: 100 },
            description: 'Set the limit on the number of members returned. The default is 20.',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { type: 'integer', format: 'int32', default: 0, minimum: 0 },
            description: 'Set the offset to start at when returning members. The default is 0.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Group members.',
      content: { 'application/json': { schema: GroupMembersResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1GroupsGroupIdMembersRoute = createRoute({
  method: 'post',
  path: '/public/v1/groups/{groupId}/members',
  tags: ['public_group_members', 'public', 'Groups'],
  summary: 'Add member to group',
  description: 'Add a user to a group',
  operationId: 'publicAddGroupMember',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GroupMemberAddRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Member added successfully.',
      content: { 'application/json': { schema: GroupMemberResponseSchema } },
    },
    400: { description: 'Invalid input' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    409: { description: 'User is already a member of this group or group is managed by SCIM' },
  },
})

export const deletePublicV1GroupsGroupIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/groups/{groupId}/members/{userId}',
  tags: ['public_group_members', 'public', 'Groups'],
  summary: 'Remove member from group',
  description: 'Remove a user from a group',
  operationId: 'publicRemoveGroupMember',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
      userId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'User identifier',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Member removed successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    409: { description: 'Group is managed by SCIM' },
  },
})

export const getPublicV1GroupsGroupIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/public/v1/groups/{groupId}/permissions',
  tags: ['public_group_permissions', 'public', 'Groups'],
  summary: 'List group permissions',
  description: 'Get all permissions assigned to a group',
  operationId: 'publicListGroupPermissions',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Group permissions.',
      content: { 'application/json': { schema: GroupPermissionsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1GroupsGroupIdPermissionsRoute = createRoute({
  method: 'post',
  path: '/public/v1/groups/{groupId}/permissions',
  tags: ['public_group_permissions', 'public', 'Groups'],
  summary: 'Create group permission',
  description: 'Assign a permission to a group',
  operationId: 'publicCreateGroupPermission',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GroupPermissionCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Permission created successfully.',
      content: { 'application/json': { schema: GroupPermissionResponseSchema } },
    },
    400: { description: 'Invalid input' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
    409: { description: 'Permission already exists for this group' },
  },
})

export const deletePublicV1GroupsGroupIdPermissionsPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/groups/{groupId}/permissions/{permissionId}',
  tags: ['public_group_permissions', 'public', 'Groups'],
  summary: 'Delete group permission',
  description: 'Remove a permission from a group',
  operationId: 'publicDeleteGroupPermission',
  request: {
    params: z.object({
      groupId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Group identifier',
          },
        }),
      permissionId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'permissionId',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'Permission identifier',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Permission deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const getPublicV1TagsRoute = createRoute({
  method: 'get',
  path: '/public/v1/tags',
  tags: ['public_tags', 'public', 'Tags'],
  summary: 'List all tags',
  description: 'Lists all tags',
  operationId: 'publicListTags',
  request: {
    query: z.object({
      workspaceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workspaceIds',
            in: 'query',
            schema: { type: 'array', items: { format: 'uuid', type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Tags.',
      content: { 'application/json': { schema: TagsResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1TagsRoute = createRoute({
  method: 'post',
  path: '/public/v1/tags',
  tags: ['public_tags', 'public', 'Tags'],
  summary: 'Create a tag',
  description: 'Create a tag',
  operationId: 'publicCreateTag',
  request: {
    body: { content: { 'application/json': { schema: TagCreateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: TagResponseSchema } },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
    409: { description: 'Tag with same name already exists' },
  },
})

export const getPublicV1TagsTagIdRoute = createRoute({
  method: 'get',
  path: '/public/v1/tags/{tagId}',
  tags: ['public_tags', 'public', 'Tags'],
  summary: 'Get a tag',
  description: 'Get a tag',
  operationId: 'publicGetTag',
  request: {
    params: z.object({
      tagId: TagIdSchema.openapi({
        param: {
          name: 'tagId',
          schema: { $ref: '#/components/schemas/TagId' },
          in: 'path',
          required: true,
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: TagResponseSchema } },
    },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const deletePublicV1TagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/public/v1/tags/{tagId}',
  tags: ['public_tags', 'public', 'Tags'],
  summary: 'Delete a tag',
  description: 'Delete a tag',
  operationId: 'publicDeleteTag',
  request: {
    params: z.object({
      tagId: TagIdSchema.openapi({
        param: {
          name: 'tagId',
          schema: { $ref: '#/components/schemas/TagId' },
          in: 'path',
          required: true,
        },
      }),
    }),
  },
  responses: {
    204: { description: 'The resource was deleted successfully' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const patchPublicV1TagsTagIdRoute = createRoute({
  method: 'patch',
  path: '/public/v1/tags/{tagId}',
  tags: ['public_tags', 'public', 'Tags'],
  summary: 'Update a tag',
  description: 'Update a tag',
  operationId: 'publicUpdateTag',
  request: {
    params: z.object({
      tagId: TagIdSchema.openapi({
        param: {
          name: 'tagId',
          schema: { $ref: '#/components/schemas/TagId' },
          in: 'path',
          required: true,
        },
      }),
    }),
    body: { content: { 'application/json': { schema: TagPatchRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: TagResponseSchema } },
    },
    400: { description: 'Invalid data' },
    403: { description: 'Not allowed' },
    404: { description: 'Not found' },
  },
})

export const postPublicV1EmbeddedWidgetTokenRoute = createRoute({
  method: 'post',
  path: '/public/v1/embedded/widget_token',
  tags: ['public', 'embedded_widget'],
  summary: 'Get a widget token for Airbyte Embedded',
  description:
    'Get a token for the embedded widget. This endpoint is only available when Airbyte Embedded is enabled.',
  operationId: 'getEmbeddedWidget',
  request: {
    body: {
      content: { 'application/json': { schema: EmbeddedWidgetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmbeddedWidgetResponseSchema } },
    },
  },
})

export const postPublicV1EmbeddedScopedTokenRoute = createRoute({
  method: 'post',
  path: '/public/v1/embedded/scoped_token',
  tags: ['public', 'embedded_widget'],
  summary: 'Generate a scoped token for Airbyte Embedded',
  description: 'Generate a token scoped to an end-user workspace.',
  operationId: 'generateEmbeddedScopedToken',
  request: {
    body: {
      content: { 'application/json': { schema: EmbeddedScopedTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmbeddedScopedTokenResponseSchema } },
    },
  },
})

export const getPublicV1EmbeddedOrganizationsRoute = createRoute({
  method: 'get',
  path: '/public/v1/embedded/organizations',
  tags: ['public', 'embedded_widget'],
  summary: 'List organizations that a user has access to that have embedded enabled.',
  operationId: 'listEmbeddedOrganizationsByUser',
  responses: {
    200: {
      description: 'Successfully retrieved organizations',
      content: { 'application/json': { schema: EmbeddedOrganizationsListSchema } },
    },
    403: ForbiddenResponseResponse,
  },
})

export const postV1ServiceAccountsTokenRoute = createRoute({
  method: 'post',
  path: '/v1/service_accounts/token',
  tags: ['service_accounts'],
  summary: 'Get an access token for a service account.',
  operationId: 'getServiceAccountToken',
  request: {
    body: {
      content: {
        'application/json': { schema: ServiceAccountTokenRequestBodySchema },
        'application/x-www-form-urlencoded': { schema: ServiceAccountTokenRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved access token',
      content: { 'application/json': { schema: AccessTokenSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DomainVerificationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/domain_verifications/create',
  tags: ['domain_verifications'],
  summary: 'Create a new domain verification request for given org',
  operationId: 'createDomainVerification',
  request: {
    body: {
      content: { 'application/json': { schema: DomainVerificationCreateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created domain verification',
      content: { 'application/json': { schema: DomainVerificationResponseSchema } },
    },
    400: InvalidInputResponseResponse,
    403: ForbiddenResponseResponse,
  },
})

export const postV1DomainVerificationsListRoute = createRoute({
  method: 'post',
  path: '/v1/domain_verifications/list',
  tags: ['domain_verifications'],
  summary: 'List all domain verifications for an organization',
  operationId: 'listDomainVerifications',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved domain verifications for given org',
      content: { 'application/json': { schema: DomainVerificationListResponseSchema } },
    },
    403: ForbiddenResponseResponse,
  },
})

export const postV1DomainVerificationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/domain_verifications/delete',
  tags: ['domain_verifications'],
  summary: 'Delete a domain verification',
  operationId: 'deleteDomainVerification',
  request: {
    body: {
      content: { 'application/json': { schema: DomainVerificationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Domain verification successfully deleted' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DomainVerificationsResetRoute = createRoute({
  method: 'post',
  path: '/v1/domain_verifications/reset',
  tags: ['domain_verifications'],
  summary: 'Reset a failed or expired domain verification',
  operationId: 'resetDomainVerification',
  request: {
    body: {
      content: { 'application/json': { schema: DomainVerificationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Domain verification reset successfully',
      content: { 'application/json': { schema: DomainVerificationResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1PrivateLinkCreateRoute = createRoute({
  method: 'post',
  path: '/v1/private_link/create',
  tags: ['private_link', 'cloud-only'],
  summary: 'Create a private link for a workspace',
  operationId: 'createPrivateLink',
  request: {
    body: { content: { 'application/json': { schema: PrivateLinkCreateRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateLinkReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1PrivateLinkListRoute = createRoute({
  method: 'post',
  path: '/v1/private_link/list',
  tags: ['private_link', 'cloud-only'],
  summary: 'List private links for a workspace',
  operationId: 'listPrivateLinksForWorkspace',
  request: {
    body: { content: { 'application/json': { schema: PrivateLinkListRequestBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateLinkReadListSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1PrivateLinkDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private_link/delete',
  tags: ['private_link', 'cloud-only'],
  summary: 'Delete a private link',
  operationId: 'deletePrivateLink',
  request: {
    body: {
      content: { 'application/json': { schema: PrivateLinkIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
  },
})

export const postV1PrivateLinkGetRoute = createRoute({
  method: 'post',
  path: '/v1/private_link/get',
  tags: ['private_link', 'cloud-only', 'internal'],
  summary: 'Get a private link by id (internal — admin only)',
  operationId: 'getPrivateLink',
  request: {
    body: {
      content: { 'application/json': { schema: PrivateLinkInternalIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateLinkReadSchema } },
    },
    404: NotFoundResponseResponse,
  },
})

export const postV1PrivateLinkUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/private_link/update',
  tags: ['private_link', 'cloud-only', 'internal'],
  summary: 'Partially update a private link (internal — admin only)',
  operationId: 'updatePrivateLink',
  request: {
    body: {
      content: { 'application/json': { schema: PrivateLinkUpdateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateLinkReadSchema } },
    },
    404: NotFoundResponseResponse,
    409: { description: 'Private link status cannot move backward' },
  },
})

export const postV1PrivateLinkListByStatusRoute = createRoute({
  method: 'post',
  path: '/v1/private_link/list_by_status',
  tags: ['private_link', 'cloud-only', 'internal'],
  summary: 'List private links by status (internal — admin only)',
  operationId: 'listPrivateLinksByStatus',
  request: {
    body: {
      content: { 'application/json': { schema: PrivateLinkListByStatusRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateLinkReadListSchema } },
    },
  },
})

export const getV1OrganizationsOrganizationIdToolCallsUsageRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{organizationId}/tool_calls/usage',
  tags: ['fusion_usage', 'cloud-only'],
  summary: 'Get organization Fusion tool-call usage',
  description:
    'Read UTC calendar day and month enforcement counters. Requires organization membership or access to a workspace in the organization.',
  operationId: 'getFusionUsage',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            name: 'organizationId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Current usage and resolved allowances',
      content: { 'application/json': { schema: FusionUsageReadSchema } },
    },
    401: { description: 'Authentication required' },
    403: { description: 'Organization access required' },
    409: { description: 'No active workspace exists for the organization' },
    502: { description: 'Invalid upstream response' },
    503: { description: 'Usage service unavailable' },
    504: { description: 'Usage service timed out' },
  },
})
