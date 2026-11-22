import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceImportCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceImportCertificateHandler = app.openapi(
  postXAmzTargetTransferServiceImportCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
