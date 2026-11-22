import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAUpdateCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAUpdateCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCAUpdateCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
