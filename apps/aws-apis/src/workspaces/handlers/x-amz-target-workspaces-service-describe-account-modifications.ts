import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeAccountModificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeAccountModificationsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeAccountModificationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
