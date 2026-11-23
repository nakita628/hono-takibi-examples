declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getemailinfo': {
      $get:
        | {
            input: { query: { license: string; email: string } }
            output: {
              Code?: string | undefined
              Credits?: string | undefined
              Email?: string | undefined
              Geolocation?: string | undefined
              Info?: string | undefined
              IsDisposable?: string | undefined
              IsEducational?: string | undefined
              IsGeneric?: string | undefined
              IsGovernment?: string | undefined
              IsOrganizational?: string | undefined
              IsVulgar?: string | undefined
              Response?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; email: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; email: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; email: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; email: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; email: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; email: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
