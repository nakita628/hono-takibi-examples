import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubscriptionsRoute, getSubscriptionsUserRoute } from '../routes'

export const getSubscriptionsRouteHandler: RouteHandler<typeof getSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsUserRouteHandler: RouteHandler<
  typeof getSubscriptionsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
