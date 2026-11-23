import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSkusSkuIdSubscriptionsRoute,
  getSkusSkuIdSubscriptionsSubscriptionIdRoute,
} from '../routes'

export const getSkusSkuIdSubscriptionsRouteHandler: RouteHandler<
  typeof getSkusSkuIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSkusSkuIdSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getSkusSkuIdSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
