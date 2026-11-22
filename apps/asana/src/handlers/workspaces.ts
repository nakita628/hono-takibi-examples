import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkspacesRoute,
  getWorkspacesWorkspaceGidEventsRoute,
  getWorkspacesWorkspaceGidRoute,
  postWorkspacesWorkspaceGidAddUserRoute,
  postWorkspacesWorkspaceGidRemoveUserRoute,
  putWorkspacesWorkspaceGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
