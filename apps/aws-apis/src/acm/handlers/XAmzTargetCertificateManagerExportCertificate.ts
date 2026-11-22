import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerExportCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerExportCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerExportCertificateRoute,
  (c) => {},
)
