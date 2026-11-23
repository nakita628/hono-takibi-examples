import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceImportHostKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceImportHostKeyHandler = app.openapi(
  postXAmzTargetTransferServiceImportHostKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
