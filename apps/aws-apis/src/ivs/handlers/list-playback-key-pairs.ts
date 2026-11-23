import type { RouteHandler } from '@hono/zod-openapi'
import type { postListPlaybackKeyPairsRoute } from '../routes'

export const postListPlaybackKeyPairsRouteHandler: RouteHandler<
  typeof postListPlaybackKeyPairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
