import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEventCategoriesRoute,
  postActionDescribeEventCategoriesRoute,
} from '../routes'

export const getActionDescribeEventCategoriesRouteHandler: RouteHandler<
  typeof getActionDescribeEventCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEventCategoriesRouteHandler: RouteHandler<
  typeof postActionDescribeEventCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
