import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdjustAuthorisationRoute,
  postAuthorise3dRoute,
  postAuthorise3ds2Route,
  postAuthoriseRoute,
  postCancelOrRefundRoute,
  postCancelRoute,
  postCaptureRoute,
  postDonateRoute,
  postGetAuthenticationResultRoute,
  postRefundRoute,
  postRetrieve3ds2ResultRoute,
  postTechnicalCancelRoute,
  postVoidPendingRefundRoute,
} from './routes'
import {
  postAdjustAuthorisationRouteHandler,
  postAuthorise3dRouteHandler,
  postAuthorise3ds2RouteHandler,
  postAuthoriseRouteHandler,
  postCancelOrRefundRouteHandler,
  postCancelRouteHandler,
  postCaptureRouteHandler,
  postDonateRouteHandler,
  postGetAuthenticationResultRouteHandler,
  postRefundRouteHandler,
  postRetrieve3ds2ResultRouteHandler,
  postTechnicalCancelRouteHandler,
  postVoidPendingRefundRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAdjustAuthorisationRoute, postAdjustAuthorisationRouteHandler)
  .openapi(postAuthoriseRoute, postAuthoriseRouteHandler)
  .openapi(postAuthorise3dRoute, postAuthorise3dRouteHandler)
  .openapi(postAuthorise3ds2Route, postAuthorise3ds2RouteHandler)
  .openapi(postCancelRoute, postCancelRouteHandler)
  .openapi(postCancelOrRefundRoute, postCancelOrRefundRouteHandler)
  .openapi(postCaptureRoute, postCaptureRouteHandler)
  .openapi(postDonateRoute, postDonateRouteHandler)
  .openapi(postGetAuthenticationResultRoute, postGetAuthenticationResultRouteHandler)
  .openapi(postRefundRoute, postRefundRouteHandler)
  .openapi(postRetrieve3ds2ResultRoute, postRetrieve3ds2ResultRouteHandler)
  .openapi(postTechnicalCancelRoute, postTechnicalCancelRouteHandler)
  .openapi(postVoidPendingRefundRoute, postVoidPendingRefundRouteHandler)

export default app
