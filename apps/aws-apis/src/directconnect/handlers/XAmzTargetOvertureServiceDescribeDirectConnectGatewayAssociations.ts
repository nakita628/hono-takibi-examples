import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
