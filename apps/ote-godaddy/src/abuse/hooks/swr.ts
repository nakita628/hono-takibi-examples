import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1AbuseTicketsKey(
  args: InferRequestType<typeof client.v1.abuse.tickets.$get>,
) {
  return ['v1', '/v1/abuse/tickets', args] as const
}

export function useGetV1AbuseTickets<TError = unknown>(
  args: InferRequestType<typeof client.v1.abuse.tickets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AbuseTicketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.abuse.tickets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AbuseTickets<TError = unknown>(
  args: InferRequestType<typeof client.v1.abuse.tickets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AbuseTicketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.abuse.tickets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AbuseTicketsKey() {
  return ['v1', '/v1/abuse/tickets', 'POST'] as const
}

export function usePostV1AbuseTickets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.abuse.tickets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AbuseTicketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.abuse.tickets.$post> }) =>
        parseResponse(client.v1.abuse.tickets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AbuseTicketsTicketIdKey(
  args: InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>,
) {
  return ['v1', '/v1/abuse/tickets/:ticketId', args] as const
}

export function useGetV1AbuseTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
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
        ? getGetV1AbuseTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.abuse.tickets[':ticketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AbuseTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
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
        ? getGetV1AbuseTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.abuse.tickets[':ticketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
