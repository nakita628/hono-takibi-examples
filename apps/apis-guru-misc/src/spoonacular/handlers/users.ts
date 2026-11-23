import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersConnectRoute } from '../routes'

export const postUsersConnectRouteHandler: RouteHandler<typeof postUsersConnectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
