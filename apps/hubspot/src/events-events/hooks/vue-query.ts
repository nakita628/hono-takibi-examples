import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEventsKey() {
  return ['events'] as const
}

export function getEventsEventOccurrences202609QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['event-occurrences']['2026-09']['$get']>
  >,
) {
  return ['events', '/events/event-occurrences/2026-09', toValue(args)] as const
}

export function getEventsEventOccurrences202609QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['event-occurrences']['2026-09']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventOccurrences202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events['event-occurrences']['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventOccurrences202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['event-occurrences']['2026-09']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventOccurrences202609QueryKey>
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
          Awaited<ReturnType<(typeof client.events)['event-occurrences']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventOccurrences202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventOccurrences202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events['event-occurrences']['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventOccurrences202609EventTypesQueryKey() {
  return ['events', '/events/event-occurrences/2026-09/event-types'] as const
}

export function getEventsEventOccurrences202609EventTypesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getEventsEventOccurrences202609EventTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events['event-occurrences']['2026-09']['event-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventOccurrences202609EventTypes<
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
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getEventsEventOccurrences202609EventTypesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: getEventsEventOccurrences202609EventTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.events['event-occurrences']['2026-09']['event-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
