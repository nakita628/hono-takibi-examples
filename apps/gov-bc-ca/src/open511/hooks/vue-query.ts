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

export function getAreasKey() {
  return ['areas'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getJurisdictionKey() {
  return ['jurisdiction'] as const
}

export function getJurisdictiongeographyKey() {
  return ['jurisdictiongeography'] as const
}

export function getAreasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.areas.$get>>,
) {
  return ['areas', '/areas', toValue(args)] as const
}

export function getAreasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.areas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAreasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.areas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAreas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.areas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
          ReturnType<typeof getAreasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAreasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAreasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.areas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJurisdictionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdiction.$get>>,
) {
  return ['jurisdiction', '/jurisdiction', toValue(args)] as const
}

export function getJurisdictionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdiction.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJurisdictionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jurisdiction.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJurisdiction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdiction.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
          >,
          ReturnType<typeof getJurisdictionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJurisdictionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJurisdictionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jurisdiction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJurisdictiongeographyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdictiongeography.$get>>,
) {
  return ['jurisdictiongeography', '/jurisdictiongeography', toValue(args)] as const
}

export function getJurisdictiongeographyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdictiongeography.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJurisdictiongeographyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jurisdictiongeography.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJurisdictiongeography<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdictiongeography.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
            >
          >,
          ReturnType<typeof getJurisdictiongeographyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJurisdictiongeographyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJurisdictiongeographyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jurisdictiongeography.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
