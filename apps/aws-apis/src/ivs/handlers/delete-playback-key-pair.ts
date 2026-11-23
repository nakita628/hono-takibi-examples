import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeletePlaybackKeyPairRoute } from '../routes'

export const postDeletePlaybackKeyPairRouteHandler: RouteHandler<
  typeof postDeletePlaybackKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}
