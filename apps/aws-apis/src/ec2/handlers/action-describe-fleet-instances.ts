import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeFleetInstancesRoute,
  postActionDescribeFleetInstancesRoute,
} from '../routes'

export const getActionDescribeFleetInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeFleetInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFleetInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeFleetInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
