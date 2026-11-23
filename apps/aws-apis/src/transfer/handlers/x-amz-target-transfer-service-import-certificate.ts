import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceImportCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceImportCertificateHandler = app.openapi(
  postXAmzTargetTransferServiceImportCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
