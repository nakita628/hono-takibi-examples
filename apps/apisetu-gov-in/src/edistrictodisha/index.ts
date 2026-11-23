import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCtcerCertificateRoute,
  postEwcerCertificateRoute,
  postLhcerCertificateRoute,
  postObcerCertificateRoute,
  postRor1bCertificateRoute,
  postSlcerCertificateRoute,
} from './routes'
import {
  postCtcerCertificateRouteHandler,
  postEwcerCertificateRouteHandler,
  postLhcerCertificateRouteHandler,
  postObcerCertificateRouteHandler,
  postRor1bCertificateRouteHandler,
  postSlcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCtcerCertificateRoute, postCtcerCertificateRouteHandler)
  .openapi(postEwcerCertificateRoute, postEwcerCertificateRouteHandler)
  .openapi(postLhcerCertificateRoute, postLhcerCertificateRouteHandler)
  .openapi(postObcerCertificateRoute, postObcerCertificateRouteHandler)
  .openapi(postRor1bCertificateRoute, postRor1bCertificateRouteHandler)
  .openapi(postSlcerCertificateRoute, postSlcerCertificateRouteHandler)

export default app
