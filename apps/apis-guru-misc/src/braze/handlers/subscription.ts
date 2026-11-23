import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubscriptionStatusGetRoute, getSubscriptionUserStatusRoute } from '../routes'

export const getSubscriptionStatusGetRouteHandler: RouteHandler<
  typeof getSubscriptionStatusGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionUserStatusRouteHandler: RouteHandler<
  typeof getSubscriptionUserStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
