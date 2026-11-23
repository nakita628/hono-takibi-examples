declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/streams': {
      $post: {
        input: { query: { callbackUrl: string } }
        output: { subscriptionId: string }
        outputFormat: 'json'
        status: 201
      }
    }
  },
  '/'
>
export default routes
