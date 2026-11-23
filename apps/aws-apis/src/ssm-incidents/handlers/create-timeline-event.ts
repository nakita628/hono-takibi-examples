import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateTimelineEventRoute } from '../routes'

export const postCreateTimelineEventRouteHandler: RouteHandler<
  typeof postCreateTimelineEventRoute
> = async (c) => {
  throw new Error('Not implemented')
}
