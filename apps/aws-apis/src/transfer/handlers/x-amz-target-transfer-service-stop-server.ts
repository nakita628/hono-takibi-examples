import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceStopServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceStopServerHandler = app.openapi(
  postXAmzTargetTransferServiceStopServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
