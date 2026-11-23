import { OpenAPIHono } from '@hono/zod-openapi'
import { postCripcCertificateRoute, postTwipcCertificateRoute } from './routes'
import { postCripcCertificateRouteHandler, postTwipcCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCripcCertificateRoute, postCripcCertificateRouteHandler)
  .openapi(postTwipcCertificateRoute, postTwipcCertificateRouteHandler)

export default app
