import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetGroupsForCapacityReservationRoute,
  postActionGetGroupsForCapacityReservationRoute,
} from '../routes'

export const getActionGetGroupsForCapacityReservationRouteHandler: RouteHandler<
  typeof getActionGetGroupsForCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetGroupsForCapacityReservationRouteHandler: RouteHandler<
  typeof postActionGetGroupsForCapacityReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
