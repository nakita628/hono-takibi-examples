import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceRebuildWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceRebuildWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceRebuildWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
