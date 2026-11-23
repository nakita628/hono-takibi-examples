import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteRobotRoute } from '../routes'

export const postDeleteRobotRouteHandler: RouteHandler<typeof postDeleteRobotRoute> = async (c) => {
  throw new Error('Not implemented')
}
