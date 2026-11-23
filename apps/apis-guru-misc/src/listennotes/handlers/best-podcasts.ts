import type { RouteHandler } from '@hono/zod-openapi'
import type { getBestPodcastsRoute } from '../routes'

export const getBestPodcastsRouteHandler: RouteHandler<typeof getBestPodcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}
