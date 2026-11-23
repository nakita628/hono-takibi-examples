import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUpdateDirectConnectGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceUpdateDirectConnectGatewayHandler = app.openapi(
  postXAmzTargetOvertureServiceUpdateDirectConnectGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
