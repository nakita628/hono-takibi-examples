import type { RouteHandler } from '@hono/zod-openapi'
import type { getHistoryCarUkVrmRoute, getHistoryCarVinRoute } from '../routes'

export const getHistoryCarUkVrmRouteHandler: RouteHandler<typeof getHistoryCarUkVrmRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHistoryCarVinRouteHandler: RouteHandler<typeof getHistoryCarVinRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
