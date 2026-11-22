import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCACreateCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCACreateCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCACreateCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
