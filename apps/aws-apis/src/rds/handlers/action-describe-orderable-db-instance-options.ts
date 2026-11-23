import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeOrderableDBInstanceOptionsRoute,
  postActionDescribeOrderableDBInstanceOptionsRoute,
} from '../routes'

export const getActionDescribeOrderableDBInstanceOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeOrderableDBInstanceOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeOrderableDBInstanceOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeOrderableDBInstanceOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
