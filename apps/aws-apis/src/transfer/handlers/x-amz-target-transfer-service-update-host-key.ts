import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateHostKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceUpdateHostKeyHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateHostKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
