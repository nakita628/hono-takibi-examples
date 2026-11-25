type WannaBeThingInput = { name: string }
type Thing = { id: number; name: string }
type Error = { messages: string[] }
type Geo = { latitude?: number | undefined; longitude?: number | undefined }
type ServerError = { message: string; location?: Geo | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/thingyref': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/thing': {
      $get: { input: { query: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
      $patch: {
        input: { query: { name?: string; apiKey?: unknown } }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: {
          query: {
            name?: 'foo' | 'bar' | 'baz'
            fooArr?: unknown
            barInt?: unknown
            apiKey: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
      $put: {
        input: { query: { apiKey: string } } & { form: { thing: File } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { query: { apiKey: string } } & { json: WannaBeThingInput }
            output: Thing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiKey: string } } & { json: WannaBeThingInput }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { query: { apiKey: string } } & { json: WannaBeThingInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { apiKey: string } } & { json: WannaBeThingInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { apiKey: string } } & { json: WannaBeThingInput }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { apiKey: string } } & { json: WannaBeThingInput }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { query: { apiKey: string } } & { json: WannaBeThingInput }
            output: ServerError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
