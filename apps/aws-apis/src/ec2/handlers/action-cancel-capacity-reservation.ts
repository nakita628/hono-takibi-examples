import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelCapacityReservationRoute,
  postActionCancelCapacityReservationRoute,
} from '../routes'

export const getActionCancelCapacityReservationRouteHandler: RouteHandler<
  typeof getActionCancelCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelCapacityReservationRouteHandler: RouteHandler<
  typeof postActionCancelCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
