import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetQueryStatisticsRoute } from '../routes'

export const postGetQueryStatisticsRouteHandler: RouteHandler<
  typeof postGetQueryStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
