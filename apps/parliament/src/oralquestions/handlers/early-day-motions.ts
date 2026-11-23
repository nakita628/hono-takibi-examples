import type { RouteHandler } from '@hono/zod-openapi'
import type { getEarlyDayMotionsListRoute } from '../routes'

export const getEarlyDayMotionsListRouteHandler: RouteHandler<
  typeof getEarlyDayMotionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
