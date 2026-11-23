import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminUsersListRoute } from '../routes'

export const getAdminUsersListRouteHandler: RouteHandler<typeof getAdminUsersListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
