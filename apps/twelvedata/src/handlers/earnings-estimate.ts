import type { RouteHandler } from '@hono/zod-openapi'
import type { getEarningsEstimateRoute } from '../routes'

export const getEarningsEstimateRouteHandler: RouteHandler<
  typeof getEarningsEstimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
