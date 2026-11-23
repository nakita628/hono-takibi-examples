import type { RouteHandler } from '@hono/zod-openapi'
import type { getFleetMetricsRoute } from '../routes'

export const getFleetMetricsRouteHandler: RouteHandler<typeof getFleetMetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}
