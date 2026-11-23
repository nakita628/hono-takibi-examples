import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatsJsonRoute } from '../routes'

export const getStatsJsonRouteHandler: RouteHandler<typeof getStatsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
