type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type TeamResponse = { id: string; name: string; parentTeamId?: string | undefined }
type CollectionResponseTeamResponseForwardPaging = {
  paging?: ForwardPaging | undefined
  results: TeamResponse[]
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
type TeamMemberAssignment = { type: 'DEFAULT' | 'EXTRA'; userId: string }
type TeamCreateRequest = {
  members: TeamMemberAssignment[]
  name: string
  parentTeamId?: string | undefined
}
type TeamUpdateRequest = { name: { [x: string]: unknown }; parentTeamId: { [x: string]: unknown } }
type TeamMemberResponse = { type: 'DEFAULT' | 'EXTRA'; userId: string }
type CollectionResponseTeamMemberResponseForwardPaging = {
  paging?: ForwardPaging | undefined
  results: TeamMemberResponse[]
}
type BatchInputTeamMemberAssignment = { inputs: TeamMemberAssignment[] }
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type BatchResponseTeamMemberResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: TeamMemberResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/settings/teams/2026-09': {
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: CollectionResponseTeamResponseForwardPaging
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
            input: { json: TeamCreateRequest }
            output: TeamResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: TeamCreateRequest }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/teams/2026-09/:teamId': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: TeamResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamId: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $delete:
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { teamId: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $patch:
        | {
            input: { param: { teamId: string } } & { json: TeamUpdateRequest }
            output: TeamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: TeamUpdateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/settings/teams/2026-09/:teamId/members': {
      $get:
        | {
            input: { param: { teamId: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: CollectionResponseTeamMemberResponseForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { teamId: string } } & { json: TeamMemberAssignment }
            output: TeamMemberResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { teamId: string } } & { json: TeamMemberAssignment }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/settings/teams/2026-09/:teamId/members/batch': {
      $post:
        | {
            input: { param: { teamId: string } } & { json: BatchInputTeamMemberAssignment }
            output: BatchResponseTeamMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: BatchInputTeamMemberAssignment }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/settings/teams/2026-09/:teamId/members/:userId': {
      $delete:
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { type?: 'DEFAULT' | 'EXTRA' | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { type?: 'DEFAULT' | 'EXTRA' | undefined }
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
