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

export function getDealItemKey() {
  return ['deal_item'] as const
}

export function getEventKey() {
  return ['event'] as const
}

export function getEventItemKey() {
  return ['event_item'] as const
}

export function getDealItemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deal_item.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['deal_item', '/deal_item', keyArgs] as const
}

export function getDealItemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deal_item.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deal_item.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDealItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deal_item.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>
          >,
          ReturnType<typeof getDealItemQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDealItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deal_item.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event', keyArgs] as const
}

export function getEventQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
          ReturnType<typeof getEventQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_id', keyArgs] as const
}

export function getEventEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
            >
          >,
          ReturnType<typeof getEventEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventItemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_item.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event_item', '/event_item', keyArgs] as const
}

export function getEventItemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_item.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event_item.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_item.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>
          >,
          ReturnType<typeof getEventItemQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event_item.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
