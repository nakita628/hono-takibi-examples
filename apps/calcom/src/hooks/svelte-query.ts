import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ApiKeysRefreshMutationKey() {
  return ['v2', '/v2/api-keys/refresh', 'POST'] as const
}

export function getPostV2ApiKeysRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['api-keys']['refresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['api-keys']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApiKeysRefreshMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['api-keys']['refresh']['$post']>) {
      return parseResponse(client.v2['api-keys'].refresh.$post(args, options))
    },
  })
}

export function createPostV2ApiKeysRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['api-keys']['refresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['api-keys']['refresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ApiKeysRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BookingsQueryKey(args: InferRequestType<typeof client.v2.bookings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings', keyArgs] as const
}

export function getV2BookingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.bookings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BookingsQueryKey>
  >({
    queryKey: getV2BookingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Bookings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bookings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BookingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2BookingsMutationKey() {
  return ['v2', '/v2/bookings', 'POST'] as const
}

export function getPostV2BookingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.bookings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bookings.$post>) {
      return parseResponse(client.v2.bookings.$post(args, options))
    },
  })
}

export function createPostV2Bookings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.bookings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BookingsBySeatSeatUidQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/by-seat/:seatUid', keyArgs] as const
}

export function getV2BookingsBySeatSeatUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBySeatSeatUidQueryKey>
  >({
    queryKey: getV2BookingsBySeatSeatUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings['by-seat'][':seatUid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBySeatSeatUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBySeatSeatUidQueryKey>
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
      ...getV2BookingsBySeatSeatUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BookingsBookingUidQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid', keyArgs] as const
}

export function getV2BookingsBookingUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidQueryKey>
  >({
    queryKey: getV2BookingsBookingUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bookings)[':bookingUid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidQueryKey>
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
      ...getV2BookingsBookingUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BookingsBookingUidRecordingsQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/recordings', keyArgs] as const
}

export function getV2BookingsBookingUidRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidRecordingsQueryKey>
  >({
    queryKey: getV2BookingsBookingUidRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].recordings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUidRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidRecordingsQueryKey>
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
      ...getV2BookingsBookingUidRecordingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BookingsBookingUidTranscriptsQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/transcripts', keyArgs] as const
}

export function getV2BookingsBookingUidTranscriptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidTranscriptsQueryKey>
  >({
    queryKey: getV2BookingsBookingUidTranscriptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].transcripts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUidTranscripts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidTranscriptsQueryKey>
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
      ...getV2BookingsBookingUidTranscriptsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BookingsBookingUidRescheduleMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/reschedule', 'POST'] as const
}

export function getPostV2BookingsBookingUidRescheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidRescheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].reschedule.$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidReschedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidRescheduleMutationOptions<
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

export function getPostV2BookingsBookingUidCancelMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/cancel', 'POST'] as const
}

export function getPostV2BookingsBookingUidCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].cancel.$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidCancelMutationOptions<
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

export function getPostV2BookingsBookingUidMarkAbsentMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/mark-absent', 'POST'] as const
}

export function getPostV2BookingsBookingUidMarkAbsentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidMarkAbsentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid']['mark-absent'].$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidMarkAbsent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidMarkAbsentMutationOptions<
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

export function getPostV2BookingsBookingUidReassignMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/reassign', 'POST'] as const
}

export function getPostV2BookingsBookingUidReassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidReassignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].reassign.$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidReassign<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidReassignMutationOptions<
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

export function getPostV2BookingsBookingUidReassignUserIdMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/reassign/:userId', 'POST'] as const
}

export function getPostV2BookingsBookingUidReassignUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidReassignUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].reassign[':userId'].$post(args, options),
      )
    },
  })
}

export function createPostV2BookingsBookingUidReassignUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidReassignUserIdMutationOptions<
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

export function getPostV2BookingsBookingUidConfirmMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/confirm', 'POST'] as const
}

export function getPostV2BookingsBookingUidConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].confirm.$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidConfirmMutationOptions<
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

export function getPostV2BookingsBookingUidDeclineMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/decline', 'POST'] as const
}

export function getPostV2BookingsBookingUidDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].decline.$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidDeclineMutationOptions<
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

export function getV2BookingsBookingUidCalendarLinksQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/calendar-links', keyArgs] as const
}

export function getV2BookingsBookingUidCalendarLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidCalendarLinksQueryKey>
  >({
    queryKey: getV2BookingsBookingUidCalendarLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid']['calendar-links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUidCalendarLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidCalendarLinksQueryKey>
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
      ...getV2BookingsBookingUidCalendarLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BookingsBookingUidReferencesQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/references', keyArgs] as const
}

export function getV2BookingsBookingUidReferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidReferencesQueryKey>
  >({
    queryKey: getV2BookingsBookingUidReferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].references.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUidReferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidReferencesQueryKey>
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
      ...getV2BookingsBookingUidReferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BookingsBookingUidConferencingSessionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/conferencing-sessions', keyArgs] as const
}

export function getV2BookingsBookingUidConferencingSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidConferencingSessionsQueryKey>
  >({
    queryKey: getV2BookingsBookingUidConferencingSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid']['conferencing-sessions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUidConferencingSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidConferencingSessionsQueryKey>
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
      ...getV2BookingsBookingUidConferencingSessionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchV2BookingsBookingUidLocationMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/location', 'PATCH'] as const
}

export function getPatchV2BookingsBookingUidLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2BookingsBookingUidLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].location.$patch(args, options))
    },
  })
}

export function createPatchV2BookingsBookingUidLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2BookingsBookingUidLocationMutationOptions<
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

export function getV2BookingsBookingUidAttendeesQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/attendees', keyArgs] as const
}

export function getV2BookingsBookingUidAttendeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidAttendeesQueryKey>
  >({
    queryKey: getV2BookingsBookingUidAttendeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].attendees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUidAttendees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidAttendeesQueryKey>
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
      ...getV2BookingsBookingUidAttendeesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BookingsBookingUidAttendeesMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/attendees', 'POST'] as const
}

export function getPostV2BookingsBookingUidAttendeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidAttendeesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].attendees.$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidAttendees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidAttendeesMutationOptions<
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

export function getV2BookingsBookingUidAttendeesAttendeeIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/attendees/:attendeeId', keyArgs] as const
}

export function getV2BookingsBookingUidAttendeesAttendeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingUidAttendeesAttendeeIdQueryKey>
  >({
    queryKey: getV2BookingsBookingUidAttendeesAttendeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].attendees[':attendeeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BookingsBookingUidAttendeesAttendeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingUidAttendeesAttendeeIdQueryKey>
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
      ...getV2BookingsBookingUidAttendeesAttendeeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2BookingsBookingUidAttendeesAttendeeIdMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/attendees/:attendeeId', 'DELETE'] as const
}

export function getDeleteV2BookingsBookingUidAttendeesAttendeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2BookingsBookingUidAttendeesAttendeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.bookings[':bookingUid'].attendees[':attendeeId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2BookingsBookingUidAttendeesAttendeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2BookingsBookingUidAttendeesAttendeeIdMutationOptions<
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

export function getPostV2BookingsBookingUidGuestsMutationKey() {
  return ['v2', '/v2/bookings/:bookingUid/guests', 'POST'] as const
}

export function getPostV2BookingsBookingUidGuestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingUidGuestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':bookingUid'].guests.$post(args, options))
    },
  })
}

export function createPostV2BookingsBookingUidGuests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BookingsBookingUidGuestsMutationOptions<
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

export function getV2CalendarsConnectionsQueryKey(
  args: InferRequestType<typeof client.v2.calendars.connections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections', keyArgs] as const
}

export function getV2CalendarsConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.calendars.connections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsConnectionsQueryKey>
  >({
    queryKey: getV2CalendarsConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars.connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.calendars.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsConnectionsQueryKey>
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
      ...getV2CalendarsConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CalendarsConnectionsConnectionIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections/:connectionId/events', keyArgs] as const
}

export function getV2CalendarsConnectionsConnectionIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.calendars.connections)[':connectionId']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.calendars.connections)[':connectionId']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsConnectionsConnectionIdEventsQueryKey>
  >({
    queryKey: getV2CalendarsConnectionsConnectionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars.connections[':connectionId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsConnectionsConnectionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.calendars.connections)[':connectionId']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsConnectionsConnectionIdEventsQueryKey>
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
      ...getV2CalendarsConnectionsConnectionIdEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CalendarsConnectionsConnectionIdEventsMutationKey() {
  return ['v2', '/v2/calendars/connections/:connectionId/events', 'POST'] as const
}

export function getPostV2CalendarsConnectionsConnectionIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.calendars.connections)[':connectionId']['events']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.calendars.connections)[':connectionId']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CalendarsConnectionsConnectionIdEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.calendars.connections)[':connectionId']['events']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.calendars.connections[':connectionId'].events.$post(args, options),
      )
    },
  })
}

export function createPostV2CalendarsConnectionsConnectionIdEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.calendars.connections)[':connectionId']['events']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.calendars.connections)[':connectionId']['events']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CalendarsConnectionsConnectionIdEventsMutationOptions<
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

export function getV2CalendarsConnectionsConnectionIdEventsEventIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections/:connectionId/events/:eventId', keyArgs] as const
}

export function getV2CalendarsConnectionsConnectionIdEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsConnectionsConnectionIdEventsEventIdQueryKey>
  >({
    queryKey: getV2CalendarsConnectionsConnectionIdEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars.connections[':connectionId'].events[':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsConnectionsConnectionIdEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsConnectionsConnectionIdEventsEventIdQueryKey>
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
      ...getV2CalendarsConnectionsConnectionIdEventsEventIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2CalendarsConnectionsConnectionIdEventsEventIdMutationKey() {
  return ['v2', '/v2/calendars/connections/:connectionId/events/:eventId', 'DELETE'] as const
}

export function getDeleteV2CalendarsConnectionsConnectionIdEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CalendarsConnectionsConnectionIdEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.calendars.connections[':connectionId'].events[':eventId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2CalendarsConnectionsConnectionIdEventsEventId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2CalendarsConnectionsConnectionIdEventsEventIdMutationOptions<
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

export function getPatchV2CalendarsConnectionsConnectionIdEventsEventIdMutationKey() {
  return ['v2', '/v2/calendars/connections/:connectionId/events/:eventId', 'PATCH'] as const
}

export function getPatchV2CalendarsConnectionsConnectionIdEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CalendarsConnectionsConnectionIdEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.calendars.connections[':connectionId'].events[':eventId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2CalendarsConnectionsConnectionIdEventsEventId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2CalendarsConnectionsConnectionIdEventsEventIdMutationOptions<
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

export function getV2CalendarsConnectionsConnectionIdFreebusyQueryKey(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections/:connectionId/freebusy', keyArgs] as const
}

export function getV2CalendarsConnectionsConnectionIdFreebusyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsConnectionsConnectionIdFreebusyQueryKey>
  >({
    queryKey: getV2CalendarsConnectionsConnectionIdFreebusyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars.connections[':connectionId'].freebusy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsConnectionsConnectionIdFreebusy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsConnectionsConnectionIdFreebusyQueryKey>
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
      ...getV2CalendarsConnectionsConnectionIdFreebusyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2CalendarsCalendarEventsEventUidQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/events/:eventUid', keyArgs] as const
}

export function getV2CalendarsCalendarEventsEventUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsCalendarEventsEventUidQueryKey>
  >({
    queryKey: getV2CalendarsCalendarEventsEventUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars[':calendar'].events[':eventUid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsCalendarEventsEventUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsCalendarEventsEventUidQueryKey>
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
      ...getV2CalendarsCalendarEventsEventUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2CalendarsCalendarEventsEventUidMutationKey() {
  return ['v2', '/v2/calendars/:calendar/events/:eventUid', 'DELETE'] as const
}

export function getDeleteV2CalendarsCalendarEventsEventUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CalendarsCalendarEventsEventUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.calendars[':calendar'].events[':eventUid'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2CalendarsCalendarEventsEventUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2CalendarsCalendarEventsEventUidMutationOptions<
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

export function getPatchV2CalendarsCalendarEventsEventUidMutationKey() {
  return ['v2', '/v2/calendars/:calendar/events/:eventUid', 'PATCH'] as const
}

export function getPatchV2CalendarsCalendarEventsEventUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CalendarsCalendarEventsEventUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.calendars[':calendar'].events[':eventUid'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2CalendarsCalendarEventsEventUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2CalendarsCalendarEventsEventUidMutationOptions<
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

export function getV2CalendarsCalendarEventEventUidQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/event/:eventUid', keyArgs] as const
}

export function getV2CalendarsCalendarEventEventUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsCalendarEventEventUidQueryKey>
  >({
    queryKey: getV2CalendarsCalendarEventEventUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars[':calendar'].event[':eventUid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsCalendarEventEventUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsCalendarEventEventUidQueryKey>
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
      ...getV2CalendarsCalendarEventEventUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchV2CalendarsCalendarEventEventUidMutationKey() {
  return ['v2', '/v2/calendars/:calendar/event/:eventUid', 'PATCH'] as const
}

export function getPatchV2CalendarsCalendarEventEventUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CalendarsCalendarEventEventUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.calendars[':calendar'].event[':eventUid'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2CalendarsCalendarEventEventUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2CalendarsCalendarEventEventUidMutationOptions<
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

export function getV2CalendarsCalendarEventsQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/events', keyArgs] as const
}

export function getV2CalendarsCalendarEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsCalendarEventsQueryKey>
  >({
    queryKey: getV2CalendarsCalendarEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars[':calendar'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsCalendarEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsCalendarEventsQueryKey>
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
      ...getV2CalendarsCalendarEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CalendarsCalendarEventsMutationKey() {
  return ['v2', '/v2/calendars/:calendar/events', 'POST'] as const
}

export function getPostV2CalendarsCalendarEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CalendarsCalendarEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$post']>,
    ) {
      return parseResponse(client.v2.calendars[':calendar'].events.$post(args, options))
    },
  })
}

export function createPostV2CalendarsCalendarEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CalendarsCalendarEventsMutationOptions<
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

export function getV2CalendarsCalendarFreebusyQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/freebusy', keyArgs] as const
}

export function getV2CalendarsCalendarFreebusyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsCalendarFreebusyQueryKey>
  >({
    queryKey: getV2CalendarsCalendarFreebusyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars[':calendar'].freebusy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsCalendarFreebusy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsCalendarFreebusyQueryKey>
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
      ...getV2CalendarsCalendarFreebusyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CalendarsIcsFeedSaveMutationKey() {
  return ['v2', '/v2/calendars/ics-feed/save', 'POST'] as const
}

export function getPostV2CalendarsIcsFeedSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CalendarsIcsFeedSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>,
    ) {
      return parseResponse(client.v2.calendars['ics-feed'].save.$post(args, options))
    },
  })
}

export function createPostV2CalendarsIcsFeedSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CalendarsIcsFeedSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2CalendarsIcsFeedCheckQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/ics-feed/check', keyArgs] as const
}

export function getV2CalendarsIcsFeedCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsIcsFeedCheckQueryKey>
  >({
    queryKey: getV2CalendarsIcsFeedCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars['ics-feed'].check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsIcsFeedCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsIcsFeedCheckQueryKey>
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
      ...getV2CalendarsIcsFeedCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CalendarsBusyTimesQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)['busy-times']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/busy-times', keyArgs] as const
}

export function getV2CalendarsBusyTimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)['busy-times']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsBusyTimesQueryKey>
  >({
    queryKey: getV2CalendarsBusyTimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars['busy-times'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsBusyTimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendars)['busy-times']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsBusyTimesQueryKey>
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
      ...getV2CalendarsBusyTimesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CalendarsQueryKey(args: InferRequestType<typeof client.v2.calendars.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars', keyArgs] as const
}

export function getV2CalendarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.calendars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsQueryKey>
  >({
    queryKey: getV2CalendarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Calendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.calendars.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CalendarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2CalendarsCalendarConnectQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/connect', keyArgs] as const
}

export function getV2CalendarsCalendarConnectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsCalendarConnectQueryKey>
  >({
    queryKey: getV2CalendarsCalendarConnectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars[':calendar'].connect.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsCalendarConnect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsCalendarConnectQueryKey>
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
      ...getV2CalendarsCalendarConnectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CalendarsCalendarSaveQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['save']['$get']>,
) {
  return ['v2', '/v2/calendars/:calendar/save', args] as const
}

export function getV2CalendarsCalendarSaveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['save']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsCalendarSaveQueryKey>
  >({
    queryKey: getV2CalendarsCalendarSaveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars[':calendar'].save.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsCalendarSave<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendars)[':calendar']['save']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsCalendarSaveQueryKey>
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
      ...getV2CalendarsCalendarSaveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CalendarsCalendarCredentialsMutationKey() {
  return ['v2', '/v2/calendars/:calendar/credentials', 'POST'] as const
}

export function getPostV2CalendarsCalendarCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CalendarsCalendarCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>,
    ) {
      return parseResponse(client.v2.calendars[':calendar'].credentials.$post(args, options))
    },
  })
}

export function createPostV2CalendarsCalendarCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CalendarsCalendarCredentialsMutationOptions<
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

export function getV2CalendarsCalendarCheckQueryKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['check']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/check', keyArgs] as const
}

export function getV2CalendarsCalendarCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarsCalendarCheckQueryKey>
  >({
    queryKey: getV2CalendarsCalendarCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendars[':calendar'].check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CalendarsCalendarCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendars)[':calendar']['check']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarsCalendarCheckQueryKey>
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
      ...getV2CalendarsCalendarCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CalendarsCalendarDisconnectMutationKey() {
  return ['v2', '/v2/calendars/:calendar/disconnect', 'POST'] as const
}

export function getPostV2CalendarsCalendarDisconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CalendarsCalendarDisconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>,
    ) {
      return parseResponse(client.v2.calendars[':calendar'].disconnect.$post(args, options))
    },
  })
}

export function createPostV2CalendarsCalendarDisconnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CalendarsCalendarDisconnectMutationOptions<
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

export function getPostV2ConferencingAppConnectMutationKey() {
  return ['v2', '/v2/conferencing/:app/connect', 'POST'] as const
}

export function getPostV2ConferencingAppConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['connect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.conferencing)[':app']['connect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ConferencingAppConnectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.conferencing)[':app']['connect']['$post']>,
    ) {
      return parseResponse(client.v2.conferencing[':app'].connect.$post(args, options))
    },
  })
}

export function createPostV2ConferencingAppConnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['connect']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.conferencing)[':app']['connect']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ConferencingAppConnectMutationOptions<
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

export function getV2ConferencingAppOauthAuthUrlQueryKey(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/conferencing/:app/oauth/auth-url', keyArgs] as const
}

export function getV2ConferencingAppOauthAuthUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ConferencingAppOauthAuthUrlQueryKey>
  >({
    queryKey: getV2ConferencingAppOauthAuthUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.conferencing[':app'].oauth['auth-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ConferencingAppOauthAuthUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConferencingAppOauthAuthUrlQueryKey>
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
      ...getV2ConferencingAppOauthAuthUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ConferencingAppOauthCallbackQueryKey(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>,
) {
  return ['v2', '/v2/conferencing/:app/oauth/callback', args] as const
}

export function getV2ConferencingAppOauthCallbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ConferencingAppOauthCallbackQueryKey>
  >({
    queryKey: getV2ConferencingAppOauthCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.conferencing[':app'].oauth.callback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ConferencingAppOauthCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConferencingAppOauthCallbackQueryKey>
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
      ...getV2ConferencingAppOauthCallbackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ConferencingQueryKey(
  args: InferRequestType<typeof client.v2.conferencing.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/conferencing', keyArgs] as const
}

export function getV2ConferencingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.conferencing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ConferencingQueryKey>
  >({
    queryKey: getV2ConferencingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.conferencing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Conferencing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.conferencing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConferencingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ConferencingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2ConferencingAppDefaultMutationKey() {
  return ['v2', '/v2/conferencing/:app/default', 'POST'] as const
}

export function getPostV2ConferencingAppDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['default']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.conferencing)[':app']['default']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ConferencingAppDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.conferencing)[':app']['default']['$post']>,
    ) {
      return parseResponse(client.v2.conferencing[':app'].default.$post(args, options))
    },
  })
}

export function createPostV2ConferencingAppDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['default']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.conferencing)[':app']['default']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ConferencingAppDefaultMutationOptions<
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

export function getV2ConferencingDefaultQueryKey(
  args: InferRequestType<typeof client.v2.conferencing.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/conferencing/default', keyArgs] as const
}

export function getV2ConferencingDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.conferencing.default.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ConferencingDefaultQueryKey>
  >({
    queryKey: getV2ConferencingDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.conferencing.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ConferencingDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.conferencing.default.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConferencingDefaultQueryKey>
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
      ...getV2ConferencingDefaultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2ConferencingAppDisconnectMutationKey() {
  return ['v2', '/v2/conferencing/:app/disconnect', 'DELETE'] as const
}

export function getDeleteV2ConferencingAppDisconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ConferencingAppDisconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>,
    ) {
      return parseResponse(client.v2.conferencing[':app'].disconnect.$delete(args, options))
    },
  })
}

export function createDeleteV2ConferencingAppDisconnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ConferencingAppDisconnectMutationOptions<
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

export function getV2OauthClientsClientIdUsersQueryKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/users', keyArgs] as const
}

export function getV2OauthClientsClientIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthClientsClientIdUsersQueryKey>
  >({
    queryKey: getV2OauthClientsClientIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2OauthClientsClientIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OauthClientsClientIdUsersQueryKey>
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
      ...getV2OauthClientsClientIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2OauthClientsClientIdUsersMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users', 'POST'] as const
}

export function getPostV2OauthClientsClientIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthClientsClientIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>,
    ) {
      return parseResponse(client.v2['oauth-clients'][':clientId'].users.$post(args, options))
    },
  })
}

export function createPostV2OauthClientsClientIdUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthClientsClientIdUsersMutationOptions<
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

export function getV2OauthClientsClientIdUsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId', keyArgs] as const
}

export function getV2OauthClientsClientIdUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthClientsClientIdUsersUserIdQueryKey>
  >({
    queryKey: getV2OauthClientsClientIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2OauthClientsClientIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OauthClientsClientIdUsersUserIdQueryKey>
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
      ...getV2OauthClientsClientIdUsersUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2OauthClientsClientIdUsersUserIdMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId', 'DELETE'] as const
}

export function getDeleteV2OauthClientsClientIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2OauthClientsClientIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].users[':userId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2OauthClientsClientIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2OauthClientsClientIdUsersUserIdMutationOptions<
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

export function getPatchV2OauthClientsClientIdUsersUserIdMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId', 'PATCH'] as const
}

export function getPatchV2OauthClientsClientIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2OauthClientsClientIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].users[':userId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2OauthClientsClientIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2OauthClientsClientIdUsersUserIdMutationOptions<
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

export function getPostV2OauthClientsClientIdUsersUserIdForceRefreshMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId/force-refresh', 'POST'] as const
}

export function getPostV2OauthClientsClientIdUsersUserIdForceRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthClientsClientIdUsersUserIdForceRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].users[':userId']['force-refresh'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV2OauthClientsClientIdUsersUserIdForceRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthClientsClientIdUsersUserIdForceRefreshMutationOptions<
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

export function getPostV2OauthClientIdRefreshMutationKey() {
  return ['v2', '/v2/oauth/:clientId/refresh', 'POST'] as const
}

export function getPostV2OauthClientIdRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthClientIdRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>,
    ) {
      return parseResponse(client.v2.oauth[':clientId'].refresh.$post(args, options))
    },
  })
}

export function createPostV2OauthClientIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthClientIdRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2OauthClientsClientIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/webhooks', keyArgs] as const
}

export function getV2OauthClientsClientIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthClientsClientIdWebhooksQueryKey>
  >({
    queryKey: getV2OauthClientsClientIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2OauthClientsClientIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OauthClientsClientIdWebhooksQueryKey>
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
      ...getV2OauthClientsClientIdWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2OauthClientsClientIdWebhooksMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks', 'POST'] as const
}

export function getPostV2OauthClientsClientIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthClientsClientIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>,
    ) {
      return parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$post(args, options))
    },
  })
}

export function createPostV2OauthClientsClientIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthClientsClientIdWebhooksMutationOptions<
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

export function getDeleteV2OauthClientsClientIdWebhooksMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks', 'DELETE'] as const
}

export function getDeleteV2OauthClientsClientIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2OauthClientsClientIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']
      >,
    ) {
      return parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$delete(args, options))
    },
  })
}

export function createDeleteV2OauthClientsClientIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2OauthClientsClientIdWebhooksMutationOptions<
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

export function getV2OauthClientsClientIdWebhooksWebhookIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/webhooks/:webhookId', keyArgs] as const
}

export function getV2OauthClientsClientIdWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthClientsClientIdWebhooksWebhookIdQueryKey>
  >({
    queryKey: getV2OauthClientsClientIdWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2OauthClientsClientIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OauthClientsClientIdWebhooksWebhookIdQueryKey>
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
      ...getV2OauthClientsClientIdWebhooksWebhookIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2OauthClientsClientIdWebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteV2OauthClientsClientIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2OauthClientsClientIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2OauthClientsClientIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2OauthClientsClientIdWebhooksWebhookIdMutationOptions<
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

export function getPatchV2OauthClientsClientIdWebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks/:webhookId', 'PATCH'] as const
}

export function getPatchV2OauthClientsClientIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2OauthClientsClientIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2OauthClientsClientIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2OauthClientsClientIdWebhooksWebhookIdMutationOptions<
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

export function getV2OauthClientsQueryKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients', keyArgs] as const
}

export function getV2OauthClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['oauth-clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthClientsQueryKey>
  >({
    queryKey: getV2OauthClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['oauth-clients'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2OauthClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['oauth-clients']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OauthClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2OauthClientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2OauthClientsMutationKey() {
  return ['v2', '/v2/oauth-clients', 'POST'] as const
}

export function getPostV2OauthClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['oauth-clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthClientsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['oauth-clients']['$post']>) {
      return parseResponse(client.v2['oauth-clients'].$post(args, options))
    },
  })
}

export function createPostV2OauthClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['oauth-clients']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthClientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2OauthClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId', keyArgs] as const
}

export function getV2OauthClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthClientsClientIdQueryKey>
  >({
    queryKey: getV2OauthClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['oauth-clients'][':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2OauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OauthClientsClientIdQueryKey>
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
      ...getV2OauthClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2OauthClientsClientIdMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId', 'DELETE'] as const
}

export function getDeleteV2OauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2OauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>,
    ) {
      return parseResponse(client.v2['oauth-clients'][':clientId'].$delete(args, options))
    },
  })
}

export function createDeleteV2OauthClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2OauthClientsClientIdMutationOptions<
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

export function getPatchV2OauthClientsClientIdMutationKey() {
  return ['v2', '/v2/oauth-clients/:clientId', 'PATCH'] as const
}

export function getPatchV2OauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2OauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>,
    ) {
      return parseResponse(client.v2['oauth-clients'][':clientId'].$patch(args, options))
    },
  })
}

export function createPatchV2OauthClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2OauthClientsClientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV2DestinationCalendarsMutationKey() {
  return ['v2', '/v2/destination-calendars', 'PUT'] as const
}

export function getPutV2DestinationCalendarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['destination-calendars']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['destination-calendars']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DestinationCalendarsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['destination-calendars']['$put']>) {
      return parseResponse(client.v2['destination-calendars'].$put(args, options))
    },
  })
}

export function createPutV2DestinationCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['destination-calendars']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['destination-calendars']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2DestinationCalendarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2EventTypesQueryKey(
  args: InferRequestType<(typeof client.v2)['event-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types', keyArgs] as const
}

export function getV2EventTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['event-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventTypesQueryKey>
  >({
    queryKey: getV2EventTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['event-types'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2EventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['event-types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EventTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2EventTypesMutationKey() {
  return ['v2', '/v2/event-types', 'POST'] as const
}

export function getPostV2EventTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['event-types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EventTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['event-types']['$post']>) {
      return parseResponse(client.v2['event-types'].$post(args, options))
    },
  })
}

export function createPostV2EventTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['event-types']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EventTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2EventTypesEventTypeIdQueryKey(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId', keyArgs] as const
}

export function getV2EventTypesEventTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventTypesEventTypeIdQueryKey>
  >({
    queryKey: getV2EventTypesEventTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EventTypesEventTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventTypesEventTypeIdQueryKey>
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
      ...getV2EventTypesEventTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2EventTypesEventTypeIdMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId', 'DELETE'] as const
}

export function getDeleteV2EventTypesEventTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EventTypesEventTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>,
    ) {
      return parseResponse(client.v2['event-types'][':eventTypeId'].$delete(args, options))
    },
  })
}

export function createDeleteV2EventTypesEventTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2EventTypesEventTypeIdMutationOptions<
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

export function getPatchV2EventTypesEventTypeIdMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId', 'PATCH'] as const
}

export function getPatchV2EventTypesEventTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2EventTypesEventTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>,
    ) {
      return parseResponse(client.v2['event-types'][':eventTypeId'].$patch(args, options))
    },
  })
}

export function createPatchV2EventTypesEventTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2EventTypesEventTypeIdMutationOptions<
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

export function getV2EventTypesEventTypeIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId/webhooks', keyArgs] as const
}

export function getV2EventTypesEventTypeIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventTypesEventTypeIdWebhooksQueryKey>
  >({
    queryKey: getV2EventTypesEventTypeIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EventTypesEventTypeIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventTypesEventTypeIdWebhooksQueryKey>
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
      ...getV2EventTypesEventTypeIdWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2EventTypesEventTypeIdWebhooksMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks', 'POST'] as const
}

export function getPostV2EventTypesEventTypeIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EventTypesEventTypeIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']
      >,
    ) {
      return parseResponse(client.v2['event-types'][':eventTypeId'].webhooks.$post(args, options))
    },
  })
}

export function createPostV2EventTypesEventTypeIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EventTypesEventTypeIdWebhooksMutationOptions<
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

export function getDeleteV2EventTypesEventTypeIdWebhooksMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks', 'DELETE'] as const
}

export function getDeleteV2EventTypesEventTypeIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EventTypesEventTypeIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']
      >,
    ) {
      return parseResponse(client.v2['event-types'][':eventTypeId'].webhooks.$delete(args, options))
    },
  })
}

export function createDeleteV2EventTypesEventTypeIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2EventTypesEventTypeIdWebhooksMutationOptions<
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

export function getV2EventTypesEventTypeIdWebhooksWebhookIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId/webhooks/:webhookId', keyArgs] as const
}

export function getV2EventTypesEventTypeIdWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventTypesEventTypeIdWebhooksWebhookIdQueryKey>
  >({
    queryKey: getV2EventTypesEventTypeIdWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EventTypesEventTypeIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventTypesEventTypeIdWebhooksWebhookIdQueryKey>
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
      ...getV2EventTypesEventTypeIdWebhooksWebhookIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2EventTypesEventTypeIdWebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteV2EventTypesEventTypeIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EventTypesEventTypeIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2EventTypesEventTypeIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2EventTypesEventTypeIdWebhooksWebhookIdMutationOptions<
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

export function getPatchV2EventTypesEventTypeIdWebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks/:webhookId', 'PATCH'] as const
}

export function getPatchV2EventTypesEventTypeIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2EventTypesEventTypeIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2EventTypesEventTypeIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2EventTypesEventTypeIdWebhooksWebhookIdMutationOptions<
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

export function getV2EventTypesEventTypeIdPrivateLinksQueryKey(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId/private-links', keyArgs] as const
}

export function getV2EventTypesEventTypeIdPrivateLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventTypesEventTypeIdPrivateLinksQueryKey>
  >({
    queryKey: getV2EventTypesEventTypeIdPrivateLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId']['private-links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EventTypesEventTypeIdPrivateLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventTypesEventTypeIdPrivateLinksQueryKey>
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
      ...getV2EventTypesEventTypeIdPrivateLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2EventTypesEventTypeIdPrivateLinksMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId/private-links', 'POST'] as const
}

export function getPostV2EventTypesEventTypeIdPrivateLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EventTypesEventTypeIdPrivateLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId']['private-links'].$post(args, options),
      )
    },
  })
}

export function createPostV2EventTypesEventTypeIdPrivateLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EventTypesEventTypeIdPrivateLinksMutationOptions<
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

export function getDeleteV2EventTypesEventTypeIdPrivateLinksLinkIdMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId/private-links/:linkId', 'DELETE'] as const
}

export function getDeleteV2EventTypesEventTypeIdPrivateLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EventTypesEventTypeIdPrivateLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId']['private-links'][':linkId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2EventTypesEventTypeIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2EventTypesEventTypeIdPrivateLinksLinkIdMutationOptions<
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

export function getPatchV2EventTypesEventTypeIdPrivateLinksLinkIdMutationKey() {
  return ['v2', '/v2/event-types/:eventTypeId/private-links/:linkId', 'PATCH'] as const
}

export function getPatchV2EventTypesEventTypeIdPrivateLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2EventTypesEventTypeIdPrivateLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2['event-types'][':eventTypeId']['private-links'][':linkId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2EventTypesEventTypeIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2EventTypesEventTypeIdPrivateLinksLinkIdMutationOptions<
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

export function getV2MeQueryKey(args: InferRequestType<typeof client.v2.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/me', keyArgs] as const
}

export function getV2MeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2MeQueryKey>
  >({
    queryKey: getV2MeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Me<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.me.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2MeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchV2MeMutationKey() {
  return ['v2', '/v2/me', 'PATCH'] as const
}

export function getPatchV2MeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$patch>>>>>,
    TError,
    InferRequestType<typeof client.v2.me.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2MeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.me.$patch>) {
      return parseResponse(client.v2.me.$patch(args, options))
    },
  })
}

export function createPatchV2Me<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$patch>>>>>,
        TError,
        InferRequestType<typeof client.v2.me.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2MeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2AuthOauth2ClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>,
) {
  return ['v2', '/v2/auth/oauth2/clients/:clientId', args] as const
}

export function getV2AuthOauth2ClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthOauth2ClientsClientIdQueryKey>
  >({
    queryKey: getV2AuthOauth2ClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth.oauth2.clients[':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AuthOauth2ClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AuthOauth2ClientsClientIdQueryKey>
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
      ...getV2AuthOauth2ClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2AuthOauth2TokenMutationKey() {
  return ['v2', '/v2/auth/oauth2/token', 'POST'] as const
}

export function getPostV2AuthOauth2TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth.oauth2.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.auth.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AuthOauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.auth.oauth2.token.$post>) {
      return parseResponse(client.v2.auth.oauth2.token.$post(args, options))
    },
  })
}

export function createPostV2AuthOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth.oauth2.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.auth.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AuthOauth2TokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2SchedulesQueryKey(args: InferRequestType<typeof client.v2.schedules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/schedules', keyArgs] as const
}

export function getV2SchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesQueryKey>
  >({
    queryKey: getV2SchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2SchedulesMutationKey() {
  return ['v2', '/v2/schedules', 'POST'] as const
}

export function getPostV2SchedulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.schedules.$post>) {
      return parseResponse(client.v2.schedules.$post(args, options))
    },
  })
}

export function createPostV2Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2SchedulesDefaultQueryKey(
  args: InferRequestType<typeof client.v2.schedules.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/schedules/default', keyArgs] as const
}

export function getV2SchedulesDefaultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.schedules.default.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesDefaultQueryKey>
  >({
    queryKey: getV2SchedulesDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules.default.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2SchedulesDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.schedules.default.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SchedulesDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SchedulesDefaultQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2SchedulesScheduleIdQueryKey(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/schedules/:scheduleId', keyArgs] as const
}

export function getV2SchedulesScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesScheduleIdQueryKey>
  >({
    queryKey: getV2SchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules[':scheduleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SchedulesScheduleIdQueryKey>
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
      ...getV2SchedulesScheduleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2SchedulesScheduleIdMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'DELETE'] as const
}

export function getDeleteV2SchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
    ) {
      return parseResponse(client.v2.schedules[':scheduleId'].$delete(args, options))
    },
  })
}

export function createDeleteV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV2SchedulesScheduleIdMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'PATCH'] as const
}

export function getPatchV2SchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$patch']>,
    ) {
      return parseResponse(client.v2.schedules[':scheduleId'].$patch(args, options))
    },
  })
}

export function createPatchV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2SelectedCalendarsMutationKey() {
  return ['v2', '/v2/selected-calendars', 'POST'] as const
}

export function getPostV2SelectedCalendarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['selected-calendars']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['selected-calendars']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SelectedCalendarsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['selected-calendars']['$post']>) {
      return parseResponse(client.v2['selected-calendars'].$post(args, options))
    },
  })
}

export function createPostV2SelectedCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['selected-calendars']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['selected-calendars']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SelectedCalendarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV2SelectedCalendarsMutationKey() {
  return ['v2', '/v2/selected-calendars', 'DELETE'] as const
}

export function getDeleteV2SelectedCalendarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['selected-calendars']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['selected-calendars']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SelectedCalendarsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['selected-calendars']['$delete']>) {
      return parseResponse(client.v2['selected-calendars'].$delete(args, options))
    },
  })
}

export function createDeleteV2SelectedCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['selected-calendars']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['selected-calendars']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2SelectedCalendarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2SlotsQueryKey(args: InferRequestType<typeof client.v2.slots.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/slots', keyArgs] as const
}

export function getV2SlotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.slots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SlotsQueryKey>
  >({
    queryKey: getV2SlotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.slots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Slots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.slots.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2SlotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SlotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2SlotsReservationsMutationKey() {
  return ['v2', '/v2/slots/reservations', 'POST'] as const
}

export function getPostV2SlotsReservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.reservations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.slots.reservations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SlotsReservationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.slots.reservations.$post>) {
      return parseResponse(client.v2.slots.reservations.$post(args, options))
    },
  })
}

export function createPostV2SlotsReservations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.reservations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.slots.reservations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SlotsReservationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2SlotsReservationsUidQueryKey(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/slots/reservations/:uid', keyArgs] as const
}

export function getV2SlotsReservationsUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SlotsReservationsUidQueryKey>
  >({
    queryKey: getV2SlotsReservationsUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.slots.reservations[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SlotsReservationsUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SlotsReservationsUidQueryKey>
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
      ...getV2SlotsReservationsUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2SlotsReservationsUidMutationKey() {
  return ['v2', '/v2/slots/reservations/:uid', 'DELETE'] as const
}

export function getDeleteV2SlotsReservationsUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SlotsReservationsUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$delete']>,
    ) {
      return parseResponse(client.v2.slots.reservations[':uid'].$delete(args, options))
    },
  })
}

export function createDeleteV2SlotsReservationsUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2SlotsReservationsUidMutationOptions<
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

export function getPatchV2SlotsReservationsUidMutationKey() {
  return ['v2', '/v2/slots/reservations/:uid', 'PATCH'] as const
}

export function getPatchV2SlotsReservationsUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SlotsReservationsUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$patch']>,
    ) {
      return parseResponse(client.v2.slots.reservations[':uid'].$patch(args, options))
    },
  })
}

export function createPatchV2SlotsReservationsUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2SlotsReservationsUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2StripeConnectQueryKey(
  args: InferRequestType<typeof client.v2.stripe.connect.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/stripe/connect', keyArgs] as const
}

export function getV2StripeConnectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stripe.connect.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StripeConnectQueryKey>
  >({
    queryKey: getV2StripeConnectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stripe.connect.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StripeConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stripe.connect.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2StripeConnectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StripeConnectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StripeSaveQueryKey(args: InferRequestType<typeof client.v2.stripe.save.$get>) {
  return ['v2', '/v2/stripe/save', args] as const
}

export function getV2StripeSaveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stripe.save.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StripeSaveQueryKey>
  >({
    queryKey: getV2StripeSaveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stripe.save.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StripeSave<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stripe.save.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2StripeSaveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StripeSaveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StripeCheckQueryKey(
  args: InferRequestType<typeof client.v2.stripe.check.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/stripe/check', keyArgs] as const
}

export function getV2StripeCheckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stripe.check.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StripeCheckQueryKey>
  >({
    queryKey: getV2StripeCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stripe.check.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StripeCheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stripe.check.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2StripeCheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StripeCheckQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2VerifiedResourcesEmailsVerificationCodeRequestMutationKey() {
  return ['v2', '/v2/verified-resources/emails/verification-code/request', 'POST'] as const
}

export function getPostV2VerifiedResourcesEmailsVerificationCodeRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2VerifiedResourcesEmailsVerificationCodeRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['verified-resources'].emails['verification-code'].request.$post(args, options),
      )
    },
  })
}

export function createPostV2VerifiedResourcesEmailsVerificationCodeRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VerifiedResourcesEmailsVerificationCodeRequestMutationOptions<
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

export function getPostV2VerifiedResourcesPhonesVerificationCodeRequestMutationKey() {
  return ['v2', '/v2/verified-resources/phones/verification-code/request', 'POST'] as const
}

export function getPostV2VerifiedResourcesPhonesVerificationCodeRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2VerifiedResourcesPhonesVerificationCodeRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['verified-resources'].phones['verification-code'].request.$post(args, options),
      )
    },
  })
}

export function createPostV2VerifiedResourcesPhonesVerificationCodeRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VerifiedResourcesPhonesVerificationCodeRequestMutationOptions<
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

export function getPostV2VerifiedResourcesEmailsVerificationCodeVerifyMutationKey() {
  return ['v2', '/v2/verified-resources/emails/verification-code/verify', 'POST'] as const
}

export function getPostV2VerifiedResourcesEmailsVerificationCodeVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2VerifiedResourcesEmailsVerificationCodeVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['verified-resources'].emails['verification-code'].verify.$post(args, options),
      )
    },
  })
}

export function createPostV2VerifiedResourcesEmailsVerificationCodeVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VerifiedResourcesEmailsVerificationCodeVerifyMutationOptions<
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

export function getPostV2VerifiedResourcesPhonesVerificationCodeVerifyMutationKey() {
  return ['v2', '/v2/verified-resources/phones/verification-code/verify', 'POST'] as const
}

export function getPostV2VerifiedResourcesPhonesVerificationCodeVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2VerifiedResourcesPhonesVerificationCodeVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['verified-resources'].phones['verification-code'].verify.$post(args, options),
      )
    },
  })
}

export function createPostV2VerifiedResourcesPhonesVerificationCodeVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VerifiedResourcesPhonesVerificationCodeVerifyMutationOptions<
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

export function getV2VerifiedResourcesEmailsQueryKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/emails', keyArgs] as const
}

export function getV2VerifiedResourcesEmailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VerifiedResourcesEmailsQueryKey>
  >({
    queryKey: getV2VerifiedResourcesEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['verified-resources'].emails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VerifiedResourcesEmails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['verified-resources']['emails']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VerifiedResourcesEmailsQueryKey>
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
      ...getV2VerifiedResourcesEmailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2VerifiedResourcesPhonesQueryKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/phones', keyArgs] as const
}

export function getV2VerifiedResourcesPhonesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VerifiedResourcesPhonesQueryKey>
  >({
    queryKey: getV2VerifiedResourcesPhonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['verified-resources'].phones.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VerifiedResourcesPhones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['verified-resources']['phones']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VerifiedResourcesPhonesQueryKey>
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
      ...getV2VerifiedResourcesPhonesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2VerifiedResourcesEmailsIdQueryKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/emails/:id', keyArgs] as const
}

export function getV2VerifiedResourcesEmailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VerifiedResourcesEmailsIdQueryKey>
  >({
    queryKey: getV2VerifiedResourcesEmailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['verified-resources'].emails[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VerifiedResourcesEmailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VerifiedResourcesEmailsIdQueryKey>
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
      ...getV2VerifiedResourcesEmailsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2VerifiedResourcesPhonesIdQueryKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/phones/:id', keyArgs] as const
}

export function getV2VerifiedResourcesPhonesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VerifiedResourcesPhonesIdQueryKey>
  >({
    queryKey: getV2VerifiedResourcesPhonesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['verified-resources'].phones[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VerifiedResourcesPhonesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VerifiedResourcesPhonesIdQueryKey>
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
      ...getV2VerifiedResourcesPhonesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2WebhooksQueryKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks', keyArgs] as const
}

export function getV2WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksQueryKey>
  >({
    queryKey: getV2WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2WebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2WebhooksMutationKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function getPostV2WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.webhooks.$post>) {
      return parseResponse(client.v2.webhooks.$post(args, options))
    },
  })
}

export function createPostV2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2WebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2WebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks/:webhookId', keyArgs] as const
}

export function getV2WebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
  >({
    queryKey: getV2WebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2WebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.v2.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function createDeleteV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'PATCH'] as const
}

export function getPatchV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>) {
      return parseResponse(client.v2.webhooks[':webhookId'].$patch(args, options))
    },
  })
}

export function createPatchV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
