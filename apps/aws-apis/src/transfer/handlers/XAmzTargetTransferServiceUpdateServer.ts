import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceUpdateServerHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
