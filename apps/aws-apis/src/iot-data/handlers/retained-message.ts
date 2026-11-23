import type { RouteHandler } from '@hono/zod-openapi'
import type { getRetainedMessageRoute, getRetainedMessageTopicRoute } from '../routes'

export const getRetainedMessageTopicRouteHandler: RouteHandler<
  typeof getRetainedMessageTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRetainedMessageRouteHandler: RouteHandler<typeof getRetainedMessageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
