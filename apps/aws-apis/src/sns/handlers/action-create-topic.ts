import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateTopicRoute, postActionCreateTopicRoute } from '../routes'

export const getActionCreateTopicRouteHandler: RouteHandler<
  typeof getActionCreateTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTopicRouteHandler: RouteHandler<
  typeof postActionCreateTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
