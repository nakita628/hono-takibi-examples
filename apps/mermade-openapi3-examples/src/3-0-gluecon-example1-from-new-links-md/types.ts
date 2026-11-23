declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/users/:username': {
      $get: {
        input: { param: { username: string } }
        output: {
          id?: number | undefined
          firstname?: string | undefined
          lastname?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userid/photo': {
      $get: { input: { param: { userid: number } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
