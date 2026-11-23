import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomMetricsRoute } from '../routes'

export const getCustomMetricsRouteHandler: RouteHandler<typeof getCustomMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
