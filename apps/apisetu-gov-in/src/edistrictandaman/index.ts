import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBrlcsCertificateRoute,
  postDpcerCertificateRoute,
  postFmcerCertificateRoute,
  postIncerCertificateRoute,
  postLccepCertificateRoute,
  postNdcerCertificateRoute,
  postObcerCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
  postRucerCertificateRoute,
  postSicrdCertificateRoute,
  postVlcerCertificateRoute,
} from './routes'
import {
  postBrlcsCertificateRouteHandler,
  postDpcerCertificateRouteHandler,
  postFmcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postLccepCertificateRouteHandler,
  postNdcerCertificateRouteHandler,
  postObcerCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
  postRucerCertificateRouteHandler,
  postSicrdCertificateRouteHandler,
  postVlcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBrlcsCertificateRoute, postBrlcsCertificateRouteHandler)
  .openapi(postDpcerCertificateRoute, postDpcerCertificateRouteHandler)
  .openapi(postFmcerCertificateRoute, postFmcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postLccepCertificateRoute, postLccepCertificateRouteHandler)
  .openapi(postNdcerCertificateRoute, postNdcerCertificateRouteHandler)
  .openapi(postObcerCertificateRoute, postObcerCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)
  .openapi(postRucerCertificateRoute, postRucerCertificateRouteHandler)
  .openapi(postSicrdCertificateRoute, postSicrdCertificateRouteHandler)
  .openapi(postVlcerCertificateRoute, postVlcerCertificateRouteHandler)

export default app
