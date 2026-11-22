import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAListCertificateAuthoritiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAListCertificateAuthoritiesHandler = app.openapi(
  postXAmzTargetACMPrivateCAListCertificateAuthoritiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
