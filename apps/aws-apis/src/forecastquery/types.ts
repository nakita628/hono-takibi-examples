type QueryForecastRequest = {
  ForecastArn: {}
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  Filters: {}
  NextToken?: {} | undefined
}
type QueryForecastResponse = { Forecast?: { Predictions?: {} | undefined } | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type ResourceInUseException = { [x: string]: unknown }
type InvalidInputException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type InvalidNextTokenException = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
