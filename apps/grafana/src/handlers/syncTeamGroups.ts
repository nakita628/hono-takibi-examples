import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdGroupsRoute,
  getTeamsTeamIdGroupsRoute,
  getTeamsTeamIdGroupsSearchRoute,
  postTeamsTeamIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncTeamGroupsHandler = app
  .openapi(deleteTeamsTeamIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdGroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
