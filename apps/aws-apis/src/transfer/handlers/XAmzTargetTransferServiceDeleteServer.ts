import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDeleteServerHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
