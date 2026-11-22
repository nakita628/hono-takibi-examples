import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerRequestCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerRequestCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerRequestCertificateRoute,
  (c) => {},
)
