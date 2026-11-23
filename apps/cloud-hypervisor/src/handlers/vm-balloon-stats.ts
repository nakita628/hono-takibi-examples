import type { RouteHandler } from '@hono/zod-openapi'
import type { getVmBalloonStatsRoute } from '../routes'

export const getVmBalloonStatsRouteHandler: RouteHandler<typeof getVmBalloonStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
