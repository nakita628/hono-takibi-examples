import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNetworkInsightsAccessScopesRoute,
  postActionDescribeNetworkInsightsAccessScopesRoute,
} from '../routes'

export const getActionDescribeNetworkInsightsAccessScopesRouteHandler: RouteHandler<
  typeof getActionDescribeNetworkInsightsAccessScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNetworkInsightsAccessScopesRouteHandler: RouteHandler<
  typeof postActionDescribeNetworkInsightsAccessScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
