declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/data/ip-geolocation-full': {
      $get: {
        input: {
          query: {
            ip?: string | undefined
            localityLanguage?: string | undefined
            key?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/data/ip-geolocation-with-confidence': {
      $get: {
        input: {
          query: {
            ip?: string | undefined
            localityLanguage?: string | undefined
            key?: string | undefined
          }
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
