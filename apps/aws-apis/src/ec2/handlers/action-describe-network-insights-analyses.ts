import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNetworkInsightsAnalysesRoute,
  postActionDescribeNetworkInsightsAnalysesRoute,
} from '../routes'

export const getActionDescribeNetworkInsightsAnalysesRouteHandler: RouteHandler<
  typeof getActionDescribeNetworkInsightsAnalysesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNetworkInsightsAnalysesRouteHandler: RouteHandler<
  typeof postActionDescribeNetworkInsightsAnalysesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
