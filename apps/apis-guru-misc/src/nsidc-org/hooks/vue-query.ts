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

export function getFacetsKey() {
  return ['Facets'] as const
}

export function getOpenSearchKey() {
  return ['OpenSearch'] as const
}

export function getOpenSearchDescriptionKey() {
  return ['OpenSearchDescription'] as const
}

export function getSuggestKey() {
  return ['suggest'] as const
}

export function getFacetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Facets.$get>>,
) {
  return ['Facets', '/Facets', toValue(args)] as const
}

export function getFacetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Facets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Facets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFacets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Facets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
          ReturnType<typeof getFacetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Facets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.OpenSearch.$get>>,
) {
  return ['OpenSearch', '/OpenSearch', toValue(args)] as const
}

export function getOpenSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.OpenSearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOpenSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.OpenSearch.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.OpenSearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>
          >,
          ReturnType<typeof getOpenSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOpenSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.OpenSearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenSearchDescriptionQueryKey() {
  return ['OpenSearchDescription', '/OpenSearchDescription'] as const
}

export function getOpenSearchDescriptionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenSearchDescriptionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.OpenSearchDescription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOpenSearchDescription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
            >
          >,
          ReturnType<typeof getOpenSearchDescriptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOpenSearchDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenSearchDescriptionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.OpenSearchDescription.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suggest.$get>>,
) {
  return ['suggest', '/suggest', toValue(args)] as const
}

export function getSuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suggest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suggest.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suggest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>
          >,
          ReturnType<typeof getSuggestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suggest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
