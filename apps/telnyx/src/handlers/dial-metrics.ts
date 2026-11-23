import type { RouteHandler } from '@hono/zod-openapi'
import type { getDialMetricsRoute } from '../routes'

export const getDialMetricsRouteHandler: RouteHandler<typeof getDialMetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}
