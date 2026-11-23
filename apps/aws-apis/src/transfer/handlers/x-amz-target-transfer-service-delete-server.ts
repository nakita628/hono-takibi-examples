import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteServerHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
