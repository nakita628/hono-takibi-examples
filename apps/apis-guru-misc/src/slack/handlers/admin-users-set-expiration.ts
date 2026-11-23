import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersSetExpirationRoute } from '../routes'

export const postAdminUsersSetExpirationRouteHandler: RouteHandler<
  typeof postAdminUsersSetExpirationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
