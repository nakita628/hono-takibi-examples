import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersSetOwnerRoute } from '../routes'

export const postAdminUsersSetOwnerRouteHandler: RouteHandler<
  typeof postAdminUsersSetOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
