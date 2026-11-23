import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeServerHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
