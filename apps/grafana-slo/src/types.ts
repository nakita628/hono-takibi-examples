type ReportV1Label = { key: string; value: string }
type ReportV1ReportSlo = { sloUuid: string }
type ReportV1ReportDefinitionSloList = { slos: ReportV1ReportSlo[] }
type ReportV1Report = {
  description: string
  labels?: ReportV1Label[] | undefined
  name: string
  reportDefinition: ReportV1ReportDefinitionSloList
  timeSpan: string
  uuid: string
}
type ApiReportListResponse = { reports: ReportV1Report[] }
type ApiErrorResponse = { code: bigint; error: string }
type ApiReportCreateResponse = { message: string; uuid: string }
type SloV0_0AdvancedOptions = { minFailures?: bigint | undefined }
type SloV0_0Label = { key: string; value: string }
type SloV0_0AlertEnrichment = { type: string }
type SloV0_0AlertingMetadata = {
  annotations?: SloV0_0Label[] | undefined
  enrichments?: SloV0_0AlertEnrichment[] | undefined
  labels?: SloV0_0Label[] | undefined
}
type SloV0_0Alerting = {
  advancedOptions?: SloV0_0AdvancedOptions | undefined
  annotations?: SloV0_0Label[] | undefined
  fastBurn?: SloV0_0AlertingMetadata | undefined
  labels?: SloV0_0Label[] | undefined
  slowBurn?: SloV0_0AlertingMetadata | undefined
}
type SloV0_0DestinationDatasource = { type?: string | undefined; uid?: string | undefined }
type SloV0_0Folder = { uid?: string | undefined }
type SloV0_0Objective = { value: number; window: string }
type SloV0_0MetricDef = { prometheusMetric: string; type?: string | undefined }
type SloV0_0FailureRatioQuery = {
  failureMetric: SloV0_0MetricDef
  groupByLabels?: string[] | undefined
  sourceDatasourceUid?: string | undefined
  totalMetric: SloV0_0MetricDef
}
type SloV0_0Threshold = { operator: '<' | '<=' | '==' | '!=' | '>=' | '>'; value: number }
type SloV0_0FailureThresholdQuery = {
  failureThresholdExpression: string
  groupByLabels?: string[] | undefined
  sourceDatasourceUid?: string | undefined
  threshold: SloV0_0Threshold
}
type SloV0_0FreeformQuery = { query: string; sourceDatasourceUid?: string | undefined }
type SloV0_0GrafanaQueries = { grafanaQueries: { [x: string]: { [x: string]: unknown } }[] }
type SloV0_0RatioQuery = {
  groupByLabels?: string[] | undefined
  sourceDatasourceUid?: string | undefined
  successMetric: SloV0_0MetricDef
  totalMetric: SloV0_0MetricDef
}
type SloV0_0ThresholdQuery = {
  groupByLabels?: string[] | undefined
  sourceDatasourceUid?: string | undefined
  threshold: SloV0_0Threshold
  thresholdExpression: string
}
type SloV0_0Query = {
  failureRatio?: SloV0_0FailureRatioQuery | undefined
  failureThreshold?: SloV0_0FailureThresholdQuery | undefined
  freeform?: SloV0_0FreeformQuery | undefined
  grafanaQueries?: SloV0_0GrafanaQueries | undefined
  ratio?: SloV0_0RatioQuery | undefined
  threshold?: SloV0_0ThresholdQuery | undefined
  type: 'freeform' | 'ratio' | 'threshold' | 'failureThreshold'
}
type SloV0_0DashboardRef = { UID: string }
type SloV0_0MaintenanceEvent = {
  endTimeIso8601?: string | undefined
  name: string
  startTimeIso8601: string
}
type SloV0_0Status = {
  message?: string | undefined
  type: 'created' | 'creating' | 'deleting' | 'error' | 'unknown' | 'updated' | 'updating'
}
type SloV0_0ReadOnly = {
  allowedActions?: string[] | undefined
  creationTimestamp: bigint
  drillDownDashboardRef?: SloV0_0DashboardRef | undefined
  maintenanceEvents?: SloV0_0MaintenanceEvent[] | undefined
  parsesAsRatio?: boolean | undefined
  provenance?: string | undefined
  sourceDatasource?: SloV0_0DestinationDatasource | undefined
  status?: SloV0_0Status | undefined
}
type SloV0_0Slo = {
  alerting?: SloV0_0Alerting | undefined
  customDashboardUid?: string | undefined
  description: string
  destinationDatasource?: SloV0_0DestinationDatasource | undefined
  folder?: SloV0_0Folder | undefined
  labels?: SloV0_0Label[] | undefined
  name: string
  objectives: SloV0_0Objective[]
  query: SloV0_0Query
  readOnly?: SloV0_0ReadOnly | undefined
  searchExpression?: string | undefined
  uuid: string
}
type ApiSLOListResponse = { slos: SloV0_0Slo[] }
type ApiSLOCreateResponse = { message: string; uuid: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/report': {
      $get:
        | { input: {}; output: ApiReportListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: ReportV1Report }
            output: ApiReportCreateResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ReportV1Report }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportV1Report }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/report/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ReportV1Report
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & { json: ReportV1Report }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: ReportV1Report }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ReportV1Report }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/slo': {
      $get:
        | { input: {}; output: ApiSLOListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: SloV0_0Slo }
            output: ApiSLOCreateResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: SloV0_0Slo }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SloV0_0Slo }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/slo/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } }
            output: SloV0_0Slo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & { json: SloV0_0Slo }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: SloV0_0Slo }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SloV0_0Slo }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
