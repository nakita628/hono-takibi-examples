type JsonObject = { [x: string]: { [x: string]: unknown } }
type Error = {
  error: { name: string; message: string }
  request: { method: string; url: string }
  response: { statusCode: number }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/query': {
      $get:
        | {
            input: {
              query: {
                term?: string | undefined
                filters?: JsonObject | undefined
                types?: string[] | undefined
                pageCursor?: string | undefined
                pageLimit?: number | undefined
                unknown?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: {
              results: {
                type: string
                document: {
                  title?: string | undefined
                  text?: string | undefined
                  location?: string | undefined
                }
                highlight?: { [x: string]: unknown } | undefined
                rank?: number | undefined
              }[]
              nextPageCursor?: string | undefined
              previousPageCursor?: string | undefined
              numberOfResults?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                term?: string | undefined
                filters?: JsonObject | undefined
                types?: string[] | undefined
                pageCursor?: string | undefined
                pageLimit?: number | undefined
                unknown?: { [x: string]: { [x: string]: unknown } } | undefined
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
