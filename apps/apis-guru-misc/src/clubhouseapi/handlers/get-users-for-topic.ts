import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetUsersForTopicRoute } from '../routes'

export const getGetUsersForTopicRouteHandler: RouteHandler<
  typeof getGetUsersForTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
