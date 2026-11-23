import type { RouteHandler } from '@hono/zod-openapi'
import type { postListRobotsRoute } from '../routes'

export const postListRobotsRouteHandler: RouteHandler<typeof postListRobotsRoute> = async (c) => {
  throw new Error('Not implemented')
}
