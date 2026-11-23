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

export function getApiKey() {
  return ['api'] as const
}

export function getApiLocationBrowseLocationTypeLocationNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']>
  >,
) {
  return ['api', '/api/Location/Browse/:locationType/:locationName', toValue(args)] as const
}

export function getApiLocationBrowseLocationTypeLocationNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationBrowseLocationTypeLocationNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Browse[':locationType'][':locationName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiLocationBrowseLocationTypeLocationNameQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationBrowseLocationTypeLocationNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Browse[':locationType'][':locationName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencySearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Location.Constituency.Search.$get>>,
) {
  return ['api', '/api/Location/Constituency/Search', toValue(args)] as const
}

export function getApiLocationConstituencySearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Location.Constituency.Search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencySearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency.Search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLocationConstituencySearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Location.Constituency.Search.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLocationConstituencySearchQueryKey>
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
          Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencySearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencySearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency.Search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>
  >,
) {
  return ['api', '/api/Location/Constituency/:id', toValue(args)] as const
}

export function getApiLocationConstituencyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLocationConstituencyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdElectionResultLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
    >
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResult/Latest', toValue(args)] as const
}

export function getApiLocationConstituencyIdElectionResultLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencyIdElectionResultLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency[':id'].ElectionResult.Latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiLocationConstituencyIdElectionResultLatestQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencyIdElectionResultLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency[':id'].ElectionResult.Latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdElectionResultElectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/Location/Constituency/:id/ElectionResult/:electionId',
    toValue(args),
  ] as const
}

export function getApiLocationConstituencyIdElectionResultElectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencyIdElectionResultElectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency[':id'].ElectionResult[':electionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiLocationConstituencyIdElectionResultElectionIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencyIdElectionResultElectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency[':id'].ElectionResult[':electionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdElectionResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResults', toValue(args)] as const
}

export function getApiLocationConstituencyIdElectionResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencyIdElectionResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency[':id'].ElectionResults.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiLocationConstituencyIdElectionResultsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdElectionResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencyIdElectionResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency[':id'].ElectionResults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdGeometryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
  >,
) {
  return ['api', '/api/Location/Constituency/:id/Geometry', toValue(args)] as const
}

export function getApiLocationConstituencyIdGeometryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencyIdGeometryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency[':id'].Geometry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLocationConstituencyIdGeometryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdGeometryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencyIdGeometryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency[':id'].Geometry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdRepresentationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
  >,
) {
  return ['api', '/api/Location/Constituency/:id/Representations', toValue(args)] as const
}

export function getApiLocationConstituencyIdRepresentationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencyIdRepresentationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency[':id'].Representations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiLocationConstituencyIdRepresentationsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.Location.Constituency)[':id']['Representations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdRepresentationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencyIdRepresentationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency[':id'].Representations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLocationConstituencyIdSynopsisQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
  >,
) {
  return ['api', '/api/Location/Constituency/:id/Synopsis', toValue(args)] as const
}

export function getApiLocationConstituencyIdSynopsisQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLocationConstituencyIdSynopsisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Location.Constituency[':id'].Synopsis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLocationConstituencyIdSynopsisQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationConstituencyIdSynopsisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLocationConstituencyIdSynopsisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Location.Constituency[':id'].Synopsis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLordsInterestsRegisterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.LordsInterests.Register.$get>>,
) {
  return ['api', '/api/LordsInterests/Register', toValue(args)] as const
}

export function getApiLordsInterestsRegisterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.LordsInterests.Register.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLordsInterestsRegisterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.LordsInterests.Register.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLordsInterestsRegister<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.LordsInterests.Register.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLordsInterestsRegisterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLordsInterestsRegisterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLordsInterestsRegisterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.LordsInterests.Register.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLordsInterestsStaffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.LordsInterests.Staff.$get>>,
) {
  return ['api', '/api/LordsInterests/Staff', toValue(args)] as const
}

export function getApiLordsInterestsStaffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.LordsInterests.Staff.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLordsInterestsStaffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.LordsInterests.Staff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLordsInterestsStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.LordsInterests.Staff.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
            >
          >,
          ReturnType<typeof getApiLordsInterestsStaffQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLordsInterestsStaffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLordsInterestsStaffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.LordsInterests.Staff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.History.$get>>,
) {
  return ['api', '/api/Members/History', toValue(args)] as const
}

export function getApiMembersHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.History.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members.History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembersHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.History.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
            >
          >,
          ReturnType<typeof getApiMembersHistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members.History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.Search.$get>>,
) {
  return ['api', '/api/Members/Search', toValue(args)] as const
}

export function getApiMembersSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.Search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members.Search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.Search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>
            >
          >,
          ReturnType<typeof getApiMembersSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members.Search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersSearchHistoricalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.SearchHistorical.$get>>,
) {
  return ['api', '/api/Members/SearchHistorical', toValue(args)] as const
}

export function getApiMembersSearchHistoricalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.SearchHistorical.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersSearchHistoricalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members.SearchHistorical.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembersSearchHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Members.SearchHistorical.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>
              >
            >
          >,
          ReturnType<typeof getApiMembersSearchHistoricalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersSearchHistoricalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersSearchHistoricalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members.SearchHistorical.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['$get']>>,
) {
  return ['api', '/api/Members/:id', toValue(args)] as const
}

export function getApiMembersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiMembersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdBiographyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>>,
) {
  return ['api', '/api/Members/:id/Biography', toValue(args)] as const
}

export function getApiMembersIdBiographyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdBiographyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Biography.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdBiographyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdBiographyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdBiographyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Biography.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdContactQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>>,
) {
  return ['api', '/api/Members/:id/Contact', toValue(args)] as const
}

export function getApiMembersIdContactQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Contact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdContactQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Contact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdContributionSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>
  >,
) {
  return ['api', '/api/Members/:id/ContributionSummary', toValue(args)] as const
}

export function getApiMembersIdContributionSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdContributionSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].ContributionSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiMembersIdContributionSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdContributionSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdContributionSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].ContributionSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdEdmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>>,
) {
  return ['api', '/api/Members/:id/Edms', toValue(args)] as const
}

export function getApiMembersIdEdmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdEdmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Edms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembersIdEdms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdEdmsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdEdmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdEdmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Edms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdExperienceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>
  >,
) {
  return ['api', '/api/Members/:id/Experience', toValue(args)] as const
}

export function getApiMembersIdExperienceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdExperienceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Experience.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdExperienceQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdExperienceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdExperienceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Experience.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdFocusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>>,
) {
  return ['api', '/api/Members/:id/Focus', toValue(args)] as const
}

export function getApiMembersIdFocusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdFocusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Focus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembersIdFocus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdFocusQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdFocusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdFocusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Focus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdLatestElectionResultQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>
  >,
) {
  return ['api', '/api/Members/:id/LatestElectionResult', toValue(args)] as const
}

export function getApiMembersIdLatestElectionResultQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdLatestElectionResultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].LatestElectionResult.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiMembersIdLatestElectionResultQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdLatestElectionResultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdLatestElectionResultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].LatestElectionResult.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdPortraitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>>,
) {
  return ['api', '/api/Members/:id/Portrait', toValue(args)] as const
}

export function getApiMembersIdPortraitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdPortraitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Portrait.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdPortraitQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdPortraitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdPortraitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Portrait.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdPortraitUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>
  >,
) {
  return ['api', '/api/Members/:id/PortraitUrl', toValue(args)] as const
}

export function getApiMembersIdPortraitUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdPortraitUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].PortraitUrl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdPortraitUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdPortraitUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdPortraitUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].PortraitUrl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdRegisteredInterestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>
  >,
) {
  return ['api', '/api/Members/:id/RegisteredInterests', toValue(args)] as const
}

export function getApiMembersIdRegisteredInterestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdRegisteredInterestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].RegisteredInterests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiMembersIdRegisteredInterestsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdRegisteredInterestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdRegisteredInterestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].RegisteredInterests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdStaffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>>,
) {
  return ['api', '/api/Members/:id/Staff', toValue(args)] as const
}

export function getApiMembersIdStaffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdStaffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Staff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembersIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdStaffQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdStaffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdStaffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Staff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdSynopsisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>,
) {
  return ['api', '/api/Members/:id/Synopsis', toValue(args)] as const
}

export function getApiMembersIdSynopsisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdSynopsisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Synopsis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdSynopsisQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdSynopsisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdSynopsisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Synopsis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdThumbnailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>,
) {
  return ['api', '/api/Members/:id/Thumbnail', toValue(args)] as const
}

export function getApiMembersIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdThumbnailUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>
  >,
) {
  return ['api', '/api/Members/:id/ThumbnailUrl', toValue(args)] as const
}

export function getApiMembersIdThumbnailUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdThumbnailUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].ThumbnailUrl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdThumbnailUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdThumbnailUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdThumbnailUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].ThumbnailUrl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdVotingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>>,
) {
  return ['api', '/api/Members/:id/Voting', toValue(args)] as const
}

export function getApiMembersIdVotingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdVotingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].Voting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdVotingQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdVotingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdVotingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].Voting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembersIdWrittenQuestionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>
  >,
) {
  return ['api', '/api/Members/:id/WrittenQuestions', toValue(args)] as const
}

export function getApiMembersIdWrittenQuestionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembersIdWrittenQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Members[':id'].WrittenQuestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembersIdWrittenQuestionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembersIdWrittenQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembersIdWrittenQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Members[':id'].WrittenQuestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPartiesGetActiveHouseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>>,
) {
  return ['api', '/api/Parties/GetActive/:house', toValue(args)] as const
}

export function getApiPartiesGetActiveHouseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPartiesGetActiveHouseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Parties.GetActive[':house'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPartiesGetActiveHouseQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartiesGetActiveHouseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPartiesGetActiveHouseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Parties.GetActive[':house'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPartiesLordsByTypeForDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>
  >,
) {
  return ['api', '/api/Parties/LordsByType/:forDate', toValue(args)] as const
}

export function getApiPartiesLordsByTypeForDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPartiesLordsByTypeForDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Parties.LordsByType[':forDate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPartiesLordsByTypeForDateQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartiesLordsByTypeForDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPartiesLordsByTypeForDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Parties.LordsByType[':forDate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPartiesStateOfThePartiesHouseForDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
  >,
) {
  return ['api', '/api/Parties/StateOfTheParties/:house/:forDate', toValue(args)] as const
}

export function getApiPartiesStateOfThePartiesHouseForDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPartiesStateOfThePartiesHouseForDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Parties.StateOfTheParties[':house'][':forDate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiPartiesStateOfThePartiesHouseForDateQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartiesStateOfThePartiesHouseForDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPartiesStateOfThePartiesHouseForDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Parties.StateOfTheParties[':house'][':forDate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsDepartmentsTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>>,
) {
  return ['api', '/api/Posts/Departments/:type', toValue(args)] as const
}

export function getApiPostsDepartmentsTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsDepartmentsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.Departments[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPostsDepartmentsTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsDepartmentsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsDepartmentsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.Departments[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsGovernmentPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>>,
) {
  return ['api', '/api/Posts/GovernmentPosts', toValue(args)] as const
}

export function getApiPostsGovernmentPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsGovernmentPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.GovernmentPosts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPostsGovernmentPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPostsGovernmentPostsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsGovernmentPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsGovernmentPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.GovernmentPosts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsOppositionPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.OppositionPosts.$get>>,
) {
  return ['api', '/api/Posts/OppositionPosts', toValue(args)] as const
}

export function getApiPostsOppositionPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.OppositionPosts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsOppositionPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.OppositionPosts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPostsOppositionPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.OppositionPosts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPostsOppositionPostsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsOppositionPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsOppositionPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.OppositionPosts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsSpeakerAndDeputiesForDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>
  >,
) {
  return ['api', '/api/Posts/SpeakerAndDeputies/:forDate', toValue(args)] as const
}

export function getApiPostsSpeakerAndDeputiesForDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsSpeakerAndDeputiesForDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.SpeakerAndDeputies[':forDate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiPostsSpeakerAndDeputiesForDateQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsSpeakerAndDeputiesForDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsSpeakerAndDeputiesForDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.SpeakerAndDeputies[':forDate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsSpokespersonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.Spokespersons.$get>>,
) {
  return ['api', '/api/Posts/Spokespersons', toValue(args)] as const
}

export function getApiPostsSpokespersonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.Spokespersons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsSpokespersonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.Spokespersons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPostsSpokespersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.Spokespersons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
            >
          >,
          ReturnType<typeof getApiPostsSpokespersonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsSpokespersonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsSpokespersonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.Spokespersons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReferenceAnsweringBodiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>>,
) {
  return ['api', '/api/Reference/AnsweringBodies', toValue(args)] as const
}

export function getApiReferenceAnsweringBodiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReferenceAnsweringBodiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Reference.AnsweringBodies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReferenceAnsweringBodies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>
              >
            >
          >,
          ReturnType<typeof getApiReferenceAnsweringBodiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferenceAnsweringBodiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReferenceAnsweringBodiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Reference.AnsweringBodies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReferenceDepartmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Reference.Departments.$get>>,
) {
  return ['api', '/api/Reference/Departments', toValue(args)] as const
}

export function getApiReferenceDepartmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Reference.Departments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReferenceDepartmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Reference.Departments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReferenceDepartments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Reference.Departments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>
              >
            >
          >,
          ReturnType<typeof getApiReferenceDepartmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferenceDepartmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReferenceDepartmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Reference.Departments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReferenceDepartmentsIdLogoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>
  >,
) {
  return ['api', '/api/Reference/Departments/:id/Logo', toValue(args)] as const
}

export function getApiReferenceDepartmentsIdLogoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReferenceDepartmentsIdLogoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Reference.Departments[':id'].Logo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiReferenceDepartmentsIdLogoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferenceDepartmentsIdLogoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReferenceDepartmentsIdLogoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Reference.Departments[':id'].Logo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReferencePolicyInterestsQueryKey() {
  return ['api', '/api/Reference/PolicyInterests'] as const
}

export function getApiReferencePolicyInterestsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiReferencePolicyInterestsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Reference.PolicyInterests.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>
              >
            >
          >,
          ReturnType<typeof getApiReferencePolicyInterestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReferencePolicyInterestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiReferencePolicyInterestsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Reference.PolicyInterests.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
