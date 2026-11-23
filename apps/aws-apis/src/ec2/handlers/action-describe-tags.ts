import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeTagsRoute, postActionDescribeTagsRoute } from '../routes'

export const getActionDescribeTagsRouteHandler: RouteHandler<
  typeof getActionDescribeTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTagsRouteHandler: RouteHandler<
  typeof postActionDescribeTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
