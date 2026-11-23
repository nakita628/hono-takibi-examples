import { OpenAPIHono } from '@hono/zod-openapi'
import { postRdcerCertificateRoute, postRor1bCertificateRoute } from './routes'
import { postRdcerCertificateRouteHandler, postRor1bCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postRdcerCertificateRoute, postRdcerCertificateRouteHandler)
  .openapi(postRor1bCertificateRoute, postRor1bCertificateRouteHandler)

export default app
