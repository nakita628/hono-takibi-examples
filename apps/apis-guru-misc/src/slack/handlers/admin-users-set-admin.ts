import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersSetAdminRoute } from '../routes'

export const postAdminUsersSetAdminRouteHandler: RouteHandler<
  typeof postAdminUsersSetAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}
