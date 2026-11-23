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

export function getMobilesdkKey() {
  return ['mobilesdk'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getMobilesdkStageTrackGetTrackV1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>,
) {
  return ['mobilesdk', '/mobilesdk/stage/track/get_track/v1', toValue(args)] as const
}

export function getMobilesdkStageTrackGetTrackV1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMobilesdkStageTrackGetTrackV1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mobilesdk.stage.track.get_track.v1.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMobilesdkStageTrackGetTrackV1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
              >
            >
          >,
          ReturnType<typeof getMobilesdkStageTrackGetTrackV1QueryKey>
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
          Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMobilesdkStageTrackGetTrackV1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMobilesdkStageTrackGetTrackV1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mobilesdk.stage.track.get_track.v1.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1ScoringsConsolidatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>>,
) {
  return ['statistics', '/statistics/v1/Scorings/consolidated', toValue(args)] as const
}

export function getStatisticsV1ScoringsConsolidatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1ScoringsConsolidatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Scorings.consolidated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1ScoringsConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
              >
            >
          >,
          ReturnType<typeof getStatisticsV1ScoringsConsolidatedQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1ScoringsConsolidatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1ScoringsConsolidatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Scorings.consolidated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1ScoringsConsolidatedDailyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>
  >,
) {
  return ['statistics', '/statistics/v1/Scorings/consolidated/daily', toValue(args)] as const
}

export function getStatisticsV1ScoringsConsolidatedDailyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1ScoringsConsolidatedDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Scorings.consolidated.daily.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1ScoringsConsolidatedDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
              >
            >
          >,
          ReturnType<typeof getStatisticsV1ScoringsConsolidatedDailyQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1ScoringsConsolidatedDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1ScoringsConsolidatedDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Scorings.consolidated.daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1ScoringsIndividualIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>
  >,
) {
  return ['statistics', '/statistics/v1/Scorings/individual/', toValue(args)] as const
}

export function getStatisticsV1ScoringsIndividualIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1ScoringsIndividualIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Scorings.individual.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1ScoringsIndividualIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
              >
            >
          >,
          ReturnType<typeof getStatisticsV1ScoringsIndividualIndexQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1ScoringsIndividualIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1ScoringsIndividualIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Scorings.individual.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1ScoringsIndividualDailyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>
  >,
) {
  return ['statistics', '/statistics/v1/Scorings/individual/daily', toValue(args)] as const
}

export function getStatisticsV1ScoringsIndividualDailyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1ScoringsIndividualDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Scorings.individual.daily.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1ScoringsIndividualDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
              >
            >
          >,
          ReturnType<typeof getStatisticsV1ScoringsIndividualDailyQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1ScoringsIndividualDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1ScoringsIndividualDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Scorings.individual.daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1StatisticsConsolidatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>
  >,
) {
  return ['statistics', '/statistics/v1/Statistics/consolidated', toValue(args)] as const
}

export function getStatisticsV1StatisticsConsolidatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1StatisticsConsolidatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Statistics.consolidated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1StatisticsConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
              >
            >
          >,
          ReturnType<typeof getStatisticsV1StatisticsConsolidatedQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1StatisticsConsolidatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1StatisticsConsolidatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Statistics.consolidated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1StatisticsConsolidatedDailyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>
  >,
) {
  return ['statistics', '/statistics/v1/Statistics/consolidated/daily', toValue(args)] as const
}

export function getStatisticsV1StatisticsConsolidatedDailyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1StatisticsConsolidatedDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Statistics.consolidated.daily.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1StatisticsConsolidatedDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
              >
            >
          >,
          ReturnType<typeof getStatisticsV1StatisticsConsolidatedDailyQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1StatisticsConsolidatedDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1StatisticsConsolidatedDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Statistics.consolidated.daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1StatisticsIndividualIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>
  >,
) {
  return ['statistics', '/statistics/v1/Statistics/individual/', toValue(args)] as const
}

export function getStatisticsV1StatisticsIndividualIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1StatisticsIndividualIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Statistics.individual.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1StatisticsIndividualIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
              >
            >
          >,
          ReturnType<typeof getStatisticsV1StatisticsIndividualIndexQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1StatisticsIndividualIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1StatisticsIndividualIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Statistics.individual.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsV1StatisticsIndividualDailyIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>
  >,
) {
  return ['statistics', '/statistics/v1/Statistics/individual/daily/', toValue(args)] as const
}

export function getStatisticsV1StatisticsIndividualDailyIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsV1StatisticsIndividualDailyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.v1.Statistics.individual.daily.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsV1StatisticsIndividualDailyIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>
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
                  ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>
                >
              >
            >
          >,
          ReturnType<typeof getStatisticsV1StatisticsIndividualDailyIndexQueryKey>
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
          Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsV1StatisticsIndividualDailyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsV1StatisticsIndividualDailyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.v1.Statistics.individual.daily.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
