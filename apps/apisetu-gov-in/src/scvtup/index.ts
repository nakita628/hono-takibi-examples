import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkcerCertificateRoute, postSkmstCertificateRoute } from './routes'
import { postSkcerCertificateRouteHandler, postSkmstCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSkcerCertificateRoute, postSkcerCertificateRouteHandler)
  .openapi(postSkmstCertificateRoute, postSkmstCertificateRouteHandler)

export default app
