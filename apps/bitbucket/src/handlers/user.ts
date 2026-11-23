import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserEmailsEmailRoute,
  getUserEmailsRoute,
  getUserRoute,
  getUserWorkspacesRoute,
  getUserWorkspacesWorkspacePermissionRoute,
  getUserWorkspacesWorkspacePermissionsRepositoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWorkspacesWorkspacePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWorkspacesWorkspacePermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
