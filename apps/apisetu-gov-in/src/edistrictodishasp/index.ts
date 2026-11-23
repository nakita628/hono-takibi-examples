import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEgcerCertificateRoute,
  postEwcerCertificateRoute,
  postIncerCertificateRoute,
  postLhcerCertificateRoute,
  postObcerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
} from './routes'
import {
  postEgcerCertificateRouteHandler,
  postEwcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postLhcerCertificateRouteHandler,
  postObcerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
  postShcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEgcerCertificateRoute, postEgcerCertificateRouteHandler)
  .openapi(postEwcerCertificateRoute, postEwcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postLhcerCertificateRoute, postLhcerCertificateRouteHandler)
  .openapi(postObcerCertificateRoute, postObcerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)
  .openapi(postShcerCertificateRoute, postShcerCertificateRouteHandler)

export default app
