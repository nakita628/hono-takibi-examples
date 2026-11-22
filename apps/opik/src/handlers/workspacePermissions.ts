import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PrivateWorkspacePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const workspacePermissionsHandler = app.openapi(
  getV1PrivateWorkspacePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
