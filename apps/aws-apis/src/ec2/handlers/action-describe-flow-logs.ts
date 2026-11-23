import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeFlowLogsRoute, postActionDescribeFlowLogsRoute } from '../routes'

export const getActionDescribeFlowLogsRouteHandler: RouteHandler<
  typeof getActionDescribeFlowLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFlowLogsRouteHandler: RouteHandler<
  typeof postActionDescribeFlowLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
