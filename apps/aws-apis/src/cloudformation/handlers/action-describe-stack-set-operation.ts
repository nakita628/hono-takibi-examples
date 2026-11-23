import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStackSetOperationRoute,
  postActionDescribeStackSetOperationRoute,
} from '../routes'

export const getActionDescribeStackSetOperationRouteHandler: RouteHandler<
  typeof getActionDescribeStackSetOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackSetOperationRouteHandler: RouteHandler<
  typeof postActionDescribeStackSetOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
