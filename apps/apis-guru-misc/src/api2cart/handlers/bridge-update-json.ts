import type { RouteHandler } from '@hono/zod-openapi'
import type { postBridgeUpdateJsonRoute } from '../routes'

export const postBridgeUpdateJsonRouteHandler: RouteHandler<
  typeof postBridgeUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
