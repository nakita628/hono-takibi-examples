import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemindersCompleteRoute } from '../routes'

export const postRemindersCompleteRouteHandler: RouteHandler<
  typeof postRemindersCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
