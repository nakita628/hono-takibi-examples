import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdMembersConversationMemberIdRoute,
  getTeamsTeamIdMembersConversationMemberIdRoute,
  getTeamsTeamIdMembersCountRoute,
  getTeamsTeamIdMembersRoute,
  patchTeamsTeamIdMembersConversationMemberIdRoute,
  postTeamsTeamIdMembersAddRoute,
  postTeamsTeamIdMembersRemoveRoute,
  postTeamsTeamIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsConversationMemberHandler = app
  .openapi(getTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
