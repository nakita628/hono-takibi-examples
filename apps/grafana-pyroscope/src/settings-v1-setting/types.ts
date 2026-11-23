type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type SettingsV1DeleteSettingsRequest = { name?: string | undefined }
type SettingsV1DeleteSettingsResponse = {}
type ConnectErrorDetailsAny = {
  type?: string | undefined
  value?: File | undefined
  debug?: { [x: string]: unknown } | undefined
}
type ConnectError = {
  code?:
    | 'canceled'
    | 'unknown'
    | 'invalid_argument'
    | 'deadline_exceeded'
    | 'not_found'
    | 'already_exists'
    | 'permission_denied'
    | 'resource_exhausted'
    | 'failed_precondition'
    | 'aborted'
    | 'out_of_range'
    | 'unimplemented'
    | 'internal'
    | 'unavailable'
    | 'data_loss'
    | 'unauthenticated'
    | undefined
  message?: string | undefined
  details?: ConnectErrorDetailsAny[] | undefined
}
type SettingsV1GetSettingsRequest = {}
type SettingsV1Setting = {
  name?: string | undefined
  value?: string | undefined
  modifiedAt?: bigint | string | undefined
}
type SettingsV1GetSettingsResponse = { settings?: SettingsV1Setting[] | undefined }
type SettingsV1SetSettingsRequest = { setting?: SettingsV1Setting | undefined }
type SettingsV1SetSettingsResponse = { setting?: SettingsV1Setting | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/settings.v1.SettingsService/Delete': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1DeleteSettingsRequest }
            output: SettingsV1DeleteSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1DeleteSettingsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings.v1.SettingsService/Get': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1GetSettingsRequest }
            output: SettingsV1GetSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1GetSettingsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings.v1.SettingsService/Set': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1SetSettingsRequest }
            output: SettingsV1SetSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1SetSettingsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
