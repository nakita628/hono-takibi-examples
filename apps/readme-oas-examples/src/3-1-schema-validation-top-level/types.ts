declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/numbers': {
      $get: {
        input: {
          query: { 'id-exclusive-required': number; 'id-exclusive-required-schema-v4': number }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
