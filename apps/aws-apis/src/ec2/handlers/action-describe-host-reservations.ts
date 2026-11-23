import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeHostReservationsRoute,
  postActionDescribeHostReservationsRoute,
} from '../routes'

export const getActionDescribeHostReservationsRouteHandler: RouteHandler<
  typeof getActionDescribeHostReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeHostReservationsRouteHandler: RouteHandler<
  typeof postActionDescribeHostReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
