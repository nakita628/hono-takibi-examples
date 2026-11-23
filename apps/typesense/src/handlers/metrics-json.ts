import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetricsJsonRoute } from '../routes'

export const getMetricsJsonRouteHandler: RouteHandler<typeof getMetricsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
