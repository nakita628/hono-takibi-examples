import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADescribeCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaDescribeCertificateAuthorityHandler = app.openapi(
  postXAmzTargetACMPrivateCADescribeCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
