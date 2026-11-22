import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeHostedConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeHostedConnectionsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeHostedConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
