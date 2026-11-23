import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBookingsBookingIdRoute,
  getBookingsBookingIdRoute,
  getBookingsRoute,
  postBookingsRoute,
  putBookingsBookingIdBookingContactRoute,
  putBookingsBookingIdRoute,
} from '../routes'

export const getBookingsRouteHandler: RouteHandler<typeof getBookingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingsRouteHandler: RouteHandler<typeof postBookingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBookingsBookingIdRouteHandler: RouteHandler<
  typeof deleteBookingsBookingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookingsBookingIdRouteHandler: RouteHandler<
  typeof getBookingsBookingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBookingsBookingIdRouteHandler: RouteHandler<
  typeof putBookingsBookingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBookingsBookingIdBookingContactRouteHandler: RouteHandler<
  typeof putBookingsBookingIdBookingContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}
