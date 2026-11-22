import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateDirectConnectGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreateDirectConnectGatewayHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateDirectConnectGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
