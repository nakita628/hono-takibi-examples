import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
