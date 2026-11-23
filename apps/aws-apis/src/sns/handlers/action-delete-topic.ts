import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteTopicRoute, postActionDeleteTopicRoute } from '../routes'

export const getActionDeleteTopicRouteHandler: RouteHandler<
  typeof getActionDeleteTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTopicRouteHandler: RouteHandler<
  typeof postActionDeleteTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
