import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaImportCertificateAuthorityCertificateHandler = app.openapi(
  postXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
