type QueryHistoryRequest = {
  formFactor?: 'ALL_FORM_FACTORS' | 'PHONE' | 'DESKTOP' | 'TABLET' | undefined
  metrics?: string[] | undefined
  origin?: string | undefined
  url?: string | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type CollectionPeriod = { firstDate?: Date | undefined; lastDate?: Date | undefined }
type HistoryKey = {
  formFactor?: 'ALL_FORM_FACTORS' | 'PHONE' | 'DESKTOP' | 'TABLET' | undefined
  origin?: string | undefined
  url?: string | undefined
}
type TimeseriesBin = {
  densities?: number[] | undefined
  end?: { [x: string]: unknown } | undefined
  start?: { [x: string]: unknown } | undefined
}
type TimeseriesPercentiles = { p75s?: { [x: string]: unknown }[] | undefined }
type MetricTimeseries = {
  histogramTimeseries?: TimeseriesBin[] | undefined
  percentilesTimeseries?: TimeseriesPercentiles | undefined
}
type HistoryRecord = {
  collectionPeriods?: CollectionPeriod[] | undefined
  key?: HistoryKey | undefined
  metrics?: { [x: string]: MetricTimeseries } | undefined
}
type UrlNormalization = { normalizedUrl?: string | undefined; originalUrl?: string | undefined }
type QueryHistoryResponse = {
  record?: HistoryRecord | undefined
  urlNormalizationDetails?: UrlNormalization | undefined
}
type QueryRequest = {
  effectiveConnectionType?: string | undefined
  formFactor?: 'ALL_FORM_FACTORS' | 'PHONE' | 'DESKTOP' | 'TABLET' | undefined
  metrics?: string[] | undefined
  origin?: string | undefined
  url?: string | undefined
}
type Key = {
  effectiveConnectionType?: string | undefined
  formFactor?: 'ALL_FORM_FACTORS' | 'PHONE' | 'DESKTOP' | 'TABLET' | undefined
  origin?: string | undefined
  url?: string | undefined
}
type Bin = {
  density?: number | undefined
  end?: { [x: string]: unknown } | undefined
  start?: { [x: string]: unknown } | undefined
}
type Percentiles = { p75?: { [x: string]: unknown } | undefined }
type Metric = { histogram?: Bin[] | undefined; percentiles?: Percentiles | undefined }
type Record = {
  collectionPeriod?: CollectionPeriod | undefined
  key?: Key | undefined
  metrics?: { [x: string]: Metric } | undefined
}
type QueryResponse = {
  record?: Record | undefined
  urlNormalizationDetails?: UrlNormalization | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/records:queryHistoryRecord': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: QueryHistoryRequest }
        output: QueryHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/records:queryRecord': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: QueryRequest }
        output: QueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
