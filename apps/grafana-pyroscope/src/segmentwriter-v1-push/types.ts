type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type TypesV1LabelPair = { name?: string | undefined; value?: string | undefined }
type TypesV1ProfileAnnotation = { key?: string | undefined; value?: string | undefined }
type SegmentwriterV1PushRequest = {
  tenantId?: string | undefined
  labels?: TypesV1LabelPair[] | undefined
  profile?: string | undefined
  profileId?: string | undefined
  shard?: number | undefined
  annotations?: TypesV1ProfileAnnotation[] | undefined
}
type SegmentwriterV1PushResponse = {}
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
    '/segmentwriter.v1.SegmentWriterService/Push': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SegmentwriterV1PushRequest }
            output: SegmentwriterV1PushResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SegmentwriterV1PushRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
