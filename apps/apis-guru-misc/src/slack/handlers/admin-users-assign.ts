import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersAssignRoute } from '../routes'

export const postAdminUsersAssignRouteHandler: RouteHandler<
  typeof postAdminUsersAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}
