import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedInstancesListingsRoute,
  postActionDescribeReservedInstancesListingsRoute,
} from '../routes'

export const getActionDescribeReservedInstancesListingsRouteHandler: RouteHandler<
  typeof getActionDescribeReservedInstancesListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedInstancesListingsRouteHandler: RouteHandler<
  typeof postActionDescribeReservedInstancesListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
