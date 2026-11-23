import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCapacityReservationFleetsRoute,
  postActionDescribeCapacityReservationFleetsRoute,
} from '../routes'

export const getActionDescribeCapacityReservationFleetsRouteHandler: RouteHandler<
  typeof getActionDescribeCapacityReservationFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCapacityReservationFleetsRouteHandler: RouteHandler<
  typeof postActionDescribeCapacityReservationFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
