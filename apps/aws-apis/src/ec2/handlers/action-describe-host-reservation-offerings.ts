import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeHostReservationOfferingsRoute,
  postActionDescribeHostReservationOfferingsRoute,
} from '../routes'

export const getActionDescribeHostReservationOfferingsRouteHandler: RouteHandler<
  typeof getActionDescribeHostReservationOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeHostReservationOfferingsRouteHandler: RouteHandler<
  typeof postActionDescribeHostReservationOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
