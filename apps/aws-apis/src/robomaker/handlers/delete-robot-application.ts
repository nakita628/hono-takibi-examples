import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteRobotApplicationRoute } from '../routes'

export const postDeleteRobotApplicationRouteHandler: RouteHandler<
  typeof postDeleteRobotApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
