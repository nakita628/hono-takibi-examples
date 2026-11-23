import type { RouteHandler } from '@hono/zod-openapi'
import type { getLifecycleStatsRoute } from '../routes'

export const getLifecycleStatsRouteHandler: RouteHandler<typeof getLifecycleStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
