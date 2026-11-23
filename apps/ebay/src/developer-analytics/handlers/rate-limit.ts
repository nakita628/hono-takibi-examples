import type { RouteHandler } from '@hono/zod-openapi'
import type { getRateLimitIndexRoute } from '../routes'

export const getRateLimitIndexRouteHandler: RouteHandler<typeof getRateLimitIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
