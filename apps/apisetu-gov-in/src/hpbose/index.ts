import { OpenAPIHono } from '@hono/zod-openapi'
import { postHvcerCertificateRoute, postSvcerCertificateRoute } from './routes'
import { postHvcerCertificateRouteHandler, postSvcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHvcerCertificateRoute, postHvcerCertificateRouteHandler)
  .openapi(postSvcerCertificateRoute, postSvcerCertificateRouteHandler)

export default app
