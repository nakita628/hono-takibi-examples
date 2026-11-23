import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBookingsBookingReferenceCancelQuoteRoute,
  getBookingsCancelReasonsRoute,
  postBookingsBookingReferenceCancelRoute,
} from '../routes'

export const getBookingsCancelReasonsRouteHandler: RouteHandler<
  typeof getBookingsCancelReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingsBookingReferenceCancelRouteHandler: RouteHandler<
  typeof postBookingsBookingReferenceCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookingsBookingReferenceCancelQuoteRouteHandler: RouteHandler<
  typeof getBookingsBookingReferenceCancelQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
