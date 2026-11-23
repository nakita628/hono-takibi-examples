import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBtcerCertificateRoute,
  postCtcerCertificateRoute,
  postDtcerCertificateRoute,
  postEwcerCertificateRoute,
  postIncerCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
} from './routes'
import {
  postBtcerCertificateRouteHandler,
  postCtcerCertificateRouteHandler,
  postDtcerCertificateRouteHandler,
  postEwcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBtcerCertificateRoute, postBtcerCertificateRouteHandler)
  .openapi(postCtcerCertificateRoute, postCtcerCertificateRouteHandler)
  .openapi(postDtcerCertificateRoute, postDtcerCertificateRouteHandler)
  .openapi(postEwcerCertificateRoute, postEwcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)

export default app
