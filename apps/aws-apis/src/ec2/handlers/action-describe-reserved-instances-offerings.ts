import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedInstancesOfferingsRoute,
  postActionDescribeReservedInstancesOfferingsRoute,
} from '../routes'

export const getActionDescribeReservedInstancesOfferingsRouteHandler: RouteHandler<
  typeof getActionDescribeReservedInstancesOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedInstancesOfferingsRouteHandler: RouteHandler<
  typeof postActionDescribeReservedInstancesOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
