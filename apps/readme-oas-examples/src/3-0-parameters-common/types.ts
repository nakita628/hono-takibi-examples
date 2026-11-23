declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/:id': {
      $get: {
        input: { param: { id: number } } & { header: { 'x-extra-id'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: number } } & { query: { limit?: number | undefined } } & {
          header: { 'x-extra-id'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/:id/:action': {
      $get: {
        input: { param: { id: number; action: 'lists' | 'statistics' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/:id/:action/:id': {
      $get: {
        input: { param: { id: number; action: 'lists' | 'statistics' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/:id/override': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
