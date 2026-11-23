import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateNotificationRuleRoute } from '../routes'

export const postCreateNotificationRuleRouteHandler: RouteHandler<
  typeof postCreateNotificationRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
