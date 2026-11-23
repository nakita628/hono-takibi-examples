import { OpenAPIHono } from '@hono/zod-openapi'
import { postEscerCertificateRoute, postSkcerCertificateRoute } from './routes'
import { postEscerCertificateRouteHandler, postSkcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEscerCertificateRoute, postEscerCertificateRouteHandler)
  .openapi(postSkcerCertificateRoute, postSkcerCertificateRouteHandler)

export default app
