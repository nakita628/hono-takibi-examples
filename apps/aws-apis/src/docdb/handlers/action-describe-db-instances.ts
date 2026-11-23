import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBInstancesRoute,
  postActionDescribeDBInstancesRoute,
} from '../routes'

export const getActionDescribeDBInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeDBInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeDBInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
