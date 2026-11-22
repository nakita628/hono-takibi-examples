import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateStandbyWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceCreateStandbyWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateStandbyWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
