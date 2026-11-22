import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeConnectorHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
