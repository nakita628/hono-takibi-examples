import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersMeRoute, getUsersMeStatsRoute } from '../routes'

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeStatsRouteHandler: RouteHandler<typeof getUsersMeStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
