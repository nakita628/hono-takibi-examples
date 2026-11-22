import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NameProtectedResourcesSummaryQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>,
) {
  return ['v1', '/v1/:name/protectedResourcesSummary', args] as const
}

export function getV1NameProtectedResourcesSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameProtectedResourcesSummaryQueryKey>
  >({
    queryKey: getV1NameProtectedResourcesSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].protectedResourcesSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameProtectedResourcesSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1NameProtectedResourcesSummaryQueryKey>
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
    return {
      ...getV1NameProtectedResourcesSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentCryptoKeysQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>,
) {
  return ['v1', '/v1/:parent/cryptoKeys', args] as const
}

export function getV1ParentCryptoKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCryptoKeysQueryKey>
  >({
    queryKey: getV1ParentCryptoKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].cryptoKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentCryptoKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentCryptoKeysQueryKey>
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
    return { ...getV1ParentCryptoKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ScopeProtectedResourcesSearchQueryKey(
  args: InferRequestType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>,
) {
  return ['v1', '/v1/:scope/protectedResources:search', args] as const
}

export function getV1ScopeProtectedResourcesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ScopeProtectedResourcesSearchQueryKey>
  >({
    queryKey: getV1ScopeProtectedResourcesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':scope']['protectedResources:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ScopeProtectedResourcesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ScopeProtectedResourcesSearchQueryKey>
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
    return {
      ...getV1ScopeProtectedResourcesSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
