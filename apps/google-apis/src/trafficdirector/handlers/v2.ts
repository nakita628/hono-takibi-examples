import type { RouteHandler } from '@hono/zod-openapi'
import type { postV2DiscoveryClientStatusRoute } from '../routes'

export const postV2DiscoveryClientStatusRouteHandler: RouteHandler<
  typeof postV2DiscoveryClientStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
