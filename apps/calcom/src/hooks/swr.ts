import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ApiKeysRefreshKey() {
  return ['v2', '/v2/api-keys/refresh', 'POST'] as const
}

export function usePostV2ApiKeysRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['api-keys']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['api-keys']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApiKeysRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['api-keys']['refresh']['$post']> },
      ) => parseResponse(client.v2['api-keys'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BookingsKey(args: InferRequestType<typeof client.v2.bookings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings', keyArgs] as const
}

export function useGetV2Bookings<TError = unknown>(
  args: InferRequestType<typeof client.v2.bookings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BookingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bookings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Bookings<TError = unknown>(
  args: InferRequestType<typeof client.v2.bookings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BookingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bookings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BookingsKey() {
  return ['v2', '/v2/bookings', 'POST'] as const
}

export function usePostV2Bookings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.bookings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.bookings.$post> }) =>
        parseResponse(client.v2.bookings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BookingsBySeatSeatUidKey(
  args: InferRequestType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/by-seat/:seatUid', keyArgs] as const
}

export function useGetV2BookingsBySeatSeatUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
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
        ? getGetV2BookingsBySeatSeatUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings['by-seat'][':seatUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBySeatSeatUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
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
        ? getGetV2BookingsBySeatSeatUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings['by-seat'][':seatUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid', keyArgs] as const
}

export function useGetV2BookingsBookingUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>
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
        ? getGetV2BookingsBookingUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bookings[':bookingUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>
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
        ? getGetV2BookingsBookingUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bookings[':bookingUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidRecordingsKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/recordings', keyArgs] as const
}

export function useGetV2BookingsBookingUidRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
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
        ? getGetV2BookingsBookingUidRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUidRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
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
        ? getGetV2BookingsBookingUidRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidTranscriptsKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/transcripts', keyArgs] as const
}

export function useGetV2BookingsBookingUidTranscripts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
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
        ? getGetV2BookingsBookingUidTranscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].transcripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUidTranscripts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
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
        ? getGetV2BookingsBookingUidTranscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].transcripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidRescheduleKey() {
  return ['v2', '/v2/bookings/:bookingUid/reschedule', 'POST'] as const
}

export function usePostV2BookingsBookingUidReschedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidRescheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>
        },
      ) => parseResponse(client.v2.bookings[':bookingUid'].reschedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidCancelKey() {
  return ['v2', '/v2/bookings/:bookingUid/cancel', 'POST'] as const
}

export function usePostV2BookingsBookingUidCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']> },
      ) => parseResponse(client.v2.bookings[':bookingUid'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidMarkAbsentKey() {
  return ['v2', '/v2/bookings/:bookingUid/mark-absent', 'POST'] as const
}

export function usePostV2BookingsBookingUidMarkAbsent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidMarkAbsentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>
        },
      ) =>
        parseResponse(client.v2.bookings[':bookingUid']['mark-absent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidReassignKey() {
  return ['v2', '/v2/bookings/:bookingUid/reassign', 'POST'] as const
}

export function usePostV2BookingsBookingUidReassign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidReassignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>
        },
      ) => parseResponse(client.v2.bookings[':bookingUid'].reassign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidReassignUserIdKey() {
  return ['v2', '/v2/bookings/:bookingUid/reassign/:userId', 'POST'] as const
}

export function usePostV2BookingsBookingUidReassignUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidReassignUserIdKey()
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
            (typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.bookings[':bookingUid'].reassign[':userId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidConfirmKey() {
  return ['v2', '/v2/bookings/:bookingUid/confirm', 'POST'] as const
}

export function usePostV2BookingsBookingUidConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>
        },
      ) => parseResponse(client.v2.bookings[':bookingUid'].confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidDeclineKey() {
  return ['v2', '/v2/bookings/:bookingUid/decline', 'POST'] as const
}

export function usePostV2BookingsBookingUidDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>
        },
      ) => parseResponse(client.v2.bookings[':bookingUid'].decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidCalendarLinksKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/calendar-links', keyArgs] as const
}

export function useGetV2BookingsBookingUidCalendarLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>
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
        ? getGetV2BookingsBookingUidCalendarLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bookings[':bookingUid']['calendar-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUidCalendarLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>
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
        ? getGetV2BookingsBookingUidCalendarLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bookings[':bookingUid']['calendar-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidReferencesKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/references', keyArgs] as const
}

export function useGetV2BookingsBookingUidReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
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
        ? getGetV2BookingsBookingUidReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUidReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
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
        ? getGetV2BookingsBookingUidReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidConferencingSessionsKey(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/conferencing-sessions', keyArgs] as const
}

export function useGetV2BookingsBookingUidConferencingSessions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BookingsBookingUidConferencingSessionsKey(args)
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
                (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
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
          client.v2.bookings[':bookingUid']['conferencing-sessions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUidConferencingSessions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BookingsBookingUidConferencingSessionsKey(args)
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
                (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
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
          client.v2.bookings[':bookingUid']['conferencing-sessions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2BookingsBookingUidLocationKey() {
  return ['v2', '/v2/bookings/:bookingUid/location', 'PATCH'] as const
}

export function usePatchV2BookingsBookingUidLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2BookingsBookingUidLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>
        },
      ) => parseResponse(client.v2.bookings[':bookingUid'].location.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidAttendeesKey(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/attendees', keyArgs] as const
}

export function useGetV2BookingsBookingUidAttendees<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
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
        ? getGetV2BookingsBookingUidAttendeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].attendees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUidAttendees<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
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
        ? getGetV2BookingsBookingUidAttendeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings[':bookingUid'].attendees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidAttendeesKey() {
  return ['v2', '/v2/bookings/:bookingUid/attendees', 'POST'] as const
}

export function usePostV2BookingsBookingUidAttendees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidAttendeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>
        },
      ) => parseResponse(client.v2.bookings[':bookingUid'].attendees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BookingsBookingUidAttendeesAttendeeIdKey(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/bookings/:bookingUid/attendees/:attendeeId', keyArgs] as const
}

export function useGetV2BookingsBookingUidAttendeesAttendeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BookingsBookingUidAttendeesAttendeeIdKey(args)
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
                (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
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
          client.v2.bookings[':bookingUid'].attendees[':attendeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingUidAttendeesAttendeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BookingsBookingUidAttendeesAttendeeIdKey(args)
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
                (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
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
          client.v2.bookings[':bookingUid'].attendees[':attendeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2BookingsBookingUidAttendeesAttendeeIdKey() {
  return ['v2', '/v2/bookings/:bookingUid/attendees/:attendeeId', 'DELETE'] as const
}

export function useDeleteV2BookingsBookingUidAttendeesAttendeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2BookingsBookingUidAttendeesAttendeeIdKey()
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
            (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.bookings[':bookingUid'].attendees[':attendeeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingUidGuestsKey() {
  return ['v2', '/v2/bookings/:bookingUid/guests', 'POST'] as const
}

export function usePostV2BookingsBookingUidGuests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingUidGuestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']> },
      ) => parseResponse(client.v2.bookings[':bookingUid'].guests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsConnectionsKey(
  args: InferRequestType<typeof client.v2.calendars.connections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections', keyArgs] as const
}

export function useGetV2CalendarsConnections<TError = unknown>(
  args: InferRequestType<typeof client.v2.calendars.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
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
        ? getGetV2CalendarsConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsConnections<TError = unknown>(
  args: InferRequestType<typeof client.v2.calendars.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
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
        ? getGetV2CalendarsConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarsConnectionsConnectionIdEventsKey(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections/:connectionId/events', keyArgs] as const
}

export function useGetV2CalendarsConnectionsConnectionIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CalendarsConnectionsConnectionIdEventsKey(args)
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
                (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
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
          client.v2.calendars.connections[':connectionId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsConnectionsConnectionIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CalendarsConnectionsConnectionIdEventsKey(args)
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
                (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
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
          client.v2.calendars.connections[':connectionId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2CalendarsConnectionsConnectionIdEventsKey() {
  return ['v2', '/v2/calendars/connections/:connectionId/events', 'POST'] as const
}

export function usePostV2CalendarsConnectionsConnectionIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.calendars.connections)[':connectionId']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CalendarsConnectionsConnectionIdEventsKey()
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
            (typeof client.v2.calendars.connections)[':connectionId']['events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.calendars.connections[':connectionId'].events.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsConnectionsConnectionIdEventsEventIdKey(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections/:connectionId/events/:eventId', keyArgs] as const
}

export function useGetV2CalendarsConnectionsConnectionIdEventsEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CalendarsConnectionsConnectionIdEventsEventIdKey(args)
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
                (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
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
          client.v2.calendars.connections[':connectionId'].events[':eventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsConnectionsConnectionIdEventsEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CalendarsConnectionsConnectionIdEventsEventIdKey(args)
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
                (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
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
          client.v2.calendars.connections[':connectionId'].events[':eventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CalendarsConnectionsConnectionIdEventsEventIdKey() {
  return ['v2', '/v2/calendars/connections/:connectionId/events/:eventId', 'DELETE'] as const
}

export function useDeleteV2CalendarsConnectionsConnectionIdEventsEventId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CalendarsConnectionsConnectionIdEventsEventIdKey()
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
            (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.calendars.connections[':connectionId'].events[':eventId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2CalendarsConnectionsConnectionIdEventsEventIdKey() {
  return ['v2', '/v2/calendars/connections/:connectionId/events/:eventId', 'PATCH'] as const
}

export function usePatchV2CalendarsConnectionsConnectionIdEventsEventId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CalendarsConnectionsConnectionIdEventsEventIdKey()
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
            (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.calendars.connections[':connectionId'].events[':eventId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsConnectionsConnectionIdFreebusyKey(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/connections/:connectionId/freebusy', keyArgs] as const
}

export function useGetV2CalendarsConnectionsConnectionIdFreebusy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CalendarsConnectionsConnectionIdFreebusyKey(args)
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
                (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
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
          client.v2.calendars.connections[':connectionId'].freebusy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsConnectionsConnectionIdFreebusy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CalendarsConnectionsConnectionIdFreebusyKey(args)
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
                (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
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
          client.v2.calendars.connections[':connectionId'].freebusy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarsCalendarEventsEventUidKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/events/:eventUid', keyArgs] as const
}

export function useGetV2CalendarsCalendarEventsEventUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
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
        ? getGetV2CalendarsCalendarEventsEventUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.calendars[':calendar'].events[':eventUid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsCalendarEventsEventUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
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
        ? getGetV2CalendarsCalendarEventsEventUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.calendars[':calendar'].events[':eventUid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CalendarsCalendarEventsEventUidKey() {
  return ['v2', '/v2/calendars/:calendar/events/:eventUid', 'DELETE'] as const
}

export function useDeleteV2CalendarsCalendarEventsEventUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CalendarsCalendarEventsEventUidKey()
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
            (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.calendars[':calendar'].events[':eventUid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2CalendarsCalendarEventsEventUidKey() {
  return ['v2', '/v2/calendars/:calendar/events/:eventUid', 'PATCH'] as const
}

export function usePatchV2CalendarsCalendarEventsEventUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CalendarsCalendarEventsEventUidKey()
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
            (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.calendars[':calendar'].events[':eventUid'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsCalendarEventEventUidKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/event/:eventUid', keyArgs] as const
}

export function useGetV2CalendarsCalendarEventEventUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>
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
        ? getGetV2CalendarsCalendarEventEventUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.calendars[':calendar'].event[':eventUid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsCalendarEventEventUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>
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
        ? getGetV2CalendarsCalendarEventEventUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.calendars[':calendar'].event[':eventUid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2CalendarsCalendarEventEventUidKey() {
  return ['v2', '/v2/calendars/:calendar/event/:eventUid', 'PATCH'] as const
}

export function usePatchV2CalendarsCalendarEventEventUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CalendarsCalendarEventEventUidKey()
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
            (typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.calendars[':calendar'].event[':eventUid'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsCalendarEventsKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/events', keyArgs] as const
}

export function useGetV2CalendarsCalendarEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
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
        ? getGetV2CalendarsCalendarEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsCalendarEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
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
        ? getGetV2CalendarsCalendarEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CalendarsCalendarEventsKey() {
  return ['v2', '/v2/calendars/:calendar/events', 'POST'] as const
}

export function usePostV2CalendarsCalendarEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CalendarsCalendarEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$post']> },
      ) => parseResponse(client.v2.calendars[':calendar'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsCalendarFreebusyKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/freebusy', keyArgs] as const
}

export function useGetV2CalendarsCalendarFreebusy<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
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
        ? getGetV2CalendarsCalendarFreebusyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.calendars[':calendar'].freebusy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsCalendarFreebusy<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
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
        ? getGetV2CalendarsCalendarFreebusyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.calendars[':calendar'].freebusy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CalendarsIcsFeedSaveKey() {
  return ['v2', '/v2/calendars/ics-feed/save', 'POST'] as const
}

export function usePostV2CalendarsIcsFeedSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CalendarsIcsFeedSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.calendars)['ics-feed']['save']['$post']> },
      ) => parseResponse(client.v2.calendars['ics-feed'].save.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsIcsFeedCheckKey(
  args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/ics-feed/check', keyArgs] as const
}

export function useGetV2CalendarsIcsFeedCheck<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
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
        ? getGetV2CalendarsIcsFeedCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars['ics-feed'].check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsIcsFeedCheck<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
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
        ? getGetV2CalendarsIcsFeedCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars['ics-feed'].check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarsBusyTimesKey(
  args: InferRequestType<(typeof client.v2.calendars)['busy-times']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/busy-times', keyArgs] as const
}

export function useGetV2CalendarsBusyTimes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)['busy-times']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>
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
        ? getGetV2CalendarsBusyTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars['busy-times'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsBusyTimes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)['busy-times']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>
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
        ? getGetV2CalendarsBusyTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)['busy-times']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars['busy-times'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarsKey(args: InferRequestType<typeof client.v2.calendars.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars', keyArgs] as const
}

export function useGetV2Calendars<TError = unknown>(
  args: InferRequestType<typeof client.v2.calendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CalendarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Calendars<TError = unknown>(
  args: InferRequestType<typeof client.v2.calendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CalendarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarsCalendarConnectKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/connect', keyArgs] as const
}

export function useGetV2CalendarsCalendarConnect<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
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
        ? getGetV2CalendarsCalendarConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsCalendarConnect<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
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
        ? getGetV2CalendarsCalendarConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarsCalendarSaveKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['save']['$get']>,
) {
  return ['v2', '/v2/calendars/:calendar/save', args] as const
}

export function useGetV2CalendarsCalendarSave<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['save']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
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
        ? getGetV2CalendarsCalendarSaveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].save.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsCalendarSave<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['save']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
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
        ? getGetV2CalendarsCalendarSaveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['save']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].save.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CalendarsCalendarCredentialsKey() {
  return ['v2', '/v2/calendars/:calendar/credentials', 'POST'] as const
}

export function usePostV2CalendarsCalendarCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CalendarsCalendarCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>
        },
      ) => parseResponse(client.v2.calendars[':calendar'].credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CalendarsCalendarCheckKey(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['check']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/calendars/:calendar/check', keyArgs] as const
}

export function useGetV2CalendarsCalendarCheck<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
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
        ? getGetV2CalendarsCalendarCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarsCalendarCheck<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
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
        ? getGetV2CalendarsCalendarCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['check']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendars[':calendar'].check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CalendarsCalendarDisconnectKey() {
  return ['v2', '/v2/calendars/:calendar/disconnect', 'POST'] as const
}

export function usePostV2CalendarsCalendarDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CalendarsCalendarDisconnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>
        },
      ) => parseResponse(client.v2.calendars[':calendar'].disconnect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ConferencingAppConnectKey() {
  return ['v2', '/v2/conferencing/:app/connect', 'POST'] as const
}

export function usePostV2ConferencingAppConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['connect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.conferencing)[':app']['connect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ConferencingAppConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.conferencing)[':app']['connect']['$post']> },
      ) => parseResponse(client.v2.conferencing[':app'].connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ConferencingAppOauthAuthUrlKey(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/conferencing/:app/oauth/auth-url', keyArgs] as const
}

export function useGetV2ConferencingAppOauthAuthUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>
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
        ? getGetV2ConferencingAppOauthAuthUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.conferencing[':app'].oauth['auth-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConferencingAppOauthAuthUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>
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
        ? getGetV2ConferencingAppOauthAuthUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.conferencing[':app'].oauth['auth-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ConferencingAppOauthCallbackKey(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>,
) {
  return ['v2', '/v2/conferencing/:app/oauth/callback', args] as const
}

export function useGetV2ConferencingAppOauthCallback<TError = unknown>(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>
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
        ? getGetV2ConferencingAppOauthCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.conferencing[':app'].oauth.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConferencingAppOauthCallback<TError = unknown>(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>
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
        ? getGetV2ConferencingAppOauthCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.conferencing[':app'].oauth.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ConferencingKey(
  args: InferRequestType<typeof client.v2.conferencing.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/conferencing', keyArgs] as const
}

export function useGetV2Conferencing<TError = unknown>(
  args: InferRequestType<typeof client.v2.conferencing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ConferencingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.conferencing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Conferencing<TError = unknown>(
  args: InferRequestType<typeof client.v2.conferencing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ConferencingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.conferencing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ConferencingAppDefaultKey() {
  return ['v2', '/v2/conferencing/:app/default', 'POST'] as const
}

export function usePostV2ConferencingAppDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['default']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.conferencing)[':app']['default']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ConferencingAppDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.conferencing)[':app']['default']['$post']> },
      ) => parseResponse(client.v2.conferencing[':app'].default.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ConferencingDefaultKey(
  args: InferRequestType<typeof client.v2.conferencing.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/conferencing/default', keyArgs] as const
}

export function useGetV2ConferencingDefault<TError = unknown>(
  args: InferRequestType<typeof client.v2.conferencing.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
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
        ? getGetV2ConferencingDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.conferencing.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConferencingDefault<TError = unknown>(
  args: InferRequestType<typeof client.v2.conferencing.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
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
        ? getGetV2ConferencingDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.conferencing.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.conferencing.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ConferencingAppDisconnectKey() {
  return ['v2', '/v2/conferencing/:app/disconnect', 'DELETE'] as const
}

export function useDeleteV2ConferencingAppDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ConferencingAppDisconnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>
        },
      ) => parseResponse(client.v2.conferencing[':app'].disconnect.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OauthClientsClientIdUsersKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/users', keyArgs] as const
}

export function useGetV2OauthClientsClientIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
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
        ? getGetV2OauthClientsClientIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['oauth-clients'][':clientId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OauthClientsClientIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
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
        ? getGetV2OauthClientsClientIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['oauth-clients'][':clientId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OauthClientsClientIdUsersKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users', 'POST'] as const
}

export function usePostV2OauthClientsClientIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthClientsClientIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>
        },
      ) => parseResponse(client.v2['oauth-clients'][':clientId'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OauthClientsClientIdUsersUserIdKey(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId', keyArgs] as const
}

export function useGetV2OauthClientsClientIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2OauthClientsClientIdUsersUserIdKey(args)
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
                (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
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
          client.v2['oauth-clients'][':clientId'].users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OauthClientsClientIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2OauthClientsClientIdUsersUserIdKey(args)
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
                (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
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
          client.v2['oauth-clients'][':clientId'].users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2OauthClientsClientIdUsersUserIdKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId', 'DELETE'] as const
}

export function useDeleteV2OauthClientsClientIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2OauthClientsClientIdUsersUserIdKey()
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
            (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['oauth-clients'][':clientId'].users[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2OauthClientsClientIdUsersUserIdKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId', 'PATCH'] as const
}

export function usePatchV2OauthClientsClientIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2OauthClientsClientIdUsersUserIdKey()
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
            (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2['oauth-clients'][':clientId'].users[':userId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2OauthClientsClientIdUsersUserIdForceRefreshKey() {
  return ['v2', '/v2/oauth-clients/:clientId/users/:userId/force-refresh', 'POST'] as const
}

export function usePostV2OauthClientsClientIdUsersUserIdForceRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthClientsClientIdUsersUserIdForceRefreshKey()
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
            (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['oauth-clients'][':clientId'].users[':userId']['force-refresh'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2OauthClientIdRefreshKey() {
  return ['v2', '/v2/oauth/:clientId/refresh', 'POST'] as const
}

export function usePostV2OauthClientIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthClientIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']> },
      ) => parseResponse(client.v2.oauth[':clientId'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OauthClientsClientIdWebhooksKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/webhooks', keyArgs] as const
}

export function useGetV2OauthClientsClientIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>
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
        ? getGetV2OauthClientsClientIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OauthClientsClientIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>
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
        ? getGetV2OauthClientsClientIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OauthClientsClientIdWebhooksKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks', 'POST'] as const
}

export function usePostV2OauthClientsClientIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthClientsClientIdWebhooksKey()
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
            (typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']
          >
        },
      ) =>
        parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2OauthClientsClientIdWebhooksKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks', 'DELETE'] as const
}

export function useDeleteV2OauthClientsClientIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2OauthClientsClientIdWebhooksKey()
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
            (typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']
          >
        },
      ) =>
        parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OauthClientsClientIdWebhooksWebhookIdKey(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId/webhooks/:webhookId', keyArgs] as const
}

export function useGetV2OauthClientsClientIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2OauthClientsClientIdWebhooksWebhookIdKey(args)
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
                (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
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
          client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OauthClientsClientIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2OauthClientsClientIdWebhooksWebhookIdKey(args)
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
                (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
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
          client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2OauthClientsClientIdWebhooksWebhookIdKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteV2OauthClientsClientIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2OauthClientsClientIdWebhooksWebhookIdKey()
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
            (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2OauthClientsClientIdWebhooksWebhookIdKey() {
  return ['v2', '/v2/oauth-clients/:clientId/webhooks/:webhookId', 'PATCH'] as const
}

export function usePatchV2OauthClientsClientIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2OauthClientsClientIdWebhooksWebhookIdKey()
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
            (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2OauthClientsKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients', keyArgs] as const
}

export function useGetV2OauthClients<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2OauthClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['oauth-clients'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OauthClients<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2OauthClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['oauth-clients'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OauthClientsKey() {
  return ['v2', '/v2/oauth-clients', 'POST'] as const
}

export function usePostV2OauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['oauth-clients']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['oauth-clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['oauth-clients']['$post']> },
      ) => parseResponse(client.v2['oauth-clients'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OauthClientsClientIdKey(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/oauth-clients/:clientId', keyArgs] as const
}

export function useGetV2OauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
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
        ? getGetV2OauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['oauth-clients'][':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
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
        ? getGetV2OauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['oauth-clients'][':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2OauthClientsClientIdKey() {
  return ['v2', '/v2/oauth-clients/:clientId', 'DELETE'] as const
}

export function useDeleteV2OauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2OauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']> },
      ) => parseResponse(client.v2['oauth-clients'][':clientId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2OauthClientsClientIdKey() {
  return ['v2', '/v2/oauth-clients/:clientId', 'PATCH'] as const
}

export function usePatchV2OauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2OauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']> },
      ) => parseResponse(client.v2['oauth-clients'][':clientId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2DestinationCalendarsKey() {
  return ['v2', '/v2/destination-calendars', 'PUT'] as const
}

export function usePutV2DestinationCalendars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['destination-calendars']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['destination-calendars']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DestinationCalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['destination-calendars']['$put']> },
      ) => parseResponse(client.v2['destination-calendars'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EventTypesKey(
  args: InferRequestType<(typeof client.v2)['event-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types', keyArgs] as const
}

export function useGetV2EventTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['event-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EventTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['event-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['event-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EventTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['event-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EventTypesKey() {
  return ['v2', '/v2/event-types', 'POST'] as const
}

export function usePostV2EventTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['event-types']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['event-types']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EventTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['event-types']['$post']> },
      ) => parseResponse(client.v2['event-types'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EventTypesEventTypeIdKey(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId', keyArgs] as const
}

export function useGetV2EventTypesEventTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
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
        ? getGetV2EventTypesEventTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['event-types'][':eventTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventTypesEventTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
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
        ? getGetV2EventTypesEventTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['event-types'][':eventTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2EventTypesEventTypeIdKey() {
  return ['v2', '/v2/event-types/:eventTypeId', 'DELETE'] as const
}

export function useDeleteV2EventTypesEventTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EventTypesEventTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']> },
      ) => parseResponse(client.v2['event-types'][':eventTypeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2EventTypesEventTypeIdKey() {
  return ['v2', '/v2/event-types/:eventTypeId', 'PATCH'] as const
}

export function usePatchV2EventTypesEventTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2EventTypesEventTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']> },
      ) => parseResponse(client.v2['event-types'][':eventTypeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EventTypesEventTypeIdWebhooksKey(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId/webhooks', keyArgs] as const
}

export function useGetV2EventTypesEventTypeIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>
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
        ? getGetV2EventTypesEventTypeIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['event-types'][':eventTypeId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventTypesEventTypeIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>
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
        ? getGetV2EventTypesEventTypeIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['event-types'][':eventTypeId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EventTypesEventTypeIdWebhooksKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks', 'POST'] as const
}

export function usePostV2EventTypesEventTypeIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EventTypesEventTypeIdWebhooksKey()
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
            (typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']
          >
        },
      ) =>
        parseResponse(client.v2['event-types'][':eventTypeId'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EventTypesEventTypeIdWebhooksKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks', 'DELETE'] as const
}

export function useDeleteV2EventTypesEventTypeIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EventTypesEventTypeIdWebhooksKey()
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
            (typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['event-types'][':eventTypeId'].webhooks.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EventTypesEventTypeIdWebhooksWebhookIdKey(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId/webhooks/:webhookId', keyArgs] as const
}

export function useGetV2EventTypesEventTypeIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EventTypesEventTypeIdWebhooksWebhookIdKey(args)
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
                (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
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
          client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventTypesEventTypeIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EventTypesEventTypeIdWebhooksWebhookIdKey(args)
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
                (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
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
          client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2EventTypesEventTypeIdWebhooksWebhookIdKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteV2EventTypesEventTypeIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EventTypesEventTypeIdWebhooksWebhookIdKey()
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
            (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2EventTypesEventTypeIdWebhooksWebhookIdKey() {
  return ['v2', '/v2/event-types/:eventTypeId/webhooks/:webhookId', 'PATCH'] as const
}

export function usePatchV2EventTypesEventTypeIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2EventTypesEventTypeIdWebhooksWebhookIdKey()
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
            (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EventTypesEventTypeIdPrivateLinksKey(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/event-types/:eventTypeId/private-links', keyArgs] as const
}

export function useGetV2EventTypesEventTypeIdPrivateLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']>
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
        ? getGetV2EventTypesEventTypeIdPrivateLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['event-types'][':eventTypeId']['private-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventTypesEventTypeIdPrivateLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']>
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
        ? getGetV2EventTypesEventTypeIdPrivateLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['event-types'][':eventTypeId']['private-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EventTypesEventTypeIdPrivateLinksKey() {
  return ['v2', '/v2/event-types/:eventTypeId/private-links', 'POST'] as const
}

export function usePostV2EventTypesEventTypeIdPrivateLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EventTypesEventTypeIdPrivateLinksKey()
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
            (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['event-types'][':eventTypeId']['private-links'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EventTypesEventTypeIdPrivateLinksLinkIdKey() {
  return ['v2', '/v2/event-types/:eventTypeId/private-links/:linkId', 'DELETE'] as const
}

export function useDeleteV2EventTypesEventTypeIdPrivateLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EventTypesEventTypeIdPrivateLinksLinkIdKey()
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
            (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['event-types'][':eventTypeId']['private-links'][':linkId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2EventTypesEventTypeIdPrivateLinksLinkIdKey() {
  return ['v2', '/v2/event-types/:eventTypeId/private-links/:linkId', 'PATCH'] as const
}

export function usePatchV2EventTypesEventTypeIdPrivateLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2EventTypesEventTypeIdPrivateLinksLinkIdKey()
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
            (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2['event-types'][':eventTypeId']['private-links'][':linkId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2MeKey(args: InferRequestType<typeof client.v2.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/me', keyArgs] as const
}

export function useGetV2Me<TError = unknown>(
  args: InferRequestType<typeof client.v2.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Me<TError = unknown>(
  args: InferRequestType<typeof client.v2.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPatchV2MeKey() {
  return ['v2', '/v2/me', 'PATCH'] as const
}

export function usePatchV2Me<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.me.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.me.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2MeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.me.$patch> }) =>
        parseResponse(client.v2.me.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AuthOauth2ClientsClientIdKey(
  args: InferRequestType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>,
) {
  return ['v2', '/v2/auth/oauth2/clients/:clientId', args] as const
}

export function useGetV2AuthOauth2ClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
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
        ? getGetV2AuthOauth2ClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth.oauth2.clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthOauth2ClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
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
        ? getGetV2AuthOauth2ClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth.oauth2.clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AuthOauth2TokenKey() {
  return ['v2', '/v2/auth/oauth2/token', 'POST'] as const
}

export function usePostV2AuthOauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth.oauth2.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.auth.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AuthOauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.auth.oauth2.token.$post> },
      ) => parseResponse(client.v2.auth.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SchedulesKey(args: InferRequestType<typeof client.v2.schedules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/schedules', keyArgs] as const
}

export function useGetV2Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v2.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v2.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SchedulesKey() {
  return ['v2', '/v2/schedules', 'POST'] as const
}

export function usePostV2Schedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.schedules.$post> }) =>
        parseResponse(client.v2.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SchedulesDefaultKey(
  args: InferRequestType<typeof client.v2.schedules.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/schedules/default', keyArgs] as const
}

export function useGetV2SchedulesDefault<TError = unknown>(
  args: InferRequestType<typeof client.v2.schedules.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>
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
        ? getGetV2SchedulesDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SchedulesDefault<TError = unknown>(
  args: InferRequestType<typeof client.v2.schedules.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>
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
        ? getGetV2SchedulesDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SchedulesScheduleIdKey(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/schedules/:scheduleId', keyArgs] as const
}

export function useGetV2SchedulesScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
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
        ? getGetV2SchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules[':scheduleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SchedulesScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
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
        ? getGetV2SchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules[':scheduleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SchedulesScheduleIdKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'DELETE'] as const
}

export function useDeleteV2SchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']> },
      ) => parseResponse(client.v2.schedules[':scheduleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SchedulesScheduleIdKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'PATCH'] as const
}

export function usePatchV2SchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$patch']> },
      ) => parseResponse(client.v2.schedules[':scheduleId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SelectedCalendarsKey() {
  return ['v2', '/v2/selected-calendars', 'POST'] as const
}

export function usePostV2SelectedCalendars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['selected-calendars']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['selected-calendars']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SelectedCalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['selected-calendars']['$post']> },
      ) => parseResponse(client.v2['selected-calendars'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2SelectedCalendarsKey() {
  return ['v2', '/v2/selected-calendars', 'DELETE'] as const
}

export function useDeleteV2SelectedCalendars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['selected-calendars']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['selected-calendars']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SelectedCalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['selected-calendars']['$delete']> },
      ) => parseResponse(client.v2['selected-calendars'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SlotsKey(args: InferRequestType<typeof client.v2.slots.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/slots', keyArgs] as const
}

export function useGetV2Slots<TError = unknown>(
  args: InferRequestType<typeof client.v2.slots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SlotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.slots.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Slots<TError = unknown>(
  args: InferRequestType<typeof client.v2.slots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SlotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.slots.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV2SlotsReservationsKey() {
  return ['v2', '/v2/slots/reservations', 'POST'] as const
}

export function usePostV2SlotsReservations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.slots.reservations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.slots.reservations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SlotsReservationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.slots.reservations.$post> },
      ) => parseResponse(client.v2.slots.reservations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SlotsReservationsUidKey(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/slots/reservations/:uid', keyArgs] as const
}

export function useGetV2SlotsReservationsUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
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
        ? getGetV2SlotsReservationsUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.slots.reservations[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SlotsReservationsUid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
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
        ? getGetV2SlotsReservationsUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.slots.reservations[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SlotsReservationsUidKey() {
  return ['v2', '/v2/slots/reservations/:uid', 'DELETE'] as const
}

export function useDeleteV2SlotsReservationsUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SlotsReservationsUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$delete']> },
      ) => parseResponse(client.v2.slots.reservations[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SlotsReservationsUidKey() {
  return ['v2', '/v2/slots/reservations/:uid', 'PATCH'] as const
}

export function usePatchV2SlotsReservationsUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.slots.reservations)[':uid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SlotsReservationsUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$patch']> },
      ) => parseResponse(client.v2.slots.reservations[':uid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2StripeConnectKey(
  args: InferRequestType<typeof client.v2.stripe.connect.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/stripe/connect', keyArgs] as const
}

export function useGetV2StripeConnect<TError = unknown>(
  args: InferRequestType<typeof client.v2.stripe.connect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>>
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
        ? getGetV2StripeConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stripe.connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StripeConnect<TError = unknown>(
  args: InferRequestType<typeof client.v2.stripe.connect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>>
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
        ? getGetV2StripeConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.connect.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stripe.connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StripeSaveKey(args: InferRequestType<typeof client.v2.stripe.save.$get>) {
  return ['v2', '/v2/stripe/save', args] as const
}

export function useGetV2StripeSave<TError = unknown>(
  args: InferRequestType<typeof client.v2.stripe.save.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StripeSaveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stripe.save.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StripeSave<TError = unknown>(
  args: InferRequestType<typeof client.v2.stripe.save.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StripeSaveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.save.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stripe.save.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StripeCheckKey(args: InferRequestType<typeof client.v2.stripe.check.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/stripe/check', keyArgs] as const
}

export function useGetV2StripeCheck<TError = unknown>(
  args: InferRequestType<typeof client.v2.stripe.check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StripeCheckKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stripe.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StripeCheck<TError = unknown>(
  args: InferRequestType<typeof client.v2.stripe.check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StripeCheckKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stripe.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stripe.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VerifiedResourcesEmailsVerificationCodeRequestKey() {
  return ['v2', '/v2/verified-resources/emails/verification-code/request', 'POST'] as const
}

export function usePostV2VerifiedResourcesEmailsVerificationCodeRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VerifiedResourcesEmailsVerificationCodeRequestKey()
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
            (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['verified-resources'].emails['verification-code'].request.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2VerifiedResourcesPhonesVerificationCodeRequestKey() {
  return ['v2', '/v2/verified-resources/phones/verification-code/request', 'POST'] as const
}

export function usePostV2VerifiedResourcesPhonesVerificationCodeRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VerifiedResourcesPhonesVerificationCodeRequestKey()
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
            (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['verified-resources'].phones['verification-code'].request.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2VerifiedResourcesEmailsVerificationCodeVerifyKey() {
  return ['v2', '/v2/verified-resources/emails/verification-code/verify', 'POST'] as const
}

export function usePostV2VerifiedResourcesEmailsVerificationCodeVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VerifiedResourcesEmailsVerificationCodeVerifyKey()
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
            (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['verified-resources'].emails['verification-code'].verify.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2VerifiedResourcesPhonesVerificationCodeVerifyKey() {
  return ['v2', '/v2/verified-resources/phones/verification-code/verify', 'POST'] as const
}

export function usePostV2VerifiedResourcesPhonesVerificationCodeVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VerifiedResourcesPhonesVerificationCodeVerifyKey()
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
            (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['verified-resources'].phones['verification-code'].verify.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2VerifiedResourcesEmailsKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/emails', keyArgs] as const
}

export function useGetV2VerifiedResourcesEmails<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
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
        ? getGetV2VerifiedResourcesEmailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['verified-resources'].emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VerifiedResourcesEmails<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
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
        ? getGetV2VerifiedResourcesEmailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['verified-resources'].emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VerifiedResourcesPhonesKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/phones', keyArgs] as const
}

export function useGetV2VerifiedResourcesPhones<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
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
        ? getGetV2VerifiedResourcesPhonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['verified-resources'].phones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VerifiedResourcesPhones<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
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
        ? getGetV2VerifiedResourcesPhonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['verified-resources'].phones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VerifiedResourcesEmailsIdKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/emails/:id', keyArgs] as const
}

export function useGetV2VerifiedResourcesEmailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
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
        ? getGetV2VerifiedResourcesEmailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['verified-resources'].emails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VerifiedResourcesEmailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
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
        ? getGetV2VerifiedResourcesEmailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['verified-resources'].emails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VerifiedResourcesPhonesIdKey(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/verified-resources/phones/:id', keyArgs] as const
}

export function useGetV2VerifiedResourcesPhonesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
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
        ? getGetV2VerifiedResourcesPhonesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['verified-resources'].phones[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VerifiedResourcesPhonesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
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
        ? getGetV2VerifiedResourcesPhonesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['verified-resources'].phones[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WebhooksKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks', keyArgs] as const
}

export function useGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WebhooksKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function usePostV2Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.webhooks.$post> }) =>
        parseResponse(client.v2.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks/:webhookId', keyArgs] as const
}

export function useGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
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
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
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
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'PATCH'] as const
}

export function usePatchV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
