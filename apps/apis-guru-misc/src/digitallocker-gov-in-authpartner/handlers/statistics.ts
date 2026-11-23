import type { RouteHandler } from '@hono/zod-openapi'
import type { postStatistics1CountsRoute } from '../routes'

export const postStatistics1CountsRouteHandler: RouteHandler<
  typeof postStatistics1CountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
