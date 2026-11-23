import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBusV1SubscriptionsSubscriptionIdEventsRoute,
  postBusV1EventsRoute,
  putBusV1SubscriptionsSubscriptionIdRoute,
} from '../routes'

export const postBusV1EventsRouteHandler: RouteHandler<typeof postBusV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBusV1SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof putBusV1SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBusV1SubscriptionsSubscriptionIdEventsRouteHandler: RouteHandler<
  typeof getBusV1SubscriptionsSubscriptionIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
