import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateTimelineEventRoute } from '../routes'

export const postUpdateTimelineEventRouteHandler: RouteHandler<
  typeof postUpdateTimelineEventRoute
> = async (c) => {
  throw new Error('Not implemented')
}
