import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersRoute,
  getUsersUserGidFavoritesRoute,
  getUsersUserGidRoute,
  getUsersUserGidTeamMembershipsRoute,
  getUsersUserGidTeamsRoute,
  getUsersUserGidUserTaskListRoute,
  getUsersUserGidWorkspaceMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidUserTaskListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidWorkspaceMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
