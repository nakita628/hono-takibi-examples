import { OpenAPIHono } from '@hono/zod-openapi'
import { postGovidCertificateRoute, postPhcerCertificateRoute } from './routes'
import { postGovidCertificateRouteHandler, postPhcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGovidCertificateRoute, postGovidCertificateRouteHandler)
  .openapi(postPhcerCertificateRoute, postPhcerCertificateRouteHandler)

export default app
