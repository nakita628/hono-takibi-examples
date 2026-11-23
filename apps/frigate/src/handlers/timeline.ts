import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimelineHourlyRoute, getTimelineRoute } from '../routes'

export const getTimelineRouteHandler: RouteHandler<typeof getTimelineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimelineHourlyRouteHandler: RouteHandler<typeof getTimelineHourlyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
