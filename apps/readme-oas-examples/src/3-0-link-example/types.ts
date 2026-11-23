type User = { username?: string | undefined; uuid?: string | undefined }
type Repository = { slug?: string | undefined; owner?: User | undefined }
type Pullrequest = {
  id?: number | undefined
  title?: string | undefined
  repository?: Repository | undefined
  author?: User | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2.0/users/:username': {
      $get: {
        input: { param: { username: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2.0/repositories/:username': {
      $get: {
        input: { param: { username: string } }
        output: Repository[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2.0/repositories/:username/:slug': {
      $get: {
        input: { param: { username: string; slug: string } }
        output: Repository
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2.0/repositories/:username/:slug/pullrequests': {
      $get: {
        input: { param: { username: string; slug: string } } & {
          query: { state?: 'open' | 'merged' | 'declined' | undefined }
        }
        output: Pullrequest[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2.0/repositories/:username/:slug/pullrequests/:pid': {
      $get: {
        input: { param: { username: string; slug: string; pid: string } }
        output: Pullrequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2.0/repositories/:username/:slug/pullrequests/:pid/merge': {
      $post: {
        input: { param: { username: string; slug: string; pid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
