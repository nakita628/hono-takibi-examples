import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
