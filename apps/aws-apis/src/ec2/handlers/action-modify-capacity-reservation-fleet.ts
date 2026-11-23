import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyCapacityReservationFleetRoute,
  postActionModifyCapacityReservationFleetRoute,
} from '../routes'

export const getActionModifyCapacityReservationFleetRouteHandler: RouteHandler<
  typeof getActionModifyCapacityReservationFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCapacityReservationFleetRouteHandler: RouteHandler<
  typeof postActionModifyCapacityReservationFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
