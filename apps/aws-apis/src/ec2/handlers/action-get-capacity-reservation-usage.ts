import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetCapacityReservationUsageRoute,
  postActionGetCapacityReservationUsageRoute,
} from '../routes'

export const getActionGetCapacityReservationUsageRouteHandler: RouteHandler<
  typeof getActionGetCapacityReservationUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetCapacityReservationUsageRouteHandler: RouteHandler<
  typeof postActionGetCapacityReservationUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
