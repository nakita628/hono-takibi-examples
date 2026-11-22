import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceUpdateAccessHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
