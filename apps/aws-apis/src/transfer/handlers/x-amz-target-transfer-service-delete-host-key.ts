import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteHostKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteHostKeyHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteHostKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
