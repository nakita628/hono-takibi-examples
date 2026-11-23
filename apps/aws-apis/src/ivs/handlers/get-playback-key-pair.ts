import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetPlaybackKeyPairRoute } from '../routes'

export const postGetPlaybackKeyPairRouteHandler: RouteHandler<
  typeof postGetPlaybackKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}
