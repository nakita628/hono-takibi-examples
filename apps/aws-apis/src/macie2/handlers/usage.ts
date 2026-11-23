import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsageRoute, postUsageStatisticsRoute } from '../routes'

export const postUsageStatisticsRouteHandler: RouteHandler<
  typeof postUsageStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsageRouteHandler: RouteHandler<typeof getUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}
