type Dimension = {
  dimensionKey?: string | undefined
  name?: string | undefined
  value?: string | undefined
}
type BenchmarkMetadata = { average?: string | undefined }
type MetricBenchmark = {
  adjustment?: string | undefined
  basis?: string | undefined
  metadata?: BenchmarkMetadata | undefined
  rating?: string | undefined
}
type Distribution = { name?: string | undefined; value?: string | undefined }
type MetricDistribution = { basis?: string | undefined; data?: Distribution[] | undefined }
type Metric = {
  benchmark?: MetricBenchmark | undefined
  distributions?: MetricDistribution[] | undefined
  metricKey?: string | undefined
  value?: string | undefined
}
type DimensionMetric = { dimension?: Dimension | undefined; metrics?: Metric[] | undefined }
type EvaluationCycle = {
  endDate?: string | undefined
  evaluationDate?: string | undefined
  evaluationType?: string | undefined
  startDate?: string | undefined
}
type GetCustomerServiceMetricResponse = {
  dimensionMetrics?: DimensionMetric[] | undefined
  evaluationCycle?: EvaluationCycle | undefined
  marketplaceId?: string | undefined
}
type Cycle = {
  cycleType?: string | undefined
  evaluationDate?: string | undefined
  evaluationMonth?: string | undefined
}
type StandardsProfile = {
  cycle?: Cycle | undefined
  defaultProgram?: boolean | undefined
  evaluationReason?: string | undefined
  metrics?: Metric[] | undefined
  program?: string | undefined
  standardsLevel?: string | undefined
}
type FindSellerStandardsProfilesResponse = { standardsProfiles?: StandardsProfile[] | undefined }
type Definition = {
  dataType?: string | undefined
  key?: string | undefined
  localizedName?: string | undefined
}
type MetadataHeader = { key?: string | undefined; metadataKeys?: Definition[] | undefined }
type Value = { applicable?: boolean | undefined; value?: { [x: string]: unknown } | undefined }
type MetadataRecord = { metadataValues?: Value[] | undefined; value?: Value | undefined }
type Metadata = {
  metadataHeader?: MetadataHeader | undefined
  metadataRecords?: MetadataRecord[] | undefined
}
type Header = { dimensionKeys?: Definition[] | undefined; metrics?: Definition[] | undefined }
type Record = { dimensionValues?: Value[] | undefined; metricValues?: Value[] | undefined }
type ErrorParameter = { name?: string | undefined; value?: string | undefined }
type Error = {
  category?: string | undefined
  domain?: string | undefined
  errorId?: number | undefined
  inputRefIds?: string[] | undefined
  longMessage?: string | undefined
  message?: string | undefined
  outputRefIds?: string[] | undefined
  parameters?: ErrorParameter[] | undefined
  subdomain?: string | undefined
}
type Report = {
  dimensionMetadata?: Metadata[] | undefined
  endDate?: string | undefined
  header?: Header | undefined
  lastUpdatedDate?: string | undefined
  records?: Record[] | undefined
  startDate?: string | undefined
  warnings?: Error[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/customer_service_metric/:customer_service_metric_type/:evaluation_type': {
      $get:
        | {
            input: { param: { customer_service_metric_type: string; evaluation_type: string } } & {
              query: { evaluation_marketplace_id: string }
            }
            output: GetCustomerServiceMetricResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_service_metric_type: string; evaluation_type: string } } & {
              query: { evaluation_marketplace_id: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { customer_service_metric_type: string; evaluation_type: string } } & {
              query: { evaluation_marketplace_id: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { customer_service_metric_type: string; evaluation_type: string } } & {
              query: { evaluation_marketplace_id: string }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { customer_service_metric_type: string; evaluation_type: string } } & {
              query: { evaluation_marketplace_id: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/seller_standards_profile': {
      $get:
        | {
            input: {}
            output: FindSellerStandardsProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/seller_standards_profile/:program/:cycle': {
      $get:
        | {
            input: { param: { cycle: string; program: string } }
            output: StandardsProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cycle: string; program: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cycle: string; program: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { cycle: string; program: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { cycle: string; program: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/traffic_report': {
      $get:
        | {
            input: {
              query: {
                dimension?: string | undefined
                filter?: string | undefined
                metric?: string | undefined
                sort?: string | undefined
              }
            }
            output: Report
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dimension?: string | undefined
                filter?: string | undefined
                metric?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                dimension?: string | undefined
                filter?: string | undefined
                metric?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
