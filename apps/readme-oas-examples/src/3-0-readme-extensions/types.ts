type Tag = { id?: bigint | undefined; name?: string | undefined }
type Pet = {
  id?: bigint | undefined
  name: string
  photoUrls: string[]
  tags?: Tag[] | undefined
  status?: 'available' | 'pending' | 'sold' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/x-code-samples': {
      $post:
        | { input: { json: Tag }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: Tag }; output: {}; outputFormat: string; status: 404 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/x-headers': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/x-explorer-enabled': {
      $post: { input: { json: Pet }; output: {}; outputFormat: string; status: 200 }
      $patch: { input: { json: Pet }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/x-samples-languages': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/x-proxy-enabled': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/x-metrics-enabled': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
