import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeConnectionsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
