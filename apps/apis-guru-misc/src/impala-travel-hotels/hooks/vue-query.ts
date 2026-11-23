import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBookingsKey() {
  return ['bookings'] as const
}

export function getHotelsKey() {
  return ['hotels'] as const
}

export function getBookingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookings.$get>>,
) {
  return ['bookings', '/bookings', toValue(args)] as const
}

export function getBookingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBookings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
          >,
          ReturnType<typeof getBookingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBookings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bookings.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBookingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBookingsBookingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookings)[':bookingId']['$get']>>,
) {
  return ['bookings', '/bookings/:bookingId', toValue(args)] as const
}

export function getBookingsBookingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookings)[':bookingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingsBookingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookings[':bookingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingsBookingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookings)[':bookingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookingsBookingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookingsBookingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingsBookingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookings[':bookingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBookingsBookingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBookingsBookingIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteBookingsBookingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBookingsBookingIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutBookingsBookingIdBookingContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBookingsBookingIdBookingContactMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHotelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hotels.$get>>,
) {
  return ['hotels', '/hotels', toValue(args)] as const
}

export function getHotelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hotels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHotelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hotels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHotels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hotels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
          ReturnType<typeof getHotelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hotels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHotelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHotelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hotels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHotelsHotelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hotels)[':hotelId']['$get']>>,
) {
  return ['hotels', '/hotels/:hotelId', toValue(args)] as const
}

export function getHotelsHotelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hotels)[':hotelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHotelsHotelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hotels[':hotelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHotelsHotelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hotels)[':hotelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
            >
          >,
          ReturnType<typeof getHotelsHotelIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hotels)[':hotelId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHotelsHotelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHotelsHotelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hotels[':hotelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHotelsHotelIdRatePlansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>
  >,
) {
  return ['hotels', '/hotels/:hotelId/rate-plans', toValue(args)] as const
}

export function getHotelsHotelIdRatePlansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHotelsHotelIdRatePlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hotels[':hotelId']['rate-plans'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHotelsHotelIdRatePlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHotelsHotelIdRatePlansQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHotelsHotelIdRatePlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hotels[':hotelId']['rate-plans'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHotelsHotelIdRatePlansRatePlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
  >,
) {
  return ['hotels', '/hotels/:hotelId/rate-plans/:ratePlanId', toValue(args)] as const
}

export function getHotelsHotelIdRatePlansRatePlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHotelsHotelIdRatePlansRatePlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hotels[':hotelId']['rate-plans'][':ratePlanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHotelsHotelIdRatePlansRatePlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hotels)[':hotelId']['rate-plans'][':ratePlanId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getHotelsHotelIdRatePlansRatePlanIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHotelsHotelIdRatePlansRatePlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hotels[':hotelId']['rate-plans'][':ratePlanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
