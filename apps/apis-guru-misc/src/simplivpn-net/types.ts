type DisableUser = { username: string }
type EnableUser = { username: string }
type UserLogin = { password: string; username: string }
type Register = { await?: boolean | undefined; password: string; username: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/disable-user': {
      $post: { input: { json: DisableUser }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/enable-user': {
      $post: { input: { json: EnableUser }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/login': {
      $post: { input: { json: UserLogin }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/register': {
      $post: { input: { json: Register }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/server-summaries': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/servers': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/username-available': {
      $post: { input: { json: EnableUser }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
