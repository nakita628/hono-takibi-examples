import type { RouteHandler } from '@hono/zod-openapi'
import type { getRateLimitRoute } from '../routes'

export const getRateLimitRouteHandler: RouteHandler<typeof getRateLimitRoute> = async (c) => {
  throw new Error('Not implemented')
}
