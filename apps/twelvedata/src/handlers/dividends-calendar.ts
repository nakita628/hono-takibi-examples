import type { RouteHandler } from '@hono/zod-openapi'
import type { getDividendsCalendarRoute } from '../routes'

export const getDividendsCalendarRouteHandler: RouteHandler<
  typeof getDividendsCalendarRoute
> = async (c) => {
  throw new Error('Not implemented')
}
