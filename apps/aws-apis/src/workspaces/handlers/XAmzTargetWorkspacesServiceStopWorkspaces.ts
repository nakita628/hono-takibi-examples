import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceStopWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceStopWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceStopWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
