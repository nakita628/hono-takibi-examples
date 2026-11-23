import type { RouteHandler } from '@hono/zod-openapi'
import type { getRevenueEstimateRoute } from '../routes'

export const getRevenueEstimateRouteHandler: RouteHandler<typeof getRevenueEstimateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
