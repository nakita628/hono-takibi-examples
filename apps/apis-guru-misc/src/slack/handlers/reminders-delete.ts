import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemindersDeleteRoute } from '../routes'

export const postRemindersDeleteRouteHandler: RouteHandler<
  typeof postRemindersDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
