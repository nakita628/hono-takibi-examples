declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cache': {
      $get: {
        input: {
          header: { 'If-Modified-Since'?: string | undefined; 'If-None-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/status/302': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/204': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes
