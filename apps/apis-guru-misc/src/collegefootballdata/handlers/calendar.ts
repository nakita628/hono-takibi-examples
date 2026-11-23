import type { RouteHandler } from '@hono/zod-openapi'
import type { getCalendarRoute } from '../routes'

export const getCalendarRouteHandler: RouteHandler<typeof getCalendarRoute> = async (c) => {
  throw new Error('Not implemented')
}
