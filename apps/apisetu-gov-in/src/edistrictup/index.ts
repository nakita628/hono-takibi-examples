import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBtcerCertificateRoute,
  postCtcerCertificateRoute,
  postDmcerCertificateRoute,
  postDpicrCertificateRoute,
  postDtcerCertificateRoute,
  postIncerCertificateRoute,
} from './routes'
import {
  postBtcerCertificateRouteHandler,
  postCtcerCertificateRouteHandler,
  postDmcerCertificateRouteHandler,
  postDpicrCertificateRouteHandler,
  postDtcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBtcerCertificateRoute, postBtcerCertificateRouteHandler)
  .openapi(postCtcerCertificateRoute, postCtcerCertificateRouteHandler)
  .openapi(postDmcerCertificateRoute, postDmcerCertificateRouteHandler)
  .openapi(postDpicrCertificateRoute, postDpicrCertificateRouteHandler)
  .openapi(postDtcerCertificateRoute, postDtcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)

export default app
