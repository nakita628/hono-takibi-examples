import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCtcerCertificateRoute,
  postEwcerCertificateRoute,
  postIncerCertificateRoute,
  postRscerCertificateRoute,
} from './routes'
import {
  postCtcerCertificateRouteHandler,
  postEwcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCtcerCertificateRoute, postCtcerCertificateRouteHandler)
  .openapi(postEwcerCertificateRoute, postEwcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)

export default app
