import { createRoute, z } from '@hono/zod-openapi'

const OrderByDirectionSchema = z
  .union([z.literal('asc'), z.literal('desc'), z.literal('ASC'), z.literal('DESC')])
  .openapi('OrderByDirection')

const SeekPaginationSchema = z
  .strictObject({
    order_by: z.union([z.string(), z.array(z.string())]).exactOptional(),
    dir: z.union([OrderByDirectionSchema, z.array(OrderByDirectionSchema)]).exactOptional(),
    limit: z.int().exactOptional(),
    prev: z.string().exactOptional(),
    next: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeekPagination')

const IssueTypeSchema = z
  .enum(['delivery', 'transformation', 'backpressure'])
  .openapi({ description: 'Issue type' })
  .openapi('IssueType')

const IssueTriggerStrategySchema = z
  .enum(['first_attempt', 'final_attempt'])
  .openapi({ description: 'The strategy uses to open the issue' })
  .openapi('IssueTriggerStrategy')

const IssueTriggerDeliveryConfigsSchema = z
  .strictObject({
    strategy: IssueTriggerStrategySchema,
    connections: z
      .union([z.string(), z.array(z.string())])
      .openapi({
        description:
          'A pattern to match on the connection name or array of connection IDs. Use `*` as wildcard.',
        'x-docs-force-simple-type': true,
      }),
  })
  .openapi({
    required: ['strategy', 'connections'],
    description: "Configurations for a 'delivery' issue trigger",
  })
  .openapi('IssueTriggerDeliveryConfigs')

const TransformationExecutionLogLevelSchema = z
  .enum(['debug', 'info', 'warn', 'error', 'fatal'])
  .openapi({ description: 'The minimum log level to open the issue on' })
  .openapi('TransformationExecutionLogLevel')

const IssueTriggerTransformationConfigsSchema = z
  .strictObject({
    log_level: TransformationExecutionLogLevelSchema,
    transformations: z
      .union([z.string(), z.array(z.string())])
      .openapi({
        description:
          'A pattern to match on the transformation name or array of transformation IDs. Use `*` as wildcard.',
        'x-docs-force-simple-type': true,
      }),
  })
  .openapi({
    required: ['log_level', 'transformations'],
    description: "Configurations for a 'Transformation' issue trigger",
  })
  .openapi('IssueTriggerTransformationConfigs')

const IssueTriggerBackpressureDelaySchema = z
  .int()
  .min(60000)
  .max(86400000)
  .openapi({
    description:
      'The minimum delay (backpressure) to open the issue for min of 1 minute (60000) and max of 1 day (86400000)',
    'x-docs-type': 'integer',
  })
  .openapi('IssueTriggerBackpressureDelay')

const IssueTriggerBackpressureConfigsSchema = z
  .strictObject({
    delay: IssueTriggerBackpressureDelaySchema,
    destinations: z
      .union([z.string(), z.array(z.string())])
      .openapi({
        description:
          'A pattern to match on the destination name or array of destination IDs. Use `*` as wildcard.',
        'x-docs-force-simple-type': true,
      }),
  })
  .openapi({
    required: ['delay', 'destinations'],
    description: "Configurations for a 'Backpressure' issue trigger",
  })
  .openapi('IssueTriggerBackpressureConfigs')

const IssueTriggerReferenceSchema = z
  .union([
    IssueTriggerDeliveryConfigsSchema,
    IssueTriggerTransformationConfigsSchema,
    IssueTriggerBackpressureConfigsSchema,
  ])
  .openapi({ description: 'Configuration object for the specific issue type selected' })
  .openapi('IssueTriggerReference')

const IssueTriggerSlackChannelSchema = z
  .strictObject({ channel_name: z.string().openapi({ description: 'Channel name' }) })
  .openapi({
    required: ['channel_name'],
    description: 'Slack channel for an issue trigger',
    'x-docs-type': 'object',
  })
  .openapi('IssueTriggerSlackChannel')

const IssueTriggerIntegrationChannelSchema = z
  .strictObject({})
  .openapi({ description: 'Integration channel for an issue trigger', 'x-docs-type': 'object' })
  .openapi('IssueTriggerIntegrationChannel')

const IssueTriggerEmailChannelSchema = z
  .strictObject({})
  .openapi({ description: 'Email channel for an issue trigger', 'x-docs-type': 'object' })
  .openapi('IssueTriggerEmailChannel')

const IssueTriggerChannelsSchema = z
  .strictObject({
    slack: IssueTriggerSlackChannelSchema.exactOptional(),
    opsgenie: IssueTriggerIntegrationChannelSchema.exactOptional(),
    email: IssueTriggerEmailChannelSchema.exactOptional(),
  })
  .nullable()
  .openapi({
    description: 'Notification channels object for the specific channel type',
    required: [],
  })
  .openapi('IssueTriggerChannels')

const IssueTriggerSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the issue trigger' }),
    team_id: z.string().nullable().exactOptional().openapi({ description: 'ID of the project' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional unique name to use as reference when using the API' }),
    type: IssueTypeSchema,
    configs: IssueTriggerReferenceSchema,
    channels: IssueTriggerChannelsSchema.exactOptional(),
    disabled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO timestamp for when the issue trigger was disabled' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue trigger was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue trigger was created' }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO timestamp for when the issue trigger was deleted' }),
  })
  .openapi({ required: ['id', 'type', 'configs', 'updated_at', 'created_at'] })
  .openapi('IssueTrigger')

const IssueTriggerPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(IssueTriggerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IssueTriggerPaginatedResult')

const APIErrorResponseSchema = z
  .strictObject({
    code: z.string().openapi({ description: 'Error code' }),
    status: z.float32().openapi({ description: 'Status code' }),
    message: z.string().openapi({ description: 'Error description' }),
    data: z.looseObject({}).nullable().exactOptional(),
  })
  .openapi({ required: ['code', 'status', 'message'], description: 'Error response model' })
  .openapi('APIErrorResponse')

const OperatorsSchema = z
  .strictObject({
    gt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    gte: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    le: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lte: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    any: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Operators')

const DeletedIssueTriggerResponseSchema = z
  .strictObject({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('DeletedIssueTriggerResponse')

const AttemptTriggerSchema = z
  .enum(['INITIAL', 'MANUAL', 'BULK_RETRY', 'UNPAUSE', 'AUTOMATIC'])
  .nullable()
  .openapi({ description: 'How the attempt was triggered' })
  .openapi('AttemptTrigger')

const AttemptErrorCodesSchema = z
  .enum([
    'CANCELLED',
    'TIMEOUT',
    'NOT_FOUND',
    'CONNECTION_REFUSED',
    'CONNECTION_RESET',
    'MISSING_URL',
    'CLI',
    'CLI_UNAVAILABLE',
    'SELF_SIGNED_CERT',
    'ERR_TLS_CERT_ALTNAME_INVALID',
    'ERR_SSL_WRONG_VERSION_NUMBER',
    'SSL_ERROR_CA_UNKNOWN',
    'TTL_EXPIRED',
    'DATA_ARCHIVED',
    'SSL_CERT_EXPIRED',
    'BULK_RETRY_CANCELLED',
    'DNS_LOOKUP_FAILED',
    'HOST_UNREACHABLE',
    'PROTOCOL_ERROR',
    'SOCKET_CLOSED',
    'OAUTH2_HANDSHAKE_FAILED',
    'UNKNOWN',
  ])
  .openapi({ description: 'Error code of the delivery attempt' })
  .openapi('AttemptErrorCodes')

const AttemptStatusSchema = z
  .enum(['FAILED', 'SUCCESSFUL'])
  .openapi({ description: 'Attempt status' })
  .openapi('AttemptStatus')

const EventAttemptSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Attempt ID' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    event_id: z.string().openapi({ description: 'Event ID' }),
    destination_id: z.string().openapi({ description: 'Destination ID' }),
    response_status: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: "Attempt's HTTP response code" }),
    attempt_number: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sequential number of attempts (up to and including this one) made for the associated event',
      }),
    trigger: AttemptTriggerSchema.exactOptional(),
    error_code: AttemptErrorCodesSchema.exactOptional(),
    body: z
      .union([
        z.looseObject({}).nullable().openapi({ description: 'Response body from the destination' }),
        z.string().nullable().openapi({ description: 'Response body from the destination' }),
      ])
      .exactOptional(),
    requested_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL of the destination where delivery was attempted' }),
    http_method: z
      .enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'HTTP method used to deliver the attempt' }),
    bulk_retry_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of associated bulk retry' }),
    status: AttemptStatusSchema,
    successful_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date the attempt was successful' }),
    delivered_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date the attempt was delivered' }),
    responded_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date the destination responded to this attempt' }),
    delivery_latency: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Time elapsed between attempt initiation and final delivery (in ms)',
      }),
    response_latency: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Time elapsed between attempt initiation and a response from the destination (in ms)',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the attempt was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the attempt was created' }),
  })
  .nullable()
  .openapi({
    required: ['id', 'team_id', 'event_id', 'destination_id', 'status', 'updated_at', 'created_at'],
  })
  .openapi('EventAttempt')

const EventAttemptPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(EventAttemptSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventAttemptPaginatedResult')

const ShortEventDataSchema = z
  .strictObject({
    path: z.string().openapi({ description: 'Request path' }),
    query: z.string().nullable().openapi({ description: 'Raw query param string' }),
    parsed_query: z
      .union([z.string().nullable(), z.looseObject({})])
      .nullable()
      .openapi({ description: 'JSON representation of query params' }),
    headers: z
      .union([z.string(), z.record(z.string(), z.string().nullable())])
      .nullable()
      .openapi({ description: 'JSON representation of the headers' }),
    body: z
      .union([z.string(), z.looseObject({}), z.array(z.any())])
      .nullable()
      .openapi({ description: 'JSON or string representation of the body' }),
    is_large_payload: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the payload is considered large payload and not searchable',
      }),
  })
  .nullable()
  .openapi({
    required: ['path', 'query', 'parsed_query', 'headers', 'body'],
    description: 'Request data',
  })
  .openapi('ShortEventData')

const BookmarkSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the bookmark' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    webhook_id: z.string().openapi({ description: 'ID of the associated connection' }),
    event_data_id: z.string().openapi({ description: 'ID of the bookmarked event data' }),
    label: z.string().openapi({ description: 'Descriptive name of the bookmark' }),
    alias: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Alternate alias for the bookmark' }),
    data: ShortEventDataSchema.exactOptional(),
    last_used_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date the bookmark was last manually triggered' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the bookmark was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the bookmark was created' }),
  })
  .openapi({
    required: ['id', 'team_id', 'webhook_id', 'event_data_id', 'label', 'updated_at', 'created_at'],
  })
  .openapi('Bookmark')

const BookmarkPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(BookmarkSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookmarkPaginatedResult')

const RawBodySchema = z
  .strictObject({ body: z.string() })
  .openapi({ required: ['body'] })
  .openapi('RawBody')

const EventStatusSchema = z
  .enum(['SCHEDULED', 'QUEUED', 'HOLD', 'SUCCESSFUL', 'FAILED'])
  .openapi('EventStatus')

const EventSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the event' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    webhook_id: z.string().openapi({ description: 'ID of the associated connection' }),
    source_id: z.string().openapi({ description: 'ID of the associated source' }),
    destination_id: z.string().openapi({ description: 'ID of the associated destination' }),
    event_data_id: z.string().openapi({ description: 'ID of the event data' }),
    request_id: z.string().openapi({ description: 'ID of the request that created the event' }),
    attempts: z.int().openapi({ description: 'Number of delivery attempts made' }),
    last_attempt_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date of the most recently attempted retry' }),
    next_attempt_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date of the next scheduled retry' }),
    response_status: z.int().nullable().exactOptional().openapi({ description: 'Event status' }),
    error_code: AttemptErrorCodesSchema.exactOptional(),
    status: EventStatusSchema,
    successful_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date of the latest successful attempt' }),
    cli_id: z.string().nullable().openapi({ description: 'ID of the CLI the event is sent to' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the event was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the event was created' }),
    data: ShortEventDataSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'webhook_id',
      'source_id',
      'destination_id',
      'event_data_id',
      'request_id',
      'attempts',
      'last_attempt_at',
      'next_attempt_at',
      'status',
      'successful_at',
      'cli_id',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('Event')

const EventArraySchema = z.array(EventSchema).openapi('EventArray')

const DeletedBookmarkResponseSchema = z
  .strictObject({ id: z.string().openapi({ description: 'Bookmark ID' }) })
  .openapi({ required: ['id'] })
  .openapi('DeletedBookmarkResponse')

const DestinationRateLimitPeriodSchema = z
  .enum(['second', 'minute', 'hour', 'concurrent'])
  .nullable()
  .default('second')
  .openapi({
    description:
      'Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.',
  })
  .openapi('DestinationRateLimitPeriod')

const DestinationHTTPMethodSchema = z
  .enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
  .nullable()
  .openapi({
    description:
      'HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.',
  })
  .openapi('DestinationHTTPMethod')

const DestinationAuthMethodSignatureConfigSchema = z
  .strictObject({})
  .openapi({ description: "Empty config for the destination's auth method" })
  .openapi('DestinationAuthMethodSignatureConfig')

const AuthHookdeckSignatureSchema = z
  .strictObject({
    type: z.literal('HOOKDECK_SIGNATURE').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodSignatureConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    description: 'Hookdeck Signature',
    'x-docs-type': 'Hookdeck Signature',
  })
  .openapi('AuthHookdeckSignature')

const DestinationAuthMethodBasicAuthConfigSchema = z
  .strictObject({
    username: z.string().openapi({ description: 'Username for basic auth' }),
    password: z.string().openapi({ description: 'Password for basic auth' }),
  })
  .openapi({
    required: ['username', 'password'],
    description: "Basic auth config for the destination's auth method",
  })
  .openapi('DestinationAuthMethodBasicAuthConfig')

const AuthBasicAuthSchema = z
  .strictObject({
    type: z.literal('BASIC_AUTH').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodBasicAuthConfigSchema.exactOptional(),
  })
  .openapi({ required: ['type'], description: 'Basic Auth', 'x-docs-type': 'Basic Auth' })
  .openapi('AuthBasicAuth')

const DestinationAuthMethodApiKeyConfigSchema = z
  .strictObject({
    key: z.string().openapi({ description: 'Key for the API key auth' }),
    api_key: z.string().openapi({ description: 'API key for the API key auth' }),
    to: z
      .enum(['header', 'query'])
      .default('header')
      .exactOptional()
      .openapi({
        description: 'Whether the API key should be sent as a header or a query parameter',
      }),
  })
  .openapi({
    required: ['key', 'api_key'],
    description: "API key config for the destination's auth method",
  })
  .openapi('DestinationAuthMethodApiKeyConfig')

const AuthAPIKeySchema = z
  .strictObject({
    type: z.literal('API_KEY').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodApiKeyConfigSchema.exactOptional(),
  })
  .openapi({ required: ['type'], description: 'API Key', 'x-docs-type': 'API Key' })
  .openapi('AuthAPIKey')

const DestinationAuthMethodBearerTokenConfigSchema = z
  .strictObject({ token: z.string().openapi({ description: 'Token for the bearer token auth' }) })
  .openapi({
    required: ['token'],
    description: "Bearer token config for the destination's auth method",
  })
  .openapi('DestinationAuthMethodBearerTokenConfig')

const AuthBearerTokenSchema = z
  .strictObject({
    type: z.literal('BEARER_TOKEN').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodBearerTokenConfigSchema.exactOptional(),
  })
  .openapi({ required: ['type'], description: 'Bearer Token', 'x-docs-type': 'Bearer Token' })
  .openapi('AuthBearerToken')

const DestinationAuthMethodOAuth2ClientCredentialsConfigSchema = z
  .strictObject({
    client_id: z.string().openapi({ description: 'Client id in the auth server' }),
    client_secret: z.string().openapi({ description: 'Client secret in the auth server' }),
    scope: z.string().nullable().exactOptional().openapi({ description: 'Scope to access' }),
    auth_server: z.string().openapi({ description: 'URL of the auth server' }),
    authentication_type: z
      .enum(['basic', 'bearer', 'x-www-form-urlencoded'])
      .default('basic')
      .exactOptional()
      .openapi({ description: 'Basic (default), Bearer Authentication or x-www-form-urlencoded' }),
  })
  .openapi({
    required: ['client_id', 'client_secret', 'auth_server'],
    description: "OAuth2 Client Credentials config for the destination's auth method",
  })
  .openapi('DestinationAuthMethodOAuth2ClientCredentialsConfig')

const AuthOAuth2ClientCredentialsSchema = z
  .strictObject({
    type: z.literal('OAUTH2_CLIENT_CREDENTIALS').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodOAuth2ClientCredentialsConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    description: 'OAuth2 Client Credentials',
    'x-docs-type': 'OAuth2 Client Credentials',
  })
  .openapi('AuthOAuth2ClientCredentials')

const DestinationAuthMethodOAuth2AuthorizationCodeConfigSchema = z
  .strictObject({
    client_id: z.string().openapi({ description: 'Client id in the auth server' }),
    client_secret: z.string().openapi({ description: 'Client secret in the auth server' }),
    refresh_token: z
      .string()
      .openapi({ description: 'Refresh token already returned by the auth server' }),
    scope: z.string().nullable().exactOptional().openapi({ description: 'Scope to access' }),
    auth_server: z.string().openapi({ description: 'URL of the auth server' }),
  })
  .openapi({
    required: ['client_id', 'client_secret', 'refresh_token', 'auth_server'],
    description: "OAuth2 Authorization Code config for the destination's auth method",
  })
  .openapi('DestinationAuthMethodOAuth2AuthorizationCodeConfig')

const AuthOAuth2AuthorizationCodeSchema = z
  .strictObject({
    type: z.literal('OAUTH2_AUTHORIZATION_CODE').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodOAuth2AuthorizationCodeConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    description: 'OAuth2 Authorization Code',
    'x-docs-type': 'OAuth2 Authorization Code',
  })
  .openapi('AuthOAuth2AuthorizationCode')

const DestinationAuthMethodCustomSignatureConfigSchema = z
  .strictObject({
    key: z.string().openapi({ description: 'Key for the custom signature auth' }),
    signing_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Signing secret for the custom signature auth. If left empty a secret will be generated for you.',
      }),
  })
  .openapi({
    required: ['key'],
    description: "Custom signature config for the destination's auth method",
  })
  .openapi('DestinationAuthMethodCustomSignatureConfig')

const AuthCustomSignatureSchema = z
  .strictObject({
    type: z.literal('CUSTOM_SIGNATURE').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodCustomSignatureConfigSchema,
  })
  .openapi({
    required: ['type', 'config'],
    description: 'Custom Signature',
    'x-docs-type': 'Custom Signature',
  })
  .openapi('AuthCustomSignature')

const DestinationAuthMethodAwsSignatureConfigSchema = z
  .strictObject({
    access_key_id: z.string().openapi({ description: 'AWS access key id' }),
    secret_access_key: z.string().openapi({ description: 'AWS secret access key' }),
    region: z.string().nullable().exactOptional().openapi({ description: 'AWS region' }),
    service: z.string().nullable().exactOptional().openapi({ description: 'AWS service' }),
  })
  .openapi({
    required: ['access_key_id', 'secret_access_key'],
    description: "AWS Signature config for the destination's auth method",
  })
  .openapi('DestinationAuthMethodAwsSignatureConfig')

const AuthAwsSignatureSchema = z
  .strictObject({
    type: z.literal('AWS_SIGNATURE').openapi({ description: 'Type of auth method' }),
    config: DestinationAuthMethodAwsSignatureConfigSchema.exactOptional(),
  })
  .openapi({ required: ['type'], description: 'AWS Signature', 'x-docs-type': 'AWS Signature' })
  .openapi('AuthAwsSignature')

const DestinationAuthMethodConfigSchema = z
  .union([
    AuthHookdeckSignatureSchema,
    AuthBasicAuthSchema,
    AuthAPIKeySchema.openapi({ 'x-required': true }),
    AuthBearerTokenSchema.openapi({ 'x-required': true }),
    AuthOAuth2ClientCredentialsSchema.openapi({ 'x-required': true }),
    AuthOAuth2AuthorizationCodeSchema.openapi({ 'x-required': true }),
    AuthCustomSignatureSchema,
    AuthAwsSignatureSchema,
  ])
  .openapi({ description: "Config for the destination's auth method" })
  .openapi('DestinationAuthMethodConfig')

const DestinationSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the destination' }),
    name: z.string().openapi({ description: 'A unique, human-friendly name for the destination' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description of the destination' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    path_forwarding_disabled: z.boolean().nullable().exactOptional(),
    url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'HTTP endpoint of the destination' }),
    cli_path: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Path for the CLI destination' }),
    rate_limit: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.',
      }),
    rate_limit_period: DestinationRateLimitPeriodSchema.exactOptional(),
    http_method: DestinationHTTPMethodSchema.exactOptional(),
    auth_method: DestinationAuthMethodConfigSchema.exactOptional(),
    disabled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date the destination was disabled' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the destination was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the destination was created' }),
  })
  .openapi({
    required: ['id', 'name', 'team_id', 'disabled_at', 'updated_at', 'created_at'],
    description: 'Associated [Destination](#destination-object) object',
  })
  .openapi('Destination')

const DestinationPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(DestinationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DestinationPaginatedResult')

const BatchOperationSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the bulk retry' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    query: z
      .union([z.record(z.string(), z.any().nullable()), z.string().nullable()])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Query object to filter records',
        'x-docs-force-simple-type': true,
        'x-docs-type': 'JSON',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the bulk retry was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last time the bulk retry was updated' }),
    cancelled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date the bulk retry was cancelled' }),
    completed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date the bulk retry was completed' }),
    estimated_batch: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of batches required to complete the bulk retry' }),
    estimated_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of estimated events to be retried' }),
    processed_batch: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of batches currently processed' }),
    completed_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of events that were successfully delivered' }),
    in_progress: z
      .boolean()
      .openapi({ description: 'Indicates if the bulk retry is currently in progress' }),
    progress: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Progression of the batch operations, values 0 - 1' }),
    failed_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of events that failed to be delivered' }),
    number: z.float32().nullable().exactOptional().openapi({ 'x-docs-hide': true }),
  })
  .openapi({ required: ['id', 'team_id', 'created_at', 'updated_at', 'in_progress'] })
  .openapi('BatchOperation')

const BatchOperationPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(BatchOperationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchOperationPaginatedResult')

const EventPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(EventSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventPaginatedResult')

const RetriedEventSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the event' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    webhook_id: z.string().openapi({ description: 'ID of the associated connection' }),
    source_id: z.string().openapi({ description: 'ID of the associated source' }),
    destination_id: z.string().openapi({ description: 'ID of the associated destination' }),
    event_data_id: z.string().openapi({ description: 'ID of the event data' }),
    request_id: z.string().openapi({ description: 'ID of the request that created the event' }),
    attempts: z.int().openapi({ description: 'Number of delivery attempts made' }),
    last_attempt_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date of the most recently attempted retry' }),
    next_attempt_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date of the next scheduled retry' }),
    response_status: z.int().nullable().exactOptional().openapi({ description: 'Event status' }),
    error_code: AttemptErrorCodesSchema.exactOptional(),
    status: EventStatusSchema,
    successful_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date of the latest successful attempt' }),
    cli_id: z.string().nullable().openapi({ description: 'ID of the CLI the event is sent to' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the event was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the event was created' }),
    data: ShortEventDataSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'webhook_id',
      'source_id',
      'destination_id',
      'event_data_id',
      'request_id',
      'attempts',
      'last_attempt_at',
      'next_attempt_at',
      'status',
      'successful_at',
      'cli_id',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('RetriedEvent')

const IntegrationProviderSchema = z
  .enum([
    'HMAC',
    'BASIC_AUTH',
    'API_KEY',
    'BRIDGE',
    'CLOUDSIGNAL',
    'COURIER',
    'FRONTAPP',
    'TWITTER',
    'STRIPE',
    'RECHARGE',
    'TWILIO',
    'GITHUB',
    'SHOPIFY',
    'POSTMARK',
    'TYPEFORM',
    'XERO',
    'SVIX',
    'ZOOM',
    'AKENEO',
    'ADYEN',
    'GITLAB',
    'PROPERTY-FINDER',
    'WOOCOMMERCE',
    'OURA',
    'COMMERCELAYER',
    'HUBSPOT',
    'MAILGUN',
    'PERSONA',
    'PIPEDRIVE',
    'SENDGRID',
    'WORKOS',
    'SYNCTERA',
    'AWS_SNS',
    'THREE_D_EYE',
    'TWITCH',
    'ENODE',
    'FAVRO',
    'LINEAR',
    'SHOPLINE',
    'WIX',
    'NMI',
    'ORB',
    'PYLON',
    'REPAY',
    'SQUARE',
    'SOLIDGATE',
    'TRELLO',
    'SANITY',
    'EBAY',
    'TELNYX',
    'DISCORD',
    'TOKENIO',
    'FISERV',
    'BONDSMITH',
    'VERCEL_LOG_DRAINS',
    'VERCEL',
    'TEBEX',
    'SLACK',
    'RAZORPAY',
    'MAILCHIMP',
    'PADDLE',
    'PAYPAL',
    'TREEZOR',
    'PRAXIS',
  ])
  .openapi('IntegrationProvider')

const IntegrationFeatureSchema = z.enum(['VERIFICATION', 'HANDSHAKE']).openapi('IntegrationFeature')

const HMACAlgorithmsSchema = z.enum(['md5', 'sha1', 'sha256', 'sha512']).openapi('HMACAlgorithms')

const HMACIntegrationConfigsSchema = z
  .strictObject({
    webhook_secret_key: z.string(),
    algorithm: HMACAlgorithmsSchema,
    header_key: z.string(),
    encoding: z.enum(['base64', 'hex']),
  })
  .openapi({ required: ['webhook_secret_key', 'algorithm', 'header_key', 'encoding'] })
  .openapi('HMACIntegrationConfigs')

const APIKeyIntegrationConfigsSchema = z
  .strictObject({ header_key: z.string(), api_key: z.string() })
  .openapi({ required: ['header_key', 'api_key'] })
  .openapi('APIKeyIntegrationConfigs')

const HandledAPIKeyIntegrationConfigsSchema = z
  .strictObject({ api_key: z.string() })
  .openapi({ required: ['api_key'] })
  .openapi('HandledAPIKeyIntegrationConfigs')

const HandledHMACConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({ required: ['webhook_secret_key'] })
  .openapi('HandledHMACConfigs')

const BasicAuthIntegrationConfigsSchema = z
  .strictObject({ username: z.string(), password: z.string() })
  .openapi({ required: ['username', 'password'] })
  .openapi('BasicAuthIntegrationConfigs')

const ShopifyIntegrationConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({ required: ['webhook_secret_key'] })
  .openapi('ShopifyIntegrationConfigs')

const VercelLogDrainsIntegrationConfigsSchema = z
  .strictObject({
    webhook_secret_key: z.string().nullable().exactOptional(),
    vercel_log_drains_secret: z.string(),
  })
  .openapi({ required: ['vercel_log_drains_secret'] })
  .openapi('VercelLogDrainsIntegrationConfigs')

const IntegrationSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the integration' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    label: z.string().openapi({ description: 'Label of the integration' }),
    provider: IntegrationProviderSchema,
    features: z
      .array(IntegrationFeatureSchema)
      .openapi({
        description: 'List of features to enable (see features list below)',
        'x-docs-force-simple-type': true,
        'x-docs-type': 'Array of string',
      }),
    configs: z
      .union([
        HMACIntegrationConfigsSchema,
        APIKeyIntegrationConfigsSchema,
        HandledAPIKeyIntegrationConfigsSchema,
        HandledHMACConfigsSchema,
        BasicAuthIntegrationConfigsSchema,
        ShopifyIntegrationConfigsSchema,
        VercelLogDrainsIntegrationConfigsSchema,
        z.strictObject({}),
      ])
      .openapi({
        description: 'Decrypted Key/Value object of the associated configuration for that provider',
        'x-docs-force-simple-type': true,
        'x-docs-type': 'object',
      }),
    sources: z
      .array(z.string().openapi({ description: 'ID of the source' }))
      .openapi({ description: 'List of source IDs the integration is attached to' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the integration was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the integration was created' }),
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'label',
      'provider',
      'features',
      'configs',
      'sources',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('Integration')

const IntegrationPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(IntegrationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntegrationPaginatedResult')

const AttachedIntegrationToSourceSchema = z
  .strictObject({ success: z.boolean() })
  .openapi({ required: ['success'] })
  .openapi('AttachedIntegrationToSource')

const DetachedIntegrationFromSourceSchema = z
  .strictObject({})
  .openapi('DetachedIntegrationFromSource')

const DeletedIntegrationSchema = z
  .strictObject({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('DeletedIntegration')

const IssueStatusSchema = z
  .enum(['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'])
  .openapi({ description: 'Issue status' })
  .openapi('IssueStatus')

const DeliveryIssueAggregationKeysSchema = z
  .strictObject({
    webhook_id: z.array(z.string()),
    response_status: z.array(z.float32()),
    error_code: z.array(AttemptErrorCodesSchema),
  })
  .openapi({
    required: ['webhook_id', 'response_status', 'error_code'],
    description: "Keys used as the aggregation keys a 'delivery' type issue",
  })
  .openapi('DeliveryIssueAggregationKeys')

const DeliveryIssueReferenceSchema = z
  .strictObject({ event_id: z.string(), attempt_id: z.string() })
  .openapi({
    required: ['event_id', 'attempt_id'],
    description: 'Reference to the event and attempt an issue is being created for.',
  })
  .openapi('DeliveryIssueReference')

const DeliveryIssueDataSchema = z
  .strictObject({
    trigger_event: EventSchema.exactOptional(),
    trigger_attempt: EventAttemptSchema.exactOptional(),
  })
  .nullable()
  .openapi({ description: 'Delivery issue data', required: [] })
  .openapi('DeliveryIssueData')

const DeliveryIssueWithDataSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Issue ID', example: 'iss_YXKv5OdJXCiVwkPhGy' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    status: IssueStatusSchema,
    opened_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was last opened' }),
    first_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was first opened' }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue last occured' }),
    last_updated_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated, will always be set to null' }),
    dismissed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO timestamp for when the issue was dismissed' }),
    auto_resolved_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ 'x-docs-hide': true }),
    merged_with: z.string().nullable().exactOptional().openapi({ 'x-docs-hide': true }),
    updated_at: z
      .string()
      .openapi({ description: 'ISO timestamp for when the issue was last updated' }),
    created_at: z.string().openapi({ description: 'ISO timestamp for when the issue was created' }),
    type: z.literal('delivery'),
    aggregation_keys: DeliveryIssueAggregationKeysSchema,
    reference: DeliveryIssueReferenceSchema,
    data: DeliveryIssueDataSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'status',
      'opened_at',
      'first_seen_at',
      'last_seen_at',
      'updated_at',
      'created_at',
      'type',
      'aggregation_keys',
      'reference',
    ],
    description: 'Delivery issue',
  })
  .openapi('DeliveryIssueWithData')

const TransformationIssueAggregationKeysSchema = z
  .strictObject({
    transformation_id: z.array(z.string()),
    log_level: TransformationExecutionLogLevelSchema,
  })
  .openapi({
    required: ['transformation_id', 'log_level'],
    description: "Keys used as the aggregation keys a 'transformation' type issue",
  })
  .openapi('TransformationIssueAggregationKeys')

const TransformationIssueReferenceSchema = z
  .strictObject({
    transformation_execution_id: z.string(),
    trigger_event_request_transformation_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated but still found on historical issues' }),
  })
  .openapi({
    required: ['transformation_execution_id'],
    description: 'Reference to the event request transformation an issue is being created for.',
  })
  .openapi('TransformationIssueReference')

const ConsoleLineSchema = z
  .strictObject({ type: z.enum(['error', 'log', 'warn', 'info', 'debug']), message: z.string() })
  .openapi({ required: ['type', 'message'] })
  .openapi('ConsoleLine')

const TransformationExecutionSchema = z
  .strictObject({
    id: z.string(),
    transformed_event_data_id: z.string(),
    original_event_data_id: z.string(),
    transformation_id: z.string(),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    webhook_id: z.string(),
    log_level: TransformationExecutionLogLevelSchema,
    logs: z.array(ConsoleLineSchema),
    updated_at: z.iso.datetime({ offset: true }),
    created_at: z.iso.datetime({ offset: true }),
    original_event_data: ShortEventDataSchema.exactOptional(),
    transformed_event_data: ShortEventDataSchema.exactOptional(),
    issue_id: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'transformed_event_data_id',
      'original_event_data_id',
      'transformation_id',
      'team_id',
      'webhook_id',
      'log_level',
      'logs',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('TransformationExecution')

const TransformationIssueDataSchema = z
  .strictObject({
    transformation_execution: TransformationExecutionSchema,
    trigger_attempt: EventAttemptSchema.exactOptional(),
  })
  .nullable()
  .openapi({ required: ['transformation_execution'], description: 'Transformation issue data' })
  .openapi('TransformationIssueData')

const TransformationIssueWithDataSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Issue ID', example: 'iss_YXKv5OdJXCiVwkPhGy' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    status: IssueStatusSchema,
    opened_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was last opened' }),
    first_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was first opened' }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue last occured' }),
    last_updated_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated, will always be set to null' }),
    dismissed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO timestamp for when the issue was dismissed' }),
    auto_resolved_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ 'x-docs-hide': true }),
    merged_with: z.string().nullable().exactOptional().openapi({ 'x-docs-hide': true }),
    updated_at: z
      .string()
      .openapi({ description: 'ISO timestamp for when the issue was last updated' }),
    created_at: z.string().openapi({ description: 'ISO timestamp for when the issue was created' }),
    type: z.literal('transformation'),
    aggregation_keys: TransformationIssueAggregationKeysSchema,
    reference: TransformationIssueReferenceSchema,
    data: TransformationIssueDataSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'status',
      'opened_at',
      'first_seen_at',
      'last_seen_at',
      'updated_at',
      'created_at',
      'type',
      'aggregation_keys',
      'reference',
    ],
    description: 'Transformation issue',
  })
  .openapi('TransformationIssueWithData')

const IssueWithDataSchema = z
  .union([DeliveryIssueWithDataSchema, TransformationIssueWithDataSchema])
  .openapi('IssueWithData')

const IssueWithDataPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(IssueWithDataSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IssueWithDataPaginatedResult')

const IssueCountSchema = z
  .strictObject({ count: z.int().openapi({ description: 'Number of issues', example: 5 }) })
  .openapi({ required: ['count'] })
  .openapi('IssueCount')

const DeliveryIssueSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Issue ID', example: 'iss_YXKv5OdJXCiVwkPhGy' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    status: IssueStatusSchema,
    opened_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was last opened' }),
    first_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was first opened' }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue last occured' }),
    last_updated_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated, will always be set to null' }),
    dismissed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO timestamp for when the issue was dismissed' }),
    auto_resolved_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ 'x-docs-hide': true }),
    merged_with: z.string().nullable().exactOptional().openapi({ 'x-docs-hide': true }),
    updated_at: z
      .string()
      .openapi({ description: 'ISO timestamp for when the issue was last updated' }),
    created_at: z.string().openapi({ description: 'ISO timestamp for when the issue was created' }),
    type: z.literal('delivery'),
    aggregation_keys: DeliveryIssueAggregationKeysSchema,
    reference: DeliveryIssueReferenceSchema,
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'status',
      'opened_at',
      'first_seen_at',
      'last_seen_at',
      'updated_at',
      'created_at',
      'type',
      'aggregation_keys',
      'reference',
    ],
    description: 'Delivery issue',
  })
  .openapi('DeliveryIssue')

const TransformationIssueSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Issue ID', example: 'iss_YXKv5OdJXCiVwkPhGy' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    status: IssueStatusSchema,
    opened_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was last opened' }),
    first_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue was first opened' }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO timestamp for when the issue last occured' }),
    last_updated_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated, will always be set to null' }),
    dismissed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO timestamp for when the issue was dismissed' }),
    auto_resolved_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ 'x-docs-hide': true }),
    merged_with: z.string().nullable().exactOptional().openapi({ 'x-docs-hide': true }),
    updated_at: z
      .string()
      .openapi({ description: 'ISO timestamp for when the issue was last updated' }),
    created_at: z.string().openapi({ description: 'ISO timestamp for when the issue was created' }),
    type: z.literal('transformation'),
    aggregation_keys: TransformationIssueAggregationKeysSchema,
    reference: TransformationIssueReferenceSchema,
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'status',
      'opened_at',
      'first_seen_at',
      'last_seen_at',
      'updated_at',
      'created_at',
      'type',
      'aggregation_keys',
      'reference',
    ],
    description: 'Transformation issue',
  })
  .openapi('TransformationIssue')

const IssueSchema = z
  .union([DeliveryIssueSchema, TransformationIssueSchema])
  .openapi({ description: 'Issue' })
  .openapi('Issue')

const RequestRejectionCauseSchema = z
  .enum([
    'SOURCE_DISABLED',
    'NO_CONNECTION',
    'VERIFICATION_FAILED',
    'UNSUPPORTED_HTTP_METHOD',
    'UNSUPPORTED_CONTENT_TYPE',
    'UNPARSABLE_JSON',
    'PAYLOAD_TOO_LARGE',
    'INGESTION_FATAL',
    'UNKNOWN',
  ])
  .openapi({ 'x-docs-type': 'string' })
  .openapi('RequestRejectionCause')

const RequestSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the request' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    verified: z
      .boolean()
      .nullable()
      .openapi({ description: 'Whether or not the request was verified when received' }),
    original_event_data_id: z
      .string()
      .nullable()
      .openapi({ description: 'ID of the request data' }),
    rejection_cause: RequestRejectionCauseSchema,
    ingest_priority: z
      .enum(['NORMAL', 'LOW'])
      .nullable()
      .openapi({ description: 'The priority attributed to the request when received' }),
    ingested_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'The time the request was originally received' }),
    source_id: z.string().openapi({ description: 'ID of the associated source' }),
    events_count: z
      .int()
      .nullable()
      .openapi({
        description: 'The count of events created from this request (CLI events not included)',
      }),
    cli_events_count: z
      .int()
      .nullable()
      .openapi({ description: 'The count of CLI events created from this request' }),
    ignored_count: z.int().nullable().openapi({ 'x-docs-hide': true }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the event was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '\tDate the event was created' }),
    data: ShortEventDataSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'verified',
      'original_event_data_id',
      'rejection_cause',
      'ingest_priority',
      'ingested_at',
      'source_id',
      'events_count',
      'cli_events_count',
      'ignored_count',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('Request')

const RequestPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(RequestSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestPaginatedResult')

const RetryRequestSchema = z
  .strictObject({ request: RequestSchema, events: z.array(EventSchema).nullable().exactOptional() })
  .openapi({ required: ['request'] })
  .openapi('RetryRequest')

const IgnoredEventCauseSchema = z
  .enum(['DISABLED', 'FILTERED', 'TRANSFORMATION_FAILED', 'CLI_DISCONNECTED'])
  .openapi('IgnoredEventCause')

const FilteredMetaSchema = z
  .array(z.enum(['body', 'headers', 'path', 'query']))
  .openapi('FilteredMeta')

const TransformationFailedMetaSchema = z
  .strictObject({ transformation_id: z.string() })
  .openapi({ required: ['transformation_id'] })
  .openapi('TransformationFailedMeta')

const IgnoredEventSchema = z
  .strictObject({
    id: z.string(),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    webhook_id: z.string(),
    cause: IgnoredEventCauseSchema,
    request_id: z.string(),
    meta: z.union([FilteredMetaSchema, TransformationFailedMetaSchema]).nullable().exactOptional(),
    created_at: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['id', 'team_id', 'webhook_id', 'cause', 'request_id', 'created_at'] })
  .openapi('IgnoredEvent')

const IgnoredEventPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(IgnoredEventSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IgnoredEventPaginatedResult')

const VerificationHMACConfigsSchema = z
  .strictObject({
    webhook_secret_key: z.string(),
    algorithm: HMACAlgorithmsSchema,
    header_key: z.string(),
    encoding: z.enum(['base64', 'base64url', 'hex']),
  })
  .openapi({
    required: ['webhook_secret_key', 'algorithm', 'header_key', 'encoding'],
    description:
      'The verification configs for HMAC. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'HMACConfigs',
  })
  .openapi('VerificationHMACConfigs')

const VerificationHMACSchema = z
  .strictObject({
    type: z.enum(['hmac', 'HMAC']),
    configs: VerificationHMACConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'HMAC' })
  .openapi('VerificationHMAC')

const VerificationBasicAuthConfigsSchema = z
  .strictObject({ username: z.string(), password: z.string() })
  .openapi({
    required: ['username', 'password'],
    description:
      'The verification configs for Basic Auth. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'BasicAuthConfigs',
  })
  .openapi('VerificationBasicAuthConfigs')

const VerificationBasicAuthSchema = z
  .strictObject({
    type: z.enum(['basic_auth', 'BASIC_AUTH']),
    configs: VerificationBasicAuthConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Basic Auth' })
  .openapi('VerificationBasicAuth')

const VerificationAPIKeyConfigsSchema = z
  .strictObject({ header_key: z.string(), api_key: z.string() })
  .openapi({
    required: ['header_key', 'api_key'],
    description:
      'The verification configs for API Key. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'APIKeyConfigs',
  })
  .openapi('VerificationAPIKeyConfigs')

const VerificationAPIKeySchema = z
  .strictObject({
    type: z.enum(['api_key', 'API_KEY']),
    configs: VerificationAPIKeyConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'API Key' })
  .openapi('VerificationAPIKey')

const VerificationBridgeConfigsSchema = z
  .strictObject({ public_key: z.string() })
  .openapi({
    required: ['public_key'],
    description:
      'The verification configs for Bridge. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'BridgeConfigs',
  })
  .openapi('VerificationBridgeConfigs')

const VerificationBridgeSchema = z
  .strictObject({
    type: z.enum(['bridge', 'BRIDGE']),
    configs: VerificationBridgeConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Bridge',
    'x-docs-external-url': 'https://apidocs.bridge.xyz/docs/webhook-event-signature-verification',
  })
  .openapi('VerificationBridge')

const VerificationCloudSignalConfigsSchema = z
  .strictObject({ api_key: z.string() })
  .openapi({
    required: ['api_key'],
    description:
      'The verification configs for Cloud Signal. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'CloudSignalConfigs',
  })
  .openapi('VerificationCloudSignalConfigs')

const VerificationCloudSignalSchema = z
  .strictObject({
    type: z.enum(['cloudsignal', 'CLOUDSIGNAL']),
    configs: VerificationCloudSignalConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Cloud Signal' })
  .openapi('VerificationCloudSignal')

const VerificationCourierConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Courier. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'CourierConfigs',
  })
  .openapi('VerificationCourierConfigs')

const VerificationCourierSchema = z
  .strictObject({
    type: z.enum(['courier', 'COURIER']),
    configs: VerificationCourierConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Courier',
    'x-docs-external-url':
      'https://www.courier.com/docs/platform/workspaces/outbound-webhooks#step-4-compare-the-signatures',
  })
  .openapi('VerificationCourier')

const VerificationFrontAppConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for FrontApp. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'FrontAppConfigs',
  })
  .openapi('VerificationFrontAppConfigs')

const VerificationFrontAppSchema = z
  .strictObject({
    type: z.enum(['frontapp', 'FRONTAPP']),
    configs: VerificationFrontAppConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'FrontApp',
    'x-docs-external-url': 'https://dev.frontapp.com/docs/webhooks-1#verifying-integrity',
  })
  .openapi('VerificationFrontApp')

const VerificationTwitterConfigsSchema = z
  .strictObject({ api_key: z.string() })
  .openapi({
    required: ['api_key'],
    description:
      'The verification configs for Twitter. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TwitterConfigs',
  })
  .openapi('VerificationTwitterConfigs')

const VerificationTwitterSchema = z
  .strictObject({
    type: z.enum(['twitter', 'TWITTER']),
    configs: VerificationTwitterConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Twitter',
    'x-docs-external-url':
      'https://developer.x.com/en/docs/x-api/enterprise/account-activity-api/guides/securing-webhooks',
  })
  .openapi('VerificationTwitter')

const VerificationStripeConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Stripe. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'StripeConfigs',
  })
  .openapi('VerificationStripeConfigs')

const VerificationStripeSchema = z
  .strictObject({
    type: z.enum(['stripe', 'STRIPE']),
    configs: VerificationStripeConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Stripe',
    'x-docs-external-url': 'https://stripe.com/docs/webhooks#verify-manually',
  })
  .openapi('VerificationStripe')

const VerificationRechargeConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Recharge. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'RechargeConfigs',
  })
  .openapi('VerificationRechargeConfigs')

const VerificationRechargeSchema = z
  .strictObject({
    type: z.enum(['recharge', 'RECHARGE']),
    configs: VerificationRechargeConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Recharge',
    'x-docs-external-url':
      'https://docs.getrecharge.com/docs/webhooks-overview#validating-webhooks',
  })
  .openapi('VerificationRecharge')

const VerificationTwilioConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Twilio. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TwilioConfigs',
  })
  .openapi('VerificationTwilioConfigs')

const VerificationTwilioSchema = z
  .strictObject({
    type: z.enum(['twilio', 'TWILIO']),
    configs: VerificationTwilioConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Twilio',
    'x-docs-external-url':
      'https://www.twilio.com/docs/usage/webhooks/webhooks-security#validating-signatures-from-twilio',
  })
  .openapi('VerificationTwilio')

const VerificationGitHubConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for GitHub. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'GitHubConfigs',
  })
  .openapi('VerificationGitHubConfigs')

const VerificationGitHubSchema = z
  .strictObject({
    type: z.enum(['github', 'GITHUB']),
    configs: VerificationGitHubConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'GitHub',
    'x-docs-external-url':
      'https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries',
  })
  .openapi('VerificationGitHub')

const VerificationShopifyConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Shopify. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'ShopifyConfigs',
  })
  .openapi('VerificationShopifyConfigs')

const VerificationShopifySchema = z
  .strictObject({
    type: z.enum(['shopify', 'SHOPIFY']),
    configs: VerificationShopifyConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Shopify',
    'x-docs-external-url':
      'https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-2-validate-the-origin-of-your-webhook-to-ensure-its-coming-from-shopify',
  })
  .openapi('VerificationShopify')

const VerificationPostmarkConfigsSchema = z
  .strictObject({ username: z.string(), password: z.string() })
  .openapi({
    required: ['username', 'password'],
    description:
      'The verification configs for Postmark. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PostmarkConfigs',
  })
  .openapi('VerificationPostmarkConfigs')

const VerificationPostmarkSchema = z
  .strictObject({
    type: z.enum(['postmark', 'POSTMARK']),
    configs: VerificationPostmarkConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Postmark' })
  .openapi('VerificationPostmark')

const VerificationTypeformConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Typeform. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TypeformConfigs',
  })
  .openapi('VerificationTypeformConfigs')

const VerificationTypeformSchema = z
  .strictObject({
    type: z.enum(['typeform', 'TYPEFORM']),
    configs: VerificationTypeformConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Typeform',
    'x-docs-external-url': 'https://www.typeform.com/developers/webhooks/secure-your-webhooks/',
  })
  .openapi('VerificationTypeform')

const VerificationXeroConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Xero. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'XeroConfigs',
  })
  .openapi('VerificationXeroConfigs')

const VerificationXeroSchema = z
  .strictObject({
    type: z.enum(['xero', 'XERO']),
    configs: VerificationXeroConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Xero',
    'x-docs-external-url':
      'https://developer.xero.com/documentation/guides/webhooks/configuring-your-server/',
  })
  .openapi('VerificationXero')

const VerificationSvixConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Svix. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'SvixConfigs',
  })
  .openapi('VerificationSvixConfigs')

const VerificationSvixSchema = z
  .strictObject({
    type: z.enum(['svix', 'SVIX']),
    configs: VerificationSvixConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Svix' })
  .openapi('VerificationSvix')

const VerificationZoomConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Zoom. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'ZoomConfigs',
  })
  .openapi('VerificationZoomConfigs')

const VerificationZoomSchema = z
  .strictObject({
    type: z.enum(['zoom', 'ZOOM']),
    configs: VerificationZoomConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Zoom',
    'x-docs-external-url':
      'https://developers.zoom.us/docs/api/rest/webhook-reference/#verify-webhook-events',
  })
  .openapi('VerificationZoom')

const VerificationAkeneoConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Akeneo. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'AkeneoConfigs',
  })
  .openapi('VerificationAkeneoConfigs')

const VerificationAkeneoSchema = z
  .strictObject({
    type: z.enum(['akeneo', 'AKENEO']),
    configs: VerificationAkeneoConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Akeneo' })
  .openapi('VerificationAkeneo')

const VerificationAdyenConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Adyen. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'AdyenConfigs',
  })
  .openapi('VerificationAdyenConfigs')

const VerificationAdyenSchema = z
  .strictObject({
    type: z.enum(['adyen', 'ADYEN']),
    configs: VerificationAdyenConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Adyen',
    'x-docs-external-url':
      'https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures/',
  })
  .openapi('VerificationAdyen')

const VerificationGitLabConfigsSchema = z
  .strictObject({ api_key: z.string() })
  .openapi({
    required: ['api_key'],
    description:
      'The verification configs for GitLab. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'GitLabConfigs',
  })
  .openapi('VerificationGitLabConfigs')

const VerificationGitLabSchema = z
  .strictObject({
    type: z.enum(['gitlab', 'GITLAB']),
    configs: VerificationGitLabConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'GitLab' })
  .openapi('VerificationGitLab')

const VerificationPropertyFinderConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Property Finder. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PropertyFinderConfigs',
  })
  .openapi('VerificationPropertyFinderConfigs')

const VerificationPropertyFinderSchema = z
  .strictObject({
    type: z.enum(['property-finder', 'PROPERTY-FINDER']),
    configs: VerificationPropertyFinderConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Property Finder' })
  .openapi('VerificationPropertyFinder')

const VerificationWooCommerceConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for WooCommerce. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'WooCommerceConfigs',
  })
  .openapi('VerificationWooCommerceConfigs')

const VerificationWooCommerceSchema = z
  .strictObject({
    type: z.enum(['woocommerce', 'WOOCOMMERCE']),
    configs: VerificationWooCommerceConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'WooCommerce' })
  .openapi('VerificationWooCommerce')

const VerificationOuraConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Oura. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'OuraConfigs',
  })
  .openapi('VerificationOuraConfigs')

const VerificationOuraSchema = z
  .strictObject({
    type: z.enum(['oura', 'OURA']),
    configs: VerificationOuraConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Oura',
    'x-docs-external-url': 'https://cloud.ouraring.com/v2/docs#section/Security',
  })
  .openapi('VerificationOura')

const VerificationCommercelayerConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Commercelayer. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'CommercelayerConfigs',
  })
  .openapi('VerificationCommercelayerConfigs')

const VerificationCommercelayerSchema = z
  .strictObject({
    type: z.enum(['commercelayer', 'COMMERCELAYER']),
    configs: VerificationCommercelayerConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Commercelayer',
    'x-docs-external-url': 'https://docs.commercelayer.io/core/callbacks-security',
  })
  .openapi('VerificationCommercelayer')

const VerificationHubspotConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Hubspot. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'HubspotConfigs',
  })
  .openapi('VerificationHubspotConfigs')

const VerificationHubspotSchema = z
  .strictObject({
    type: z.enum(['hubspot', 'HUBSPOT']),
    configs: VerificationHubspotConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Hubspot',
    'x-docs-external-url': 'https://developers.hubspot.com/docs/api/webhooks/validating-requests',
  })
  .openapi('VerificationHubspot')

const VerificationMailgunConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Mailgun. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'MailgunConfigs',
  })
  .openapi('VerificationMailgunConfigs')

const VerificationMailgunSchema = z
  .strictObject({
    type: z.enum(['mailgun', 'MAILGUN']),
    configs: VerificationMailgunConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Mailgun',
    'x-docs-external-url':
      'https://documentation.mailgun.com/docs/mailgun/user-manual/tracking-messages/#webhooks',
  })
  .openapi('VerificationMailgun')

const VerificationPersonaConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Persona. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PersonaConfigs',
  })
  .openapi('VerificationPersonaConfigs')

const VerificationPersonaSchema = z
  .strictObject({
    type: z.enum(['persona', 'PERSONA']),
    configs: VerificationPersonaConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Persona',
    'x-docs-external-url':
      'https://docs.withpersona.com/docs/webhooks-best-practices#checking-signatures',
  })
  .openapi('VerificationPersona')

const VerificationPipedriveConfigsSchema = z
  .strictObject({ username: z.string(), password: z.string() })
  .openapi({
    required: ['username', 'password'],
    description:
      'The verification configs for Pipedrive. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PipedriveConfigs',
  })
  .openapi('VerificationPipedriveConfigs')

const VerificationPipedriveSchema = z
  .strictObject({
    type: z.enum(['pipedrive', 'PIPEDRIVE']),
    configs: VerificationPipedriveConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Pipedrive' })
  .openapi('VerificationPipedrive')

const VerificationSendGridConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for SendGrid. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'SendGridConfigs',
  })
  .openapi('VerificationSendGridConfigs')

const VerificationSendGridSchema = z
  .strictObject({
    type: z.enum(['sendgrid', 'SENDGRID']),
    configs: VerificationSendGridConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'SendGrid' })
  .openapi('VerificationSendGrid')

const VerificationWorkOSConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for WorkOS. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'WorkOSConfigs',
  })
  .openapi('VerificationWorkOSConfigs')

const VerificationWorkOSSchema = z
  .strictObject({
    type: z.enum(['workos', 'WORKOS']),
    configs: VerificationWorkOSConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'WorkOS',
    'x-docs-external-url':
      'https://workos.com/docs/events/data-syncing/webhooks/3-process-the-events/b-validate-the-requests-manually',
  })
  .openapi('VerificationWorkOS')

const VerificationSyncteraConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Synctera. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'SyncteraConfigs',
  })
  .openapi('VerificationSyncteraConfigs')

const VerificationSyncteraSchema = z
  .strictObject({
    type: z.enum(['synctera', 'SYNCTERA']),
    configs: VerificationSyncteraConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Synctera',
    'x-docs-external-url': 'https://dev.synctera.com/docs/webhooks-guide#integration-steps',
  })
  .openapi('VerificationSynctera')

const VerificationAWSSNSConfigsSchema = z
  .strictObject({})
  .openapi({
    description:
      'The verification configs for AWS SNS. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'AWSSNSConfigs',
  })
  .openapi('VerificationAWSSNSConfigs')

const VerificationAWSSNSSchema = z
  .strictObject({
    type: z.enum(['aws_sns', 'AWS_SNS']),
    configs: VerificationAWSSNSConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'AWS SNS' })
  .openapi('VerificationAWSSNS')

const Verification3dEyeConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for 3dEye. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': '3dEyeConfigs',
  })
  .openapi('Verification3dEyeConfigs')

const Verification3dEyeSchema = z
  .strictObject({
    type: z.enum(['three_d_eye', 'THREE_D_EYE']),
    configs: Verification3dEyeConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': '3dEye' })
  .openapi('Verification3dEye')

const VerificationTwitchConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Twitch. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TwitchConfigs',
  })
  .openapi('VerificationTwitchConfigs')

const VerificationTwitchSchema = z
  .strictObject({
    type: z.enum(['twitch', 'TWITCH']),
    configs: VerificationTwitchConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Twitch',
    'x-docs-external-url':
      'https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#verifying-the-event-message',
  })
  .openapi('VerificationTwitch')

const VerificationEnodeConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Enode. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'EnodeConfigs',
  })
  .openapi('VerificationEnodeConfigs')

const VerificationEnodeSchema = z
  .strictObject({
    type: z.enum(['enode', 'ENODE']),
    configs: VerificationEnodeConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Enode',
    'x-docs-external-url': 'https://developers.enode.com/docs/webhooks',
  })
  .openapi('VerificationEnode')

const VerificationFavroConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Favro. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'FavroConfigs',
  })
  .openapi('VerificationFavroConfigs')

const VerificationFavroSchema = z
  .strictObject({
    type: z.enum(['favro', 'FAVRO']),
    configs: VerificationFavroConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Favro',
    'x-docs-external-url': 'https://favro.com/developer/#webhook-signatures',
  })
  .openapi('VerificationFavro')

const VerificationLinearConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Linear. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'LinearConfigs',
  })
  .openapi('VerificationLinearConfigs')

const VerificationLinearSchema = z
  .strictObject({
    type: z.enum(['linear', 'LINEAR']),
    configs: VerificationLinearConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Linear',
    'x-docs-external-url': 'https://developers.linear.app/docs/graphql/webhooks#securing-webhooks',
  })
  .openapi('VerificationLinear')

const VerificationShoplineConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Shopline. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'ShoplineConfigs',
  })
  .openapi('VerificationShoplineConfigs')

const VerificationShoplineSchema = z
  .strictObject({
    type: z.enum(['shopline', 'SHOPLINE']),
    configs: VerificationShoplineConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Shopline',
    'x-docs-external-url':
      'https://developer.shopline.com/docsv2/ec20/3cv5d7wpfgr6a8z5/wf8em731s7f8c3ut?version=v20240301#signature-verification',
  })
  .openapi('VerificationShopline')

const VerificationWixConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Wix. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'WixConfigs',
  })
  .openapi('VerificationWixConfigs')

const VerificationWixSchema = z
  .strictObject({
    type: z.enum(['wix', 'WIX']),
    configs: VerificationWixConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Wix',
    'x-docs-external-url':
      'https://dev.wix.com/docs/build-apps/build-your-app/authentication/verify-wix-requests',
  })
  .openapi('VerificationWix')

const VerificationNMIPaymentGatewayConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for NMI Payment Gateway. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'NMIPaymentGatewayConfigs',
  })
  .openapi('VerificationNMIPaymentGatewayConfigs')

const VerificationNMIPaymentGatewaySchema = z
  .strictObject({
    type: z.enum(['nmi', 'NMI']),
    configs: VerificationNMIPaymentGatewayConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'NMI Payment Gateway',
    'x-docs-external-url':
      'https://secure.networkmerchants.com/gw/merchants/resources/integration/integration_portal.php#webhooks_setup',
  })
  .openapi('VerificationNMIPaymentGateway')

const VerificationOrbConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Orb. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'OrbConfigs',
  })
  .openapi('VerificationOrbConfigs')

const VerificationOrbSchema = z
  .strictObject({
    type: z.enum(['orb', 'ORB']),
    configs: VerificationOrbConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Orb',
    'x-docs-external-url':
      'https://docs.withorb.com/guides/integrations-and-exports/webhooks#webhooks-verification',
  })
  .openapi('VerificationOrb')

const VerificationPylonConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Pylon. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PylonConfigs',
  })
  .openapi('VerificationPylonConfigs')

const VerificationPylonSchema = z
  .strictObject({
    type: z.enum(['pylon', 'PYLON']),
    configs: VerificationPylonConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Pylon',
    'x-docs-external-url':
      'https://getpylon.com/developers/guides/using-webhooks/#event-signatures',
  })
  .openapi('VerificationPylon')

const VerificationRepayConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Repay. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'RepayConfigs',
  })
  .openapi('VerificationRepayConfigs')

const VerificationRepaySchema = z
  .strictObject({
    type: z.enum(['repay', 'REPAY']),
    configs: VerificationRepayConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Repay' })
  .openapi('VerificationRepay')

const VerificationSquareConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Square. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'SquareConfigs',
  })
  .openapi('VerificationSquareConfigs')

const VerificationSquareSchema = z
  .strictObject({
    type: z.enum(['square', 'SQUARE']),
    configs: VerificationSquareConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Square',
    'x-docs-external-url': 'https://developer.squareup.com/docs/webhooks/step3validate',
  })
  .openapi('VerificationSquare')

const VerificationSolidGateConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for SolidGate. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'SolidGateConfigs',
  })
  .openapi('VerificationSolidGateConfigs')

const VerificationSolidGateSchema = z
  .strictObject({
    type: z.enum(['solidgate', 'SOLIDGATE']),
    configs: VerificationSolidGateConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'SolidGate',
    'x-docs-external-url': 'https://docs.solidgate.com/payments/integrate/webhooks/#security',
  })
  .openapi('VerificationSolidGate')

const VerificationTrelloConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Trello. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TrelloConfigs',
  })
  .openapi('VerificationTrelloConfigs')

const VerificationTrelloSchema = z
  .strictObject({
    type: z.enum(['trello', 'TRELLO']),
    configs: VerificationTrelloConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Trello',
    'x-docs-external-url':
      'https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/#webhook-signatures',
  })
  .openapi('VerificationTrello')

const VerificationSanityConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Sanity. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'SanityConfigs',
  })
  .openapi('VerificationSanityConfigs')

const VerificationSanitySchema = z
  .strictObject({
    type: z.enum(['sanity', 'SANITY']),
    configs: VerificationSanityConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Sanity',
    'x-docs-external-url': 'https://www.sanity.io/docs/webhooks',
  })
  .openapi('VerificationSanity')

const VerificationEbayConfigsSchema = z
  .strictObject({
    environment: z.string(),
    client_id: z.string(),
    client_secret: z.string(),
    dev_id: z.string(),
    verification_token: z.string(),
  })
  .openapi({
    required: ['environment', 'client_id', 'client_secret', 'dev_id', 'verification_token'],
    description:
      'The verification configs for Ebay. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'EbayConfigs',
  })
  .openapi('VerificationEbayConfigs')

const VerificationEbaySchema = z
  .strictObject({
    type: z.enum(['ebay', 'EBAY']),
    configs: VerificationEbayConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Ebay',
    'x-docs-external-url':
      'https://developer.ebay.com/api-docs/commerce/notification/resources/destination/methods/createDestination',
  })
  .openapi('VerificationEbay')

const VerificationTelnyxConfigsSchema = z
  .strictObject({ public_key: z.string() })
  .openapi({
    required: ['public_key'],
    description:
      'The verification configs for Telnyx. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TelnyxConfigs',
  })
  .openapi('VerificationTelnyxConfigs')

const VerificationTelnyxSchema = z
  .strictObject({
    type: z.enum(['telnyx', 'TELNYX']),
    configs: VerificationTelnyxConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Telnyx' })
  .openapi('VerificationTelnyx')

const VerificationDiscordConfigsSchema = z
  .strictObject({ public_key: z.string() })
  .openapi({
    required: ['public_key'],
    description:
      'The verification configs for Discord. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'DiscordConfigs',
  })
  .openapi('VerificationDiscordConfigs')

const VerificationDiscordSchema = z
  .strictObject({
    type: z.enum(['discord', 'DISCORD']),
    configs: VerificationDiscordConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Discord' })
  .openapi('VerificationDiscord')

const VerificationTokenIOConfigsSchema = z
  .strictObject({ public_key: z.string() })
  .openapi({
    required: ['public_key'],
    description:
      'The verification configs for TokenIO. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TokenIOConfigs',
  })
  .openapi('VerificationTokenIOConfigs')

const VerificationTokenIOSchema = z
  .strictObject({
    type: z.enum(['tokenio', 'TOKENIO']),
    configs: VerificationTokenIOConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'TokenIO',
    'x-docs-external-url':
      'https://developer.token.io/token_rest_api_doc/content/e-rest/webhooks.htm?Highlight=webhook#Signature',
  })
  .openapi('VerificationTokenIO')

const VerificationFiservConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Fiserv. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'FiservConfigs',
  })
  .openapi('VerificationFiservConfigs')

const VerificationFiservSchema = z
  .strictObject({
    type: z.enum(['fiserv', 'FISERV']),
    configs: VerificationFiservConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Fiserv' })
  .openapi('VerificationFiserv')

const VerificationBondsmithConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Bondsmith. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'BondsmithConfigs',
  })
  .openapi('VerificationBondsmithConfigs')

const VerificationBondsmithSchema = z
  .strictObject({
    type: z.enum(['bondsmith', 'BONDSMITH']),
    configs: VerificationBondsmithConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Bondsmith',
    'x-docs-external-url': 'https://docs.bond.tech/docs/signatures',
  })
  .openapi('VerificationBondsmith')

const VerificationVercelLogDrainsConfigsSchema = z
  .strictObject({
    webhook_secret_key: z.string().nullable().exactOptional(),
    vercel_log_drains_secret: z.string(),
  })
  .openapi({
    required: ['vercel_log_drains_secret'],
    description:
      'The verification configs for Vercel Log Drains. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'VercelLogDrainsConfigs',
  })
  .openapi('VerificationVercelLogDrainsConfigs')

const VerificationVercelLogDrainsSchema = z
  .strictObject({
    type: z.enum(['vercel_log_drains', 'VERCEL_LOG_DRAINS']),
    configs: VerificationVercelLogDrainsConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Vercel Log Drains',
    'x-docs-external-url': 'https://vercel.com/docs/rest-api#securing-your-log-drains',
  })
  .openapi('VerificationVercelLogDrains')

const VerificationVercelConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Vercel. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'VercelConfigs',
  })
  .openapi('VerificationVercelConfigs')

const VerificationVercelSchema = z
  .strictObject({
    type: z.enum(['vercel', 'VERCEL']),
    configs: VerificationVercelConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Vercel',
    'x-docs-external-url':
      'https://vercel.com/docs/observability/webhooks-overview/webhooks-api#securing-webhooks',
  })
  .openapi('VerificationVercel')

const VerificationTebexConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Tebex. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TebexConfigs',
  })
  .openapi('VerificationTebexConfigs')

const VerificationTebexSchema = z
  .strictObject({
    type: z.enum(['tebex', 'TEBEX']),
    configs: VerificationTebexConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Tebex',
    'x-docs-external-url':
      'https://docs.tebex.io/developers/webhooks/overview#verifying-webhook-authenticity',
  })
  .openapi('VerificationTebex')

const VerificationSlackConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Slack. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'SlackConfigs',
  })
  .openapi('VerificationSlackConfigs')

const VerificationSlackSchema = z
  .strictObject({
    type: z.enum(['slack', 'SLACK']),
    configs: VerificationSlackConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Slack',
    'x-docs-external-url':
      'https://api.slack.com/authentication/verifying-requests-from-slack#validating-a-request',
  })
  .openapi('VerificationSlack')

const VerificationRazorpayConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Razorpay. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'RazorpayConfigs',
  })
  .openapi('VerificationRazorpayConfigs')

const VerificationRazorpaySchema = z
  .strictObject({
    type: z.enum(['razorpay', 'RAZORPAY']),
    configs: VerificationRazorpayConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Razorpay',
    'x-docs-external-url': 'https://razorpay.com/docs/webhooks/validate-test/#validate-webhooks',
  })
  .openapi('VerificationRazorpay')

const VerificationMailchimpConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Mailchimp. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'MailchimpConfigs',
  })
  .openapi('VerificationMailchimpConfigs')

const VerificationMailchimpSchema = z
  .strictObject({
    type: z.enum(['mailchimp', 'MAILCHIMP']),
    configs: VerificationMailchimpConfigsSchema.exactOptional(),
  })
  .openapi({ required: ['type'], 'x-docs-type': 'Mailchimp' })
  .openapi('VerificationMailchimp')

const VerificationPaddleConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Paddle. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PaddleConfigs',
  })
  .openapi('VerificationPaddleConfigs')

const VerificationPaddleSchema = z
  .strictObject({
    type: z.enum(['paddle', 'PADDLE']),
    configs: VerificationPaddleConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Paddle',
    'x-docs-external-url': 'https://developer.paddle.com/webhooks/signature-verification',
  })
  .openapi('VerificationPaddle')

const VerificationPaypalConfigsSchema = z
  .strictObject({ webhook_id: z.string() })
  .openapi({
    required: ['webhook_id'],
    description:
      'The verification configs for Paypal. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PaypalConfigs',
  })
  .openapi('VerificationPaypalConfigs')

const VerificationPaypalSchema = z
  .strictObject({
    type: z.enum(['paypal', 'PAYPAL']),
    configs: VerificationPaypalConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Paypal',
    'x-docs-external-url': 'https://developer.paypal.com/api/rest/webhooks/rest/',
  })
  .openapi('VerificationPaypal')

const VerificationTreezorConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Treezor. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'TreezorConfigs',
  })
  .openapi('VerificationTreezorConfigs')

const VerificationTreezorSchema = z
  .strictObject({
    type: z.enum(['treezor', 'TREEZOR']),
    configs: VerificationTreezorConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Treezor',
    'x-docs-external-url': 'https://docs.treezor.com/guide/webhooks/integrity-checks.html',
  })
  .openapi('VerificationTreezor')

const VerificationPraxisConfigsSchema = z
  .strictObject({ webhook_secret_key: z.string() })
  .openapi({
    required: ['webhook_secret_key'],
    description:
      'The verification configs for Praxis. Only included if the ?include=verification.configs query param is present',
    'x-docs-type': 'PraxisConfigs',
  })
  .openapi('VerificationPraxisConfigs')

const VerificationPraxisSchema = z
  .strictObject({
    type: z.enum(['praxis', 'PRAXIS']),
    configs: VerificationPraxisConfigsSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    'x-docs-type': 'Praxis',
    'x-docs-external-url':
      'https://doc.praxiscashier.com/integration_docs/latest/webhooks/validation',
  })
  .openapi('VerificationPraxis')

const VerificationConfigSchema = z
  .xor([
    VerificationHMACSchema,
    VerificationBasicAuthSchema,
    VerificationAPIKeySchema,
    VerificationBridgeSchema,
    VerificationCloudSignalSchema,
    VerificationCourierSchema,
    VerificationFrontAppSchema,
    VerificationTwitterSchema,
    VerificationStripeSchema,
    VerificationRechargeSchema,
    VerificationTwilioSchema,
    VerificationGitHubSchema,
    VerificationShopifySchema,
    VerificationPostmarkSchema,
    VerificationTypeformSchema,
    VerificationXeroSchema,
    VerificationSvixSchema,
    VerificationZoomSchema,
    VerificationAkeneoSchema,
    VerificationAdyenSchema,
    VerificationGitLabSchema,
    VerificationPropertyFinderSchema,
    VerificationWooCommerceSchema,
    VerificationOuraSchema,
    VerificationCommercelayerSchema,
    VerificationHubspotSchema,
    VerificationMailgunSchema,
    VerificationPersonaSchema,
    VerificationPipedriveSchema,
    VerificationSendGridSchema,
    VerificationWorkOSSchema,
    VerificationSyncteraSchema,
    VerificationAWSSNSSchema,
    Verification3dEyeSchema,
    VerificationTwitchSchema,
    VerificationEnodeSchema,
    VerificationFavroSchema,
    VerificationLinearSchema,
    VerificationShoplineSchema,
    VerificationWixSchema,
    VerificationNMIPaymentGatewaySchema,
    VerificationOrbSchema,
    VerificationPylonSchema,
    VerificationRepaySchema,
    VerificationSquareSchema,
    VerificationSolidGateSchema,
    VerificationTrelloSchema,
    VerificationSanitySchema,
    VerificationEbaySchema,
    VerificationTelnyxSchema,
    VerificationDiscordSchema,
    VerificationTokenIOSchema,
    VerificationFiservSchema,
    VerificationBondsmithSchema,
    VerificationVercelLogDrainsSchema,
    VerificationVercelSchema,
    VerificationTebexSchema,
    VerificationSlackSchema,
    VerificationRazorpaySchema,
    VerificationMailchimpSchema,
    VerificationPaddleSchema,
    VerificationPaypalSchema,
    VerificationTreezorSchema,
    VerificationPraxisSchema,
  ])
  .nullable()
  .openapi({ description: 'The verification configs for the specified verification type' })
  .openapi('VerificationConfig')

const SourceAllowedHTTPMethodSchema = z
  .array(z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']))
  .nullable()
  .openapi({ description: 'List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.' })
  .openapi('SourceAllowedHTTPMethod')

const SourceCustomResponseContentTypeSchema = z
  .enum(['json', 'text', 'xml'])
  .openapi({ description: 'Content type of the custom response' })
  .openapi('SourceCustomResponseContentType')

const SourceCustomResponseSchema = z
  .strictObject({
    content_type: SourceCustomResponseContentTypeSchema,
    body: z.string().max(1000).openapi({ description: 'Body of the custom response' }),
  })
  .nullable()
  .openapi({ required: ['content_type', 'body'], description: 'Custom response object' })
  .openapi('SourceCustomResponse')

const SourceSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the source' }),
    name: z.string().openapi({ description: 'Name for the source' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description of the source' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    url: z
      .string()
      .openapi({ description: "A unique URL that must be supplied to your webhook's provider" }),
    verification: VerificationConfigSchema.exactOptional(),
    allowed_http_methods: SourceAllowedHTTPMethodSchema.exactOptional(),
    custom_response: SourceCustomResponseSchema.exactOptional(),
    disabled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date the source was disabled' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the source was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the source was created' }),
  })
  .openapi({
    required: ['id', 'name', 'team_id', 'url', 'disabled_at', 'updated_at', 'created_at'],
    description: 'Associated [Source](#source-object) object',
  })
  .openapi('Source')

const SourcePaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(SourceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourcePaginatedResult')

const TopicsValueSchema = z
  .enum(['issue.opened', 'issue.updated', 'deprecated.attempt-failed', 'event.successful'])
  .openapi({ description: 'Supported topics', 'x-docs-type': 'string' })
  .openapi('TopicsValue')

const ToggleWebhookNotificationsSchema = z
  .strictObject({
    enabled: z.boolean(),
    topics: z.array(TopicsValueSchema).nullable().exactOptional(),
    source_id: z.string(),
  })
  .openapi({ required: ['enabled', 'source_id'] })
  .openapi('ToggleWebhookNotifications')

const AddCustomHostnameSchema = z
  .strictObject({
    hostname: z.string().openapi({ description: 'The custom hostname to attach to the project' }),
  })
  .openapi({ required: ['hostname'] })
  .openapi('AddCustomHostname')

const DeleteCustomDomainSchemaSchema = z
  .strictObject({ id: z.string().openapi({ description: 'The custom hostname ID' }) })
  .openapi({ required: ['id'] })
  .openapi('DeleteCustomDomainSchema')

const ListCustomDomainSchemaSchema = z
  .array(
    z
      .strictObject({
        id: z.string().exactOptional(),
        hostname: z.string().exactOptional(),
        status: z.string().exactOptional(),
        ssl: z
          .strictObject({
            id: z.string().exactOptional(),
            type: z.string().exactOptional(),
            method: z.string().exactOptional(),
            status: z.string().exactOptional(),
            txt_name: z.string().exactOptional(),
            txt_value: z.string().exactOptional(),
            validation_records: z
              .array(
                z
                  .strictObject({
                    status: z.string().exactOptional(),
                    txt_name: z.string().exactOptional(),
                    txt_value: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            dcv_delegation_records: z
              .array(
                z
                  .strictObject({
                    cname: z.string().exactOptional(),
                    cname_target: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            settings: z
              .strictObject({ min_tls_version: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            bundle_method: z.string().exactOptional(),
            wildcard: z.boolean().exactOptional(),
            certificate_authority: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        verification_errors: z.array(z.string()).exactOptional(),
        ownership_verification: z
          .strictObject({
            type: z.string().exactOptional(),
            name: z.string().exactOptional(),
            value: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        created_at: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ListCustomDomainSchema')

const TransformationSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the transformation' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    name: z
      .string()
      .openapi({ description: 'A unique, human-friendly name for the transformation' }),
    code: z.string().openapi({ description: 'JavaScript code to be executed' }),
    encrypted_env: z.string().nullable().exactOptional().openapi({ 'x-docs-hide': true }),
    iv: z.string().nullable().exactOptional().openapi({ 'x-docs-hide': true }),
    env: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Key-value environment variables to be passed to the transformation',
        'x-docs-force-simple-type': true,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the transformation was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the transformation was created' }),
  })
  .openapi({ required: ['id', 'team_id', 'name', 'code', 'updated_at', 'created_at'] })
  .openapi('Transformation')

const TransformationPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(TransformationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransformationPaginatedResult')

const TransformationExecutorOutputSchema = z
  .strictObject({
    request_id: z.string().nullable().exactOptional(),
    transformation_id: z.string().nullable().exactOptional(),
    execution_id: z.string().nullable().exactOptional(),
    log_level: TransformationExecutionLogLevelSchema,
    request: z
      .strictObject({
        headers: z
          .union([z.string(), z.record(z.string(), z.any().nullable())])
          .nullable()
          .exactOptional(),
        path: z.string(),
        query: z
          .union([z.strictObject({}).nullable(), z.string()])
          .nullable()
          .exactOptional(),
        parsed_query: z
          .union([z.string().nullable(), z.strictObject({})])
          .nullable()
          .exactOptional(),
        body: z
          .union([z.string().nullable(), z.strictObject({})])
          .nullable()
          .exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: ['path'] }),
    console: z.array(ConsoleLineSchema).nullable().exactOptional(),
  })
  .openapi({ required: ['log_level'] })
  .openapi('TransformationExecutorOutput')

const TransformationExecutionPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(TransformationExecutionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransformationExecutionPaginatedResult')

const RetryStrategySchema = z
  .enum(['linear', 'exponential'])
  .openapi({ description: 'Algorithm to use when calculating delay between retries' })
  .openapi('RetryStrategy')

const RetryRuleSchema = z
  .strictObject({
    type: z.literal('retry').openapi({ description: 'A retry rule must be of type `retry`' }),
    strategy: RetryStrategySchema,
    interval: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Time in MS between each retry' }),
    count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum number of retries to attempt' }),
    response_status_codes: z
      .array(
        z.string().regex(/^(?:([2-5]\d{2})-([2-5]\d{2})|([><=]{1,2})([2-5]\d{2})|!?([2-5]\d{2}))$/),
      )
      .min(1)
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'HTTP codes to retry on. Accepts: range expressions (e.g., "400-499", ">400"), specific codes (e.g., 404), and exclusions (e.g., "!401"). Example: ["500-599", ">400", 404, "!401"]',
      }),
  })
  .openapi({ required: ['type', 'strategy'] })
  .openapi('RetryRule')

const FilterRulePropertySchema = z
  .union([
    z.string().nullable().openapi({ 'x-fern-type-name': 'FilterRulePropertyString' }),
    z.float32().nullable().openapi({ 'x-fern-type-name': 'FilterRulePropertyNumber' }),
    z.boolean().nullable().openapi({ 'x-fern-type-name': 'FilterRulePropertyBoolean' }),
    z.looseObject({}).nullable().openapi({ 'x-fern-type-name': 'FilterRulePropertyJSON' }),
  ])
  .nullable()
  .openapi({
    description: 'JSON using our filter syntax to filter on request headers',
    'x-docs-type': 'JSON',
    'x-docs-force-simple-type': true,
  })
  .openapi('FilterRuleProperty')

const FilterRuleSchema = z
  .strictObject({
    type: z.literal('filter').openapi({ description: 'A filter rule must be of type `filter`' }),
    headers: FilterRulePropertySchema.exactOptional(),
    body: FilterRulePropertySchema.exactOptional(),
    query: FilterRulePropertySchema.exactOptional(),
    path: FilterRulePropertySchema.exactOptional(),
  })
  .openapi({ required: ['type'] })
  .openapi('FilterRule')

const TransformRuleSchema = z
  .strictObject({
    type: z
      .literal('transform')
      .openapi({ description: 'A transformation rule must be of type `transformation`' }),
    transformation_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ID of the attached transformation object. Optional input, always set once the rule is defined',
      }),
    transformation: z
      .strictObject({
        name: z.string().openapi({ description: 'The unique name of the transformation' }),
        code: z
          .string()
          .openapi({ description: 'A string representation of your JavaScript (ES6) code to run' }),
        env: z
          .record(z.string(), z.string())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'A key-value object of environment variables to encrypt and expose to your transformation code',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['name', 'code'],
        description:
          'You can optionally define a new transformation while creating a transform rule',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('TransformRule')

const DelayRuleSchema = z
  .strictObject({
    type: z.literal('delay').openapi({ description: 'A delay rule must be of type `delay`' }),
    delay: z.int().openapi({ description: 'Delay to introduce in MS' }),
  })
  .openapi({ required: ['type', 'delay'] })
  .openapi('DelayRule')

const RuleSchema = z
  .union([RetryRuleSchema, FilterRuleSchema, TransformRuleSchema, DelayRuleSchema])
  .openapi('Rule')

const ConnectionSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the connection' }),
    name: z
      .string()
      .nullable()
      .openapi({ description: 'Unique name of the connection for this source' }),
    full_name: z
      .string()
      .nullable()
      .openapi({
        description:
          'Full name of the connection concatenated from source, connection and desitnation name',
      }),
    description: z.string().nullable().openapi({ description: 'Description of the connection' }),
    team_id: z.string().openapi({ description: 'ID of the project' }),
    destination: DestinationSchema,
    source: SourceSchema,
    rules: z
      .array(RuleSchema)
      .nullable()
      .openapi({ description: 'Array of rules configured on the connection' }),
    disabled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date the connection was disabled' }),
    paused_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date the connection was paused' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the connection was last updated' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the connection was created' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'full_name',
      'description',
      'team_id',
      'destination',
      'source',
      'rules',
      'disabled_at',
      'paused_at',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('Connection')

const ConnectionPaginatedResultSchema = z
  .strictObject({
    pagination: SeekPaginationSchema.exactOptional(),
    count: z.int().exactOptional(),
    models: z.array(ConnectionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConnectionPaginatedResult')

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const getIssueTriggersRoute = createRoute({
  method: 'get',
  path: '/issue-triggers',
  tags: ['Issue Triggers'],
  summary: 'Get issue triggers',
  operationId: 'getIssueTriggers',
  request: {
    query: z.object({
      name: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { type: 'string', maxLength: 255, description: 'Filter by issue trigger name' },
            required: false,
          },
          description: 'Filter by issue trigger name',
        }),
      type: z
        .union([IssueTypeSchema, z.array(IssueTypeSchema)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/IssueType' },
                { type: 'array', items: { $ref: '#/components/schemas/IssueType' } },
              ],
            },
            required: false,
          },
        }),
      disabled_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time', nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Date when the issue trigger was disabled',
            },
            required: false,
          },
          description: 'Date when the issue trigger was disabled',
        }),
      order_by: z
        .union([z.enum(['created_at', 'type']), z.array(z.enum(['created_at', 'type'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at', 'type'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at', 'type'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of issue triggers',
      content: { 'application/json': { schema: IssueTriggerPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIssueTriggersRoute = createRoute({
  method: 'put',
  path: '/issue-triggers',
  tags: ['Issue Triggers'],
  summary: 'Create or update an issue trigger',
  operationId: 'upsertIssueTrigger',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              type: IssueTypeSchema,
              configs: z
                .union([
                  IssueTriggerDeliveryConfigsSchema,
                  IssueTriggerTransformationConfigsSchema,
                  IssueTriggerBackpressureConfigsSchema,
                ])
                .exactOptional()
                .openapi({
                  description: 'Configuration object for the specific issue type selected',
                }),
              channels: IssueTriggerChannelsSchema,
              name: z
                .string()
                .max(255)
                .openapi({
                  description: 'Required unique name to use as reference when using the API',
                }),
            })
            .openapi({ required: ['type', 'channels', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single issue trigger',
      content: { 'application/json': { schema: IssueTriggerSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postIssueTriggersRoute = createRoute({
  method: 'post',
  path: '/issue-triggers',
  tags: ['Issue Triggers'],
  summary: 'Create an issue trigger',
  operationId: 'createIssueTrigger',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              type: IssueTypeSchema,
              configs: z
                .union([
                  IssueTriggerDeliveryConfigsSchema,
                  IssueTriggerTransformationConfigsSchema,
                  IssueTriggerBackpressureConfigsSchema,
                ])
                .exactOptional()
                .openapi({
                  description: 'Configuration object for the specific issue type selected',
                }),
              channels: IssueTriggerChannelsSchema,
              name: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Optional unique name to use as reference when using the API',
                }),
            })
            .openapi({ required: ['type', 'channels'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single issue trigger',
      content: { 'application/json': { schema: IssueTriggerSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getIssueTriggersIdRoute = createRoute({
  method: 'get',
  path: '/issue-triggers/{id}',
  tags: ['Issue Triggers'],
  summary: 'Get a single issue trigger',
  operationId: 'getIssueTrigger',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue trigger ID' },
            required: true,
          },
          description: 'Issue trigger ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single issue trigger',
      content: { 'application/json': { schema: IssueTriggerSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIssueTriggersIdRoute = createRoute({
  method: 'put',
  path: '/issue-triggers/{id}',
  tags: ['Issue Triggers'],
  summary: 'Update an issue trigger',
  operationId: 'updateIssueTrigger',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue trigger ID' },
            required: true,
          },
          description: 'Issue trigger ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              configs: z
                .union([
                  IssueTriggerDeliveryConfigsSchema,
                  IssueTriggerTransformationConfigsSchema,
                  IssueTriggerBackpressureConfigsSchema,
                ])
                .exactOptional()
                .openapi({
                  description: 'Configuration object for the specific issue type selected',
                }),
              channels: IssueTriggerChannelsSchema.exactOptional(),
              disabled_at: z.iso
                .datetime({ offset: true })
                .nullable()
                .exactOptional()
                .openapi({ description: 'Date when the issue trigger was disabled' }),
              name: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Optional unique name to use as reference when using the API',
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
      description: 'A single issue trigger',
      content: { 'application/json': { schema: IssueTriggerSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteIssueTriggersIdRoute = createRoute({
  method: 'delete',
  path: '/issue-triggers/{id}',
  tags: ['Issue Triggers'],
  summary: 'Delete an issue trigger',
  operationId: 'deleteIssueTrigger',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue trigger ID' },
            required: true,
          },
          description: 'Issue trigger ID',
        }),
    }),
  },
  responses: {
    200: {
      description: "An object with deleted issue trigger's id",
      content: { 'application/json': { schema: DeletedIssueTriggerResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIssueTriggersIdDisableRoute = createRoute({
  method: 'put',
  path: '/issue-triggers/{id}/disable',
  tags: ['Issue Triggers'],
  summary: 'Disable an issue trigger',
  operationId: 'disableIssueTrigger',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue trigger ID' },
            required: true,
          },
          description: 'Issue trigger ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single issue trigger',
      content: { 'application/json': { schema: IssueTriggerSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIssueTriggersIdEnableRoute = createRoute({
  method: 'put',
  path: '/issue-triggers/{id}/enable',
  tags: ['Issue Triggers'],
  summary: 'Enable an issue trigger',
  operationId: 'enableIssueTrigger',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue trigger ID' },
            required: true,
          },
          description: 'Issue trigger ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single issue trigger',
      content: { 'application/json': { schema: IssueTriggerSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getAttemptsRoute = createRoute({
  method: 'get',
  path: '/attempts',
  tags: ['Attempts'],
  summary: 'Get attempts',
  operationId: 'getAttempts',
  request: {
    query: z.object({
      event_id: z
        .union([
          z.string().max(255).openapi({ description: 'Event ID' }),
          z.array(z.string().max(255).openapi({ description: 'Event ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Event ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Event ID' },
                },
              ],
              description: 'Event the attempt is associated with',
            },
            required: false,
          },
          description: 'Event the attempt is associated with',
        }),
      order_by: z
        .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of attempts',
      content: { 'application/json': { schema: EventAttemptPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getAttemptsIdRoute = createRoute({
  method: 'get',
  path: '/attempts/{id}',
  tags: ['Attempts'],
  summary: 'Get a single attempt',
  operationId: 'getAttempt',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Attempt ID' },
            required: true,
          },
          description: 'Attempt ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single attempt',
      content: { 'application/json': { schema: EventAttemptSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBookmarksRoute = createRoute({
  method: 'get',
  path: '/bookmarks',
  tags: ['Bookmarks'],
  summary: 'Get bookmarks',
  operationId: 'getBookmarks',
  request: {
    query: z.object({
      id: z
        .union([
          z.string().max(255).openapi({ description: 'Bookmark ID' }),
          z.array(z.string().max(255).openapi({ description: 'Bookmark ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Bookmark ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Bookmark ID' },
                },
              ],
              description: 'Filter by bookmark IDs',
            },
            required: false,
          },
          description: 'Filter by bookmark IDs',
        }),
      name: z
        .union([
          z
            .string()
            .regex(/^[A-z0-9-_]+$/)
            .max(155)
            .openapi({ description: 'Bookmark name' }),
          z.array(
            z
              .string()
              .regex(/^[A-z0-9-_]+$/)
              .max(155)
              .openapi({ description: 'Bookmark name' }),
          ),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: {
              anyOf: [
                {
                  type: 'string',
                  pattern: '^[A-z0-9-_]+$',
                  maxLength: 155,
                  description: 'Bookmark name',
                },
                {
                  type: 'array',
                  items: {
                    type: 'string',
                    pattern: '^[A-z0-9-_]+$',
                    maxLength: 155,
                    description: 'Bookmark name',
                  },
                },
              ],
              description: 'Filter by bookmark name',
            },
            required: false,
          },
          description: 'Filter by bookmark name',
        }),
      webhook_id: z
        .union([
          z.string().max(255).openapi({ description: 'Connection ID' }),
          z.array(z.string().max(255).openapi({ description: 'Connection ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'webhook_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Connection ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Connection ID' },
                },
              ],
              description: 'Filter by associated connection ID',
            },
            required: false,
          },
          description: 'Filter by associated connection ID',
        }),
      event_data_id: z
        .union([
          z.string().max(255).openapi({ description: 'Event Data ID' }),
          z.array(z.string().max(255).openapi({ description: 'Event Data ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_data_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Event Data ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Event Data ID' },
                },
              ],
              description: 'Filter by associated event data ID',
            },
            required: false,
          },
          description: 'Filter by associated event data ID',
        }),
      label: z
        .union([
          z.string().max(255).openapi({ description: 'Bookmark label' }),
          z.array(z.string().max(255).openapi({ description: 'Bookmark label' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Bookmark label' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Bookmark label' },
                },
              ],
              description: 'Filter by label',
            },
            required: false,
          },
          description: 'Filter by label',
        }),
      last_used_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ).openapi({ description: 'Last used date' }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_used_at',
            schema: {
              anyOf: [
                {
                  type: 'string',
                  format: 'date-time',
                  nullable: true,
                  description: 'Last used date',
                },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Filter by last used date',
            },
            required: false,
          },
          description: 'Filter by last used date',
        }),
      order_by: z
        .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of bookmarks',
      content: { 'application/json': { schema: BookmarkPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBookmarksRoute = createRoute({
  method: 'post',
  path: '/bookmarks',
  tags: ['Bookmarks'],
  summary: 'Create a bookmark',
  operationId: 'createBookmark',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              event_data_id: z
                .string()
                .max(255)
                .openapi({ description: 'ID of the event data to bookmark' }),
              webhook_id: z
                .string()
                .max(255)
                .openapi({ description: 'ID of the associated connection' }),
              label: z
                .string()
                .max(255)
                .openapi({ description: 'Descriptive name of the bookmark' }),
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .exactOptional()
                .openapi({ description: 'A unique, human-friendly name for the bookmark' }),
            })
            .openapi({ required: ['event_data_id', 'webhook_id', 'label'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single bookmark',
      content: { 'application/json': { schema: BookmarkSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBookmarksIdRoute = createRoute({
  method: 'get',
  path: '/bookmarks/{id}',
  tags: ['Bookmarks'],
  summary: 'Get a single bookmark',
  operationId: 'getBookmark',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bookmark ID' },
            required: true,
          },
          description: 'Bookmark ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single bookmark',
      content: { 'application/json': { schema: BookmarkSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putBookmarksIdRoute = createRoute({
  method: 'put',
  path: '/bookmarks/{id}',
  tags: ['Bookmarks'],
  summary: 'Update a bookmark',
  operationId: 'updateBookmark',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bookmark ID' },
            required: true,
          },
          description: 'Bookmark ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              event_data_id: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'ID of the event data to bookmark' }),
              webhook_id: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'ID of the associated connection' }),
              label: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'Descriptive name of the bookmark' }),
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .exactOptional()
                .openapi({ description: 'A unique, human-friendly name for the bookmark' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single bookmark',
      content: { 'application/json': { schema: BookmarkSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteBookmarksIdRoute = createRoute({
  method: 'delete',
  path: '/bookmarks/{id}',
  tags: ['Bookmarks'],
  summary: 'Delete a bookmark',
  operationId: 'deleteBookmark',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bookmark ID' },
            required: true,
          },
          description: 'Bookmark ID',
        }),
    }),
  },
  responses: {
    200: {
      description: "An object with deleted bookmark's id",
      content: { 'application/json': { schema: DeletedBookmarkResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBookmarksIdRawBodyRoute = createRoute({
  method: 'get',
  path: '/bookmarks/{id}/raw_body',
  tags: ['Bookmarks'],
  summary: 'Get a bookmark raw body data',
  operationId: 'getBookmarkRawBody',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bookmark ID' },
            required: true,
          },
          description: 'Bookmark ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A request raw body data',
      content: { 'application/json': { schema: RawBodySchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBookmarksIdTriggerRoute = createRoute({
  method: 'post',
  path: '/bookmarks/{id}/trigger',
  tags: ['Bookmarks'],
  summary: 'Trigger a bookmark',
  operationId: 'triggerBookmark',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bookmark ID' },
            required: true,
          },
          description: 'Bookmark ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              target: z
                .enum(['http', 'cli'])
                .exactOptional()
                .openapi({ description: 'Bookmark target' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Array of created events',
      content: { 'application/json': { schema: EventArraySchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getDestinationsRoute = createRoute({
  method: 'get',
  path: '/destinations',
  tags: ['Destinations'],
  summary: 'Get destinations',
  operationId: 'getDestinations',
  request: {
    query: z.object({
      id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by destination IDs',
            },
            required: false,
          },
          description: 'Filter by destination IDs',
        }),
      name: z
        .union([
          z
            .string()
            .regex(/^[A-z0-9-_]+$/)
            .max(155),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(
            z
              .string()
              .regex(/^[A-z0-9-_]+$/)
              .max(155),
          ),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: {
              anyOf: [
                { type: 'string', pattern: '^[A-z0-9-_]+$', maxLength: 155 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
                {
                  type: 'array',
                  items: { type: 'string', pattern: '^[A-z0-9-_]+$', maxLength: 155 },
                },
              ],
              description: 'The destination name',
            },
            required: false,
          },
          description: 'The destination name',
        }),
      disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled',
            schema: { type: 'boolean', description: 'Include disabled resources in the response' },
            required: false,
          },
          description: 'Include disabled resources in the response',
        }),
      disabled_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time', nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Date the destination was disabled',
            },
            required: false,
          },
          description: 'Date the destination was disabled',
        }),
      url: z
        .union([z.string(), z.array(z.string())])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'url',
            schema: {
              anyOf: [
                { type: 'string', format: 'URL' },
                { type: 'array', items: { type: 'string', format: 'URL' } },
              ],
              description: 'HTTP endpoint of the destination',
            },
            required: false,
          },
          description: 'HTTP endpoint of the destination',
        }),
      cli_path: z
        .union([
          z.string().max(255),
          z
            .strictObject({
              any: z.stringbool().exactOptional(),
              all: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(z.string().max(255)),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cli_path',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                {
                  type: 'object',
                  properties: { any: { type: 'boolean' }, all: { type: 'boolean' } },
                  additionalProperties: false,
                },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Path for the CLI destination',
            },
            required: false,
          },
          description: 'Path for the CLI destination',
        }),
      order_by: z
        .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of destinations',
      content: { 'application/json': { schema: DestinationPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putDestinationsRoute = createRoute({
  method: 'put',
  path: '/destinations',
  tags: ['Destinations'],
  summary: 'Update or create a destination',
  operationId: 'upsertDestination',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .openapi({ description: 'Name for the destination' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the destination' }),
              url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Endpoint of the destination' }),
              cli_path: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Path for the CLI destination' }),
              rate_limit: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.',
                }),
              rate_limit_period: z
                .enum(['second', 'minute', 'hour', 'concurrent'])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.',
                }),
              http_method: DestinationHTTPMethodSchema.exactOptional(),
              auth_method: DestinationAuthMethodConfigSchema.exactOptional(),
              path_forwarding_disabled: z.boolean().exactOptional(),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postDestinationsRoute = createRoute({
  method: 'post',
  path: '/destinations',
  tags: ['Destinations'],
  summary: 'Create a destination',
  operationId: 'createDestination',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .openapi({ description: 'Name for the destination' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the destination' }),
              url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Endpoint of the destination' }),
              cli_path: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Path for the CLI destination' }),
              rate_limit: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.',
                }),
              rate_limit_period: z
                .enum(['second', 'minute', 'hour', 'concurrent'])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.',
                }),
              http_method: DestinationHTTPMethodSchema.exactOptional(),
              auth_method: DestinationAuthMethodConfigSchema.exactOptional(),
              path_forwarding_disabled: z.boolean().exactOptional(),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getDestinationsIdRoute = createRoute({
  method: 'get',
  path: '/destinations/{id}',
  tags: ['Destinations'],
  summary: 'Get a destination',
  operationId: 'getDestination',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Destination ID' },
            required: true,
          },
          description: 'Destination ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    410: {
      description: 'Gone',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putDestinationsIdRoute = createRoute({
  method: 'put',
  path: '/destinations/{id}',
  tags: ['Destinations'],
  summary: 'Update a destination',
  operationId: 'updateDestination',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Destination ID' },
            required: true,
          },
          description: 'Destination ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .exactOptional()
                .openapi({ description: 'Name for the destination' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the destination' }),
              url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Endpoint of the destination' }),
              cli_path: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Path for the CLI destination' }),
              rate_limit: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.',
                }),
              rate_limit_period: z
                .enum(['second', 'minute', 'hour', 'concurrent'])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.',
                }),
              http_method: DestinationHTTPMethodSchema.exactOptional(),
              auth_method: DestinationAuthMethodConfigSchema.exactOptional(),
              path_forwarding_disabled: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteDestinationsIdRoute = createRoute({
  method: 'delete',
  path: '/destinations/{id}',
  tags: ['Destinations'],
  summary: 'Delete a destination',
  operationId: 'deleteDestination',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'A single destination',
      content: {
        'application/json': {
          schema: z
            .strictObject({ id: z.string().openapi({ description: 'ID of the destination' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putDestinationsIdDisableRoute = createRoute({
  method: 'put',
  path: '/destinations/{id}/disable',
  tags: ['Destinations'],
  summary: 'Disable a destination',
  operationId: 'disableDestination',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Destination ID' },
            required: true,
          },
          description: 'Destination ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putDestinationsIdArchiveRoute = createRoute({
  method: 'put',
  path: '/destinations/{id}/archive',
  tags: ['Destinations'],
  summary: 'Disable a destination',
  operationId: 'disableDestination_archive',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Destination ID' },
            required: true,
          },
          description: 'Destination ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putDestinationsIdEnableRoute = createRoute({
  method: 'put',
  path: '/destinations/{id}/enable',
  tags: ['Destinations'],
  summary: 'Enable a destination',
  operationId: 'enableDestination',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Destination ID' },
            required: true,
          },
          description: 'Destination ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putDestinationsIdUnarchiveRoute = createRoute({
  method: 'put',
  path: '/destinations/{id}/unarchive',
  tags: ['Destinations'],
  summary: 'Enable a destination',
  operationId: 'enableDestination_unarchive',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Destination ID' },
            required: true,
          },
          description: 'Destination ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single destination',
      content: { 'application/json': { schema: DestinationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkEventsRetryRoute = createRoute({
  method: 'get',
  path: '/bulk/events/retry',
  tags: ['Bulk retry events'],
  summary: 'Get events bulk retries',
  operationId: 'getEventBulkRetries',
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
        const spread = new Map<string, string[]>([
          ['status', ['query']],
          ['webhook_id', ['query']],
          ['destination_id', ['query']],
          ['source_id', ['query']],
          ['attempts', ['query']],
          ['response_status', ['query']],
          ['successful_at', ['query']],
          ['error_code', ['query']],
          ['cli_id', ['query']],
          ['last_attempt_at', ['query']],
          ['search_term', ['query']],
          ['headers', ['query']],
          ['body', ['query']],
          ['parsed_query', ['query']],
          ['path', ['query']],
          ['cli_user_id', ['query']],
          ['issue_id', ['query']],
          ['event_data_id', ['query']],
          ['bulk_retry_id', ['query']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          cancelled_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'cancelled_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry was cancelled',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry was cancelled',
            }),
          completed_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'completed_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry completed',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry completed',
            }),
          created_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'created_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry was created',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry was created',
            }),
          id: z
            .union([
              z.string().max(255).openapi({ description: 'Bulk retry ID' }),
              z.array(z.string().max(255).openapi({ description: 'Bulk retry ID' })),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'id',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, description: 'Bulk retry ID' },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, description: 'Bulk retry ID' },
                    },
                  ],
                  description: 'Filter by bulk retry IDs',
                },
                required: false,
              },
              description: 'Filter by bulk retry IDs',
            }),
          query: z
            .strictObject({
              id: z
                .union([
                  z.string().max(255).openapi({ description: 'Event ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Event ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by event IDs' }),
              status: z
                .union([
                  EventStatusSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(EventStatusSchema),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Lifecyle status of the event' }),
              webhook_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Webhook ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Webhook ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by webhook connection IDs' }),
              destination_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Destination ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Destination ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by destination IDs' }),
              source_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Source ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Source ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by source IDs' }),
              attempts: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(0),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by number of attempts' }),
              response_status: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(200).max(600),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int().min(200).max(600),
                      ),
                    ),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by HTTP response status code' }),
              successful_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by `successful_at` date using a date operator' }),
              created_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by `created_at` date using a date operator' }),
              error_code: z
                .union([
                  AttemptErrorCodesSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(AttemptErrorCodesSchema),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by error code code' }),
              cli_id: z
                .union([
                  z.string(),
                  z
                    .strictObject({
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                      all: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.' }),
              last_attempt_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by `last_attempt_at` date using a date operator' }),
              search_term: z
                .string()
                .min(3)
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                }),
              headers: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data headers',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              body: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data body',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              parsed_query: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the value to match partially to the path',
                }),
              cli_user_id: z
                .union([
                  z.string(),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
              issue_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
              event_data_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
              bulk_retry_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Event ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Event ID' },
                        },
                      ],
                      description: 'Filter by event IDs',
                    },
                    status: {
                      anyOf: [
                        { $ref: '#/components/schemas/EventStatus' },
                        { type: 'array', items: { $ref: '#/components/schemas/EventStatus' } },
                      ],
                      description: 'Lifecyle status of the event',
                    },
                    webhook_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Webhook ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Webhook ID' },
                        },
                      ],
                      description: 'Filter by webhook connection IDs',
                    },
                    destination_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Destination ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Destination ID' },
                        },
                      ],
                      description: 'Filter by destination IDs',
                    },
                    source_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Source ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Source ID' },
                        },
                      ],
                      description: 'Filter by source IDs',
                    },
                    attempts: {
                      anyOf: [
                        { type: 'integer', minimum: 0 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      description: 'Filter by number of attempts',
                    },
                    response_status: {
                      anyOf: [
                        { type: 'integer', minimum: 200, maximum: 600 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'integer', minimum: 200, maximum: 600 } },
                      ],
                      nullable: true,
                      description: 'Filter by HTTP response status code',
                    },
                    successful_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      nullable: true,
                      description: 'Filter by `successful_at` date using a date operator',
                    },
                    created_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      description: 'Filter by `created_at` date using a date operator',
                    },
                    error_code: {
                      anyOf: [
                        { $ref: '#/components/schemas/AttemptErrorCodes' },
                        {
                          type: 'array',
                          items: { $ref: '#/components/schemas/AttemptErrorCodes' },
                        },
                      ],
                      description: 'Filter by error code code',
                    },
                    cli_id: {
                      anyOf: [
                        { type: 'string' },
                        {
                          type: 'object',
                          properties: { any: { type: 'boolean' }, all: { type: 'boolean' } },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'string' } },
                      ],
                      nullable: true,
                      description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.',
                    },
                    last_attempt_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      nullable: true,
                      description: 'Filter by `last_attempt_at` date using a date operator',
                    },
                    search_term: {
                      type: 'string',
                      minLength: 3,
                      description:
                        'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                    },
                    headers: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data headers',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    body: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data body',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    parsed_query: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description:
                        'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    path: {
                      type: 'string',
                      description: 'URL Encoded string of the value to match partially to the path',
                    },
                    cli_user_id: {
                      anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
                      nullable: true,
                      'x-docs-hide': true,
                    },
                    issue_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                    event_data_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                    bulk_retry_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                  },
                  additionalProperties: false,
                  description:
                    'Filter for events to be included in the bulk retry, use query parameters of [Event](#events)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description:
                'Filter for events to be included in the bulk retry, use query parameters of [Event](#events)',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
              required: [],
            }),
          query_partial_match: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query_partial_match',
                schema: {
                  type: 'boolean',
                  description: 'Allow partial filter match on query property',
                },
                required: false,
              },
              description: 'Allow partial filter match on query property',
            }),
          in_progress: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'in_progress',
                schema: {
                  type: 'boolean',
                  description: 'Indicates if the bulk retry is currently in progress',
                },
                required: false,
              },
              description: 'Indicates if the bulk retry is currently in progress',
            }),
          order_by: z
            .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'order_by',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, enum: ['created_at'] },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort key(s)',
                },
                required: false,
              },
              description: 'Sort key(s)',
            }),
          dir: z
            .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'dir',
                schema: {
                  anyOf: [
                    { type: 'string', enum: ['asc', 'desc'] },
                    {
                      type: 'array',
                      items: { type: 'string', enum: ['asc', 'desc'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort direction(s)',
                },
                required: false,
              },
              description: 'Sort direction(s)',
            }),
          limit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0).max(255),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'limit',
                schema: {
                  type: 'integer',
                  minimum: 0,
                  maximum: 255,
                  description: 'Result set size',
                },
                required: false,
              },
              description: 'Result set size',
            }),
          next: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'next',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the next set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the next set of results',
            }),
          prev: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'prev',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the previous set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the previous set of results',
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'List of events bulk retries',
      content: { 'application/json': { schema: BatchOperationPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBulkEventsRetryRoute = createRoute({
  method: 'post',
  path: '/bulk/events/retry',
  tags: ['Bulk retry events'],
  summary: 'Create an events bulk retry',
  operationId: 'createEventBulkRetry',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              query: z
                .strictObject({
                  id: z
                    .union([
                      z.string().max(255).openapi({ description: 'Event ID' }),
                      z.array(z.string().max(255).openapi({ description: 'Event ID' })),
                    ])
                    .exactOptional()
                    .openapi({ description: 'Filter by event IDs' }),
                  status: z
                    .union([EventStatusSchema, z.array(EventStatusSchema)])
                    .exactOptional()
                    .openapi({ description: 'Lifecyle status of the event' }),
                  webhook_id: z
                    .union([
                      z.string().max(255).openapi({ description: 'Webhook ID' }),
                      z.array(z.string().max(255).openapi({ description: 'Webhook ID' })),
                    ])
                    .exactOptional()
                    .openapi({ description: 'Filter by webhook connection IDs' }),
                  destination_id: z
                    .union([
                      z.string().max(255).openapi({ description: 'Destination ID' }),
                      z.array(z.string().max(255).openapi({ description: 'Destination ID' })),
                    ])
                    .exactOptional()
                    .openapi({ description: 'Filter by destination IDs' }),
                  source_id: z
                    .union([
                      z.string().max(255).openapi({ description: 'Source ID' }),
                      z.array(z.string().max(255).openapi({ description: 'Source ID' })),
                    ])
                    .exactOptional()
                    .openapi({ description: 'Filter by source IDs' }),
                  attempts: z
                    .union([z.int().min(0), OperatorsSchema])
                    .exactOptional()
                    .openapi({ description: 'Filter by number of attempts' }),
                  response_status: z
                    .union([
                      z.int().min(200).max(600),
                      OperatorsSchema,
                      z.array(z.int().min(200).max(600)),
                    ])
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Filter by HTTP response status code' }),
                  successful_at: z
                    .union([z.iso.datetime({ offset: true }), OperatorsSchema])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Filter by `successful_at` date using a date operator',
                    }),
                  created_at: z
                    .union([z.iso.datetime({ offset: true }), OperatorsSchema])
                    .exactOptional()
                    .openapi({ description: 'Filter by `created_at` date using a date operator' }),
                  error_code: z
                    .union([AttemptErrorCodesSchema, z.array(AttemptErrorCodesSchema)])
                    .exactOptional()
                    .openapi({ description: 'Filter by error code code' }),
                  cli_id: z
                    .union([
                      z.string(),
                      z
                        .strictObject({
                          any: z.boolean().exactOptional(),
                          all: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      z.array(z.string()),
                    ])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.',
                    }),
                  last_attempt_at: z
                    .union([z.iso.datetime({ offset: true }), OperatorsSchema])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Filter by `last_attempt_at` date using a date operator',
                    }),
                  search_term: z
                    .string()
                    .min(3)
                    .exactOptional()
                    .openapi({
                      description:
                        'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                    }),
                  headers: z
                    .union([z.string(), z.strictObject({})])
                    .exactOptional()
                    .openapi({
                      description: 'URL Encoded string of the JSON to match to the data headers',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                  body: z
                    .union([z.string(), z.strictObject({})])
                    .exactOptional()
                    .openapi({
                      description: 'URL Encoded string of the JSON to match to the data body',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                  parsed_query: z
                    .union([z.string(), z.strictObject({})])
                    .exactOptional()
                    .openapi({
                      description:
                        'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                  path: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'URL Encoded string of the value to match partially to the path',
                    }),
                  cli_user_id: z
                    .union([z.string(), z.array(z.string())])
                    .nullable()
                    .exactOptional()
                    .openapi({ 'x-docs-hide': true }),
                  issue_id: z
                    .union([z.string().max(255), z.array(z.string().max(255))])
                    .exactOptional()
                    .openapi({ 'x-docs-hide': true }),
                  event_data_id: z
                    .union([z.string().max(255), z.array(z.string().max(255))])
                    .exactOptional()
                    .openapi({ 'x-docs-hide': true }),
                  bulk_retry_id: z
                    .union([z.string().max(255), z.array(z.string().max(255))])
                    .exactOptional()
                    .openapi({ 'x-docs-hide': true }),
                })
                .exactOptional()
                .openapi({
                  description: 'Filter properties for the events to be included in the bulk retry',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                  required: [],
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
      description: 'A single events bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkEventsRetryPlanRoute = createRoute({
  method: 'get',
  path: '/bulk/events/retry/plan',
  tags: ['Bulk retry events'],
  summary: 'Generate an events bulk retry plan',
  operationId: 'generateEventBulkRetryPlan',
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
        const spread = new Map<string, string[]>([
          ['id', ['query']],
          ['status', ['query']],
          ['webhook_id', ['query']],
          ['destination_id', ['query']],
          ['source_id', ['query']],
          ['attempts', ['query']],
          ['response_status', ['query']],
          ['successful_at', ['query']],
          ['created_at', ['query']],
          ['error_code', ['query']],
          ['cli_id', ['query']],
          ['last_attempt_at', ['query']],
          ['search_term', ['query']],
          ['headers', ['query']],
          ['body', ['query']],
          ['parsed_query', ['query']],
          ['path', ['query']],
          ['cli_user_id', ['query']],
          ['issue_id', ['query']],
          ['event_data_id', ['query']],
          ['bulk_retry_id', ['query']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          query: z
            .strictObject({
              id: z
                .union([
                  z.string().max(255).openapi({ description: 'Event ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Event ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by event IDs' }),
              status: z
                .union([
                  EventStatusSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(EventStatusSchema),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Lifecyle status of the event' }),
              webhook_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Webhook ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Webhook ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by webhook connection IDs' }),
              destination_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Destination ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Destination ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by destination IDs' }),
              source_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Source ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Source ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by source IDs' }),
              attempts: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(0),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by number of attempts' }),
              response_status: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(200).max(600),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int().min(200).max(600),
                      ),
                    ),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by HTTP response status code' }),
              successful_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by `successful_at` date using a date operator' }),
              created_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by `created_at` date using a date operator' }),
              error_code: z
                .union([
                  AttemptErrorCodesSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(AttemptErrorCodesSchema),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by error code code' }),
              cli_id: z
                .union([
                  z.string(),
                  z
                    .strictObject({
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                      all: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.' }),
              last_attempt_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by `last_attempt_at` date using a date operator' }),
              search_term: z
                .string()
                .min(3)
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                }),
              headers: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data headers',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              body: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data body',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              parsed_query: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the value to match partially to the path',
                }),
              cli_user_id: z
                .union([
                  z.string(),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
              issue_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
              event_data_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
              bulk_retry_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Event ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Event ID' },
                        },
                      ],
                      description: 'Filter by event IDs',
                    },
                    status: {
                      anyOf: [
                        { $ref: '#/components/schemas/EventStatus' },
                        { type: 'array', items: { $ref: '#/components/schemas/EventStatus' } },
                      ],
                      description: 'Lifecyle status of the event',
                    },
                    webhook_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Webhook ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Webhook ID' },
                        },
                      ],
                      description: 'Filter by webhook connection IDs',
                    },
                    destination_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Destination ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Destination ID' },
                        },
                      ],
                      description: 'Filter by destination IDs',
                    },
                    source_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Source ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Source ID' },
                        },
                      ],
                      description: 'Filter by source IDs',
                    },
                    attempts: {
                      anyOf: [
                        { type: 'integer', minimum: 0 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      description: 'Filter by number of attempts',
                    },
                    response_status: {
                      anyOf: [
                        { type: 'integer', minimum: 200, maximum: 600 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'integer', minimum: 200, maximum: 600 } },
                      ],
                      nullable: true,
                      description: 'Filter by HTTP response status code',
                    },
                    successful_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      nullable: true,
                      description: 'Filter by `successful_at` date using a date operator',
                    },
                    created_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      description: 'Filter by `created_at` date using a date operator',
                    },
                    error_code: {
                      anyOf: [
                        { $ref: '#/components/schemas/AttemptErrorCodes' },
                        {
                          type: 'array',
                          items: { $ref: '#/components/schemas/AttemptErrorCodes' },
                        },
                      ],
                      description: 'Filter by error code code',
                    },
                    cli_id: {
                      anyOf: [
                        { type: 'string' },
                        {
                          type: 'object',
                          properties: { any: { type: 'boolean' }, all: { type: 'boolean' } },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'string' } },
                      ],
                      nullable: true,
                      description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.',
                    },
                    last_attempt_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      nullable: true,
                      description: 'Filter by `last_attempt_at` date using a date operator',
                    },
                    search_term: {
                      type: 'string',
                      minLength: 3,
                      description:
                        'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                    },
                    headers: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data headers',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    body: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data body',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    parsed_query: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description:
                        'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    path: {
                      type: 'string',
                      description: 'URL Encoded string of the value to match partially to the path',
                    },
                    cli_user_id: {
                      anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
                      nullable: true,
                      'x-docs-hide': true,
                    },
                    issue_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                    event_data_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                    bulk_retry_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                  },
                  additionalProperties: false,
                  description: 'Filter properties for the events to be included in the bulk retry',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description: 'Filter properties for the events to be included in the bulk retry',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Events bulk retry plan',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              estimated_batch: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Number of batches required to complete the bulk retry' }),
              estimated_count: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Number of estimated events to be retried' }),
              progress: z
                .float32()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Progression of the batch operations, values 0 - 1' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkEventsRetryIdRoute = createRoute({
  method: 'get',
  path: '/bulk/events/retry/{id}',
  tags: ['Bulk retry events'],
  summary: 'Get an events bulk retry',
  operationId: 'getEventBulkRetry',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bulk retry ID' },
            required: true,
          },
          description: 'Bulk retry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single events bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBulkEventsRetryIdCancelRoute = createRoute({
  method: 'post',
  path: '/bulk/events/retry/{id}/cancel',
  tags: ['Bulk retry events'],
  summary: 'Cancel an events bulk retry',
  operationId: 'cancelEventBulkRetry',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bulk retry ID' },
            required: true,
          },
          description: 'Bulk retry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single events bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['Events'],
  summary: 'Get events',
  operationId: 'getEvents',
  request: {
    query: z.object({
      id: z
        .union([
          z.string().max(255).openapi({ description: 'Event ID' }),
          z.array(z.string().max(255).openapi({ description: 'Event ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Event ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Event ID' },
                },
              ],
              description: 'Filter by event IDs',
            },
            required: false,
          },
          description: 'Filter by event IDs',
        }),
      status: z
        .union([EventStatusSchema, z.array(EventStatusSchema)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/EventStatus' },
                { type: 'array', items: { $ref: '#/components/schemas/EventStatus' } },
              ],
              description: 'Lifecyle status of the event',
            },
            required: false,
          },
          description: 'Lifecyle status of the event',
        }),
      webhook_id: z
        .union([
          z.string().max(255).openapi({ description: 'Webhook ID' }),
          z.array(z.string().max(255).openapi({ description: 'Webhook ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'webhook_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Webhook ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Webhook ID' },
                },
              ],
              description: 'Filter by webhook connection IDs',
            },
            required: false,
          },
          description: 'Filter by webhook connection IDs',
        }),
      destination_id: z
        .union([
          z.string().max(255).openapi({ description: 'Destination ID' }),
          z.array(z.string().max(255).openapi({ description: 'Destination ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destination_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Destination ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Destination ID' },
                },
              ],
              description: 'Filter by destination IDs',
            },
            required: false,
          },
          description: 'Filter by destination IDs',
        }),
      source_id: z
        .union([
          z.string().max(255).openapi({ description: 'Source ID' }),
          z.array(z.string().max(255).openapi({ description: 'Source ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'source_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Source ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Source ID' },
                },
              ],
              description: 'Filter by source IDs',
            },
            required: false,
          },
          description: 'Filter by source IDs',
        }),
      attempts: z
        .union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'attempts',
            schema: {
              anyOf: [
                { type: 'integer', minimum: 0 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Filter by number of attempts',
            },
            required: false,
          },
          description: 'Filter by number of attempts',
        }),
      response_status: z
        .union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(200).max(600),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(200).max(600),
            ),
          ),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'response_status',
            schema: {
              anyOf: [
                { type: 'integer', minimum: 200, maximum: 600 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
                { type: 'array', items: { type: 'integer', minimum: 200, maximum: 600 } },
              ],
              nullable: true,
              description: 'Filter by HTTP response status code',
            },
            required: false,
          },
          description: 'Filter by HTTP response status code',
        }),
      successful_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'successful_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              nullable: true,
              description: 'Filter by `successful_at` date using a date operator',
            },
            required: false,
          },
          description: 'Filter by `successful_at` date using a date operator',
        }),
      created_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'created_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Filter by `created_at` date using a date operator',
            },
            required: false,
          },
          description: 'Filter by `created_at` date using a date operator',
        }),
      error_code: z
        .union([AttemptErrorCodesSchema, z.array(AttemptErrorCodesSchema)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'error_code',
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/AttemptErrorCodes' },
                { type: 'array', items: { $ref: '#/components/schemas/AttemptErrorCodes' } },
              ],
              description: 'Filter by error code code',
            },
            required: false,
          },
          description: 'Filter by error code code',
        }),
      cli_id: z
        .union([
          z.string(),
          z
            .strictObject({
              any: z.stringbool().exactOptional(),
              all: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(z.string()),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cli_id',
            schema: {
              anyOf: [
                { type: 'string' },
                {
                  type: 'object',
                  properties: { any: { type: 'boolean' }, all: { type: 'boolean' } },
                  additionalProperties: false,
                },
                { type: 'array', items: { type: 'string' } },
              ],
              nullable: true,
              description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.',
            },
            required: false,
          },
          description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.',
        }),
      last_attempt_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_attempt_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              nullable: true,
              description: 'Filter by `last_attempt_at` date using a date operator',
            },
            required: false,
          },
          description: 'Filter by `last_attempt_at` date using a date operator',
        }),
      search_term: z
        .string()
        .min(3)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search_term',
            schema: {
              type: 'string',
              minLength: 3,
              description:
                'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
            },
            required: false,
          },
          description:
            'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
        }),
      headers: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'headers',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description: 'URL Encoded string of the JSON to match to the data headers',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description: 'URL Encoded string of the JSON to match to the data headers',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      body: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'body',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description: 'URL Encoded string of the JSON to match to the data body',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description: 'URL Encoded string of the JSON to match to the data body',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      parsed_query: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parsed_query',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description:
                'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description:
            'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'path',
            schema: {
              type: 'string',
              description: 'URL Encoded string of the value to match partially to the path',
            },
            required: false,
          },
          description: 'URL Encoded string of the value to match partially to the path',
        }),
      cli_user_id: z
        .union([z.string(), z.array(z.string())])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cli_user_id',
            schema: {
              anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
              nullable: true,
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      issue_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'issue_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      event_data_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_data_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      bulk_retry_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'bulk_retry_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      include: z
        .literal('data')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            schema: {
              type: 'string',
              enum: ['data'],
              description: 'Include the data object in the event model',
              'x-docs-hide': true,
            },
            required: false,
          },
          description: 'Include the data object in the event model',
          'x-docs-hide': true,
        }),
      order_by: z
        .enum(['last_attempt_at', 'created_at'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              type: 'string',
              maxLength: 255,
              enum: ['last_attempt_at', 'created_at'],
              description: 'Sort key',
            },
            required: false,
          },
          description: 'Sort key',
        }),
      dir: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: { type: 'string', enum: ['asc', 'desc'], description: 'Sort direction' },
            required: false,
          },
          description: 'Sort direction',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of events',
      content: { 'application/json': { schema: EventPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getEventsIdRoute = createRoute({
  method: 'get',
  path: '/events/{id}',
  tags: ['Events'],
  summary: 'Get an event',
  operationId: 'getEvent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Event ID' },
            required: true,
          },
          description: 'Event ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single event',
      content: { 'application/json': { schema: EventSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getEventsIdRawBodyRoute = createRoute({
  method: 'get',
  path: '/events/{id}/raw_body',
  tags: ['Events'],
  summary: 'Get a event raw body data',
  operationId: 'getEventRawBody',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Event ID' },
            required: true,
          },
          description: 'Event ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A request raw body data',
      content: { 'application/json': { schema: RawBodySchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postEventsIdRetryRoute = createRoute({
  method: 'post',
  path: '/events/{id}/retry',
  tags: ['Events'],
  summary: 'Retry an event',
  operationId: 'retryEvent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Event ID' },
            required: true,
          },
          description: 'Event ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retried event with event attempt',
      content: { 'application/json': { schema: RetriedEventSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putEventsIdMuteRoute = createRoute({
  method: 'put',
  path: '/events/{id}/mute',
  tags: ['Events'],
  summary: 'Mute an event',
  operationId: 'muteEvent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Event ID' },
            required: true,
          },
          description: 'Event ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single event',
      content: { 'application/json': { schema: EventSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkIgnoredEventsRetryRoute = createRoute({
  method: 'get',
  path: '/bulk/ignored-events/retry',
  tags: ['Bulk retry ignored events'],
  summary: 'Get ignored events bulk retries',
  operationId: 'getIgnoredEventBulkRetries',
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
        const spread = new Map<string, string[]>([
          ['cause', ['query']],
          ['webhook_id', ['query']],
          ['transformation_id', ['query']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          cancelled_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'cancelled_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry was cancelled',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry was cancelled',
            }),
          completed_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'completed_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry completed',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry completed',
            }),
          created_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'created_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry was created',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry was created',
            }),
          id: z
            .union([
              z.string().max(255).openapi({ description: 'Bulk retry ID' }),
              z.array(z.string().max(255).openapi({ description: 'Bulk retry ID' })),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'id',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, description: 'Bulk retry ID' },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, description: 'Bulk retry ID' },
                    },
                  ],
                  description: 'Filter by bulk retry IDs',
                },
                required: false,
              },
              description: 'Filter by bulk retry IDs',
            }),
          query: z
            .strictObject({
              cause: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'The cause of the ignored event' }),
              webhook_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Connection ID of the ignored event' }),
              transformation_id: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The associated transformation ID (only applicable to the cause `TRANSFORMATION_FAILED`)',
                }),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    cause: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      description: 'The cause of the ignored event',
                    },
                    webhook_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      description: 'Connection ID of the ignored event',
                    },
                    transformation_id: {
                      type: 'string',
                      maxLength: 255,
                      description:
                        'The associated transformation ID (only applicable to the cause `TRANSFORMATION_FAILED`)',
                    },
                  },
                  additionalProperties: false,
                  description: 'Filter by the bulk retry ignored event query object',
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description: 'Filter by the bulk retry ignored event query object',
              'x-docs-type': 'JSON',
              required: [],
            }),
          query_partial_match: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query_partial_match',
                schema: {
                  type: 'boolean',
                  description: 'Allow partial filter match on query property',
                },
                required: false,
              },
              description: 'Allow partial filter match on query property',
            }),
          in_progress: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'in_progress',
                schema: {
                  type: 'boolean',
                  description: 'Indicates if the bulk retry is currently in progress',
                },
                required: false,
              },
              description: 'Indicates if the bulk retry is currently in progress',
            }),
          order_by: z
            .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'order_by',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, enum: ['created_at'] },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort key(s)',
                },
                required: false,
              },
              description: 'Sort key(s)',
            }),
          dir: z
            .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'dir',
                schema: {
                  anyOf: [
                    { type: 'string', enum: ['asc', 'desc'] },
                    {
                      type: 'array',
                      items: { type: 'string', enum: ['asc', 'desc'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort direction(s)',
                },
                required: false,
              },
              description: 'Sort direction(s)',
            }),
          limit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0).max(255),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'limit',
                schema: {
                  type: 'integer',
                  minimum: 0,
                  maximum: 255,
                  description: 'Result set size',
                },
                required: false,
              },
              description: 'Result set size',
            }),
          next: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'next',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the next set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the next set of results',
            }),
          prev: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'prev',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the previous set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the previous set of results',
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'List of ignored events bulk retries',
      content: { 'application/json': { schema: BatchOperationPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBulkIgnoredEventsRetryRoute = createRoute({
  method: 'post',
  path: '/bulk/ignored-events/retry',
  tags: ['Bulk retry ignored events'],
  summary: 'Create an ignored events bulk retry',
  operationId: 'createIgnoredEventBulkRetry',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              query: z
                .strictObject({
                  cause: z
                    .union([z.string().max(255), z.array(z.string().max(255))])
                    .exactOptional()
                    .openapi({ description: 'The cause of the ignored event' }),
                  webhook_id: z
                    .union([z.string().max(255), z.array(z.string().max(255))])
                    .exactOptional()
                    .openapi({ description: 'Connection ID of the ignored event' }),
                  transformation_id: z
                    .string()
                    .max(255)
                    .exactOptional()
                    .openapi({
                      description:
                        'The associated transformation ID (only applicable to the cause `TRANSFORMATION_FAILED`)',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Filter by the bulk retry ignored event query object',
                  'x-docs-type': 'JSON',
                  required: [],
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
      description: 'A single ignored events bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkIgnoredEventsRetryPlanRoute = createRoute({
  method: 'get',
  path: '/bulk/ignored-events/retry/plan',
  tags: ['Bulk retry ignored events'],
  summary: 'Generate an ignored events bulk retry plan',
  operationId: 'generateIgnoredEventBulkRetryPlan',
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
        const spread = new Map<string, string[]>([
          ['cause', ['query']],
          ['webhook_id', ['query']],
          ['transformation_id', ['query']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          query: z
            .strictObject({
              cause: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'The cause of the ignored event' }),
              webhook_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Connection ID of the ignored event' }),
              transformation_id: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The associated transformation ID (only applicable to the cause `TRANSFORMATION_FAILED`)',
                }),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    cause: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      description: 'The cause of the ignored event',
                    },
                    webhook_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      description: 'Connection ID of the ignored event',
                    },
                    transformation_id: {
                      type: 'string',
                      maxLength: 255,
                      description:
                        'The associated transformation ID (only applicable to the cause `TRANSFORMATION_FAILED`)',
                    },
                  },
                  additionalProperties: false,
                  description: 'Filter by the bulk retry ignored event query object',
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description: 'Filter by the bulk retry ignored event query object',
              'x-docs-type': 'JSON',
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Ignored events bulk retry plan',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              estimated_batch: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Number of batches required to complete the bulk retry' }),
              estimated_count: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Number of estimated events to be retried' }),
              progress: z
                .float32()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Progression of the batch operations, values 0 - 1' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkIgnoredEventsRetryIdRoute = createRoute({
  method: 'get',
  path: '/bulk/ignored-events/retry/{id}',
  tags: ['Bulk retry ignored events'],
  summary: 'Get an ignored events bulk retry',
  operationId: 'getIgnoredEventBulkRetry',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bulk retry ID' },
            required: true,
          },
          description: 'Bulk retry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single ignored events bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBulkIgnoredEventsRetryIdCancelRoute = createRoute({
  method: 'post',
  path: '/bulk/ignored-events/retry/{id}/cancel',
  tags: ['Bulk retry ignored events'],
  summary: 'Cancel an ignored events bulk retry',
  operationId: 'cancelIgnoredEventBulkRetry',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bulk retry ID' },
            required: true,
          },
          description: 'Bulk retry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single ignored events bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getIntegrationsRoute = createRoute({
  method: 'get',
  path: '/integrations',
  tags: ['Integrations'],
  summary: 'Get integrations',
  operationId: 'getIntegrations',
  request: {
    query: z.object({
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            schema: { type: 'string', description: 'The integration label' },
            required: false,
          },
          description: 'The integration label',
        }),
      provider: IntegrationProviderSchema.openapi({
        param: {
          in: 'query',
          name: 'provider',
          schema: { $ref: '#/components/schemas/IntegrationProvider' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'List of integrations',
      content: { 'application/json': { schema: IntegrationPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postIntegrationsRoute = createRoute({
  method: 'post',
  path: '/integrations',
  tags: ['Integrations'],
  summary: 'Create an integration',
  operationId: 'createIntegration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              label: z
                .string()
                .exactOptional()
                .openapi({ description: 'Label of the integration' }),
              configs: z
                .union([
                  HMACIntegrationConfigsSchema,
                  APIKeyIntegrationConfigsSchema,
                  HandledAPIKeyIntegrationConfigsSchema,
                  HandledHMACConfigsSchema,
                  BasicAuthIntegrationConfigsSchema,
                  ShopifyIntegrationConfigsSchema,
                  VercelLogDrainsIntegrationConfigsSchema,
                  z.strictObject({}),
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Decrypted Key/Value object of the associated configuration for that provider',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'object',
                }),
              provider: IntegrationProviderSchema.exactOptional(),
              features: z
                .array(IntegrationFeatureSchema)
                .exactOptional()
                .openapi({
                  description: 'List of features to enable (see features list above)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'Array of string',
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
      description: 'A single integration',
      content: { 'application/json': { schema: IntegrationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getIntegrationsIdRoute = createRoute({
  method: 'get',
  path: '/integrations/{id}',
  tags: ['Integrations'],
  summary: 'Get an integration',
  operationId: 'getIntegration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Integration ID' },
            required: true,
          },
          description: 'Integration ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single integration',
      content: { 'application/json': { schema: IntegrationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIntegrationsIdRoute = createRoute({
  method: 'put',
  path: '/integrations/{id}',
  tags: ['Integrations'],
  summary: 'Update an integration',
  operationId: 'updateIntegration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Integration ID' },
            required: true,
          },
          description: 'Integration ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              label: z
                .string()
                .exactOptional()
                .openapi({ description: 'Label of the integration' }),
              configs: z
                .union([
                  HMACIntegrationConfigsSchema,
                  APIKeyIntegrationConfigsSchema,
                  HandledAPIKeyIntegrationConfigsSchema,
                  HandledHMACConfigsSchema,
                  BasicAuthIntegrationConfigsSchema,
                  ShopifyIntegrationConfigsSchema,
                  VercelLogDrainsIntegrationConfigsSchema,
                  z.strictObject({}),
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Decrypted Key/Value object of the associated configuration for that provider',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'object',
                }),
              provider: IntegrationProviderSchema.exactOptional(),
              features: z
                .array(IntegrationFeatureSchema)
                .exactOptional()
                .openapi({
                  description: 'List of features to enable (see features list above)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'Array of string',
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
      description: 'A single integration',
      content: { 'application/json': { schema: IntegrationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteIntegrationsIdRoute = createRoute({
  method: 'delete',
  path: '/integrations/{id}',
  tags: ['Integrations'],
  summary: 'Delete an integration',
  operationId: 'deleteIntegration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Integration ID' },
            required: true,
          },
          description: 'Integration ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object with deleted integration id',
      content: { 'application/json': { schema: DeletedIntegrationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIntegrationsIdAttachSourceIdRoute = createRoute({
  method: 'put',
  path: '/integrations/{id}/attach/{source_id}',
  tags: ['Integrations'],
  summary: 'Attach an integration to a source',
  operationId: 'attachIntegrationToSource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Integration ID' },
            required: true,
          },
          description: 'Integration ID',
        }),
      source_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'source_id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Attach operation success status',
      content: { 'application/json': { schema: AttachedIntegrationToSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIntegrationsIdDetachSourceIdRoute = createRoute({
  method: 'put',
  path: '/integrations/{id}/detach/{source_id}',
  tags: ['Integrations'],
  summary: 'Detach an integration from a source',
  operationId: 'detachIntegrationToSource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Integration ID' },
            required: true,
          },
          description: 'Integration ID',
        }),
      source_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'source_id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Detach operation success status',
      content: { 'application/json': { schema: DetachedIntegrationFromSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getIssuesRoute = createRoute({
  method: 'get',
  path: '/issues',
  tags: ['Issues'],
  summary: 'Get issues',
  operationId: 'getIssues',
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
        const spread = new Map<string, string[]>([
          ['webhook_id', ['aggregation_keys']],
          ['response_status', ['aggregation_keys']],
          ['error_code', ['aggregation_keys']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          id: z
            .union([
              z.string().max(255).openapi({ example: 'iss_YXKv5OdJXCiVwkPhGy' }),
              z.array(z.string().max(255).openapi({ example: 'iss_YXKv5OdJXCiVwkPhGy' })),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'id',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, example: 'iss_YXKv5OdJXCiVwkPhGy' },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, example: 'iss_YXKv5OdJXCiVwkPhGy' },
                    },
                  ],
                  description: 'Filter by Issue IDs',
                },
                required: false,
              },
              description: 'Filter by Issue IDs',
            }),
          issue_trigger_id: z
            .union([
              z
                .string()
                .max(255)
                .openapi({ description: 'Issue trigger ID', example: 'it_BXKv5OdJXCiVwkPhGy' }),
              z.array(
                z
                  .string()
                  .max(255)
                  .openapi({ description: 'Issue trigger ID', example: 'it_BXKv5OdJXCiVwkPhGy' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'issue_trigger_id',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      maxLength: 255,
                      description: 'Issue trigger ID',
                      example: 'it_BXKv5OdJXCiVwkPhGy',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        maxLength: 255,
                        description: 'Issue trigger ID',
                        example: 'it_BXKv5OdJXCiVwkPhGy',
                      },
                    },
                  ],
                  description: 'Filter by Issue trigger IDs',
                },
                required: false,
              },
              description: 'Filter by Issue trigger IDs',
            }),
          type: z
            .union([
              z
                .enum(['delivery', 'transformation', 'backpressure'])
                .openapi({ description: 'Issue type', example: 'delivery' }),
              z.array(
                z
                  .enum(['delivery', 'transformation', 'backpressure'])
                  .openapi({ description: 'Issue type', example: 'delivery' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'type',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      enum: ['delivery', 'transformation', 'backpressure'],
                      description: 'Issue type',
                      example: 'delivery',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['delivery', 'transformation', 'backpressure'],
                        description: 'Issue type',
                        example: 'delivery',
                      },
                    },
                  ],
                  description: 'Filter by Issue types',
                },
                required: false,
              },
              description: 'Filter by Issue types',
            }),
          status: z
            .union([
              z
                .enum(['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'])
                .openapi({ description: 'Issue status', example: 'OPENED' }),
              z.array(
                z
                  .enum(['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'])
                  .openapi({ description: 'Issue status', example: 'OPENED' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'status',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      enum: ['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'],
                      description: 'Issue status',
                      example: 'OPENED',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'],
                        description: 'Issue status',
                        example: 'OPENED',
                      },
                    },
                  ],
                  description: 'Filter by Issue statuses',
                },
                required: false,
              },
              description: 'Filter by Issue statuses',
            }),
          merged_with: z
            .union([
              z.string().openapi({ description: 'Issue ID', example: 'iss_AXKv3OdJXCiKlkPhDz' }),
              z.array(
                z.string().openapi({ description: 'Issue ID', example: 'iss_AXKv3OdJXCiKlkPhDz' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'merged_with',
                schema: {
                  anyOf: [
                    { type: 'string', description: 'Issue ID', example: 'iss_AXKv3OdJXCiKlkPhDz' },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        description: 'Issue ID',
                        example: 'iss_AXKv3OdJXCiKlkPhDz',
                      },
                    },
                  ],
                  description: 'Filter by Merged Issue IDs',
                },
                required: false,
              },
              description: 'Filter by Merged Issue IDs',
            }),
          aggregation_keys: z
            .strictObject({
              webhook_id: z
                .union([
                  z.string(),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()),
                  ),
                ])
                .exactOptional(),
              response_status: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.float32(),
                  ),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float32(),
                      ),
                    ),
                  ),
                ])
                .exactOptional(),
              error_code: z
                .union([
                  AttemptErrorCodesSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(AttemptErrorCodesSchema),
                  ),
                ])
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'aggregation_keys',
                schema: {
                  type: 'object',
                  properties: {
                    webhook_id: {
                      anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
                    },
                    response_status: {
                      anyOf: [
                        { type: 'number', format: 'float' },
                        { type: 'array', items: { type: 'number', format: 'float' } },
                      ],
                    },
                    error_code: {
                      anyOf: [
                        { $ref: '#/components/schemas/AttemptErrorCodes' },
                        {
                          type: 'array',
                          items: { $ref: '#/components/schemas/AttemptErrorCodes' },
                        },
                      ],
                    },
                  },
                  additionalProperties: false,
                  description: 'Filter by aggregation keys',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description: 'Filter by aggregation keys',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
              required: [],
            }),
          created_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'created_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by created dates',
                },
                required: false,
              },
              description: 'Filter by created dates',
            }),
          first_seen_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'first_seen_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by first seen dates',
                },
                required: false,
              },
              description: 'Filter by first seen dates',
            }),
          last_seen_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'last_seen_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by last seen dates',
                },
                required: false,
              },
              description: 'Filter by last seen dates',
            }),
          dismissed_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'dismissed_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by dismissed dates',
                },
                required: false,
              },
              description: 'Filter by dismissed dates',
            }),
          order_by: z
            .union([
              z.enum(['created_at', 'first_seen_at', 'last_seen_at', 'opened_at', 'status']),
              z
                .array(
                  z.enum(['created_at', 'first_seen_at', 'last_seen_at', 'opened_at', 'status']),
                )
                .length(2),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'order_by',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      maxLength: 255,
                      enum: ['created_at', 'first_seen_at', 'last_seen_at', 'opened_at', 'status'],
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        maxLength: 255,
                        enum: [
                          'created_at',
                          'first_seen_at',
                          'last_seen_at',
                          'opened_at',
                          'status',
                        ],
                      },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort key(s)',
                },
                required: false,
              },
              description: 'Sort key(s)',
            }),
          dir: z
            .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'dir',
                schema: {
                  anyOf: [
                    { type: 'string', enum: ['asc', 'desc'] },
                    {
                      type: 'array',
                      items: { type: 'string', enum: ['asc', 'desc'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort direction(s)',
                },
                required: false,
              },
              description: 'Sort direction(s)',
            }),
          limit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0).max(255),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'limit',
                schema: {
                  type: 'integer',
                  minimum: 0,
                  maximum: 255,
                  description: 'Result set size',
                },
                required: false,
              },
              description: 'Result set size',
            }),
          next: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'next',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the next set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the next set of results',
            }),
          prev: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'prev',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the previous set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the previous set of results',
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'List of issues',
      content: { 'application/json': { schema: IssueWithDataPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getIssuesCountRoute = createRoute({
  method: 'get',
  path: '/issues/count',
  tags: ['Issues'],
  summary: 'Get the number of issues',
  operationId: 'getIssueCount',
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
        const spread = new Map<string, string[]>([
          ['webhook_id', ['aggregation_keys']],
          ['response_status', ['aggregation_keys']],
          ['error_code', ['aggregation_keys']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          id: z
            .union([
              z.string().max(255).openapi({ example: 'iss_YXKv5OdJXCiVwkPhGy' }),
              z.array(z.string().max(255).openapi({ example: 'iss_YXKv5OdJXCiVwkPhGy' })),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'id',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, example: 'iss_YXKv5OdJXCiVwkPhGy' },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, example: 'iss_YXKv5OdJXCiVwkPhGy' },
                    },
                  ],
                  description: 'Filter by Issue IDs',
                },
                required: false,
              },
              description: 'Filter by Issue IDs',
            }),
          issue_trigger_id: z
            .union([
              z
                .string()
                .max(255)
                .openapi({ description: 'Issue trigger ID', example: 'it_BXKv5OdJXCiVwkPhGy' }),
              z.array(
                z
                  .string()
                  .max(255)
                  .openapi({ description: 'Issue trigger ID', example: 'it_BXKv5OdJXCiVwkPhGy' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'issue_trigger_id',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      maxLength: 255,
                      description: 'Issue trigger ID',
                      example: 'it_BXKv5OdJXCiVwkPhGy',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        maxLength: 255,
                        description: 'Issue trigger ID',
                        example: 'it_BXKv5OdJXCiVwkPhGy',
                      },
                    },
                  ],
                  description: 'Filter by Issue trigger IDs',
                },
                required: false,
              },
              description: 'Filter by Issue trigger IDs',
            }),
          type: z
            .union([
              z
                .enum(['delivery', 'transformation', 'backpressure'])
                .openapi({ description: 'Issue type', example: 'delivery' }),
              z.array(
                z
                  .enum(['delivery', 'transformation', 'backpressure'])
                  .openapi({ description: 'Issue type', example: 'delivery' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'type',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      enum: ['delivery', 'transformation', 'backpressure'],
                      description: 'Issue type',
                      example: 'delivery',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['delivery', 'transformation', 'backpressure'],
                        description: 'Issue type',
                        example: 'delivery',
                      },
                    },
                  ],
                  description: 'Filter by Issue types',
                },
                required: false,
              },
              description: 'Filter by Issue types',
            }),
          status: z
            .union([
              z
                .enum(['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'])
                .openapi({ description: 'Issue status', example: 'OPENED' }),
              z.array(
                z
                  .enum(['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'])
                  .openapi({ description: 'Issue status', example: 'OPENED' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'status',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      enum: ['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'],
                      description: 'Issue status',
                      example: 'OPENED',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'],
                        description: 'Issue status',
                        example: 'OPENED',
                      },
                    },
                  ],
                  description: 'Filter by Issue statuses',
                },
                required: false,
              },
              description: 'Filter by Issue statuses',
            }),
          merged_with: z
            .union([
              z.string().openapi({ description: 'Issue ID', example: 'iss_AXKv3OdJXCiKlkPhDz' }),
              z.array(
                z.string().openapi({ description: 'Issue ID', example: 'iss_AXKv3OdJXCiKlkPhDz' }),
              ),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'merged_with',
                schema: {
                  anyOf: [
                    { type: 'string', description: 'Issue ID', example: 'iss_AXKv3OdJXCiKlkPhDz' },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        description: 'Issue ID',
                        example: 'iss_AXKv3OdJXCiKlkPhDz',
                      },
                    },
                  ],
                  description: 'Filter by Merged Issue IDs',
                },
                required: false,
              },
              description: 'Filter by Merged Issue IDs',
            }),
          aggregation_keys: z
            .strictObject({
              webhook_id: z
                .union([
                  z.string(),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()),
                  ),
                ])
                .exactOptional(),
              response_status: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.float32(),
                  ),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float32(),
                      ),
                    ),
                  ),
                ])
                .exactOptional(),
              error_code: z
                .union([
                  AttemptErrorCodesSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(AttemptErrorCodesSchema),
                  ),
                ])
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'aggregation_keys',
                schema: {
                  type: 'object',
                  properties: {
                    webhook_id: {
                      anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
                    },
                    response_status: {
                      anyOf: [
                        { type: 'number', format: 'float' },
                        { type: 'array', items: { type: 'number', format: 'float' } },
                      ],
                    },
                    error_code: {
                      anyOf: [
                        { $ref: '#/components/schemas/AttemptErrorCodes' },
                        {
                          type: 'array',
                          items: { $ref: '#/components/schemas/AttemptErrorCodes' },
                        },
                      ],
                    },
                  },
                  additionalProperties: false,
                  description: 'Filter by aggregation keys',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description: 'Filter by aggregation keys',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
              required: [],
            }),
          created_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'created_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by created dates',
                },
                required: false,
              },
              description: 'Filter by created dates',
            }),
          first_seen_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'first_seen_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by first seen dates',
                },
                required: false,
              },
              description: 'Filter by first seen dates',
            }),
          last_seen_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'last_seen_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by last seen dates',
                },
                required: false,
              },
              description: 'Filter by last seen dates',
            }),
          dismissed_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'dismissed_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by dismissed dates',
                },
                required: false,
              },
              description: 'Filter by dismissed dates',
            }),
          order_by: z
            .union([
              z.enum(['created_at', 'first_seen_at', 'last_seen_at', 'opened_at', 'status']),
              z
                .array(
                  z.enum(['created_at', 'first_seen_at', 'last_seen_at', 'opened_at', 'status']),
                )
                .length(2),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'order_by',
                schema: {
                  anyOf: [
                    {
                      type: 'string',
                      maxLength: 255,
                      enum: ['created_at', 'first_seen_at', 'last_seen_at', 'opened_at', 'status'],
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        maxLength: 255,
                        enum: [
                          'created_at',
                          'first_seen_at',
                          'last_seen_at',
                          'opened_at',
                          'status',
                        ],
                      },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort key(s)',
                },
                required: false,
              },
              description: 'Sort key(s)',
            }),
          dir: z
            .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'dir',
                schema: {
                  anyOf: [
                    { type: 'string', enum: ['asc', 'desc'] },
                    {
                      type: 'array',
                      items: { type: 'string', enum: ['asc', 'desc'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort direction(s)',
                },
                required: false,
              },
              description: 'Sort direction(s)',
            }),
          limit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0).max(255),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'limit',
                schema: {
                  type: 'integer',
                  minimum: 0,
                  maximum: 255,
                  description: 'Result set size',
                },
                required: false,
              },
              description: 'Result set size',
            }),
          next: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'next',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the next set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the next set of results',
            }),
          prev: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'prev',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the previous set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the previous set of results',
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Issue count',
      content: { 'application/json': { schema: IssueCountSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getIssuesIdRoute = createRoute({
  method: 'get',
  path: '/issues/{id}',
  tags: ['Issues'],
  summary: 'Get a single issue',
  operationId: 'getIssue',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue ID' },
            required: true,
          },
          description: 'Issue ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single issue',
      content: { 'application/json': { schema: IssueWithDataSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putIssuesIdRoute = createRoute({
  method: 'put',
  path: '/issues/{id}',
  tags: ['Issues'],
  summary: 'Update issue',
  operationId: 'updateIssue',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue ID' },
            required: true,
          },
          description: 'Issue ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              status: z
                .enum(['OPENED', 'IGNORED', 'ACKNOWLEDGED', 'RESOLVED'])
                .openapi({ description: 'New status' }),
            })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Updated issue', content: { 'application/json': { schema: IssueSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteIssuesIdRoute = createRoute({
  method: 'delete',
  path: '/issues/{id}',
  tags: ['Issues'],
  summary: 'Dismiss an issue',
  operationId: 'dismissIssue',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Issue ID' },
            required: true,
          },
          description: 'Issue ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dismissed issue',
      content: { 'application/json': { schema: IssueSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getRequestsRoute = createRoute({
  method: 'get',
  path: '/requests',
  tags: ['Requests'],
  summary: 'Get requests',
  operationId: 'getRequests',
  request: {
    query: z.object({
      id: z
        .union([
          z.string().max(255).openapi({ description: 'Request ID' }),
          z.array(z.string().max(255).openapi({ description: 'Request ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Request ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Request ID' },
                },
              ],
              description: 'Filter by requests IDs',
            },
            required: false,
          },
          description: 'Filter by requests IDs',
        }),
      status: z
        .enum(['accepted', 'rejected'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: {
              type: 'string',
              enum: ['accepted', 'rejected'],
              description: 'Filter by status',
            },
            required: false,
          },
          description: 'Filter by status',
        }),
      rejection_cause: z
        .union([RequestRejectionCauseSchema, z.array(RequestRejectionCauseSchema)])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'rejection_cause',
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/RequestRejectionCause' },
                { type: 'array', items: { $ref: '#/components/schemas/RequestRejectionCause' } },
              ],
              nullable: true,
              description: 'Filter by rejection cause',
            },
            required: false,
          },
          description: 'Filter by rejection cause',
        }),
      source_id: z
        .union([
          z.string().max(255).openapi({ description: 'Source ID' }),
          z.array(z.string().max(255).openapi({ description: 'Source ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'source_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Source ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Source ID' },
                },
              ],
              description: 'Filter by source IDs',
            },
            required: false,
          },
          description: 'Filter by source IDs',
        }),
      verified: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'verified',
            schema: { type: 'boolean', description: 'Filter by verification status' },
            required: false,
          },
          description: 'Filter by verification status',
        }),
      search_term: z
        .string()
        .min(3)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search_term',
            schema: {
              type: 'string',
              minLength: 3,
              description:
                'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
            },
            required: false,
          },
          description:
            'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
        }),
      headers: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'headers',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description: 'URL Encoded string of the JSON to match to the data headers',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description: 'URL Encoded string of the JSON to match to the data headers',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      body: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'body',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description: 'URL Encoded string of the JSON to match to the data body',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description: 'URL Encoded string of the JSON to match to the data body',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      parsed_query: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parsed_query',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description:
                'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description:
            'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'path',
            schema: {
              type: 'string',
              description: 'URL Encoded string of the value to match partially to the path',
            },
            required: false,
          },
          description: 'URL Encoded string of the value to match partially to the path',
        }),
      ignored_count: z
        .union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ignored_count',
            schema: {
              anyOf: [
                { type: 'integer', minimum: 0 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
                { type: 'array', items: { type: 'integer', minimum: 0 } },
              ],
              description: 'Filter by count of ignored events',
            },
            required: false,
          },
          description: 'Filter by count of ignored events',
        }),
      events_count: z
        .union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'events_count',
            schema: {
              anyOf: [
                { type: 'integer', minimum: 0 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
                { type: 'array', items: { type: 'integer', minimum: 0 } },
              ],
              description: 'Filter by count of events',
            },
            required: false,
          },
          description: 'Filter by count of events',
        }),
      ingested_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ingested_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Filter by event ingested date',
            },
            required: false,
          },
          description: 'Filter by event ingested date',
        }),
      bulk_retry_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'bulk_retry_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      include: z
        .literal('data')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            schema: { type: 'string', enum: ['data'], 'x-docs-hide': true },
            required: false,
          },
          'x-docs-hide': true,
        }),
      order_by: z
        .enum(['ingested_at', 'created_at'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              type: 'string',
              maxLength: 255,
              enum: ['ingested_at', 'created_at'],
              description: 'Sort key',
            },
            required: false,
          },
          description: 'Sort key',
        }),
      dir: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: { type: 'string', enum: ['asc', 'desc'], description: 'Sort direction' },
            required: false,
          },
          description: 'Sort direction',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of requests',
      content: { 'application/json': { schema: RequestPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getRequestsIdRoute = createRoute({
  method: 'get',
  path: '/requests/{id}',
  tags: ['Requests'],
  summary: 'Get a request',
  operationId: 'getRequest',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Request ID' },
            required: true,
          },
          description: 'Request ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single request',
      content: { 'application/json': { schema: RequestSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getRequestsIdRawBodyRoute = createRoute({
  method: 'get',
  path: '/requests/{id}/raw_body',
  tags: ['Requests'],
  summary: 'Get a request raw body data',
  operationId: 'getRequestRawBody',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Request ID' },
            required: true,
          },
          description: 'Request ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A request raw body data',
      content: { 'application/json': { schema: RawBodySchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postRequestsIdRetryRoute = createRoute({
  method: 'post',
  path: '/requests/{id}/retry',
  tags: ['Requests'],
  summary: 'Retry a request',
  operationId: 'retryRequest',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Request ID' },
            required: true,
          },
          description: 'Request ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              webhook_ids: z
                .array(z.string().max(255).openapi({ description: 'Webhook ID' }))
                .openapi({
                  description:
                    'Subset of webhook_ids to re-run the event logic on. Useful to retry only specific ignored_events',
                }),
            })
            .openapi({ required: ['webhook_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Retry request operation result',
      content: { 'application/json': { schema: RetryRequestSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getRequestsIdEventsRoute = createRoute({
  method: 'get',
  path: '/requests/{id}/events',
  tags: ['Requests'],
  summary: 'Get request events',
  operationId: 'getRequestEvents',
  request: {
    query: z.object({
      id: z
        .union([
          z.string().max(255).openapi({ description: 'Event ID' }),
          z.array(z.string().max(255).openapi({ description: 'Event ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Event ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Event ID' },
                },
              ],
              description: 'Filter by event IDs',
            },
            required: false,
          },
          description: 'Filter by event IDs',
        }),
      status: z
        .union([EventStatusSchema, z.array(EventStatusSchema)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/EventStatus' },
                { type: 'array', items: { $ref: '#/components/schemas/EventStatus' } },
              ],
              description: 'Lifecyle status of the event',
            },
            required: false,
          },
          description: 'Lifecyle status of the event',
        }),
      webhook_id: z
        .union([
          z.string().max(255).openapi({ description: 'Webhook ID' }),
          z.array(z.string().max(255).openapi({ description: 'Webhook ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'webhook_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Webhook ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Webhook ID' },
                },
              ],
              description: 'Filter by webhook connection IDs',
            },
            required: false,
          },
          description: 'Filter by webhook connection IDs',
        }),
      destination_id: z
        .union([
          z.string().max(255).openapi({ description: 'Destination ID' }),
          z.array(z.string().max(255).openapi({ description: 'Destination ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destination_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Destination ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Destination ID' },
                },
              ],
              description: 'Filter by destination IDs',
            },
            required: false,
          },
          description: 'Filter by destination IDs',
        }),
      source_id: z
        .union([
          z.string().max(255).openapi({ description: 'Source ID' }),
          z.array(z.string().max(255).openapi({ description: 'Source ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'source_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Source ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Source ID' },
                },
              ],
              description: 'Filter by source IDs',
            },
            required: false,
          },
          description: 'Filter by source IDs',
        }),
      attempts: z
        .union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'attempts',
            schema: {
              anyOf: [
                { type: 'integer', minimum: 0 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Filter by number of attempts',
            },
            required: false,
          },
          description: 'Filter by number of attempts',
        }),
      response_status: z
        .union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(200).max(600),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(200).max(600),
            ),
          ),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'response_status',
            schema: {
              anyOf: [
                { type: 'integer', minimum: 200, maximum: 600 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
                { type: 'array', items: { type: 'integer', minimum: 200, maximum: 600 } },
              ],
              nullable: true,
              description: 'Filter by HTTP response status code',
            },
            required: false,
          },
          description: 'Filter by HTTP response status code',
        }),
      successful_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'successful_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              nullable: true,
              description: 'Filter by `successful_at` date using a date operator',
            },
            required: false,
          },
          description: 'Filter by `successful_at` date using a date operator',
        }),
      created_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'created_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Filter by `created_at` date using a date operator',
            },
            required: false,
          },
          description: 'Filter by `created_at` date using a date operator',
        }),
      error_code: z
        .union([AttemptErrorCodesSchema, z.array(AttemptErrorCodesSchema)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'error_code',
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/AttemptErrorCodes' },
                { type: 'array', items: { $ref: '#/components/schemas/AttemptErrorCodes' } },
              ],
              description: 'Filter by error code code',
            },
            required: false,
          },
          description: 'Filter by error code code',
        }),
      cli_id: z
        .union([
          z.string(),
          z
            .strictObject({
              any: z.stringbool().exactOptional(),
              all: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(z.string()),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cli_id',
            schema: {
              anyOf: [
                { type: 'string' },
                {
                  type: 'object',
                  properties: { any: { type: 'boolean' }, all: { type: 'boolean' } },
                  additionalProperties: false,
                },
                { type: 'array', items: { type: 'string' } },
              ],
              nullable: true,
              description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.',
            },
            required: false,
          },
          description: 'Filter by CLI IDs. `?[any]=true` operator for any CLI.',
        }),
      last_attempt_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_attempt_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              nullable: true,
              description: 'Filter by `last_attempt_at` date using a date operator',
            },
            required: false,
          },
          description: 'Filter by `last_attempt_at` date using a date operator',
        }),
      search_term: z
        .string()
        .min(3)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search_term',
            schema: {
              type: 'string',
              minLength: 3,
              description:
                'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
            },
            required: false,
          },
          description:
            'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
        }),
      headers: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'headers',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description: 'URL Encoded string of the JSON to match to the data headers',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description: 'URL Encoded string of the JSON to match to the data headers',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      body: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'body',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description: 'URL Encoded string of the JSON to match to the data body',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description: 'URL Encoded string of the JSON to match to the data body',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      parsed_query: z
        .union([z.string(), z.strictObject({})])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parsed_query',
            schema: {
              anyOf: [
                { type: 'string' },
                { type: 'object', properties: {}, additionalProperties: false },
              ],
              description:
                'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
            },
            required: false,
          },
          description:
            'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
          'x-docs-force-simple-type': true,
          'x-docs-type': 'JSON',
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'path',
            schema: {
              type: 'string',
              description: 'URL Encoded string of the value to match partially to the path',
            },
            required: false,
          },
          description: 'URL Encoded string of the value to match partially to the path',
        }),
      cli_user_id: z
        .union([z.string(), z.array(z.string())])
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cli_user_id',
            schema: {
              anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
              nullable: true,
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      issue_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'issue_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      event_data_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_data_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      bulk_retry_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'bulk_retry_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              'x-docs-hide': true,
            },
            required: false,
          },
          'x-docs-hide': true,
        }),
      include: z
        .literal('data')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            schema: {
              type: 'string',
              enum: ['data'],
              description: 'Include the data object in the event model',
              'x-docs-hide': true,
            },
            required: false,
          },
          description: 'Include the data object in the event model',
          'x-docs-hide': true,
        }),
      order_by: z
        .enum(['last_attempt_at', 'created_at'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              type: 'string',
              maxLength: 255,
              enum: ['last_attempt_at', 'created_at'],
              description: 'Sort key',
            },
            required: false,
          },
          description: 'Sort key',
        }),
      dir: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: { type: 'string', enum: ['asc', 'desc'], description: 'Sort direction' },
            required: false,
          },
          description: 'Sort direction',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Request ID' },
            required: true,
          },
          description: 'Request ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of events',
      content: { 'application/json': { schema: EventPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getRequestsIdIgnoredEventsRoute = createRoute({
  method: 'get',
  path: '/requests/{id}/ignored_events',
  tags: ['Requests'],
  summary: 'Get request ignored events',
  operationId: 'getRequestIgnoredEvents',
  request: {
    query: z.object({
      id: z
        .union([
          z.string().max(255).openapi({ description: 'Event ID' }),
          z.array(z.string().max(255).openapi({ description: 'Event ID' })),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, description: 'Event ID' },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, description: 'Event ID' },
                },
              ],
              description: 'Filter by ignored events IDs',
            },
            required: false,
          },
          description: 'Filter by ignored events IDs',
        }),
      order_by: z
        .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Request ID' },
            required: true,
          },
          description: 'Request ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of ignored events',
      content: { 'application/json': { schema: IgnoredEventPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkRequestsRetryRoute = createRoute({
  method: 'get',
  path: '/bulk/requests/retry',
  tags: ['Bulk retry requests'],
  summary: 'Get request bulk retries',
  operationId: 'getRequestBulkRetries',
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
        const spread = new Map<string, string[]>([
          ['status', ['query']],
          ['rejection_cause', ['query']],
          ['source_id', ['query']],
          ['verified', ['query']],
          ['search_term', ['query']],
          ['headers', ['query']],
          ['body', ['query']],
          ['parsed_query', ['query']],
          ['path', ['query']],
          ['ignored_count', ['query']],
          ['events_count', ['query']],
          ['ingested_at', ['query']],
          ['bulk_retry_id', ['query']],
          ['include', ['query']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          cancelled_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'cancelled_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry was cancelled',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry was cancelled',
            }),
          completed_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'completed_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry completed',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry completed',
            }),
          created_at: z
            .union([
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ),
              z
                .strictObject({
                  gt: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  gte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  le: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  lte: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                  any: z.stringbool().exactOptional(),
                })
                .openapi({ required: [] }),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'created_at',
                schema: {
                  anyOf: [
                    { type: 'string', format: 'date-time', nullable: true },
                    {
                      type: 'object',
                      properties: {
                        gt: { type: 'string', format: 'date-time', nullable: true },
                        gte: { type: 'string', format: 'date-time', nullable: true },
                        le: { type: 'string', format: 'date-time', nullable: true },
                        lte: { type: 'string', format: 'date-time', nullable: true },
                        any: { type: 'boolean' },
                      },
                      additionalProperties: false,
                    },
                  ],
                  description: 'Filter by date the bulk retry was created',
                },
                required: false,
              },
              description: 'Filter by date the bulk retry was created',
            }),
          id: z
            .union([
              z.string().max(255).openapi({ description: 'Bulk retry ID' }),
              z.array(z.string().max(255).openapi({ description: 'Bulk retry ID' })),
            ])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'id',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, description: 'Bulk retry ID' },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, description: 'Bulk retry ID' },
                    },
                  ],
                  description: 'Filter by bulk retry IDs',
                },
                required: false,
              },
              description: 'Filter by bulk retry IDs',
            }),
          in_progress: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'in_progress',
                schema: {
                  type: 'boolean',
                  description: 'Indicates if the bulk retry is currently in progress',
                },
                required: false,
              },
              description: 'Indicates if the bulk retry is currently in progress',
            }),
          query: z
            .strictObject({
              id: z
                .union([
                  z.string().max(255).openapi({ description: 'Request ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Request ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by requests IDs' }),
              status: z
                .enum(['accepted', 'rejected'])
                .exactOptional()
                .openapi({ description: 'Filter by status' }),
              rejection_cause: z
                .union([
                  RequestRejectionCauseSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(RequestRejectionCauseSchema),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by rejection cause' }),
              source_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Source ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Source ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by source IDs' }),
              verified: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Filter by verification status' }),
              search_term: z
                .string()
                .min(3)
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                }),
              headers: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data headers',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              body: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data body',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              parsed_query: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the value to match partially to the path',
                }),
              ignored_count: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(0),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int().min(0),
                      ),
                    ),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by count of ignored events' }),
              events_count: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(0),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int().min(0),
                      ),
                    ),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by count of events' }),
              ingested_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by event ingested date' }),
              bulk_retry_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
              include: z.literal('data').exactOptional().openapi({ 'x-docs-hide': true }),
              order_by: z
                .enum(['ingested_at', 'created_at'])
                .exactOptional()
                .openapi({ description: 'Sort key' }),
              dir: z
                .enum(['asc', 'desc'])
                .exactOptional()
                .openapi({ description: 'Sort direction' }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(0).max(255),
                )
                .exactOptional()
                .openapi({ description: 'Result set size' }),
              next: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'The ID to provide in the query to get the next set of results',
                }),
              prev: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'The ID to provide in the query to get the previous set of results',
                }),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Request ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Request ID' },
                        },
                      ],
                      description: 'Filter by requests IDs',
                    },
                    status: {
                      type: 'string',
                      enum: ['accepted', 'rejected'],
                      description: 'Filter by status',
                    },
                    rejection_cause: {
                      anyOf: [
                        { $ref: '#/components/schemas/RequestRejectionCause' },
                        {
                          type: 'array',
                          items: { $ref: '#/components/schemas/RequestRejectionCause' },
                        },
                      ],
                      nullable: true,
                      description: 'Filter by rejection cause',
                    },
                    source_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Source ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Source ID' },
                        },
                      ],
                      description: 'Filter by source IDs',
                    },
                    verified: { type: 'boolean', description: 'Filter by verification status' },
                    search_term: {
                      type: 'string',
                      minLength: 3,
                      description:
                        'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                    },
                    headers: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data headers',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    body: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data body',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    parsed_query: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description:
                        'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    path: {
                      type: 'string',
                      description: 'URL Encoded string of the value to match partially to the path',
                    },
                    ignored_count: {
                      anyOf: [
                        { type: 'integer', minimum: 0 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'integer', minimum: 0 } },
                      ],
                      description: 'Filter by count of ignored events',
                    },
                    events_count: {
                      anyOf: [
                        { type: 'integer', minimum: 0 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'integer', minimum: 0 } },
                      ],
                      description: 'Filter by count of events',
                    },
                    ingested_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      description: 'Filter by event ingested date',
                    },
                    bulk_retry_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                    include: { type: 'string', enum: ['data'], 'x-docs-hide': true },
                    order_by: {
                      type: 'string',
                      maxLength: 255,
                      enum: ['ingested_at', 'created_at'],
                      description: 'Sort key',
                    },
                    dir: { type: 'string', enum: ['asc', 'desc'], description: 'Sort direction' },
                    limit: {
                      type: 'integer',
                      minimum: 0,
                      maximum: 255,
                      description: 'Result set size',
                    },
                    next: {
                      type: 'string',
                      maxLength: 255,
                      description: 'The ID to provide in the query to get the next set of results',
                    },
                    prev: {
                      type: 'string',
                      maxLength: 255,
                      description:
                        'The ID to provide in the query to get the previous set of results',
                    },
                  },
                  additionalProperties: false,
                  description:
                    'Filter properties for the events to be included in the bulk retry, use query parameters of [Requests](#requests)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description:
                'Filter properties for the events to be included in the bulk retry, use query parameters of [Requests](#requests)',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
              required: [],
            }),
          query_partial_match: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query_partial_match',
                schema: {
                  type: 'boolean',
                  description: 'Allow partial filter match on query property',
                },
                required: false,
              },
              description: 'Allow partial filter match on query property',
            }),
          order_by: z
            .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'order_by',
                schema: {
                  anyOf: [
                    { type: 'string', maxLength: 255, enum: ['created_at'] },
                    {
                      type: 'array',
                      items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort key(s)',
                },
                required: false,
              },
              description: 'Sort key(s)',
            }),
          dir: z
            .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'dir',
                schema: {
                  anyOf: [
                    { type: 'string', enum: ['asc', 'desc'] },
                    {
                      type: 'array',
                      items: { type: 'string', enum: ['asc', 'desc'] },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  description: 'Sort direction(s)',
                },
                required: false,
              },
              description: 'Sort direction(s)',
            }),
          limit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0).max(255),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'limit',
                schema: {
                  type: 'integer',
                  minimum: 0,
                  maximum: 255,
                  description: 'Result set size',
                },
                required: false,
              },
              description: 'Result set size',
            }),
          next: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'next',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the next set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the next set of results',
            }),
          prev: z
            .string()
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'prev',
                schema: {
                  type: 'string',
                  maxLength: 255,
                  description: 'The ID to provide in the query to get the previous set of results',
                },
                required: false,
              },
              description: 'The ID to provide in the query to get the previous set of results',
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'List of request bulk retries',
      content: { 'application/json': { schema: BatchOperationPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBulkRequestsRetryRoute = createRoute({
  method: 'post',
  path: '/bulk/requests/retry',
  tags: ['Bulk retry requests'],
  summary: 'Create a requests bulk retry',
  operationId: 'createRequestBulkRetry',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              query: z
                .strictObject({
                  id: z
                    .union([
                      z.string().max(255).openapi({ description: 'Request ID' }),
                      z.array(z.string().max(255).openapi({ description: 'Request ID' })),
                    ])
                    .exactOptional()
                    .openapi({ description: 'Filter by requests IDs' }),
                  status: z
                    .enum(['accepted', 'rejected'])
                    .exactOptional()
                    .openapi({ description: 'Filter by status' }),
                  rejection_cause: z
                    .union([RequestRejectionCauseSchema, z.array(RequestRejectionCauseSchema)])
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Filter by rejection cause' }),
                  source_id: z
                    .union([
                      z.string().max(255).openapi({ description: 'Source ID' }),
                      z.array(z.string().max(255).openapi({ description: 'Source ID' })),
                    ])
                    .exactOptional()
                    .openapi({ description: 'Filter by source IDs' }),
                  verified: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Filter by verification status' }),
                  search_term: z
                    .string()
                    .min(3)
                    .exactOptional()
                    .openapi({
                      description:
                        'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                    }),
                  headers: z
                    .union([z.string(), z.strictObject({})])
                    .exactOptional()
                    .openapi({
                      description: 'URL Encoded string of the JSON to match to the data headers',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                  body: z
                    .union([z.string(), z.strictObject({})])
                    .exactOptional()
                    .openapi({
                      description: 'URL Encoded string of the JSON to match to the data body',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                  parsed_query: z
                    .union([z.string(), z.strictObject({})])
                    .exactOptional()
                    .openapi({
                      description:
                        'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                  path: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'URL Encoded string of the value to match partially to the path',
                    }),
                  ignored_count: z
                    .union([z.int().min(0), OperatorsSchema, z.array(z.int().min(0))])
                    .exactOptional()
                    .openapi({ description: 'Filter by count of ignored events' }),
                  events_count: z
                    .union([z.int().min(0), OperatorsSchema, z.array(z.int().min(0))])
                    .exactOptional()
                    .openapi({ description: 'Filter by count of events' }),
                  ingested_at: z
                    .union([z.iso.datetime({ offset: true }), OperatorsSchema])
                    .exactOptional()
                    .openapi({ description: 'Filter by event ingested date' }),
                  bulk_retry_id: z
                    .union([z.string().max(255), z.array(z.string().max(255))])
                    .exactOptional()
                    .openapi({ 'x-docs-hide': true }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Filter properties for the events to be included in the bulk retry, use query parameters of [Requests](#requests)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                  required: [],
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
      description: 'A single requests bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkRequestsRetryPlanRoute = createRoute({
  method: 'get',
  path: '/bulk/requests/retry/plan',
  tags: ['Bulk retry requests'],
  summary: 'Generate a requests bulk retry plan',
  operationId: 'generateRequestBulkRetryPlan',
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
        const spread = new Map<string, string[]>([
          ['id', ['query']],
          ['status', ['query']],
          ['rejection_cause', ['query']],
          ['source_id', ['query']],
          ['verified', ['query']],
          ['search_term', ['query']],
          ['headers', ['query']],
          ['body', ['query']],
          ['parsed_query', ['query']],
          ['path', ['query']],
          ['ignored_count', ['query']],
          ['events_count', ['query']],
          ['ingested_at', ['query']],
          ['bulk_retry_id', ['query']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          query: z
            .strictObject({
              id: z
                .union([
                  z.string().max(255).openapi({ description: 'Request ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Request ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by requests IDs' }),
              status: z
                .enum(['accepted', 'rejected'])
                .exactOptional()
                .openapi({ description: 'Filter by status' }),
              rejection_cause: z
                .union([
                  RequestRejectionCauseSchema,
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(RequestRejectionCauseSchema),
                  ),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filter by rejection cause' }),
              source_id: z
                .union([
                  z.string().max(255).openapi({ description: 'Source ID' }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255).openapi({ description: 'Source ID' })),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by source IDs' }),
              verified: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Filter by verification status' }),
              search_term: z
                .string()
                .min(3)
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                }),
              headers: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data headers',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              body: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the JSON to match to the data body',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              parsed_query: z
                .union([z.string(), z.strictObject({})])
                .exactOptional()
                .openapi({
                  description:
                    'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL Encoded string of the value to match partially to the path',
                }),
              ignored_count: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(0),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int().min(0),
                      ),
                    ),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by count of ignored events' }),
              events_count: z
                .union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int().min(0),
                  ),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int().min(0),
                      ),
                    ),
                  ),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by count of events' }),
              ingested_at: z
                .union([
                  z.iso.datetime({ offset: true }),
                  z
                    .strictObject({
                      gt: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      gte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      le: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      lte: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.iso.datetime({ offset: true }).nullable()).exactOptional(),
                      any: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                ])
                .exactOptional()
                .openapi({ description: 'Filter by event ingested date' }),
              bulk_retry_id: z
                .union([
                  z.string().max(255),
                  z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string().max(255)),
                  ),
                ])
                .exactOptional()
                .openapi({ 'x-docs-hide': true }),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Request ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Request ID' },
                        },
                      ],
                      description: 'Filter by requests IDs',
                    },
                    status: {
                      type: 'string',
                      enum: ['accepted', 'rejected'],
                      description: 'Filter by status',
                    },
                    rejection_cause: {
                      anyOf: [
                        { $ref: '#/components/schemas/RequestRejectionCause' },
                        {
                          type: 'array',
                          items: { $ref: '#/components/schemas/RequestRejectionCause' },
                        },
                      ],
                      nullable: true,
                      description: 'Filter by rejection cause',
                    },
                    source_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255, description: 'Source ID' },
                        {
                          type: 'array',
                          items: { type: 'string', maxLength: 255, description: 'Source ID' },
                        },
                      ],
                      description: 'Filter by source IDs',
                    },
                    verified: { type: 'boolean', description: 'Filter by verification status' },
                    search_term: {
                      type: 'string',
                      minLength: 3,
                      description:
                        'URL Encoded string of the value to match partially to the body, headers, parsed_query or path',
                    },
                    headers: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data headers',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    body: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description: 'URL Encoded string of the JSON to match to the data body',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    parsed_query: {
                      anyOf: [
                        { type: 'string' },
                        { type: 'object', properties: {}, additionalProperties: false },
                      ],
                      description:
                        'URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    },
                    path: {
                      type: 'string',
                      description: 'URL Encoded string of the value to match partially to the path',
                    },
                    ignored_count: {
                      anyOf: [
                        { type: 'integer', minimum: 0 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'integer', minimum: 0 } },
                      ],
                      description: 'Filter by count of ignored events',
                    },
                    events_count: {
                      anyOf: [
                        { type: 'integer', minimum: 0 },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                        { type: 'array', items: { type: 'integer', minimum: 0 } },
                      ],
                      description: 'Filter by count of events',
                    },
                    ingested_at: {
                      anyOf: [
                        { type: 'string', format: 'date-time' },
                        {
                          type: 'object',
                          properties: {
                            gt: { type: 'string', format: 'date-time', nullable: true },
                            gte: { type: 'string', format: 'date-time', nullable: true },
                            le: { type: 'string', format: 'date-time', nullable: true },
                            lte: { type: 'string', format: 'date-time', nullable: true },
                            any: { type: 'boolean' },
                          },
                          additionalProperties: false,
                        },
                      ],
                      description: 'Filter by event ingested date',
                    },
                    bulk_retry_id: {
                      anyOf: [
                        { type: 'string', maxLength: 255 },
                        { type: 'array', items: { type: 'string', maxLength: 255 } },
                      ],
                      'x-docs-hide': true,
                    },
                  },
                  additionalProperties: false,
                  description:
                    'Filter properties for the events to be included in the bulk retry, use query parameters of [Requests](#requests)',
                  'x-docs-force-simple-type': true,
                  'x-docs-type': 'JSON',
                },
                required: false,
              },
              description:
                'Filter properties for the events to be included in the bulk retry, use query parameters of [Requests](#requests)',
              'x-docs-force-simple-type': true,
              'x-docs-type': 'JSON',
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Requests bulk retry plan',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              estimated_batch: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Number of batches required to complete the bulk retry' }),
              estimated_count: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Number of estimated events to be retried' }),
              progress: z
                .float32()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Progression of the batch operations, values 0 - 1' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getBulkRequestsRetryIdRoute = createRoute({
  method: 'get',
  path: '/bulk/requests/retry/{id}',
  tags: ['Bulk retry requests'],
  summary: 'Get a requests bulk retry',
  operationId: 'getRequestBulkRetry',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bulk retry ID' },
            required: true,
          },
          description: 'Bulk retry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single requests bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postBulkRequestsRetryIdCancelRoute = createRoute({
  method: 'post',
  path: '/bulk/requests/retry/{id}/cancel',
  tags: ['Bulk retry requests'],
  summary: 'Cancel a requests bulk retry',
  operationId: 'cancelRequestBulkRetry',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Bulk retry ID' },
            required: true,
          },
          description: 'Bulk retry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single requests bulk retry',
      content: { 'application/json': { schema: BatchOperationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getSourcesRoute = createRoute({
  method: 'get',
  path: '/sources',
  tags: ['Sources'],
  summary: 'Get sources',
  operationId: 'getSources',
  request: {
    query: z.object({
      id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by source IDs',
            },
            required: false,
          },
          description: 'Filter by source IDs',
        }),
      name: z
        .union([
          z
            .string()
            .regex(/^[A-z0-9-_]+$/)
            .max(155),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(
            z
              .string()
              .regex(/^[A-z0-9-_]+$/)
              .max(155),
          ),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: {
              anyOf: [
                { type: 'string', pattern: '^[A-z0-9-_]+$', maxLength: 155 },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
                {
                  type: 'array',
                  items: { type: 'string', pattern: '^[A-z0-9-_]+$', maxLength: 155 },
                },
              ],
              description: 'The source name',
            },
            required: false,
          },
          description: 'The source name',
        }),
      disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled',
            schema: { type: 'boolean', description: 'Include disabled resources in the response' },
            required: false,
          },
          description: 'Include disabled resources in the response',
        }),
      disabled_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time', nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Date the source was disabled',
            },
            required: false,
          },
          description: 'Date the source was disabled',
        }),
      order_by: z
        .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of sources',
      content: { 'application/json': { schema: SourcePaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putSourcesRoute = createRoute({
  method: 'put',
  path: '/sources',
  tags: ['Sources'],
  summary: 'Update or create a source',
  operationId: 'upsertSource',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .openapi({ description: 'A unique name for the source' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the source' }),
              allowed_http_methods: SourceAllowedHTTPMethodSchema.exactOptional(),
              custom_response: SourceCustomResponseSchema.exactOptional(),
              verification: VerificationConfigSchema.exactOptional(),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postSourcesRoute = createRoute({
  method: 'post',
  path: '/sources',
  tags: ['Sources'],
  summary: 'Create a source',
  operationId: 'createSource',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .openapi({ description: 'A unique name for the source' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the source' }),
              allowed_http_methods: SourceAllowedHTTPMethodSchema.exactOptional(),
              custom_response: SourceCustomResponseSchema.exactOptional(),
              verification: VerificationConfigSchema.exactOptional(),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getSourcesIdRoute = createRoute({
  method: 'get',
  path: '/sources/{id}',
  tags: ['Sources'],
  summary: 'Get a source',
  operationId: 'getSource',
  request: {
    query: z.object({
      include: z
        .literal('verification.configs')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            schema: { type: 'string', enum: ['verification.configs'] },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    410: {
      description: 'Gone',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putSourcesIdRoute = createRoute({
  method: 'put',
  path: '/sources/{id}',
  tags: ['Sources'],
  summary: 'Update a source',
  operationId: 'updateSource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .exactOptional()
                .openapi({ description: 'A unique name for the source' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the source' }),
              allowed_http_methods: SourceAllowedHTTPMethodSchema.exactOptional(),
              custom_response: SourceCustomResponseSchema.exactOptional(),
              verification: VerificationConfigSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteSourcesIdRoute = createRoute({
  method: 'delete',
  path: '/sources/{id}',
  tags: ['Sources'],
  summary: 'Delete a source',
  operationId: 'deleteSource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'A single source',
      content: {
        'application/json': {
          schema: z
            .strictObject({ id: z.string().openapi({ description: 'ID of the source' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putSourcesIdDisableRoute = createRoute({
  method: 'put',
  path: '/sources/{id}/disable',
  tags: ['Sources'],
  summary: 'Disable a source',
  operationId: 'disableSource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putSourcesIdArchiveRoute = createRoute({
  method: 'put',
  path: '/sources/{id}/archive',
  tags: ['Sources'],
  summary: 'Disable a source',
  operationId: 'disableSource_archive',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putSourcesIdEnableRoute = createRoute({
  method: 'put',
  path: '/sources/{id}/enable',
  tags: ['Sources'],
  summary: 'Enable a source',
  operationId: 'enableSource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putSourcesIdUnarchiveRoute = createRoute({
  method: 'put',
  path: '/sources/{id}/unarchive',
  tags: ['Sources'],
  summary: 'Enable a source',
  operationId: 'enableSource_unarchive',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Source ID' },
            required: true,
          },
          description: 'Source ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putNotificationsWebhooksRoute = createRoute({
  method: 'put',
  path: '/notifications/webhooks',
  tags: ['Notifications'],
  summary: 'Toggle webhook notifications for the project',
  operationId: 'toggleWebhookNotifications',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable or disable webhook notifications on the project' }),
              topics: z
                .array(TopicsValueSchema)
                .exactOptional()
                .openapi({ description: 'List of topics to send notifications for' }),
              source_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Hookdeck Source to send the webhook to' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Toggle operation status response',
      content: { 'application/json': { schema: ToggleWebhookNotificationsSchema } },
    },
  },
})

export const getTeamsCurrentCustomDomainsRoute = createRoute({
  method: 'get',
  path: '/teams/current/custom_domains',
  tags: ['Notifications'],
  summary: 'List all custom domains and their verification statuses for the project',
  operationId: 'listCustomDomains',
  responses: {
    200: {
      description: 'List of custom domains',
      content: { 'application/json': { schema: ListCustomDomainSchemaSchema } },
    },
  },
})

export const postTeamsCurrentCustomDomainsRoute = createRoute({
  method: 'post',
  path: '/teams/current/custom_domains',
  tags: ['Notifications'],
  summary: 'Add a custom domain to the project',
  operationId: 'addCustomDomain',
  request: {
    body: { content: { 'application/json': { schema: AddCustomHostnameSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Custom domain successfuly added',
      content: { 'application/json': { schema: AddCustomHostnameSchema } },
    },
  },
})

export const deleteTeamsCurrentCustomDomainsDomainIdRoute = createRoute({
  method: 'delete',
  path: '/teams/current/custom_domains/{domain_id}',
  tags: ['Notifications'],
  summary: 'Removes a custom domain from the project',
  operationId: 'deleteCustomDomain',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'domain_id', schema: { type: 'string' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Custom domain successfuly removed',
      content: { 'application/json': { schema: DeleteCustomDomainSchemaSchema } },
    },
  },
})

export const getTransformationsRoute = createRoute({
  method: 'get',
  path: '/transformations',
  tags: ['Transformations'],
  summary: 'Get transformations',
  operationId: 'getTransformations',
  request: {
    query: z.object({
      id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by transformation IDs',
            },
            required: false,
          },
          description: 'Filter by transformation IDs',
        }),
      name: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z
              .string()
              .regex(/^[A-z0-9-_]+$/)
              .max(155)
              .nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: {
              anyOf: [
                { type: 'string', pattern: '^[A-z0-9-_]+$', maxLength: 155, nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Filter by transformation name',
            },
            required: false,
          },
          description: 'Filter by transformation name',
        }),
      order_by: z
        .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of transformations',
      content: { 'application/json': { schema: TransformationPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putTransformationsRoute = createRoute({
  method: 'put',
  path: '/transformations',
  tags: ['Transformations'],
  summary: 'Update or create a transformation',
  operationId: 'upsertTransformation',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .openapi({ description: 'A unique, human-friendly name for the transformation' }),
              code: z.string().openapi({ description: 'JavaScript code to be executed as string' }),
              env: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'Key-value environment variables to be passed to the transformation',
                }),
            })
            .openapi({ required: ['name', 'code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single transformation',
      content: { 'application/json': { schema: TransformationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postTransformationsRoute = createRoute({
  method: 'post',
  path: '/transformations',
  tags: ['Transformations'],
  summary: 'Create a transformation',
  operationId: 'createTransformation',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .openapi({ description: 'A unique, human-friendly name for the transformation' }),
              code: z.string().openapi({ description: 'JavaScript code to be executed as string' }),
              env: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'Key-value environment variables to be passed to the transformation',
                }),
            })
            .openapi({ required: ['name', 'code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single transformation',
      content: { 'application/json': { schema: TransformationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getTransformationsIdRoute = createRoute({
  method: 'get',
  path: '/transformations/{id}',
  tags: ['Transformations'],
  summary: 'Get a transformation',
  operationId: 'getTransformation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Transformation ID' },
            required: true,
          },
          description: 'Transformation ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single transformation',
      content: { 'application/json': { schema: TransformationSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putTransformationsIdRoute = createRoute({
  method: 'put',
  path: '/transformations/{id}',
  tags: ['Transformations'],
  summary: 'Update a transformation',
  operationId: 'updateTransformation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Transformation ID' },
            required: true,
          },
          description: 'Transformation ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .exactOptional()
                .openapi({ description: 'A unique, human-friendly name for the transformation' }),
              code: z
                .string()
                .exactOptional()
                .openapi({ description: 'JavaScript code to be executed' }),
              env: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'Key-value environment variables to be passed to the transformation',
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
      description: 'A single transformation',
      content: { 'application/json': { schema: TransformationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteTransformationsIdRoute = createRoute({
  method: 'delete',
  path: '/transformations/{id}',
  tags: ['Transformations'],
  summary: 'Delete a transformation',
  operationId: 'deleteTransformation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Transformation ID' },
            required: true,
          },
          description: 'Transformation ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object with deleted transformation id',
      content: {
        'application/json': {
          schema: z
            .strictObject({ id: z.string().openapi({ description: 'ID of the Transformation' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putTransformationsRunRoute = createRoute({
  method: 'put',
  path: '/transformations/run',
  tags: ['Transformations'],
  summary: 'Test a transformation code',
  operationId: 'testTransformation',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              env: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'Key-value environment variables to be passed to the transformation',
                }),
              webhook_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the connection to use for the execution `context`',
                }),
              code: z
                .string()
                .exactOptional()
                .openapi({ description: 'JavaScript code to be executed' }),
              transformation_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Transformation ID' }),
              request: z
                .strictObject({
                  headers: z
                    .record(z.string(), z.string())
                    .openapi({
                      description: 'Headers of the request',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                  body: z
                    .union([
                      z
                        .strictObject({})
                        .openapi({ 'x-docs-force-simple-type': true, 'x-docs-type': 'JSON' }),
                      z.string(),
                    ])
                    .exactOptional()
                    .openapi({
                      description: 'Body of the request',
                      'x-docs-force-simple-type': true,
                    }),
                  path: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Path of the request' }),
                  query: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'String representation of the query params of the request',
                    }),
                  parsed_query: z
                    .strictObject({})
                    .exactOptional()
                    .openapi({
                      description: 'JSON representation of the query params',
                      'x-docs-force-simple-type': true,
                      'x-docs-type': 'JSON',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: ['headers'],
                  description: 'Request input to use for the transformation execution',
                }),
              event_id: z.string().exactOptional().openapi({ 'x-docs-hide': true }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Transformation run output',
      content: { 'application/json': { schema: TransformationExecutorOutputSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getTransformationsIdExecutionsRoute = createRoute({
  method: 'get',
  path: '/transformations/{id}/executions',
  tags: ['Transformations'],
  summary: 'Get transformation executions',
  operationId: 'getTransformationExecutions',
  request: {
    query: z.object({
      log_level: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.enum(['debug', 'info', 'warn', 'error', 'fatal']).nullable(),
          ),
          z.array(
            ((schema) =>
              z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
              z.enum(['debug', 'info', 'warn', 'error', 'fatal']).nullable(),
            ),
          ),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'log_level',
            schema: {
              anyOf: [
                {
                  type: 'string',
                  enum: ['debug', 'info', 'warn', 'error', 'fatal'],
                  nullable: true,
                },
                {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: ['debug', 'info', 'warn', 'error', 'fatal'],
                    nullable: true,
                  },
                },
              ],
              description: 'Log level of the execution',
            },
            required: false,
          },
          description: 'Log level of the execution',
        }),
      webhook_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'webhook_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'ID of the connection the execution was run for',
            },
            required: false,
          },
          description: 'ID of the connection the execution was run for',
        }),
      issue_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'issue_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'ID of the associated issue',
            },
            required: false,
          },
          description: 'ID of the associated issue',
        }),
      created_at: z
        .union([
          z.iso.datetime({ offset: true }),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'created_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time' },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: "ISO date of the transformation's execution",
            },
            required: false,
          },
          description: "ISO date of the transformation's execution",
        }),
      order_by: z
        .union([z.literal('created_at'), z.array(z.literal('created_at')).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255, enum: ['created_at'] },
                {
                  type: 'array',
                  items: { type: 'string', maxLength: 255, enum: ['created_at'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Transformation ID' },
            required: true,
          },
          description: 'Transformation ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of transformation executions',
      content: { 'application/json': { schema: TransformationExecutionPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getTransformationsIdExecutionsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/transformations/{id}/executions/{execution_id}',
  tags: ['Transformations'],
  summary: 'Get a transformation execution',
  operationId: 'getTransformationExecution',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Transformation ID' },
            required: true,
          },
          description: 'Transformation ID',
        }),
      execution_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'execution_id',
            schema: { type: 'string', description: 'Execution ID' },
            required: true,
          },
          description: 'Execution ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single transformation execution',
      content: { 'application/json': { schema: TransformationExecutionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getConnectionsRoute = createRoute({
  method: 'get',
  path: '/connections',
  tags: ['Connections'],
  summary: 'Get connections',
  operationId: 'getConnections',
  request: {
    query: z.object({
      id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by connection IDs',
            },
            required: false,
          },
          description: 'Filter by connection IDs',
        }),
      name: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z
              .string()
              .regex(/^[A-z0-9-_]+$/)
              .max(155)
              .nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
          z.array(
            ((schema) =>
              z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
              z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .nullable(),
            ),
          ),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: {
              anyOf: [
                { type: 'string', pattern: '^[A-z0-9-_]+$', maxLength: 155, nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
                {
                  type: 'array',
                  items: {
                    type: 'string',
                    pattern: '^[A-z0-9-_]+$',
                    maxLength: 155,
                    nullable: true,
                  },
                },
              ],
              description: 'Filter by connection name',
            },
            required: false,
          },
          description: 'Filter by connection name',
        }),
      destination_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destination_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by associated destination IDs',
            },
            required: false,
          },
          description: 'Filter by associated destination IDs',
        }),
      source_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'source_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by associated source IDs',
            },
            required: false,
          },
          description: 'Filter by associated source IDs',
        }),
      disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled',
            schema: { type: 'boolean', description: 'Include disabled resources in the response' },
            required: false,
          },
          description: 'Include disabled resources in the response',
        }),
      disabled_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time', nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Date the connection was disabled',
            },
            required: false,
          },
          description: 'Date the connection was disabled',
        }),
      full_name: z
        .string()
        .regex(/^[a-z0-9-_>\s]+$/)
        .max(155)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'full_name',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9-_>\\s]+$',
              maxLength: 155,
              description:
                'Fuzzy match the concatenated source and connection name. The source name and connection name must be separated by " -> "',
            },
            required: false,
          },
          description:
            'Fuzzy match the concatenated source and connection name. The source name and connection name must be separated by " -> "',
        }),
      paused_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paused_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time', nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Date the connection was paused',
            },
            required: false,
          },
          description: 'Date the connection was paused',
        }),
      order_by: z
        .union([
          z.enum([
            'created_at',
            'updated_at',
            'sources.updated_at',
            'sources.created_at',
            'destinations.updated_at',
            'destinations.created_at',
          ]),
          z
            .array(
              z.enum([
                'created_at',
                'updated_at',
                'sources.updated_at',
                'sources.created_at',
                'destinations.updated_at',
                'destinations.created_at',
              ]),
            )
            .length(2),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            schema: {
              anyOf: [
                {
                  type: 'string',
                  maxLength: 255,
                  enum: [
                    'created_at',
                    'updated_at',
                    'sources.updated_at',
                    'sources.created_at',
                    'destinations.updated_at',
                    'destinations.created_at',
                  ],
                },
                {
                  type: 'array',
                  items: {
                    type: 'string',
                    maxLength: 255,
                    enum: [
                      'created_at',
                      'updated_at',
                      'sources.updated_at',
                      'sources.created_at',
                      'destinations.updated_at',
                      'destinations.created_at',
                    ],
                  },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort key(s)',
            },
            required: false,
          },
          description: 'Sort key(s)',
        }),
      dir: z
        .union([z.enum(['asc', 'desc']), z.array(z.enum(['asc', 'desc'])).length(2)])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dir',
            schema: {
              anyOf: [
                { type: 'string', enum: ['asc', 'desc'] },
                {
                  type: 'array',
                  items: { type: 'string', enum: ['asc', 'desc'] },
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              description: 'Sort direction(s)',
            },
            required: false,
          },
          description: 'Sort direction(s)',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 0, maximum: 255, description: 'Result set size' },
            required: false,
          },
          description: 'Result set size',
        }),
      next: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the next set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the next set of results',
        }),
      prev: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prev',
            schema: {
              type: 'string',
              maxLength: 255,
              description: 'The ID to provide in the query to get the previous set of results',
            },
            required: false,
          },
          description: 'The ID to provide in the query to get the previous set of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of connections',
      content: { 'application/json': { schema: ConnectionPaginatedResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsRoute = createRoute({
  method: 'put',
  path: '/connections',
  tags: ['Connections'],
  summary: 'Update or create a connection',
  operationId: 'upsertConnection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .nullable()
                .exactOptional()
                .openapi({ description: 'A unique name of the connection for the source' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the connection' }),
              destination_id: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of a destination to bind to the connection' }),
              source_id: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of a source to bind to the connection' }),
              destination: z
                .strictObject({
                  name: z
                    .string()
                    .regex(/^[A-z0-9-_]+$/)
                    .max(155)
                    .openapi({ description: 'Name for the destination' }),
                  description: z
                    .string()
                    .max(500)
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Description for the destination' }),
                  url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Endpoint of the destination' }),
                  cli_path: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Path for the CLI destination' }),
                  rate_limit: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.',
                    }),
                  rate_limit_period: z
                    .enum(['second', 'minute', 'hour', 'concurrent'])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.',
                    }),
                  http_method: DestinationHTTPMethodSchema.exactOptional(),
                  auth_method: DestinationAuthMethodConfigSchema.exactOptional(),
                  path_forwarding_disabled: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['name'], description: 'Destination input object' }),
              source: z
                .strictObject({
                  name: z
                    .string()
                    .regex(/^[A-z0-9-_]+$/)
                    .max(155)
                    .openapi({ description: 'A unique name for the source' }),
                  description: z
                    .string()
                    .max(500)
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Description for the source' }),
                  allowed_http_methods: SourceAllowedHTTPMethodSchema.exactOptional(),
                  custom_response: SourceCustomResponseSchema.exactOptional(),
                  verification: VerificationConfigSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['name'], description: 'Source input object' }),
              rules: z.array(RuleSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const postConnectionsRoute = createRoute({
  method: 'post',
  path: '/connections',
  tags: ['Connections'],
  summary: 'Create a connection',
  operationId: 'createConnection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .nullable()
                .exactOptional()
                .openapi({ description: 'A unique name of the connection for the source' }),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the connection' }),
              destination_id: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of a destination to bind to the connection' }),
              source_id: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of a source to bind to the connection' }),
              destination: z
                .strictObject({
                  name: z
                    .string()
                    .regex(/^[A-z0-9-_]+$/)
                    .max(155)
                    .openapi({ description: 'Name for the destination' }),
                  description: z
                    .string()
                    .max(500)
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Description for the destination' }),
                  url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Endpoint of the destination' }),
                  cli_path: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Path for the CLI destination' }),
                  rate_limit: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.',
                    }),
                  rate_limit_period: z
                    .enum(['second', 'minute', 'hour', 'concurrent'])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.',
                    }),
                  http_method: DestinationHTTPMethodSchema.exactOptional(),
                  auth_method: DestinationAuthMethodConfigSchema.exactOptional(),
                  path_forwarding_disabled: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['name'], description: 'Destination input object' }),
              source: z
                .strictObject({
                  name: z
                    .string()
                    .regex(/^[A-z0-9-_]+$/)
                    .max(155)
                    .openapi({ description: 'A unique name for the source' }),
                  description: z
                    .string()
                    .max(500)
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Description for the source' }),
                  allowed_http_methods: SourceAllowedHTTPMethodSchema.exactOptional(),
                  custom_response: SourceCustomResponseSchema.exactOptional(),
                  verification: VerificationConfigSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['name'], description: 'Source input object' }),
              rules: z.array(RuleSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getConnectionsCountRoute = createRoute({
  method: 'get',
  path: '/connections/count',
  tags: ['Connections'],
  summary: 'Count connections',
  operationId: 'countConnections',
  request: {
    query: z.object({
      destination_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destination_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by associated destination IDs',
            },
            required: false,
          },
          description: 'Filter by associated destination IDs',
        }),
      source_id: z
        .union([z.string().max(255), z.array(z.string().max(255))])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'source_id',
            schema: {
              anyOf: [
                { type: 'string', maxLength: 255 },
                { type: 'array', items: { type: 'string', maxLength: 255 } },
              ],
              description: 'Filter by associated source IDs',
            },
            required: false,
          },
          description: 'Filter by associated source IDs',
        }),
      disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled',
            schema: { type: 'boolean', description: 'Include disabled resources in the response' },
            required: false,
          },
          description: 'Include disabled resources in the response',
        }),
      disabled_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disabled_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time', nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Date the connection was disabled',
            },
            required: false,
          },
          description: 'Date the connection was disabled',
        }),
      paused_at: z
        .union([
          ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.datetime({ offset: true }).nullable(),
          ),
          z
            .strictObject({
              gt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              gte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              le: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              lte: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              ).exactOptional(),
              any: z.stringbool().exactOptional(),
            })
            .openapi({ required: [] }),
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paused_at',
            schema: {
              anyOf: [
                { type: 'string', format: 'date-time', nullable: true },
                {
                  type: 'object',
                  properties: {
                    gt: { type: 'string', format: 'date-time', nullable: true },
                    gte: { type: 'string', format: 'date-time', nullable: true },
                    le: { type: 'string', format: 'date-time', nullable: true },
                    lte: { type: 'string', format: 'date-time', nullable: true },
                    any: { type: 'boolean' },
                  },
                  additionalProperties: false,
                },
              ],
              description: 'Date the connection was paused',
            },
            required: false,
          },
          description: 'Date the connection was paused',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Count of connections',
      content: {
        'application/json': {
          schema: z
            .strictObject({ count: z.float32().openapi({ description: 'Count of connections' }) })
            .openapi({ required: ['count'] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const getConnectionsIdRoute = createRoute({
  method: 'get',
  path: '/connections/{id}',
  tags: ['Connections'],
  summary: 'Get a single connection',
  operationId: 'getConnection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    410: {
      description: 'Gone',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsIdRoute = createRoute({
  method: 'put',
  path: '/connections/{id}',
  tags: ['Connections'],
  summary: 'Update a connection',
  operationId: 'updateConnection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[A-z0-9-_]+$/)
                .max(155)
                .nullable()
                .exactOptional(),
              description: z
                .string()
                .max(500)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the connection' }),
              rules: z.array(RuleSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const deleteConnectionsIdRoute = createRoute({
  method: 'delete',
  path: '/connections/{id}',
  tags: ['Connections'],
  summary: 'Delete a connection',
  operationId: 'deleteConnection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: {
        'application/json': {
          schema: z
            .strictObject({ id: z.string().openapi({ description: 'ID of the connection' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsIdDisableRoute = createRoute({
  method: 'put',
  path: '/connections/{id}/disable',
  tags: ['Connections'],
  summary: 'Disable a connection',
  operationId: 'disableConnection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsIdArchiveRoute = createRoute({
  method: 'put',
  path: '/connections/{id}/archive',
  tags: ['Connections'],
  summary: 'Disable a connection',
  operationId: 'disableConnection_archive',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsIdEnableRoute = createRoute({
  method: 'put',
  path: '/connections/{id}/enable',
  tags: ['Connections'],
  summary: 'Enable a connection',
  operationId: 'enableConnection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsIdUnarchiveRoute = createRoute({
  method: 'put',
  path: '/connections/{id}/unarchive',
  tags: ['Connections'],
  summary: 'Enable a connection',
  operationId: 'enableConnection_unarchive',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsIdPauseRoute = createRoute({
  method: 'put',
  path: '/connections/{id}/pause',
  tags: ['Connections'],
  summary: 'Pause a connection',
  operationId: 'pauseConnection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})

export const putConnectionsIdUnpauseRoute = createRoute({
  method: 'put',
  path: '/connections/{id}/unpause',
  tags: ['Connections'],
  summary: 'Unpause a connection',
  operationId: 'unpauseConnection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'Connection ID' },
            required: true,
          },
          description: 'Connection ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: APIErrorResponseSchema } },
    },
  },
})
