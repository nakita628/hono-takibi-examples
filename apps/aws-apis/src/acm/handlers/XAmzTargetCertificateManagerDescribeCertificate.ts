import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerDescribeCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerDescribeCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerDescribeCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
