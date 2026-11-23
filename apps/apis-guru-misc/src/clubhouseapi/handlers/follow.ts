import type { RouteHandler } from '@hono/zod-openapi'
import type { postFollowRoute } from '../routes'

export const postFollowRouteHandler: RouteHandler<typeof postFollowRoute> = async (c) => {
  throw new Error('Not implemented')
}
