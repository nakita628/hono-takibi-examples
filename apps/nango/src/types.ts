type TokenUrlObject = {
  OAUTH1?: string | undefined
  OAUTH2?: string | undefined
  OAUTH2CC?: string | undefined
  BASIC?: string | undefined
  API_KEY?: string | undefined
  APP_STORE?: string | undefined
  CUSTOM?: string | undefined
  APP?: string | undefined
  NONE?: string | undefined
}
type SimplifiedJSONSchema = {
  type: 'string'
  title: string
  description: string
  example?: string | undefined
  pattern?: string | undefined
  format?: 'hostname' | 'uri' | 'uuid' | 'email' | undefined
  optional?: boolean | undefined
  order?: number | undefined
  default_value?: string | undefined
  hidden?: boolean | undefined
  prefix?: string | undefined
  suffix?: string | undefined
  doc_section?: string | undefined
  secret?: boolean | undefined
  automated?: boolean | undefined
  enum?: string[] | undefined
  warnings?: { [x: string]: string } | undefined
  visible_when?: { field: string; equals: string } | undefined
}
type BaseProvider = {
  name: string
  display_name: string
  auth_mode:
    | 'OAUTH1'
    | 'OAUTH2'
    | 'OAUTH2_CC'
    | 'BASIC'
    | 'API_KEY'
    | 'CUSTOM'
    | 'APP'
    | 'NONE'
    | 'TBA'
    | 'JWT'
    | 'BILL'
    | 'TWO_STEP'
    | 'SIGNATURE'
    | 'MCP_OAUTH2'
    | 'MCP_OAUTH2_GENERIC'
    | 'INSTALL_PLUGIN'
    | 'AWS_SIGV4'
  proxy?:
    | {
        base_url: string
        headers?: { [x: string]: unknown } | undefined
        query?: { api_key: string } | undefined
        retry?: { at?: string | undefined; after?: string | undefined } | undefined
        decompress?: boolean | undefined
        paginate?: { [x: string]: unknown } | undefined
        verification?:
          | {
              method: string
              endpoint: string
              base_url_override?: string | undefined
              headers?: { [x: string]: unknown } | undefined
            }
          | undefined
      }
    | undefined
  authorization_url?: string | undefined
  authorization_url_encode?: boolean | undefined
  access_token_url?: string | undefined
  token_url_encode?: boolean | undefined
  authorization_params?: { [x: string]: unknown } | undefined
  scope_separator?: string | undefined
  default_scopes?: string[] | undefined
  token_url?: string | TokenUrlObject | undefined
  token_params?: { [x: string]: unknown } | undefined
  authorization_url_replacements?: { [x: string]: unknown } | undefined
  authorization_url_fragment?: string | undefined
  redirect_uri_metadata?: string[] | undefined
  token_response_metadata?: string[] | undefined
  docs: string
  token_expiration_buffer?: number | undefined
  webhook_routing_script?: string | undefined
  webhook_user_defined_secret?: boolean | undefined
  post_connection_script?: string | undefined
  pre_connection_deletion_script?: string | undefined
  categories?: string[] | undefined
  connection_configuration?: string[] | undefined
  connection_config?: SimplifiedJSONSchema | undefined
  credentials?: { apiKey?: SimplifiedJSONSchema | undefined } | undefined
  integration_config?: { [x: string]: SimplifiedJSONSchema } | undefined
  client_registration?: 'dynamic' | 'static' | 'cimd' | undefined
}
type ProviderOAuth1 = {
  auth_mode: 'OAUTH1'
  request_url: string
  request_params?: { [x: string]: unknown } | undefined
  request_http_method?: 'GET' | 'PUT' | 'POST' | undefined
  token_http_method?: 'GET' | 'PUT' | 'POST' | undefined
  signature_method: 'HMAC-SHA1' | 'RSA-SHA1' | 'PLAINTEXT'
}
type ProviderOAuth2 = {
  auth_mode: 'OAUTH2' | 'CUSTOM'
  token_params?:
    | { grant_type?: 'authorization_code' | 'client_credentials' | undefined }
    | undefined
  disable_pkce?: boolean | undefined
  refresh_params?: { grant_type: 'refresh_token' } | undefined
  authorization_method?: 'body' | 'header' | undefined
  body_format?: 'form' | 'json' | undefined
  refresh_url?: string | undefined
  expires_in_unit?: 'milliseconds' | undefined
  token_request_auth_method?: 'basic' | 'custom' | 'private_key_jwt' | 'none' | undefined
}
type Provider = BaseProvider | ProviderOAuth1 | ProviderOAuth2
type StdError = {
  error?:
    | {
        code: string
        message?: string | undefined
        errors?: { [x: string]: unknown }[] | undefined
      }
    | undefined
}
type NangoSyncFunction = {
  name: string
  description?: string | undefined
  scopes?: string[] | undefined
  type: 'sync'
  input?: string | undefined
  returns: string[]
  json_schema: { [x: string]: unknown } | null
  runs: string | null
  auto_start: boolean
  track_deletes: boolean
}
type NangoActionFunction = {
  name: string
  description?: string | undefined
  scopes?: string[] | undefined
  type: 'action'
  input?: string | undefined
  returns: string[]
  json_schema: { [x: string]: unknown } | null
}
type ProviderTemplateToolFunction = {
  name: string
  type: 'tool'
  description: string
  scopes?: string[] | undefined
  input_json_schema: { [x: string]: unknown } | null
  output_json_schema: { [x: string]: unknown } | null
}
type ProviderTemplateFunction =
  | NangoSyncFunction
  | NangoActionFunction
  | ProviderTemplateToolFunction
type Integration = {
  unique_key: string
  display_name: string
  provider: string
  logo?: string | undefined
  created_at: string
  updated_at: string
  forward_webhooks?: boolean | undefined
  missing_fields?: string[] | undefined
}
type IntegrationCredentialsInput =
  | {
      type: 'OAUTH1' | 'OAUTH2' | 'TBA'
      client_id?: string | undefined
      client_secret?: string | undefined
      scopes?: string | undefined
      webhook_secret?: string | undefined
    }
  | {
      type: 'APP'
      app_id?: string | undefined
      app_link?: string | undefined
      private_key?: string | undefined
    }
  | {
      type: 'CUSTOM'
      client_id?: string | undefined
      client_secret?: string | undefined
      app_id?: string | undefined
      app_link?: string | undefined
      private_key?: string | undefined
    }
  | {
      type: 'MCP_OAUTH2_GENERIC'
      client_name?: string | undefined
      client_uri?: string | undefined
      client_logo_uri?: string | undefined
    }
  | {
      type: 'MCP_OAUTH2'
      client_id?: string | undefined
      client_secret?: string | undefined
      scopes?: string | undefined
    }
type IntegrationNangoManagedCredentialsInput = { type: 'NANGO_MANAGED' }
type IntegrationCredentials =
  | {
      type: 'OAUTH1' | 'OAUTH2' | 'TBA'
      client_id: string
      client_secret: string
      scopes?: string | ({ [x: string]: unknown } | null) | undefined
      webhook_secret?: string | ({ [x: string]: unknown } | null) | undefined
    }
  | { type: 'APP'; app_id: string; app_link: string; private_key: string }
  | {
      type: 'CUSTOM'
      client_id: string
      client_secret: string
      app_id: string
      app_link: string
      private_key: string
    }
  | {
      type: 'MCP_OAUTH2_GENERIC'
      client_name?: string | ({ [x: string]: unknown } | null) | undefined
      client_uri?: string | ({ [x: string]: unknown } | null) | undefined
      client_logo_uri?: string | ({ [x: string]: unknown } | null) | undefined
    }
  | {
      type: 'MCP_OAUTH2'
      client_id?: string | ({ [x: string]: unknown } | null) | undefined
      client_secret?: string | ({ [x: string]: unknown } | null) | undefined
      scopes?: string | ({ [x: string]: unknown } | null) | undefined
    }
type IntegrationCredentialsWithConfig =
  | IntegrationCredentials
  | { type: 'INTEGRATION_CONFIG'; auth_mode: string; integration_config: { [x: string]: string } }
type IntegrationFull = {
  unique_key: string
  display_name: string
  provider: string
  logo?: string | undefined
  created_at: string
  updated_at: string
  forward_webhooks?: boolean | undefined
  missing_fields?: string[] | undefined
  webhook_url?: string | ({ [x: string]: unknown } | null) | undefined
  credentials?: IntegrationCredentialsWithConfig | ({ [x: string]: unknown } | null) | undefined
}
type ListedNangoFunction =
  | {
      name: string
      description?: string | undefined
      scopes?: string[] | undefined
      type: 'sync'
      input?: string | undefined
      returns: string[]
      json_schema: { [x: string]: unknown } | null
      runs: string | null
      auto_start: boolean
      track_deletes: boolean
      id: number | null
      enabled: boolean
      last_deployed: string | null
      source: 'catalog' | 'standalone' | 'repo' | 'tools-catalog'
    }
  | {
      name: string
      description?: string | undefined
      scopes?: string[] | undefined
      type: 'action'
      input?: string | undefined
      returns: string[]
      json_schema: { [x: string]: unknown } | null
      id: number | null
      enabled: boolean
      last_deployed: string | null
      source: 'catalog' | 'standalone' | 'repo' | 'tools-catalog'
    }
  | {
      name: string
      description?: string | undefined
      scopes?: string[] | undefined
      type: 'on-event'
      event: 'post-connection-creation' | 'pre-connection-deletion' | 'validate-connection'
      id: number | null
      enabled: boolean
      last_deployed: string | null
      source: 'catalog' | 'standalone' | 'repo' | 'tools-catalog'
    }
  | {
      name: string
      type: 'tool'
      uuid: string
      integration_id: string
      provider: string
      description: string
      input_json_schema: { [x: string]: unknown } | null
      output_json_schema: { [x: string]: unknown } | null
      meta: {
        instructions?: string | undefined
        required_scopes?: { all: string[] } | { any: string[] } | { none: true } | undefined
        tags: { [x: string]: string | string[] }
      }
      id: number | null
      enabled: boolean
      last_deployed: string | null
      source: 'catalog' | 'standalone' | 'repo' | 'tools-catalog'
    }
type Tags = { [x: string]: string }
type ConnectionError = { type: 'auth' | 'sync'; log_id: string }
type ConnectionEndUser = {
  id: string
  email?: string | ({ [x: string]: unknown } | null) | undefined
  display_name?: string | ({ [x: string]: unknown } | null) | undefined
  tags?: { [x: string]: unknown } | undefined
  organization?:
    | { id: string; display_name?: string | ({ [x: string]: unknown } | null) | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type OAuth1CredentialsWithRaw = {
  oauth_token: string
  oauth_token_secret: string
  type: 'OAUTH1'
  raw: { [x: string]: unknown }
}
type OAuth2CredentialsWithRaw = {
  access_token: string
  config_override?:
    | { client_id?: string | undefined; client_secret?: string | undefined }
    | undefined
  expires_at?: string | undefined
  refresh_token?: string | undefined
  type: 'OAUTH2'
  raw: { [x: string]: unknown }
}
type BasicApiCredentials = { password: string; type: 'BASIC'; username: string }
type ApiKeyCredentials = { apiKey: string; type: 'API_KEY' }
type AppCredentials = {
  access_token: string
  expires_at?: string | undefined
  raw: { [x: string]: unknown }
  type: 'APP'
}
type JwtCredentials = {
  expires_at?: string | undefined
  issuerId?: string | undefined
  privateKey: { id: string; secret: string } | string
  privateKeyId?: string | undefined
  token?: string | undefined
  type: 'JWT'
}
type OAuth2ClientCredentialsWithRaw = {
  client_id: string
  client_secret: string
  expires_at?: string | undefined
  token: string
  type: 'OAUTH2_CC'
  raw: { [x: string]: unknown }
}
type AppStoreCredentialsWithRaw = {
  access_token: string
  expires_at?: string | undefined
  private_key: string
  type?: 'APP_STORE' | undefined
  raw: { [x: string]: unknown }
}
type UnauthCredentials = {}
type CustomCredentials = { raw: { [x: string]: unknown }; type: 'CUSTOM' }
type TbaCredentials = {
  config_override: { client_id?: string | undefined; client_secret?: string | undefined }
  token_id: string
  token_secret: string
  type: 'TBA'
}
type BillCredentialsWithRaw = {
  dev_key: string
  expires_at?: string | undefined
  organization_id: string
  password: string
  session_id?: string | undefined
  type: 'BILL'
  user_id?: string | undefined
  username: string
  raw: { [x: string]: unknown }
}
type TwoStepCredentials = {
  expires_at?: string | undefined
  raw: { [x: string]: unknown }
  token?: string | undefined
  type: 'TWO_STEP'
}
type SignatureCredentials = {
  expires_at?: string | undefined
  password: string
  token?: string | undefined
  type: 'SIGNATURE'
  username: string
}
type AllAuthCredentials =
  | OAuth1CredentialsWithRaw
  | OAuth2CredentialsWithRaw
  | BasicApiCredentials
  | ApiKeyCredentials
  | AppCredentials
  | JwtCredentials
  | OAuth2ClientCredentialsWithRaw
  | AppStoreCredentialsWithRaw
  | UnauthCredentials
  | CustomCredentials
  | TbaCredentials
  | BillCredentialsWithRaw
  | TwoStepCredentials
  | SignatureCredentials
type ConnectionFull = {
  id: number
  connection_id: string
  provider_config_key: string
  provider: string
  errors: ConnectionError[]
  end_user?: ConnectionEndUser | ({ [x: string]: unknown } | null) | undefined
  metadata: { [x: string]: unknown }
  connection_config: { [x: string]: unknown }
  tags: Tags
  created_at: string
  updated_at: string
  last_fetched_at: string
  credentials: AllAuthCredentials
}
type OAuth1Credentials = { oauth_token: string; oauth_token_secret: string; type: 'OAUTH1' }
type OAuth2Credentials = {
  access_token: string
  config_override?:
    | { client_id?: string | undefined; client_secret?: string | undefined }
    | undefined
  expires_at?: string | undefined
  refresh_token?: string | undefined
  type: 'OAUTH2'
}
type OAuth2ClientCredentials = {
  client_id: string
  client_secret: string
  expires_at?: string | undefined
  token: string
  type: 'OAUTH2_CC'
}
type UnauthCredentialsWithType = { type: 'NONE' }
type FunctionCompileRequest = { code: string }
type FunctionCompileResponse = {
  bundle_size_bytes: number
  bundled_js: string
  compiled_at: string
}
type RunnableFunctionType = 'action' | 'sync' | 'tool' | 'function'
type FunctionDryrunRequest = {
  integration_id: string
  function_type: RunnableFunctionType
  code: string
  connection_id: string
  input?: { [x: string]: unknown } | undefined
  metadata?: { [x: string]: unknown } | undefined
  checkpoint?: { [x: string]: unknown } | undefined
  last_sync_date?: string | undefined
}
type FunctionDryrunCreateResponse = {
  id: string
  status: 'waiting' | 'running'
  created_at: string
}
type FunctionDryrunStatus = 'waiting' | 'running' | 'success' | 'failed'
type FunctionDryrunResponse = {
  id: string
  status: FunctionDryrunStatus
  integration_id: string
  function_type: RunnableFunctionType
  created_at: string
  updated_at: string
  started_at?: string | undefined
  completed_at?: string | undefined
  duration_ms?: number | undefined
  output?: string | undefined
  result?: { [x: string]: unknown } | undefined
  error?:
    | { code: string; message: string; payload?: { [x: string]: unknown } | undefined }
    | undefined
}
type FunctionDeploymentCodeRequest = {
  type: 'function'
  integration_id: string
  function_name: string
  function_type: RunnableFunctionType
  code: string
  version?: string | undefined
  allow_destructive?: boolean | undefined
}
type FunctionDeploymentTemplateRequest = {
  type: 'template'
  integration_id: string
  template: string
  function_type?: 'action' | 'sync' | undefined
}
type FunctionDeploymentRequest = FunctionDeploymentCodeRequest | FunctionDeploymentTemplateRequest
type FunctionDeploymentResponse = {
  id: string
  status: 'waiting' | 'running' | 'success' | 'failed'
  created_at: string
}
type FunctionDeploymentResultResponse = {
  id: string
  status: 'waiting' | 'running' | 'success' | 'failed'
  integration_id: string
  function_name: string
  function_type: RunnableFunctionType
  created_at: string
  updated_at: string
  started_at?: string | undefined
  completed_at?: string | undefined
  duration_ms?: number | undefined
  deployed?: boolean | undefined
  deployed_functions?: { name: string; version?: string | undefined }[] | undefined
  output?: string | undefined
  error?:
    | { code: string; message: string; payload?: { [x: string]: unknown } | undefined }
    | undefined
}
type ConnectSessionInput = {
  tags?: Tags | undefined
  end_user?:
    | {
        id: string
        email?: string | undefined
        display_name?: string | undefined
        tags?: { [x: string]: string } | undefined
      }
    | undefined
  organization?: { id: string; display_name?: string | undefined } | undefined
  allowed_integrations?: string[] | undefined
  integrations_config_defaults?:
    | {
        [x: string]: {
          user_scopes?: string | undefined
          authorization_params?: { [x: string]: unknown } | undefined
          connection_config?:
            | {
                oauth_scopes_override?: string | undefined
                oauth_client_id_override?: string | undefined
                oauth_client_secret_override?: string | undefined
              }
            | undefined
        }
      }
    | undefined
  overrides?: { [x: string]: { docs_connect?: string | undefined } } | undefined
  webhook_url_override?: string | undefined
}
type ConnectSession = { token: string; connect_link?: string | undefined; expires_at: string }
type ConnectSessionReconnectInput = {
  connection_id: string
  integration_id: string
  tags?: Tags | undefined
  end_user?: unknown | undefined
  organization?: unknown | undefined
  integrations_config_defaults?: unknown | undefined
  overrides?: unknown | undefined
  webhook_url_override?: unknown | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/providers': {
      $get:
        | { input: {}; output: { data: Provider[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/providers/:provider': {
      $get:
        | {
            input: { param: { provider: string } }
            output: { data: Provider }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider: string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { provider: string } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { provider: string } }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/providers/:provider/templates': {
      $get:
        | {
            input: { param: { provider: string } }
            output: { data: ProviderTemplateFunction[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider: string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { provider: string } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/integrations': {
      $get:
        | { input: {}; output: { data: Integration[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: {
              json: {
                unique_key: string
                provider: string
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
                credentials?:
                  | IntegrationCredentialsInput
                  | IntegrationNangoManagedCredentialsInput
                  | undefined
                integration_config?: { [x: string]: string } | undefined
                custom?: { [x: string]: string } | undefined
              }
            }
            output: { data: Integration }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                unique_key: string
                provider: string
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
                credentials?:
                  | IntegrationCredentialsInput
                  | IntegrationNangoManagedCredentialsInput
                  | undefined
                integration_config?: { [x: string]: string } | undefined
                custom?: { [x: string]: string } | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                unique_key: string
                provider: string
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
                credentials?:
                  | IntegrationCredentialsInput
                  | IntegrationNangoManagedCredentialsInput
                  | undefined
                integration_config?: { [x: string]: string } | undefined
                custom?: { [x: string]: string } | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/integrations/quickstart': {
      $post:
        | {
            input: {
              json: {
                unique_key: string
                provider: string
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
              }
            }
            output: { data: Integration }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                unique_key: string
                provider: string
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                unique_key: string
                provider: string
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/integrations/:uniqueKey': {
      $get:
        | {
            input: { param: { uniqueKey: string } } & {
              query: { include?: ('webhook' | 'credentials')[] | undefined }
            }
            output: { data: IntegrationFull }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uniqueKey: string } } & {
              query: { include?: ('webhook' | 'credentials')[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uniqueKey: string } } & {
              query: { include?: ('webhook' | 'credentials')[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uniqueKey: string } } & {
              query: { include?: ('webhook' | 'credentials')[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { uniqueKey: string } } & {
              json: {
                unique_key?: string | undefined
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
                credentials?: IntegrationCredentialsInput | undefined
                integration_config?: { [x: string]: string } | undefined
                custom?: { [x: string]: string } | undefined
              }
            }
            output: { data: Integration }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uniqueKey: string } } & {
              json: {
                unique_key?: string | undefined
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
                credentials?: IntegrationCredentialsInput | undefined
                integration_config?: { [x: string]: string } | undefined
                custom?: { [x: string]: string } | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uniqueKey: string } } & {
              json: {
                unique_key?: string | undefined
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
                credentials?: IntegrationCredentialsInput | undefined
                integration_config?: { [x: string]: string } | undefined
                custom?: { [x: string]: string } | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uniqueKey: string } } & {
              json: {
                unique_key?: string | undefined
                display_name?: string | undefined
                forward_webhooks?: boolean | undefined
                credentials?: IntegrationCredentialsInput | undefined
                integration_config?: { [x: string]: string } | undefined
                custom?: { [x: string]: string } | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { uniqueKey: string } }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uniqueKey: string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uniqueKey: string } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uniqueKey: string } }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/:uniqueKey/functions': {
      $get:
        | {
            input: { param: { uniqueKey: string } } & {
              query: {
                type?: 'sync' | 'on-event' | 'tool' | undefined
                search?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {
              data: ListedNangoFunction[]
              pagination: { total: number; page: number; limit: number }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uniqueKey: string } } & {
              query: {
                type?: 'sync' | 'on-event' | 'tool' | undefined
                search?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uniqueKey: string } } & {
              query: {
                type?: 'sync' | 'on-event' | 'tool' | undefined
                search?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uniqueKey: string } } & {
              query: {
                type?: 'sync' | 'on-event' | 'tool' | undefined
                search?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uniqueKey: string } } & {
              query: {
                type?: 'sync' | 'on-event' | 'tool' | undefined
                search?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/:uniqueKey/functions/:name': {
      $get:
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: { data: ListedNangoFunction }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type: 'action' | 'sync' | 'tool' | 'function' }
            }
            output: { data: { success: boolean } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type: 'action' | 'sync' | 'tool' | 'function' }
            }
            output: {
              error?:
                | {
                    code?: 'function_managed_by_deploy' | 'invalid_request' | undefined
                    message?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type: 'action' | 'sync' | 'tool' | 'function' }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type: 'action' | 'sync' | 'tool' | 'function' }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type: 'action' | 'sync' | 'tool' | 'function' }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/:uniqueKey/functions/:name/code': {
      $get:
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: { type: 'sync' | 'action' | 'on-event' | 'tool'; code: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uniqueKey: string; name: string } } & {
              query: { type?: 'sync' | 'on-event' | 'tool' | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connection': {
      $get: {
        input: {
          query: {
            connectionId?: string | undefined
            search?: string | undefined
            endUserId?: string | undefined
            endUserOrganizationId?: string | undefined
            tags?: Tags | undefined
            limit?: number | undefined
            page?: number | undefined
          }
        }
        output: {
          connections: {
            id: number
            connection_id: string
            provider: string
            provider_config_key: string
            created: string
            metadata: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
            tags: Tags
            errors: ConnectionError[]
            end_user?: ConnectionEndUser | ({ [x: string]: unknown } | null) | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                connection_id?: string | undefined
                provider_config_key: string
                access_token?: string | undefined
                refresh_token?: string | undefined
                expires_at?: string | undefined
                expires_in?: number | undefined
                no_expiration?: boolean | undefined
                oauth_client_id_override?: string | undefined
                oauth_client_secret_override?: string | undefined
                oauth_token?: string | undefined
                oauth_token_secret?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                connection_config?: { [x: string]: unknown } | undefined
                username?: string | undefined
                password?: string | undefined
                api_key?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                connection_id?: string | undefined
                provider_config_key: string
                access_token?: string | undefined
                refresh_token?: string | undefined
                expires_at?: string | undefined
                expires_in?: number | undefined
                no_expiration?: boolean | undefined
                oauth_client_id_override?: string | undefined
                oauth_client_secret_override?: string | undefined
                oauth_token?: string | undefined
                oauth_token_secret?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                connection_config?: { [x: string]: unknown } | undefined
                username?: string | undefined
                password?: string | undefined
                api_key?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/connection/:connectionId': {
      $get:
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
              }
            }
            output: ConnectionFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
              }
            }
            output: {
              error?: { code?: string | undefined; message?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 424
          }
      $delete:
        | {
            input: { param: { connectionId: string } } & { query: { provider_config_key: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & { query: { provider_config_key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & { query: { provider_config_key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connection/metadata': {
      $post:
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: {
              connection_id?: string | string[] | undefined
              provider_config_key?: string | undefined
              metadata?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: {
              connection_id?: string | string[] | undefined
              provider_config_key?: string | undefined
              metadata?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/connection/:connectionId/metadata': {
      $post:
        | {
            input: { param: { connectionId: string } } & {
              header: { 'Provider-Config-Key': string }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { connectionId: string } } & {
              header: { 'Provider-Config-Key': string }
            } & { json: { [x: string]: unknown } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { connectionId: string } } & {
              header: { 'Provider-Config-Key': string }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & {
              header: { 'Provider-Config-Key': string }
            } & { json: { [x: string]: unknown } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/connections': {
      $get:
        | {
            input: {
              query: {
                connectionId?: string | undefined
                search?: string | undefined
                endUserId?: string | undefined
                endUserOrganizationId?: string | undefined
                tags?: Tags | undefined
                limit?: number | undefined
                page?: number | undefined
              }
            }
            output: {
              connections: {
                id: number
                connection_id: string
                provider: string
                provider_config_key: string
                created: string
                metadata: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
                tags: Tags
                errors: ConnectionError[]
                end_user?: ConnectionEndUser | ({ [x: string]: unknown } | null) | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                connectionId?: string | undefined
                search?: string | undefined
                endUserId?: string | undefined
                endUserOrganizationId?: string | undefined
                tags?: Tags | undefined
                limit?: number | undefined
                page?: number | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                provider_config_key: string
                metadata?: { [x: string]: unknown } | undefined
                connection_id?: string | undefined
                connection_config?: { [x: string]: unknown } | undefined
                credentials:
                  | OAuth1Credentials
                  | OAuth2Credentials
                  | BasicApiCredentials
                  | ApiKeyCredentials
                  | OAuth2ClientCredentials
                  | UnauthCredentialsWithType
                  | TbaCredentials
                  | { type: 'APP'; app_id: string; installation_id: string }
                tags?: Tags | undefined
                end_user?:
                  | {
                      id: string
                      email?: string | undefined
                      display_name?: string | undefined
                      tags?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            output: ConnectionFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                provider_config_key: string
                metadata?: { [x: string]: unknown } | undefined
                connection_id?: string | undefined
                connection_config?: { [x: string]: unknown } | undefined
                credentials:
                  | OAuth1Credentials
                  | OAuth2Credentials
                  | BasicApiCredentials
                  | ApiKeyCredentials
                  | OAuth2ClientCredentials
                  | UnauthCredentialsWithType
                  | TbaCredentials
                  | { type: 'APP'; app_id: string; installation_id: string }
                tags?: Tags | undefined
                end_user?:
                  | {
                      id: string
                      email?: string | undefined
                      display_name?: string | undefined
                      tags?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/connections/:connectionId': {
      $get:
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
                refresh_github_app_jwt_token?: boolean | undefined
              }
            }
            output: ConnectionFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
                refresh_github_app_jwt_token?: boolean | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
                refresh_github_app_jwt_token?: boolean | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connectionId: string } } & {
              query: {
                provider_config_key: string
                force_refresh?: boolean | undefined
                refresh_token?: boolean | undefined
                refresh_github_app_jwt_token?: boolean | undefined
              }
            }
            output: {
              error?: { code?: string | undefined; message?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 424
          }
      $patch:
        | {
            input: { param: { connectionId: string } } & {
              query: { provider_config_key: string }
            } & {
              json: {
                tags?: Tags | undefined
                webhook_url_override?: string | undefined
                end_user?:
                  | {
                      id: string
                      email?: string | undefined
                      display_name?: string | undefined
                      tags?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & {
              query: { provider_config_key: string }
            } & {
              json: {
                tags?: Tags | undefined
                webhook_url_override?: string | undefined
                end_user?:
                  | {
                      id: string
                      email?: string | undefined
                      display_name?: string | undefined
                      tags?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & {
              query: { provider_config_key: string }
            } & {
              json: {
                tags?: Tags | undefined
                webhook_url_override?: string | undefined
                end_user?:
                  | {
                      id: string
                      email?: string | undefined
                      display_name?: string | undefined
                      tags?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { connectionId: string } } & { query: { provider_config_key: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & { query: { provider_config_key: string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & { query: { provider_config_key: string } }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/metadata': {
      $post:
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: {
              connection_id?: string | string[] | undefined
              provider_config_key?: string | undefined
              metadata?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: {
              connection_id?: string | string[] | undefined
              provider_config_key?: string | undefined
              metadata?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                connection_id: string | string[]
                provider_config_key: string
                metadata: { [x: string]: unknown }
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/scripts/config': {
      $get:
        | {
            input: { query: { format?: 'nango' | 'openai' | undefined } }
            output: {
              providerConfigKey?: string | undefined
              syncs?:
                | {
                    id?: number | undefined
                    name?: string | undefined
                    enabled?: boolean | undefined
                    type?: string | undefined
                    json_schema?: { [x: string]: unknown } | undefined
                    runs?: string | undefined
                    track_deletes?: boolean | undefined
                    auto_start?: boolean | undefined
                    last_deployed?: string | undefined
                    is_public?: boolean | undefined
                    pre_built?: boolean | undefined
                    version?: string | undefined
                    attributes?: { [x: string]: unknown } | undefined
                    input?: { [x: string]: unknown } | undefined
                    returns?: string[] | undefined
                    description?: string | undefined
                    scopes?: string[] | undefined
                    endpoints?: { [x: string]: unknown }[] | undefined
                    webhookSubscriptions?: string[] | undefined
                    models?: { name: string; fields?: unknown[] | undefined }[] | undefined
                  }[]
                | undefined
              actions?:
                | {
                    id?: number | undefined
                    name?: string | undefined
                    type?: string | undefined
                    last_deployed?: string | undefined
                    is_public?: boolean | undefined
                    pre_built?: boolean | undefined
                    version?: string | undefined
                    attributes?: { [x: string]: unknown } | undefined
                    input?: { [x: string]: unknown } | undefined
                    returns?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    scopes?: string[] | undefined
                    endpoints?: { [x: string]: unknown }[] | undefined
                    models?: { name: string; fields?: unknown[] | undefined }[] | undefined
                  }[]
                | undefined
              'on-events'?: string[] | undefined
              provider?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'nango' | 'openai' | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { format?: 'nango' | 'openai' | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/functions/compile': {
      $post:
        | {
            input: { json: FunctionCompileRequest }
            output: FunctionCompileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FunctionCompileRequest }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FunctionCompileRequest }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FunctionCompileRequest }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FunctionCompileRequest }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: FunctionCompileRequest }
            output: StdError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: FunctionCompileRequest }
            output: StdError
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/functions/dryruns': {
      $post:
        | {
            input: { json: FunctionDryrunRequest }
            output: FunctionDryrunCreateResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: FunctionDryrunRequest }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FunctionDryrunRequest }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FunctionDryrunRequest }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FunctionDryrunRequest }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: FunctionDryrunRequest }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: FunctionDryrunRequest }
            output: StdError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: FunctionDryrunRequest }
            output: StdError
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/functions/dryruns/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: FunctionDryrunResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/functions/deployments': {
      $post:
        | {
            input: { json: FunctionDeploymentRequest }
            output: FunctionDeploymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: {
              error?:
                | {
                    code?: 'template_already_deployed' | 'ambiguous_function' | undefined
                    message?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: StdError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: FunctionDeploymentRequest }
            output: StdError
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/functions/deployments/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: FunctionDeploymentResultResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: StdError; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/records': {
      $get:
        | {
            input: {
              query: {
                model: string
                cursor?: string | undefined
                limit?: number | undefined
                filter?: 'added' | 'updated' | 'deleted' | undefined
                modified_after?: string | undefined
                delta?: string | undefined
                ids?: string[] | undefined
                variant?: string | undefined
              }
            } & { header: { 'Connection-Id': string; 'Provider-Config-Key': string } }
            output: {
              records?:
                | {
                    'your-properties'?: string | undefined
                    _nango_metadata?:
                      | {
                          deleted_at?: string | ({ [x: string]: unknown } | null) | undefined
                          last_action?: 'ADDED' | 'UPDATED' | 'DELETED' | undefined
                          first_seen_at?: string | undefined
                          last_modified_at?: string | undefined
                          cursor?: string | undefined
                          pruned_at?: string | ({ [x: string]: unknown } | null) | undefined
                        }
                      | undefined
                  }[]
                | undefined
              next_cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                model: string
                cursor?: string | undefined
                limit?: number | undefined
                filter?: 'added' | 'updated' | 'deleted' | undefined
                modified_after?: string | undefined
                delta?: string | undefined
                ids?: string[] | undefined
                variant?: string | undefined
              }
            } & { header: { 'Connection-Id': string; 'Provider-Config-Key': string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                model: string
                cursor?: string | undefined
                limit?: number | undefined
                filter?: 'added' | 'updated' | 'deleted' | undefined
                modified_after?: string | undefined
                delta?: string | undefined
                ids?: string[] | undefined
                variant?: string | undefined
              }
            } & { header: { 'Connection-Id': string; 'Provider-Config-Key': string } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/records/prune': {
      $patch:
        | {
            input: { header: { 'Connection-Id': string; 'Provider-Config-Key': string } } & {
              json: {
                model: string
                variant?: string | undefined
                until_cursor: string
                limit?: number | undefined
              }
            }
            output: { count: number; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Connection-Id': string; 'Provider-Config-Key': string } } & {
              json: {
                model: string
                variant?: string | undefined
                until_cursor: string
                limit?: number | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Connection-Id': string; 'Provider-Config-Key': string } } & {
              json: {
                model: string
                variant?: string | undefined
                until_cursor: string
                limit?: number | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sync/trigger': {
      $post:
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id?: string | undefined
                syncs: string[] | { name: string; variant?: string | undefined }[]
                opts?: { reset?: boolean | undefined; emptyCache?: boolean | undefined } | undefined
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id?: string | undefined
                syncs: string[] | { name: string; variant?: string | undefined }[]
                opts?: { reset?: boolean | undefined; emptyCache?: boolean | undefined } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sync/start': {
      $post:
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id?: string | undefined
                syncs: string[] | { name: string; variant?: string | undefined }[]
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id?: string | undefined
                syncs: string[] | { name: string; variant?: string | undefined }[]
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sync/pause': {
      $post:
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id?: string | undefined
                syncs: string[] | { name: string; variant?: string | undefined }[]
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id?: string | undefined
                syncs: string[] | { name: string; variant?: string | undefined }[]
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sync/status': {
      $get:
        | {
            input: {
              query: {
                provider_config_key: string
                syncs: string
                connection_id?: string | undefined
              }
            }
            output: {
              syncs?:
                | {
                    id?: string | undefined
                    connection_id?: string | undefined
                    name?: string | undefined
                    variant?: string | undefined
                    status?: 'RUNNING' | 'PAUSED' | 'STOPPED' | 'SUCCESS' | 'ERROR' | undefined
                    type?: 'INCREMENTAL' | 'INITIAL' | undefined
                    finishedAt?: string | undefined
                    nextScheduledSyncAt?: string | undefined
                    frequency?: string | undefined
                    latestResult?: { [x: string]: unknown } | undefined
                    recordCount?: { [x: string]: unknown } | undefined
                    checkpoint?:
                      | { [x: string]: unknown }
                      | ({ [x: string]: unknown } | null)
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                provider_config_key: string
                syncs: string
                connection_id?: string | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                provider_config_key: string
                syncs: string
                connection_id?: string | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sync/:name/variant/:variant': {
      $post:
        | {
            input: { param: { name: string; variant: string } } & {
              json: { provider_config_key: string; connection_id: string }
            }
            output: { id: string; name: string; variant: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; variant: string } } & {
              json: { provider_config_key: string; connection_id: string }
            }
            output: {
              error?:
                | {
                    code?:
                      | 'invalid_body'
                      | 'invalid_uri_params'
                      | 'invalid_query_params'
                      | 'invalid_variant'
                      | 'unknown_connection'
                      | 'unknown_provider_config'
                      | 'unknown_sync'
                      | 'sync_variant_already_exists'
                      | 'resource_capped'
                      | 'feature_disabled'
                      | undefined
                    message?: string | undefined
                    errors?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; variant: string } } & {
              json: { provider_config_key: string; connection_id: string }
            }
            output: {
              error?:
                | {
                    code?: 'failed_sync_variant_creation' | undefined
                    message?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { name: string; variant: string } } & {
              json: { provider_config_key: string; connection_id: string }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; variant: string } } & {
              json: { provider_config_key: string; connection_id: string }
            }
            output: {
              error?:
                | {
                    code?:
                      | 'invalid_body'
                      | 'invalid_uri_params'
                      | 'invalid_query_params'
                      | 'invalid_variant'
                      | 'unknown_connection'
                      | undefined
                    message?: string | undefined
                    errors?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; variant: string } } & {
              json: { provider_config_key: string; connection_id: string }
            }
            output: { error?: { code?: 'not_found' | undefined } | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; variant: string } } & {
              json: { provider_config_key: string; connection_id: string }
            }
            output: {
              error?:
                | {
                    code?: 'failed_sync_variant_deletion' | undefined
                    message?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/action/:actionId': {
      $get:
        | {
            input: { param: { actionId: string } }
            output: { 'your-properties'?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actionId: string } }
            output: { error?: { message?: string | undefined } | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actionId: string } }
            output: {
              error?:
                | {
                    message?: string | undefined
                    code?: string | undefined
                    payload?: { [x: string]: unknown } | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sync/update-connection-frequency': {
      $put:
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id: string
                sync_name: string
                sync_variant?: string | undefined
                frequency: string | ({ [x: string]: unknown } | null)
              }
            }
            output: { frequency?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                provider_config_key: string
                connection_id: string
                sync_name: string
                sync_variant?: string | undefined
                frequency: string | ({ [x: string]: unknown } | null)
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/connections/:connectionId/tools/:name/calls': {
      $post:
        | {
            input: { param: { connectionId: string; name: string } } & {
              header: { 'Provider-Config-Key'?: string | undefined }
            } & { json: { input?: { [x: string]: unknown } | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string; name: string } } & {
              header: { 'Provider-Config-Key'?: string | undefined }
            } & { json: { input?: { [x: string]: unknown } | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { connectionId: string; name: string } } & {
              header: { 'Provider-Config-Key'?: string | undefined }
            } & { json: { input?: { [x: string]: unknown } | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connectionId: string; name: string } } & {
              header: { 'Provider-Config-Key'?: string | undefined }
            } & { json: { input?: { [x: string]: unknown } | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string; name: string } } & {
              header: { 'Provider-Config-Key'?: string | undefined }
            } & { json: { input?: { [x: string]: unknown } | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { connectionId: string; name: string } } & {
              header: { 'Provider-Config-Key'?: string | undefined }
            } & { json: { input?: { [x: string]: unknown } | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/action/trigger': {
      $post:
        | {
            input: {
              header: {
                'Connection-Id': string
                'Provider-Config-Key': string
                'X-Async'?: boolean | undefined
                'X-Max-Retries'?: number | undefined
              }
            } & { json: { action_name: string; input?: { [x: string]: unknown } | undefined } }
            output:
              | { 'your-properties'?: { [x: string]: unknown } | undefined }
              | { statusUrl: string; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connection-Id': string
                'Provider-Config-Key': string
                'X-Async'?: boolean | undefined
                'X-Max-Retries'?: number | undefined
              }
            } & { json: { action_name: string; input?: { [x: string]: unknown } | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'Connection-Id': string
                'Provider-Config-Key': string
                'X-Async'?: boolean | undefined
                'X-Max-Retries'?: number | undefined
              }
            } & { json: { action_name: string; input?: { [x: string]: unknown } | undefined } }
            output: {
              error: {
                message: string
                code: string
                payload: { [x: string]: unknown }
                upstream?:
                  | {
                      status?: number | undefined
                      headers?: { 'content-type'?: string | undefined } | undefined
                      body?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 424
          }
        | {
            input: {
              header: {
                'Connection-Id': string
                'Provider-Config-Key': string
                'X-Async'?: boolean | undefined
                'X-Max-Retries'?: number | undefined
              }
            } & { json: { action_name: string; input?: { [x: string]: unknown } | undefined } }
            output: { error: { message: string; code: string; payload: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/environments': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: { data: { id: number; uuid: string; name: string; is_production: boolean }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { name?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { name?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              json: {
                name: string
                is_production?: boolean | undefined
                callback_url?: string | undefined
                hmac_key?: string | undefined
                hmac_enabled?: boolean | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: string | undefined
                      secondary_url?: string | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                      signing_key?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              data: {
                id: number
                uuid: string
                name: string
                is_production: boolean
                callback_url: string
                slack_notifications: boolean
                otlp_endpoint: string | null
                otlp_headers: { name: string; value: string }[]
                webhooks: {
                  primary_url: string | null
                  secondary_url: string | null
                  on_sync_completion_always: boolean
                  on_auth_creation: boolean
                  on_auth_refresh_error: boolean
                  on_sync_error: boolean
                  on_async_action_completion: boolean
                  on_connection_deletion: boolean
                  signing_key: string
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                is_production?: boolean | undefined
                callback_url?: string | undefined
                hmac_key?: string | undefined
                hmac_enabled?: boolean | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: string | undefined
                      secondary_url?: string | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                      signing_key?: string | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                is_production?: boolean | undefined
                callback_url?: string | undefined
                hmac_key?: string | undefined
                hmac_enabled?: boolean | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: string | undefined
                      secondary_url?: string | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                      signing_key?: string | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                is_production?: boolean | undefined
                callback_url?: string | undefined
                hmac_key?: string | undefined
                hmac_enabled?: boolean | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: string | undefined
                      secondary_url?: string | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                      signing_key?: string | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                is_production?: boolean | undefined
                callback_url?: string | undefined
                hmac_key?: string | undefined
                hmac_enabled?: boolean | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: string | undefined
                      secondary_url?: string | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                      signing_key?: string | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                name: string
                is_production?: boolean | undefined
                callback_url?: string | undefined
                hmac_key?: string | undefined
                hmac_enabled?: boolean | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: string | undefined
                      secondary_url?: string | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                      signing_key?: string | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/environments/:environmentUuid': {
      $get:
        | {
            input: { param: { environmentUuid: string } } & {
              query: { with_secrets?: boolean | undefined }
            }
            output: {
              data: {
                id: number
                uuid: string
                name: string
                is_production: boolean
                callback_url: string
                slack_notifications: boolean
                otlp_endpoint: string | null
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks: {
                  primary_url: string | null
                  secondary_url: string | null
                  on_sync_completion_always: boolean
                  on_auth_creation: boolean
                  on_auth_refresh_error: boolean
                  on_sync_error: boolean
                  on_async_action_completion: boolean
                  on_connection_deletion: boolean
                  signing_key?: string | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { with_secrets?: boolean | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { with_secrets?: boolean | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { with_secrets?: boolean | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { with_secrets?: boolean | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { with_secrets?: boolean | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { environmentUuid: string } } & {
              json: {
                name?: string | undefined
                is_production?: boolean | undefined
                callback_url?: string | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: (string | null) | undefined
                      secondary_url?: (string | null) | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: { success: true }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: {
                name?: string | undefined
                is_production?: boolean | undefined
                callback_url?: string | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: (string | null) | undefined
                      secondary_url?: (string | null) | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: {
                name?: string | undefined
                is_production?: boolean | undefined
                callback_url?: string | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: (string | null) | undefined
                      secondary_url?: (string | null) | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: {
                name?: string | undefined
                is_production?: boolean | undefined
                callback_url?: string | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: (string | null) | undefined
                      secondary_url?: (string | null) | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: {
                name?: string | undefined
                is_production?: boolean | undefined
                callback_url?: string | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: (string | null) | undefined
                      secondary_url?: (string | null) | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: {
                name?: string | undefined
                is_production?: boolean | undefined
                callback_url?: string | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: (string | null) | undefined
                      secondary_url?: (string | null) | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: {
                name?: string | undefined
                is_production?: boolean | undefined
                callback_url?: string | undefined
                slack_notifications?: boolean | undefined
                otlp_endpoint?: string | undefined
                otlp_headers?: { name: string; value: string }[] | undefined
                webhooks?:
                  | {
                      primary_url?: (string | null) | undefined
                      secondary_url?: (string | null) | undefined
                      on_sync_completion_always?: boolean | undefined
                      on_auth_creation?: boolean | undefined
                      on_auth_refresh_error?: boolean | undefined
                      on_sync_error?: boolean | undefined
                      on_async_action_completion?: boolean | undefined
                      on_connection_deletion?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { environmentUuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { environmentUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/environments/:environmentUuid/api-keys': {
      $get:
        | {
            input: { param: { environmentUuid: string } } & {
              query: { display_name?: string | undefined }
            }
            output: {
              data: {
                id: number
                uuid: string
                display_name: string
                scopes: string[]
                last_used_at: string | null
                created_at: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { display_name?: string | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { display_name?: string | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { display_name?: string | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { display_name?: string | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentUuid: string } } & {
              query: { display_name?: string | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { environmentUuid: string } } & {
              json: { display_name: string; scopes?: string[] | undefined }
            }
            output: {
              data: {
                id: number
                uuid: string
                display_name: string
                scopes: string[]
                secret: string
                created_at: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: { display_name: string; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: { display_name: string; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: { display_name: string; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: { display_name: string; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: { display_name: string; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environmentUuid: string } } & {
              json: { display_name: string; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/environments/:environmentUuid/api-keys/:keyUuid': {
      $get:
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: {
              data: {
                id: number
                uuid: string
                display_name: string
                scopes: string[]
                secret: string
                last_used_at: string | null
                created_at: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { environmentUuid: string; keyUuid: string } } & {
              json: { display_name?: string | undefined; scopes?: string[] | undefined }
            }
            output: {
              data: {
                id: number
                uuid: string
                display_name: string
                scopes: string[]
                last_used_at: string | null
                created_at: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } } & {
              json: { display_name?: string | undefined; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } } & {
              json: { display_name?: string | undefined; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } } & {
              json: { display_name?: string | undefined; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } } & {
              json: { display_name?: string | undefined; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } } & {
              json: { display_name?: string | undefined; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } } & {
              json: { display_name?: string | undefined; scopes?: string[] | undefined }
            }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentUuid: string; keyUuid: string } }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/environment-variables': {
      $get: {
        input: {}
        output: { name?: string | undefined; value?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/environment/webhook-signing-key/rotate': {
      $post:
        | {
            input: { json: { webhook_signing_key?: string | undefined } }
            output: { data: { webhook_signing_key: string } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { webhook_signing_key?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { webhook_signing_key?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { webhook_signing_key?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { webhook_signing_key?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { webhook_signing_key?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { webhook_signing_key?: string | undefined } }
            output: StdError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/proxy/:anyPath': {
      $get: {
        input: { param: { anyPath: string } } & { query: { $ANY_QUERY_PARAMS: string } } & {
          header: {
            'Connection-Id': string
            'Provider-Config-Key': string
            Retries?: string | undefined
            'Retry-On'?: string | undefined
            'Base-Url-Override'?: string | undefined
            Decompress?: string | undefined
            'nango-proxy-$ANY_HEADER'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { anyPath: string } } & {
          header: {
            'Connection-Id': string
            'Provider-Config-Key': string
            Retries?: string | undefined
            'Base-Url-Override'?: string | undefined
            Decompress?: string | undefined
            'nango-proxy-$ANY_HEADER'?: string | undefined
          }
        } & { json: { $ANY_BODY_PARAMS?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { anyPath: string } } & {
          header: {
            'Connection-Id': string
            'Provider-Config-Key': string
            Retries?: string | undefined
            'Base-Url-Override'?: string | undefined
            Decompress?: string | undefined
            'nango-proxy-$ANY_HEADER'?: string | undefined
          }
        } & { json: { $ANY_BODY_PARAMS?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { anyPath: string } } & {
          header: {
            'Connection-Id': string
            'Provider-Config-Key': string
            Retries?: string | undefined
            'Base-Url-Override'?: string | undefined
            Decompress?: string | undefined
            'nango-proxy-$ANY_HEADER'?: string | undefined
          }
        } & { json: { $ANY_BODY_PARAMS?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { anyPath: string } } & { query: { $ANY_QUERY_PARAMS: string } } & {
          header: {
            'Connection-Id': string
            'Provider-Config-Key': string
            Retries?: string | undefined
            'Base-Url-Override'?: string | undefined
            Decompress?: string | undefined
            'nango-proxy-$ANY_HEADER'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/connect/sessions': {
      $post:
        | {
            input: { json: ConnectSessionInput }
            output: { data: ConnectSession }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ConnectSessionInput }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConnectSessionInput }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/connect/sessions/reconnect': {
      $post:
        | {
            input: { json: ConnectSessionReconnectInput }
            output: { data: ConnectSession }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ConnectSessionReconnectInput }
            output: StdError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConnectSessionReconnectInput }
            output: StdError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/connect/session': {
      $get:
        | { input: {}; output: { data: ConnectSession }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: StdError; outputFormat: 'json'; status: 404 }
    }
  },
  '/'
>
export default routes
