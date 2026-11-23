import type { RouteHandler } from '@hono/zod-openapi'
import type { postListChannelsRoute } from '../routes'

export const postListChannelsRouteHandler: RouteHandler<typeof postListChannelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
