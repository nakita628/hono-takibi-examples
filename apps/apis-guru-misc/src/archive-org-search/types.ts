type Field = string
type Hit = { [x: string]: unknown }
type OrganicResult = {
  count?: number | undefined
  items?: Hit[] | undefined
  total?: number | undefined
}
type Error = { code?: number | undefined; message?: string | undefined }
type Cursor = string
type ScrapeResult = {
  count?: number | undefined
  cursor?: Cursor | undefined
  items?: Hit[] | undefined
  previous?: Cursor | undefined
  total?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/search/v1/fields': {
      $get:
        | {
            input: { query: { callback?: string | undefined } }
            output: Field[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { callback?: string | undefined } }
            output: Field[]
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/v1/organic': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                size?: number | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: OrganicResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                size?: number | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: OrganicResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                size?: number | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                size?: number | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/v1/scrape': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                sort?: string | undefined
                size?: number | undefined
                cursor?: string | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: ScrapeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                sort?: string | undefined
                size?: number | undefined
                cursor?: string | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: ScrapeResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                sort?: string | undefined
                size?: number | undefined
                cursor?: string | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                field?: string | undefined
                sort?: string | undefined
                size?: number | undefined
                cursor?: string | undefined
                total_only?: boolean | undefined
                callback?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
