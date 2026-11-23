import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedDBInstancesOfferingsRoute,
  postActionDescribeReservedDBInstancesOfferingsRoute,
} from '../routes'

export const getActionDescribeReservedDBInstancesOfferingsRouteHandler: RouteHandler<
  typeof getActionDescribeReservedDBInstancesOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedDBInstancesOfferingsRouteHandler: RouteHandler<
  typeof postActionDescribeReservedDBInstancesOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
