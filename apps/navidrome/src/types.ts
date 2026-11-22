type ServerInfo = {
  name: string
  serverVersion: string
  specVersion: string
  setupRequired: boolean
  loginMethods: 'password'[]
}
type ValidationError = { field: string; message: string }
type Problem = {
  type?: string | undefined
  title: string
  status: number
  detail?: string | undefined
  code:
    | 'validation'
    | 'unauthorized'
    | 'forbidden'
    | 'not_found'
    | 'method_not_allowed'
    | 'unavailable'
    | 'internal'
  errors?: ValidationError[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/server': {
      $get:
        | { input: {}; output: ServerInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/openapi.json': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 304 }
    }
  } & {
    '/openapi.yaml': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 304 }
    }
  },
  '/'
>
export default routes
