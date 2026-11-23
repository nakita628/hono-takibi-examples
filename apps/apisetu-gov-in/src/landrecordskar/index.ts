import { OpenAPIHono } from '@hono/zod-openapi'
import { postCncerCertificateRoute, postMutanCertificateRoute } from './routes'
import { postCncerCertificateRouteHandler, postMutanCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCncerCertificateRoute, postCncerCertificateRouteHandler)
  .openapi(postMutanCertificateRoute, postMutanCertificateRouteHandler)

export default app
