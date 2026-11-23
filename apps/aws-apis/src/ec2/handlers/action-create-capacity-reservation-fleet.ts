import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCapacityReservationFleetRoute,
  postActionCreateCapacityReservationFleetRoute,
} from '../routes'

export const getActionCreateCapacityReservationFleetRouteHandler: RouteHandler<
  typeof getActionCreateCapacityReservationFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCapacityReservationFleetRouteHandler: RouteHandler<
  typeof postActionCreateCapacityReservationFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
