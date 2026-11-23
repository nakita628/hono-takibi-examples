import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SubscriptionsSubscriptionIdRoute,
  getV1SubscriptionsProductGroupsRoute,
  getV1SubscriptionsRoute,
  getV1SubscriptionsSubscriptionIdRoute,
  patchV1SubscriptionsSubscriptionIdRoute,
} from './routes'
import {
  deleteV1SubscriptionsSubscriptionIdRouteHandler,
  getV1SubscriptionsProductGroupsRouteHandler,
  getV1SubscriptionsRouteHandler,
  getV1SubscriptionsSubscriptionIdRouteHandler,
  patchV1SubscriptionsSubscriptionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1SubscriptionsRoute, getV1SubscriptionsRouteHandler)
  .openapi(getV1SubscriptionsProductGroupsRoute, getV1SubscriptionsProductGroupsRouteHandler)
  .openapi(
    deleteV1SubscriptionsSubscriptionIdRoute,
    deleteV1SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(getV1SubscriptionsSubscriptionIdRoute, getV1SubscriptionsSubscriptionIdRouteHandler)
  .openapi(patchV1SubscriptionsSubscriptionIdRoute, patchV1SubscriptionsSubscriptionIdRouteHandler)

export default app
