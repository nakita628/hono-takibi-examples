import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsTeamGidUsersRoute,
  getUsersRoute,
  getUsersUserGidFavoritesRoute,
  getUsersUserGidRoute,
  getWorkspacesWorkspaceGidUsersRoute,
  getWorkspacesWorkspaceGidUsersUserGidRoute,
  putUsersUserGidRoute,
  putWorkspacesWorkspaceGidUsersUserGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceGidUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
