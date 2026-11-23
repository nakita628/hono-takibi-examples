import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusV1SubscriptionsSubscriptionIdEventsRoute,
  postBusV1EventsRoute,
  putBusV1SubscriptionsSubscriptionIdRoute,
} from './routes'
import {
  getBusV1SubscriptionsSubscriptionIdEventsRouteHandler,
  postBusV1EventsRouteHandler,
  putBusV1SubscriptionsSubscriptionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBusV1EventsRoute, postBusV1EventsRouteHandler)
  .openapi(
    putBusV1SubscriptionsSubscriptionIdRoute,
    putBusV1SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    getBusV1SubscriptionsSubscriptionIdEventsRoute,
    getBusV1SubscriptionsSubscriptionIdEventsRouteHandler,
  )

export default app
