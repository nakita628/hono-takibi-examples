import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1SubscriptionsSubscriptionIdRoute,
  getV1SubscriptionsProductGroupsRoute,
  getV1SubscriptionsRoute,
  getV1SubscriptionsSubscriptionIdRoute,
  patchV1SubscriptionsSubscriptionIdRoute,
} from '../routes'

export const getV1SubscriptionsRouteHandler: RouteHandler<typeof getV1SubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsProductGroupsRouteHandler: RouteHandler<
  typeof getV1SubscriptionsProductGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteV1SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getV1SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof patchV1SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
