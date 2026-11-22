import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMuseumHoursKey() {
  return ['museum-hours'] as const
}

export function getSpecialEventsKey() {
  return ['special-events'] as const
}

export function getTicketsKey() {
  return ['tickets'] as const
}

export function getGetMuseumHoursKey(
  args: InferRequestType<(typeof client)['museum-hours']['$get']>,
) {
  return ['museum-hours', '/museum-hours', args] as const
}

export function useGetMuseumHours<TError = unknown>(
  args: InferRequestType<(typeof client)['museum-hours']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMuseumHoursKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['museum-hours'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMuseumHours<TError = unknown>(
  args: InferRequestType<(typeof client)['museum-hours']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMuseumHoursKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['museum-hours'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpecialEventsKey(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
) {
  return ['special-events', '/special-events', args] as const
}

export function useGetSpecialEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSpecialEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['special-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpecialEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSpecialEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['special-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpecialEventsKey() {
  return ['special-events', '/special-events', 'POST'] as const
}

export function usePostSpecialEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['special-events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpecialEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['special-events']['$post']> },
      ) => parseResponse(client['special-events'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpecialEventsEventIdKey(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
) {
  return ['special-events', '/special-events/:eventId', args] as const
}

export function useGetSpecialEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
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
        ? getGetSpecialEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['special-events'][':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpecialEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
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
        ? getGetSpecialEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['special-events'][':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpecialEventsEventIdKey() {
  return ['special-events', '/special-events/:eventId', 'DELETE'] as const
}

export function useDeleteSpecialEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['special-events'][':eventId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpecialEventsEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['special-events'][':eventId']['$delete']> },
      ) => parseResponse(client['special-events'][':eventId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSpecialEventsEventIdKey() {
  return ['special-events', '/special-events/:eventId', 'PATCH'] as const
}

export function usePatchSpecialEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['special-events'][':eventId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpecialEventsEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['special-events'][':eventId']['$patch']> },
      ) => parseResponse(client['special-events'][':eventId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsKey() {
  return ['tickets', '/tickets', 'POST'] as const
}

export function usePostTickets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tickets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tickets.$post> }) =>
        parseResponse(client.tickets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTicketsTicketIdQrKey(
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
) {
  return ['tickets', '/tickets/:ticketId/qr', args] as const
}

export function useGetTicketsTicketIdQr<TError = unknown>(
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>
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
        ? getGetTicketsTicketIdQrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tickets[':ticketId'].qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTicketsTicketIdQr<TError = unknown>(
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>
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
        ? getGetTicketsTicketIdQrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tickets[':ticketId'].qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
