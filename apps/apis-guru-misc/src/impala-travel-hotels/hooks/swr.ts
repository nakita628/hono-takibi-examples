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

export function getHotelsKey() {
  return ['hotels'] as const
}

export function getGetBookingsKey(args: InferRequestType<typeof client.bookings.$get>) {
  return ['bookings', '/bookings', args] as const
}

export function useGetBookings<TError = unknown>(
  args: InferRequestType<typeof client.bookings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bookings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBookings<TError = unknown>(
  args: InferRequestType<typeof client.bookings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bookings.$get(args, clientOptions)), restSwrOptions),
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

export function getPutBookingsBookingIdKey() {
  return ['bookings', '/bookings/:bookingId', 'PUT'] as const
}

export function usePutBookingsBookingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookings)[':bookingId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBookingsBookingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookings)[':bookingId']['$put']> },
      ) => parseResponse(client.bookings[':bookingId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBookingsBookingIdKey() {
  return ['bookings', '/bookings/:bookingId', 'DELETE'] as const
}

export function useDeleteBookingsBookingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$delete']>>>
      >
    >,
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

export function getPutBookingsBookingIdBookingContactKey() {
  return ['bookings', '/bookings/:bookingId/booking-contact', 'PUT'] as const
}

export function usePutBookingsBookingIdBookingContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBookingsBookingIdBookingContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>
        },
      ) => parseResponse(client.bookings[':bookingId']['booking-contact'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHotelsKey(args: InferRequestType<typeof client.hotels.$get>) {
  return ['hotels', '/hotels', args] as const
}

export function useGetHotels<TError = unknown>(
  args: InferRequestType<typeof client.hotels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHotelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hotels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHotels<TError = unknown>(
  args: InferRequestType<typeof client.hotels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHotelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hotels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetHotelsHotelIdKey(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['$get']>,
) {
  return ['hotels', '/hotels/:hotelId', args] as const
}

export function useGetHotelsHotelId<TError = unknown>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHotelsHotelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hotels[':hotelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHotelsHotelId<TError = unknown>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHotelsHotelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hotels[':hotelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHotelsHotelIdRatePlansKey(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>,
) {
  return ['hotels', '/hotels/:hotelId/rate-plans', args] as const
}

export function useGetHotelsHotelIdRatePlans<TError = unknown>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
          >
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
        ? getGetHotelsHotelIdRatePlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hotels[':hotelId']['rate-plans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHotelsHotelIdRatePlans<TError = unknown>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
          >
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
        ? getGetHotelsHotelIdRatePlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hotels[':hotelId']['rate-plans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHotelsHotelIdRatePlansRatePlanIdKey(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>,
) {
  return ['hotels', '/hotels/:hotelId/rate-plans/:ratePlanId', args] as const
}

export function useGetHotelsHotelIdRatePlansRatePlanId<TError = unknown>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
            >
          >
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
        ? getGetHotelsHotelIdRatePlansRatePlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hotels[':hotelId']['rate-plans'][':ratePlanId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHotelsHotelIdRatePlansRatePlanId<TError = unknown>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
            >
          >
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
        ? getGetHotelsHotelIdRatePlansRatePlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hotels[':hotelId']['rate-plans'][':ratePlanId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
