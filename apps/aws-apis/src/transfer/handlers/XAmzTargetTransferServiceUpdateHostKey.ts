import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateHostKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceUpdateHostKeyHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateHostKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
