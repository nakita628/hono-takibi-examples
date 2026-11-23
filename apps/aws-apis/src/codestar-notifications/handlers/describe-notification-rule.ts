import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeNotificationRuleRoute } from '../routes'

export const postDescribeNotificationRuleRouteHandler: RouteHandler<
  typeof postDescribeNotificationRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
