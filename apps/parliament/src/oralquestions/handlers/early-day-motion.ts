import type { RouteHandler } from '@hono/zod-openapi'
import type { getEarlyDayMotionIdRoute } from '../routes'

export const getEarlyDayMotionIdRouteHandler: RouteHandler<
  typeof getEarlyDayMotionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
