import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const bookingHandler = app
  .openapi(postBookingAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingAvailabilityDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingAvailabilityTourgradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingAvailabilityTourgradesPricingmatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingCalculatepriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingHotelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingMybookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingPastbookingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingPricingmatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingStatusItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingVoucherRoute, (c) => {
    throw new Error('Not implemented')
  })
