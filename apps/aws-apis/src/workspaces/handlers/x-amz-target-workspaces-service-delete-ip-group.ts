import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteIpGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDeleteIpGroupHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteIpGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
