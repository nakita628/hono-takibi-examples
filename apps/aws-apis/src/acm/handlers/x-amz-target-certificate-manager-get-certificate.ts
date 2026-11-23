import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerGetCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerGetCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerGetCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
