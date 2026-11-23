import { OpenAPIHono } from '@hono/zod-openapi'
import { postLicerCertificateRoute, postPrcptCertificateRoute } from './routes'
import { postLicerCertificateRouteHandler, postPrcptCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postLicerCertificateRoute, postLicerCertificateRouteHandler)
  .openapi(postPrcptCertificateRoute, postPrcptCertificateRouteHandler)

export default app
