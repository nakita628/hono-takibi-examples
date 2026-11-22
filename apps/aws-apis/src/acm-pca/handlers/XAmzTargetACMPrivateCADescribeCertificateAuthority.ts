import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADescribeCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCADescribeCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCADescribeCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
