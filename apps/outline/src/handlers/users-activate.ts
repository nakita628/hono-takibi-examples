import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersActivateRoute } from '../routes'

export const postUsersActivateRouteHandler: RouteHandler<typeof postUsersActivateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
