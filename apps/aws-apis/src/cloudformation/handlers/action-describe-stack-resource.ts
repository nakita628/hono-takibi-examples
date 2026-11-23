import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStackResourceRoute,
  postActionDescribeStackResourceRoute,
} from '../routes'

export const getActionDescribeStackResourceRouteHandler: RouteHandler<
  typeof getActionDescribeStackResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackResourceRouteHandler: RouteHandler<
  typeof postActionDescribeStackResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
