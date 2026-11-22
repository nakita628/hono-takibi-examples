type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type SettingsV1DeleteRecordingRuleRequest = { id?: string | undefined }
type SettingsV1DeleteRecordingRuleResponse = {}
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
type SettingsV1GetRecordingRuleRequest = { id?: string | undefined }
type TypesV1LabelPair = { name?: string | undefined; value?: string | undefined }
type SettingsV1MetricType = 'TOTAL'
type SettingsV1StacktraceFilterFunctionName = {
  functionName?: string | undefined
  metricType?: SettingsV1MetricType | undefined
}
type SettingsV1StacktraceFilter = {
  functionName?: SettingsV1StacktraceFilterFunctionName | undefined
}
type SettingsV1RecordingRule = {
  id?: string | undefined
  metricName?: string | undefined
  profileType?: string | undefined
  matchers?: string[] | undefined
  groupBy?: string[] | undefined
  externalLabels?: TypesV1LabelPair[] | undefined
  generation?: bigint | string | undefined
  stacktraceFilter?: SettingsV1StacktraceFilter | undefined
  provisioned?: boolean | undefined
}
type SettingsV1GetRecordingRuleResponse = { rule?: SettingsV1RecordingRule | undefined }
type SettingsV1ListRecordingRulesRequest = {}
type SettingsV1ListRecordingRulesResponse = { rules?: SettingsV1RecordingRule[] | undefined }
type SettingsV1UpsertRecordingRuleRequest = {
  id?: string | undefined
  metricName?: string | undefined
  matchers?: string[] | undefined
  groupBy?: string[] | undefined
  externalLabels?: TypesV1LabelPair[] | undefined
  generation?: bigint | string | undefined
  stacktraceFilter?: SettingsV1StacktraceFilter | undefined
}
type SettingsV1UpsertRecordingRuleResponse = { rule?: SettingsV1RecordingRule | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/settings.v1.RecordingRulesService/DeleteRecordingRule': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1DeleteRecordingRuleRequest }
            output: SettingsV1DeleteRecordingRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1DeleteRecordingRuleRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings.v1.RecordingRulesService/GetRecordingRule': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1GetRecordingRuleRequest }
            output: SettingsV1GetRecordingRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1GetRecordingRuleRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings.v1.RecordingRulesService/ListRecordingRules': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1ListRecordingRulesRequest }
            output: SettingsV1ListRecordingRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1ListRecordingRulesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings.v1.RecordingRulesService/UpsertRecordingRule': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1UpsertRecordingRuleRequest }
            output: SettingsV1UpsertRecordingRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: SettingsV1UpsertRecordingRuleRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
