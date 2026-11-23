import type { RouteHandler } from '@hono/zod-openapi'
import type { getSplitsCalendarRoute } from '../routes'

export const getSplitsCalendarRouteHandler: RouteHandler<typeof getSplitsCalendarRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
