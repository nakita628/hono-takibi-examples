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

export function getApiKey() {
  return ['api'] as const
}

export function getApiLocationBrowseLocationTypeLocationNameQueryKey(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
) {
  return ['api', '/api/Location/Browse/:locationType/:locationName', args] as const
}

export function getApiLocationBrowseLocationTypeLocationNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationBrowseLocationTypeLocationNameQueryKey>
  >({
    queryKey: getApiLocationBrowseLocationTypeLocationNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Browse[':locationType'][':locationName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationBrowseLocationTypeLocationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationBrowseLocationTypeLocationNameQueryKey>
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
      ...getApiLocationBrowseLocationTypeLocationNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationBrowseLocationTypeLocationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationBrowseLocationTypeLocationNameQueryKey>
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
      ...getApiLocationBrowseLocationTypeLocationNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencySearchQueryKey(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
) {
  return ['api', '/api/Location/Constituency/Search', args] as const
}

export function getApiLocationConstituencySearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencySearchQueryKey>
  >({
    queryKey: getApiLocationConstituencySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency.Search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencySearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencySearchQueryKey>
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
      ...getApiLocationConstituencySearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencySearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencySearchQueryKey>
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
      ...getApiLocationConstituencySearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdQueryKey(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
) {
  return ['api', '/api/Location/Constituency/:id', args] as const
}

export function getApiLocationConstituencyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdQueryKey>
  >({
    queryKey: getApiLocationConstituencyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdQueryKey>
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
      ...getApiLocationConstituencyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdQueryKey>
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
      ...getApiLocationConstituencyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdElectionResultLatestQueryKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResult/Latest', args] as const
}

export function getApiLocationConstituencyIdElectionResultLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdElectionResultLatestQueryKey>
  >({
    queryKey: getApiLocationConstituencyIdElectionResultLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency[':id'].ElectionResult.Latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencyIdElectionResultLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdElectionResultLatestQueryKey>
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
      ...getApiLocationConstituencyIdElectionResultLatestQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencyIdElectionResultLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdElectionResultLatestQueryKey>
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
      ...getApiLocationConstituencyIdElectionResultLatestQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdElectionResultElectionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResult/:electionId', args] as const
}

export function getApiLocationConstituencyIdElectionResultElectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdElectionResultElectionIdQueryKey>
  >({
    queryKey: getApiLocationConstituencyIdElectionResultElectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency[':id'].ElectionResult[':electionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencyIdElectionResultElectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdElectionResultElectionIdQueryKey>
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
      ...getApiLocationConstituencyIdElectionResultElectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencyIdElectionResultElectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdElectionResultElectionIdQueryKey>
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
      ...getApiLocationConstituencyIdElectionResultElectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdElectionResultsQueryKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResults', args] as const
}

export function getApiLocationConstituencyIdElectionResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdElectionResultsQueryKey>
  >({
    queryKey: getApiLocationConstituencyIdElectionResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency[':id'].ElectionResults.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencyIdElectionResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdElectionResultsQueryKey>
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
      ...getApiLocationConstituencyIdElectionResultsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencyIdElectionResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdElectionResultsQueryKey>
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
      ...getApiLocationConstituencyIdElectionResultsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdGeometryQueryKey(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
) {
  return ['api', '/api/Location/Constituency/:id/Geometry', args] as const
}

export function getApiLocationConstituencyIdGeometryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdGeometryQueryKey>
  >({
    queryKey: getApiLocationConstituencyIdGeometryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency[':id'].Geometry.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencyIdGeometry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdGeometryQueryKey>
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
      ...getApiLocationConstituencyIdGeometryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencyIdGeometry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdGeometryQueryKey>
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
      ...getApiLocationConstituencyIdGeometryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdRepresentationsQueryKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/Representations', args] as const
}

export function getApiLocationConstituencyIdRepresentationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdRepresentationsQueryKey>
  >({
    queryKey: getApiLocationConstituencyIdRepresentationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency[':id'].Representations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencyIdRepresentations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdRepresentationsQueryKey>
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
      ...getApiLocationConstituencyIdRepresentationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencyIdRepresentations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdRepresentationsQueryKey>
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
      ...getApiLocationConstituencyIdRepresentationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdSynopsisQueryKey(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
) {
  return ['api', '/api/Location/Constituency/:id/Synopsis', args] as const
}

export function getApiLocationConstituencyIdSynopsisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdSynopsisQueryKey>
  >({
    queryKey: getApiLocationConstituencyIdSynopsisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Location.Constituency[':id'].Synopsis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLocationConstituencyIdSynopsis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdSynopsisQueryKey>
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
      ...getApiLocationConstituencyIdSynopsisQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLocationConstituencyIdSynopsis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationConstituencyIdSynopsisQueryKey>
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
      ...getApiLocationConstituencyIdSynopsisQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLordsInterestsRegisterQueryKey(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
) {
  return ['api', '/api/LordsInterests/Register', args] as const
}

export function getApiLordsInterestsRegisterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLordsInterestsRegisterQueryKey>
  >({
    queryKey: getApiLordsInterestsRegisterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.LordsInterests.Register.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLordsInterestsRegister<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLordsInterestsRegisterQueryKey>
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
      ...getApiLordsInterestsRegisterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLordsInterestsRegister<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLordsInterestsRegisterQueryKey>
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
      ...getApiLordsInterestsRegisterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiLordsInterestsStaffQueryKey(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
) {
  return ['api', '/api/LordsInterests/Staff', args] as const
}

export function getApiLordsInterestsStaffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLordsInterestsStaffQueryKey>
  >({
    queryKey: getApiLordsInterestsStaffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.LordsInterests.Staff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLordsInterestsStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLordsInterestsStaffQueryKey>
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
      ...getApiLordsInterestsStaffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLordsInterestsStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLordsInterestsStaffQueryKey>
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
      ...getApiLordsInterestsStaffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersHistoryQueryKey(
  args: InferRequestType<typeof client.api.Members.History.$get>,
) {
  return ['api', '/api/Members/History', args] as const
}

export function getApiMembersHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Members.History.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersHistoryQueryKey>
  >({
    queryKey: getApiMembersHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members.History.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMembersHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Members.History.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Members.History.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersSearchQueryKey(
  args: InferRequestType<typeof client.api.Members.Search.$get>,
) {
  return ['api', '/api/Members/Search', args] as const
}

export function getApiMembersSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Members.Search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersSearchQueryKey>
  >({
    queryKey: getApiMembersSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members.Search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMembersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Members.Search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Members.Search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersSearchHistoricalQueryKey(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
) {
  return ['api', '/api/Members/SearchHistorical', args] as const
}

export function getApiMembersSearchHistoricalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersSearchHistoricalQueryKey>
  >({
    queryKey: getApiMembersSearchHistoricalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members.SearchHistorical.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersSearchHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersSearchHistoricalQueryKey>
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
      ...getApiMembersSearchHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersSearchHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersSearchHistoricalQueryKey>
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
      ...getApiMembersSearchHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
) {
  return ['api', '/api/Members/:id', args] as const
}

export function getApiMembersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdQueryKey>
  >({
    queryKey: getApiMembersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMembersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdBiographyQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
) {
  return ['api', '/api/Members/:id/Biography', args] as const
}

export function getApiMembersIdBiographyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdBiographyQueryKey>
  >({
    queryKey: getApiMembersIdBiographyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Biography.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdBiography<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdBiographyQueryKey>
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
      ...getApiMembersIdBiographyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdBiography<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdBiographyQueryKey>
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
      ...getApiMembersIdBiographyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdContactQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
) {
  return ['api', '/api/Members/:id/Contact', args] as const
}

export function getApiMembersIdContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdContactQueryKey>
  >({
    queryKey: getApiMembersIdContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Contact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdContactQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdContactQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdContactQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdContactQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdContributionSummaryQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
) {
  return ['api', '/api/Members/:id/ContributionSummary', args] as const
}

export function getApiMembersIdContributionSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdContributionSummaryQueryKey>
  >({
    queryKey: getApiMembersIdContributionSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].ContributionSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdContributionSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdContributionSummaryQueryKey>
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
      ...getApiMembersIdContributionSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdContributionSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdContributionSummaryQueryKey>
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
      ...getApiMembersIdContributionSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdEdmsQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
) {
  return ['api', '/api/Members/:id/Edms', args] as const
}

export function getApiMembersIdEdmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdEdmsQueryKey>
  >({
    queryKey: getApiMembersIdEdmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Edms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdEdms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdEdmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdEdmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersIdEdms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdEdmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdEdmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdExperienceQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
) {
  return ['api', '/api/Members/:id/Experience', args] as const
}

export function getApiMembersIdExperienceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdExperienceQueryKey>
  >({
    queryKey: getApiMembersIdExperienceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Experience.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdExperience<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdExperienceQueryKey>
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
      ...getApiMembersIdExperienceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdExperience<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdExperienceQueryKey>
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
      ...getApiMembersIdExperienceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdFocusQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
) {
  return ['api', '/api/Members/:id/Focus', args] as const
}

export function getApiMembersIdFocusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdFocusQueryKey>
  >({
    queryKey: getApiMembersIdFocusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Focus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdFocus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdFocusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdFocusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersIdFocus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdFocusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdFocusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdLatestElectionResultQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
) {
  return ['api', '/api/Members/:id/LatestElectionResult', args] as const
}

export function getApiMembersIdLatestElectionResultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdLatestElectionResultQueryKey>
  >({
    queryKey: getApiMembersIdLatestElectionResultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].LatestElectionResult.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdLatestElectionResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdLatestElectionResultQueryKey>
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
      ...getApiMembersIdLatestElectionResultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdLatestElectionResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdLatestElectionResultQueryKey>
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
      ...getApiMembersIdLatestElectionResultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdPortraitQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
) {
  return ['api', '/api/Members/:id/Portrait', args] as const
}

export function getApiMembersIdPortraitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdPortraitQueryKey>
  >({
    queryKey: getApiMembersIdPortraitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Portrait.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdPortrait<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdPortraitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdPortraitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersIdPortrait<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdPortraitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdPortraitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdPortraitUrlQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
) {
  return ['api', '/api/Members/:id/PortraitUrl', args] as const
}

export function getApiMembersIdPortraitUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdPortraitUrlQueryKey>
  >({
    queryKey: getApiMembersIdPortraitUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].PortraitUrl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdPortraitUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdPortraitUrlQueryKey>
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
      ...getApiMembersIdPortraitUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdPortraitUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdPortraitUrlQueryKey>
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
      ...getApiMembersIdPortraitUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdRegisteredInterestsQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
) {
  return ['api', '/api/Members/:id/RegisteredInterests', args] as const
}

export function getApiMembersIdRegisteredInterestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdRegisteredInterestsQueryKey>
  >({
    queryKey: getApiMembersIdRegisteredInterestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].RegisteredInterests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdRegisteredInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdRegisteredInterestsQueryKey>
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
      ...getApiMembersIdRegisteredInterestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdRegisteredInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdRegisteredInterestsQueryKey>
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
      ...getApiMembersIdRegisteredInterestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdStaffQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
) {
  return ['api', '/api/Members/:id/Staff', args] as const
}

export function getApiMembersIdStaffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdStaffQueryKey>
  >({
    queryKey: getApiMembersIdStaffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Staff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdStaffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdStaffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdStaffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdStaffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdSynopsisQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
) {
  return ['api', '/api/Members/:id/Synopsis', args] as const
}

export function getApiMembersIdSynopsisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdSynopsisQueryKey>
  >({
    queryKey: getApiMembersIdSynopsisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Synopsis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdSynopsis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdSynopsisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdSynopsisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersIdSynopsis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdSynopsisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdSynopsisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdThumbnailQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
) {
  return ['api', '/api/Members/:id/Thumbnail', args] as const
}

export function getApiMembersIdThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdThumbnailQueryKey>
  >({
    queryKey: getApiMembersIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdThumbnailQueryKey>
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
      ...getApiMembersIdThumbnailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdThumbnailQueryKey>
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
      ...getApiMembersIdThumbnailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdThumbnailUrlQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
) {
  return ['api', '/api/Members/:id/ThumbnailUrl', args] as const
}

export function getApiMembersIdThumbnailUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdThumbnailUrlQueryKey>
  >({
    queryKey: getApiMembersIdThumbnailUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].ThumbnailUrl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdThumbnailUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdThumbnailUrlQueryKey>
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
      ...getApiMembersIdThumbnailUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdThumbnailUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdThumbnailUrlQueryKey>
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
      ...getApiMembersIdThumbnailUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMembersIdVotingQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
) {
  return ['api', '/api/Members/:id/Voting', args] as const
}

export function getApiMembersIdVotingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdVotingQueryKey>
  >({
    queryKey: getApiMembersIdVotingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].Voting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdVoting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdVotingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembersIdVotingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembersIdVoting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdVotingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembersIdVotingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembersIdWrittenQuestionsQueryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
) {
  return ['api', '/api/Members/:id/WrittenQuestions', args] as const
}

export function getApiMembersIdWrittenQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdWrittenQuestionsQueryKey>
  >({
    queryKey: getApiMembersIdWrittenQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Members[':id'].WrittenQuestions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMembersIdWrittenQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdWrittenQuestionsQueryKey>
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
      ...getApiMembersIdWrittenQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMembersIdWrittenQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembersIdWrittenQuestionsQueryKey>
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
      ...getApiMembersIdWrittenQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPartiesGetActiveHouseQueryKey(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
) {
  return ['api', '/api/Parties/GetActive/:house', args] as const
}

export function getApiPartiesGetActiveHouseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartiesGetActiveHouseQueryKey>
  >({
    queryKey: getApiPartiesGetActiveHouseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Parties.GetActive[':house'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPartiesGetActiveHouse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartiesGetActiveHouseQueryKey>
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
      ...getApiPartiesGetActiveHouseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPartiesGetActiveHouse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartiesGetActiveHouseQueryKey>
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
      ...getApiPartiesGetActiveHouseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPartiesLordsByTypeForDateQueryKey(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
) {
  return ['api', '/api/Parties/LordsByType/:forDate', args] as const
}

export function getApiPartiesLordsByTypeForDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartiesLordsByTypeForDateQueryKey>
  >({
    queryKey: getApiPartiesLordsByTypeForDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Parties.LordsByType[':forDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPartiesLordsByTypeForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartiesLordsByTypeForDateQueryKey>
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
      ...getApiPartiesLordsByTypeForDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPartiesLordsByTypeForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartiesLordsByTypeForDateQueryKey>
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
      ...getApiPartiesLordsByTypeForDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPartiesStateOfThePartiesHouseForDateQueryKey(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
) {
  return ['api', '/api/Parties/StateOfTheParties/:house/:forDate', args] as const
}

export function getApiPartiesStateOfThePartiesHouseForDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartiesStateOfThePartiesHouseForDateQueryKey>
  >({
    queryKey: getApiPartiesStateOfThePartiesHouseForDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Parties.StateOfTheParties[':house'][':forDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPartiesStateOfThePartiesHouseForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartiesStateOfThePartiesHouseForDateQueryKey>
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
      ...getApiPartiesStateOfThePartiesHouseForDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPartiesStateOfThePartiesHouseForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartiesStateOfThePartiesHouseForDateQueryKey>
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
      ...getApiPartiesStateOfThePartiesHouseForDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsDepartmentsTypeQueryKey(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
) {
  return ['api', '/api/Posts/Departments/:type', args] as const
}

export function getApiPostsDepartmentsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsDepartmentsTypeQueryKey>
  >({
    queryKey: getApiPostsDepartmentsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.Departments[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsDepartmentsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsDepartmentsTypeQueryKey>
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
      ...getApiPostsDepartmentsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsDepartmentsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsDepartmentsTypeQueryKey>
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
      ...getApiPostsDepartmentsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsGovernmentPostsQueryKey(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
) {
  return ['api', '/api/Posts/GovernmentPosts', args] as const
}

export function getApiPostsGovernmentPostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsGovernmentPostsQueryKey>
  >({
    queryKey: getApiPostsGovernmentPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.GovernmentPosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsGovernmentPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsGovernmentPostsQueryKey>
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
      ...getApiPostsGovernmentPostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsGovernmentPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsGovernmentPostsQueryKey>
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
      ...getApiPostsGovernmentPostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsOppositionPostsQueryKey(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
) {
  return ['api', '/api/Posts/OppositionPosts', args] as const
}

export function getApiPostsOppositionPostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsOppositionPostsQueryKey>
  >({
    queryKey: getApiPostsOppositionPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.OppositionPosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsOppositionPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsOppositionPostsQueryKey>
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
      ...getApiPostsOppositionPostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsOppositionPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsOppositionPostsQueryKey>
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
      ...getApiPostsOppositionPostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsSpeakerAndDeputiesForDateQueryKey(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
) {
  return ['api', '/api/Posts/SpeakerAndDeputies/:forDate', args] as const
}

export function getApiPostsSpeakerAndDeputiesForDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsSpeakerAndDeputiesForDateQueryKey>
  >({
    queryKey: getApiPostsSpeakerAndDeputiesForDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.SpeakerAndDeputies[':forDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsSpeakerAndDeputiesForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsSpeakerAndDeputiesForDateQueryKey>
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
      ...getApiPostsSpeakerAndDeputiesForDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsSpeakerAndDeputiesForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsSpeakerAndDeputiesForDateQueryKey>
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
      ...getApiPostsSpeakerAndDeputiesForDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsSpokespersonsQueryKey(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
) {
  return ['api', '/api/Posts/Spokespersons', args] as const
}

export function getApiPostsSpokespersonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsSpokespersonsQueryKey>
  >({
    queryKey: getApiPostsSpokespersonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.Spokespersons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsSpokespersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsSpokespersonsQueryKey>
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
      ...getApiPostsSpokespersonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsSpokespersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsSpokespersonsQueryKey>
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
      ...getApiPostsSpokespersonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiReferenceAnsweringBodiesQueryKey(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
) {
  return ['api', '/api/Reference/AnsweringBodies', args] as const
}

export function getApiReferenceAnsweringBodiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferenceAnsweringBodiesQueryKey>
  >({
    queryKey: getApiReferenceAnsweringBodiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Reference.AnsweringBodies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReferenceAnsweringBodies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferenceAnsweringBodiesQueryKey>
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
      ...getApiReferenceAnsweringBodiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReferenceAnsweringBodies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferenceAnsweringBodiesQueryKey>
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
      ...getApiReferenceAnsweringBodiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiReferenceDepartmentsQueryKey(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
) {
  return ['api', '/api/Reference/Departments', args] as const
}

export function getApiReferenceDepartmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferenceDepartmentsQueryKey>
  >({
    queryKey: getApiReferenceDepartmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Reference.Departments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReferenceDepartments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferenceDepartmentsQueryKey>
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
      ...getApiReferenceDepartmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReferenceDepartments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferenceDepartmentsQueryKey>
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
      ...getApiReferenceDepartmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiReferenceDepartmentsIdLogoQueryKey(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
) {
  return ['api', '/api/Reference/Departments/:id/Logo', args] as const
}

export function getApiReferenceDepartmentsIdLogoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferenceDepartmentsIdLogoQueryKey>
  >({
    queryKey: getApiReferenceDepartmentsIdLogoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Reference.Departments[':id'].Logo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReferenceDepartmentsIdLogo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferenceDepartmentsIdLogoQueryKey>
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
      ...getApiReferenceDepartmentsIdLogoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReferenceDepartmentsIdLogo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferenceDepartmentsIdLogoQueryKey>
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
      ...getApiReferenceDepartmentsIdLogoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiReferencePolicyInterestsQueryKey() {
  return ['api', '/api/Reference/PolicyInterests'] as const
}

export function getApiReferencePolicyInterestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferencePolicyInterestsQueryKey>
  >({
    queryKey: getApiReferencePolicyInterestsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Reference.PolicyInterests.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReferencePolicyInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferencePolicyInterestsQueryKey>
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
      ...getApiReferencePolicyInterestsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReferencePolicyInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReferencePolicyInterestsQueryKey>
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
      ...getApiReferencePolicyInterestsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
