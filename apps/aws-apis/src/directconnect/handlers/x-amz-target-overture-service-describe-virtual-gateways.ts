import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeVirtualGatewaysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeVirtualGatewaysHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeVirtualGatewaysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
