import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeValidDBInstanceModificationsRoute,
  postActionDescribeValidDBInstanceModificationsRoute,
} from '../routes'

export const getActionDescribeValidDBInstanceModificationsRouteHandler: RouteHandler<
  typeof getActionDescribeValidDBInstanceModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeValidDBInstanceModificationsRouteHandler: RouteHandler<
  typeof postActionDescribeValidDBInstanceModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
