import { OpenAPIHono } from '@hono/zod-openapi'
import { postDrvlcCertificateRoute, postRvcerCertificateRoute } from './routes'
import { postDrvlcCertificateRouteHandler, postRvcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDrvlcCertificateRoute, postDrvlcCertificateRouteHandler)
  .openapi(postRvcerCertificateRoute, postRvcerCertificateRouteHandler)

export default app
