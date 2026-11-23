import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createDistrictDistrictKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDistrictDistrictKeyEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDistrictDistrictKeyEventsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDistrictDistrictKeyEventsKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDistrictDistrictKeyEventsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.district)[':district_key']['events']['simple']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDistrictDistrictKeyEventsSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDistrictDistrictKeyRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDistrictDistrictKeyRankingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDistrictDistrictKeyTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDistrictDistrictKeyTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDistrictDistrictKeyTeamsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDistrictDistrictKeyTeamsKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDistrictDistrictKeyTeamsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.district)[':district_key']['teams']['simple']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDistrictDistrictKeyTeamsSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDistrictsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':year']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDistrictsYearQueryKey>
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
    return { ...getDistrictsYearQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventEventKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventEventKeyQueryKey>
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
    return { ...getEventEventKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventEventKeyAlliances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyAlliancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getEventEventKeyAwardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventEventKeyDistrictPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyDistrictPointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyInsightsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyMatchesKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyMatchesKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyMatchesSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventEventKeyMatchesSimpleQueryKey>
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
      ...getEventEventKeyMatchesSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyMatchesTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.event)[':event_key']['matches']['timeseries']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyMatchesTimeseriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyOprs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getEventEventKeyOprsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventEventKeyPredictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyPredictionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyRankingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getEventEventKeySimpleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventEventKeyTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getEventEventKeyTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventEventKeyTeamsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyTeamsKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyTeamsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEventEventKeyTeamsSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventEventKeyTeamsStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventEventKeyTeamsStatusesQueryKey>
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
      ...getEventEventKeyTeamsStatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEventsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':year']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsYearQueryKey>
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
    return { ...getEventsYearQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventsYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getEventsYearKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEventsYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getEventsYearSimpleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMatchMatchKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.match)[':match_key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMatchMatchKeyQueryKey>
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
    return { ...getMatchMatchKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMatchMatchKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getMatchMatchKeySimpleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMatchMatchKeyTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getMatchMatchKeyTimeseriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMatchMatchKeyZebraMotionworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMatchMatchKeyZebraMotionworksQueryKey>
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
      ...getMatchMatchKeyZebraMotionworksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.status.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getStatusQueryKey>
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
    return { ...getStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamTeamKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyQueryKey>
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
    return { ...getTeamTeamKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamTeamKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getTeamTeamKeyAwardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamTeamKeyAwardsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyAwardsYearQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyDistricts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyDistrictsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventEventKeyAwards<
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
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyEventEventKeyAwardsQueryKey>
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
      ...getTeamTeamKeyEventEventKeyAwardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventEventKeyMatches<
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
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventEventKeyMatchesKeys<
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
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesKeysQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventEventKeyMatchesSimple<
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
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey>
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
      ...getTeamTeamKeyEventEventKeyMatchesSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventEventKeyStatus<
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
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyEventEventKeyStatusQueryKey>
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
      ...getTeamTeamKeyEventEventKeyStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getTeamTeamKeyEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamTeamKeyEventsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyEventsKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventsSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyEventsSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyEventsYearQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventsYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['events'][':year']['keys']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyEventsYearKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventsYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['events'][':year']['simple']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyEventsYearSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyEventsYearStatuses<
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
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['events'][':year']['statuses']['$get']
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
                    (typeof client.team)[':team_key']['events'][':year']['statuses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyEventsYearStatusesQueryKey>
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
      ...getTeamTeamKeyEventsYearStatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyMatchesYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyMatchesYearQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyMatchesYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['matches'][':year']['keys']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyMatchesYearKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyMatchesYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['matches'][':year']['simple']['$get']
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
                    (typeof client.team)[':team_key']['matches'][':year']['simple']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyMatchesYearSimpleQueryKey>
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
      ...getTeamTeamKeyMatchesYearSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyMediaTagMediaTag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']
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
                    (typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyMediaTagMediaTagQueryKey>
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
      ...getTeamTeamKeyMediaTagMediaTagQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyMediaTagMediaTagYear<
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
  args: () => InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
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
                    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamTeamKeyMediaTagMediaTagYearQueryKey>
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
      ...getTeamTeamKeyMediaTagMediaTagYearQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyMediaYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyMediaYearQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyRobots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getTeamTeamKeyRobotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamTeamKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getTeamTeamKeySimpleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamTeamKeySocialMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeySocialMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamTeamKeyYearsParticipated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamTeamKeyYearsParticipatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamsPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':page_num']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamsPageNumQueryKey>
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
    return { ...getTeamsPageNumQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamsPageNumKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getTeamsPageNumKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamsPageNumSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getTeamsPageNumSimpleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamsYearPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getTeamsYearPageNumQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamsYearPageNumKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamsYearPageNumKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTeamsYearPageNumSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamsYearPageNumSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
