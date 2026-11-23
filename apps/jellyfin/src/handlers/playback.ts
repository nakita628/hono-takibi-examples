import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlaybackBitrateTestRoute } from '../routes'

export const getPlaybackBitrateTestRouteHandler: RouteHandler<
  typeof getPlaybackBitrateTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
