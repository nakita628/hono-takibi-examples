import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmcerCertificateRoute,
  postCncerCertificateRoute,
  postCtcerCertificateRoute,
  postDmcerCertificateRoute,
  postDpcerCertificateRoute,
  postDscerCertificateRoute,
  postFmcerCertificateRoute,
  postIdcerCertificateRoute,
  postImcerCertificateRoute,
  postIncerCertificateRoute,
  postLfcerCertificateRoute,
  postLhcerCertificateRoute,
  postLocerCertificateRoute,
  postMncerCertificateRoute,
  postNrcerCertificateRoute,
  postNtcerCertificateRoute,
  postOscerCertificateRoute,
  postPncerCertificateRoute,
  postPscerCertificateRoute,
  postRlcerCertificateRoute,
  postRscerCertificateRoute,
  postSlcerCertificateRoute,
  postVlcerCertificateRoute,
  postWwcerCertificateRoute,
} from './routes'
import {
  postCmcerCertificateRouteHandler,
  postCncerCertificateRouteHandler,
  postCtcerCertificateRouteHandler,
  postDmcerCertificateRouteHandler,
  postDpcerCertificateRouteHandler,
  postDscerCertificateRouteHandler,
  postFmcerCertificateRouteHandler,
  postIdcerCertificateRouteHandler,
  postImcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postLfcerCertificateRouteHandler,
  postLhcerCertificateRouteHandler,
  postLocerCertificateRouteHandler,
  postMncerCertificateRouteHandler,
  postNrcerCertificateRouteHandler,
  postNtcerCertificateRouteHandler,
  postOscerCertificateRouteHandler,
  postPncerCertificateRouteHandler,
  postPscerCertificateRouteHandler,
  postRlcerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
  postSlcerCertificateRouteHandler,
  postVlcerCertificateRouteHandler,
  postWwcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCmcerCertificateRoute, postCmcerCertificateRouteHandler)
  .openapi(postCncerCertificateRoute, postCncerCertificateRouteHandler)
  .openapi(postCtcerCertificateRoute, postCtcerCertificateRouteHandler)
  .openapi(postDmcerCertificateRoute, postDmcerCertificateRouteHandler)
  .openapi(postDpcerCertificateRoute, postDpcerCertificateRouteHandler)
  .openapi(postDscerCertificateRoute, postDscerCertificateRouteHandler)
  .openapi(postFmcerCertificateRoute, postFmcerCertificateRouteHandler)
  .openapi(postIdcerCertificateRoute, postIdcerCertificateRouteHandler)
  .openapi(postImcerCertificateRoute, postImcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postLfcerCertificateRoute, postLfcerCertificateRouteHandler)
  .openapi(postLhcerCertificateRoute, postLhcerCertificateRouteHandler)
  .openapi(postLocerCertificateRoute, postLocerCertificateRouteHandler)
  .openapi(postMncerCertificateRoute, postMncerCertificateRouteHandler)
  .openapi(postNrcerCertificateRoute, postNrcerCertificateRouteHandler)
  .openapi(postNtcerCertificateRoute, postNtcerCertificateRouteHandler)
  .openapi(postOscerCertificateRoute, postOscerCertificateRouteHandler)
  .openapi(postPncerCertificateRoute, postPncerCertificateRouteHandler)
  .openapi(postPscerCertificateRoute, postPscerCertificateRouteHandler)
  .openapi(postRlcerCertificateRoute, postRlcerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)
  .openapi(postSlcerCertificateRoute, postSlcerCertificateRouteHandler)
  .openapi(postVlcerCertificateRoute, postVlcerCertificateRouteHandler)
  .openapi(postWwcerCertificateRoute, postWwcerCertificateRouteHandler)

export default app
