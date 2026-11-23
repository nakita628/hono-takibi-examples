import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedInstancesRoute,
  postActionDescribeReservedInstancesRoute,
} from '../routes'

export const getActionDescribeReservedInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeReservedInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeReservedInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
