import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSpotFleetRequestsRoute,
  postActionDescribeSpotFleetRequestsRoute,
} from '../routes'

export const getActionDescribeSpotFleetRequestsRouteHandler: RouteHandler<
  typeof getActionDescribeSpotFleetRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSpotFleetRequestsRouteHandler: RouteHandler<
  typeof postActionDescribeSpotFleetRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
