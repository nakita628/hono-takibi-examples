import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationHandler = app.openapi(
  postXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
