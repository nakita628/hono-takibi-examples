import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBookingsKey() {
  return ['bookings'] as const
}

export function getStationsKey() {
  return ['stations'] as const
}

export function getTripsKey() {
  return ['trips'] as const
}

export function getGetStationsKey() {
  return ['stations', '/stations'] as const
}

export function useGetStations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTripsKey(args: InferRequestType<typeof client.trips.$get>) {
  return ['trips', '/trips', args] as const
}

export function useGetTrips<TError = unknown>(
  args: InferRequestType<typeof client.trips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTripsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.trips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTrips<TError = unknown>(
  args: InferRequestType<typeof client.trips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTripsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.trips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBookingsKey() {
  return ['bookings', '/bookings'] as const
}

export function useGetBookings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookingsKey() {
  return ['bookings', '/bookings', 'POST'] as const
}

export function usePostBookings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bookings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bookings.$post> }) =>
        parseResponse(client.bookings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookingsBookingIdKey(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
) {
  return ['bookings', '/bookings/:bookingId', args] as const
}

export function useGetBookingsBookingId<TError = unknown>(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookingsBookingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookings[':bookingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingsBookingId<TError = unknown>(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookingsBookingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookings[':bookingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBookingsBookingIdKey() {
  return ['bookings', '/bookings/:bookingId', 'DELETE'] as const
}

export function useDeleteBookingsBookingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bookings)[':bookingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBookingsBookingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookings)[':bookingId']['$delete']> },
      ) => parseResponse(client.bookings[':bookingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBookingsBookingIdPaymentKey() {
  return ['bookings', '/bookings/:bookingId/payment', 'POST'] as const
}

export function usePostBookingsBookingIdPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookings)[':bookingId']['payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookings)[':bookingId']['payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingsBookingIdPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bookings)[':bookingId']['payment']['$post']> },
      ) => parseResponse(client.bookings[':bookingId'].payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
