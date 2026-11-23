import { OpenAPIHono } from '@hono/zod-openapi'
import { postGovidCertificateRoute, postMbcerCertificateRoute } from './routes'
import { postGovidCertificateRouteHandler, postMbcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGovidCertificateRoute, postGovidCertificateRouteHandler)
  .openapi(postMbcerCertificateRoute, postMbcerCertificateRouteHandler)

export default app
