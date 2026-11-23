import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRdcerCertificateRoute,
  postRegriiCertificateRoute,
  postRmcerCertificateRoute,
} from './routes'
import {
  postRdcerCertificateRouteHandler,
  postRegriiCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postRdcerCertificateRoute, postRdcerCertificateRouteHandler)
  .openapi(postRegriiCertificateRoute, postRegriiCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)

export default app
