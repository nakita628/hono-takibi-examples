type RegressionApiBody = {
  convert_date_to?: string | undefined
  data: { [x: string]: unknown }[]
  ignore_variables?: { [x: string]: unknown }[] | undefined
  key: string
  outcome_variable: string
}
type ResultCalls = {
  limit?: number | undefined
  limit_reached?: boolean | undefined
  this_month?: number | undefined
}
type ResultStandardizedCoefficients = {
  coefficient?: number | undefined
  variable?: string | undefined
}
type Result = {
  'calls"'?: ResultCalls | undefined
  data_count?: number | undefined
  dates_converted_to?: string | undefined
  footer?: string | undefined
  header?: string | undefined
  number_observations?: number | undefined
  number_tests?: number | undefined
  outcome_variable?: string | undefined
  paid?: string | undefined
  pdf?: string | undefined
  prediction_mean_accuracy?: number | undefined
  standardized_coefficients?: ResultStandardizedCoefficients[] | undefined
  summary?: { [x: string]: unknown }[] | undefined
  tested_variables?: string[] | undefined
}
type Error = { error?: string | undefined }
type InlineResponse_200 = Result | Error
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/regression/api': {
      $post: {
        input: { json: RegressionApiBody }
        output: InlineResponse_200
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
