type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type MetastoreV1Dataset = {
  format?: number | undefined
  tenant?: number | undefined
  name?: number | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  tableOfContents?: (bigint | string)[] | undefined
  size?: bigint | string | undefined
  labels?: number[] | undefined
}
type MetastoreV1BlockMeta = {
  formatVersion?: number | undefined
  id?: string | undefined
  tenant?: number | undefined
  shard?: number | undefined
  compactionLevel?: number | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  createdBy?: number | undefined
  metadataOffset?: bigint | string | undefined
  size?: bigint | string | undefined
  datasets?: MetastoreV1Dataset[] | undefined
  stringTable?: string[] | undefined
}
type MetastoreV1AddBlockRequest = { block?: MetastoreV1BlockMeta | undefined }
type MetastoreV1AddBlockResponse = {}
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
type MetastoreV1BlockList = {
  tenant?: string | undefined
  shard?: number | undefined
  blocks?: string[] | undefined
}
type MetastoreV1GetBlockMetadataRequest = { blocks?: MetastoreV1BlockList | undefined }
type MetastoreV1GetBlockMetadataResponse = { blocks?: MetastoreV1BlockMeta[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/metastore.v1.IndexService/AddBlock': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1AddBlockRequest }
            output: MetastoreV1AddBlockResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1AddBlockRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metastore.v1.IndexService/GetBlockMetadata': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1GetBlockMetadataRequest }
            output: MetastoreV1GetBlockMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1GetBlockMetadataRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
