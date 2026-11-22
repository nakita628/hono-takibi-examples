import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteHostKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDeleteHostKeyHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteHostKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
