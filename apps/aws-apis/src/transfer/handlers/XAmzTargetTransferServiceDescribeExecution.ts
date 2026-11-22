import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeExecutionHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
