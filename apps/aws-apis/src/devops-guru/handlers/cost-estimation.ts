import type { RouteHandler } from '@hono/zod-openapi'
import type { getCostEstimationRoute, putCostEstimationRoute } from '../routes'

export const getCostEstimationRouteHandler: RouteHandler<typeof getCostEstimationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCostEstimationRouteHandler: RouteHandler<typeof putCostEstimationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
