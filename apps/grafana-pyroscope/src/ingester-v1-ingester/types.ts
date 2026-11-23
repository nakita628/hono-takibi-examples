type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type IngesterV1BlockMetadataRequest = {
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1BlockCompaction = {
  level?: number | undefined
  sources?: string[] | undefined
  parents?: string[] | undefined
}
type TypesV1LabelPair = { name?: string | undefined; value?: string | undefined }
type TypesV1BlockInfo = {
  ulid?: string | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  compaction?: TypesV1BlockCompaction | undefined
  labels?: TypesV1LabelPair[] | undefined
}
type IngesterV1BlockMetadataResponse = { blocks?: TypesV1BlockInfo[] | undefined }
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
type IngesterV1FlushRequest = {}
type IngesterV1FlushResponse = {}
type IngesterV1GetBlockStatsRequest = { ulids?: string[] | undefined }
type IngesterV1BlockStats = {
  seriesCount?: bigint | string | undefined
  profileCount?: bigint | string | undefined
  sampleCount?: bigint | string | undefined
  indexBytes?: bigint | string | undefined
  profileBytes?: bigint | string | undefined
  symbolBytes?: bigint | string | undefined
}
type IngesterV1GetBlockStatsResponse = { blockStats?: IngesterV1BlockStats[] | undefined }
type TypesV1GetProfileStatsRequest = {}
type TypesV1GetProfileStatsResponse = {
  dataIngested?: boolean | undefined
  oldestProfileTime?: bigint | string | undefined
  newestProfileTime?: bigint | string | undefined
}
type TypesV1LabelNamesRequest = {
  matchers?: string[] | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1LabelNamesResponse = { names?: string[] | undefined }
type TypesV1LabelValuesRequest = {
  name?: string | undefined
  matchers?: string[] | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1LabelValuesResponse = { names?: string[] | undefined }
type IngesterV1ProfileTypesRequest = {
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1ProfileType = {
  ID?: string | undefined
  name?: string | undefined
  sampleType?: string | undefined
  sampleUnit?: string | undefined
  periodType?: string | undefined
  periodUnit?: string | undefined
}
type IngesterV1ProfileTypesResponse = { profileTypes?: TypesV1ProfileType[] | undefined }
type PushV1RawSample = { rawProfile?: string | undefined; ID?: string | undefined }
type TypesV1ProfileAnnotation = { key?: string | undefined; value?: string | undefined }
type PushV1RawProfileSeries = {
  labels?: TypesV1LabelPair[] | undefined
  samples?: PushV1RawSample[] | undefined
  annotations?: TypesV1ProfileAnnotation[] | undefined
}
type PushV1PushRequest = { series?: PushV1RawProfileSeries[] | undefined }
type PushV1PushResponse = {}
type IngesterV1SeriesRequest = {
  matchers?: string[] | undefined
  labelNames?: string[] | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1Labels = { labels?: TypesV1LabelPair[] | undefined }
type IngesterV1SeriesResponse = { labelsSet?: TypesV1Labels[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ingester.v1.IngesterService/BlockMetadata': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1BlockMetadataRequest }
            output: IngesterV1BlockMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1BlockMetadataRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ingester.v1.IngesterService/Flush': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1FlushRequest }
            output: IngesterV1FlushResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1FlushRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ingester.v1.IngesterService/GetBlockStats': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1GetBlockStatsRequest }
            output: IngesterV1GetBlockStatsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1GetBlockStatsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ingester.v1.IngesterService/GetProfileStats': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1GetProfileStatsRequest }
            output: TypesV1GetProfileStatsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1GetProfileStatsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ingester.v1.IngesterService/LabelNames': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelNamesRequest }
            output: TypesV1LabelNamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelNamesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ingester.v1.IngesterService/LabelValues': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelValuesRequest }
            output: TypesV1LabelValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelValuesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ingester.v1.IngesterService/ProfileTypes': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1ProfileTypesRequest }
            output: IngesterV1ProfileTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1ProfileTypesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ingester.v1.IngesterService/Push': {
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
  } & {
    '/ingester.v1.IngesterService/Series': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1SeriesRequest }
            output: IngesterV1SeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: IngesterV1SeriesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
