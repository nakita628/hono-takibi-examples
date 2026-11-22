type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type CapabilitiesV1GetFeatureFlagsRequest = {}
type CapabilitiesV1FeatureFlag = {
  name?: string | undefined
  enabled?: boolean | undefined
  description?: (string | null) | undefined
  documentationUrl?: (string | null) | undefined
}
type CapabilitiesV1GetFeatureFlagsResponse = {
  featureFlags?: CapabilitiesV1FeatureFlag[] | undefined
}
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
    '/capabilities.v1.FeatureFlagsService/GetFeatureFlags': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: CapabilitiesV1GetFeatureFlagsRequest }
            output: CapabilitiesV1GetFeatureFlagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: CapabilitiesV1GetFeatureFlagsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
