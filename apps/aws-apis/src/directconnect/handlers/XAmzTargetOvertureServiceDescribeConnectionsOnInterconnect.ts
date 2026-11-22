import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeConnectionsOnInterconnectHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
