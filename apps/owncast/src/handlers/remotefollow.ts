import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemotefollowRoute } from '../routes'

export const postRemotefollowRouteHandler: RouteHandler<typeof postRemotefollowRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
