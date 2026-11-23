import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerAddTagsToCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerAddTagsToCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerAddTagsToCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
