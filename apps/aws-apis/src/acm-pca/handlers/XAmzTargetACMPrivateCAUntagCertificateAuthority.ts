import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAUntagCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAUntagCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCAUntagCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
