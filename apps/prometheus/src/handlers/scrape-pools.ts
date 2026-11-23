import type { RouteHandler } from '@hono/zod-openapi'
import type { getScrapePoolsConfigRoute, getScrapePoolsRoute } from '../routes'

export const getScrapePoolsRouteHandler: RouteHandler<typeof getScrapePoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getScrapePoolsConfigRouteHandler: RouteHandler<
  typeof getScrapePoolsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
