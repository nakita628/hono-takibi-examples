import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceImportSshPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceImportSshPublicKeyHandler = app.openapi(
  postXAmzTargetTransferServiceImportSshPublicKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
