import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatsAppRoute, getStatsDbRoute } from '../routes'

export const getStatsAppRouteHandler: RouteHandler<typeof getStatsAppRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsDbRouteHandler: RouteHandler<typeof getStatsDbRoute> = async (c) => {
  throw new Error('Not implemented')
}
