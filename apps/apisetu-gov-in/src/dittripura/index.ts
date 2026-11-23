import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChcerCertificateRoute,
  postDncerCertificateRoute,
  postDpcerCertificateRoute,
  postFslcsCertificateRoute,
  postGrredCertificateRoute,
  postIncerCertificateRoute,
  postIsoalCertificateRoute,
  postLvcerCertificateRoute,
  postMalcsCertificateRoute,
  postMpkbyCertificateRoute,
  postObcerCertificateRoute,
  postRitinCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
  postSmcerCertificateRoute,
  postSslcsCertificateRoute,
  postVrwmiCertificateRoute,
} from './routes'
import {
  postChcerCertificateRouteHandler,
  postDncerCertificateRouteHandler,
  postDpcerCertificateRouteHandler,
  postFslcsCertificateRouteHandler,
  postGrredCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postIsoalCertificateRouteHandler,
  postLvcerCertificateRouteHandler,
  postMalcsCertificateRouteHandler,
  postMpkbyCertificateRouteHandler,
  postObcerCertificateRouteHandler,
  postRitinCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
  postShcerCertificateRouteHandler,
  postSmcerCertificateRouteHandler,
  postSslcsCertificateRouteHandler,
  postVrwmiCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postChcerCertificateRoute, postChcerCertificateRouteHandler)
  .openapi(postDncerCertificateRoute, postDncerCertificateRouteHandler)
  .openapi(postDpcerCertificateRoute, postDpcerCertificateRouteHandler)
  .openapi(postFslcsCertificateRoute, postFslcsCertificateRouteHandler)
  .openapi(postGrredCertificateRoute, postGrredCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postIsoalCertificateRoute, postIsoalCertificateRouteHandler)
  .openapi(postLvcerCertificateRoute, postLvcerCertificateRouteHandler)
  .openapi(postMalcsCertificateRoute, postMalcsCertificateRouteHandler)
  .openapi(postMpkbyCertificateRoute, postMpkbyCertificateRouteHandler)
  .openapi(postObcerCertificateRoute, postObcerCertificateRouteHandler)
  .openapi(postRitinCertificateRoute, postRitinCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)
  .openapi(postShcerCertificateRoute, postShcerCertificateRouteHandler)
  .openapi(postSmcerCertificateRoute, postSmcerCertificateRouteHandler)
  .openapi(postSslcsCertificateRoute, postSslcsCertificateRouteHandler)
  .openapi(postVrwmiCertificateRoute, postVrwmiCertificateRouteHandler)

export default app
