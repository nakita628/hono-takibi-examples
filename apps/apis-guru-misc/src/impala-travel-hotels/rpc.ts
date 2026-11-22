import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBookings(
  args: InferRequestType<typeof client.bookings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings.$get(args, options))
}

export async function postBookings(
  args: InferRequestType<typeof client.bookings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings.$post(args, options))
}

export async function getBookingsBookingId(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings[':bookingId'].$get(args, options))
}

export async function putBookingsBookingId(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings[':bookingId'].$put(args, options))
}

export async function deleteBookingsBookingId(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings[':bookingId'].$delete(args, options))
}

export async function putBookingsBookingIdBookingContact(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookings[':bookingId']['booking-contact'].$put(args, options))
}

export async function getHotels(
  args: InferRequestType<typeof client.hotels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hotels.$get(args, options))
}

export async function getHotelsHotelId(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hotels[':hotelId'].$get(args, options))
}

export async function getHotelsHotelIdRatePlans(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hotels[':hotelId']['rate-plans'].$get(args, options))
}

export async function getHotelsHotelIdRatePlansRatePlanId(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hotels[':hotelId']['rate-plans'][':ratePlanId'].$get(args, options),
  )
}
