import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetricsRoute } from '../routes'

export const getMetricsRouteHandler: RouteHandler<typeof getMetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}
