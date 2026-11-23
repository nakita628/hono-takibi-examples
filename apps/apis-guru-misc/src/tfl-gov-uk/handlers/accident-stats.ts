import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccidentStatsYearRoute } from '../routes'

export const getAccidentStatsYearRouteHandler: RouteHandler<
  typeof getAccidentStatsYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}
