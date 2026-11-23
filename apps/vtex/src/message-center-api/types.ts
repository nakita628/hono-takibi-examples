type _200OK = {
  dkimKeys?: ({ [x: string]: unknown }[] | null) | undefined
  status: 'emailNotFound' | 'emailNotVerified' | 'created'
}
type _401Unauthorized = {
  status: 401
  title: 'Unauthorized'
  traceId: string
  type: 'https://tools.ietf.org/html/rfc7235#section-3.1'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/mail-service/pvt/providers/:EmailProvider/dkim': {
      $post:
        | {
            input: { param: { EmailProvider: string } }
            output: _200OK
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailProvider: string } }
            output: _401Unauthorized
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
