type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type ForecastSubmissionEvent = {
  archived: boolean
  objectId: string
  objectType: string
  occurredAt: string
  properties: { [x: string]: string }
}
type CollectionResponseForecastSubmissionEventForwardPaging = {
  paging?: ForwardPaging | undefined
  results: ForecastSubmissionEvent[]
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/forecast-submissions/2026-09/events': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                occurredAfter?: bigint | undefined
                occurredBefore?: bigint | undefined
              }
            }
            output: CollectionResponseForecastSubmissionEventForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                occurredAfter?: bigint | undefined
                occurredBefore?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
