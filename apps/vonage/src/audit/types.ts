type EventTypes =
  | 'USER_STATUS'
  | 'USER_UPDATE'
  | 'USER_BILLING_UPDATE'
  | 'USER_CREATE'
  | 'USER_LOGIN'
  | 'USER_LOGOUT'
  | 'USER_PRODUCT_SEARCH'
  | 'USER_API_KEYS_UPDATE'
  | 'ACCOUNT_SECRET_DELETE'
  | 'ACCOUNT_SECRET_CREATE'
  | 'ACCOUNT_UPDATE_SPAMMER'
  | 'ACCOUNT_UPDATE_SETTINGS_API'
  | 'NUMBER_ASSIGN'
  | 'NUMBER_UPDATED'
  | 'NUMBER_RELEASE'
  | 'NUMBER_LINKED'
  | 'NUMBER_UNLINKED'
  | 'APP_CREATE'
  | 'APP_UPDATE'
  | 'APP_DELETE'
  | 'APP_DISABLE'
  | 'APP_ENABLE'
  | 'IP_WHITELIST_CREATE'
  | 'IP_WHITELIST_DELETE'
  | 'AUTORELOAD_ENABLE'
  | 'AUTORELOAD_UPDATE'
  | 'AUTORELOAD_DISABLE'
type EventLink = { self?: { href?: string | undefined } | undefined }
type CallbackUrl = { method?: 'GET' | 'POST' | undefined; url?: string | undefined }
type ContextAppCreate = {
  appId?: string | undefined
  created?:
    | {
        accountId?: string | undefined
        answer_url?: CallbackUrl | undefined
        appId?: string | undefined
        event_url?: CallbackUrl | undefined
        name?: string | undefined
        type?: string | undefined
      }
    | undefined
}
type ContextNumberLinking = {
  account?: string | undefined
  applicationId?: string | undefined
  country?: string | undefined
  msisdn?: string | undefined
}
type ContextNumberUpdate = {
  country?: string | undefined
  http?: string | undefined
  msisdn?: string | undefined
  'voice-type'?: 'tel' | 'sip' | 'vxml' | 'app' | undefined
  'voice-value'?: string | undefined
}
type AuditEvent = {
  _links?: EventLink | undefined
  account_id?: string | undefined
  context?: ContextAppCreate | ContextNumberLinking | ContextNumberUpdate | undefined
  created_at?: string | undefined
  event_type?: EventTypes | undefined
  event_type_description?: string | undefined
  id?: string | undefined
  source?: 'CD' | 'DEVAPI' | undefined
  source_country?: string | undefined
  source_description?: 'Customer Dashboard' | 'Developer API' | undefined
  source_ip?: string | undefined
  user_email?: string | undefined
  user_id?: number | undefined
}
type PaginationLinks = {
  last?: { href?: string | undefined } | undefined
  next?: { href?: string | undefined } | undefined
  self?: { href?: string | undefined } | undefined
}
type PaginationData = {
  number?: number | undefined
  size?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type AuditResp = {
  _embedded?: { events?: AuditEvent[] | undefined } | undefined
  _links?: PaginationLinks | undefined
  page?: PaginationData | undefined
}
type ErrorUnauthorized = {
  error?: string | undefined
  message?: string | undefined
  status?: number | undefined
}
type ErrorForbidden = {
  error?: string | undefined
  message?: string | undefined
  status?: number | undefined
}
type ErrorNotFound = {
  error?: string | undefined
  message?: string | undefined
  status?: number | undefined
}
type AuditEventType = { description?: string | undefined; type?: EventTypes | undefined }
type AuditEventTypesResp = { eventTypes?: AuditEventType[] | undefined }
type NoContent = {
  error?: string | undefined
  message?: string | undefined
  status?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/events': {
      $get:
        | {
            input: {
              query: {
                event_type?: EventTypes | undefined
                date_from?: string | undefined
                date_to?: string | undefined
                search_text?: string | undefined
                page?: string | undefined
                size?: number | undefined
              }
            }
            output: AuditResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                event_type?: EventTypes | undefined
                date_from?: string | undefined
                date_to?: string | undefined
                search_text?: string | undefined
                page?: string | undefined
                size?: number | undefined
              }
            }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                event_type?: EventTypes | undefined
                date_from?: string | undefined
                date_to?: string | undefined
                search_text?: string | undefined
                page?: string | undefined
                size?: number | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                event_type?: EventTypes | undefined
                date_from?: string | undefined
                date_to?: string | undefined
                search_text?: string | undefined
                page?: string | undefined
                size?: number | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $options:
        | { input: {}; output: AuditEventTypesResp; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NoContent; outputFormat: 'json'; status: 204 }
        | { input: {}; output: ErrorUnauthorized; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorForbidden; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/events/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AuditEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
