import type { RouteHandler } from '@hono/zod-openapi'
import type { getGrowthEstimatesRoute } from '../routes'

export const getGrowthEstimatesRouteHandler: RouteHandler<typeof getGrowthEstimatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
