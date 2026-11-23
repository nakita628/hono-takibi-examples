import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdRoute,
  getMetaNetworkOrigins202609IpRangesRoute,
  getMetaNetworkOrigins202609IpRangesSimpleRoute,
  getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute,
  postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute,
  postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestRoute,
} from './routes'
import {
  deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdRouteHandler,
  getMetaNetworkOrigins202609IpRangesRouteHandler,
  getMetaNetworkOrigins202609IpRangesSimpleRouteHandler,
  getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRouteHandler,
  postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRouteHandler,
  postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getMetaNetworkOrigins202609IpRangesRoute,
    getMetaNetworkOrigins202609IpRangesRouteHandler,
  )
  .openapi(
    getMetaNetworkOrigins202609IpRangesSimpleRoute,
    getMetaNetworkOrigins202609IpRangesSimpleRouteHandler,
  )
  .openapi(
    getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute,
    getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRouteHandler,
  )
  .openapi(
    postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute,
    postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRouteHandler,
  )
  .openapi(
    deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdRoute,
    deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdRouteHandler,
  )
  .openapi(
    postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestRoute,
    postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestRouteHandler,
  )

export default app
