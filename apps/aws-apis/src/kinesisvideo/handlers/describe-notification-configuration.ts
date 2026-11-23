import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeNotificationConfigurationRoute } from '../routes'

export const postDescribeNotificationConfigurationRouteHandler: RouteHandler<
  typeof postDescribeNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
