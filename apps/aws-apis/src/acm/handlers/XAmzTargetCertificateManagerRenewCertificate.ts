import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerRenewCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerRenewCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerRenewCertificateRoute,
  (c) => {},
)
