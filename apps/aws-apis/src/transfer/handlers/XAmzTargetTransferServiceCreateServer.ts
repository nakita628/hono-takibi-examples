import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceCreateServerHandler = app.openapi(
  postXAmzTargetTransferServiceCreateServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
