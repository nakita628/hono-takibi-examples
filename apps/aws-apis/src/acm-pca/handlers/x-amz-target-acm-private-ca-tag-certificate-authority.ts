import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCATagCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaTagCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCATagCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
