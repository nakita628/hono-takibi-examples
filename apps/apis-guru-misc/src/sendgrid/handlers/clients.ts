import type { RouteHandler } from '@hono/zod-openapi'
import type { getClientsClientTypeStatsRoute, getClientsStatsRoute } from '../routes'

export const getClientsStatsRouteHandler: RouteHandler<typeof getClientsStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientsClientTypeStatsRouteHandler: RouteHandler<
  typeof getClientsClientTypeStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
