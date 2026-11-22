import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCARestoreCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCARestoreCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCARestoreCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
