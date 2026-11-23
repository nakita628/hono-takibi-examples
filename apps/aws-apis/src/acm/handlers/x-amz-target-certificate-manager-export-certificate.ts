import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerExportCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerExportCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerExportCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
