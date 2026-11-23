import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventSubscriptionsEventSubscriptionIdRoute,
  getEventSubscriptionsRoute,
  patchEventSubscriptionsEventSubscriptionIdRoute,
  postEventSubscriptionsRoute,
} from '../routes'

export const getEventSubscriptionsRouteHandler: RouteHandler<
  typeof getEventSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventSubscriptionsRouteHandler: RouteHandler<
  typeof postEventSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventSubscriptionsEventSubscriptionIdRouteHandler: RouteHandler<
  typeof getEventSubscriptionsEventSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventSubscriptionsEventSubscriptionIdRouteHandler: RouteHandler<
  typeof patchEventSubscriptionsEventSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
