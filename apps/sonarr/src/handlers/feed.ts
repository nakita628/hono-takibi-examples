import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeedV3CalendarSonarrIcsRoute } from '../routes'

export const getFeedV3CalendarSonarrIcsRouteHandler: RouteHandler<
  typeof getFeedV3CalendarSonarrIcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
