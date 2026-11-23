import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceCreateAccessHandler = app.openapi(
  postXAmzTargetTransferServiceCreateAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
