import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBookingsKey() {
  return ['bookings'] as const
}

export function getHotelsKey() {
  return ['hotels'] as const
}

export function getBookingsQueryKey(args: InferRequestType<typeof client.bookings.$get>) {
  return ['bookings', '/bookings', args] as const
}

export function getBookingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bookings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookingsQueryKey>
  >({
    queryKey: getBookingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bookings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBookingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBookingsMutationKey() {
  return ['bookings', '/bookings', 'POST'] as const
}

export function getPostBookingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$post>>>>>,
    TError,
    InferRequestType<typeof client.bookings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bookings.$post>) {
      return parseResponse(client.bookings.$post(args, options))
    },
  })
}

export function createPostBookings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bookings.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBookingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBookingsBookingIdQueryKey(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
) {
  return ['bookings', '/bookings/:bookingId', args] as const
}

export function getBookingsBookingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookingsBookingIdQueryKey>
  >({
    queryKey: getBookingsBookingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookings[':bookingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBookingsBookingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bookings)[':bookingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBookingsBookingIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookingsBookingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBookingsBookingIdMutationKey() {
  return ['bookings', '/bookings/:bookingId', 'PUT'] as const
}

export function getPutBookingsBookingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bookings)[':bookingId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBookingsBookingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookings)[':bookingId']['$put']>) {
      return parseResponse(client.bookings[':bookingId'].$put(args, options))
    },
  })
}

export function createPutBookingsBookingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookings)[':bookingId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBookingsBookingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBookingsBookingIdMutationKey() {
  return ['bookings', '/bookings/:bookingId', 'DELETE'] as const
}

export function getDeleteBookingsBookingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bookings)[':bookingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBookingsBookingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookings)[':bookingId']['$delete']>) {
      return parseResponse(client.bookings[':bookingId'].$delete(args, options))
    },
  })
}

export function createDeleteBookingsBookingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookings)[':bookingId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBookingsBookingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutBookingsBookingIdBookingContactMutationKey() {
  return ['bookings', '/bookings/:bookingId/booking-contact', 'PUT'] as const
}

export function getPutBookingsBookingIdBookingContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBookingsBookingIdBookingContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>,
    ) {
      return parseResponse(client.bookings[':bookingId']['booking-contact'].$put(args, options))
    },
  })
}

export function createPutBookingsBookingIdBookingContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookings)[':bookingId']['booking-contact']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBookingsBookingIdBookingContactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHotelsQueryKey(args: InferRequestType<typeof client.hotels.$get>) {
  return ['hotels', '/hotels', args] as const
}

export function getHotelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hotels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHotelsQueryKey>
  >({
    queryKey: getHotelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hotels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHotels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hotels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getHotelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHotelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHotelsHotelIdQueryKey(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['$get']>,
) {
  return ['hotels', '/hotels/:hotelId', args] as const
}

export function getHotelsHotelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHotelsHotelIdQueryKey>
  >({
    queryKey: getHotelsHotelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hotels[':hotelId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHotelsHotelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hotels)[':hotelId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHotelsHotelIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHotelsHotelIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHotelsHotelIdRatePlansQueryKey(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>,
) {
  return ['hotels', '/hotels/:hotelId/rate-plans', args] as const
}

export function getHotelsHotelIdRatePlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHotelsHotelIdRatePlansQueryKey>
  >({
    queryKey: getHotelsHotelIdRatePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hotels[':hotelId']['rate-plans'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHotelsHotelIdRatePlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHotelsHotelIdRatePlansQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHotelsHotelIdRatePlansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHotelsHotelIdRatePlansRatePlanIdQueryKey(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>,
) {
  return ['hotels', '/hotels/:hotelId/rate-plans/:ratePlanId', args] as const
}

export function getHotelsHotelIdRatePlansRatePlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHotelsHotelIdRatePlansRatePlanIdQueryKey>
  >({
    queryKey: getHotelsHotelIdRatePlansRatePlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hotels[':hotelId']['rate-plans'][':ratePlanId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHotelsHotelIdRatePlansRatePlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHotelsHotelIdRatePlansRatePlanIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHotelsHotelIdRatePlansRatePlanIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
