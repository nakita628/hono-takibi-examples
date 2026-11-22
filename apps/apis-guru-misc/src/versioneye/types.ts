declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/scans': {
      $get: {
        input: { query: { name?: string | undefined; per_page?: string | undefined } }
        output: {}
        outputFormat: string
        status: 404
      }
    }
  } & {
    '/api/v1/scans/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/scans/:id/files/:file_id': {
      $get: {
        input: { param: { id: string; file_id: string } } & {
          query: { per_page?: string | undefined }
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
