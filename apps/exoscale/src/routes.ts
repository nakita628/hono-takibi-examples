import { createRoute, z } from '@hono/zod-openapi'

const LabelsSchema = z.record(z.string(), z.string()).openapi('Labels')

const IamServicePolicyRuleSchema = z
  .object({
    action: z.enum(['allow', 'deny']).exactOptional(),
    expression: z.string().exactOptional(),
    resources: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IamServicePolicyRule')

const IamAssumeRolePolicySchema = z
  .object({
    rules: z
      .array(IamServicePolicyRuleSchema)
      .exactOptional()
      .openapi({ description: 'IAM Assume Role Policy rules' }),
  })
  .openapi({ description: 'Assume Role Policy', required: [] })
  .openapi('IamAssumeRolePolicy')

const IamServicePolicySchema = z
  .object({
    type: z.enum(['rules', 'allow', 'deny']).exactOptional(),
    rules: z.array(IamServicePolicyRuleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IamServicePolicy')

const IamPolicySchema = z
  .object({
    'default-service-strategy': z
      .enum(['allow', 'deny'])
      .openapi({ description: 'IAM default service strategy' }),
    services: z.record(z.string(), IamServicePolicySchema).openapi({ description: 'IAM services' }),
  })
  .openapi({ required: ['default-service-strategy', 'services'], description: 'Policy' })
  .openapi('IamPolicy')

const IamRoleSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'IAM Role description' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'IAM Role Labels' }),
    permissions: z
      .array(z.enum(['bypass-governance-retention', 'reset-iam-organization-policy']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'IAM Role permissions' }),
    'assume-role-policy': IamAssumeRolePolicySchema.exactOptional().openapi({
      description: 'IAM Assume Role Policy',
    }),
    editable: z.boolean().exactOptional().openapi({ description: 'IAM Role mutability' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'IAM Role name' }),
    'max-session-ttl': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Maximum TTL requester is allowed to ask for when assuming a role',
      }),
    policy: IamPolicySchema.exactOptional().openapi({ description: 'IAM Role Policy' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'IAM Role ID' }),
  })
  .openapi({ description: 'IAM Role', required: [] })
  .openapi('IamRole')

type UserType = {
  sso?: boolean
  'two-factor-authentication'?: boolean
  email: string
  id?: string
  role: z.infer<typeof IamRoleSchema>
  pending?: boolean
}

const UserSchema: z.ZodType<UserType> = z
  .object({
    sso: z.boolean().exactOptional().openapi({ description: 'SSO enabled' }),
    'two-factor-authentication': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Two Factor Authentication enabled' }),
    email: z.string().openapi({ readOnly: true, description: 'User Email' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'User ID' }),
    role: IamRoleSchema.openapi({ description: 'IAM Role' }),
    pending: z
      .boolean()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'True if the user has not yet created an Exoscale account',
      }),
  })
  .openapi({ required: ['email', 'role'], description: 'User' })
  .openapi('User')

const IamApiKeySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ 'x-go-findable': '1', description: 'IAM API Key name' }),
    key: z.string().exactOptional().openapi({ 'x-go-findable': '2', description: 'IAM API Key' }),
    'role-id': z.uuid().exactOptional().openapi({ description: 'IAM API Key Role ID' }),
  })
  .openapi({ description: 'IAM API Key', required: [] })
  .openapi('IamApiKey')

type EventType = {
  'iam-user'?: z.infer<typeof UserSchema>
  'request-id'?: string
  'iam-role'?: z.infer<typeof IamRoleSchema>
  zone?: string
  'get-params'?: { [key: string]: unknown }
  'body-params'?: { [key: string]: unknown }
  status?: bigint
  'source-ip'?: string
  'iam-api-key'?: z.infer<typeof IamApiKeySchema>
  uri?: string
  'elapsed-ms'?: bigint
  timestamp?: string
  'path-params'?: { [key: string]: unknown }
  handler?: string
  message?: string
}

const ImpactValueWithUnitSchema = z
  .object({ unit: z.string(), value: z.float64() })
  .openapi({ required: ['unit', 'value'] })
  .openapi('ImpactValueWithUnit')

type ImpactResourceTreeNodeType = {
  impact: { [key: string]: z.infer<typeof ImpactValueWithUnitSchema> }
  usage: z.infer<typeof ImpactValueWithUnitSchema>
  resources: { [key: string]: ImpactResourceTreeNodeType }
}

const DbaasNodeStateProgressUpdateSchema = z
  .object({
    completed: z
      .boolean()
      .openapi({ description: 'Indicates whether this phase has been completed or not' }),
    current: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Current progress for this phase. May be missing or null.',
      }),
    max: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Maximum progress value for this phase. May be missing or null. May change.',
      }),
    min: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Minimum progress value for this phase. May be missing or null.',
      }),
    phase: z
      .enum(['stream', 'basebackup', 'prepare', 'finalize'])
      .openapi({ description: 'Key identifying this phase' }),
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unit for current/min/max values. New units may be added.\n                        If null should be treated as generic unit',
      }),
  })
  .openapi({
    required: ['completed', 'phase'],
    description: 'Extra information regarding the progress for current state',
  })
  .openapi('DbaasNodeStateProgressUpdate')

const DbaasNodeStateSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the service node' }),
    'progress-updates': z
      .array(DbaasNodeStateProgressUpdateSchema)
      .exactOptional()
      .openapi({ description: 'Extra information regarding the progress for current state' }),
    role: z
      .enum(['standby', 'master', 'read-replica'])
      .exactOptional()
      .openapi({ description: 'Role of this node. Only returned for a subset of service types' }),
    state: z
      .enum(['leaving', 'running', 'syncing_data', 'setting_up_vm', 'unknown'])
      .openapi({ description: 'Current state of the service node' }),
  })
  .openapi({ required: ['name', 'state'], description: 'Automatic maintenance settings' })
  .openapi('DbaasNodeState')

const EnvImpactDetailSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'Value' }),
    amount: z.number().exactOptional().openapi({ description: 'Amount' }),
    unit: z.string().exactOptional().openapi({ description: 'Unit' }),
  })
  .openapi({ required: [] })
  .openapi('EnvImpactDetail')

const EnvImpactIndicatorSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'Value' }),
    amount: z.number().exactOptional().openapi({ description: 'Amount' }),
    unit: z.string().exactOptional().openapi({ description: 'Unit' }),
    details: z.array(EnvImpactDetailSchema).exactOptional().openapi({ description: 'Details' }),
  })
  .openapi({ required: [] })
  .openapi('EnvImpactIndicator')

const DbaasEndpointElasticsearchInputCreateSchema = z
  .object({
    settings: z
      .object({
        ca: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded CA certificate' }),
        url: z.string().min(12).max(2048).openapi({ description: 'Elasticsearch connection URL' }),
        'index-prefix': z
          .string()
          .regex(/^[a-z0-9][a-z0-9-_.]+$/)
          .min(1)
          .max(1000)
          .openapi({ description: 'Elasticsearch index prefix' }),
        'index-days-max': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(10000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 10000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Maximum number of days of logs to keep',
          }),
        timeout: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(10n).max(120n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 10,
            maximum: 120,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Elasticsearch request timeout limit',
          }),
      })
      .exactOptional()
      .openapi({ required: ['url', 'index-prefix'] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointElasticsearchInputCreate')

const DbaasIntegrationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the integration' }),
    settings: z.looseObject({}).exactOptional().openapi({ description: 'Integration settings' }),
    type: z.string().exactOptional().openapi({ description: 'Integration type' }),
    'is-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the integration is enabled or not' }),
    source: z.string().exactOptional().openapi({ description: 'Source service name' }),
    'is-active': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the integration is active or not' }),
    status: z.string().exactOptional().openapi({ description: 'Integration status' }),
    id: z.uuid().exactOptional().openapi({ description: 'Integration id' }),
    dest: z.string().exactOptional().openapi({ description: 'Destination service name' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasIntegration')

const DbaasServiceNameSchema = z.string().min(0).max(63).openapi('DbaasServiceName')

const DbaasServiceTypeNameSchema = z.string().min(0).max(64).openapi('DbaasServiceTypeName')

const EnumServiceStateSchema = z
  .enum(['running', 'rebuilding', 'rebalancing', 'poweroff'])
  .openapi('EnumServiceState')

const DbaasServiceBackupSchema = z
  .object({
    'backup-name': z.string().openapi({ description: 'Internal name of this backup' }),
    'backup-time': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Backup timestamp (ISO 8601)' }),
    'data-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: "Backup's original size before compression",
      }),
  })
  .openapi({
    required: ['backup-name', 'backup-time', 'data-size'],
    description: 'List of backups for the service',
  })
  .openapi('DbaasServiceBackup')

const JsonSchemaClickhouseSchema = z
  .object({
    server_settings: z
      .strictObject({
        vector_similarity_index_cache_size: z
          .number()
          .min(0)
          .max(0.5)
          .default(0.07)
          .exactOptional()
          .openapi({
            description:
              'Fraction of total server memory allocated to the vector similarity index cache. 0 disables the cache. Default is 0.07 (7% of server memory). Only effective on ClickHouse 25.8+.',
            example: 0.07,
            title: 'vector_similarity_index_cache_size',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'ClickHouse server settings, which can be found in the `system.server_settings` table.',
        title: 'ClickHouse server settings',
        required: [],
      }),
    tiered_storage_move_factor: z
      .number()
      .min(0)
      .max(1)
      .default(0.2)
      .exactOptional()
      .openapi({
        description:
          'The percentage of free disk space required on local storage before data is moved to object storage. A value of 0.2 means data is moved when local storage has less than 20% free space.',
        example: 0.2,
        title: 'Tiered storage move factor',
      }),
  })
  .openapi({ title: 'ClickHouse settings', required: [] })
  .openapi('JsonSchemaClickhouse')

const DbaasServiceNotificationSchema = z
  .object({
    level: z.enum(['warning', 'notice']).openapi({ description: 'Notification level' }),
    message: z.string().min(1).max(1024).openapi({ description: 'Human notification message' }),
    type: z
      .enum(['service_powered_off_removal', 'service_end_of_life'])
      .openapi({ description: 'Notification type' }),
    metadata: z.looseObject({}).openapi({ description: 'Notification type' }),
  })
  .openapi({
    required: ['level', 'message', 'type', 'metadata'],
    description: 'Service notifications',
  })
  .openapi('DbaasServiceNotification')

const EnumComponentRouteSchema = z
  .enum(['dynamic', 'private', 'public', 'privatelink'])
  .openapi('EnumComponentRoute')

const EnumComponentUsageSchema = z.enum(['primary', 'replica']).openapi('EnumComponentUsage')

const DbaasServiceUpdateSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the update' }),
    deadline: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Deadline for installing the update' }),
    'start-after': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The earliest time the update will be automatically applied' }),
    'start-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the update will be automatically applied' }),
  })
  .openapi({ description: 'Update waiting to be installed', required: [] })
  .openapi('DbaasServiceUpdate')

const DbaasServiceMaintenanceSchema = z
  .object({
    dow: z
      .enum(['saturday', 'tuesday', 'never', 'wednesday', 'sunday', 'friday', 'monday', 'thursday'])
      .openapi({ description: 'Day of week for installing updates' }),
    time: z.string().length(8).openapi({ description: 'Time for installing updates, UTC' }),
    updates: z
      .array(DbaasServiceUpdateSchema)
      .openapi({ description: 'List of updates waiting to be installed' }),
  })
  .openapi({ required: ['dow', 'time', 'updates'], description: 'Automatic maintenance settings' })
  .openapi('DbaasServiceMaintenance')

const DbaasUserUsernameSchema = z.string().min(1).max(64).openapi('DbaasUserUsername')

const DbaasClickhouseUserSchema = z
  .object({
    username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
    uuid: z.uuid().exactOptional(),
    required: z.boolean().exactOptional(),
  })
  .openapi({ required: ['username'] })
  .openapi('DbaasClickhouseUser')

const DbaasServiceClickhouseSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        uri: z.array(z.string()).exactOptional(),
        'mysql-uri': z.string().exactOptional(),
        'arrowflight-uri': z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'ClickHouse connection information properties', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    'clickhouse-settings': JsonSchemaClickhouseSchema.exactOptional().openapi({
      description: 'ClickHouse-specific settings',
    }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            ssl: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether the endpoint is encrypted or accepts plaintext.\n             By default endpoints are always encrypted and\n             this property is only included for service components that may disable encryption.',
              }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    version: z.string().exactOptional().openapi({ description: 'ClickHouse version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    users: z
      .array(DbaasClickhouseUserSchema)
      .exactOptional()
      .openapi({ description: 'List of ClickHouse users' }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServiceClickhouse')

const EncryptResponseSchema = z
  .object({
    ciphertext: z
      .string()
      .openapi({ description: 'The resulting Base64-encoded ciphertext after encryption.' }),
  })
  .openapi({ required: ['ciphertext'] })
  .openapi('EncryptResponse')

const PrivateNetworkRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Private network ID' }) })
  .openapi({ description: 'Private network reference', required: [] })
  .openapi('PrivateNetworkRef')

const SksAuditEndpointSchema = z.string().min(1).max(2000).openapi('SksAuditEndpoint')

const ScheduleKmsKeyDeletionResponseSchema = z
  .object({
    'delete-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the key deletion' }),
  })
  .openapi({ required: [] })
  .openapi('ScheduleKmsKeyDeletionResponse')

const GetDeploymentLogsEntrySchema = z
  .object({
    time: z.iso.datetime({ offset: true }).openapi({ description: 'Timestamp of the log entry' }),
    node: z.string().openapi({ description: 'Node identifier' }),
    message: z.string().openapi({ description: 'Log message content' }),
  })
  .openapi({ description: 'A single log entry', required: ['time', 'message', 'node'] })
  .openapi('GetDeploymentLogsEntry')

const GetDeploymentLogsResponseSchema = z
  .object({
    logs: z.array(GetDeploymentLogsEntrySchema).openapi({ description: 'List of log entries' }),
  })
  .openapi({ description: 'Deployment logs', required: ['logs'] })
  .openapi('GetDeploymentLogsResponse')

const JsonSchemaSchemaRegistrySchema = z
  .strictObject({
    leader_eligibility: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, Karapace / Schema Registry on the service nodes can participate in leader election. It might be needed to disable this when the schemas topic is replicated to a secondary cluster and Karapace / Schema Registry there must not participate in leader election. Defaults to `true`.',
        example: true,
        title: 'leader_eligibility',
      }),
    topic_name: z
      .string()
      .regex(/^(?!\.$|\.\.$)[-_.A-Za-z0-9]+$/)
      .min(1)
      .max(249)
      .exactOptional()
      .openapi({
        description:
          "The durable single partition topic that acts as the durable log for the data. This topic must be compacted to avoid losing data due to retention policy. Please note that changing this configuration in an existing Schema Registry / Karapace setup leads to previous schemas being inaccessible, data encoded with them potentially unreadable and schema ID sequence put out of order. It's only possible to do the switch while Schema Registry / Karapace is disabled. Defaults to `_schemas`.",
        example: '_schemas',
        title: 'topic_name',
      }),
  })
  .openapi({ title: 'Schema Registry configuration', required: [] })
  .openapi('JsonSchemaSchemaRegistry')

const DbaasEndpointOpensearchSchema = z
  .object({
    url: z.string().min(12).max(2048).openapi({ description: 'OpenSearch connection URL' }),
    'index-prefix': z
      .string()
      .regex(/^[a-z0-9][a-z0-9-_.]+$/)
      .min(1)
      .max(1000)
      .openapi({ description: 'OpenSearch index prefix' }),
    'index-days-max': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(10000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 10000,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Maximum number of days of logs to keep',
      }),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(10n).max(120n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 10,
        maximum: 120,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'OpenSearch request timeout limit',
      }),
  })
  .openapi({ required: ['url', 'index-prefix'] })
  .openapi('DbaasEndpointOpensearch')

const ResourceSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Resource ID' }),
    name: z.string().exactOptional().openapi({ description: 'Resource name' }),
  })
  .openapi({ description: 'Resource', required: [] })
  .openapi('Resource')

const DbaasKafkaAclIdSchema = z.string().min(1).max(40).openapi('DbaasKafkaAclId')

const DbaasKafkaTopicAclEntrySchema = z
  .object({
    id: DbaasKafkaAclIdSchema.exactOptional().openapi({ description: 'Kafka ACL ID' }),
    username: z
      .string()
      .min(1)
      .max(64)
      .openapi({ description: 'Kafka username or username pattern' }),
    topic: z.string().min(1).max(249).openapi({ description: 'Kafka topic name or pattern' }),
    permission: z
      .enum(['admin', 'read', 'readwrite', 'write'])
      .openapi({ description: 'Kafka permission' }),
  })
  .openapi({ required: ['username', 'topic', 'permission'] })
  .openapi('DbaasKafkaTopicAclEntry')

const InstanceStateSchema = z
  .enum([
    'expunging',
    'starting',
    'destroying',
    'running',
    'stopping',
    'stopped',
    'migrating',
    'error',
    'destroyed',
  ])
  .openapi('InstanceState')

const EnumExternalEndpointTypesSchema = z
  .enum(['prometheus', 'opensearch', 'rsyslog', 'datadog', 'elasticsearch'])
  .openapi('EnumExternalEndpointTypes')

const OrganizationUsageSchema = z
  .object({
    gpu3: z
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
      .openapi({ type: 'integer', format: 'int64', minimum: 0, description: 'GPU3 count' }),
    gpua30: z
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
      .openapi({ type: 'integer', format: 'int64', minimum: 0, description: 'GPUA30 count' }),
    gpu3080ti: z
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
      .openapi({ type: 'integer', format: 'int64', minimum: 0, description: 'GPU3080TI count' }),
    gpu: z
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
        description: 'Total GPU count (sum of all GPU types)',
      }),
    gpua5000: z
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
      .openapi({ type: 'integer', format: 'int64', minimum: 0, description: 'GPUA5000 count' }),
    gpurtx6000pro: z
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
        description: 'GPURTX6000PRO count',
      }),
  })
  .openapi({ description: 'Organization GPU usage', required: ['gpu'] })
  .openapi('OrganizationUsage')

const GetConfederatioUsageResponseSchema = z
  .object({ 'organizations-usages': z.record(z.string(), OrganizationUsageSchema) })
  .openapi({ description: 'GPU usage for all organizations', required: ['organizations-usages'] })
  .openapi('GetConfederatioUsageResponse')

const ModelRefSchema = z
  .object({
    name: z.string().min(1).exactOptional().openapi({ description: 'Associated model name' }),
    id: z.uuid().exactOptional().openapi({ description: 'Associated model ID' }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ description: 'Model reference. Provide either id or name.', required: [] })
  .openapi('ModelRef')

const DbaasClickhouseUsersSchema = z
  .object({ users: z.array(DbaasClickhouseUserSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DbaasClickhouseUsers')

const DbaasPgPoolSizeSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(1n).max(10000n),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    minimum: 1,
    maximum: 10000,
    exclusiveMinimum: false,
    exclusiveMaximum: false,
  })
  .openapi('DbaasPgPoolSize')

const BlockStorageSnapshotRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Block storage snapshot ID' }) })
  .openapi({ description: 'Target block storage snapshot', required: [] })
  .openapi('BlockStorageSnapshotRef')

const SecurityGroupResourceSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Security Group ID' }),
    name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Security Group name' }),
    visibility: z
      .enum(['private', 'public'])
      .exactOptional()
      .openapi({
        description:
          'Whether this points to a public security group. This is only valid when in the context of\n                   a rule addition which uses a public security group as a source or destination.',
      }),
  })
  .openapi({ description: 'Security Group', required: [] })
  .openapi('SecurityGroupResource')

const SecurityGroupRuleSchema = z
  .object({
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Security Group rule description' }),
    'start-port': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(65535n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 65535,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Start port of the range',
      }),
    protocol: z
      .enum(['tcp', 'esp', 'icmp', 'udp', 'gre', 'ah', 'ipip', 'icmpv6'])
      .exactOptional()
      .openapi({ description: 'Network protocol' }),
    icmp: z
      .object({
        code: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(-1n).max(254n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: -1,
            maximum: 254,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
        type: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(-1n).max(254n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: -1,
            maximum: 254,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .exactOptional()
      .openapi({ description: 'ICMP details', required: [] }),
    'end-port': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(65535n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 65535,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'End port of the range',
      }),
    'security-group': SecurityGroupResourceSchema.exactOptional().openapi({
      description: 'Security Group allowed',
    }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Security Group rule ID' }),
    network: z.string().exactOptional().openapi({ description: 'CIDR-formatted network allowed' }),
    'flow-direction': z
      .enum(['ingress', 'egress'])
      .exactOptional()
      .openapi({ description: 'Network flow direction to match' }),
  })
  .openapi({ description: 'Security Group rule', required: [] })
  .openapi('SecurityGroupRule')

const GenerateDataKeyRequestSchema = z
  .object({
    'key-spec': z.literal('AES-256').exactOptional(),
    'bytes-count': z.int().min(1).max(1024).exactOptional(),
    'encryption-context': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Base64-encoded Additional Authenticated Data binding key generation parameters securely to operational scope.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GenerateDataKeyRequest')

const RecomputeBundleResponseSchema = z
  .object({ message: z.string().openapi({ description: 'Status message describing the result' }) })
  .openapi({ description: 'Response from bundle recompute operation', required: ['message'] })
  .openapi('RecomputeBundleResponse')

const DbaasEndpointPrometheusPayloadSchema = z
  .object({
    settings: z
      .object({
        'basic-auth-password': z
          .string()
          .min(8)
          .max(64)
          .exactOptional()
          .openapi({ description: 'Prometheus basic authentication password' }),
        'basic-auth-username': z
          .string()
          .regex(/^[a-z0-9\-@_]{5,32}$/)
          .min(5)
          .max(32)
          .exactOptional()
          .openapi({ description: 'Prometheus basic authentication username' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointPrometheusPayload')

const SksNodepoolLabelsSchema = z.record(z.string(), z.string()).openapi('SksNodepoolLabels')

const AntiAffinityGroupRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Anti-affinity group ID' }) })
  .openapi({ description: 'Anti-affinity group reference', required: [] })
  .openapi('AntiAffinityGroupRef')

const CreateAiApiKeyResponseSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last update timestamp', readOnly: true }),
    name: z.string().openapi({ description: 'Human-readable name for the AI API key' }),
    value: z.string().openapi({ description: 'Plaintext AI API key value' }),
    scope: z
      .string()
      .openapi({
        description: "Key scope: 'public' for all deployments, or a specific deployment UUID",
      }),
    id: z.uuid().openapi({ description: 'AI API key ID', readOnly: true }),
    'org-uuid': z
      .uuid()
      .openapi({ description: 'Organization UUID that owns this key', readOnly: true }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', readOnly: true }),
  })
  .openapi({
    description: 'Create AI API key response',
    required: ['id', 'org-uuid', 'name', 'scope', 'created-at', 'updated-at', 'value'],
  })
  .openapi('CreateAiApiKeyResponse')

const SksAuditBearerTokenSchema = z.string().min(1).max(2000).openapi('SksAuditBearerToken')

const DbaasEndpointOpensearchOptionalFieldsSchema = z
  .object({
    url: z
      .string()
      .min(12)
      .max(2048)
      .exactOptional()
      .openapi({ description: 'OpenSearch connection URL' }),
    'index-prefix': z
      .string()
      .regex(/^[a-z0-9][a-z0-9-_.]+$/)
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'OpenSearch index prefix' }),
    'index-days-max': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(10000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 10000,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Maximum number of days of logs to keep',
      }),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(10n).max(120n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 10,
        maximum: 120,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'OpenSearch request timeout limit',
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointOpensearchOptionalFields')

const DbaasEndpointOpensearchOutputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'External integration endpoint name' }),
    type: EnumExternalEndpointTypesSchema.exactOptional().openapi({
      description: 'External integration endpoint type',
    }),
    id: z.uuid().exactOptional().openapi({ description: 'External integration endpoint id' }),
    settings: DbaasEndpointOpensearchOptionalFieldsSchema.exactOptional().openapi({
      description: 'External integration OpenSearch logs configuration',
    }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointOpensearchOutput')

const DbaasEndpointElasticsearchOptionalFieldsSchema = z
  .object({
    url: z
      .string()
      .min(12)
      .max(2048)
      .exactOptional()
      .openapi({ description: 'Elasticsearch connection URL' }),
    'index-prefix': z
      .string()
      .regex(/^[a-z0-9][a-z0-9-_.]+$/)
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'Elasticsearch index prefix' }),
    'index-days-max': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(10000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 10000,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Maximum number of days of logs to keep',
      }),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(10n).max(120n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 10,
        maximum: 120,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Elasticsearch request timeout limit',
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointElasticsearchOptionalFields')

const DbaasEndpointElasticsearchOutputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'External integration endpoint name' }),
    type: EnumExternalEndpointTypesSchema.exactOptional().openapi({
      description: 'External integration endpoint type',
    }),
    id: z.uuid().exactOptional().openapi({ description: 'External integration endpoint id' }),
    settings: DbaasEndpointElasticsearchOptionalFieldsSchema.exactOptional().openapi({
      description: 'External integration ElasticSearch logs configuration',
    }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointElasticsearchOutput')

const InferenceEngineParameterEntrySchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Parameter description' }),
    'allowed-values': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed values' }),
    default: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default value if nothing is specified' }),
    name: z.string().exactOptional().openapi({ description: 'Parameter name' }),
    section: z.string().exactOptional().openapi({ description: 'Section' }),
    type: z.string().exactOptional().openapi({ description: 'Parameter type' }),
    flags: z.array(z.string()).exactOptional().openapi({ description: 'Flag name' }),
  })
  .openapi({ description: 'inference-engine parameter definition', required: [] })
  .openapi('InferenceEngineParameterEntry')

const GetInferenceEngineHelpResponseSchema = z
  .object({ parameters: z.array(InferenceEngineParameterEntrySchema) })
  .openapi({ description: 'List of allowed inference-engine parameters', required: ['parameters'] })
  .openapi('GetInferenceEngineHelpResponse')

const SubnetSchema = z
  .object({
    description: z
      .string()
      .max(4096)
      .exactOptional()
      .openapi({ description: 'Subnet description' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Subnet name' }),
    'ipv4-block': z.string().exactOptional().openapi({ description: 'Subnet ipv4 CIDR' }),
    addressfamily: z
      .enum(['inet4', 'dual'])
      .exactOptional()
      .openapi({ description: 'Subnet address family' }),
    'address-space': z
      .literal('private')
      .exactOptional()
      .openapi({ description: 'Subnet address space' }),
    instances: z
      .array(
        z
          .object({
            id: z.uuid().exactOptional().openapi({ description: 'Instance uuid' }),
            ipv4: z.ipv4().exactOptional().openapi({ description: 'Instance Ipv4 address' }),
          })
          .openapi({ description: 'Subnet attachements', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Instances attached to the subnet' }),
    id: z.uuid().exactOptional().openapi({ description: 'Subnet ID' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Subnet creation date' }),
  })
  .openapi({ description: 'Subnet', required: [] })
  .openapi('Subnet')

const ImpactResourceTreeNodeSchema: z.ZodType<ImpactResourceTreeNodeType> = z
  .lazy(() =>
    z
      .object({
        impact: z.record(z.string(), ImpactValueWithUnitSchema),
        usage: ImpactValueWithUnitSchema,
        resources: z.record(z.string(), ImpactResourceTreeNodeSchema),
      })
      .openapi({
        description: 'Hierarchical breakdown of impact for a given level in the catalog tree',
        required: ['impact', 'usage', 'resources'],
      }),
  )
  .openapi('ImpactResourceTreeNode')

const ZoneImpactSchema = z
  .object({
    impact: z.record(z.string(), ImpactValueWithUnitSchema),
    resources: z.record(z.string(), ImpactResourceTreeNodeSchema),
  })
  .openapi({
    description: 'Hierarchical breakdown of impact in a given zone',
    required: ['impact', 'resources'],
  })
  .openapi('ZoneImpact')

const DbaasUserValkeySecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'Valkey username' }),
    password: z.string().exactOptional().openapi({ description: 'Valkey password' }),
  })
  .openapi({ description: 'Valkey User secrets', required: [] })
  .openapi('DbaasUserValkeySecrets')

const EnumRsyslogFormatSchema = z
  .enum(['custom', 'rfc3164', 'rfc5424'])
  .openapi('EnumRsyslogFormat')

const DbaasEndpointRsyslogInputUpdateSchema = z
  .object({
    settings: z
      .object({
        format: EnumRsyslogFormatSchema.exactOptional().openapi({ description: 'Message format' }),
        key: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded client key' }),
        logline: z
          .string()
          .regex(/^[ -~\t]+$/)
          .min(1)
          .max(512)
          .exactOptional()
          .openapi({ description: 'Custom syslog message format' }),
        server: z
          .string()
          .min(4)
          .max(255)
          .exactOptional()
          .openapi({ description: 'Rsyslog server IP address or hostname' }),
        ca: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded CA certificate' }),
        cert: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded client certificate' }),
        tls: z.boolean().exactOptional().openapi({ description: 'Require TLS' }),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Rsyslog server port',
          }),
        sd: z
          .string()
          .max(1024)
          .exactOptional()
          .openapi({ description: 'Structured data block for log message' }),
        'max-message-size': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(2048n).max(2147483647n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 2048,
            maximum: 2147483647,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Rsyslog max message size',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointRsyslogInputUpdate')

const DbaasUserClickhouseSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'ClickHouse username' }),
    password: z.string().exactOptional().openapi({ description: 'ClickHouse password' }),
  })
  .openapi({ description: 'ClickHouse User secrets', required: [] })
  .openapi('DbaasUserClickhouseSecrets')

const JsonSchemaGrafanaSchema = z
  .object({
    allow_embedding: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title:
          'Allow embedding Grafana dashboards with iframe/frame/object/embed tags. Disabled by default to limit impact of clickjacking',
      }),
    cookie_samesite: z
      .enum(['lax', 'strict', 'none'])
      .exactOptional()
      .openapi({
        example: 'lax',
        title:
          "Cookie SameSite attribute: 'strict' prevents sending cookie for cross-site requests, effectively disabling direct linking from other sites to Grafana. 'lax' is the default value.",
      }),
    dashboard_previews_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This feature is new in Grafana 9 and is quite resource intensive. It may cause low-end plans to work more slowly while the dashboard previews are rendering.',
        example: false,
        title: 'Enable browsing of dashboards in grid (pictures) mode',
      }),
    metrics_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ example: true, title: 'Enable Grafana /metrics endpoint' }),
    auth_azuread: z
      .strictObject({
        allow_sign_up: z
          .boolean()
          .exactOptional()
          .openapi({ example: false, title: 'Automatically sign-up users on successful sign-in' }),
        allowed_domains: z
          .array(z.string().max(255).openapi({ example: 'mycompany.com', title: 'Allowed domain' }))
          .max(50)
          .exactOptional()
          .openapi({ title: 'Allowed domains' }),
        allowed_groups: z
          .array(
            z
              .string()
              .regex(
                /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
              )
              .max(36)
              .openapi({
                example: 'c0ffee15-c01d-0000-1111-012345abcdef',
                title: 'Group Object ID from Azure AD',
              }),
          )
          .max(50)
          .exactOptional()
          .openapi({ title: 'Require users to belong to one of given groups' }),
        auth_url: z
          .string()
          .max(2048)
          .openapi({
            example: 'https://login.microsoftonline.com/<AZURE_TENANT_ID>/oauth2/v2.0/authorize',
            title: 'Authorization URL',
          }),
        client_id: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({ example: 'b1ba0bf54a4c2c0a1c29', title: 'Client ID from provider' }),
        client_secret: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({
            example: 'bfa6gea4f129076761dcba8ce5e1e406bd83af7b',
            title: 'Client secret from provider',
          }),
        token_url: z
          .string()
          .max(2048)
          .openapi({
            example: 'https://login.microsoftonline.com/<AZURE_TENANT_ID>/oauth2/v2.0/token',
            title: 'Token URL',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['client_id', 'client_secret', 'auth_url', 'token_url'],
        title: 'Azure AD OAuth integration',
      }),
    alerting_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        title:
          'Enable or disable Grafana legacy alerting functionality. This should not be enabled with unified_alerting_enabled.',
      }),
    wal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Setting to enable/disable Write-Ahead Logging. The default value is false (disabled).',
        example: false,
        title: 'Write-Ahead Logging',
      }),
    unified_alerting_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        title:
          'Enable or disable Grafana unified alerting functionality. By default this is enabled and any legacy alerts will be migrated on upgrade to Grafana 9+. To stay on legacy alerting, set unified_alerting_enabled to false and alerting_enabled to true. See https://grafana.com/docs/grafana/latest/alerting/set-up/migrating-alerts/ for more details.',
      }),
    auth_github: z
      .strictObject({
        allow_sign_up: z
          .boolean()
          .exactOptional()
          .openapi({ example: false, title: 'Automatically sign-up users on successful sign-in' }),
        allowed_organizations: z
          .array(
            z
              .string()
              .regex(/^[A-Za-z0-9-]+$/)
              .max(256)
              .openapi({ example: 'aiven', title: 'Organization name' }),
          )
          .max(50)
          .exactOptional()
          .openapi({ title: 'Require users to belong to one of given organizations' }),
        auto_login: z
          .boolean()
          .exactOptional()
          .openapi({
            example: false,
            title: 'Allow users to bypass the login screen and automatically log in',
          }),
        client_id: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({ example: 'b1ba0bf54a4c2c0a1c29', title: 'Client ID from provider' }),
        client_secret: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({
            example: 'bfa6gea4f129076761dcba8ce5e1e406bd83af7b',
            title: 'Client secret from provider',
          }),
        skip_org_role_sync: z
          .boolean()
          .exactOptional()
          .openapi({ example: false, title: 'Stop automatically syncing user roles' }),
        team_ids: z
          .array(
            z.int().min(1).max(9223372036854776000).openapi({ example: 150, title: 'Team ID' }),
          )
          .max(50)
          .exactOptional()
          .openapi({ title: 'Require users to belong to one of given team IDs' }),
      })
      .exactOptional()
      .openapi({ required: ['client_id', 'client_secret'], title: 'Github Auth integration' }),
    user_auto_assign_org: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title: 'Auto-assign new users on signup to main organization. Defaults to false',
      }),
    dataproxy_send_user_header: z
      .boolean()
      .exactOptional()
      .openapi({ example: false, title: "Send 'X-Grafana-User' header to data source" }),
    google_analytics_ua_id: z
      .string()
      .regex(/^(G|UA|YT|MO)-[a-zA-Z0-9-]+$/)
      .max(64)
      .exactOptional()
      .openapi({ example: 'UA-123456-4', title: 'Google Analytics ID' }),
    dashboards_versions_to_keep: z
      .int()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({ example: 20, title: 'Dashboard versions to keep per dashboard' }),
    editors_can_admin: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title: 'Editors can manage folders, teams and dashboards created by them',
      }),
    smtp_server: z
      .strictObject({
        from_address: z
          .string()
          .regex(
            /^[A-Za-z0-9_\-\.+'&]+@(([\da-zA-Z])([_\w-]{0,62})\.){0,127}(([\da-zA-Z])[_\w-]{0,61})?([\da-zA-Z]\.((xn\-\-[a-zA-Z\d]+)|([a-zA-Z\d]{2,})))$/,
          )
          .max(319)
          .openapi({
            example: 'yourgrafanauser@yourdomain.example.com',
            title: 'Address used for sending emails',
          }),
        from_name: z
          .string()
          .regex(/^[^\x00-\x1F]+$/)
          .max(128)
          .nullable()
          .exactOptional()
          .openapi({
            example: 'Company Grafana',
            title: 'Name used in outgoing emails, defaults to Grafana',
          }),
        host: z
          .string()
          .max(255)
          .openapi({ example: 'smtp.example.com', title: 'Server hostname or IP' }),
        password: z
          .string()
          .regex(/^[^\x00-\x1F]+$/)
          .max(255)
          .nullable()
          .exactOptional()
          .openapi({ example: 'ein0eemeev5eeth3Ahfu', title: 'Password for SMTP authentication' }),
        port: z.int().min(1).max(65535).openapi({ example: 25, title: 'SMTP server port' }),
        skip_verify: z
          .boolean()
          .exactOptional()
          .openapi({
            example: 'false',
            title: 'Skip verifying server certificate. Defaults to false',
          }),
        starttls_policy: z
          .enum(['OpportunisticStartTLS', 'MandatoryStartTLS', 'NoStartTLS'])
          .exactOptional()
          .openapi({
            example: 'NoStartTLS',
            title:
              'Either OpportunisticStartTLS, MandatoryStartTLS or NoStartTLS. Default is OpportunisticStartTLS.',
          }),
        username: z
          .string()
          .regex(/^[^\x00-\x1F]+$/)
          .max(255)
          .nullable()
          .exactOptional()
          .openapi({ example: 'smtpuser', title: 'Username for SMTP authentication' }),
      })
      .exactOptional()
      .openapi({ required: ['host', 'port', 'from_address'], title: 'SMTP server settings' }),
    auth_gitlab: z
      .strictObject({
        allow_sign_up: z
          .boolean()
          .exactOptional()
          .openapi({ example: false, title: 'Automatically sign-up users on successful sign-in' }),
        allowed_groups: z
          .array(
            z
              .string()
              .regex(/^[a-z0-9-_\/]+$/)
              .max(256)
              .openapi({ example: 'aiven/developers', title: 'Group or subgroup name' }),
          )
          .max(50)
          .openapi({ title: 'Require users to belong to one of given groups' }),
        api_url: z
          .string()
          .max(2048)
          .exactOptional()
          .openapi({
            example: 'https://gitlab.com/api/v4',
            title: 'API URL. This only needs to be set when using self hosted GitLab',
          }),
        auth_url: z
          .string()
          .max(2048)
          .exactOptional()
          .openapi({
            example: 'https://gitlab.com/oauth/authorize',
            title: 'Authorization URL. This only needs to be set when using self hosted GitLab',
          }),
        client_id: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({ example: 'b1ba0bf54a4c2c0a1c29', title: 'Client ID from provider' }),
        client_secret: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({
            example: 'bfa6gea4f129076761dcba8ce5e1e406bd83af7b',
            title: 'Client secret from provider',
          }),
        token_url: z
          .string()
          .max(2048)
          .exactOptional()
          .openapi({
            example: 'https://gitlab.com/oauth/token',
            title: 'Token URL. This only needs to be set when using self hosted GitLab',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['client_id', 'client_secret', 'allowed_groups'],
        title: 'GitLab Auth integration',
      }),
    alerting_nodata_or_nullvalues: z
      .enum(['alerting', 'no_data', 'keep_state', 'ok'])
      .exactOptional()
      .openapi({
        example: 'ok',
        title: "Default value for 'no data or null values' for new alerting rules",
      }),
    auth_basic_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        title: 'Enable or disable basic authentication form, used by Grafana built-in login',
      }),
    date_formats: z
      .strictObject({
        default_timezone: z
          .string()
          .regex(
            /^([a-zA-Z_]+\/){1,2}[a-zA-Z_-]+$|^(Etc\/)?([Uu][Tt][Cc]|[Gg][Mm][Tt])([+-](\d){1,2})?$|^([Ff][Aa][Cc][Tt][Oo][Rr][Yy])$|^([Bb][Rr][Oo][Ww][Ss][Ee][Rr])$/,
          )
          .max(64)
          .exactOptional()
          .openapi({
            example: 'Europe/Helsinki',
            title:
              "Default time zone for user preferences. Value 'browser' uses browser local time zone.",
          }),
        full_date: z
          .string()
          .regex(
            /^(([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|[-+\/T,;.: ]?)*)$/,
          )
          .max(128)
          .exactOptional()
          .openapi({
            example: 'YYYY MM DD',
            title: 'Moment.js style format string for cases where full date is shown',
          }),
        interval_day: z
          .string()
          .regex(
            /^(([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|[-+\/T,;.: ]?)*)$/,
          )
          .max(128)
          .exactOptional()
          .openapi({
            example: 'MM/DD',
            title: 'Moment.js style format string used when a time requiring day accuracy is shown',
          }),
        interval_hour: z
          .string()
          .regex(
            /^(([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|[-+\/T,;.: ]?)*)$/,
          )
          .max(128)
          .exactOptional()
          .openapi({
            example: 'MM/DD HH:mm',
            title:
              'Moment.js style format string used when a time requiring hour accuracy is shown',
          }),
        interval_minute: z
          .string()
          .regex(
            /^(([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|[-+\/T,;.: ]?)*)$/,
          )
          .max(128)
          .exactOptional()
          .openapi({
            example: 'HH:mm',
            title:
              'Moment.js style format string used when a time requiring minute accuracy is shown',
          }),
        interval_month: z
          .string()
          .regex(
            /^(([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|[-+\/T,;.: ]?)*)$/,
          )
          .max(128)
          .exactOptional()
          .openapi({
            example: 'YYYY-MM',
            title:
              'Moment.js style format string used when a time requiring month accuracy is shown',
          }),
        interval_second: z
          .string()
          .regex(
            /^(([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|[-+\/T,;.: ]?)*)$/,
          )
          .max(128)
          .exactOptional()
          .openapi({
            example: 'HH:mm:ss',
            title:
              'Moment.js style format string used when a time requiring second accuracy is shown',
          }),
        interval_year: z
          .string()
          .regex(
            /^(([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|[-+\/T,;.: ]?)*)$/,
          )
          .max(128)
          .exactOptional()
          .openapi({
            example: 'YYYY',
            title:
              'Moment.js style format string used when a time requiring year accuracy is shown',
          }),
      })
      .exactOptional()
      .openapi({ title: 'Grafana date format specifications', required: [] }),
    service_log: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Store logs for the service so that they are available in the HTTP API and console.',
        example: true,
        title: 'Service logging',
      }),
    disable_gravatar: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title: 'Set to true to disable gravatar. Defaults to false (gravatar is enabled)',
      }),
    user_auto_assign_org_role: z
      .enum(['Viewer', 'Admin', 'Editor'])
      .exactOptional()
      .openapi({ example: 'Viewer', title: 'Set role for new signups. Defaults to Viewer' }),
    dataproxy_timeout: z
      .int()
      .min(15)
      .max(90)
      .exactOptional()
      .openapi({ example: 30, title: 'Timeout for data proxy requests in seconds' }),
    viewers_can_edit: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title: 'Users with view-only permission can edit but not save dashboards',
      }),
    dashboards_min_refresh_interval: z
      .string()
      .regex(/^[0-9]+(ms|s|m|h|d)$/)
      .max(16)
      .exactOptional()
      .openapi({
        description:
          'Signed sequence of decimal numbers, followed by a unit suffix (ms, s, m, h, d), e.g. 30s, 1h',
        example: '5s',
        title: 'Minimum refresh interval',
      }),
    auth_google: z
      .strictObject({
        allow_sign_up: z
          .boolean()
          .exactOptional()
          .openapi({ example: false, title: 'Automatically sign-up users on successful sign-in' }),
        allowed_domains: z
          .array(z.string().max(255).openapi({ example: 'example.com', title: 'Domain' }))
          .max(64)
          .openapi({ title: 'Domains allowed to sign-in to this Grafana' }),
        client_id: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({ example: 'b1ba0bf54a4c2c0a1c29', title: 'Client ID from provider' }),
        client_secret: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({
            example: 'bfa6gea4f129076761dcba8ce5e1e406bd83af7b',
            title: 'Client secret from provider',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['client_id', 'client_secret', 'allowed_domains'],
        title: 'Google Auth integration',
      }),
    oauth_allow_insecure_email_lookup: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title: 'Enforce user lookup based on email instead of the unique ID provided by the IdP',
      }),
    alerting_max_annotations_to_keep: z
      .int()
      .min(0)
      .max(1000000)
      .exactOptional()
      .openapi({
        example: 0,
        title:
          'Max number of alert annotations that Grafana stores. 0 (default) keeps all alert annotations.',
      }),
    auth_generic_oauth: z
      .strictObject({
        scopes: z
          .array(
            z
              .string()
              .regex(/^[\S]+$/)
              .max(256)
              .openapi({ example: 'email', title: 'OAuth scope' }),
          )
          .max(50)
          .exactOptional()
          .openapi({ title: 'OAuth scopes' }),
        allowed_domains: z
          .array(z.string().max(255).openapi({ example: 'mycompany.com', title: 'Allowed domain' }))
          .max(50)
          .exactOptional()
          .openapi({ title: 'Allowed domains' }),
        allowed_organizations: z
          .array(
            z
              .string()
              .regex(/^[\S]+$/)
              .max(256)
              .openapi({ example: 'myorg', title: 'Allowed organization' }),
          )
          .max(50)
          .exactOptional()
          .openapi({ title: 'Require user to be member of one of the listed organizations' }),
        token_url: z
          .string()
          .max(2048)
          .openapi({ example: 'https://yourprovider.com/oauth/token', title: 'Token URL' }),
        name: z
          .string()
          .regex(/^[a-zA-Z0-9_\- ]+$/)
          .max(128)
          .exactOptional()
          .openapi({ example: 'My authentication', title: 'Name of the OAuth integration' }),
        auth_url: z
          .string()
          .max(2048)
          .openapi({
            example: 'https://yourprovider.com/oauth/authorize',
            title: 'Authorization URL',
          }),
        api_url: z
          .string()
          .max(2048)
          .openapi({ example: 'https://yourprovider.com/api', title: 'API URL' }),
        auto_login: z
          .boolean()
          .exactOptional()
          .openapi({
            example: false,
            title: 'Allow users to bypass the login screen and automatically log in',
          }),
        client_id: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({ example: 'b1ba0bf54a4c2c0a1c29', title: 'Client ID from provider' }),
        client_secret: z
          .string()
          .regex(/^[ -~]+$/)
          .max(1024)
          .openapi({
            example: 'bfa6gea4f129076761dcba8ce5e1e406bd83af7b',
            title: 'Client secret from provider',
          }),
        allow_sign_up: z
          .boolean()
          .exactOptional()
          .openapi({ example: false, title: 'Automatically sign-up users on successful sign-in' }),
      })
      .exactOptional()
      .openapi({
        required: ['api_url', 'auth_url', 'client_id', 'client_secret', 'token_url'],
        title: 'Generic OAuth integration',
      }),
    custom_domain: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        example: 'grafana.example.org',
        description: 'Serve the web frontend using a custom CNAME pointing to the Aiven DNS name',
        title: 'Custom domain',
      }),
    alerting_error_or_timeout: z
      .enum(['alerting', 'keep_state'])
      .exactOptional()
      .openapi({
        example: 'alerting',
        title: 'Default error or timeout setting for new alerting rules',
      }),
  })
  .openapi({ title: 'Grafana settings', required: [] })
  .openapi('JsonSchemaGrafana')

const DbaasUserKafkaConnectSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'Kafka Connect username' }),
    password: z.string().exactOptional().openapi({ description: 'Kafka Connect password' }),
  })
  .openapi({ description: 'Kafka Connect secrets', required: [] })
  .openapi('DbaasUserKafkaConnectSecrets')

const DeleteModelConflictResponseSchema = z
  .object({
    deployments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Deployments using models' }),
  })
  .openapi({ description: 'Model is in use: deletion forbidden', required: [] })
  .openapi('DeleteModelConflictResponse')

const DbaasBackupConfigSchema = z
  .object({
    'max-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        readOnly: true,
        description: 'Maximum number of backups to keep. Zero when no backups are created.',
      }),
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description:
          'The interval, in hours, at which backups are generated.\n                                            For some services, like PostgreSQL, this is the interval\n                                            at which full snapshots are taken and continuous incremental\n                                            backup stream is maintained in addition to that.',
      }),
    'recovery-mode': z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          "Mechanism how backups can be restored. 'regular'\n                                            means a backup is restored as is so that the system\n                                            is restored to the state it was when the backup was generated.\n                                            'pitr' means point-in-time-recovery, which allows restoring the system to any state since the first available full snapshot.",
      }),
    'frequent-interval-minutes': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        readOnly: true,
        description:
          'Interval of taking a frequent backup in service types supporting different backup schedules',
      }),
    'frequent-oldest-age-minutes': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        readOnly: true,
        description:
          'Maximum age of the oldest frequent backup in service types supporting different backup schedules',
      }),
    'infrequent-interval-minutes': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        readOnly: true,
        description:
          'Interval of taking a frequent backup in service types supporting different backup schedules',
      }),
    'infrequent-oldest-age-minutes': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        readOnly: true,
        description:
          'Maximum age of the oldest infrequent backup in service types supporting different backup schedules',
      }),
  })
  .openapi({ description: 'DBaaS plan backup config', required: [] })
  .openapi('DbaasBackupConfig')

const DbaasPlanSchema = z
  .object({
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description: 'DBaaS plan node count',
      }),
    'backup-config': DbaasBackupConfigSchema.exactOptional().openapi({
      readOnly: true,
      description: 'DBaaS plan backup config',
    }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description: 'DBaaS plan CPU count per node',
      }),
    family: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instance family subset which the service can use' }),
    'disk-space': z
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
        readOnly: true,
        description: 'DBaaS plan disk space',
      }),
    authorized: z
      .boolean()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Requires authorization or publicly available' }),
    name: z.string().exactOptional().openapi({ readOnly: true, description: 'DBaaS plan name' }),
    'max-memory-percent': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description: 'DBaaS plan max memory allocated percentage',
      }),
    zones: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Zones where the plan is available' }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description: 'DBaaS plan memory count per node',
      }),
  })
  .openapi({ description: 'DBaaS plan', required: [] })
  .openapi('DbaasPlan')

const DbaasServiceTypeSchema = z
  .object({
    name: DbaasServiceTypeNameSchema.exactOptional().openapi({
      readOnly: true,
      description: 'DbaaS service name',
    }),
    'available-versions': z
      .array(z.string())
      .exactOptional()
      .openapi({ readOnly: true, description: 'DbaaS service available versions' }),
    'default-version': z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'DbaaS service default version' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'DbaaS service description' }),
    plans: z
      .array(DbaasPlanSchema)
      .exactOptional()
      .openapi({ readOnly: true, description: 'DbaaS service plans' }),
  })
  .openapi({ description: 'DBaaS service', required: [] })
  .openapi('DbaasServiceType')

const JsonSchemaKafkaConnectSchema = z
  .strictObject({
    producer_buffer_memory: z
      .int()
      .min(5242880)
      .max(134217728)
      .exactOptional()
      .openapi({
        description:
          'The total bytes of memory the producer can use to buffer records waiting to be sent to the broker (defaults to 33554432).',
        example: 8388608,
        title:
          'The total bytes of memory the producer can use to buffer records waiting to be sent to the broker',
      }),
    consumer_max_poll_interval_ms: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The maximum delay in milliseconds between invocations of poll() when using consumer group management (defaults to 300000).',
        example: 300000,
        title: 'The maximum delay between polls when using consumer group management',
      }),
    producer_compression_type: z
      .enum(['gzip', 'snappy', 'lz4', 'zstd', 'none'])
      .exactOptional()
      .openapi({
        description:
          "Specify the default compression type for producers. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'none' which is the default and equivalent to no compression.",
        title: 'The default compression type for producers',
      }),
    connector_client_config_override_policy: z
      .enum(['None', 'All'])
      .exactOptional()
      .openapi({
        description:
          'Defines what client configurations can be overridden by the connector. Default is None',
        title: 'Client config override policy',
      }),
    offset_flush_interval_ms: z
      .int()
      .min(1)
      .max(100000000)
      .exactOptional()
      .openapi({
        description:
          'The interval at which to try committing offsets for tasks (defaults to 60000).',
        example: 60000,
        title: 'The interval at which to try committing offsets for tasks',
      }),
    scheduled_rebalance_max_delay_ms: z
      .int()
      .min(0)
      .max(600000)
      .exactOptional()
      .openapi({
        description:
          'The maximum delay that is scheduled in order to wait for the return of one or more departed workers before rebalancing and reassigning their connectors and tasks to the group. During this period the connectors and tasks of the departed workers remain unassigned. Defaults to 5 minutes.',
        example: 300000,
        title: 'The maximum delay of rebalancing connector workers',
      }),
    consumer_fetch_max_bytes: z
      .int()
      .min(1048576)
      .max(104857600)
      .exactOptional()
      .openapi({
        description:
          'Records are fetched in batches by the consumer, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that the consumer can make progress. As such, this is not a absolute maximum.',
        example: 52428800,
        title: 'The maximum amount of data the server should return for a fetch request',
      }),
    consumer_max_partition_fetch_bytes: z
      .int()
      .min(1048576)
      .max(104857600)
      .exactOptional()
      .openapi({
        description:
          'Records are fetched in batches by the consumer.If the first record batch in the first non-empty partition of the fetch is larger than this limit, the batch will still be returned to ensure that the consumer can make progress. ',
        example: 1048576,
        title: 'The maximum amount of data per-partition the server will return.',
      }),
    offset_flush_timeout_ms: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of milliseconds to wait for records to flush and partition offset data to be committed to offset storage before cancelling the process and restoring the offset data to be committed in a future attempt (defaults to 5000).',
        example: 5000,
        title: 'Offset flush timeout',
      }),
    consumer_auto_offset_reset: z
      .enum(['earliest', 'latest'])
      .exactOptional()
      .openapi({
        description:
          'What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. Default is earliest',
        title: 'Consumer auto offset reset',
      }),
    producer_max_request_size: z
      .int()
      .min(131072)
      .max(67108864)
      .exactOptional()
      .openapi({
        description:
          'This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests.',
        example: 1048576,
        title: 'The maximum size of a request in bytes',
      }),
    producer_batch_size: z
      .int()
      .min(0)
      .max(5242880)
      .exactOptional()
      .openapi({
        description:
          "This setting gives the upper bound of the batch size to be sent. If there are fewer than this many bytes accumulated for this partition, the producer will 'linger' for the linger.ms time waiting for more records to show up. A batch size of zero will disable batching entirely (defaults to 16384).",
        example: 1024,
        title:
          'The batch size in bytes the producer will attempt to collect for the same partition before publishing to broker',
      }),
    session_timeout_ms: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The timeout in milliseconds used to detect failures when using Kafka’s group management facilities (defaults to 10000).',
        example: 10000,
        title: 'The timeout used to detect failures when using Kafka’s group management facilities',
      }),
    producer_linger_ms: z
      .int()
      .min(0)
      .max(5000)
      .exactOptional()
      .openapi({
        description:
          "This setting gives the upper bound on the delay for batching: once there is batch.size worth of records for a partition it will be sent immediately regardless of this setting, however if there are fewer than this many bytes accumulated for this partition the producer will 'linger' for the specified time waiting for more records to show up. Defaults to 0.",
        example: 100,
        title: 'Wait for up to the given delay to allow batching records together',
      }),
    consumer_isolation_level: z
      .enum(['read_uncommitted', 'read_committed'])
      .exactOptional()
      .openapi({
        description:
          'Transaction read isolation level. read_uncommitted is the default, but read_committed can be used if consume-exactly-once behavior is desired.',
        title: 'Consumer isolation level',
      }),
    consumer_max_poll_records: z
      .int()
      .min(1)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of records returned in a single call to poll() (defaults to 500).',
        example: 500,
        title: 'The maximum number of records returned by a single poll',
      }),
  })
  .openapi({ title: 'Kafka Connect configuration values', required: [] })
  .openapi('JsonSchemaKafkaConnect')

const ListAiApiKeysResponseEntrySchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last update timestamp', readOnly: true }),
    name: z.string().openapi({ description: 'Human-readable name for the AI API key' }),
    scope: z
      .string()
      .openapi({
        description: "Key scope: 'public' for all deployments, or a specific deployment UUID",
      }),
    id: z.uuid().openapi({ description: 'AI API key ID', readOnly: true }),
    'org-uuid': z
      .uuid()
      .openapi({ description: 'Organization UUID that owns this key', readOnly: true }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', readOnly: true }),
  })
  .openapi({
    description: 'AI API key list entry',
    required: ['id', 'org-uuid', 'name', 'scope', 'created-at', 'updated-at'],
  })
  .openapi('ListAiApiKeysResponseEntry')

const PrivateNetworkLeaseSchema = z
  .object({
    ip: z
      .ipv4()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Private Network IP address' }),
    'instance-id': z
      .uuid()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Attached instance ID' }),
  })
  .openapi({ description: 'Private Network leased IP address', required: [] })
  .openapi('PrivateNetworkLease')

const PrivateNetworkOptionsSchema = z
  .object({
    routers: z.array(z.ipv4()).exactOptional().openapi({ description: 'Routers' }),
    'dns-servers': z.array(z.ipv4()).exactOptional().openapi({ description: 'DNS Servers' }),
    'ntp-servers': z.array(z.ipv4()).exactOptional().openapi({ description: 'NTP Servers' }),
    'domain-search': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Domain search list, limited to 255 octets' }),
  })
  .openapi({ description: 'Private Network DHCP Options', required: [] })
  .openapi('PrivateNetworkOptions')

const PrivateNetworkSchema = z
  .object({
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Private Network description' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
    name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Private Network name' }),
    'start-ip': z
      .ipv4()
      .exactOptional()
      .openapi({ description: 'Private Network start IP address' }),
    leases: z
      .array(PrivateNetworkLeaseSchema)
      .exactOptional()
      .openapi({ readOnly: true, description: 'Private Network leased IP addresses' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Private Network ID' }),
    vni: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Private Network VXLAN ID',
      }),
    netmask: z.ipv4().exactOptional().openapi({ description: 'Private Network netmask' }),
    options: PrivateNetworkOptionsSchema.exactOptional().openapi({ description: 'DHCP options' }),
    'end-ip': z.ipv4().exactOptional().openapi({ description: 'Private Network end IP address' }),
  })
  .openapi({ description: 'Private Network', required: [] })
  .openapi('PrivateNetwork')

const DbaasClickhouseUserPrivilegeSchema = z
  .object({
    'access-type': z.string().exactOptional(),
    column: z.string().exactOptional(),
    database: z.string().exactOptional(),
    'grant-option': z.boolean().exactOptional(),
    'partial-revoke': z.boolean().exactOptional(),
    table: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbaasClickhouseUserPrivilege')

const DbaasEndpointRsyslogSchema = z
  .object({
    server: z
      .string()
      .min(4)
      .max(255)
      .openapi({ description: 'Rsyslog server IP address or hostname' }),
    port: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(65535n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 65535,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Rsyslog server port',
      }),
    tls: z.boolean().openapi({ description: 'Require TLS' }),
    format: EnumRsyslogFormatSchema.openapi({ description: 'Message format' }),
    logline: z
      .string()
      .regex(/^[ -~\t]+$/)
      .min(1)
      .max(512)
      .exactOptional()
      .openapi({ description: 'Custom syslog message format' }),
    sd: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({ description: 'Structured data block for log message' }),
    'max-message-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(2048n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 2048,
        maximum: 2147483647,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Rsyslog max message size',
      }),
  })
  .openapi({ required: ['server', 'port', 'tls', 'format'] })
  .openapi('DbaasEndpointRsyslog')

const JsonSchemaPgauditSchema = z
  .object({
    role: z
      .string()
      .regex(/^[_A-Za-z0-9][-._A-Za-z0-9]{0,63}$/)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'Specifies the master role to use for object audit logging.',
        title: 'Role',
      }),
    log_parameter: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Specifies that audit logging should include the parameters that were passed with the statement.',
        title: 'Log Parameter',
      }),
    log_rows: z.boolean().default(false).exactOptional().openapi({ title: 'Log Rows' }),
    log_level: z
      .enum(['debug1', 'debug2', 'debug3', 'debug4', 'debug5', 'info', 'notice', 'warning', 'log'])
      .default('log')
      .exactOptional()
      .openapi({
        description: 'Specifies the log level that will be used for log entries.',
        title: 'Log level',
      }),
    log_relation: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether session audit logging should create a separate log entry\nfor each relation (TABLE, VIEW, etc.) referenced in a SELECT or DML statement.',
        title: 'Log Relation',
      }),
    log_statement_once: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether logging will include the statement text and parameters with\nthe first log entry for a statement/substatement combination or with every entry.',
        title: 'Log Statement Once',
      }),
    log_max_string_length: z
      .int()
      .min(-1)
      .max(102400)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Crop parameters representation and whole statements if they exceed this threshold.\nA (default) value of -1 disable the truncation.',
        title: 'Log Max String Length',
      }),
    log_catalog: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Specifies that session logging should be enabled in the case where all relations\nin a statement are in pg_catalog.',
        title: 'Log Catalog',
      }),
    log_nested_statements: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'This GUC allows to turn off logging nested statements, that is, statements that are\nexecuted as part of another ExecutorRun.',
        title: 'Log Nested Statements',
      }),
    log_statement: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether logging will include the statement text and parameters (if enabled).',
        title: 'Log Statement',
      }),
    log_client: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether log messages will be visible to a client process such as psql.',
        title: 'Log Client',
      }),
    feature_enabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Enable pgaudit extension. When enabled, pgaudit extension will be automatically installed.Otherwise, extension will be uninstalled but auditing configurations will be preserved.',
        title: 'Enable pgaudit extension.',
      }),
    log: z
      .array(z.enum(['all', 'ddl', 'function', 'misc', 'misc_set', 'read', 'role', 'write']))
      .exactOptional()
      .openapi({
        description:
          'Specifies which classes of statements will be logged by session audit logging.',
        title: 'Log',
      }),
    log_parameter_max_size: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Specifies that parameter values longer than this setting (in bytes) should not be logged,\nbut replaced with <long param suppressed>.',
        title: 'Log Parameter Max Size',
      }),
  })
  .openapi({
    description: 'System-wide settings for the pgaudit extension.',
    title: 'PGAudit settings',
    required: [],
  })
  .openapi('JsonSchemaPgaudit')

const DbaasValkeyUserAccessControlSchema = z
  .object({
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Use +@<category> to allow and -@<category> to disallow. Separate entries with a single space. Example: +@all -@dangerous.',
      }),
    channels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Patterns use standard glob syntax and must be separated by a single space. Example: ~* &events.',
      }),
    commands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Use +<command> to allow and -<command> to disallow. You can also use @<category>. Separate entries with a single space. Example: +@all -flushall.',
      }),
    keys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Patterns use standard glob syntax and must be separated by a single space. Example: cache:* session:*.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasValkeyUserAccessControl')

const ListSubnetEntrySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Subnet ID' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Subnet name' }),
    description: z
      .string()
      .max(4096)
      .exactOptional()
      .openapi({ description: 'Subnet description' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Subnet creation date' }),
    addressfamily: z
      .enum(['inet4', 'dual'])
      .exactOptional()
      .openapi({ description: 'Subnet address family' }),
    'address-space': z
      .literal('private')
      .exactOptional()
      .openapi({ description: 'Subnet address space' }),
    'ipv4-block': z.string().exactOptional().openapi({ description: 'Subnet ipv4 CIDR' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
  })
  .openapi({ description: 'Subnet', required: [] })
  .openapi('ListSubnetEntry')

const DbaasServiceLogsSchema = z
  .object({
    offset: z.string().exactOptional(),
    'first-log-offset': z.string().exactOptional(),
    logs: z
      .array(
        z
          .object({
            unit: z.string().exactOptional(),
            time: z.string().exactOptional(),
            message: z.string().exactOptional(),
            node: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbaasServiceLogs')

const SetOrgConsumptionQuotaRequestSchema = z
  .object({
    'quota-uom-per-minute': z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Per-org Unit Of Measurement (UOM) consumption quota (UOM/min). Pass null to remove the limit. UOM represents weighted units across different AI workloads (e.g., tokens for LLMs, minutes for TTS, pages for OCR).',
      }),
  })
  .openapi({
    description: 'Request to set per-org Unit Of Measurement (UOM) consumption quota',
    required: [],
  })
  .openapi('SetOrgConsumptionQuotaRequest')

const VpcSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'VPC ID' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'VPC name' }),
    description: z.string().max(4096).exactOptional().openapi({ description: 'VPC description' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'VPC creation date' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
  })
  .openapi({ description: 'VPC', required: [] })
  .openapi('Vpc')

const JsonSchemaThanosSchema = z
  .object({
    compactor: z
      .object({
        'retention.days': z
          .int()
          .min(0)
          .exactOptional()
          .openapi({
            description: 'Retention time for data in days for each resolution (5m, 1h, raw)',
            title: 'Retention time for data in days',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Configuration options for Thanos Compactor.',
        title: 'ThanosCompactorUserConfig',
        required: [],
      }),
    query: z
      .object({
        'query.default-evaluation-interval': z
          .string()
          .max(20)
          .default('1m')
          .exactOptional()
          .openapi({
            description: 'Set the default evaluation interval for subqueries.',
            title: 'Set the default evaluation interval for subqueries.',
          }),
        'query.lookback-delta': z
          .string()
          .max(20)
          .default('5m')
          .exactOptional()
          .openapi({
            description:
              'The maximum lookback duration for retrieving metrics during expression evaluations in PromQL. PromQL always evaluates the query for a certain timestamp, and it looks back for the given amount of time to get the latest sample. If it exceeds the maximum lookback delta, it assumes the series is stale and returns none (a gap). The lookback delta should be set to at least 2 times the slowest scrape interval. If unset, it will use the promql default of 5m.',
            title:
              'Maximum lookback duration for retrieving metrics during expression evaluations in PromQL',
          }),
        'query.metadata.default-time-range': z
          .string()
          .max(20)
          .default('0s')
          .exactOptional()
          .openapi({
            description:
              'The default metadata time range duration for retrieving labels through Labels and Series API when the range parameters are not specified. The zero value means the range covers the time since the beginning.',
            title: 'Default metadata time range duration for retrieving labels',
          }),
        'query.timeout': z
          .string()
          .max(20)
          .default('2m')
          .exactOptional()
          .openapi({
            description: 'Maximum time to process a query by the query node.',
            title: 'Maximum time to process a query by the query node.',
          }),
        'store.limits.request-samples': z
          .int()
          .min(0)
          .max(100000000)
          .default(0)
          .exactOptional()
          .openapi({
            description:
              "The maximum samples allowed for a single Series request. The Series call fails if this limit is exceeded. Set to 0 for no limit. NOTE: For efficiency, the limit is internally implemented as 'chunks limit' considering each chunk contains a maximum of 120 samples. The default value is 100 * store.limits.request-series.",
            title: 'Store.Limits.Request-Samples',
          }),
        'store.limits.request-series': z
          .int()
          .min(0)
          .max(100000000)
          .default(0)
          .exactOptional()
          .openapi({
            description:
              'The maximum series allowed for a single Series request. The Series call fails if this limit is exceeded. Set to 0 for no limit. The default value is 1000 * cpu_count.',
            title: 'Store.Limits.Request-Series',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Configuration options for Thanos Query.',
        title: 'ThanosQueryUserConfig',
        required: [],
      }),
    'query-frontend': z
      .object({
        'query-range.align-range-with-step': z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description:
              'Whether to align the query range boundaries with the step. If enabled, the query range boundaries will be aligned to the step, providing more accurate results for queries with high-resolution data.',
            title: 'Whether to align the query range boundaries with the step.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Configuration options for Thanos Query Frontend.',
        title: 'ThanosQueryFrontendUserConfig',
        required: [],
      }),
  })
  .openapi({ title: 'Thanos settings', required: [] })
  .openapi('JsonSchemaThanos')

const InstancePasswordSchema = z
  .object({
    password: z.string().exactOptional().openapi({ readOnly: true, description: 'Password' }),
  })
  .openapi({ description: 'Instance password', required: [] })
  .openapi('InstancePassword')

const PublicIpAssignmentSchema = z.enum(['inet4', 'dual', 'none']).openapi('PublicIpAssignment')

const SecurityGroupRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Security group ID' }) })
  .openapi({ description: 'Security group reference', required: [] })
  .openapi('SecurityGroupRef')

const ElasticIpRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Elastic IP ID' }) })
  .openapi({ description: 'Elastic IP reference', required: [] })
  .openapi('ElasticIpRef')

const InstanceTypeRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Instance type ID' }) })
  .openapi({ description: 'Instance type reference', required: [] })
  .openapi('InstanceTypeRef')

const TemplateRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Template ID' }) })
  .openapi({ description: 'Template reference', required: [] })
  .openapi('TemplateRef')

const SshKeyRefSchema = z
  .object({
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'SSH key name' }),
  })
  .openapi({ description: 'SSH key reference', required: [] })
  .openapi('SshKeyRef')

const ManagerSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Manager ID' }),
    type: z
      .enum(['sks-nodepool', 'instance-pool'])
      .exactOptional()
      .openapi({ description: 'Manager type' }),
  })
  .openapi({ description: 'Resource manager', required: [] })
  .openapi('Manager')

const InstanceRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Instance ID' }) })
  .openapi({ description: 'Target Instance', required: [] })
  .openapi('InstanceRef')

const DeployTargetRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Deploy target ID' }) })
  .openapi({ description: 'Deploy target reference', required: [] })
  .openapi('DeployTargetRef')

const InstancePoolSchema = z
  .object({
    'application-consistent-snapshot-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable application consistent snapshots' }),
    'anti-affinity-groups': z
      .array(AntiAffinityGroupRefSchema)
      .exactOptional()
      .openapi({ description: 'Instance Pool Anti-affinity Groups' }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Instance Pool description' }),
    'public-ip-assignment': PublicIpAssignmentSchema.exactOptional().openapi({
      description: 'Instance Pool public IP assignment',
    }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Instance Pool Labels' }),
    'security-groups': z
      .array(SecurityGroupRefSchema)
      .exactOptional()
      .openapi({ description: 'Instance Pool Security Groups' }),
    'elastic-ips': z
      .array(ElasticIpRefSchema)
      .exactOptional()
      .openapi({ description: 'Instances Elastic IPs' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Instance Pool name' }),
    'instance-type': InstanceTypeRefSchema.exactOptional().openapi({
      description: 'Instances type',
    }),
    'min-available': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Minimum number of running instances',
      }),
    'private-networks': z
      .array(PrivateNetworkRefSchema)
      .exactOptional()
      .openapi({ description: 'Instance Pool Private Networks' }),
    template: TemplateRefSchema.exactOptional().openapi({ description: 'Instances template' }),
    state: z
      .enum([
        'scaling-up',
        'scaling-down',
        'destroying',
        'creating',
        'suspended',
        'running',
        'updating',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance Pool state' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Number of instances',
      }),
    'ssh-key': SshKeyRefSchema.exactOptional().openapi({ description: 'Instances SSH key' }),
    'instance-prefix': z
      .string()
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The instances created by the Instance Pool will be prefixed with this value (default: pool)',
      }),
    'user-data': z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Instances Cloud-init user-data' }),
    manager: ManagerSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Instance Pool manager',
    }),
    instances: z
      .array(InstanceRefSchema)
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instances' }),
    'deploy-target': DeployTargetRefSchema.exactOptional().openapi({
      description: 'Instance Pool Deploy Target',
    }),
    'ipv6-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable IPv6 for instances' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Instance Pool ID' }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(10n).max(51200n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 10,
        maximum: 51200,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Instances disk size in GiB',
      }),
    'ssh-keys': z
      .array(SshKeyRefSchema)
      .exactOptional()
      .openapi({ description: 'Instances SSH keys' }),
  })
  .openapi({ description: 'Instance Pool', required: [] })
  .openapi('InstancePool')

const LoadBalancerServiceHealthcheckSchema = z
  .object({
    mode: z
      .enum(['tcp', 'http', 'https'])
      .exactOptional()
      .openapi({ description: 'Healthcheck mode' }),
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(5n).max(300n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 5,
        maximum: 300,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Healthcheck interval (default: 10). Must be greater than or equal to Timeout',
      }),
    uri: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: "An endpoint to use for the HTTP healthcheck, e.g. '/status'" }),
    port: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(65535n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 65535,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Healthcheck port',
      }),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(2n).max(60n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 2,
        maximum: 60,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description:
          'Healthcheck timeout value (default: 2). Must be lower than or equal to Interval',
      }),
    retries: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(20n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 20,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Number of retries before considering a Service failed',
      }),
    'tls-sni': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'SNI domain for HTTPS healthchecks' }),
  })
  .openapi({ description: 'Load Balancer Service healthcheck', required: [] })
  .openapi('LoadBalancerServiceHealthcheck')

const LoadBalancerServerStatusSchema = z
  .object({
    'public-ip': z.ipv4().exactOptional().openapi({ description: 'Backend server public IP' }),
    status: z
      .enum(['failure', 'success'])
      .exactOptional()
      .openapi({ description: "Status of the instance's healthcheck" }),
  })
  .openapi({ description: 'Load Balancer Service status', required: [] })
  .openapi('LoadBalancerServerStatus')

const LoadBalancerServiceSchema = z
  .object({
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Load Balancer Service description' }),
    protocol: z
      .enum(['tcp', 'udp'])
      .exactOptional()
      .openapi({ description: 'Network traffic protocol' }),
    name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Load Balancer Service name' }),
    state: z
      .enum(['creating', 'deleting', 'running', 'updating', 'error'])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Load Balancer Service state' }),
    'target-port': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description:
          'Port on which the network traffic will be forwarded to on the receiving instance',
      }),
    port: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: "Port exposed on the Load Balancer's public IP",
      }),
    'instance-pool': InstancePoolSchema.exactOptional().openapi({
      description: 'Instance Pool to forward network traffic to',
    }),
    strategy: z
      .enum(['round-robin', 'maglev-hash', 'source-hash'])
      .exactOptional()
      .openapi({ description: 'Load balancing strategy' }),
    healthcheck: LoadBalancerServiceHealthcheckSchema.exactOptional().openapi({
      description: 'Healthcheck configuration',
    }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Load Balancer Service ID' }),
    'healthcheck-status': z
      .array(LoadBalancerServerStatusSchema)
      .exactOptional()
      .openapi({ readOnly: true, description: 'Healthcheck status per backend server' }),
  })
  .openapi({ description: 'Load Balancer Service', required: [] })
  .openapi('LoadBalancerService')

const LoadBalancerSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Load Balancer ID' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Load Balancer description' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Load Balancer name' }),
    state: z
      .enum(['creating', 'migrated', 'deleting', 'running', 'migrating', 'error'])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Load Balancer state' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Load Balancer creation date' }),
    ip: z
      .ipv4()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Load Balancer public IP' }),
    services: z
      .array(LoadBalancerServiceSchema)
      .exactOptional()
      .openapi({ description: 'Load Balancer Services' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Load Balancer Labels' }),
  })
  .openapi({ description: 'Load Balancer', required: [] })
  .openapi('LoadBalancer')

const SksClusterDeprecatedResourceSchema = z
  .object({
    group: z.string().exactOptional(),
    version: z.string().exactOptional(),
    resource: z.string().exactOptional(),
    subresource: z.string().exactOptional(),
    'removed-release': z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SksClusterDeprecatedResource')

const ModelUsageCountersSchema = z
  .object({
    'output-uom': z
      .int()
      .min(0)
      .openapi({
        description:
          'Total completion/output Unit Of Measurement (UOM) across all calls in this flush window (e.g., tokens for LLMs, minutes for TTS, pages for OCR)',
      }),
    'input-uom': z
      .int()
      .min(0)
      .openapi({
        description:
          'Total prompt/input Unit Of Measurement (UOM) across all calls in this flush window (e.g., tokens for LLMs, minutes for TTS, pages for OCR)',
      }),
    'call-count': z
      .int()
      .min(1)
      .openapi({ description: 'Number of inference calls in this flush window' }),
  })
  .openapi({
    description: 'Accumulated Unit Of Measurement (UOM) counters for one model over a flush window',
    required: ['input-uom', 'output-uom', 'call-count'],
  })
  .openapi('ModelUsageCounters')

const ApiKeyUsageEntrySchema = z
  .object({
    'organization-id': z.uuid().openapi({ description: 'Organization that owns this API key' }),
    models: z
      .record(z.string(), ModelUsageCountersSchema)
      .openapi({ description: 'Map of model-uuid to accumulated counters. Keys are model UUIDs.' }),
  })
  .openapi({
    description: 'Usage breakdown for one API key, grouped by model',
    required: ['organization-id', 'models'],
  })
  .openapi('ApiKeyUsageEntry')

const EnableKmsKeyRotationRequestSchema = z
  .object({
    'rotation-period': z
      .int()
      .min(90)
      .max(2560)
      .default(365)
      .exactOptional()
      .openapi({ description: 'The number of days between each automatic key rotation.' }),
  })
  .openapi({ required: [] })
  .openapi('EnableKmsKeyRotationRequest')

const ElasticIpHealthcheckSchema = z
  .object({
    'strikes-ok': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(20n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 20,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Number of attempts before considering the target healthy (default: 2)',
      }),
    'tls-skip-verify': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Skip TLS verification' }),
    'tls-sni': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'An optional domain or subdomain to check TLS against' }),
    'strikes-fail': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(20n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 20,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Number of attempts before considering the target unhealthy (default: 3)',
      }),
    mode: z.enum(['tcp', 'http', 'https']).openapi({ description: 'Health check mode' }),
    port: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(65535n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 65535,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Health check port',
      }),
    uri: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: "An endpoint to use for the health check, for example '/status'" }),
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(5n).max(300n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 5,
        maximum: 300,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Interval between the checks in seconds (default: 10)',
      }),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(2n).max(60n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 2,
        maximum: 60,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Health check timeout value in seconds (default: 2)',
      }),
  })
  .openapi({ required: ['mode', 'port'], description: 'Elastic IP address healthcheck' })
  .openapi('ElasticIpHealthcheck')

const ElasticIpSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ readOnly: true, 'x-go-findable': '1', description: 'Elastic IP ID' }),
    ip: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, 'x-go-findable': '2', description: 'Elastic IP address' }),
    addressfamily: z
      .enum(['inet4', 'inet6'])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Elastic IP address family' }),
    cidr: z.string().exactOptional().openapi({ readOnly: true, description: 'Elastic IP cidr' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Elastic IP description' }),
    healthcheck: ElasticIpHealthcheckSchema.exactOptional().openapi({
      description: 'Elastic IP healthcheck',
    }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
  })
  .openapi({ description: 'Elastic IP', required: [] })
  .openapi('ElasticIp')

const DomainNameSchema = z.string().min(1).max(253).openapi('DomainName')

const CreateModelRequestSchema = z
  .object({
    name: z.string().min(1).openapi({ description: 'Model name' }),
    'huggingface-token': z.string().exactOptional().openapi({ description: 'Huggingface Token' }),
  })
  .openapi({ description: 'AI model', required: ['name'] })
  .openapi('CreateModelRequest')

const InferenceEngineVersionSchema = z
  .enum([
    '0.12.0',
    '0.15.1',
    '0.16.0',
    '0.17.0',
    '0.18.0',
    '0.18.1',
    '0.19.0',
    '0.19.1',
    '0.20.0',
    '0.20.1',
    '0.20.2',
    '0.21.0',
    '0.22.0',
    '0.22.1',
    '0.23.0',
    '0.24.0',
    '0.25.0',
    '0.25.1',
    '0.26.0',
  ])
  .default('0.26.0')
  .openapi({ description: 'Inference engine version' })
  .openapi('InferenceEngineVersion')

const DbaasUserOpensearchSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'Opensearch username' }),
    password: z.string().exactOptional().openapi({ description: 'Opensearch password' }),
  })
  .openapi({ description: 'Opensearch User secrets', required: [] })
  .openapi('DbaasUserOpensearchSecrets')

const AccessKeyResourceSchema = z
  .object({
    domain: z.enum(['partner', 'sos']).exactOptional().openapi({ description: 'Resource domain' }),
    'resource-type': z
      .enum(['product', 'bucket'])
      .exactOptional()
      .openapi({ description: 'Resource type' }),
    'resource-name': z.string().exactOptional().openapi({ description: 'Resource name' }),
  })
  .openapi({ description: 'Access key resource', required: [] })
  .openapi('AccessKeyResource')

const RevealDeploymentApiKeyResponseSchema = z
  .object({
    'api-key': z.string().openapi({ description: 'Inference endpoint authentication key' }),
  })
  .openapi({
    description: 'AI deployment inference endpoint authentication key',
    required: ['api-key'],
  })
  .openapi('RevealDeploymentApiKeyResponse')

const ReplicateKmsKeyRequestSchema = z
  .object({
    zone: z
      .string()
      .openapi({ description: 'The targeted cloud zone where the KMS key should be replicated.' }),
  })
  .openapi({ required: ['zone'] })
  .openapi('ReplicateKmsKeyRequest')

const JsonSchemaKafkaSchema = z
  .strictObject({
    sasl_oauthbearer_expected_audience: z
      .string()
      .regex(/^[^\r\n]*$/)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'The (optional) comma-delimited setting for the broker to use to verify that the JWT was issued for one of the expected audiences.',
        title: 'sasl.oauthbearer.expected.audience',
      }),
    group_max_session_timeout_ms: z
      .int()
      .min(0)
      .max(1800000)
      .exactOptional()
      .openapi({
        description:
          'The maximum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures.',
        example: 1800000,
        title: 'group.max.session.timeout.ms',
      }),
    log_flush_interval_messages: z
      .int()
      .min(1)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description:
          'The number of messages accumulated on a log partition before messages are flushed to disk',
        example: 9223372036854776000,
        title: 'log.flush.interval.messages',
      }),
    sasl_oauthbearer_jwks_endpoint_url: z
      .string()
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          'OIDC JWKS endpoint URL. By setting this the SASL SSL OAuth2/OIDC authentication is enabled. See also other options for SASL OAuth2/OIDC. ',
        title: 'sasl.oauthbearer.jwks.endpoint.url',
      }),
    max_connections_per_ip: z
      .int()
      .min(256)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of connections allowed from each ip address (defaults to 2147483647).',
        title: 'max.connections.per.ip',
      }),
    sasl_oauthbearer_expected_issuer: z
      .string()
      .regex(/^[^\r\n]*$/)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Optional setting for the broker to use to verify that the JWT was created by the expected issuer.',
        title: 'sasl.oauthbearer.expected.issuer',
      }),
    log_index_size_max_bytes: z
      .int()
      .min(1048576)
      .max(104857600)
      .exactOptional()
      .openapi({
        description: 'The maximum size in bytes of the offset index',
        example: 10485760,
        title: 'log.index.size.max.bytes',
      }),
    auto_create_topics_enable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable auto creation of topics',
        example: true,
        title: 'auto.create.topics.enable',
      }),
    log_index_interval_bytes: z
      .int()
      .min(0)
      .max(104857600)
      .exactOptional()
      .openapi({
        description: 'The interval with which Kafka adds an entry to the offset index',
        example: 4096,
        title: 'log.index.interval.bytes',
      }),
    replica_fetch_max_bytes: z
      .int()
      .min(1048576)
      .max(104857600)
      .exactOptional()
      .openapi({
        description:
          'The number of bytes of messages to attempt to fetch for each partition (defaults to 1048576). This is not an absolute maximum, if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made.',
        title: 'replica.fetch.max.bytes',
      }),
    num_partitions: z
      .int()
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({
        description: 'Number of partitions for autocreated topics',
        title: 'num.partitions',
      }),
    transaction_state_log_segment_bytes: z
      .int()
      .min(1048576)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The transaction topic segment bytes should be kept relatively small in order to facilitate faster log compaction and cache loads (defaults to 104857600 (100 mebibytes)).',
        example: 104857600,
        title: 'transaction.state.log.segment.bytes',
      }),
    replica_fetch_response_max_bytes: z
      .int()
      .min(10485760)
      .max(1048576000)
      .exactOptional()
      .openapi({
        description:
          'Maximum bytes expected for the entire fetch response (defaults to 10485760). Records are fetched in batches, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. As such, this is not an absolute maximum.',
        title: 'replica.fetch.response.max.bytes',
      }),
    log_message_timestamp_type: z
      .enum(['CreateTime', 'LogAppendTime'])
      .exactOptional()
      .openapi({
        description:
          'Define whether the timestamp in the message is message create time or log append time.',
        title: 'log.message.timestamp.type',
      }),
    connections_max_idle_ms: z
      .int()
      .min(1000)
      .max(3600000)
      .exactOptional()
      .openapi({
        description:
          'Idle connections timeout: the server socket processor threads close the connections that idle for longer than this.',
        example: 540000,
        title: 'connections.max.idle.ms',
      }),
    log_flush_interval_ms: z
      .int()
      .min(0)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description:
          'The maximum time in ms that a message in any topic is kept in memory before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used',
        title: 'log.flush.interval.ms',
      }),
    log_preallocate: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should pre allocate file when create new segment?',
        example: false,
        title: 'log.preallocate',
      }),
    log_segment_delete_delay_ms: z
      .int()
      .min(0)
      .max(3600000)
      .exactOptional()
      .openapi({
        description: 'The amount of time to wait before deleting a file from the filesystem',
        example: 60000,
        title: 'log.segment.delete.delay.ms',
      }),
    message_max_bytes: z
      .int()
      .min(0)
      .max(100001200)
      .exactOptional()
      .openapi({
        description: 'The maximum size of message that the server can receive.',
        example: 1048588,
        title: 'message.max.bytes',
      }),
    group_initial_rebalance_delay_ms: z
      .int()
      .min(0)
      .max(300000)
      .exactOptional()
      .openapi({
        description:
          'The amount of time, in milliseconds, the group coordinator will wait for more consumers to join a new group before performing the first rebalance. A longer delay means potentially fewer rebalances, but increases the time until processing begins. The default value for this is 3 seconds. During development and testing it might be desirable to set this to 0 in order to not delay test execution time.',
        example: 3000,
        title: 'group.initial.rebalance.delay.ms',
      }),
    log_local_retention_bytes: z
      .int()
      .min(-2)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description:
          'The maximum size of local log segments that can grow for a partition before it gets eligible for deletion. If set to -2, the value of log.retention.bytes is used. The effective value should always be less than or equal to log.retention.bytes value.',
        title: 'log.local.retention.bytes',
      }),
    log_roll_jitter_ms: z
      .int()
      .min(0)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description:
          'The maximum jitter to subtract from logRollTimeMillis (in milliseconds). If not set, the value in log.roll.jitter.hours is used',
        title: 'log.roll.jitter.ms',
      }),
    transaction_remove_expired_transaction_cleanup_interval_ms: z
      .int()
      .min(600000)
      .max(3600000)
      .exactOptional()
      .openapi({
        description:
          'The interval at which to remove transactions that have expired due to transactional.id.expiration.ms passing (defaults to 3600000 (1 hour)).',
        example: 3600000,
        title: 'transaction.remove.expired.transaction.cleanup.interval.ms',
      }),
    transaction_partition_verification_enable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable verification that checks that the partition has been added to the transaction before writing transactional records to the partition',
        example: true,
        title: 'transaction.partition.verification.enable',
      }),
    default_replication_factor: z
      .int()
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description: 'Replication factor for autocreated topics',
        title: 'default.replication.factor',
      }),
    log_roll_ms: z
      .int()
      .min(1)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description: 'The maximum time before a new log segment is rolled out (in milliseconds).',
        title: 'log.roll.ms',
      }),
    producer_purgatory_purge_interval_requests: z
      .int()
      .min(10)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'The purge interval (in number of requests) of the producer request purgatory(defaults to 1000).',
        title: 'producer.purgatory.purge.interval.requests',
      }),
    log_retention_bytes: z
      .int()
      .min(-1)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description: 'The maximum size of the log before deleting messages',
        title: 'log.retention.bytes',
      }),
    min_insync_replicas: z
      .int()
      .min(1)
      .max(7)
      .exactOptional()
      .openapi({
        description:
          "When a producer sets acks to 'all' (or '-1'), min.insync.replicas specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful.",
        example: 1,
        title: 'min.insync.replicas',
      }),
    compression_type: z
      .enum(['gzip', 'snappy', 'lz4', 'zstd', 'uncompressed', 'producer'])
      .exactOptional()
      .openapi({
        description:
          "Specify the final compression type for a given topic. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'uncompressed' which is equivalent to no compression; and 'producer' which means retain the original compression codec set by the producer.",
        title: 'compression.type',
      }),
    log_message_timestamp_difference_max_ms: z
      .int()
      .min(0)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description:
          'The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message',
        title: 'log.message.timestamp.difference.max.ms',
      }),
    log_local_retention_ms: z
      .int()
      .min(-2)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description:
          'The number of milliseconds to keep the local log segments before it gets eligible for deletion. If set to -2, the value of log.retention.ms is used. The effective value should always be less than or equal to log.retention.ms value.',
        title: 'log.local.retention.ms',
      }),
    log_message_downconversion_enable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests. ',
        example: true,
        title: 'log.message.downconversion.enable',
      }),
    sasl_oauthbearer_sub_claim_name: z
      .string()
      .regex(/^[^\r\n]*$/)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Name of the scope from which to extract the subject claim from the JWT. Defaults to sub.',
        title: 'sasl.oauthbearer.sub.claim.name',
      }),
    max_incremental_fetch_session_cache_slots: z
      .int()
      .min(1000)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of incremental fetch sessions that the broker will maintain.',
        example: 1000,
        title: 'max.incremental.fetch.session.cache.slots',
      }),
    log_retention_hours: z
      .int()
      .min(-1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description: 'The number of hours to keep a log file before deleting it',
        title: 'log.retention.hours',
      }),
    group_min_session_timeout_ms: z
      .int()
      .min(0)
      .max(60000)
      .exactOptional()
      .openapi({
        description:
          'The minimum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures.',
        example: 6000,
        title: 'group.min.session.timeout.ms',
      }),
    socket_request_max_bytes: z
      .int()
      .min(10485760)
      .max(209715200)
      .exactOptional()
      .openapi({
        description: 'The maximum number of bytes in a socket request (defaults to 104857600).',
        title: 'socket.request.max.bytes',
      }),
    log_segment_bytes: z
      .int()
      .min(10485760)
      .max(1073741824)
      .exactOptional()
      .openapi({
        description: 'The maximum size of a single log file',
        title: 'log.segment.bytes',
      }),
    'log-cleanup-and-compaction': z
      .object({
        log_cleaner_delete_retention_ms: z
          .int()
          .min(0)
          .max(315569260000)
          .exactOptional()
          .openapi({
            description: 'How long are delete records retained?',
            example: 86400000,
            title: 'log.cleaner.delete.retention.ms',
          }),
        log_cleaner_max_compaction_lag_ms: z
          .int()
          .min(30000)
          .max(9223372036854776000)
          .exactOptional()
          .openapi({
            description:
              'The maximum amount of time message will remain uncompacted. Only applicable for logs that are being compacted',
            title: 'log.cleaner.max.compaction.lag.ms',
          }),
        log_cleaner_min_cleanable_ratio: z
          .number()
          .min(0.2)
          .max(0.9)
          .exactOptional()
          .openapi({
            description:
              'Controls log compactor frequency. Larger value means more frequent compactions but also more space wasted for logs. Consider setting log.cleaner.max.compaction.lag.ms to enforce compactions sooner, instead of setting a very high value for this option.',
            example: 0.5,
            title: 'log.cleaner.min.cleanable.ratio',
          }),
        log_cleaner_min_compaction_lag_ms: z
          .int()
          .min(0)
          .max(9223372036854776000)
          .exactOptional()
          .openapi({
            description:
              'The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted.',
            title: 'log.cleaner.min.compaction.lag.ms',
          }),
        log_cleanup_policy: z
          .enum(['delete', 'compact', 'compact,delete'])
          .exactOptional()
          .openapi({
            description: 'The default cleanup policy for segments beyond the retention window',
            example: 'delete',
            title: 'log.cleanup.policy',
          }),
      })
      .exactOptional()
      .openapi({ title: 'Configure log cleaner for topic compaction', required: [] }),
    offsets_retention_minutes: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description: 'Log retention window in minutes for offsets topic',
        example: 10080,
        title: 'offsets.retention.minutes',
      }),
    log_retention_ms: z
      .int()
      .min(-1)
      .max(9223372036854776000)
      .exactOptional()
      .openapi({
        description:
          'The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied.',
        title: 'log.retention.ms',
      }),
  })
  .openapi({ title: 'Kafka broker configuration values', required: [] })
  .openapi('JsonSchemaKafka')

const NvidiaMigProfileA30_24gbSchema = z
  .enum(['1g.6gb', '1g.6gb+me', '2g.12gb', '2g.12gb+me', '4g.24gb'])
  .openapi({ 'x-go-enum-varnames': ['1G6Gb', '1G6GbMe', '2G12Gb', '2G12GbMe', '4G24Gb'] })
  .openapi('NvidiaMigProfileA30_24gb')

const NvidiaMigProfileRtxpro6000_96gbSchema = z
  .enum([
    '1g.24gb',
    '1g.24gb+me',
    '1g.24gb+gfx',
    '1g.24gb+me.all',
    '1g.24gb-me',
    '2g.48gb',
    '2g.48gb+gfx',
    '2g.48gb+me.all',
    '2g.48gb-me',
    '4g.96gb',
    '4g.96gb+gfx',
  ])
  .openapi({
    'x-go-enum-varnames': [
      '1G24Gb',
      '1G24GbMe',
      '1G24GbGfx',
      '1G24GbMeAll',
      '1G24GbNoMe',
      '2G48Gb',
      '2G48GbGfx',
      '2G48GbMeAll',
      '2G48GbNoMe',
      '4G96Gb',
      '4G96GbGfx',
    ],
  })
  .openapi('NvidiaMigProfileRtxpro6000_96gb')

const NvidiaMigProfileB300_269gbSchema = z
  .enum(['1g.34gb', '1g.34gb+me', '1g.67gb', '2g.67gb', '3g.135gb', '4g.135gb', '7g.269gb'])
  .openapi({
    'x-go-enum-varnames': [
      '1G34Gb',
      '1G34GbMe',
      '1G67Gb',
      '2G67Gb',
      '3G135Gb',
      '4G135Gb',
      '7G269Gb',
    ],
  })
  .openapi('NvidiaMigProfileB300_269gb')

const NvidiaMigProfilesSchema = z
  .object({
    'a30.24gb': NvidiaMigProfileA30_24gbSchema.exactOptional().openapi({
      description: 'Nvidia A30 MIG Profile',
    }),
    'rtxpro6000.96gb': NvidiaMigProfileRtxpro6000_96gbSchema.exactOptional().openapi({
      description: 'Nvidia RTXPRO6000 MIG Profile',
    }),
    'b300.269gb': NvidiaMigProfileB300_269gbSchema.exactOptional().openapi({
      description: 'Nvidia B300 MIG Profile',
    }),
  })
  .openapi({ description: 'Nvidia MIG Profiles enabled', required: [] })
  .openapi('NvidiaMigProfiles')

const DbaasExternalIntegrationSchema = z
  .object({
    description: z.string().openapi({ description: 'Description of the integration' }),
    'dest-endpoint-name': z
      .string()
      .exactOptional()
      .openapi({ description: 'External destination endpoint name' }),
    'dest-endpoint-id': z
      .string()
      .exactOptional()
      .openapi({ description: 'External destination endpoint id' }),
    'integration-id': z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Endpoint integration UUID' }),
    status: z.string().exactOptional().openapi({ description: 'Integration status' }),
    'source-service-name': z.string().openapi({ description: 'DBaaS source service name' }),
    'source-service-type': DbaasServiceTypeNameSchema.openapi({
      description: 'DBaaS service type',
    }),
    type: EnumExternalEndpointTypesSchema.openapi({ description: 'Integration Type' }),
  })
  .openapi({
    required: ['description', 'source-service-name', 'source-service-type', 'type'],
    description: 'Integrations with other services',
  })
  .openapi('DbaasExternalIntegration')

const JsonSchemaPgSchema = z
  .strictObject({
    track_activity_query_size: z
      .int()
      .min(1024)
      .max(10240)
      .exactOptional()
      .openapi({
        description:
          'Specifies the number of bytes reserved to track the currently executing command for each active session. Changing this parameter causes a service restart.',
        example: 1024,
        title: 'track_activity_query_size',
      }),
    timezone: z
      .string()
      .regex(/^[\w\/]*$/)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'PostgreSQL service timezone',
        example: 'Europe/Helsinki',
        title: 'timezone',
      }),
    track_io_timing: z
      .enum(['off', 'on'])
      .exactOptional()
      .openapi({
        description:
          'Enables timing of database I/O calls. The default is `off`. When on, it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.',
        example: 'off',
        title: 'track_io_timing',
      }),
    'pg_stat_monitor.pgsm_enable_query_plan': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables query plan monitoring. Changing this parameter causes a service restart. Only available for PostgreSQL 13+.',
        example: false,
        title: 'pg_stat_monitor.pgsm_enable_query_plan',
      }),
    max_files_per_process: z
      .int()
      .min(1000)
      .max(4096)
      .exactOptional()
      .openapi({
        description:
          'PostgreSQL maximum number of files that can be open per process. The default is `1000` (upstream default). Changing this parameter causes a service restart.',
        title: 'max_files_per_process',
      }),
    'pg_stat_monitor.pgsm_max_buckets': z
      .int()
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          'Sets the maximum number of buckets. Changing this parameter causes a service restart. Only available for PostgreSQL 13+.',
        example: 10,
        title: 'pg_stat_monitor.pgsm_max_buckets',
      }),
    io_max_concurrency: z
      .int()
      .min(-1)
      .max(1024)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'EXPERIMENTAL: Controls the maximum number of I/O operations that one process can execute simultaneously. Version 18 and up only. Changing this parameter causes a service restart.',
        title: 'io_max_concurrency',
      }),
    wal: z
      .object({
        max_slot_wal_keep_size: z
          .int()
          .min(-1)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'PostgreSQL maximum WAL size (MB) reserved for replication slots. If `-1` is specified, replication slots may retain an unlimited amount of WAL files. The default is `-1` (upstream default). wal_keep_size minimum WAL size setting takes precedence over this.',
            title: 'max_slot_wal_keep_size',
          }),
        max_wal_senders: z
          .int()
          .min(20)
          .max(256)
          .exactOptional()
          .openapi({
            description:
              'PostgreSQL maximum WAL senders. The default is `20`. Changing this parameter causes a service restart.',
            title: 'max_wal_senders',
          }),
        wal_sender_timeout: z
          .int()
          .min(0)
          .max(10800000)
          .exactOptional()
          .openapi({
            description:
              'Terminate replication connections that are inactive for longer than this amount of time, in milliseconds.',
            title: 'A value of 0 disables the timeout. Otherwise between 5000 and 10800000 millis',
          }),
        wal_writer_delay: z
          .int()
          .min(10)
          .max(200)
          .exactOptional()
          .openapi({
            description:
              'WAL flush interval in milliseconds. The default is `200`. Setting this parameter to a lower value may negatively impact performance.',
            example: 50,
            title: 'wal_writer_delay',
          }),
      })
      .exactOptional()
      .openapi({ title: 'Write-ahead log (WAL) settings', required: [] }),
    default_toast_compression: z
      .enum(['lz4', 'pglz'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the default TOAST compression method for values of compressible columns. The default is `lz4`. Only available for PostgreSQL 14+.',
        example: 'lz4',
        title: 'default_toast_compression',
      }),
    deadlock_timeout: z
      .int()
      .min(500)
      .max(1800000)
      .exactOptional()
      .openapi({
        description:
          'This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. The default is `1000` (upstream default).',
        example: 1000,
        title: 'deadlock_timeout',
      }),
    idle_in_transaction_session_timeout: z
      .int()
      .min(0)
      .max(604800000)
      .exactOptional()
      .openapi({
        description: 'Time out sessions with open transactions after this number of milliseconds',
        title: 'idle_in_transaction_session_timeout',
      }),
    max_pred_locks_per_transaction: z
      .int()
      .min(64)
      .max(5120)
      .exactOptional()
      .openapi({
        description:
          'PostgreSQL maximum predicate locks per transaction. The default is `64` (upstream default). Changing this parameter causes a service restart.',
        title: 'max_pred_locks_per_transaction',
      }),
    max_replication_slots: z
      .int()
      .min(8)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'PostgreSQL maximum replication slots. The default is `20`. Changing this parameter causes a service restart.',
        title: 'max_replication_slots',
      }),
    max_sync_workers_per_subscription: z
      .int()
      .min(2)
      .max(8)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of synchronization workers per subscription. The default is `2`.',
        title: 'max_sync_workers_per_subscription',
      }),
    autovacuum: z
      .object({
        log_autovacuum_min_duration: z
          .int()
          .min(-1)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one disables logging autovacuum actions. The default is `1000`.',
            title: 'log_autovacuum_min_duration',
          }),
        autovacuum_vacuum_cost_limit: z
          .int()
          .min(-1)
          .max(10000)
          .exactOptional()
          .openapi({
            description:
              'Specifies the cost limit value that will be used in automatic VACUUM operations. If `-1` is specified, the regular vacuum_cost_limit value will be used. The default is `-1` (upstream default).',
            title: 'autovacuum_vacuum_cost_limit',
          }),
        autovacuum_max_workers: z
          .int()
          .min(1)
          .max(20)
          .exactOptional()
          .openapi({
            description:
              'Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is `3`. Changing this parameter causes a service restart.',
            title: 'autovacuum_max_workers',
          }),
        autovacuum_vacuum_threshold: z
          .int()
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is `50`.',
            title: 'autovacuum_vacuum_threshold',
          }),
        autovacuum_naptime: z
          .int()
          .min(1)
          .max(86400)
          .exactOptional()
          .openapi({
            description:
              'Specifies the minimum delay between autovacuum runs on any given database. The delay is measured in seconds. The default is `60`.',
            title: 'autovacuum_naptime',
          }),
        autovacuum_vacuum_scale_factor: z
          .number()
          .min(0)
          .max(1)
          .exactOptional()
          .openapi({
            description:
              'Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM (e.g. `0.2` for 20% of the table size). The default is `0.2`.',
            title: 'autovacuum_vacuum_scale_factor',
          }),
        autovacuum_vacuum_cost_delay: z
          .int()
          .min(-1)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              'Specifies the cost delay value that will be used in automatic VACUUM operations. If `-1` is specified, the regular vacuum_cost_delay value will be used. The default is `2` (upstream default).',
            title: 'autovacuum_vacuum_cost_delay',
          }),
        autovacuum_analyze_scale_factor: z
          .number()
          .min(0)
          .max(1)
          .exactOptional()
          .openapi({
            description:
              'Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE (e.g. `0.2` for 20% of the table size). The default is `0.2`.',
            title: 'autovacuum_analyze_scale_factor',
          }),
        autovacuum_analyze_threshold: z
          .int()
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. The default is `50`.',
            title: 'autovacuum_analyze_threshold',
          }),
        autovacuum_freeze_max_age: z
          .int()
          .min(200000000)
          .max(1500000000)
          .exactOptional()
          .openapi({
            description:
              "Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. The system launches autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. Changing this parameter causes a service restart.",
            example: 200000000,
            title: 'autovacuum_freeze_max_age',
          }),
      })
      .exactOptional()
      .openapi({ title: 'Autovacuum settings', required: [] }),
    max_parallel_workers_per_gather: z
      .int()
      .min(0)
      .max(96)
      .exactOptional()
      .openapi({
        description:
          'Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. The default is `2` (upstream default).',
        title: 'max_parallel_workers_per_gather',
      }),
    io_combine_limit: z
      .int()
      .min(1)
      .max(32)
      .default(16)
      .exactOptional()
      .openapi({
        description:
          'EXPERIMENTAL: Controls the largest I/O size in operations that combine I/O in 8kB units. Version 17 and up only.',
        title: 'io_combine_limit',
      }),
    password_encryption: z
      .enum(['md5', 'scram-sha-256'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Chooses the algorithm for encrypting passwords.',
        example: 'scram-sha-256',
        title: 'password_encryption',
      }),
    io_workers: z
      .int()
      .min(1)
      .max(32)
      .default(3)
      .exactOptional()
      .openapi({
        description:
          'EXPERIMENTAL: Number of IO worker processes, for io_method=worker. Version 18 and up only. Changing this parameter causes a service restart.',
        title: 'io_max_concurrency',
      }),
    'pg_partman_bgw.interval': z
      .int()
      .min(3600)
      .max(604800)
      .exactOptional()
      .openapi({
        description:
          "Sets the time interval in seconds to run pg_partman's scheduled tasks. The default is `3600`.",
        example: 3600,
        title: 'pg_partman_bgw.interval',
      }),
    log_line_prefix: z
      .enum([
        "'pid=%p,user=%u,db=%d,app=%a,client=%h '",
        "'pid=%p,user=%u,db=%d,app=%a,client=%h,txid=%x,qid=%Q '",
        "'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '",
        "'%m [%p] %q[user=%u,db=%d,app=%a] '",
      ])
      .exactOptional()
      .openapi({
        description: 'Choose from one of the available log formats.',
        title: 'log_line_prefix',
      }),
    log_temp_files: z
      .int()
      .min(-1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'Log statements for each temporary file created larger than this number of kilobytes, -1 disables',
        title: 'log_temp_files',
      }),
    max_locks_per_transaction: z
      .int()
      .min(64)
      .max(6400)
      .exactOptional()
      .openapi({
        description:
          'PostgreSQL maximum locks per transaction. Changing this parameter causes a service restart.',
        title: 'max_locks_per_transaction',
      }),
    track_commit_timestamp: z
      .enum(['off', 'on'])
      .exactOptional()
      .openapi({
        description:
          'Record commit time of transactions. Changing this parameter causes a service restart.',
        example: 'off',
        title: 'track_commit_timestamp',
      }),
    track_functions: z
      .enum(['all', 'pl', 'none'])
      .exactOptional()
      .openapi({
        description: 'Enables tracking of function call counts and time used.',
        title: 'track_functions',
      }),
    io_max_combine_limit: z
      .int()
      .min(1)
      .max(128)
      .default(16)
      .exactOptional()
      .openapi({
        description:
          'EXPERIMENTAL: Controls the largest I/O size in operations that combine I/O in 8kB units, and silently limits the user-settable parameter io_combine_limit. Version 18 and up only. Changing this parameter causes a service restart.',
        title: 'io_max_combine_limit',
      }),
    io_method: z
      .enum(['worker', 'sync', 'io_uring'])
      .default('worker')
      .exactOptional()
      .openapi({
        description:
          'EXPERIMENTAL: Controls the maximum number of I/O operations that one process can execute simultaneously. Version 18 and up only. Changing this parameter causes a service restart.',
        title: 'io_method',
      }),
    max_stack_depth: z
      .int()
      .min(2097152)
      .max(6291456)
      .exactOptional()
      .openapi({
        description:
          'Maximum depth of the stack in bytes. The default is `2097152` (upstream default).',
        title: 'max_stack_depth',
      }),
    max_parallel_workers: z
      .int()
      .min(0)
      .max(96)
      .exactOptional()
      .openapi({
        description:
          'Sets the maximum number of workers that the system can support for parallel queries. The default is `8` (upstream default).',
        title: 'max_parallel_workers',
      }),
    'pg_partman_bgw.role': z
      .string()
      .regex(/^[_A-Za-z0-9][-._A-Za-z0-9]{0,63}$/)
      .max(64)
      .exactOptional()
      .openapi({
        description: "Controls which role to use for pg_partman's scheduled background tasks.",
        example: 'myrolename',
        title: 'pg_partman_bgw.role',
      }),
    max_logical_replication_workers: z
      .int()
      .min(4)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers). The default is `4` (upstream default). Changing this parameter causes a service restart.',
        title: 'max_logical_replication_workers',
      }),
    max_prepared_transactions: z
      .int()
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'PostgreSQL maximum prepared transactions. The default is `0`. Changing this parameter causes a service restart.',
        title: 'max_prepared_transactions',
      }),
    max_worker_processes: z
      .int()
      .min(8)
      .max(288)
      .exactOptional()
      .openapi({
        description:
          'Sets the maximum number of background processes that the system can support. The default is `8`. Changing this parameter causes a service restart.',
        title: 'max_worker_processes',
      }),
    'pg_stat_statements.track': z
      .enum(['all', 'top', 'none'])
      .exactOptional()
      .openapi({
        description:
          'Controls which statements are counted. Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default is `top`.',
        title: 'pg_stat_statements.track',
      }),
    temp_file_limit: z
      .int()
      .min(-1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description: 'PostgreSQL temporary file limit in KiB, -1 for unlimited',
        example: 5000000,
        title: 'temp_file_limit',
      }),
    log_error_verbosity: z
      .enum(['TERSE', 'DEFAULT', 'VERBOSE'])
      .exactOptional()
      .openapi({
        description:
          'Controls the amount of detail written in the server log for each message that is logged.',
        title: 'log_error_verbosity',
      }),
    log_min_duration_statement: z
      .int()
      .min(-1)
      .max(86400000)
      .exactOptional()
      .openapi({
        description:
          'Log statements that take more than this number of milliseconds to run, -1 disables',
        title: 'log_min_duration_statement',
      }),
    max_standby_streaming_delay: z
      .int()
      .min(1)
      .max(43200000)
      .exactOptional()
      .openapi({
        description:
          'Max standby streaming delay in milliseconds. The default is `30000` (upstream default).',
        title: 'max_standby_streaming_delay',
      }),
    jit: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Controls system-wide use of Just-in-Time Compilation (JIT).',
        example: true,
        title: 'jit',
      }),
    max_standby_archive_delay: z
      .int()
      .min(1)
      .max(43200000)
      .exactOptional()
      .openapi({
        description:
          'Max standby archive delay in milliseconds. The default is `30000` (upstream default).',
        title: 'max_standby_archive_delay',
      }),
    'bg-writer': z
      .object({
        bgwriter_delay: z
          .int()
          .min(10)
          .max(10000)
          .exactOptional()
          .openapi({
            description:
              'Specifies the delay between activity rounds for the background writer in milliseconds. The default is `200`.',
            example: 200,
            title: 'bgwriter_delay',
          }),
        bgwriter_flush_after: z
          .int()
          .min(0)
          .max(2048)
          .exactOptional()
          .openapi({
            description:
              'Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. Specified in kilobytes. Setting of 0 disables forced writeback. The default is `512`.',
            example: 512,
            title: 'bgwriter_flush_after',
          }),
        bgwriter_lru_maxpages: z
          .int()
          .min(0)
          .max(1073741823)
          .exactOptional()
          .openapi({
            description:
              'In each round, no more than this many buffers will be written by the background writer. Setting this to zero disables background writing. The default is `100`.',
            example: 100,
            title: 'bgwriter_lru_maxpages',
          }),
        bgwriter_lru_multiplier: z
          .number()
          .min(0)
          .max(10)
          .exactOptional()
          .openapi({
            description:
              'The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is `2.0`.',
            example: 2,
            title: 'bgwriter_lru_multiplier',
          }),
      })
      .exactOptional()
      .openapi({ title: 'Background (BG) writer settings', required: [] }),
  })
  .openapi({ title: 'postgresql.conf configuration values', required: [] })
  .openapi('JsonSchemaPg')

const DnsDomainSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ readOnly: true, 'x-go-findable': '1', description: 'DNS domain ID' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'DNS domain creation date' }),
    'unicode-name': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ 'x-go-findable': '2', description: 'DNS domain unicode name' }),
  })
  .openapi({ description: 'DNS domain', required: [] })
  .openapi('DnsDomain')

const SksKubeconfigRequestSchema = z
  .object({
    ttl: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Validity in seconds of the Kubeconfig user certificate (default: 30 days)',
      }),
    user: z
      .string()
      .openapi({
        description:
          'User name in the generated Kubeconfig. The certificate present in the Kubeconfig will also have this name set for the CN field.',
      }),
    groups: z
      .array(z.string())
      .openapi({
        description:
          'List of roles. The certificate present in the Kubeconfig will have these roles set in the Org field.',
      }),
  })
  .openapi({ required: ['user', 'groups'], description: 'Kubeconfig request for a SKS cluster' })
  .openapi('SksKubeconfigRequest')

const JsonSchemaMysqlSchema = z
  .strictObject({
    net_write_timeout: z
      .int()
      .min(1)
      .max(3600)
      .exactOptional()
      .openapi({
        description:
          'The number of seconds to wait for a block to be written to a connection before aborting the write.',
        example: 30,
        title: 'net_write_timeout',
      }),
    internal_tmp_mem_storage_engine: z
      .enum(['TempTable', 'MEMORY'])
      .exactOptional()
      .openapi({
        description: 'The storage engine for in-memory internal temporary tables.',
        example: 'TempTable',
        title: 'internal_tmp_mem_storage_engine',
      }),
    sql_mode: z
      .string()
      .regex(/^[A-Z_]*(,[A-Z_]+)*$/)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          'Global SQL mode. Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned.',
        example: 'ANSI,TRADITIONAL',
        title: 'sql_mode',
      }),
    information_schema_stats_expiry: z
      .int()
      .min(900)
      .max(31536000)
      .exactOptional()
      .openapi({
        description: 'The time, in seconds, before cached statistics expire',
        example: 86400,
        title: 'information_schema_stats_expiry',
      }),
    sort_buffer_size: z
      .int()
      .min(32768)
      .max(1073741824)
      .exactOptional()
      .openapi({
        description:
          'Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K)',
        example: 262144,
        title: 'sort_buffer_size',
      }),
    innodb_thread_concurrency: z
      .int()
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit)',
        example: 10,
        title: 'innodb_thread_concurrency',
      }),
    innodb_write_io_threads: z
      .int()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.',
        example: 10,
        title: 'innodb_write_io_threads',
      }),
    innodb_ft_min_token_size: z
      .int()
      .min(0)
      .max(16)
      .exactOptional()
      .openapi({
        description:
          'Minimum length of words that are stored in an InnoDB FULLTEXT index. Changing this parameter will lead to a restart of the MySQL service.',
        example: 3,
        title: 'innodb_ft_min_token_size',
      }),
    innodb_change_buffer_max_size: z
      .int()
      .min(0)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25',
        example: 30,
        title: 'innodb_change_buffer_max_size',
      }),
    innodb_flush_neighbors: z
      .int()
      .min(0)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent',
        example: 0,
        title: 'innodb_flush_neighbors',
      }),
    tmp_table_size: z
      .int()
      .min(1048576)
      .max(1073741824)
      .exactOptional()
      .openapi({
        description:
          'Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M)',
        example: 16777216,
        title: 'tmp_table_size',
      }),
    slow_query_log: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table. Default is off',
        example: true,
        title: 'slow_query_log',
      }),
    connect_timeout: z
      .int()
      .min(2)
      .max(3600)
      .exactOptional()
      .openapi({
        description:
          'The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake',
        example: 10,
        title: 'connect_timeout',
      }),
    log_output: z
      .enum(['INSIGHTS', 'INSIGHTS,TABLE', 'NONE', 'TABLE'])
      .exactOptional()
      .openapi({
        description:
          'The slow log output destination when slow_query_log is ON. To enable MySQL AI Insights, choose INSIGHTS. To use MySQL AI Insights and the mysql.slow_log table at the same time, choose INSIGHTS,TABLE. To only use the mysql.slow_log table, choose TABLE. To silence slow logs, choose NONE.',
        example: 'INSIGHTS',
        title: 'log_output',
      }),
    net_read_timeout: z
      .int()
      .min(1)
      .max(3600)
      .exactOptional()
      .openapi({
        description:
          'The number of seconds to wait for more data from a connection before aborting the read.',
        example: 30,
        title: 'net_read_timeout',
      }),
    innodb_lock_wait_timeout: z
      .int()
      .min(1)
      .max(3600)
      .exactOptional()
      .openapi({
        description:
          'The length of time in seconds an InnoDB transaction waits for a row lock before giving up. Default is 120.',
        example: 50,
        title: 'innodb_lock_wait_timeout',
      }),
    wait_timeout: z
      .int()
      .min(1)
      .max(2147483)
      .exactOptional()
      .openapi({
        description:
          'The number of seconds the server waits for activity on a noninteractive connection before closing it.',
        example: 28800,
        title: 'wait_timeout',
      }),
    innodb_rollback_on_timeout: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. Changing this parameter will lead to a restart of the MySQL service.',
        example: true,
        title: 'innodb_rollback_on_timeout',
      }),
    group_concat_max_len: z
      .int()
      .min(4)
      .max(18446744073709552000)
      .exactOptional()
      .openapi({
        description:
          'The maximum permitted result length in bytes for the GROUP_CONCAT() function.',
        example: 1024,
        title: 'group_concat_max_len',
      }),
    net_buffer_length: z
      .int()
      .min(1024)
      .max(1048576)
      .exactOptional()
      .openapi({
        description:
          'Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.',
        example: 16384,
        title: 'net_buffer_length',
      }),
    innodb_print_all_deadlocks: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.',
        example: true,
        title: 'innodb_print_all_deadlocks',
      }),
    innodb_online_alter_log_max_size: z
      .int()
      .min(65536)
      .max(1099511627776)
      .exactOptional()
      .openapi({
        description:
          'The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.',
        example: 134217728,
        title: 'innodb_online_alter_log_max_size',
      }),
    interactive_timeout: z
      .int()
      .min(30)
      .max(604800)
      .exactOptional()
      .openapi({
        description:
          'The number of seconds the server waits for activity on an interactive connection before closing it.',
        example: 3600,
        title: 'interactive_timeout',
      }),
    innodb_log_buffer_size: z
      .int()
      .min(1048576)
      .max(4294967295)
      .exactOptional()
      .openapi({
        description:
          'The size in bytes of the buffer that InnoDB uses to write to the log files on disk.',
        example: 16777216,
        title: 'innodb_log_buffer_size',
      }),
    max_allowed_packet: z
      .int()
      .min(102400)
      .max(1073741824)
      .exactOptional()
      .openapi({
        description:
          'Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M)',
        example: 67108864,
        title: 'max_allowed_packet',
      }),
    max_heap_table_size: z
      .int()
      .min(1048576)
      .max(1073741824)
      .exactOptional()
      .openapi({
        description:
          'Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M)',
        example: 16777216,
        title: 'max_heap_table_size',
      }),
    innodb_ft_server_stopword_table: z
      .string()
      .regex(/^.+\/.+$/)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables.',
        example: 'db_name/table_name',
        title: 'innodb_ft_server_stopword_table',
      }),
    innodb_read_io_threads: z
      .int()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.',
        example: 10,
        title: 'innodb_read_io_threads',
      }),
    sql_require_primary_key: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them.',
        example: true,
        title: 'sql_require_primary_key',
      }),
    default_time_zone: z
      .string()
      .regex(/^([-+][\d:]*|[\w\/]*)$/)
      .min(2)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          "Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default.",
        example: '+03:00',
        title: 'default_time_zone',
      }),
    long_query_time: z
      .number()
      .min(0)
      .max(3600)
      .exactOptional()
      .openapi({
        description:
          'The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. Default is 10s',
        example: 10,
        title: 'long_query_time',
      }),
  })
  .openapi({ title: 'mysql.conf configuration values', required: [] })
  .openapi('JsonSchemaMysql')

const DbaasPgDatabaseNameSchema = z.string().min(1).max(63).openapi('DbaasPgDatabaseName')

const DbaasPgTargetVersionsSchema = z
  .enum(['14', '17', '15', '18', '13', '16'])
  .openapi('DbaasPgTargetVersions')

const ZoneNameSchema = z
  .enum([
    'ch-dk-2',
    'de-muc-1',
    'ch-gva-2',
    'at-vie-1',
    'de-fra-1',
    'bg-sof-1',
    'at-vie-2',
    'hr-zag-1',
  ])
  .openapi('ZoneName')

const InstanceTypeSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Instance type ID' }),
    size: z
      .enum([
        'large',
        'huge',
        'jumbo',
        'medium',
        'mega',
        'small',
        'extra-large',
        'titan48c',
        'titan',
        'micro',
        'colossus',
        'tiny',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance type size' }),
    family: z
      .enum([
        'gpu3',
        'gpua30',
        'gpu3080ti',
        'gpu2',
        'gpu',
        'memory',
        'gpua5000',
        'gpub300',
        'gpurtx6000pro',
        'storage',
        'standard',
        'colossus',
        'cpu',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance type family' }),
    cpus: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description: 'CPU count',
      }),
    gpus: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description: 'GPU count',
      }),
    authorized: z
      .boolean()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Requires authorization or publicly available' }),
    memory: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        readOnly: true,
        description: 'Available memory',
      }),
    zones: z
      .array(ZoneNameSchema)
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance Type available zones' }),
  })
  .openapi({ description: 'Compute instance type', required: [] })
  .openapi('InstanceType')

const JsonSchemaPgbouncerSchema = z
  .object({
    min_pool_size: z
      .int()
      .min(0)
      .max(10000)
      .default(0)
      .exactOptional()
      .openapi({
        example: 0,
        title:
          'Add more server connections to pool if below this number. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.',
      }),
    ignore_startup_parameters: z
      .array(z.enum(['extra_float_digits', 'search_path']))
      .max(32)
      .exactOptional()
      .openapi({
        example: ['extra_float_digits', 'search_path'],
        title: 'List of parameters to ignore when given in startup packet',
      }),
    server_lifetime: z
      .int()
      .min(60)
      .max(86400)
      .default(3600)
      .exactOptional()
      .openapi({
        example: 3600,
        title:
          'The pooler will close an unused server connection that has been connected longer than this. [seconds]',
      }),
    autodb_pool_mode: z
      .enum(['transaction', 'session', 'statement'])
      .default('transaction')
      .exactOptional()
      .openapi({ example: 'session', title: 'PGBouncer pool mode' }),
    server_idle_timeout: z
      .int()
      .min(0)
      .max(86400)
      .default(600)
      .exactOptional()
      .openapi({
        example: 600,
        title:
          'If a server connection has been idle more than this many seconds it will be dropped. If 0 then timeout is disabled. [seconds]',
      }),
    autodb_max_db_connections: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        example: 0,
        title:
          'Do not allow more than this many server connections per database (regardless of user). Setting it to 0 means unlimited.',
      }),
    max_prepared_statements: z
      .int()
      .min(0)
      .max(3000)
      .default(100)
      .exactOptional()
      .openapi({
        example: 100,
        title:
          'PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value. Setting it to 0 disables prepared statements. max_prepared_statements defaults to 100, and its maximum is 3000.',
      }),
    server_reset_query_always: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        example: false,
        title: 'Run server_reset_query (DISCARD ALL) in all pooling modes',
      }),
    autodb_pool_size: z
      .int()
      .min(0)
      .max(10000)
      .default(0)
      .exactOptional()
      .openapi({
        example: 0,
        title:
          "If non-zero then create automatically a pool of that size per user when a pool doesn't exist.",
      }),
    autodb_idle_timeout: z
      .int()
      .min(0)
      .max(86400)
      .default(3600)
      .exactOptional()
      .openapi({
        example: 3600,
        title:
          'If the automatically created database pools have been unused this many seconds, they are freed. If 0 then timeout is disabled. [seconds]',
      }),
  })
  .openapi({
    description: 'System-wide settings for pgbouncer.',
    title: 'PGBouncer connection pooling settings',
    required: [],
  })
  .openapi('JsonSchemaPgbouncer')

const DbaasMysqlDatabaseNameSchema = z.string().min(1).max(64).openapi('DbaasMysqlDatabaseName')

const DbaasServiceMysqlSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        uri: z.array(z.string()).exactOptional(),
        params: z.array(z.record(z.string(), z.string())).exactOptional(),
        standby: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'MySQL connection information properties', required: [] }),
    'backup-schedule': z
      .object({
        'backup-hour': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(23n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 23,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.',
          }),
        'backup-minute': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(59n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 59,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Backup schedule', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    databases: z
      .array(DbaasMysqlDatabaseNameSchema)
      .exactOptional()
      .openapi({ description: 'List of MySQL databases' }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    'mysql-settings': JsonSchemaMysqlSchema.exactOptional().openapi({
      description: 'MySQL-specific settings',
    }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    version: z.string().exactOptional().openapi({ description: 'MySQL version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    users: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            username: z.string().exactOptional(),
            password: z.string().exactOptional(),
            authentication: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of service users' }),
    'binlog-retention-period': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description:
          'The minimum amount of time in seconds to keep binlog entries before deletion. This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.',
      }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServiceMysql')

const JsonSchemaKafkaRestSchema = z
  .strictObject({
    producer_compression_type: z
      .enum(['gzip', 'snappy', 'lz4', 'zstd', 'none'])
      .exactOptional()
      .openapi({
        description:
          "Specify the default compression type for producers. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'none' which is the default and equivalent to no compression.",
        title: 'producer.compression.type',
      }),
    name_strategy_validation: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If true, validate that given schema is registered under expected subject name by the used name strategy when producing messages.',
        title: 'name.strategy.validation',
      }),
    name_strategy: z
      .enum(['topic_name', 'record_name', 'topic_record_name'])
      .default('topic_name')
      .exactOptional()
      .openapi({
        description: 'Name strategy to use when selecting subject for storing schemas',
        title: 'name.strategy',
      }),
    consumer_enable_auto_commit: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "If true the consumer's offset will be periodically committed to Kafka in the background",
        title: 'consumer.enable.auto.commit',
      }),
    producer_acks: z
      .enum(['all', '-1', '0', '1'])
      .default('1')
      .exactOptional()
      .openapi({
        description:
          "The number of acknowledgments the producer requires the leader to have received before considering a request complete. If set to 'all' or '-1', the leader will wait for the full set of in-sync replicas to acknowledge the record.",
        title: 'producer.acks',
      }),
    consumer_request_max_bytes: z
      .int()
      .min(0)
      .max(671088640)
      .default(67108864)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of bytes in unencoded message keys and values by a single request',
        title: 'consumer.request.max.bytes',
      }),
    producer_max_request_size: z
      .int()
      .min(0)
      .max(2147483647)
      .default(1048576)
      .exactOptional()
      .openapi({
        description:
          'The maximum size of a request in bytes. Note that Kafka broker can also cap the record batch size.',
        title: 'producer.max.request.size',
      }),
    simpleconsumer_pool_size_max: z
      .int()
      .min(10)
      .max(250)
      .default(25)
      .exactOptional()
      .openapi({
        description: 'Maximum number of SimpleConsumers that can be instantiated per broker',
        title: 'simpleconsumer.pool.size.max',
      }),
    producer_linger_ms: z
      .int()
      .min(0)
      .max(5000)
      .default(0)
      .exactOptional()
      .openapi({
        description: 'Wait for up to the given delay to allow batching records together',
        title: 'producer.linger.ms',
      }),
    consumer_request_timeout_ms: z
      .union([z.literal(1000), z.literal(15000), z.literal(30000)])
      .default(1000)
      .exactOptional()
      .openapi({
        description:
          'The maximum total time to wait for messages for a request if the maximum number of messages has not yet been reached',
        title: 'consumer.request.timeout.ms',
      }),
  })
  .openapi({ title: 'Kafka REST configuration', required: [] })
  .openapi('JsonSchemaKafkaRest')

const EnumKafkaAuthMethodSchema = z.enum(['certificate', 'sasl']).openapi('EnumKafkaAuthMethod')

const DbaasServiceKafkaSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'authentication-methods': z
      .object({
        certificate: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether certificate/SSL authentication is enabled' }),
        sasl: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether SASL authentication is enabled' }),
      })
      .exactOptional()
      .openapi({ description: 'Kafka authentication methods', required: [] }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        nodes: z.array(z.string()).exactOptional(),
        'access-cert': z.string().exactOptional(),
        'access-key': z.string().exactOptional(),
        'connect-uri': z.string().exactOptional(),
        'rest-uri': z.string().exactOptional(),
        'registry-uri': z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Kafka connection information properties', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'kafka-rest-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Kafka REST is enabled' }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    'kafka-connect-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Kafka Connect is enabled' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
      }),
    'schema-registry-settings': JsonSchemaSchemaRegistrySchema.exactOptional().openapi({
      description: 'Schema Registry configuration',
    }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'kafka-rest-settings': JsonSchemaKafkaRestSchema.exactOptional().openapi({
      description: 'Kafka REST configuration',
    }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    'kafka-connect-settings': JsonSchemaKafkaConnectSchema.exactOptional().openapi({
      description: 'Kafka Connect configuration values',
    }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            'kafka-authentication-method': EnumKafkaAuthMethodSchema.exactOptional().openapi({
              description:
                "Kafka authentication method. This is a value specific to the 'kafka' service component",
            }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'kafka-settings': JsonSchemaKafkaSchema.exactOptional().openapi({
      description: 'Kafka-specific settings',
    }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    'schema-registry-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Schema-Registry is enabled' }),
    version: z.string().exactOptional().openapi({ description: 'Kafka version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    users: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            username: z.string().exactOptional(),
            password: z.string().exactOptional(),
            'access-cert': z.string().exactOptional(),
            'access-cert-expiry': z.iso.datetime({ offset: true }).exactOptional(),
            'access-key': z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of service users' }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServiceKafka')

const RouteSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Route ID' }),
    kind: z.enum(['Subnet', 'Vpc']).exactOptional().openapi({ description: 'Route kind' }),
    description: z.string().max(4096).exactOptional().openapi({ description: 'Route description' }),
    destination: z.string().exactOptional().openapi({ description: 'Route destination CIDR' }),
    target: z.string().exactOptional().openapi({ description: 'Route target' }),
  })
  .openapi({ description: 'Route', required: [] })
  .openapi('Route')

const JsonSchemaValkeySchema = z
  .object({
    ssl: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ title: 'Require SSL to access Valkey' }),
    lfu_log_factor: z
      .int()
      .min(0)
      .max(100)
      .default(10)
      .exactOptional()
      .openapi({
        title: 'Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies',
      }),
    frequent_snapshots: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when `valkey_persistence` is set to `off`.',
        title: 'Frequent RDB snapshots',
      }),
    maxmemory_policy: z
      .enum([
        'noeviction',
        'allkeys-lru',
        'volatile-lru',
        'allkeys-random',
        'volatile-random',
        'volatile-ttl',
        'volatile-lfu',
        'allkeys-lfu',
      ])
      .nullable()
      .default('noeviction')
      .exactOptional()
      .openapi({ title: 'Valkey maxmemory-policy' }),
    io_threads: z
      .int()
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({
        description:
          'Set Valkey IO thread count. Changing this will cause a restart of the Valkey service.',
        example: 1,
        title: 'Valkey IO thread count',
      }),
    lfu_decay_time: z
      .int()
      .min(1)
      .max(120)
      .default(1)
      .exactOptional()
      .openapi({ title: 'LFU maxmemory-policy counter decay time in minutes' }),
    pubsub_client_output_buffer_limit: z
      .int()
      .min(32)
      .max(512)
      .exactOptional()
      .openapi({
        description:
          'Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.',
        example: 64,
        title: 'Pub/sub client output buffer hard limit in MB',
      }),
    active_expire_effort: z
      .int()
      .min(1)
      .max(10)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.',
        title: 'Active expire effort',
      }),
    notify_keyspace_events: z
      .string()
      .regex(/^[KEg\$lshzxentdmA]*$/)
      .max(32)
      .default('')
      .exactOptional()
      .openapi({ title: 'Set notify-keyspace-events option' }),
    persistence: z
      .enum(['off', 'rdb'])
      .exactOptional()
      .openapi({
        description:
          "When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.",
        title: 'Valkey persistence',
      }),
    timeout: z
      .int()
      .min(0)
      .max(31536000)
      .default(300)
      .exactOptional()
      .openapi({ title: 'Valkey idle connection timeout in seconds' }),
    acl_channels_default: z
      .enum(['allchannels', 'resetchannels'])
      .exactOptional()
      .openapi({
        description:
          "Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.",
        title: 'Default ACL for pub/sub channels used when Valkey user is created',
      }),
    number_of_databases: z
      .int()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Set number of Valkey databases. Changing this will cause a restart of the Valkey service.',
        example: 16,
        title: 'Number of Valkey databases',
      }),
  })
  .openapi({ title: 'Valkey settings', required: [] })
  .openapi('JsonSchemaValkey')

const DbaasEndpointExternalPrometheusOutputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'External integration endpoint name' }),
    type: EnumExternalEndpointTypesSchema.exactOptional().openapi({
      description: 'External integration endpoint type',
    }),
    id: z.uuid().exactOptional().openapi({ description: 'External integration endpoint id' }),
    settings: z
      .object({
        'basic-auth-username': z
          .string()
          .regex(/^[a-z0-9\-@_]{5,32}$/)
          .min(5)
          .max(32)
          .exactOptional()
          .openapi({ description: 'Prometheus basic authentication username' }),
      })
      .exactOptional()
      .openapi({ description: 'External integration Prometheus configuration', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointExternalPrometheusOutput')

const DbaasUserPasswordSchema = z.string().min(8).max(256).openapi('DbaasUserPassword')

const KeyRotationConfigSchema = z
  .object({
    'manual-count': z
      .int()
      .openapi({
        description:
          "Total running tally of manual key rotation tasks executed by users over this key resource's lifecycle.",
      }),
    automatic: z
      .boolean()
      .openapi({
        description:
          'When set to true, dictates that the system automatically rotates material periodically.',
      }),
    'rotation-period': z
      .int()
      .openapi({
        description:
          'The set frequency period (measured in days) for triggers monitoring auto-rotation loops.',
      }),
    'next-at': z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Scheduled deadline calculation pinpointing the next automated rotational iteration target date.',
      }),
  })
  .openapi({ required: ['manual-count', 'automatic', 'rotation-period', 'next-at'] })
  .openapi('KeyRotationConfig')

const DisableKmsKeyRotationResponseSchema = z
  .object({ rotation: KeyRotationConfigSchema })
  .openapi({ required: ['rotation'] })
  .openapi('DisableKmsKeyRotationResponse')

const DbaasClickhouseRolePrivilegeSchema = z
  .object({
    name: DbaasUserUsernameSchema.openapi({ description: 'Access type' }),
    database: z.string().exactOptional().openapi({ description: 'Database' }),
    table: z.string().exactOptional().openapi({ description: 'Table' }),
    'grant-option': z.boolean().exactOptional(),
    column: z.string().exactOptional().openapi({ description: 'Column' }),
    'is-partial-revoke': z.boolean().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('DbaasClickhouseRolePrivilege')

const ReplicaFailureSchema = z
  .object({
    'attempted-watermark': z
      .int()
      .openapi({
        description: 'The target sync sequence watermark that triggered the replication failure.',
      }),
    error: z
      .string()
      .openapi({
        description:
          'A descriptive message containing error logs or system details regarding the sync failure.',
      }),
    'failed-at': z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The UTC timestamp showing exactly when the replication sync window failed.',
      }),
  })
  .openapi({ required: ['attempted-watermark', 'error', 'failed-at'] })
  .openapi('ReplicaFailure')

const EnvMetadataEntrySchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'Value' }),
    amount: z.number().exactOptional().openapi({ description: 'Amount' }),
    unit: z.string().exactOptional().openapi({ description: 'Unit' }),
  })
  .openapi({ required: [] })
  .openapi('EnvMetadataEntry')

const EnvProductSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'Value' }),
    metadata: z.array(EnvMetadataEntrySchema).exactOptional().openapi({ description: 'Metadata' }),
    impacts: z.array(EnvImpactIndicatorSchema).exactOptional().openapi({ description: 'Impacts' }),
  })
  .openapi({ required: [] })
  .openapi('EnvProduct')

const QuotaSchema = z
  .object({
    resource: z.string().exactOptional().openapi({ description: 'Resource Name' }),
    usage: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Resource Usage' }),
    limit: z
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
        description: 'Resource Limit. -1 for Unlimited',
      }),
  })
  .openapi({ description: 'Organization Quota', required: [] })
  .openapi('Quota')

const SksAuditInitialBackoffSchema = z.string().min(1).max(10).openapi('SksAuditInitialBackoff')

const DbaasPgPoolNameSchema = z.string().min(1).max(63).openapi('DbaasPgPoolName')

const EnumDatadogSiteSchema = z
  .enum([
    'us3.datadoghq.com',
    'ddog-gov.com',
    'datadoghq.eu',
    'us5.datadoghq.com',
    'ap1.datadoghq.com',
    'datadoghq.com',
  ])
  .openapi('EnumDatadogSite')

const SksNodepoolTaintSchema = z
  .object({
    value: z.string().min(1).max(255).openapi({ description: 'Nodepool taint value' }),
    effect: z
      .enum(['NoExecute', 'NoSchedule', 'PreferNoSchedule'])
      .openapi({ description: 'Nodepool taint effect' }),
  })
  .openapi({ required: ['value', 'effect'], description: 'Nodepool taint' })
  .openapi('SksNodepoolTaint')

const DeployTargetSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Deploy Target ID' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Deploy Target name' }),
    type: z
      .enum(['edge', 'dedicated'])
      .exactOptional()
      .openapi({ description: 'Deploy Target type' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Deploy Target description' }),
  })
  .openapi({ required: ['id'], description: 'Deploy target' })
  .openapi('DeployTarget')

const RevisionStampSchema = z
  .object({
    at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp recording exactly when this specific revision iteration occurred.',
      }),
    seq: z
      .int()
      .min(0)
      .openapi({
        description:
          'Monotonically increasing sequencing value utilized for optimistic concurrency control locks.',
      }),
  })
  .openapi({ required: ['at', 'seq'] })
  .openapi('RevisionStamp')

const TemplateSchema = z
  .object({
    'application-consistent-snapshot-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Template with Qemu Guest Agent installed for application consistent snapshot',
      }),
    maintainer: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Template maintainer' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Template description' }),
    'ssh-key-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable SSH key-based login' }),
    family: z.string().exactOptional().openapi({ readOnly: true, description: 'Template family' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Template name' }),
    'default-user': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Template default user' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Template size',
      }),
    'password-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable password-based login' }),
    build: z.string().exactOptional().openapi({ readOnly: true, description: 'Template build' }),
    checksum: z.string().exactOptional().openapi({ description: 'Template MD5 checksum' }),
    'boot-mode': z
      .enum(['legacy', 'uefi'])
      .exactOptional()
      .openapi({ description: 'Boot mode (default: legacy)' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Template ID' }),
    zones: z.array(ZoneNameSchema).exactOptional().openapi({ description: 'Zones availability' }),
    url: z.string().exactOptional().openapi({ description: 'Template source URL' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Template version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Template creation date' }),
    visibility: z
      .enum(['private', 'public'])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Template visibility' }),
  })
  .openapi({ description: 'Instance template', required: [] })
  .openapi('Template')

const SshKeySchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ 'x-go-findable': '1', description: 'SSH key name' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, 'x-go-findable': '2', description: 'SSH key fingerprint' }),
  })
  .openapi({ description: 'SSH key', required: [] })
  .openapi('SshKey')

const SnapshotRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Snapshot ID' }) })
  .openapi({ description: 'Snapshot reference', required: [] })
  .openapi('SnapshotRef')

const InstanceSchema = z
  .object({
    'application-consistent-snapshot-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the instance will take application-consistent snapshots',
      }),
    'anti-affinity-groups': z
      .array(AntiAffinityGroupRefSchema)
      .exactOptional()
      .openapi({ description: 'Instance Anti-affinity Groups' }),
    'public-ip-assignment': PublicIpAssignmentSchema.exactOptional().openapi({
      description: 'Instance public IP assignment',
    }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
    'security-groups': z
      .array(SecurityGroupRefSchema)
      .exactOptional()
      .openapi({ description: 'Instance Security Groups' }),
    'elastic-ips': z
      .array(ElasticIpRefSchema)
      .exactOptional()
      .openapi({ description: 'Instance Elastic IPs' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Instance name' }),
    'instance-type': InstanceTypeSchema.exactOptional().openapi({ description: 'Instance Type' }),
    'private-networks': z
      .array(
        z
          .object({
            id: z.uuid().exactOptional().openapi({ description: 'Private Network ID' }),
            'mac-address': z
              .string()
              .exactOptional()
              .openapi({ description: 'Private Network MAC address' }),
          })
          .openapi({ description: 'Private Network', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Instance Private Networks' }),
    template: TemplateSchema.exactOptional().openapi({ description: 'Instance Template' }),
    state: InstanceStateSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Instance state',
    }),
    'secureboot-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the instance has secure boot enabled' }),
    'ssh-key': SshKeySchema.exactOptional().openapi({ description: 'Instance SSH Key' }),
    'user-data': z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Instance Cloud-init user-data (base64 encoded)' }),
    'mac-address': z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance MAC address' }),
    manager: ManagerSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Instance manager',
    }),
    'tpm-enabled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the instance has tpm enabled' }),
    'deploy-target': DeployTargetRefSchema.exactOptional().openapi({
      description: 'Instance Deploy Target',
    }),
    'ipv6-address': z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance IPv6 address' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Instance ID' }),
    snapshots: z
      .array(SnapshotRefSchema)
      .exactOptional()
      .openapi({ description: 'Instance Snapshots' }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(10n).max(51200n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 10,
        maximum: 51200,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Instance disk size in GiB',
      }),
    'disk-encrypted': z
      .boolean()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Indicates if the root volume of the instance is encrypted',
      }),
    'ssh-keys': z.array(SshKeySchema).exactOptional().openapi({ description: 'Instance SSH Keys' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance creation date' }),
    'public-ip': z
      .ipv4()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Instance public IPv4 address' }),
  })
  .openapi({ description: 'Instance', required: [] })
  .openapi('Instance')

const SnapshotSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Snapshot ID' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Snapshot name' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Snapshot creation date' }),
    state: z
      .enum(['snapshotting', 'deleted', 'exporting', 'ready', 'deleting', 'error', 'exported'])
      .exactOptional()
      .openapi({ description: 'Snapshot state' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(10n).max(51200n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 10,
        maximum: 51200,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        readOnly: true,
        description: 'Snapshot size in GiB',
      }),
    export: z
      .object({
        'presigned-url': z
          .string()
          .exactOptional()
          .openapi({ description: 'Exported snapshot disk file pre-signed URL' }),
        md5sum: z
          .string()
          .exactOptional()
          .openapi({ description: 'Exported snapshot disk file MD5 checksum' }),
      })
      .exactOptional()
      .openapi({ description: 'Exported snapshot information', required: [] }),
    instance: InstanceSchema.exactOptional().openapi({
      description: 'Compute Instance snapshotted',
    }),
    'application-consistent': z
      .boolean()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Indicates whether the snapshot was taken using an application-consistent method',
      }),
  })
  .openapi({ description: 'Snapshot', required: [] })
  .openapi('Snapshot')

const DbaasClickhouseGrantedRoleSchema = z
  .object({
    name: z.string().openapi({ description: 'Granted role name' }),
    uuid: z.string().exactOptional(),
    'is-default': z.boolean().exactOptional(),
    'with-admin-option': z.boolean().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('DbaasClickhouseGrantedRole')

const DbaasClickhouseRoleSchema = z
  .object({
    name: DbaasUserUsernameSchema.openapi({ description: 'Role name' }),
    uuid: z.string().exactOptional(),
    privileges: z.array(DbaasClickhouseRolePrivilegeSchema).exactOptional(),
    'granted-roles': z.array(DbaasClickhouseGrantedRoleSchema).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('DbaasClickhouseRole')

const DbaasClickhouseRolesSchema = z
  .object({ roles: z.array(DbaasClickhouseRoleSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DbaasClickhouseRoles')

const ListVpcEntrySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'VPC ID' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'VPC name' }),
    description: z.string().max(4096).exactOptional().openapi({ description: 'VPC description' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'VPC creation date' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
  })
  .openapi({ description: 'VPC', required: [] })
  .openapi('ListVpcEntry')

const DbaasEndpointRsyslogSecretsSchema = z
  .object({
    ca: z
      .string()
      .max(16384)
      .exactOptional()
      .openapi({ description: 'PEM encoded CA certificate' }),
    cert: z
      .string()
      .max(16384)
      .exactOptional()
      .openapi({ description: 'PEM encoded client certificate' }),
    key: z.string().max(16384).exactOptional().openapi({ description: 'PEM encoded client key' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointRsyslogSecrets')

const DbaasUserKafkaSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'Kafka username' }),
    password: z.string().exactOptional().openapi({ description: 'Kafka password' }),
    'access-cert': z.string().exactOptional().openapi({ description: 'Kafka certificate' }),
    'access-cert-expiry': z.iso.datetime({ offset: true }).exactOptional(),
    'access-key': z.string().exactOptional().openapi({ description: 'Kafka access key' }),
  })
  .openapi({ description: 'Kafka User secrets', required: [] })
  .openapi('DbaasUserKafkaSecrets')

const DbaasEndpointPrometheusSecretsSchema = z
  .object({
    'basic-auth-password': z
      .string()
      .min(8)
      .max(64)
      .exactOptional()
      .openapi({ description: 'Prometheus basic authentication password' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointPrometheusSecrets')

const EventSchema: z.ZodType<EventType> = z
  .object({
    'iam-user': UserSchema.exactOptional().openapi({ description: 'Details about the IAM User' }),
    'request-id': z
      .string()
      .exactOptional()
      .openapi({ description: 'Operation unique identifier' }),
    'iam-role': IamRoleSchema.exactOptional().openapi({
      description: 'Details about the IAM Role',
    }),
    zone: z.string().exactOptional().openapi({ description: 'Operation targeted zone' }),
    'get-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Query string parameters (free form map)' }),
    'body-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Body parameters (free form map)' }),
    status: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Operation HTTP status',
      }),
    'source-ip': z.string().exactOptional().openapi({ description: 'Client IP address' }),
    'iam-api-key': IamApiKeySchema.exactOptional().openapi({
      description: 'Details about the IAM API Key',
    }),
    uri: z.string().exactOptional().openapi({ description: 'Operation request URI' }),
    'elapsed-ms': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Operation processing time',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time at which the event happened, millisecond resolution' }),
    'path-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'URI path parameters (free form map)' }),
    handler: z.string().exactOptional().openapi({ description: 'Operation handler name' }),
    message: z.string().exactOptional().openapi({ description: 'Operation message' }),
  })
  .openapi({
    description: 'A notable Mutation Event which happened on the infrastructure',
    required: [],
  })
  .openapi('Event')

const ImpactBreakdownSchema = z
  .object({
    impact: z.record(z.string(), ImpactValueWithUnitSchema),
    zones: z.record(z.string(), ZoneImpactSchema),
  })
  .openapi({ required: ['impact', 'zones'] })
  .openapi('ImpactBreakdown')

const DbaasKafkaSchemaRegistryAclEntrySchema = z
  .object({
    id: DbaasKafkaAclIdSchema.exactOptional().openapi({ description: 'Kafka ACL ID' }),
    username: z
      .string()
      .min(1)
      .max(64)
      .openapi({ description: 'Kafka username or username pattern' }),
    resource: z
      .string()
      .min(1)
      .max(249)
      .openapi({ description: 'Kafka Schema Registry name or pattern' }),
    permission: z
      .enum(['schema_registry_read', 'schema_registry_write'])
      .openapi({ description: 'Kafka Schema Registry permission' }),
  })
  .openapi({ required: ['username', 'resource', 'permission'] })
  .openapi('DbaasKafkaSchemaRegistryAclEntry')

const EnumMysqlAuthenticationPluginSchema = z
  .enum(['caching_sha2_password', 'mysql_native_password'])
  .openapi('EnumMysqlAuthenticationPlugin')

const GenerateDataKeyResponseSchema = z
  .object({
    plaintext: z
      .string()
      .openapi({
        description:
          'The Base64-encoded raw symmetric data key payload. Expose only securely during active application setups.',
      }),
    ciphertext: z
      .string()
      .openapi({
        description:
          'The identical symmetric data key, returned safely wrapped/encrypted using the designated root parent KMS key.',
      }),
  })
  .openapi({ required: ['plaintext', 'ciphertext'] })
  .openapi('GenerateDataKeyResponse')

const AccessKeyOperationSchema = z
  .object({
    operation: z.string().exactOptional().openapi({ description: 'Name of the operation' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags associated with the operation' }),
  })
  .openapi({ description: 'Access key operation', required: [] })
  .openapi('AccessKeyOperation')

const RevealAiApiKeyResponseSchema = z
  .object({ value: z.string().openapi({ description: 'Plaintext AI API key value' }) })
  .openapi({ description: 'Reveal AI API key response', required: ['value'] })
  .openapi('RevealAiApiKeyResponse')

const AccessKeySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'IAM Access Key name' }),
    key: z.string().exactOptional().openapi({ description: 'IAM Access Key' }),
    secret: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'IAM Access Key Secret' }),
    type: z
      .enum(['restricted', 'unrestricted'])
      .exactOptional()
      .openapi({ readOnly: true, description: 'IAM Access Key type' }),
    version: z
      .enum(['v2', 'v1'])
      .exactOptional()
      .openapi({ description: 'IAM Access Key version' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'IAM Access Key tags' }),
    operations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IAM Access Key operations' }),
    resources: z
      .array(AccessKeyResourceSchema)
      .exactOptional()
      .openapi({ description: 'IAM Access Key Resources' }),
  })
  .openapi({ description: 'IAM Access Key', required: [] })
  .openapi('AccessKey')

const DbaasClickhouseUserRoleSchema = z
  .object({
    default: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    uuid: z.uuid().exactOptional(),
    'with-admin-option': z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbaasClickhouseUserRole')

const ListAiApiKeysResponseSchema = z
  .object({ 'ai-api-keys': z.array(ListAiApiKeysResponseEntrySchema) })
  .openapi({
    description: 'List of AI API keys',
    example: {
      'ai-api-keys': [
        {
          'updated-at': '2026-03-25T10:00:00Z',
          name: 'default-public-key',
          scope: 'public',
          id: '11111111-1111-1111-1111-111111111111',
          'org-uuid': '22222222-2222-2222-2222-222222222222',
          'created-at': '2026-03-25T10:00:00Z',
        },
      ],
    },
    required: ['ai-api-keys'],
  })
  .openapi('ListAiApiKeysResponse')

const DbaasClickhouseUserAclConfigSchema = z
  .object({
    username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
    uuid: z.uuid().exactOptional(),
    roles: z.array(DbaasClickhouseUserRoleSchema).exactOptional(),
    privileges: z.array(DbaasClickhouseUserPrivilegeSchema).exactOptional(),
  })
  .openapi({ required: ['username'] })
  .openapi('DbaasClickhouseUserAclConfig')

const InstanceTypeEntrySchema = z
  .object({
    family: z.string().openapi({ description: 'GPU family name' }),
    authorized: z
      .boolean()
      .openapi({
        description: 'Whether this instance type is authorized based on server availability',
      }),
  })
  .openapi({
    description: 'Instance type with authorization status',
    required: ['family', 'authorized'],
  })
  .openapi('InstanceTypeEntry')

const ListAiInstanceTypesResponseSchema = z
  .object({ 'instance-types': z.array(InstanceTypeEntrySchema) })
  .openapi({
    description: 'List of available instance types with authorization status',
    required: ['instance-types'],
  })
  .openapi('ListAiInstanceTypesResponse')

const DbaasEndpointOpensearchSecretsSchema = z
  .object({
    ca: z
      .string()
      .max(16384)
      .exactOptional()
      .openapi({ description: 'PEM encoded CA certificate' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointOpensearchSecrets')

const ErrorResponseSchema = z
  .object({
    type: z
      .string()
      .openapi({
        description:
          'An absolute or relative URI reference pointing to human-readable documentation concerning the specific problem type encountered.',
      }),
    title: z
      .string()
      .openapi({
        description:
          'A brief summary defining the class of failure, optimal for quick user interface groupings.',
      }),
    status: z.int().min(100).max(599),
    detail: z
      .string()
      .openapi({
        description:
          'A highly contextual, readable explanation breaking down explicitly what triggered this error scenario.',
      }),
  })
  .openapi({
    description: 'RFC 9457 Problem Details error response',
    required: ['type', 'title', 'status', 'detail'],
  })
  .openapi('ErrorResponse')

const JsonSchemaPglookoutSchema = z
  .object({
    max_failover_replication_time_lag: z
      .int()
      .min(10)
      .max(9223372036854776000)
      .default(60)
      .exactOptional()
      .openapi({
        description:
          'Number of seconds of master unavailability before triggering database failover to standby',
        title: 'Max Failover Replication Time Lag',
      }),
  })
  .openapi({
    description: 'System-wide settings for pglookout.',
    title: 'PGLookout settings',
    required: [],
  })
  .openapi('JsonSchemaPglookout')

const DbaasEndpointOpensearchInputUpdateSchema = z
  .object({
    settings: z
      .object({
        ca: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded CA certificate' }),
        url: z
          .string()
          .min(12)
          .max(2048)
          .exactOptional()
          .openapi({ description: 'OpenSearch connection URL' }),
        'index-prefix': z
          .string()
          .regex(/^[a-z0-9][a-z0-9-_.]+$/)
          .min(1)
          .max(1000)
          .exactOptional()
          .openapi({ description: 'OpenSearch index prefix' }),
        'index-days-max': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(10000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 10000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Maximum number of days of logs to keep',
          }),
        timeout: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(10n).max(120n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 10,
            maximum: 120,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'OpenSearch request timeout limit',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointOpensearchInputUpdate')

const SuccessResponseSchema = z
  .object({
    status: z.enum(['success', 'target-registered', 'already-applied']).default('success'),
  })
  .openapi({ required: ['status'] })
  .openapi('SuccessResponse')

const OrgConsumptionQuotaResponseSchema = z
  .object({
    'quota-uom-per-minute': z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Per-org Unit Of Measurement (UOM) consumption quota (UOM/min). Null means unlimited. UOM represents weighted units across different AI workloads (e.g., tokens for LLMs, minutes for TTS, pages for OCR).',
      }),
  })
  .openapi({
    description: 'Per-org Unit Of Measurement (UOM) consumption quota response',
    required: [],
  })
  .openapi('OrgConsumptionQuotaResponse')

const SksAuditUpdateSchema = z
  .object({
    endpoint: SksAuditEndpointSchema.exactOptional().openapi({
      description: 'Target Webserver URL',
    }),
    'bearer-token': SksAuditBearerTokenSchema.exactOptional().openapi({
      description: 'Bearer token',
    }),
    'initial-backoff': SksAuditInitialBackoffSchema.exactOptional().openapi({
      description: "Initial backoff (default '10s')",
    }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or Disable Kubernetes Audit' }),
  })
  .openapi({ description: 'Kubernetes Audit parameters', required: [] })
  .openapi('SksAuditUpdate')

const UpdateDeploymentRequestSchema = z
  .object({
    'inference-engine-version': InferenceEngineVersionSchema.exactOptional(),
    name: z.string().min(1).exactOptional().openapi({ description: 'Deployment name' }),
    'inference-engine-parameters': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional extra inference engine server CLI args' }),
  })
  .openapi({ description: 'Update AI deployment', required: [] })
  .openapi('UpdateDeploymentRequest')

const DbaasKafkaAclsSchema = z
  .object({
    'topic-acl': z.array(DbaasKafkaTopicAclEntrySchema).exactOptional(),
    'schema-registry-acl': z.array(DbaasKafkaSchemaRegistryAclEntrySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbaasKafkaAcls')

const RateLimitedSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'The error message' }),
    retry_after: z
      .number()
      .exactOptional()
      .openapi({ description: 'The time in seconds to wait before the next request' }),
  })
  .openapi({ description: 'Rate Limit', required: [] })
  .openapi('RateLimited')

const DbaasDatabaseNameSchema = z.string().min(1).max(40).openapi('DbaasDatabaseName')

const EnumPgPoolModeSchema = z
  .enum(['transaction', 'statement', 'session'])
  .openapi('EnumPgPoolMode')

const DbaasPgPoolUsernameSchema = z.string().min(1).max(64).openapi('DbaasPgPoolUsername')

const JsonSchemaTimescaledbSchema = z
  .object({
    max_background_workers: z
      .int()
      .min(1)
      .max(4096)
      .default(16)
      .exactOptional()
      .openapi({
        description:
          'The number of background workers for timescaledb operations. You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time. Changing this parameter causes a service restart.',
        example: 8,
        title: 'timescaledb.max_background_workers',
      }),
  })
  .openapi({
    description: 'System-wide settings for the timescaledb extension',
    title: 'TimescaleDB extension configuration values',
    required: [],
  })
  .openapi('JsonSchemaTimescaledb')

const EnumPgSynchronousReplicationSchema = z
  .enum(['quorum', 'off'])
  .openapi('EnumPgSynchronousReplication')

const DbaasServicePgSchema = z
  .object({
    'pgbouncer-settings': JsonSchemaPgbouncerSchema.exactOptional().openapi({
      description: 'PGBouncer connection pooling settings',
    }),
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        uri: z.array(z.string()).exactOptional(),
        params: z.array(z.record(z.string(), z.string())).exactOptional(),
        standby: z.array(z.string()).exactOptional(),
        syncing: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'PG connection information properties', required: [] }),
    'backup-schedule': z
      .object({
        'backup-hour': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(23n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 23,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.',
          }),
        'backup-minute': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(59n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 59,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Backup schedule', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    'connection-pools': z
      .array(
        z
          .object({
            'connection-uri': z.string().openapi({ description: 'Connection URI for the DB pool' }),
            database: DbaasDatabaseNameSchema.openapi({ description: 'Service database name' }),
            mode: EnumPgPoolModeSchema.openapi({ description: 'PGBouncer pool mode' }),
            name: DbaasPgPoolNameSchema.openapi({ description: 'Connection pool name' }),
            size: DbaasPgPoolSizeSchema.openapi({
              description: "Size of PGBouncer's PostgreSQL side connection pool",
            }),
            username: DbaasPgPoolUsernameSchema.openapi({ description: 'Pool username' }),
          })
          .openapi({
            required: ['connection-uri', 'database', 'mode', 'name', 'size', 'username'],
          }),
      )
      .exactOptional()
      .openapi({ description: 'PostgreSQL PGBouncer connection pools' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'timescaledb-settings': JsonSchemaTimescaledbSchema.exactOptional().openapi({
      description: 'TimescaleDB extension configuration values',
    }),
    databases: z
      .array(DbaasDatabaseNameSchema)
      .exactOptional()
      .openapi({ description: 'List of PostgreSQL databases' }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    'pgaudit-settings': JsonSchemaPgauditSchema.exactOptional().openapi({
      description: 'PGAudit settings',
    }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    'synchronous-replication': EnumPgSynchronousReplicationSchema.exactOptional().openapi({
      description:
        'Synchronous replication type. Note that the service plan also needs to support synchronous replication.',
    }),
    'pglookout-settings': JsonSchemaPglookoutSchema.exactOptional().openapi({
      description: 'PGLookout settings',
    }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    version: z.string().exactOptional().openapi({ description: 'PostgreSQL version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    'work-mem': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1024n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1024,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description:
          'Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. Default is 1MB + 0.075% of total RAM (up to 32MB).',
      }),
    'shared-buffers-percentage': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(20n).max(60n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 20,
        maximum: 60,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description:
          'Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value.',
      }),
    'pg-settings': JsonSchemaPgSchema.exactOptional().openapi({
      description: 'PostgreSQL-specific settings',
    }),
    'max-connections': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description: 'Maximum number of connections allowed to an instance',
      }),
    users: z
      .array(
        z
          .object({
            type: z.string().openapi({ description: 'Account type' }),
            username: z.string().openapi({ description: 'Account username' }),
            password: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Account password. A missing field indicates a user overridden password.',
              }),
            'allow-replication': z.boolean().exactOptional(),
          })
          .openapi({ required: ['type', 'username'], description: 'List of service users' }),
      )
      .exactOptional()
      .openapi({ description: 'List of service users' }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServicePg')

const EncryptRequestSchema = z
  .object({
    'encryption-context': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Base64-encoded bytes to be used as the Additional Authenticated Data (AAD) for encryption integrity.',
      }),
    plaintext: z
      .string()
      .openapi({ description: 'The Base64-encoded plaintext data you wish to encrypt.' }),
  })
  .openapi({ required: ['plaintext'] })
  .openapi('EncryptRequest')

const EnvImpactReportSchema = z
  .object({
    metadata: z.array(EnvMetadataEntrySchema).exactOptional().openapi({ description: 'Metadata' }),
    products: z.array(EnvProductSchema).exactOptional().openapi({ description: 'Products' }),
  })
  .openapi({ required: [] })
  .openapi('EnvImpactReport')

const SksOidcSchema = z
  .object({
    'client-id': z.string().min(1).max(255).openapi({ description: 'OpenID client ID' }),
    'issuer-url': z.string().min(1).max(255).openapi({ description: 'OpenID provider URL' }),
    'username-claim': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'JWT claim to use as the user name' }),
    'username-prefix': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Prefix prepended to username claims' }),
    'groups-claim': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: "JWT claim to use as the user's group" }),
    'groups-prefix': z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Prefix prepended to group claims' }),
    'required-claim': z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A key value map that describes a required claim in the ID Token' }),
  })
  .openapi({ required: ['client-id', 'issuer-url'], description: 'SKS Cluster OpenID config map' })
  .openapi('SksOidc')

const DbaasTaskSchema = z
  .object({
    id: z.uuid().exactOptional(),
    'create-time': z.iso.datetime({ offset: true }).exactOptional(),
    result: z.string().exactOptional(),
    'result-codes': z
      .array(
        z
          .object({ code: z.string().exactOptional(), dbname: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    success: z.boolean().exactOptional(),
    'task-type': z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbaasTask')

const DbaasEndpointRsyslogOptionalFieldsSchema = z
  .object({
    server: z
      .string()
      .min(4)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Rsyslog server IP address or hostname' }),
    port: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(65535n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 65535,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Rsyslog server port',
      }),
    tls: z.boolean().exactOptional().openapi({ description: 'Require TLS' }),
    format: EnumRsyslogFormatSchema.exactOptional().openapi({ description: 'Message format' }),
    logline: z
      .string()
      .regex(/^[ -~\t]+$/)
      .min(1)
      .max(512)
      .exactOptional()
      .openapi({ description: 'Custom syslog message format' }),
    sd: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({ description: 'Structured data block for log message' }),
    'max-message-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(2048n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 2048,
        maximum: 2147483647,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Rsyslog max message size',
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointRsyslogOptionalFields')

const OperationSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Operation ID' }),
    reason: z
      .enum([
        'incorrect',
        'unknown',
        'unavailable',
        'forbidden',
        'busy',
        'fault',
        'partial',
        'not-found',
        'interrupted',
        'unsupported',
        'conflict',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Operation failure reason' }),
    reference: z
      .object({
        id: z.uuid().exactOptional().openapi({ description: 'Reference ID' }),
        link: z
          .string()
          .exactOptional()
          .openapi({ readOnly: true, description: 'Link to the referenced resource' }),
        command: z.string().exactOptional().openapi({ description: 'Command name' }),
      })
      .exactOptional()
      .openapi({ description: 'Related resource reference', readOnly: true, required: [] }),
    message: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Operation message' }),
    state: z
      .enum(['failure', 'pending', 'success', 'timeout'])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Operation status' }),
  })
  .openapi({ description: 'Operation', required: [] })
  .openapi('Operation')

const IamApiKeyCreatedSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'IAM API Key name' }),
    key: z.string().exactOptional().openapi({ description: 'IAM API Key' }),
    secret: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'IAM API Key Secret' }),
    'role-id': z.uuid().exactOptional().openapi({ description: 'IAM API Key Role ID' }),
  })
  .openapi({ description: 'IAM API Key', required: [] })
  .openapi('IamApiKeyCreated')

const GetDeploymentResponseSchema = z
  .object({
    'gpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', minimum: 1, description: 'Number of GPUs' }),
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Update time', readOnly: true }),
    'deployment-url': z.string().openapi({ description: 'Deployment inference endpoint URL' }),
    'service-level': z.string().min(1).exactOptional().openapi({ description: 'Service level' }),
    'inference-engine-version': InferenceEngineVersionSchema.exactOptional(),
    name: z.string().min(1).openapi({ description: 'Deployment name' }),
    state: z
      .enum(['ready', 'creating', 'preparing', 'error', 'deploying', 'scaling', 'updating'])
      .openapi({ description: 'Deployment state' }),
    'gpu-type': z.string().min(1).exactOptional().openapi({ description: 'GPU type family' }),
    id: z.uuid().exactOptional().openapi({ description: 'Deployment ID', readOnly: true }),
    replicas: z
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
        description: 'Number of replicas (>=0)',
      }),
    'state-details': z
      .string()
      .exactOptional()
      .openapi({ description: 'Deployment state details' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation time', readOnly: true }),
    visibility: z
      .enum(['public', 'private'])
      .openapi({
        description:
          "Deployment visibility: private for your organization's deployments, public for Exoscale Managed Inference deployments.",
      }),
    'inference-engine-parameters': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional extra inference engine server CLI args' }),
    model: ModelRefSchema,
  })
  .openapi({
    description: 'AI deployment',
    required: ['name', 'state', 'deployment-url', 'model', 'visibility'],
  })
  .openapi('GetDeploymentResponse')

const ListRouteEntrySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Route ID' }),
    kind: z.enum(['Subnet', 'Vpc']).exactOptional().openapi({ description: 'Route kind' }),
    description: z.string().max(4096).exactOptional().openapi({ description: 'Route description' }),
    destination: z.string().exactOptional().openapi({ description: 'Route destination CIDR' }),
    target: z.string().exactOptional().openapi({ description: 'Route target' }),
  })
  .openapi({ description: 'Route', required: [] })
  .openapi('ListRouteEntry')

const LiveBalanceSchema = z
  .object({
    balance: z
      .number()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Organization live balance' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Organization currency' }),
  })
  .openapi({ description: 'Live balance', required: [] })
  .openapi('LiveBalance')

const ReplicaStateSchema = z
  .object({
    zone: z
      .string()
      .openapi({
        description: 'The destination target zone tracking this specific replica instance.',
      }),
    'last-applied-watermark': z
      .int()
      .openapi({
        description:
          'The latest logical sequence number or state watermark successfully synced to this regional replica.',
      }),
    'last-failure': ReplicaFailureSchema.exactOptional(),
  })
  .openapi({ required: ['zone', 'last-applied-watermark'] })
  .openapi('ReplicaState')

const ReverseDnsRecordSchema = z
  .object({ 'domain-name': DomainNameSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ReverseDnsRecord')

const EnumMigrationStatusSchema = z
  .enum(['running', 'syncing', 'failed', 'done'])
  .openapi('EnumMigrationStatus')

const DbaasMigrationStatusSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message in case that migration has failed' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'Migration method. Empty in case of multiple methods or error' }),
    status: z.string().exactOptional().openapi({ description: 'Migration status' }),
    details: z
      .array(
        z
          .object({
            dbname: z.string().exactOptional().openapi({ description: 'Migrated db name' }),
            error: z
              .string()
              .exactOptional()
              .openapi({ description: 'Error message in case that migration has failed' }),
            method: z.string().exactOptional().openapi({ description: 'Migration method' }),
            status: EnumMigrationStatusSchema.exactOptional().openapi({
              description: 'Migration status',
            }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Migration status per database' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasMigrationStatus')

const ReEncryptResponseSchema = z
  .object({
    ciphertext: z
      .string()
      .openapi({
        description:
          'The new Base64-encoded ciphertext block safely wrapped by the chosen destination key parameters.',
      }),
  })
  .openapi({ required: ['ciphertext'] })
  .openapi('ReEncryptResponse')

const DecryptRequestSchema = z
  .object({
    'encryption-context': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The exact Base64-encoded Additional Authenticated Data (AAD) used during encryption to verify data integrity.',
      }),
    ciphertext: z
      .string()
      .openapi({ description: 'The Base64-encoded ciphertext payload to be decrypted.' }),
  })
  .openapi({ required: ['ciphertext'] })
  .openapi('DecryptRequest')

const UpdateAiApiKeyRequestSchema = z
  .object({
    name: z
      .string()
      .regex(/^[A-Za-z0-9](?:[A-Za-z0-9 _'()-]*[A-Za-z0-9])?$/)
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'Human-readable name for the AI API key' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description: "Key scope: 'public' for all deployments, or a specific deployment UUID",
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description: 'Request to update an AI API key (at least one property required)',
    required: [],
  })
  .openapi('UpdateAiApiKeyRequest')

const DbaasServiceThanosSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        'query-frontend-uri': z.string().exactOptional(),
        'query-uri': z.string().exactOptional(),
        'receiver-remote-write-uri': z.string().exactOptional(),
        'ruler-uri': z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Thanos connection information properties', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            ssl: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether the endpoint is encrypted or accepts plaintext.\n             By default endpoints are always encrypted and\n             this property is only included for service components that may disable encryption.',
              }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    'thanos-settings': JsonSchemaThanosSchema.exactOptional().openapi({
      description: 'Thanos specific settings',
    }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    users: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            username: z.string().exactOptional(),
            password: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of service users' }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServiceThanos')

const DbaasEndpointElasticsearchSchema = z
  .object({
    url: z.string().min(12).max(2048).openapi({ description: 'Elasticsearch connection URL' }),
    'index-prefix': z
      .string()
      .regex(/^[a-z0-9][a-z0-9-_.]+$/)
      .min(1)
      .max(1000)
      .openapi({ description: 'Elasticsearch index prefix' }),
    'index-days-max': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(10000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 10000,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Maximum number of days of logs to keep',
      }),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(10n).max(120n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 10,
        maximum: 120,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Elasticsearch request timeout limit',
      }),
  })
  .openapi({ required: ['url', 'index-prefix'] })
  .openapi('DbaasEndpointElasticsearch')

const DbaasClickhouseUserRoleInputSchema = z
  .object({ uuid: z.uuid().openapi({ description: 'Role UUID' }) })
  .openapi({ required: ['uuid'] })
  .openapi('DbaasClickhouseUserRoleInput')

const DecryptResponseSchema = z
  .object({
    plaintext: z
      .string()
      .openapi({ description: 'The recovered Base64-encoded original plaintext payload.' }),
  })
  .openapi({ required: ['plaintext'] })
  .openapi('DecryptResponse')

const ScheduleKmsKeyDeletionRequestSchema = z
  .object({
    'delay-days': z
      .int()
      .min(7)
      .max(30)
      .default(30)
      .exactOptional()
      .openapi({ description: 'Number of days to wait until deletion is final.' }),
  })
  .openapi({ required: [] })
  .openapi('ScheduleKmsKeyDeletionRequest')

const DbaasDatadogTagSchema = z
  .object({
    comment: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({ description: 'Optional tag explanation' }),
    tag: z.string().min(1).max(200).openapi({ description: 'Tag value' }),
  })
  .openapi({ required: ['tag'] })
  .openapi('DbaasDatadogTag')

const DbaasExternalEndpointDatadogOutputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'External integration endpoint name' }),
    type: EnumExternalEndpointTypesSchema.exactOptional().openapi({
      description: 'External integration endpoint type',
    }),
    id: z.uuid().exactOptional().openapi({ description: 'External integration endpoint id' }),
    settings: z
      .object({
        site: EnumDatadogSiteSchema.exactOptional().openapi({
          description: 'Datadog intake site. Defaults to datadoghq.com',
        }),
        'datadog-tags': z
          .array(DbaasDatadogTagSchema)
          .exactOptional()
          .openapi({ description: 'Custom tags provided by user' }),
        'disable-consumer-stats': z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Disable kafka consumer group metrics. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-check-instances': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(100n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 100,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of separate instances to fetch kafka consumer statistics with. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-stats-timeout': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(2n).max(300n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 2,
            maximum: 300,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of seconds that datadog will wait to get consumer statistics from brokers. Applies only when attached to kafka services.',
          }),
        'max-partition-contexts': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(200n).max(200000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 200,
            maximum: 200000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Maximum number of partition contexts to send. Applies only when attached to kafka services.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'External integration DataDog configuration', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasExternalEndpointDatadogOutput')

const EmptySchema = z
  .looseObject({})
  .openapi({ description: 'An empty map response' })
  .openapi('Empty')

const ListModelsResponseEntrySchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update time', readOnly: true }),
    name: z.string().min(1).openapi({ description: 'Model name' }),
    state: z
      .enum(['ready', 'creating', 'downloading', 'error', 'created'])
      .openapi({ description: 'Model state' }),
    id: z.uuid().openapi({ description: 'Model ID', readOnly: true }),
    'model-size': z
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
        description: 'Model size in bytes',
      }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation time', readOnly: true }),
  })
  .openapi({
    description: 'AI model',
    required: ['id', 'name', 'state', 'model-size', 'created-at', 'updated-at'],
  })
  .openapi('ListModelsResponseEntry')

const ListModelsResponseSchema = z
  .object({ models: z.array(ListModelsResponseEntrySchema) })
  .openapi({ description: 'AI model list', required: ['models'] })
  .openapi('ListModelsResponse')

const InstancePoolRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Instance Pool ID' }) })
  .openapi({ description: 'Target Instance Pool', required: [] })
  .openapi('InstancePoolRef')

const SosBucketUsageSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'SOS Bucket name' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'SOS Bucket creation date' }),
    'zone-name': ZoneNameSchema.exactOptional().openapi({
      readOnly: true,
      description: 'SOS Bucket zone',
    }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        readOnly: true,
        description: 'SOS Bucket size in B',
      }),
  })
  .openapi({ description: 'SOS Bucket usage', required: [] })
  .openapi('SosBucketUsage')

const KubeletImageGcSchema = z
  .object({
    'high-threshold': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', minimum: 0, exclusiveMinimum: false }),
    'low-threshold': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', minimum: 0, exclusiveMinimum: false }),
    'min-age': z.string().exactOptional(),
  })
  .openapi({ description: 'Kubelet image GC options', required: [] })
  .openapi('KubeletImageGc')

const DbaasEndpointDatadogInputCreateSchema = z
  .object({
    settings: z
      .object({
        'datadog-api-key': z
          .string()
          .regex(/^[A-Za-z0-9]{1,256}$/)
          .min(1)
          .max(256)
          .openapi({ description: 'Datadog API key' }),
        site: EnumDatadogSiteSchema.openapi({
          description: 'Datadog intake site. Defaults to datadoghq.com',
        }),
        'datadog-tags': z
          .array(DbaasDatadogTagSchema)
          .exactOptional()
          .openapi({ description: 'Custom tags provided by user' }),
        'disable-consumer-stats': z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Disable kafka consumer group metrics. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-check-instances': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(100n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 100,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of separate instances to fetch kafka consumer statistics with. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-stats-timeout': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(2n).max(300n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 2,
            maximum: 300,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of seconds that datadog will wait to get consumer statistics from brokers. Applies only when attached to kafka services.',
          }),
        'max-partition-contexts': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(200n).max(200000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 200,
            maximum: 200000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Maximum number of partition contexts to send. Applies only when attached to kafka services.',
          }),
      })
      .exactOptional()
      .openapi({ required: ['datadog-api-key', 'site'] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointDatadogInputCreate')

const CreateKmsKeyRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'A human-readable display name uniquely identifying the KMS key within the tenant space.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An optional detailed description providing additional context about the key's intended use case.",
      }),
    usage: z.literal('encrypt-decrypt').default('encrypt-decrypt').exactOptional(),
    'multi-zone': z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'True if this is a multi-zone key.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateKmsKeyRequest')

const DbaasUserMysqlSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'MySQL username' }),
    password: z.string().exactOptional().openapi({ description: 'MySQL password' }),
  })
  .openapi({ description: 'MySQL User secrets', required: [] })
  .openapi('DbaasUserMysqlSecrets')

const ListDeploymentsResponseEntrySchema = z
  .object({
    'gpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', minimum: 1, description: 'Number of GPUs' }),
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Update time', readOnly: true }),
    'deployment-url': z.string().openapi({ description: 'Deployment inference endpoint URL' }),
    'service-level': z.string().min(1).exactOptional().openapi({ description: 'Service level' }),
    name: z.string().min(1).openapi({ description: 'Deployment name' }),
    state: z
      .enum(['ready', 'creating', 'preparing', 'error', 'deploying', 'scaling', 'updating'])
      .openapi({ description: 'Deployment state' }),
    'gpu-type': z.string().min(1).exactOptional().openapi({ description: 'GPU type family' }),
    id: z.uuid().exactOptional().openapi({ description: 'Deployment ID', readOnly: true }),
    replicas: z
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
        description: 'Number of replicas (>=0)',
      }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation time', readOnly: true }),
    visibility: z
      .enum(['public', 'private'])
      .openapi({
        description:
          "Deployment visibility: private for your organization's deployments, public for Exoscale Managed Inference deployments.",
      }),
    model: ModelRefSchema,
  })
  .openapi({
    description: 'AI deployment',
    required: ['name', 'state', 'deployment-url', 'model', 'visibility'],
  })
  .openapi('ListDeploymentsResponseEntry')

const DbaasEndpointElasticsearchSecretsSchema = z
  .object({
    ca: z
      .string()
      .max(16384)
      .exactOptional()
      .openapi({ description: 'PEM encoded CA certificate' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointElasticsearchSecrets')

const NetworkingSchema = z
  .object({
    'cluster-cidr': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CIDR Range for Pods in cluster. This must not overlap with any IP ranges assigned to pods. Max of two, comma-separated, dual-stack CIDRs is allowed.\n              If not specified, defaults to 192.168.0.0/16.',
      }),
    'service-cluster-ip-range': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CIDR range for service cluster IPs. This must not overlap with any IP ranges assigned to nodes or pods. Max of two, comma-separated, dual-stack CIDRs is allowed. The IPv6 range must be no larger than a /108 (upstream Kubernetes apiserver limit).\n              If not specified, defaults to 10.96.0.0/12.',
      }),
    'node-cidr-mask-size-ipv4': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description:
          'Mask size for node cidr in cluster. It must be larger than, and at most 16 bits longer than, the Pod CIDR subnet mask. Defaults to 24',
      }),
    'node-cidr-mask-size-ipv6': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().positive(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: true,
        description:
          'Mask size for node cidr in cluster. It must be larger than, and at most 16 bits longer than, the Pod CIDR subnet mask. Defaults to 64',
      }),
  })
  .openapi({ description: 'EXPERIMENTAL: Cluster networking configuration.', required: [] })
  .openapi('Networking')

const DbaasUserGrafanaSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'Grafana username' }),
    password: z.string().exactOptional().openapi({ description: 'Grafana password' }),
  })
  .openapi({ description: 'Grafana User secrets', required: [] })
  .openapi('DbaasUserGrafanaSecrets')

const SksClusterLabelsSchema = z.record(z.string(), z.string()).openapi('SksClusterLabels')

const SksNodepoolTaintsSchema = z
  .record(z.string(), SksNodepoolTaintSchema)
  .openapi('SksNodepoolTaints')

const SksNodepoolSchema = z
  .object({
    'anti-affinity-groups': z
      .array(AntiAffinityGroupRefSchema)
      .max(8)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Nodepool Anti-affinity Groups' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Nodepool description' }),
    'public-ip-assignment': z
      .enum(['inet4', 'dual'])
      .exactOptional()
      .openapi({
        description:
          'Nodepool public IP assignment of the Instances:\n\n* IPv4 (`inet4`) addressing only;\n* IPv4 and IPv6 (`dual`) addressing.',
      }),
    labels: SksNodepoolLabelsSchema.exactOptional().openapi({ description: 'Nodepool labels' }),
    taints: SksNodepoolTaintsSchema.exactOptional().openapi({ description: 'Nodepool taints' }),
    'security-groups': z
      .array(SecurityGroupRefSchema)
      .max(16)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Nodepool Security Groups' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Nodepool name' }),
    'instance-type': InstanceTypeRefSchema.exactOptional().openapi({
      description: 'Nodepool Instances type',
    }),
    'private-networks': z
      .array(PrivateNetworkRefSchema)
      .max(16)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Nodepool Private Networks' }),
    template: TemplateRefSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Nodepool Instance template',
    }),
    state: z
      .enum([
        'renewing-token',
        'creating',
        'deleting',
        'running',
        'degraded',
        'scaling',
        'updating',
        'error',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Nodepool state' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of instances',
      }),
    'kubelet-image-gc': KubeletImageGcSchema.exactOptional().openapi({
      description: 'Kubelet image GC options',
    }),
    'instance-pool': InstancePoolRefSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Instance Pool managed by the Nodepool',
    }),
    'instance-prefix': z
      .string()
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The instances created by the Nodepool will be prefixed with this value (default: pool)',
      }),
    'deploy-target': DeployTargetRefSchema.exactOptional().openapi({
      description: 'Instance Pool Deploy Target',
    }),
    addons: z
      .array(z.literal('storage-lvm'))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Nodepool addons' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Nodepool ID' }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(20n).max(51200n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 20,
        maximum: 51200,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Nodepool instances disk size in GiB',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Nodepool version' }),
    'nvidia-mig-profiles': NvidiaMigProfilesSchema.exactOptional().openapi({
      description: 'Nvidia MIG Profiles',
    }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Nodepool creation date' }),
  })
  .openapi({ description: 'SKS Nodepool', required: [] })
  .openapi('SksNodepool')

const SksAuditSchema = z
  .object({
    endpoint: SksAuditEndpointSchema.exactOptional().openapi({
      description: 'Target Webserver URL',
    }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }),
    'initial-backoff': SksAuditInitialBackoffSchema.exactOptional().openapi({
      description: "Initial Backoff (default '10s')",
    }),
  })
  .openapi({ description: 'Kubernetes Audit parameters', required: [] })
  .openapi('SksAudit')

const SksClusterSchema = z
  .object({
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Cluster description' }),
    labels: SksClusterLabelsSchema.exactOptional().openapi({ description: 'Cluster labels' }),
    cni: z.enum(['calico', 'cilium']).exactOptional().openapi({ description: 'Cluster CNI' }),
    'auto-upgrade': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable auto upgrade of the control plane to the latest patch version available',
      }),
    oidc: SksOidcSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Cluster OpenID configmap' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Cluster name' }),
    'enable-operators-ca': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to add operators certificate authority (CA) as part of trusted CAs for the API server.',
      }),
    'default-security-group-id': z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Cluster default Security Group ID' }),
    state: z
      .enum([
        'rotating-csi-credentials',
        'rotating-ccm-credentials',
        'creating',
        'upgrading',
        'deleting',
        'running',
        'suspending',
        'updating',
        'error',
        'rotating-karpenter-credentials',
        'resuming',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Cluster state' }),
    'enable-kube-proxy': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether to deploy the Kubernetes network proxy.' }),
    nodepools: z
      .array(SksNodepoolSchema)
      .max(16)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Cluster Nodepools' }),
    level: z.enum(['starter', 'pro']).exactOptional().openapi({ description: 'Cluster level' }),
    'feature-gates': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of Kubernetes-only Alpha features to enable for API server component',
      }),
    addons: z
      .array(
        z.enum([
          'exoscale-cloud-controller',
          'exoscale-container-storage-interface',
          'metrics-server',
          'karpenter',
        ]),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Cluster addons' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Cluster ID' }),
    audit: SksAuditSchema.exactOptional().openapi({ description: 'Kubernetes Audit' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Control plane Kubernetes version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Cluster creation date' }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Cluster endpoint' }),
  })
  .openapi({ description: 'SKS Cluster', required: [] })
  .openapi('SksCluster')

const DbaasValkeyUserSchema = z
  .object({
    username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
    type: z.string().exactOptional(),
    'access-control': DbaasValkeyUserAccessControlSchema.exactOptional(),
  })
  .openapi({ required: ['username'] })
  .openapi('DbaasValkeyUser')

const DbaasValkeyUsersSchema = z
  .object({ users: z.array(DbaasValkeyUserSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DbaasValkeyUsers')

const BlockStorageVolumeRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'Block storage volume ID' }) })
  .openapi({ description: 'Target block storage volume', required: [] })
  .openapi('BlockStorageVolumeRef')

const ScaleDeploymentRequestSchema = z
  .object({
    replicas: z
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
        description: 'Number of replicas (>=0)',
      }),
  })
  .openapi({ description: 'Scale AI deployment', required: ['replicas'] })
  .openapi('ScaleDeploymentRequest')

const DbaasIntegrationTypeSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'The type of the integration.' }),
    'source-description': z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the source service types.' }),
    'source-service-types': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of the source service types the integration supports.' }),
    'dest-description': z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the destination service types.' }),
    'dest-service-types': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of the destination service types the integration supports.',
      }),
    settings: z
      .object({
        properties: z.looseObject({}).exactOptional(),
        additionalProperties: z.boolean().exactOptional(),
        type: z.string().exactOptional(),
        title: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'A JSON schema of additional settings of the integration.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasIntegrationType')

const DbaasEndpointDatadogCommonSchema = z
  .object({
    'datadog-tags': z
      .array(DbaasDatadogTagSchema)
      .exactOptional()
      .openapi({ description: 'Custom tags provided by user' }),
    'disable-consumer-stats': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable kafka consumer group metrics. Applies only when attached to kafka services.',
      }),
    'kafka-consumer-check-instances': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(100n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 100,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description:
          'Number of separate instances to fetch kafka consumer statistics with. Applies only when attached to kafka services.',
      }),
    'kafka-consumer-stats-timeout': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(2n).max(300n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 2,
        maximum: 300,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description:
          'Number of seconds that datadog will wait to get consumer statistics from brokers. Applies only when attached to kafka services.',
      }),
    'max-partition-contexts': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(200n).max(200000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 200,
        maximum: 200000,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description:
          'Maximum number of partition contexts to send. Applies only when attached to kafka services.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointDatadogCommon')

const KeyMaterialSchema = z
  .object({
    version: z
      .int()
      .openapi({
        description:
          'The incremental index tracing internal key rotation cycles for the key material.',
      }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The UTC date-time indicating when this particular generation of physical cryptographic material was seeded.',
      }),
    automatic: z
      .boolean()
      .openapi({
        description:
          'A boolean flag indicating whether this specific material version was created during an automated system rotation window.',
      }),
  })
  .openapi({ required: ['version', 'created-at', 'automatic'] })
  .openapi('KeyMaterial')

const ListKmsKeysResponseEntrySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An optional detailed description providing additional context about the key's intended use case.",
      }),
    rotation: KeyRotationConfigSchema,
    revision: RevisionStampSchema,
    'delete-at': z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().openapi({ description: 'The display name of the KMS key.' }),
    'multi-zone': z.boolean().openapi({ description: 'True if this is a multi-zone key.' }),
    source: z.literal('exoscale-kms'),
    usage: z
      .string()
      .openapi({ description: 'The cryptographic operation constraints allowed on this key.' }),
    status: z.enum(['enabled', 'disabled', 'pending-deletion']),
    'status-since': z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The precise time when the key entered its current configuration phase.',
      }),
    id: z
      .uuid()
      .openapi({ description: 'The globally unique identifier (UUID) tracking this key entity.' }),
    replicas: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array tracking target zones currently maintaining copies of this item.',
      }),
    material: KeyMaterialSchema,
    'origin-zone': z.string().openapi({ description: 'The creation zone of the KMS key.' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The UTC timestamp showing when the KMS key was originally provisioned.',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'usage',
      'source',
      'status',
      'status-since',
      'material',
      'rotation',
      'multi-zone',
      'origin-zone',
      'created-at',
      'revision',
    ],
  })
  .openapi('ListKmsKeysResponseEntry')

const RotateAiApiKeyResponseSchema = z
  .object({ value: z.string().openapi({ description: 'Plaintext AI API key value' }) })
  .openapi({ description: 'Rotate AI API key response', required: ['value'] })
  .openapi('RotateAiApiKeyResponse')

const EnumIntegrationTypesSchema = z
  .enum(['datasource', 'logs', 'metrics'])
  .openapi('EnumIntegrationTypes')

const DbaasIntegrationSettingsDatadogSchema = z
  .object({
    'datadog-dbm-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Database monitoring: view query metrics, explain plans, and execution details. Correlate queries with host metrics.',
      }),
    'datadog-pgbouncer-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Integrate PgBouncer with Datadog to track connection pool metrics and monitor application traffic.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasIntegrationSettingsDatadog')

const DbaasServiceGrafanaSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'DbaaS service description' }),
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        uri: z.string().exactOptional(),
        username: z.string().exactOptional(),
        password: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Grafana connection information properties', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'grafana-settings': JsonSchemaGrafanaSchema.exactOptional().openapi({
      description: 'Grafana specific settings',
    }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    version: z.string().exactOptional().openapi({ description: 'Grafana version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    users: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            username: z.string().exactOptional(),
            password: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of service users' }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServiceGrafana')

const EnumOpensearchRulePermissionSchema = z
  .enum(['admin', 'read', 'deny', 'readwrite', 'write'])
  .openapi('EnumOpensearchRulePermission')

const SecurityGroupSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Security Group ID' }),
    name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Security Group name' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Security Group description' }),
    'external-sources': z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Security Group external sources' }),
    rules: z
      .array(SecurityGroupRuleSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ writeOnly: true, description: 'Security Group rules' }),
  })
  .openapi({ description: 'Security Group', required: [] })
  .openapi('SecurityGroup')

const ZoneSchema = z
  .object({
    name: ZoneNameSchema.exactOptional().openapi({
      readOnly: true,
      'x-go-findable': '1',
      description: 'Zone short name',
    }),
    'api-endpoint': z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        'x-go-type': 'Endpoint',
        'x-go-findable': '2',
        description: 'Zone API endpoint',
      }),
    'sos-endpoint': z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, 'x-go-type': 'Endpoint', description: 'Zone SOS endpoint' }),
  })
  .openapi({ description: 'Zone', required: [] })
  .openapi('Zone')

const DbaasMysqlUserPasswordSchema = z
  .string()
  .regex(/^[a-zA-Z0-9!#%^*_+={}()<>|.,;~?-]+$/)
  .min(8)
  .max(256)
  .openapi('DbaasMysqlUserPassword')

const DbaasOpensearchAclConfigSchema = z
  .object({
    acls: z
      .array(
        z
          .object({
            rules: z
              .array(
                z
                  .object({
                    index: z.string().max(249).openapi({ description: 'OpenSearch index pattern' }),
                    permission: EnumOpensearchRulePermissionSchema.exactOptional().openapi({
                      description: 'OpenSearch permission',
                    }),
                  })
                  .openapi({ required: ['index'] }),
              )
              .exactOptional(),
            username: DbaasUserUsernameSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of OpenSearch ACLs' }),
    'acl-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable OpenSearch ACLs. When disabled authenticated service users have unrestricted access.',
      }),
    'extended-acl-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable to enforce index rules in a limited fashion for requests that use the _mget, _msearch, and _bulk APIs',
      }),
  })
  .openapi({ required: [] })
  .openapi('DbaasOpensearchAclConfig')

const DbaasEndpointDatadogInputUpdateSchema = z
  .object({
    settings: z
      .object({
        'datadog-api-key': z
          .string()
          .regex(/^[A-Za-z0-9]{1,256}$/)
          .min(1)
          .max(256)
          .openapi({ description: 'Datadog API key' }),
        site: EnumDatadogSiteSchema.exactOptional().openapi({
          description: 'Datadog intake site. Defaults to datadoghq.com',
        }),
        'datadog-tags': z
          .array(DbaasDatadogTagSchema)
          .exactOptional()
          .openapi({ description: 'Custom tags provided by user' }),
        'disable-consumer-stats': z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Disable kafka consumer group metrics. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-check-instances': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(100n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 100,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of separate instances to fetch kafka consumer statistics with. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-stats-timeout': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(2n).max(300n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 2,
            maximum: 300,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of seconds that datadog will wait to get consumer statistics from brokers. Applies only when attached to kafka services.',
          }),
        'max-partition-contexts': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(200n).max(200000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 200,
            maximum: 200000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Maximum number of partition contexts to send. Applies only when attached to kafka services.',
          }),
      })
      .exactOptional()
      .openapi({ required: ['datadog-api-key'] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointDatadogInputUpdate')

const IngestMeteringRequestSchema = z
  .object({
    'flush-id': z
      .uuid()
      .openapi({ description: 'UUID identifying this flush; used for idempotent deduplication' }),
    usage: z
      .record(z.string(), ApiKeyUsageEntrySchema)
      .openapi({
        description:
          "Map of api-key-uuid to usage entry. Keys are API key UUIDs. Mirrors the router's in-memory accumulator structure directly.",
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'ISO-8601 UTC timestamp when the flush snapshot was created (truncated to minute boundary for bucketing)',
      }),
    'router-id': z
      .string()
      .min(1)
      .openapi({ description: 'Router instance identifier that produced this flush' }),
  })
  .openapi({
    description:
      "Router flush payload: the router's full in-memory usage map with flush identity fields",
    required: ['flush-id', 'router-id', 'timestamp', 'usage'],
  })
  .openapi('IngestMeteringRequest')

const CreateAiApiKeyRequestSchema = z
  .object({
    name: z
      .string()
      .regex(/^[A-Za-z0-9](?:[A-Za-z0-9 _'()-]*[A-Za-z0-9])?$/)
      .min(1)
      .max(50)
      .openapi({ description: 'Human-readable name for the AI API key' }),
    scope: z
      .string()
      .openapi({
        description: "Key scope: 'public' for all deployments, or a specific deployment UUID",
      }),
  })
  .openapi({ description: 'Request to create a new AI API key', required: ['name', 'scope'] })
  .openapi('CreateAiApiKeyRequest')

const IngestMeteringResponseSchema = z
  .object({
    duplicate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if flush-id was already processed (idempotent retry)' }),
    upserted: z
      .int()
      .openapi({
        description:
          'Number of rows affected (inserted or updated) in usage_minutely; 0 if duplicate flush-id',
      }),
  })
  .openapi({ description: 'Result of a metering ingest operation', required: ['upserted'] })
  .openapi('IngestMeteringResponse')

const DbaasEndpointDatadogSettingsSchema = z
  .object({
    settings: z
      .object({
        site: EnumDatadogSiteSchema.exactOptional().openapi({
          description: 'Datadog intake site. Defaults to datadoghq.com',
        }),
        'datadog-tags': z
          .array(DbaasDatadogTagSchema)
          .exactOptional()
          .openapi({ description: 'Custom tags provided by user' }),
        'disable-consumer-stats': z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Disable kafka consumer group metrics. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-check-instances': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(100n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 100,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of separate instances to fetch kafka consumer statistics with. Applies only when attached to kafka services.',
          }),
        'kafka-consumer-stats-timeout': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(2n).max(300n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 2,
            maximum: 300,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Number of seconds that datadog will wait to get consumer statistics from brokers. Applies only when attached to kafka services.',
          }),
        'max-partition-contexts': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(200n).max(200000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 200,
            maximum: 200000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Maximum number of partition contexts to send. Applies only when attached to kafka services.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'External integration DataDog configuration', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointDatadogSettings')

const JsonSchemaOpensearchSchema = z
  .strictObject({
    thread_pool_search_throttled_size: z
      .int()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.',
        title: 'search_throttled thread pool size',
      }),
    thread_pool_analyze_size: z
      .int()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.',
        title: 'analyze thread pool size',
      }),
    thread_pool_get_size: z
      .int()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.',
        title: 'get thread pool size',
      }),
    thread_pool_get_queue_size: z
      .int()
      .min(10)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'Size for the thread pool queue. See documentation for exact details.',
        title: 'get thread pool queue size',
      }),
    indices_memory_max_index_buffer_size: z
      .int()
      .min(3)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          "Absolute value. Default is unbound. Doesn't work without indices.memory.index_buffer_size. Maximum amount of heap used for query cache, an absolute indices.memory.index_buffer_size maximum hard limit.",
        title: 'indices.memory.max_index_buffer_size',
      }),
    indices_recovery_max_concurrent_file_chunks: z
      .int()
      .min(2)
      .max(5)
      .exactOptional()
      .openapi({
        description: 'Number of file chunks sent in parallel for each recovery. Defaults to 2.',
        title: 'indices.recovery.max_concurrent_file_chunks',
      }),
    indices_queries_cache_size: z
      .int()
      .min(3)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'Percentage value. Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionality.',
        title: 'indices.queries.cache.size',
      }),
    search_backpressure: z
      .strictObject({
        mode: z
          .enum(['monitor_only', 'enforced', 'disabled'])
          .exactOptional()
          .openapi({
            description:
              'The search backpressure mode. Valid values are monitor_only, enforced, or disabled. Default is monitor_only',
            title: 'The search backpressure mode',
          }),
        node_duress: z
          .strictObject({
            cpu_threshold: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The CPU usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.9',
                title:
                  'The CPU usage threshold (as a percentage) required for a node to be considered to be under duress',
              }),
            heap_threshold: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The heap usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.7',
                title:
                  'The heap usage threshold (as a percentage) required for a node to be considered to be under duress',
              }),
            num_successive_breaches: z
              .int()
              .min(1)
              .exactOptional()
              .openapi({
                description:
                  'The number of successive limit breaches after which the node is considered to be under duress. Default is 3',
                title:
                  'The number of successive limit breaches after which the node is considered to be under duress',
              }),
          })
          .exactOptional()
          .openapi({ title: 'Node duress settings', required: [] }),
        search_shard_task: z
          .strictObject({
            total_heap_percent_threshold: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied. Default is 0.5',
                title:
                  'The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied',
              }),
            elapsed_time_millis_threshold: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 30000',
                title:
                  'The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation',
              }),
            cancellation_rate: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of tasks to cancel per millisecond of elapsed time. Default is 0.003',
                title: 'The maximum number of tasks to cancel per millisecond of elapsed time.',
              }),
            heap_variance: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation. Default is 2.0',
                title:
                  'The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation',
              }),
            heap_moving_average_window_size: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage. Default is 100',
                title:
                  'The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage',
              }),
            cancellation_ratio: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of tasks to cancel, as a percentage of successful task completions. Default is 0.1',
                title: 'The maximum number of tasks to cancel',
              }),
            heap_percent_threshold: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation. Default is 0.5',
                title:
                  'The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation',
              }),
            cpu_time_millis_threshold: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 15000',
                title:
                  'The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation',
              }),
            cancellation_burst: z
              .number()
              .min(1)
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 10.0',
                title:
                  'The maximum number of search tasks to cancel in a single iteration of the observer thread',
              }),
          })
          .exactOptional()
          .openapi({ title: 'Search shard settings', required: [] }),
        search_task: z
          .strictObject({
            total_heap_percent_threshold: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied. Default is 0.5',
                title:
                  'The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied',
              }),
            elapsed_time_millis_threshold: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 45000',
                title:
                  'The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation',
              }),
            cancellation_rate: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of search tasks to cancel per millisecond of elapsed time. Default is 0.003',
                title:
                  'The maximum number of search tasks to cancel per millisecond of elapsed time',
              }),
            heap_variance: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The heap usage variance required for an individual parent task before it is considered for cancellation. A task is considered for cancellation when taskHeapUsage is greater than or equal to heapUsageMovingAverage * variance. Default is 2.0',
                title:
                  'The heap usage variance required for an individual parent task before it is considered for cancellation',
              }),
            heap_moving_average_window_size: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The window size used to calculate the rolling average of the heap usage for the completed parent tasks. Default is 10',
                title:
                  'The window size used to calculate the rolling average of the heap usage for the completed parent tasks',
              }),
            cancellation_ratio: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of search tasks to cancel, as a percentage of successful search task completions. Default is 0.1',
                title:
                  'The maximum number of search tasks to cancel, as a percentage of successful search task completions',
              }),
            heap_percent_threshold: z
              .number()
              .min(0)
              .max(1)
              .exactOptional()
              .openapi({
                description:
                  'The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation. Default is 0.2',
                title:
                  'The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation',
              }),
            cpu_time_millis_threshold: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 30000',
                title:
                  'The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation',
              }),
            cancellation_burst: z
              .number()
              .min(1)
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 5.0',
                title:
                  'The maximum number of search tasks to cancel in a single iteration of the observer thread',
              }),
          })
          .exactOptional()
          .openapi({ title: 'Search task settings', required: [] }),
      })
      .exactOptional()
      .openapi({ title: 'Search Backpressure Settings', required: [] }),
    shard_indexing_pressure: z
      .strictObject({
        primary_parameter: z
          .strictObject({
            shard: z
              .strictObject({
                min_limit: z
                  .number()
                  .min(0)
                  .exactOptional()
                  .openapi({
                    description:
                      'Specify the minimum assigned quota for a new shard in any role (coordinator, primary, or replica). Shard indexing backpressure increases or decreases this allocated quota based on the inflow of traffic for the shard. Default is 0.001',
                    title: 'Shard min limit',
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            node: z
              .strictObject({
                soft_limit: z
                  .number()
                  .min(0)
                  .exactOptional()
                  .openapi({
                    description:
                      'Define the percentage of the node-level memory threshold that acts as a soft indicator for strain on a node. Default is 0.7',
                    title: 'Node soft limit',
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ title: 'Primary parameter', required: [] }),
        operating_factor: z
          .strictObject({
            upper: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'Specify the upper occupancy limit of the allocated quota of memory for the shard. If the total memory usage of a shard is above this limit, shard indexing backpressure increases the current allocated memory for that shard. Default is 0.95',
                title: 'Upper occupancy limit of the allocated quota of memory for the shard',
              }),
            optimal: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'Specify the optimal occupancy of the allocated quota of memory for the shard. If the total memory usage of a shard is at this level, shard indexing backpressure doesn’t change the current allocated memory for that shard. Default is 0.85',
                title: 'Optimal occupancy of the allocated quota of memory for the shard',
              }),
            lower: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'Specify the lower occupancy limit of the allocated quota of memory for the shard. If the total memory usage of a shard is below this limit, shard indexing backpressure decreases the current allocated memory for that shard. Default is 0.75',
                title: 'Lower occupancy limit of the allocated quota of memory for the shard',
              }),
          })
          .exactOptional()
          .openapi({ title: 'Operating factor', required: [] }),
        enforced: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Run shard indexing backpressure in shadow mode or enforced mode. In shadow mode (value set as false), shard indexing backpressure tracks all granular-level metrics, but it doesn’t actually reject any indexing requests. In enforced mode (value set as true), shard indexing backpressure rejects any requests to the cluster that might cause a dip in its performance. Default is false',
            title: 'Run shard indexing backpressure in shadow mode or enforced mode',
          }),
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Enable or disable shard indexing backpressure. Default is false',
            title: 'Enable or disable shard indexing backpressure',
          }),
      })
      .exactOptional()
      .openapi({ title: 'Shard indexing back pressure settings', required: [] }),
    knn_memory_circuit_breaker_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable or disable KNN memory circuit breaker. Defaults to true.',
        example: true,
        title: 'knn.memory.circuit_breaker.enabled',
      }),
    thread_pool_search_size: z
      .int()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.',
        title: 'search thread pool size',
      }),
    indices_memory_min_index_buffer_size: z
      .int()
      .min(3)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          "Absolute value. Default is 48mb. Doesn't work without indices.memory.index_buffer_size. Minimum amount of heap used for query cache, an absolute indices.memory.index_buffer_size minimal hard limit.",
        title: 'indices.memory.min_index_buffer_size',
      }),
    indices_recovery_max_bytes_per_sec: z
      .int()
      .min(40)
      .max(400)
      .exactOptional()
      .openapi({
        description:
          'Limits total inbound and outbound recovery traffic for each node. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb',
        title: 'indices.recovery.max_bytes_per_sec',
      }),
    http_max_initial_line_length: z
      .int()
      .min(1024)
      .max(65536)
      .exactOptional()
      .openapi({
        description: 'The max length of an HTTP URL, in bytes',
        example: 4096,
        title: 'http.max_initial_line_length',
      }),
    enable_security_audit: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: true, title: 'Enable/Disable security audit' }),
    thread_pool_write_queue_size: z
      .int()
      .min(10)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'Size for the thread pool queue. See documentation for exact details.',
        title: 'write thread pool queue size',
      }),
    script_max_compilations_rate: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          'Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context',
        example: '75/5m',
        title: 'Script max compilation rate - circuit breaker to prevent/minimize OOMs',
      }),
    search_max_buckets: z
      .int()
      .min(1)
      .max(1000000)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of aggregation buckets allowed in a single response. OpenSearch default value is used when this is not defined.',
        example: 10000,
        title: 'search.max_buckets',
      }),
    reindex_remote_whitelist: z
      .array(
        z
          .string()
          .max(261)
          .nullable()
          .openapi({
            example: 'anotherservice.aivencloud.com:12398',
            title: 'Address (hostname:port or IP:port)',
          }),
      )
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.',
        title: 'reindex_remote_whitelist',
      }),
    override_main_response_version: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false',
        example: true,
        title: 'compatibility.override_main_response_version',
      }),
    http_max_header_size: z
      .int()
      .min(1024)
      .max(262144)
      .exactOptional()
      .openapi({
        description: 'The max size of allowed headers, in bytes',
        example: 8192,
        title: 'http.max_header_size',
      }),
    'email-sender': z
      .object({
        email_sender_name: z
          .string()
          .regex(/^[a-zA-Z0-9-_]+$/)
          .max(40)
          .openapi({
            description:
              'This should be identical to the Sender name defined in Opensearch dashboards',
            example: 'alert-sender',
            title:
              'Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore',
          }),
        email_sender_password: z
          .string()
          .regex(/^[^\x00-\x1F]+$/)
          .max(1024)
          .openapi({
            description: 'Sender password for Opensearch alerts to authenticate with SMTP server',
            example: 'very-secure-mail-password',
            title: 'Sender password for Opensearch alerts to authenticate with SMTP server',
          }),
        email_sender_username: z
          .string()
          .regex(/^[^\x00-\x1F]+$/)
          .max(320)
          .openapi({ example: 'jane@example.com', title: 'Sender username for Opensearch alerts' }),
      })
      .exactOptional()
      .openapi({
        required: ['email_sender_name', 'email_sender_password', 'email_sender_username'],
        title: 'Opensearch Email Sender Settings',
      }),
    indices_fielddata_cache_size: z
      .int()
      .min(3)
      .max(100)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Relative amount. Maximum amount of heap memory used for field data cache. This is an expert setting; decreasing the value too much will increase overhead of loading field data; too much memory used for field data cache will decrease amount of heap available for other operations.',
        title: 'indices.fielddata.cache.size',
      }),
    action_destructive_requires_name: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ example: true, title: 'Require explicit index names when deleting' }),
    plugins_alerting_filter_by_backend_roles: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false',
        example: false,
        title: 'plugins.alerting.filter_by_backend_roles',
      }),
    indices_memory_index_buffer_size: z
      .int()
      .min(3)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'Percentage value. Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance.',
        title: 'indices.memory.index_buffer_size',
      }),
    thread_pool_force_merge_size: z
      .int()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.',
        title: 'force_merge thread pool size',
      }),
    auth_failure_listeners: z
      .strictObject({
        internal_authentication_backend_limiting: z
          .strictObject({
            allowed_tries: z
              .int()
              .min(0)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description: 'The number of login attempts allowed before login is blocked',
                example: 10,
                title: 'internal_authentication_backend_limiting.allowed_tries',
              }),
            authentication_backend: z
              .literal('internal')
              .exactOptional()
              .openapi({
                description: 'The internal backend. Enter `internal`',
                example: 'internal',
                title: 'internal_authentication_backend_limiting.authentication_backend',
              }),
            block_expiry_seconds: z
              .int()
              .min(0)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description: 'The duration of time that login remains blocked after a failed login',
                example: 600,
                title: 'internal_authentication_backend_limiting.block_expiry_seconds',
              }),
            max_blocked_clients: z
              .int()
              .min(0)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description: 'The maximum number of blocked IP addresses',
                example: 100000,
                title: 'internal_authentication_backend_limiting.max_blocked_clients',
              }),
            max_tracked_clients: z
              .int()
              .min(0)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description: 'The maximum number of tracked IP addresses that have failed login',
                example: 100000,
                title: 'internal_authentication_backend_limiting.max_tracked_clients',
              }),
            time_window_seconds: z
              .int()
              .min(0)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description:
                  'The window of time in which the value for `allowed_tries` is enforced',
                example: 3600,
                title: 'internal_authentication_backend_limiting.time_window_seconds',
              }),
            type: z
              .literal('username')
              .exactOptional()
              .openapi({
                description: 'The type of rate limiting',
                example: 'username',
                title: 'internal_authentication_backend_limiting.type',
              }),
          })
          .exactOptional()
          .openapi({ title: 'Internal Authentication Backend Limiting', required: [] }),
        ip_rate_limiting: z
          .strictObject({
            allowed_tries: z
              .int()
              .min(1)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description: 'The number of login attempts allowed before login is blocked',
                example: 10,
                title: 'ip_rate_limiting.allowed_tries',
              }),
            block_expiry_seconds: z
              .int()
              .min(1)
              .max(36000)
              .exactOptional()
              .openapi({
                description: 'The duration of time that login remains blocked after a failed login',
                example: 600,
                title: 'ip_rate_limiting.block_expiry_seconds',
              }),
            max_blocked_clients: z
              .int()
              .min(0)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description: 'The maximum number of blocked IP addresses',
                example: 100000,
                title: 'ip_rate_limiting.max_blocked_clients',
              }),
            max_tracked_clients: z
              .int()
              .min(0)
              .max(2147483647)
              .exactOptional()
              .openapi({
                description: 'The maximum number of tracked IP addresses that have failed login',
                example: 100000,
                title: 'ip_rate_limiting.max_tracked_clients',
              }),
            time_window_seconds: z
              .int()
              .min(1)
              .max(36000)
              .exactOptional()
              .openapi({
                description:
                  'The window of time in which the value for `allowed_tries` is enforced',
                example: 3600,
                title: 'ip_rate_limiting.time_window_seconds',
              }),
            type: z
              .literal('ip')
              .exactOptional()
              .openapi({
                description: 'The type of rate limiting',
                example: 'ip',
                title: 'ip_rate_limiting.type',
              }),
          })
          .exactOptional()
          .openapi({ title: 'IP address rate limiting settings', required: [] }),
      })
      .exactOptional()
      .openapi({ title: 'Opensearch Security Plugin Settings', required: [] }),
    'ism-history': z
      .object({
        ism_enabled: z
          .boolean()
          .default(true)
          .openapi({ example: true, title: 'Specifies whether ISM is enabled or not' }),
        ism_history_enabled: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            example: true,
            title:
              'Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document.',
          }),
        ism_history_max_age: z
          .int()
          .min(1)
          .max(2147483647)
          .default(24)
          .exactOptional()
          .openapi({
            example: 24,
            title: 'The maximum age before rolling over the audit history index in hours',
          }),
        ism_history_max_docs: z
          .int()
          .min(1)
          .max(9223372036854776000)
          .default(2500000)
          .exactOptional()
          .openapi({
            example: 2500000,
            title: 'The maximum number of documents before rolling over the audit history index.',
          }),
        ism_history_rollover_check_period: z
          .int()
          .min(1)
          .max(2147483647)
          .default(8)
          .exactOptional()
          .openapi({
            example: 8,
            title: 'The time between rollover checks for the audit history index in hours.',
          }),
        ism_history_rollover_retention_period: z
          .int()
          .min(1)
          .max(2147483647)
          .default(30)
          .exactOptional()
          .openapi({ example: 30, title: 'How long audit history indices are kept in days.' }),
      })
      .exactOptional()
      .openapi({ required: ['ism_enabled'], title: 'Opensearch ISM History Settings' }),
    cluster_routing_allocation_node_concurrent_recoveries: z
      .int()
      .min(2)
      .max(16)
      .exactOptional()
      .openapi({
        description:
          'How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to 2.',
        title: 'Concurrent incoming/outgoing shard recoveries per node',
      }),
    thread_pool_analyze_queue_size: z
      .int()
      .min(10)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'Size for the thread pool queue. See documentation for exact details.',
        title: 'analyze thread pool queue size',
      }),
    action_auto_create_index_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Explicitly allow or block automatic creation of indices. Defaults to true',
        example: false,
        title: 'action.auto_create_index',
      }),
    http_max_content_length: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes.',
        title: 'http.max_content_length',
      }),
    thread_pool_write_size: z
      .int()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.',
        title: 'write thread pool size',
      }),
    thread_pool_search_queue_size: z
      .int()
      .min(10)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'Size for the thread pool queue. See documentation for exact details.',
        title: 'search thread pool queue size',
      }),
    knn_memory_circuit_breaker_limit: z
      .int()
      .min(3)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size.',
        example: 50,
        title: 'knn.memory.circuit_breaker.limit',
      }),
    indices_query_bool_max_clause_count: z
      .int()
      .min(64)
      .max(4096)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of clauses Lucene BooleanQuery can have. The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value.',
        title: 'indices.query.bool.max_clause_count',
      }),
    thread_pool_search_throttled_queue_size: z
      .int()
      .min(10)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'Size for the thread pool queue. See documentation for exact details.',
        title: 'search_throttled thread pool queue size',
      }),
    cluster_max_shards_per_node: z
      .int()
      .min(100)
      .max(10000)
      .exactOptional()
      .openapi({
        description: 'Controls the number of shards allowed in the cluster per data node',
        example: 1000,
        title: 'cluster.max_shards_per_node',
      }),
  })
  .openapi({ title: 'OpenSearch settings', required: [] })
  .openapi('JsonSchemaOpensearch')

const DbaasServiceOpensearchSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'DbaaS service description' }),
    'max-index-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Maximum number of indexes to keep before deleting the oldest one',
      }),
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        uri: z.array(z.string()).exactOptional(),
        username: z.string().exactOptional(),
        password: z.string().exactOptional(),
        'dashboard-uri': z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Opensearch connection information properties', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    'keep-index-refresh-interval': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.",
      }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    'index-patterns': z
      .array(
        z
          .object({
            'max-index-count': z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative(),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 0,
                exclusiveMinimum: false,
                description: 'Maximum number of indexes to keep',
              }),
            'sorting-algorithm': z
              .enum(['alphabetical', 'creation_date'])
              .exactOptional()
              .openapi({ description: 'Deletion sorting algorithm' }),
            pattern: z
              .string()
              .max(1024)
              .exactOptional()
              .openapi({ description: 'fnmatch pattern' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          "Allows you to create glob style patterns and set a max number of indexes matching this pattern you want to keep. Creating indexes exceeding this value will cause the oldest one to get deleted. You could for example create a pattern looking like 'logs.?' and then create index logs.1, logs.2 etc, it will delete logs.1 once you create logs.6. Do note 'logs.?' does not apply to logs.10. Note: Setting max_index_count to 0 will do nothing and the pattern gets ignored.",
      }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'index-template': z
      .object({
        'mapping-nested-objects-limit': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(100000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 100000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.',
          }),
        'number-of-replicas': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(29n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 29,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'The number of replicas each primary shard has.',
          }),
        'number-of-shards': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(1024n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 1024,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'The number of primary shards that an index should have.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Template settings for all new indexes', required: [] }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'opensearch-settings': JsonSchemaOpensearchSchema.exactOptional().openapi({
      description: 'OpenSearch-specific settings',
    }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    version: z.string().exactOptional().openapi({ description: 'OpenSearch version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    'opensearch-dashboards': z
      .object({
        'opensearch-request-timeout': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(5000n).max(120000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 5000,
            maximum: 120000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch (default: 30000)',
          }),
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Enable or disable OpenSearch Dashboards (default: true)' }),
        'max-old-space-size': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(64n).max(1024n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 64,
            maximum: 1024,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description:
              'Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch. (default: 128)',
          }),
      })
      .exactOptional()
      .openapi({ description: 'OpenSearch Dashboards settings', required: [] }),
    users: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            username: z.string().exactOptional(),
            password: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of service users' }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServiceOpensearch')

const GetAiApiKeyResponseSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last update timestamp', readOnly: true }),
    name: z.string().openapi({ description: 'Human-readable name for the AI API key' }),
    scope: z
      .string()
      .openapi({
        description: "Key scope: 'public' for all deployments, or a specific deployment UUID",
      }),
    id: z.uuid().openapi({ description: 'AI API key ID', readOnly: true }),
    'org-uuid': z
      .uuid()
      .openapi({ description: 'Organization UUID that owns this key', readOnly: true }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', readOnly: true }),
  })
  .openapi({
    description: 'Get AI API key response',
    required: ['id', 'org-uuid', 'name', 'scope', 'created-at', 'updated-at'],
  })
  .openapi('GetAiApiKeyResponse')

const EnumMasterLinkStatusSchema = z.enum(['up', 'down']).openapi('EnumMasterLinkStatus')

const SksClusterRefSchema = z
  .object({ id: z.uuid().exactOptional().openapi({ description: 'SKS cluster ID' }) })
  .openapi({ description: 'SKS cluster reference', required: [] })
  .openapi('SksClusterRef')

const ListDeploymentsResponseSchema = z
  .object({ deployments: z.array(ListDeploymentsResponseEntrySchema) })
  .openapi({ description: 'AI deployment list', required: ['deployments'] })
  .openapi('ListDeploymentsResponse')

const AntiAffinityGroupSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Anti-affinity Group ID' }),
    name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Anti-affinity Group name' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Anti-affinity Group description' }),
    instances: z
      .array(InstanceSchema)
      .exactOptional()
      .openapi({ readOnly: true, description: 'Anti-affinity Group instances' }),
  })
  .openapi({ description: 'Anti-affinity Group', required: [] })
  .openapi('AntiAffinityGroup')

const BlockStorageSnapshotSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Snapshot ID' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Snapshot name' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        exclusiveMinimum: false,
        description: 'Snapshot size',
      }),
    'volume-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Original Volume size',
      }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Snapshot creation date' }),
    state: z
      .enum([
        'partially-destroyed',
        'destroying',
        'creating',
        'created',
        'promoting',
        'error',
        'destroyed',
        'allocated',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Snapshot state' }),
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
    'block-storage-volume': BlockStorageVolumeRefSchema.exactOptional().openapi({
      description: 'Referenced volume',
    }),
  })
  .openapi({ description: 'Block storage snapshot', required: [] })
  .openapi('BlockStorageSnapshot')

const DbaasExternalEndpointRsyslogOutputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'External integration endpoint name' }),
    type: EnumExternalEndpointTypesSchema.exactOptional().openapi({
      description: 'External integration endpoint type',
    }),
    id: z.uuid().exactOptional().openapi({ description: 'External integration endpoint id' }),
    settings: DbaasEndpointRsyslogOptionalFieldsSchema.exactOptional().openapi({
      description: 'External integration RSyslog configuration',
    }),
  })
  .openapi({ required: [] })
  .openapi('DbaasExternalEndpointRsyslogOutput')

const GetModelResponseSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update time', readOnly: true }),
    name: z.string().min(1).openapi({ description: 'Model name' }),
    state: z
      .enum(['ready', 'creating', 'downloading', 'error', 'created'])
      .openapi({ description: 'Model state' }),
    id: z.uuid().openapi({ description: 'Model ID', readOnly: true }),
    'model-size': z
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
        description: 'Model size in bytes',
      }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation time', readOnly: true }),
  })
  .openapi({
    description: 'AI model',
    required: ['id', 'name', 'state', 'model-size', 'created-at', 'updated-at'],
  })
  .openapi('GetModelResponse')

const DbaasEndpointElasticsearchInputUpdateSchema = z
  .object({
    settings: z
      .object({
        ca: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded CA certificate' }),
        url: z
          .string()
          .min(12)
          .max(2048)
          .exactOptional()
          .openapi({ description: 'Elasticsearch connection URL' }),
        'index-prefix': z
          .string()
          .regex(/^[a-z0-9][a-z0-9-_.]+$/)
          .min(1)
          .max(1000)
          .exactOptional()
          .openapi({ description: 'Elasticsearch index prefix' }),
        'index-days-max': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(10000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 10000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Maximum number of days of logs to keep',
          }),
        timeout: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(10n).max(120n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 10,
            maximum: 120,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Elasticsearch request timeout limit',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointElasticsearchInputUpdate')

const DbaasUserPostgresSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'Postgres username' }),
    password: z.string().exactOptional().openapi({ description: 'Postgres password' }),
  })
  .openapi({ description: 'Postgres User secrets', required: [] })
  .openapi('DbaasUserPostgresSecrets')

const DbaasClickhouseAclConfigSchema = z
  .object({ users: z.array(DbaasClickhouseUserAclConfigSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DbaasClickhouseAclConfig')

const AiApiKeyValueSchema = z
  .object({ value: z.string().openapi({ description: 'Plaintext AI API key value' }) })
  .openapi({ description: 'AI API key plaintext value', required: ['value'] })
  .openapi('AiApiKeyValue')

const ListKmsKeyRotationsResponseEntrySchema = z
  .object({
    version: z
      .int()
      .openapi({
        description:
          'The absolute increment index referencing this specific historical structural material setup.',
      }),
    'rotated-at': z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The UTC timestamp tracking precisely when this historical adjustment pass finished processing.',
      }),
    automatic: z
      .boolean()
      .openapi({
        description:
          'Flag stating whether an automation run handled this historic mutation or if manual actor keys initiated it.',
      }),
  })
  .openapi({ required: ['version', 'rotated-at', 'automatic'] })
  .openapi('ListKmsKeyRotationsResponseEntry')

const ImpactErrorResponseSchema = z
  .object({ title: z.string(), status: z.int().min(100).max(599), detail: z.string() })
  .openapi({ description: 'Error response', required: ['title', 'status', 'detail'] })
  .openapi('ImpactErrorResponse')

const DbaasEndpointRsyslogInputCreateSchema = z
  .object({
    settings: z
      .object({
        format: EnumRsyslogFormatSchema.openapi({ description: 'Message format' }),
        key: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded client key' }),
        logline: z
          .string()
          .regex(/^[ -~\t]+$/)
          .min(1)
          .max(512)
          .exactOptional()
          .openapi({ description: 'Custom syslog message format' }),
        server: z
          .string()
          .min(4)
          .max(255)
          .openapi({ description: 'Rsyslog server IP address or hostname' }),
        ca: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded CA certificate' }),
        cert: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded client certificate' }),
        tls: z.boolean().openapi({ description: 'Require TLS' }),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(65535n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Rsyslog server port',
          }),
        sd: z
          .string()
          .max(1024)
          .exactOptional()
          .openapi({ description: 'Structured data block for log message' }),
        'max-message-size': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(2048n).max(2147483647n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 2048,
            maximum: 2147483647,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Rsyslog max message size',
          }),
      })
      .exactOptional()
      .openapi({ required: ['server', 'port', 'tls', 'format'] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointRsyslogInputCreate')

const DbaasEndpointOpensearchInputCreateSchema = z
  .object({
    settings: z
      .object({
        ca: z
          .string()
          .max(16384)
          .exactOptional()
          .openapi({ description: 'PEM encoded CA certificate' }),
        url: z.string().min(12).max(2048).openapi({ description: 'OpenSearch connection URL' }),
        'index-prefix': z
          .string()
          .regex(/^[a-z0-9][a-z0-9-_.]+$/)
          .min(1)
          .max(1000)
          .openapi({ description: 'OpenSearch index prefix' }),
        'index-days-max': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(10000n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 10000,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'Maximum number of days of logs to keep',
          }),
        timeout: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(10n).max(120n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 10,
            maximum: 120,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            description: 'OpenSearch request timeout limit',
          }),
      })
      .exactOptional()
      .openapi({ required: ['url', 'index-prefix'] }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointOpensearchInputCreate')

const GetOrganizationUsageResponseSchema = z
  .object({
    gpu: z
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
        description: 'Total GPU count',
        readOnly: true,
      }),
  })
  .openapi({ description: 'GPU usage for an organization', required: ['gpu'] })
  .openapi('GetOrganizationUsageResponse')

const GetKmsKeyResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An optional detailed description providing additional context about the key's intended use case.",
      }),
    rotation: KeyRotationConfigSchema,
    revision: RevisionStampSchema,
    'delete-at': z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().openapi({ description: 'The display name of the KMS key.' }),
    'multi-zone': z.boolean().openapi({ description: 'True if this is a multi-zone key.' }),
    source: z.literal('exoscale-kms'),
    usage: z
      .string()
      .openapi({ description: 'The cryptographic operation constraints allowed on this key.' }),
    'replicas-status': z
      .array(ReplicaStateSchema)
      .exactOptional()
      .openapi({
        description: 'Detailed synchronization metrics for each regional replica mirror.',
      }),
    status: z.enum(['enabled', 'disabled', 'pending-deletion']),
    'status-since': z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp indicating exactly when the current key status was last transitioned.',
      }),
    id: z
      .uuid()
      .openapi({ description: 'The globally unique identifier (UUID) of the retrieved KMS key.' }),
    replicas: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of availability zones where this specific key has active replica mirrors.',
      }),
    material: KeyMaterialSchema,
    'origin-zone': z.string().openapi({ description: 'The creation zone of the KMS key.' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The UTC timestamp showing when the KMS key was originally provisioned.',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'usage',
      'source',
      'status',
      'status-since',
      'material',
      'rotation',
      'multi-zone',
      'origin-zone',
      'created-at',
      'revision',
    ],
  })
  .openapi('GetKmsKeyResponse')

const CreateKmsKeyResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An optional detailed description providing additional context about the key's intended use case.",
      }),
    revision: RevisionStampSchema,
    name: z.string().openapi({ description: 'The display name assigned to the KMS key.' }),
    'multi-zone': z.boolean().openapi({ description: 'True if this is a multi-zone key.' }),
    source: z.literal('exoscale-kms'),
    usage: z
      .string()
      .openapi({ description: 'The cryptographic operation constraints allowed on this key.' }),
    status: z.enum(['enabled', 'disabled', 'pending-deletion']),
    'status-since': z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp indicating exactly when the current key status was last transitioned.',
      }),
    id: z
      .uuid()
      .openapi({
        description: 'The globally unique identifier (UUID) assigned to the newly created KMS key.',
      }),
    'origin-zone': z.string().openapi({ description: 'The creation zone of the KMS key.' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The UTC timestamp showing when the KMS key was originally provisioned.',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'usage',
      'source',
      'status',
      'status-since',
      'multi-zone',
      'origin-zone',
      'created-at',
      'revision',
    ],
  })
  .openapi('CreateKmsKeyResponse')

const DbaasServiceCommonSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
  })
  .openapi({ required: ['name', 'plan', 'type'] })
  .openapi('DbaasServiceCommon')

const DbaasServiceValkeySchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service last update timestamp (ISO 8601)' }),
    'node-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of service nodes in the active plan',
      }),
    'connection-info': z
      .object({
        uri: z.array(z.string()).exactOptional(),
        password: z.string().exactOptional(),
        slave: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Valkey connection information properties', required: [] }),
    'node-cpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Number of CPUs for each node',
      }),
    'prometheus-uri': z
      .object({
        host: z.string().exactOptional(),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().nonnegative().max(65535n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 65535,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
          }),
      })
      .openapi({ description: 'Prometheus integration URI', required: [] }),
    integrations: z
      .array(DbaasIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'Service integrations' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone where the service is running' }),
    'node-states': z
      .array(DbaasNodeStateSchema)
      .exactOptional()
      .openapi({ description: 'State of individual service nodes' }),
    name: DbaasServiceNameSchema.openapi({ description: 'Service name' }),
    type: DbaasServiceTypeNameSchema.openapi({ description: 'Service type code' }),
    state: EnumServiceStateSchema.exactOptional().openapi({ description: 'State of the service' }),
    'valkey-settings': JsonSchemaValkeySchema.exactOptional().openapi({
      description: 'Valkey-specific settings',
    }),
    'ip-filter': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
    backups: z
      .array(DbaasServiceBackupSchema)
      .exactOptional()
      .openapi({ description: 'List of backups for the service' }),
    'termination-protection': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Service is protected against termination and powering off' }),
    notifications: z
      .array(DbaasServiceNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Service notifications' }),
    components: z
      .array(
        z
          .object({
            component: z.string().openapi({ description: 'Service component name' }),
            host: z
              .string()
              .openapi({ description: 'DNS name for connecting to the service component' }),
            port: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().nonnegative().max(65535n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                maximum: 65535,
                exclusiveMinimum: false,
                exclusiveMaximum: false,
                description: 'Port number for connecting to the service component',
              }),
            route: EnumComponentRouteSchema.openapi({ description: 'Network access route' }),
            ssl: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether the endpoint is encrypted or accepts plaintext.\n             By default endpoints are always encrypted and\n             this property is only included for service components that may disable encryption.',
              }),
            usage: EnumComponentUsageSchema.openapi({ description: 'DNS usage name' }),
          })
          .openapi({ required: ['component', 'host', 'port', 'route', 'usage'] }),
      )
      .exactOptional()
      .openapi({ description: 'Service component information objects' }),
    maintenance: DbaasServiceMaintenanceSchema.exactOptional().openapi({
      description: 'Automatic maintenance settings',
    }),
    'disk-size': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT disk space for data storage',
      }),
    'node-memory': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'TODO UNIT of memory for each node',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI for connecting to the service (may be absent)' }),
    'uri-params': z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'service_uri parameterized into key-value pairs' }),
    version: z.string().exactOptional().openapi({ description: 'Valkey version' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Service creation timestamp (ISO 8601)' }),
    plan: z.string().openapi({ description: 'Subscription plan' }),
    users: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            username: z.string().exactOptional(),
            password: z.string().exactOptional(),
            'access-control': z
              .object({
                categories: z.array(z.string()).exactOptional(),
                channels: z.array(z.string()).exactOptional(),
                commands: z.array(z.string()).exactOptional(),
                keys: z.array(z.string()).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of service users' }),
  })
  .openapi({ required: ['name', 'plan', 'type', 'prometheus-uri'] })
  .openapi('DbaasServiceValkey')

const SnapshotExportSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Snapshot export ID' }),
    'presigned-url': z
      .string()
      .exactOptional()
      .openapi({ description: 'Snapshot export presigned url' }),
    md5sum: z.string().exactOptional().openapi({ description: 'Snapshot export md5 checksum' }),
  })
  .openapi({ description: 'Snapshot export information. This data is transient.', required: [] })
  .openapi('SnapshotExport')

const DbaasPostgresUsersSchema = z
  .object({
    users: z
      .array(
        z
          .object({
            username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
            'allow-replication': z.boolean().exactOptional(),
          })
          .openapi({ required: ['username'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbaasPostgresUsers')

const DbaasExternalEndpointSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'External integration endpoint name' }),
    type: EnumExternalEndpointTypesSchema.exactOptional().openapi({
      description: 'External integration endpoint type',
    }),
    id: z.uuid().exactOptional().openapi({ description: 'External integration endpoint id' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasExternalEndpoint')

const DnsDomainRecordSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'DNS domain record update date' }),
    content: z.string().exactOptional().openapi({ description: 'DNS domain record content' }),
    name: z.string().exactOptional().openapi({ description: 'DNS domain record name' }),
    type: z
      .enum([
        'NS',
        'CAA',
        'NAPTR',
        'POOL',
        'A',
        'HINFO',
        'CNAME',
        'SOA',
        'SSHFP',
        'SRV',
        'AAAA',
        'MX',
        'TXT',
        'ALIAS',
        'URL',
        'SPF',
      ])
      .exactOptional()
      .openapi({ description: 'DNS domain record type' }),
    ttl: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'DNS domain record TTL',
      }),
    priority: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'DNS domain record priority',
      }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'DNS domain record ID' }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'DNS domain record creation date' }),
    'system-record': z
      .boolean()
      .exactOptional()
      .openapi({ readOnly: true, description: 'DNS domain record system status' }),
  })
  .openapi({ description: 'DNS domain record', required: [] })
  .openapi('DnsDomainRecord')

const OrganizationSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Organization ID' }),
    name: z.string().exactOptional().openapi({ readOnly: true, description: 'Organization name' }),
    address: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Organization address' }),
    postcode: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Organization postcode' }),
    city: z.string().exactOptional().openapi({ readOnly: true, description: 'Organization city' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Organization country' }),
    balance: z
      .number()
      .exactOptional()
      .openapi({
        readOnly: true,
        deprecated: true,
        description: 'Organization balance. DEPRECATED: use the dedicated `live-balance` endpoint',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Organization currency' }),
  })
  .openapi({ description: 'Organization', required: [] })
  .openapi('Organization')

const EnableKmsKeyRotationResponseSchema = z
  .object({ rotation: KeyRotationConfigSchema })
  .openapi({ required: ['rotation'] })
  .openapi('EnableKmsKeyRotationResponse')

const RotateKmsKeyResponseSchema = z
  .object({ rotation: KeyRotationConfigSchema })
  .openapi({ required: ['rotation'] })
  .openapi('RotateKmsKeyResponse')

const DbaasServiceComponentsSchema = z
  .object({
    component: z.string().openapi({ description: 'Service component name' }),
    host: z.string().openapi({ description: 'DNS name for connecting to the service component' }),
    'kafka-authentication-method': EnumKafkaAuthMethodSchema.exactOptional().openapi({
      description:
        "Kafka authentication method. This is a value specific to the 'kafka' service component",
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path component of the service URL (useful only if service component is HTTP or HTTPS endpoint)',
      }),
    port: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative().max(65535n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 65535,
        exclusiveMinimum: false,
        exclusiveMaximum: false,
        description: 'Port number for connecting to the service component',
      }),
    route: z
      .enum(['dynamic', 'private', 'public', 'privatelink'])
      .openapi({ description: 'Network access route' }),
    ssl: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the endpoint is encrypted or accepts plaintext.\n                                           By default endpoints are always encrypted and\n                                           this property is only included for service components that may disable encryption.',
      }),
    usage: z.enum(['primary', 'replica']).openapi({ description: 'DNS usage name' }),
  })
  .openapi({
    required: ['component', 'host', 'port', 'route', 'usage'],
    description: 'Service component information objects',
  })
  .openapi('DbaasServiceComponents')

const ListKmsKeyRotationsResponseSchema = z
  .object({
    rotations: z
      .array(ListKmsKeyRotationsResponseEntrySchema)
      .openapi({
        description:
          'A chronologically ordered collection tracking historical rotation lifecycle occurrences for this resource.',
      }),
  })
  .openapi({ required: ['rotations'] })
  .openapi('ListKmsKeyRotationsResponse')

const BlockStorageVolumeSchema = z
  .object({
    labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
    instance: InstanceRefSchema.exactOptional().openapi({
      description: 'Volume attached instance, if any',
    }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'Volume name' }),
    state: z
      .enum([
        'snapshotting',
        'deleted',
        'creating',
        'detached',
        'deleting',
        'attaching',
        'error',
        'attached',
        'detaching',
      ])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Volume state' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        exclusiveMinimum: false,
        description: 'Volume size',
      }),
    blocksize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        readOnly: true,
        description: 'Volume block size',
      }),
    'block-storage-snapshots': z
      .array(BlockStorageSnapshotRefSchema)
      .exactOptional()
      .openapi({ description: 'Volume snapshots, if any' }),
    id: z.uuid().exactOptional().openapi({ readOnly: true, description: 'Volume ID' }),
    encrypted: z
      .boolean()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Indicates if the block-storage volume is encrypted',
      }),
    'created-at': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Volume creation date' }),
  })
  .openapi({ description: 'Block storage volume', required: [] })
  .openapi('BlockStorageVolume')

const ReEncryptRequestSchema = z
  .object({
    source: z
      .object({
        key: z
          .uuid()
          .openapi({
            description: 'The ID of the source key currently protecting the data payload.',
          }),
        'encryption-context': z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Optional Base64-encoded encryption context originally appended to the AAD to confirm package validation rules.',
          }),
        ciphertext: z
          .string()
          .openapi({
            description:
              'The Base64-encoded encrypted payload package ready to undergo source-side key decryption.',
          }),
      })
      .openapi({ required: ['key', 'ciphertext'] }),
    destination: z
      .object({
        key: z
          .uuid()
          .openapi({
            description:
              'The ID of the target key chosen to encapsulate the newly shifted data translation.',
          }),
        'encryption-context': z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Optional new Base64-encoded encryption context to apply under the target destination envelope.',
          }),
      })
      .openapi({ required: ['key'] }),
  })
  .openapi({ required: ['source', 'destination'] })
  .openapi('ReEncryptRequest')

const CreateDeploymentRequestSchema = z
  .object({
    'gpu-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description: 'Number of GPUs (1-8)',
      }),
    'inference-engine-version': InferenceEngineVersionSchema.exactOptional(),
    name: z.string().min(1).openapi({ description: 'Deployment name' }),
    'gpu-type': z.string().openapi({ description: 'GPU type family (e.g., gpua5000, gpu3080ti)' }),
    'product-name': z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Billing identifier for this deployment. Used by the Router for usage counters and Kafka events.',
      }),
    replicas: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description: 'Number of replicas (>=1)',
      }),
    'inference-engine-parameters': z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional extra inference engine server CLI args' }),
    model: ModelRefSchema,
  })
  .openapi({
    description: 'Deploy an AI model onto a set of GPUs',
    required: ['model', 'name', 'gpu-type', 'gpu-count', 'replicas'],
  })
  .openapi('CreateDeploymentRequest')

const EnumMigrationMethodSchema = z.enum(['dump', 'replication']).openapi('EnumMigrationMethod')

const EnumSortOrderSchema = z.enum(['desc', 'asc']).openapi('EnumSortOrder')

const EnumPgVariantSchema = z.enum(['timescale', 'aiven']).openapi('EnumPgVariant')

const SksAuditCreateSchema = z
  .object({
    endpoint: SksAuditEndpointSchema.openapi({ description: 'Target Webserver URL' }),
    'bearer-token': SksAuditBearerTokenSchema.openapi({ description: 'Bearer token' }),
    'initial-backoff': SksAuditInitialBackoffSchema.exactOptional().openapi({
      description: "Initial backoff (default '10s')",
    }),
  })
  .openapi({ required: ['endpoint', 'bearer-token'], description: 'Kubernetes Audit parameters' })
  .openapi('SksAuditCreate')

const UpdateAiApiKeyResponseSchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last update timestamp', readOnly: true }),
    name: z.string().openapi({ description: 'Human-readable name for the AI API key' }),
    scope: z
      .string()
      .openapi({
        description: "Key scope: 'public' for all deployments, or a specific deployment UUID",
      }),
    id: z.uuid().openapi({ description: 'AI API key ID', readOnly: true }),
    'org-uuid': z
      .uuid()
      .openapi({ description: 'Organization UUID that owns this key', readOnly: true }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', readOnly: true }),
  })
  .openapi({
    description: 'Update AI API key response',
    required: ['id', 'org-uuid', 'name', 'scope', 'created-at', 'updated-at'],
  })
  .openapi('UpdateAiApiKeyResponse')

const AiApiKeySchema = z
  .object({
    'updated-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last update timestamp', readOnly: true }),
    name: z.string().openapi({ description: 'Human-readable name for the AI API key' }),
    scope: z
      .string()
      .openapi({
        description: "Key scope: 'public' for all deployments, or a specific deployment UUID",
      }),
    id: z.uuid().openapi({ description: 'AI API key ID', readOnly: true }),
    'org-uuid': z
      .uuid()
      .openapi({ description: 'Organization UUID that owns this key', readOnly: true }),
    'created-at': z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', readOnly: true }),
  })
  .openapi({
    description: 'AI API key metadata',
    required: ['id', 'org-uuid', 'name', 'scope', 'created-at', 'updated-at'],
  })
  .openapi('AiApiKey')

const DbaasUserThanosSecretsSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'Thanos username' }),
    password: z.string().exactOptional().openapi({ description: 'Thanos password' }),
  })
  .openapi({ description: 'Thanos User secrets', required: [] })
  .openapi('DbaasUserThanosSecrets')

const ListKmsKeysResponseSchema = z
  .object({
    'kms-keys': z
      .array(ListKmsKeysResponseEntrySchema)
      .openapi({
        description:
          'An array containing metadata entries for all available keys for your organization in the requested zone.',
      }),
  })
  .openapi({ required: ['kms-keys'] })
  .openapi('ListKmsKeysResponse')

const DbaasEndpointPrometheusSchema = z
  .object({
    'basic-auth-username': z
      .string()
      .regex(/^[a-z0-9\-@_]{5,32}$/)
      .min(5)
      .max(32)
      .exactOptional()
      .openapi({ description: 'Prometheus basic authentication username' }),
  })
  .openapi({ required: [] })
  .openapi('DbaasEndpointPrometheus')

export const getLoadBalancerIdServiceServiceIdRoute = createRoute({
  method: 'get',
  path: '/load-balancer/{id}/service/{service-id}',
  tags: ['network-load-balancer'],
  summary: 'Retrieve Load Balancer Service details',
  operationId: 'get-load-balancer-service',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'service-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'service-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: LoadBalancerServiceSchema } },
    },
  },
})

export const putLoadBalancerIdServiceServiceIdRoute = createRoute({
  method: 'put',
  path: '/load-balancer/{id}/service/{service-id}',
  tags: ['network-load-balancer'],
  summary: 'Update a Load Balancer Service',
  operationId: 'update-load-balancer-service',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'service-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'service-id',
            schema: { type: 'string', format: 'uuid' },
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
                .max(255)
                .exactOptional()
                .openapi({ description: 'Load Balancer Service name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Load Balancer Service description' }),
              protocol: z
                .enum(['tcp', 'udp'])
                .exactOptional()
                .openapi({ description: 'Network traffic protocol' }),
              strategy: z
                .enum(['round-robin', 'maglev-hash', 'source-hash'])
                .exactOptional()
                .openapi({ description: 'Load balancing strategy' }),
              port: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(65535n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 65535,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: "Port exposed on the Load Balancer's public IP",
                }),
              'target-port': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(65535n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 65535,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'Port on which the network traffic will be forwarded to on the receiving instance',
                }),
              healthcheck: LoadBalancerServiceHealthcheckSchema.exactOptional().openapi({
                description: 'Healthcheck configuration',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteLoadBalancerIdServiceServiceIdRoute = createRoute({
  method: 'delete',
  path: '/load-balancer/{id}/service/{service-id}',
  tags: ['network-load-balancer'],
  summary: 'Delete a Load Balancer Service',
  operationId: 'delete-load-balancer-service',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'service-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'service-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalEndpointOpensearchEndpointIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-endpoint-opensearch/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Get OpenSearch Logs external integration endpoint settings',
  operationId: 'get-dbaas-external-endpoint-opensearch',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasEndpointOpensearchOutputSchema } },
    },
  },
})

export const putDbaasExternalEndpointOpensearchEndpointIdRoute = createRoute({
  method: 'put',
  path: '/dbaas-external-endpoint-opensearch/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Update OpenSearch Logs external integration endpoint',
  operationId: 'update-dbaas-external-endpoint-opensearch',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointOpensearchInputUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasExternalEndpointOpensearchEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-external-endpoint-opensearch/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Delete OpenSearch logs external integration endpoint',
  operationId: 'delete-dbaas-external-endpoint-opensearch',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasOpensearchNameAclConfigRoute = createRoute({
  method: 'get',
  path: '/dbaas-opensearch/{name}/acl-config',
  tags: ['dbaas'],
  summary: 'Get DBaaS OpenSearch ACL configuration',
  operationId: 'get-dbaas-opensearch-acl-config',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasOpensearchAclConfigSchema } },
    },
  },
})

export const putDbaasOpensearchNameAclConfigRoute = createRoute({
  method: 'put',
  path: '/dbaas-opensearch/{name}/acl-config',
  tags: ['dbaas'],
  summary: 'Create a DBaaS OpenSearch ACL configuration',
  operationId: 'update-dbaas-opensearch-acl-config',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasOpensearchAclConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstancePoolIdScaleRoute = createRoute({
  method: 'put',
  path: '/instance-pool/{id}:scale',
  tags: ['instance-pool'],
  summary: 'Scale an Instance Pool',
  operationId: 'scale-instance-pool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'Number of managed Instances',
                }),
            })
            .openapi({ required: ['size'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postInstanceIdCreateSnapshotRoute = createRoute({
  method: 'post',
  path: '/instance/{id}:create-snapshot',
  tags: ['instance', 'snapshot'],
  summary: 'Create a Snapshot of a Compute instance',
  operationId: 'create-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasValkeyNameMigrationStopRoute = createRoute({
  method: 'post',
  path: '/dbaas-valkey/{name}/migration/stop',
  tags: ['dbaas'],
  summary: 'Stop a DBaaS Valkey migration',
  operationId: 'stop-dbaas-valkey-migration',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getReverseDnsElasticIpIdRoute = createRoute({
  method: 'get',
  path: '/reverse-dns/elastic-ip/{id}',
  tags: ['reverse-dns'],
  summary: 'Query the PTR DNS records for an elastic IP',
  operationId: 'get-reverse-dns-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: ReverseDnsRecordSchema } },
    },
  },
})

export const postReverseDnsElasticIpIdRoute = createRoute({
  method: 'post',
  path: '/reverse-dns/elastic-ip/{id}',
  tags: ['reverse-dns'],
  summary: 'Update/Create the PTR DNS record for an elastic IP',
  operationId: 'update-reverse-dns-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ 'domain-name': z.string().min(1).max(253).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteReverseDnsElasticIpIdRoute = createRoute({
  method: 'delete',
  path: '/reverse-dns/elastic-ip/{id}',
  tags: ['reverse-dns'],
  summary: 'Delete the PTR DNS record for an elastic IP',
  operationId: 'delete-reverse-dns-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAntiAffinityGroupRoute = createRoute({
  method: 'get',
  path: '/anti-affinity-group',
  tags: ['anti-affinity-group'],
  summary: 'List Anti-affinity Groups',
  operationId: 'list-anti-affinity-groups',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'anti-affinity-groups': z.array(AntiAffinityGroupSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAntiAffinityGroupRoute = createRoute({
  method: 'post',
  path: '/anti-affinity-group',
  tags: ['anti-affinity-group'],
  summary: 'Create an Anti-affinity Group',
  operationId: 'create-anti-affinity-group',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(255).openapi({ description: 'Anti-affinity Group name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Anti-affinity Group description' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getUsageReportRoute = createRoute({
  method: 'get',
  path: '/usage-report',
  tags: ['organization'],
  summary: 'Retrieve organization usage reports',
  description: 'Returns aggregated usage reports for an organization',
  operationId: 'get-usage-report',
  request: {
    query: z.object({
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'period', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .array(
                  z
                    .object({
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({ readOnly: true, description: 'Period Start Date' }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({ readOnly: true, description: 'Period End Date' }),
                      product: z
                        .string()
                        .exactOptional()
                        .openapi({ readOnly: true, description: 'Product' }),
                      variable: z
                        .string()
                        .exactOptional()
                        .openapi({ readOnly: true, description: 'Variable' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ readOnly: true, description: 'Description' }),
                      quantity: z
                        .string()
                        .exactOptional()
                        .openapi({ readOnly: true, description: 'Quantity' }),
                      unit: z
                        .string()
                        .exactOptional()
                        .openapi({ readOnly: true, description: 'Unit' }),
                    })
                    .openapi({ description: 'Usage', required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getEventRoute = createRoute({
  method: 'get',
  path: '/event',
  tags: ['event'],
  summary: 'List Events',
  description:
    'Retrieve Mutation Events for a given date range. Defaults to retrieving Events for the past 24 hours.\n         Both a `from` and `to` arguments can be specified to filter Events over a specific period.\n         Events will be the the most descriptive possible but not all fields are mandatory',
  operationId: 'list-events',
  request: {
    query: z.object({
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: z.array(EventSchema) } } },
  },
})

export const deleteSecurityGroupIdRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/security-group/{id}/rules/{rule-id}',
  tags: ['security-group'],
  summary: 'Delete a Security Group rule',
  operationId: 'delete-rule-from-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'rule-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'rule-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasGrafanaNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-grafana/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: 'Initiate Grafana maintenance update',
  operationId: 'start-dbaas-grafana-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postKmsKeyIdDisableKeyRotationRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/disable-key-rotation',
  tags: ['kms-key'],
  summary: 'Disable Key Rotation',
  description: 'Disable the periodic rotation of a KMS Key.',
  operationId: 'disable-kms-key-rotation',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key rotation disabled',
      content: { 'application/json': { schema: DisableKmsKeyRotationResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nInvalid Origin: The request was rejected because automatic key rotation can only be enabled on a KMS key with origin "exoscale-kms".\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nNot on Default: The request was rejected because the operation is not allowed on the default key.\n\nNot on Replica: The request was rejectde because the operation is not allowed on a replica.\n\nKey is Pending Deletion: The request was rejected because it was performed on a key that is pending deletion.\n\nKey is Disabled: The request was rejected because the specified KMS key is disabled.\n\nInvalid Usage: The request was rejected because the operation is only allowed on symmetric keys with usage "encrypt-decrypt".\n\nConflict: The request was rejected because the automatic rotation is already enabled for this KMS Key.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDbaasPostgresServiceUpgradeCheckRoute = createRoute({
  method: 'post',
  path: '/dbaas-postgres/{service}/upgrade-check',
  tags: ['dbaas'],
  description: 'Check whether you can upgrade Postgres service to a newer version',
  operationId: 'create-dbaas-pg-upgrade-check',
  request: {
    params: z.object({
      service: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'target-version': DbaasPgTargetVersionsSchema.openapi({
                description: 'Target version for upgrade',
              }),
            })
            .openapi({ required: ['target-version'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: DbaasTaskSchema } } },
  },
})

export const putDbaasMysqlServiceNameUserUsernamePasswordResetRoute = createRoute({
  method: 'put',
  path: '/dbaas-mysql/{service-name}/user/{username}/password/reset',
  tags: ['dbaas'],
  summary: 'Reset the credentials of a DBaaS mysql user',
  description: 'If no password is provided one will be generated automatically.',
  operationId: 'reset-dbaas-mysql-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: DbaasMysqlUserPasswordSchema.exactOptional().openapi({
                description: 'New password',
              }),
              authentication: EnumMysqlAuthenticationPluginSchema.exactOptional().openapi({
                description: 'Authentication method',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiHelpInferenceEngineParametersRoute = createRoute({
  method: 'get',
  path: '/ai/help/inference-engine-parameters',
  tags: ['deployment'],
  summary: 'Get inference-engine Help',
  description:
    'Get list of allowed inference engine parameters with their descriptions and allowed values',
  operationId: 'get-inference-engine-help',
  request: {
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'version', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetInferenceEngineHelpResponseSchema } },
    },
  },
})

export const getLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/load-balancer',
  tags: ['network-load-balancer'],
  summary: 'List Load Balancers',
  operationId: 'list-load-balancers',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'load-balancers': z.array(LoadBalancerSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/load-balancer',
  tags: ['network-load-balancer'],
  summary: 'Create a Load Balancer',
  operationId: 'create-load-balancer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Load Balancer description' }),
              name: z.string().min(1).max(255).openapi({ description: 'Load Balancer name' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Load balancer labels' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSecurityGroupRoute = createRoute({
  method: 'get',
  path: '/security-group',
  tags: ['security-group'],
  summary: 'List Security Groups.',
  description:
    'Lists security groups. When visibility is set to public, lists public security groups.\nPublic security groups are objects maintained by Exoscale which contain source addresses for\nrelevant services hosted by Exoscale. They can be used a source in ingress rules and as a destination\nin egress rules.',
  operationId: 'list-security-groups',
  request: {
    query: z.object({
      visibility: z
        .enum(['private', 'public'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'visibility',
            schema: { type: 'string', enum: ['private', 'public'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'security-groups': z.array(SecurityGroupSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSecurityGroupRoute = createRoute({
  method: 'post',
  path: '/security-group',
  tags: ['security-group'],
  summary: 'Create a Security Group',
  operationId: 'create-security-group',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(255).openapi({ description: 'Security Group name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Security Group description' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasPostgresServiceNameConnectionPoolRoute = createRoute({
  method: 'post',
  path: '/dbaas-postgres/{service-name}/connection-pool',
  tags: ['dbaas'],
  summary: 'Create a DBaaS PostgreSQL connection pool',
  operationId: 'create-dbaas-pg-connection-pool',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: DbaasPgPoolNameSchema.openapi({ description: 'Connection pool name' }),
              'database-name': DbaasDatabaseNameSchema.openapi({
                description: 'Service database name',
              }),
              mode: EnumPgPoolModeSchema.exactOptional().openapi({
                description: 'PGBouncer pool mode',
              }),
              size: DbaasPgPoolSizeSchema.exactOptional().openapi({
                description: "Size of PGBouncer's PostgreSQL side connection pool",
              }),
              username: DbaasPgPoolUsernameSchema.exactOptional().openapi({
                description: 'Pool username',
              }),
            })
            .openapi({ required: ['name', 'database-name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasMysqlNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-mysql/{name}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS MySQL service',
  description: 'Get a DBaaS MySQL service',
  operationId: 'get-dbaas-service-mysql',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceMysqlSchema } },
    },
  },
})

export const putDbaasMysqlNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-mysql/{name}',
  tags: ['dbaas'],
  summary: 'Update a DBaaS MySQL service',
  description: 'Update a DBaaS MySQL service',
  operationId: 'update-dbaas-service-mysql',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'backup-schedule': z
                .object({
                  'backup-hour': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(23n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 23,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                  'backup-minute': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(59n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 59,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'mysql-settings': JsonSchemaMysqlSchema.exactOptional().openapi({
                description: 'MySQL-specific settings',
              }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              version: z.string().exactOptional().openapi({ description: 'MySQL version' }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
              migration: z
                .object({
                  host: z
                    .string()
                    .min(1)
                    .max(255)
                    .openapi({
                      description:
                        'Hostname or IP address of the server where to migrate data from',
                    }),
                  port: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(65535n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 65535,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'Port number of the server where to migrate data from',
                    }),
                  password: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'Password for authentication with the server where to migrate data from',
                    }),
                  ssl: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'The server where to migrate data from is secured with SSL',
                    }),
                  username: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'User name for authentication with the server where to migrate data from',
                    }),
                  dbname: z
                    .string()
                    .min(1)
                    .max(63)
                    .exactOptional()
                    .openapi({
                      description: 'Database name for bootstrapping the initial connection',
                    }),
                  'ignore-dbs': z
                    .string()
                    .min(1)
                    .max(2048)
                    .exactOptional()
                    .openapi({
                      description:
                        'Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)',
                    }),
                  method: EnumMigrationMethodSchema.exactOptional().openapi({
                    description: 'The migration method to be used',
                  }),
                })
                .exactOptional()
                .openapi({
                  required: ['host', 'port'],
                  description: 'Migrate data from existing server',
                }),
              'binlog-retention-period': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(600n).max(86400n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 600,
                  maximum: 86400,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'The minimum amount of time in seconds to keep binlog entries before deletion. This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasMysqlNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-mysql/{name}',
  tags: ['dbaas'],
  summary: 'Create a DBaaS MySQL service',
  description: 'Create a DBaaS MySQL service',
  operationId: 'create-dbaas-service-mysql',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'backup-schedule': z
                .object({
                  'backup-hour': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(23n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 23,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                  'backup-minute': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(59n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 59,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              integrations: z
                .array(
                  z
                    .object({
                      type: z.literal('read_replica').openapi({ description: 'Integration type' }),
                      'source-service': DbaasServiceNameSchema.exactOptional().openapi({
                        description: 'A source service',
                      }),
                      'dest-service': DbaasServiceNameSchema.exactOptional().openapi({
                        description: 'A destination service',
                      }),
                      settings: z
                        .looseObject({})
                        .exactOptional()
                        .openapi({ description: 'Integration settings' }),
                    })
                    .openapi({ required: ['type'] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Service integrations to be enabled when creating the service.',
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'fork-from-service': DbaasServiceNameSchema.exactOptional().openapi({
                description: 'Service to fork from',
              }),
              'recovery-backup-time': z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'ISO time of a backup to recover from for services that support arbitrary times',
                }),
              'mysql-settings': JsonSchemaMysqlSchema.exactOptional().openapi({
                description: 'MySQL-specific settings',
              }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              'admin-username': z
                .string()
                .regex(/^[_A-Za-z0-9][-._A-Za-z0-9]{0,63}$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Custom username for admin user. This must be set only when a new service is being created.',
                }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'MySQL major version' }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
              'admin-password': DbaasMysqlUserPasswordSchema.exactOptional().openapi({
                description:
                  'Custom password for admin user. Defaults to random string. This must be set only when a new service is being created.',
              }),
              migration: z
                .object({
                  host: z
                    .string()
                    .min(1)
                    .max(255)
                    .openapi({
                      description:
                        'Hostname or IP address of the server where to migrate data from',
                    }),
                  port: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(65535n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 65535,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'Port number of the server where to migrate data from',
                    }),
                  password: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'Password for authentication with the server where to migrate data from',
                    }),
                  ssl: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'The server where to migrate data from is secured with SSL',
                    }),
                  username: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'User name for authentication with the server where to migrate data from',
                    }),
                  dbname: z
                    .string()
                    .min(1)
                    .max(63)
                    .exactOptional()
                    .openapi({
                      description: 'Database name for bootstrapping the initial connection',
                    }),
                  'ignore-dbs': z
                    .string()
                    .min(1)
                    .max(2048)
                    .exactOptional()
                    .openapi({
                      description:
                        'Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)',
                    }),
                  method: EnumMigrationMethodSchema.exactOptional().openapi({
                    description: 'The migration method to be used',
                  }),
                })
                .exactOptional()
                .openapi({
                  required: ['host', 'port'],
                  description: 'Migrate data from existing server',
                }),
              'binlog-retention-period': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(600n).max(86400n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 600,
                  maximum: 86400,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'The minimum amount of time in seconds to keep binlog entries before deletion. This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.',
                }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasMysqlNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-mysql/{name}',
  tags: ['dbaas'],
  summary: 'Delete a MySQL service',
  operationId: 'delete-dbaas-service-mysql',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putPrivateNetworkIdAttachRoute = createRoute({
  method: 'put',
  path: '/private-network/{id}:attach',
  tags: ['private-network'],
  summary: 'Attach a Compute instance to a Private Network',
  operationId: 'attach-instance-to-private-network',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ip: z
                .ipv4()
                .exactOptional()
                .openapi({
                  description: 'Static IP address lease for the corresponding network interface',
                }),
              instance: z
                .object({ id: z.uuid().exactOptional().openapi({ description: 'Instance ID' }) })
                .openapi({ description: 'Compute instance', required: [] }),
            })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postIamRoleIdAssumeRoute = createRoute({
  method: 'post',
  path: '/iam-role/{id}/assume',
  tags: ['role'],
  summary: '[BETA] Request generation of key/secret that allow caller to assume target role',
  description: '[BETA] Request generation of key/secret that allow caller to assume target role',
  operationId: 'assume-iam-role',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ttl: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description:
                    'TTL in seconds for the generated access key (cannot exceed the max TTL defined in the targeted assume role)',
                }),
            })
            .openapi({ required: ['ttl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().exactOptional(),
              name: z.string().exactOptional(),
              'org-id': z.string().exactOptional(),
              'role-id': z.string().exactOptional(),
              secret: z.string().exactOptional(),
              'expires-at': z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putVpcVpcIdSubnetSubnetIdAttachRoute = createRoute({
  method: 'put',
  path: '/vpc/{vpc-id}/subnet/{subnet-id}/attach',
  tags: ['vpc-subnet'],
  summary: '[BETA] Attach a Compute instance to a Subnet',
  operationId: 'attach-instance-to-subnet',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'subnet-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'subnet-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              instance: InstanceRefSchema.openapi({ description: 'Compute instance' }),
              ipv4: z.ipv4().exactOptional().openapi({ description: 'Instance IPv4' }),
            })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getKmsKeyIdRoute = createRoute({
  method: 'get',
  path: '/kms-key/{id}',
  tags: ['kms-key'],
  summary: 'Get KMS Key',
  description: 'Retrieve KMS Key details.',
  operationId: 'get-kms-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'KMS Key Details',
      content: { 'application/json': { schema: GetKmsKeyResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putDbaasThanosNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-thanos/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: 'Initiate Thanos maintenance update',
  operationId: 'start-dbaas-thanos-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalEndpointElasticsearchEndpointIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-endpoint-elasticsearch/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Get ElasticSearch Logs external integration endpoint settings',
  operationId: 'get-dbaas-external-endpoint-elasticsearch',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasEndpointElasticsearchOutputSchema } },
    },
  },
})

export const putDbaasExternalEndpointElasticsearchEndpointIdRoute = createRoute({
  method: 'put',
  path: '/dbaas-external-endpoint-elasticsearch/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Update ElasticSearch Logs external integration endpoint',
  operationId: 'update-dbaas-external-endpoint-elasticsearch',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointElasticsearchInputUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasExternalEndpointElasticsearchEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-external-endpoint-elasticsearch/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Delete ElasticSearch logs external integration endpoint',
  operationId: 'delete-dbaas-external-endpoint-elasticsearch',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiModelRoute = createRoute({
  method: 'get',
  path: '/ai/model',
  tags: ['model'],
  summary: 'List Models',
  description: 'List Models',
  operationId: 'list-models',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListModelsResponseSchema } },
    },
  },
})

export const postAiModelRoute = createRoute({
  method: 'post',
  path: '/ai/model',
  tags: ['model'],
  summary: 'Create Model',
  description:
    'Model files will be downloaded from Huggingface.\n\nName must be the exact name of the model on huggingface (ex: openai/gpt-oss-120b or ggml-org/gpt-oss-120b-GGUF).\n\nIf the model is under a license then you must provide a Huggingface access token for an account that signed the license agreement',
  operationId: 'create-model',
  request: {
    body: { content: { 'application/json': { schema: CreateModelRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OperationSchema } } },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDbaasMysqlServiceNameUserRoute = createRoute({
  method: 'post',
  path: '/dbaas-mysql/{service-name}/user',
  tags: ['dbaas'],
  summary: 'Create a DBaaS MySQL user',
  operationId: 'create-dbaas-mysql-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
              authentication: EnumMysqlAuthenticationPluginSchema.exactOptional().openapi({
                description: 'Authentication option',
              }),
            })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasServiceTypeRoute = createRoute({
  method: 'get',
  path: '/dbaas-service-type',
  tags: ['dbaas'],
  summary: 'DBaaS Service Types',
  description: 'List available service types for DBaaS',
  operationId: 'list-dbaas-service-types',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'dbaas-service-types': z.array(DbaasServiceTypeSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAiDeploymentIdScaleRoute = createRoute({
  method: 'post',
  path: '/ai/deployment/{id}/scale',
  tags: ['deployment'],
  summary: 'Scale Deployment',
  description: 'Scale Deployment',
  operationId: 'scale-deployment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ScaleDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OperationSchema } } },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    412: {
      description: 'Precondition Failed',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getInstanceTypeIdRoute = createRoute({
  method: 'get',
  path: '/instance-type/{id}',
  tags: ['instance-type'],
  summary: 'Retrieve Instance Type details',
  operationId: 'get-instance-type',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: InstanceTypeSchema } } },
  },
})

export const getDbaasClickhouseNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-clickhouse/{name}',
  tags: ['dbaas'],
  summary: '[BETA] Get a DBaaS ClickHouse service',
  operationId: 'get-dbaas-service-clickhouse',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceClickhouseSchema } },
    },
  },
})

export const putDbaasClickhouseNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-clickhouse/{name}',
  tags: ['dbaas'],
  summary: '[BETA] Update a DBaaS ClickHouse service',
  operationId: 'update-dbaas-service-clickhouse',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'ClickHouse major version' }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'clickhouse-settings': JsonSchemaClickhouseSchema.exactOptional().openapi({
                description: 'ClickHouse-specific settings',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasClickhouseNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-clickhouse/{name}',
  tags: ['dbaas'],
  summary: '[BETA] Create a DBaaS ClickHouse service',
  operationId: 'create-dbaas-service-clickhouse',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'ClickHouse major version' }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'clickhouse-settings': JsonSchemaClickhouseSchema.exactOptional().openapi({
                description: 'ClickHouse-specific settings',
              }),
              'fork-from-service': DbaasServiceNameSchema.exactOptional().openapi({
                description: 'Service to fork from',
              }),
              'recovery-backup-name': z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Name of a backup to recover from for services that support backup names',
                }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasClickhouseNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-clickhouse/{name}',
  tags: ['dbaas'],
  summary: '[BETA] Delete a ClickHouse service',
  operationId: 'delete-dbaas-service-clickhouse',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getInstanceIdPasswordRoute = createRoute({
  method: 'get',
  path: '/instance/{id}:password',
  tags: ['instance'],
  summary: 'Reveal the password used during instance creation or the latest password reset.',
  description:
    'Reveal the password used during instance creation or the latest password reset.\n            This is only available for VMs created against templates having the `password-enabled`\n            property set to `true`.\n\n            Passwords are transiently stored for at most 24 hours and intended to be retrieved shortly after\n            creation or resets.',
  operationId: 'reveal-instance-password',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: InstancePasswordSchema } },
    },
  },
})

export const getSksTemplateKubeVersionVariantRoute = createRoute({
  method: 'get',
  path: '/sks-template/{kube-version}/{variant}',
  tags: ['nodepool-template'],
  description: 'Get the active template for a given kube version and variant (standard | nvidia)',
  operationId: 'get-active-nodepool-template',
  request: {
    params: z.object({
      'kube-version': z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'kube-version', schema: { type: 'string' } },
        }),
      variant: z
        .enum(['standard', 'nvidia'])
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'variant',
            schema: { type: 'string', enum: ['standard', 'nvidia'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'active-template': z.uuid().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putInstanceIdResizeDiskRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:resize-disk',
  tags: ['instance'],
  summary: 'Resize a Compute instance disk',
  description:
    "This operation resizes a Compute instance's disk volume. Note: the disk can only grow, cannot be shrunk.",
  operationId: 'resize-instance-disk',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'disk-size': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(10n).max(51200n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 10,
                  maximum: 51200,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Instance disk size in GiB',
                }),
            })
            .openapi({ required: ['disk-size'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasServiceRoute = createRoute({
  method: 'get',
  path: '/dbaas-service',
  tags: ['dbaas'],
  summary: 'List DBaaS services',
  description: 'List DBaaS services',
  operationId: 'list-dbaas-services',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'dbaas-services': z.array(DbaasServiceCommonSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getElasticIpRoute = createRoute({
  method: 'get',
  path: '/elastic-ip',
  tags: ['elastic-ip'],
  summary: 'List Elastic IPs',
  operationId: 'list-elastic-ips',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'elastic-ips': z.array(ElasticIpSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postElasticIpRoute = createRoute({
  method: 'post',
  path: '/elastic-ip',
  tags: ['elastic-ip'],
  summary: 'Create an Elastic IP',
  operationId: 'create-elastic-ip',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              addressfamily: z
                .enum(['inet4', 'inet6'])
                .exactOptional()
                .openapi({ description: 'Elastic IP address family (default: :inet4)' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Elastic IP description' }),
              healthcheck: ElasticIpHealthcheckSchema.exactOptional().openapi({
                description: 'Elastic IP healthcheck',
              }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getZoneRoute = createRoute({
  method: 'get',
  path: '/zone',
  tags: ['zone'],
  summary: 'List Zones',
  operationId: 'list-zones',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ zones: z.array(ZoneSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInstancePoolRoute = createRoute({
  method: 'get',
  path: '/instance-pool',
  tags: ['instance-pool'],
  summary: 'List Instance Pools',
  operationId: 'list-instance-pools',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'instance-pools': z.array(InstancePoolSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postInstancePoolRoute = createRoute({
  method: 'post',
  path: '/instance-pool',
  tags: ['instance-pool'],
  summary: 'Create an Instance Pool',
  operationId: 'create-instance-pool',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'application-consistent-snapshot-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable application consistent snapshots' }),
              'anti-affinity-groups': z
                .array(AntiAffinityGroupRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instance Pool Anti-affinity Groups' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Instance Pool description' }),
              'public-ip-assignment': z
                .enum(['inet4', 'dual', 'none'])
                .exactOptional()
                .openapi({
                  description:
                    "Determines public IP assignment of the Instances. Type `none` is final and can't be changed later on.",
                }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Instance Pool Labels' }),
              'security-groups': z
                .array(SecurityGroupRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instance Pool Security Groups' }),
              'elastic-ips': z
                .array(ElasticIpRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instances Elastic IPs' }),
              name: z.string().min(1).max(255).openapi({ description: 'Instance Pool name' }),
              'instance-type': InstanceTypeRefSchema.openapi({ description: 'Instances type' }),
              'min-available': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'Minimum number of running Instances',
                }),
              'private-networks': z
                .array(PrivateNetworkRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instance Pool Private Networks' }),
              template: TemplateRefSchema.openapi({ description: 'Instances template' }),
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'Number of Instances',
                }),
              'ssh-key': SshKeyRefSchema.exactOptional().openapi({
                description: 'Instances SSH key',
              }),
              'instance-prefix': z
                .string()
                .min(1)
                .max(30)
                .exactOptional()
                .openapi({ description: 'Prefix to apply to Instances names (default: pool)' }),
              'user-data': z
                .string()
                .min(1)
                .max(32768)
                .exactOptional()
                .openapi({ description: 'Instances Cloud-init user-data' }),
              'deploy-target': DeployTargetRefSchema.exactOptional().openapi({
                description: 'Deploy Target to deploy Instances on',
              }),
              'ipv6-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable IPv6. DEPRECATED: use `public-ip-assignments`.' }),
              'disk-size': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(10n).max(51200n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 10,
                  maximum: 51200,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Instances disk size in GiB',
                }),
              'ssh-keys': z
                .array(SshKeyRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instances SSH Keys' }),
            })
            .openapi({ required: ['name', 'size', 'instance-type', 'template', 'disk-size'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasExternalEndpointRsyslogNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-external-endpoint-rsyslog/{name}',
  tags: ['dbaas'],
  description: '[BETA] Create RSyslog external integration endpoint',
  operationId: 'create-dbaas-external-endpoint-rsyslog',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointRsyslogInputCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postSksClusterKubeconfigIdRoute = createRoute({
  method: 'post',
  path: '/sks-cluster-kubeconfig/{id}',
  tags: ['cluster'],
  summary: 'Generate a new Kubeconfig file for a SKS cluster',
  description: 'This operation returns a Kubeconfig file encoded in base64.',
  operationId: 'generate-sks-cluster-kubeconfig',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SksKubeconfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z.object({ kubeconfig: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDnsDomainDomainIdRecordRoute = createRoute({
  method: 'get',
  path: '/dns-domain/{domain-id}/record',
  tags: ['record'],
  summary: 'List DNS domain records',
  operationId: 'list-dns-domain-records',
  request: {
    params: z.object({
      'domain-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'dns-domain-records': z.array(DnsDomainRecordSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDnsDomainDomainIdRecordRoute = createRoute({
  method: 'post',
  path: '/dns-domain/{domain-id}/record',
  tags: ['record'],
  summary: 'Create DNS domain record',
  operationId: 'create-dns-domain-record',
  request: {
    params: z.object({
      'domain-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'DNS domain record name' }),
              type: z
                .enum([
                  'NS',
                  'CAA',
                  'NAPTR',
                  'POOL',
                  'A',
                  'HINFO',
                  'CNAME',
                  'SSHFP',
                  'SRV',
                  'AAAA',
                  'MX',
                  'TXT',
                  'ALIAS',
                  'URL',
                ])
                .openapi({ description: 'DNS domain record type' }),
              content: z.string().openapi({ description: 'DNS domain record content' }),
              ttl: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'DNS domain record TTL',
                }),
              priority: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'DNS domain record priority',
                }),
            })
            .openapi({ required: ['name', 'type', 'content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasCaCertificateRoute = createRoute({
  method: 'get',
  path: '/dbaas-ca-certificate',
  tags: ['dbaas'],
  summary: 'Get DBaaS CA Certificate',
  description:
    'Returns a CA Certificate required to reach a DBaaS service through a TLS-protected connection.',
  operationId: 'get-dbaas-ca-certificate',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z.object({ certificate: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDbaasSettingsGrafanaRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-grafana',
  tags: ['dbaas'],
  summary: 'Get DBaaS Grafana settings',
  description: 'Get DBaaS Grafana settings',
  operationId: 'get-dbaas-settings-grafana',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  grafana: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'Grafana configuration values', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postEnvironmentalImpactEstimateRoute = createRoute({
  method: 'post',
  path: '/environmental-impact/estimate',
  tags: [],
  summary: 'Return an estimate of the impact of a given usage',
  operationId: 'get-impact-estimate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ sku: z.string(), metadata: z.looseObject({}).exactOptional() })
            .openapi({ required: ['sku'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Impact estimate',
      content: {
        'application/json': {
          schema: z
            .object({ impact: z.record(z.string(), ImpactValueWithUnitSchema) })
            .openapi({ required: ['impact'] }),
        },
      },
    },
    400: {
      description: 'Invalid request (e.g. product does not exist)',
      content: { 'application/json': { schema: ImpactErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ImpactErrorResponseSchema } },
    },
  },
})

export const getDeployTargetRoute = createRoute({
  method: 'get',
  path: '/deploy-target',
  tags: ['deploy-target'],
  summary: 'List Deploy Targets',
  operationId: 'list-deploy-targets',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'deploy-targets': z.array(DeployTargetSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInstanceTypeRoute = createRoute({
  method: 'get',
  path: '/instance-type',
  tags: ['instance-type'],
  summary: 'List Compute instance Types',
  operationId: 'list-instance-types',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'instance-types': z.array(InstanceTypeSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAiDeploymentRoute = createRoute({
  method: 'get',
  path: '/ai/deployment',
  tags: ['deployment'],
  summary: 'List Deployments',
  description: 'List Deployments',
  operationId: 'list-deployments',
  request: {
    query: z.object({
      visibility: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'visibility', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListDeploymentsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAiDeploymentRoute = createRoute({
  method: 'post',
  path: '/ai/deployment',
  tags: ['deployment'],
  summary: 'Create Deployment',
  description: 'Deploy a model on an inference server',
  operationId: 'create-deployment',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OperationSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    412: {
      description: '412 (probably insufficient GPUs)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getLiveBalanceRoute = createRoute({
  method: 'get',
  path: '/live-balance',
  tags: ['organization'],
  summary: '[BETA] Retrieve the live-balance',
  description: '[BETA] Returns the live-balance of the current organization.',
  operationId: 'get-live-balance',
  responses: {
    200: { description: '200', content: { 'application/json': { schema: LiveBalanceSchema } } },
    429: { description: '429', content: { 'application/json': { schema: RateLimitedSchema } } },
  },
})

export const deleteDbaasPostgresServiceNameDatabaseDatabaseNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-postgres/{service-name}/database/{database-name}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS Postgres database',
  operationId: 'delete-dbaas-pg-database',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'database-name': DbaasPgDatabaseNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'database-name',
          schema: { $ref: '#/components/schemas/dbaas-pg-database-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasClickhouseServiceNameRoleRoute = createRoute({
  method: 'get',
  path: '/dbaas-clickhouse/{service-name}/role',
  tags: ['dbaas'],
  summary: '[BETA] List DBaaS ClickHouse roles',
  operationId: 'list-dbaas-clickhouse-roles',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasClickhouseRolesSchema } },
    },
  },
})

export const putBlockStorageIdAttachRoute = createRoute({
  method: 'put',
  path: '/block-storage/{id}:attach',
  tags: ['block-storage'],
  summary: 'Attach block storage volume to an instance',
  operationId: 'attach-block-storage-volume-to-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              instance: InstanceRefSchema.openapi({
                description:
                  'Instance to attach to, this can only be done if the volume is not currently attached',
              }),
            })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postKmsKeyIdEnableRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/enable',
  tags: ['kms-key'],
  summary: 'Enable KMS Key',
  description:
    'Enables a KMS Key by setting its state to "enabled". It restores the ability to fully use the KMS key for cryptographic operations and key lifecycle operations.',
  operationId: 'enable-kms-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key enabled',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Pending Deletion: The request was rejected because it was performed on a key that is pending deletion.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDbaasPostgresNameMigrationStopRoute = createRoute({
  method: 'post',
  path: '/dbaas-postgres/{name}/migration/stop',
  tags: ['dbaas'],
  summary: 'Stop a DBaaS PostgreSQL migration',
  operationId: 'stop-dbaas-pg-migration',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasKafkaNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-kafka/{name}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS Kafka service',
  operationId: 'get-dbaas-service-kafka',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceKafkaSchema } },
    },
  },
})

export const putDbaasKafkaNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-kafka/{name}',
  tags: ['dbaas'],
  summary: 'Update a DBaaS Kafka service',
  description: 'Update a DBaaS Kafka service',
  operationId: 'update-dbaas-service-kafka',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'authentication-methods': z
                .object({
                  certificate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Enable certificate/SSL authentication' }),
                  sasl: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Enable SASL authentication' }),
                })
                .exactOptional()
                .openapi({ description: 'Kafka authentication methods', required: [] }),
              'kafka-rest-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable Kafka-REST service' }),
              'kafka-connect-enabled': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow clients to connect to kafka_connect from the public internet for service nodes that are in a project VPC or another type of private network',
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'schema-registry-settings': JsonSchemaSchemaRegistrySchema.exactOptional().openapi({
                description: 'Schema Registry configuration',
              }),
              'kafka-rest-settings': JsonSchemaKafkaRestSchema.exactOptional().openapi({
                description: 'Kafka REST configuration',
              }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'kafka-connect-settings': JsonSchemaKafkaConnectSchema.exactOptional().openapi({
                description: 'Kafka Connect configuration values',
              }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              'kafka-settings': JsonSchemaKafkaSchema.exactOptional().openapi({
                description: 'Kafka-specific settings',
              }),
              'schema-registry-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable Schema-Registry service' }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'Kafka major version' }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasKafkaNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-kafka/{name}',
  tags: ['dbaas'],
  summary: 'Create a DBaaS Kafka service',
  description: 'Create a DBaaS Kafka service',
  operationId: 'create-dbaas-service-kafka',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'authentication-methods': z
                .object({
                  certificate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Enable certificate/SSL authentication' }),
                  sasl: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Enable SASL authentication' }),
                })
                .exactOptional()
                .openapi({ description: 'Kafka authentication methods', required: [] }),
              'kafka-rest-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable Kafka-REST service' }),
              'kafka-connect-enabled': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow clients to connect to kafka_connect from the public internet for service nodes that are in a project VPC or another type of private network',
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'schema-registry-settings': JsonSchemaSchemaRegistrySchema.exactOptional().openapi({
                description: 'Schema Registry configuration',
              }),
              'kafka-rest-settings': JsonSchemaKafkaRestSchema.exactOptional().openapi({
                description: 'Kafka REST configuration',
              }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'kafka-connect-settings': JsonSchemaKafkaConnectSchema.exactOptional().openapi({
                description: 'Kafka Connect configuration values',
              }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              'kafka-settings': JsonSchemaKafkaSchema.exactOptional().openapi({
                description: 'Kafka-specific settings',
              }),
              'schema-registry-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable Schema-Registry service' }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'Kafka major version' }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasKafkaNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-kafka/{name}',
  tags: ['dbaas'],
  summary: 'Delete a Kafka service',
  operationId: 'delete-dbaas-service-kafka',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstanceIdResetPasswordRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:reset-password',
  tags: ['instance'],
  summary: 'Reset a compute instance password',
  operationId: 'reset-instance-password',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasKafkaNameSchemaRegistryAclConfigRoute = createRoute({
  method: 'post',
  path: '/dbaas-kafka/{name}/schema-registry/acl-config',
  tags: ['dbaas'],
  summary: 'Add a Kafka Schema Registry ACL entry',
  operationId: 'create-dbaas-kafka-schema-registry-acl-config',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasKafkaSchemaRegistryAclEntrySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putPrivateNetworkIdUpdateIpRoute = createRoute({
  method: 'put',
  path: '/private-network/{id}:update-ip',
  tags: ['private-network'],
  summary: 'Update the IP address of an instance attached to a managed private network',
  operationId: 'update-private-network-instance-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ip: z
                .ipv4()
                .exactOptional()
                .openapi({
                  description: 'Static IP address lease for the corresponding network interface',
                }),
              instance: z
                .object({ id: z.uuid().openapi({ description: 'Instance ID' }) })
                .exactOptional()
                .openapi({ required: ['id'] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getVpcVpcIdRouteRoute = createRoute({
  method: 'get',
  path: '/vpc/{vpc-id}/route',
  tags: ['vpc-route'],
  summary: '[BETA] List VPC routes',
  operationId: 'list-vpc-routes',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ routes: z.array(ListRouteEntrySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSksClusterIdNodepoolSksNodepoolIdRoute = createRoute({
  method: 'get',
  path: '/sks-cluster/{id}/nodepool/{sks-nodepool-id}',
  tags: ['nodepool'],
  summary: 'Retrieve SKS Nodepool details',
  operationId: 'get-sks-nodepool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'sks-nodepool-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'sks-nodepool-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: SksNodepoolSchema } } },
  },
})

export const putSksClusterIdNodepoolSksNodepoolIdRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/nodepool/{sks-nodepool-id}',
  tags: ['nodepool'],
  summary: 'Update an SKS Nodepool',
  operationId: 'update-sks-nodepool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'sks-nodepool-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'sks-nodepool-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'anti-affinity-groups': z
                .array(AntiAffinityGroupRefSchema)
                .max(8)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Nodepool Anti-affinity Groups' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Nodepool description' }),
              'public-ip-assignment': z
                .enum(['inet4', 'dual'])
                .exactOptional()
                .openapi({
                  description:
                    'Configures public IP assignment of the Instances with:\n\n* IPv4 (`inet4`) addressing only;\n* both IPv4 and IPv6 (`dual`) addressing.',
                }),
              labels: SksNodepoolLabelsSchema.exactOptional().openapi({
                description: 'Nodepool labels',
              }),
              taints: SksNodepoolTaintsSchema.exactOptional().openapi({
                description: 'Nodepool taints',
              }),
              'security-groups': z
                .array(SecurityGroupRefSchema)
                .max(16)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Nodepool Security Groups' }),
              name: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Nodepool name, lowercase only' }),
              'instance-type': InstanceTypeRefSchema.exactOptional().openapi({
                description: 'Nodepool instances type',
              }),
              'private-networks': z
                .array(PrivateNetworkRefSchema)
                .max(16)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Nodepool Private Networks' }),
              'kubelet-image-gc': KubeletImageGcSchema.exactOptional().openapi({
                description: 'Kubelet image GC options',
              }),
              'instance-prefix': z
                .string()
                .min(1)
                .max(30)
                .exactOptional()
                .openapi({
                  description:
                    'Prefix to apply to managed instances names (default: pool), lowercase only',
                }),
              'deploy-target': DeployTargetRefSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Nodepool Deploy Target' }),
              'disk-size': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(20n).max(51200n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 20,
                  maximum: 51200,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Nodepool instances disk size in GiB',
                }),
              'nvidia-mig-profiles': NvidiaMigProfilesSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Nvidia MIG Profiles' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteSksClusterIdNodepoolSksNodepoolIdRoute = createRoute({
  method: 'delete',
  path: '/sks-cluster/{id}/nodepool/{sks-nodepool-id}',
  tags: ['nodepool'],
  summary: 'Delete an SKS Nodepool',
  operationId: 'delete-sks-nodepool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'sks-nodepool-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'sks-nodepool-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getBlockStorageSnapshotIdRoute = createRoute({
  method: 'get',
  path: '/block-storage-snapshot/{id}',
  tags: ['block-storage'],
  summary: 'Retrieve block storage snapshot details',
  operationId: 'get-block-storage-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: BlockStorageSnapshotSchema } },
    },
  },
})

export const putBlockStorageSnapshotIdRoute = createRoute({
  method: 'put',
  path: '/block-storage-snapshot/{id}',
  tags: ['block-storage'],
  summary: 'Update block storage volume snapshot',
  operationId: 'update-block-storage-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Snapshot name' }),
              labels: LabelsSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Resource labels' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteBlockStorageSnapshotIdRoute = createRoute({
  method: 'delete',
  path: '/block-storage-snapshot/{id}',
  tags: ['block-storage'],
  summary: 'Delete a block storage snapshot, data will be unrecoverable',
  operationId: 'delete-block-storage-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getKmsKeyIdListKeyRotationsRoute = createRoute({
  method: 'get',
  path: '/kms-key/{id}/list-key-rotations',
  tags: ['kms-key'],
  summary: 'List KMS Key Rotations',
  description: 'List all the key material versions of a KMS Key.',
  operationId: 'list-kms-key-rotations',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of all historical rotations for the requested KMS key.',
      content: { 'application/json': { schema: ListKmsKeyRotationsResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDbaasPostgresServiceNameUserRoute = createRoute({
  method: 'post',
  path: '/dbaas-postgres/{service-name}/user',
  tags: ['dbaas'],
  summary: 'Create a DBaaS Postgres user',
  operationId: 'create-dbaas-postgres-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
              'allow-replication': z.boolean().exactOptional(),
            })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalIntegrationsServiceNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-integrations/{service-name}',
  tags: ['dbaas'],
  description: '[BETA] List all DBaaS connections between services and external endpoints',
  operationId: 'list-dbaas-external-integrations',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              'external-integrations': z.array(DbaasExternalIntegrationSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDbaasExternalIntegrationIntegrationIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-integration/{integration-id}',
  tags: ['dbaas'],
  description: '[BETA] Get a DBaaS external integration',
  operationId: 'get-dbaas-external-integration',
  request: {
    params: z.object({
      'integration-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'integration-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasExternalIntegrationSchema } },
    },
  },
})

export const getInstancePoolIdRoute = createRoute({
  method: 'get',
  path: '/instance-pool/{id}',
  tags: ['instance-pool'],
  summary: 'Retrieve Instance Pool details',
  operationId: 'get-instance-pool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: InstancePoolSchema } } },
  },
})

export const putInstancePoolIdRoute = createRoute({
  method: 'put',
  path: '/instance-pool/{id}',
  tags: ['instance-pool'],
  summary: 'Update an Instance Pool',
  operationId: 'update-instance-pool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'application-consistent-snapshot-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable application consistent snapshots' }),
              'anti-affinity-groups': z
                .array(AntiAffinityGroupRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instance Pool Anti-affinity Groups' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Instance Pool description' }),
              'public-ip-assignment': z
                .enum(['inet4', 'dual'])
                .exactOptional()
                .openapi({ description: 'Determines public IP assignment of the Instances.' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Instance Pool Labels' }),
              'security-groups': z
                .array(SecurityGroupRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instance Pool Security Groups' }),
              'elastic-ips': z
                .array(ElasticIpRefSchema)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instances Elastic IPs' }),
              name: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Instance Pool name' }),
              'instance-type': InstanceTypeRefSchema.exactOptional().openapi({
                description: 'Instances type',
              }),
              'min-available': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .nullable()
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'Minimum number of running Instances',
                }),
              'private-networks': z
                .array(PrivateNetworkRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instance Pool Private Networks' }),
              template: TemplateRefSchema.exactOptional().openapi({
                description: 'Instances template',
              }),
              'ssh-key': SshKeyRefSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Instances SSH key' }),
              'instance-prefix': z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Prefix to apply to Instances names (default: pool)' }),
              'user-data': z
                .string()
                .min(1)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instances Cloud-init user-data' }),
              'deploy-target': DeployTargetRefSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Instance Pool Deploy Target' }),
              'ipv6-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable IPv6. DEPRECATED: use `public-ip-assignments`.' }),
              'disk-size': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(10n).max(51200n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 10,
                  maximum: 51200,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Instances disk size in GiB',
                }),
              'ssh-keys': z
                .array(SshKeyRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instances SSH keys' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteInstancePoolIdRoute = createRoute({
  method: 'delete',
  path: '/instance-pool/{id}',
  tags: ['instance-pool'],
  summary: 'Delete an Instance Pool',
  operationId: 'delete-instance-pool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalEndpointTypesRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-endpoint-types',
  tags: ['dbaas'],
  description:
    '[BETA] List available external endpoint types and their schemas for DBaaS external integrations',
  operationId: 'list-dbaas-external-endpoint-types',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              'endpoint-types': z
                .array(
                  z
                    .object({
                      type: EnumExternalEndpointTypesSchema.exactOptional(),
                      'service-types': z.array(z.string()).exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAiApiKeyIdRoute = createRoute({
  method: 'get',
  path: '/ai/api-key/{id}',
  tags: ['ai-api-key'],
  summary: '[BETA] Get AI API Key',
  description: 'Get AI API key metadata',
  operationId: 'get-ai-api-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetAiApiKeyResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAiApiKeyIdRoute = createRoute({
  method: 'delete',
  path: '/ai/api-key/{id}',
  tags: ['ai-api-key'],
  summary: '[BETA] Delete AI API Key',
  description: 'Delete AI API key',
  operationId: 'delete-ai-api-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OperationSchema } } },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const patchAiApiKeyIdRoute = createRoute({
  method: 'patch',
  path: '/ai/api-key/{id}',
  tags: ['ai-api-key'],
  summary: '[BETA] Update AI API Key',
  description: 'Update AI API key name and/or scope',
  operationId: 'update-ai-api-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAiApiKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateAiApiKeyResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getPrivateNetworkRoute = createRoute({
  method: 'get',
  path: '/private-network',
  tags: ['private-network'],
  summary: 'List Private Networks',
  operationId: 'list-private-networks',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'private-networks': z.array(PrivateNetworkSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postPrivateNetworkRoute = createRoute({
  method: 'post',
  path: '/private-network',
  tags: ['private-network'],
  summary: 'Create a Private Network',
  operationId: 'create-private-network',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(255).openapi({ description: 'Private Network name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Private Network description' }),
              netmask: z.ipv4().exactOptional().openapi({ description: 'Private Network netmask' }),
              'start-ip': z
                .ipv4()
                .exactOptional()
                .openapi({ description: 'Private Network start IP address' }),
              'end-ip': z
                .ipv4()
                .exactOptional()
                .openapi({ description: 'Private Network end IP address' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
              options: PrivateNetworkOptionsSchema.exactOptional().openapi({
                description: 'DHCP options',
              }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getVpcRoute = createRoute({
  method: 'get',
  path: '/vpc',
  tags: ['vpc-management'],
  summary: '[BETA] List VPCs',
  operationId: 'list-vpcs',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ vpcs: z.array(ListVpcEntrySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postVpcRoute = createRoute({
  method: 'post',
  path: '/vpc',
  tags: ['vpc-management'],
  summary: '[BETA] Create a VPC',
  operationId: 'create-vpc',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(255).openapi({ description: 'VPC name' }),
              description: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({ description: 'VPC description' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postAiApiKeyIdRotateRoute = createRoute({
  method: 'post',
  path: '/ai/api-key/{id}/rotate',
  tags: ['ai-api-key'],
  summary: '[BETA] Rotate AI API Key',
  description: 'Rotate AI API key value',
  operationId: 'rotate-ai-api-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RotateAiApiKeyResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putInstanceIdStartRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:start',
  tags: ['instance'],
  summary: 'Start a Compute instance',
  description:
    'This operation starts a virtual machine, potentially using a rescue profile if specified',
  operationId: 'start-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'rescue-profile': z
                .enum(['netboot-efi', 'netboot'])
                .exactOptional()
                .openapi({
                  description:
                    'Boot in Rescue Mode, using named profile (supported: netboot, netboot-efi)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postInstanceIdEnableTpmRoute = createRoute({
  method: 'post',
  path: '/instance/{id}:enable-tpm',
  tags: ['instance'],
  summary: 'Enable tpm for the instance.',
  operationId: 'enable-tpm',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getOrganizationRoute = createRoute({
  method: 'get',
  path: '/organization',
  tags: ['organization'],
  summary: 'Retrieve an organization',
  operationId: 'get-organization',
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OrganizationSchema } } },
  },
})

export const getSecurityGroupIdRoute = createRoute({
  method: 'get',
  path: '/security-group/{id}',
  tags: ['security-group'],
  summary: 'Retrieve Security Group details',
  operationId: 'get-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: SecurityGroupSchema } } },
  },
})

export const deleteSecurityGroupIdRoute = createRoute({
  method: 'delete',
  path: '/security-group/{id}',
  tags: ['security-group'],
  summary: 'Delete a Security Group',
  operationId: 'delete-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasClickhouseServiceNameRoleRoleUuidRoute = createRoute({
  method: 'delete',
  path: '/dbaas-clickhouse/{service-name}/role/{role-uuid}',
  tags: ['dbaas'],
  summary: '[BETA] Delete a DBaaS ClickHouse role',
  operationId: 'delete-dbaas-clickhouse-role',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'role-uuid': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'role-uuid',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSksClusterIdAuthorityAuthorityCertRoute = createRoute({
  method: 'get',
  path: '/sks-cluster/{id}/authority/{authority}/cert',
  tags: ['cluster'],
  summary: 'Get the certificate for a SKS cluster authority',
  description:
    'This operation returns the certificate for the given SKS cluster authority encoded in base64.',
  operationId: 'get-sks-cluster-authority-cert',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      authority: z
        .enum(['control-plane', 'aggregation', 'kubelet'])
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'authority',
            schema: { type: 'string', enum: ['control-plane', 'aggregation', 'kubelet'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z.object({ cacert: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSnapshotIdExportRoute = createRoute({
  method: 'post',
  path: '/snapshot/{id}:export',
  tags: ['snapshot'],
  summary: 'Export a Snapshot',
  operationId: 'export-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/ai/deployment/{id}',
  tags: ['deployment'],
  summary: 'Get Deployment',
  description: 'Get Deployment details',
  operationId: 'get-deployment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDeploymentResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAiDeploymentIdRoute = createRoute({
  method: 'delete',
  path: '/ai/deployment/{id}',
  tags: ['deployment'],
  summary: 'Delete Deployment',
  description: 'Delete Deployment',
  operationId: 'delete-deployment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OperationSchema } } },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const patchAiDeploymentIdRoute = createRoute({
  method: 'patch',
  path: '/ai/deployment/{id}',
  tags: ['deployment'],
  summary: 'Update Deployment',
  description: 'Update AI deployment',
  operationId: 'update-deployment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OperationSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDbaasKafkaServiceNameConnectPasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-kafka/{service-name}/connect/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets for DBaaS Kafka Connect',
  operationId: 'reveal-dbaas-kafka-connect-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserKafkaConnectSecretsSchema } },
    },
  },
})

export const postKmsKeyIdEnableKeyRotationRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/enable-key-rotation',
  tags: ['kms-key'],
  summary: 'Enable Key Rotation',
  description: 'Enable the periodic rotation of a KMS Key.',
  operationId: 'enable-kms-key-rotation',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableKmsKeyRotationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Periodic key rotation enabled',
      content: { 'application/json': { schema: EnableKmsKeyRotationResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nInvalid Origin: The request was rejected because automatic key rotation can only be enabled on a KMS key with origin "exoscale-kms".\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nNot on Default: The request was rejected because the operation is not allowed on the default key.\n\nNot on Replica: The request was rejectde because the operation is not allowed on a replica.\n\nKey is Pending Deletion: The request was rejected because it was performed on a key that is pending deletion.\n\nKey is Disabled: The request was rejected because the specified KMS key is disabled.\n\nInvalid Usage: The request was rejected because the operation is only allowed on symmetric keys with usage "encrypt-decrypt".\n\nConflict: The request was rejected because the automatic rotation is already enabled for this KMS Key.\n\nBad Request: The request was rejected because of an invalid request body or path parameter.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getVpcVpcIdSubnetSubnetIdRouteRoute = createRoute({
  method: 'get',
  path: '/vpc/{vpc-id}/subnet/{subnet-id}/route',
  tags: ['vpc-route'],
  summary: '[BETA] List Subnet routes',
  operationId: 'list-routes',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'subnet-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'subnet-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ routes: z.array(ListRouteEntrySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postVpcVpcIdSubnetSubnetIdRouteRoute = createRoute({
  method: 'post',
  path: '/vpc/{vpc-id}/subnet/{subnet-id}/route',
  tags: ['vpc-route'],
  summary: '[BETA] Create a route',
  operationId: 'create-route',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'subnet-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'subnet-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({ description: 'Route description' }),
              destination: z.string().openapi({ description: 'Route destination CIDR' }),
              target: z.string().openapi({ description: 'Route target' }),
            })
            .openapi({ required: ['destination', 'target'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: RouteSchema } } },
  },
})

export const deleteElasticIpIdFieldRoute = createRoute({
  method: 'delete',
  path: '/elastic-ip/{id}/{field}',
  tags: ['elastic-ip'],
  summary: 'Reset an Elastic IP field to its default value',
  operationId: 'reset-elastic-ip-field',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      field: z
        .literal('description')
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'field',
            schema: { type: 'string', enum: ['description'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getQuotaEntityRoute = createRoute({
  method: 'get',
  path: '/quota/{entity}',
  tags: ['quotas'],
  summary: 'Retrieve Resource Quota',
  operationId: 'get-quota',
  request: {
    params: z.object({
      entity: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'entity', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: QuotaSchema } } },
  },
})

export const getVpcVpcIdSubnetRoute = createRoute({
  method: 'get',
  path: '/vpc/{vpc-id}/subnet',
  tags: ['vpc-subnet'],
  summary: '[BETA] List Subnets',
  operationId: 'list-subnets',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ subnets: z.array(ListSubnetEntrySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postVpcVpcIdSubnetRoute = createRoute({
  method: 'post',
  path: '/vpc/{vpc-id}/subnet',
  tags: ['vpc-subnet'],
  summary: '[BETA] Create a Subnet',
  operationId: 'create-subnet',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(255).openapi({ description: 'Subnet name' }),
              description: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({ description: 'Subnet description' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
              addressfamily: z.literal('inet4').openapi({ description: 'Subnet address family' }),
              'address-space': z
                .literal('private')
                .openapi({ description: 'Subnet address space' }),
              'ipv4-block': z.string().exactOptional().openapi({ description: 'Subnet ipv4 CIDR' }),
            })
            .openapi({ required: ['name', 'addressfamily', 'address-space'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSksClusterDeprecatedResourcesIdRoute = createRoute({
  method: 'get',
  path: '/sks-cluster-deprecated-resources/{id}',
  tags: ['cluster'],
  summary: 'Resources that are scheduled to be removed in future kubernetes releases',
  description: 'This operation returns the deprecated resources for a given cluster',
  operationId: 'list-sks-cluster-deprecated-resources',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: z.array(SksClusterDeprecatedResourceSchema) } },
    },
  },
})

export const getBlockStorageIdRoute = createRoute({
  method: 'get',
  path: '/block-storage/{id}',
  tags: ['block-storage'],
  summary: 'Retrieve block storage volume details',
  operationId: 'get-block-storage-volume',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: BlockStorageVolumeSchema } },
    },
  },
})

export const putBlockStorageIdRoute = createRoute({
  method: 'put',
  path: '/block-storage/{id}',
  tags: ['block-storage'],
  summary: 'Update block storage volume',
  operationId: 'update-block-storage-volume',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Volume name' }),
              labels: LabelsSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Resource labels' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteBlockStorageIdRoute = createRoute({
  method: 'delete',
  path: '/block-storage/{id}',
  tags: ['block-storage'],
  summary: 'Delete a block storage volume, data will be unrecoverable',
  operationId: 'delete-block-storage-volume',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasOpensearchServiceNameUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-opensearch/{service-name}/user/{username}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS OpenSearch user',
  operationId: 'delete-dbaas-opensearch-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalEndpointPrometheusEndpointIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-endpoint-prometheus/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Get Prometheus external integration endpoint settings',
  operationId: 'get-dbaas-external-endpoint-prometheus',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasEndpointExternalPrometheusOutputSchema } },
    },
  },
})

export const putDbaasExternalEndpointPrometheusEndpointIdRoute = createRoute({
  method: 'put',
  path: '/dbaas-external-endpoint-prometheus/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Update Prometheus external integration endpoint',
  operationId: 'update-dbaas-external-endpoint-prometheus',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointPrometheusPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasExternalEndpointPrometheusEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-external-endpoint-prometheus/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Delete Prometheus external integration endpoint',
  operationId: 'delete-dbaas-external-endpoint-prometheus',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postBlockStorageIdCreateSnapshotRoute = createRoute({
  method: 'post',
  path: '/block-storage/{id}:create-snapshot',
  tags: ['block-storage'],
  summary: 'Create a block storage snapshot',
  operationId: 'create-block-storage-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Snapshot name' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putPrivateNetworkIdDetachRoute = createRoute({
  method: 'put',
  path: '/private-network/{id}:detach',
  tags: ['private-network'],
  summary: 'Detach a Compute instance from a Private Network',
  operationId: 'detach-instance-from-private-network',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ instance: InstanceSchema.openapi({ description: 'Compute instance' }) })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getPrivateNetworkIdRoute = createRoute({
  method: 'get',
  path: '/private-network/{id}',
  tags: ['private-network'],
  summary: 'Retrieve Private Network details',
  operationId: 'get-private-network',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: PrivateNetworkSchema } } },
  },
})

export const putPrivateNetworkIdRoute = createRoute({
  method: 'put',
  path: '/private-network/{id}',
  tags: ['private-network'],
  summary: 'Update a Private Network',
  operationId: 'update-private-network',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Private Network name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Private Network description' }),
              netmask: z.ipv4().exactOptional().openapi({ description: 'Private Network netmask' }),
              'start-ip': z
                .ipv4()
                .exactOptional()
                .openapi({ description: 'Private Network start IP address' }),
              'end-ip': z
                .ipv4()
                .exactOptional()
                .openapi({ description: 'Private Network end IP address' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
              options: PrivateNetworkOptionsSchema.exactOptional().openapi({
                description: 'DHCP options',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deletePrivateNetworkIdRoute = createRoute({
  method: 'delete',
  path: '/private-network/{id}',
  tags: ['private-network'],
  summary: 'Delete a Private Network',
  operationId: 'delete-private-network',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiInstanceTypeRoute = createRoute({
  method: 'get',
  path: '/ai/instance-type',
  tags: ['deployment'],
  summary: 'List Instance Types',
  description: 'List available instance types with authorization status based on GPU availability',
  operationId: 'list-ai-instance-types',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAiInstanceTypesResponseSchema } },
    },
  },
})

export const deleteLoadBalancerIdFieldRoute = createRoute({
  method: 'delete',
  path: '/load-balancer/{id}/{field}',
  tags: ['network-load-balancer'],
  summary: 'Reset a Load Balancer field to its default value',
  operationId: 'reset-load-balancer-field',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      field: z
        .enum(['description', 'labels'])
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'field',
            schema: { type: 'string', enum: ['description', 'labels'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstanceIdScaleRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:scale',
  tags: ['instance'],
  summary: 'Scale a Compute instance to a new Instance Type',
  description:
    "This operation changes the Compute instance's type. Note: the new Instance Type must be within the same family (e.g. a standard instance cannot be scaled to gpu2 or storage).",
  operationId: 'scale-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'instance-type': InstanceTypeRefSchema.openapi({ description: 'Instance Type' }),
            })
            .openapi({ required: ['instance-type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getApiKeyRoute = createRoute({
  method: 'get',
  path: '/api-key',
  tags: ['api-key'],
  summary: 'List API keys',
  operationId: 'list-api-keys',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'api-keys': z.array(IamApiKeySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiKeyRoute = createRoute({
  method: 'post',
  path: '/api-key',
  tags: ['api-key'],
  summary: 'Create a new API key',
  operationId: 'create-api-key',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'role-id': z.uuid().openapi({ description: 'IAM API Key Role ID' }),
              name: z.string().min(1).max(255).openapi({ description: 'IAM API Key Name' }),
            })
            .openapi({ required: ['role-id', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: IamApiKeyCreatedSchema } },
    },
  },
})

export const getBlockStorageSnapshotRoute = createRoute({
  method: 'get',
  path: '/block-storage-snapshot',
  tags: ['block-storage'],
  summary: 'List block storage snapshots',
  operationId: 'list-block-storage-snapshots',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              'block-storage-snapshots': z.array(BlockStorageSnapshotSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDnsDomainRoute = createRoute({
  method: 'get',
  path: '/dns-domain',
  tags: ['domain'],
  summary: 'List DNS domains',
  operationId: 'list-dns-domains',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'dns-domains': z.array(DnsDomainSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDnsDomainRoute = createRoute({
  method: 'post',
  path: '/dns-domain',
  tags: ['domain'],
  summary: 'Create DNS domain',
  operationId: 'create-dns-domain',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'unicode-name': z.string().exactOptional().openapi({ description: 'Domain name' }),
            })
            .openapi({ description: 'DNS Domain', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstanceIdStopRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:stop',
  tags: ['instance'],
  summary: 'Stop a Compute instance',
  operationId: 'stop-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDnsDomainDomainIdRecordRecordIdRoute = createRoute({
  method: 'get',
  path: '/dns-domain/{domain-id}/record/{record-id}',
  tags: ['record'],
  summary: 'Retrieve DNS domain record details',
  operationId: 'get-dns-domain-record',
  request: {
    params: z.object({
      'domain-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'record-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'record-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: DnsDomainRecordSchema } } },
  },
})

export const putDnsDomainDomainIdRecordRecordIdRoute = createRoute({
  method: 'put',
  path: '/dns-domain/{domain-id}/record/{record-id}',
  tags: ['record'],
  summary: 'Update DNS domain record',
  operationId: 'update-dns-domain-record',
  request: {
    params: z.object({
      'domain-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'record-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'record-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'DNS domain record name' }),
              content: z
                .string()
                .exactOptional()
                .openapi({ description: 'DNS domain record content' }),
              ttl: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'DNS domain record TTL',
                }),
              priority: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'DNS domain record priority',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDnsDomainDomainIdRecordRecordIdRoute = createRoute({
  method: 'delete',
  path: '/dns-domain/{domain-id}/record/{record-id}',
  tags: ['record'],
  summary: 'Delete DNS domain record',
  operationId: 'delete-dns-domain-record',
  request: {
    params: z.object({
      'domain-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'record-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'record-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasKafkaServiceNameUserRoute = createRoute({
  method: 'post',
  path: '/dbaas-kafka/{service-name}/user',
  tags: ['dbaas'],
  summary: 'Create a DBaaS Kafka user',
  operationId: 'create-dbaas-kafka-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ username: DbaasUserUsernameSchema.openapi({ description: 'Username' }) })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasValkeyServiceNameUserUsernamePasswordResetRoute = createRoute({
  method: 'put',
  path: '/dbaas-valkey/{service-name}/user/{username}/password/reset',
  tags: ['dbaas'],
  summary: 'Reset the credentials of a DBaaS Valkey user',
  description: 'If no password is provided one will be generated automatically.',
  operationId: 'reset-dbaas-valkey-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: DbaasUserPasswordSchema.exactOptional().openapi({
                description: 'New password',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-integration-settings-datadog/{integration-id}',
  tags: ['dbaas'],
  description: '[BETA] Get Datadog integration settings',
  operationId: 'get-dbaas-external-integration-settings-datadog',
  request: {
    params: z.object({
      'integration-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'integration-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ settings: DbaasIntegrationSettingsDatadogSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute = createRoute({
  method: 'post',
  path: '/dbaas-external-integration-settings-datadog/{integration-id}',
  tags: ['dbaas'],
  description: '[BETA] Manage Datadog integration settings',
  operationId: 'update-dbaas-external-integration-settings-datadog',
  request: {
    params: z.object({
      'integration-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'integration-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ settings: DbaasIntegrationSettingsDatadogSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSecurityGroupIdAttachRoute = createRoute({
  method: 'put',
  path: '/security-group/{id}:attach',
  tags: ['security-group'],
  summary: 'Attach a Compute instance to a Security Group',
  operationId: 'attach-instance-to-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ instance: InstanceSchema.openapi({ description: 'Compute instance' }) })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSnapshotIdRoute = createRoute({
  method: 'get',
  path: '/snapshot/{id}',
  tags: ['snapshot'],
  summary: 'Retrieve Snapshot details',
  operationId: 'get-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: SnapshotSchema } } },
  },
})

export const deleteSnapshotIdRoute = createRoute({
  method: 'delete',
  path: '/snapshot/{id}',
  tags: ['snapshot'],
  summary: 'Delete a Snapshot',
  operationId: 'delete-snapshot',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSksClusterIdNodepoolSksNodepoolIdScaleRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/nodepool/{sks-nodepool-id}:scale',
  tags: ['nodepool'],
  summary: 'Scale a SKS Nodepool',
  operationId: 'scale-sks-nodepool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'sks-nodepool-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'sks-nodepool-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'Number of instances',
                }),
            })
            .openapi({ required: ['size'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasSettingsMysqlRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-mysql',
  tags: ['dbaas'],
  summary: 'Get DBaaS MySQL settings',
  description: 'Get DBaaS MySQL settings',
  operationId: 'get-dbaas-settings-mysql',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  mysql: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'mysql.conf configuration values', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSksClusterIdUpgradeServiceLevelRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/upgrade-service-level',
  tags: ['cluster'],
  summary: 'Upgrade a SKS cluster to pro',
  operationId: 'upgrade-sks-cluster-service-level',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasSettingsValkeyRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-valkey',
  tags: ['dbaas'],
  summary: 'Get DBaaS Valkey settings',
  description: 'Returns the default settings for Valkey.',
  operationId: 'get-dbaas-settings-valkey',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  valkey: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'Valkey configuration values', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiKeyIdRoute = createRoute({
  method: 'get',
  path: '/api-key/{id}',
  tags: ['api-key'],
  summary: 'Get API key',
  operationId: 'get-api-key',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', required: true, name: 'id', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: IamApiKeySchema } } },
  },
})

export const deleteApiKeyIdRoute = createRoute({
  method: 'delete',
  path: '/api-key/{id}',
  tags: ['api-key'],
  summary: 'Delete an API key',
  operationId: 'delete-api-key',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', required: true, name: 'id', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteLoadBalancerIdServiceServiceIdFieldRoute = createRoute({
  method: 'delete',
  path: '/load-balancer/{id}/service/{service-id}/{field}',
  tags: ['network-load-balancer', 'compute'],
  summary: 'Reset a Load Balancer Service field to its default value',
  operationId: 'reset-load-balancer-service-field',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'service-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'service-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      field: z
        .literal('description')
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'field',
            schema: { type: 'string', enum: ['description'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasPostgresServiceNameDatabaseRoute = createRoute({
  method: 'post',
  path: '/dbaas-postgres/{service-name}/database',
  tags: ['dbaas'],
  summary: 'Create a DBaaS Postgres database',
  operationId: 'create-dbaas-pg-database',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'database-name': DbaasDatabaseNameSchema.openapi({
                description: 'Service database name',
              }),
              'lc-collate': z
                .string()
                .max(128)
                .exactOptional()
                .openapi({
                  description: 'Default string sort order (LC_COLLATE) for PostgreSQL database',
                }),
              'lc-ctype': z
                .string()
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'Default character classification (LC_CTYPE) for PostgreSQL database',
                }),
            })
            .openapi({ required: ['database-name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postKmsKeyIdRotateRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/rotate',
  tags: ['kms-key'],
  summary: 'Rotate Key',
  description: 'Performs an immediate rotation of the key material for a symmetric key.',
  operationId: 'rotate-kms-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key rotated',
      content: { 'application/json': { schema: RotateKmsKeyResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Pending Deletion: The request was rejected because it was performed on a key that is pending deletion.\n\nNot on a Replica: The request was rejected because the operation is not allowed on a replica.\n\nInvalid Usage: The request was rejected because the operation is only allowed on symmetric keys with usage "encrypt-decrypt".\n\nKey is Disabled: The request was rejected because the specified KMS key is disabled.\n\nManual Rotation Limit: The request was rejected because you reached your limit of 10 manual rotations per key for this KMS key.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDbaasSettingsThanosRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-thanos',
  tags: ['dbaas'],
  summary: 'Get DBaaS Thanos settings',
  description: 'Get DBaaS Thanos settings',
  operationId: 'get-dbaas-settings-thanos',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  thanos: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'Thanos configuration values', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSecurityGroupIdRulesRoute = createRoute({
  method: 'post',
  path: '/security-group/{id}/rules',
  tags: ['security-group'],
  summary: 'Create a Security Group rule',
  operationId: 'add-rule-to-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'flow-direction': z
                .enum(['ingress', 'egress'])
                .openapi({ description: 'Network flow direction to match' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Security Group rule description' }),
              network: z
                .string()
                .exactOptional()
                .openapi({ description: 'CIDR-formatted network allowed' }),
              'security-group': SecurityGroupResourceSchema.exactOptional().openapi({
                description: 'Security Group allowed',
              }),
              protocol: z
                .enum(['tcp', 'esp', 'icmp', 'udp', 'gre', 'ah', 'ipip', 'icmpv6'])
                .openapi({ description: 'Network protocol' }),
              icmp: z
                .object({
                  code: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(-1n).max(254n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: -1,
                      maximum: 254,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                    }),
                  type: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(-1n).max(254n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: -1,
                      maximum: 254,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                    }),
                })
                .exactOptional()
                .openapi({ description: 'ICMP details (default: -1 (ANY))', required: [] }),
              'start-port': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(65535n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 65535,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Start port of the range',
                }),
              'end-port': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(65535n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 65535,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'End port of the range',
                }),
            })
            .openapi({ required: ['flow-direction', 'protocol'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasSettingsClickhouseRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-clickhouse',
  tags: ['dbaas'],
  summary: '[BETA] Get DBaaS ClickHouse settings',
  operationId: 'get-dbaas-settings-clickhouse',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  clickhouse: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'ClickHouse configuration values', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDbaasOpensearchServiceNameUserRoute = createRoute({
  method: 'post',
  path: '/dbaas-opensearch/{service-name}/user',
  tags: ['dbaas'],
  summary: 'Create a DBaaS OpenSearch user',
  operationId: 'create-dbaas-opensearch-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ username: DbaasUserUsernameSchema.openapi({ description: 'Username' }) })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasIntegrationTypesRoute = createRoute({
  method: 'get',
  path: '/dbaas-integration-types',
  tags: ['dbaas'],
  description: '[BETA] Get DBaaS integration types',
  operationId: 'list-dbaas-integration-types',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              'dbaas-integration-types': z.array(DbaasIntegrationTypeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getEnvImpactPeriodRoute = createRoute({
  method: 'get',
  path: '/env-impact/{period}',
  tags: ['organization'],
  summary: '[BETA] Retrieve organization environmental impact reports',
  description: '[BETA] Returns environmental impact reports for an organization',
  operationId: 'get-env-impact',
  request: {
    params: z.object({
      period: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'period', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: EnvImpactReportSchema } } },
  },
})

export const deleteDbaasPostgresServiceNameUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-postgres/{service-name}/user/{username}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS Postgres user',
  operationId: 'delete-dbaas-postgres-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstanceIdAddProtectionRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:add-protection',
  tags: ['instance'],
  summary: 'Set instance destruction protection',
  operationId: 'add-instance-protection',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasPostgresServiceNameUserUsernameAllowReplicationRoute = createRoute({
  method: 'put',
  path: '/dbaas-postgres/{service-name}/user/{username}/allow-replication',
  tags: ['dbaas'],
  summary: 'Update access control for one service user',
  operationId: 'update-dbaas-postgres-allow-replication',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ 'allow-replication': z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasPostgresUsersSchema } },
    },
  },
})

export const getIamRoleIdRoute = createRoute({
  method: 'get',
  path: '/iam-role/{id}',
  tags: ['role'],
  summary: 'Retrieve IAM Role',
  operationId: 'get-iam-role',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: IamRoleSchema } } },
  },
})

export const putIamRoleIdRoute = createRoute({
  method: 'put',
  path: '/iam-role/{id}',
  tags: ['role'],
  summary: 'Update IAM Role',
  operationId: 'update-iam-role',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'IAM Role description' }),
              permissions: z
                .array(z.enum(['bypass-governance-retention', 'reset-iam-organization-policy']))
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'IAM Role permissions' }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'IAM Role labels' }),
              'max-session-ttl': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'Maximum TTL requester is allowed to ask for when assuming a role',
                }),
              'assume-role-policy': IamAssumeRolePolicySchema.exactOptional().openapi({
                description: 'IAM Assume role policy',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteIamRoleIdRoute = createRoute({
  method: 'delete',
  path: '/iam-role/{id}',
  tags: ['role'],
  summary: 'Delete IAM Role',
  operationId: 'delete-iam-role',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteInstanceIdFieldRoute = createRoute({
  method: 'delete',
  path: '/instance/{id}/{field}',
  tags: ['instance'],
  summary: 'Reset Instance field',
  operationId: 'reset-instance-field',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      field: z
        .literal('labels')
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'field',
            schema: { type: 'string', enum: ['labels'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteInstancePoolIdFieldRoute = createRoute({
  method: 'delete',
  path: '/instance-pool/{id}/{field}',
  tags: ['instance-pool'],
  summary: 'Reset an Instance Pool field to its default value',
  operationId: 'reset-instance-pool-field',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      field: z
        .enum([
          'anti-affinity-groups',
          'description',
          'labels',
          'security-groups',
          'elastic-ips',
          'private-networks',
          'ssh-key',
          'user-data',
          'deploy-target',
          'ipv6-enabled',
        ])
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'field',
            schema: {
              type: 'string',
              enum: [
                'anti-affinity-groups',
                'description',
                'labels',
                'security-groups',
                'elastic-ips',
                'private-networks',
                'ssh-key',
                'user-data',
                'deploy-target',
                'ipv6-enabled',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstanceIdRemoveProtectionRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:remove-protection',
  tags: ['instance'],
  summary: 'Remove instance destruction protection',
  operationId: 'remove-instance-protection',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasKafkaNameTopicAclConfigRoute = createRoute({
  method: 'post',
  path: '/dbaas-kafka/{name}/topic/acl-config',
  tags: ['dbaas'],
  summary: 'Add a Kafka topic ACL entry',
  operationId: 'create-dbaas-kafka-topic-acl-config',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasKafkaTopicAclEntrySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSnapshotRoute = createRoute({
  method: 'get',
  path: '/snapshot',
  tags: ['snapshot'],
  summary: 'List Snapshots',
  operationId: 'list-snapshots',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ snapshots: z.array(SnapshotSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getOperationIdRoute = createRoute({
  method: 'get',
  path: '/operation/{id}',
  tags: ['operation'],
  summary: 'Retrieve Operation details',
  operationId: 'get-operation',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDnsDomainIdZoneRoute = createRoute({
  method: 'get',
  path: '/dns-domain/{id}/zone',
  tags: ['domain'],
  summary: 'Retrieve DNS domain zone file',
  operationId: 'get-dns-domain-zone-file',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z.object({ 'zone-file': z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDbaasExternalEndpointOpensearchNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-external-endpoint-opensearch/{name}',
  tags: ['dbaas'],
  description: '[BETA] Create OpenSearch Logs external integration endpoint',
  operationId: 'create-dbaas-external-endpoint-opensearch',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointOpensearchInputCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasMysqlServiceNameDatabaseDatabaseNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-mysql/{service-name}/database/{database-name}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS MySQL database',
  operationId: 'delete-dbaas-mysql-database',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'database-name': DbaasMysqlDatabaseNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'database-name',
          schema: { $ref: '#/components/schemas/dbaas-mysql-database-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSecurityGroupIdRemoveSourceRoute = createRoute({
  method: 'put',
  path: '/security-group/{id}:remove-source',
  tags: ['security-group'],
  summary: 'Remove an external source from a Security Group',
  operationId: 'remove-external-source-from-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cidr: z.string().openapi({ description: 'CIDR-formatted network to remove' }),
            })
            .openapi({ required: ['cidr'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getIamOrganizationPolicyRoute = createRoute({
  method: 'get',
  path: '/iam-organization-policy',
  tags: ['organization-policy'],
  summary: 'Retrieve IAM Organization Policy',
  operationId: 'get-iam-organization-policy',
  responses: {
    200: { description: '200', content: { 'application/json': { schema: IamPolicySchema } } },
  },
})

export const putIamOrganizationPolicyRoute = createRoute({
  method: 'put',
  path: '/iam-organization-policy',
  tags: ['organization-policy'],
  summary: 'Update IAM Organization Policy',
  operationId: 'update-iam-organization-policy',
  request: {
    body: { content: { 'application/json': { schema: IamPolicySchema } }, required: true },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasServiceLogsServiceNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-service-logs/{service-name}',
  tags: ['dbaas'],
  summary: 'Get logs of DBaaS service',
  description: 'Get logs of DBaaS service',
  operationId: 'get-dbaas-service-logs',
  request: {
    params: z.object({
      'service-name': z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'service-name', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(500n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 500,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'How many log entries to receive at most, up to 500 (default: 100)',
                }),
              'sort-order': EnumSortOrderSchema.exactOptional().openapi({
                description: 'Sort order for log messages (default: desc)',
              }),
              offset: z
                .string()
                .exactOptional()
                .openapi({ description: 'Opaque offset identifier' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceLogsSchema } },
    },
  },
})

export const postKmsKeyIdDecryptRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/decrypt',
  tags: ['crypto'],
  summary: 'Decrypt',
  description: 'Decrypts a ciphertext.',
  operationId: 'decrypt',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DecryptRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Base64 encoded plaintext.',
      content: { 'application/json': { schema: DecryptResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Disabled: The request was rejected because the specified KMS key is disabled.\n\nInvalid Usage: The request was rejected because the operation is only allowed on symmetric keys with usage "encrypt-decrypt".\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getTemplateIdRoute = createRoute({
  method: 'get',
  path: '/template/{id}',
  tags: ['template'],
  summary: 'Retrieve Template details',
  operationId: 'get-template',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: TemplateSchema } } },
  },
})

export const putTemplateIdRoute = createRoute({
  method: 'put',
  path: '/template/{id}',
  tags: ['template'],
  summary: 'Update template attributes',
  operationId: 'update-template',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template Description' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postTemplateIdRoute = createRoute({
  method: 'post',
  path: '/template/{id}',
  tags: ['template'],
  summary: 'Copy a Template from a zone to another',
  operationId: 'copy-template',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ 'target-zone': ZoneSchema.openapi({ description: 'Target Zone name' }) })
            .openapi({ required: ['target-zone'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/template/{id}',
  tags: ['template'],
  summary: 'Delete a Template',
  operationId: 'delete-template',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasPostgresNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-postgres/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: 'Initiate PostgreSQL maintenance update',
  operationId: 'start-dbaas-pg-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasGrafanaServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-grafana/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets of a DBaaS Grafana user',
  operationId: 'reveal-dbaas-grafana-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserGrafanaSecretsSchema } },
    },
  },
})

export const putUserIdRoute = createRoute({
  method: 'put',
  path: '/user/{id}',
  tags: ['user'],
  summary: "Update a User's IAM role",
  operationId: 'update-user-role',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ role: IamRoleSchema.exactOptional().openapi({ description: 'IAM Role' }) })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteUserIdRoute = createRoute({
  method: 'delete',
  path: '/user/{id}',
  tags: ['user'],
  summary: 'Delete User',
  operationId: 'delete-user',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getReverseDnsInstanceIdRoute = createRoute({
  method: 'get',
  path: '/reverse-dns/instance/{id}',
  tags: ['reverse-dns'],
  summary: 'Query the PTR DNS records for an instance',
  operationId: 'get-reverse-dns-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: ReverseDnsRecordSchema } },
    },
  },
})

export const postReverseDnsInstanceIdRoute = createRoute({
  method: 'post',
  path: '/reverse-dns/instance/{id}',
  tags: ['reverse-dns'],
  summary: 'Update/Create the PTR DNS record for an instance',
  operationId: 'update-reverse-dns-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ 'domain-name': z.string().min(1).max(253).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteReverseDnsInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/reverse-dns/instance/{id}',
  tags: ['reverse-dns'],
  summary: 'Delete the PTR DNS record for an instance',
  operationId: 'delete-reverse-dns-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstancePoolIdEvictRoute = createRoute({
  method: 'put',
  path: '/instance-pool/{id}:evict',
  tags: ['instance-pool'],
  summary: 'Evict Instance Pool members',
  description:
    'This operation evicts the specified Compute instances member from the Instance Pool, shrinking it to `&lt;current pool size&gt; - &lt;# evicted members&gt;`.',
  operationId: 'evict-instance-pool-members',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ instances: z.array(z.uuid()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSksClusterIdRotateCsiCredentialsRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/rotate-csi-credentials',
  tags: ['cluster'],
  summary: 'Rotate Exoscale CSI credentials',
  operationId: 'rotate-sks-csi-credentials',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasGrafanaServiceNameUserUsernamePasswordResetRoute = createRoute({
  method: 'put',
  path: '/dbaas-grafana/{service-name}/user/{username}/password/reset',
  tags: ['dbaas'],
  summary: 'Reset the credentials of a DBaaS Grafana user',
  description: 'If no password is provided one will be generated automatically.',
  operationId: 'reset-dbaas-grafana-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: DbaasUserPasswordSchema.exactOptional().openapi({
                description: 'New password',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasClickhouseServiceNameUserUsernamePasswordResetRoute = createRoute({
  method: 'put',
  path: '/dbaas-clickhouse/{service-name}/user/{username}/password/reset',
  tags: ['dbaas'],
  summary: '[BETA] Reset the credentials of a DBaaS ClickHouse user',
  operationId: 'reset-dbaas-clickhouse-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: DbaasUserPasswordSchema.exactOptional().openapi({
                description: 'New password',
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
      description: '200',
      content: { 'application/json': { schema: DbaasUserClickhouseSecretsSchema } },
    },
  },
})

export const putSecurityGroupIdDetachRoute = createRoute({
  method: 'put',
  path: '/security-group/{id}:detach',
  tags: ['security-group'],
  summary: 'Detach a Compute instance from a Security Group',
  operationId: 'detach-instance-from-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ instance: InstanceSchema.openapi({ description: 'Compute instance' }) })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasClickhouseServiceNameAclConfigRoute = createRoute({
  method: 'get',
  path: '/dbaas-clickhouse/{service-name}/acl-config',
  tags: ['dbaas'],
  summary: '[BETA] Get DBaaS ClickHouse ACL configuration',
  operationId: 'get-dbaas-clickhouse-acl-config',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasClickhouseAclConfigSchema } },
    },
  },
})

export const getDbaasClickhouseServiceNameUserRoute = createRoute({
  method: 'get',
  path: '/dbaas-clickhouse/{service-name}/user',
  tags: ['dbaas'],
  summary: '[BETA] List DBaaS ClickHouse users',
  operationId: 'list-dbaas-clickhouse-users',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasClickhouseUsersSchema } },
    },
  },
})

export const postDbaasClickhouseServiceNameUserRoute = createRoute({
  method: 'post',
  path: '/dbaas-clickhouse/{service-name}/user',
  tags: ['dbaas'],
  summary: '[BETA] Create a DBaaS ClickHouse user',
  operationId: 'create-dbaas-clickhouse-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
              password: DbaasUserPasswordSchema.exactOptional().openapi({
                description: 'Password',
              }),
              roles: z
                .array(DbaasClickhouseUserRoleInputSchema)
                .exactOptional()
                .openapi({ description: 'ClickHouse roles to grant to the user' }),
            })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserClickhouseSecretsSchema } },
    },
  },
})

export const putSksClusterIdNodepoolSksNodepoolIdEvictRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/nodepool/{sks-nodepool-id}:evict',
  tags: ['nodepool'],
  summary: 'Evict Nodepool members',
  description:
    'This operation evicts the specified Compute instances member from the Nodepool, shrinking it to `&lt;current nodepool size&gt; - &lt;# evicted members&gt;`.',
  operationId: 'evict-sks-nodepool-members',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'sks-nodepool-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'sks-nodepool-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              instances: z
                .array(z.uuid())
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasValkeyServiceNameUserUsernameRoute = createRoute({
  method: 'put',
  path: '/dbaas-valkey/{service-name}/user/{username}',
  tags: ['dbaas'],
  summary: 'Update access control for one DBaaS Valkey service user',
  operationId: 'update-dbaas-valkey-user-access-control',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ 'access-control': DbaasValkeyUserAccessControlSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasValkeyServiceNameUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-valkey/{service-name}/user/{username}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS Valkey user',
  operationId: 'delete-dbaas-valkey-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postKmsKeyIdDisableRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/disable',
  tags: ['kms-key'],
  summary: 'Disable KMS Key',
  description:
    'Disables a KMS Key by setting its state to "disabled". This prevents the use of the KMS key for cryptographic and key lifecycle operations.',
  operationId: 'disable-kms-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key disabled',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Pending Deletion: The request was rejected because it was performed on a key that is pending deletion.\n\nNot on Default: The request was rejected because the operation is not allowed on the default key.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-kafka/{name}/schema-registry/acl-config/{acl-id}',
  tags: ['dbaas'],
  summary: 'Delete a Kafka ACL entry',
  operationId: 'delete-dbaas-kafka-schema-registry-acl-config',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'acl-id': DbaasKafkaAclIdSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'acl-id',
          schema: { $ref: '#/components/schemas/dbaas-kafka-acl-id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDnsDomainIdRoute = createRoute({
  method: 'get',
  path: '/dns-domain/{id}',
  tags: ['domain'],
  summary: 'Retrieve DNS domain details',
  operationId: 'get-dns-domain',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: DnsDomainSchema } } },
  },
})

export const deleteDnsDomainIdRoute = createRoute({
  method: 'delete',
  path: '/dns-domain/{id}',
  tags: ['domain'],
  summary: 'Delete DNS Domain',
  operationId: 'delete-dns-domain',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putBlockStorageIdResizeVolumeRoute = createRoute({
  method: 'put',
  path: '/block-storage/{id}:resize-volume',
  tags: ['block-storage'],
  summary: 'Resize a block storage volume',
  description:
    'This operation resizes a Block storage volume. Note: the volume can only grow, cannot be shrunk. Only detached volumes or volumes attached to stopped instances can be resized.',
  operationId: 'resize-block-storage-volume',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'Volume size in GiB',
                }),
            })
            .openapi({ required: ['size'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: BlockStorageVolumeSchema } },
    },
  },
})

export const deleteDbaasKafkaServiceNameUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-kafka/{service-name}/user/{username}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS kafka user',
  operationId: 'delete-dbaas-kafka-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasServiceTypeServiceTypeNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-service-type/{service-type-name}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS service type',
  description: 'Get a DBaaS service type',
  operationId: 'get-dbaas-service-type',
  request: {
    params: z.object({
      'service-type-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'service-type-name',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceTypeSchema } },
    },
  },
})

export const putSecurityGroupIdAddSourceRoute = createRoute({
  method: 'put',
  path: '/security-group/{id}:add-source',
  tags: ['security-group'],
  summary: 'Add an external source as a member of a Security Group',
  operationId: 'add-external-source-to-security-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ cidr: z.string().openapi({ description: 'CIDR-formatted network to add' }) })
            .openapi({ required: ['cidr'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasExternalEndpointDatadogNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-external-endpoint-datadog/{name}',
  tags: ['dbaas'],
  description: '[BETA] Create DataDog external integration endpoint',
  operationId: 'create-dbaas-external-endpoint-datadog',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointDatadogInputCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasMysqlNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-mysql/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: 'Initiate MySQL maintenance update',
  operationId: 'start-dbaas-mysql-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasOpensearchServiceNameUserUsernamePasswordResetRoute = createRoute({
  method: 'put',
  path: '/dbaas-opensearch/{service-name}/user/{username}/password/reset',
  tags: ['dbaas'],
  summary: 'Reset the credentials of a DBaaS OpenSearch user',
  description: 'If no password is provided one will be generated automatically.',
  operationId: 'reset-dbaas-opensearch-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: DbaasUserPasswordSchema.exactOptional().openapi({
                description: 'New password',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiModelIdRoute = createRoute({
  method: 'get',
  path: '/ai/model/{id}',
  tags: ['model'],
  summary: 'Get Model',
  description: 'Get Model details',
  operationId: 'get-model',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GetModelResponseSchema } } },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAiModelIdRoute = createRoute({
  method: 'delete',
  path: '/ai/model/{id}',
  tags: ['model'],
  summary: 'Delete Model',
  description: 'Delete Model',
  operationId: 'delete-model',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OperationSchema } } },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    412: {
      description: 'Precondition Failed',
      content: { 'application/json': { schema: DeleteModelConflictResponseSchema } },
    },
  },
})

export const getSosBucketsUsageRoute = createRoute({
  method: 'get',
  path: '/sos-buckets-usage',
  tags: ['sos'],
  summary: 'List SOS Buckets Usage',
  operationId: 'list-sos-buckets-usage',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'sos-buckets-usage': z.array(SosBucketUsageSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putInstanceIdResetRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:reset',
  tags: ['instance'],
  summary: 'Reset a Compute instance to a base/target template',
  description:
    'This operation re-installs a Compute instance to a base template. If target template is provided it will be used to recreated instance from. Warning: the operation wipes all data stored on the disk.',
  operationId: 'reset-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              template: TemplateRefSchema.exactOptional().openapi({
                description: 'Template to recreate Instance from',
              }),
              'disk-size': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(10n).max(51200n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 10,
                  maximum: 51200,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Instance disk size in GiB',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasMysqlServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-mysql/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets of a DBaaS MySQL user',
  operationId: 'reveal-dbaas-mysql-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserMysqlSecretsSchema } },
    },
  },
})

export const getSshKeyNameRoute = createRoute({
  method: 'get',
  path: '/ssh-key/{name}',
  tags: ['ssh-key'],
  summary: 'Retrieve SSH key details',
  operationId: 'get-ssh-key',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: SshKeySchema } } },
  },
})

export const deleteSshKeyNameRoute = createRoute({
  method: 'delete',
  path: '/ssh-key/{name}',
  tags: ['ssh-key'],
  summary: 'Delete a SSH key',
  operationId: 'delete-ssh-key',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasServiceMetricsServiceNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-service-metrics/{service-name}',
  tags: ['dbaas'],
  summary: 'Get metrics of DBaaS service',
  description: 'Get metrics of DBaaS service',
  operationId: 'get-dbaas-service-metrics',
  request: {
    params: z.object({
      'service-name': z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'service-name', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              period: z
                .enum(['hour', 'week', 'year', 'month', 'day'])
                .exactOptional()
                .openapi({ description: 'Metrics time period (default: hour)' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ metrics: z.looseObject({}).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDeployTargetIdRoute = createRoute({
  method: 'get',
  path: '/deploy-target/{id}',
  tags: ['deploy-target'],
  summary: 'Retrieve Deploy Target details',
  operationId: 'get-deploy-target',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: DeployTargetSchema } } },
  },
})

export const putElasticIpIdDetachRoute = createRoute({
  method: 'put',
  path: '/elastic-ip/{id}:detach',
  tags: ['elastic-ip'],
  summary: 'Detach a Compute instance from an Elastic IP',
  operationId: 'detach-instance-from-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ instance: InstanceRefSchema.openapi({ description: 'Compute instance' }) })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasMysqlNameEnableWritesRoute = createRoute({
  method: 'put',
  path: '/dbaas-mysql/{name}/enable/writes',
  tags: ['dbaas'],
  summary:
    'Temporarily enable writes for MySQL services in read-only mode due to filled up storage',
  operationId: 'enable-dbaas-mysql-writes',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasKafkaServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-kafka/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets of a DBaaS Kafka user',
  operationId: 'reveal-dbaas-kafka-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserKafkaSecretsSchema } },
    },
  },
})

export const deleteVpcVpcIdSubnetSubnetIdRouteIdRoute = createRoute({
  method: 'delete',
  path: '/vpc/{vpc-id}/subnet/{subnet-id}/route/{id}',
  tags: ['vpc-route'],
  summary: '[BETA] Delete a route',
  operationId: 'delete-route',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'subnet-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'subnet-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postKmsKeyIdEncryptRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/encrypt',
  tags: ['crypto'],
  summary: 'Encrypt',
  description: 'Encrypts a plaintext.',
  operationId: 'encrypt',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EncryptRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Base64 encoded ciphertext',
      content: { 'application/json': { schema: EncryptResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Disabled: The request was rejected because the specified KMS key is disabled.\n\nInvalid Usage: The request was rejected because the operation is only allowed on symmetric keys with usage "encrypt-decrypt".\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDbaasTaskMigrationCheckServiceRoute = createRoute({
  method: 'post',
  path: '/dbaas-task-migration-check/{service}',
  tags: ['dbaas'],
  description: 'Create a DBaaS task to check migration',
  operationId: 'create-dbaas-task-migration-check',
  request: {
    params: z.object({
      service: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'source-service-uri': z
                .string()
                .min(1)
                .max(512)
                .openapi({
                  description:
                    'Service URI of the source MySQL or PostgreSQL database with admin credentials.',
                }),
              method: EnumMigrationMethodSchema.exactOptional().openapi({
                description:
                  'The migration method to be used (currently supported only by MySQL service type)',
              }),
              'ignore-dbs': z
                .string()
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)',
                }),
            })
            .openapi({ required: ['source-service-uri'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalEndpointDatadogEndpointIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-endpoint-datadog/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Get DataDog external endpoint settings',
  operationId: 'get-dbaas-external-endpoint-datadog',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasExternalEndpointDatadogOutputSchema } },
    },
  },
})

export const putDbaasExternalEndpointDatadogEndpointIdRoute = createRoute({
  method: 'put',
  path: '/dbaas-external-endpoint-datadog/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Update DataDog external integration endpoint',
  operationId: 'update-dbaas-external-endpoint-datadog',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointDatadogInputUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasExternalEndpointDatadogEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-external-endpoint-datadog/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Delete DataDog external integration endpoint',
  operationId: 'delete-dbaas-external-endpoint-datadog',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postLoadBalancerIdServiceRoute = createRoute({
  method: 'post',
  path: '/load-balancer/{id}/service',
  tags: ['network-load-balancer'],
  summary: 'Add a Load Balancer Service',
  operationId: 'add-service-to-load-balancer',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .openapi({ description: 'Load Balancer Service name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Load Balancer Service description' }),
              'instance-pool': InstancePoolSchema.openapi({
                description: 'Instance Pool to forward traffic to',
              }),
              protocol: z.enum(['tcp', 'udp']).openapi({ description: 'Network traffic protocol' }),
              strategy: z
                .enum(['round-robin', 'maglev-hash', 'source-hash'])
                .openapi({ description: 'Load balancing strategy' }),
              port: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(65535n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 65535,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: "Port exposed on the Load Balancer's public IP",
                }),
              'target-port': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(65535n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 65535,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'Port on which the network traffic will be forwarded to on the receiving instance',
                }),
              healthcheck: LoadBalancerServiceHealthcheckSchema.openapi({
                description: 'Healthcheck configuration',
              }),
            })
            .openapi({
              required: [
                'name',
                'instance-pool',
                'protocol',
                'strategy',
                'port',
                'target-port',
                'healthcheck',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSshKeyRoute = createRoute({
  method: 'get',
  path: '/ssh-key',
  tags: ['ssh-key'],
  summary: 'List SSH keys',
  operationId: 'list-ssh-keys',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'ssh-keys': z.array(SshKeySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSshKeyRoute = createRoute({
  method: 'post',
  path: '/ssh-key',
  tags: ['ssh-key'],
  summary: 'Import SSH key',
  operationId: 'register-ssh-key',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/^[a-zA-Z0-9]{1}[a-zA-Z0-9._-]{0,254}$/)
                .openapi({ description: 'SSH key name' }),
              'public-key': z.string().openapi({ description: 'Public key value' }),
            })
            .openapi({ required: ['name', 'public-key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postSnapshotIdPromoteRoute = createRoute({
  method: 'post',
  path: '/snapshot/{id}:promote',
  tags: ['snapshot', 'template'],
  summary: 'Promote a Snapshot to a Template',
  operationId: 'promote-snapshot-to-template',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(255).openapi({ description: 'Template name' }),
              description: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({ description: 'Template description' }),
              'default-user': z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template default user' }),
              'ssh-key-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable SSH key-based login in the template' }),
              'password-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable password-based login in the template' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasClickhouseServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-clickhouse/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: '[BETA] Reveal the secrets of a DBaaS ClickHouse user',
  operationId: 'reveal-dbaas-clickhouse-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserClickhouseSecretsSchema } },
    },
  },
})

export const getSksClusterRoute = createRoute({
  method: 'get',
  path: '/sks-cluster',
  tags: ['cluster'],
  summary: 'List SKS clusters',
  operationId: 'list-sks-clusters',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'sks-clusters': z.array(SksClusterSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSksClusterRoute = createRoute({
  method: 'post',
  path: '/sks-cluster',
  tags: ['cluster'],
  summary: 'Create an SKS cluster',
  operationId: 'create-sks-cluster',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Cluster description' }),
              labels: SksClusterLabelsSchema.exactOptional().openapi({
                description: 'Cluster Labels',
              }),
              cni: z
                .enum(['calico', 'cilium'])
                .exactOptional()
                .openapi({ description: 'Cluster CNI' }),
              'auto-upgrade': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enable auto upgrade of the control plane to the latest patch version available',
                }),
              networking: NetworkingSchema.exactOptional().openapi({
                description: 'Cluster networking configuration',
              }),
              oidc: SksOidcSchema.exactOptional().openapi({
                description: 'Cluster OpenID configmap',
              }),
              name: z.string().min(1).max(255).openapi({ description: 'Cluster name' }),
              'create-default-security-group': z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Creates an ad-hoc security group based on the choice of the selected CNI',
                }),
              'enable-kube-proxy': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether to deploy the Kubernetes network proxy. When unspecified, defaults to `true` unless Cilium CNI is selected',
                }),
              level: z.enum(['starter', 'pro']).openapi({ description: 'Cluster service level' }),
              'feature-gates': z
                .array(z.string())
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({
                  description:
                    'A list of Kubernetes-only Alpha features to enable for API server component',
                }),
              addons: z
                .array(
                  z.enum([
                    'exoscale-cloud-controller',
                    'exoscale-container-storage-interface',
                    'metrics-server',
                    'karpenter',
                  ]),
                )
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Cluster addons' }),
              audit: SksAuditCreateSchema.exactOptional().openapi({
                description: 'Kubernetes Audit Log Configuration',
              }),
              version: z.string().openapi({ description: 'Control plane Kubernetes version' }),
            })
            .openapi({ required: ['name', 'level', 'version'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putBlockStorageIdDetachRoute = createRoute({
  method: 'put',
  path: '/block-storage/{id}:detach',
  tags: ['block-storage'],
  summary: 'Detach block storage volume',
  operationId: 'detach-block-storage-volume',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasExternalEndpointPrometheusNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-external-endpoint-prometheus/{name}',
  tags: ['dbaas'],
  description: '[BETA] Create Prometheus external integration endpoint',
  operationId: 'create-dbaas-external-endpoint-prometheus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointPrometheusPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getConsoleIdRoute = createRoute({
  method: 'get',
  path: '/console/{id}',
  tags: ['instance'],
  summary:
    'Retrieve signed url valid for 60 seconds to connect via console-proxy websocket to VM VNC console.',
  operationId: 'get-console-proxy-url',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.string().exactOptional(),
              host: z.string().exactOptional(),
              path: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDbaasIntegrationIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-integration/{id}',
  tags: ['dbaas'],
  description: '[BETA] Get a DBaaS Integration',
  operationId: 'get-dbaas-integration',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasIntegrationSchema } },
    },
  },
})

export const putDbaasIntegrationIdRoute = createRoute({
  method: 'put',
  path: '/dbaas-integration/{id}',
  tags: ['dbaas'],
  description: '[BETA] Update a existing DBaaS integration',
  operationId: 'update-dbaas-integration',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z.looseObject({}).openapi({ description: 'Integration settings' }),
            })
            .openapi({ required: ['settings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasIntegrationIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-integration/{id}',
  tags: ['dbaas'],
  description: '[BETA] Delete a DBaaS Integration',
  operationId: 'delete-dbaas-integration',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putElasticIpIdAttachRoute = createRoute({
  method: 'put',
  path: '/elastic-ip/{id}:attach',
  tags: ['elastic-ip'],
  summary: 'Attach a Compute instance to an Elastic IP',
  operationId: 'attach-instance-to-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ instance: InstanceRefSchema.openapi({ description: 'Compute instance' }) })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSksClusterIdRoute = createRoute({
  method: 'get',
  path: '/sks-cluster/{id}',
  tags: ['cluster'],
  summary: 'Retrieve SKS cluster details',
  operationId: 'get-sks-cluster',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: SksClusterSchema } } },
  },
})

export const putSksClusterIdRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}',
  tags: ['cluster'],
  summary: 'Update an SKS cluster',
  operationId: 'update-sks-cluster',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Cluster description' }),
              labels: SksClusterLabelsSchema.exactOptional().openapi({
                description: 'Cluster labels',
              }),
              'auto-upgrade': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enable auto upgrade of the control plane to the latest patch version available',
                }),
              oidc: SksOidcSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Cluster OpenID configmap' }),
              name: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Cluster name' }),
              'enable-operators-ca': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Add or remove the operators certificate authority (CA) from the list of trusted CAs of the api server. The default value is true',
                }),
              'feature-gates': z
                .array(z.string())
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A list of Kubernetes-only Alpha features to enable for API server component',
                }),
              addons: z
                .array(
                  z.enum([
                    'exoscale-cloud-controller',
                    'exoscale-container-storage-interface',
                    'metrics-server',
                    'karpenter',
                  ]),
                )
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Cluster addons' }),
              audit: SksAuditUpdateSchema.exactOptional().openapi({
                description: 'Kubernetes Audit Log Configuration',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteSksClusterIdRoute = createRoute({
  method: 'delete',
  path: '/sks-cluster/{id}',
  tags: ['cluster'],
  summary: 'Delete an SKS cluster',
  operationId: 'delete-sks-cluster',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getQuotaRoute = createRoute({
  method: 'get',
  path: '/quota',
  tags: ['quotas', 'ccm'],
  summary: 'List Organization Quotas',
  operationId: 'list-quotas',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ quotas: z.array(QuotaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRoute = createRoute({
  method: 'get',
  path: '/dbaas-integration-settings/{integration-type}/{source-type}/{dest-type}',
  tags: ['dbaas'],
  description: '[BETA] Get DBaaS integration settings',
  operationId: 'list-dbaas-integration-settings',
  request: {
    params: z.object({
      'integration-type': z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'integration-type',
            schema: { type: 'string' },
          },
        }),
      'source-type': z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'source-type', schema: { type: 'string' } },
        }),
      'dest-type': z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'dest-type', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  properties: z.looseObject({}).exactOptional(),
                  additionalProperties: z.boolean().exactOptional(),
                  type: z.string().exactOptional(),
                  title: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The JSON schema representing the settings for the given integration type, source, and destination service types.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDbaasThanosServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-thanos/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets of a DBaaS Thanos user',
  operationId: 'reveal-dbaas-thanos-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserThanosSecretsSchema } },
    },
  },
})

export const deleteDbaasClickhouseServiceNameUserUserUuidRoute = createRoute({
  method: 'delete',
  path: '/dbaas-clickhouse/{service-name}/user/{user-uuid}',
  tags: ['dbaas'],
  summary: '[BETA] Delete a DBaaS ClickHouse user',
  operationId: 'delete-dbaas-clickhouse-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'user-uuid': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'user-uuid',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasSettingsPgRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-pg',
  tags: ['dbaas'],
  summary: 'Get DBaaS PostgreSQL settings',
  description: 'Get DBaaS PostgreSQL settings',
  operationId: 'get-dbaas-settings-pg',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  pg: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'postgresql.conf configuration values', required: [] }),
                  pglookout: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'PGLookout settings', required: [] }),
                  pgbouncer: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'PGBouncer connection pooling settings',
                      required: [],
                    }),
                  timescaledb: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'TimescaleDB extension configuration values',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getElasticIpIdRoute = createRoute({
  method: 'get',
  path: '/elastic-ip/{id}',
  tags: ['elastic-ip'],
  summary: 'Retrieve Elastic IP details',
  operationId: 'get-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: ElasticIpSchema } } },
  },
})

export const putElasticIpIdRoute = createRoute({
  method: 'put',
  path: '/elastic-ip/{id}',
  tags: ['elastic-ip'],
  summary: 'Update an Elastic IP',
  operationId: 'update-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Elastic IP description' }),
              healthcheck: ElasticIpHealthcheckSchema.exactOptional().openapi({
                description: 'Elastic IP healthcheck',
              }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteElasticIpIdRoute = createRoute({
  method: 'delete',
  path: '/elastic-ip/{id}',
  tags: ['elastic-ip'],
  summary: 'Delete an Elastic IP',
  operationId: 'delete-elastic-ip',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getSksClusterIdInspectionRoute = createRoute({
  method: 'get',
  path: '/sks-cluster/{id}/inspection',
  tags: ['cluster'],
  summary: 'Get the latest inspection result',
  description:
    'Helps troubleshoot common problems when deploying a kubernetes cluster. Inspections run every couple of minutes.',
  operationId: 'get-sks-cluster-inspection',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: z.record(z.string(), z.any()) } },
    },
  },
})

export const getDbaasValkeyNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-valkey/{name}',
  tags: ['dbaas'],
  description: 'Get a DBaaS Valkey service',
  operationId: 'get-dbaas-service-valkey',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceValkeySchema } },
    },
  },
})

export const putDbaasValkeyNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-valkey/{name}',
  tags: ['dbaas'],
  description: 'Update a DBaaS Valkey service',
  operationId: 'update-dbaas-service-valkey',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              migration: z
                .object({
                  host: z
                    .string()
                    .min(1)
                    .max(255)
                    .openapi({
                      description:
                        'Hostname or IP address of the server where to migrate data from',
                    }),
                  port: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(65535n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 65535,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'Port number of the server where to migrate data from',
                    }),
                  password: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'Password for authentication with the server where to migrate data from',
                    }),
                  ssl: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'The server where to migrate data from is secured with SSL',
                    }),
                  username: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'User name for authentication with the server where to migrate data from',
                    }),
                  dbname: z
                    .string()
                    .min(1)
                    .max(63)
                    .exactOptional()
                    .openapi({
                      description: 'Database name for bootstrapping the initial connection',
                    }),
                  'ignore-dbs': z
                    .string()
                    .min(1)
                    .max(2048)
                    .exactOptional()
                    .openapi({
                      description:
                        'Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)',
                    }),
                  method: EnumMigrationMethodSchema.exactOptional().openapi({
                    description: 'The migration method to be used',
                  }),
                })
                .exactOptional()
                .openapi({
                  required: ['host', 'port'],
                  description: 'Migrate data from existing server',
                }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'Valkey major version' }),
              'valkey-settings': JsonSchemaValkeySchema.exactOptional().openapi({
                description: 'Valkey.conf settings',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasValkeyNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-valkey/{name}',
  tags: ['dbaas'],
  summary: 'Create a DBaaS Valkey service',
  description: 'Create a DBaaS Valkey service',
  operationId: 'create-dbaas-service-valkey',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'valkey-settings': JsonSchemaValkeySchema.exactOptional().openapi({
                description: 'Valkey.conf settings',
              }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'fork-from-service': DbaasServiceNameSchema.exactOptional().openapi({
                description: 'Service to fork from',
              }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'Valkey major version' }),
              'recovery-backup-name': z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Name of a backup to recover from for services that support backup names',
                }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
              migration: z
                .object({
                  host: z
                    .string()
                    .min(1)
                    .max(255)
                    .openapi({
                      description:
                        'Hostname or IP address of the server where to migrate data from',
                    }),
                  port: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(65535n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 65535,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'Port number of the server where to migrate data from',
                    }),
                  password: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'Password for authentication with the server where to migrate data from',
                    }),
                  ssl: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'The server where to migrate data from is secured with SSL',
                    }),
                  username: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'User name for authentication with the server where to migrate data from',
                    }),
                  dbname: z
                    .string()
                    .min(1)
                    .max(63)
                    .exactOptional()
                    .openapi({
                      description: 'Database name for bootstrapping the initial connection',
                    }),
                  'ignore-dbs': z
                    .string()
                    .min(1)
                    .max(2048)
                    .exactOptional()
                    .openapi({
                      description:
                        'Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)',
                    }),
                  method: EnumMigrationMethodSchema.exactOptional().openapi({
                    description: 'The migration method to be used',
                  }),
                })
                .exactOptional()
                .openapi({
                  required: ['host', 'port'],
                  description: 'Migrate data from existing server',
                }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasValkeyNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-valkey/{name}',
  tags: ['dbaas'],
  summary: 'Delete a Valkey service',
  operationId: 'delete-dbaas-service-valkey',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getInstanceIdRoute = createRoute({
  method: 'get',
  path: '/instance/{id}',
  tags: ['instance'],
  summary: 'Retrieve Compute instance details',
  operationId: 'get-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: InstanceSchema } } },
  },
})

export const putInstanceIdRoute = createRoute({
  method: 'put',
  path: '/instance/{id}',
  tags: ['instance'],
  summary: 'Update a Compute instance',
  operationId: 'update-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Instance name' }),
              'user-data': z
                .string()
                .min(1)
                .max(32768)
                .exactOptional()
                .openapi({ description: 'Instance Cloud-init user-data (base64 encoded)' }),
              'public-ip-assignment': PublicIpAssignmentSchema.exactOptional().openapi({
                description: 'Assign public IP to the Instance',
              }),
              labels: LabelsSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Resource labels' }),
              'application-consistent-snapshot-enabled': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enable/Disable Application Consistent Snapshot for Instance',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/instance/{id}',
  tags: ['instance'],
  summary: 'Delete a Compute instance',
  operationId: 'delete-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasMysqlNameMigrationStopRoute = createRoute({
  method: 'post',
  path: '/dbaas-mysql/{name}/migration/stop',
  tags: ['dbaas'],
  summary: 'Stop a DBaaS MySQL migration',
  operationId: 'stop-dbaas-mysql-migration',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getVpcVpcIdSubnetIdRoute = createRoute({
  method: 'get',
  path: '/vpc/{vpc-id}/subnet/{id}',
  tags: ['vpc-subnet'],
  summary: '[BETA] Retrieve Subnet details',
  operationId: 'get-subnet',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: SubnetSchema } } },
  },
})

export const putVpcVpcIdSubnetIdRoute = createRoute({
  method: 'put',
  path: '/vpc/{vpc-id}/subnet/{id}',
  tags: ['vpc-subnet'],
  summary: '[BETA] Update a Subnet',
  operationId: 'update-subnet',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Subnet name' }),
              description: z
                .string()
                .max(4096)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Subnet description' }),
              labels: LabelsSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Resource labels' }),
              'ipv4-block': z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Subnet CIDR' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: SubnetSchema } } },
  },
})

export const deleteVpcVpcIdSubnetIdRoute = createRoute({
  method: 'delete',
  path: '/vpc/{vpc-id}/subnet/{id}',
  tags: ['vpc-subnet'],
  summary: '[BETA] Delete a Subnet',
  operationId: 'delete-subnet',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const getDbaasExternalEndpointsRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-endpoints',
  tags: ['dbaas'],
  description: '[BETA] List available external endpoints for integrations',
  operationId: 'list-dbaas-external-endpoints',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'dbaas-endpoints': z.array(DbaasExternalEndpointSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putDbaasKafkaNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-kafka/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: 'Initiate Kafka maintenance update',
  operationId: 'start-dbaas-kafka-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSksClusterIdRotateCcmCredentialsRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/rotate-ccm-credentials',
  tags: ['cluster'],
  summary: 'Rotate Exoscale CCM credentials',
  operationId: 'rotate-sks-ccm-credentials',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-postgres/{service-name}/connection-pool/{connection-pool-name}',
  tags: ['dbaas'],
  summary: 'Update a DBaaS PostgreSQL connection pool',
  operationId: 'update-dbaas-pg-connection-pool',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'connection-pool-name': DbaasPgPoolNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'connection-pool-name',
          schema: { $ref: '#/components/schemas/dbaas-pg-pool-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'database-name': DbaasDatabaseNameSchema.exactOptional().openapi({
                description: 'Service database name',
              }),
              mode: EnumPgPoolModeSchema.exactOptional().openapi({
                description: 'PGBouncer pool mode',
              }),
              size: DbaasPgPoolSizeSchema.exactOptional().openapi({
                description: "Size of PGBouncer's PostgreSQL side connection pool",
              }),
              username: DbaasPgPoolUsernameSchema.exactOptional().openapi({
                description: 'Pool username',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-postgres/{service-name}/connection-pool/{connection-pool-name}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS PostgreSQL connection pool',
  operationId: 'delete-dbaas-pg-connection-pool',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'connection-pool-name': DbaasPgPoolNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'connection-pool-name',
          schema: { $ref: '#/components/schemas/dbaas-pg-pool-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getKmsKeyRoute = createRoute({
  method: 'get',
  path: '/kms-key',
  tags: ['kms-key'],
  summary: 'List KMS Keys',
  description: 'Lists all KMS Keys in your organization in a given zone.',
  operationId: 'list-kms-keys',
  responses: {
    200: {
      description: 'A list of all KMS keys in the target zone',
      content: { 'application/json': { schema: ListKmsKeysResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nBad Request: The request was rejected because of an invalid request body or path parameter.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postKmsKeyRoute = createRoute({
  method: 'post',
  path: '/kms-key',
  tags: ['kms-key'],
  summary: 'Create KMS Key',
  description:
    'Create a customer-managed unique KMS Key in your organization. A KMS Key is a logical representation of a cryptographic key material. It also includes metadata such as a UUID, a name and its state.',
  operationId: 'create-kms-key',
  request: {
    body: {
      content: { 'application/json': { schema: CreateKmsKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Created new KMS key',
      content: { 'application/json': { schema: CreateKmsKeyResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nName Conflict: The request was rejected because a key with the same name already exists in the target zone.\n\nBad Request: The request was rejected because of an invalid request body or path parameter.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDbaasThanosNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-thanos/{name}',
  tags: ['dbaas'],
  description: 'Get a DBaaS Thanos service',
  operationId: 'get-dbaas-service-thanos',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceThanosSchema } },
    },
  },
})

export const putDbaasThanosNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-thanos/{name}',
  tags: ['dbaas'],
  description: 'Update a DBaaS Thanos service',
  operationId: 'update-dbaas-service-thanos',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
              'thanos-settings': JsonSchemaThanosSchema.exactOptional().openapi({
                description: 'Thanos specific settings',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasThanosNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-thanos/{name}',
  tags: ['dbaas'],
  summary: 'Create a DBaaS Thanos service',
  description: 'Create a DBaaS Thanos service',
  operationId: 'create-dbaas-service-thanos',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
              'thanos-settings': JsonSchemaThanosSchema.exactOptional().openapi({
                description: 'Thanos specific settings',
              }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasThanosNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-thanos/{name}',
  tags: ['dbaas'],
  summary: 'Delete a Thanos service',
  operationId: 'delete-dbaas-service-thanos',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putIamRoleIdPolicyRoute = createRoute({
  method: 'put',
  path: '/iam-role/{id}:policy',
  tags: ['role'],
  summary: 'Update IAM Role Policy',
  operationId: 'update-iam-role-policy',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IamPolicySchema } }, required: true },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasMigrationStatusNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-migration-status/{name}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS migration status',
  description: 'Get a DBaaS migration status',
  operationId: 'get-dbaas-migration-status',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasMigrationStatusSchema } },
    },
  },
})

export const deleteDbaasMysqlServiceNameUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-mysql/{service-name}/user/{username}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS MySQL user',
  operationId: 'delete-dbaas-mysql-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSksClusterIdGenerateKarpenterNodepoolRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/generate-karpenter-nodepool',
  tags: ['cluster'],
  summary: 'Generate a Karpenter NodePool manifest with minimal configuration for an SKS cluster',
  operationId: 'generate-sks-karpenter-nodepool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z.object({ nodepool: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getLoadBalancerIdRoute = createRoute({
  method: 'get',
  path: '/load-balancer/{id}',
  tags: ['network-load-balancer'],
  summary: 'Retrieve Load Balancer details',
  operationId: 'get-load-balancer',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: LoadBalancerSchema } } },
  },
})

export const putLoadBalancerIdRoute = createRoute({
  method: 'put',
  path: '/load-balancer/{id}',
  tags: ['network-load-balancer'],
  summary: 'Update a Load Balancer',
  operationId: 'update-load-balancer',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Load Balancer name' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Load Balancer description' }),
              labels: LabelsSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteLoadBalancerIdRoute = createRoute({
  method: 'delete',
  path: '/load-balancer/{id}',
  tags: ['network-load-balancer'],
  summary: 'Delete a Load Balancer',
  operationId: 'delete-load-balancer',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasServiceNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-service/{name}',
  tags: ['dbaas'],
  summary: 'Delete a DBaaS service',
  description: 'Delete a DBaaS service',
  operationId: 'delete-dbaas-service',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putVpcVpcIdSubnetSubnetIdDetachRoute = createRoute({
  method: 'put',
  path: '/vpc/{vpc-id}/subnet/{subnet-id}/detach',
  tags: ['vpc-subnet'],
  summary: '[BETA] Detach a Compute instance from a Subnet',
  operationId: 'detach-instance-from-subnet',
  request: {
    params: z.object({
      'vpc-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'vpc-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'subnet-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'subnet-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ instance: InstanceRefSchema.openapi({ description: 'Compute instance' }) })
            .openapi({ required: ['instance'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasMysqlServiceNameDatabaseRoute = createRoute({
  method: 'post',
  path: '/dbaas-mysql/{service-name}/database',
  tags: ['dbaas'],
  summary: 'Create a DBaaS MySQL database',
  operationId: 'create-dbaas-mysql-database',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'database-name': DbaasDatabaseNameSchema.openapi({
                description: 'Service database name',
              }),
            })
            .openapi({ required: ['database-name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getTemplateRoute = createRoute({
  method: 'get',
  path: '/template',
  tags: ['template'],
  summary: 'List Templates',
  operationId: 'list-templates',
  request: {
    query: z.object({
      visibility: z
        .enum(['private', 'public'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'visibility',
            schema: { type: 'string', enum: ['private', 'public'] },
          },
        }),
      family: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'family', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ templates: z.array(TemplateSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTemplateRoute = createRoute({
  method: 'post',
  path: '/template',
  tags: ['template'],
  summary: 'Register a Template',
  operationId: 'register-template',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'application-consistent-snapshot-enabled': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Template with support for Application Consistent Snapshots',
                }),
              maintainer: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template maintainer' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template description' }),
              'ssh-key-enabled': z.boolean().openapi({ description: 'Enable SSH key-based login' }),
              name: z.string().min(1).max(255).openapi({ description: 'Template name' }),
              'default-user': z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template default user' }),
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'Template size',
                }),
              'password-enabled': z
                .boolean()
                .openapi({ description: 'Enable password-based login' }),
              build: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template build' }),
              checksum: z.string().min(1).openapi({ description: 'Template MD5 checksum' }),
              'boot-mode': z
                .enum(['legacy', 'uefi'])
                .exactOptional()
                .openapi({ description: 'Boot mode (default: legacy)' }),
              url: z.string().min(1).openapi({ description: 'Template source URL' }),
              version: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Template version' }),
            })
            .openapi({
              required: ['name', 'url', 'checksum', 'ssh-key-enabled', 'password-enabled'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putInstanceIdRebootRoute = createRoute({
  method: 'put',
  path: '/instance/{id}:reboot',
  tags: ['instance'],
  summary: 'Reboot a Compute instance',
  operationId: 'reboot-instance',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getEnvironmentalImpactReportRoute = createRoute({
  method: 'get',
  path: '/environmental-impact/report',
  tags: [],
  summary: 'Return an environmental impact report for the given period',
  operationId: 'get-impact-report',
  request: {
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'from', schema: { type: 'string' } },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'to', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Environmental impact report',
      content: { 'application/json': { schema: ImpactBreakdownSchema } },
    },
    400: {
      description: 'Invalid request (e.g. to date before from date)',
      content: { 'application/json': { schema: ImpactErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ImpactErrorResponseSchema } },
    },
  },
})

export const getDbaasSettingsKafkaRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-kafka',
  tags: ['dbaas'],
  summary: 'Get DBaaS Kafka settings',
  description: 'Get DBaaS Kafka settings',
  operationId: 'get-dbaas-settings-kafka',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  kafka: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'Kafka broker configuration values', required: [] }),
                  'kafka-connect': z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'Kafka Connect configuration values', required: [] }),
                  'kafka-rest': z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'Kafka REST configuration', required: [] }),
                  'schema-registry': z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'Schema Registry configuration', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDbaasPostgresServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-postgres/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets of a DBaaS Postgres user',
  operationId: 'reveal-dbaas-postgres-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserPostgresSecretsSchema } },
    },
  },
})

export const postIamOrganizationPolicyResetRoute = createRoute({
  method: 'post',
  path: '/iam-organization-policy:reset',
  tags: ['organization-policy'],
  summary: 'Reset IAM Organization Policy',
  operationId: 'reset-iam-organization-policy',
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasSettingsOpensearchRoute = createRoute({
  method: 'get',
  path: '/dbaas-settings-opensearch',
  tags: ['dbaas'],
  summary: 'Get DBaaS OpenSearch settings',
  description: 'Get DBaaS OpenSearch settings',
  operationId: 'get-dbaas-settings-opensearch',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .object({
                  opensearch: z
                    .object({
                      properties: z.looseObject({}).exactOptional(),
                      additionalProperties: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ description: 'OpenSearch configuration values', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putDbaasExternalEndpointSourceServiceNameAttachRoute = createRoute({
  method: 'put',
  path: '/dbaas-external-endpoint/{source-service-name}/attach',
  tags: ['dbaas'],
  description:
    '[BETA] Create a new DBaaS connection between a DBaaS service and an external service',
  operationId: 'attach-dbaas-service-to-endpoint',
  request: {
    params: z.object({
      'source-service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'source-service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'dest-endpoint-id': z.uuid().openapi({ description: 'External endpoint id' }),
              type: EnumExternalEndpointTypesSchema.openapi({
                description: 'External endpoint type',
              }),
            })
            .openapi({ required: ['dest-endpoint-id', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postKmsKeyIdScheduleDeletionRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/schedule-deletion',
  tags: ['kms-key'],
  summary: 'Schedule KMS Key Deletion',
  description:
    'Schedules a KMS key for deletion after a delay. You can specify a delay of 7-30 days.',
  operationId: 'schedule-kms-key-deletion',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ScheduleKmsKeyDeletionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Key deletion scheduled',
      content: { 'application/json': { schema: ScheduleKmsKeyDeletionResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nNot on Default: The request was rejected because the operation is not allowed on the default key.\n\nNot on Replica: The request was rejectde because the operation is not allowed on a replica.\n\nBad Request: The request was rejected because of an invalid request body or path parameter.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDbaasGrafanaNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-grafana/{name}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS Grafana service',
  operationId: 'get-dbaas-service-grafana',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceGrafanaSchema } },
    },
  },
})

export const putDbaasGrafanaNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-grafana/{name}',
  tags: ['dbaas'],
  summary: 'Update a DBaaS Grafana service',
  operationId: 'update-dbaas-service-grafana',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'grafana-settings': JsonSchemaGrafanaSchema.exactOptional().openapi({
                description: 'Grafana specific settings',
              }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasGrafanaNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-grafana/{name}',
  tags: ['dbaas'],
  description: 'Create a DBaaS Grafana service',
  operationId: 'create-dbaas-service-grafana',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'fork-from-service': DbaasServiceNameSchema.exactOptional().openapi({
                description: 'Service to fork from',
              }),
              'grafana-settings': JsonSchemaGrafanaSchema.exactOptional().openapi({
                description: 'Grafana specific settings',
              }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed CIDR address blocks for incoming connections' }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasGrafanaNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-grafana/{name}',
  tags: ['dbaas'],
  summary: 'Delete a Grafana service',
  operationId: 'delete-dbaas-service-grafana',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasExternalEndpointRsyslogEndpointIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-external-endpoint-rsyslog/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Get RSyslog external integration endpoint settings',
  operationId: 'get-dbaas-external-endpoint-rsyslog',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasExternalEndpointRsyslogOutputSchema } },
    },
  },
})

export const putDbaasExternalEndpointRsyslogEndpointIdRoute = createRoute({
  method: 'put',
  path: '/dbaas-external-endpoint-rsyslog/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Update RSyslog external integration endpoint',
  operationId: 'update-dbaas-external-endpoint-rsyslog',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointRsyslogInputUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasExternalEndpointRsyslogEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-external-endpoint-rsyslog/{endpoint-id}',
  tags: ['dbaas'],
  description: '[BETA] Delete RSyslog external integration endpoint',
  operationId: 'delete-dbaas-external-endpoint-rsyslog',
  request: {
    params: z.object({
      'endpoint-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'endpoint-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSksClusterIdGenerateKarpenterExoscaleNodeclassRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/generate-karpenter-exoscale-nodeclass',
  tags: ['cluster'],
  summary:
    'Generate a Karpenter ExoscaleNodeClass manifest for an SKS cluster, including its default security group and feature flags if present',
  operationId: 'generate-sks-karpenter-exoscale-nodeclass',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'exoscale-nodeclass': z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSksClusterIdNodepoolRoute = createRoute({
  method: 'post',
  path: '/sks-cluster/{id}/nodepool',
  tags: ['nodepool'],
  summary: 'Create a new SKS Nodepool',
  operationId: 'create-sks-nodepool',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'anti-affinity-groups': z
                .array(AntiAffinityGroupRefSchema)
                .max(8)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Nodepool Anti-affinity Groups' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Nodepool description' }),
              'public-ip-assignment': z
                .enum(['inet4', 'dual'])
                .exactOptional()
                .openapi({
                  description:
                    'Configures public IP assignment of the Instances with:\n\n* IPv4 (`inet4`) addressing only (default);\n* both IPv4 and IPv6 (`dual`) addressing.',
                }),
              labels: SksNodepoolLabelsSchema.exactOptional().openapi({
                description: 'Nodepool labels',
              }),
              taints: SksNodepoolTaintsSchema.exactOptional().openapi({
                description: 'Nodepool taints',
              }),
              'security-groups': z
                .array(SecurityGroupRefSchema)
                .max(16)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Nodepool Security Groups' }),
              name: z
                .string()
                .min(1)
                .max(255)
                .openapi({ description: 'Nodepool name, lowercase only' }),
              'instance-type': InstanceTypeRefSchema.openapi({
                description: 'Nodepool instances type',
              }),
              'private-networks': z
                .array(PrivateNetworkRefSchema)
                .max(16)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Nodepool Private Networks' }),
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'Number of instances',
                }),
              'kubelet-image-gc': KubeletImageGcSchema.exactOptional().openapi({
                description: 'Kubelet image GC options',
              }),
              'instance-prefix': z
                .string()
                .min(1)
                .max(30)
                .exactOptional()
                .openapi({
                  description: 'Prefix to apply to instances names (default: pool), lowercase only',
                }),
              'deploy-target': DeployTargetRefSchema.exactOptional().openapi({
                description: 'Nodepool Deploy Target',
              }),
              addons: z
                .array(z.literal('storage-lvm'))
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Nodepool addons' }),
              'disk-size': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(20n).max(51200n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 20,
                  maximum: 51200,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Nodepool instances disk size in GiB',
                }),
              'nvidia-mig-profiles': NvidiaMigProfilesSchema.exactOptional().openapi({
                description: 'Nvidia MIG Profiles',
              }),
            })
            .openapi({ required: ['name', 'size', 'disk-size', 'instance-type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasExternalEndpointElasticsearchNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-external-endpoint-elasticsearch/{name}',
  tags: ['dbaas'],
  description: '[BETA] Create ElasticSearch Logs external integration endpoint',
  operationId: 'create-dbaas-external-endpoint-elasticsearch',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DbaasEndpointElasticsearchInputCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiApiKeyIdRevealRoute = createRoute({
  method: 'get',
  path: '/ai/api-key/{id}/reveal',
  tags: ['ai-api-key'],
  summary: '[BETA] Reveal AI API Key',
  description: 'Reveal AI API key plaintext value',
  operationId: 'reveal-ai-api-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RevealAiApiKeyResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putDbaasOpensearchNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-opensearch/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: 'Initiate OpenSearch maintenance update',
  operationId: 'start-dbaas-opensearch-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasKafkaNameAclConfigRoute = createRoute({
  method: 'get',
  path: '/dbaas-kafka/{name}/acl-config',
  tags: ['dbaas'],
  summary: 'Get DBaaS kafka ACL configuration',
  operationId: 'get-dbaas-kafka-acl-config',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: DbaasKafkaAclsSchema } } },
  },
})

export const putDbaasKafkaServiceNameUserUsernamePasswordResetRoute = createRoute({
  method: 'put',
  path: '/dbaas-kafka/{service-name}/user/{username}/password/reset',
  tags: ['dbaas'],
  summary: 'Reset the credentials of a DBaaS Kafka user',
  description: 'If no password is provided one will be generated automatically.',
  operationId: 'reset-dbaas-kafka-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: DbaasUserPasswordSchema.exactOptional().openapi({
                description: 'New password',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiApiKeyRoute = createRoute({
  method: 'get',
  path: '/ai/api-key',
  tags: ['ai-api-key'],
  summary: '[BETA] List AI API Keys',
  description: 'List AI API keys for an organization',
  operationId: 'list-ai-api-keys',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAiApiKeysResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAiApiKeyRoute = createRoute({
  method: 'post',
  path: '/ai/api-key',
  tags: ['ai-api-key'],
  summary: '[BETA] Create AI API Key',
  description: 'Create a new AI API key',
  operationId: 'create-ai-api-key',
  request: {
    body: {
      content: { 'application/json': { schema: CreateAiApiKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateAiApiKeyResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postKmsKeyIdReEncryptRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/re-encrypt',
  tags: ['crypto'],
  summary: 'Re-encrypt',
  description:
    'Decrypts an existing ciphertext using its original key material and re-encrypts the underlying plaintext using a specified KMS key or the latest key material of the same KMS Key.',
  operationId: 're-encrypt',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReEncryptRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Base64 encoded ciphertext',
      content: { 'application/json': { schema: ReEncryptResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Disabled: The request was rejected because the specified KMS key is disabled.\n\nNot on Default: The request was rejected because the operation is not allowed on the default key.\n\nBad Request: The request was rejected because of an invalid request body or path parameter.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDbaasOpensearchServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-opensearch/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets of a DBaaS OpenSearch user',
  operationId: 'reveal-dbaas-opensearch-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserOpensearchSecretsSchema } },
    },
  },
})

export const putDbaasValkeyNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-valkey/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: 'Initiate Valkey maintenance update',
  operationId: 'start-dbaas-valkey-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasOpensearchNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-opensearch/{name}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS OpenSearch service',
  description: 'Get a DBaaS OpenSearch service',
  operationId: 'get-dbaas-service-opensearch',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasServiceOpensearchSchema } },
    },
  },
})

export const putDbaasOpensearchNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-opensearch/{name}',
  tags: ['dbaas'],
  summary: 'Update a DBaaS OpenSearch service',
  description: 'Update a DBaaS OpenSearch service',
  operationId: 'update-dbaas-service-opensearch',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'max-index-count': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .nullable()
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'Maximum number of indexes to keep before deleting the oldest one',
                }),
              'keep-index-refresh-interval': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.",
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'index-patterns': z
                .array(
                  z
                    .object({
                      'max-index-count': z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().nonnegative(),
                        )
                        .nullable()
                        .exactOptional()
                        .openapi({
                          type: ['integer', 'null'],
                          format: 'int64',
                          minimum: 0,
                          exclusiveMinimum: false,
                          description: 'Maximum number of indexes to keep',
                        }),
                      'sorting-algorithm': z
                        .enum(['alphabetical', 'creation_date'])
                        .exactOptional()
                        .openapi({ description: 'Deletion sorting algorithm' }),
                      pattern: z
                        .string()
                        .max(1024)
                        .exactOptional()
                        .openapi({ description: 'fnmatch pattern' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Allows you to create glob style patterns and set a max number of indexes matching this pattern you want to keep. Creating indexes exceeding this value will cause the oldest one to get deleted. You could for example create a pattern looking like 'logs.?' and then create index logs.1, logs.2 etc, it will delete logs.1 once you create logs.6. Do note 'logs.?' does not apply to logs.10. Note: Setting max_index_count to 0 will do nothing and the pattern gets ignored.",
                }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              'index-template': z
                .object({
                  'mapping-nested-objects-limit': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(100000n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 100000,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.',
                    }),
                  'number-of-replicas': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(29n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 29,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'The number of replicas each primary shard has.',
                    }),
                  'number-of-shards': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(1024n),
                    )
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 1024,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'The number of primary shards that an index should have.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Template settings for all new indexes', required: [] }),
              'opensearch-settings': JsonSchemaOpensearchSchema.exactOptional().openapi({
                description: 'OpenSearch-specific settings',
              }),
              version: z.string().exactOptional().openapi({ description: 'Version' }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
              'opensearch-dashboards': z
                .object({
                  'opensearch-request-timeout': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(5000n).max(120000n),
                    )
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 5000,
                      maximum: 120000,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch (default: 30000)',
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Enable or disable OpenSearch Dashboards (default: true)',
                    }),
                  'max-old-space-size': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(64n).max(1024n),
                    )
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 64,
                      maximum: 1024,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch. (default: 128)',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'OpenSearch Dashboards settings', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasOpensearchNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-opensearch/{name}',
  tags: ['dbaas'],
  summary: 'Create a DBaaS OpenSearch service',
  description: 'Create a DBaaS OpenSearch service',
  operationId: 'create-dbaas-service-opensearch',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'max-index-count': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().nonnegative(),
                )
                .nullable()
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: false,
                  description: 'Maximum number of indexes to keep before deleting the oldest one',
                }),
              'keep-index-refresh-interval': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.",
                }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'fork-from-service': DbaasServiceNameSchema.exactOptional().openapi({
                description: 'Service to fork from',
              }),
              'index-patterns': z
                .array(
                  z
                    .object({
                      'max-index-count': z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().nonnegative(),
                        )
                        .nullable()
                        .exactOptional()
                        .openapi({
                          type: ['integer', 'null'],
                          format: 'int64',
                          minimum: 0,
                          exclusiveMinimum: false,
                          description: 'Maximum number of indexes to keep',
                        }),
                      'sorting-algorithm': z
                        .enum(['alphabetical', 'creation_date'])
                        .exactOptional()
                        .openapi({ description: 'Deletion sorting algorithm' }),
                      pattern: z
                        .string()
                        .max(1024)
                        .exactOptional()
                        .openapi({ description: 'fnmatch pattern' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Allows you to create glob style patterns and set a max number of indexes matching this pattern you want to keep. Creating indexes exceeding this value will cause the oldest one to get deleted. You could for example create a pattern looking like 'logs.?' and then create index logs.1, logs.2 etc, it will delete logs.1 once you create logs.6. Do note 'logs.?' does not apply to logs.10. Note: Setting max_index_count to 0 will do nothing and the pattern gets ignored.",
                }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              'index-template': z
                .object({
                  'mapping-nested-objects-limit': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(100000n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 100000,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.',
                    }),
                  'number-of-replicas': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(29n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 29,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'The number of replicas each primary shard has.',
                    }),
                  'number-of-shards': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(1024n),
                    )
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 1024,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'The number of primary shards that an index should have.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Template settings for all new indexes', required: [] }),
              'opensearch-settings': JsonSchemaOpensearchSchema.exactOptional().openapi({
                description: 'OpenSearch-specific settings',
              }),
              version: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'OpenSearch major version' }),
              'recovery-backup-name': z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Name of a backup to recover from for services that support backup names',
                }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
              'opensearch-dashboards': z
                .object({
                  'opensearch-request-timeout': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(5000n).max(120000n),
                    )
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 5000,
                      maximum: 120000,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch (default: 30000)',
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Enable or disable OpenSearch Dashboards (default: true)',
                    }),
                  'max-old-space-size': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(64n).max(1024n),
                    )
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 64,
                      maximum: 1024,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch. (default: 128)',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'OpenSearch Dashboards settings', required: [] }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasOpensearchNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-opensearch/{name}',
  tags: ['dbaas'],
  summary: 'Delete a OpenSearch service',
  operationId: 'delete-dbaas-service-opensearch',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasExternalEndpointSourceServiceNameDetachRoute = createRoute({
  method: 'put',
  path: '/dbaas-external-endpoint/{source-service-name}/detach',
  tags: ['dbaas'],
  description: '[BETA] Detach a DBaaS external integration from a service',
  operationId: 'detach-dbaas-service-from-endpoint',
  request: {
    params: z.object({
      'source-service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'source-service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'integration-id': z.uuid().openapi({ description: 'External Integration ID' }),
            })
            .openapi({ required: ['integration-id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasValkeyServiceNameUserUsernamePasswordRevealRoute = createRoute({
  method: 'get',
  path: '/dbaas-valkey/{service-name}/user/{username}/password/reveal',
  tags: ['dbaas'],
  summary: 'Reveal the secrets of a DBaaS Valkey user',
  operationId: 'reveal-dbaas-valkey-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasUserValkeySecretsSchema } },
    },
  },
})

export const getAiQuotaRoute = createRoute({
  method: 'get',
  path: '/ai/quota',
  tags: ['ai-api-key'],
  summary: '[BETA] Get Organization Consumption Quota',
  description:
    'Get per-org Unit Of Measurement (UOM) consumption quota (UOM/min). Null means unlimited. UOM represents weighted units across different AI workloads (e.g., tokens for LLMs, minutes for TTS, pages for OCR).',
  operationId: 'get-user-org-consumption-quota',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OrgConsumptionQuotaResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDbaasPostgresNameRoute = createRoute({
  method: 'get',
  path: '/dbaas-postgres/{name}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS PostgreSQL service',
  description: 'Get a DBaaS PostgreSQL service',
  operationId: 'get-dbaas-service-pg',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: DbaasServicePgSchema } } },
  },
})

export const putDbaasPostgresNameRoute = createRoute({
  method: 'put',
  path: '/dbaas-postgres/{name}',
  tags: ['dbaas'],
  summary: 'Update a DBaaS PostgreSQL service',
  description: 'Update a DBaaS PostgreSQL service',
  operationId: 'update-dbaas-service-pg',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'pgbouncer-settings': JsonSchemaPgbouncerSchema.exactOptional().openapi({
                description: 'PGBouncer connection pooling settings',
              }),
              'backup-schedule': z
                .object({
                  'backup-hour': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(23n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 23,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                  'backup-minute': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(59n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 59,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              variant: EnumPgVariantSchema.exactOptional().openapi({
                description:
                  'Variant of the PostgreSQL service, may affect the features that are exposed by default',
              }),
              'timescaledb-settings': JsonSchemaTimescaledbSchema.exactOptional().openapi({
                description: 'TimescaleDB extension configuration values',
              }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'pgaudit-settings': JsonSchemaPgauditSchema.exactOptional().openapi({
                description: 'PGAudit settings',
              }),
              'synchronous-replication': EnumPgSynchronousReplicationSchema.exactOptional().openapi(
                {
                  description:
                    'Synchronous replication type. Note that the service plan also needs to support synchronous replication.',
                },
              ),
              'pglookout-settings': JsonSchemaPglookoutSchema.exactOptional().openapi({
                description: 'PGLookout settings',
              }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              version: z.string().exactOptional().openapi({ description: 'Version' }),
              plan: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Subscription plan' }),
              'work-mem': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(1024n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 1024,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. Default is 1MB + 0.075% of total RAM (up to 32MB).',
                }),
              'shared-buffers-percentage': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(20n).max(60n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 20,
                  maximum: 60,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value.',
                }),
              'pg-settings': JsonSchemaPgSchema.exactOptional().openapi({
                description: 'PostgreSQL-specific settings',
              }),
              migration: z
                .object({
                  host: z
                    .string()
                    .min(1)
                    .max(255)
                    .openapi({
                      description:
                        'Hostname or IP address of the server where to migrate data from',
                    }),
                  port: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(65535n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 65535,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'Port number of the server where to migrate data from',
                    }),
                  password: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'Password for authentication with the server where to migrate data from',
                    }),
                  ssl: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'The server where to migrate data from is secured with SSL',
                    }),
                  username: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'User name for authentication with the server where to migrate data from',
                    }),
                  dbname: z
                    .string()
                    .min(1)
                    .max(63)
                    .exactOptional()
                    .openapi({
                      description: 'Database name for bootstrapping the initial connection',
                    }),
                  'ignore-dbs': z
                    .string()
                    .min(1)
                    .max(2048)
                    .exactOptional()
                    .openapi({
                      description:
                        'Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)',
                    }),
                  method: EnumMigrationMethodSchema.exactOptional().openapi({
                    description: 'The migration method to be used',
                  }),
                })
                .exactOptional()
                .openapi({
                  required: ['host', 'port'],
                  description: 'Migrate data from existing server',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasPostgresNameRoute = createRoute({
  method: 'post',
  path: '/dbaas-postgres/{name}',
  tags: ['dbaas'],
  summary: 'Create a DBaaS PostgreSQL service',
  operationId: 'create-dbaas-service-pg',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'pgbouncer-settings': JsonSchemaPgbouncerSchema.exactOptional().openapi({
                description: 'PGBouncer connection pooling settings',
              }),
              'backup-schedule': z
                .object({
                  'backup-hour': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(23n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 23,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                  'backup-minute': z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().nonnegative().max(59n),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      type: ['integer', 'null'],
                      format: 'int64',
                      minimum: 0,
                      maximum: 59,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description:
                        'The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              variant: EnumPgVariantSchema.exactOptional().openapi({
                description:
                  'Variant of the PostgreSQL service, may affect the features that are exposed by default',
              }),
              integrations: z
                .array(
                  z
                    .object({
                      type: z.literal('read_replica').openapi({ description: 'Integration type' }),
                      'source-service': DbaasServiceNameSchema.exactOptional().openapi({
                        description: 'A source service',
                      }),
                      'dest-service': DbaasServiceNameSchema.exactOptional().openapi({
                        description: 'A destination service',
                      }),
                      settings: z
                        .looseObject({})
                        .exactOptional()
                        .openapi({ description: 'Integration settings' }),
                    })
                    .openapi({ required: ['type'] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Service integrations to be enabled when creating the service.',
                }),
              'timescaledb-settings': JsonSchemaTimescaledbSchema.exactOptional().openapi({
                description: 'TimescaleDB extension configuration values',
              }),
              'ip-filter': z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'",
                }),
              'termination-protection': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Service is protected against termination and powering off',
                }),
              'pgaudit-settings': JsonSchemaPgauditSchema.exactOptional().openapi({
                description: 'PGAudit settings',
              }),
              'fork-from-service': DbaasServiceNameSchema.exactOptional().openapi({
                description: 'Service to fork from',
              }),
              'synchronous-replication': EnumPgSynchronousReplicationSchema.exactOptional().openapi(
                {
                  description:
                    'Synchronous replication type. Note that the service plan also needs to support synchronous replication.',
                },
              ),
              'recovery-backup-time': z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'ISO time of a backup to recover from for services that support arbitrary times',
                }),
              'pglookout-settings': JsonSchemaPglookoutSchema.exactOptional().openapi({
                description: 'PGLookout settings',
              }),
              maintenance: z
                .object({
                  dow: z
                    .enum([
                      'saturday',
                      'tuesday',
                      'never',
                      'wednesday',
                      'sunday',
                      'friday',
                      'monday',
                      'thursday',
                    ])
                    .openapi({ description: 'Day of week for installing updates' }),
                  time: z
                    .string()
                    .length(8)
                    .openapi({ description: 'Time for installing updates, UTC' }),
                })
                .exactOptional()
                .openapi({
                  required: ['dow', 'time'],
                  description: 'Automatic maintenance settings',
                }),
              'admin-username': z
                .string()
                .regex(/^[_A-Za-z0-9][-._A-Za-z0-9]{0,63}$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Custom username for admin user. This must be set only when a new service is being created.',
                }),
              version: DbaasPgTargetVersionsSchema.exactOptional().openapi({
                description: 'PostgreSQL major version',
              }),
              plan: z.string().min(1).max(128).openapi({ description: 'Subscription plan' }),
              'work-mem': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(1024n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 1024,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. Default is 1MB + 0.075% of total RAM (up to 32MB).',
                }),
              'shared-buffers-percentage': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(20n).max(60n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 20,
                  maximum: 60,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description:
                    'Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value.',
                }),
              'pg-settings': JsonSchemaPgSchema.exactOptional().openapi({
                description: 'PostgreSQL-specific settings',
              }),
              'admin-password': z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(8)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Custom password for admin user. Defaults to random string. This must be set only when a new service is being created.',
                }),
              migration: z
                .object({
                  host: z
                    .string()
                    .min(1)
                    .max(255)
                    .openapi({
                      description:
                        'Hostname or IP address of the server where to migrate data from',
                    }),
                  port: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n).max(65535n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      maximum: 65535,
                      exclusiveMinimum: false,
                      exclusiveMaximum: false,
                      description: 'Port number of the server where to migrate data from',
                    }),
                  password: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'Password for authentication with the server where to migrate data from',
                    }),
                  ssl: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'The server where to migrate data from is secured with SSL',
                    }),
                  username: z
                    .string()
                    .min(1)
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'User name for authentication with the server where to migrate data from',
                    }),
                  dbname: z
                    .string()
                    .min(1)
                    .max(63)
                    .exactOptional()
                    .openapi({
                      description: 'Database name for bootstrapping the initial connection',
                    }),
                  'ignore-dbs': z
                    .string()
                    .min(1)
                    .max(2048)
                    .exactOptional()
                    .openapi({
                      description:
                        'Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)',
                    }),
                  method: EnumMigrationMethodSchema.exactOptional().openapi({
                    description: 'The migration method to be used',
                  }),
                })
                .exactOptional()
                .openapi({
                  required: ['host', 'port'],
                  description: 'Migrate data from existing server',
                }),
            })
            .openapi({ required: ['plan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasPostgresNameRoute = createRoute({
  method: 'delete',
  path: '/dbaas-postgres/{name}',
  tags: ['dbaas'],
  summary: 'Delete a Postgres service',
  operationId: 'delete-dbaas-service-pg',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'name', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasValkeyServiceNameUserRoute = createRoute({
  method: 'get',
  path: '/dbaas-valkey/{service-name}/user',
  tags: ['dbaas'],
  summary: 'List DBaaS Valkey users with ACL configuration',
  operationId: 'list-dbaas-valkey-users',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: DbaasValkeyUsersSchema } },
    },
  },
})

export const postDbaasValkeyServiceNameUserRoute = createRoute({
  method: 'post',
  path: '/dbaas-valkey/{service-name}/user',
  tags: ['dbaas'],
  summary: 'Create a DBaaS Valkey user',
  operationId: 'create-dbaas-valkey-user',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: DbaasUserUsernameSchema.openapi({ description: 'Username' }),
              'access-control': DbaasValkeyUserAccessControlSchema.exactOptional(),
            })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putSksClusterIdRotateKarpenterCredentialsRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/rotate-karpenter-credentials',
  tags: ['cluster'],
  summary: 'Rotate Exoscale Karpenter credentials',
  operationId: 'rotate-sks-karpenter-credentials',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postDbaasIntegrationRoute = createRoute({
  method: 'post',
  path: '/dbaas-integration',
  tags: ['dbaas'],
  description: '[BETA] Create a new DBaaS integration between two services',
  operationId: 'create-dbaas-integration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'integration-type': EnumIntegrationTypesSchema.openapi({
                description: 'Integration type',
              }),
              'source-service': DbaasServiceNameSchema.openapi({ description: 'A source service' }),
              'dest-service': DbaasServiceNameSchema.openapi({
                description: 'A destination service',
              }),
              settings: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'Integration settings' }),
            })
            .openapi({ required: ['integration-type', 'source-service', 'dest-service'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getDbaasTaskServiceIdRoute = createRoute({
  method: 'get',
  path: '/dbaas-task/{service}/{id}',
  tags: ['dbaas'],
  summary: 'Get a DBaaS task',
  description: 'Get a DBaaS task',
  operationId: 'get-dbaas-task',
  request: {
    params: z.object({
      service: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: DbaasTaskSchema } } },
  },
})

export const getSosBucketPresignedUrlRoute = createRoute({
  method: 'get',
  path: '/sos/{bucket}/presigned-url',
  tags: ['sos'],
  summary: 'Retrieve Presigned Download URL for SOS object',
  description: 'Generates Presigned Download URL for SOS object',
  operationId: 'get-sos-presigned-url',
  request: {
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: { in: 'path', required: true, name: 'bucket', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'key', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z.object({ url: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSksClusterIdRotateOperatorsCaRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/rotate-operators-ca',
  tags: ['cluster'],
  summary: 'Rotate operators certificate authority',
  operationId: 'rotate-sks-operators-ca',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiDeploymentIdApiKeyRoute = createRoute({
  method: 'get',
  path: '/ai/deployment/{id}/api-key',
  tags: ['deployment'],
  summary: 'Reveal Deployment API Key',
  description: 'Get Deployment API Key',
  operationId: 'reveal-deployment-api-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RevealDeploymentApiKeyResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAntiAffinityGroupIdRoute = createRoute({
  method: 'get',
  path: '/anti-affinity-group/{id}',
  tags: ['anti-affinity-group'],
  summary: 'Retrieve Anti-affinity Group details',
  operationId: 'get-anti-affinity-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: { 'application/json': { schema: AntiAffinityGroupSchema } },
    },
  },
})

export const deleteAntiAffinityGroupIdRoute = createRoute({
  method: 'delete',
  path: '/anti-affinity-group/{id}',
  tags: ['anti-affinity-group'],
  summary: 'Delete an Anti-affinity Group',
  operationId: 'delete-anti-affinity-group',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postKmsKeyIdReplicateRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/replicate',
  tags: ['kms-key'],
  summary: 'Replicate KMS Key',
  description: 'Replicate a KMS key to a target zone.',
  operationId: 'replicate-kms-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReplicateKmsKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Key replication target registered',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Pending Deletion: The request was rejected because it was performed on a key that is pending deletion.\n\nNot on Default: The request was rejected because the operation is not allowed on the default key.\n\nNot Multizone: The request was rejected because the KMS key is not a multi-zone key.\n\nConflict: The request was rejected because the key is already replicated in the target zone.\n\nInvalid Argument: The request was rejected because the target zone is invalid.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getSksClusterVersionRoute = createRoute({
  method: 'get',
  path: '/sks-cluster-version',
  tags: ['cluster'],
  summary: 'List available versions for SKS clusters',
  operationId: 'list-sks-cluster-versions',
  request: {
    query: z.object({
      'include-deprecated': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'include-deprecated',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'sks-cluster-versions': z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInstanceRoute = createRoute({
  method: 'get',
  path: '/instance',
  tags: ['instance'],
  summary: 'List Compute instances',
  operationId: 'list-instances',
  request: {
    query: z.object({
      'manager-id': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'manager-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      'manager-type': z
        .literal('instance-pool')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'manager-type',
            schema: { type: 'string', enum: ['instance-pool'] },
          },
        }),
      'ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'ip-address', schema: { type: 'string' } },
        }),
      labels: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'labels', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              instances: z
                .array(
                  z
                    .object({
                      'public-ip-assignment': PublicIpAssignmentSchema.exactOptional().openapi({
                        description: 'Instance public IP assignment',
                      }),
                      labels: LabelsSchema.exactOptional().openapi({
                        description: 'Resource labels',
                      }),
                      'security-groups': z
                        .array(SecurityGroupSchema)
                        .exactOptional()
                        .openapi({ description: 'Instance Security Groups' }),
                      name: z
                        .string()
                        .min(1)
                        .max(255)
                        .exactOptional()
                        .openapi({ description: 'Instance name' }),
                      'instance-type': InstanceTypeSchema.exactOptional().openapi({
                        description: 'Instance Type',
                      }),
                      'private-networks': z
                        .array(
                          z
                            .object({
                              id: z
                                .uuid()
                                .exactOptional()
                                .openapi({ description: 'Private Network ID' }),
                              'mac-address': z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Private Network MAC address' }),
                            })
                            .openapi({ description: 'Private Network', required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Instance Private Networks' }),
                      template: TemplateSchema.exactOptional().openapi({
                        description: 'Instance Template',
                      }),
                      state: InstanceStateSchema.exactOptional().openapi({
                        description: 'Instance state',
                      }),
                      'ssh-key': SshKeySchema.exactOptional().openapi({
                        description: 'Instance SSH Key',
                      }),
                      'mac-address': z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Instance MAC address' }),
                      manager: ManagerSchema.exactOptional().openapi({
                        description: 'Instance manager',
                      }),
                      'ipv6-address': z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Instance IPv6 address' }),
                      id: z.uuid().exactOptional().openapi({ description: 'Instance ID' }),
                      'ssh-keys': z
                        .array(SshKeySchema)
                        .exactOptional()
                        .openapi({ description: 'Instance SSH Keys' }),
                      'created-at': z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'Instance creation date' }),
                      'public-ip': z
                        .ipv4()
                        .exactOptional()
                        .openapi({ description: 'Instance public IPv4 address' }),
                    })
                    .openapi({ description: 'Instance', required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postInstanceRoute = createRoute({
  method: 'post',
  path: '/instance',
  tags: ['instance'],
  summary: 'Create a Compute instance',
  operationId: 'create-instance',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'application-consistent-snapshot-enabled': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enable application-consistent snapshot for the instance',
                }),
              'anti-affinity-groups': z
                .array(AntiAffinityGroupRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instance Anti-affinity Groups' }),
              'public-ip-assignment': PublicIpAssignmentSchema.exactOptional().openapi({
                description: 'Assign public IP to the Instance',
              }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
              'auto-start': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Start Instance on creation (default: true)' }),
              'security-groups': z
                .array(SecurityGroupRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instance Security Groups' }),
              name: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Instance name' }),
              'instance-type': InstanceTypeRefSchema.openapi({ description: 'Instance Type' }),
              template: TemplateRefSchema.openapi({ description: 'Instance Template' }),
              'secureboot-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable secure boot' }),
              'ssh-key': SshKeyRefSchema.exactOptional().openapi({
                deprecated: true,
                description: 'Instance SSH Key',
              }),
              'user-data': z
                .string()
                .min(1)
                .max(32768)
                .exactOptional()
                .openapi({ description: 'Instance Cloud-init user-data (base64 encoded)' }),
              'tpm-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable Trusted Platform Module (TPM)' }),
              'deploy-target': DeployTargetRefSchema.exactOptional().openapi({
                description: 'Instance Deploy Target',
              }),
              'ipv6-enabled': z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable IPv6. DEPRECATED: use `public-ip-assignments`.' }),
              'disk-size': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(10n).max(51200n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 10,
                  maximum: 51200,
                  exclusiveMinimum: false,
                  exclusiveMaximum: false,
                  description: 'Instance disk size in GiB',
                }),
              'ssh-keys': z
                .array(SshKeyRefSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'Instance SSH Keys' }),
            })
            .openapi({ required: ['disk-size', 'instance-type', 'template'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getIamRoleRoute = createRoute({
  method: 'get',
  path: '/iam-role',
  tags: ['role'],
  summary: 'List IAM Roles',
  operationId: 'list-iam-roles',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'iam-roles': z.array(IamRoleSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postIamRoleRoute = createRoute({
  method: 'post',
  path: '/iam-role',
  tags: ['role'],
  summary: 'Create IAM Role',
  operationId: 'create-iam-role',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(191).openapi({ description: 'IAM Role name' }),
              description: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'IAM Role description' }),
              permissions: z
                .array(z.enum(['bypass-governance-retention', 'reset-iam-organization-policy']))
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ description: 'IAM Role permissions' }),
              editable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Sets if the IAM Role Policy is editable or not (default: true). This setting cannot be changed after creation',
                }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'IAM Role labels' }),
              policy: IamPolicySchema.exactOptional().openapi({ description: 'IAM Role policy' }),
              'assume-role-policy': IamAssumeRolePolicySchema.exactOptional().openapi({
                description: 'IAM Assume role policy',
              }),
              'max-session-ttl': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().positive(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  exclusiveMinimum: true,
                  description: 'Maximum TTL requester is allowed to ask for when assuming a role',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deletePrivateNetworkIdFieldRoute = createRoute({
  method: 'delete',
  path: '/private-network/{id}/{field}',
  tags: ['private-network'],
  summary: 'Reset Private Network field',
  operationId: 'reset-private-network-field',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      field: z
        .literal('labels')
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'field',
            schema: { type: 'string', enum: ['labels'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['user'],
  summary: 'List Users',
  operationId: 'list-users',
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ users: z.array(UserSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postUserRoute = createRoute({
  method: 'post',
  path: '/user',
  tags: ['user'],
  summary: 'Create a User',
  operationId: 'create-user',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().openapi({ description: 'User Email' }),
              role: IamRoleSchema.exactOptional().openapi({ description: 'IAM Role' }),
            })
            .openapi({ required: ['email'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasClickhouseNameMaintenanceStartRoute = createRoute({
  method: 'put',
  path: '/dbaas-clickhouse/{name}/maintenance/start',
  tags: ['dbaas'],
  summary: '[BETA] Initiate ClickHouse maintenance update',
  operationId: 'start-dbaas-clickhouse-maintenance',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const getAiDeploymentIdLogsRoute = createRoute({
  method: 'get',
  path: '/ai/deployment/{id}/logs',
  tags: ['deployment'],
  summary: 'Get Deployment Logs',
  description:
    'Return logs for the vLLM deployment (deploy/<release-name>--deployment-vllm). Optional ?stream=true to request streaming (may not be supported).',
  operationId: 'get-deployment-logs',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      stream: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', required: false, name: 'stream', schema: { type: 'boolean' } },
        }),
      tail: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'tail',
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDeploymentLogsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putSksClusterIdUpgradeRoute = createRoute({
  method: 'put',
  path: '/sks-cluster/{id}/upgrade',
  tags: ['cluster'],
  summary: 'Upgrade an SKS cluster',
  operationId: 'upgrade-sks-cluster',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.string().openapi({ description: 'Control plane Kubernetes version' }),
            })
            .openapi({ required: ['version'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postKmsKeyIdCancelDeletionRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/cancel-deletion',
  tags: ['kms-key'],
  summary: 'Cancel KMS Key Deletion',
  description: 'Cancels the scheduled deletion of a KMS Key.',
  operationId: 'cancel-kms-key-deletion',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key deletion cancelled',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nNot on Replica: The request was rejectde because the operation is not allowed on a replica.\n\nNot Pending Deletion: The request was rejected because the key is not pending deletion.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postKmsKeyIdGenerateDataKeyRoute = createRoute({
  method: 'post',
  path: '/kms-key/{id}/generate-data-key',
  tags: ['crypto'],
  summary: 'Generate Data Encryption Key',
  description: 'Generate a Data Encryption Key from a given KMS Key.',
  operationId: 'generate-data-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GenerateDataKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Data Encryption Key in the clear and in its base64 encoded encrypted format.',
      content: { 'application/json': { schema: GenerateDataKeyResponseSchema } },
    },
    400: {
      description:
        '### Errors\n\nKey Not Found: The request was rejected because the specified KMS Key could not be found.\n\nKey is Disabled: The request was rejected because the specified KMS key is disabled.\n\nInvalid Usage: The request was rejected because the operation is only allowed on symmetric keys with usage "encrypt-decrypt".\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getVpcIdRoute = createRoute({
  method: 'get',
  path: '/vpc/{id}',
  tags: ['vpc-management'],
  summary: '[BETA] Retrieve VPC details',
  operationId: 'get-vpc',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: VpcSchema } } },
  },
})

export const putVpcIdRoute = createRoute({
  method: 'put',
  path: '/vpc/{id}',
  tags: ['vpc-management'],
  summary: '[BETA] Update a VPC',
  operationId: 'update-vpc',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
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
                .min(1)
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'VPC name' }),
              description: z
                .string()
                .max(4096)
                .nullable()
                .exactOptional()
                .openapi({ description: 'VPC description' }),
              labels: LabelsSchema.nullable()
                .exactOptional()
                .openapi({ description: 'Resource labels' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: VpcSchema } } },
  },
})

export const deleteVpcIdRoute = createRoute({
  method: 'delete',
  path: '/vpc/{id}',
  tags: ['vpc-management'],
  summary: '[BETA] Delete a VPC',
  operationId: 'delete-vpc',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const getBlockStorageRoute = createRoute({
  method: 'get',
  path: '/block-storage',
  tags: ['block-storage'],
  summary: 'List block storage volumes',
  operationId: 'list-block-storage-volumes',
  request: {
    query: z.object({
      'instance-id': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'instance-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ 'block-storage-volumes': z.array(BlockStorageVolumeSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postBlockStorageRoute = createRoute({
  method: 'post',
  path: '/block-storage',
  tags: ['block-storage'],
  summary: 'Create a block storage volume',
  operationId: 'create-block-storage-volume',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().max(255).exactOptional().openapi({ description: 'Volume name' }),
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  exclusiveMinimum: false,
                  description:
                    'Volume size in GiB.\n                            When a snapshot ID is supplied, this defaults to the size of the source volume, but can be set to a larger value.',
                }),
              labels: LabelsSchema.exactOptional().openapi({ description: 'Resource labels' }),
              'block-storage-snapshot': BlockStorageSnapshotRefSchema.exactOptional().openapi({
                description: 'Block storage snapshot',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const deleteDbaasKafkaNameTopicAclConfigAclIdRoute = createRoute({
  method: 'delete',
  path: '/dbaas-kafka/{name}/topic/acl-config/{acl-id}',
  tags: ['dbaas'],
  summary: 'Delete a Kafka ACL entry',
  operationId: 'delete-dbaas-kafka-topic-acl-config',
  request: {
    params: z.object({
      name: DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      'acl-id': DbaasKafkaAclIdSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'acl-id',
          schema: { $ref: '#/components/schemas/dbaas-kafka-acl-id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const postInstanceInstanceIdRevertSnapshotRoute = createRoute({
  method: 'post',
  path: '/instance/{instance-id}:revert-snapshot',
  tags: ['instance'],
  summary: 'Revert a snapshot for an instance',
  description:
    'This operation reverts the snapshot to the Compute instance volume, restoring stored data as it was at the time of the snapshot.\nThe Compute instance must be previously stopped.',
  operationId: 'revert-instance-to-snapshot',
  request: {
    params: z.object({
      'instance-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'instance-id',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Snapshot ID' }) })
            .openapi({ required: ['id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})

export const putDbaasPostgresServiceNameUserUsernamePasswordResetRoute = createRoute({
  method: 'put',
  path: '/dbaas-postgres/{service-name}/user/{username}/password/reset',
  tags: ['dbaas'],
  summary: 'Reset the credentials of a DBaaS Postgres user',
  description: 'If no password is provided one will be generated automatically.',
  operationId: 'reset-dbaas-postgres-user-password',
  request: {
    params: z.object({
      'service-name': DbaasServiceNameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'service-name',
          schema: { $ref: '#/components/schemas/dbaas-service-name' },
        },
      }),
      username: DbaasUserUsernameSchema.openapi({
        param: {
          in: 'path',
          required: true,
          name: 'username',
          schema: { $ref: '#/components/schemas/dbaas-user-username' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: DbaasUserPasswordSchema.exactOptional().openapi({
                description: 'New password',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '200', content: { 'application/json': { schema: OperationSchema } } },
  },
})
