import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADeleteCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaDeleteCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCADeleteCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
