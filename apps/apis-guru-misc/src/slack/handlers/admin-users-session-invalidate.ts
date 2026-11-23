import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersSessionInvalidateRoute } from '../routes'

export const postAdminUsersSessionInvalidateRouteHandler: RouteHandler<
  typeof postAdminUsersSessionInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
