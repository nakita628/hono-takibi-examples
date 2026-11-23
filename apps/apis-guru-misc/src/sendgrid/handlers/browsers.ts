import type { RouteHandler } from '@hono/zod-openapi'
import type { getBrowsersStatsRoute } from '../routes'

export const getBrowsersStatsRouteHandler: RouteHandler<typeof getBrowsersStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
