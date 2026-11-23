type DataSetList = {
  total?: number | undefined
  apis?:
    | {
        apiKey?: string | undefined
        apiVersionNumber?: string | undefined
        apiUrl?: string | undefined
        apiDocumentationUrl?: string | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: DataSetList; outputFormat: 'json'; status: 200 } } } & {
    '/:dataset/:version/fields': {
      $get:
        | {
            input: { param: { dataset: string; version: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset: string; version: string } }
            output: string
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:dataset/:version/records': {
      $post:
        | {
            input: { param: { version: string; dataset: string } } & {
              json: { criteria: string; start?: number | undefined; rows?: number | undefined }
            } & {
              form: { criteria: string; start?: number | undefined; rows?: number | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string; dataset: string } } & {
              json: { criteria: string; start?: number | undefined; rows?: number | undefined }
            } & {
              form: { criteria: string; start?: number | undefined; rows?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
