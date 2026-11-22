import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdRoute,
  getMetaNetworkOrigins202609IpRangesRoute,
  getMetaNetworkOrigins202609IpRangesSimpleRoute,
  getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute,
  postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getMetaNetworkOrigins202609IpRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetaNetworkOrigins202609IpRangesSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
