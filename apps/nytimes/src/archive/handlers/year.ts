import type { RouteHandler } from '@hono/zod-openapi'
import type { getYearMonthJsonRoute } from '../routes'

export const getYearMonthJsonRouteHandler: RouteHandler<typeof getYearMonthJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
