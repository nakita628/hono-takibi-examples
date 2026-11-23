import type { RouteHandler } from '@hono/zod-openapi'
import type { postListRobotApplicationsRoute } from '../routes'

export const postListRobotApplicationsRouteHandler: RouteHandler<
  typeof postListRobotApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
