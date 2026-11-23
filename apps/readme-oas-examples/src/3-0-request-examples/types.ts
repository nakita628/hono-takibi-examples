type User = { id?: number | undefined; email?: string | undefined; name?: string | undefined }
type Pet = { name?: string | undefined; petType?: 'Cat' | 'Dog' | undefined }
type Pets = Pet[]
type Token = { access_token: number; token_type: string; expires_in: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/parameterExamples/:param1/:param2': {
      $get:
        | {
            input: { param: { param1: string; param2: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { param1: string; param2: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { param1: string; param2: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { param1: string; param2: string } } & {
              query: { param3?: string | undefined; param4?: string | undefined }
            } & { header: { param5: string; param6?: string | undefined } } & { json: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { param1: string; param2: string } } & {
              query: { param3?: string | undefined; param4?: string | undefined }
            } & { header: { param5: string; param6?: string | undefined } } & { json: User }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { param1: string; param2: string } } & {
              query: { param3?: string | undefined; param4?: string | undefined }
            } & { header: { param5: string; param6?: string | undefined } } & { json: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
      $put: {
        input: { param: { param1: string; param2: string } } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/requestBody': {
      $post:
        | { input: { json: User }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: User }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: User }; output: User; outputFormat: 'json'; status: 200 }
      $patch: { input: { json: User }; output: User; outputFormat: 'json'; status: 200 }
      $put: { input: { json: User }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/requestBody-primitive-example': {
      $post: { input: { json: string }; output: string; outputFormat: 'json'; status: 200 }
      $patch: { input: { json: Pet }; output: Pet; outputFormat: 'json'; status: 200 }
      $put: { input: { json: Pets }; output: Pets; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/requestBody-multi-media-types': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/requestBody-form-data-example': {
      $post:
        | {
            input: {
              json: { client_id: string; client_secret: string; scope?: number | undefined }
            } & { form: { client_id: string; client_secret: string; scope?: number | undefined } }
            output: Token
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; scope?: number | undefined }
            } & { form: { client_id: string; client_secret: string; scope?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
