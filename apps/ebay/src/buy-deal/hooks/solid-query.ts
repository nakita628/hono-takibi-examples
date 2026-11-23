import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createDealItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deal_item.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDealItemQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDealItemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEvent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.event.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getEventQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventEventIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.event_item.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEventItemQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventItemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
