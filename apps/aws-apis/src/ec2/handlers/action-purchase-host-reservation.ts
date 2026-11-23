import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPurchaseHostReservationRoute,
  postActionPurchaseHostReservationRoute,
} from '../routes'

export const getActionPurchaseHostReservationRouteHandler: RouteHandler<
  typeof getActionPurchaseHostReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPurchaseHostReservationRouteHandler: RouteHandler<
  typeof postActionPurchaseHostReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
