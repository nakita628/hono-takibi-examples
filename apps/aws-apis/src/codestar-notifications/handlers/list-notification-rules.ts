import type { RouteHandler } from '@hono/zod-openapi'
import type { postListNotificationRulesRoute } from '../routes'

export const postListNotificationRulesRouteHandler: RouteHandler<
  typeof postListNotificationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
