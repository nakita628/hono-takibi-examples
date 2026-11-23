import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserRateLimitIndexRoute } from '../routes'

export const getUserRateLimitIndexRouteHandler: RouteHandler<
  typeof getUserRateLimitIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
