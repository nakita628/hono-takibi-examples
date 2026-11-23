import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateRobotRoute } from '../routes'

export const postCreateRobotRouteHandler: RouteHandler<typeof postCreateRobotRoute> = async (c) => {
  throw new Error('Not implemented')
}
