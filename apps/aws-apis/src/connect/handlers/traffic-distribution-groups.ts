import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrafficDistributionGroupsRoute } from '../routes'

export const getTrafficDistributionGroupsRouteHandler: RouteHandler<
  typeof getTrafficDistributionGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
