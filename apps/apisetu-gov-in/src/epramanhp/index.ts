import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAgcerCertificateRoute,
  postBacerCertificateRoute,
  postBhcerCertificateRoute,
  postChcerCertificateRoute,
  postDccerCertificateRoute,
  postFfcerCertificateRoute,
  postIncerCertificateRoute,
  postLhcerCertificateRoute,
  postMncerCertificateRoute,
  postObcerCertificateRoute,
  postPsprtCertificateRoute,
  postRacerCertificateRoute,
  postRmcerCertificateRoute,
  postShcerCertificateRoute,
} from './routes'
import {
  postAgcerCertificateRouteHandler,
  postBacerCertificateRouteHandler,
  postBhcerCertificateRouteHandler,
  postChcerCertificateRouteHandler,
  postDccerCertificateRouteHandler,
  postFfcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postLhcerCertificateRouteHandler,
  postMncerCertificateRouteHandler,
  postObcerCertificateRouteHandler,
  postPsprtCertificateRouteHandler,
  postRacerCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
  postShcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAgcerCertificateRoute, postAgcerCertificateRouteHandler)
  .openapi(postBacerCertificateRoute, postBacerCertificateRouteHandler)
  .openapi(postBhcerCertificateRoute, postBhcerCertificateRouteHandler)
  .openapi(postChcerCertificateRoute, postChcerCertificateRouteHandler)
  .openapi(postDccerCertificateRoute, postDccerCertificateRouteHandler)
  .openapi(postFfcerCertificateRoute, postFfcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postLhcerCertificateRoute, postLhcerCertificateRouteHandler)
  .openapi(postMncerCertificateRoute, postMncerCertificateRouteHandler)
  .openapi(postObcerCertificateRoute, postObcerCertificateRouteHandler)
  .openapi(postPsprtCertificateRoute, postPsprtCertificateRouteHandler)
  .openapi(postRacerCertificateRoute, postRacerCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)
  .openapi(postShcerCertificateRoute, postShcerCertificateRouteHandler)

export default app
