import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSubscriptionsListRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdFrequencyOptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchSubscriptionsSubscriptionIdCancelRoute,
  patchSubscriptionsSubscriptionIdRoute,
  postSubscriptionsSubscriptionIdAddressesRoute,
} from '../routes'

export const getSubscriptionsRouteHandler: RouteHandler<typeof getSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsListRouteHandler: RouteHandler<
  typeof getSubscriptionsListRoute
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

export const postSubscriptionsSubscriptionIdAddressesRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSubscriptionsSubscriptionIdCancelRouteHandler: RouteHandler<
  typeof patchSubscriptionsSubscriptionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSubscriptionIdFrequencyOptionsRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdFrequencyOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
