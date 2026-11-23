declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/apiKey': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/basic': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/anything/bearer': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/mutualTLS': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/anything/oauth2': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: { input: {}; output: {}; outputFormat: string; status: 200 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/openIdConnect': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/no-auth': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/401': { $post: { input: {}; output: {}; outputFormat: string; status: 401 } } },
  '/'
>
export default routes
