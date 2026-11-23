type Pet = {
  id?: bigint | undefined
  name?: string | undefined
  status?: 'available' | 'pending' | 'sold' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/all-param-types/:id/:id2': {
      $post: {
        input: { param: { id: bigint; id2: bigint } } & {
          query: { queryParam?: string | undefined; queryParam2?: string | undefined }
        } & {
          header: { 'x-header-value'?: string | undefined; 'x-header-data'?: string | undefined }
        } & { cookie: { cookieString?: string | undefined; cookieInt?: number | undefined } } & {
          json: Pet
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
