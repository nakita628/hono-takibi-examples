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

export function getConsumerKey() {
  return ['consumer'] as const
}

export function getConsumerV1AppointmentsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.appointments.$get>,
) {
  return ['consumer', '/consumer/v1/appointments', args] as const
}

export function getConsumerV1AppointmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.appointments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1AppointmentsQueryKey>
  >({
    queryKey: getConsumerV1AppointmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.appointments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1Appointments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.appointments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1AppointmentsQueryKey>
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
      ...getConsumerV1AppointmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostConsumerV1Appointments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostConsumerV1AppointmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConsumerV1AppointmentsBookingfieldsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>,
) {
  return ['consumer', '/consumer/v1/appointments/bookingfields', args] as const
}

export function getConsumerV1AppointmentsBookingfieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1AppointmentsBookingfieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.appointments.bookingfields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1AppointmentsBookingfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1AppointmentsBookingfieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1AppointmentsCustomfieldsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>,
) {
  return ['consumer', '/consumer/v1/appointments/customfields', args] as const
}

export function getConsumerV1AppointmentsCustomfieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1AppointmentsCustomfieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.appointments.customfields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1AppointmentsCustomfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1AppointmentsCustomfieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1AppointmentsIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/appointments/:id', args] as const
}

export function getConsumerV1AppointmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1AppointmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.appointments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1AppointmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1AppointmentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteConsumerV1AppointmentsId<
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
                Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteConsumerV1AppointmentsIdMutationOptions<
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

export function createPutConsumerV1AppointmentsIdBook<
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
                Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>,
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
    const mutationDefaults = getPutConsumerV1AppointmentsIdBookMutationOptions<
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

export function createPutConsumerV1AppointmentsIdCancel<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>,
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
    const mutationDefaults = getPutConsumerV1AppointmentsIdCancelMutationOptions<
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

export function createPutConsumerV1AppointmentsIdConfirm<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>,
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
    const mutationDefaults = getPutConsumerV1AppointmentsIdConfirmMutationOptions<
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

export function createPutConsumerV1AppointmentsIdNoshow<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>,
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
    const mutationDefaults = getPutConsumerV1AppointmentsIdNoshowMutationOptions<
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

export function createPutConsumerV1AppointmentsIdReschedule<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>,
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
    const mutationDefaults = getPutConsumerV1AppointmentsIdRescheduleMutationOptions<
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

export function createPutConsumerV1AppointmentsIdReserve<
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
                  ReturnType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>,
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
    const mutationDefaults = getPutConsumerV1AppointmentsIdReserveMutationOptions<
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

export function getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
  >,
) {
  return ['consumer', '/consumer/v1/availability/:serviceId/:startDate/:endDate', args] as const
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateQueryOptions<
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
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1AvailabilityServiceIdStartDateEndDate<
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
  args: () => InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateQueryKey>
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
      ...getConsumerV1AvailabilityServiceIdStartDateEndDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
  >,
) {
  return [
    'consumer',
    '/consumer/v1/availability/:serviceId/:startDate/:endDate/days',
    args,
  ] as const
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryOptions<
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
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].days.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1AvailabilityServiceIdStartDateEndDateDays<
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
  args: () => InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryKey>
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
      ...getConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
  >,
) {
  return [
    'consumer',
    '/consumer/v1/availability/:serviceId/:startDate/:endDate/unavailable',
    args,
  ] as const
}

export function getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryOptions<
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
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].unavailable.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable<
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
  args: () => InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
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
                    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryKey>
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
      ...getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1CustomersQueryKey(
  args: InferRequestType<typeof client.consumer.v1.customers.$get>,
) {
  return ['consumer', '/consumer/v1/customers', args] as const
}

export function getConsumerV1CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.customers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersQueryKey>
  >({
    queryKey: getConsumerV1CustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConsumerV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.customers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1CustomersQueryKey>
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
    return { ...getConsumerV1CustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostConsumerV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.consumer.v1.customers.$post>,
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
    const mutationDefaults = getPostConsumerV1CustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConsumerV1CustomersBookingfieldsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>,
) {
  return ['consumer', '/consumer/v1/customers/bookingfields', args] as const
}

export function getConsumerV1CustomersBookingfieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1CustomersBookingfieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.customers.bookingfields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1CustomersBookingfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1CustomersBookingfieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1CustomersCountriesQueryKey() {
  return ['consumer', '/consumer/v1/customers/countries'] as const
}

export function getConsumerV1CustomersCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1CustomersCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.customers.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1CustomersCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1CustomersCountriesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1CustomersCustomfieldsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.customers.customfields.$get>,
) {
  return ['consumer', '/consumer/v1/customers/customfields', args] as const
}

export function getConsumerV1CustomersCustomfieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.customers.customfields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1CustomersCustomfieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.customers.customfields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1CustomersCustomfields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.customers.customfields.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1CustomersCustomfieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1CustomersStatesQueryKey(
  args: InferRequestType<typeof client.consumer.v1.customers.states.$get>,
) {
  return ['consumer', '/consumer/v1/customers/states', args] as const
}

export function getConsumerV1CustomersStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.customers.states.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1CustomersStatesQueryKey>
  >({
    queryKey: getConsumerV1CustomersStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.customers.states.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1CustomersStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.customers.states.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1CustomersStatesQueryKey>
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
      ...getConsumerV1CustomersStatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1CustomersIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/customers/:id', args] as const
}

export function getConsumerV1CustomersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1CustomersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.customers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1CustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1CustomersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutConsumerV1CustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutConsumerV1CustomersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteConsumerV1CustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteConsumerV1CustomersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConsumerV1LocationsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.locations.$get>,
) {
  return ['consumer', '/consumer/v1/locations', args] as const
}

export function getConsumerV1LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.locations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1LocationsQueryKey>
  >({
    queryKey: getConsumerV1LocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConsumerV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.locations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1LocationsQueryKey>
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
    return { ...getConsumerV1LocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConsumerV1LocationsIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/locations/:id', args] as const
}

export function getConsumerV1LocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1LocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.locations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1LocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1LocationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ResourcegroupsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.resourcegroups.$get>,
) {
  return ['consumer', '/consumer/v1/resourcegroups', args] as const
}

export function getConsumerV1ResourcegroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.resourcegroups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ResourcegroupsQueryKey>
  >({
    queryKey: getConsumerV1ResourcegroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.resourcegroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1Resourcegroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.resourcegroups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1ResourcegroupsQueryKey>
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
      ...getConsumerV1ResourcegroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ResourcegroupsIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/resourcegroups/:id', args] as const
}

export function getConsumerV1ResourcegroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ResourcegroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.resourcegroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ResourcegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1ResourcegroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ResourcesQueryKey(
  args: InferRequestType<typeof client.consumer.v1.resources.$get>,
) {
  return ['consumer', '/consumer/v1/resources', args] as const
}

export function getConsumerV1ResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.resources.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ResourcesQueryKey>
  >({
    queryKey: getConsumerV1ResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConsumerV1Resources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.resources.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1ResourcesQueryKey>
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
    return { ...getConsumerV1ResourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConsumerV1ResourcesIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/resources/:id', args] as const
}

export function getConsumerV1ResourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ResourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.resources[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ResourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1ResourcesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ResourcesIdServicesQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>,
) {
  return ['consumer', '/consumer/v1/resources/:id/services', args] as const
}

export function getConsumerV1ResourcesIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ResourcesIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.resources[':id'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ResourcesIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getConsumerV1ResourcesIdServicesQueryKey>
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
      ...getConsumerV1ResourcesIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ServicegroupsQueryKey(
  args: InferRequestType<typeof client.consumer.v1.servicegroups.$get>,
) {
  return ['consumer', '/consumer/v1/servicegroups', args] as const
}

export function getConsumerV1ServicegroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumer.v1.servicegroups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicegroupsQueryKey>
  >({
    queryKey: getConsumerV1ServicegroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.servicegroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1Servicegroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.servicegroups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1ServicegroupsQueryKey>
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
      ...getConsumerV1ServicegroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ServicegroupsIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/servicegroups/:id', args] as const
}

export function getConsumerV1ServicegroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ServicegroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.servicegroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ServicegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1ServicegroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ServicesQueryKey(
  args: InferRequestType<typeof client.consumer.v1.services.$get>,
) {
  return ['consumer', '/consumer/v1/services', args] as const
}

export function getConsumerV1ServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.consumer.v1.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerV1ServicesQueryKey>
  >({
    queryKey: getConsumerV1ServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConsumerV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumer.v1.services.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerV1ServicesQueryKey>
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
    return { ...getConsumerV1ServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConsumerV1ServicesAllocationsIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/allocations/:id', args] as const
}

export function getConsumerV1ServicesAllocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ServicesAllocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.services.allocations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ServicesAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1ServicesAllocationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ServicesIdQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/:id', args] as const
}

export function getConsumerV1ServicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ServicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.services[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getConsumerV1ServicesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ServicesIdAllocationsQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/:id/allocations', args] as const
}

export function getConsumerV1ServicesIdAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ServicesIdAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.services[':id'].allocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ServicesIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getConsumerV1ServicesIdAllocationsQueryKey>
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
      ...getConsumerV1ServicesIdAllocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConsumerV1ServicesIdResourcesQueryKey(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/:id/resources', args] as const
}

export function getConsumerV1ServicesIdResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumerV1ServicesIdResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumer.v1.services[':id'].resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerV1ServicesIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getConsumerV1ServicesIdResourcesQueryKey>
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
      ...getConsumerV1ServicesIdResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
