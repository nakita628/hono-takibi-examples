import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceCreateServerHandler = app.openapi(
  postXAmzTargetTransferServiceCreateServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
