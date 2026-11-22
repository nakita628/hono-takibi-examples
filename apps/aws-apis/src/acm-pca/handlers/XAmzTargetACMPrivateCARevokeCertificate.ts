import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCARevokeCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCARevokeCertificateHandler = app.openapi(
  postXAmzTargetACMPrivateCARevokeCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
