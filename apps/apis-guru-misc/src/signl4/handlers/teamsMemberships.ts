import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdMembershipsUserIdRoute,
  getTeamsTeamIdMembershipsRoute,
  postTeamsTeamIdMembershipsResendInviteMailRoute,
  postTeamsTeamIdMembershipsRoute,
  putTeamsTeamIdMembershipsUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsMembershipsHandler = app
  .openapi(getTeamsTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembershipsResendInviteMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
