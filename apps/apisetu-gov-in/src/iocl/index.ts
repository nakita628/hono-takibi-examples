import { OpenAPIHono } from '@hono/zod-openapi'
import { postLpgsvCertificateRoute, postLpgtvCertificateRoute } from './routes'
import { postLpgsvCertificateRouteHandler, postLpgtvCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postLpgsvCertificateRoute, postLpgsvCertificateRouteHandler)
  .openapi(postLpgtvCertificateRoute, postLpgtvCertificateRouteHandler)

export default app
