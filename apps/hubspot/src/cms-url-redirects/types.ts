type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type UrlMapping = {
  created: string
  destination: string
  id: string
  isMatchFullUrl: boolean
  isMatchQueryString: boolean
  isOnlyAfterNotFound: boolean
  isPattern: boolean
  isProtocolAgnostic: boolean
  isTrailingSlashOptional: boolean
  precedence: number
  redirectStyle: number
  routePrefix: string
  updated: string
}
type CollectionResponseWithTotalUrlMappingForwardPaging = {
  paging?: ForwardPaging | undefined
  results: UrlMapping[]
  total: number
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type UrlMappingCreateRequestBody = {
  destination: string
  isMatchFullUrl?: boolean | undefined
  isMatchQueryString?: boolean | undefined
  isOnlyAfterNotFound?: boolean | undefined
  isPattern?: boolean | undefined
  isProtocolAgnostic?: boolean | undefined
  isTrailingSlashOptional?: boolean | undefined
  precedence?: number | undefined
  redirectStyle: number
  routePrefix: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cms/url-redirects/2026-09': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                createdAfter?: string | undefined
                createdAt?: string | undefined
                createdBefore?: string | undefined
                limit?: number | undefined
                sort?: string[] | undefined
                updatedAfter?: string | undefined
                updatedAt?: string | undefined
                updatedBefore?: string | undefined
              }
            }
            output: CollectionResponseWithTotalUrlMappingForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                createdAfter?: string | undefined
                createdAt?: string | undefined
                createdBefore?: string | undefined
                limit?: number | undefined
                sort?: string[] | undefined
                updatedAfter?: string | undefined
                updatedAt?: string | undefined
                updatedBefore?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UrlMappingCreateRequestBody }
            output: UrlMapping
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UrlMappingCreateRequestBody }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/cms/url-redirects/2026-09/url-mappings': {
      $get:
        | { input: {}; output: UrlMapping[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
      $post: { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/cms/url-redirects/2026-09/url-mappings/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: UrlMapping
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'text'; status: 200 }
      $delete: {
        input: { param: { id: bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/cms/url-redirects/2026-09/:urlRedirectId': {
      $get:
        | {
            input: { param: { urlRedirectId: string } }
            output: UrlMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { urlRedirectId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { urlRedirectId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { urlRedirectId: string } } & { json: UrlMapping }
            output: UrlMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { urlRedirectId: string } } & { json: UrlMapping }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
