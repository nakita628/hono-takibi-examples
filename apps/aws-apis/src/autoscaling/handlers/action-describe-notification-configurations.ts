import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNotificationConfigurationsRoute,
  postActionDescribeNotificationConfigurationsRoute,
} from '../routes'

export const getActionDescribeNotificationConfigurationsRouteHandler: RouteHandler<
  typeof getActionDescribeNotificationConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNotificationConfigurationsRouteHandler: RouteHandler<
  typeof postActionDescribeNotificationConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
