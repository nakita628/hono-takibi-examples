type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type PublicUser = {
  email: string
  firstName?: string | undefined
  id: string
  lastName?: string | undefined
  primaryTeamId?: string | undefined
  roleId?: string | undefined
  roleIds: string[]
  seatNames?: string[] | undefined
  secondaryTeamIds?: string[] | undefined
  sendWelcomeEmail?: boolean | undefined
  superAdmin: boolean
}
type CollectionResponsePublicUserForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicUser[]
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
type UserProvisionRequest = {
  email: string
  firstName?: string | undefined
  lastName?: string | undefined
  primaryTeamId?: string | undefined
  roleId?: string | undefined
  seatNames?: string[] | undefined
  secondaryTeamIds?: string[] | undefined
  sendWelcomeEmail: boolean
}
type PublicPermissionSet = { id: string; name: string; requiresBillingWrite: boolean }
type CollectionResponsePublicPermissionSetNoPaging = { results: PublicPermissionSet[] }
type PublicSeat = {
  description?: string | undefined
  name: string
  remainingSeats?: number | undefined
}
type CollectionResponsePublicSeatNoPaging = { results: PublicSeat[] }
type PublicTeam = { id: string; name: string; secondaryUserIds: string[]; userIds: string[] }
type CollectionResponsePublicTeamNoPaging = { results: PublicTeam[] }
type PublicUserUpdate = {
  firstName?: string | undefined
  lastName?: string | undefined
  primaryTeamId?: string | undefined
  roleId?: string | undefined
  seatNames?: string[] | undefined
  secondaryTeamIds?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/settings/users/2026-09': {
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: CollectionResponsePublicUserForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UserProvisionRequest }
            output: PublicUser
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UserProvisionRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/settings/users/2026-09/roles': {
      $get:
        | {
            input: {}
            output: CollectionResponsePublicPermissionSetNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/users/2026-09/seats': {
      $get:
        | {
            input: {}
            output: CollectionResponsePublicSeatNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/users/2026-09/teams': {
      $get:
        | {
            input: {}
            output: CollectionResponsePublicTeamNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/users/2026-09/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: { idProperty?: 'EMAIL' | 'USER_ID' | undefined }
            }
            output: PublicUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { idProperty?: 'EMAIL' | 'USER_ID' | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { userId: string } } & {
              query: { idProperty?: 'EMAIL' | 'USER_ID' | undefined }
            } & { json: PublicUserUpdate }
            output: PublicUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { idProperty?: 'EMAIL' | 'USER_ID' | undefined }
            } & { json: PublicUserUpdate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { userId: string } } & {
              query: { idProperty?: 'EMAIL' | 'USER_ID' | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & {
              query: { idProperty?: 'EMAIL' | 'USER_ID' | undefined }
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
