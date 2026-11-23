import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateIpGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateIpGroupHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateIpGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
