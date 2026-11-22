import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamDestroyRoute,
  getTeamInfoRoute,
  getTeamInvitesRoute,
  getTeamMembersTeamIdRoute,
  getTeamRoute,
  getTeamSettingsRoute,
  getTeamSubTeamsTeamIdRoute,
  postTeamCreateRoute,
  postTeamRemoveMemberRoute,
  postTeamSettingsRoute,
  putTeamAddMemberRoute,
  putTeamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamHandler = app
  .openapi(putTeamAddMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamMembersTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamRemoveMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamSubTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
