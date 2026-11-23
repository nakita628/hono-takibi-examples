import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhcerCertificateRoute, postRpcerCertificateRoute } from './routes'
import { postPhcerCertificateRouteHandler, postRpcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postPhcerCertificateRoute, postPhcerCertificateRouteHandler)
  .openapi(postRpcerCertificateRoute, postRpcerCertificateRouteHandler)

export default app
