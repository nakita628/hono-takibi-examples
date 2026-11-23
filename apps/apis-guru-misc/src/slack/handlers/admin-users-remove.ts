import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersRemoveRoute } from '../routes'

export const postAdminUsersRemoveRouteHandler: RouteHandler<
  typeof postAdminUsersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
