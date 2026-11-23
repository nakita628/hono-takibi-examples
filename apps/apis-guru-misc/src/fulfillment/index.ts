import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrdersIdRoute,
  getAccountingRoute,
  getInventoryRoute,
  getOrdersIdRoute,
  getOrdersRoute,
  getReturnsRoute,
  getTrackRoute,
  getUsersMeRoute,
  postOauthAccessTokenRoute,
  postOrdersRoute,
  putOrdersIdShipRoute,
  putOrdersIdStatusRoute,
  putReturnsRoute,
} from './routes'
import {
  deleteOrdersIdRouteHandler,
  getAccountingRouteHandler,
  getInventoryRouteHandler,
  getOrdersIdRouteHandler,
  getOrdersRouteHandler,
  getReturnsRouteHandler,
  getTrackRouteHandler,
  getUsersMeRouteHandler,
  postOauthAccessTokenRouteHandler,
  postOrdersRouteHandler,
  putOrdersIdShipRouteHandler,
  putOrdersIdStatusRouteHandler,
  putReturnsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountingRoute, getAccountingRouteHandler)
  .openapi(getInventoryRoute, getInventoryRouteHandler)
  .openapi(postOauthAccessTokenRoute, postOauthAccessTokenRouteHandler)
  .openapi(getOrdersRoute, getOrdersRouteHandler)
  .openapi(postOrdersRoute, postOrdersRouteHandler)
  .openapi(deleteOrdersIdRoute, deleteOrdersIdRouteHandler)
  .openapi(getOrdersIdRoute, getOrdersIdRouteHandler)
  .openapi(putOrdersIdShipRoute, putOrdersIdShipRouteHandler)
  .openapi(putOrdersIdStatusRoute, putOrdersIdStatusRouteHandler)
  .openapi(getReturnsRoute, getReturnsRouteHandler)
  .openapi(putReturnsRoute, putReturnsRouteHandler)
  .openapi(getTrackRoute, getTrackRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)

export default app
