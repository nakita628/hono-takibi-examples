import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceStopWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceStopWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceStopWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
