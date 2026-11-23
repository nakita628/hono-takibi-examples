import { OpenAPIHono } from '@hono/zod-openapi'
import { postMicerCertificateRoute, postPvcerCertificateRoute } from './routes'
import { postMicerCertificateRouteHandler, postPvcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postMicerCertificateRoute, postMicerCertificateRouteHandler)
  .openapi(postPvcerCertificateRoute, postPvcerCertificateRouteHandler)

export default app
