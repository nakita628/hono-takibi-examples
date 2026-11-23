type Pet = { name: string; tag?: string | undefined; id: bigint }
type Error = { code: number; message: string }
type NewPet = { name: string; tag?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pets': {
      $get:
        | {
            input: { query: { tags?: string[] | undefined; limit?: number | undefined } }
            output: Pet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tags?: string[] | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: NewPet }; output: Pet; outputFormat: 'json'; status: 200 }
        | { input: { json: NewPet }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/pets/:id': {
      $get:
        | { input: { param: { id: bigint } }; output: Pet; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
