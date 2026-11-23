import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailEventsRoute, getEmailEventsStatsRoute } from '../routes'

export const getEmailEventsRouteHandler: RouteHandler<typeof getEmailEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailEventsStatsRouteHandler: RouteHandler<
  typeof getEmailEventsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
