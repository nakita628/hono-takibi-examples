import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteSignalingChannelRoute } from '../routes'

export const postDeleteSignalingChannelRouteHandler: RouteHandler<
  typeof postDeleteSignalingChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
