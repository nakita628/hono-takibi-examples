import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
  args: InferRequestType<(typeof client)['museum-hours']['$get']>,
) {
  return ['museum-hours', '/museum-hours', args] as const
}

export function getMuseumHoursQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['museum-hours']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMuseumHoursQueryKey>
  >({
    queryKey: getMuseumHoursQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['museum-hours'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMuseumHours<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['museum-hours']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMuseumHoursQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMuseumHoursQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMuseumHours<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['museum-hours']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['museum-hours']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMuseumHoursQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMuseumHoursQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpecialEventsQueryKey(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
) {
  return ['special-events', '/special-events', args] as const
}

export function getSpecialEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpecialEventsQueryKey>
  >({
    queryKey: getSpecialEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['special-events'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpecialEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpecialEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpecialEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpecialEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['special-events']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpecialEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpecialEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
) {
  return ['special-events', '/special-events/:eventId', args] as const
}

export function getSpecialEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpecialEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['special-events'][':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpecialEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpecialEventsEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpecialEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['special-events'][':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpecialEventsEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>>,
        TError,
        InferRequestType<typeof client.tickets.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
) {
  return ['tickets', '/tickets/:ticketId/qr', args] as const
}

export function getTicketsTicketIdQrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTicketsTicketIdQrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tickets[':ticketId'].qr.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTicketsTicketIdQr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTicketsTicketIdQrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTicketsTicketIdQrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTicketsTicketIdQr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticketId']['qr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTicketsTicketIdQrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
