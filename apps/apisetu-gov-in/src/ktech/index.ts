import { OpenAPIHono } from '@hono/zod-openapi'
import { postCocerCertificateRoute, postRfcerCertificateRoute } from './routes'
import { postCocerCertificateRouteHandler, postRfcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCocerCertificateRoute, postCocerCertificateRouteHandler)
  .openapi(postRfcerCertificateRoute, postRfcerCertificateRouteHandler)

export default app
