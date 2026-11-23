import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateRobotApplicationRoute } from '../routes'

export const postCreateRobotApplicationRouteHandler: RouteHandler<
  typeof postCreateRobotApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
