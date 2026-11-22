import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsUsernameSearchCodeRoute,
  getUsersSelectedUserSearchCodeRoute,
  getWorkspacesWorkspaceSearchCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getTeamsUsernameSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
