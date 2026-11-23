import { OpenAPIHono } from '@hono/zod-openapi'
import { postSscerCertificateRoute, postSvcerCertificateRoute } from './routes'
import { postSscerCertificateRouteHandler, postSvcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)
  .openapi(postSvcerCertificateRoute, postSvcerCertificateRouteHandler)

export default app
