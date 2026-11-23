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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmObjects202609TicketsQueryKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/tickets', args] as const
}

export function getCrmObjects202609TicketsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609TicketsQueryKey>
  >({
    queryKey: getCrmObjects202609TicketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'].tickets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609Tickets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609TicketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609TicketsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609Tickets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609TicketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609TicketsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmObjects202609TicketsMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets', 'POST'] as const
}

export function getPostCrmObjects202609TicketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$post']>,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609Tickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCrmObjects202609TicketsBatchArchiveMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/batch/archive', 'POST'] as const
}

export function getPostCrmObjects202609TicketsBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['tickets']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['tickets']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.batch.archive.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609TicketsBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09']['tickets']['batch']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['tickets']['batch']['archive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsBatchArchiveMutationOptions<
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

export function getPostCrmObjects202609TicketsBatchCreateMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/batch/create', 'POST'] as const
}

export function getPostCrmObjects202609TicketsBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['tickets']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['batch']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.batch.create.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609TicketsBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['tickets']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['tickets']['batch']['create']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsBatchCreateMutationOptions<
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

export function getPostCrmObjects202609TicketsBatchReadMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/batch/read', 'POST'] as const
}

export function getPostCrmObjects202609TicketsBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['batch']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.batch.read.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609TicketsBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['tickets']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['tickets']['batch']['read']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsBatchReadMutationOptions<
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

export function getPostCrmObjects202609TicketsBatchUpdateMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/batch/update', 'POST'] as const
}

export function getPostCrmObjects202609TicketsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['tickets']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['batch']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.batch.update.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609TicketsBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['tickets']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['tickets']['batch']['update']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsBatchUpdateMutationOptions<
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

export function getPostCrmObjects202609TicketsBatchUpsertMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/batch/upsert', 'POST'] as const
}

export function getPostCrmObjects202609TicketsBatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['tickets']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['batch']['upsert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsBatchUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets']['batch']['upsert']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.batch.upsert.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609TicketsBatchUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['tickets']['batch']['upsert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['tickets']['batch']['upsert']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsBatchUpsertMutationOptions<
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

export function getPostCrmObjects202609TicketsGdprDeleteMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/gdpr-delete', 'POST'] as const
}

export function getPostCrmObjects202609TicketsGdprDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['gdpr-delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['gdpr-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsGdprDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets']['gdpr-delete']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].tickets['gdpr-delete'].$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609TicketsGdprDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09']['tickets']['gdpr-delete']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['gdpr-delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsGdprDeleteMutationOptions<
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

export function getPostCrmObjects202609TicketsMergeMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/merge', 'POST'] as const
}

export function getPostCrmObjects202609TicketsMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['merge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['merge']['$post']>,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.merge.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609TicketsMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['merge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['merge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsMergeMutationOptions<
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

export function getPostCrmObjects202609TicketsSearchMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/search', 'POST'] as const
}

export function getPostCrmObjects202609TicketsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609TicketsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['search']['$post']>,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets.search.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609TicketsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['tickets']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609TicketsSearchMutationOptions<
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

export function getCrmObjects202609TicketsTicketIdQueryKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/tickets/:ticketId', args] as const
}

export function getCrmObjects202609TicketsTicketIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609TicketsTicketIdQueryKey>
  >({
    queryKey: getCrmObjects202609TicketsTicketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'].tickets[':ticketId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609TicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609TicketsTicketIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609TicketsTicketIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609TicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609TicketsTicketIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609TicketsTicketIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCrmObjects202609TicketsTicketIdMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/:ticketId', 'DELETE'] as const
}

export function getDeleteCrmObjects202609TicketsTicketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmObjects202609TicketsTicketIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].tickets[':ticketId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmObjects202609TicketsTicketId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmObjects202609TicketsTicketIdMutationOptions<
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

export function getPatchCrmObjects202609TicketsTicketIdMutationKey() {
  return ['crm', '/crm/objects/2026-09/tickets/:ticketId', 'PATCH'] as const
}

export function getPatchCrmObjects202609TicketsTicketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmObjects202609TicketsTicketIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$patch']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'].tickets[':ticketId'].$patch(args, options))
    },
  })
}

export function usePatchCrmObjects202609TicketsTicketId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmObjects202609TicketsTicketIdMutationOptions<
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

export function getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/tickets/:ticketId/associations/:toObjectType', args] as const
}

export function getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryKey>
  >({
    queryKey: getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'].tickets[':ticketId'].associations[':toObjectType'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useCrmObjects202609TicketsTicketIdAssociationsToObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609TicketsTicketIdAssociationsToObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:fromObjectType/:fromObjectId/associations/default/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
          ':toObjectType'
        ][':toObjectId'].$put(args, options),
      )
    },
  })
}

export function usePutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationOptions<
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

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
          ':toObjectId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
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

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'DELETE',
  ] as const
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
          ':toObjectId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
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
