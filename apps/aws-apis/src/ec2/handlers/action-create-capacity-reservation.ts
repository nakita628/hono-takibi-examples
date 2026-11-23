import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCapacityReservationRoute,
  postActionCreateCapacityReservationRoute,
} from '../routes'

export const getActionCreateCapacityReservationRouteHandler: RouteHandler<
  typeof getActionCreateCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCapacityReservationRouteHandler: RouteHandler<
  typeof postActionCreateCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
