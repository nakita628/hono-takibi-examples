import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createApiLocationBrowseLocationTypeLocationName<
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
  args: () => InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationBrowseLocationTypeLocationNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencySearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencySearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencyIdElectionResultLatest<
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
  args: () => InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencyIdElectionResultLatestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencyIdElectionResultElectionId<
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
  args: () => InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencyIdElectionResultElectionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencyIdElectionResults<
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
  args: () => InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencyIdElectionResultsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencyIdGeometry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Geometry']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencyIdGeometryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencyIdRepresentations<
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
  args: () => InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencyIdRepresentationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiLocationConstituencyIdSynopsis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLocationConstituencyIdSynopsisQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiLordsInterestsRegister<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.LordsInterests.Register.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLordsInterestsRegisterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiLordsInterestsStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiLordsInterestsStaffQueryKey>
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
      ...getApiLordsInterestsStaffQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Members.History.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMembersHistoryQueryKey>
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
    return { ...getApiMembersHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Members.Search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMembersSearchQueryKey>
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
    return { ...getApiMembersSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersSearchHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersSearchHistoricalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMembersIdQueryKey>
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
    return { ...getApiMembersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersIdBiography<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdBiographyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiMembersIdContactQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersIdContributionSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMembersIdContributionSummaryQueryKey>
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
      ...getApiMembersIdContributionSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdEdms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiMembersIdEdmsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersIdExperience<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdExperienceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdFocus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiMembersIdFocusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersIdLatestElectionResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdLatestElectionResultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdPortrait<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdPortraitQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdPortraitUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdPortraitUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdRegisteredInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMembersIdRegisteredInterestsQueryKey>
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
      ...getApiMembersIdRegisteredInterestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiMembersIdStaffQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersIdSynopsis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdSynopsisQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdThumbnailUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdThumbnailUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMembersIdVoting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiMembersIdVotingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMembersIdWrittenQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMembersIdWrittenQuestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPartiesGetActiveHouse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiPartiesGetActiveHouseQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPartiesLordsByTypeForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiPartiesLordsByTypeForDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPartiesStateOfThePartiesHouseForDate<
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
  args: () => InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiPartiesStateOfThePartiesHouseForDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsDepartmentsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiPostsDepartmentsTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsGovernmentPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPostsGovernmentPostsQueryKey>
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
      ...getApiPostsGovernmentPostsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsOppositionPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPostsOppositionPostsQueryKey>
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
      ...getApiPostsOppositionPostsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsSpeakerAndDeputiesForDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPostsSpeakerAndDeputiesForDateQueryKey>
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
      ...getApiPostsSpeakerAndDeputiesForDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsSpokespersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPostsSpokespersonsQueryKey>
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
      ...getApiPostsSpokespersonsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiReferenceAnsweringBodies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiReferenceAnsweringBodiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiReferenceDepartments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Reference.Departments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiReferenceDepartmentsQueryKey>
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
      ...getApiReferenceDepartmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiReferenceDepartmentsIdLogo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiReferenceDepartmentsIdLogoQueryKey>
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
      ...getApiReferenceDepartmentsIdLogoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiReferencePolicyInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiReferencePolicyInterestsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
