import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeConnectorHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
