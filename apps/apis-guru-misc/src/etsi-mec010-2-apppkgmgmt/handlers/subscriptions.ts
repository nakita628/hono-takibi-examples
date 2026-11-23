import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubscriptionsSubscriptionIdRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  postSubscriptionsRoute,
} from '../routes'

export const getSubscriptionsRouteHandler: RouteHandler<typeof getSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsRouteHandler: RouteHandler<typeof postSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
