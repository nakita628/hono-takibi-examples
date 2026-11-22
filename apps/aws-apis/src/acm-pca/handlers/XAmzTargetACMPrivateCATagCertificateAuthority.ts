import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCATagCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCATagCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCATagCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
