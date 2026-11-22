import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getStationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStationsQueryKey>
  >({
    queryKey: getStationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTripsQueryKey(args: InferRequestType<typeof client.trips.$get>) {
  return ['trips', '/trips', args] as const
}

export function getTripsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.trips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTripsQueryKey>
  >({
    queryKey: getTripsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTrips<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTripsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTripsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBookingsQueryKey() {
  return ['bookings', '/bookings'] as const
}

export function getBookingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookingsQueryKey>
  >({
    queryKey: getBookingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.bookings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBookings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBookingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBookings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.bookings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBookingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectBookingsBookingId<
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
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookingsBookingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteBookingsBookingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBookingsBookingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBookingsBookingIdPayment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBookingsBookingIdPaymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
