import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeregisterRobotRoute } from '../routes'

export const postDeregisterRobotRouteHandler: RouteHandler<
  typeof postDeregisterRobotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
