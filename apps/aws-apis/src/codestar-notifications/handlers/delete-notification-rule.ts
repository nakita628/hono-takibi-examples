import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteNotificationRuleRoute } from '../routes'

export const postDeleteNotificationRuleRouteHandler: RouteHandler<
  typeof postDeleteNotificationRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
