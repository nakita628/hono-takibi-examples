type QueryForecastRequest = {
  ForecastArn: {}
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  Filters: {}
  NextToken?: {} | undefined
}
type QueryForecastResponse = { Forecast?: { Predictions?: {} | undefined } | undefined }
type QueryWhatIfForecastRequest = {
  WhatIfForecastArn: {}
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  Filters: {}
  NextToken?: {} | undefined
}
type Forecast = { Predictions?: {} | undefined }
type QueryWhatIfForecastResponse = { Forecast?: Forecast | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonForecastRuntime.QueryForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecastRuntime.QueryForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: QueryForecastRequest }
        output: QueryForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecastRuntime.QueryWhatIfForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: QueryWhatIfForecastRequest }
        output: QueryWhatIfForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
