type SearchResult = {
  context: string
  context_after?: string[] | undefined
  context_before?: string[] | undefined
  line: number
  package: string
  path: string
}
type PackageSearchResult = { package: string; results: SearchResult[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/search': {
      $get:
        | {
            input: { query: { query: string; match_mode?: 'literal' | 'regexp' | undefined } }
            output: SearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; match_mode?: 'literal' | 'regexp' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/searchperpackage': {
      $get:
        | {
            input: { query: { query: string; match_mode?: 'literal' | 'regexp' | undefined } }
            output: PackageSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; match_mode?: 'literal' | 'regexp' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  },
  '/'
>
export default routes
