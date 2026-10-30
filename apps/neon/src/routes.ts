import { createRoute, z } from '@hono/zod-openapi'

const FeaturesSchema = z.record(z.string(), z.boolean()).openapi('Features')

const FeatureFlagsSchema = z
  .record(z.string(), z.xor([z.boolean(), z.string()]))
  .openapi('FeatureFlags')

const ComputeUnitSchema = z.number().min(0.25).openapi('ComputeUnit')

const ProvisionerSchema = z
  .string()
  .openapi({
    description:
      'The Neon compute provisioner.\nSpecify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.\n\nProvisioner can be one of the following values:\n* k8s-pod\n* k8s-neonvm\n\nClients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.\n',
  })
  .openapi('Provisioner')

const PaginationSchema = z
  .object({ cursor: z.string().min(1) })
  .openapi({
    description:
      'Cursor based pagination is used. The user must pass the cursor as is to the backend.\nFor more information about cursor based pagination, see\nhttps://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination\n',
    required: ['cursor', 'limit'],
    example: { cursor: '2022-12-07T00:45:05.262011Z' },
  })
  .openapi('Pagination')

const PaginationResponseSchema = z
  .object({ pagination: PaginationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PaginationResponse')

const EmptyResponseSchema = z
  .object({})
  .openapi({ description: 'Empty response.' })
  .openapi('EmptyResponse')

const AddProjectJWKSRequestSchema = z
  .object({
    jwks_url: z.string().openapi({ description: 'The URL that lists the JWKS' }),
    provider_name: z
      .string()
      .openapi({
        description: 'The name of the authentication provider (e.g., Clerk, Stytch, Auth0)',
      }),
    branch_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .exactOptional()
      .openapi({ description: 'Branch ID' }),
    jwt_audience: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the required JWT Audience to be used' }),
    role_names: z
      .array(z.string())
      .min(1)
      .max(10)
      .openapi({ description: 'The roles the JWKS should be mapped to' }),
  })
  .openapi({
    description: 'Add a new JWKS to a specific endpoint of a project',
    required: ['jwks_url', 'provider_name', 'role_names'],
  })
  .openapi('AddProjectJWKSRequest')

const JWKSSchema = z
  .object({
    id: z.string().openapi({ description: 'JWKS ID' }),
    project_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'Project ID' }),
    branch_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .exactOptional()
      .openapi({ description: 'Branch ID' }),
    jwks_url: z.string().openapi({ description: 'The URL that lists the JWKS' }),
    provider_name: z
      .string()
      .openapi({
        description: 'The name of the authentication provider (e.g., Clerk, Stytch, Auth0)',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the JWKS was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the JWKS was last modified' }),
    jwt_audience: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the required JWT Audience to be used' }),
  })
  .openapi({
    required: ['id', 'project_id', 'jwks_url', 'provider_name', 'created_at', 'updated_at'],
  })
  .openapi('JWKS')

const ProjectJWKSResponseSchema = z
  .object({ jwks: z.array(JWKSSchema) })
  .openapi({
    description: 'The list of configured JWKS definitions for a project',
    required: ['jwks'],
  })
  .openapi('ProjectJWKSResponse')

const ApiKeyCreateRequestSchema = z
  .object({
    key_name: z
      .string()
      .max(64)
      .openapi({
        description:
          'A user-specified API key name. This value is required when creating an API key.',
      }),
  })
  .openapi({ required: ['key_name'] })
  .openapi('ApiKeyCreateRequest')

const OrgApiKeyCreateRequestSchema = ApiKeyCreateRequestSchema.and(
  z
    .object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({ description: 'If set, the API key can access only this project' }),
    })
    .openapi({ required: [] }),
).openapi('OrgApiKeyCreateRequest')

const ApiKeyCreateResponseSchema = z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The API key ID' }),
    key: z
      .string()
      .openapi({ description: 'The generated 64-bit token required to access the Neon API' }),
    name: z.string().openapi({ description: 'The user-specified API key name' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the API key was created' }),
    created_by: z.uuid().openapi({ description: 'ID of the user who created this API key' }),
  })
  .openapi({ required: ['key', 'id', 'name', 'created_at', 'created_by'] })
  .openapi('ApiKeyCreateResponse')

const OrgApiKeyCreateResponseSchema = ApiKeyCreateResponseSchema.and(
  z
    .object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({ description: 'If set, the API key can access only this project' }),
    })
    .openapi({ required: [] }),
).openapi('OrgApiKeyCreateResponse')

const ApiKeyRevokeResponseSchema = z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The API key ID' }),
    name: z.string().openapi({ description: 'The user-specified API key name' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the API key was created' }),
    created_by: z.uuid().openapi({ description: 'ID of the user who created this API key' }),
    last_used_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'A timestamp indicating when the API was last used' }),
    last_used_from_addr: z
      .string()
      .openapi({ description: 'The IP address from which the API key was last used' }),
    revoked: z
      .boolean()
      .openapi({
        description: 'A `true` or `false` value indicating whether the API key is revoked',
      }),
  })
  .openapi({
    required: ['id', 'name', 'created_at', 'created_by', 'last_used_from_addr', 'revoked'],
  })
  .openapi('ApiKeyRevokeResponse')

const OrgApiKeyRevokeResponseSchema = ApiKeyRevokeResponseSchema.and(
  z
    .object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({ description: 'If set, the API key can access only this project' }),
    })
    .openapi({ required: [] }),
).openapi('OrgApiKeyRevokeResponse')

const ApiKeyCreatorDataSchema = z
  .object({
    id: z.uuid().openapi({ description: 'ID of the user who created this API key' }),
    name: z.string().openapi({ description: 'The name of the user.' }),
    image: z.string().openapi({ description: "The URL to the user's avatar image." }),
  })
  .openapi({
    description: 'The user data of the user that created this API key.',
    required: ['id', 'name', 'image'],
  })
  .openapi('ApiKeyCreatorData')

const ApiKeysListResponseItemSchema = z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The API key ID' }),
    name: z.string().openapi({ description: 'The user-specified API key name' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the API key was created' }),
    created_by: ApiKeyCreatorDataSchema,
    last_used_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'A timestamp indicating when the API was last used' }),
    last_used_from_addr: z
      .string()
      .openapi({ description: 'The IP address from which the API key was last used' }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'created_by', 'last_used_from_addr'] })
  .openapi('ApiKeysListResponseItem')

const OrgApiKeysListResponseItemSchema = ApiKeysListResponseItemSchema.and(
  z
    .object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({ description: 'If set, the API key can access only this project' }),
    })
    .openapi({ required: [] }),
).openapi('OrgApiKeysListResponseItem')

const OperationActionSchema = z
  .enum([
    'create_compute',
    'create_timeline',
    'start_compute',
    'suspend_compute',
    'apply_config',
    'check_availability',
    'delete_timeline',
    'create_branch',
    'tenant_ignore',
    'tenant_attach',
    'tenant_detach',
    'tenant_reattach',
    'replace_safekeeper',
    'disable_maintenance',
    'apply_storage_config',
    'prepare_secondary_pageserver',
    'switch_pageserver',
    'detach_parent_branch',
    'timeline_archive',
    'timeline_unarchive',
    'start_reserved_compute',
    'sync_dbs_and_roles_from_compute',
  ])
  .openapi({ description: 'The action performed by the operation' })
  .openapi('OperationAction')

const OperationStatusSchema = z
  .enum([
    'scheduling',
    'running',
    'finished',
    'failed',
    'error',
    'cancelling',
    'cancelled',
    'skipped',
  ])
  .openapi({ description: 'The status of the operation' })
  .openapi('OperationStatus')

const OperationSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The operation ID' }),
    project_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The Neon project ID' }),
    branch_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .exactOptional()
      .openapi({ description: 'The branch ID' }),
    endpoint_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .exactOptional()
      .openapi({ description: 'The endpoint ID' }),
    action: OperationActionSchema,
    status: OperationStatusSchema,
    error: z.string().exactOptional().openapi({ description: 'The error that occured' }),
    failures_count: z.int32().openapi({ description: 'The number of times the operation failed' }),
    retry_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'A timestamp indicating when the operation was last retried' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the operation was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'A timestamp indicating when the operation status was last updated',
      }),
    total_duration_ms: z
      .int32()
      .openapi({ description: 'The total duration of the operation in milliseconds' }),
  })
  .openapi({
    required: [
      'id',
      'project_id',
      'action',
      'status',
      'failures_count',
      'created_at',
      'updated_at',
      'total_duration_ms',
    ],
    example: [
      {
        id: 'a07f8772-1877-4da9-a939-3a3ae62d1d8d',
        project_id: 'spring-example-302709',
        branch_id: 'br-wispy-meadow-118737',
        endpoint_id: 'ep-silent-smoke-806639',
        action: 'create_branch',
        status: 'running',
        failures_count: 0,
        created_at: '2022-11-08T23:33:16Z',
        updated_at: '2022-11-08T23:33:20Z',
        total_duration_ms: 400,
      },
      {
        id: 'd8ac46eb-a757-42b1-9907-f78322ee394e',
        project_id: 'spring-example-302709',
        branch_id: 'br-wispy-meadow-118737',
        endpoint_id: 'ep-silent-smoke-806639',
        action: 'start_compute',
        status: 'finished',
        failures_count: 0,
        created_at: '2022-11-15T20:02:00Z',
        updated_at: '2022-11-15T20:02:02Z',
        total_duration_ms: 200,
      },
    ],
  })
  .openapi('Operation')

const OperationResponseSchema = z
  .object({ operation: OperationSchema })
  .openapi({ required: ['operation'] })
  .openapi('OperationResponse')

const OperationsResponseSchema = z
  .object({ operations: z.array(OperationSchema) })
  .openapi({ required: ['operations'] })
  .openapi('OperationsResponse')

const PgSettingsDataSchema = z
  .record(z.string(), z.string())
  .openapi({ description: 'A raw representation of Postgres settings' })
  .openapi('PgSettingsData')

const PgbouncerSettingsDataSchema = z
  .record(z.string(), z.string())
  .openapi({ description: 'A raw representation of PgBouncer settings' })
  .openapi('PgbouncerSettingsData')

const SuspendTimeoutSecondsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(-1n).max(604800n),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    minimum: -1,
    maximum: 604800,
    description:
      'Duration of inactivity in seconds after which the compute endpoint is\nautomatically suspended. The value `0` means use the default value.\nThe value `-1` means never suspend. The default value is `300` seconds (5 minutes).\nThe minimum value is `60` seconds (1 minute).\nThe maximum value is `604800` seconds (1 week). For more information, see\n[Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).\n',
  })
  .openapi('SuspendTimeoutSeconds')

const DefaultEndpointSettingsSchema = z
  .object({
    pg_settings: PgSettingsDataSchema.exactOptional(),
    pgbouncer_settings: PgbouncerSettingsDataSchema.exactOptional(),
    autoscaling_limit_min_cu: ComputeUnitSchema.exactOptional().openapi({
      description:
        'The minimum number of Compute Units. The minimum value is `0.25`.\nSee [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
    }),
    autoscaling_limit_max_cu: ComputeUnitSchema.exactOptional().openapi({
      description:
        'The maximum number of Compute Units. See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
    }),
    suspend_timeout_seconds: SuspendTimeoutSecondsSchema.exactOptional(),
  })
  .catchall(z.string())
  .openapi({ description: 'A collection of settings for a Neon endpoint' })
  .openapi('DefaultEndpointSettings')

const ProjectQuotaSchema = z
  .object({
    active_time_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          "The total amount of wall-clock time allowed to be spent by the project's compute endpoints.\n",
      }),
    compute_time_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          "The total amount of CPU seconds allowed to be spent by the project's compute endpoints.\n",
      }),
    written_data_bytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: "Total amount of data written to all of a project's branches.\n",
      }),
    data_transfer_bytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          "Total amount of data transferred from all of a project's branches using the proxy.\n",
      }),
    logical_size_bytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: "Limit on the logical size of every project's branch.\n",
      }),
  })
  .openapi({
    description:
      "Per-project consumption quota. If the quota is exceeded, all active computes\nare automatically suspended and it will not be possible to start them with\nan API method call or incoming proxy connections. The only exception is\n`logical_size_bytes`, which is applied on per-branch basis, i.e., only the\ncompute on the branch that exceeds the `logical_size` quota will be suspended.\n\nQuotas are enforced based on per-project consumption metrics with the same names,\nwhich are reset at the end of each billing period (the first day of the month).\nLogical size is also an exception in this case, as it represents the total size\nof data stored in a branch, so it is not reset.\n\nA zero or empty quota value means 'unlimited'.\n",
    required: [],
  })
  .openapi('ProjectQuota')

const AllowedIpsSchema = z
  .object({
    ips: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of IP addresses that are allowed to connect to the endpoint.',
      }),
    protected_branches_only: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the list will be applied only to protected branches.' }),
  })
  .openapi({
    description:
      'A list of IP addresses that are allowed to connect to the compute endpoint.\nIf the list is empty or not set, all IP addresses are allowed.\nIf protected_branches_only is true, the list will be applied only to protected branches.\n',
    required: [],
  })
  .openapi('AllowedIps')

const MaintenanceWindowSchema = z
  .object({
    weekdays: z
      .array(z.int())
      .openapi({
        description:
          'A list of weekdays when the maintenance window is active.\nEncoded as ints, where 1 - Monday, and 7 - Sunday.\n',
      }),
    start_time: z
      .string()
      .openapi({
        description: 'Start time of the maintenance window, in the format of "HH:MM". Uses UTC.\n',
      }),
    end_time: z
      .string()
      .openapi({
        description: 'End time of the maintenance window, in the format of "HH:MM". Uses UTC.\n',
      }),
  })
  .openapi({
    description:
      "A maintenance window is a time period during which Neon may perform maintenance on the project's infrastructure.\nDuring this time, the project's compute endpoints may be unavailable and existing connections can be\ninterrupted.\n",
    required: ['weekdays', 'start_time', 'end_time'],
  })
  .openapi('MaintenanceWindow')

const ProjectSettingsDataSchema = z
  .object({
    quota: ProjectQuotaSchema.exactOptional(),
    allowed_ips: AllowedIpsSchema.exactOptional(),
    enable_logical_replication: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Sets wal_level=logical for all compute endpoints in this project.\nAll active endpoints will be suspended.\nOnce enabled, logical replication cannot be disabled.\n',
      }),
    maintenance_window: MaintenanceWindowSchema.exactOptional(),
    block_public_connections: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set, connections from the public internet\nare disallowed. This supersedes the AllowedIPs list.\nThis parameter is under active development and its semantics may change in the future.\n',
      }),
    block_vpc_connections: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set, connections using VPC endpoints are disallowed.\nThis parameter is under active development and its semantics may change in the future.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProjectSettingsData')

const PgVersionSchema = z
  .int()
  .min(14)
  .max(17)
  .default(17)
  .openapi({
    description:
      'The major Postgres version number. Currently supported versions are `14`, `15`, `16`, and `17`.',
  })
  .openapi('PgVersion')

const ProjectListItemSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The project ID' }),
    platform_id: z
      .string()
      .openapi({
        description:
          'The cloud platform identifier. Currently, only AWS is supported, for which the identifier is `aws`.\n',
      }),
    region_id: z.string().openapi({ description: 'The region identifier\n' }),
    name: z.string().openapi({ description: 'The project name\n' }),
    provisioner: ProvisionerSchema,
    default_endpoint_settings: DefaultEndpointSettingsSchema.exactOptional(),
    settings: ProjectSettingsDataSchema.exactOptional(),
    pg_version: PgVersionSchema,
    proxy_host: z
      .string()
      .openapi({
        description:
          'The proxy host for the project. This value combines the `region_id`, the `platform_id`, and the Neon domain (`neon.tech`).\n',
      }),
    branch_logical_size_limit: z
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
        description: 'The logical size limit for a branch. The value is in MiB.\n',
      }),
    branch_logical_size_limit_bytes: z
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
        description: 'The logical size limit for a branch. The value is in B.\n',
      }),
    store_passwords: z
      .boolean()
      .openapi({
        description:
          'Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.\n',
      }),
    active_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Control plane observed endpoints of this project being active this amount of wall-clock time.\n',
      }),
    cpu_used_sec: z
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
        deprecated: true,
        description: 'DEPRECATED. Use data from the getProject endpoint instead.\n',
      }),
    maintenance_starts_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A timestamp indicating when project maintenance begins. If set, the project is placed into maintenance mode at this time.\n',
      }),
    creation_source: z.string().openapi({ description: 'The project creation source\n' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the project was created\n' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the project was last updated\n' }),
    synthetic_storage_size: z
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
          'The current space occupied by the project in storage, in bytes. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches in a project.\n',
      }),
    quota_reset_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'DEPRECATED. Use `consumption_period_end` from the getProject endpoint instead.\nA timestamp indicating when the project quota resets\n',
      }),
    owner_id: z.string(),
    compute_last_active_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The most recent time when any endpoint of this project was active.\n\nOmitted when observed no actitivy for endpoints of this project.\n',
      }),
    org_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .exactOptional()
      .openapi({
        description:
          'Organization id if a project belongs to organization.\nPermissions for the project will be given to organization members as defined by the organization admins.\nThe permissions of the project do not depend on the user that created the project if a project belongs to an organization.\n',
      }),
  })
  .openapi({
    description:
      'Essential data about the project. Full data is available at the getProject endpoint.\n',
    required: [
      'active_time',
      'id',
      'platform_id',
      'region_id',
      'name',
      'pg_version',
      'proxy_host',
      'branch_logical_size_limit',
      'branch_logical_size_limit_bytes',
      'provisioner',
      'store_passwords',
      'cpu_used_sec',
      'creation_source',
      'created_at',
      'updated_at',
      'owner_id',
    ],
    example: {
      id: 'spring-example-302709',
      platform_id: 'aws',
      region_id: 'aws-us-east-2',
      name: 'spring-example-302709',
      provisioner: 'k8s-pod',
      pg_version: 15,
      proxy_host: 'us-east-2.aws.neon.tech',
      store_passwords: true,
      creation_source: 'console',
      created_at: '2022-12-13T01:30:55Z',
      updated_at: '2022-12-13T01:30:55Z',
    },
  })
  .openapi('ProjectListItem')

const BillingSubscriptionTypeSchema = z
  .enum([
    'UNKNOWN',
    'direct_sales',
    'aws_marketplace',
    'free_v2',
    'launch',
    'scale',
    'business',
    'vercel_pg_legacy',
  ])
  .openapi({
    description:
      'Type of subscription to Neon Cloud.\nNotice that for users without billing account this will be "UNKNOWN"\n',
  })
  .openapi('BillingSubscriptionType')

const ProjectOwnerDataSchema = z
  .object({
    email: z.string(),
    name: z.string(),
    branches_limit: z.int(),
    subscription_type: BillingSubscriptionTypeSchema,
  })
  .openapi({ required: ['email', 'name', 'branches_limit', 'subscription_type'] })
  .openapi('ProjectOwnerData')

const ProjectSchema = z
  .object({
    data_storage_bytes_hour: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Bytes-Hour. Project consumed that much storage hourly during the billing period. The value has some lag.\nThe value is reset at the beginning of each billing period.\n',
      }),
    data_transfer_bytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Bytes. Egress traffic from the Neon cloud to the client for given project over the billing period.\nIncludes deleted endpoints. The value has some lag. The value is reset at the beginning of each billing period.\n',
      }),
    written_data_bytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Bytes. Amount of WAL that travelled through storage for given project across all branches.\nThe value has some lag. The value is reset at the beginning of each billing period.\n',
      }),
    compute_time_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          "Seconds. The number of CPU seconds used by the project's compute endpoints, including compute endpoints that have been deleted.\nThe value has some lag. The value is reset at the beginning of each billing period.\nExamples:\n1. An endpoint that uses 1 CPU for 1 second is equal to `compute_time=1`.\n2. An endpoint that uses 2 CPUs simultaneously for 1 second is equal to `compute_time=2`.\n",
      }),
    active_time_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Seconds. Control plane observed endpoints of this project being active this amount of wall-clock time.\nThe value has some lag.\nThe value is reset at the beginning of each billing period.\n',
      }),
    cpu_used_sec: z
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
        description: 'DEPRECATED, use compute_time instead.\n',
        deprecated: true,
      }),
    id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The project ID' }),
    platform_id: z
      .string()
      .openapi({
        description:
          'The cloud platform identifier. Currently, only AWS is supported, for which the identifier is `aws`.\n',
      }),
    region_id: z.string().openapi({ description: 'The region identifier\n' }),
    name: z.string().openapi({ description: 'The project name\n' }),
    provisioner: ProvisionerSchema,
    default_endpoint_settings: DefaultEndpointSettingsSchema.exactOptional(),
    settings: ProjectSettingsDataSchema.exactOptional(),
    pg_version: PgVersionSchema,
    proxy_host: z
      .string()
      .openapi({
        description:
          'The proxy host for the project. This value combines the `region_id`, the `platform_id`, and the Neon domain (`neon.tech`).\n',
      }),
    branch_logical_size_limit: z
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
        description: 'The logical size limit for a branch. The value is in MiB.\n',
      }),
    branch_logical_size_limit_bytes: z
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
        description: 'The logical size limit for a branch. The value is in B.\n',
      }),
    store_passwords: z
      .boolean()
      .openapi({
        description:
          'Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.\n',
      }),
    maintenance_starts_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A timestamp indicating when project maintenance begins. If set, the project is placed into maintenance mode at this time.\n',
      }),
    creation_source: z.string().openapi({ description: 'The project creation source\n' }),
    history_retention_seconds: z
      .int32()
      .openapi({
        description:
          'The number of seconds to retain the shared history for all branches in this project. The default for all plans is 1 day (86400 seconds).\n',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the project was created\n' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the project was last updated\n' }),
    synthetic_storage_size: z
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
          'The current space occupied by the project in storage, in bytes. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches in a project.\n',
      }),
    consumption_period_start: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'A date-time indicating when Neon Cloud started measuring consumption for current consumption period.\n',
      }),
    consumption_period_end: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period.\n',
      }),
    quota_reset_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'DEPRECATED. Use `consumption_period_end` from the getProject endpoint instead.\nA timestamp indicating when the project quota resets.\n',
      }),
    owner_id: z.string(),
    owner: ProjectOwnerDataSchema.exactOptional(),
    compute_last_active_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The most recent time when any endpoint of this project was active.\n\nOmitted when observed no actitivy for endpoints of this project.\n',
      }),
    org_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .exactOptional(),
  })
  .openapi({
    required: [
      'consumption_period_end',
      'consumption_period_start',
      'active_time_seconds',
      'compute_time_seconds',
      'written_data_bytes',
      'data_transfer_bytes',
      'data_storage_bytes_hour',
      'id',
      'platform_id',
      'region_id',
      'name',
      'pg_version',
      'proxy_host',
      'branch_logical_size_limit',
      'branch_logical_size_limit_bytes',
      'store_passwords',
      'cpu_used_sec',
      'provisioner',
      'creation_source',
      'history_retention_seconds',
      'created_at',
      'updated_at',
      'owner_id',
    ],
    example: {
      id: 'spring-example-302709',
      platform_id: 'aws',
      region_id: 'aws-us-east-2',
      name: 'spring-example-302709',
      provisioner: 'k8s-pod',
      pg_version: 15,
      proxy_host: 'us-east-2.aws.neon.tech',
      store_passwords: true,
      creation_source: 'console',
      history_retention_seconds: 604800,
      created_at: '2022-12-13T01:30:55Z',
      updated_at: '2022-12-13T01:30:55Z',
      owner: {
        name: 'John Smith',
        email: 'some@email.com',
        branches_limit: 10,
        subscription_type: 'scale',
      },
      org_id: 'org-morning-bread-81040908',
    },
  })
  .openapi('Project')

const ProjectCreateRequestSchema = z
  .object({
    project: z
      .object({
        settings: ProjectSettingsDataSchema.exactOptional(),
        name: z.string().exactOptional().openapi({ description: 'The project name' }),
        branch: z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The default branch name. If not specified, the default branch name, `main`, will be used.\n',
              }),
            role_name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The role name. If not specified, the default role name, `{database_name}_owner`, will be used.\n',
              }),
            database_name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The database name. If not specified, the default database name, `neondb`, will be used.\n',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        autoscaling_limit_min_cu: ComputeUnitSchema.exactOptional().openapi({
          deprecated: true,
          description:
            'DEPRECATED, use default_endpoint_settings.autoscaling_limit_min_cu instead.\n\nThe minimum number of Compute Units. The minimum value is `0.25`.\nSee [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
        }),
        autoscaling_limit_max_cu: ComputeUnitSchema.exactOptional().openapi({
          deprecated: true,
          description:
            'DEPRECATED, use default_endpoint_settings.autoscaling_limit_max_cu instead.\n\nThe maximum number of Compute Units. See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
        }),
        provisioner: ProvisionerSchema.exactOptional(),
        region_id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The region identifier. Refer to our [Regions](https://neon.tech/docs/introduction/regions) documentation for supported regions. Values are specified in this format: `aws-us-east-1`\n',
          }),
        default_endpoint_settings: DefaultEndpointSettingsSchema.exactOptional(),
        pg_version: PgVersionSchema.exactOptional(),
        store_passwords: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.\n',
          }),
        history_retention_seconds: z
          .int32()
          .min(0)
          .max(2592000)
          .exactOptional()
          .openapi({
            description:
              'The number of seconds to retain the shared history for all branches in this project.\nThe default is 1 day (86400 seconds).\n',
          }),
        org_id: z
          .string()
          .regex(/^[a-z0-9-]{1,60}$/)
          .exactOptional()
          .openapi({
            description:
              'Organization id in case the project created belongs to an organization.\nIf not present, project is owned by a user and not by org.\n',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['project'] })
  .openapi('ProjectCreateRequest')

const ProjectUpdateRequestSchema = z
  .object({
    project: z
      .object({
        settings: ProjectSettingsDataSchema.exactOptional(),
        name: z.string().exactOptional().openapi({ description: 'The project name' }),
        default_endpoint_settings: DefaultEndpointSettingsSchema.exactOptional(),
        history_retention_seconds: z
          .int32()
          .min(0)
          .max(2592000)
          .exactOptional()
          .openapi({
            description:
              'The number of seconds to retain the shared history for all branches in this project.\nThe default is 1 day (604800 seconds).\n',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['project'] })
  .openapi('ProjectUpdateRequest')

const ProjectResponseSchema = z
  .object({ project: ProjectSchema })
  .openapi({ required: ['project'] })
  .openapi('ProjectResponse')

const ProjectsResponseSchema = z
  .object({
    projects: z.array(ProjectListItemSchema),
    unavailable_project_ids: z
      .array(z.string().regex(/^[a-z0-9-]{1,60}$/))
      .exactOptional()
      .openapi({
        description:
          'A list of project IDs indicating which projects are known to exist, but whose details could not\nbe fetched within the requested (or implicit) time limit\n',
      }),
  })
  .openapi({ required: ['projects'] })
  .openapi('ProjectsResponse')

const ProjectPermissionSchema = z
  .object({
    id: z.string(),
    granted_to_email: z.string(),
    granted_at: z.iso.datetime({ offset: true }),
    revoked_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['id', 'granted_to_email', 'granted_at'] })
  .openapi('ProjectPermission')

const ProjectPermissionsSchema = z
  .object({ project_permissions: z.array(ProjectPermissionSchema) })
  .openapi({ required: ['project_permissions'] })
  .openapi('ProjectPermissions')

const GrantPermissionToProjectRequestSchema = z
  .object({ email: z.string() })
  .openapi({ required: ['email'] })
  .openapi('GrantPermissionToProjectRequest')

const ConsumptionHistoryPerTimeframeSchema = z
  .object({
    timeframe_start: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The specified start date-time for the reported consumption.\n' }),
    timeframe_end: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The specified end date-time for the reported consumption.\n' }),
    active_time_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Seconds. The amount of time the compute endpoints have been active.\n',
      }),
    compute_time_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description:
          'Seconds. The number of CPU seconds used by compute endpoints, including compute endpoints that have been deleted.\n',
      }),
    written_data_bytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Bytes. The amount of written data for all branches.\n',
      }),
    synthetic_storage_size_bytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description:
          'Bytes. The space occupied in storage. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches.\n',
      }),
    data_storage_bytes_hour: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Bytes-Hour. The amount of storage consumed hourly.\n',
      }),
  })
  .openapi({
    required: [
      'timeframe_start',
      'timeframe_end',
      'active_time_seconds',
      'compute_time_seconds',
      'written_data_bytes',
      'synthetic_storage_size_bytes',
    ],
  })
  .openapi('ConsumptionHistoryPerTimeframe')

const ConsumptionHistoryPerPeriodSchema = z
  .object({
    period_id: z
      .uuid()
      .openapi({ description: 'The ID assigned to the specified billing period.' }),
    period_plan: z
      .string()
      .openapi({ description: 'The billing plan applicable during the billing period.' }),
    period_start: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The start date-time of the billing period.\n' }),
    period_end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The end date-time of the billing period, available for the past periods only.\n',
      }),
    consumption: z.array(ConsumptionHistoryPerTimeframeSchema),
  })
  .openapi({
    required: ['period_id', 'period_plan', 'period_start', 'consumption'],
    example: {
      period_id: '79ec829f-1828-4006-ac82-9f1828a0067d',
      period_plan: 'scale',
      period_start: '2024-03-01T00:00:00Z',
      consumption: [
        {
          timeframe_start: '2024-03-22T00:00:00Z',
          timeframe_end: '2024-03-23T00:00:00Z',
          active_time_seconds: 27853,
          compute_time_seconds: 18346,
          written_data_bytes: 1073741824,
          synthetic_storage_size_bytes: 5368709120,
        },
        {
          timeframe_start: '2024-03-23T00:00:00Z',
          timeframe_end: '2024-03-24T00:00:00Z',
          active_time_seconds: 17498,
          compute_time_seconds: 3378,
          written_data_bytes: 5741824,
          synthetic_storage_size_bytes: 2370912,
        },
      ],
    },
  })
  .openapi('ConsumptionHistoryPerPeriod')

const ConsumptionHistoryPerAccountResponseSchema = z
  .object({ periods: z.array(ConsumptionHistoryPerPeriodSchema) })
  .openapi({ required: ['periods'] })
  .openapi('ConsumptionHistoryPerAccountResponse')

const ConsumptionHistoryPerProjectSchema = z
  .object({
    project_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The project ID' }),
    periods: z.array(ConsumptionHistoryPerPeriodSchema),
  })
  .openapi({ required: ['project_id', 'periods'] })
  .openapi('ConsumptionHistoryPerProject')

const ConsumptionHistoryPerProjectResponseSchema = z
  .object({ projects: z.array(ConsumptionHistoryPerProjectSchema) })
  .openapi({ required: ['projects'] })
  .openapi('ConsumptionHistoryPerProjectResponse')

const ConsumptionHistoryGranularitySchema = z
  .enum(['hourly', 'daily', 'monthly'])
  .openapi('ConsumptionHistoryGranularity')

const LimitsSchema = z
  .object({
    active_time: z
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
    max_projects: z.int(),
    max_branches: z.int(),
    max_protected_branches: z.int(),
    max_autoscaling_cu: z.float64(),
    max_fixed_size_cu: z.float64(),
    cpu_seconds: z
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
    max_compute_time_non_primary: z
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
    max_active_endpoints: z.int(),
    max_read_only_endpoints: z.int(),
    max_allowed_ips: z.int(),
    max_vpc_endpoints_per_region: z.int(),
    max_monitoring_retention_hours: z.int(),
    max_history_retention_seconds: z.int32(),
    min_autosuspend_seconds: z.int(),
    max_data_transfer: z
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
    min_idle_seconds_to_autoarchive: z
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
    min_age_seconds_to_autoarchive: z
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
    max_branch_roles: z.int(),
    max_branch_databases: z.int(),
    max_concurrent_scheduled_operation_chains_per_project: z.int(),
    max_concurrent_executing_operation_chains_per_project: z.int(),
  })
  .openapi({
    required: [
      'active_time',
      'max_projects',
      'max_branches',
      'max_protected_branches',
      'max_autoscaling_cu',
      'max_fixed_size_cu',
      'cpu_seconds',
      'max_compute_time_non_primary',
      'max_active_endpoints',
      'max_read_only_endpoints',
      'max_allowed_ips',
      'max_vpc_endpoints_per_region',
      'max_monitoring_retention_hours',
      'max_history_retention_seconds',
      'min_autosuspend_seconds',
      'max_data_transfer',
      'min_idle_seconds_to_autoarchive',
      'min_age_seconds_to_autoarchive',
      'max_branch_roles',
      'max_branch_databases',
      'max_concurrent_scheduled_operation_chains_per_project',
      'max_concurrent_executing_operation_chains_per_project',
    ],
  })
  .openapi('Limits')

const ProjectLimitsSchema = z
  .object({ limits: LimitsSchema, features: FeaturesSchema })
  .openapi({ required: ['limits', 'features'] })
  .openapi('ProjectLimits')

const BranchStateSchema = z
  .string()
  .openapi({
    description:
      "The branch’s state, indicating if it is initializing, ready for use, or archived.\n  * 'init' - the branch is being created but is not available for querying.\n  * 'ready' - the branch is fully operational and ready for querying. Expect normal query response times.\n  * 'archived' - the branch is stored in cost-effective archival storage. Expect slow query response times.\n",
  })
  .openapi('BranchState')

const BranchSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({
        description:
          'The branch ID. This value is generated when a branch is created. A `branch_id` value has a `br` prefix. For example: `br-small-term-683261`.\n',
      }),
    project_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The ID of the project to which the branch belongs\n' }),
    parent_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .exactOptional()
      .openapi({ description: 'The `branch_id` of the parent branch\n' }),
    parent_lsn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Log Sequence Number (LSN) on the parent branch from which this branch was created\n',
      }),
    parent_timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The point in time on the parent branch from which this branch was created\n',
      }),
    name: z.string().openapi({ description: 'The branch name\n' }),
    current_state: BranchStateSchema,
    pending_state: BranchStateSchema.exactOptional(),
    state_changed_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A UTC timestamp indicating when the `current_state` began\n' }),
    logical_size: z
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
        description: 'The logical size of the branch, in bytes\n',
      }),
    creation_source: z.string().openapi({ description: 'The branch creation source\n' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "DEPRECATED. Use `default` field.\nWhether the branch is the project's primary branch\n",
      }),
    default: z
      .boolean()
      .openapi({ description: "Whether the branch is the project's default branch\n" }),
    protected: z.boolean().openapi({ description: 'Whether the branch is protected\n' }),
    cpu_used_sec: z
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
        deprecated: true,
        description:
          "CPU seconds used by all of the branch's compute endpoints, including deleted ones.\nThis value is reset at the beginning of each billing period.\nExamples:\n1. A branch that uses 1 CPU for 1 second is equal to `cpu_used_sec=1`.\n2. A branch that uses 2 CPUs simultaneously for 1 second is equal to `cpu_used_sec=2`.\n",
      }),
    compute_time_seconds: z
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
    active_time_seconds: z
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
    written_data_bytes: z
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
    data_transfer_bytes: z
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
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the branch was created\n' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the branch was last updated\n' }),
    last_reset_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'A timestamp indicating when the branch was last reset\n' }),
    created_by: z
      .object({
        name: z.string().exactOptional().openapi({ description: 'The name of the user.' }),
        image: z
          .string()
          .exactOptional()
          .openapi({ description: "The URL to the user's avatar image." }),
      })
      .exactOptional()
      .openapi({
        description:
          'The resolved user model that contains details of the user/org/integration/api_key used for branch creation. This field is filled only in listing/get/create/get/update/delete methods, if it is empty when calling other handlers, it does not mean that it is empty in the system.\n',
        required: [],
      }),
  })
  .openapi({
    required: [
      'id',
      'project_id',
      'name',
      'current_state',
      'state_changed_at',
      'creation_source',
      'created_at',
      'updated_at',
      'default',
      'protected',
      'cpu_used_sec',
      'active_time_seconds',
      'compute_time_seconds',
      'written_data_bytes',
      'data_transfer_bytes',
    ],
    example: {
      id: 'br-wispy-meadow-118737',
      project_id: 'spring-example-302709',
      parent_id: 'br-aged-salad-637688',
      parent_lsn: '0/1DE2850',
      name: 'dev2',
      protected: false,
      current_state: 'ready',
      state_changed_at: '2022-11-30T20:09:48Z',
      creation_source: 'console',
      created_at: '2022-11-30T19:09:48Z',
      updated_at: '2022-12-01T19:53:05Z',
      default: true,
    },
  })
  .openapi('Branch')

const EndpointTypeSchema = z
  .enum(['read_only', 'read_write'])
  .openapi({ description: 'The compute endpoint type. Either `read_write` or `read_only`.\n' })
  .openapi('EndpointType')

const BranchCreateRequestEndpointOptionsSchema = z
  .object({
    type: EndpointTypeSchema,
    autoscaling_limit_min_cu: ComputeUnitSchema.exactOptional().openapi({
      description:
        'The minimum number of Compute Units. The minimum value is `0.25`.\n    See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\n    for more information.\n',
    }),
    autoscaling_limit_max_cu: ComputeUnitSchema.exactOptional().openapi({
      description:
        'The maximum number of Compute Units.\n    See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\n    for more information.\n',
    }),
    provisioner: ProvisionerSchema.exactOptional(),
    suspend_timeout_seconds: SuspendTimeoutSecondsSchema.exactOptional(),
  })
  .openapi({ required: ['type'] })
  .openapi('BranchCreateRequestEndpointOptions')

const BranchCreateRequestSchema = z
  .object({
    endpoints: z.array(BranchCreateRequestEndpointOptionsSchema).exactOptional(),
    branch: z
      .object({
        parent_id: z
          .string()
          .regex(/^[a-z0-9-]{1,60}$/)
          .exactOptional()
          .openapi({
            description:
              "The `branch_id` of the parent branch. If omitted or empty, the branch will be created from the project's default branch.\n",
          }),
        name: z.string().exactOptional().openapi({ description: 'The branch name\n' }),
        parent_lsn: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A Log Sequence Number (LSN) on the parent branch. The branch will be created with data from this LSN.\n',
          }),
        parent_timestamp: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'A timestamp identifying a point in time on the parent branch. The branch will be created with data starting from this point in time.\nThe timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.\n',
          }),
        protected: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the branch is protected\n' }),
        archived: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to create the branch as archived\n' }),
        init_source: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The initialization source type for the branch. Valid values are `import`, `empty`, `schema` and `parent-data`.\nThis parameter is under active development and may change its semantics in the future.\n',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('BranchCreateRequest')

const BranchUpdateRequestSchema = z
  .object({
    branch: z
      .object({ name: z.string().exactOptional(), protected: z.boolean().exactOptional() })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['branch'] })
  .openapi('BranchUpdateRequest')

const BranchRestoreRequestSchema = z
  .object({
    source_branch_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({
        description:
          "The `branch_id` of the restore source branch.\nIf `source_timestamp` and `source_lsn` are omitted, the branch will be restored to head.\nIf `source_branch_id` is equal to the branch's id, `source_timestamp` or `source_lsn` is required.\n",
      }),
    source_lsn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Log Sequence Number (LSN) on the source branch. The branch will be restored with data from this LSN.\n',
      }),
    source_timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A timestamp identifying a point in time on the source branch. The branch will be restored with data starting from this point in time.\nThe timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.\n',
      }),
    preserve_under_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If not empty, the previous state of the branch will be saved to a branch with this name.\nIf the branch has children or the `source_branch_id` is equal to the branch id, this field is required. All existing child branches will be moved to the newly created branch under the name `preserve_under_name`.\n',
      }),
  })
  .openapi({ required: ['source_branch_id'] })
  .openapi('BranchRestoreRequest')

const BranchResponseSchema = z
  .object({ branch: BranchSchema })
  .openapi({ required: ['branch'] })
  .openapi('BranchResponse')

const BranchSchemaResponseSchema = z
  .object({ sql: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BranchSchemaResponse')

const BranchSchemaCompareResponseSchema = z
  .object({ diff: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BranchSchemaCompareResponse')

const BranchesResponseSchema = z
  .object({ branches: z.array(BranchSchema) })
  .openapi({ required: ['branches'] })
  .openapi('BranchesResponse')

const BranchesCountResponseSchema = z
  .object({ count: z.int() })
  .openapi({ required: ['count'] })
  .openapi('BranchesCountResponse')

const ConnectionParametersSchema = z
  .object({
    database: z.string().openapi({ description: 'Database name\n' }),
    password: z.string().openapi({ description: 'Password for the role\n' }),
    role: z.string().openapi({ description: 'Role name\n' }),
    host: z.string().openapi({ description: 'Hostname\n' }),
    pooler_host: z.string().openapi({ description: 'Pooler hostname\n' }),
  })
  .openapi({ required: ['database', 'password', 'role', 'host', 'pooler_host'] })
  .openapi('ConnectionParameters')

const ConnectionDetailsSchema = z
  .object({
    connection_uri: z
      .string()
      .openapi({
        description:
          'The connection URI is defined as specified here: [Connection URIs](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS)\nThe connection URI can be used to connect to a Postgres database with psql or defined in a DATABASE_URL environment variable.\nWhen creating a branch from a parent with more than one role or database, the response body does not include a connection URI.\n',
      }),
    connection_parameters: ConnectionParametersSchema,
  })
  .openapi({ required: ['connection_uri', 'connection_parameters'] })
  .openapi('ConnectionDetails')

const ConnectionURIResponseSchema = z
  .object({ uri: z.string().openapi({ description: 'The connection URI.\n' }) })
  .openapi({ required: ['uri'] })
  .openapi('ConnectionURIResponse')

const EndpointStateSchema = z
  .enum(['init', 'active', 'idle'])
  .openapi({ description: 'The state of the compute endpoint\n' })
  .openapi('EndpointState')

const EndpointSettingsDataSchema = z
  .object({
    pg_settings: PgSettingsDataSchema.exactOptional(),
    pgbouncer_settings: PgbouncerSettingsDataSchema.exactOptional(),
  })
  .openapi({ description: 'A collection of settings for a compute endpoint', required: [] })
  .openapi('EndpointSettingsData')

const EndpointPoolerModeSchema = z
  .literal('transaction')
  .openapi({
    description:
      'The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.\n',
  })
  .openapi('EndpointPoolerMode')

const EndpointSchema = z
  .object({
    host: z
      .string()
      .openapi({
        description:
          'The hostname of the compute endpoint. This is the hostname specified when connecting to a Neon database.\n',
      }),
    id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({
        description:
          'The compute endpoint ID. Compute endpoint IDs have an `ep-` prefix. For example: `ep-little-smoke-851426`\n',
      }),
    project_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The ID of the project to which the compute endpoint belongs\n' }),
    branch_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({
        description: 'The ID of the branch that the compute endpoint is associated with\n',
      }),
    autoscaling_limit_min_cu: ComputeUnitSchema.openapi({
      description: 'The minimum number of Compute Units\n',
    }),
    autoscaling_limit_max_cu: ComputeUnitSchema.openapi({
      description: 'The maximum number of Compute Units\n',
    }),
    region_id: z.string().openapi({ description: 'The region identifier\n' }),
    type: EndpointTypeSchema,
    current_state: EndpointStateSchema,
    pending_state: EndpointStateSchema.exactOptional(),
    settings: EndpointSettingsDataSchema,
    pooler_enabled: z
      .boolean()
      .openapi({ description: 'Whether connection pooling is enabled for the compute endpoint\n' }),
    pooler_mode: EndpointPoolerModeSchema,
    disabled: z
      .boolean()
      .openapi({
        description:
          'Whether to restrict connections to the compute endpoint.\nEnabling this option schedules a suspend compute operation.\nA disabled compute endpoint cannot be enabled by a connection or\nconsole action. However, the compute endpoint is periodically\nenabled by check_availability operations.\n',
      }),
    passwordless_access: z
      .boolean()
      .openapi({ description: 'Whether to permit passwordless access to the compute endpoint\n' }),
    last_active: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'A timestamp indicating when the compute endpoint was last active\n',
      }),
    creation_source: z.string().openapi({ description: 'The compute endpoint creation source\n' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the compute endpoint was created\n' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'A timestamp indicating when the compute endpoint was last updated\n',
      }),
    proxy_host: z
      .string()
      .openapi({ description: 'DEPRECATED. Use the "host" property instead.\n' }),
    suspend_timeout_seconds: SuspendTimeoutSecondsSchema,
    provisioner: ProvisionerSchema,
    compute_release_version: z
      .string()
      .exactOptional()
      .openapi({ description: "Attached compute's release version number.\n" }),
  })
  .openapi({
    required: [
      'host',
      'id',
      'project_id',
      'branch_id',
      'region_id',
      'autoscaling_limit_max_cu',
      'autoscaling_limit_min_cu',
      'type',
      'current_state',
      'pooler_enabled',
      'pooler_mode',
      'disabled',
      'passwordless_access',
      'creation_source',
      'created_at',
      'updated_at',
      'settings',
      'proxy_host',
      'suspend_timeout_seconds',
      'provisioner',
    ],
    example: {
      host: 'ep-silent-smoke-806639.us-east-2.aws.neon.tech',
      id: 'ep-silent-smoke-806639',
      project_id: 'spring-example-302709',
      branch_id: 'br-wispy-meadow-118737',
      autoscaling_limit_min_cu: 1,
      autoscaling_limit_max_cu: 1,
      region_id: 'aws-us-east-2',
      type: 'read_write',
      current_state: 'init',
      pending_state: 'active',
      settings: { pg_settings: {} },
      pooler_enabled: false,
      pooler_mode: 'transaction',
      disabled: false,
      passwordless_access: true,
      creation_source: 'console',
      created_at: '2022-12-03T15:37:07Z',
      updated_at: '2022-12-03T15:37:07Z',
      proxy_host: 'us-east-2.aws.neon.tech',
      suspend_timeout_seconds: 0,
    },
  })
  .openapi('Endpoint')

const EndpointCreateRequestSchema = z
  .object({
    endpoint: z
      .object({
        branch_id: z
          .string()
          .regex(/^[a-z0-9-]{1,60}$/)
          .openapi({
            description: 'The ID of the branch the compute endpoint will be associated with\n',
          }),
        region_id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The region where the compute endpoint will be created. Only the project's `region_id` is permitted.\n",
          }),
        type: EndpointTypeSchema,
        settings: EndpointSettingsDataSchema.exactOptional(),
        autoscaling_limit_min_cu: ComputeUnitSchema.exactOptional().openapi({
          description:
            'The minimum number of Compute Units. The minimum value is `0.25`.\nSee [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
        }),
        autoscaling_limit_max_cu: ComputeUnitSchema.exactOptional().openapi({
          description:
            'The maximum number of Compute Units.\nSee [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
        }),
        provisioner: ProvisionerSchema.exactOptional(),
        pooler_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Whether to enable connection pooling for the compute endpoint\n',
          }),
        pooler_mode: EndpointPoolerModeSchema.exactOptional(),
        disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether to restrict connections to the compute endpoint.\nEnabling this option schedules a suspend compute operation.\nA disabled compute endpoint cannot be enabled by a connection or\nconsole action. However, the compute endpoint is periodically\nenabled by check_availability operations.\n',
          }),
        passwordless_access: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.\n',
          }),
        suspend_timeout_seconds: SuspendTimeoutSecondsSchema.exactOptional(),
      })
      .openapi({ required: ['branch_id', 'type'] }),
  })
  .openapi({ required: ['endpoint'] })
  .openapi('EndpointCreateRequest')

const EndpointUpdateRequestSchema = z
  .object({
    endpoint: z
      .object({
        branch_id: z
          .string()
          .regex(/^[a-z0-9-]{1,60}$/)
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'DEPRECATED: This field will be removed in a future release.\nThe destination branch ID. The destination branch must not have an exsiting read-write endpoint.\n',
          }),
        autoscaling_limit_min_cu: ComputeUnitSchema.exactOptional().openapi({
          description:
            'The minimum number of Compute Units. The minimum value is `0.25`.\nSee [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
        }),
        autoscaling_limit_max_cu: ComputeUnitSchema.exactOptional().openapi({
          description:
            'The maximum number of Compute Units.\nSee [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n',
        }),
        provisioner: ProvisionerSchema.exactOptional(),
        settings: EndpointSettingsDataSchema.exactOptional(),
        pooler_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Whether to enable connection pooling for the compute endpoint\n',
          }),
        pooler_mode: EndpointPoolerModeSchema.exactOptional(),
        disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether to restrict connections to the compute endpoint.\nEnabling this option schedules a suspend compute operation.\nA disabled compute endpoint cannot be enabled by a connection or\nconsole action. However, the compute endpoint is periodically\nenabled by check_availability operations.\n',
          }),
        passwordless_access: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.\n',
          }),
        suspend_timeout_seconds: SuspendTimeoutSecondsSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['endpoint'] })
  .openapi('EndpointUpdateRequest')

const EndpointResponseSchema = z
  .object({ endpoint: EndpointSchema })
  .openapi({ required: ['endpoint'] })
  .openapi('EndpointResponse')

const ConnectionURIsResponseSchema = z
  .object({ connection_uris: z.array(ConnectionDetailsSchema) })
  .openapi({ required: ['connection_uris'] })
  .openapi('ConnectionURIsResponse')

const ConnectionURIsOptionalResponseSchema = z
  .object({ connection_uris: z.array(ConnectionDetailsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ConnectionURIsOptionalResponse')

const VPCEndpointSchema = z
  .object({ vpc_endpoint_id: z.string(), label: z.string() })
  .openapi({ required: ['vpc_endpoint_id', 'label'] })
  .openapi('VPCEndpoint')

const VPCEndpointsResponseSchema = z
  .object({ endpoints: z.array(VPCEndpointSchema) })
  .openapi({ required: ['endpoints'] })
  .openapi('VPCEndpointsResponse')

const VPCEndpointDetailsSchema = z
  .object({
    vpc_endpoint_id: z.string().openapi({ description: 'The ID of the VPC endpoint' }),
    label: z.string().openapi({ description: 'The custom descriptive label for the VPC endpoint' }),
    state: z
      .string()
      .openapi({
        description:
          'The current state of the VPC endpoint. Possible values are\n`new` (just configured, pending acceptance) or `accepted`\n(VPC connection was accepted by Neon).\n',
      }),
    num_restricted_projects: z
      .int()
      .openapi({
        description: 'The number of projects that are restricted to use this VPC endpoint.\n',
      }),
    example_restricted_projects: z
      .array(z.string())
      .openapi({
        description:
          'A list of example projects that are restricted to use this VPC endpoint.\nThere are at most 3 projects in the list, even if more projects are restricted.\n',
      }),
  })
  .openapi({
    required: [
      'vpc_endpoint_id',
      'label',
      'state',
      'num_restricted_projects',
      'example_restricted_projects',
    ],
  })
  .openapi('VPCEndpointDetails')

const VPCEndpointAssignmentSchema = z
  .object({ label: z.string() })
  .openapi({ required: ['label'] })
  .openapi('VPCEndpointAssignment')

const EndpointsResponseSchema = z
  .object({ endpoints: z.array(EndpointSchema) })
  .openapi({ required: ['endpoints'] })
  .openapi('EndpointsResponse')

const EndpointPasswordlessSessionAuthRequestSchema = z
  .object({ session_id: z.string() })
  .openapi({ required: ['session_id'] })
  .openapi('EndpointPasswordlessSessionAuthRequest')

const DurationSchema = z
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
      'A Duration represents the elapsed time between two instants\nas an int64 nanosecond count. The representation limits the\nlargest representable duration to approximately 290 years.',
  })
  .openapi('Duration')

const StatementDataSchema = z
  .object({
    fields: z.array(z.string()).exactOptional(),
    rows: z.array(z.array(z.string())).exactOptional(),
    truncated: z.boolean(),
  })
  .openapi({ required: ['truncated'] })
  .openapi('StatementData')

const ExplainDataSchema = z
  .object({ 'QUERY PLAN': z.string() })
  .openapi({ required: ['QUERY PLAN'] })
  .openapi('ExplainData')

const StatementResultSchema = z
  .object({
    data: StatementDataSchema.exactOptional(),
    error: z.string().exactOptional(),
    explain_data: z.array(ExplainDataSchema).exactOptional(),
    query: z.string(),
  })
  .openapi({ required: ['query'] })
  .openapi('StatementResult')

const RoleSchema = z
  .object({
    branch_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The ID of the branch to which the role belongs\n' }),
    name: z.string().openapi({ description: 'The role name\n' }),
    password: z.string().exactOptional().openapi({ description: 'The role password\n' }),
    protected: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the role is system-protected\n' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the role was created\n' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the role was last updated\n' }),
  })
  .openapi({
    required: ['branch_id', 'name', 'created_at', 'updated_at'],
    example: {
      branch_id: 'br-wispy-meadow-118737',
      name: 'casey',
      protected: false,
      created_at: '2022-11-23T17:42:25Z',
      updated_at: '2022-11-23T17:42:25Z',
    },
  })
  .openapi('Role')

const RoleCreateRequestSchema = z
  .object({
    role: z
      .object({
        name: z
          .string()
          .openapi({ description: 'The role name. Cannot exceed 63 bytes in length.\n' }),
      })
      .openapi({ required: ['name'] }),
  })
  .openapi({ required: ['role'] })
  .openapi('RoleCreateRequest')

const RoleResponseSchema = z
  .object({ role: RoleSchema })
  .openapi({ required: ['role'] })
  .openapi('RoleResponse')

const JWKSResponseSchema = z
  .object({ jwks: JWKSSchema })
  .openapi({ required: ['jwks'] })
  .openapi('JWKSResponse')

const RolesResponseSchema = z
  .object({ roles: z.array(RoleSchema) })
  .openapi({ required: ['roles'] })
  .openapi('RolesResponse')

const RolePasswordResponseSchema = z
  .object({ password: z.string().openapi({ description: 'The role password\n' }) })
  .openapi({ required: ['password'] })
  .openapi('RolePasswordResponse')

const PaymentSourceBankCardSchema = z
  .object({
    last4: z.string().openapi({ description: 'Last 4 digits of the card.\n' }),
    brand: z
      .enum(['amex', 'diners', 'discover', 'jcb', 'mastercard', 'unionpay', 'unknown', 'visa'])
      .exactOptional()
      .openapi({ description: 'Brand of credit card.\n' }),
    exp_month: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Credit card expiration month\n' }),
    exp_year: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Credit card expiration year\n' }),
  })
  .openapi({ required: ['last4'] })
  .openapi('PaymentSourceBankCard')

const PaymentSourceSchema = z
  .object({
    type: z.string().openapi({ description: 'Type of payment source. E.g. "card".\n' }),
    card: PaymentSourceBankCardSchema.exactOptional(),
  })
  .openapi({ required: ['type'] })
  .openapi('PaymentSource')

const BillingAccountStateSchema = z
  .enum(['UNKNOWN', 'active', 'suspended', 'deactivated', 'deleted'])
  .openapi({ description: 'State of the billing account.\n' })
  .openapi('BillingAccountState')

const BillingPaymentMethodSchema = z
  .enum([
    'UNKNOWN',
    'none',
    'stripe',
    'direct_payment',
    'aws_mp',
    'azure_mp',
    'vercel_mp',
    'staff',
    'trial',
    'sponsorship',
  ])
  .openapi({ description: 'Indicates whether and how an account makes payments.\n' })
  .openapi('BillingPaymentMethod')

const BillingAccountSchema = z
  .object({
    state: BillingAccountStateSchema,
    payment_source: PaymentSourceSchema,
    subscription_type: BillingSubscriptionTypeSchema,
    payment_method: BillingPaymentMethodSchema,
    quota_reset_at_last: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The last time the quota was reset. Defaults to the date-time the account is created.\n',
      }),
    name: z
      .string()
      .openapi({
        description:
          'The full name of the individual or entity that owns the billing account. This name appears on invoices.',
      }),
    email: z
      .string()
      .openapi({
        description: 'Billing email, to receive emails related to invoices and subscriptions.\n',
      }),
    address_city: z.string().openapi({ description: 'Billing address city.\n' }),
    address_country: z
      .string()
      .openapi({ description: 'Billing address country code defined by ISO 3166-1 alpha-2.\n' }),
    address_country_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Billing address country name.\n' }),
    address_line1: z.string().openapi({ description: 'Billing address line 1.\n' }),
    address_line2: z.string().openapi({ description: 'Billing address line 2.\n' }),
    address_postal_code: z.string().openapi({ description: 'Billing address postal code.\n' }),
    address_state: z.string().openapi({ description: 'Billing address state or region.\n' }),
    orb_portal_url: z.string().exactOptional().openapi({ description: 'Orb user portal url\n' }),
    tax_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tax identification number for the billing account, displayed on invoices.\n',
      }),
    tax_id_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of the tax identification number based on the country.\n',
      }),
  })
  .openapi({
    required: [
      'state',
      'payment_source',
      'subscription_type',
      'payment_method',
      'quota_reset_at_last',
      'name',
      'email',
      'address_city',
      'address_country',
      'address_line1',
      'address_line2',
      'address_postal_code',
      'address_state',
    ],
  })
  .openapi('BillingAccount')

const DatabaseSchema = z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The database ID\n' }),
    branch_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'The ID of the branch to which the database belongs\n' }),
    name: z.string().openapi({ description: 'The database name\n' }),
    owner_name: z.string().openapi({ description: 'The name of role that owns the database\n' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the database was created\n' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the database was last updated\n' }),
  })
  .openapi({
    required: ['id', 'branch_id', 'name', 'owner_name', 'created_at', 'updated_at'],
    example: {
      id: 834686,
      branch_id: 'br-wispy-meadow-118737',
      name: 'neondb',
      owner_name: 'casey',
      created_at: '2022-11-30T18:25:15Z',
      updated_at: '2022-11-30T18:25:15Z',
    },
  })
  .openapi('Database')

const DatabaseCreateRequestSchema = z
  .object({
    database: z
      .object({
        name: z.string().openapi({ description: 'The name of the datbase\n' }),
        owner_name: z
          .string()
          .openapi({ description: 'The name of the role that owns the database\n' }),
      })
      .openapi({ required: ['name', 'owner_name'] }),
  })
  .openapi({ required: ['database'] })
  .openapi('DatabaseCreateRequest')

const DatabaseUpdateRequestSchema = z
  .object({
    database: z
      .object({
        name: z.string().exactOptional().openapi({ description: 'The name of the database\n' }),
        owner_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the role that owns the database\n' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['database'] })
  .openapi('DatabaseUpdateRequest')

const DatabaseResponseSchema = z
  .object({ database: DatabaseSchema })
  .openapi({ required: ['database'] })
  .openapi('DatabaseResponse')

const DatabasesResponseSchema = z
  .object({ databases: z.array(DatabaseSchema) })
  .openapi({ required: ['databases'] })
  .openapi('DatabasesResponse')

const MemberRoleSchema = z
  .enum(['admin', 'member'])
  .openapi({ description: 'The role of the organization member' })
  .openapi('MemberRole')

const InvitationSchema = z
  .object({
    id: z.uuid(),
    email: z.email().openapi({ description: 'Email of the invited user' }),
    org_id: z
      .string()
      .regex(/^[a-z0-9-]{1,60}$/)
      .openapi({ description: 'Organization id as it is stored in Neon' }),
    invited_by: z
      .uuid()
      .openapi({ description: 'UUID for the user_id who extended the invitation' }),
    invited_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the invitation was created' }),
    role: MemberRoleSchema,
  })
  .openapi({ required: ['id', 'email', 'org_id', 'invited_by', 'invited_at', 'role'] })
  .openapi('Invitation')

const MemberSchema = z
  .object({
    id: z.uuid(),
    user_id: z.uuid(),
    org_id: z.string().regex(/^[a-z0-9-]{1,60}$/),
    role: MemberRoleSchema,
    joined_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['id', 'user_id', 'org_id', 'role'] })
  .openapi('Member')

const MemberUserInfoSchema = z
  .object({ email: z.string() })
  .openapi({ required: ['email'] })
  .openapi('MemberUserInfo')

const MemberWithUserSchema = z
  .object({ member: MemberSchema, user: MemberUserInfoSchema })
  .openapi({ required: ['member', 'user'] })
  .openapi('MemberWithUser')

const OrganizationSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]{1,60}$/),
    name: z.string(),
    handle: z.string(),
    plan: z.string(),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicting when the organization was created\n' }),
    managed_by: z
      .string()
      .openapi({
        description:
          "Organizations created via the Console or the API are managed by `console`.\nOrganizations created by other methods can't be deleted via the Console or the API.\n",
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'A timestamp indicating when the organization was updated\n' }),
  })
  .openapi({ required: ['id', 'name', 'handle', 'plan', 'created_at', 'updated_at', 'managed_by'] })
  .openapi('Organization')

const OrganizationsResponseSchema = z
  .object({ organizations: z.array(OrganizationSchema) })
  .openapi({ required: ['organizations'] })
  .openapi('OrganizationsResponse')

const OrganizationsUpdateRequestSchema = z
  .object({ name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('OrganizationsUpdateRequest')

const OrganizationInvitationsResponseSchema = z
  .object({ invitations: z.array(InvitationSchema) })
  .openapi({ required: ['invitations'] })
  .openapi('OrganizationInvitationsResponse')

const OrganizationInviteCreateRequestSchema = z
  .object({ email: z.email().min(1).max(500), role: MemberRoleSchema })
  .openapi({ required: ['email', 'role'] })
  .openapi('OrganizationInviteCreateRequest')

const OrganizationInvitesCreateRequestSchema = z
  .object({ invitations: z.array(OrganizationInviteCreateRequestSchema) })
  .openapi({ required: ['invitations'] })
  .openapi('OrganizationInvitesCreateRequest')

const OrganizationInviteUpdateRequestSchema = z
  .object({
    email: z.email().exactOptional(),
    role: MemberRoleSchema.exactOptional(),
    resend: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrganizationInviteUpdateRequest')

const OrganizationGuestSchema = z
  .object({
    permission_id: z.string(),
    user_email: z.string(),
    project_id: z.string().regex(/^[a-z0-9-]{1,60}$/),
    project_name: z.string(),
  })
  .openapi({
    description:
      'Details of an organization guest, who is not directly a member of\nan organization but has been shared one of the projects it owns\n',
    required: ['permission_id', 'user_email', 'project_id', 'project_name'],
  })
  .openapi('OrganizationGuest')

const OrganizationGuestsResponseSchema = z
  .array(OrganizationGuestSchema)
  .openapi({ description: 'A list of details for guests of an organization\n' })
  .openapi('OrganizationGuestsResponse')

const OrganizationMemberUpdateRequestSchema = z
  .object({ role: MemberRoleSchema })
  .openapi({ required: ['role'] })
  .openapi('OrganizationMemberUpdateRequest')

const OrganizationMembersResponseSchema = z
  .object({ members: z.array(MemberWithUserSchema) })
  .openapi({ required: ['members'] })
  .openapi('OrganizationMembersResponse')

const InvitationCreateRequestSchema = z
  .object({ email: z.string().openapi({ description: 'Email to invite' }), role: MemberRoleSchema })
  .openapi({ required: ['email', 'role'] })
  .openapi('InvitationCreateRequest')

const OrganizationCreateRequestSchema = z
  .object({
    organization: z
      .object({
        name: z.string().max(64).exactOptional().openapi({ description: 'The organization name' }),
        invitations: z
          .array(InvitationCreateRequestSchema)
          .exactOptional()
          .openapi({ description: 'Emails with roles to invite to the organization' }),
      })
      .openapi({ required: [] }),
    subscription_type: BillingSubscriptionTypeSchema,
  })
  .openapi({ required: ['organization', 'subscription_type'] })
  .openapi('OrganizationCreateRequest')

const OrganizationLimitsSchema = z
  .object({ limits: LimitsSchema, features: FeaturesSchema })
  .openapi({ required: ['limits', 'features'] })
  .openapi('OrganizationLimits')

const RegionResponseSchema = z
  .object({
    region_id: z.string().openapi({ description: 'The region ID as used in other API endpoints' }),
    name: z.string().openapi({ description: 'A short description of the region.' }),
    default: z
      .boolean()
      .openapi({ description: 'Whether this region is used by default in new projects.' }),
    geo_lat: z
      .string()
      .openapi({
        description: 'The geographical latitude (approximate) for the region. Empty if unknown.',
      }),
    geo_long: z
      .string()
      .openapi({
        description: 'The geographical longitude (approximate) for the region. Empty if unknown.',
      }),
  })
  .openapi({ required: ['region_id', 'name', 'default', 'geo_lat', 'geo_long'] })
  .openapi('RegionResponse')

const ActiveRegionsResponseSchema = z
  .object({
    regions: z.array(RegionResponseSchema).openapi({ description: 'The list of active regions' }),
  })
  .openapi({ required: ['regions'] })
  .openapi('ActiveRegionsResponse')

const IdentityProviderIdSchema = z
  .enum(['github', 'google', 'hasura', 'microsoft', 'microsoftv2', 'vercelmp', 'keycloak', 'test'])
  .openapi({ description: 'Identity provider id from keycloak' })
  .openapi('IdentityProviderId')

const CurrentUserAuthAccountSchema = z
  .object({
    email: z.string(),
    image: z.string(),
    login: z
      .string()
      .openapi({ deprecated: true, description: 'DEPRECATED. Use `email` field.\n' }),
    name: z.string(),
    provider: IdentityProviderIdSchema,
  })
  .openapi({ required: ['provider', 'email', 'name', 'login', 'image'] })
  .openapi('CurrentUserAuthAccount')

const LinkedAuthAccountSchema = z
  .object({
    provider: IdentityProviderIdSchema,
    provider_display_name: z.string(),
    username: z.string(),
  })
  .openapi({ required: ['provider', 'provider_display_name', 'username'] })
  .openapi('LinkedAuthAccount')

const UpdateUserInfoRequestSchema = z
  .object({
    email: z.string().exactOptional(),
    id: z.uuid(),
    image: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'DEPRECATED. This field is ignored.\n' }),
    first_name: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    password: z.string().exactOptional(),
    new_password: z.string().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('UpdateUserInfoRequest')

const CurrentUserInfoResponseSchema = z
  .object({
    active_seconds_limit: z
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
          'Control plane observes active endpoints of a user this amount of wall-clock time.\n',
      }),
    billing_account: BillingAccountSchema,
    auth_accounts: z.array(CurrentUserAuthAccountSchema),
    email: z.string(),
    id: z.string(),
    image: z.string(),
    login: z
      .string()
      .openapi({ deprecated: true, description: 'DEPRECATED. Use `email` field.\n' }),
    name: z.string(),
    last_name: z.string(),
    projects_limit: z
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
    branches_limit: z
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
    max_autoscaling_limit: ComputeUnitSchema,
    compute_seconds_limit: z
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
    plan: z.string(),
  })
  .openapi({
    required: [
      'active_seconds_limit',
      'billing_account',
      'id',
      'email',
      'login',
      'name',
      'last_name',
      'image',
      'projects_limit',
      'branches_limit',
      'max_autoscaling_limit',
      'auth_accounts',
      'plan',
    ],
  })
  .openapi('CurrentUserInfoResponse')

const ConvertUserToOrgRequestSchema = z
  .object({ name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('ConvertUserToOrgRequest')

const CurrentUserInfoAuthResponseSchema = z
  .object({
    password_stored: z.boolean(),
    auth_accounts: z.array(CurrentUserAuthAccountSchema),
    linked_accounts: z.array(LinkedAuthAccountSchema),
    provider: z.string(),
  })
  .openapi({ required: ['password_stored', 'auth_accounts', 'linked_accounts', 'provider'] })
  .openapi('CurrentUserInfoAuthResponse')

const TransferProjectsToOrganizationRequestSchema = z
  .object({
    org_id: z.string().regex(/^[a-z0-9-]{1,60}$/),
    project_ids: z
      .array(z.string().regex(/^[a-z0-9-]{1,60}$/))
      .min(1)
      .max(400)
      .openapi({ description: 'The list of projects ids to transfer. Maximum of 400 project ids' }),
  })
  .openapi({ required: ['org_id', 'project_ids'] })
  .openapi('TransferProjectsToOrganizationRequest')

const VerifyUserPasswordRequestSchema = z
  .object({ password: z.string() })
  .openapi({ required: ['password'] })
  .openapi('VerifyUserPasswordRequest')

const HealthCheckSchema = z
  .object({ status: z.string().openapi({ description: 'Service status' }) })
  .openapi({ required: ['status'], example: { status: 'ok' } })
  .openapi('HealthCheck')

const LimitsUnsatisfiedResponseSchema = z
  .object({
    limits: z.array(
      z
        .object({ name: z.string(), expected: z.string(), actual: z.string() })
        .openapi({ required: ['name', 'expected', 'actual'] }),
    ),
  })
  .openapi({
    required: ['limits'],
    example: {
      limits: [
        { name: 'projects_count', actual: '2', expected: '1' },
        { name: 'subscription_type', actual: 'launch', expected: 'scale' },
      ],
    },
  })
  .openapi('LimitsUnsatisfiedResponse')

const ProjectsWithIntegrationResponseSchema = z
  .object({
    projects: z.array(
      z
        .object({ id: z.string().regex(/^[a-z0-9-]{1,60}$/), integration: z.string() })
        .openapi({ required: ['id', 'integration'] }),
    ),
  })
  .openapi({
    required: ['projects'],
    example: {
      projects: [
        { id: 'round-frog-53611540', integration: 'github' },
        { id: 'long-leaf-72329067', integration: 'vercel' },
        { id: 'shrill-bush-06966719', integration: 'outerbase' },
      ],
    },
  })
  .openapi('ProjectsWithIntegrationResponse')

const UserDeletionConditionNameSchema = z
  .enum(['project_count', 'org_admin_membership_count', 'subscription_type'])
  .openapi('UserDeletionConditionName')

const OrgDeletionConditionNameSchema = z
  .literal('project_count')
  .openapi('OrgDeletionConditionName')

const IdentitySupportedAuthProviderSchema = z
  .enum(['mock', 'stack'])
  .openapi('IdentitySupportedAuthProvider')

const IdentityIntegrationSchema = z
  .object({
    auth_provider: z.string(),
    auth_provider_project_id: z.string(),
    branch_id: z.string().regex(/^[a-z0-9-]{1,60}$/),
    db_name: z.string(),
    created_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    required: ['auth_provider', 'auth_provider_project_id', 'branch_id', 'db_name', 'created_at'],
  })
  .openapi('IdentityIntegration')

const ListProjectIdentityIntegrationsResponseSchema = z
  .object({ data: z.array(IdentityIntegrationSchema) })
  .openapi({ required: ['data'] })
  .openapi('ListProjectIdentityIntegrationsResponse')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const GeneralErrorSchema = z
  .object({
    request_id: z.string().exactOptional(),
    code: ErrorCodeSchema,
    message: z.string().openapi({ description: 'Error message' }),
  })
  .openapi({ description: 'General Error', required: ['message', 'code'] })
  .openapi('GeneralError')

const BranchOperationsSchema =
  BranchResponseSchema.and(OperationsResponseSchema).openapi('BranchOperations')

const EndpointOperationsSchema =
  EndpointResponseSchema.and(OperationsResponseSchema).openapi('EndpointOperations')

const DatabaseOperationsSchema =
  DatabaseResponseSchema.and(OperationsResponseSchema).openapi('DatabaseOperations')

const RoleOperationsSchema =
  RoleResponseSchema.and(OperationsResponseSchema).openapi('RoleOperations')

const JWKSCreationOperationSchema =
  JWKSResponseSchema.and(OperationsResponseSchema).openapi('JWKSCreationOperation')

const SupportTicketSeveritySchema = z
  .enum(['low', 'normal', 'high', 'critical'])
  .openapi('SupportTicketSeverity')

const AnnotationObjectDataSchema = z
  .object({ type: z.string(), id: z.string() })
  .openapi({ 'x-tags': ['Branch'], required: ['type', 'id'] })
  .openapi('AnnotationObjectData')

const AnnotationValueDataSchema = z
  .record(
    z.string(),
    z.string().openapi({ example: { 'github-commit-ref': 'github-branch-name' } }),
  )
  .refine((val) => Object.keys(val).length <= 50)
  .openapi({ description: 'Annotation properties.', 'x-tags': ['Branch'] })
  .openapi('AnnotationValueData')

const AnnotationDataSchema = z
  .object({
    object: AnnotationObjectDataSchema,
    value: AnnotationValueDataSchema,
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ 'x-tags': ['Branch'], required: ['object', 'value'] })
  .openapi('AnnotationData')

const AnnotationCreateValueRequestSchema = z
  .object({ annotation_value: AnnotationValueDataSchema.exactOptional() })
  .openapi({ 'x-tags': ['Branch'], required: [] })
  .openapi('AnnotationCreateValueRequest')

const AnnotationResponseSchema = z
  .object({ annotation: AnnotationDataSchema })
  .openapi({ 'x-tags': ['Branch'], required: ['annotation'] })
  .openapi('AnnotationResponse')

const AnnotationsMapResponseSchema = z
  .object({ annotations: z.record(z.string(), AnnotationDataSchema) })
  .openapi({ 'x-tags': ['Branch'], required: ['annotations'] })
  .openapi('AnnotationsMapResponse')

const ProjectsApplicationsMapResponseSchema = z
  .object({ applications: z.record(z.string(), z.array(z.enum(['vercel', 'github', 'datadog']))) })
  .openapi({
    'x-tags': ['Project'],
    description:
      'A map where key is a project ID and a value is a list of installed applications.\n',
    required: ['applications'],
    example: { 'winter-boat-259881': ['vercel', 'github', 'datadog'] },
  })
  .openapi('ProjectsApplicationsMapResponse')

const ProjectsIntegrationsMapResponseSchema = z
  .object({ integrations: z.record(z.string(), z.array(z.enum(['vercel', 'github', 'datadog']))) })
  .openapi({
    'x-tags': ['Project'],
    description:
      'A map where key is a project ID and a value is a list of installed integrations.\n',
    required: ['integrations'],
    example: { 'winter-boat-259881': ['vercel', 'github', 'datadog'] },
  })
  .openapi('ProjectsIntegrationsMapResponse')

const CursorPaginationSchema = z
  .object({
    next: z.string().exactOptional(),
    previous: z.string().exactOptional(),
    sort_by: z.string().exactOptional(),
    sort_order: z.string().exactOptional(),
  })
  .openapi({
    description:
      'To paginate the response, issue an initial request with `limit` value. Then, add the value returned in the response `.pagination.next` attribute into the request under the `cursor` query parameter to the subsequent request to retrieve next page in pagination. Using `.pagination.previous` as cursor will return the previous page. The contents on cursor `next` and `previous` are opaque, clients are not expected to make any assumptions on the format of the data inside the cursor.',
    required: [],
  })
  .openapi('CursorPagination')

const CursorPaginationResponseSchema = z
  .object({ pagination: CursorPaginationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CursorPaginationResponse')

const ListOperationsResponse = {
  description: 'Returned a list of operations\n',
  content: {
    'application/json': { schema: OperationsResponseSchema.and(PaginationResponseSchema) },
  },
}

const CreatedProjectResponse = {
  description:
    'Created a project.\nThe project includes a connection URI with a database, password, and role.\nAt least one non-protected role is created with a password.\nWait until the operations are finished before attempting to connect to a project database.\n',
  content: {
    'application/json': {
      schema: ProjectResponseSchema.and(ConnectionURIsResponseSchema)
        .and(RolesResponseSchema)
        .and(DatabasesResponseSchema)
        .and(OperationsResponseSchema)
        .and(BranchResponseSchema)
        .and(EndpointsResponseSchema),
    },
  },
}

const CreatedBranchResponse = {
  description: 'Created a branch. An endpoint is only created if it was specified in the request.',
  content: {
    'application/json': {
      schema: BranchResponseSchema.and(EndpointsResponseSchema)
        .and(OperationsResponseSchema)
        .and(RolesResponseSchema)
        .and(DatabasesResponseSchema)
        .and(ConnectionURIsOptionalResponseSchema),
    },
  },
}

const GeneralErrorResponse = {
  description: 'General Error',
  content: { 'application/json': { schema: GeneralErrorSchema } },
}

const HealthCheckResponse = {
  description: 'Service is running',
  content: { 'application/json': { schema: HealthCheckSchema } },
}

const CursorParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      description:
        'A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` or `response.pagination.previous` in subsequent API calls to fetch next or previous page of the list.',
      in: 'query',
      schema: { type: 'string' },
      required: false,
    },
  })

const LimitParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(10000),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      description: 'The maximum number of records to be returned in the response',
      in: 'query',
      schema: { type: 'integer', minimum: 1, maximum: 10000 },
      required: false,
    },
  })

const SortOrderParamParamsSchema = z
  .enum(['asc', 'desc'])
  .default('desc')
  .exactOptional()
  .openapi({
    param: {
      name: 'sort_order',
      description: 'Defines the sorting order of entities.',
      in: 'query',
      schema: { type: 'string', default: 'desc', enum: ['asc', 'desc'] },
      required: false,
    },
  })

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'The Neon API requires an API key to authorize your requests, which you can enter below.\nRefer to our documentation to find out how to generate and use [API keys](https://neon.tech/docs/manage/api-keys).\n',
}

const CookieAuthSecurityScheme = { type: 'apiKey', in: 'cookie', name: 'zenith' }

const TokenCookieAuthSecurityScheme = { type: 'apiKey', in: 'cookie', name: 'keycloak_token' }

export const getApiKeysRoute = createRoute({
  method: 'get',
  path: '/api_keys',
  tags: ['API Key'],
  summary: 'Get a list of API keys',
  description:
    'Retrieves the API keys for your Neon account.\nThe response does not include API key tokens. A token is only provided when creating an API key.\nAPI keys can also be managed in the Neon Console.\nFor more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).\n',
  operationId: 'listApiKeys',
  responses: {
    200: {
      description: 'Returned the API keys for the Neon account',
      content: {
        'application/json': {
          schema: z.array(ApiKeysListResponseItemSchema).openapi({
            example: [
              {
                id: 165432,
                name: 'mykey_1',
                created_at: '2022-11-15T20:13:35Z',
                created_by: {
                  id: '629982cc-de05-43db-ae16-28f2399c4910',
                  name: 'John Smith',
                  image: 'http://link.to.image',
                },
                last_used_at: '2022-11-15T20:22:51Z',
                last_used_from_addr: '192.0.2.255',
              },
              {
                id: 165433,
                name: 'mykey_2',
                created_at: '2022-11-15T20:12:36Z',
                created_by: {
                  id: '629982cc-de05-43db-ae16-28f2399c4910',
                  name: 'John Smith',
                  image: 'http://link.to.image',
                },
                last_used_at: '2022-11-15T20:15:04Z',
                last_used_from_addr: '192.0.2.255',
              },
            ],
          }),
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postApiKeysRoute = createRoute({
  method: 'post',
  path: '/api_keys',
  tags: ['API Key'],
  summary: 'Create an API key',
  description:
    'Creates an API key.\nThe `key_name` is a user-specified name for the key.\nThis method returns an `id` and `key`. The `key` is a randomly generated, 64-bit token required to access the Neon API.\nAPI keys can also be managed in the Neon Console.\nSee [Manage API keys](https://neon.tech/docs/manage/api-keys/).\n',
  operationId: 'createApiKey',
  request: {
    body: {
      content: {
        'application/json': { schema: ApiKeyCreateRequestSchema, example: { key_name: 'mykey' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Created an API key',
      content: {
        'application/json': {
          schema: ApiKeyCreateResponseSchema,
          example: {
            id: 165434,
            key: '9v1faketcjbl4sn1013keyd43n2a8qlfakeog8yvp40hx16keyjo1bpds4y2dfms3',
            name: 'mykey',
            created_at: '2022-11-15T20:13:35Z',
            created_by: '629982cc-de05-43db-ae16-28f2399c4910',
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteApiKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/api_keys/{key_id}',
  tags: ['API Key'],
  summary: 'Revoke an API key',
  description:
    'Revokes the specified API key.\nAn API key that is no longer needed can be revoked.\nThis action cannot be reversed.\nYou can obtain `key_id` values by listing the API keys for your Neon account.\nAPI keys can also be managed in the Neon Console.\nSee [Manage API keys](https://neon.tech/docs/manage/api-keys/).\n',
  operationId: 'revokeApiKey',
  request: {
    params: z.object({
      key_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'key_id',
            in: 'path',
            description: 'The API key ID',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Revoked the specified API key',
      content: {
        'application/json': {
          schema: ApiKeyRevokeResponseSchema,
          example: {
            id: 165435,
            name: 'mykey',
            created_at: '2022-11-15T20:13:35Z',
            created_by: '629982cc-de05-43db-ae16-28f2399c4910',
            last_used_at: '2022-11-15T20:15:04Z',
            last_used_from_addr: '192.0.2.255',
            revoked: true,
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdOperationsOperationIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/operations/{operation_id}',
  tags: ['Operation'],
  summary: 'Get operation details',
  description:
    'Retrieves details for the specified operation.\nAn operation is an action performed on a Neon project resource.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain a `operation_id` by listing operations for the project.\n',
  operationId: 'getProjectOperation',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      operation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'operation_id',
            in: 'path',
            description: 'The operation ID',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned details for the specified operation',
      content: {
        'application/json': {
          schema: OperationResponseSchema,
          example: {
            operation: {
              id: 'a07f8772-1877-4da9-a939-3a3ae62d1d8d',
              project_id: 'floral-king-961888',
              branch_id: 'br-bitter-sound-247814',
              endpoint_id: 'ep-dark-snowflake-942567',
              action: 'create_timeline',
              status: 'finished',
              failures_count: 0,
              created_at: '2022-10-04T18:20:17Z',
              updated_at: '2022-10-04T18:20:18Z',
              total_duration_ms: 100,
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['Project'],
  summary: 'Get a list of projects',
  description:
    'Retrieves a list of projects for the Neon account.\nA project is the top-level object in the Neon object hierarchy.\nFor more information, see [Manage projects](https://neon.tech/docs/manage/projects/).\n',
  operationId: 'listProjects',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Specify the cursor value from the previous response to retrieve the next batch of projects.',
            in: 'query',
            schema: { type: 'string' },
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
          z.int().min(1).max(400),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description:
              'Specify a value from 1 to 400 to limit number of projects in the response.',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 10, maximum: 400 },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description:
              'Search by project `name` or `id`. You can specify partial `name` or `id` values to filter results.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            description: 'Search for projects by `org_id`.',
            in: 'query',
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
            required: false,
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Specify an explicit timeout in milliseconds to limit response delay.\nAfter timing out, the incomplete list of project data fetched so far will be returned.\nProjects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.\nIf not specified, an implicit implementation defined timeout is chosen with the same behaviour as above\n',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a list of projects for the Neon account',
      content: {
        'application/json': {
          schema: ProjectsResponseSchema.and(PaginationResponseSchema)
            .and(ProjectsApplicationsMapResponseSchema)
            .and(ProjectsIntegrationsMapResponseSchema),
          example: {
            projects: [
              {
                id: 'shiny-wind-028834',
                platform_id: 'aws',
                region_id: 'aws-us-east-2',
                name: 'shiny-wind-028834',
                provisioner: 'k8s-pod',
                pg_version: 15,
                created_at: '2022-11-23T17:42:25Z',
                updated_at: '2022-11-23T17:42:25Z',
                proxy_host: 'us-east-2.aws.neon.tech',
                cpu_used_sec: 0,
                branch_logical_size_limit: 0,
                owner_id: '1232111',
                creation_source: 'console',
                store_passwords: true,
                branch_logical_size_limit_bytes: 10800,
                active_time: 100,
              },
              {
                id: 'winter-boat-259881',
                platform_id: 'aws',
                region_id: 'aws-us-east-2',
                name: 'winter-boat-259881',
                provisioner: 'k8s-pod',
                pg_version: 15,
                created_at: '2022-11-23T17:52:25Z',
                updated_at: '2022-11-23T17:52:25Z',
                proxy_host: 'us-east-2.aws.neon.tech',
                cpu_used_sec: 0,
                branch_logical_size_limit: 0,
                owner_id: '1232111',
                creation_source: 'console',
                store_passwords: true,
                branch_logical_size_limit_bytes: 10800,
                active_time: 100,
                org_id: 'org-morning-bread-81040908',
              },
            ],
            applications: { 'winter-boat-259881': ['vercel', 'github'] },
            integrations: { 'winter-boat-259881': ['vercel', 'github'] },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['Project'],
  summary: 'Create a project',
  description:
    'Creates a Neon project.\nA project is the top-level object in the Neon object hierarchy.\nPlan limits define how many projects you can create.\nFor more information, see [Manage projects](https://neon.tech/docs/manage/projects/).\n\nYou can specify a region and Postgres version in the request body.\nNeon currently supports PostgreSQL 14, 15, 16, and 17.\nFor supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).\n',
  operationId: 'createProject',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ProjectCreateRequestSchema,
          examples: {
            required_attributes_only: {
              summary: 'Required attributes only',
              value: { project: { name: 'myproject' } },
            },
            commonly_specified_attributes: {
              summary: 'Commonly-specified attributes',
              value: { project: { name: 'myproject', region_id: 'aws-us-east-2', pg_version: 15 } },
            },
            with_autoscaling: {
              summary: 'With autoscaling attributes',
              value: {
                project: {
                  name: 'myproject',
                  region_id: 'aws-us-east-2',
                  pg_version: 15,
                  autoscaling_limit_min_cu: 0.25,
                  autoscaling_limit_max_cu: 1,
                  provisioner: 'k8s-neonvm',
                },
              },
            },
            with_branch_attributes: {
              summary: 'With branch attributes',
              value: {
                project: {
                  name: 'myproject',
                  region_id: 'aws-us-east-2',
                  pg_version: 15,
                  branch: { name: 'mybranch', role_name: 'sally', database_name: 'mydb' },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 201: CreatedProjectResponse, default: GeneralErrorResponse },
})

export const getProjectsSharedRoute = createRoute({
  method: 'get',
  path: '/projects/shared',
  tags: ['Project'],
  summary: 'Get a list of shared projects',
  description:
    'Retrieves a list of shared projects for the Neon account.\nA project is the top-level object in the Neon object hierarchy.\nFor more information, see [Manage projects](https://neon.tech/docs/manage/projects/).\n',
  operationId: 'listSharedProjects',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Specify the cursor value from the previous response to get the next batch of projects.',
            in: 'query',
            schema: { type: 'string' },
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
          z.int().min(1).max(400),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description:
              'Specify a value from 1 to 400 to limit number of projects in the response.',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 10, maximum: 400 },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search query by name or id.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a list of shared projects for the Neon account',
      content: {
        'application/json': {
          schema: ProjectsResponseSchema.and(PaginationResponseSchema),
          example: {
            projects: [
              {
                id: 'shiny-wind-028834',
                platform_id: 'aws',
                region_id: 'aws-us-east-2',
                name: 'shiny-wind-028834',
                provisioner: 'k8s-pod',
                pg_version: 15,
                created_at: '2022-11-23T17:42:25Z',
                updated_at: '2022-11-23T17:42:25Z',
                proxy_host: 'us-east-2.aws.neon.tech',
                cpu_used_sec: 0,
                branch_logical_size_limit: 0,
                owner_id: '1232111',
                creation_source: 'console',
                store_passwords: true,
                branch_logical_size_limit_bytes: 10800,
                active_time: 100,
              },
              {
                id: 'winter-boat-259881',
                platform_id: 'aws',
                region_id: 'aws-us-east-2',
                name: 'winter-boat-259881',
                provisioner: 'k8s-pod',
                pg_version: 15,
                created_at: '2022-11-23T17:52:25Z',
                updated_at: '2022-11-23T17:52:25Z',
                proxy_host: 'us-east-2.aws.neon.tech',
                cpu_used_sec: 0,
                branch_logical_size_limit: 0,
                owner_id: '1232111',
                creation_source: 'console',
                store_passwords: true,
                branch_logical_size_limit_bytes: 10800,
                active_time: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}',
  tags: ['Project'],
  summary: 'Get project details',
  description:
    'Retrieves information about the specified project.\nA project is the top-level object in the Neon object hierarchy.\nYou can obtain a `project_id` by listing the projects for your Neon account.\n',
  operationId: 'getProject',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned information about the specified project',
      content: {
        'application/json': {
          schema: ProjectResponseSchema,
          example: {
            project: {
              id: 'shiny-wind-028834',
              platform_id: 'aws',
              region_id: 'aws-us-east-2',
              name: 'shiny-wind-028834',
              provisioner: 'k8s-pod',
              pg_version: 15,
              history_retention_seconds: 604800,
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-23T17:42:25Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              branch_logical_size_limit: 0,
              cpu_used_sec: 10,
              owner_id: '1232111',
              owner: {
                name: 'John Smith',
                email: 'some@email.com',
                branches_limit: 10,
                subscription_type: 'scale',
              },
              creation_source: 'console',
              store_passwords: true,
              branch_logical_size_limit_bytes: 10500,
              data_storage_bytes_hour: 1040,
              data_transfer_bytes: 1000000,
              written_data_bytes: 100800,
              compute_time_seconds: 100,
              active_time_seconds: 100,
              consumption_period_start: '2023-02-01T00:00:00Z',
              consumption_period_end: '2023-03-01T00:00:00Z',
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}',
  tags: ['Project'],
  summary: 'Delete a project',
  description:
    'Deletes the specified project.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nDeleting a project is a permanent action.\nDeleting a project also deletes endpoints, branches, databases, and users that belong to the project.\n',
  operationId: 'deleteProject',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the specified project',
      content: {
        'application/json': {
          schema: ProjectResponseSchema,
          example: {
            project: {
              id: 'bold-cloud-468218',
              platform_id: 'aws',
              region_id: 'aws-us-east-2',
              name: 'bold-cloud-468218',
              provisioner: 'k8s-pod',
              pg_version: 15,
              created_at: '2022-11-30T18:41:29Z',
              updated_at: '2022-11-30T18:41:29Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              cpu_used_sec: 23004200,
              branch_logical_size_limit: 0,
              owner_id: '1232111',
              creation_source: 'console',
              store_passwords: true,
              branch_logical_size_limit_bytes: 10500,
              data_storage_bytes_hour: 1040,
              data_transfer_bytes: 1000000,
              written_data_bytes: 100800,
              compute_time_seconds: 100,
              active_time_seconds: 100,
              history_retention_seconds: 604800,
              consumption_period_start: '2023-02-01T00:00:00Z',
              consumption_period_end: '2023-03-01T00:00:00Z',
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const patchProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{project_id}',
  tags: ['Project'],
  summary: 'Update a project',
  description:
    'Updates the specified project.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nNeon permits updating the project name only.\n',
  operationId: 'updateProject',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ProjectUpdateRequestSchema,
          example: { project: { name: 'myproject' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated the specified project',
      content: {
        'application/json': {
          schema: ProjectResponseSchema.and(OperationsResponseSchema),
          example: {
            operations: [],
            project: {
              id: 'shiny-wind-028834',
              platform_id: 'aws',
              region_id: 'aws-us-east-2',
              name: 'myproject',
              provisioner: 'k8s-pod',
              pg_version: 15,
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-12-04T02:39:25Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              branch_logical_size_limit: 0,
              cpu_used_sec: 213230,
              owner_id: '1232111',
              creation_source: 'console',
              store_passwords: true,
              branch_logical_size_limit_bytes: 10500,
              data_storage_bytes_hour: 1040,
              data_transfer_bytes: 1000000,
              written_data_bytes: 100800,
              compute_time_seconds: 100,
              active_time_seconds: 100,
              history_retention_seconds: 604800,
              consumption_period_start: '2023-02-01T00:00:00Z',
              consumption_period_end: '2023-03-01T00:00:00Z',
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdOperationsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/operations',
  tags: ['Operation'],
  summary: 'Get a list of operations',
  description:
    'Retrieves a list of operations for the specified Neon project.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nThe number of operations returned can be large.\nTo paginate the response, issue an initial request with a `limit` value.\nThen, add the `cursor` value that was returned in the response to the next request.\n',
  operationId: 'listProjectOperations',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Specify the cursor value from the previous response to get the next batch of operations',
            in: 'query',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description:
              'Specify a value from 1 to 1000 to limit number of operations in the response',
            in: 'query',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
            required: false,
          },
        }),
    }),
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: { 200: ListOperationsResponse, default: GeneralErrorResponse },
})

export const getProjectsProjectIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/permissions',
  tags: ['Project'],
  summary: 'List project access',
  description:
    'Retrieves details about users who have access to the project, including the permission `id`, the granted-to email address, and the date project access was granted.',
  operationId: 'listProjectPermissions',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned project access details',
      content: { 'application/json': { schema: ProjectPermissionsSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdPermissionsRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/permissions',
  tags: ['Project'],
  summary: 'Grant project access',
  description: 'Grants project access to the account associated with the specified email address',
  operationId: 'grantPermissionToProject',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GrantPermissionToProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Granted project access',
      content: { 'application/json': { schema: ProjectPermissionSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdPermissionsPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/permissions/{permission_id}',
  tags: ['Project'],
  summary: 'Revoke project access',
  description:
    "Revokes project access from the user associted with the specified permisison `id`. You can retrieve a user's permission `id` by listing project access.",
  operationId: 'revokePermissionFromProject',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      permission_id: z
        .string()
        .openapi({
          param: { name: 'permission_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Revoked project access',
      content: { 'application/json': { schema: ProjectPermissionSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdJwksRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/jwks',
  tags: ['Project'],
  summary: 'Returns all available JWKS URLs for a project',
  description:
    'Returns all the available JWKS URLs that can be used for verifying JWTs used as the authentication mechanism for the specified project.\n',
  operationId: 'getProjectJWKS',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The JWKS URLs available for the project',
      content: { 'application/json': { schema: ProjectJWKSResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdJwksRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/jwks',
  tags: ['Project'],
  summary: 'Adds a JWKS URL to a project',
  description:
    'Add a new JWKS URL to a project, such that it can be used for verifying JWTs used as the authentication mechanism for the specified project.\n\nThe URL must be a valid HTTPS URL that returns a JSON Web Key Set.\n\nThe `provider_name` field allows you to specify which authentication provider you\'re using (e.g., Clerk, Auth0, AWS Cognito, etc.).\n\nThe `branch_id` can be used to specify on which branches the JWKS URL will be accepted. If not specified, then it will work on any branch.\n\nThe `role_names` can be used to specify for which roles the JWKS URL will be accepted.\n\nThe `jwt_audience` can be used to specify which "aud" values should be accepted by Neon in the JWTs that are used for authentication.\n',
  operationId: 'addProjectJWKS',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddProjectJWKSRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: "The JWKS URL was added to the project's authentication connections",
      content: { 'application/json': { schema: JWKSCreationOperationSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdJwksJwksIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/jwks/{jwks_id}',
  tags: ['Project'],
  summary: 'Delete a JWKS URL',
  description: 'Deletes a JWKS URL from the specified project',
  operationId: 'deleteProjectJWKS',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      jwks_id: z
        .string()
        .openapi({
          param: {
            name: 'jwks_id',
            in: 'path',
            description: 'The JWKS ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted a JWKS URL from the project',
      content: { 'application/json': { schema: JWKSSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdConnectionUriRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/connection_uri',
  tags: ['Project'],
  summary: 'Get a connection URI',
  description:
    'Retrieves a connection URI for the specified database.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `database_name` by listing the databases for a branch.\nYou can obtain a `role_name` by listing the roles for a branch.\n',
  operationId: 'getConnectionURI',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    query: z.object({
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'branch_id',
            in: 'query',
            description:
              "The branch ID. Defaults to your project's default `branch_id` if not specified.",
            required: false,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'endpoint_id',
            in: 'query',
            description:
              'The endpoint ID. Defaults to the read-write `endpoint_id` associated with the `branch_id` if not specified.',
            required: false,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      database_name: z
        .string()
        .openapi({
          param: {
            name: 'database_name',
            in: 'query',
            description: 'The database name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      role_name: z
        .string()
        .openapi({
          param: {
            name: 'role_name',
            in: 'query',
            description: 'The role name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pooled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'pooled',
            in: 'query',
            description:
              'Adds the `-pooler` option to the connection URI when set to `true`, creating a pooled connection URI.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned the connection URI',
      content: { 'application/json': { schema: ConnectionURIResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches',
  tags: ['Branch'],
  summary: 'Get a list of branches',
  description:
    'Retrieves a list of branches for the specified project.\nYou can obtain a `project_id` by listing the projects for your Neon account.\n\nEach Neon project has a root branch named `main`.\nA `branch_id` value has a `br-` prefix.\nA project may contain child branches that were branched from `main` or from another branch.\nA parent branch is identified by the `parent_id` value, which is the `id` of the parent branch.\nFor related information, see [Manage branches](https://neon.tech/docs/manage/branches/).\n',
  operationId: 'listProjectBranches',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description:
              'Search by branch `name` or `id`. You can specify partial `name` or `id` values to filter results.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort_by: z
        .enum(['name', 'created_at', 'updated_at'])
        .default('updated_at')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_by',
            description:
              'Sort the branches by sort_field. If not provided, branches will be sorted by updated_at descending order',
            in: 'query',
            schema: {
              type: 'string',
              default: 'updated_at',
              enum: ['name', 'created_at', 'updated_at'],
            },
            required: false,
          },
        }),
      cursor: CursorParamParamsSchema,
      sort_order: SortOrderParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returned a list of branches for the specified project',
      content: {
        'application/json': {
          schema: BranchesResponseSchema.and(AnnotationsMapResponseSchema).and(
            CursorPaginationResponseSchema,
          ),
          example: {
            branches: [
              {
                id: 'br-aged-salad-637688',
                project_id: 'shiny-wind-028834',
                name: 'main',
                current_state: 'ready',
                state_changed_at: '2022-11-30T20:09:48Z',
                logical_size: 28,
                created_at: '2022-11-23T17:42:25Z',
                updated_at: '2022-11-23T17:42:26Z',
                data_transfer_bytes: 1000000,
                written_data_bytes: 100800,
                compute_time_seconds: 100,
                active_time_seconds: 100,
                cpu_used_sec: 100,
                default: true,
                protected: false,
                creation_source: 'console',
              },
              {
                id: 'br-sweet-breeze-497520',
                project_id: 'shiny-wind-028834',
                parent_id: 'br-aged-salad-637688',
                parent_lsn: '0/1DE2850',
                name: 'dev2',
                current_state: 'ready',
                state_changed_at: '2022-11-30T20:09:48Z',
                logical_size: 28,
                created_at: '2022-11-30T19:09:48Z',
                updated_at: '2022-11-30T19:09:49Z',
                data_transfer_bytes: 1000000,
                written_data_bytes: 100800,
                compute_time_seconds: 100,
                active_time_seconds: 100,
                cpu_used_sec: 100,
                default: true,
                protected: false,
                creation_source: 'console',
              },
              {
                id: 'br-raspy-hill-832856',
                project_id: 'shiny-wind-028834',
                parent_id: 'br-aged-salad-637688',
                parent_lsn: '0/19623D8',
                name: 'dev1',
                current_state: 'ready',
                state_changed_at: '2022-11-30T20:09:48Z',
                logical_size: 21,
                created_at: '2022-11-30T17:36:57Z',
                updated_at: '2022-11-30T17:36:57Z',
                data_transfer_bytes: 1000000,
                written_data_bytes: 100800,
                compute_time_seconds: 100,
                active_time_seconds: 100,
                cpu_used_sec: 100,
                default: true,
                protected: false,
                creation_source: 'console',
              },
            ],
            annotations: {
              'br-aged-salad-637688': {
                object: { type: 'console/branch', id: 'br-aged-salad-637688' },
                value: { 'vercel-commit-ref': 'test' },
                created_at: '2022-11-23T17:42:25Z',
                updated_at: '2022-11-23T17:42:26Z',
              },
            },
            pagination: {
              next: 'eyJjcmVhdGV',
              previous: 'eyJjcmVhdGV',
              sort_by: 'updated_at',
              sort_order: 'desc',
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdBranchesRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/branches',
  tags: ['Branch'],
  summary: 'Create a branch',
  description:
    "Creates a branch in the specified project.\nYou can obtain a `project_id` by listing the projects for your Neon account.\n\nThis method does not require a request body, but you can specify one to create a compute endpoint for the branch or to select a non-default parent branch.\nThe default behavior is to create a branch from the project's default branch with no compute endpoint, and the branch name is auto-generated.\nThere is a maximum of one read-write endpoint per branch.\nA branch can have multiple read-only endpoints.\nFor related information, see [Manage branches](https://neon.tech/docs/manage/branches/).\n",
  operationId: 'createProjectBranch',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BranchCreateRequestSchema.and(AnnotationCreateValueRequestSchema),
          examples: {
            branch_only: {
              summary: 'Branch only',
              value: { branch: { parent_id: 'br-aged-salad-637688', name: 'mybranch' } },
            },
            branch_with_endpoint: {
              summary: 'Branch with endpoint',
              value: {
                endpoints: [{ type: 'read_write' }],
                branch: { parent_id: 'br-aged-salad-637688', name: 'mybranch' },
              },
            },
          },
        },
      },
    },
  },
  responses: { 201: CreatedBranchResponse, default: GeneralErrorResponse },
})

export const getProjectsProjectIdBranchesCountRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/count',
  tags: ['Branch'],
  summary: 'Get the total number of branches in a project',
  description:
    'Retrieves the total number of branches in the specified project.\nYou can obtain a `project_id` by listing the projects for your Neon account.\n',
  operationId: 'countProjectBranches',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Count branches matching the `name` in search query',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a count of branches for the specified project',
      content: { 'application/json': { schema: BranchesCountResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}',
  tags: ['Branch'],
  summary: 'Get branch details',
  description:
    "Retrieves information about the specified branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain a `branch_id` by listing the project's branches.\nA `branch_id` value has a `br-` prefix.\n\nEach Neon project is initially created with a root and default branch named `main`.\nA project can contain one or more branches.\nA parent branch is identified by a `parent_id` value, which is the `id` of the parent branch.\nFor related information, see [Manage branches](https://neon.tech/docs/manage/branches/).\n",
  operationId: 'getProjectBranch',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned information about the specified branch',
      content: {
        'application/json': {
          schema: BranchResponseSchema.and(AnnotationResponseSchema),
          example: {
            branch: {
              id: 'br-aged-salad-637688',
              project_id: 'shiny-wind-028834',
              name: 'main',
              current_state: 'ready',
              state_changed_at: '2022-11-30T20:09:48Z',
              logical_size: 28,
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-23T17:42:26Z',
              data_transfer_bytes: 1000000,
              written_data_bytes: 100800,
              compute_time_seconds: 100,
              active_time_seconds: 100,
              cpu_used_sec: 100,
              default: true,
              protected: false,
              creation_source: 'console',
            },
            annotation: {
              object: { type: 'console/branch', id: 'br-aged-salad-637688' },
              value: { 'vercel-commit-ref': 'test' },
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-23T17:42:26Z',
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdBranchesBranchIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/branches/{branch_id}',
  tags: ['Branch'],
  summary: 'Delete a branch',
  description:
    "Deletes the specified branch from a project, and places\nall compute endpoints into an idle state, breaking existing client connections.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain a `branch_id` by listing the project's branches.\nFor related information, see [Manage branches](https://neon.tech/docs/manage/branches/).\n\nWhen a successful response status is received, the compute endpoints are still active,\nand the branch is not yet deleted from storage.\nThe deletion occurs after all operations finish.\nYou cannot delete a project's root or default branch, and you cannot delete a branch that has a child branch.\nA project must have at least one branch.\n",
  operationId: 'deleteProjectBranch',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the specified branch',
      content: {
        'application/json': {
          schema: BranchOperationsSchema,
          example: {
            branch: {
              id: 'br-aged-salad-637688',
              project_id: 'shiny-wind-028834',
              name: 'main',
              current_state: 'ready',
              state_changed_at: '2022-11-30T20:09:48Z',
              logical_size: 28,
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-23T17:42:26Z',
              data_transfer_bytes: 1000000,
              written_data_bytes: 100800,
              compute_time_seconds: 100,
              active_time_seconds: 100,
              cpu_used_sec: 100,
              default: true,
              protected: false,
              creation_source: 'console',
            },
            operations: [
              {
                id: 'b6afbc21-2990-4a76-980b-b57d8c2948f2',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-sweet-breeze-497520',
                endpoint_id: 'ep-soft-violet-752733',
                action: 'suspend_compute',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-01T19:53:05Z',
                updated_at: '2022-12-01T19:53:05Z',
                total_duration_ms: 100,
              },
              {
                id: 'b6afbc21-2990-4a76-980b-b57d8c2948f2',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-sweet-breeze-497520',
                action: 'delete_timeline',
                status: 'scheduling',
                failures_count: 0,
                created_at: '2022-12-01T19:53:05Z',
                updated_at: '2022-12-01T19:53:05Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    204: { description: "Returned if the branch doesn't exist or has already been deleted" },
    default: GeneralErrorResponse,
  },
})

export const patchProjectsProjectIdBranchesBranchIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{project_id}/branches/{branch_id}',
  tags: ['Branch'],
  summary: 'Update a branch',
  description:
    "Updates the specified branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nFor more information, see [Manage branches](https://neon.tech/docs/manage/branches/).\n",
  operationId: 'updateProjectBranch',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BranchUpdateRequestSchema,
          example: { branch: { name: 'mybranch' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated the specified branch',
      content: {
        'application/json': {
          schema: BranchOperationsSchema,
          example: {
            branch: {
              id: 'br-icy-dream-250089',
              project_id: 'shiny-wind-028834',
              parent_id: 'br-aged-salad-637688',
              parent_lsn: '0/1E19478',
              name: 'mybranch',
              current_state: 'ready',
              state_changed_at: '2022-11-30T20:09:48Z',
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-23T17:42:26Z',
              data_transfer_bytes: 1000000,
              written_data_bytes: 100800,
              compute_time_seconds: 100,
              active_time_seconds: 100,
              cpu_used_sec: 100,
              default: true,
              protected: false,
              creation_source: 'console',
            },
            operations: [],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdBranchesBranchIdRestoreRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/branches/{branch_id}/restore',
  tags: ['Branch'],
  summary: 'Restore a branch',
  description: "Restores a branch to an earlier state in its own or another branch's history",
  operationId: 'restoreProjectBranch',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BranchRestoreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated the specified branch',
      content: { 'application/json': { schema: BranchOperationsSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdSchemaRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/schema',
  tags: ['Branch'],
  summary: 'Get the database schema',
  description:
    "Retrieves the schema from the specified database. The `lsn` and `timestamp` values cannot be specified at the same time. If both are omitted, the database schema is retrieved from database's head.",
  operationId: 'getProjectBranchSchema',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    query: z.object({
      db_name: z
        .string()
        .openapi({
          param: {
            name: 'db_name',
            in: 'query',
            description: 'Name of the database for which the schema is retrieved',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lsn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'lsn',
            in: 'query',
            description: 'The Log Sequence Number (LSN) for which the schema is retrieved\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            description: 'The point in time for which the schema is retrieved\n',
            schema: { type: 'string', format: 'date-time', example: '2022-11-30T20:09:48Z' },
            required: false,
          },
          example: '2022-11-30T20:09:48Z',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Schema definition',
      content: { 'application/json': { schema: BranchSchemaResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdCompareSchemaRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/compare_schema',
  tags: ['Branch'],
  summary: "Compare the database schema with another branch's schema",
  description:
    "Compares the schema from the specified database with another branch's schema. Hidden from the public spec.",
  operationId: 'getProjectBranchSchemaComparison',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    query: z.object({
      base_branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'base_branch_id',
            in: 'query',
            description: 'The branch ID to compare the schema with',
            required: false,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      db_name: z
        .string()
        .openapi({
          param: {
            name: 'db_name',
            in: 'query',
            description: 'Name of the database for which the schema is retrieved',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lsn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'lsn',
            in: 'query',
            description: 'The Log Sequence Number (LSN) for which the schema is retrieved\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            description: 'The point in time for which the schema is retrieved\n',
            schema: { type: 'string', format: 'date-time', example: '2022-11-30T20:09:48Z' },
            required: false,
          },
          example: '2022-11-30T20:09:48Z',
        }),
      base_lsn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'base_lsn',
            in: 'query',
            description: 'The Log Sequence Number (LSN) for the base branch schema\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      base_timestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'base_timestamp',
            in: 'query',
            description: 'The point in time for the base branch schema\n',
            schema: { type: 'string', format: 'date-time', example: '2022-11-30T20:09:48Z' },
            required: false,
          },
          example: '2022-11-30T20:09:48Z',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Difference between the schemas',
      content: { 'application/json': { schema: BranchSchemaCompareResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdBranchesBranchIdSetAsDefaultRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/branches/{branch_id}/set_as_default',
  tags: ['Branch'],
  summary: 'Set branch as default',
  description:
    "Sets the specified branch as the project's default branch.\nThe default designation is automatically removed from the previous default branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nFor more information, see [Manage branches](https://neon.tech/docs/manage/branches/).\n",
  operationId: 'setDefaultProjectBranch',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Updated the specified branch',
      content: {
        'application/json': {
          schema: BranchOperationsSchema,
          example: {
            branch: {
              cpu_used_sec: 1,
              active_time_seconds: 1,
              compute_time_seconds: 1,
              written_data_bytes: 100,
              data_transfer_bytes: 100,
              id: 'br-icy-dream-250089',
              project_id: 'shiny-wind-028834',
              parent_id: 'br-aged-salad-637688',
              parent_lsn: '0/1E19478',
              name: 'mybranch',
              current_state: 'ready',
              state_changed_at: '2022-11-30T20:09:48Z',
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-23T17:42:26Z',
              default: true,
              protected: false,
              creation_source: 'console',
            },
            operations: [],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdEndpointsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/endpoints',
  tags: ['Branch'],
  summary: 'Get a list of branch endpoints',
  description:
    "Retrieves a list of compute endpoints for the specified branch.\nNeon permits only one read-write compute endpoint per branch.\nA branch can have multiple read-only compute endpoints.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\n",
  operationId: 'listProjectBranchEndpoints',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a list of endpoints for the specified branch',
      content: {
        'application/json': {
          schema: EndpointsResponseSchema,
          example: {
            endpoints: [
              {
                host: 'ep-little-smoke-851426.us-east-2.aws.neon.tech',
                id: 'ep-little-smoke-851426',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-aged-salad-637688',
                autoscaling_limit_min_cu: 1,
                autoscaling_limit_max_cu: 1,
                region_id: 'aws-us-east-2',
                type: 'read_write',
                current_state: 'idle',
                settings: { pg_settings: {} },
                pooler_enabled: false,
                pooler_mode: 'transaction',
                disabled: false,
                passwordless_access: true,
                last_active: '2022-11-23T17:00:00Z',
                created_at: '2022-11-23T17:42:25Z',
                updated_at: '2022-11-30T18:25:21Z',
                proxy_host: 'us-east-2.aws.neon.tech',
                creation_source: 'console',
                provisioner: 'k8s-pod',
                suspend_timeout_seconds: 10800,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdDatabasesRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/databases',
  tags: ['Branch'],
  summary: 'Get a list of databases',
  description:
    "Retrieves a list of databases for the specified branch.\nA branch can have multiple databases.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nFor related information, see [Manage databases](https://neon.tech/docs/manage/databases/).\n",
  operationId: 'listProjectBranchDatabases',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a list of databases of the specified branch',
      content: {
        'application/json': {
          schema: DatabasesResponseSchema,
          example: {
            databases: [
              {
                id: 834686,
                branch_id: 'br-aged-salad-637688',
                name: 'main',
                owner_name: 'casey',
                created_at: '2022-11-30T18:25:15Z',
                updated_at: '2022-11-30T18:25:15Z',
              },
              {
                id: 834686,
                branch_id: 'br-aged-salad-637688',
                name: 'mydb',
                owner_name: 'casey',
                created_at: '2022-10-30T17:14:13Z',
                updated_at: '2022-10-30T17:14:13Z',
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdBranchesBranchIdDatabasesRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/branches/{branch_id}/databases',
  tags: ['Branch'],
  summary: 'Create a database',
  description:
    "Creates a database in the specified branch.\nA branch can have multiple databases.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nFor related information, see [Manage databases](https://neon.tech/docs/manage/databases/).\n",
  operationId: 'createProjectBranchDatabase',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DatabaseCreateRequestSchema,
          example: { database: { name: 'mydb', owner_name: 'casey' } },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created a database in the specified branch',
      content: {
        'application/json': {
          schema: DatabaseOperationsSchema,
          example: {
            database: {
              id: 876692,
              branch_id: 'br-aged-salad-637688',
              name: 'mydb',
              owner_name: 'casey',
              created_at: '2022-12-04T00:15:04Z',
              updated_at: '2022-12-04T00:15:04Z',
            },
            operations: [
              {
                id: '39426015-db00-40fa-85c5-1c7072df46d0',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-aged-salad-637688',
                endpoint_id: 'ep-little-smoke-851426',
                action: 'apply_config',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-04T00:15:04Z',
                updated_at: '2022-12-04T00:15:04Z',
                total_duration_ms: 100,
              },
              {
                id: 'b7483d4e-33da-4d40-b319-ac858d4d3e69',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-aged-salad-637688',
                endpoint_id: 'ep-little-smoke-851426',
                action: 'suspend_compute',
                status: 'scheduling',
                failures_count: 0,
                created_at: '2022-12-04T00:15:04Z',
                updated_at: '2022-12-04T00:15:04Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/databases/{database_name}',
  tags: ['Branch'],
  summary: 'Get database details',
  description:
    "Retrieves information about the specified database.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` and `database_name` by listing the branch's databases.\nFor related information, see [Manage databases](https://neon.tech/docs/manage/databases/).\n",
  operationId: 'getProjectBranchDatabase',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      database_name: z
        .string()
        .openapi({
          param: {
            name: 'database_name',
            in: 'path',
            description: 'The database name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned the database details',
      content: {
        'application/json': {
          schema: DatabaseResponseSchema,
          example: {
            database: {
              id: 834686,
              branch_id: 'br-aged-salad-637688',
              name: 'main',
              owner_name: 'casey',
              created_at: '2022-11-30T18:25:15Z',
              updated_at: '2022-11-30T18:25:15Z',
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/branches/{branch_id}/databases/{database_name}',
  tags: ['Branch'],
  summary: 'Delete a database',
  description:
    "Deletes the specified database from the branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` and `database_name` by listing the branch's databases.\nFor related information, see [Manage databases](https://neon.tech/docs/manage/databases/).\n",
  operationId: 'deleteProjectBranchDatabase',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      database_name: z
        .string()
        .openapi({
          param: {
            name: 'database_name',
            in: 'path',
            description: 'The database name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the specified database',
      content: {
        'application/json': {
          schema: DatabaseOperationsSchema,
          example: {
            database: {
              id: 851537,
              branch_id: 'br-raspy-hill-832856',
              name: 'mydb',
              owner_name: 'casey',
              created_at: '2022-12-01T19:41:46Z',
              updated_at: '2022-12-01T19:41:46Z',
            },
            operations: [
              {
                id: '9ef1c2ed-dce4-43aa-bae8-78aea636bf8a',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-raspy-hill-832856',
                endpoint_id: 'ep-steep-bush-777093',
                action: 'apply_config',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-01T19:51:41Z',
                updated_at: '2022-12-01T19:51:41Z',
                total_duration_ms: 100,
              },
              {
                id: '42dafb46-f861-497b-ae89-f2bec54f4966',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-raspy-hill-832856',
                endpoint_id: 'ep-steep-bush-777093',
                action: 'suspend_compute',
                status: 'scheduling',
                failures_count: 0,
                created_at: '2022-12-01T19:51:41Z',
                updated_at: '2022-12-01T19:51:41Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    204: { description: "Returned if the database doesn't exist or has already been deleted" },
    default: GeneralErrorResponse,
  },
})

export const patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute = createRoute({
  method: 'patch',
  path: '/projects/{project_id}/branches/{branch_id}/databases/{database_name}',
  tags: ['Branch'],
  summary: 'Update a database',
  description:
    "Updates the specified database in the branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` and `database_name` by listing the branch's databases.\nFor related information, see [Manage databases](https://neon.tech/docs/manage/databases/).\n",
  operationId: 'updateProjectBranchDatabase',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      database_name: z
        .string()
        .openapi({
          param: {
            name: 'database_name',
            in: 'path',
            description: 'The database name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DatabaseUpdateRequestSchema,
          example: { database: { name: 'mydb', owner_name: 'sally' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated the database',
      content: {
        'application/json': {
          schema: DatabaseOperationsSchema,
          example: {
            database: {
              id: 876692,
              branch_id: 'br-aged-salad-637688',
              name: 'mydb',
              owner_name: 'sally',
              created_at: '2022-12-04T00:15:04Z',
              updated_at: '2022-12-04T00:15:04Z',
            },
            operations: [
              {
                id: '9ef1c2ed-dce4-43aa-bae8-78aea636bf8a',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-aged-salad-637688',
                endpoint_id: 'ep-little-smoke-851426',
                action: 'apply_config',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-04T00:21:01Z',
                updated_at: '2022-12-04T00:21:01Z',
                total_duration_ms: 100,
              },
              {
                id: '42dafb46-f861-497b-ae89-f2bec54f4966',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-aged-salad-637688',
                endpoint_id: 'ep-little-smoke-851426',
                action: 'suspend_compute',
                status: 'scheduling',
                failures_count: 0,
                created_at: '2022-12-04T00:21:01Z',
                updated_at: '2022-12-04T00:21:01Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdRolesRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/roles',
  tags: ['Branch'],
  summary: 'Get a list of roles',
  description:
    "Retrieves a list of Postgres roles from the specified branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nFor related information, see [Manage roles](https://neon.tech/docs/manage/roles/).\n",
  operationId: 'listProjectBranchRoles',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a list of roles from the specified branch.',
      content: {
        'application/json': {
          schema: RolesResponseSchema,
          example: {
            roles: [
              {
                branch_id: 'br-aged-salad-637688',
                name: 'casey',
                protected: false,
                created_at: '2022-11-23T17:42:25Z',
                updated_at: '2022-11-23T17:42:25Z',
              },
              {
                branch_id: 'br-aged-salad-637688',
                name: 'thomas',
                protected: false,
                created_at: '2022-10-22T17:38:21Z',
                updated_at: '2022-10-22T17:38:21Z',
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdBranchesBranchIdRolesRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/branches/{branch_id}/roles',
  tags: ['Branch'],
  summary: 'Create a role',
  description:
    "Creates a Postgres role in the specified branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nFor related information, see [Manage roles](https://neon.tech/docs/manage/roles/).\n\nConnections established to the active compute endpoint will be dropped.\nIf the compute endpoint is idle, the endpoint becomes active for a short period of time and is suspended afterward.\n",
  operationId: 'createProjectBranchRole',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: RoleCreateRequestSchema,
          example: { role: { name: 'sally' } },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created a role in the specified branch',
      content: {
        'application/json': {
          schema: RoleOperationsSchema,
          example: {
            role: {
              branch_id: 'br-noisy-sunset-458773',
              name: 'sally',
              password: 'Onf1AjayKwe0',
              protected: false,
              created_at: '2022-12-03T11:58:29Z',
              updated_at: '2022-12-03T11:58:29Z',
            },
            operations: [
              {
                id: '2c2be371-d5ac-4db5-8b68-79f05e8bc287',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-noisy-sunset-458773',
                endpoint_id: 'ep-small-pine-767857',
                action: 'apply_config',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T11:58:29Z',
                updated_at: '2022-12-03T11:58:29Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdRolesRoleNameRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}',
  tags: ['Branch'],
  summary: 'Get role details',
  description:
    'Retrieves details about the specified role.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project\'s branches.\nYou can obtain the `role_name` by listing the roles for a branch.\nIn Neon, the terms "role" and "user" are synonymous.\nFor related information, see [Manage roles](https://neon.tech/docs/manage/roles/).\n',
  operationId: 'getProjectBranchRole',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      role_name: z
        .string()
        .openapi({
          param: {
            name: 'role_name',
            in: 'path',
            description: 'The role name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned details for the specified role',
      content: {
        'application/json': {
          schema: RoleResponseSchema,
          example: {
            role: {
              branch_id: 'br-noisy-sunset-458773',
              name: 'casey',
              protected: false,
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-23T17:42:25Z',
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}',
  tags: ['Branch'],
  summary: 'Delete a role',
  description:
    "Deletes the specified Postgres role from the branch.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nYou can obtain the `role_name` by listing the roles for a branch.\nFor related information, see [Manage roles](https://neon.tech/docs/manage/roles/).\n",
  operationId: 'deleteProjectBranchRole',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      role_name: z
        .string()
        .openapi({
          param: {
            name: 'role_name',
            in: 'path',
            description: 'The role name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the specified role from the branch',
      content: {
        'application/json': {
          schema: RoleOperationsSchema,
          example: {
            role: {
              branch_id: 'br-raspy-hill-832856',
              name: 'thomas',
              protected: false,
              created_at: '2022-12-01T14:36:23Z',
              updated_at: '2022-12-01T14:36:23Z',
            },
            operations: [
              {
                id: 'db646be3-eace-4910-9f60-8150823c5cb8',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-raspy-hill-832856',
                endpoint_id: 'ep-steep-bush-777093',
                action: 'apply_config',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-01T19:48:11Z',
                updated_at: '2022-12-01T19:48:11Z',
                total_duration_ms: 100,
              },
              {
                id: 'ab94cdad-7630-4943-a55e-5a0952d2e598',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-raspy-hill-832856',
                endpoint_id: 'ep-steep-bush-777093',
                action: 'suspend_compute',
                status: 'scheduling',
                failures_count: 0,
                created_at: '2022-12-01T19:48:11Z',
                updated_at: '2022-12-01T19:48:11Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    204: { description: "Returned if the role doesn't exist or has already been deleted" },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password',
  tags: ['Branch'],
  summary: 'Get role password',
  description:
    "Retrieves the password for the specified Postgres role, if possible.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nYou can obtain the `role_name` by listing the roles for a branch.\nFor related information, see [Manage roles](https://neon.tech/docs/manage/roles/).\n",
  operationId: 'getProjectBranchRolePassword',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      role_name: z
        .string()
        .openapi({
          param: {
            name: 'role_name',
            in: 'path',
            description: 'The role name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned password for the specified role',
      content: {
        'application/json': { schema: RolePasswordResponseSchema, example: { password: 'mypass' } },
      },
    },
    404: {
      description: 'Role not found',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    412: {
      description: 'Storing passwords is disabled',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password',
  tags: ['Branch'],
  summary: 'Reset the role password',
  description:
    "Resets the password for the specified Postgres role.\nReturns a new password and operations. The new password is ready to use when the last operation finishes.\nThe old password remains valid until last operation finishes.\nConnections to the compute endpoint are dropped. If idle,\nthe compute endpoint becomes active for a short period of time.\n\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain the `branch_id` by listing the project's branches.\nYou can obtain the `role_name` by listing the roles for a branch.\nFor related information, see [Manage roles](https://neon.tech/docs/manage/roles/).\n",
  operationId: 'resetProjectBranchRolePassword',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      branch_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            description: 'The branch ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      role_name: z
        .string()
        .openapi({
          param: {
            name: 'role_name',
            in: 'path',
            description: 'The role nam',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reset the passsword for the specified role',
      content: {
        'application/json': {
          schema: RoleOperationsSchema,
          example: {
            role: {
              branch_id: 'br-noisy-sunset-458773',
              name: 'sally',
              password: 'ClfD0aVuK3eK',
              protected: false,
              created_at: '2022-12-03T12:39:39Z',
              updated_at: '2022-12-03T12:58:18Z',
            },
            operations: [
              {
                id: '6bef07a0-ebca-40cd-9100-7324036cfff2',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-noisy-sunset-458773',
                endpoint_id: 'ep-small-pine-767857',
                action: 'apply_config',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T12:58:18Z',
                updated_at: '2022-12-03T12:58:18Z',
                total_duration_ms: 100,
              },
              {
                id: '16b5bfca-4697-4194-a338-d2cdc9aca2af',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-noisy-sunset-458773',
                endpoint_id: 'ep-small-pine-767857',
                action: 'suspend_compute',
                status: 'scheduling',
                failures_count: 0,
                created_at: '2022-12-03T12:58:18Z',
                updated_at: '2022-12-03T12:58:18Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdVpcEndpointsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/vpc_endpoints',
  tags: ['Project'],
  summary: 'Get the list of VPC endpoint restrictions',
  description:
    'Retrieves the list of VPC endpoint restrictions for the specified project.\nThis endpoint is under active development and its semantics may change in the future.\n',
  operationId: 'listProjectVPCEndpoints',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of configured VPC endpoint restrictions for the specified project',
      content: { 'application/json': { schema: VPCEndpointsResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdVpcEndpointsVpcEndpointIdRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}',
  tags: ['Project'],
  summary: 'Assign or update a VPC endpoint restriction',
  description:
    'Configures the specified VPC endpoint as restriction for the project,\nor updates the existing restriction. When a VPC endpoint is assigned\nas a restriction, only connections from this specific VPC are accepted.\nNote that a VPC endpoint can only used as a restriction on a project\nafter it has been assigned to the parent organization.\nThis endpoint is under active development and its semantics may change in the future.\n',
  operationId: 'assignProjectVPCEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      vpc_endpoint_id: z
        .string()
        .openapi({
          param: {
            name: 'vpc_endpoint_id',
            in: 'path',
            description: 'The VPC endpoint ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: VPCEndpointAssignmentSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Configured the specified VPC endpoint as a restriction for the specified project.',
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}',
  tags: ['Project'],
  summary: 'Delete a VPC endpoint',
  description:
    'Deletes the specified VPC endpoint restriction from the specified project.\nThis endpoint is under active development and its semantics may change in the future.\n',
  operationId: 'deleteProjectVPCEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      vpc_endpoint_id: z
        .string()
        .openapi({
          param: {
            name: 'vpc_endpoint_id',
            in: 'path',
            description: 'The VPC endpoint ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the specified VPC endpoint restriction from the specified project',
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdEndpointsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/endpoints',
  tags: ['Endpoint'],
  summary: 'Get a list of compute endpoints',
  description:
    'Retrieves a list of compute endpoints for the specified project.\nA compute endpoint is a Neon compute instance.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nFor information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n',
  operationId: 'listProjectEndpoints',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a list of endpoints for the specified project',
      content: {
        'application/json': {
          schema: EndpointsResponseSchema,
          example: {
            endpoints: [
              {
                host: 'ep-little-smoke-851426.us-east-2.aws.neon.tech',
                creation_source: 'console',
                suspend_timeout_seconds: 10800,
                provisioner: 'k8s-pod',
                id: 'ep-little-smoke-851426',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-aged-salad-637688',
                autoscaling_limit_min_cu: 1,
                autoscaling_limit_max_cu: 1,
                region_id: 'aws-us-east-2',
                type: 'read_write',
                current_state: 'idle',
                settings: { pg_settings: {} },
                pooler_enabled: false,
                pooler_mode: 'transaction',
                disabled: false,
                passwordless_access: true,
                last_active: '2022-11-23T17:00:00Z',
                created_at: '2022-11-23T17:42:25Z',
                updated_at: '2022-11-30T18:25:21Z',
                proxy_host: 'us-east-2.aws.neon.tech',
              },
              {
                host: 'ep-steep-bush-777093.us-east-2.aws.neon.tech',
                creation_source: 'console',
                suspend_timeout_seconds: 10800,
                provisioner: 'k8s-pod',
                id: 'ep-steep-bush-777093',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-raspy-hill-832856',
                autoscaling_limit_min_cu: 1,
                autoscaling_limit_max_cu: 1,
                region_id: 'aws-us-east-2',
                type: 'read_write',
                current_state: 'idle',
                settings: { pg_settings: {} },
                pooler_enabled: false,
                pooler_mode: 'transaction',
                disabled: false,
                passwordless_access: true,
                last_active: '2022-11-30T17:00:00Z',
                created_at: '2022-11-30T17:36:57Z',
                updated_at: '2022-11-30T18:42:58Z',
                proxy_host: 'us-east-2.aws.neon.tech',
              },
              {
                host: 'ep-soft-violet-752733.us-east-2.aws.neon.tech',
                creation_source: 'console',
                suspend_timeout_seconds: 10800,
                provisioner: 'k8s-pod',
                id: 'ep-soft-violet-752733',
                project_id: 'shiny-wind-028834',
                branch_id: 'br-sweet-breeze-497520',
                autoscaling_limit_min_cu: 1,
                autoscaling_limit_max_cu: 1,
                region_id: 'aws-us-east-2',
                type: 'read_write',
                current_state: 'idle',
                settings: { pg_settings: {} },
                pooler_enabled: false,
                pooler_mode: 'transaction',
                disabled: false,
                passwordless_access: true,
                last_active: '2022-11-30T19:00:00Z',
                created_at: '2022-11-30T19:09:48Z',
                updated_at: '2022-11-30T19:14:51Z',
                proxy_host: 'us-east-2.aws.neon.tech',
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdEndpointsRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/endpoints',
  tags: ['Endpoint'],
  summary: 'Create a compute endpoint',
  description:
    "Creates a compute endpoint for the specified branch.\nAn endpoint is a Neon compute instance.\nThere is a maximum of one read-write compute endpoint per branch.\nIf the specified branch already has a read-write compute endpoint, the operation fails.\nA branch can have multiple read-only compute endpoints.\n\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain `branch_id` by listing the project's branches.\nA `branch_id` has a `br-` prefix.\nFor supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).\nFor more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n",
  operationId: 'createProjectEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EndpointCreateRequestSchema,
          examples: {
            required_attributes_only: {
              summary: 'Required attributes only',
              value: { endpoint: { branch_id: 'br-floral-mountain-251143', type: 'read_write' } },
            },
            with_region_attribute: {
              summary: 'With region attribute',
              value: {
                endpoint: {
                  branch_id: 'br-floral-mountain-251143',
                  type: 'read_write',
                  region_id: 'aws-us-east-2',
                },
              },
            },
            with_pooler_attribute: {
              summary: 'With pooler attribute',
              value: {
                endpoint: {
                  branch_id: 'br-floral-mountain-251143',
                  type: 'read_write',
                  pooler_enabled: true,
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created a compute endpoint',
      content: {
        'application/json': {
          schema: EndpointOperationsSchema,
          example: {
            endpoint: {
              host: 'ep-shrill-thunder-454069.us-east-2.aws.neon.tech',
              id: 'ep-shrill-thunder-454069',
              project_id: 'bitter-meadow-966132',
              branch_id: 'br-proud-paper-090813',
              autoscaling_limit_min_cu: 1,
              autoscaling_limit_max_cu: 1,
              region_id: 'aws-us-east-2',
              type: 'read_write',
              current_state: 'init',
              pending_state: 'active',
              settings: { pg_settings: {} },
              pooler_enabled: false,
              pooler_mode: 'transaction',
              disabled: false,
              passwordless_access: true,
              created_at: '2022-12-03T15:37:07Z',
              updated_at: '2022-12-03T15:37:07Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              creation_source: 'console',
              suspend_timeout_seconds: 10800,
              provisioner: 'k8s-pod',
            },
            operations: [
              {
                id: '874f8bfe-f51d-4c61-85af-a29bea73e0e2',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'start_compute',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T15:37:07Z',
                updated_at: '2022-12-03T15:37:07Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getProjectsProjectIdEndpointsEndpointIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/endpoints/{endpoint_id}',
  tags: ['Endpoint'],
  summary: 'Get a compute endpoint',
  description:
    "Retrieves information about the specified compute endpoint.\nA compute endpoint is a Neon compute instance.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain an `endpoint_id` by listing your project's compute endpoints.\nAn `endpoint_id` has an `ep-` prefix.\nFor information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n",
  operationId: 'getProjectEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'endpoint_id',
            in: 'path',
            description: 'The endpoint ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned information about the specified endpoint',
      content: {
        'application/json': {
          schema: EndpointResponseSchema,
          example: {
            endpoint: {
              host: 'ep-little-smoke-851426.us-east-2.aws.neon.tech',
              id: 'ep-little-smoke-851426',
              project_id: 'shiny-wind-028834',
              branch_id: 'br-aged-salad-637688',
              autoscaling_limit_min_cu: 1,
              autoscaling_limit_max_cu: 1,
              region_id: 'aws-us-east-2',
              type: 'read_write',
              current_state: 'idle',
              settings: { pg_settings: {} },
              pooler_enabled: false,
              pooler_mode: 'transaction',
              disabled: false,
              passwordless_access: true,
              last_active: '2022-11-23T17:00:00Z',
              created_at: '2022-11-23T17:42:25Z',
              updated_at: '2022-11-30T18:25:21Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              creation_source: 'console',
              provisioner: 'k8s-pod',
              suspend_timeout_seconds: 10800,
            },
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteProjectsProjectIdEndpointsEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/endpoints/{endpoint_id}',
  tags: ['Endpoint'],
  summary: 'Delete a compute endpoint',
  description:
    "Delete the specified compute endpoint.\nA compute endpoint is a Neon compute instance.\nDeleting a compute endpoint drops existing network connections to the compute endpoint.\nThe deletion is completed when last operation in the chain finishes successfully.\n\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain an `endpoint_id` by listing your project's compute endpoints.\nAn `endpoint_id` has an `ep-` prefix.\nFor information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n",
  operationId: 'deleteProjectEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'endpoint_id',
            in: 'path',
            description: 'The endpoint ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the specified compute endpoint',
      content: {
        'application/json': {
          schema: EndpointOperationsSchema,
          example: {
            endpoint: {
              host: 'ep-steep-bush-777093.us-east-2.aws.neon.tech',
              id: 'ep-steep-bush-777093',
              project_id: 'shiny-wind-028834',
              branch_id: 'br-raspy-hill-832856',
              autoscaling_limit_min_cu: 1,
              autoscaling_limit_max_cu: 1,
              region_id: 'aws-us-east-2',
              type: 'read_write',
              current_state: 'idle',
              settings: { pg_settings: {} },
              pooler_enabled: false,
              pooler_mode: 'transaction',
              disabled: false,
              passwordless_access: true,
              last_active: '2022-12-03T15:00:00Z',
              created_at: '2022-12-03T15:37:07Z',
              updated_at: '2022-12-03T15:49:10Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              creation_source: 'console',
              provisioner: 'k8s-pod',
              suspend_timeout_seconds: 10800,
            },
            operations: [
              {
                id: 'fd11748e-3c68-458f-b9e3-66d409e3eef0',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'suspend_compute',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T15:51:06Z',
                updated_at: '2022-12-03T15:51:06Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    204: { description: "Returned if the endpoint doesn't exist or has already been deleted" },
    default: GeneralErrorResponse,
  },
})

export const patchProjectsProjectIdEndpointsEndpointIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{project_id}/endpoints/{endpoint_id}',
  tags: ['Endpoint'],
  summary: 'Update a compute endpoint',
  description:
    "Updates the specified compute endpoint.\n\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain an `endpoint_id` and `branch_id` by listing your project's compute endpoints.\nAn `endpoint_id` has an `ep-` prefix. A `branch_id` has a `br-` prefix.\n For more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n\nIf the returned list of operations is not empty, the compute endpoint is not ready to use.\nThe client must wait for the last operation to finish before using the compute endpoint.\nIf the compute endpoint was idle before the update, it becomes active for a short period of time,\nand the control plane suspends it again after the update.\n",
  operationId: 'updateProjectEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'endpoint_id',
            in: 'path',
            description: 'The endpoint ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EndpointUpdateRequestSchema,
          example: { endpoint: { suspend_timeout_seconds: 300 } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated the specified compute endpoint',
      content: {
        'application/json': {
          schema: EndpointOperationsSchema,
          example: {
            endpoint: {
              host: 'ep-steep-bush-777093.us-east-2.aws.neon.tech',
              id: 'ep-steep-bush-777093',
              project_id: 'shiny-wind-028834',
              branch_id: 'br-raspy-hill-832856',
              autoscaling_limit_min_cu: 1,
              autoscaling_limit_max_cu: 1,
              region_id: 'aws-us-east-2',
              type: 'read_write',
              current_state: 'idle',
              settings: { pg_settings: {} },
              pooler_enabled: false,
              pooler_mode: 'transaction',
              disabled: false,
              passwordless_access: true,
              last_active: '2022-12-03T15:00:00Z',
              created_at: '2022-12-03T15:37:07Z',
              updated_at: '2022-12-03T15:49:10Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              creation_source: 'console',
              provisioner: 'k8s-pod',
              suspend_timeout_seconds: 10800,
            },
            operations: [
              {
                id: '3fc98ab8-f191-47b8-a427-5eb668ccc5b9',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'apply_config',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T15:51:06Z',
                updated_at: '2022-12-03T15:51:06Z',
                total_duration_ms: 100,
              },
              {
                id: '9ffda74b-a582-4cff-b0f0-aaa8d14b8e6a',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'suspend_compute',
                status: 'scheduling',
                failures_count: 0,
                created_at: '2022-12-03T15:51:06Z',
                updated_at: '2022-12-03T15:51:06Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdEndpointsEndpointIdStartRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/endpoints/{endpoint_id}/start',
  tags: ['Endpoint'],
  summary: 'Start a compute endpoint',
  description:
    "Starts a compute endpoint. The compute endpoint is ready to use\nafter the last operation in chain finishes successfully.\n\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain an `endpoint_id` by listing your project's compute endpoints.\nAn `endpoint_id` has an `ep-` prefix.\nFor information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n",
  operationId: 'startProjectEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'endpoint_id',
            in: 'path',
            description: 'The endpoint ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Started the specified compute endpoint',
      content: {
        'application/json': {
          schema: EndpointOperationsSchema,
          example: {
            endpoint: {
              host: 'ep-steep-bush-777093.us-east-2.aws.neon.tech',
              id: 'ep-steep-bush-777093',
              project_id: 'shiny-wind-028834',
              branch_id: 'br-raspy-hill-832856',
              autoscaling_limit_min_cu: 1,
              autoscaling_limit_max_cu: 1,
              region_id: 'aws-us-east-2',
              type: 'read_write',
              current_state: 'idle',
              settings: { pg_settings: {} },
              pooler_enabled: false,
              pooler_mode: 'transaction',
              disabled: false,
              passwordless_access: true,
              last_active: '2022-12-03T15:00:00Z',
              created_at: '2022-12-03T15:37:07Z',
              updated_at: '2022-12-03T15:49:10Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              creation_source: 'console',
              provisioner: 'k8s-pod',
              suspend_timeout_seconds: 10800,
            },
            operations: [
              {
                id: 'e061087e-3c99-4856-b9c8-6b7751a253af',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'start_compute',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T15:51:06Z',
                updated_at: '2022-12-03T15:51:06Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdEndpointsEndpointIdSuspendRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/endpoints/{endpoint_id}/suspend',
  tags: ['Endpoint'],
  summary: 'Suspend a compute endpoint',
  description:
    "Suspend the specified compute endpoint\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain an `endpoint_id` by listing your project's compute endpoints.\nAn `endpoint_id` has an `ep-` prefix.\nFor information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n",
  operationId: 'suspendProjectEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'endpoint_id',
            in: 'path',
            description: 'The endpoint ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Suspended the specified endpoint',
      content: {
        'application/json': {
          schema: EndpointOperationsSchema,
          example: {
            endpoint: {
              host: 'ep-steep-bush-777093.us-east-2.aws.neon.tech',
              id: 'ep-steep-bush-777093',
              project_id: 'shiny-wind-028834',
              branch_id: 'br-raspy-hill-832856',
              autoscaling_limit_min_cu: 1,
              autoscaling_limit_max_cu: 1,
              region_id: 'aws-us-east-2',
              type: 'read_write',
              current_state: 'idle',
              settings: { pg_settings: {} },
              pooler_enabled: false,
              pooler_mode: 'transaction',
              disabled: false,
              passwordless_access: true,
              last_active: '2022-12-03T15:00:00Z',
              created_at: '2022-12-03T15:37:07Z',
              updated_at: '2022-12-03T15:49:10Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              creation_source: 'console',
              provisioner: 'k8s-pod',
              suspend_timeout_seconds: 10800,
            },
            operations: [
              {
                id: 'e061087e-3c99-4856-b9c8-6b7751a253af',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'suspend_compute',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T15:51:06Z',
                updated_at: '2022-12-03T15:51:06Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postProjectsProjectIdEndpointsEndpointIdRestartRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/endpoints/{endpoint_id}/restart',
  tags: ['Endpoint'],
  summary: 'Restart a compute endpoint',
  description:
    "Restart the specified compute endpoint: suspend immediately followed by start operations.\nYou can obtain a `project_id` by listing the projects for your Neon account.\nYou can obtain an `endpoint_id` by listing your project's compute endpoints.\nAn `endpoint_id` has an `ep-` prefix.\nFor information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).\n",
  operationId: 'restartProjectEndpoint',
  request: {
    params: z.object({
      project_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The Neon project ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'endpoint_id',
            in: 'path',
            description: 'The endpoint ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Restarted endpoint',
      content: {
        'application/json': {
          schema: EndpointOperationsSchema,
          example: {
            endpoint: {
              host: 'ep-steep-bush-777093.us-east-2.aws.neon.tech',
              id: 'ep-steep-bush-777093',
              project_id: 'shiny-wind-028834',
              branch_id: 'br-raspy-hill-832856',
              autoscaling_limit_min_cu: 1,
              autoscaling_limit_max_cu: 1,
              region_id: 'aws-us-east-2',
              type: 'read_write',
              current_state: 'idle',
              settings: { pg_settings: {} },
              pooler_enabled: false,
              pooler_mode: 'transaction',
              disabled: false,
              passwordless_access: true,
              last_active: '2022-12-03T15:00:00Z',
              created_at: '2022-12-03T15:37:07Z',
              updated_at: '2022-12-03T15:49:10Z',
              proxy_host: 'us-east-2.aws.neon.tech',
              creation_source: 'console',
              provisioner: 'k8s-pod',
              suspend_timeout_seconds: 10800,
            },
            operations: [
              {
                id: 'e061087e-3c99-4856-b9c8-6b7751a253af',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'suspend_compute',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T15:51:06Z',
                updated_at: '2022-12-03T15:51:06Z',
                total_duration_ms: 100,
              },
              {
                id: 'e061087e-3c99-4856-b9c8-6b7751a253af',
                project_id: 'bitter-meadow-966132',
                branch_id: 'br-proud-paper-090813',
                endpoint_id: 'ep-shrill-thunder-454069',
                action: 'start_compute',
                status: 'running',
                failures_count: 0,
                created_at: '2022-12-03T15:51:06Z',
                updated_at: '2022-12-03T15:51:06Z',
                total_duration_ms: 100,
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getConsumptionHistoryAccountRoute = createRoute({
  method: 'get',
  path: '/consumption_history/account',
  tags: ['Consumption'],
  summary: 'Get account consumption metrics',
  description:
    'Retrieves consumption metrics for Scale and Business plan accounts. History begins at the time of upgrade.\nAvailable for Scale and Business plan users only.\n',
  operationId: 'getConsumptionHistoryPerAccount',
  request: {
    query: z.object({
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'from',
            description:
              'Specify the start `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified `granularity`.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified granularity:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the past year.\n\nThe consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.\n',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: true,
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'to',
            description:
              'Specify the end `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified granularity.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified granularity:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the past year.\n',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: true,
          },
        }),
      granularity: ConsumptionHistoryGranularitySchema.openapi({
        param: {
          name: 'granularity',
          description:
            'Specify the granularity of consumption metrics.\nHourly, daily, and monthly metrics are available for the last 168 hours, 60 days,\nand 1 year, respectively.\n',
          in: 'query',
          schema: { $ref: '#/components/schemas/ConsumptionHistoryGranularity' },
          required: true,
        },
      }),
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            description:
              "Specify the organization for which the consumption metrics should be returned.\nIf this parameter is not provided, the endpoint will return the metrics for the\nauthenticated user's account.\n",
            in: 'query',
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
            required: false,
          },
        }),
      include_v1_metrics: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_v1_metrics',
            description:
              'Include metrics utilized in previous pricing models.\n- **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour\n  for each project, which never decreases.\n',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned consumption metrics for the Neon account',
      content: { 'application/json': { schema: ConsumptionHistoryPerAccountResponseSchema } },
    },
    403: {
      description:
        'This endpoint is not available. It is only supported for Scale and Business plan accounts.',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    404: {
      description: 'Account is not a member of the organization specified by `org_id`.',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    406: {
      description:
        'The specified `date-time` range is outside the boundaries of the specified `granularity`.\nAdjust your `from` and `to` values or select a different `granularity`.\n',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getConsumptionHistoryProjectsRoute = createRoute({
  method: 'get',
  path: '/consumption_history/projects',
  tags: ['Consumption'],
  summary: 'Get consumption metrics for each project',
  description:
    "Retrieves consumption metrics for Scale and Business plan projects. History begins at the time of upgrade.\nAvailable for Scale and Business plan users only.\nIssuing a call to this API does not wake a project's compute endpoint.\n",
  operationId: 'getConsumptionHistoryPerProject',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Specify the cursor value from the previous response to get the next batch of projects.',
            in: 'query',
            schema: { type: 'string' },
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
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description:
              'Specify a value from 1 to 100 to limit number of projects in the response.',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 10, maximum: 100 },
            required: false,
          },
        }),
      project_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(z.string().regex(/^([a-z0-9-]{1,60}(,[a-z0-9-]{1,60}){0,99})?$/))
            .min(0)
            .max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'project_ids',
            description:
              'Specify a list of project IDs to filter the response.\nIf omitted, the response will contain all projects.\nA list of project IDs can be specified as an array of parameter values or as a comma-separated list in a single parameter value.\n- As an array of parameter values: `project_ids=cold-poetry-09157238%20&project_ids=quiet-snow-71788278`\n- As a comma-separated list in a single parameter value: `project_ids=cold-poetry-09157238,quiet-snow-71788278`\n',
            in: 'query',
            schema: {
              type: 'array',
              items: { pattern: '^([a-z0-9-]{1,60}(,[a-z0-9-]{1,60}){0,99})?$', type: 'string' },
              minItems: 0,
              maxItems: 100,
            },
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'from',
            description:
              'Specify the start `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified `granularity`.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n\nThe consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.\n',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: true,
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'to',
            description:
              'Specify the end `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified granularity.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: true,
          },
        }),
      granularity: ConsumptionHistoryGranularitySchema.openapi({
        param: {
          name: 'granularity',
          description:
            'Specify the granularity of consumption metrics.\nHourly, daily, and monthly metrics are available for the last 168 hours, 60 days,\nand 1 year, respectively.\n',
          in: 'query',
          schema: { $ref: '#/components/schemas/ConsumptionHistoryGranularity' },
          required: true,
        },
      }),
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            description:
              "Specify the organization for which the project consumption metrics should be returned.\nIf this parameter is not provided, the endpoint will return the metrics for the\nauthenticated user's projects.\n",
            in: 'query',
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
            required: false,
          },
        }),
      include_v1_metrics: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_v1_metrics',
            description:
              'Include metrics utilized in previous pricing models.\n- **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour,\n  which never decreases.\n',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned project consumption metrics for the Neon account',
      content: {
        'application/json': {
          schema: ConsumptionHistoryPerProjectResponseSchema.and(PaginationResponseSchema),
        },
      },
    },
    403: {
      description:
        'This endpoint is not available. It is only supported with Scale and Business plan accounts.',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    404: {
      description: 'Account is not a member of the organization specified by `org_id`.',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    406: {
      description:
        'The specified `date-time` range is outside the boundaries of the specified `granularity`.\nAdjust your `from` and `to` values or select a different `granularity`.\n',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: GeneralErrorSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrganizationsOrgIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}',
  tags: ['Organizations'],
  summary: 'Get organization details',
  description: 'Retrieves information about the specified organization.\n',
  operationId: 'getOrganization',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned information about the organization',
      content: {
        'application/json': {
          schema: OrganizationSchema,
          example: {
            id: 'my-organization-morning-bread-81040908',
            name: 'my-organization',
            handle: 'my-organization-my-organization-morning-bread-81040908',
            plan: 'scale',
            managed_by: 'console',
            created_at: '2024-02-23T17:42:25Z',
            updated_at: '2024-02-26T20:41:25Z',
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrganizationsOrgIdApiKeysRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/api_keys',
  tags: ['Organizations'],
  summary: 'Get a list of organization API keys',
  description:
    'Retrieves the API keys for the specified organization.\nThe response does not include API key tokens. A token is only provided when creating an API key.\nAPI keys can also be managed in the Neon Console.\nFor more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).\n',
  operationId: 'listOrgApiKeys',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned the API keys for the specified organization',
      content: {
        'application/json': {
          schema: z.array(OrgApiKeysListResponseItemSchema).openapi({
            example: [
              {
                id: 165432,
                name: 'orgkey_1',
                created_at: '2022-11-15T20:13:35Z',
                created_by: {
                  id: '629982cc-de05-43db-ae16-28f2399c4910',
                  name: 'John Smith',
                  image: 'http://link.to.image',
                },
                last_used_at: '2022-11-15T20:22:51Z',
                last_used_from_addr: '192.0.2.255',
              },
              {
                id: 165433,
                name: 'orgkey_2',
                created_at: '2022-11-15T20:12:36Z',
                created_by: {
                  id: '629982cc-de05-43db-ae16-28f2399c4910',
                  name: 'John Smith',
                  image: 'http://link.to.image',
                },
                last_used_at: '2022-11-15T20:15:04Z',
                last_used_from_addr: '192.0.2.255',
              },
            ],
          }),
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrganizationsOrgIdApiKeysRoute = createRoute({
  method: 'post',
  path: '/organizations/{org_id}/api_keys',
  tags: ['Organizations'],
  summary: 'Create an organization API key',
  description:
    'Creates an API key for the specified organization.\nThe `key_name` is a user-specified name for the key.\nThis method returns an `id` and `key`. The `key` is a randomly generated, 64-bit token required to access the Neon API.\nAPI keys can also be managed in the Neon Console.\nSee [Manage API keys](https://neon.tech/docs/manage/api-keys/).\n',
  operationId: 'createOrgApiKey',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: OrgApiKeyCreateRequestSchema,
          example: { key_name: 'orgkey' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Created an organization API key',
      content: {
        'application/json': {
          schema: OrgApiKeyCreateResponseSchema,
          example: {
            id: 165434,
            key: '9v1faketcjbl4sn1013keyd43n2a8qlfakeog8yvp40hx16keyjo1bpds4y2dfms3',
            name: 'orgkey',
            created_at: '2022-11-15T20:13:35Z',
            created_by: '629982cc-de05-43db-ae16-28f2399c4910',
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteOrganizationsOrgIdApiKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{org_id}/api_keys/{key_id}',
  tags: ['Organizations'],
  summary: 'Revoke an organization API key',
  description:
    'Revokes the specified organization API key.\nAn API key that is no longer needed can be revoked.\nThis action cannot be reversed.\nYou can obtain `key_id` values by listing the API keys for an organization.\nAPI keys can also be managed in the Neon Console.\nSee [Manage API keys](https://neon.tech/docs/manage/api-keys/).\n',
  operationId: 'revokeOrgApiKey',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      key_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'key_id',
            in: 'path',
            description: 'The API key ID',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Revoked the specified organization API key',
      content: {
        'application/json': {
          schema: OrgApiKeyRevokeResponseSchema,
          example: {
            id: 165435,
            name: 'orgkey',
            created_at: '2022-11-15T20:13:35Z',
            created_by: '629982cc-de05-43db-ae16-28f2399c4910',
            last_used_at: '2022-11-15T20:15:04Z',
            last_used_from_addr: '192.0.2.255',
            revoked: true,
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrganizationsOrgIdMembersRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/members',
  tags: ['Organizations'],
  summary: 'Get organization members details',
  description: 'Retrieves information about the specified organization members.\n',
  operationId: 'getOrganizationMembers',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned information about organization members',
      content: {
        'application/json': {
          schema: OrganizationMembersResponseSchema,
          example: {
            members: [
              {
                member: {
                  id: 'd57833f2-d308-4ede-9d2e-468d9d013d1b',
                  user_id: 'b107d689-6dd2-4c9a-8b9e-0b25e457cf56',
                  org_id: 'my-organization-morning-bread-81040908',
                  role: 'admin',
                  joined_at: '2024-02-23T17:42:25Z',
                },
                user: { email: 'user1@email.com' },
              },
              {
                member: {
                  id: '5fee13ac-957b-40cd-8de0-4d494cc28e28',
                  user_id: '6df052ac-ca9a-4321-8963-b6507b2d7dee',
                  org_id: 'my-organization-morning-bread-81040908',
                  role: 'member',
                  joined_at: '2024-02-21T16:42:25Z',
                },
                user: { email: 'user2@email.com' },
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrganizationsOrgIdMembersMemberIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/members/{member_id}',
  tags: ['Organizations'],
  summary: 'Get organization member details',
  description: 'Retrieves information about the specified organization member.\n',
  operationId: 'getOrganizationMember',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'member_id',
            in: 'path',
            description: 'The Neon organization member ID',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned information about the organization member',
      content: {
        'application/json': {
          schema: MemberSchema,
          example: {
            id: 'd57833f2-d308-4ede-9d2e-468d9d013d1b',
            user_id: 'b107d689-6dd2-4c9a-8b9e-0b25e457cf56',
            org_id: 'my-organization-morning-bread-81040908',
            role: 'admin',
            joined_at: '2024-02-23T17:42:25Z',
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteOrganizationsOrgIdMembersMemberIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{org_id}/members/{member_id}',
  tags: ['Organizations'],
  summary: 'Remove member from the organization',
  description:
    'Remove member from the organization.\nOnly an admin of the organization can perform this action.\nIf another admin is being removed, it will not be allows in case it is the only admin left in the organization.\n',
  operationId: 'removeOrganizationMember',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'member_id',
            in: 'path',
            description: 'The Neon organization member ID',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Removed organization member',
      content: { 'application/json': { schema: EmptyResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const patchOrganizationsOrgIdMembersMemberIdRoute = createRoute({
  method: 'patch',
  path: '/organizations/{org_id}/members/{member_id}',
  tags: ['Organizations'],
  summary: 'Update the role for an organization member',
  description: 'Only an admin can perform this action.\n',
  operationId: 'updateOrganizationMember',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'member_id',
            in: 'path',
            description: 'The Neon organization member ID',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: OrganizationMemberUpdateRequestSchema,
          example: { role: 'admin' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated organization member',
      content: { 'application/json': { schema: MemberSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrganizationsOrgIdInvitationsRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/invitations',
  tags: ['Organizations'],
  summary: 'Get organization invitation details',
  description: 'Retrieves information about extended invitations for the specified organization\n',
  operationId: 'getOrganizationInvitations',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned information about the organization invitations',
      content: {
        'application/json': {
          schema: OrganizationInvitationsResponseSchema,
          example: {
            invitations: [
              {
                id: 'db8faf32-b07f-4b0f-94c8-5c288909f5d3',
                email: 'invited1@email.com',
                org_id: 'my-organization-morning-bread-81040908',
                invited_by: 'some@email.com',
                role: 'admin',
                invited_at: '2024-02-23T17:42:25Z',
              },
              {
                id: 'c52f0d22-ebd9-4708-ae44-2872cae49a83',
                email: 'invited2@email.com',
                org_id: 'my-organization-morning-bread-81040908',
                invited_by: 'some@email.com',
                role: 'member',
                invited_at: '2024-02-23T12:42:25Z',
              },
            ],
          },
        },
      },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrganizationsOrgIdInvitationsRoute = createRoute({
  method: 'post',
  path: '/organizations/{org_id}/invitations',
  tags: ['Organizations'],
  summary: 'Create organization invitations',
  description:
    "Creates invitations for a specific organization.\nIf the invited user has an existing account, they automatically join as a member.\nIf they don't yet have an account, they are invited to create one, after which they become a member.\nEach invited user receives an email notification.\n",
  operationId: 'createOrganizationInvitations',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: OrganizationInvitesCreateRequestSchema,
          example: { invitations: [{ email: 'invited-user@email.com', role: 'member' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The created organization invitation',
      content: { 'application/json': { schema: OrganizationInvitationsResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints',
  tags: ['Organizations'],
  summary: 'Get the list of VPC endpoints',
  description:
    'Retrieves the list of VPC endpoints for the specified organization.\nThis endpoint is under active development and its semantics may change in the future.\n',
  operationId: 'listOrganizationVPCEndpoints',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      region_id: z
        .string()
        .openapi({
          param: {
            name: 'region_id',
            in: 'path',
            description: 'The Neon region ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of configured VPC endpoint IDs for the specified organization',
      content: { 'application/json': { schema: VPCEndpointsResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}',
  tags: ['Organizations'],
  summary: 'Retrieve the state of a VPC endpoint configuration',
  description:
    'Retrieves detailed information about the VPC endpoint.\nThis endpoint is under active development and its semantics may change in the future.\n',
  operationId: 'getOrganizationVPCEndpointDetails',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      region_id: z
        .string()
        .openapi({
          param: {
            name: 'region_id',
            in: 'path',
            description: 'The Neon region ID.\nNote that Azure regions are not yet supported.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      vpc_endpoint_id: z
        .string()
        .openapi({
          param: {
            name: 'vpc_endpoint_id',
            in: 'path',
            description: 'The VPC endpoint ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The detailed state of the VPC endpoint',
      content: { 'application/json': { schema: VPCEndpointDetailsSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute = createRoute({
  method: 'post',
  path: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}',
  tags: ['Organizations'],
  summary: 'Assign or update a VPC endpoint',
  description:
    'Assigns the specified VPC endpoint to the specified organization\nor updates the existing assignment.\nThis endpoint is under active development and its semantics may change in the future.\n',
  operationId: 'assignOrganizationVPCEndpoint',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      region_id: z
        .string()
        .openapi({
          param: {
            name: 'region_id',
            in: 'path',
            description: 'The Neon region ID.\nNote that Azure regions are not yet supported.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      vpc_endpoint_id: z
        .string()
        .openapi({
          param: {
            name: 'vpc_endpoint_id',
            in: 'path',
            description: 'The VPC endpoint ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: VPCEndpointAssignmentSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Assigned the specified VPC endpoint to the specified organization' },
    default: GeneralErrorResponse,
  },
})

export const deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}',
  tags: ['Organizations'],
  summary: 'Delete a VPC endpoint',
  description:
    'Deletes the specified VPC endpoint from the specified organization.\nThis endpoint is under active development and its semantics may change in the future.\n',
  operationId: 'deleteOrganizationVPCEndpoint',
  request: {
    params: z.object({
      org_id: z
        .string()
        .regex(/^[a-z0-9-]{1,60}$/)
        .openapi({
          param: {
            name: 'org_id',
            in: 'path',
            description: 'The Neon organization ID',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9-]{1,60}$' },
          },
        }),
      region_id: z
        .string()
        .openapi({
          param: {
            name: 'region_id',
            in: 'path',
            description: 'The Neon region ID.\nNote that Azure regions are not yet supported.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      vpc_endpoint_id: z
        .string()
        .openapi({
          param: {
            name: 'vpc_endpoint_id',
            in: 'path',
            description: 'The VPC endpoint ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Deleted the specified VPC endpoint from the specified organization' },
    default: GeneralErrorResponse,
  },
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['Region'],
  summary: 'Get current active regions',
  description: 'Retrieves the list of supported Neon regions\n',
  operationId: 'getActiveRegions',
  responses: {
    200: {
      description: 'The list of active regions',
      content: { 'application/json': { schema: ActiveRegionsResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Get current user details',
  description: 'Retrieves information about the current Neon user account.\n',
  operationId: 'getCurrentUserInfo',
  responses: {
    200: {
      description: 'Returned information about the current user\n',
      content: { 'application/json': { schema: CurrentUserInfoResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getUsersMeOrganizationsRoute = createRoute({
  method: 'get',
  path: '/users/me/organizations',
  tags: ['Users', 'Organizations'],
  summary: 'Get current user organizations list',
  description: "Retrieves information about the current Neon user's organizations\n",
  operationId: 'getCurrentUserOrganizations',
  responses: {
    200: {
      description: 'Returned information about the current user organizations\n',
      content: { 'application/json': { schema: OrganizationsResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postUsersMeProjectsTransferRoute = createRoute({
  method: 'post',
  path: '/users/me/projects/transfer',
  tags: ['Users'],
  summary: 'Transfer projects from your personal account to a specified destination account',
  description:
    'Transfers selected projects, identified by their IDs, from your personal account to a specified organization.\n',
  operationId: 'transferProjectsFromUserToOrg',
  request: {
    body: {
      content: { 'application/json': { schema: TransferProjectsToOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Projects successfully transferred from personal account to organization',
      content: { 'application/json': { schema: EmptyResponseSchema } },
    },
    406: {
      description:
        'Transfer failed - the organization has too many projects or its plan is incompatible with the source account. Reduce projects or upgrade the organization.',
      content: {
        'application/json': {
          schema: z.xor([LimitsUnsatisfiedResponseSchema, GeneralErrorSchema]),
        },
      },
    },
    422: {
      description:
        'One or more of project ids provided is linked by GitHub or Vercel integration. Transferring integration projects is currently not supported',
      content: { 'application/json': { schema: ProjectsWithIntegrationResponseSchema } },
    },
    default: GeneralErrorResponse,
  },
})
