import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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
  args: InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>,
) {
  return ['mobilesdk', '/mobilesdk/stage/track/get_track/v1', args] as const
}

export function getMobilesdkStageTrackGetTrackV1QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMobilesdkStageTrackGetTrackV1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mobilesdk.stage.track.get_track.v1.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMobilesdkStageTrackGetTrackV1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getMobilesdkStageTrackGetTrackV1QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1ScoringsConsolidatedQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/consolidated', args] as const
}

export function getStatisticsV1ScoringsConsolidatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1ScoringsConsolidatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Scorings.consolidated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1ScoringsConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getStatisticsV1ScoringsConsolidatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1ScoringsConsolidatedDailyQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/consolidated/daily', args] as const
}

export function getStatisticsV1ScoringsConsolidatedDailyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1ScoringsConsolidatedDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Scorings.consolidated.daily.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1ScoringsConsolidatedDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getStatisticsV1ScoringsConsolidatedDailyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1ScoringsIndividualIndexQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/individual/', args] as const
}

export function getStatisticsV1ScoringsIndividualIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1ScoringsIndividualIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Scorings.individual.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1ScoringsIndividualIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getStatisticsV1ScoringsIndividualIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1ScoringsIndividualDailyQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/individual/daily', args] as const
}

export function getStatisticsV1ScoringsIndividualDailyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1ScoringsIndividualDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Scorings.individual.daily.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1ScoringsIndividualDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getStatisticsV1ScoringsIndividualDailyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1StatisticsConsolidatedQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/consolidated', args] as const
}

export function getStatisticsV1StatisticsConsolidatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1StatisticsConsolidatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Statistics.consolidated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1StatisticsConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getStatisticsV1StatisticsConsolidatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1StatisticsConsolidatedDailyQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/consolidated/daily', args] as const
}

export function getStatisticsV1StatisticsConsolidatedDailyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1StatisticsConsolidatedDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Statistics.consolidated.daily.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1StatisticsConsolidatedDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getStatisticsV1StatisticsConsolidatedDailyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1StatisticsIndividualIndexQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/individual/', args] as const
}

export function getStatisticsV1StatisticsIndividualIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1StatisticsIndividualIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Statistics.individual.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1StatisticsIndividualIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getStatisticsV1StatisticsIndividualIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatisticsV1StatisticsIndividualDailyIndexQueryKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/individual/daily/', args] as const
}

export function getStatisticsV1StatisticsIndividualDailyIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatisticsV1StatisticsIndividualDailyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.v1.Statistics.individual.daily.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatisticsV1StatisticsIndividualDailyIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getStatisticsV1StatisticsIndividualDailyIndexQueryKey>
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
      ...getStatisticsV1StatisticsIndividualDailyIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
