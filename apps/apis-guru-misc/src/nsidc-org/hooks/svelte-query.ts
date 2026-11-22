import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getFacetsQueryKey(args: InferRequestType<typeof client.Facets.$get>) {
  return ['Facets', '/Facets', args] as const
}

export function getFacetsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Facets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacetsQueryKey>
  >({
    queryKey: getFacetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Facets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFacets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Facets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFacetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFacetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOpenSearchQueryKey(args: InferRequestType<typeof client.OpenSearch.$get>) {
  return ['OpenSearch', '/OpenSearch', args] as const
}

export function getOpenSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.OpenSearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenSearchQueryKey>
  >({
    queryKey: getOpenSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.OpenSearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOpenSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.OpenSearch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOpenSearchDescriptionQueryKey() {
  return ['OpenSearchDescription', '/OpenSearchDescription'] as const
}

export function getOpenSearchDescriptionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOpenSearchDescriptionQueryKey>
  >({
    queryKey: getOpenSearchDescriptionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.OpenSearchDescription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOpenSearchDescription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenSearchDescriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenSearchDescriptionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSuggestQueryKey(args: InferRequestType<typeof client.suggest.$get>) {
  return ['suggest', '/suggest', args] as const
}

export function getSuggestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.suggest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuggestQueryKey>
  >({
    queryKey: getSuggestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suggest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuggestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
