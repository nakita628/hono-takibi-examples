import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDealItemKey() {
  return ['deal_item'] as const
}

export function getEventKey() {
  return ['event'] as const
}

export function getEventItemKey() {
  return ['event_item'] as const
}

export function getDealItemQueryKey(args: InferRequestType<typeof client.deal_item.$get>) {
  const { header: _, ...keyArgs } = args
  return ['deal_item', '/deal_item', keyArgs] as const
}

export function getDealItemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deal_item.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDealItemQueryKey>
  >({
    queryKey: getDealItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deal_item.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDealItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deal_item.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDealItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDealItemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDealItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deal_item.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDealItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDealItemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventQueryKey(args: InferRequestType<typeof client.event.$get>) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event', keyArgs] as const
}

export function getEventQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.event.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventQueryKey>
  >({
    queryKey: getEventQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.event.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.event.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventIdQueryKey(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_id', keyArgs] as const
}

export function getEventEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventIdQueryKey>
  >({
    queryKey: getEventEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventItemQueryKey(args: InferRequestType<typeof client.event_item.$get>) {
  const { header: _, ...keyArgs } = args
  return ['event_item', '/event_item', keyArgs] as const
}

export function getEventItemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.event_item.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventItemQueryKey>
  >({
    queryKey: getEventItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event_item.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.event_item.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventItemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.event_item.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventItemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
