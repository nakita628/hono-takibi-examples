import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerImportCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerImportCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerImportCertificateRoute,
  (c) => {},
)
