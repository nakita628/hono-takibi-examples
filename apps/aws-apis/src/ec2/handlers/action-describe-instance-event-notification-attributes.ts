import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceEventNotificationAttributesRoute,
  postActionDescribeInstanceEventNotificationAttributesRoute,
} from '../routes'

export const getActionDescribeInstanceEventNotificationAttributesRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceEventNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceEventNotificationAttributesRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceEventNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
