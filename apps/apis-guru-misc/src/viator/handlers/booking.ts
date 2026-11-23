import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBookingAvailabilityDatesRoute,
  getBookingHotelsRoute,
  getBookingMybookingsRoute,
  getBookingPastbookingRoute,
  getBookingVoucherRoute,
  postBookingAvailabilityRoute,
  postBookingAvailabilityTourgradesPricingmatrixRoute,
  postBookingAvailabilityTourgradesRoute,
  postBookingBookRoute,
  postBookingCalculatepriceRoute,
  postBookingPricingmatrixRoute,
  postBookingStatusItemsRoute,
  postBookingStatusRoute,
} from '../routes'

export const postBookingAvailabilityRouteHandler: RouteHandler<
  typeof postBookingAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookingAvailabilityDatesRouteHandler: RouteHandler<
  typeof getBookingAvailabilityDatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingAvailabilityTourgradesRouteHandler: RouteHandler<
  typeof postBookingAvailabilityTourgradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingAvailabilityTourgradesPricingmatrixRouteHandler: RouteHandler<
  typeof postBookingAvailabilityTourgradesPricingmatrixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingBookRouteHandler: RouteHandler<typeof postBookingBookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingCalculatepriceRouteHandler: RouteHandler<
  typeof postBookingCalculatepriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookingHotelsRouteHandler: RouteHandler<typeof getBookingHotelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBookingMybookingsRouteHandler: RouteHandler<
  typeof getBookingMybookingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookingPastbookingRouteHandler: RouteHandler<
  typeof getBookingPastbookingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingPricingmatrixRouteHandler: RouteHandler<
  typeof postBookingPricingmatrixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookingStatusRouteHandler: RouteHandler<typeof postBookingStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBookingStatusItemsRouteHandler: RouteHandler<
  typeof postBookingStatusItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookingVoucherRouteHandler: RouteHandler<typeof getBookingVoucherRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
