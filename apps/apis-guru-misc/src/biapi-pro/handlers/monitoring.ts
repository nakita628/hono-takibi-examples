import type { RouteHandler } from '@hono/zod-openapi'
import type { getMonitoringRoute } from '../routes'

export const getMonitoringRouteHandler: RouteHandler<typeof getMonitoringRoute> = async (c) => {
  throw new Error('Not implemented')
}
