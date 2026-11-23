import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSpotFleetRequestHistoryRoute,
  postActionDescribeSpotFleetRequestHistoryRoute,
} from '../routes'

export const getActionDescribeSpotFleetRequestHistoryRouteHandler: RouteHandler<
  typeof getActionDescribeSpotFleetRequestHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSpotFleetRequestHistoryRouteHandler: RouteHandler<
  typeof postActionDescribeSpotFleetRequestHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
