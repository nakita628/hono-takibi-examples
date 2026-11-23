type ApiStatus = 'live' | 'beta' | 'development' | 'considering'
type ApisFilter = { status?: ApiStatus | undefined }
type ResourceStatus = 'live' | 'beta' | 'development' | 'upcoming' | 'considering'
type Api = {
  api_reference_url?: string | undefined
  categories?: string[] | undefined
  description?: (string | null) | undefined
  events?: string[] | undefined
  id?: string | undefined
  name?: string | undefined
  postman_collection_id?: (string | null) | undefined
  resources?:
    | {
        excluded_from_coverage?: boolean | undefined
        id?: string | undefined
        name?: string | undefined
        status?: ResourceStatus | undefined
      }[]
    | undefined
  spec_url?: string | undefined
  status?: ApiStatus | undefined
  type?: 'platform' | 'unified' | undefined
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
type GetApisResponse = {
  data: Api[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
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
type UnexpectedErrorResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type GetApiResponse = {
  data: Api
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type NotFoundResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type ResourceId = string
type UnifiedProperty = string
type ApiResource = {
  id?: string | undefined
  linked_resources?:
    | { id?: ResourceId | undefined; unified_property?: UnifiedProperty | undefined }[]
    | undefined
  name?: string | undefined
  schema?: { [x: string]: unknown } | undefined
  status?: ResourceStatus | undefined
}
type GetApiResourceResponse = {
  data: ApiResource
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type PaginationCoverage = {
  limit_support?: boolean | undefined
  mode?: 'native' | 'virtual' | undefined
  paging_support?: boolean | undefined
}
type SupportedProperty = {
  child_properties?: { unified_property?: SupportedProperty | undefined }[] | undefined
  unified_property?: UnifiedProperty | undefined
}
type ApiResourceCoverage = {
  coverage?:
    | {
        downstream_id?: string | undefined
        downstream_name?: string | undefined
        pagination?: PaginationCoverage | undefined
        pagination_supported?: boolean | undefined
        supported_fields?: SupportedProperty[] | undefined
        supported_filters?: string[] | undefined
        supported_list_fields?: SupportedProperty[] | undefined
        supported_operations?: string[] | undefined
        supported_sort_by?: string[] | undefined
      }[]
    | undefined
  id?: string | undefined
  name?: string | undefined
  status?: ResourceStatus | undefined
}
type GetApiResourceCoverageResponse = {
  data: ApiResourceCoverage
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type ConnectorStatus = 'live' | 'beta' | 'development' | 'considering'
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
type ConnectorsFilter = {
  status?: ConnectorStatus | undefined
  unified_api?: UnifiedApiId | undefined
}
type Id = string
type ConnectorDoc = {
  audience?: 'application_owner' | 'consumer' | undefined
  format?: 'markdown' | undefined
  id?: Id | undefined
  name?: string | undefined
  url?: string | undefined
}
type ConnectorSetting = {
  id?: string | undefined
  label?: string | undefined
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
    | 'password'
    | undefined
}
type ConnectorEvent = {
  downstream_event_type?: string | undefined
  entity_type?: string | undefined
  event_source?: 'native' | 'virtual' | undefined
  event_type?: string | undefined
  resources?: ResourceId[] | undefined
}
type LinkedConnectorResource = {
  downstream_id?: string | undefined
  downstream_name?: string | undefined
  id?: ResourceId | undefined
  name?: string | undefined
  status?: ResourceStatus | undefined
}
type WebhookSupport = {
  managed_via?: 'manual' | 'api' | undefined
  mode?: 'native' | 'virtual' | 'none' | undefined
  subscription_level?: 'connection' | 'integration' | undefined
  virtual_webhooks?:
    | {
        request_rate: { rate: number; size: number; unit: 'second' | 'minute' | 'hour' | 'day' }
        resources?: { [x: string]: unknown } | undefined
      }
    | undefined
}
type Connector = {
  auth_only?: boolean | undefined
  auth_type?: 'oauth2' | 'apiKey' | 'basic' | 'custom' | 'none' | undefined
  blind_mapped?: boolean | undefined
  configurable_resources?: ResourceId[] | undefined
  custom_scopes?: boolean | undefined
  description?: (string | null) | undefined
  docs?: ConnectorDoc[] | undefined
  free_trial_available?: boolean | undefined
  has_sandbox_credentials?: boolean | undefined
  icon_url?: string | undefined
  id?: string | undefined
  logo_url?: string | undefined
  name?: string | undefined
  oauth_credentials_source?: 'integration' | 'connection' | undefined
  oauth_grant_type?: 'authorization_code' | 'client_credentials' | 'password' | undefined
  oauth_scopes?:
    | { default_apis?: string[] | undefined; id?: string | undefined; label?: string | undefined }[]
    | undefined
  service_id?: string | undefined
  settings?: ConnectorSetting[] | undefined
  signup_url?: string | undefined
  status?: ConnectorStatus | undefined
  supported_events?: ConnectorEvent[] | undefined
  supported_resources?: LinkedConnectorResource[] | undefined
  tls_support?: { description?: string | undefined; type?: string | undefined } | undefined
  unified_apis?:
    | {
        downstream_unsupported_resources?: ResourceId[] | undefined
        id?: UnifiedApiId | undefined
        name?: string | undefined
        oauth_scopes?: { id?: string | undefined; label?: string | undefined }[] | undefined
        supported_events?: ConnectorEvent[] | undefined
        supported_resources?: LinkedConnectorResource[] | undefined
      }[]
    | undefined
  webhook_support?: WebhookSupport | undefined
  website_url?: string | undefined
}
type GetConnectorsResponse = {
  data: Connector[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type GetConnectorResponse = {
  data: Connector
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type ConnectorResource = {
  custom_fields_supported?: boolean | undefined
  downstream_id?: string | undefined
  downstream_name?: string | undefined
  downstream_unsupported_operations?: string[] | undefined
  id?: ResourceId | undefined
  name?: string | undefined
  pagination?: PaginationCoverage | undefined
  pagination_supported?: boolean | undefined
  status?: ResourceStatus | undefined
  supported_fields?: SupportedProperty[] | undefined
  supported_filters?: string[] | undefined
  supported_list_fields?: SupportedProperty[] | undefined
  supported_operations?: string[] | undefined
  supported_sort_by?: string[] | undefined
}
type GetConnectorResourceResponse = {
  data: ConnectorResource
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/connector/apis': {
      $get:
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ApisFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: GetApisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ApisFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ApisFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ApisFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ApisFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/connector/apis/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: GetApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/connector/apis/:id/resources/:resource_id': {
      $get:
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: GetApiResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/connector/apis/:id/resources/:resource_id/coverage': {
      $get:
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: GetApiResourceCoverageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/connector/connectors': {
      $get:
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ConnectorsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: GetConnectorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ConnectorsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ConnectorsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ConnectorsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: ConnectorsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/connector/connectors/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: GetConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/connector/connectors/:id/docs/:doc_id': {
      $get:
        | {
            input: { param: { id: string; doc_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; doc_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; doc_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; doc_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; doc_id: string } } & {
              header: { 'x-apideck-app-id': string }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/connector/connectors/:id/resources/:resource_id': {
      $get:
        | {
            input: { param: { id: string; resource_id: string } } & {
              query: { unified_api?: UnifiedApiId | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: GetConnectorResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              query: { unified_api?: UnifiedApiId | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              query: { unified_api?: UnifiedApiId | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              query: { unified_api?: UnifiedApiId | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; resource_id: string } } & {
              query: { unified_api?: UnifiedApiId | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
