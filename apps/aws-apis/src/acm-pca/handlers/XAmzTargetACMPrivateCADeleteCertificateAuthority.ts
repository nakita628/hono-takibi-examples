import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADeleteCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCADeleteCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCADeleteCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
