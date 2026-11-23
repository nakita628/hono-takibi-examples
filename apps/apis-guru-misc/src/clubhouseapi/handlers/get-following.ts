import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetFollowingRoute } from '../routes'

export const postGetFollowingRouteHandler: RouteHandler<typeof postGetFollowingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
