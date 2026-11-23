import { OpenAPIHono } from '@hono/zod-openapi'
import { postHscerCertificateRoute, postSscerCertificateRoute } from './routes'
import { postHscerCertificateRouteHandler, postSscerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)

export default app
