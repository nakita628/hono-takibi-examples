import type { RouteHandler } from '@hono/zod-openapi'
import type { getEarningsCalendarRoute } from '../routes'

export const getEarningsCalendarRouteHandler: RouteHandler<
  typeof getEarningsCalendarRoute
> = async (c) => {
  throw new Error('Not implemented')
}
