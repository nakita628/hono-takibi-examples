declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/city': {
      $get: {
        input: {
          query: { key: string; lng: number; lat: number; format?: 'json' | 'xml' | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
