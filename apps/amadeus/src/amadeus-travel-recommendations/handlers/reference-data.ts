import type { RouteHandler } from '@hono/zod-openapi'
import type { getReferenceDataRecommendedLocationsRoute } from '../routes'

export const getReferenceDataRecommendedLocationsRouteHandler: RouteHandler<
  typeof getReferenceDataRecommendedLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
