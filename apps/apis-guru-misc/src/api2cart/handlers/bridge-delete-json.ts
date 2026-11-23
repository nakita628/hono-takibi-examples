import type { RouteHandler } from '@hono/zod-openapi'
import type { postBridgeDeleteJsonRoute } from '../routes'

export const postBridgeDeleteJsonRouteHandler: RouteHandler<
  typeof postBridgeDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
