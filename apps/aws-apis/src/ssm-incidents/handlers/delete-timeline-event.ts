import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteTimelineEventRoute } from '../routes'

export const postDeleteTimelineEventRouteHandler: RouteHandler<
  typeof postDeleteTimelineEventRoute
> = async (c) => {
  throw new Error('Not implemented')
}
