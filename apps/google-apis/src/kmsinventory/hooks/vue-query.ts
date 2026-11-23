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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NameProtectedResourcesSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>
  >,
) {
  return ['v1', '/v1/:name/protectedResourcesSummary', toValue(args)] as const
}

export function getV1NameProtectedResourcesSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameProtectedResourcesSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].protectedResourcesSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameProtectedResourcesSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1NameProtectedResourcesSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameProtectedResourcesSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameProtectedResourcesSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].protectedResourcesSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentCryptoKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>,
) {
  return ['v1', '/v1/:parent/cryptoKeys', toValue(args)] as const
}

export function getV1ParentCryptoKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentCryptoKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].cryptoKeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentCryptoKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentCryptoKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCryptoKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentCryptoKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].cryptoKeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ScopeProtectedResourcesSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>
  >,
) {
  return ['v1', '/v1/:scope/protectedResources:search', toValue(args)] as const
}

export function getV1ScopeProtectedResourcesSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ScopeProtectedResourcesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':scope']['protectedResources:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ScopeProtectedResourcesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ScopeProtectedResourcesSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ScopeProtectedResourcesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ScopeProtectedResourcesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':scope']['protectedResources:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
