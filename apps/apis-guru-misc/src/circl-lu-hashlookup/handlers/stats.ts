import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatsTopRoute } from '../routes'

export const getStatsTopRouteHandler: RouteHandler<typeof getStatsTopRoute> = async (c) => {
  throw new Error('Not implemented')
}
