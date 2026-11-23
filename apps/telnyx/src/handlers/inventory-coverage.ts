import type { RouteHandler } from '@hono/zod-openapi'
import type { getInventoryCoverageRoute } from '../routes'

export const getInventoryCoverageRouteHandler: RouteHandler<
  typeof getInventoryCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
