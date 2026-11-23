import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBtcerCertificateRoute,
  postDtcerCertificateRoute,
  postEwcerCertificateRoute,
  postObcerCertificateRoute,
  postRacerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
} from './routes'
import {
  postBtcerCertificateRouteHandler,
  postDtcerCertificateRouteHandler,
  postEwcerCertificateRouteHandler,
  postObcerCertificateRouteHandler,
  postRacerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
  postShcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBtcerCertificateRoute, postBtcerCertificateRouteHandler)
  .openapi(postDtcerCertificateRoute, postDtcerCertificateRouteHandler)
  .openapi(postEwcerCertificateRoute, postEwcerCertificateRouteHandler)
  .openapi(postObcerCertificateRoute, postObcerCertificateRouteHandler)
  .openapi(postRacerCertificateRoute, postRacerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)
  .openapi(postShcerCertificateRoute, postShcerCertificateRouteHandler)

export default app
