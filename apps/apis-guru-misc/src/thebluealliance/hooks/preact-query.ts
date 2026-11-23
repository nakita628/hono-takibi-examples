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

export function getDistrictKey() {
  return ['district'] as const
}

export function getDistrictsKey() {
  return ['districts'] as const
}

export function getEventKey() {
  return ['event'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getMatchKey() {
  return ['match'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getDistrictDistrictKeyEventsQueryKey(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/events', keyArgs] as const
}

export function getDistrictDistrictKeyEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyEventsQueryKey>
  >({
    queryKey: getDistrictDistrictKeyEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district[':district_key'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistrictDistrictKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyEventsQueryKey>
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
      ...getDistrictDistrictKeyEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistrictDistrictKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyEventsQueryKey>
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
      ...getDistrictDistrictKeyEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyEventsKeysQueryKey(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/events/keys', keyArgs] as const
}

export function getDistrictDistrictKeyEventsKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyEventsKeysQueryKey>
  >({
    queryKey: getDistrictDistrictKeyEventsKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district[':district_key'].events.keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistrictDistrictKeyEventsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyEventsKeysQueryKey>
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
      ...getDistrictDistrictKeyEventsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistrictDistrictKeyEventsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyEventsKeysQueryKey>
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
      ...getDistrictDistrictKeyEventsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyEventsSimpleQueryKey(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/events/simple', keyArgs] as const
}

export function getDistrictDistrictKeyEventsSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyEventsSimpleQueryKey>
  >({
    queryKey: getDistrictDistrictKeyEventsSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district[':district_key'].events.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistrictDistrictKeyEventsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyEventsSimpleQueryKey>
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
      ...getDistrictDistrictKeyEventsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistrictDistrictKeyEventsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyEventsSimpleQueryKey>
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
      ...getDistrictDistrictKeyEventsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyRankingsQueryKey(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/rankings', keyArgs] as const
}

export function getDistrictDistrictKeyRankingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyRankingsQueryKey>
  >({
    queryKey: getDistrictDistrictKeyRankingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district[':district_key'].rankings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistrictDistrictKeyRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyRankingsQueryKey>
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
      ...getDistrictDistrictKeyRankingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistrictDistrictKeyRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyRankingsQueryKey>
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
      ...getDistrictDistrictKeyRankingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyTeamsQueryKey(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/teams', keyArgs] as const
}

export function getDistrictDistrictKeyTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyTeamsQueryKey>
  >({
    queryKey: getDistrictDistrictKeyTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district[':district_key'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistrictDistrictKeyTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyTeamsQueryKey>
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
      ...getDistrictDistrictKeyTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistrictDistrictKeyTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyTeamsQueryKey>
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
      ...getDistrictDistrictKeyTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyTeamsKeysQueryKey(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/teams/keys', keyArgs] as const
}

export function getDistrictDistrictKeyTeamsKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyTeamsKeysQueryKey>
  >({
    queryKey: getDistrictDistrictKeyTeamsKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district[':district_key'].teams.keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistrictDistrictKeyTeamsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyTeamsKeysQueryKey>
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
      ...getDistrictDistrictKeyTeamsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistrictDistrictKeyTeamsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyTeamsKeysQueryKey>
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
      ...getDistrictDistrictKeyTeamsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyTeamsSimpleQueryKey(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/teams/simple', keyArgs] as const
}

export function getDistrictDistrictKeyTeamsSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyTeamsSimpleQueryKey>
  >({
    queryKey: getDistrictDistrictKeyTeamsSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district[':district_key'].teams.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistrictDistrictKeyTeamsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyTeamsSimpleQueryKey>
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
      ...getDistrictDistrictKeyTeamsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistrictDistrictKeyTeamsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictDistrictKeyTeamsSimpleQueryKey>
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
      ...getDistrictDistrictKeyTeamsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistrictsYearQueryKey(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['districts', '/districts/:year', keyArgs] as const
}

export function getDistrictsYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsYearQueryKey>
  >({
    queryKey: getDistrictsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':year'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDistrictsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictsYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsYearQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictsYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsYearQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventKeyQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key', keyArgs] as const
}

export function getEventEventKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyQueryKey>
  >({
    queryKey: getEventEventKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventEventKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventEventKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventEventKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventEventKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventKeyAlliancesQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/alliances', keyArgs] as const
}

export function getEventEventKeyAlliancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyAlliancesQueryKey>
  >({
    queryKey: getEventEventKeyAlliancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].alliances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyAlliances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyAlliancesQueryKey>
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
      ...getEventEventKeyAlliancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyAlliances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyAlliancesQueryKey>
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
      ...getEventEventKeyAlliancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyAwardsQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/awards', keyArgs] as const
}

export function getEventEventKeyAwardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyAwardsQueryKey>
  >({
    queryKey: getEventEventKeyAwardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].awards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyAwardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventEventKeyAwardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventEventKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyAwardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventEventKeyAwardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventKeyDistrictPointsQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/district_points', keyArgs] as const
}

export function getEventEventKeyDistrictPointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyDistrictPointsQueryKey>
  >({
    queryKey: getEventEventKeyDistrictPointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].district_points.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyDistrictPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyDistrictPointsQueryKey>
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
      ...getEventEventKeyDistrictPointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyDistrictPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyDistrictPointsQueryKey>
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
      ...getEventEventKeyDistrictPointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyInsightsQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/insights', keyArgs] as const
}

export function getEventEventKeyInsightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyInsightsQueryKey>
  >({
    queryKey: getEventEventKeyInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].insights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyInsightsQueryKey>
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
      ...getEventEventKeyInsightsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyInsightsQueryKey>
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
      ...getEventEventKeyInsightsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyMatchesQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches', keyArgs] as const
}

export function getEventEventKeyMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesQueryKey>
  >({
    queryKey: getEventEventKeyMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventEventKeyMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventEventKeyMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventEventKeyMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventKeyMatchesKeysQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches/keys', keyArgs] as const
}

export function getEventEventKeyMatchesKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesKeysQueryKey>
  >({
    queryKey: getEventEventKeyMatchesKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].matches.keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyMatchesKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesKeysQueryKey>
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
      ...getEventEventKeyMatchesKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyMatchesKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesKeysQueryKey>
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
      ...getEventEventKeyMatchesKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyMatchesSimpleQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches/simple', keyArgs] as const
}

export function getEventEventKeyMatchesSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesSimpleQueryKey>
  >({
    queryKey: getEventEventKeyMatchesSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].matches.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyMatchesSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesSimpleQueryKey>
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
      ...getEventEventKeyMatchesSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyMatchesSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesSimpleQueryKey>
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
      ...getEventEventKeyMatchesSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyMatchesTimeseriesQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches/timeseries', keyArgs] as const
}

export function getEventEventKeyMatchesTimeseriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesTimeseriesQueryKey>
  >({
    queryKey: getEventEventKeyMatchesTimeseriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].matches.timeseries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyMatchesTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesTimeseriesQueryKey>
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
      ...getEventEventKeyMatchesTimeseriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyMatchesTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyMatchesTimeseriesQueryKey>
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
      ...getEventEventKeyMatchesTimeseriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyOprsQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/oprs', keyArgs] as const
}

export function getEventEventKeyOprsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyOprsQueryKey>
  >({
    queryKey: getEventEventKeyOprsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].oprs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyOprs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyOprsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventEventKeyOprsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventEventKeyOprs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyOprsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventEventKeyOprsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventKeyPredictionsQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/predictions', keyArgs] as const
}

export function getEventEventKeyPredictionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyPredictionsQueryKey>
  >({
    queryKey: getEventEventKeyPredictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].predictions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyPredictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyPredictionsQueryKey>
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
      ...getEventEventKeyPredictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyPredictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyPredictionsQueryKey>
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
      ...getEventEventKeyPredictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyRankingsQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/rankings', keyArgs] as const
}

export function getEventEventKeyRankingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyRankingsQueryKey>
  >({
    queryKey: getEventEventKeyRankingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].rankings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyRankingsQueryKey>
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
      ...getEventEventKeyRankingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyRankingsQueryKey>
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
      ...getEventEventKeyRankingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeySimpleQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/simple', keyArgs] as const
}

export function getEventEventKeySimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeySimpleQueryKey>
  >({
    queryKey: getEventEventKeySimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeySimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventEventKeySimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventEventKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeySimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventEventKeySimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventKeyTeamsQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams', keyArgs] as const
}

export function getEventEventKeyTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsQueryKey>
  >({
    queryKey: getEventEventKeyTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventEventKeyTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventEventKeyTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventEventKeyTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventEventKeyTeamsKeysQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams/keys', keyArgs] as const
}

export function getEventEventKeyTeamsKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsKeysQueryKey>
  >({
    queryKey: getEventEventKeyTeamsKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].teams.keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyTeamsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsKeysQueryKey>
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
      ...getEventEventKeyTeamsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyTeamsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsKeysQueryKey>
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
      ...getEventEventKeyTeamsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyTeamsSimpleQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams/simple', keyArgs] as const
}

export function getEventEventKeyTeamsSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsSimpleQueryKey>
  >({
    queryKey: getEventEventKeyTeamsSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].teams.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyTeamsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsSimpleQueryKey>
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
      ...getEventEventKeyTeamsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyTeamsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsSimpleQueryKey>
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
      ...getEventEventKeyTeamsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventEventKeyTeamsStatusesQueryKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams/statuses', keyArgs] as const
}

export function getEventEventKeyTeamsStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsStatusesQueryKey>
  >({
    queryKey: getEventEventKeyTeamsStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event[':event_key'].teams.statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventEventKeyTeamsStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsStatusesQueryKey>
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
      ...getEventEventKeyTeamsStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventEventKeyTeamsStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventEventKeyTeamsStatusesQueryKey>
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
      ...getEventEventKeyTeamsStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventsYearQueryKey(
  args: InferRequestType<(typeof client.events)[':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:year', keyArgs] as const
}

export function getEventsYearQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.events)[':year']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsYearQueryKey>
  >({
    queryKey: getEventsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':year'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsYearQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsYearQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsYearKeysQueryKey(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:year/keys', keyArgs] as const
}

export function getEventsYearKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsYearKeysQueryKey>
  >({
    queryKey: getEventsYearKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':year'].keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsYearKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsYearKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsYearKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsYearKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsYearSimpleQueryKey(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:year/simple', keyArgs] as const
}

export function getEventsYearSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsYearSimpleQueryKey>
  >({
    queryKey: getEventsYearSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':year'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventsYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsYearSimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsYearSimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsYearSimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsYearSimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchMatchKeyQueryKey(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key', keyArgs] as const
}

export function getMatchMatchKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeyQueryKey>
  >({
    queryKey: getMatchMatchKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.match[':match_key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMatchMatchKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchMatchKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatchMatchKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchMatchKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchMatchKeySimpleQueryKey(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key/simple', keyArgs] as const
}

export function getMatchMatchKeySimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeySimpleQueryKey>
  >({
    queryKey: getMatchMatchKeySimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.match[':match_key'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMatchMatchKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeySimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchMatchKeySimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatchMatchKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeySimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchMatchKeySimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchMatchKeyTimeseriesQueryKey(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key/timeseries', keyArgs] as const
}

export function getMatchMatchKeyTimeseriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeyTimeseriesQueryKey>
  >({
    queryKey: getMatchMatchKeyTimeseriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.match[':match_key'].timeseries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMatchMatchKeyTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeyTimeseriesQueryKey>
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
      ...getMatchMatchKeyTimeseriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMatchMatchKeyTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeyTimeseriesQueryKey>
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
      ...getMatchMatchKeyTimeseriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMatchMatchKeyZebraMotionworksQueryKey(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key/zebra_motionworks', keyArgs] as const
}

export function getMatchMatchKeyZebraMotionworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeyZebraMotionworksQueryKey>
  >({
    queryKey: getMatchMatchKeyZebraMotionworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.match[':match_key'].zebra_motionworks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMatchMatchKeyZebraMotionworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeyZebraMotionworksQueryKey>
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
      ...getMatchMatchKeyZebraMotionworksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMatchMatchKeyZebraMotionworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchMatchKeyZebraMotionworksQueryKey>
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
      ...getMatchMatchKeyZebraMotionworksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatusQueryKey(args: InferRequestType<typeof client.status.$get>) {
  const { header: _, ...keyArgs } = args
  return ['status', '/status', keyArgs] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeyQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key', keyArgs] as const
}

export function getTeamTeamKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyQueryKey>
  >({
    queryKey: getTeamTeamKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamTeamKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeyAwardsQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/awards', keyArgs] as const
}

export function getTeamTeamKeyAwardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyAwardsQueryKey>
  >({
    queryKey: getTeamTeamKeyAwardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].awards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyAwardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamKeyAwardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyAwardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamKeyAwardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeyAwardsYearQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/awards/:year', keyArgs] as const
}

export function getTeamTeamKeyAwardsYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyAwardsYearQueryKey>
  >({
    queryKey: getTeamTeamKeyAwardsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].awards[':year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyAwardsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyAwardsYearQueryKey>
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
      ...getTeamTeamKeyAwardsYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyAwardsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyAwardsYearQueryKey>
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
      ...getTeamTeamKeyAwardsYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyDistrictsQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/districts', keyArgs] as const
}

export function getTeamTeamKeyDistrictsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyDistrictsQueryKey>
  >({
    queryKey: getTeamTeamKeyDistrictsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].districts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyDistricts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyDistrictsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamKeyDistrictsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyDistricts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyDistrictsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamKeyDistrictsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyAwardsQueryKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/awards', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyAwardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyAwardsQueryKey>
  >({
    queryKey: getTeamTeamKeyEventEventKeyAwardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].awards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventEventKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyAwardsQueryKey>
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
      ...getTeamTeamKeyEventEventKeyAwardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventEventKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyAwardsQueryKey>
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
      ...getTeamTeamKeyEventEventKeyAwardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyMatchesQueryKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/matches', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesQueryKey>
  >({
    queryKey: getTeamTeamKeyEventEventKeyMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventEventKeyMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventEventKeyMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyMatchesKeysQueryKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/matches/keys', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyMatchesKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesKeysQueryKey>
  >({
    queryKey: getTeamTeamKeyEventEventKeyMatchesKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].matches.keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventEventKeyMatchesKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesKeysQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventEventKeyMatchesKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesKeysQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/matches/simple', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyMatchesSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey>
  >({
    queryKey: getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].matches.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventEventKeyMatchesSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventEventKeyMatchesSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyStatusQueryKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/status', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyStatusQueryKey>
  >({
    queryKey: getTeamTeamKeyEventEventKeyStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventEventKeyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyStatusQueryKey>
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
      ...getTeamTeamKeyEventEventKeyStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventEventKeyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventEventKeyStatusQueryKey>
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
      ...getTeamTeamKeyEventEventKeyStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events', keyArgs] as const
}

export function getTeamTeamKeyEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsQueryKey>
  >({
    queryKey: getTeamTeamKeyEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamKeyEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamKeyEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeyEventsKeysQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/keys', keyArgs] as const
}

export function getTeamTeamKeyEventsKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsKeysQueryKey>
  >({
    queryKey: getTeamTeamKeyEventsKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].events.keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsKeysQueryKey>
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
      ...getTeamTeamKeyEventsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsKeysQueryKey>
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
      ...getTeamTeamKeyEventsKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsSimpleQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/simple', keyArgs] as const
}

export function getTeamTeamKeyEventsSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsSimpleQueryKey>
  >({
    queryKey: getTeamTeamKeyEventsSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].events.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsSimpleQueryKey>
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
      ...getTeamTeamKeyEventsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsSimpleQueryKey>
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
      ...getTeamTeamKeyEventsSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year', keyArgs] as const
}

export function getTeamTeamKeyEventsYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearQueryKey>
  >({
    queryKey: getTeamTeamKeyEventsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].events[':year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearQueryKey>
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
      ...getTeamTeamKeyEventsYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearQueryKey>
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
      ...getTeamTeamKeyEventsYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearKeysQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year/keys', keyArgs] as const
}

export function getTeamTeamKeyEventsYearKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearKeysQueryKey>
  >({
    queryKey: getTeamTeamKeyEventsYearKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].events[':year'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventsYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearKeysQueryKey>
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
      ...getTeamTeamKeyEventsYearKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventsYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearKeysQueryKey>
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
      ...getTeamTeamKeyEventsYearKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearSimpleQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year/simple', keyArgs] as const
}

export function getTeamTeamKeyEventsYearSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearSimpleQueryKey>
  >({
    queryKey: getTeamTeamKeyEventsYearSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].events[':year'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventsYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearSimpleQueryKey>
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
      ...getTeamTeamKeyEventsYearSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventsYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearSimpleQueryKey>
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
      ...getTeamTeamKeyEventsYearSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearStatusesQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year/statuses', keyArgs] as const
}

export function getTeamTeamKeyEventsYearStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearStatusesQueryKey>
  >({
    queryKey: getTeamTeamKeyEventsYearStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].events[':year'].statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyEventsYearStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearStatusesQueryKey>
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
      ...getTeamTeamKeyEventsYearStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyEventsYearStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyEventsYearStatusesQueryKey>
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
      ...getTeamTeamKeyEventsYearStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyMatchesYearQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/matches/:year', keyArgs] as const
}

export function getTeamTeamKeyMatchesYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMatchesYearQueryKey>
  >({
    queryKey: getTeamTeamKeyMatchesYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].matches[':year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyMatchesYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMatchesYearQueryKey>
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
      ...getTeamTeamKeyMatchesYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyMatchesYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMatchesYearQueryKey>
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
      ...getTeamTeamKeyMatchesYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyMatchesYearKeysQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/matches/:year/keys', keyArgs] as const
}

export function getTeamTeamKeyMatchesYearKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMatchesYearKeysQueryKey>
  >({
    queryKey: getTeamTeamKeyMatchesYearKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].matches[':year'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyMatchesYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMatchesYearKeysQueryKey>
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
      ...getTeamTeamKeyMatchesYearKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyMatchesYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMatchesYearKeysQueryKey>
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
      ...getTeamTeamKeyMatchesYearKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyMatchesYearSimpleQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/matches/:year/simple', keyArgs] as const
}

export function getTeamTeamKeyMatchesYearSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMatchesYearSimpleQueryKey>
  >({
    queryKey: getTeamTeamKeyMatchesYearSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].matches[':year'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyMatchesYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMatchesYearSimpleQueryKey>
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
      ...getTeamTeamKeyMatchesYearSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyMatchesYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMatchesYearSimpleQueryKey>
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
      ...getTeamTeamKeyMatchesYearSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyMediaTagMediaTagQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/media/tag/:media_tag', keyArgs] as const
}

export function getTeamTeamKeyMediaTagMediaTagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMediaTagMediaTagQueryKey>
  >({
    queryKey: getTeamTeamKeyMediaTagMediaTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].media.tag[':media_tag'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyMediaTagMediaTag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMediaTagMediaTagQueryKey>
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
      ...getTeamTeamKeyMediaTagMediaTagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyMediaTagMediaTag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMediaTagMediaTagQueryKey>
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
      ...getTeamTeamKeyMediaTagMediaTagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyMediaTagMediaTagYearQueryKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/media/tag/:media_tag/:year', keyArgs] as const
}

export function getTeamTeamKeyMediaTagMediaTagYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMediaTagMediaTagYearQueryKey>
  >({
    queryKey: getTeamTeamKeyMediaTagMediaTagYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].media.tag[':media_tag'][':year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyMediaTagMediaTagYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMediaTagMediaTagYearQueryKey>
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
      ...getTeamTeamKeyMediaTagMediaTagYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyMediaTagMediaTagYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMediaTagMediaTagYearQueryKey>
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
      ...getTeamTeamKeyMediaTagMediaTagYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyMediaYearQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/media/:year', keyArgs] as const
}

export function getTeamTeamKeyMediaYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMediaYearQueryKey>
  >({
    queryKey: getTeamTeamKeyMediaYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].media[':year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyMediaYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMediaYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamKeyMediaYearQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyMediaYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyMediaYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamKeyMediaYearQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeyRobotsQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/robots', keyArgs] as const
}

export function getTeamTeamKeyRobotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyRobotsQueryKey>
  >({
    queryKey: getTeamTeamKeyRobotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].robots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyRobots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyRobotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamKeyRobotsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyRobots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyRobotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamKeyRobotsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeySimpleQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/simple', keyArgs] as const
}

export function getTeamTeamKeySimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeySimpleQueryKey>
  >({
    queryKey: getTeamTeamKeySimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeySimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamKeySimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeySimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamKeySimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamKeySocialMediaQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/social_media', keyArgs] as const
}

export function getTeamTeamKeySocialMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeySocialMediaQueryKey>
  >({
    queryKey: getTeamTeamKeySocialMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].social_media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeySocialMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeySocialMediaQueryKey>
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
      ...getTeamTeamKeySocialMediaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeySocialMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeySocialMediaQueryKey>
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
      ...getTeamTeamKeySocialMediaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTeamKeyYearsParticipatedQueryKey(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/years_participated', keyArgs] as const
}

export function getTeamTeamKeyYearsParticipatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyYearsParticipatedQueryKey>
  >({
    queryKey: getTeamTeamKeyYearsParticipatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':team_key'].years_participated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTeamKeyYearsParticipated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyYearsParticipatedQueryKey>
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
      ...getTeamTeamKeyYearsParticipatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTeamKeyYearsParticipated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamKeyYearsParticipatedQueryKey>
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
      ...getTeamTeamKeyYearsParticipatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamsPageNumQueryKey(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:page_num', keyArgs] as const
}

export function getTeamsPageNumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsPageNumQueryKey>
  >({
    queryKey: getTeamsPageNumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':page_num'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamsPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsPageNumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsPageNumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsPageNumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsPageNumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsPageNumKeysQueryKey(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:page_num/keys', keyArgs] as const
}

export function getTeamsPageNumKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsPageNumKeysQueryKey>
  >({
    queryKey: getTeamsPageNumKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':page_num'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsPageNumKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsPageNumKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsPageNumKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsPageNumKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsPageNumKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsPageNumKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsPageNumSimpleQueryKey(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:page_num/simple', keyArgs] as const
}

export function getTeamsPageNumSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsPageNumSimpleQueryKey>
  >({
    queryKey: getTeamsPageNumSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':page_num'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsPageNumSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsPageNumSimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsPageNumSimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsPageNumSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsPageNumSimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsPageNumSimpleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsYearPageNumQueryKey(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:year/:page_num', keyArgs] as const
}

export function getTeamsYearPageNumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsYearPageNumQueryKey>
  >({
    queryKey: getTeamsYearPageNumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':year'][':page_num'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsYearPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsYearPageNumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsYearPageNumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsYearPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsYearPageNumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsYearPageNumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsYearPageNumKeysQueryKey(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:year/:page_num/keys', keyArgs] as const
}

export function getTeamsYearPageNumKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsYearPageNumKeysQueryKey>
  >({
    queryKey: getTeamsYearPageNumKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':year'][':page_num'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsYearPageNumKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsYearPageNumKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsYearPageNumKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsYearPageNumKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsYearPageNumKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsYearPageNumKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsYearPageNumSimpleQueryKey(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:year/:page_num/simple', keyArgs] as const
}

export function getTeamsYearPageNumSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsYearPageNumSimpleQueryKey>
  >({
    queryKey: getTeamsYearPageNumSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':year'][':page_num'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsYearPageNumSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsYearPageNumSimpleQueryKey>
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
      ...getTeamsYearPageNumSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsYearPageNumSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsYearPageNumSimpleQueryKey>
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
      ...getTeamsYearPageNumSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
