import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeServerHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
