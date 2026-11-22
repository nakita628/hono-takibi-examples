type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type PublicTeam = { id: string; name: string; primary: boolean }
type PublicOwner = {
  archived: boolean
  createdAt: string
  email?: string | undefined
  firstName?: string | undefined
  id: string
  lastName?: string | undefined
  teams?: PublicTeam[] | undefined
  type: 'PERSON' | 'QUEUE'
  updatedAt: string
  userId?: number | undefined
  userIdIncludingInactive?: number | undefined
}
type CollectionResponsePublicOwnerForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicOwner[]
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
    '/crm/owners/2026-09': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                email?: string | undefined
                limit?: number | undefined
              }
            }
            output: CollectionResponsePublicOwnerForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                email?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/owners/2026-09/:ownerId': {
      $get:
        | {
            input: { param: { ownerId: number } } & {
              query: { archived?: boolean | undefined; idProperty?: 'id' | 'userId' | undefined }
            }
            output: PublicOwner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: number } } & {
              query: { archived?: boolean | undefined; idProperty?: 'id' | 'userId' | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
