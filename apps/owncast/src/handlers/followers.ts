import type { RouteHandler } from '@hono/zod-openapi'
import type { getFollowersRoute } from '../routes'

export const getFollowersRouteHandler: RouteHandler<typeof getFollowersRoute> = async (c) => {
  throw new Error('Not implemented')
}
