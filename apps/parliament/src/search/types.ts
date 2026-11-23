declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/description': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/query': {
      $get: {
        input: {
          query: {
            q: string
            start?: number | undefined
            count?: number | undefined
            subdomains?: string | undefined
            inUrlPrefixes?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/query.:extension': {
      $get: {
        input: { param: { extension: 'atom' | 'rss' | 'html' | 'json' } } & {
          query: {
            q: string
            start?: number | undefined
            count?: number | undefined
            subdomains?: string | undefined
            inUrlPrefixes?: string | undefined
          }
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
