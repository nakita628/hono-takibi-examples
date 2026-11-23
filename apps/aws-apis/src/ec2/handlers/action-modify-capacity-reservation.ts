import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyCapacityReservationRoute,
  postActionModifyCapacityReservationRoute,
} from '../routes'

export const getActionModifyCapacityReservationRouteHandler: RouteHandler<
  typeof getActionModifyCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCapacityReservationRouteHandler: RouteHandler<
  typeof postActionModifyCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
