import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersUpdateRoleRoute } from '../routes'

export const postUsersUpdateRoleRouteHandler: RouteHandler<
  typeof postUsersUpdateRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
