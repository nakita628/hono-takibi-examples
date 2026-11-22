import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TeamsTeamIdInvitesInviteIdRoute,
  deleteV1TeamsTeamIdMembersUidRoute,
  deleteV1TeamsTeamIdMicrofrontendsGroupIdRoute,
  deleteV1TeamsTeamIdRoute,
  getV1TeamsTeamIdRequestUserIdRoute,
  getV2TeamsRoute,
  getV2TeamsTeamIdRoute,
  getV3TeamsTeamIdMembersRoute,
  patchV1TeamsTeamIdMembersUidRoute,
  patchV1TeamsTeamIdMicrofrontendsGroupIdRoute,
  patchV2TeamsTeamIdRoute,
  postV1TeamsRoute,
  postV1TeamsTeamIdDsyncRolesRoute,
  postV1TeamsTeamIdMembersTeamsJoinRoute,
  postV1TeamsTeamIdRequestRoute,
  postV2TeamsTeamIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getV3TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdRequestUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdMembersTeamsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdDsyncRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TeamsTeamIdMicrofrontendsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdMicrofrontendsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
