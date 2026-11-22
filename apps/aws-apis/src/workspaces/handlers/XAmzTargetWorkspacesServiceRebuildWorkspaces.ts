import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceRebuildWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceRebuildWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceRebuildWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
