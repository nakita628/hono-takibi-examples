type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type MetastoreV1DeleteTenantRequest = { tenantId?: string | undefined }
type MetastoreV1DeleteTenantResponse = {}
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
type MetastoreV1GetTenantRequest = { tenantId?: string | undefined }
type MetastoreV1TenantStats = {
  dataIngested?: boolean | undefined
  oldestProfileTime?: bigint | string | undefined
  newestProfileTime?: bigint | string | undefined
}
type MetastoreV1GetTenantResponse = { stats?: MetastoreV1TenantStats | undefined }
type MetastoreV1GetTenantsRequest = {}
type MetastoreV1GetTenantsResponse = { tenantIds?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/metastore.v1.TenantService/DeleteTenant': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1DeleteTenantRequest }
            output: MetastoreV1DeleteTenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1DeleteTenantRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metastore.v1.TenantService/GetTenant': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1GetTenantRequest }
            output: MetastoreV1GetTenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1GetTenantRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metastore.v1.TenantService/GetTenants': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1GetTenantsRequest }
            output: MetastoreV1GetTenantsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1GetTenantsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
