import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedDBInstancesRoute,
  postActionDescribeReservedDBInstancesRoute,
} from '../routes'

export const getActionDescribeReservedDBInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeReservedDBInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedDBInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeReservedDBInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
