import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdWorkspacesWorkspaceIdRoute,
  getV21AccountsAccountIdWorkspacesRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdRoute,
  postV21AccountsAccountIdWorkspacesRoute,
  putV21AccountsAccountIdWorkspacesWorkspaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getV21AccountsAccountIdWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
