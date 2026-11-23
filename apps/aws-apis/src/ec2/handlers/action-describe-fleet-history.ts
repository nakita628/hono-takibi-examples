import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeFleetHistoryRoute,
  postActionDescribeFleetHistoryRoute,
} from '../routes'

export const getActionDescribeFleetHistoryRouteHandler: RouteHandler<
  typeof getActionDescribeFleetHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFleetHistoryRouteHandler: RouteHandler<
  typeof postActionDescribeFleetHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
