import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnalyticsExtensionsRoute, getAnalyticsGamesRoute } from '../routes'

export const getAnalyticsExtensionsRouteHandler: RouteHandler<
  typeof getAnalyticsExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsGamesRouteHandler: RouteHandler<typeof getAnalyticsGamesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
