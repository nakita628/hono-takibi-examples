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

export function getMuseumHoursKey() {
  return ['museum-hours'] as const
}

export function getSpecialEventsKey() {
  return ['special-events'] as const
}

export function getTicketsKey() {
  return ['tickets'] as const
}

export function getMuseumHoursQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['museum-hours']['$get']>>,
) {
  return ['museum-hours', '/museum-hours', toValue(args)] as const
}

export function getMuseumHoursQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['museum-hours']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMuseumHoursQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['museum-hours'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMuseumHours<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['museum-hours']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
            >
          >,
          ReturnType<typeof getMuseumHoursQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMuseumHoursQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMuseumHoursQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['museum-hours'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpecialEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['special-events']['$get']>>,
) {
  return ['special-events', '/special-events', toValue(args)] as const
}

export function getSpecialEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['special-events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpecialEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['special-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpecialEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['special-events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
            >
          >,
          ReturnType<typeof getSpecialEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpecialEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpecialEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['special-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpecialEventsMutationKey() {
  return ['special-events', '/special-events', 'POST'] as const
}

export function getPostSpecialEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['special-events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpecialEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['special-events']['$post']>) {
      return parseResponse(client['special-events'].$post(args, options))
    },
  })
}

export function usePostSpecialEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['special-events']['$post']>,
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
  const mutationDefaults = getPostSpecialEventsMutationOptions<TError, TOnMutateResult>(
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

export function getSpecialEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['special-events'][':eventId']['$get']>>,
) {
  return ['special-events', '/special-events/:eventId', toValue(args)] as const
}

export function getSpecialEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['special-events'][':eventId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpecialEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['special-events'][':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpecialEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['special-events'][':eventId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpecialEventsEventIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpecialEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpecialEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['special-events'][':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSpecialEventsEventIdMutationKey() {
  return ['special-events', '/special-events/:eventId', 'DELETE'] as const
}

export function getDeleteSpecialEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['special-events'][':eventId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpecialEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['special-events'][':eventId']['$delete']>,
    ) {
      return parseResponse(client['special-events'][':eventId'].$delete(args, options))
    },
  })
}

export function useDeleteSpecialEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['special-events'][':eventId']['$delete']>,
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
  const mutationDefaults = getDeleteSpecialEventsEventIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSpecialEventsEventIdMutationKey() {
  return ['special-events', '/special-events/:eventId', 'PATCH'] as const
}

export function getPatchSpecialEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['special-events'][':eventId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpecialEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['special-events'][':eventId']['$patch']>,
    ) {
      return parseResponse(client['special-events'][':eventId'].$patch(args, options))
    },
  })
}

export function usePatchSpecialEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['special-events'][':eventId']['$patch']>,
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
  const mutationDefaults = getPatchSpecialEventsEventIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTicketsMutationKey() {
  return ['tickets', '/tickets', 'POST'] as const
}

export function getPostTicketsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>>,
    TError,
    InferRequestType<typeof client.tickets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tickets.$post>) {
      return parseResponse(client.tickets.$post(args, options))
    },
  })
}

export function usePostTickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tickets.$post>,
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
  const mutationDefaults = getPostTicketsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTicketsTicketIdQrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>>,
) {
  return ['tickets', '/tickets/:ticketId/qr', toValue(args)] as const
}

export function getTicketsTicketIdQrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTicketsTicketIdQrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tickets[':ticketId'].qr.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTicketsTicketIdQr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTicketsTicketIdQrQueryKey>
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
          Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTicketsTicketIdQrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTicketsTicketIdQrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tickets[':ticketId'].qr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
