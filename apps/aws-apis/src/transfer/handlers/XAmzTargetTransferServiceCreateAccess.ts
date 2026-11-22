import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceCreateAccessHandler = app.openapi(
  postXAmzTargetTransferServiceCreateAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
