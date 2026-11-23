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

export function getStationsKey() {
  return ['stations'] as const
}

export function getTripsKey() {
  return ['trips'] as const
}

export function getStationsQueryKey() {
  return ['stations', '/stations'] as const
}

export function getStationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
          >,
          ReturnType<typeof getStationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTripsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trips.$get>>,
) {
  return ['trips', '/trips', toValue(args)] as const
}

export function getTripsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTripsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrips<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
          ReturnType<typeof getTripsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTripsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTripsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookingsQueryKey() {
  return ['bookings', '/bookings'] as const
}

export function getBookingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBookingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
      queryKey: getBookingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.bookings.$get(undefined, {
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

export function getDeleteBookingsBookingIdMutationKey() {
  return ['bookings', '/bookings/:bookingId', 'DELETE'] as const
}

export function getDeleteBookingsBookingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$delete']>>
          >
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bookings)[':bookingId']['$delete']>>
                >
              >
            >
          | undefined,
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

export function getPostBookingsBookingIdPaymentMutationKey() {
  return ['bookings', '/bookings/:bookingId/payment', 'POST'] as const
}

export function getPostBookingsBookingIdPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookings)[':bookingId']['payment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookings)[':bookingId']['payment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingsBookingIdPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bookings)[':bookingId']['payment']['$post']>,
    ) {
      return parseResponse(client.bookings[':bookingId'].payment.$post(args, options))
    },
  })
}

export function usePostBookingsBookingIdPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)[':bookingId']['payment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookings)[':bookingId']['payment']['$post']>,
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
  const mutationDefaults = getPostBookingsBookingIdPaymentMutationOptions<TError, TOnMutateResult>(
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
