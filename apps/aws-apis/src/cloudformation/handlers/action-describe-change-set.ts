import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeChangeSetRoute, postActionDescribeChangeSetRoute } from '../routes'

export const getActionDescribeChangeSetRouteHandler: RouteHandler<
  typeof getActionDescribeChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeChangeSetRouteHandler: RouteHandler<
  typeof postActionDescribeChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
