import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceImportSshPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceImportSshPublicKeyHandler = app.openapi(
  postXAmzTargetTransferServiceImportSshPublicKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
