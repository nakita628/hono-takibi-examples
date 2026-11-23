import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBookingsBookingIdRoute,
  getBookingsBookingIdRoute,
  getBookingsRoute,
  postBookingsBookingIdPaymentRoute,
  postBookingsRoute,
} from '../routes'

export const getBookingsRouteHandler: RouteHandler<typeof getBookingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingsRouteHandler: RouteHandler<typeof postBookingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookingsBookingIdRouteHandler: RouteHandler<
  typeof getBookingsBookingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBookingsBookingIdRouteHandler: RouteHandler<
  typeof deleteBookingsBookingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingsBookingIdPaymentRouteHandler: RouteHandler<
  typeof postBookingsBookingIdPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
