import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateRobotApplicationVersionRoute } from '../routes'

export const postCreateRobotApplicationVersionRouteHandler: RouteHandler<
  typeof postCreateRobotApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
