import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTrafficSourcesRoute,
  postActionDescribeTrafficSourcesRoute,
} from '../routes'

export const getActionDescribeTrafficSourcesRouteHandler: RouteHandler<
  typeof getActionDescribeTrafficSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTrafficSourcesRouteHandler: RouteHandler<
  typeof postActionDescribeTrafficSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
