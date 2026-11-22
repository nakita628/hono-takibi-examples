import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsTeamGidUsersRoute,
  getUsersRoute,
  getUsersUserGidFavoritesRoute,
  getUsersUserGidRoute,
  getWorkspacesWorkspaceGidUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getTeamsTeamGidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
