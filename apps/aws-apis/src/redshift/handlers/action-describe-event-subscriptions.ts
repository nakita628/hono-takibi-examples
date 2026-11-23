import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEventSubscriptionsRoute,
  postActionDescribeEventSubscriptionsRoute,
} from '../routes'

export const getActionDescribeEventSubscriptionsRouteHandler: RouteHandler<
  typeof getActionDescribeEventSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEventSubscriptionsRouteHandler: RouteHandler<
  typeof postActionDescribeEventSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
