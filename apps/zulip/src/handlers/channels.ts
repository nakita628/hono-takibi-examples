import type { RouteHandler } from '@hono/zod-openapi'
import type { postChannelsCreateRoute } from '../routes'

export const postChannelsCreateRouteHandler: RouteHandler<typeof postChannelsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
