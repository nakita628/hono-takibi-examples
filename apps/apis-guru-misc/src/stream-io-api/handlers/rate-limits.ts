import type { RouteHandler } from '@hono/zod-openapi'
import type { getRateLimitsRoute } from '../routes'

export const getRateLimitsRouteHandler: RouteHandler<typeof getRateLimitsRoute> = async (c) => {
  throw new Error('Not implemented')
}
