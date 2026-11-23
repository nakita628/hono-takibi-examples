declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/verification/result': {
      $get: {
        input: {
          query: { tran_id: string; key: string; format?: 'json' | 'xml' | undefined; otp: string }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/verification/send': {
      $post: {
        input: {
          query: {
            country_code?: string | undefined
            format?: 'json' | 'xml' | undefined
            tel: string
            key: string
            mesg?: string | undefined
          }
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
