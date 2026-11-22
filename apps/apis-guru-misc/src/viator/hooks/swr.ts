import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAvailableKey() {
  return ['available'] as const
}

export function getBookingKey() {
  return ['booking'] as const
}

export function getBookingsKey() {
  return ['bookings'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getMerchantKey() {
  return ['merchant'] as const
}

export function getProductKey() {
  return ['product'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTaxonomyKey() {
  return ['taxonomy'] as const
}

export function getPostAvailableProductsKey() {
  return ['available', '/available/products', 'POST'] as const
}

export function usePostAvailableProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.available.products.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.available.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAvailableProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.available.products.$post> }) =>
        parseResponse(client.available.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBookingAvailabilityKey() {
  return ['booking', '/booking/availability', 'POST'] as const
}

export function usePostBookingAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.availability.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.booking.availability.$post> },
      ) => parseResponse(client.booking.availability.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookingAvailabilityDatesKey(
  args: InferRequestType<typeof client.booking.availability.dates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['booking', '/booking/availability/dates', keyArgs] as const
}

export function useGetBookingAvailabilityDates<TError = unknown>(
  args: InferRequestType<typeof client.booking.availability.dates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.dates.$get>>>
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
        ? getGetBookingAvailabilityDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.dates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.availability.dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingAvailabilityDates<TError = unknown>(
  args: InferRequestType<typeof client.booking.availability.dates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.dates.$get>>>
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
        ? getGetBookingAvailabilityDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.dates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.availability.dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookingAvailabilityTourgradesKey() {
  return ['booking', '/booking/availability/tourgrades', 'POST'] as const
}

export function usePostBookingAvailabilityTourgrades<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.booking.availability.tourgrades.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.availability.tourgrades.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingAvailabilityTourgradesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.booking.availability.tourgrades.$post> },
      ) => parseResponse(client.booking.availability.tourgrades.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBookingAvailabilityTourgradesPricingmatrixKey() {
  return ['booking', '/booking/availability/tourgrades/pricingmatrix', 'POST'] as const
}

export function usePostBookingAvailabilityTourgradesPricingmatrix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingAvailabilityTourgradesPricingmatrixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>
        },
      ) =>
        parseResponse(
          client.booking.availability.tourgrades.pricingmatrix.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBookingBookKey() {
  return ['booking', '/booking/book', 'POST'] as const
}

export function usePostBookingBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.book.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.book.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.booking.book.$post> }) =>
        parseResponse(client.booking.book.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBookingCalculatepriceKey() {
  return ['booking', '/booking/calculateprice', 'POST'] as const
}

export function usePostBookingCalculateprice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.calculateprice.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.calculateprice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingCalculatepriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.booking.calculateprice.$post> },
      ) => parseResponse(client.booking.calculateprice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookingHotelsKey(args: InferRequestType<typeof client.booking.hotels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['booking', '/booking/hotels', keyArgs] as const
}

export function useGetBookingHotels<TError = unknown>(
  args: InferRequestType<typeof client.booking.hotels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingHotelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.hotels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingHotels<TError = unknown>(
  args: InferRequestType<typeof client.booking.hotels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingHotelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.hotels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookingMybookingsKey(
  args: InferRequestType<typeof client.booking.mybookings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['booking', '/booking/mybookings', keyArgs] as const
}

export function useGetBookingMybookings<TError = unknown>(
  args: InferRequestType<typeof client.booking.mybookings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>>
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
        ? getGetBookingMybookingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.mybookings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingMybookings<TError = unknown>(
  args: InferRequestType<typeof client.booking.mybookings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>>
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
        ? getGetBookingMybookingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.mybookings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookingPastbookingKey(
  args: InferRequestType<typeof client.booking.pastbooking.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['booking', '/booking/pastbooking', keyArgs] as const
}

export function useGetBookingPastbooking<TError = unknown>(
  args: InferRequestType<typeof client.booking.pastbooking.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>
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
        ? getGetBookingPastbookingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.pastbooking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingPastbooking<TError = unknown>(
  args: InferRequestType<typeof client.booking.pastbooking.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>
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
        ? getGetBookingPastbookingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.pastbooking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookingPricingmatrixKey() {
  return ['booking', '/booking/pricingmatrix', 'POST'] as const
}

export function usePostBookingPricingmatrix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.pricingmatrix.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.pricingmatrix.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingPricingmatrixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.booking.pricingmatrix.$post> },
      ) => parseResponse(client.booking.pricingmatrix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBookingStatusKey() {
  return ['booking', '/booking/status', 'POST'] as const
}

export function usePostBookingStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.status.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.booking.status.$post> }) =>
        parseResponse(client.booking.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBookingStatusItemsKey() {
  return ['booking', '/booking/status/items', 'POST'] as const
}

export function usePostBookingStatusItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.status.items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.booking.status.items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingStatusItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.booking.status.items.$post> },
      ) => parseResponse(client.booking.status.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookingVoucherKey(
  args: InferRequestType<typeof client.booking.voucher.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['booking', '/booking/voucher', keyArgs] as const
}

export function useGetBookingVoucher<TError = unknown>(
  args: InferRequestType<typeof client.booking.voucher.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingVoucherKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.voucher.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingVoucher<TError = unknown>(
  args: InferRequestType<typeof client.booking.voucher.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookingVoucherKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booking.voucher.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookingsCancelReasonsKey(
  args: InferRequestType<(typeof client.bookings)['cancel-reasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bookings', '/bookings/cancel-reasons', keyArgs] as const
}

export function useGetBookingsCancelReasons<TError = unknown>(
  args: InferRequestType<(typeof client.bookings)['cancel-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>
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
        ? getGetBookingsCancelReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookings['cancel-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingsCancelReasons<TError = unknown>(
  args: InferRequestType<(typeof client.bookings)['cancel-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>
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
        ? getGetBookingsCancelReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookings['cancel-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookingsBookingReferenceCancelKey() {
  return ['bookings', '/bookings/:booking-reference/cancel', 'POST'] as const
}

export function usePostBookingsBookingReferenceCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookingsBookingReferenceCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>
        },
      ) => parseResponse(client.bookings[':booking-reference'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookingsBookingReferenceCancelQuoteKey(
  args: InferRequestType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>,
) {
  return ['bookings', '/bookings/:booking-reference/cancel-quote', args] as const
}

export function useGetBookingsBookingReferenceCancelQuote<TError = unknown>(
  args: InferRequestType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
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
        ? getGetBookingsBookingReferenceCancelQuoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bookings[':booking-reference']['cancel-quote'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookingsBookingReferenceCancelQuote<TError = unknown>(
  args: InferRequestType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
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
        ? getGetBookingsBookingReferenceCancelQuoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bookings[':booking-reference']['cancel-quote'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHealthCheckKey(args: InferRequestType<typeof client.health.check.$get>) {
  const { header: _, ...keyArgs } = args
  return ['health', '/health/check', keyArgs] as const
}

export function useGetHealthCheck<TError = unknown>(
  args: InferRequestType<typeof client.health.check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthCheckKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthCheck<TError = unknown>(
  args: InferRequestType<typeof client.health.check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthCheckKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantCancellationKey() {
  return ['merchant', '/merchant/cancellation', 'POST'] as const
}

export function usePostMerchantCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.merchant.cancellation.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.merchant.cancellation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.merchant.cancellation.$post> },
      ) => parseResponse(client.merchant.cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductKey(args: InferRequestType<typeof client.product.$get>) {
  const { header: _, ...keyArgs } = args
  return ['product', '/product', keyArgs] as const
}

export function useGetProduct<TError = unknown>(
  args: InferRequestType<typeof client.product.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.product.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProduct<TError = unknown>(
  args: InferRequestType<typeof client.product.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.product.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetProductPhotosKey(args: InferRequestType<typeof client.product.photos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['product', '/product/photos', keyArgs] as const
}

export function useGetProductPhotos<TError = unknown>(
  args: InferRequestType<typeof client.product.photos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductPhotosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product.photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductPhotos<TError = unknown>(
  args: InferRequestType<typeof client.product.photos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductPhotosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product.photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductReviewsKey(
  args: InferRequestType<typeof client.product.reviews.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['product', '/product/reviews', keyArgs] as const
}

export function useGetProductReviews<TError = unknown>(
  args: InferRequestType<typeof client.product.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductReviews<TError = unknown>(
  args: InferRequestType<typeof client.product.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchFreetextKey() {
  return ['search', '/search/freetext', 'POST'] as const
}

export function usePostSearchFreetext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.freetext.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.freetext.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchFreetextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.freetext.$post> }) =>
        parseResponse(client.search.freetext.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchProductsKey() {
  return ['search', '/search/products', 'POST'] as const
}

export function usePostSearchProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.products.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.products.$post> }) =>
        parseResponse(client.search.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchProductsCodesKey() {
  return ['search', '/search/products/codes', 'POST'] as const
}

export function usePostSearchProductsCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.products.codes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.products.codes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchProductsCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.search.products.codes.$post> },
      ) => parseResponse(client.search.products.codes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTaxonomyAttractionsKey() {
  return ['taxonomy', '/taxonomy/attractions', 'POST'] as const
}

export function usePostTaxonomyAttractions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.attractions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.taxonomy.attractions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaxonomyAttractionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.taxonomy.attractions.$post> },
      ) => parseResponse(client.taxonomy.attractions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxonomyCategoriesKey(
  args: InferRequestType<typeof client.taxonomy.categories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['taxonomy', '/taxonomy/categories', keyArgs] as const
}

export function useGetTaxonomyCategories<TError = unknown>(
  args: InferRequestType<typeof client.taxonomy.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>
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
        ? getGetTaxonomyCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomy.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomyCategories<TError = unknown>(
  args: InferRequestType<typeof client.taxonomy.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>
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
        ? getGetTaxonomyCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomy.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaxonomyDestinationsKey(
  args: InferRequestType<typeof client.taxonomy.destinations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['taxonomy', '/taxonomy/destinations', keyArgs] as const
}

export function useGetTaxonomyDestinations<TError = unknown>(
  args: InferRequestType<typeof client.taxonomy.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>
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
        ? getGetTaxonomyDestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomy.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomyDestinations<TError = unknown>(
  args: InferRequestType<typeof client.taxonomy.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>
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
        ? getGetTaxonomyDestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomy.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
