declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/event-notifications': {
      $post: {
        input: {
          header: { 'x-fapi-financial-id': string; 'x-fapi-interaction-id'?: string | undefined }
        } & { json: string }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  },
  '/'
>
export default routes
