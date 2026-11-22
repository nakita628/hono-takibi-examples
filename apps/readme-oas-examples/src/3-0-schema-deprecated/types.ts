type Category = { id?: bigint | undefined; name?: string | undefined }
type Tag = { id?: bigint | undefined; name?: string | undefined }
type TagDeprecated = { id?: bigint | undefined; name?: string | undefined }
type Status = 'available' | 'pending' | 'sold'
type StatusWrapper = { status?: Status | undefined }
type Pet = {
  id?: bigint | undefined
  category?: Category | undefined
  category_alt?: Category | undefined
  name: string
  photoUrls: string[]
  tags?: Tag[] | undefined
  tags_alt?: TagDeprecated[] | undefined
  status?: Status | undefined
  polymorphism?:
    | {
        oneOf?: StatusWrapper | StatusWrapper | undefined
        allOf?: { status?: Status | undefined } | undefined
        anyOf?: StatusWrapper | StatusWrapper | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything': {
      $post:
        | {
            input: {
              query: {
                filter?: 'active' | 'inactive' | undefined
                filterLegacy?: 'active' | 'inactive' | undefined
                status: ('available' | 'pending' | 'sold')[]
              }
            } & { json: Pet }
            output: Pet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: 'active' | 'inactive' | undefined
                filterLegacy?: 'active' | 'inactive' | undefined
                status: ('available' | 'pending' | 'sold')[]
              }
            } & { json: Pet }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes
