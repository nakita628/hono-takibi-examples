import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersSessionResetRoute } from '../routes'

export const postAdminUsersSessionResetRouteHandler: RouteHandler<
  typeof postAdminUsersSessionResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
