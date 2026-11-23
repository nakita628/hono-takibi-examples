import type { RouteHandler } from '@hono/zod-openapi'
import type { getHomeHighlightsRoute } from '../routes'

export const getHomeHighlightsRouteHandler: RouteHandler<typeof getHomeHighlightsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
