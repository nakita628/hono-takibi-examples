type NewValue = { value: string }
type Public1 = { newValue: NewValue }
type EditsessionRequest = { public: Public1 }
type Country = { value: string }
type PostalCode = { value: string }
type Public = { country: Country; postalCode: PostalCode }
type CreatenewsessionRequest = { public: Public }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/segments': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/sessions': {
      $get: { input: { query: { items: string } }; output: {}; outputFormat: string; status: 200 }
      $patch: { input: { json: EditsessionRequest }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: CreatenewsessionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
