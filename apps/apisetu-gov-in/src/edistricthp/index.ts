import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAecmwCertificateRoute,
  postAemtwCertificateRoute,
  postAgcerCertificateRoute,
  postAlimwCertificateRoute,
  postArcmwCertificateRoute,
  postArmtwCertificateRoute,
  postBacerCertificateRoute,
  postBhcerCertificateRoute,
  postBpcrdCertificateRoute,
  postBtcerCertificateRoute,
  postCecerCertificateRoute,
  postChcerCertificateRoute,
  postClcerCertificateRoute,
  postCoprgCertificateRoute,
  postDccerCertificateRoute,
  postDmcerCertificateRoute,
  postDpicrCertificateRoute,
  postDtcerCertificateRoute,
  postErcerCertificateRoute,
  postFfcerCertificateRoute,
  postIgcerCertificateRoute,
  postIncerCertificateRoute,
  postLhcerCertificateRoute,
  postMncerCertificateRoute,
  postMnrgaCertificateRoute,
  postObcerCertificateRoute,
  postRacerCertificateRoute,
  postRmcerCertificateRoute,
  postSecerCertificateRoute,
  postShcerCertificateRoute,
  postSicrdCertificateRoute,
  postSrcerCertificateRoute,
} from './routes'
import {
  postAecmwCertificateRouteHandler,
  postAemtwCertificateRouteHandler,
  postAgcerCertificateRouteHandler,
  postAlimwCertificateRouteHandler,
  postArcmwCertificateRouteHandler,
  postArmtwCertificateRouteHandler,
  postBacerCertificateRouteHandler,
  postBhcerCertificateRouteHandler,
  postBpcrdCertificateRouteHandler,
  postBtcerCertificateRouteHandler,
  postCecerCertificateRouteHandler,
  postChcerCertificateRouteHandler,
  postClcerCertificateRouteHandler,
  postCoprgCertificateRouteHandler,
  postDccerCertificateRouteHandler,
  postDmcerCertificateRouteHandler,
  postDpicrCertificateRouteHandler,
  postDtcerCertificateRouteHandler,
  postErcerCertificateRouteHandler,
  postFfcerCertificateRouteHandler,
  postIgcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postLhcerCertificateRouteHandler,
  postMncerCertificateRouteHandler,
  postMnrgaCertificateRouteHandler,
  postObcerCertificateRouteHandler,
  postRacerCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
  postSecerCertificateRouteHandler,
  postShcerCertificateRouteHandler,
  postSicrdCertificateRouteHandler,
  postSrcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAecmwCertificateRoute, postAecmwCertificateRouteHandler)
  .openapi(postAemtwCertificateRoute, postAemtwCertificateRouteHandler)
  .openapi(postAgcerCertificateRoute, postAgcerCertificateRouteHandler)
  .openapi(postAlimwCertificateRoute, postAlimwCertificateRouteHandler)
  .openapi(postArcmwCertificateRoute, postArcmwCertificateRouteHandler)
  .openapi(postArmtwCertificateRoute, postArmtwCertificateRouteHandler)
  .openapi(postBacerCertificateRoute, postBacerCertificateRouteHandler)
  .openapi(postBhcerCertificateRoute, postBhcerCertificateRouteHandler)
  .openapi(postBpcrdCertificateRoute, postBpcrdCertificateRouteHandler)
  .openapi(postBtcerCertificateRoute, postBtcerCertificateRouteHandler)
  .openapi(postCecerCertificateRoute, postCecerCertificateRouteHandler)
  .openapi(postChcerCertificateRoute, postChcerCertificateRouteHandler)
  .openapi(postClcerCertificateRoute, postClcerCertificateRouteHandler)
  .openapi(postCoprgCertificateRoute, postCoprgCertificateRouteHandler)
  .openapi(postDccerCertificateRoute, postDccerCertificateRouteHandler)
  .openapi(postDmcerCertificateRoute, postDmcerCertificateRouteHandler)
  .openapi(postDpicrCertificateRoute, postDpicrCertificateRouteHandler)
  .openapi(postDtcerCertificateRoute, postDtcerCertificateRouteHandler)
  .openapi(postErcerCertificateRoute, postErcerCertificateRouteHandler)
  .openapi(postFfcerCertificateRoute, postFfcerCertificateRouteHandler)
  .openapi(postIgcerCertificateRoute, postIgcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postLhcerCertificateRoute, postLhcerCertificateRouteHandler)
  .openapi(postMncerCertificateRoute, postMncerCertificateRouteHandler)
  .openapi(postMnrgaCertificateRoute, postMnrgaCertificateRouteHandler)
  .openapi(postObcerCertificateRoute, postObcerCertificateRouteHandler)
  .openapi(postRacerCertificateRoute, postRacerCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)
  .openapi(postSecerCertificateRoute, postSecerCertificateRouteHandler)
  .openapi(postShcerCertificateRoute, postShcerCertificateRouteHandler)
  .openapi(postSicrdCertificateRoute, postSicrdCertificateRouteHandler)
  .openapi(postSrcerCertificateRoute, postSrcerCertificateRouteHandler)

export default app
