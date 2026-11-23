type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type V1Beta1QuotaOverride = {
  adminOverrideAncestor?: string | undefined
  dimensions?: { [x: string]: string } | undefined
  metric?: string | undefined
  name?: string | undefined
  overrideValue?: string | undefined
  unit?: string | undefined
}
type V1Beta1QuotaBucket = {
  adminOverride?: V1Beta1QuotaOverride | undefined
  consumerOverride?: V1Beta1QuotaOverride | undefined
  defaultLimit?: string | undefined
  dimensions?: { [x: string]: string } | undefined
  effectiveLimit?: string | undefined
  producerOverride?: V1Beta1QuotaOverride | undefined
}
type V1Beta1ConsumerQuotaLimit = {
  isPrecise?: boolean | undefined
  metric?: string | undefined
  name?: string | undefined
  quotaBuckets?: V1Beta1QuotaBucket[] | undefined
  supportedLocations?: string[] | undefined
  unit?: string | undefined
}
type V1Beta1ConsumerQuotaMetric = {
  consumerQuotaLimits?: V1Beta1ConsumerQuotaLimit[] | undefined
  descendantConsumerQuotaLimits?: V1Beta1ConsumerQuotaLimit[] | undefined
  displayName?: string | undefined
  metric?: string | undefined
  name?: string | undefined
  unit?: string | undefined
}
type V1Beta1ListConsumerQuotaMetricsResponse = {
  metrics?: V1Beta1ConsumerQuotaMetric[] | undefined
  nextPageToken?: string | undefined
}
type V1Beta1OverrideInlineSource = { overrides?: V1Beta1QuotaOverride[] | undefined }
type V1Beta1ImportProducerOverridesRequest = {
  force?: boolean | undefined
  forceOnly?:
    | (
        | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
        | 'LIMIT_DECREASE_BELOW_USAGE'
        | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
      )[]
    | undefined
  inlineSource?: V1Beta1OverrideInlineSource | undefined
}
type V1Beta1ListProducerOverridesResponse = {
  nextPageToken?: string | undefined
  overrides?: V1Beta1QuotaOverride[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            forceOnly?:
              | (
                  | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
                  | 'LIMIT_DECREASE_BELOW_USAGE'
                  | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
                )[]
              | undefined
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
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?: 'QUOTA_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        }
        output: V1Beta1ConsumerQuotaLimit
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            forceOnly?:
              | (
                  | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
                  | 'LIMIT_DECREASE_BELOW_USAGE'
                  | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
                )[]
              | undefined
            updateMask?: string | undefined
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
        } & { json: V1Beta1QuotaOverride }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consumerQuotaMetrics': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'QUOTA_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        }
        output: V1Beta1ListConsumerQuotaMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consumerQuotaMetrics:importProducerOverrides': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: V1Beta1ImportProducerOverridesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/producerOverrides': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: V1Beta1ListProducerOverridesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            force?: boolean | undefined
            forceOnly?:
              | (
                  | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
                  | 'LIMIT_DECREASE_BELOW_USAGE'
                  | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
                )[]
              | undefined
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
        } & { json: V1Beta1QuotaOverride }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
