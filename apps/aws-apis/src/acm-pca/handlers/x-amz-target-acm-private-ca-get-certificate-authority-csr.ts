import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAGetCertificateAuthorityCsrRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaGetCertificateAuthorityCsrHandler = app.openapi(
  postXAmzTargetACMPrivateCAGetCertificateAuthorityCsrRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
