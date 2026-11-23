import type { RouteHandler } from '@hono/zod-openapi'
import type { getDashboardChartsRoute, getDashboardCountsRoute } from '../routes'

export const getDashboardChartsRouteHandler: RouteHandler<typeof getDashboardChartsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDashboardCountsRouteHandler: RouteHandler<typeof getDashboardCountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
