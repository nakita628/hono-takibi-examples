import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTopicRoute } from '../routes'

export const postGetTopicRouteHandler: RouteHandler<typeof postGetTopicRoute> = async (c) => {
  throw new Error('Not implemented')
}
