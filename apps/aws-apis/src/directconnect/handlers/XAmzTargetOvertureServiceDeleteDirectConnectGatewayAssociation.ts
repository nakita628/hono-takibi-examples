import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
