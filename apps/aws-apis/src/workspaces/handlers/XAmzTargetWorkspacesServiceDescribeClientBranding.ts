import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeClientBrandingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeClientBrandingHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeClientBrandingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
