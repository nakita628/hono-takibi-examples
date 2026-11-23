import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeConnectionsOnInterconnectHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
