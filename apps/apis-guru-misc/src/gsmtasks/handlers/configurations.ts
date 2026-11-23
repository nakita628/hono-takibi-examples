import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigurationsIndexRoute } from '../routes'

export const getConfigurationsIndexRouteHandler: RouteHandler<
  typeof getConfigurationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
