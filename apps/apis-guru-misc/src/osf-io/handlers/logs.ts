import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogsLogIdIndexRoute } from '../routes'

export const getLogsLogIdIndexRouteHandler: RouteHandler<typeof getLogsLogIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
