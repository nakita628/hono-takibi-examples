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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AbuseTicketsQueryKey(
  args: InferRequestType<typeof client.v1.abuse.tickets.$get>,
) {
  return ['v1', '/v1/abuse/tickets', args] as const
}

export function getV1AbuseTicketsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.abuse.tickets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AbuseTicketsQueryKey>
  >({
    queryKey: getV1AbuseTicketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.abuse.tickets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AbuseTickets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.abuse.tickets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AbuseTicketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AbuseTicketsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1AbuseTicketsMutationKey() {
  return ['v1', '/v1/abuse/tickets', 'POST'] as const
}

export function getPostV1AbuseTicketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.abuse.tickets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AbuseTicketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.abuse.tickets.$post>) {
      return parseResponse(client.v1.abuse.tickets.$post(args, options))
    },
  })
}

export function createPostV1AbuseTickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.abuse.tickets.$post>,
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
    const mutationDefaults = getPostV1AbuseTicketsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AbuseTicketsTicketIdQueryKey(
  args: InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>,
) {
  return ['v1', '/v1/abuse/tickets/:ticketId', args] as const
}

export function getV1AbuseTicketsTicketIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AbuseTicketsTicketIdQueryKey>
  >({
    queryKey: getV1AbuseTicketsTicketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.abuse.tickets[':ticketId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AbuseTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AbuseTicketsTicketIdQueryKey>
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
      ...getV1AbuseTicketsTicketIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
