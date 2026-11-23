import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNetworkInsightsPathsRoute,
  postActionDescribeNetworkInsightsPathsRoute,
} from '../routes'

export const getActionDescribeNetworkInsightsPathsRouteHandler: RouteHandler<
  typeof getActionDescribeNetworkInsightsPathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNetworkInsightsPathsRouteHandler: RouteHandler<
  typeof postActionDescribeNetworkInsightsPathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
