import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeServiceUpdatesRoute,
  postActionDescribeServiceUpdatesRoute,
} from '../routes'

export const getActionDescribeServiceUpdatesRouteHandler: RouteHandler<
  typeof getActionDescribeServiceUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeServiceUpdatesRouteHandler: RouteHandler<
  typeof postActionDescribeServiceUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
