import type { RouteHandler } from '@hono/zod-openapi'
import type { getMailboxProvidersStatsRoute } from '../routes'

export const getMailboxProvidersStatsRouteHandler: RouteHandler<
  typeof getMailboxProvidersStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
