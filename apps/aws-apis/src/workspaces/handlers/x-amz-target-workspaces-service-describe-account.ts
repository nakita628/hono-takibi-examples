import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeAccountHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
