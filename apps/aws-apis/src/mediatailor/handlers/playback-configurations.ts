import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlaybackConfigurationsRoute } from '../routes'

export const getPlaybackConfigurationsRouteHandler: RouteHandler<
  typeof getPlaybackConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
