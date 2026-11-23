import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatisticsChargingRoute } from '../routes'

export const getStatisticsChargingRouteHandler: RouteHandler<
  typeof getStatisticsChargingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
