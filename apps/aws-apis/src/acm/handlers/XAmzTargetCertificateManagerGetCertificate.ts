import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerGetCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerGetCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerGetCertificateRoute,
  (c) => {},
)
