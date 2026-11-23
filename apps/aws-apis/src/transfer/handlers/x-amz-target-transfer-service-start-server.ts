import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceStartServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceStartServerHandler = app.openapi(
  postXAmzTargetTransferServiceStartServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
