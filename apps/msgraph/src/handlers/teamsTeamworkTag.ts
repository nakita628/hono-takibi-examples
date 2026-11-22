import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteTeamsTeamIdTagsTeamworkTagIdRoute,
  getTeamsTeamIdTagsCountRoute,
  getTeamsTeamIdTagsRoute,
  getTeamsTeamIdTagsTeamworkTagIdMembersCountRoute,
  getTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  getTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getTeamsTeamIdTagsTeamworkTagIdRoute,
  patchTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchTeamsTeamIdTagsTeamworkTagIdRoute,
  postTeamsTeamIdTagsRoute,
  postTeamsTeamIdTagsTeamworkTagIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsTeamworkTagHandler = app
  .openapi(getTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
