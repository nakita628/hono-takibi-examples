import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAGetCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAGetCertificateHandler = app.openapi(
  postXAmzTargetACMPrivateCAGetCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
