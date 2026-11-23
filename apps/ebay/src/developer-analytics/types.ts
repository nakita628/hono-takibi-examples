type Rate = {
  limit?: number | undefined
  remaining?: number | undefined
  reset?: string | undefined
  timeWindow?: number | undefined
}
type Resource = { name?: string | undefined; rates?: Rate[] | undefined }
type RateLimit = {
  apiContext?: string | undefined
  apiName?: string | undefined
  apiVersion?: string | undefined
  resources?: Resource[] | undefined
}
type RateLimitsResponse = { rateLimits?: RateLimit[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/rate_limit/': {
      $get:
        | {
            input: { query: { api_context?: string | undefined; api_name?: string | undefined } }
            output: RateLimitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_context?: string | undefined; api_name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { api_context?: string | undefined; api_name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/user_rate_limit/': {
      $get:
        | {
            input: { query: { api_context?: string | undefined; api_name?: string | undefined } }
            output: RateLimitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_context?: string | undefined; api_name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { api_context?: string | undefined; api_name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
