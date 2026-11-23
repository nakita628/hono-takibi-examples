import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersSetActiveRoute } from '../routes'

export const postUsersSetActiveRouteHandler: RouteHandler<typeof postUsersSetActiveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
