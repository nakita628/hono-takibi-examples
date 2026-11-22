import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getTeamsTeamIdPermissionGrantsCountRoute,
  getTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getTeamsTeamIdPermissionGrantsRoute,
  patchTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  postTeamsTeamIdPermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsResourceSpecificPermissionGrantHandler = app
  .openapi(getTeamsTeamIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
