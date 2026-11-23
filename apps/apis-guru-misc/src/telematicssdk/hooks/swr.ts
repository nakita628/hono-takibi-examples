import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMobilesdkKey() {
  return ['mobilesdk'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getGetMobilesdkStageTrackGetTrackV1Key(
  args: InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>,
) {
  return ['mobilesdk', '/mobilesdk/stage/track/get_track/v1', args] as const
}

export function useGetMobilesdkStageTrackGetTrackV1<TError = unknown>(
  args: InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMobilesdkStageTrackGetTrackV1Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mobilesdk.stage.track.get_track.v1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMobilesdkStageTrackGetTrackV1<TError = unknown>(
  args: InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMobilesdkStageTrackGetTrackV1Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mobilesdk.stage.track.get_track.v1.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mobilesdk.stage.track.get_track.v1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1ScoringsConsolidatedKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/consolidated', args] as const
}

export function useGetStatisticsV1ScoringsConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1ScoringsConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1ScoringsConsolidatedDailyKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/consolidated/daily', args] as const
}

export function useGetStatisticsV1ScoringsConsolidatedDaily<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsConsolidatedDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.consolidated.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1ScoringsConsolidatedDaily<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsConsolidatedDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.consolidated.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1ScoringsIndividualIndexKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/individual/', args] as const
}

export function useGetStatisticsV1ScoringsIndividualIndex<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsIndividualIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.individual.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1ScoringsIndividualIndex<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsIndividualIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.individual.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1ScoringsIndividualDailyKey(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>,
) {
  return ['statistics', '/statistics/v1/Scorings/individual/daily', args] as const
}

export function useGetStatisticsV1ScoringsIndividualDaily<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsIndividualDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.individual.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1ScoringsIndividualDaily<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1ScoringsIndividualDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Scorings.individual.daily.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Scorings.individual.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1StatisticsConsolidatedKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/consolidated', args] as const
}

export function useGetStatisticsV1StatisticsConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Statistics.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1StatisticsConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Statistics.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1StatisticsConsolidatedDailyKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/consolidated/daily', args] as const
}

export function useGetStatisticsV1StatisticsConsolidatedDaily<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsConsolidatedDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Statistics.consolidated.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1StatisticsConsolidatedDaily<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsConsolidatedDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Statistics.consolidated.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1StatisticsIndividualIndexKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/individual/', args] as const
}

export function useGetStatisticsV1StatisticsIndividualIndex<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsIndividualIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Statistics.individual.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1StatisticsIndividualIndex<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsIndividualIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.statistics.v1.Statistics.individual.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsV1StatisticsIndividualDailyIndexKey(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>,
) {
  return ['statistics', '/statistics/v1/Statistics/individual/daily/', args] as const
}

export function useGetStatisticsV1StatisticsIndividualDailyIndex<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsIndividualDailyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.statistics.v1.Statistics.individual.daily.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsV1StatisticsIndividualDailyIndex<TError = unknown>(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsV1StatisticsIndividualDailyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.statistics.v1.Statistics.individual.daily.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
