import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateSignalingChannelRoute } from '../routes'

export const postCreateSignalingChannelRouteHandler: RouteHandler<
  typeof postCreateSignalingChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
