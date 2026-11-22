import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceStopServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceStopServerHandler = app.openapi(
  postXAmzTargetTransferServiceStopServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
