type DateTimeRFC3339 = string
type Introspection = {
  Features?: string[] | undefined
  IssuedAt?: DateTimeRFC3339 | undefined
  UUID?: string | undefined
}
type Error = { Error?: { Message?: string | undefined } | undefined }
type Cursor = { cursor?: string | undefined }
type ResetCursor = {
  end_time?: DateTimeRFC3339 | undefined
  limit?: number | undefined
  start_time?: DateTimeRFC3339 | undefined
}
type Action = { [x: string]: unknown }
type Client = {
  app_name?: string | undefined
  app_version?: string | undefined
  ip_address?: string | undefined
  os_name?: string | undefined
  os_version?: string | undefined
  platform_name?: string | undefined
  platform_version?: string | undefined
}
type UUID = string
type User = { email?: string | undefined; name?: string | undefined; uuid?: UUID | undefined }
type ItemUsage = {
  action?: Action | undefined
  client?: Client | undefined
  item_uuid?: UUID | undefined
  timestamp?: DateTimeRFC3339 | undefined
  used_version?: number | undefined
  user?: User | undefined
  uuid?: UUID | undefined
  vault_uuid?: UUID | undefined
}
type ItemUsageItems = {
  items?: ItemUsage[] | undefined
  cursor?: string | undefined
  has_more?: boolean | undefined
}
type Details = { value?: string | undefined }
type SignInAttempt = {
  category?:
    | 'success'
    | 'credentials_failed'
    | 'mfa_failed'
    | 'modern_version_failed'
    | 'firewall_failed'
    | 'firewall_reported_success'
    | undefined
  client?: Client | undefined
  country?: string | undefined
  details?: Details | undefined
  session_uuid?: UUID | undefined
  target_user?: User | undefined
  timestamp?: DateTimeRFC3339 | undefined
  type?:
    | 'credentials_ok'
    | 'mfa_ok'
    | 'password_secret_bad'
    | 'mfa_missing'
    | 'totp_disabled'
    | 'totp_bad'
    | 'totp_timeout'
    | 'u2f_disabled'
    | 'u2f_bad'
    | 'u2f_timout'
    | 'duo_disabled'
    | 'duo_bad'
    | 'duo_timeout'
    | 'duo_native_bad'
    | 'platform_secret_disabled'
    | 'platform_secret_bad'
    | 'platform_secret_proxy'
    | 'code_disabled'
    | 'code_bad'
    | 'code_timeout'
    | 'ip_blocked'
    | 'continent_blocked'
    | 'country_blocked'
    | 'anonymous_blocked'
    | 'all_blocked'
    | 'modern_version_missing'
    | 'modern_version_old'
    | undefined
  uuid?: UUID | undefined
}
type SignInAttemptItems = {
  items?: SignInAttempt[] | undefined
  cursor?: string | undefined
  has_more?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/auth/introspect': {
      $get:
        | { input: {}; output: Introspection; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/itemusages': {
      $post:
        | {
            input: { json: Cursor | ResetCursor }
            output: ItemUsageItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Cursor | ResetCursor }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Cursor | ResetCursor }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/signinattempts': {
      $post:
        | {
            input: { json: Cursor | ResetCursor }
            output: SignInAttemptItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Cursor | ResetCursor }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Cursor | ResetCursor }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
