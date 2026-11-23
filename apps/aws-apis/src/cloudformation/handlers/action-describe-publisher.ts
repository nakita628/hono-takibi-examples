import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribePublisherRoute, postActionDescribePublisherRoute } from '../routes'

export const getActionDescribePublisherRouteHandler: RouteHandler<
  typeof getActionDescribePublisherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePublisherRouteHandler: RouteHandler<
  typeof postActionDescribePublisherRoute
> = async (c) => {
  throw new Error('Not implemented')
}
