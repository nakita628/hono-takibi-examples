type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type TypesV1LabelPair = { name?: string | undefined; value?: string | undefined }
type PushV1RawSample = { rawProfile?: string | undefined; ID?: string | undefined }
type TypesV1ProfileAnnotation = { key?: string | undefined; value?: string | undefined }
type PushV1RawProfileSeries = {
  labels?: TypesV1LabelPair[] | undefined
  samples?: PushV1RawSample[] | undefined
  annotations?: TypesV1ProfileAnnotation[] | undefined
}
type PushV1PushRequest = { series?: PushV1RawProfileSeries[] | undefined }
type PushV1PushResponse = {}
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/push.v1.PusherService/Push': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: PushV1PushRequest }
            output: PushV1PushResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: PushV1PushRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
