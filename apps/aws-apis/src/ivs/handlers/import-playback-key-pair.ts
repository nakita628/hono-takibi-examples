import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportPlaybackKeyPairRoute } from '../routes'

export const postImportPlaybackKeyPairRouteHandler: RouteHandler<
  typeof postImportPlaybackKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}
