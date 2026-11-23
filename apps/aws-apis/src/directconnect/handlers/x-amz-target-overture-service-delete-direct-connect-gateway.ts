import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteDirectConnectGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDeleteDirectConnectGatewayHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteDirectConnectGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
