import { createRoute, z } from '@hono/zod-openapi'

type NangoModelFieldType = {
  array?: boolean
  dynamic?: boolean
  model?: boolean
  name: string
  optional?: boolean
  tsType?: boolean
  union?: boolean
  value: string | number | boolean | unknown
}

const StdErrorSchema = z
  .strictObject({
    error: z
      .strictObject({
        code: z.string(),
        message: z.string().exactOptional(),
        errors: z.array(z.looseObject({})).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['code'] }),
  })
  .openapi({ required: [] })
  .openapi('StdError')

const RunnableFunctionTypeSchema = z
  .enum(['action', 'sync', 'tool', 'function'])
  .openapi({
    description:
      'Function type for code deployments and dry runs. The `action` value is deprecated; use `tool` for new tools.',
  })
  .openapi('RunnableFunctionType')

const FunctionAvailabilitySchema = z
  .object({
    id: z
      .number()
      .nullable()
      .openapi({
        description:
          'Deployed function id. `null` for a Nango catalog tool and for a tool, which is identified by its `uuid`.',
      }),
    enabled: z
      .boolean()
      .openapi({
        description:
          'Whether the function is enabled. Always `true` for deprecated action definitions, including a deployed action whose stored configuration is disabled. Syncs, on-event functions, and tools report the stored value.',
      }),
    last_deployed: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'ISO-8601 timestamp. `null` for a Nango catalog tool.' }),
    source: z
      .enum(['catalog', 'standalone', 'repo', 'tools-catalog'])
      .openapi({
        description:
          '`tools-catalog` is a Nango catalog tool that has not been deployed. `catalog`, `standalone`, and `repo` are deployed functions.',
      }),
  })
  .openapi({
    description:
      'Availability metadata attached to a listed function. Catalog tools have `id: null`, `last_deployed: null`, `enabled: true`, and `source: tools-catalog`. Deployed functions have an id and a `last_deployed` timestamp.',
    required: ['id', 'enabled', 'last_deployed', 'source'],
  })
  .openapi('FunctionAvailability')

const NangoSyncFunctionSchema = z
  .object({
    name: z.string(),
    description: z.string().exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    type: z.literal('sync'),
    input: z.string().exactOptional(),
    returns: z.array(z.string()),
    json_schema: z.looseObject({}).nullable(),
    runs: z.string().nullable().openapi({ description: 'Schedule expression, e.g. `every day`.' }),
    auto_start: z.boolean(),
    track_deletes: z.boolean(),
  })
  .openapi({
    required: ['name', 'type', 'returns', 'json_schema', 'runs', 'auto_start', 'track_deletes'],
  })
  .openapi('NangoSyncFunction')

const NangoActionFunctionSchema = z
  .object({
    name: z.string(),
    description: z.string().exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    type: z.literal('action'),
    input: z.string().exactOptional(),
    returns: z.array(z.string()),
    json_schema: z.looseObject({}).nullable(),
  })
  .openapi({
    deprecated: true,
    description:
      'Deprecated action definition format, also used by some catalog tools. Use createTool for new custom implementations.',
    required: ['name', 'type', 'returns', 'json_schema'],
  })
  .openapi('NangoActionFunction')

const NangoOnEventFunctionSchema = z
  .object({
    name: z.string(),
    description: z.string().exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    type: z.literal('on-event'),
    event: z.enum(['post-connection-creation', 'pre-connection-deletion', 'validate-connection']),
  })
  .openapi({ required: ['name', 'type', 'event'] })
  .openapi('NangoOnEventFunction')

const NangoToolFunctionSchema = z
  .object({
    name: z.string(),
    type: z.literal('tool'),
    uuid: z.uuid(),
    integration_id: z.string(),
    provider: z.string(),
    description: z.string(),
    input_json_schema: z
      .looseObject({})
      .nullable()
      .openapi({
        description:
          'Input JSON Schema with its referenced definitions, or null when absent or unresolved.',
      }),
    output_json_schema: z
      .looseObject({})
      .nullable()
      .openapi({
        description:
          'Output JSON Schema with its referenced definitions, or null when absent or unresolved.',
      }),
    meta: z
      .object({
        instructions: z.string().exactOptional(),
        required_scopes: z
          .xor([
            z
              .strictObject({ all: z.array(z.string()).min(1) })
              .openapi({ description: 'Every listed scope is required.', required: ['all'] }),
            z
              .strictObject({ any: z.array(z.string()).min(1) })
              .openapi({
                description: 'At least one listed scope is required.',
                required: ['any'],
              }),
            z
              .strictObject({ none: z.literal(true) })
              .openapi({ description: 'No scopes are required.', required: ['none'] }),
          ])
          .exactOptional()
          .openapi({ description: 'Provider scopes the tool needs. Absent when unknown.' }),
        tags: z.record(z.string(), z.xor([z.string(), z.array(z.string())])),
      })
      .openapi({ required: ['tags'] }),
  })
  .openapi({
    description: 'An HTTP-triggered function with resolved input and output schemas.',
    required: [
      'name',
      'type',
      'uuid',
      'integration_id',
      'provider',
      'description',
      'input_json_schema',
      'output_json_schema',
      'meta',
    ],
  })
  .openapi('NangoToolFunction')

const ProviderTemplateFunctionSchema = z
  .xor([NangoSyncFunctionSchema, NangoActionFunctionSchema])
  .openapi({
    description:
      'A sync template or catalog tool definition (no deployment metadata). Catalog tool templates currently use deprecated action definitions.',
  })
  .openapi('ProviderTemplateFunction')

const ListedNangoFunctionSchema = z
  .xor([
    NangoSyncFunctionSchema.and(FunctionAvailabilitySchema),
    NangoActionFunctionSchema.and(FunctionAvailabilitySchema),
    NangoOnEventFunctionSchema.and(FunctionAvailabilitySchema),
    NangoToolFunctionSchema.and(FunctionAvailabilitySchema),
  ])
  .openapi({
    description:
      'A listed function (sync, deprecated action, on-event, or tool) merged with its availability metadata.',
  })
  .openapi('ListedNangoFunction')

const FunctionCompileRequestSchema = z
  .strictObject({
    code: z
      .string()
      .min(1)
      .openapi({ description: 'The TypeScript source code for the function.' }),
  })
  .openapi({ required: ['code'] })
  .openapi('FunctionCompileRequest')

const FunctionCompileResponseSchema = z
  .strictObject({
    bundle_size_bytes: z.int().min(0),
    bundled_js: z.string().openapi({ description: 'The bundled JavaScript output.' }),
    compiled_at: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['bundle_size_bytes', 'bundled_js', 'compiled_at'] })
  .openapi('FunctionCompileResponse')

const FunctionDryrunRequestSchema = z
  .strictObject({
    integration_id: z
      .string()
      .openapi({ description: 'The integration ID (unique_key) that you created in Nango.' }),
    function_type: RunnableFunctionTypeSchema,
    code: z
      .string()
      .min(1)
      .openapi({ description: 'The TypeScript source code for the function.' }),
    connection_id: z.string().openapi({ description: 'The connection ID to use for the dry run.' }),
    input: z
      .any()
      .exactOptional()
      .openapi({ description: 'Optional JSON input payload passed to the function.' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Optional metadata available to the function during the dry run.' }),
    checkpoint: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Optional checkpoint payload available to sync functions during the dry run.',
      }),
    last_sync_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Optional last sync date available to sync functions during the dry run.',
      }),
  })
  .openapi({ required: ['integration_id', 'function_type', 'code', 'connection_id'] })
  .openapi('FunctionDryrunRequest')

const FunctionDryrunStatusSchema = z
  .enum(['waiting', 'running', 'success', 'failed'])
  .openapi('FunctionDryrunStatus')

const FunctionDryrunCreateResponseSchema = z
  .strictObject({
    id: z.uuid(),
    status: z.enum(['waiting', 'running']),
    created_at: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['id', 'status', 'created_at'] })
  .openapi('FunctionDryrunCreateResponse')

const FunctionDryrunResponseSchema = z
  .strictObject({
    id: z.uuid(),
    status: FunctionDryrunStatusSchema,
    integration_id: z.string(),
    function_type: RunnableFunctionTypeSchema,
    created_at: z.iso.datetime({ offset: true }),
    updated_at: z.iso.datetime({ offset: true }),
    started_at: z.iso.datetime({ offset: true }).exactOptional(),
    completed_at: z.iso.datetime({ offset: true }).exactOptional(),
    duration_ms: z.int().min(0).exactOptional(),
    output: z.string().exactOptional().openapi({ description: 'Dry run command output.' }),
    result: z
      .any()
      .exactOptional()
      .openapi({ description: 'The function result, when the dry run emits one.' }),
    error: z
      .strictObject({
        code: z.string(),
        message: z.string(),
        payload: z.any().exactOptional().openapi({ description: 'Optional error payload.' }),
      })
      .exactOptional()
      .openapi({ required: ['code', 'message'] }),
  })
  .openapi({
    required: ['id', 'status', 'integration_id', 'function_type', 'created_at', 'updated_at'],
  })
  .openapi('FunctionDryrunResponse')

const FunctionDeploymentCodeRequestSchema = z
  .strictObject({
    type: z.literal('function').openapi({ description: 'Deploy submitted function source code.' }),
    integration_id: z
      .string()
      .openapi({ description: 'The integration ID (unique_key) that you created in Nango.' }),
    function_name: z.string().openapi({ description: 'The function name.' }),
    function_type: RunnableFunctionTypeSchema,
    code: z
      .string()
      .min(1)
      .openapi({ description: 'The TypeScript source code for the function.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional version tag for this deployment. Ignored for tools and functions.',
      }),
    allow_destructive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allow overwriting an existing standalone function with the same name.',
      }),
  })
  .openapi({ required: ['type', 'integration_id', 'function_name', 'function_type', 'code'] })
  .openapi('FunctionDeploymentCodeRequest')

const FunctionDeploymentTemplateRequestSchema = z
  .strictObject({
    type: z
      .literal('template')
      .openapi({
        description: 'Deploy a template from the provider catalog onto the integration.',
      }),
    integration_id: z
      .string()
      .openapi({ description: 'The integration ID (unique_key) that you created in Nango.' }),
    template: z
      .string()
      .openapi({
        description:
          'The template name to deploy, as listed by `GET /providers/{provider}/templates`.',
      }),
    function_type: z.enum(['action', 'sync']).exactOptional(),
  })
  .openapi({ required: ['type', 'integration_id', 'template'] })
  .openapi('FunctionDeploymentTemplateRequest')

const FunctionDeploymentRequestSchema = z
  .discriminatedUnion('type', [
    FunctionDeploymentCodeRequestSchema,
    FunctionDeploymentTemplateRequestSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        function: '#/components/schemas/FunctionDeploymentCodeRequest',
        template: '#/components/schemas/FunctionDeploymentTemplateRequest',
      },
    },
  })
  .openapi('FunctionDeploymentRequest')

const FunctionDeploymentResponseSchema = z
  .strictObject({
    id: z.string(),
    status: z
      .enum(['waiting', 'running', 'success', 'failed'])
      .openapi({
        description:
          'The status of the function deployment. Poll `GET /functions/deployments/{id}` to get the final status.',
      }),
    created_at: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['id', 'status', 'created_at'] })
  .openapi('FunctionDeploymentResponse')

const FunctionDeploymentResultResponseSchema = z
  .strictObject({
    id: z.uuid(),
    status: z
      .enum(['waiting', 'running', 'success', 'failed'])
      .openapi({ description: 'The status of the function deployment.' }),
    integration_id: z
      .string()
      .openapi({ description: 'The integration ID (unique_key) that you created in Nango.' }),
    function_name: z.string().openapi({ description: 'The function name.' }),
    function_type: RunnableFunctionTypeSchema,
    created_at: z.iso.datetime({ offset: true }),
    updated_at: z.iso.datetime({ offset: true }),
    started_at: z.iso.datetime({ offset: true }).exactOptional(),
    completed_at: z.iso.datetime({ offset: true }).exactOptional(),
    duration_ms: z.int().min(0).exactOptional(),
    deployed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the deployment updated any functions.' }),
    deployed_functions: z
      .array(
        z
          .strictObject({
            name: z.string(),
            version: z
              .string()
              .exactOptional()
              .openapi({ description: 'Only set for actions and syncs.' }),
          })
          .openapi({ required: ['name'] }),
      )
      .exactOptional()
      .openapi({ description: 'Functions updated by the deployment.' }),
    output: z.string().exactOptional().openapi({ description: 'Deployment command output.' }),
    error: z
      .strictObject({
        code: z.string(),
        message: z.string(),
        payload: z.any().exactOptional().openapi({ description: 'Optional error payload.' }),
      })
      .exactOptional()
      .openapi({ required: ['code', 'message'] }),
  })
  .openapi({
    required: [
      'id',
      'status',
      'integration_id',
      'function_name',
      'function_type',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('FunctionDeploymentResultResponse')

const TokenUrlObjectSchema = z
  .strictObject({
    OAUTH1: z.string().exactOptional(),
    OAUTH2: z.string().exactOptional(),
    OAUTH2CC: z.string().exactOptional(),
    BASIC: z.string().exactOptional(),
    API_KEY: z.string().exactOptional(),
    APP_STORE: z.string().exactOptional(),
    CUSTOM: z.string().exactOptional(),
    APP: z.string().exactOptional(),
    NONE: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TokenUrlObject')

const SimplifiedJSONSchemaSchema = z
  .strictObject({
    type: z.literal('string'),
    title: z.string(),
    description: z.string(),
    example: z.string().exactOptional(),
    pattern: z.string().exactOptional(),
    format: z.enum(['hostname', 'uri', 'uuid', 'email']).exactOptional(),
    optional: z.boolean().exactOptional(),
    order: z.number().exactOptional(),
    default_value: z.string().exactOptional(),
    hidden: z.boolean().exactOptional(),
    prefix: z.string().exactOptional(),
    suffix: z.string().exactOptional(),
    doc_section: z.string().exactOptional(),
    secret: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The value is sensitive and is masked once saved.' }),
    automated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The value is set by Nango, not entered by the user.' }),
    enum: z.array(z.string()).exactOptional(),
    warnings: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Warning shown when the field is set to a given value, keyed by that value.',
      }),
    visible_when: z
      .object({ field: z.string(), equals: z.string() })
      .exactOptional()
      .openapi({
        description: 'Only show and validate this field when another field holds the given value.',
        required: ['field', 'equals'],
      }),
  })
  .openapi({ required: ['type', 'title', 'description'] })
  .openapi('SimplifiedJSONSchema')

const BaseProviderSchema = z
  .strictObject({
    name: z.string(),
    display_name: z.string(),
    auth_mode: z.enum([
      'OAUTH1',
      'OAUTH2',
      'OAUTH2_CC',
      'BASIC',
      'API_KEY',
      'CUSTOM',
      'APP',
      'NONE',
      'TBA',
      'JWT',
      'BILL',
      'TWO_STEP',
      'SIGNATURE',
      'MCP_OAUTH2',
      'MCP_OAUTH2_GENERIC',
      'INSTALL_PLUGIN',
      'AWS_SIGV4',
    ]),
    proxy: z
      .strictObject({
        base_url: z.string(),
        headers: z.looseObject({}).exactOptional(),
        query: z
          .strictObject({ api_key: z.string() })
          .exactOptional()
          .openapi({ required: ['api_key'] }),
        retry: z
          .object({ at: z.string().exactOptional(), after: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        decompress: z.boolean().exactOptional(),
        paginate: z.any().exactOptional(),
        verification: z
          .strictObject({
            method: z.string(),
            endpoint: z.string(),
            base_url_override: z.string().exactOptional(),
            headers: z.looseObject({}).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['method', 'endpoint'] }),
      })
      .exactOptional()
      .openapi({ required: ['base_url'] }),
    authorization_url: z.string().exactOptional(),
    authorization_url_encode: z.boolean().exactOptional(),
    access_token_url: z.string().exactOptional(),
    token_url_encode: z.boolean().exactOptional(),
    authorization_params: z.looseObject({}).exactOptional(),
    scope_separator: z.string().exactOptional(),
    default_scopes: z.array(z.string()).exactOptional(),
    token_url: z.union([z.string(), TokenUrlObjectSchema]).exactOptional(),
    token_params: z.looseObject({}).exactOptional(),
    authorization_url_replacements: z.looseObject({}).exactOptional(),
    authorization_url_fragment: z.string().exactOptional(),
    redirect_uri_metadata: z.array(z.string()).exactOptional(),
    token_response_metadata: z.array(z.string()).exactOptional(),
    docs: z.string(),
    token_expiration_buffer: z.number().exactOptional(),
    webhook_routing_script: z.string().exactOptional(),
    webhook_user_defined_secret: z.boolean().exactOptional(),
    post_connection_script: z.string().exactOptional(),
    pre_connection_deletion_script: z.string().exactOptional(),
    categories: z.array(z.string()).exactOptional(),
    connection_configuration: z.array(z.string()).exactOptional(),
    connection_config: SimplifiedJSONSchemaSchema.exactOptional(),
    credentials: z
      .object({ apiKey: SimplifiedJSONSchemaSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    integration_config: z
      .record(z.string(), SimplifiedJSONSchemaSchema)
      .exactOptional()
      .openapi({
        description:
          'Fields set on the integration (in `integration_config` on create or update) rather than on each connection, keyed by field name.\n',
      }),
    client_registration: z
      .enum(['dynamic', 'static', 'cimd'])
      .exactOptional()
      .openapi({
        description:
          'MCP_OAUTH2 providers only. How the OAuth client is registered: `static` requires `client_id` and `client_secret` in the integration credentials; `dynamic` and `cimd` are registered by Nango.\n',
      }),
  })
  .openapi({ required: ['auth_mode', 'name', 'display_name', 'docs'] })
  .openapi('BaseProvider')

const ProviderOAuth2Schema = z
  .strictObject({
    auth_mode: z.enum(['OAUTH2', 'CUSTOM']),
    token_params: z
      .strictObject({
        grant_type: z.enum(['authorization_code', 'client_credentials']).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    disable_pkce: z.boolean().exactOptional(),
    refresh_params: z
      .strictObject({ grant_type: z.literal('refresh_token') })
      .exactOptional()
      .openapi({ required: ['grant_type'] }),
    authorization_method: z.enum(['body', 'header']).exactOptional(),
    body_format: z.enum(['form', 'json']).exactOptional(),
    refresh_url: z.string().exactOptional(),
    expires_in_unit: z.literal('milliseconds').exactOptional(),
    token_request_auth_method: z
      .enum(['basic', 'custom', 'private_key_jwt', 'none'])
      .exactOptional(),
  })
  .openapi({ required: ['auth_mode'] })
  .openapi('ProviderOAuth2')

const ProviderOAuth1Schema = z
  .strictObject({
    auth_mode: z.literal('OAUTH1'),
    request_url: z.string(),
    request_params: z.looseObject({}).exactOptional(),
    request_http_method: z.enum(['GET', 'PUT', 'POST']).exactOptional(),
    token_http_method: z.enum(['GET', 'PUT', 'POST']).exactOptional(),
    signature_method: z.enum(['HMAC-SHA1', 'RSA-SHA1', 'PLAINTEXT']),
  })
  .openapi({ required: ['auth_mode', 'request_url', 'signature_method'] })
  .openapi('ProviderOAuth1')

const ProviderSchema = z
  .union([
    BaseProviderSchema.openapi({ title: 'Default' }),
    ProviderOAuth1Schema.openapi({ title: 'Oauth1' }),
    ProviderOAuth2Schema.openapi({ title: 'Oauth2' }),
  ])
  .openapi('Provider')

const IntegrationSchema = z
  .strictObject({
    unique_key: z
      .string()
      .openapi({ description: 'The integration ID that you created in Nango.' }),
    display_name: z.string().openapi({ description: 'The provider display name.' }),
    provider: z.string().openapi({ description: 'The Nango API Configuration.' }),
    logo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute path to the logo of this integration (svg)' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ description: 'When it was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last time it was updated' }),
    forward_webhooks: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether webhooks received from this integration's provider are forwarded to your backend.",
      }),
    missing_fields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Credential fields the integration is missing, e.g. `oauth_client_id`. Empty when the integration is fully configured, when it uses Nango-provided credentials, or when the auth mode collects everything at connection time. Field names only, never values.\n',
      }),
  })
  .openapi({ required: ['unique_key', 'display_name', 'provider', 'created_at', 'updated_at'] })
  .openapi('Integration')

const IntegrationCredentialsSchema = z
  .xor([
    z
      .object({
        type: z.enum(['OAUTH1', 'OAUTH2', 'TBA']),
        client_id: z.string().min(1).max(255),
        client_secret: z.string().min(1),
        scopes: z
          .union([
            z.string().regex(/^[0-9a-zA-Z:\/_.-]+(,[0-9a-zA-Z:\/_.-]+)*$/),
            z.null().nullable(),
          ])
          .exactOptional(),
        webhook_secret: z.union([z.string().max(255), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['type', 'client_id', 'client_secret'] }),
    z
      .object({
        type: z.literal('APP'),
        app_id: z.string().min(1).max(255),
        app_link: z.string().min(1),
        private_key: z
          .string()
          .regex(/^-----BEGIN RSA PRIVATE KEY----.*-----END RSA PRIVATE KEY-----$/),
      })
      .openapi({ required: ['type', 'app_id', 'app_link', 'private_key'] }),
    z
      .object({
        type: z.literal('CUSTOM'),
        client_id: z.string().min(1).max(255),
        client_secret: z.string().min(1),
        app_id: z.string().min(1).max(255),
        app_link: z.string().min(1),
        private_key: z
          .string()
          .regex(/^-----BEGIN RSA PRIVATE KEY----.*-----END RSA PRIVATE KEY-----$/),
      })
      .openapi({
        required: ['type', 'client_id', 'client_secret', 'app_id', 'app_link', 'private_key'],
      }),
    z
      .object({
        type: z.literal('MCP_OAUTH2_GENERIC'),
        client_name: z.union([z.string().min(1).max(255), z.null().nullable()]).exactOptional(),
        client_uri: z.union([z.string().max(255), z.null().nullable()]).exactOptional(),
        client_logo_uri: z.union([z.string().max(255), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['type'] }),
    z
      .object({
        type: z.literal('MCP_OAUTH2'),
        client_id: z.union([z.string().min(1).max(255), z.null().nullable()]).exactOptional(),
        client_secret: z.union([z.string().min(1), z.null().nullable()]).exactOptional(),
        scopes: z
          .union([
            z.string().regex(/^(?:[0-9a-zA-Z:\/_.*-]+([, ]+[0-9a-zA-Z:\/_.*-]+)*)?$/),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .openapi({ required: ['type'] }),
  ])
  .openapi({
    description:
      'Integration credentials schema for different authentication types, as returned in API responses (fields may be null).',
  })
  .openapi('IntegrationCredentials')

const IntegrationCredentialsWithConfigSchema = z
  .xor([
    IntegrationCredentialsSchema,
    z
      .object({
        type: z.literal('INTEGRATION_CONFIG'),
        auth_mode: z
          .string()
          .openapi({
            description: "The provider's actual auth mode (e.g. AWS_SIGV4, TWO_STEP, API_KEY).",
          }),
        integration_config: z
          .record(z.string(), z.string())
          .openapi({
            description:
              "The provider's `integration_config` values, keyed by the fields it declares.",
          }),
      })
      .openapi({ required: ['type', 'auth_mode', 'integration_config'] }),
  ])
  .openapi({
    description:
      "Same as IntegrationCredentials, plus the shape returned for providers that declare an `integration_config` schema (e.g. aws-sigv4, epic, private-api-generic), alongside or instead of fixed credential fields. This variant is response-only -- it can't be submitted on create or update.\n",
  })
  .openapi('IntegrationCredentialsWithConfig')

const IntegrationFullSchema = IntegrationSchema.and(
  z
    .strictObject({
      webhook_url: z
        .union([z.string(), z.null().nullable()])
        .exactOptional()
        .openapi({ description: 'Configure your integration webhooks to point to this URL' }),
      credentials: z
        .union([IntegrationCredentialsWithConfigSchema, z.null().nullable()])
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('IntegrationFull')

const TagsSchema = z
  .record(z.string(), z.string().max(255))
  .refine((val) => Object.keys(val).length <= 10)
  .openapi({
    description: 'Connection tags (key/value strings). Keys are normalized to lowercase.',
  })
  .openapi('Tags')

const EndUserSchema = z
  .object({
    id: z.string().openapi({ description: 'Uniquely identifies the end user.', deprecated: true }),
    email: z.string().exactOptional().openapi({ deprecated: true }),
    display_name: z.string().exactOptional().openapi({ deprecated: true }),
    tags: z
      .record(z.string(), z.string().max(64))
      .exactOptional()
      .openapi({
        description:
          'Tags associated with the end user. Only accepts strings values, up to 64 keys.',
        deprecated: true,
      }),
  })
  .openapi({ deprecated: true, required: ['id'] })
  .openapi('EndUser')

const ConnectSessionInputSchema = z
  .object({
    tags: TagsSchema.exactOptional(),
    end_user: EndUserSchema.exactOptional().openapi({
      deprecated: true,
      description: 'Deprecated, use tags instead',
    }),
    organization: z
      .object({
        id: z
          .string()
          .openapi({ description: 'Uniquely identifies the organization the end user belongs to' }),
        display_name: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated, use tags instead', required: ['id'] }),
    allowed_integrations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Filters which integrations the end user can interact with' }),
    integrations_config_defaults: z
      .record(
        z.string(),
        z
          .strictObject({
            user_scopes: z
              .string()
              .exactOptional()
              .openapi({ description: 'User scopes (for Slack only)' }),
            authorization_params: z
              .looseObject({})
              .exactOptional()
              .openapi({ description: 'Query params passed to the OAuth flow (for OAuth2 only)' }),
            connection_config: z
              .looseObject({
                oauth_scopes_override: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Override oauth scopes' }),
                oauth_client_id_override: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Set to empty string to allow end-users to provide their own OAuth client ID in Connect UI',
                  }),
                oauth_client_secret_override: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Set to empty string to allow end-users to provide their own OAuth client secret in Connect UI',
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ description: 'the unique name of an integration', required: [] }),
      )
      .exactOptional(),
    overrides: z
      .record(
        z.string(),
        z
          .strictObject({
            docs_connect: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Override the url of the docs we point to in the connect flow',
              }),
          })
          .openapi({ description: 'The unique name of an integration', required: [] }),
      )
      .exactOptional(),
    webhook_url_override: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Override the environment's webhook URLs for the connection created by this session. When set, that connection's webhooks are sent only to this URL (the environment's primary and secondary URLs are bypassed).",
      }),
  })
  .openapi({ required: [] })
  .openapi('ConnectSessionInput')

const ConnectSessionReconnectInputSchema = z
  .object({
    connection_id: z.string(),
    integration_id: z.string(),
    tags: TagsSchema.exactOptional(),
    end_user: z.lazy(() => ConnectSessionInputSchema).exactOptional(),
    organization: z.lazy(() => ConnectSessionInputSchema).exactOptional(),
    integrations_config_defaults: z.lazy(() => ConnectSessionInputSchema).exactOptional(),
    overrides: z.lazy(() => ConnectSessionInputSchema).exactOptional(),
    webhook_url_override: z.lazy(() => ConnectSessionInputSchema).exactOptional(),
  })
  .openapi({ required: ['connection_id', 'integration_id'] })
  .openapi('ConnectSessionReconnectInput')

const ConnectSessionSchema = z
  .object({
    token: z.string().openapi({ description: 'The connect session token' }),
    connect_link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to directly connect the user to the integration. This can be used as a magic link.',
      }),
    expires_at: z.iso.datetime({ offset: true }).openapi({ description: 'When the token expires' }),
  })
  .openapi({ required: ['token', 'expires_at'] })
  .openapi('ConnectSession')

const OAuth1CredentialsSchema = z
  .strictObject({
    oauth_token: z.string(),
    oauth_token_secret: z.string(),
    type: z.literal('OAUTH1'),
  })
  .openapi({ title: 'OAuth1', required: ['oauth_token', 'oauth_token_secret', 'type'] })
  .openapi('OAuth1Credentials')

const OAuth1CredentialsWithRawSchema = OAuth1CredentialsSchema.and(
  z.strictObject({ raw: z.looseObject({}) }).openapi({ required: ['raw'] }),
)
  .openapi({ title: 'OAuth1' })
  .openapi('OAuth1CredentialsWithRaw')

const OAuth2CredentialsSchema = z
  .strictObject({
    access_token: z.string(),
    config_override: z
      .strictObject({
        client_id: z.string().exactOptional(),
        client_secret: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    refresh_token: z.string().exactOptional(),
    type: z.literal('OAUTH2'),
  })
  .openapi({ title: 'OAuth2', required: ['access_token', 'type'] })
  .openapi('OAuth2Credentials')

const OAuth2CredentialsWithRawSchema = OAuth2CredentialsSchema.and(
  z.strictObject({ raw: z.looseObject({}) }).openapi({ required: ['raw'] }),
)
  .openapi({ title: 'OAuth2' })
  .openapi('OAuth2CredentialsWithRaw')

const BasicApiCredentialsSchema = z
  .strictObject({ password: z.string(), type: z.literal('BASIC'), username: z.string() })
  .openapi({ title: 'Basic Auth', required: ['type', 'username', 'password'] })
  .openapi('BasicApiCredentials')

const ApiKeyCredentialsSchema = z
  .strictObject({ apiKey: z.string(), type: z.literal('API_KEY') })
  .openapi({ title: 'Api Key', required: ['type', 'apiKey'] })
  .openapi('ApiKeyCredentials')

const AppCredentialsSchema = z
  .strictObject({
    access_token: z.string(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    raw: z.looseObject({}),
    type: z.literal('APP'),
  })
  .openapi({ title: 'GitHub App', required: ['type', 'access_token', 'raw'] })
  .openapi('AppCredentials')

const JwtCredentialsSchema = z
  .strictObject({
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    issuerId: z.string().exactOptional(),
    privateKey: z.union([
      z
        .strictObject({ id: z.string(), secret: z.string() })
        .openapi({ required: ['id', 'secret'] }),
      z.string(),
    ]),
    privateKeyId: z.string().exactOptional(),
    token: z.string().exactOptional(),
    type: z.literal('JWT'),
  })
  .openapi({ title: 'JWT', required: ['type', 'privateKey'] })
  .openapi('JwtCredentials')

const OAuth2ClientCredentialsSchema = z
  .strictObject({
    client_id: z.string(),
    client_secret: z.string(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    token: z.string(),
    type: z.literal('OAUTH2_CC'),
  })
  .openapi({ title: 'OAuth2 Client', required: ['client_id', 'client_secret', 'token', 'type'] })
  .openapi('OAuth2ClientCredentials')

const OAuth2ClientCredentialsWithRawSchema = OAuth2ClientCredentialsSchema.and(
  z.strictObject({ raw: z.looseObject({}) }).openapi({ required: ['raw'] }),
)
  .openapi({ title: 'OAuth2 Client' })
  .openapi('OAuth2ClientCredentialsWithRaw')

const AppStoreCredentialsSchema = z
  .strictObject({
    access_token: z.string(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    private_key: z.string(),
    type: z.literal('APP_STORE').exactOptional(),
  })
  .openapi({ title: 'App Store', required: ['access_token', 'private_key'] })
  .openapi('AppStoreCredentials')

const AppStoreCredentialsWithRawSchema = AppStoreCredentialsSchema.and(
  z.strictObject({ raw: z.looseObject({}) }).openapi({ required: ['raw'] }),
)
  .openapi({ title: 'App Store' })
  .openapi('AppStoreCredentialsWithRaw')

const UnauthCredentialsSchema = z
  .strictObject({})
  .openapi({ title: 'Unauthenticated' })
  .openapi('UnauthCredentials')

const CustomCredentialsSchema = z
  .strictObject({ raw: z.looseObject({}), type: z.literal('CUSTOM') })
  .openapi({ title: 'Custom', required: ['raw', 'type'] })
  .openapi('CustomCredentials')

const TbaCredentialsSchema = z
  .strictObject({
    config_override: z
      .strictObject({
        client_id: z.string().exactOptional(),
        client_secret: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
    token_id: z.string(),
    token_secret: z.string(),
    type: z.literal('TBA'),
  })
  .openapi({ title: 'TBA', required: ['type', 'token_id', 'token_secret', 'config_override'] })
  .openapi('TbaCredentials')

const BillCredentialsSchema = z
  .strictObject({
    dev_key: z.string(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    organization_id: z.string(),
    password: z.string(),
    session_id: z.string().exactOptional(),
    type: z.literal('BILL'),
    user_id: z.string().exactOptional(),
    username: z.string(),
  })
  .openapi({
    title: 'Bill',
    required: ['dev_key', 'organization_id', 'password', 'raw', 'type', 'username'],
  })
  .openapi('BillCredentials')

const BillCredentialsWithRawSchema = BillCredentialsSchema.and(
  z.strictObject({ raw: z.looseObject({}) }).openapi({ required: ['raw'] }),
)
  .openapi({ title: 'Bill' })
  .openapi('BillCredentialsWithRaw')

const TwoStepCredentialsSchema = z
  .strictObject({
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    raw: z.looseObject({}),
    token: z.string().exactOptional(),
    type: z.literal('TWO_STEP'),
  })
  .openapi({ title: 'Two Step', required: ['raw', 'type'] })
  .openapi('TwoStepCredentials')

const SignatureCredentialsSchema = z
  .strictObject({
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    password: z.string(),
    token: z.string().exactOptional(),
    type: z.literal('SIGNATURE'),
    username: z.string(),
  })
  .openapi({ title: 'Signature', required: ['type', 'username', 'password'] })
  .openapi('SignatureCredentials')

const AllAuthCredentialsSchema = z
  .union([
    OAuth1CredentialsWithRawSchema,
    OAuth2CredentialsWithRawSchema,
    BasicApiCredentialsSchema,
    ApiKeyCredentialsSchema,
    AppCredentialsSchema,
    JwtCredentialsSchema,
    OAuth2ClientCredentialsWithRawSchema,
    AppStoreCredentialsWithRawSchema,
    UnauthCredentialsSchema,
    CustomCredentialsSchema,
    TbaCredentialsSchema,
    BillCredentialsWithRawSchema,
    TwoStepCredentialsSchema,
    SignatureCredentialsSchema,
  ])
  .openapi('AllAuthCredentials')

const UnauthCredentialsWithTypeSchema = z
  .strictObject({ type: z.literal('NONE') })
  .openapi({ title: 'Unauthenticated', required: ['type'] })
  .openapi('UnauthCredentialsWithType')

const ConnectionEndUserSchema = z
  .object({
    id: z.string().openapi({ description: 'Uniquely identifies the end user.', deprecated: true }),
    email: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ deprecated: true }),
    display_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ deprecated: true }),
    tags: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Tags associated with the end user. Only accepts strings values, up to 64 keys.',
        deprecated: true,
      }),
    organization: z
      .union([
        z
          .object({
            id: z
              .string()
              .openapi({
                description: 'Uniquely identifies the organization the end user belongs to',
              }),
            display_name: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id'] }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ deprecated: true }),
  })
  .openapi({ deprecated: true, required: ['id'] })
  .openapi('ConnectionEndUser')

const ConnectionErrorSchema = z
  .object({
    type: z.enum(['auth', 'sync']).openapi({ example: 'auth' }),
    log_id: z.string().openapi({ example: 'VrnbtykXJFckCm3HP93t' }),
  })
  .openapi({ required: ['type', 'log_id'] })
  .openapi('ConnectionError')

const ConnectionFullSchema = z
  .object({
    id: z.int(),
    connection_id: z.string(),
    provider_config_key: z.string(),
    provider: z.string(),
    errors: z.array(ConnectionErrorSchema),
    end_user: z
      .union([ConnectionEndUserSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ deprecated: true }),
    metadata: z.looseObject({}),
    connection_config: z.looseObject({}),
    tags: TagsSchema,
    created_at: z.string(),
    updated_at: z.string(),
    last_fetched_at: z.string(),
    credentials: AllAuthCredentialsSchema,
  })
  .openapi({
    required: [
      'id',
      'connection_id',
      'provider_config_key',
      'provider',
      'errors',
      'metadata',
      'connection_config',
      'tags',
      'created_at',
      'updated_at',
      'last_fetched_at',
      'credentials',
    ],
  })
  .openapi('ConnectionFull')

const NangoModelFieldSchema: z.ZodType<NangoModelFieldType> = z
  .lazy(() =>
    z
      .strictObject({
        array: z.boolean().exactOptional(),
        dynamic: z.boolean().exactOptional(),
        model: z.boolean().exactOptional(),
        name: z.string(),
        optional: z.boolean().exactOptional(),
        tsType: z.boolean().exactOptional(),
        union: z.boolean().exactOptional(),
        value: z.union([
          z.string(),
          z.number(),
          z.boolean(),
          z.unknown().superRefine((val, ctx) => {
            if (Array.isArray(val)) {
              {
                const Schema = NangoModelFieldSchema
                for (let i = 0; i < val.length; i++) {
                  if (!Schema.safeParse(val[i]).success) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              }
            }
          }),
        ]),
      })
      .openapi({ required: ['name', 'value'] }),
  )
  .openapi('NangoModelField')

const NangoModelSchema = z
  .strictObject({
    fields: z.array(NangoModelFieldSchema),
    isAnon: z.boolean().exactOptional(),
    name: z.string(),
  })
  .openapi({ required: ['name', 'fields'] })
  .openapi('NangoModel')

const IntegrationNangoManagedCredentialsInputSchema = z
  .strictObject({ type: z.literal('NANGO_MANAGED') })
  .openapi({
    description:
      "Uses a Nango-managed developer app instead of your own credentials. Only available when creating an integration for an `OAUTH1`, `OAUTH2`, or `APP` provider that Nango has a managed app for. Can't be combined with `integration_config` or `custom`, and the credentials can't be edited afterwards.\n",
    required: ['type'],
  })
  .openapi('IntegrationNangoManagedCredentialsInput')

const IntegrationCredentialsInputSchema = z
  .xor([
    z
      .strictObject({
        type: z.enum(['OAUTH1', 'OAUTH2', 'TBA']),
        client_id: z.string().min(1).max(255).exactOptional(),
        client_secret: z.string().min(1).exactOptional(),
        scopes: z
          .string()
          .regex(/^(?:[0-9a-zA-Z:\/_.*-]+(,[0-9a-zA-Z:\/_.*-]+)*)?$/)
          .exactOptional(),
        webhook_secret: z.string().max(255).exactOptional(),
      })
      .openapi({ required: ['type'] }),
    z
      .strictObject({
        type: z.literal('APP'),
        app_id: z.string().min(1).max(255).exactOptional(),
        app_link: z.string().min(1).exactOptional(),
        private_key: z
          .string()
          .regex(/^-----BEGIN RSA PRIVATE KEY----[\s\S]*-----END RSA PRIVATE KEY-----$/)
          .exactOptional(),
      })
      .openapi({ required: ['type'] }),
    z
      .strictObject({
        type: z.literal('CUSTOM'),
        client_id: z.string().min(1).max(255).exactOptional(),
        client_secret: z.string().min(1).exactOptional(),
        app_id: z.string().min(1).max(255).exactOptional(),
        app_link: z.string().min(1).exactOptional(),
        private_key: z
          .string()
          .regex(/^-----BEGIN RSA PRIVATE KEY----[\s\S]*-----END RSA PRIVATE KEY-----$/)
          .exactOptional(),
      })
      .openapi({ required: ['type'] }),
    z
      .strictObject({
        type: z.literal('MCP_OAUTH2_GENERIC'),
        client_name: z.string().min(1).max(255).exactOptional(),
        client_uri: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({ description: 'A URL, or an empty string.' }),
        client_logo_uri: z.url().max(255).exactOptional(),
      })
      .openapi({ required: ['type'] }),
    z
      .strictObject({
        type: z.literal('MCP_OAUTH2'),
        client_id: z.string().min(1).max(255).exactOptional(),
        client_secret: z.string().min(1).exactOptional(),
        scopes: z
          .string()
          .regex(/^(?:[0-9a-zA-Z:\/_.*-]+([, ]+[0-9a-zA-Z:\/_.*-]+)*)?$/)
          .exactOptional(),
      })
      .openapi({ required: ['type'] }),
  ])
  .openapi({
    description:
      'Integration credentials schema accepted in create/update request bodies. Only `type` is required: developer app credentials can be omitted at creation and supplied later, either with an update request or per connection at connection time. Fields left out of an update are kept as-is rather than cleared. MCP_OAUTH2 is the exception — static creation requires both client_id and client_secret, while dynamic and CIMD providers reject those fields because Nango manages them. Optional fields must not be null.\n',
  })
  .openapi('IntegrationCredentialsInput')

const BadRequestResponse = {
  description: 'Bad request',
  content: { 'application/json': { schema: StdErrorSchema } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: StdErrorSchema } },
}

const NotFoundResponse = {
  description: 'Not Found',
  content: { 'application/json': { schema: StdErrorSchema } },
}

const ForbiddenResponse = {
  description: 'Forbidden',
  content: { 'application/json': { schema: StdErrorSchema } },
}

const ServerErrorResponse = {
  description: 'Server error',
  content: { 'application/json': { schema: StdErrorSchema } },
}

const ServiceUnavailableResponse = {
  description: 'Service unavailable',
  content: { 'application/json': { schema: StdErrorSchema } },
}

const GatewayTimeoutResponse = {
  description: 'Gateway timeout',
  content: { 'application/json': { schema: StdErrorSchema } },
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'An Environment API key from your Nango environment, or an Account API key for account-level endpoints.',
}

export const getProvidersRoute = createRoute({
  method: 'get',
  path: '/providers',
  summary: 'List all providers',
  description: 'Returns a list of all available providers',
  responses: {
    200: {
      description: 'Successfully returned a list of available providers',
      content: {
        'application/json': {
          schema: z.object({ data: z.array(ProviderSchema) }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const getProvidersProviderRoute = createRoute({
  method: 'get',
  path: '/providers/{provider}',
  summary: 'Get a provider',
  description: 'Returns a specific provider',
  request: {
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: {
            name: 'provider',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The provider name',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned a specific provider',
      content: {
        'application/json': {
          schema: z.object({ data: ProviderSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const getProvidersProviderTemplatesRoute = createRoute({
  method: 'get',
  path: '/providers/{provider}/templates',
  summary: 'List provider templates',
  description:
    'Returns the template functions available in the catalog for a provider. Requires a valid API key (no specific scope).',
  request: {
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: {
            name: 'provider',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The provider name.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully returned the provider's template functions",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProviderTemplateFunctionSchema) })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const getIntegrationsRoute = createRoute({
  method: 'get',
  path: '/integrations',
  summary: 'List integrations',
  description: 'Returns a list of integrations',
  responses: {
    200: {
      description: 'Successfully returned an integration',
      content: {
        'application/json': {
          schema: z.object({ data: z.array(IntegrationSchema) }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postIntegrationsRoute = createRoute({
  method: 'post',
  path: '/integrations',
  summary: 'Create an integration',
  description: 'Create an integration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              unique_key: z
                .string()
                .openapi({
                  description:
                    'A unique integration ID, which you will use in the other API calls to reference this integration.',
                }),
              provider: z.string().openapi({ description: 'The provider unique name.' }),
              display_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The integration display name.' }),
              forward_webhooks: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to forward webhooks received for this integration. Defaults to true.',
                }),
              credentials: z
                .xor([
                  IntegrationCredentialsInputSchema,
                  IntegrationNangoManagedCredentialsInputSchema,
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Developer app credentials for the integration. Omit them to create the integration without credentials and provide them later, either with an update request or per connection at connection time. Set `type` to `NANGO_MANAGED` to use a Nango-managed developer app instead.\n',
                }),
              integration_config: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Provider-specific configuration for providers that declare an `integration_config` schema (e.g. `private-api-generic`, `aws-sigv4`). Keys and required fields depend on the provider; values are validated against the provider schema.\n',
                }),
              custom: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Free-form key-value settings stored on the integration, for providers without an `integration_config` schema. Rejected for providers that declare one; use `integration_config` instead.\n',
                }),
            })
            .openapi({ required: ['unique_key', 'provider'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created an integration',
      content: {
        'application/json': {
          schema: z.object({ data: IntegrationSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const postIntegrationsQuickstartRoute = createRoute({
  method: 'post',
  path: '/integrations/quickstart',
  summary: 'Create a quickstart integration',
  description:
    'Deprecated: use `POST /integrations` with `credentials: { "type": "NANGO_MANAGED" }` instead. Creates an integration that uses a Nango-managed OAuth app for providers that require a developer app. Returns a 400 error if no Nango-managed app is configured for the provider.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              unique_key: z
                .string()
                .openapi({
                  description:
                    'A unique integration ID, which you will use in the other API calls to reference this integration.',
                }),
              provider: z.string().openapi({ description: 'The provider unique name.' }),
              display_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The integration display name.' }),
              forward_webhooks: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether to forward webhooks for this integration.' }),
            })
            .openapi({ required: ['unique_key', 'provider'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created an integration',
      content: {
        'application/json': {
          schema: z.object({ data: IntegrationSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
  deprecated: true,
})

export const getIntegrationsUniqueKeyRoute = createRoute({
  method: 'get',
  path: '/integrations/{uniqueKey}',
  summary: 'Get an integration',
  description: 'Returns a specific integration',
  request: {
    params: z.object({
      uniqueKey: z
        .string()
        .openapi({
          param: {
            name: 'uniqueKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID (unique_key) that you created in Nango.',
          },
        }),
    }),
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['webhook', 'credentials'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'include',
            in: 'query',
            schema: { type: 'array', items: { type: 'string', enum: ['webhook', 'credentials'] } },
            description: 'Include additional sensitive data',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned an integration',
      content: {
        'application/json': {
          schema: z.object({ data: IntegrationFullSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const deleteIntegrationsUniqueKeyRoute = createRoute({
  method: 'delete',
  path: '/integrations/{uniqueKey}',
  summary: 'Delete an integration',
  description: 'Deletes a specific integration.',
  request: {
    params: z.object({
      uniqueKey: z
        .string()
        .openapi({
          param: {
            name: 'uniqueKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID (unique_key) that you created in Nango.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted an integration',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean() }).openapi({ required: ['success'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const patchIntegrationsUniqueKeyRoute = createRoute({
  method: 'patch',
  path: '/integrations/{uniqueKey}',
  summary: 'Edit an integration',
  description: 'Edit an integration',
  request: {
    params: z.object({
      uniqueKey: z
        .string()
        .openapi({
          param: {
            name: 'uniqueKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID (unique_key) that you created in Nango.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              unique_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique integration ID, which you will use in the other API calls to reference this integration.',
                }),
              display_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The integration display name.' }),
              forward_webhooks: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether to forward webhooks received for this integration.',
                }),
              credentials: IntegrationCredentialsInputSchema.exactOptional().openapi({
                description:
                  'Developer app credentials for the integration. Only the fields you pass are updated; the ones you leave out keep their current value.\n',
              }),
              integration_config: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Provider-specific configuration for providers that declare an `integration_config` schema (e.g. `private-api-generic`, `aws-sigv4`). Only the fields you pass are updated.\n',
                }),
              custom: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Free-form key-value settings stored on the integration, for providers without an `integration_config` schema. Merged with existing values. Rejected for providers that declare one; use `integration_config` instead.\n',
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
      description: 'Successfully updated an integration',
      content: {
        'application/json': {
          schema: z.object({ data: IntegrationSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const getIntegrationsUniqueKeyFunctionsRoute = createRoute({
  method: 'get',
  path: '/integrations/{uniqueKey}/functions',
  summary: 'List functions',
  description:
    'Returns the functions available to an integration, including Nango catalog tools when available. Requires an API key with the `environment:functions:list` scope.',
  request: {
    params: z.object({
      uniqueKey: z
        .string()
        .openapi({
          param: {
            name: 'uniqueKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID (unique_key) that you created in Nango.',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['sync', 'on-event', 'tool'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['sync', 'on-event', 'tool'] },
            description: 'Filter by function type.',
          },
        }),
      search: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 255 },
            description: 'Case-insensitive filter on the function name.',
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0 },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully returned the integration's functions",
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ListedNangoFunctionSchema),
              pagination: z
                .object({ total: z.int(), page: z.int(), limit: z.int() })
                .openapi({ required: ['total', 'page', 'limit'] }),
            })
            .openapi({ required: ['data', 'pagination'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getIntegrationsUniqueKeyFunctionsNameRoute = createRoute({
  method: 'get',
  path: '/integrations/{uniqueKey}/functions/{name}',
  summary: 'Get a function',
  description:
    'Returns a single function available to an integration, including HTTP-triggered tools and Nango catalog tools. Use the type filter to select a function type. Requires an API key with the `environment:functions:read` scope.',
  request: {
    params: z.object({
      uniqueKey: z
        .string()
        .openapi({
          param: {
            name: 'uniqueKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID (unique_key) that you created in Nango.',
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the function.',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['sync', 'on-event', 'tool'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['sync', 'on-event', 'tool'] },
            description:
              'Filter by function type. When omitted and several functions share the name, tools are returned first, then on-event and sync functions.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the function',
      content: {
        'application/json': {
          schema: z.object({ data: ListedNangoFunctionSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteIntegrationsUniqueKeyFunctionsNameRoute = createRoute({
  method: 'delete',
  path: '/integrations/{uniqueKey}/functions/{name}',
  summary: 'Delete a function',
  description:
    'Deletes a deployed function and enqueues its async teardown. Supports standalone native functions, tools, syncs, and deprecated actions. Functions managed by `nango deploy` (repo source) and catalog functions cannot be deleted through this endpoint. Requires an API key with the `environment:functions:delete` scope.',
  request: {
    params: z.object({
      uniqueKey: z
        .string()
        .openapi({
          param: {
            name: 'uniqueKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID (unique_key) that you created in Nango.',
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the function.',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['action', 'sync', 'tool', 'function'])
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['action', 'sync', 'tool', 'function'] },
            description: 'Required to disambiguate functions that share a name.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Function deletion accepted',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.object({ success: z.boolean() }).openapi({ required: ['success'] }) })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: {
      description:
        'Invalid request, or the function is managed by `nango deploy` or the tools catalog.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z.enum(['function_managed_by_deploy', 'invalid_request']).exactOptional(),
                  message: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getIntegrationsUniqueKeyFunctionsNameCodeRoute = createRoute({
  method: 'get',
  path: '/integrations/{uniqueKey}/functions/{name}/code',
  summary: "Get a function's source code",
  description:
    'Returns the TypeScript source code of a function for a given integration. Requires an API key with the `environment:functions:read` scope.',
  request: {
    params: z.object({
      uniqueKey: z
        .string()
        .openapi({
          param: {
            name: 'uniqueKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID (unique_key) that you created in Nango.',
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the function.',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['sync', 'on-event', 'tool'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['sync', 'on-event', 'tool'] },
            description:
              'Filter by function type. When omitted and several functions share the name, tools are returned first, then on-event and sync functions.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the function source code',
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum(['sync', 'action', 'on-event', 'tool'])
                .openapi({ description: 'The function type. `action` is deprecated.' }),
              code: z
                .string()
                .openapi({ description: 'The TypeScript source code of the function.' }),
            })
            .openapi({ required: ['type', 'code'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getConnectionRoute = createRoute({
  method: 'get',
  path: '/connection',
  summary: 'List connections (deprecated)',
  description:
    'Returns a list of connections without credentials. This endpoint is deprecated, use the /connections endpoint instead.',
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
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['tags']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          connectionId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'connectionId',
                in: 'query',
                schema: { type: 'string' },
                description:
                  'Will exactly match a given connectionId. Can return multiple connections with the same ID across integrations',
                required: false,
              },
            }),
          search: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'search',
                in: 'query',
                schema: { type: 'string' },
                description: 'Will partially match connection IDs or end user profiles.',
                required: false,
              },
            }),
          endUserId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'endUserId',
                in: 'query',
                deprecated: true,
                schema: { type: 'string' },
                description:
                  'Deprecated. Prefer filtering connections by tag (e.g. `tags[end_user_id]=...`).',
                required: false,
              },
            }),
          endUserOrganizationId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'endUserOrganizationId',
                in: 'query',
                deprecated: true,
                schema: { type: 'string' },
                description:
                  'Deprecated. Prefer filtering connections by tag (e.g. `tags[organization_id]=...`).',
                required: false,
              },
            }),
          tags: TagsSchema.openapi({
            param: {
              name: 'tags',
              in: 'query',
              description:
                'Filter the list of connections based on connection tags. All provided tags must match.',
              style: 'deepObject',
              explode: true,
              schema: { $ref: '#/components/schemas/Tags' },
              required: false,
            },
          }).exactOptional(),
          limit: z
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
                name: 'limit',
                in: 'query',
                schema: { type: 'integer' },
                description: 'Limit the number of connections returned',
                required: false,
              },
            }),
          page: z
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
                name: 'page',
                in: 'query',
                schema: { type: 'integer' },
                description: 'Page number for paginated results',
                required: false,
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Successfully returned a list of connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connections: z.array(
                z
                  .object({
                    id: z
                      .int()
                      .openapi({ description: 'The internal Nango ID used for the connection.' }),
                    connection_id: z
                      .string()
                      .openapi({ description: 'The connection ID used to create the connection.' }),
                    provider: z.string().openapi({ description: 'The Nango API Configuration.' }),
                    provider_config_key: z
                      .string()
                      .openapi({
                        description:
                          'The integration ID used to create the connection (aka Unique Key, Provider Config Key).',
                      }),
                    created: z.string().openapi({ description: 'Connection creation date.' }),
                    metadata: z
                      .union([z.looseObject({}), z.null().nullable()])
                      .openapi({ description: 'Custom metadata attached to the connection' }),
                    tags: TagsSchema,
                    errors: z
                      .array(ConnectionErrorSchema)
                      .openapi({
                        description:
                          'List of connection errors. Ex:\n- Connection credentials are invalid (type=auth)\n- Last sync for the connection has failed (type=sync)\n',
                      }),
                    end_user: z
                      .union([ConnectionEndUserSchema, z.null().nullable()])
                      .exactOptional()
                      .openapi({ deprecated: true }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'connection_id',
                      'provider',
                      'provider_config_key',
                      'created',
                      'metadata',
                      'tags',
                      'errors',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['connections'] }),
        },
      },
    },
  },
})

export const postConnectionRoute = createRoute({
  method: 'post',
  path: '/connection',
  summary: 'Add a connection (deprecated)',
  description:
    'Adds a connection for which you already have credentials. This endpoint is deprecated, use the /connections endpoint instead.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The connection ID used to create the connection.' }),
              provider_config_key: z
                .string()
                .openapi({ description: 'The integration ID that you created on Nango.' }),
              access_token: z
                .string()
                .exactOptional()
                .openapi({ description: '(OAuth 2, required) Existing access token.' }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({
                  description: '(OAuth 2, optional) Pass the refresh token if you have it.',
                }),
              expires_at: z.iso
                .date()
                .exactOptional()
                .openapi({ description: '(OAuth 2, optional) Safer and preferred.' }),
              expires_in: z
                .int()
                .exactOptional()
                .openapi({ description: '(OAuth 2, optional) In seconds.' }),
              no_expiration: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "(OAuth2, optional) If the provider gives access tokens that don't expire, pass in `true` to avoid an import validation error.",
                }),
              oauth_client_id_override: z
                .string()
                .exactOptional()
                .openapi({
                  description: "(OAuth2, optional) Override the integration's OAuth client id",
                }),
              oauth_client_secret_override: z
                .string()
                .exactOptional()
                .openapi({
                  description: "(OAuth2, optional) Override the integration's OAuth client secret",
                }),
              oauth_token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '(OAuth 1, required) The client token to be attached to the connection.',
                }),
              oauth_token_secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '(OAuth 1, required) The client token secret to be attached to the connection.',
                }),
              metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    '(OAuth, required for some APIs) Metadata to be attached to the connection.',
                }),
              connection_config: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    '(OAuth, required for some APIs) Additional configuration to be attached to the connection.',
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description: '(Basic, required) username to be attached to the connection.',
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description: '(Basic, required) password to be attached to the connection.',
                }),
              api_key: z
                .string()
                .exactOptional()
                .openapi({
                  description: '(API Key, required) API key to be attached to the connection.',
                }),
            })
            .openapi({ required: ['provider_config_key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully created an integrations' },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getConnectionConnectionIdRoute = createRoute({
  method: 'get',
  path: '/connection/{connectionId}',
  summary: 'Get a connection (deprecated)',
  description:
    'Returns a specific connection with credentials. This endpoint is deprecated, use the /connections/{connectionId} endpoint instead.',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
    }),
    query: z.object({
      provider_config_key: z
        .string()
        .openapi({
          param: {
            name: 'provider_config_key',
            in: 'query',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
      force_refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force_refresh',
            in: 'query',
            description:
              'If true, Nango will attempt to refresh the access access token regardless of its expiration status (false by default).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      refresh_token: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'refresh_token',
            in: 'query',
            description:
              'If true, return the refresh token as part of the response (false by default).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned a connection',
      content: { 'application/json': { schema: ConnectionFullSchema } },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Unknown Connection',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    424: {
      description: 'Connection refresh exhausted',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z.string().exactOptional().openapi({ description: 'The error code' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'A human-readable error message' }),
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

export const deleteConnectionConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/connection/{connectionId}',
  summary: 'Delete a connection (deprecated)',
  description:
    'Deletes a specific connection. This endpoint is deprecated, use the /connections/{connectionId} endpoint instead.',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
    }),
    query: z.object({
      provider_config_key: z
        .string()
        .openapi({
          param: {
            name: 'provider_config_key',
            in: 'query',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted an connection',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Unknown connection',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postConnectionMetadataRoute = createRoute({
  method: 'post',
  path: '/connection/metadata',
  summary: 'Set connection metadata (deprecated)',
  description:
    'Set custom metadata for the connection or connections. If updating multiple connections pass in an array of connection ids instead of a string. This endpoint is deprecated, use the /connections/metadata endpoint instead.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z.xor([
                z
                  .string()
                  .openapi({
                    example: 'connection-123',
                    description: 'The connection ID used to set the metadata on.',
                  }),
                z
                  .array(z.string().openapi({ example: 'connection-123' }))
                  .openapi({
                    description:
                      'The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                  }),
              ]),
              provider_config_key: z
                .string()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}),
            })
            .openapi({ required: ['metadata', 'connection_id', 'provider_config_key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully set the metadata for the connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z
                .xor([
                  z
                    .string()
                    .openapi({
                      example: 'connection-123',
                      description:
                        'The connection ID used to set the metadata on. Returns an array of connection ids if an array is passed in.',
                    }),
                  z
                    .array(z.string().openapi({ example: 'connection-123' }))
                    .openapi({
                      description:
                        'The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                    }),
                ])
                .exactOptional(),
              provider_config_key: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const patchConnectionMetadataRoute = createRoute({
  method: 'patch',
  path: '/connection/metadata',
  summary: 'Edit connection metadata (deprecated)',
  description:
    'Edit custom metadata for the connection or connections (only overrides specified properties, not the entire metadata). If updating multiple connections pass in an array of connection ids instead of a string. This endpoint is deprecated, use the /connections/metadata endpoint instead.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z.xor([
                z
                  .string()
                  .openapi({
                    example: 'connection-123',
                    description:
                      'The connection ID used to update the metadata on. Accepts an array of connection ids as well',
                  }),
                z
                  .array(z.string().openapi({ example: 'connection-123' }))
                  .openapi({
                    description:
                      'The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                  }),
              ]),
              provider_config_key: z
                .string()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}),
            })
            .openapi({ required: ['metadata', 'connection_id', 'provider_config_key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the metadata for the connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z
                .xor([
                  z
                    .string()
                    .openapi({
                      example: 'connection-123',
                      description:
                        'The connection ID used to update the metadata on. Returns an array of connection ids if an array is passed in.',
                    }),
                  z
                    .array(z.string().openapi({ example: 'connection-123' }))
                    .openapi({
                      description:
                        'The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                    }),
                ])
                .exactOptional(),
              provider_config_key: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
  },
})

export const postConnectionConnectionIdMetadataRoute = createRoute({
  method: 'post',
  path: '/connection/{connectionId}/metadata',
  summary: 'Set connection metadata (deprecated)',
  description: 'Set custom metadata for the connection.',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
    }),
    headers: z.object({
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            name: 'Provider-Config-Key',
            in: 'header',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.looseObject({}) } }, required: true },
  },
  responses: {
    201: { description: 'Successfully created an integrations' },
    400: BadRequestResponse,
  },
  deprecated: true,
})

export const patchConnectionConnectionIdMetadataRoute = createRoute({
  method: 'patch',
  path: '/connection/{connectionId}/metadata',
  summary: 'Edit connection metadata (deprecated)',
  description:
    'Edit custom metadata for the connection (only overrides specified properties, not the entire metadata).',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
    }),
    headers: z.object({
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            name: 'Provider-Config-Key',
            in: 'header',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.looseObject({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully updated the metadata',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    400: BadRequestResponse,
  },
  deprecated: true,
})

export const getConnectionsRoute = createRoute({
  method: 'get',
  path: '/connections',
  summary: 'List connections',
  description: 'Returns a list of connections without credentials',
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
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['tags']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          connectionId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'connectionId',
                in: 'query',
                schema: { type: 'string' },
                description:
                  'Will exactly match a given connectionId. Can return multiple connections with the same ID across integrations',
                required: false,
              },
            }),
          search: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'search',
                in: 'query',
                deprecated: true,
                schema: { type: 'string' },
                description:
                  'Deprecated. No direct replacement for partial matching; prefer exact filtering via `connectionId` or connection tags (e.g. `tags[end_user_id]=...`).',
                required: false,
              },
            }),
          endUserId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'endUserId',
                in: 'query',
                deprecated: true,
                schema: { type: 'string' },
                description:
                  'Deprecated. Prefer filtering connections by tag (e.g. `tags[end_user_id]=...`).',
                required: false,
              },
            }),
          endUserOrganizationId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'endUserOrganizationId',
                in: 'query',
                deprecated: true,
                schema: { type: 'string' },
                description:
                  'Deprecated. Prefer filtering connections by tag (e.g. `tags[organization_id]=...`).',
                required: false,
              },
            }),
          tags: TagsSchema.openapi({
            param: {
              name: 'tags',
              in: 'query',
              description:
                'Filter the list of connections based on connection tags. All provided tags must match.',
              style: 'deepObject',
              explode: true,
              schema: { $ref: '#/components/schemas/Tags' },
              required: false,
            },
          }).exactOptional(),
          limit: z
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
                name: 'limit',
                in: 'query',
                schema: { type: 'integer' },
                description: 'Limit the number of connections returned',
                required: false,
              },
            }),
          page: z
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
                name: 'page',
                in: 'query',
                schema: { type: 'integer' },
                description: 'Page number for paginated results',
                required: false,
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Successfully returned a list of connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connections: z.array(
                z
                  .object({
                    id: z
                      .int()
                      .openapi({ description: 'The internal Nango ID used for the connection.' }),
                    connection_id: z
                      .string()
                      .openapi({ description: 'The connection ID used to create the connection.' }),
                    provider: z.string().openapi({ description: 'The Nango API Configuration.' }),
                    provider_config_key: z
                      .string()
                      .openapi({
                        description:
                          'The integration ID used to create the connection (aka Unique Key, Provider Config Key).',
                      }),
                    created: z.string().openapi({ description: 'Connection creation date.' }),
                    metadata: z
                      .union([z.looseObject({}), z.null().nullable()])
                      .openapi({ description: 'Custom metadata attached to the connection' }),
                    tags: TagsSchema,
                    errors: z
                      .array(ConnectionErrorSchema)
                      .openapi({
                        description:
                          'List of connection errors. Ex:\n- Connection credentials are invalid (type=auth)\n- Last sync for the connection has failed (type=sync)\n',
                      }),
                    end_user: z
                      .union([ConnectionEndUserSchema, z.null().nullable()])
                      .exactOptional()
                      .openapi({ deprecated: true }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'connection_id',
                      'provider',
                      'provider_config_key',
                      'created',
                      'metadata',
                      'tags',
                      'errors',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['connections'] }),
        },
      },
    },
    400: BadRequestResponse,
  },
})

export const postConnectionsRoute = createRoute({
  method: 'post',
  path: '/connections',
  summary: 'Upsert a connection',
  description: 'Upserts a connection for which you already have credentials.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_config_key: z
                .string()
                .openapi({ description: 'The integration ID that you created on Nango.' }),
              metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    '(OAuth, required for some APIs) Metadata to be attached to the connection.',
                }),
              connection_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The connection ID used to create the connection.' }),
              connection_config: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    '(OAuth, required for some APIs) Additional configuration to be attached to the connection.',
                }),
              credentials: z
                .union([
                  OAuth1CredentialsSchema,
                  OAuth2CredentialsSchema,
                  BasicApiCredentialsSchema,
                  ApiKeyCredentialsSchema,
                  OAuth2ClientCredentialsSchema,
                  UnauthCredentialsWithTypeSchema,
                  TbaCredentialsSchema,
                  z
                    .strictObject({
                      type: z.literal('APP'),
                      app_id: z.string(),
                      installation_id: z.string(),
                    })
                    .openapi({
                      title: 'GitHub App',
                      required: ['type', 'app_id', 'installation_id'],
                    }),
                ])
                .openapi({ description: 'The credentials to be attached to the connection.' }),
              tags: TagsSchema.exactOptional(),
              end_user: EndUserSchema.exactOptional().openapi({
                deprecated: true,
                description: 'Deprecated, use tags instead',
              }),
            })
            .openapi({ required: ['provider_config_key', 'credentials'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created an integrations',
      content: { 'application/json': { schema: ConnectionFullSchema } },
    },
    400: BadRequestResponse,
  },
})

export const getConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/connections/{connectionId}',
  summary: 'Get a connection',
  description: 'Returns a specific connection with credentials',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
    }),
    query: z.object({
      provider_config_key: z
        .string()
        .openapi({
          param: {
            name: 'provider_config_key',
            in: 'query',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
      force_refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force_refresh',
            in: 'query',
            description:
              'If true, Nango will attempt to refresh the access access token regardless of its expiration status (false by default).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      refresh_token: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'refresh_token',
            in: 'query',
            description:
              'If true, return the refresh token as part of the response (false by default).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      refresh_github_app_jwt_token: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'refresh_github_app_jwt_token',
            in: 'query',
            description:
              'If true, this will refresh the JWT token for GitHub App / Github App OAuth connections',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned a connection',
      content: { 'application/json': { schema: ConnectionFullSchema } },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
    424: {
      description: 'Connection refresh exhausted',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z.string().exactOptional().openapi({ description: 'The error code' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'A human-readable error message' }),
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

export const deleteConnectionsConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/connections/{connectionId}',
  summary: 'Delete a connection',
  description: 'Deletes a specific connection',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
    }),
    query: z.object({
      provider_config_key: z
        .string()
        .openapi({
          param: {
            name: 'provider_config_key',
            in: 'query',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted an connection',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const patchConnectionsConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/connections/{connectionId}',
  summary: 'Edit a connection',
  description: 'Edit a connection',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
    }),
    query: z.object({
      provider_config_key: z
        .string()
        .openapi({
          param: {
            name: 'provider_config_key',
            in: 'query',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: TagsSchema.exactOptional(),
              webhook_url_override: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Override the environment's webhook URLs for this connection. When set, this connection's webhooks are sent only to this URL. Pass an empty string to clear the override.\n",
                }),
              end_user: EndUserSchema.exactOptional().openapi({
                deprecated: true,
                description: 'Deprecated, use tags instead',
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
      description: 'Successfully updated the connection',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const postConnectionsMetadataRoute = createRoute({
  method: 'post',
  path: '/connections/metadata',
  summary: 'Set connection metadata',
  description:
    'Set custom metadata for the connection or connections. If updating multiple connections pass in an array of connection ids instead of a string.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z.xor([
                z
                  .string()
                  .openapi({
                    example: 'connection-123',
                    description: 'The connection ID used to set the metadata on.',
                  }),
                z
                  .array(z.string().openapi({ example: 'connection-123' }))
                  .openapi({
                    description:
                      'The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                  }),
              ]),
              provider_config_key: z
                .string()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}),
            })
            .openapi({ required: ['metadata', 'connection_id', 'provider_config_key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully set the metadata for the connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z
                .xor([
                  z
                    .string()
                    .openapi({
                      example: 'connection-123',
                      description:
                        'The connection ID used to set the metadata on. Returns an array of connection ids if an array is passed in.',
                    }),
                  z
                    .array(z.string().openapi({ example: 'connection-123' }))
                    .openapi({
                      description:
                        'The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                    }),
                ])
                .exactOptional(),
              provider_config_key: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const patchConnectionsMetadataRoute = createRoute({
  method: 'patch',
  path: '/connections/metadata',
  summary: 'Edit connection metadata',
  description:
    'Edit custom metadata for the connection or connections (only overrides specified properties, not the entire metadata). If updating multiple connections pass in an array of connection ids instead of a string.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z.xor([
                z
                  .string()
                  .openapi({
                    example: 'connection-123',
                    description:
                      'The connection ID used to update the metadata on. Accepts an array of connection ids as well',
                  }),
                z
                  .array(z.string().openapi({ example: 'connection-123' }))
                  .openapi({
                    description:
                      'The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                  }),
              ]),
              provider_config_key: z
                .string()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}),
            })
            .openapi({ required: ['metadata', 'connection_id', 'provider_config_key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the metadata for the connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connection_id: z
                .xor([
                  z
                    .string()
                    .openapi({
                      example: 'connection-123',
                      description:
                        'The connection ID used to update the metadata on. Returns an array of connection ids if an array is passed in.',
                    }),
                  z
                    .array(z.string().openapi({ example: 'connection-123' }))
                    .openapi({
                      description:
                        'The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.',
                    }),
                ])
                .exactOptional(),
              provider_config_key: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The integration ID used to create the connection (aka Unique Key).',
                }),
              metadata: z.looseObject({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getScriptsConfigRoute = createRoute({
  method: 'get',
  path: '/scripts/config',
  summary: 'Get scripts configuration',
  description: 'Return the configuration for all integration functions.',
  request: {
    query: z.object({
      format: z
        .enum(['nango', 'openai'])
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['nango', 'openai'] },
            description: 'The output type of the script configuration',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned integration functions config',
      content: {
        'application/json': {
          schema: z
            .object({
              providerConfigKey: z.string().exactOptional(),
              syncs: z
                .array(
                  z
                    .object({
                      id: z.number().exactOptional(),
                      name: z.string().exactOptional().openapi({ example: 'github-issues' }),
                      enabled: z.boolean().exactOptional(),
                      type: z.string().exactOptional().openapi({ example: 'sync' }),
                      json_schema: z.looseObject({}).exactOptional(),
                      runs: z.string().exactOptional().openapi({ example: 'every 30 minutes' }),
                      track_deletes: z.boolean().exactOptional(),
                      auto_start: z.boolean().exactOptional(),
                      last_deployed: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2024-02-01T09:09:03.502Z' }),
                      is_public: z.boolean().exactOptional(),
                      pre_built: z.boolean().exactOptional(),
                      version: z.string().exactOptional().openapi({ example: '0.0.3' }),
                      attributes: z.looseObject({}).exactOptional(),
                      input: z.looseObject({}).exactOptional(),
                      returns: z
                        .array(z.string().openapi({ example: 'GithubIssue' }))
                        .exactOptional(),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            "Fetches the Github issues from all a user's repositories.\nDetails: doesn't track deletes, metadata is not required.\n",
                        }),
                      scopes: z
                        .array(z.string().openapi({ example: 'public_repo' }))
                        .exactOptional(),
                      endpoints: z.array(z.looseObject({})).exactOptional(),
                      webhookSubscriptions: z.array(z.string()).exactOptional(),
                      models: z
                        .array(
                          z
                            .object({ name: z.string(), fields: z.array(z.any()).exactOptional() })
                            .openapi({ required: ['name'] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              actions: z
                .array(
                  z
                    .object({
                      id: z.number().exactOptional(),
                      name: z.string().exactOptional().openapi({ example: 'github-issues' }),
                      type: z.string().exactOptional().openapi({ example: 'action' }),
                      last_deployed: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2024-02-28T20:16:38.052Z' }),
                      is_public: z.boolean().exactOptional().openapi({ example: false }),
                      pre_built: z.boolean().exactOptional().openapi({ example: false }),
                      version: z.string().exactOptional().openapi({ example: '4' }),
                      attributes: z.looseObject({}).exactOptional(),
                      input: z.looseObject({}).exactOptional(),
                      returns: z.looseObject({}).exactOptional(),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            "Fetches the Github issues from all a user's repositories.\nDetails: doesn't track deletes, metadata is not required.\n",
                        }),
                      scopes: z
                        .array(z.string().openapi({ example: 'public_repo' }))
                        .exactOptional(),
                      endpoints: z.array(z.looseObject({})).exactOptional(),
                      models: z
                        .array(
                          z
                            .object({ name: z.string(), fields: z.array(z.any()).exactOptional() })
                            .openapi({ required: ['name'] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Deprecated action definitions. Use tools for new on-demand functions.',
                }),
              'on-events': z.array(z.string()).exactOptional(),
              provider: z.string().exactOptional().openapi({ example: 'github' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const postFunctionsCompileRoute = createRoute({
  method: 'post',
  path: '/functions/compile',
  summary: 'Compile a function',
  description: 'Compiles TypeScript function source code and returns the bundled JavaScript.',
  operationId: 'compileFunction',
  request: {
    body: {
      content: { 'application/json': { schema: FunctionCompileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully compiled the function.',
      content: { 'application/json': { schema: FunctionCompileResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
    503: ServiceUnavailableResponse,
    504: GatewayTimeoutResponse,
  },
})

export const postFunctionsDryrunsRoute = createRoute({
  method: 'post',
  path: '/functions/dryruns',
  summary: 'Dry run a function',
  description:
    'Starts an asynchronous dry run for TypeScript function source code against a connection without deploying it.',
  operationId: 'createFunctionDryrun',
  request: {
    body: {
      content: { 'application/json': { schema: FunctionDryrunRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successfully started the dry run.',
      content: { 'application/json': { schema: FunctionDryrunCreateResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
    503: ServiceUnavailableResponse,
    504: GatewayTimeoutResponse,
  },
})

export const getFunctionsDryrunsIdRoute = createRoute({
  method: 'get',
  path: '/functions/dryruns/{id}',
  summary: 'Get dry run results',
  description: 'Returns the status and result of an asynchronous function dry run.',
  operationId: 'getFunctionDryrun',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the dry run.',
      content: { 'application/json': { schema: FunctionDryrunResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postFunctionsDeploymentsRoute = createRoute({
  method: 'post',
  path: '/functions/deployments',
  summary: 'Create a function deployment',
  description:
    'Deploys a function to an existing integration. Use `type: function` to deploy submitted TypeScript\nsource code, or `type: template` to deploy a template from the provider catalog. Requires an API key with the\n`environment:deploy` scope.\n',
  operationId: 'createFunctionDeployment',
  request: {
    body: {
      content: { 'application/json': { schema: FunctionDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'Deployment record. `status` may be any of `waiting`, `running`, `success`, or `failed`. If it is not\n`success`, poll `GET /functions/deployments/{id}` for the final status and details.\n',
      content: { 'application/json': { schema: FunctionDeploymentResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: {
      description:
        'The template is already deployed, or the template name is ambiguous and `function_type` is required.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z.enum(['template_already_deployed', 'ambiguous_function']).exactOptional(),
                  message: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: ServerErrorResponse,
    503: ServiceUnavailableResponse,
    504: GatewayTimeoutResponse,
  },
})

export const getFunctionsDeploymentsIdRoute = createRoute({
  method: 'get',
  path: '/functions/deployments/{id}',
  summary: 'Get a function deployment',
  description: 'Returns the status and result of an asynchronous function deployment.',
  operationId: 'getFunctionDeployment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the deployment.',
      content: { 'application/json': { schema: FunctionDeploymentResultResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getRecordsRoute = createRoute({
  method: 'get',
  path: '/records',
  summary: 'Get synced records',
  description: 'Returns data synced with Nango Sync',
  request: {
    query: z.object({
      model: z
        .string()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description: 'The data model to fetch',
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'A marker used to fetch records modified after a specific point in time. If not provided, all records are returned. Each record includes a cursor value found in _nango_metadata.cursor. Save the cursor from the last record retrieved to track your sync progress. Use the cursor parameter together with the limit parameter to paginate through records. The cursor is more precise than modified_after, as it can differentiate between records with the same modification timestamp.\n',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description:
              'The maximum number of records to return. Defaults to 100. A response may contain fewer records than `limit` when records have a large size. Always check `next_cursor` and continue paginating until it is `null`.\n',
          },
        }),
      filter: z
        .enum(['added', 'updated', 'deleted'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['added', 'updated', 'deleted'] },
            description: 'Filter to only show results that have been added or updated or deleted.',
          },
        }),
      modified_after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'modified_after',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description:
              'A timestamp (e.g., 2023-05-31T11:46:13.390Z) used to fetch records modified after this date and time. If not provided, all records are returned. The modified_after parameter is less precise than cursor, as multiple records may share the same modification timestamp.',
          },
        }),
      delta: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'delta',
            in: 'query',
            required: false,
            deprecated: true,
            schema: { type: 'string' },
            description:
              'DEPRECATED (use modified_after) Timestamp, e.g. 2023-05-31T11:46:13.390Z. If passed, only records modified after this timestamp are returned, otherwise all records are returned.',
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            required: false,
            description:
              'An array of string containing a list of your records IDs. The list will be filtered to include only the records with a matching ID.',
            schema: { type: 'array', items: { type: 'string' }, maxItems: 100 },
          },
        }),
      variant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'variant',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'The variant of the model to fetch',
          },
        }),
    }),
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            name: 'Connection-Id',
            in: 'header',
            required: true,
            description: 'The connection ID used to create the connection.',
            schema: { type: 'string' },
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            name: 'Provider-Config-Key',
            in: 'header',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned records',
      content: {
        'application/json': {
          schema: z
            .object({
              records: z
                .array(
                  z
                    .object({
                      'your-properties': z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The data Nango synced in for you',
                          example:
                            'Your synced data, in the schema you (or Nango) defined in script',
                        }),
                      _nango_metadata: z
                        .object({
                          deleted_at: z
                            .union([z.iso.datetime({ offset: true }), z.null().nullable()])
                            .exactOptional()
                            .openapi({
                              description:
                                'The timestamp at which Nango detected the record as deleted',
                            }),
                          last_action: z
                            .enum(['ADDED', 'UPDATED', 'DELETED'])
                            .exactOptional()
                            .openapi({ description: 'The last action seen on this record' }),
                          first_seen_at: z.iso
                            .datetime({ offset: true })
                            .exactOptional()
                            .openapi({
                              description: 'The timestamp at which Nango first saw this record',
                              example: '2023-09-18T15:20:35.941305+00:00',
                            }),
                          last_modified_at: z.iso
                            .datetime({ offset: true })
                            .exactOptional()
                            .openapi({
                              description:
                                'The timestamp at which Nango last detected a change to this record',
                              example: '2023-09-18T15:20:35.941305+00:00',
                            }),
                          cursor: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The current cursor of the record. Use this to fetch records updated after this record',
                              example:
                                'MjAyNC0wMy0wNFQwNjo1OTo1MS40NzE0NDEtMDU6MDB8fDE1Y2NjODA1LTY0ZDUtNDk0MC1hN2UwLTQ1ZmM3MDQ5OTdhMQ==',
                            }),
                          pruned_at: z
                            .union([z.iso.datetime({ offset: true }), z.null().nullable()])
                            .exactOptional()
                            .openapi({
                              description:
                                'The timestamp at which the record payload was pruned (emptied)',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              next_cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The base64-encoded cursor for pagination',
                  example:
                    'MjAyMy0xMS0xN1QxMTo0NzoxNC40NDcrMDI6MDB8fDAzZTA1NzIxLWNiZmQtNGYxNS1iYTNhLWFlNjM2Y2MwNmEw==',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const patchRecordsPruneRoute = createRoute({
  method: 'patch',
  path: '/records/prune',
  summary: 'Prune records',
  description:
    'Prunes synced records for a given connection and model using cursor-based pagination.\n\n**What is pruning:**\nPruning empties the record payload while preserving the record metadata.\n\n**Cursor behavior:**\nRecords are pruned up to and including the specified cursor.',
  request: {
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            name: 'Connection-Id',
            in: 'header',
            required: true,
            description: 'The connection ID used to create the connection.',
            schema: { type: 'string' },
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            name: 'Provider-Config-Key',
            in: 'header',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              model: z.string().openapi({ description: 'The data model to prune records from' }),
              variant: z
                .string()
                .exactOptional()
                .openapi({ description: 'The variant of the model' }),
              until_cursor: z
                .string()
                .openapi({
                  description:
                    'Prune all records up to and including this cursor. Use the cursor value from _nango_metadata.cursor of the record you want to prune up to.',
                }),
              limit: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of records to prune in this request. Defaults to 1000.',
                }),
            })
            .openapi({ required: ['model', 'until_cursor'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully pruned records',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .int()
                .openapi({
                  description: 'The number of records pruned in this request',
                  example: 150,
                }),
              has_more: z
                .boolean()
                .openapi({
                  description:
                    'Indicates if there are potentially more records to prune.\n- `true`: There may be more records that need pruning\n- `false`: All records up to the cursor have been pruned',
                  example: true,
                }),
            })
            .openapi({ required: ['count', 'has_more'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const postSyncTriggerRoute = createRoute({
  method: 'post',
  path: '/sync/trigger',
  summary: 'Trigger a sync',
  description:
    'Triggers an additional, one-off execution of specified sync(s) (for a given connection or all applicable connections if no connection is specified).',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_config_key: z
                .string()
                .openapi({
                  description: 'The ID of the integration that you established within Nango.',
                }),
              connection_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the connection. If omitted, the syncs will be triggered for all relevant connections.',
                }),
              syncs: z.xor([
                z
                  .array(z.string().openapi({ description: 'Sync name', example: 'github-issues' }))
                  .openapi({
                    description:
                      'A list of sync names that you wish to pause. If empty, all syncs are triggered',
                  }),
                z
                  .array(
                    z
                      .object({
                        name: z.string().openapi({ description: 'The name of the sync' }),
                        variant: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The variant name' }),
                      })
                      .openapi({
                        required: ['name'],
                        example: { name: 'github-issues', variant: 'custom-variant' },
                      }),
                  )
                  .openapi({
                    description:
                      'A list of sync object (with a name and variant properties) that you wish to trigger. If empty, all syncs are triggered',
                  }),
              ]),
              opts: z
                .object({
                  reset: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, clears the checkpoint and lastSyncDate before triggering the sync, causing it to start fresh.',
                    }),
                  emptyCache: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, deletes all cached records associated with the sync before triggering. Must be used with reset=true.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Options for triggering the sync.', required: [] }),
            })
            .openapi({ required: ['provider_config_key', 'syncs'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully triggered the sync',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean() }).openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSyncStartRoute = createRoute({
  method: 'post',
  path: '/sync/start',
  summary: 'Start a sync',
  description:
    'Starts the schedule of specified sync(s) for a given connection or all applicable connections if no connection is specified. Upon starting the schedule, the sync will execute immediately and then continue to run at the specified frequency. If the schedule was already started, this will have no effect.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_config_key: z
                .string()
                .openapi({
                  description: 'The ID of the integration that you established within Nango.',
                }),
              connection_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the connection. If omitted, the syncs will be started for all relevant connections.',
                }),
              syncs: z.xor([
                z
                  .array(z.string().openapi({ description: 'Sync name', example: 'github-issues' }))
                  .openapi({
                    description:
                      'A list of sync names that you wish to start. If empty, all syncs are triggered',
                  }),
                z
                  .array(
                    z
                      .object({
                        name: z.string().openapi({ description: 'The name of the sync' }),
                        variant: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The variant name' }),
                      })
                      .openapi({
                        required: ['name'],
                        example: { name: 'github-issues', variant: 'custom-variant' },
                      }),
                  )
                  .openapi({
                    description:
                      'A list of sync object (with a name and variant properties) that you wish to start.',
                  }),
              ]),
            })
            .openapi({ required: ['provider_config_key', 'syncs'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully started the sync',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean() }).openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSyncPauseRoute = createRoute({
  method: 'post',
  path: '/sync/pause',
  summary: 'Pause a sync',
  description:
    'Pauses the schedule of specified sync(s) for a given connection or all applicable connections if no connection is specified.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_config_key: z
                .string()
                .openapi({
                  description: 'The ID of the integration that you established within Nango.',
                }),
              connection_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the connection. If omitted, the syncs will be paused for all relevant connections.',
                }),
              syncs: z.xor([
                z
                  .array(z.string().openapi({ description: 'Sync name', example: 'github-issues' }))
                  .openapi({
                    description:
                      'A list of sync names that you wish to pause. If empty, all syncs are triggered',
                  }),
                z
                  .array(
                    z
                      .object({
                        name: z.string().openapi({ description: 'The name of the sync' }),
                        variant: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The variant name' }),
                      })
                      .openapi({
                        required: ['name'],
                        example: { name: 'github-issues', variant: 'custom-variant' },
                      }),
                  )
                  .openapi({
                    description:
                      'A list of sync object (with a name and variant properties) that you wish to start.',
                  }),
              ]),
            })
            .openapi({ required: ['provider_config_key', 'syncs'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully paused the sync',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean() }).openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSyncStatusRoute = createRoute({
  method: 'get',
  path: '/sync/status',
  summary: 'Get sync status',
  description:
    'Get the status of specified sync(s) (for a given connection or all applicable connections if no connection is specified)',
  request: {
    query: z.object({
      provider_config_key: z
        .string()
        .openapi({
          param: {
            name: 'provider_config_key',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the integration you established within Nango',
          },
        }),
      syncs: z
        .string()
        .openapi({
          param: {
            name: 'syncs',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description:
              'The name of the syncs you want to fetch a status for, as a comma-separated list. Pass in "*" to return all syncs for the integration. For variants, use the format "syncName::variantName".',
          },
        }),
      connection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'connection_id',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'The ID of the connection. If omitted, all connections will be surfaced.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned a list of syncs and their status',
      content: {
        'application/json': {
          schema: z
            .object({
              syncs: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The unique identifier for the sync.' }),
                      connection_id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The ID of the connection' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The name of the sync.' }),
                      variant: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The variant of the sync.' }),
                      status: z
                        .enum(['RUNNING', 'PAUSED', 'STOPPED', 'SUCCESS', 'ERROR'])
                        .exactOptional()
                        .openapi({ description: 'The current status of the sync.' }),
                      type: z
                        .enum(['INCREMENTAL', 'INITIAL'])
                        .exactOptional()
                        .openapi({
                          deprecated: true,
                          description: 'The most recent sync type completed',
                        }),
                      finishedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'ISO string of the most recently completed sync' }),
                      nextScheduledSyncAt: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'ISO string of the next scheduled sync time' }),
                      frequency: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The execution frequency of the sync' }),
                      latestResult: z
                        .looseObject({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Additional information regarding the latest result of the sync. Contains a model name with added, updated and deleted records',
                        }),
                      recordCount: z
                        .looseObject({})
                        .exactOptional()
                        .openapi({
                          description: 'Total count of records for each model synced by the sync',
                        }),
                      checkpoint: z
                        .union([z.looseObject({}), z.null().nullable()])
                        .exactOptional()
                        .openapi({
                          description:
                            'Last checkpoint saved during sync execution. Null if no checkpoint exists.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const postSyncNameVariantVariantRoute = createRoute({
  method: 'post',
  path: '/sync/{name}/variant/{variant}',
  summary: 'Create sync variant',
  description: 'Creates a new sync variant for a specific connection',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the sync',
          },
        }),
      variant: z
        .string()
        .openapi({
          param: {
            name: 'variant',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the variant to create. Cannot be "base" (protected name).',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_config_key: z
                .string()
                .openapi({ description: 'The integration ID used when creating the connection' }),
              connection_id: z
                .string()
                .openapi({
                  description: 'The ID of the connection to create the sync variant for',
                }),
            })
            .openapi({ required: ['provider_config_key', 'connection_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created the sync variant',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({ description: 'The unique identifier for the created sync variant' }),
              name: z.string().openapi({ description: 'The name of the sync' }),
              variant: z.string().openapi({ description: 'The name of the variant' }),
            })
            .openapi({ required: ['id', 'name', 'variant'] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z
                    .enum([
                      'invalid_body',
                      'invalid_uri_params',
                      'invalid_query_params',
                      'invalid_variant',
                      'unknown_connection',
                      'unknown_provider_config',
                      'unknown_sync',
                      'sync_variant_already_exists',
                      'resource_capped',
                      'feature_disabled',
                    ])
                    .exactOptional(),
                  message: z.string().exactOptional(),
                  errors: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z.literal('failed_sync_variant_creation').exactOptional(),
                  message: z.string().exactOptional(),
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

export const deleteSyncNameVariantVariantRoute = createRoute({
  method: 'delete',
  path: '/sync/{name}/variant/{variant}',
  summary: 'Delete sync variant',
  description: 'Deletes a sync variant for a specific connection',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the sync',
          },
        }),
      variant: z
        .string()
        .openapi({
          param: {
            name: 'variant',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the variant to delete. Cannot be "base" (protected name).',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_config_key: z
                .string()
                .openapi({ description: 'The integration ID used when creating the connection' }),
              connection_id: z
                .string()
                .openapi({ description: 'The ID of the connection the sync variant belongs to' }),
            })
            .openapi({ required: ['provider_config_key', 'connection_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully deleted the sync variant',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z
                .boolean()
                .openapi({ description: 'Indicates if the deletion was successful' }),
            })
            .openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z
                    .enum([
                      'invalid_body',
                      'invalid_uri_params',
                      'invalid_query_params',
                      'invalid_variant',
                      'unknown_connection',
                    ])
                    .exactOptional(),
                  message: z.string().exactOptional(),
                  errors: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Sync variant not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({ code: z.literal('not_found').exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z.literal('failed_sync_variant_deletion').exactOptional(),
                  message: z.string().exactOptional(),
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

export const getActionActionIdRoute = createRoute({
  method: 'get',
  path: '/action/{actionId}',
  summary: 'Get action result (deprecated)',
  description:
    'Retrieves the result of an asynchronous action. See [Asynchronous action documentation](/guides/functions/action-functions#trigger-asynchronously) for more details.',
  request: {
    params: z.object({
      actionId: z
        .string()
        .openapi({
          param: {
            name: 'actionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'The ID of the asynchronous action (returned from triggering an action with X-Async header)',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The action has completed successfully (output cannot exceed 2MB)',
      content: {
        'application/json': {
          schema: z
            .object({
              'your-properties': z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The data returned by the action',
                  example: 'The data returned by the action',
                }),
            })
            .openapi({ description: 'The data returned by the action', required: [] }),
        },
      },
    },
    404: {
      description: 'No results. The action has not completed yet',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Action not completed yet' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'The action has completed with an error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z.string().exactOptional(),
                  code: z.string().exactOptional(),
                  payload: z.looseObject({}).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
})

export const putSyncUpdateConnectionFrequencyRoute = createRoute({
  method: 'put',
  path: '/sync/update-connection-frequency',
  summary: 'Update sync frequency',
  description:
    "Override a sync's default frequency for a specific connection, or revert to the default frequency.",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_config_key: z
                .string()
                .openapi({ description: 'The ID of the integration you established within Nango' }),
              connection_id: z.string().openapi({ description: 'The ID of the connection' }),
              sync_name: z
                .string()
                .openapi({ description: 'The name of the sync you want to update' }),
              sync_variant: z
                .string()
                .exactOptional()
                .openapi({ description: 'The variant of the sync you want to update' }),
              frequency: z
                .union([z.string(), z.null().nullable()])
                .openapi({
                  description:
                    "The frequency you want to set (ex: 'every hour'). Set null to revert to the default frequency. Uses the https://github.com/vercel/ms notations. Min frequency: 30 seconds.",
                }),
            })
            .openapi({
              required: ['provider_config_key', 'connection_id', 'sync_name', 'frequency'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the frequency',
      content: {
        'application/json': {
          schema: z
            .object({
              frequency: z
                .string()
                .exactOptional()
                .openapi({ description: 'The updated frequency value' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postConnectionsConnectionIdToolsNameCallsRoute = createRoute({
  method: 'post',
  path: '/connections/{connectionId}/tools/{name}/calls',
  summary: 'Call a tool',
  description:
    'Calls an enabled tool synchronously and returns its JSON output directly.\nRequires the `environment:tools:call` scope.\n',
  operationId: 'callTool',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID to execute the tool for.',
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The tool name on the integration.',
          },
        }),
    }),
    headers: z.object({
      'Provider-Config-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Provider-Config-Key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
            description:
              'Integration ID. Required when multiple integrations share the connection ID.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              input: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    "Input matching the tool's schema. Omit for tools that take no input.",
                }),
            })
            .openapi({ required: [] }),
          example: { input: { owner: 'NangoHQ', repo: 'interactive-demo', title: 'Bug report' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The tool's JSON output, returned directly without a data wrapper.",
      content: { 'application/json': { schema: z.any() } },
    },
    400: {
      description:
        'Invalid request, invalid tool input, invalid invocation, or ambiguous connection ID. Supply Provider-Config-Key to disambiguate.',
    },
    401: UnauthorizedResponse,
    403: { description: 'Missing permissions or function disabled during invocation.' },
    404: { description: 'Connection or enabled tool not found.' },
    500: { description: 'Tool execution failed or a server error occurred.' },
  },
})

export const postActionTriggerRoute = createRoute({
  method: 'post',
  path: '/action/trigger',
  summary: 'Trigger an action (deprecated)',
  description:
    'Legacy action execution. Use POST /connections/{connectionId}/tools/{name}/calls for new synchronous callers. Existing async callers can continue using this endpoint.',
  request: {
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            name: 'Connection-Id',
            in: 'header',
            required: true,
            description: 'The connection ID used to create the connection.',
            schema: { type: 'string' },
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            name: 'Provider-Config-Key',
            in: 'header',
            required: true,
            description: 'The integration ID used to create the connection (aka Unique Key).',
            schema: { type: 'string' },
          },
        }),
      'X-Async': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Async',
            in: 'header',
            required: false,
            schema: { type: 'boolean' },
            description:
              'Set to true to trigger the action asynchronously. When true, the response will include a status URL and ID for retrieving the action result later. See [Asynchronous action documentation](/guides/functions/action-functions#trigger-asynchronously) for more details.',
          },
        }),
      'X-Max-Retries': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(5),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Max-Retries',
            in: 'header',
            required: false,
            schema: { type: 'integer', minimum: 0, maximum: 5, default: 0 },
            description:
              'The maximum number of retries in case of failure (between 0 and 5). Only applicable when X-Async is true. Default to 0 if not specified.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action_name: z
                .string()
                .openapi({ description: 'The name of the action to trigger.' }),
              input: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: "The necessary input for your action's 'exec' function." }),
            })
            .openapi({ required: ['action_name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The result of the action.',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                'your-properties': z
                  .looseObject({})
                  .exactOptional()
                  .openapi({
                    description: 'The data returned by the action',
                    example: 'The data returned by the action',
                  }),
              })
              .openapi({
                description:
                  'The result of the legacy action when triggered synchronously (cannot exceed 2 MB).',
                required: [],
              }),
            z
              .object({
                statusUrl: z
                  .string()
                  .openapi({
                    description: 'URL to poll for the action result',
                    example: '/action/35f461d4-e681-4957-ab14-c0ae1609431d',
                  }),
                id: z
                  .string()
                  .openapi({
                    description: 'Unique identifier for the asynchronous action',
                    example: '35f461d4-e681-4957-ab14-c0ae1609431d',
                  }),
              })
              .openapi({
                description:
                  'The ID and the status URL of the action to poll for the result when triggered asynchronously.',
                required: ['statusUrl', 'id'],
              }),
          ]),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    424: {
      description: 'Action http error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z.string(),
                  code: z.string(),
                  payload: z.looseObject({}),
                  upstream: z
                    .object({
                      status: z.int().exactOptional(),
                      headers: z
                        .looseObject({ 'content-type': z.string().exactOptional() })
                        .superRefine((o, ctx) => {
                          const regex = new RegExp('^x-rate')
                          const Schema = z.string()
                          for (const [k, val] of Object.entries(o)) {
                            if (!regex.test(k)) {
                              continue
                            }
                            const result = Schema.safeParse(val)
                            if (!result.success) {
                              for (const issue of result.error.issues) {
                                ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                              }
                            }
                          }
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      body: z.looseObject({}).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['message', 'code', 'payload'] }),
            })
            .openapi({ required: ['error'] }),
        },
      },
    },
    500: {
      description: 'Action error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({ message: z.string(), code: z.string(), payload: z.looseObject({}) })
                .openapi({ required: ['message', 'code', 'payload'] }),
            })
            .openapi({ required: ['error'] }),
        },
      },
    },
  },
  deprecated: true,
})

export const getEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/environments',
  summary: 'List environments',
  description:
    'List environments in the authenticated account. Optionally filter by an exact environment name.',
  request: {
    query: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'Exact environment name to find.',
            schema: { type: 'string', pattern: '^[a-z0-9_-]+$', maxLength: 255 },
            example: 'staging',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully listed environments',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({
                    id: z.int().openapi({ description: 'Numeric environment ID.', example: 123 }),
                    uuid: z
                      .uuid()
                      .openapi({
                        description:
                          'Environment UUID. Use this in account-level API calls for this environment.',
                        example: '123e4567-e89b-12d3-a456-426614174000',
                      }),
                    name: z
                      .string()
                      .openapi({ description: 'The environment name.', example: 'staging' }),
                    is_production: z
                      .boolean()
                      .openapi({ description: 'Whether the environment is production.' }),
                  })
                  .openapi({ required: ['id', 'uuid', 'name', 'is_production'] }),
              ),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/environments',
  summary: 'Create an environment',
  description: 'Create a new environment',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[a-z0-9_-]+$/)
                .max(255)
                .openapi({
                  description:
                    'Environment name. Lowercase letters, digits, hyphens, and underscores only. Max 255 characters. The reserved name `prod` is always treated as production.',
                  example: 'staging',
                }),
              is_production: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to mark the environment as production. Defaults to false, except for the reserved name `prod`.',
                }),
              callback_url: z
                .url()
                .exactOptional()
                .openapi({ description: 'Custom OAuth callback URL for this environment.' }),
              hmac_key: z
                .string()
                .max(1000)
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'Legacy public-key authorization HMAC key. Use [Connect sessions](/guides/auth/auth-guide#guide) instead.',
                }),
              hmac_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'Whether legacy public-key authorization HMAC verification is enabled. Use [Connect sessions](/guides/auth/auth-guide#guide) instead.',
                }),
              slack_notifications: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether Slack notifications are enabled for this environment.',
                }),
              otlp_endpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'OpenTelemetry collector endpoint. Requires a plan with OpenTelemetry export. Pass an empty string to set an empty endpoint.',
                }),
              otlp_headers: z
                .array(
                  z
                    .strictObject({
                      name: z.string().min(1).max(256),
                      value: z.string().min(1).max(4000),
                    })
                    .openapi({ required: ['name', 'value'] }),
                )
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Headers sent with OpenTelemetry export requests. Requires a plan with OpenTelemetry export. Maximum 100 headers.',
                }),
              webhooks: z
                .strictObject({
                  primary_url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'First webhook destination. Use an empty string for no destination.',
                    }),
                  secondary_url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Second webhook destination. Webhooks are sent to both configured URLs. Use an empty string for no destination.',
                    }),
                  on_sync_completion_always: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Send sync completion webhooks even when no records were added, updated, or deleted.',
                    }),
                  on_auth_creation: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Send webhooks when connections are created.' }),
                  on_auth_refresh_error: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description: 'Send webhooks when refreshing connection credentials fails.',
                    }),
                  on_sync_error: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Send webhooks when sync functions fail.' }),
                  on_async_action_completion: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Send webhooks when deprecated asynchronous action functions complete.',
                    }),
                  on_connection_deletion: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Send webhooks when connections are deleted.' }),
                  signing_key: z
                    .uuid()
                    .exactOptional()
                    .openapi({
                      description:
                        'Key used to sign webhooks sent from this environment. Must be a UUID. Defaults to a randomly generated UUID.',
                      example: '5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Initial webhook settings. Omitted URLs default to null; omitted subscription flags default to true.',
                  required: [],
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created an environment',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  id: z.int().openapi({ example: 123 }),
                  uuid: z.uuid().openapi({ example: '123e4567-e89b-12d3-a456-426614174000' }),
                  name: z.string().openapi({ example: 'staging' }),
                  is_production: z.boolean(),
                  callback_url: z.url(),
                  slack_notifications: z.boolean(),
                  otlp_endpoint: z.string().nullable(),
                  otlp_headers: z.array(
                    z
                      .object({ name: z.string(), value: z.string() })
                      .openapi({ required: ['name', 'value'] }),
                  ),
                  webhooks: z
                    .object({
                      primary_url: z.string().nullable(),
                      secondary_url: z.string().nullable(),
                      on_sync_completion_always: z.boolean().default(true),
                      on_auth_creation: z.boolean().default(true),
                      on_auth_refresh_error: z.boolean().default(true),
                      on_sync_error: z.boolean().default(true),
                      on_async_action_completion: z.boolean().default(true),
                      on_connection_deletion: z.boolean().default(true),
                      signing_key: z
                        .uuid()
                        .openapi({ example: '5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f' }),
                    })
                    .openapi({
                      required: [
                        'primary_url',
                        'secondary_url',
                        'on_sync_completion_always',
                        'on_auth_creation',
                        'on_auth_refresh_error',
                        'on_sync_error',
                        'on_async_action_completion',
                        'on_connection_deletion',
                        'signing_key',
                      ],
                    }),
                })
                .openapi({
                  required: [
                    'id',
                    'uuid',
                    'name',
                    'is_production',
                    'callback_url',
                    'slack_notifications',
                    'otlp_endpoint',
                    'otlp_headers',
                    'webhooks',
                  ],
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description: 'An environment with this name already exists.',
      content: { 'application/json': { schema: StdErrorSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getEnvironmentsEnvironmentUuidRoute = createRoute({
  method: 'get',
  path: '/environments/{environmentUuid}',
  summary: 'Get an environment',
  description: "Retrieve an environment's configuration.",
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Environment UUID.',
          },
        }),
    }),
    query: z.object({
      with_secrets: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'with_secrets',
            in: 'query',
            required: false,
            description: 'Include the webhook signing key and OpenTelemetry headers.',
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved an environment',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  id: z.int().openapi({ example: 123 }),
                  uuid: z.uuid().openapi({ example: '123e4567-e89b-12d3-a456-426614174000' }),
                  name: z.string().openapi({ example: 'staging' }),
                  is_production: z.boolean(),
                  callback_url: z.url(),
                  slack_notifications: z.boolean(),
                  otlp_endpoint: z.string().nullable(),
                  otlp_headers: z
                    .array(
                      z
                        .object({ name: z.string(), value: z.string() })
                        .openapi({ required: ['name', 'value'] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Only included when with_secrets=true.' }),
                  webhooks: z
                    .object({
                      primary_url: z.string().nullable(),
                      secondary_url: z.string().nullable(),
                      on_sync_completion_always: z.boolean(),
                      on_auth_creation: z.boolean(),
                      on_auth_refresh_error: z.boolean(),
                      on_sync_error: z.boolean(),
                      on_async_action_completion: z.boolean(),
                      on_connection_deletion: z.boolean(),
                      signing_key: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Current webhook signing key. Only included when with_secrets=true.',
                          example: '5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f',
                        }),
                    })
                    .openapi({
                      required: [
                        'primary_url',
                        'secondary_url',
                        'on_sync_completion_always',
                        'on_auth_creation',
                        'on_auth_refresh_error',
                        'on_sync_error',
                        'on_async_action_completion',
                        'on_connection_deletion',
                      ],
                    }),
                })
                .openapi({
                  required: [
                    'id',
                    'uuid',
                    'name',
                    'is_production',
                    'callback_url',
                    'slack_notifications',
                    'otlp_endpoint',
                    'webhooks',
                  ],
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteEnvironmentsEnvironmentUuidRoute = createRoute({
  method: 'delete',
  path: '/environments/{environmentUuid}',
  summary: 'Delete an environment',
  description: 'Delete an environment',
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Environment UUID returned when the environment was created.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted the environment' },
    400: {
      description: 'Cannot delete the reserved `prod` environment.',
      content: { 'application/json': { schema: StdErrorSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const patchEnvironmentsEnvironmentUuidRoute = createRoute({
  method: 'patch',
  path: '/environments/{environmentUuid}',
  summary: 'Update an environment',
  description: 'Update an environment',
  operationId: 'updateEnvironment',
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Environment UUID.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .regex(/^[a-z0-9_-]+$/)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'Environment name. Lowercase letters, digits, hyphens, and underscores only. Max 255 characters. The reserved prod environment cannot be renamed.',
                  example: 'staging',
                }),
              is_production: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Change the production flag. Requires account:environments:set_production in addition to account:environments:update. The reserved prod environment cannot have its production flag changed.',
                }),
              callback_url: z
                .url()
                .exactOptional()
                .openapi({ description: 'Custom OAuth callback URL for this environment.' }),
              slack_notifications: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether Slack notifications are enabled for this environment.',
                }),
              otlp_endpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'OpenTelemetry collector endpoint. Requires a plan with OpenTelemetry export. Pass an empty string to set an empty endpoint.',
                }),
              otlp_headers: z
                .array(
                  z
                    .object({
                      name: z.string().min(1).max(256),
                      value: z.string().min(1).max(4000),
                    })
                    .openapi({ required: ['name', 'value'] }),
                )
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Headers sent with OpenTelemetry export requests. Requires a plan with OpenTelemetry export. Replaces the entire header set; pass an empty array to clear it. Omitted headers are preserved. Maximum 100 headers.',
                }),
              webhooks: z
                .strictObject({
                  primary_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'First webhook destination. Use an empty string for no destination. Pass null to clear the URL.',
                    }),
                  secondary_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Second webhook destination. Webhooks are sent to both configured URLs. Use an empty string for no destination. Pass null to clear the URL.',
                    }),
                  on_sync_completion_always: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Send sync completion webhooks even when no records were added, updated, or deleted.',
                    }),
                  on_auth_creation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Send webhooks when connections are created.' }),
                  on_auth_refresh_error: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Send webhooks when refreshing connection credentials fails.',
                    }),
                  on_sync_error: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Send webhooks when sync functions fail.' }),
                  on_async_action_completion: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Send webhooks when asynchronous action functions complete.',
                    }),
                  on_connection_deletion: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Send webhooks when connections are deleted.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Partial webhook settings. Omitted fields retain their existing values.',
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
      description: 'Successfully updated the environment.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.literal(true).openapi({ example: true }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: {
      description: 'An environment with this name already exists.',
      content: { 'application/json': { schema: StdErrorSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getEnvironmentsEnvironmentUuidApiKeysRoute = createRoute({
  method: 'get',
  path: '/environments/{environmentUuid}/api-keys',
  summary: 'List environment API keys',
  description: 'Returns a list of Environment API keys in an environment.',
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            description: 'Environment UUID that owns the keys.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174000',
          },
        }),
    }),
    query: z.object({
      display_name: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'display_name',
            in: 'query',
            required: false,
            description: 'Exact API-key display name to find.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
            example: 'provisioned-ci',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully listed Environment API keys',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({
                    id: z.int().openapi({ description: 'Numeric API-key ID.', example: 456 }),
                    uuid: z
                      .uuid()
                      .openapi({
                        description: 'API-key UUID.',
                        example: '123e4567-e89b-12d3-a456-426614174001',
                      }),
                    display_name: z.string().openapi({ example: 'provisioned-ci' }),
                    scopes: z.array(z.string()),
                    last_used_at: z.iso.datetime({ offset: true }).nullable(),
                    created_at: z.iso.datetime({ offset: true }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'uuid',
                      'display_name',
                      'scopes',
                      'last_used_at',
                      'created_at',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postEnvironmentsEnvironmentUuidApiKeysRoute = createRoute({
  method: 'post',
  path: '/environments/{environmentUuid}/api-keys',
  summary: 'Create an environment API key',
  description: 'Create a new environment API key',
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            description: 'Environment UUID that will own the key.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174000',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              display_name: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'Display name for the key. Must be unique within the environment.',
                  example: 'provisioned-ci',
                }),
              scopes: z
                .array(z.string())
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Environment scopes to grant the key, such as `environment:deploy` or `environment:*`. Defaults to `environment:*` (full access).',
                  example: ['environment:deploy'],
                }),
            })
            .openapi({ required: ['display_name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created an Environment API key',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  id: z.int().openapi({ description: 'Numeric key ID.', example: 456 }),
                  uuid: z
                    .uuid()
                    .openapi({
                      description: 'API key UUID. Use this to delete the key later.',
                      example: '123e4567-e89b-12d3-a456-426614174001',
                    }),
                  display_name: z.string().openapi({ example: 'provisioned-ci' }),
                  scopes: z
                    .array(z.string())
                    .openapi({
                      description:
                        'Scopes granted to the key. `environment:*` when no scopes were specified.',
                      example: ['environment:deploy'],
                    }),
                  secret: z
                    .string()
                    .openapi({
                      description: 'The API key secret. Store it now; it is not returned again.',
                    }),
                  created_at: z.iso.datetime({ offset: true }),
                })
                .openapi({
                  required: ['id', 'uuid', 'display_name', 'scopes', 'secret', 'created_at'],
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: {
      description: 'A key with this display name already exists in the environment.',
      content: { 'application/json': { schema: StdErrorSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute = createRoute({
  method: 'get',
  path: '/environments/{environmentUuid}/api-keys/{keyUuid}',
  summary: 'Get an environment API key',
  description: 'Retrieve an Environment API key, including its secret.',
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            description: 'Environment UUID that owns the key.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174000',
          },
        }),
      keyUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'keyUuid',
            in: 'path',
            required: true,
            description: 'API-key UUID.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174001',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the Environment API key',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  id: z.int().openapi({ example: 456 }),
                  uuid: z.uuid().openapi({ example: '123e4567-e89b-12d3-a456-426614174001' }),
                  display_name: z.string().openapi({ example: 'provisioned-ci' }),
                  scopes: z.array(z.string()),
                  secret: z.string().openapi({ description: 'The Environment API-key secret.' }),
                  last_used_at: z.iso.datetime({ offset: true }).nullable(),
                  created_at: z.iso.datetime({ offset: true }),
                })
                .openapi({
                  required: [
                    'id',
                    'uuid',
                    'display_name',
                    'scopes',
                    'secret',
                    'last_used_at',
                    'created_at',
                  ],
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute = createRoute({
  method: 'delete',
  path: '/environments/{environmentUuid}/api-keys/{keyUuid}',
  summary: 'Delete an environment API key',
  description: 'Delete an environment API key',
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            description: 'Environment UUID that owns the key.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174000',
          },
        }),
      keyUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'keyUuid',
            in: 'path',
            required: true,
            description: 'API key UUID returned when the key was created.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174001',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the Environment API key',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().openapi({ example: true }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const patchEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute = createRoute({
  method: 'patch',
  path: '/environments/{environmentUuid}/api-keys/{keyUuid}',
  summary: 'Update an environment API key',
  description:
    'Change the display name and/or scopes of an Environment API key. Requires an Account API key with the `account:environments:api_keys:update` scope.',
  request: {
    params: z.object({
      environmentUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'environmentUuid',
            in: 'path',
            required: true,
            description: 'Environment UUID that owns the key.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174000',
          },
        }),
      keyUuid: z
        .uuid()
        .openapi({
          param: {
            name: 'keyUuid',
            in: 'path',
            required: true,
            description: 'API-key UUID.',
            schema: { type: 'string', format: 'uuid' },
            example: '123e4567-e89b-12d3-a456-426614174001',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              display_name: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'New display name for the key. Must be unique within the environment.',
                  example: 'provisioned-ci',
                }),
              scopes: z
                .array(z.string())
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    "Environment scopes that replace the key's current scopes, such as `environment:deploy` or `environment:*`.",
                  example: ['environment:deploy'],
                }),
            })
            .refine((val) => Object.keys(val).length >= 1)
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the Environment API key',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  id: z.int().openapi({ example: 456 }),
                  uuid: z.uuid().openapi({ example: '123e4567-e89b-12d3-a456-426614174001' }),
                  display_name: z.string().openapi({ example: 'provisioned-ci' }),
                  scopes: z.array(z.string()).openapi({ example: ['environment:deploy'] }),
                  last_used_at: z.iso.datetime({ offset: true }).nullable(),
                  created_at: z.iso.datetime({ offset: true }),
                })
                .openapi({
                  required: ['id', 'uuid', 'display_name', 'scopes', 'last_used_at', 'created_at'],
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: {
      description: 'A key with this display name already exists in the environment.',
      content: { 'application/json': { schema: StdErrorSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getEnvironmentVariablesRoute = createRoute({
  method: 'get',
  path: '/environment-variables',
  summary: 'Get environment variables',
  description: 'Retrieve the environment variables as added in the Nango dashboard',
  responses: {
    200: {
      description: 'Retrieve the environment variables as added in the Nango dashboard',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The name of the environment variable',
                    example: 'MY_SECRET_KEY',
                  }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The value of the environment variable',
                    example: 'SK_373892NSHFNCOWFO...',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postEnvironmentWebhookSigningKeyRotateRoute = createRoute({
  method: 'post',
  path: '/environment/webhook-signing-key/rotate',
  summary: 'Rotate the webhook signing key',
  description:
    'Replace the key Nango signs its webhooks with. The previous key stops being used within 5 minutes,\nso verify against both during that window.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              webhook_signing_key: z
                .uuid()
                .regex(
                  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'Optional UUID v4 signing key to import. If omitted, Nango generates a random key.',
                  example: '8a27fe09-327c-43ec-8f75-b1f212904f45',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The new webhook signing key',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  webhook_signing_key: z
                    .string()
                    .openapi({
                      description: 'The new webhook signing key',
                      example: '5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f',
                    }),
                })
                .openapi({ required: ['webhook_signing_key'] }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: {
      description:
        'The environment has more than one webhook signing key and cannot be rotated automatically.',
      content: { 'application/json': { schema: StdErrorSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getProxyAnyPathRoute = createRoute({
  method: 'get',
  path: '/proxy/{anyPath}',
  summary: 'Proxy GET request',
  description: 'Make a GET request with the Proxy.',
  request: {
    params: z.object({
      anyPath: z
        .string()
        .openapi({
          param: { name: 'anyPath', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      $ANY_QUERY_PARAMS: z
        .string()
        .openapi({
          param: {
            name: '$ANY_QUERY_PARAMS',
            in: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Connection-Id',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Provider-Config-Key',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID used to create the connection (aka Unique Key).',
          },
        }),
      Retries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Retries',
            schema: { type: 'string' },
            description:
              'The number of retries in case of failure (with exponential back-off). Optional, default 0.',
            required: false,
          },
        }),
      'Retry-On': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Retry-On',
            schema: { type: 'string' },
            description:
              'Comma separated status codes to explicitly retry on in addition to the default 5xx and 429.',
            required: false,
          },
        }),
      'Base-Url-Override': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Base-Url-Override',
            schema: { type: 'string' },
            description:
              'Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional',
            required: false,
          },
        }),
      Decompress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Decompress',
            schema: { type: 'string' },
            description:
              'Override the decompress option when making requests. Optional, defaults to false',
            required: false,
          },
        }),
      'nango-proxy-$ANY_HEADER': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'nango-proxy-$ANY_HEADER',
            schema: { type: 'string' },
            description: 'Any other headers you send are passed on to the external API',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'The response exactly as returned by the external API' } },
})

export const putProxyAnyPathRoute = createRoute({
  method: 'put',
  path: '/proxy/{anyPath}',
  summary: 'Proxy PUT request',
  description: 'Make a PUT request with the Proxy.',
  request: {
    params: z.object({
      anyPath: z
        .string()
        .openapi({
          param: { name: 'anyPath', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Connection-Id',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Provider-Config-Key',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID used to create the connection (aka Unique Key).',
          },
        }),
      Retries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Retries',
            schema: { type: 'string' },
            description:
              'The number of retries in case of failure (with exponential back-off). Optional, default 0.',
            required: false,
          },
        }),
      'Base-Url-Override': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Base-Url-Override',
            schema: { type: 'string' },
            description:
              'Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional',
            required: false,
          },
        }),
      Decompress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Decompress',
            schema: { type: 'string' },
            description:
              'Override the decompress option when making requests. Optional, defaults to false',
            required: false,
          },
        }),
      'nango-proxy-$ANY_HEADER': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'nango-proxy-$ANY_HEADER',
            schema: { type: 'string' },
            description: 'Any other headers you send are passed on to the external API',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ $ANY_BODY_PARAMS: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'The response exactly as returned by the external API' } },
})

export const postProxyAnyPathRoute = createRoute({
  method: 'post',
  path: '/proxy/{anyPath}',
  summary: 'Proxy POST request',
  description: 'Make a POST request with the Proxy.',
  request: {
    params: z.object({
      anyPath: z
        .string()
        .openapi({
          param: { name: 'anyPath', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Connection-Id',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Provider-Config-Key',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID used to create the connection (aka Unique Key).',
          },
        }),
      Retries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Retries',
            schema: { type: 'string' },
            description:
              'The number of retries in case of failure (with exponential back-off). Optional, default 0.',
            required: false,
          },
        }),
      'Base-Url-Override': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Base-Url-Override',
            schema: { type: 'string' },
            description:
              'Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional',
            required: false,
          },
        }),
      Decompress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Decompress',
            schema: { type: 'string' },
            description:
              'Override the decompress option when making requests. Optional, defaults to false',
            required: false,
          },
        }),
      'nango-proxy-$ANY_HEADER': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'nango-proxy-$ANY_HEADER',
            schema: { type: 'string' },
            description: 'Any other headers you send are passed on to the external API',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ $ANY_BODY_PARAMS: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'The response exactly as returned by the external API' } },
})

export const deleteProxyAnyPathRoute = createRoute({
  method: 'delete',
  path: '/proxy/{anyPath}',
  summary: 'Proxy DELETE request',
  description: 'Make a DELETE request with the Proxy.',
  request: {
    params: z.object({
      anyPath: z
        .string()
        .openapi({
          param: { name: 'anyPath', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      $ANY_QUERY_PARAMS: z
        .string()
        .openapi({
          param: {
            name: '$ANY_QUERY_PARAMS',
            in: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Connection-Id',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Provider-Config-Key',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID used to create the connection (aka Unique Key).',
          },
        }),
      Retries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Retries',
            schema: { type: 'string' },
            description:
              'The number of retries in case of failure (with exponential back-off). Optional, default 0.',
            required: false,
          },
        }),
      'Base-Url-Override': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Base-Url-Override',
            schema: { type: 'string' },
            description:
              'Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional',
            required: false,
          },
        }),
      Decompress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Decompress',
            schema: { type: 'string' },
            description:
              'Override the decompress option when making requests. Optional, defaults to false',
            required: false,
          },
        }),
      'nango-proxy-$ANY_HEADER': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'nango-proxy-$ANY_HEADER',
            schema: { type: 'string' },
            description: 'Any other headers you send are passed on to the external API',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'The response exactly as returned by the external API' } },
})

export const patchProxyAnyPathRoute = createRoute({
  method: 'patch',
  path: '/proxy/{anyPath}',
  summary: 'Proxy PATCH request',
  description: 'Make a PATCH request with the Proxy.',
  request: {
    params: z.object({
      anyPath: z
        .string()
        .openapi({
          param: { name: 'anyPath', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'Connection-Id': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Connection-Id',
            required: true,
            schema: { type: 'string' },
            description: 'The connection ID used to create the connection.',
          },
        }),
      'Provider-Config-Key': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Provider-Config-Key',
            required: true,
            schema: { type: 'string' },
            description: 'The integration ID used to create the connection (aka Unique Key).',
          },
        }),
      Retries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Retries',
            schema: { type: 'string' },
            description:
              'The number of retries in case of failure (with exponential back-off). Optional, default 0.',
            required: false,
          },
        }),
      'Base-Url-Override': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Base-Url-Override',
            schema: { type: 'string' },
            description:
              'Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional',
            required: false,
          },
        }),
      Decompress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Decompress',
            schema: { type: 'string' },
            description:
              'Override the decompress option when making requests. Optional, defaults to false',
            required: false,
          },
        }),
      'nango-proxy-$ANY_HEADER': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'nango-proxy-$ANY_HEADER',
            schema: { type: 'string' },
            description: 'Any other headers you send are passed on to the external API',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ $ANY_BODY_PARAMS: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'The response exactly as returned by the external API' } },
})

export const postConnectSessionsRoute = createRoute({
  method: 'post',
  path: '/connect/sessions',
  summary: 'Create connect session',
  description: 'Create a new connect session',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectSessionInputSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a connect session',
      content: {
        'application/json': {
          schema: z.object({ data: ConnectSessionSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const postConnectSessionsReconnectRoute = createRoute({
  method: 'post',
  path: '/connect/sessions/reconnect',
  summary: 'Reconnect with connect session',
  description:
    "Create a new connect session to reconnect to a specific integration. The token is used like a standard connect session.\nOnly connections created with a connect session are compatible with this endpoint.\nUse this method when a user needs to input new credentials or to manually refresh token.\nThe connection keeps its connection ID. When the user authorizes, the connection's tags are replaced by the ones built from `tags` and `end_user`. If that leaves no tags, for example when neither is passed or `tags` is `{}`, the connection keeps its existing tags.\n",
  request: {
    body: {
      content: { 'application/json': { schema: ConnectSessionReconnectInputSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a connect session',
      content: {
        'application/json': {
          schema: z.object({ data: ConnectSessionSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
  },
})

export const getConnectSessionRoute = createRoute({
  method: 'get',
  path: '/connect/session',
  summary: 'Get connect session',
  description: 'Retrieve a connect session',
  responses: {
    200: {
      description: 'Successfully retrieved a connect session',
      content: {
        'application/json': {
          schema: z.object({ data: ConnectSessionSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const deleteConnectSessionRoute = createRoute({
  method: 'delete',
  path: '/connect/session',
  summary: 'Delete connect session',
  description: 'Delete a connect session',
  responses: {
    204: { description: 'Successfully deleted a connect session' },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})
