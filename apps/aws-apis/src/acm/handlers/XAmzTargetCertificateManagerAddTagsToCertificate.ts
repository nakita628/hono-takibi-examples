import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerAddTagsToCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerAddTagsToCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerAddTagsToCertificateRoute,
  (c) => {},
)
