import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedInstancesModificationsRoute,
  postActionDescribeReservedInstancesModificationsRoute,
} from '../routes'

export const getActionDescribeReservedInstancesModificationsRouteHandler: RouteHandler<
  typeof getActionDescribeReservedInstancesModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedInstancesModificationsRouteHandler: RouteHandler<
  typeof postActionDescribeReservedInstancesModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
