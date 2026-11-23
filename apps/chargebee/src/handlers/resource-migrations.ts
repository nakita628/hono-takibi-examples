import type { RouteHandler } from '@hono/zod-openapi'
import type { getResourceMigrationsRetrieveLatestRoute } from '../routes'

export const getResourceMigrationsRetrieveLatestRouteHandler: RouteHandler<
  typeof getResourceMigrationsRetrieveLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
