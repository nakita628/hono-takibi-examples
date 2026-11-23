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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AbuseTicketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.abuse.tickets.$get>>,
) {
  return ['v1', '/v1/abuse/tickets', toValue(args)] as const
}

export function getV1AbuseTicketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.abuse.tickets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AbuseTicketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.abuse.tickets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AbuseTickets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.abuse.tickets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>
            >
          >,
          ReturnType<typeof getV1AbuseTicketsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AbuseTicketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AbuseTicketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.abuse.tickets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AbuseTickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.abuse.tickets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.abuse.tickets.$post>,
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
  const mutationDefaults = getPostV1AbuseTicketsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AbuseTicketsTicketIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>,
) {
  return ['v1', '/v1/abuse/tickets/:ticketId', toValue(args)] as const
}

export function getV1AbuseTicketsTicketIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AbuseTicketsTicketIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.abuse.tickets[':ticketId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AbuseTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AbuseTicketsTicketIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AbuseTicketsTicketIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AbuseTicketsTicketIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.abuse.tickets[':ticketId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
