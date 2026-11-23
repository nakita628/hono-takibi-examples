import type { RouteHandler } from '@hono/zod-openapi'
import type { postTopicsTopicRoute } from '../routes'

export const postTopicsTopicRouteHandler: RouteHandler<typeof postTopicsTopicRoute> = async (c) => {
  throw new Error('Not implemented')
}
