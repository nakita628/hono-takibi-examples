import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAutoScalingNotificationTypesRoute,
  postActionDescribeAutoScalingNotificationTypesRoute,
} from '../routes'

export const getActionDescribeAutoScalingNotificationTypesRouteHandler: RouteHandler<
  typeof getActionDescribeAutoScalingNotificationTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAutoScalingNotificationTypesRouteHandler: RouteHandler<
  typeof postActionDescribeAutoScalingNotificationTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
