import type { RouteHandler } from '@hono/zod-openapi'
import type { postListTimelineEventsRoute } from '../routes'

export const postListTimelineEventsRouteHandler: RouteHandler<
  typeof postListTimelineEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
