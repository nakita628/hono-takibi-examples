import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpoCalendarRoute } from '../routes'

export const getIpoCalendarRouteHandler: RouteHandler<typeof getIpoCalendarRoute> = async (c) => {
  throw new Error('Not implemented')
}
