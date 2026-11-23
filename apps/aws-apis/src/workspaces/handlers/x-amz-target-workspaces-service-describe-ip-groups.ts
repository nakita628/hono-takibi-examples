import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeIpGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeIpGroupsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeIpGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
