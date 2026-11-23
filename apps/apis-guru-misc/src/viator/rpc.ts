import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAvailableProducts(
  args: InferRequestType<typeof client.available.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.available.products.$post(args, options))
}

export async function postBookingAvailability(
  args: InferRequestType<typeof client.booking.availability.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.availability.$post(args, options))
}

export async function getBookingAvailabilityDates(
  args: InferRequestType<typeof client.booking.availability.dates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.availability.dates.$get(args, options))
}

export async function postBookingAvailabilityTourgrades(
  args: InferRequestType<typeof client.booking.availability.tourgrades.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.availability.tourgrades.$post(args, options))
}

export async function postBookingAvailabilityTourgradesPricingmatrix(
  args: InferRequestType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.booking.availability.tourgrades.pricingmatrix.$post(args, options),
  )
}

export async function postBookingBook(
  args: InferRequestType<typeof client.booking.book.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.book.$post(args, options))
}

export async function postBookingCalculateprice(
  args: InferRequestType<typeof client.booking.calculateprice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.calculateprice.$post(args, options))
}

export async function getBookingHotels(
  args: InferRequestType<typeof client.booking.hotels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.hotels.$get(args, options))
}

export async function getBookingMybookings(
  args: InferRequestType<typeof client.booking.mybookings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.mybookings.$get(args, options))
}

export async function getBookingPastbooking(
  args: InferRequestType<typeof client.booking.pastbooking.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.pastbooking.$get(args, options))
}

export async function postBookingPricingmatrix(
  args: InferRequestType<typeof client.booking.pricingmatrix.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.pricingmatrix.$post(args, options))
}

export async function postBookingStatus(
  args: InferRequestType<typeof client.booking.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.status.$post(args, options))
}

export async function postBookingStatusItems(
  args: InferRequestType<typeof client.booking.status.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.status.items.$post(args, options))
}

export async function getBookingVoucher(
  args: InferRequestType<typeof client.booking.voucher.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booking.voucher.$get(args, options))
}

export async function getBookingsCancelReasons(
  args: InferRequestType<(typeof client.bookings)['cancel-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings['cancel-reasons'].$get(args, options))
}

export async function postBookingsBookingReferenceCancel(
  args: InferRequestType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings[':booking-reference'].cancel.$post(args, options))
}

export async function getBookingsBookingReferenceCancelQuote(
  args: InferRequestType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bookings[':booking-reference']['cancel-quote'].$get(args, options),
  )
}

export async function getHealthCheck(
  args: InferRequestType<typeof client.health.check.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.check.$get(args, options))
}

export async function postMerchantCancellation(
  args: InferRequestType<typeof client.merchant.cancellation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchant.cancellation.$post(args, options))
}

export async function getProduct(
  args: InferRequestType<typeof client.product.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product.$get(args, options))
}

export async function getProductPhotos(
  args: InferRequestType<typeof client.product.photos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product.photos.$get(args, options))
}

export async function getProductReviews(
  args: InferRequestType<typeof client.product.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product.reviews.$get(args, options))
}

export async function postSearchFreetext(
  args: InferRequestType<typeof client.search.freetext.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.freetext.$post(args, options))
}

export async function postSearchProducts(
  args: InferRequestType<typeof client.search.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.products.$post(args, options))
}

export async function postSearchProductsCodes(
  args: InferRequestType<typeof client.search.products.codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.products.codes.$post(args, options))
}

export async function postTaxonomyAttractions(
  args: InferRequestType<typeof client.taxonomy.attractions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomy.attractions.$post(args, options))
}

export async function getTaxonomyCategories(
  args: InferRequestType<typeof client.taxonomy.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomy.categories.$get(args, options))
}

export async function getTaxonomyDestinations(
  args: InferRequestType<typeof client.taxonomy.destinations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomy.destinations.$get(args, options))
}
