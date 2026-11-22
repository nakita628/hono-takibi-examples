type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type MetastoreV1QueryMetadataRequest = {
  tenantId?: string[] | undefined
  startTime?: bigint | string | undefined
  endTime?: bigint | string | undefined
  query?: string | undefined
  labels?: string[] | undefined
  shardSelector?: string | undefined
}
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
type MetastoreV1QueryMetadataResponse = { blocks?: MetastoreV1BlockMeta[] | undefined }
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
type MetastoreV1QueryMetadataLabelsRequest = {
  tenantId?: string[] | undefined
  startTime?: bigint | string | undefined
  endTime?: bigint | string | undefined
  query?: string | undefined
  labels?: string[] | undefined
}
type TypesV1LabelPair = { name?: string | undefined; value?: string | undefined }
type TypesV1Labels = { labels?: TypesV1LabelPair[] | undefined }
type MetastoreV1QueryMetadataLabelsResponse = { labels?: TypesV1Labels[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/metastore.v1.MetadataQueryService/QueryMetadata': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1QueryMetadataRequest }
            output: MetastoreV1QueryMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1QueryMetadataRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metastore.v1.MetadataQueryService/QueryMetadataLabels': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1QueryMetadataLabelsRequest }
            output: MetastoreV1QueryMetadataLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1QueryMetadataLabelsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
