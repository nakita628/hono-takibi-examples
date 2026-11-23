import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeRouteTablesRoute,
  postActionDescribeRouteTablesRoute,
} from '../routes'

export const getActionDescribeRouteTablesRouteHandler: RouteHandler<
  typeof getActionDescribeRouteTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeRouteTablesRouteHandler: RouteHandler<
  typeof postActionDescribeRouteTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
