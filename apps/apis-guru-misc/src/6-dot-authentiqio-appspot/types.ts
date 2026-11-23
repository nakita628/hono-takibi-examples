type Error = {
  detail?: string | undefined
  error: number
  title?: string | undefined
  type?: string | undefined
}
type AuthentiqID = { devtoken?: string | undefined; sub: string }
type PushToken = {
  aud: string
  exp?: number | undefined
  iat?: number | undefined
  iss: string
  nbf?: number | undefined
  sub: string
}
type Claims = {
  email?: string | undefined
  phone?: string | undefined
  scope: string
  sub: string
  type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/key': {
      $delete:
        | {
            input: { query: { email: string; phone: string; code?: string | undefined } }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email: string; phone: string; code?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { email: string; phone: string; code?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { email: string; phone: string; code?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { email: string; phone: string; code?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: AuthentiqID }
            output: { secret?: string | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: AuthentiqID }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: AuthentiqID }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/key/:PK': {
      $delete:
        | {
            input: { param: { PK: string } } & { query: { secret: string } }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PK: string } } & { query: { secret: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PK: string } } & { query: { secret: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PK: string } } & { query: { secret: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { PK: string } }
            output: {
              since?: string | undefined
              status?: string | undefined
              sub?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { PK: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { PK: string } }; output: Error; outputFormat: 'json'; status: 410 }
        | { input: { param: { PK: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $head:
        | { input: { param: { PK: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { PK: string } }; output: Error; outputFormat: 'text'; status: 404 }
        | { input: { param: { PK: string } }; output: Error; outputFormat: 'text'; status: 410 }
        | { input: { param: { PK: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { PK: string } } & { json: AuthentiqID }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PK: string } } & { json: AuthentiqID }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PK: string } } & { json: AuthentiqID }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { PK: string } } & { json: AuthentiqID }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PK: string } } & { json: AuthentiqID }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PK: string } } & { json: AuthentiqID }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { PK: string } } & { json: AuthentiqID }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/login': {
      $post:
        | {
            input: { query: { callback: string } } & { json: PushToken }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { callback: string } } & { json: PushToken }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { callback: string } } & { json: PushToken }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/scope': {
      $post:
        | {
            input: { query: { test?: number | undefined } } & { json: Claims }
            output: { job?: string | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { test?: number | undefined } } & { json: Claims }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { test?: number | undefined } } & { json: Claims }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/scope/:job': {
      $delete:
        | {
            input: { param: { job: string } }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $get:
        | {
            input: { param: { job: string } }
            output: {
              exp?: number | undefined
              field?: string | undefined
              sub?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job: string } }
            output: {
              exp?: number | undefined
              field?: string | undefined
              sub?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { job: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 404 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $head:
        | { input: { param: { job: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { job: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { job: string } }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'json'; status: 405 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { param: { job: string } }
            output: { jwt?: string | undefined; status?: string | undefined }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 404 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 409 }
        | { input: { param: { job: string } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
