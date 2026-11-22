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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['district', '/district/:district_key/events', keyArgs] as const
}

export function getDistrictDistrictKeyEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictDistrictKeyEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district[':district_key'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictDistrictKeyEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictDistrictKeyEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district[':district_key'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyEventsKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['district', '/district/:district_key/events/keys', keyArgs] as const
}

export function getDistrictDistrictKeyEventsKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictDistrictKeyEventsKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district[':district_key'].events.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDistrictDistrictKeyEventsKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyEventsKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictDistrictKeyEventsKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district[':district_key'].events.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyEventsSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['district', '/district/:district_key/events/simple', keyArgs] as const
}

export function getDistrictDistrictKeyEventsSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictDistrictKeyEventsSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district[':district_key'].events.simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDistrictDistrictKeyEventsSimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyEventsSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictDistrictKeyEventsSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district[':district_key'].events.simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyRankingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['district', '/district/:district_key/rankings', keyArgs] as const
}

export function getDistrictDistrictKeyRankingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictDistrictKeyRankingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district[':district_key'].rankings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictDistrictKeyRankingsQueryKey>
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
          Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyRankingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictDistrictKeyRankingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district[':district_key'].rankings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyTeamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['district', '/district/:district_key/teams', keyArgs] as const
}

export function getDistrictDistrictKeyTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictDistrictKeyTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district[':district_key'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictDistrictKeyTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictDistrictKeyTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district[':district_key'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyTeamsKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['district', '/district/:district_key/teams/keys', keyArgs] as const
}

export function getDistrictDistrictKeyTeamsKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictDistrictKeyTeamsKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district[':district_key'].teams.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDistrictDistrictKeyTeamsKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyTeamsKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictDistrictKeyTeamsKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district[':district_key'].teams.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictDistrictKeyTeamsSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['district', '/district/:district_key/teams/simple', keyArgs] as const
}

export function getDistrictDistrictKeyTeamsSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictDistrictKeyTeamsSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district[':district_key'].teams.simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDistrictDistrictKeyTeamsSimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictDistrictKeyTeamsSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictDistrictKeyTeamsSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district[':district_key'].teams.simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsYearQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':year']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['districts', '/districts/:year', keyArgs] as const
}

export function getDistrictsYearQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':year']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':year']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
            >
          >,
          ReturnType<typeof getDistrictsYearQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key', keyArgs] as const
}

export function getEventEventKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventEventKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
            >
          >,
          ReturnType<typeof getEventEventKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyAlliancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/alliances', keyArgs] as const
}

export function getEventEventKeyAlliancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyAlliancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].alliances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyAlliancesQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyAlliancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyAlliancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].alliances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyAwardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/awards', keyArgs] as const
}

export function getEventEventKeyAwardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyAwardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].awards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyAwardsQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyAwardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyAwardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].awards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyDistrictPointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/district_points', keyArgs] as const
}

export function getEventEventKeyDistrictPointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyDistrictPointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].district_points.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyDistrictPointsQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyDistrictPointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyDistrictPointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].district_points.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyInsightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/insights', keyArgs] as const
}

export function getEventEventKeyInsightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyInsightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].insights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyInsightsQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyInsightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyInsightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].insights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/matches', keyArgs] as const
}

export function getEventEventKeyMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyMatchesKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/matches/keys', keyArgs] as const
}

export function getEventEventKeyMatchesKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyMatchesKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].matches.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyMatchesKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyMatchesKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].matches.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyMatchesSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/matches/simple', keyArgs] as const
}

export function getEventEventKeyMatchesSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyMatchesSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].matches.simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEventEventKeyMatchesSimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyMatchesSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].matches.simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyMatchesTimeseriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/matches/timeseries', keyArgs] as const
}

export function getEventEventKeyMatchesTimeseriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyMatchesTimeseriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].matches.timeseries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEventEventKeyMatchesTimeseriesQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyMatchesTimeseriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyMatchesTimeseriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].matches.timeseries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyOprsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/oprs', keyArgs] as const
}

export function getEventEventKeyOprsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyOprsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].oprs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventEventKeyOprs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyOprsQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyOprsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyOprsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].oprs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyPredictionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/predictions', keyArgs] as const
}

export function getEventEventKeyPredictionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyPredictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].predictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyPredictionsQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyPredictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyPredictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].predictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyRankingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/rankings', keyArgs] as const
}

export function getEventEventKeyRankingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyRankingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].rankings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyRankingsQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyRankingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyRankingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].rankings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeySimpleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/simple', keyArgs] as const
}

export function getEventEventKeySimpleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeySimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeySimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeySimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeySimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/teams', keyArgs] as const
}

export function getEventEventKeyTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyTeamsKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/teams/keys', keyArgs] as const
}

export function getEventEventKeyTeamsKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyTeamsKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].teams.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyTeamsKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyTeamsKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].teams.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyTeamsSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/teams/simple', keyArgs] as const
}

export function getEventEventKeyTeamsSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyTeamsSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].teams.simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventEventKeyTeamsSimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyTeamsSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].teams.simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventEventKeyTeamsStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event', '/event/:event_key/teams/statuses', keyArgs] as const
}

export function getEventEventKeyTeamsStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventEventKeyTeamsStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event[':event_key'].teams.statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEventEventKeyTeamsStatusesQueryKey>
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
          Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventEventKeyTeamsStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventEventKeyTeamsStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event[':event_key'].teams.statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsYearQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/:year', keyArgs] as const
}

export function getEventsYearQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsYearQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsYearKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['keys']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/:year/keys', keyArgs] as const
}

export function getEventsYearKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsYearKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':year'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsYearKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsYearKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsYearKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsYearKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':year'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsYearSimpleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['simple']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/:year/simple', keyArgs] as const
}

export function getEventsYearSimpleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['simple']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsYearSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':year'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsYearSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':year']['simple']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsYearSimpleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsYearSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsYearSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':year'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchMatchKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.match)[':match_key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['match', '/match/:match_key', keyArgs] as const
}

export function getMatchMatchKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.match)[':match_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchMatchKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.match[':match_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMatchMatchKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.match)[':match_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
            >
          >,
          ReturnType<typeof getMatchMatchKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchMatchKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.match[':match_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchMatchKeySimpleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['match', '/match/:match_key/simple', keyArgs] as const
}

export function getMatchMatchKeySimpleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchMatchKeySimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.match[':match_key'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMatchMatchKeySimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeySimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchMatchKeySimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.match[':match_key'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchMatchKeyTimeseriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['match', '/match/:match_key/timeseries', keyArgs] as const
}

export function getMatchMatchKeyTimeseriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchMatchKeyTimeseriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.match[':match_key'].timeseries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMatchMatchKeyTimeseriesQueryKey>
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
          Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeyTimeseriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchMatchKeyTimeseriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.match[':match_key'].timeseries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchMatchKeyZebraMotionworksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['match', '/match/:match_key/zebra_motionworks', keyArgs] as const
}

export function getMatchMatchKeyZebraMotionworksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchMatchKeyZebraMotionworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.match[':match_key'].zebra_motionworks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMatchMatchKeyZebraMotionworksQueryKey>
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
          Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchMatchKeyZebraMotionworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchMatchKeyZebraMotionworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.match[':match_key'].zebra_motionworks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['status', '/status', keyArgs] as const
}

export function getStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key', keyArgs] as const
}

export function getTeamTeamKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamTeamKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamTeamKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyAwardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/awards', keyArgs] as const
}

export function getTeamTeamKeyAwardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyAwardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].awards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamTeamKeyAwards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyAwardsQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyAwardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyAwardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].awards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyAwardsYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/awards/:year', keyArgs] as const
}

export function getTeamTeamKeyAwardsYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyAwardsYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].awards[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyAwardsYearQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyAwardsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyAwardsYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].awards[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyDistrictsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/districts', keyArgs] as const
}

export function getTeamTeamKeyDistrictsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyDistrictsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].districts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyDistrictsQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyDistrictsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyDistrictsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].districts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyAwardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/event/:event_key/awards', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyAwardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventEventKeyAwardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].awards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
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
                    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventEventKeyAwardsQueryKey>
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
            ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyAwardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventEventKeyAwardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].event[':event_key'].awards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/event/:event_key/matches', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventEventKeyMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesQueryKey>
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
            ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventEventKeyMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].event[':event_key'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyMatchesKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/event/:event_key/matches/keys', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyMatchesKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventEventKeyMatchesKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].matches.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesKeysQueryKey>
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
              (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventEventKeyMatchesKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].event[':event_key'].matches.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/event/:event_key/matches/simple', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyMatchesSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].matches.simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey>
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
              (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventEventKeyMatchesSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].event[':event_key'].matches.simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventEventKeyStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/event/:event_key/status', keyArgs] as const
}

export function getTeamTeamKeyEventEventKeyStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventEventKeyStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].event[':event_key'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
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
                    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
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
                    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventEventKeyStatusQueryKey>
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
            ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventEventKeyStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventEventKeyStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].event[':event_key'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['events']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/events', keyArgs] as const
}

export function getTeamTeamKeyEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamTeamKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/events/keys', keyArgs] as const
}

export function getTeamTeamKeyEventsKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventsKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].events.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventsKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventsKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].events.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/events/simple', keyArgs] as const
}

export function getTeamTeamKeyEventsSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventsSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].events.simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventsSimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventsSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].events.simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/events/:year', keyArgs] as const
}

export function getTeamTeamKeyEventsYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventsYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].events[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventsYearQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventsYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].events[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/events/:year/keys', keyArgs] as const
}

export function getTeamTeamKeyEventsYearKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventsYearKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].events[':year'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventsYearKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventsYearKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].events[':year'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/events/:year/simple', keyArgs] as const
}

export function getTeamTeamKeyEventsYearSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventsYearSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].events[':year'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventsYearSimpleQueryKey>
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
            ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventsYearSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].events[':year'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyEventsYearStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/events/:year/statuses', keyArgs] as const
}

export function getTeamTeamKeyEventsYearStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyEventsYearStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].events[':year'].statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
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
                    (typeof client.team)[':team_key']['events'][':year']['statuses']['$get']
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
                    (typeof client.team)[':team_key']['events'][':year']['statuses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyEventsYearStatusesQueryKey>
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
            ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyEventsYearStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyEventsYearStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].events[':year'].statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyMatchesYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/matches/:year', keyArgs] as const
}

export function getTeamTeamKeyMatchesYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyMatchesYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].matches[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyMatchesYearQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMatchesYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyMatchesYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].matches[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyMatchesYearKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/matches/:year/keys', keyArgs] as const
}

export function getTeamTeamKeyMatchesYearKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyMatchesYearKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].matches[':year'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyMatchesYearKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMatchesYearKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyMatchesYearKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].matches[':year'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyMatchesYearSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/matches/:year/simple', keyArgs] as const
}

export function getTeamTeamKeyMatchesYearSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyMatchesYearSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].matches[':year'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
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
                    (typeof client.team)[':team_key']['matches'][':year']['simple']['$get']
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
                    (typeof client.team)[':team_key']['matches'][':year']['simple']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyMatchesYearSimpleQueryKey>
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
            ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMatchesYearSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyMatchesYearSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].matches[':year'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyMediaTagMediaTagQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/media/tag/:media_tag', keyArgs] as const
}

export function getTeamTeamKeyMediaTagMediaTagQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyMediaTagMediaTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].media.tag[':media_tag'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
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
                    (typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']
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
                    (typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyMediaTagMediaTagQueryKey>
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
            ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMediaTagMediaTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyMediaTagMediaTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].media.tag[':media_tag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyMediaTagMediaTagYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/media/tag/:media_tag/:year', keyArgs] as const
}

export function getTeamTeamKeyMediaTagMediaTagYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyMediaTagMediaTagYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].media.tag[':media_tag'][':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
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
                    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
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
                    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyMediaTagMediaTagYearQueryKey>
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
              (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMediaTagMediaTagYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyMediaTagMediaTagYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].media.tag[':media_tag'][':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyMediaYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/media/:year', keyArgs] as const
}

export function getTeamTeamKeyMediaYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyMediaYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].media[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyMediaYearQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyMediaYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyMediaYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].media[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyRobotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/robots', keyArgs] as const
}

export function getTeamTeamKeyRobotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyRobotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].robots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamTeamKeyRobots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyRobotsQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyRobotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyRobotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].robots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeySimpleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/simple', keyArgs] as const
}

export function getTeamTeamKeySimpleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeySimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamTeamKeySimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeySimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeySimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeySimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeySocialMediaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/social_media', keyArgs] as const
}

export function getTeamTeamKeySocialMediaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeySocialMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].social_media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeySocialMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeySocialMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeySocialMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].social_media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamKeyYearsParticipatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team', '/team/:team_key/years_participated', keyArgs] as const
}

export function getTeamTeamKeyYearsParticipatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamKeyYearsParticipatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':team_key'].years_participated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTeamKeyYearsParticipatedQueryKey>
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
          Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamKeyYearsParticipatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamKeyYearsParticipatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':team_key'].years_participated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsPageNumQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:page_num', keyArgs] as const
}

export function getTeamsPageNumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsPageNumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':page_num'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamsPageNumQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsPageNumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsPageNumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':page_num'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsPageNumKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:page_num/keys', keyArgs] as const
}

export function getTeamsPageNumKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsPageNumKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':page_num'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsPageNumKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsPageNumKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsPageNumKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsPageNumKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':page_num'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsPageNumSimpleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:page_num/simple', keyArgs] as const
}

export function getTeamsPageNumSimpleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsPageNumSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':page_num'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsPageNumSimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsPageNumSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsPageNumSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':page_num'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsYearPageNumQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:year/:page_num', keyArgs] as const
}

export function getTeamsYearPageNumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsYearPageNumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':year'][':page_num'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsYearPageNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsYearPageNumQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsYearPageNumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsYearPageNumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':year'][':page_num'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsYearPageNumKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:year/:page_num/keys', keyArgs] as const
}

export function getTeamsYearPageNumKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsYearPageNumKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':year'][':page_num'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsYearPageNumKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsYearPageNumKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsYearPageNumKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':year'][':page_num'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsYearPageNumSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:year/:page_num/simple', keyArgs] as const
}

export function getTeamsYearPageNumSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsYearPageNumSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':year'][':page_num'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsYearPageNumSimpleQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsYearPageNumSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsYearPageNumSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':year'][':page_num'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
