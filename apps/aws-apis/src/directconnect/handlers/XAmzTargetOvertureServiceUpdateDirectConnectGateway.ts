import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUpdateDirectConnectGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceUpdateDirectConnectGatewayHandler = app.openapi(
  postXAmzTargetOvertureServiceUpdateDirectConnectGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
