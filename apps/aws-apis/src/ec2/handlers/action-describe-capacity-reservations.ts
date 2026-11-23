import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCapacityReservationsRoute,
  postActionDescribeCapacityReservationsRoute,
} from '../routes'

export const getActionDescribeCapacityReservationsRouteHandler: RouteHandler<
  typeof getActionDescribeCapacityReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCapacityReservationsRouteHandler: RouteHandler<
  typeof postActionDescribeCapacityReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
