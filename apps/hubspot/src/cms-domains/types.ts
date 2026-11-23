type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type Domain = {
  correctCname: string
  created: string
  domain: string
  id: string
  isResolving: boolean
  isSslEnabled: boolean
  isSslOnly: boolean
  isUsedForBlogPost: boolean
  isUsedForEmail: boolean
  isUsedForKnowledge: boolean
  isUsedForLandingPage: boolean
  isUsedForSitePage: boolean
  manuallyMarkedAsResolving: boolean
  primaryBlogPost: boolean
  primaryEmail: boolean
  primaryKnowledge: boolean
  primaryLandingPage: boolean
  primarySitePage: boolean
  secondaryToDomain: string
  updated: string
}
type CollectionResponseWithTotalDomain = {
  paging?: Paging | undefined
  results: Domain[]
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cms/domains/2026-09': {
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
            output: CollectionResponseWithTotalDomain
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
    }
  } & {
    '/cms/domains/2026-09/:domainId': {
      $get:
        | {
            input: { param: { domainId: string } }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
