type BadRequestResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnauthorizedResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type PaymentRequiredResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type NotFoundResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnprocessableResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnexpectedErrorResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type AuthType = 'oauth2' | 'apiKey' | 'basic' | 'custom' | 'none'
type SimpleFormFieldOption = {
  label?: string | undefined
  value?: string | number | number | boolean | (string | number | number)[] | undefined
}
type FormFieldOptionGroup = {
  id?: string | undefined
  label?: string | undefined
  options?: SimpleFormFieldOption[] | undefined
}
type FormFieldOption = SimpleFormFieldOption | FormFieldOptionGroup
type FormField = {
  allow_custom_values?: boolean | undefined
  custom_field?: boolean | undefined
  description?: (string | null) | undefined
  disabled?: (boolean | null) | undefined
  hidden?: (boolean | null) | undefined
  id?: string | undefined
  label?: string | undefined
  options?: FormFieldOption[] | undefined
  placeholder?: (string | null) | undefined
  prefix?: (string | null) | undefined
  required?: boolean | undefined
  sensitive?: (boolean | null) | undefined
  suffix?: (string | null) | undefined
  type?:
    | 'text'
    | 'checkbox'
    | 'tel'
    | 'email'
    | 'url'
    | 'textarea'
    | 'select'
    | 'filtered-select'
    | 'multi-select'
    | 'datetime'
    | 'date'
    | 'time'
    | 'number'
    | undefined
}
type IntegrationState = 'disabled' | 'needs_configuration' | 'configured'
type OAuthGrantType = 'authorization_code' | 'client_credentials' | 'password'
type ConnectionState = 'available' | 'callable' | 'added' | 'authorized' | 'invalid'
type WebhookSubscription = {
  created_at?: string | undefined
  downstream_event_types?: string[] | undefined
  downstream_id?: string | undefined
  execute_url?: string | undefined
  unify_event_types?: string[] | undefined
}
type Connection = {
  auth_type?: AuthType | undefined
  authorize_url?: (string | null) | undefined
  configurable_resources?: string[] | undefined
  configuration?:
    | {
        defaults?:
          | {
              id?: string | undefined
              options?: FormFieldOption[] | undefined
              target?: 'custom_fields' | 'resource' | undefined
              value?: string | number | number | boolean | (string | number | number)[] | undefined
            }[]
          | undefined
        resource?: string | undefined
      }[]
    | undefined
  created_at?: number | undefined
  enabled?: boolean | undefined
  form_fields?: FormField[] | undefined
  has_guide?: boolean | undefined
  icon?: string | undefined
  id?: string | undefined
  integration_state?: IntegrationState | undefined
  logo?: string | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  name?: string | undefined
  oauth_grant_type?: OAuthGrantType | undefined
  resource_schema_support?: string[] | undefined
  resource_settings_support?: string[] | undefined
  revoke_url?: (string | null) | undefined
  service_id?: string | undefined
  settings?: ({ [x: string]: unknown } | null) | undefined
  settings_required_for_authorization?: string[] | undefined
  state?: ConnectionState | undefined
  status?: 'live' | 'upcoming' | 'requested' | undefined
  subscriptions?: WebhookSubscription[] | undefined
  tag_line?: string | undefined
  unified_api?: string | undefined
  updated_at?: (number | null) | undefined
  validation_support?: boolean | undefined
  website?: string | undefined
}
type GetConnectionsResponse = { data: Connection[]; status: string; status_code: number }
type GetConnectionResponse = { data: Connection; status: string; status_code: number }
type UpdateConnectionResponse = { data: Connection; status: string; status_code: number }
type CreateConnectionResponse = { data: Connection; status: string; status_code: number }
type ConnectionImportData = {
  credentials?:
    | {
        access_token?: string | undefined
        expires_in?: (number | null) | undefined
        issued_at?: (string | null) | undefined
        refresh_token: string
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  settings?: ({ [x: string]: unknown } | null) | undefined
}
type ConsumerMetadata = {
  account_name?: string | undefined
  email?: string | undefined
  image?: string | undefined
  user_name?: string | undefined
}
type RequestCountAllocation = {
  proxy?: number | undefined
  unify?: number | undefined
  vault?: number | undefined
}
type Links = {
  current?: string | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type Meta = {
  cursors?:
    | {
        current?: (string | null) | undefined
        next?: (string | null) | undefined
        previous?: (string | null) | undefined
      }
    | undefined
  items_on_page?: number | undefined
}
type GetConsumersResponse = {
  data: {
    aggregated_request_count?: number | undefined
    application_id?: string | undefined
    consumer_id?: string | undefined
    created?: string | undefined
    metadata?: ConsumerMetadata | undefined
    modified?: string | undefined
    request_count_updated?: string | undefined
    request_counts?: RequestCountAllocation | undefined
    services?: string[] | undefined
  }[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type ConsumerConnection = {
  auth_type?: AuthType | undefined
  consumer_id?: string | undefined
  created_at?: string | undefined
  enabled?: boolean | undefined
  icon?: string | undefined
  id?: string | undefined
  logo?: string | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  name?: string | undefined
  service_id?: string | undefined
  settings?: ({ [x: string]: unknown } | null) | undefined
  state?: 'available' | 'callable' | 'added' | 'configured' | 'authorized' | undefined
  tag_line?: string | undefined
  unified_api?: string | undefined
  updated_at?: (string | null) | undefined
  website?: string | undefined
}
type ConsumerId = string
type Consumer = {
  aggregated_request_count?: number | undefined
  application_id?: string | undefined
  connections?: ConsumerConnection[] | undefined
  consumer_id: ConsumerId
  created?: string | undefined
  metadata?: ConsumerMetadata | undefined
  modified?: string | undefined
  request_count_updated?: string | undefined
  request_counts?: RequestCountAllocation | undefined
  services?: string[] | undefined
}
type CreateConsumerResponse = { data: Consumer; status: string; status_code: number }
type DeleteConsumerResponse = {
  data: { consumer_id?: ConsumerId | undefined }
  status: string
  status_code: number
}
type GetConsumerResponse = { data: Consumer; status: string; status_code: number }
type UpdateConsumerRequest = { metadata?: ConsumerMetadata | undefined }
type UpdateConsumerResponse = { data: Consumer; status: string; status_code: number }
type ConsumerRequestCountsInDateRangeResponse = {
  data: {
    aggregated_request_count?: number | undefined
    application_id?: string | undefined
    consumer_id?: string | undefined
    end_datetime?: string | undefined
    request_counts?: RequestCountAllocation | undefined
    start_datetime?: string | undefined
  }
  status: string
  status_code: number
}
type LogsFilter = {
  connector_id?: (string | null) | undefined
  exclude_unified_apis?: (string | null) | undefined
  status_code?: (number | null) | undefined
}
type Log = {
  api_style: string
  base_url: string
  child_request: boolean
  consumer_id: string
  duration: number
  error_message?: (string | null) | undefined
  execution: number
  has_children: boolean
  http_method: string
  id: string
  latency: number
  operation: { id: string; name: string }
  parent_id: string | null
  path: string
  sandbox: boolean
  service: { id: string; name: string }
  source_ip?: (string | null) | undefined
  status_code: number
  success: boolean
  timestamp: string
  unified_api:
    | 'crm'
    | 'lead'
    | 'proxy'
    | 'vault'
    | 'accounting'
    | 'hris'
    | 'ats'
    | 'ecommerce'
    | 'issue-tracking'
    | 'pos'
    | 'file-storage'
    | 'sms'
}
type GetLogsResponse = {
  data: Log[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type UnifiedApiId =
  | 'accounting'
  | 'ats'
  | 'calendar'
  | 'crm'
  | 'csp'
  | 'customer-support'
  | 'ecommerce'
  | 'email'
  | 'email-marketing'
  | 'expense-management'
  | 'file-storage'
  | 'form'
  | 'hris'
  | 'lead'
  | 'payroll'
  | 'pos'
  | 'procurement'
  | 'project-management'
  | 'script'
  | 'sms'
  | 'spreadsheet'
  | 'team-messaging'
  | 'issue-tracking'
  | 'time-registration'
  | 'transactional-email'
  | 'vault'
type Session = {
  consumer_metadata?: ConsumerMetadata | undefined
  custom_consumer_settings?: { [x: string]: unknown } | undefined
  redirect_uri?: string | undefined
  settings?:
    | {
        allow_actions?: ('delete' | 'disconnect' | 'reauthorize' | 'disable')[] | undefined
        auto_redirect?: boolean | undefined
        hide_guides?: boolean | undefined
        hide_resource_settings?: boolean | undefined
        isolation_mode?: boolean | undefined
        sandbox_mode?: boolean | undefined
        session_length?: string | undefined
        show_logs?: boolean | undefined
        show_sidebar?: boolean | undefined
        show_suggestions?: boolean | undefined
        unified_apis?: UnifiedApiId[] | undefined
      }
    | undefined
  theme?:
    | {
        favicon?: string | undefined
        logo?: string | undefined
        primary_color?: string | undefined
        privacy_url?: string | undefined
        sidepanel_background_color?: string | undefined
        sidepanel_text_color?: string | undefined
        terms_url?: string | undefined
        vault_name?: string | undefined
      }
    | undefined
}
type CreateSessionResponse = {
  data: { session_token: string; session_uri: string }
  status: string
  status_code: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/vault/authorize/:service_id/:application_id': {
      $get:
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string; scope?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string; scope?: string[] | undefined }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string; scope?: string[] | undefined }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string; scope?: string[] | undefined }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string; scope?: string[] | undefined }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string; scope?: string[] | undefined }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string; scope?: string[] | undefined }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/callback': {
      $get:
        | {
            input: { query: { state: string; code: string } }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: { query: { state: string; code: string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { state: string; code: string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { state: string; code: string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { state: string; code: string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { state: string; code: string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { state: string; code: string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/connections': {
      $get:
        | {
            input: { query: { api?: string | undefined; configured?: boolean | undefined } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: GetConnectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api?: string | undefined; configured?: boolean | undefined } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { api?: string | undefined; configured?: boolean | undefined } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { api?: string | undefined; configured?: boolean | undefined } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { api?: string | undefined; configured?: boolean | undefined } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { api?: string | undefined; configured?: boolean | undefined } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { api?: string | undefined; configured?: boolean | undefined } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/connections/:unified_api/:service_id': {
      $delete:
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: GetConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UpdateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: CreateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/connections/:unified_api/:service_id/import': {
      $post:
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: ConnectionImportData }
            output: CreateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: ConnectionImportData }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: ConnectionImportData }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: ConnectionImportData }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: ConnectionImportData }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: ConnectionImportData }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: ConnectionImportData }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/connections/:unified_api/:service_id/token': {
      $post:
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: {} }
            output: GetConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: {} }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: {} }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: {} }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: {} }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: {} }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; unified_api: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: {} }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/connections/:unified_api/:service_id/:resource/config': {
      $get:
        | {
            input: { param: { unified_api: string; service_id: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: GetConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { unified_api: string; service_id: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { unified_api: string; service_id: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { unified_api: string; service_id: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { unified_api: string; service_id: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { unified_api: string; service_id: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { unified_api: string; service_id: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { service_id: string; unified_api: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UpdateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id: string; unified_api: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; unified_api: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; unified_api: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; unified_api: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; unified_api: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; unified_api: string; resource: string } } & {
              header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string }
            } & { json: Connection }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/consumers': {
      $get:
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: GetConsumersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: Consumer }
            output: CreateConsumerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: Consumer }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: Consumer }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: Consumer }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: Consumer }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: Consumer }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: Consumer }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/consumers/:consumer_id': {
      $delete:
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: DeleteConsumerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: GetConsumerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { consumer_id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { consumer_id: string } } & {
              header: { 'x-apideck-app-id': string }
            } & { json: UpdateConsumerRequest }
            output: UpdateConsumerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_id: string } } & {
              header: { 'x-apideck-app-id': string }
            } & { json: UpdateConsumerRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consumer_id: string } } & {
              header: { 'x-apideck-app-id': string }
            } & { json: UpdateConsumerRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_id: string } } & {
              header: { 'x-apideck-app-id': string }
            } & { json: UpdateConsumerRequest }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { consumer_id: string } } & {
              header: { 'x-apideck-app-id': string }
            } & { json: UpdateConsumerRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { consumer_id: string } } & {
              header: { 'x-apideck-app-id': string }
            } & { json: UpdateConsumerRequest }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { consumer_id: string } } & {
              header: { 'x-apideck-app-id': string }
            } & { json: UpdateConsumerRequest }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/consumers/:consumer_id/stats': {
      $get:
        | {
            input: { param: { consumer_id: string } } & {
              query: { start_datetime: string; end_datetime: string }
            } & { header: { 'x-apideck-app-id': string } }
            output: ConsumerRequestCountsInDateRangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_id: string } } & {
              query: { start_datetime: string; end_datetime: string }
            } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consumer_id: string } } & {
              query: { start_datetime: string; end_datetime: string }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_id: string } } & {
              query: { start_datetime: string; end_datetime: string }
            } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { consumer_id: string } } & {
              query: { start_datetime: string; end_datetime: string }
            } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { consumer_id: string } } & {
              query: { start_datetime: string; end_datetime: string }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { consumer_id: string } } & {
              query: { start_datetime: string; end_datetime: string }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/logs': {
      $get:
        | {
            input: {
              query: {
                filter?: LogsFilter | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-apideck-app-id': string; 'x-apideck-consumer-id': string } }
            output: GetLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: LogsFilter | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-apideck-app-id': string; 'x-apideck-consumer-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: LogsFilter | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-apideck-app-id': string; 'x-apideck-consumer-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: LogsFilter | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-apideck-app-id': string; 'x-apideck-consumer-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                filter?: LogsFilter | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-apideck-app-id': string; 'x-apideck-consumer-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: LogsFilter | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-apideck-app-id': string; 'x-apideck-consumer-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                filter?: LogsFilter | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-apideck-app-id': string; 'x-apideck-consumer-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/revoke/:service_id/:application_id': {
      $get:
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string }
            }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { service_id: string; application_id: string } } & {
              query: { state: string; redirect_uri: string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vault/sessions': {
      $post:
        | {
            input: { header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string } } & {
              json: Session
            }
            output: CreateSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string } } & {
              json: Session
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string } } & {
              json: Session
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string } } & {
              json: Session
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string } } & {
              json: Session
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string } } & {
              json: Session
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'x-apideck-consumer-id': string; 'x-apideck-app-id': string } } & {
              json: Session
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
