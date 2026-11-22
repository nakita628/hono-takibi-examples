import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeDirectConnectGatewaysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeDirectConnectGatewaysHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeDirectConnectGatewaysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
