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

export function getDomainsKey() {
  return ['domains'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getDomainsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.search.$get>>,
) {
  return ['domains', '/domains/search', toValue(args)] as const
}

export function getDomainsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
          >,
          ReturnType<typeof getDomainsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsTldZoneIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>>,
) {
  return ['domains', '/domains/tld/:zone_id', toValue(args)] as const
}

export function getDomainsTldZoneIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsTldZoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.tld[':zone_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsTldZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsTldZoneIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsTldZoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsTldZoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.tld[':zone_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsTldZoneIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>
  >,
) {
  return ['domains', '/domains/tld/:zone_id/download', toValue(args)] as const
}

export function getDomainsTldZoneIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsTldZoneIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.tld[':zone_id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsTldZoneIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsTldZoneIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsTldZoneIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsTldZoneIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.tld[':zone_id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsTldZoneIdSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>
  >,
) {
  return ['domains', '/domains/tld/:zone_id/search', toValue(args)] as const
}

export function getDomainsTldZoneIdSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsTldZoneIdSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.tld[':zone_id'].search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsTldZoneIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsTldZoneIdSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsTldZoneIdSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsTldZoneIdSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.tld[':zone_id'].search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsUpdatesAddedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.added.$get>>,
) {
  return ['domains', '/domains/updates/added', toValue(args)] as const
}

export function getDomainsUpdatesAddedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.added.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsUpdatesAddedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.updates.added.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsUpdatesAdded<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.added.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
            >
          >,
          ReturnType<typeof getDomainsUpdatesAddedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesAddedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsUpdatesAddedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.updates.added.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsUpdatesAddedDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.added.download.$get>>,
) {
  return ['domains', '/domains/updates/added/download', toValue(args)] as const
}

export function getDomainsUpdatesAddedDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.added.download.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsUpdatesAddedDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.updates.added.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsUpdatesAddedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.added.download.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
              >
            >
          >,
          ReturnType<typeof getDomainsUpdatesAddedDownloadQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesAddedDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsUpdatesAddedDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.updates.added.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsUpdatesDeletedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.deleted.$get>>,
) {
  return ['domains', '/domains/updates/deleted', toValue(args)] as const
}

export function getDomainsUpdatesDeletedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.deleted.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsUpdatesDeletedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.updates.deleted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsUpdatesDeleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.deleted.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
            >
          >,
          ReturnType<typeof getDomainsUpdatesDeletedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesDeletedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsUpdatesDeletedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.updates.deleted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsUpdatesDeletedDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.deleted.download.$get>>,
) {
  return ['domains', '/domains/updates/deleted/download', toValue(args)] as const
}

export function getDomainsUpdatesDeletedDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.deleted.download.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsUpdatesDeletedDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.updates.deleted.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsUpdatesDeletedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.deleted.download.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
              >
            >
          >,
          ReturnType<typeof getDomainsUpdatesDeletedDownloadQueryKey>
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
          Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesDeletedDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsUpdatesDeletedDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.updates.deleted.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsUpdatesListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.list.$get>>,
) {
  return ['domains', '/domains/updates/list', toValue(args)] as const
}

export function getDomainsUpdatesListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsUpdatesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.updates.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsUpdatesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.updates.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
            >
          >,
          ReturnType<typeof getDomainsUpdatesListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsUpdatesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.updates.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoApiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.api.$get>>,
) {
  return ['info', '/info/api', toValue(args)] as const
}

export function getInfoApiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.api.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.api.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.api.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
          >,
          ReturnType<typeof getInfoApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info.api.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoStatIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.stat.index.$get>>,
) {
  return ['info', '/info/stat/', toValue(args)] as const
}

export function getInfoStatIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.stat.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoStatIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.stat.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInfoStatIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.stat.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>
            >
          >,
          ReturnType<typeof getInfoStatIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoStatIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoStatIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info.stat.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoStatZoneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.stat)[':zone']['$get']>>,
) {
  return ['info', '/info/stat/:zone', toValue(args)] as const
}

export function getInfoStatZoneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.stat)[':zone']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoStatZoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.stat[':zone'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInfoStatZone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.stat)[':zone']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
            >
          >,
          ReturnType<typeof getInfoStatZoneQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoStatZoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoStatZoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info.stat[':zone'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoTldIndexQueryKey() {
  return ['info', '/info/tld/'] as const
}

export function getInfoTldIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoTldIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.tld.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoTldIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
          >,
          ReturnType<typeof getInfoTldIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoTldIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoTldIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.tld.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoTldZoneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.tld)[':zone']['$get']>>,
) {
  return ['info', '/info/tld/:zone', toValue(args)] as const
}

export function getInfoTldZoneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.tld)[':zone']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoTldZoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.tld[':zone'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInfoTldZone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.tld)[':zone']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
            >
          >,
          ReturnType<typeof getInfoTldZoneQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoTldZoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoTldZoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info.tld[':zone'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
