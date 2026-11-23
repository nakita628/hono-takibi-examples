declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/globalpageload': {
      $get:
        | {
            input: { query: { license: string; origin: string; url: string } }
            output: {
              Code?: string | undefined
              Contents?: string | undefined
              Credits?: string | undefined
              Origin?: string | undefined
              PageResponseStatus?: string | undefined
              Seconds?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; origin: string; url: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; origin: string; url: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; origin: string; url: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; origin: string; url: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; origin: string; url: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; origin: string; url: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
