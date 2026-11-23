import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
