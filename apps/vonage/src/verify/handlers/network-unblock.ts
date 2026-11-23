import type { RouteHandler } from '@hono/zod-openapi'
import type { postNetworkUnblockRoute } from '../routes'

export const postNetworkUnblockRouteHandler: RouteHandler<typeof postNetworkUnblockRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
