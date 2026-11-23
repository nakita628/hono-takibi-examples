import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesWorkspaceIdRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceIdRoute,
  postWorkspacesRoute,
  putWorkspacesWorkspaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
