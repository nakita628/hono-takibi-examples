import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEventsKey() {
  return ['events'] as const
}

export function getEventsEventOccurrences202609QueryKey(
  args: InferRequestType<(typeof client.events)['event-occurrences']['2026-09']['$get']>,
) {
  return ['events', '/events/event-occurrences/2026-09', args] as const
}

export function getEventsEventOccurrences202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)['event-occurrences']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventOccurrences202609QueryKey>
  >({
    queryKey: getEventsEventOccurrences202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events['event-occurrences']['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventOccurrences202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)['event-occurrences']['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventOccurrences202609QueryKey>
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
      ...getEventsEventOccurrences202609QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEventsEventOccurrences202609EventTypesQueryKey() {
  return ['events', '/events/event-occurrences/2026-09/event-types'] as const
}

export function getEventsEventOccurrences202609EventTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.events)['event-occurrences']['2026-09']['event-types']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.events)['event-occurrences']['2026-09']['event-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventOccurrences202609EventTypesQueryKey>
  >({
    queryKey: getEventsEventOccurrences202609EventTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events['event-occurrences']['2026-09']['event-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventOccurrences202609EventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.events)['event-occurrences']['2026-09']['event-types']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.events)['event-occurrences']['2026-09']['event-types']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventOccurrences202609EventTypesQueryKey>
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
      ...getEventsEventOccurrences202609EventTypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}
