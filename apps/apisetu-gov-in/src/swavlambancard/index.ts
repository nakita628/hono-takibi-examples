import { OpenAPIHono } from '@hono/zod-openapi'
import { postDpicrCertificateRoute, postGovidCertificateRoute } from './routes'
import { postDpicrCertificateRouteHandler, postGovidCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDpicrCertificateRoute, postDpicrCertificateRouteHandler)
  .openapi(postGovidCertificateRoute, postGovidCertificateRouteHandler)

export default app
