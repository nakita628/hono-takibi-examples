import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerDeleteCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerDeleteCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerDeleteCertificateRoute,
  (c) => {},
)
