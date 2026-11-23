import type { RouteHandler } from '@hono/zod-openapi'
import type { postScheduleAccountUpdaterRoute } from '../routes'

export const postScheduleAccountUpdaterRouteHandler: RouteHandler<
  typeof postScheduleAccountUpdaterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
