import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerDeleteCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerDeleteCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerDeleteCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
