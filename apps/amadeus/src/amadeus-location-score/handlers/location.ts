import type { RouteHandler } from '@hono/zod-openapi'
import type { getLocationAnalyticsCategoryRatedAreasRoute } from '../routes'

export const getLocationAnalyticsCategoryRatedAreasRouteHandler: RouteHandler<
  typeof getLocationAnalyticsCategoryRatedAreasRoute
> = async (c) => {
  throw new Error('Not implemented')
}
