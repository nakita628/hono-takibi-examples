import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAIssueCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAIssueCertificateHandler = app.openapi(
  postXAmzTargetACMPrivateCAIssueCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
