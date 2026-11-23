import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeedV3CalendarRadarrIcsRoute } from '../routes'

export const getFeedV3CalendarRadarrIcsRouteHandler: RouteHandler<
  typeof getFeedV3CalendarRadarrIcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
