import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateSignalingChannelRoute } from '../routes'

export const postUpdateSignalingChannelRouteHandler: RouteHandler<
  typeof postUpdateSignalingChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
