import type { RouteHandler } from '@hono/zod-openapi'
import type { postListSignalingChannelsRoute } from '../routes'

export const postListSignalingChannelsRouteHandler: RouteHandler<
  typeof postListSignalingChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
