import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { client } from '../client'

export async function getStations(options?: ClientRequestOptions) {
  return await client.stations.$get(undefined, options)
}

export async function getTrips(
  args: InferRequestType<typeof client.trips.$get>,
  options?: ClientRequestOptions,
) {
  return await client.trips.$get(args, options)
}

export async function getBookings(options?: ClientRequestOptions) {
  return await client.bookings.$get(undefined, options)
}

export async function postBookings(
  args: InferRequestType<typeof client.bookings.$post>,
  options?: ClientRequestOptions,
) {
  return await client.bookings.$post(args, options)
}

export async function getBookingsBookingId(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await client.bookings[':bookingId'].$get(args, options)
}

export async function deleteBookingsBookingId(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await client.bookings[':bookingId'].$delete(args, options)
}

export async function postBookingsBookingIdPayment(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await client.bookings[':bookingId'].payment.$post(args, options)
}
