type Pet = { id: bigint; name: string; tag?: string | undefined }
type Pets = Pet[]
type Error = { code: number; message: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pets': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: Pets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 201 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/pets/:petId': {
      $get:
        | { input: { param: { petId: string } }; output: Pets; outputFormat: 'json'; status: 200 }
        | { input: { param: { petId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
