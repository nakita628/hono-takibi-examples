declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/employees/:id': {
      $get: {
        input: { param: { id: string } }
        output: {
          id?: string | undefined
          username?: string | undefined
          managerId?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
