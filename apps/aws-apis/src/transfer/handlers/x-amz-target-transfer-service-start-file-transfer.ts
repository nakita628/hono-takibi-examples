import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceStartFileTransferRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceStartFileTransferHandler = app.openapi(
  postXAmzTargetTransferServiceStartFileTransferRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
