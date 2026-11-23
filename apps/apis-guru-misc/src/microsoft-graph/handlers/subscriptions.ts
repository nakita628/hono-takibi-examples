import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubscriptionsSubscriptionIdRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchSubscriptionsSubscriptionIdRoute,
  postSubscriptionsRoute,
  postSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
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

export const patchSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof patchSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
