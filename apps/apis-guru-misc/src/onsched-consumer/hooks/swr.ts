import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConsumerKey() {
  return ['consumer'] as const
}

export function getGetConsumerV1AppointmentsKey(
  args: InferRequestType<typeof client.consumer.v1.appointments.$get>,
) {
  return ['consumer', '/consumer/v1/appointments', args] as const
}

export function useGetConsumerV1Appointments<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.appointments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
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
        ? getGetConsumerV1AppointmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.appointments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1Appointments<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.appointments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
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
        ? getGetConsumerV1AppointmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.appointments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConsumerV1AppointmentsKey() {
  return ['consumer', '/consumer/v1/appointments', 'POST'] as const
}

export function usePostConsumerV1Appointments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.appointments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.consumer.v1.appointments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumerV1AppointmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.consumer.v1.appointments.$post> },
      ) => parseResponse(client.consumer.v1.appointments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumerV1AppointmentsBookingfieldsKey(
  args: InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>,
) {
  return ['consumer', '/consumer/v1/appointments/bookingfields', args] as const
}

export function useGetConsumerV1AppointmentsBookingfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
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
        ? getGetConsumerV1AppointmentsBookingfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.appointments.bookingfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1AppointmentsBookingfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
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
        ? getGetConsumerV1AppointmentsBookingfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.bookingfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.appointments.bookingfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1AppointmentsCustomfieldsKey(
  args: InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>,
) {
  return ['consumer', '/consumer/v1/appointments/customfields', args] as const
}

export function useGetConsumerV1AppointmentsCustomfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
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
        ? getGetConsumerV1AppointmentsCustomfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.appointments.customfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1AppointmentsCustomfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
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
        ? getGetConsumerV1AppointmentsCustomfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.appointments.customfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.appointments.customfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1AppointmentsIdKey(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/appointments/:id', args] as const
}

export function useGetConsumerV1AppointmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
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
        ? getGetConsumerV1AppointmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.appointments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1AppointmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
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
        ? getGetConsumerV1AppointmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.appointments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteConsumerV1AppointmentsIdKey() {
  return ['consumer', '/consumer/v1/appointments/:id', 'DELETE'] as const
}

export function useDeleteConsumerV1AppointmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConsumerV1AppointmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$delete']> },
      ) => parseResponse(client.consumer.v1.appointments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConsumerV1AppointmentsIdBookKey() {
  return ['consumer', '/consumer/v1/appointments/:id/book', 'PUT'] as const
}

export function usePutConsumerV1AppointmentsIdBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumerV1AppointmentsIdBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>
        },
      ) => parseResponse(client.consumer.v1.appointments[':id'].book.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConsumerV1AppointmentsIdCancelKey() {
  return ['consumer', '/consumer/v1/appointments/:id/cancel', 'PUT'] as const
}

export function usePutConsumerV1AppointmentsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumerV1AppointmentsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>
        },
      ) => parseResponse(client.consumer.v1.appointments[':id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConsumerV1AppointmentsIdConfirmKey() {
  return ['consumer', '/consumer/v1/appointments/:id/confirm', 'PUT'] as const
}

export function usePutConsumerV1AppointmentsIdConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumerV1AppointmentsIdConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>
        },
      ) => parseResponse(client.consumer.v1.appointments[':id'].confirm.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConsumerV1AppointmentsIdNoshowKey() {
  return ['consumer', '/consumer/v1/appointments/:id/noshow', 'PUT'] as const
}

export function usePutConsumerV1AppointmentsIdNoshow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumerV1AppointmentsIdNoshowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>
        },
      ) => parseResponse(client.consumer.v1.appointments[':id'].noshow.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConsumerV1AppointmentsIdRescheduleKey() {
  return ['consumer', '/consumer/v1/appointments/:id/reschedule', 'PUT'] as const
}

export function usePutConsumerV1AppointmentsIdReschedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumerV1AppointmentsIdRescheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']
          >
        },
      ) =>
        parseResponse(client.consumer.v1.appointments[':id'].reschedule.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConsumerV1AppointmentsIdReserveKey() {
  return ['consumer', '/consumer/v1/appointments/:id/reserve', 'PUT'] as const
}

export function usePutConsumerV1AppointmentsIdReserve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumerV1AppointmentsIdReserveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>
        },
      ) => parseResponse(client.consumer.v1.appointments[':id'].reserve.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumerV1AvailabilityServiceIdStartDateEndDateKey(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
  >,
) {
  return ['consumer', '/consumer/v1/availability/:serviceId/:startDate/:endDate', args] as const
}

export function useGetConsumerV1AvailabilityServiceIdStartDateEndDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConsumerV1AvailabilityServiceIdStartDateEndDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1AvailabilityServiceIdStartDateEndDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConsumerV1AvailabilityServiceIdStartDateEndDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1AvailabilityServiceIdStartDateEndDateDaysKey(
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

export function useGetConsumerV1AvailabilityServiceIdStartDateEndDateDays<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConsumerV1AvailabilityServiceIdStartDateEndDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].days.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1AvailabilityServiceIdStartDateEndDateDays<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConsumerV1AvailabilityServiceIdStartDateEndDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].days.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableKey(
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

export function useGetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].unavailable.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].unavailable.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1CustomersKey(
  args: InferRequestType<typeof client.consumer.v1.customers.$get>,
) {
  return ['consumer', '/consumer/v1/customers', args] as const
}

export function useGetConsumerV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
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
        ? getGetConsumerV1CustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
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
        ? getGetConsumerV1CustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConsumerV1CustomersKey() {
  return ['consumer', '/consumer/v1/customers', 'POST'] as const
}

export function usePostConsumerV1Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.consumer.v1.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumerV1CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.consumer.v1.customers.$post> },
      ) => parseResponse(client.consumer.v1.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumerV1CustomersBookingfieldsKey(
  args: InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>,
) {
  return ['consumer', '/consumer/v1/customers/bookingfields', args] as const
}

export function useGetConsumerV1CustomersBookingfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
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
        ? getGetConsumerV1CustomersBookingfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.customers.bookingfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1CustomersBookingfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
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
        ? getGetConsumerV1CustomersBookingfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.bookingfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.customers.bookingfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1CustomersCountriesKey() {
  return ['consumer', '/consumer/v1/customers/countries'] as const
}

export function useGetConsumerV1CustomersCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumerV1CustomersCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.customers.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1CustomersCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumerV1CustomersCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.countries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.customers.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1CustomersCustomfieldsKey(
  args: InferRequestType<typeof client.consumer.v1.customers.customfields.$get>,
) {
  return ['consumer', '/consumer/v1/customers/customfields', args] as const
}

export function useGetConsumerV1CustomersCustomfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.customfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
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
        ? getGetConsumerV1CustomersCustomfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.customers.customfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1CustomersCustomfields<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.customfields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
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
        ? getGetConsumerV1CustomersCustomfieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.consumer.v1.customers.customfields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.customers.customfields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1CustomersStatesKey(
  args: InferRequestType<typeof client.consumer.v1.customers.states.$get>,
) {
  return ['consumer', '/consumer/v1/customers/states', args] as const
}

export function useGetConsumerV1CustomersStates<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.states.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
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
        ? getGetConsumerV1CustomersStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.customers.states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1CustomersStates<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.customers.states.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
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
        ? getGetConsumerV1CustomersStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.customers.states.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.customers.states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1CustomersIdKey(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/customers/:id', args] as const
}

export function useGetConsumerV1CustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
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
        ? getGetConsumerV1CustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1CustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
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
        ? getGetConsumerV1CustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConsumerV1CustomersIdKey() {
  return ['consumer', '/consumer/v1/customers/:id', 'PUT'] as const
}

export function usePutConsumerV1CustomersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.customers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumerV1CustomersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$put']> },
      ) => parseResponse(client.consumer.v1.customers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConsumerV1CustomersIdKey() {
  return ['consumer', '/consumer/v1/customers/:id', 'DELETE'] as const
}

export function useDeleteConsumerV1CustomersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumer.v1.customers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumer.v1.customers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConsumerV1CustomersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$delete']> },
      ) => parseResponse(client.consumer.v1.customers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumerV1LocationsKey(
  args: InferRequestType<typeof client.consumer.v1.locations.$get>,
) {
  return ['consumer', '/consumer/v1/locations', args] as const
}

export function useGetConsumerV1Locations<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
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
        ? getGetConsumerV1LocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1Locations<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
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
        ? getGetConsumerV1LocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.locations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1LocationsIdKey(
  args: InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/locations/:id', args] as const
}

export function useGetConsumerV1LocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
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
        ? getGetConsumerV1LocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1LocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
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
        ? getGetConsumerV1LocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.locations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ResourcegroupsKey(
  args: InferRequestType<typeof client.consumer.v1.resourcegroups.$get>,
) {
  return ['consumer', '/consumer/v1/resourcegroups', args] as const
}

export function useGetConsumerV1Resourcegroups<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.resourcegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
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
        ? getGetConsumerV1ResourcegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resourcegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1Resourcegroups<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.resourcegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
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
        ? getGetConsumerV1ResourcegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resourcegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resourcegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ResourcegroupsIdKey(
  args: InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/resourcegroups/:id', args] as const
}

export function useGetConsumerV1ResourcegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
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
        ? getGetConsumerV1ResourcegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resourcegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ResourcegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
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
        ? getGetConsumerV1ResourcegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resourcegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ResourcesKey(
  args: InferRequestType<typeof client.consumer.v1.resources.$get>,
) {
  return ['consumer', '/consumer/v1/resources', args] as const
}

export function useGetConsumerV1Resources<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
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
        ? getGetConsumerV1ResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1Resources<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
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
        ? getGetConsumerV1ResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ResourcesIdKey(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/resources/:id', args] as const
}

export function useGetConsumerV1ResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
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
        ? getGetConsumerV1ResourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
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
        ? getGetConsumerV1ResourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.resources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ResourcesIdServicesKey(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>,
) {
  return ['consumer', '/consumer/v1/resources/:id/services', args] as const
}

export function useGetConsumerV1ResourcesIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
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
        ? getGetConsumerV1ResourcesIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.resources[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ResourcesIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
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
        ? getGetConsumerV1ResourcesIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.resources[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ServicegroupsKey(
  args: InferRequestType<typeof client.consumer.v1.servicegroups.$get>,
) {
  return ['consumer', '/consumer/v1/servicegroups', args] as const
}

export function useGetConsumerV1Servicegroups<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.servicegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
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
        ? getGetConsumerV1ServicegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.servicegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1Servicegroups<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.servicegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
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
        ? getGetConsumerV1ServicegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.servicegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.servicegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ServicegroupsIdKey(
  args: InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/servicegroups/:id', args] as const
}

export function useGetConsumerV1ServicegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
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
        ? getGetConsumerV1ServicegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.servicegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ServicegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
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
        ? getGetConsumerV1ServicegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.servicegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ServicesKey(
  args: InferRequestType<typeof client.consumer.v1.services.$get>,
) {
  return ['consumer', '/consumer/v1/services', args] as const
}

export function useGetConsumerV1Services<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>
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
        ? getGetConsumerV1ServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1Services<TError = unknown>(
  args: InferRequestType<typeof client.consumer.v1.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>
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
        ? getGetConsumerV1ServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.consumer.v1.services.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ServicesAllocationsIdKey(
  args: InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/allocations/:id', args] as const
}

export function useGetConsumerV1ServicesAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
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
        ? getGetConsumerV1ServicesAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.services.allocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ServicesAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
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
        ? getGetConsumerV1ServicesAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.services.allocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ServicesIdKey(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/:id', args] as const
}

export function useGetConsumerV1ServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>
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
        ? getGetConsumerV1ServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>
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
        ? getGetConsumerV1ServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumer.v1.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ServicesIdAllocationsKey(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/:id/allocations', args] as const
}

export function useGetConsumerV1ServicesIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
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
        ? getGetConsumerV1ServicesIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.services[':id'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ServicesIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
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
        ? getGetConsumerV1ServicesIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.services[':id'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerV1ServicesIdResourcesKey(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>,
) {
  return ['consumer', '/consumer/v1/services/:id/resources', args] as const
}

export function useGetConsumerV1ServicesIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
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
        ? getGetConsumerV1ServicesIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.services[':id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerV1ServicesIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
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
        ? getGetConsumerV1ServicesIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumer.v1.services[':id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
