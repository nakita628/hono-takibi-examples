import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeIpGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeIpGroupsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeIpGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
