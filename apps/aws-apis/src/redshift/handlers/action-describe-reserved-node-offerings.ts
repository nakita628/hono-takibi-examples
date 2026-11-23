import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedNodeOfferingsRoute,
  postActionDescribeReservedNodeOfferingsRoute,
} from '../routes'

export const getActionDescribeReservedNodeOfferingsRouteHandler: RouteHandler<
  typeof getActionDescribeReservedNodeOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedNodeOfferingsRouteHandler: RouteHandler<
  typeof postActionDescribeReservedNodeOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
