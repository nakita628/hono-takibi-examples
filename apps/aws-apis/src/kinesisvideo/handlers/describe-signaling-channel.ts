import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeSignalingChannelRoute } from '../routes'

export const postDescribeSignalingChannelRouteHandler: RouteHandler<
  typeof postDescribeSignalingChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
