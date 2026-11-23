import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeStackSetRoute, postActionDescribeStackSetRoute } from '../routes'

export const getActionDescribeStackSetRouteHandler: RouteHandler<
  typeof getActionDescribeStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackSetRouteHandler: RouteHandler<
  typeof postActionDescribeStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
