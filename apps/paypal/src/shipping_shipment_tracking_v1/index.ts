import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ShippingTrackersIdRoute,
  getV1ShippingTrackersRoute,
  postV1ShippingTrackersBatchRoute,
  postV1ShippingTrackersRoute,
  putV1ShippingTrackersIdRoute,
} from './routes'
import {
  getV1ShippingTrackersIdRouteHandler,
  getV1ShippingTrackersRouteHandler,
  postV1ShippingTrackersBatchRouteHandler,
  postV1ShippingTrackersRouteHandler,
  putV1ShippingTrackersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1ShippingTrackersBatchRoute, postV1ShippingTrackersBatchRouteHandler)
  .openapi(postV1ShippingTrackersRoute, postV1ShippingTrackersRouteHandler)
  .openapi(getV1ShippingTrackersRoute, getV1ShippingTrackersRouteHandler)
  .openapi(putV1ShippingTrackersIdRoute, putV1ShippingTrackersIdRouteHandler)
  .openapi(getV1ShippingTrackersIdRoute, getV1ShippingTrackersIdRouteHandler)

export default app
