import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDataKey() {
  return ['data'] as const
}

export function getDataDivisionsGroupedbypartyQueryKey(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
) {
  return ['data', '/data/Divisions/groupedbyparty', args] as const
}

export function getDataDivisionsGroupedbypartyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsGroupedbypartyQueryKey>
  >({
    queryKey: getDataDivisionsGroupedbypartyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.Divisions.groupedbyparty.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataDivisionsGroupedbyparty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsGroupedbypartyQueryKey>
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
      ...getDataDivisionsGroupedbypartyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataDivisionsGroupedbyparty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsGroupedbypartyQueryKey>
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
      ...getDataDivisionsGroupedbypartyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataDivisionsMembervotingQueryKey(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
) {
  return ['data', '/data/Divisions/membervoting', args] as const
}

export function getDataDivisionsMembervotingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsMembervotingQueryKey>
  >({
    queryKey: getDataDivisionsMembervotingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.Divisions.membervoting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataDivisionsMembervoting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsMembervotingQueryKey>
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
      ...getDataDivisionsMembervotingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataDivisionsMembervoting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsMembervotingQueryKey>
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
      ...getDataDivisionsMembervotingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataDivisionsSearchQueryKey(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
) {
  return ['data', '/data/Divisions/search', args] as const
}

export function getDataDivisionsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsSearchQueryKey>
  >({
    queryKey: getDataDivisionsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.Divisions.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataDivisionsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataDivisionsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataDivisionsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataDivisionsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDataDivisionsSearchTotalResultsQueryKey(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
) {
  return ['data', '/data/Divisions/searchTotalResults', args] as const
}

export function getDataDivisionsSearchTotalResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsSearchTotalResultsQueryKey>
  >({
    queryKey: getDataDivisionsSearchTotalResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.Divisions.searchTotalResults.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataDivisionsSearchTotalResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsSearchTotalResultsQueryKey>
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
      ...getDataDivisionsSearchTotalResultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataDivisionsSearchTotalResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsSearchTotalResultsQueryKey>
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
      ...getDataDivisionsSearchTotalResultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataDivisionsDivisionIdQueryKey(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
) {
  return ['data', '/data/Divisions/:divisionId', args] as const
}

export function getDataDivisionsDivisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsDivisionIdQueryKey>
  >({
    queryKey: getDataDivisionsDivisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.Divisions[':divisionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataDivisionsDivisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsDivisionIdQueryKey>
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
      ...getDataDivisionsDivisionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataDivisionsDivisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataDivisionsDivisionIdQueryKey>
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
      ...getDataDivisionsDivisionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
