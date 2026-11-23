import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
