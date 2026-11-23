import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSpotFleetInstancesRoute,
  postActionDescribeSpotFleetInstancesRoute,
} from '../routes'

export const getActionDescribeSpotFleetInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeSpotFleetInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSpotFleetInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeSpotFleetInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
