import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerRequestCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerRequestCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerRequestCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
