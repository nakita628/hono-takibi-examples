import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeedV1CalendarLidarrIcsRoute } from '../routes'

export const getFeedV1CalendarLidarrIcsRouteHandler: RouteHandler<
  typeof getFeedV1CalendarLidarrIcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
