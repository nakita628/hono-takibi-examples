import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
  args: InferRequestType<typeof client.domains.search.$get>,
) {
  return ['domains', '/domains/search', args] as const
}

export function getDomainsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsSearchQueryKey>
  >({
    queryKey: getDomainsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDomainsTldZoneIdQueryKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id', args] as const
}

export function getDomainsTldZoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsTldZoneIdQueryKey>
  >({
    queryKey: getDomainsTldZoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.tld[':zone_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsTldZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDomainsTldZoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsTldZoneIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsTldZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsTldZoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsTldZoneIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDomainsTldZoneIdDownloadQueryKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id/download', args] as const
}

export function getDomainsTldZoneIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDomainsTldZoneIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.tld[':zone_id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDomainsTldZoneIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDomainsTldZoneIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsTldZoneIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDomainsTldZoneIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDomainsTldZoneIdSearchQueryKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id/search', args] as const
}

export function getDomainsTldZoneIdSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDomainsTldZoneIdSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.tld[':zone_id'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDomainsTldZoneIdSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDomainsTldZoneIdSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsTldZoneIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDomainsTldZoneIdSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDomainsUpdatesAddedQueryKey(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
) {
  return ['domains', '/domains/updates/added', args] as const
}

export function getDomainsUpdatesAddedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesAddedQueryKey>
  >({
    queryKey: getDomainsUpdatesAddedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.added.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsUpdatesAdded<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesAddedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsUpdatesAddedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsUpdatesAdded<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesAddedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsUpdatesAddedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDomainsUpdatesAddedDownloadQueryKey(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
) {
  return ['domains', '/domains/updates/added/download', args] as const
}

export function getDomainsUpdatesAddedDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesAddedDownloadQueryKey>
  >({
    queryKey: getDomainsUpdatesAddedDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.added.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsUpdatesAddedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDomainsUpdatesAddedDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDomainsUpdatesAddedDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsUpdatesAddedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesAddedDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDomainsUpdatesAddedDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDomainsUpdatesDeletedQueryKey(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
) {
  return ['domains', '/domains/updates/deleted', args] as const
}

export function getDomainsUpdatesDeletedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesDeletedQueryKey>
  >({
    queryKey: getDomainsUpdatesDeletedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.deleted.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsUpdatesDeleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesDeletedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDomainsUpdatesDeletedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsUpdatesDeleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesDeletedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDomainsUpdatesDeletedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDomainsUpdatesDeletedDownloadQueryKey(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
) {
  return ['domains', '/domains/updates/deleted/download', args] as const
}

export function getDomainsUpdatesDeletedDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDomainsUpdatesDeletedDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.deleted.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsUpdatesDeletedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDomainsUpdatesDeletedDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDomainsUpdatesDeletedDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsUpdatesDeletedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDomainsUpdatesDeletedDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDomainsUpdatesListQueryKey(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
) {
  return ['domains', '/domains/updates/list', args] as const
}

export function getDomainsUpdatesListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.updates.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesListQueryKey>
  >({
    queryKey: getDomainsUpdatesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsUpdatesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsUpdatesListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsUpdatesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsUpdatesListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInfoApiQueryKey(args: InferRequestType<typeof client.info.api.$get>) {
  return ['info', '/info/api', args] as const
}

export function getInfoApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.info.api.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoApiQueryKey>
  >({
    queryKey: getInfoApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.api.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInfoApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.info.api.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoApiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfoApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.info.api.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoApiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInfoStatIndexQueryKey(
  args: InferRequestType<typeof client.info.stat.index.$get>,
) {
  return ['info', '/info/stat/', args] as const
}

export function getInfoStatIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.info.stat.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoStatIndexQueryKey>
  >({
    queryKey: getInfoStatIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.stat.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInfoStatIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.info.stat.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInfoStatIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoStatIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfoStatIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.info.stat.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInfoStatIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoStatIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInfoStatZoneQueryKey(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
) {
  return ['info', '/info/stat/:zone', args] as const
}

export function getInfoStatZoneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoStatZoneQueryKey>
  >({
    queryKey: getInfoStatZoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.stat[':zone'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInfoStatZone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoStatZoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoStatZoneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfoStatZone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoStatZoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoStatZoneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInfoTldIndexQueryKey() {
  return ['info', '/info/tld/'] as const
}

export function getInfoTldIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoTldIndexQueryKey>
  >({
    queryKey: getInfoTldIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.info.tld.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInfoTldIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInfoTldIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoTldIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfoTldIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInfoTldIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoTldIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInfoTldZoneQueryKey(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
) {
  return ['info', '/info/tld/:zone', args] as const
}

export function getInfoTldZoneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoTldZoneQueryKey>
  >({
    queryKey: getInfoTldZoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.tld[':zone'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInfoTldZone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoTldZoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoTldZoneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfoTldZone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoTldZoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoTldZoneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
