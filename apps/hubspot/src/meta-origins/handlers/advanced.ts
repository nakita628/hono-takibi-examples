import { OpenAPIHono } from '@hono/zod-openapi'
import { postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(
  postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
