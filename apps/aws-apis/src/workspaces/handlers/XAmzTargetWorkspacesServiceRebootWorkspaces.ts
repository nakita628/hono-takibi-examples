import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceRebootWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceRebootWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceRebootWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
