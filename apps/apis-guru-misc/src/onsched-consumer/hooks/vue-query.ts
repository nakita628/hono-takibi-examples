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

export function getConsumerKey() {
  return ['consumer'] as const
}

export function getConsumerV1AppointmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.appointments.$get>>,
) {
  return ['consumer', '/consumer/v1/appointments', toValue(args)] as const
}

export function getConsumerV1AppointmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.appointments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1AppointmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.appointments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1Appointments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.appointments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
            >
          >,
          ReturnType<typeof getConsumerV1AppointmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AppointmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1AppointmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.appointments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConsumerV1AppointmentsMutationKey() {
  return ['consumer', '/consumer/v1/appointments', 'POST'] as const
}

export function getPostConsumerV1AppointmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.consumer.v1.appointments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConsumerV1AppointmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.consumer.v1.appointments.$post>) {
      return parseResponse(client.consumer.v1.appointments.$post(args, options))
    },
  })
}

export function usePostConsumerV1Appointments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.appointments.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.consumer.v1.appointments.$post>,
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
  const mutationDefaults = getPostConsumerV1AppointmentsMutationOptions<TError, TOnMutateResult>(
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

export function getConsumerV1AppointmentsBookingfieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>
  >,
) {
  return ['consumer', '/consumer/v1/appointments/bookingfields', toValue(args)] as const
}

export function getConsumerV1AppointmentsBookingfieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1AppointmentsBookingfieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.appointments.bookingfields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1AppointmentsBookingfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1AppointmentsBookingfieldsQueryKey>
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
          Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AppointmentsBookingfieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1AppointmentsBookingfieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.appointments.bookingfields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1AppointmentsCustomfieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>
  >,
) {
  return ['consumer', '/consumer/v1/appointments/customfields', toValue(args)] as const
}

export function getConsumerV1AppointmentsCustomfieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1AppointmentsCustomfieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.appointments.customfields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1AppointmentsCustomfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1AppointmentsCustomfieldsQueryKey>
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
          Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AppointmentsCustomfieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1AppointmentsCustomfieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.appointments.customfields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1AppointmentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>>,
) {
  return ['consumer', '/consumer/v1/appointments/:id', toValue(args)] as const
}

export function getConsumerV1AppointmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1AppointmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.appointments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1AppointmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1AppointmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AppointmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1AppointmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.appointments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteConsumerV1AppointmentsIdMutationKey() {
  return ['consumer', '/consumer/v1/appointments/:id', 'DELETE'] as const
}

export function getDeleteConsumerV1AppointmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConsumerV1AppointmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$delete']>,
    ) {
      return parseResponse(client.consumer.v1.appointments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConsumerV1AppointmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteConsumerV1AppointmentsIdMutationOptions<
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

export function getPutConsumerV1AppointmentsIdBookMutationKey() {
  return ['consumer', '/consumer/v1/appointments/:id/book', 'PUT'] as const
}

export function getPutConsumerV1AppointmentsIdBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumerV1AppointmentsIdBookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>,
    ) {
      return parseResponse(client.consumer.v1.appointments[':id'].book.$put(args, options))
    },
  })
}

export function usePutConsumerV1AppointmentsIdBook<
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
                Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>,
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
  const mutationDefaults = getPutConsumerV1AppointmentsIdBookMutationOptions<
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

export function getPutConsumerV1AppointmentsIdCancelMutationKey() {
  return ['consumer', '/consumer/v1/appointments/:id/cancel', 'PUT'] as const
}

export function getPutConsumerV1AppointmentsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumerV1AppointmentsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>,
    ) {
      return parseResponse(client.consumer.v1.appointments[':id'].cancel.$put(args, options))
    },
  })
}

export function usePutConsumerV1AppointmentsIdCancel<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>,
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
  const mutationDefaults = getPutConsumerV1AppointmentsIdCancelMutationOptions<
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

export function getPutConsumerV1AppointmentsIdConfirmMutationKey() {
  return ['consumer', '/consumer/v1/appointments/:id/confirm', 'PUT'] as const
}

export function getPutConsumerV1AppointmentsIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumerV1AppointmentsIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>,
    ) {
      return parseResponse(client.consumer.v1.appointments[':id'].confirm.$put(args, options))
    },
  })
}

export function usePutConsumerV1AppointmentsIdConfirm<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>,
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
  const mutationDefaults = getPutConsumerV1AppointmentsIdConfirmMutationOptions<
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

export function getPutConsumerV1AppointmentsIdNoshowMutationKey() {
  return ['consumer', '/consumer/v1/appointments/:id/noshow', 'PUT'] as const
}

export function getPutConsumerV1AppointmentsIdNoshowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumerV1AppointmentsIdNoshowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>,
    ) {
      return parseResponse(client.consumer.v1.appointments[':id'].noshow.$put(args, options))
    },
  })
}

export function usePutConsumerV1AppointmentsIdNoshow<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>,
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
  const mutationDefaults = getPutConsumerV1AppointmentsIdNoshowMutationOptions<
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

export function getPutConsumerV1AppointmentsIdRescheduleMutationKey() {
  return ['consumer', '/consumer/v1/appointments/:id/reschedule', 'PUT'] as const
}

export function getPutConsumerV1AppointmentsIdRescheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumerV1AppointmentsIdRescheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>,
    ) {
      return parseResponse(client.consumer.v1.appointments[':id'].reschedule.$put(args, options))
    },
  })
}

export function usePutConsumerV1AppointmentsIdReschedule<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>,
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
  const mutationDefaults = getPutConsumerV1AppointmentsIdRescheduleMutationOptions<
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

export function getPutConsumerV1AppointmentsIdReserveMutationKey() {
  return ['consumer', '/consumer/v1/appointments/:id/reserve', 'PUT'] as const
}

export function getPutConsumerV1AppointmentsIdReserveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumerV1AppointmentsIdReserveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>,
    ) {
      return parseResponse(client.consumer.v1.appointments[':id'].reserve.$put(args, options))
    },
  })
}

export function usePutConsumerV1AppointmentsIdReserve<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>,
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
  const mutationDefaults = getPutConsumerV1AppointmentsIdReserveMutationOptions<
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

export function getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
    >
  >,
) {
  return [
    'consumer',
    '/consumer/v1/availability/:serviceId/:startDate/:endDate',
    toValue(args),
  ] as const
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useConsumerV1AvailabilityServiceIdStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
    >
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey>
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
            ReturnType<
              (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
    >
  >,
) {
  return [
    'consumer',
    '/consumer/v1/availability/:serviceId/:startDate/:endDate/days',
    toValue(args),
  ] as const
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].days.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useConsumerV1AvailabilityServiceIdStartDateEndDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
    >
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey>
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
            ReturnType<
              (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].days.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
    >
  >,
) {
  return [
    'consumer',
    '/consumer/v1/availability/:serviceId/:startDate/:endDate/unavailable',
    toValue(args),
  ] as const
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].unavailable.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
    >
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey>
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
            ReturnType<
              (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].unavailable.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1CustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.$get>>,
) {
  return ['consumer', '/consumer/v1/customers', toValue(args)] as const
}

export function getConsumerV1CustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1CustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
            >
          >,
          ReturnType<typeof getConsumerV1CustomersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1CustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConsumerV1CustomersMutationKey() {
  return ['consumer', '/consumer/v1/customers', 'POST'] as const
}

export function getPostConsumerV1CustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.consumer.v1.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConsumerV1CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.consumer.v1.customers.$post>) {
      return parseResponse(client.consumer.v1.customers.$post(args, options))
    },
  })
}

export function usePostConsumerV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.consumer.v1.customers.$post>,
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
  const mutationDefaults = getPostConsumerV1CustomersMutationOptions<TError, TOnMutateResult>(
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

export function getConsumerV1CustomersBookingfieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>>,
) {
  return ['consumer', '/consumer/v1/customers/bookingfields', toValue(args)] as const
}

export function getConsumerV1CustomersBookingfieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1CustomersBookingfieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.customers.bookingfields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1CustomersBookingfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1CustomersBookingfieldsQueryKey>
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
          Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersBookingfieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1CustomersBookingfieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.customers.bookingfields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1CustomersCountriesQueryKey() {
  return ['consumer', '/consumer/v1/customers/countries'] as const
}

export function getConsumerV1CustomersCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConsumerV1CustomersCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.customers.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1CustomersCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1CustomersCountriesQueryKey>
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
          Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConsumerV1CustomersCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.customers.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1CustomersCustomfieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.customfields.$get>>,
) {
  return ['consumer', '/consumer/v1/customers/customfields', toValue(args)] as const
}

export function getConsumerV1CustomersCustomfieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.customfields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1CustomersCustomfieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.customers.customfields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1CustomersCustomfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.customfields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1CustomersCustomfieldsQueryKey>
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
          Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersCustomfieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1CustomersCustomfieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.customers.customfields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1CustomersStatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.states.$get>>,
) {
  return ['consumer', '/consumer/v1/customers/states', toValue(args)] as const
}

export function getConsumerV1CustomersStatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.states.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1CustomersStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.customers.states.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1CustomersStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.customers.states.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1CustomersStatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1CustomersStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.customers.states.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1CustomersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>>,
) {
  return ['consumer', '/consumer/v1/customers/:id', toValue(args)] as const
}

export function getConsumerV1CustomersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1CustomersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.customers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1CustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1CustomersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1CustomersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.customers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConsumerV1CustomersIdMutationKey() {
  return ['consumer', '/consumer/v1/customers/:id', 'PUT'] as const
}

export function getPutConsumerV1CustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.customers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumerV1CustomersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$put']>) {
      return parseResponse(client.consumer.v1.customers[':id'].$put(args, options))
    },
  })
}

export function usePutConsumerV1CustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.customers)[':id']['$put']>,
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
  const mutationDefaults = getPutConsumerV1CustomersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConsumerV1CustomersIdMutationKey() {
  return ['consumer', '/consumer/v1/customers/:id', 'DELETE'] as const
}

export function getDeleteConsumerV1CustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumer.v1.customers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConsumerV1CustomersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$delete']>,
    ) {
      return parseResponse(client.consumer.v1.customers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConsumerV1CustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.customers)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteConsumerV1CustomersIdMutationOptions<TError, TOnMutateResult>(
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

export function getConsumerV1LocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.locations.$get>>,
) {
  return ['consumer', '/consumer/v1/locations', toValue(args)] as const
}

export function getConsumerV1LocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1LocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
            >
          >,
          ReturnType<typeof getConsumerV1LocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1LocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1LocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>>,
) {
  return ['consumer', '/consumer/v1/locations/:id', toValue(args)] as const
}

export function getConsumerV1LocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1LocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.locations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1LocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1LocationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1LocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1LocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.locations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ResourcegroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.resourcegroups.$get>>,
) {
  return ['consumer', '/consumer/v1/resourcegroups', toValue(args)] as const
}

export function getConsumerV1ResourcegroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.resourcegroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ResourcegroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.resourcegroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1Resourcegroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.resourcegroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1ResourcegroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ResourcegroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ResourcegroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.resourcegroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ResourcegroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>
  >,
) {
  return ['consumer', '/consumer/v1/resourcegroups/:id', toValue(args)] as const
}

export function getConsumerV1ResourcegroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ResourcegroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.resourcegroups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ResourcegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1ResourcegroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ResourcegroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ResourcegroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.resourcegroups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.resources.$get>>,
) {
  return ['consumer', '/consumer/v1/resources', toValue(args)] as const
}

export function getConsumerV1ResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1Resources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
            >
          >,
          ReturnType<typeof getConsumerV1ResourcesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ResourcesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>>,
) {
  return ['consumer', '/consumer/v1/resources/:id', toValue(args)] as const
}

export function getConsumerV1ResourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ResourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.resources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ResourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1ResourcesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ResourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ResourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.resources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ResourcesIdServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>
  >,
) {
  return ['consumer', '/consumer/v1/resources/:id/services', toValue(args)] as const
}

export function getConsumerV1ResourcesIdServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ResourcesIdServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.resources[':id'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ResourcesIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>
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
                  ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConsumerV1ResourcesIdServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ResourcesIdServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ResourcesIdServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.resources[':id'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ServicegroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.servicegroups.$get>>,
) {
  return ['consumer', '/consumer/v1/servicegroups', toValue(args)] as const
}

export function getConsumerV1ServicegroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.servicegroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ServicegroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.servicegroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1Servicegroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.servicegroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1ServicegroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicegroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ServicegroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.servicegroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ServicegroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>
  >,
) {
  return ['consumer', '/consumer/v1/servicegroups/:id', toValue(args)] as const
}

export function getConsumerV1ServicegroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ServicegroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.servicegroups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ServicegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1ServicegroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicegroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ServicegroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.servicegroups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.services.$get>>,
) {
  return ['consumer', '/consumer/v1/services', toValue(args)] as const
}

export function getConsumerV1ServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumer.v1.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>
            >
          >,
          ReturnType<typeof getConsumerV1ServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ServicesAllocationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>
  >,
) {
  return ['consumer', '/consumer/v1/services/allocations/:id', toValue(args)] as const
}

export function getConsumerV1ServicesAllocationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ServicesAllocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.services.allocations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ServicesAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1ServicesAllocationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicesAllocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ServicesAllocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.services.allocations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ServicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>>,
) {
  return ['consumer', '/consumer/v1/services/:id', toValue(args)] as const
}

export function getConsumerV1ServicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.services[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumerV1ServicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.services[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ServicesIdAllocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>
  >,
) {
  return ['consumer', '/consumer/v1/services/:id/allocations', toValue(args)] as const
}

export function getConsumerV1ServicesIdAllocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ServicesIdAllocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.services[':id'].allocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ServicesIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>
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
                  ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConsumerV1ServicesIdAllocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicesIdAllocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ServicesIdAllocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.services[':id'].allocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerV1ServicesIdResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>
  >,
) {
  return ['consumer', '/consumer/v1/services/:id/resources', toValue(args)] as const
}

export function getConsumerV1ServicesIdResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerV1ServicesIdResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumer.v1.services[':id'].resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerV1ServicesIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>
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
                  ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConsumerV1ServicesIdResourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicesIdResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerV1ServicesIdResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumer.v1.services[':id'].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
