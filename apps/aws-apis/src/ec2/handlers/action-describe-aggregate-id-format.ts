import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAggregateIdFormatRoute,
  postActionDescribeAggregateIdFormatRoute,
} from '../routes'

export const getActionDescribeAggregateIdFormatRouteHandler: RouteHandler<
  typeof getActionDescribeAggregateIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAggregateIdFormatRouteHandler: RouteHandler<
  typeof postActionDescribeAggregateIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
