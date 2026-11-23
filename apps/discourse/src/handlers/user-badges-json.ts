import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserBadgesJsonRoute } from '../routes'

export const postUserBadgesJsonRouteHandler: RouteHandler<typeof postUserBadgesJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
