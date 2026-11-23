import { OpenAPIHono } from '@hono/zod-openapi'
import { postPecerCertificateRoute, postPrfndCertificateRoute } from './routes'
import { postPecerCertificateRouteHandler, postPrfndCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postPecerCertificateRoute, postPecerCertificateRouteHandler)
  .openapi(postPrfndCertificateRoute, postPrfndCertificateRouteHandler)

export default app
