import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegisterRobotRoute } from '../routes'

export const postRegisterRobotRouteHandler: RouteHandler<typeof postRegisterRobotRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
