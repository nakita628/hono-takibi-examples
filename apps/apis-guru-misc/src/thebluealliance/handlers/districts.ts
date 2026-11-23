import type { RouteHandler } from '@hono/zod-openapi'
import type { getDistrictsYearRoute } from '../routes'

export const getDistrictsYearRouteHandler: RouteHandler<typeof getDistrictsYearRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
