type CreateStatus = {
  id?: string | undefined
  status?: number | undefined
  uri?: string | undefined
}
type Error = { message?: string | undefined; status?: number | undefined }
type DeleteStatus = { status?: number | undefined }
type UpdateStatus = { data?: { [x: string]: unknown } | undefined; status?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bin': {
      $post:
        | { input: {}; output: CreateStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 413 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/bin/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
      $patch:
        | {
            input: { param: { id: string } }
            output: UpdateStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 413 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
      $put:
        | {
            input: { param: { id: string } }
            output: UpdateStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 413 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
    }
  },
  '/'
>
export default routes
