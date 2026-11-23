import type { RouteHandler } from '@hono/zod-openapi'
import type { getDevicesStatsRoute } from '../routes'

export const getDevicesStatsRouteHandler: RouteHandler<typeof getDevicesStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
