import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetCostEstimateRoute } from '../routes'

export const postGetCostEstimateRouteHandler: RouteHandler<
  typeof postGetCostEstimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
