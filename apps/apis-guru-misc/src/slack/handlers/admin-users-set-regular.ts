import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersSetRegularRoute } from '../routes'

export const postAdminUsersSetRegularRouteHandler: RouteHandler<
  typeof postAdminUsersSetRegularRoute
> = async (c) => {
  throw new Error('Not implemented')
}
