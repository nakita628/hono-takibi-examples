import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TeamsTeamIdInvitesInviteIdRoute,
  deleteV1TeamsTeamIdMembersUidRoute,
  deleteV1TeamsTeamIdRoute,
  getV1TeamsTeamIdRequestUserIdRoute,
  getV2TeamsRoute,
  getV2TeamsTeamIdMembersRoute,
  getV2TeamsTeamIdRoute,
  patchV1TeamsTeamIdMembersUidRoute,
  patchV2TeamsTeamIdRoute,
  postV1TeamsRoute,
  postV1TeamsTeamIdMembersRoute,
  postV1TeamsTeamIdMembersTeamsJoinRoute,
  postV1TeamsTeamIdRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdMembersTeamsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdRequestUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
