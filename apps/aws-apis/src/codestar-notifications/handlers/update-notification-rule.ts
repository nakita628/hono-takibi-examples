import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateNotificationRuleRoute } from '../routes'

export const postUpdateNotificationRuleRouteHandler: RouteHandler<
  typeof postUpdateNotificationRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
