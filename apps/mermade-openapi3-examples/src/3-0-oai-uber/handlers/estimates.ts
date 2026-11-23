import type { RouteHandler } from '@hono/zod-openapi'
import type { getEstimatesPriceRoute, getEstimatesTimeRoute } from '../routes'

export const getEstimatesPriceRouteHandler: RouteHandler<typeof getEstimatesPriceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEstimatesTimeRouteHandler: RouteHandler<typeof getEstimatesTimeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
