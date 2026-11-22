import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeAccountHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
