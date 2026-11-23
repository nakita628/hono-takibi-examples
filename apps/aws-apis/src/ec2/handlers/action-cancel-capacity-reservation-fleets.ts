import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelCapacityReservationFleetsRoute,
  postActionCancelCapacityReservationFleetsRoute,
} from '../routes'

export const getActionCancelCapacityReservationFleetsRouteHandler: RouteHandler<
  typeof getActionCancelCapacityReservationFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelCapacityReservationFleetsRouteHandler: RouteHandler<
  typeof postActionCancelCapacityReservationFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
