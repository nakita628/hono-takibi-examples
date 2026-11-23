import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateRobotApplicationRoute } from '../routes'

export const postUpdateRobotApplicationRouteHandler: RouteHandler<
  typeof postUpdateRobotApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
