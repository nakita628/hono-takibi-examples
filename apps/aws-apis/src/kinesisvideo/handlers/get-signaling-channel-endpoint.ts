import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSignalingChannelEndpointRoute } from '../routes'

export const postGetSignalingChannelEndpointRouteHandler: RouteHandler<
  typeof postGetSignalingChannelEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
