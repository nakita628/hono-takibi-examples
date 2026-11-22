import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAGetCertificateAuthorityCertificateHandler = app.openapi(
  postXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
