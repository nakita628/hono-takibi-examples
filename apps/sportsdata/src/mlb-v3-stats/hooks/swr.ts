import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getGetFormatAllTeamsKey(
  args: InferRequestType<(typeof client)[':format']['AllTeams']['$get']>,
) {
  return [':format', '/:format/AllTeams', args] as const
}

export function useGetFormatAllTeams<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['AllTeams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatAllTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].AllTeams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatAllTeams<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['AllTeams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatAllTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].AllTeams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatAreAnyGamesInProgressKey(
  args: InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
) {
  return [':format', '/:format/AreAnyGamesInProgress', args] as const
}

export function useGetFormatAreAnyGamesInProgress<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
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
        ? getGetFormatAreAnyGamesInProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].AreAnyGamesInProgress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatAreAnyGamesInProgress<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
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
        ? getGetFormatAreAnyGamesInProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].AreAnyGamesInProgress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoreGameidKey(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
) {
  return [':format', '/:format/BoxScore/:gameid', args] as const
}

export function useGetFormatBoxScoreGameid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
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
        ? getGetFormatBoxScoreGameidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].BoxScore[':gameid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoreGameid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
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
        ? getGetFormatBoxScoreGameidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].BoxScore[':gameid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoresDateKey(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
) {
  return [':format', '/:format/BoxScores/:date', args] as const
}

export function useGetFormatBoxScoresDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
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
        ? getGetFormatBoxScoresDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].BoxScores[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoresDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
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
        ? getGetFormatBoxScoresDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].BoxScores[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoresDeltaDateMinutesKey(
  args: InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>,
) {
  return [':format', '/:format/BoxScoresDelta/:date/:minutes', args] as const
}

export function useGetFormatBoxScoresDeltaDateMinutes<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
            >
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
        ? getGetFormatBoxScoresDeltaDateMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].BoxScoresDelta[':date'][':minutes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoresDeltaDateMinutes<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
            >
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
        ? getGetFormatBoxScoresDeltaDateMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].BoxScoresDelta[':date'][':minutes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatCurrentSeasonKey(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
) {
  return [':format', '/:format/CurrentSeason', args] as const
}

export function useGetFormatCurrentSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
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
        ? getGetFormatCurrentSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].CurrentSeason.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatCurrentSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
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
        ? getGetFormatCurrentSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].CurrentSeason.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatDfsSlatesByDateDateKey(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
) {
  return [':format', '/:format/DfsSlatesByDate/:date', args] as const
}

export function useGetFormatDfsSlatesByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
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
        ? getGetFormatDfsSlatesByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].DfsSlatesByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatDfsSlatesByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
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
        ? getGetFormatDfsSlatesByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].DfsSlatesByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFreeAgentsKey(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
) {
  return [':format', '/:format/FreeAgents', args] as const
}

export function useGetFormatFreeAgents<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
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
        ? getGetFormatFreeAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FreeAgents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFreeAgents<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
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
        ? getGetFormatFreeAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FreeAgents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatGamesSeasonKey(
  args: InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>,
) {
  return [':format', '/:format/Games/:season', args] as const
}

export function useGetFormatGamesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
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
        ? getGetFormatGamesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Games[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatGamesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
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
        ? getGetFormatGamesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Games[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatGamesByDateDateKey(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
) {
  return [':format', '/:format/GamesByDate/:date', args] as const
}

export function useGetFormatGamesByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
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
        ? getGetFormatGamesByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].GamesByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatGamesByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
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
        ? getGetFormatGamesByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].GamesByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatHitterVsPitcherHitteridPitcheridKey(
  args: InferRequestType<
    (typeof client)[':format']['HitterVsPitcher'][':hitterid'][':pitcherid']['$get']
  >,
) {
  return [':format', '/:format/HitterVsPitcher/:hitterid/:pitcherid', args] as const
}

export function useGetFormatHitterVsPitcherHitteridPitcherid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['HitterVsPitcher'][':hitterid'][':pitcherid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['HitterVsPitcher'][':hitterid'][':pitcherid']['$get']
              >
            >
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
        ? getGetFormatHitterVsPitcherHitteridPitcheridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['HitterVsPitcher'][':hitterid'][':pitcherid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].HitterVsPitcher[':hitterid'][':pitcherid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatHitterVsPitcherHitteridPitcherid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['HitterVsPitcher'][':hitterid'][':pitcherid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['HitterVsPitcher'][':hitterid'][':pitcherid']['$get']
              >
            >
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
        ? getGetFormatHitterVsPitcherHitteridPitcheridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['HitterVsPitcher'][':hitterid'][':pitcherid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].HitterVsPitcher[':hitterid'][':pitcherid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatNewsKey(
  args: InferRequestType<(typeof client)[':format']['News']['$get']>,
) {
  return [':format', '/:format/News', args] as const
}

export function useGetFormatNews<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['News']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatNewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].News.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatNews<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['News']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatNewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].News.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatNewsByDateDateKey(
  args: InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>,
) {
  return [':format', '/:format/NewsByDate/:date', args] as const
}

export function useGetFormatNewsByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
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
        ? getGetFormatNewsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].NewsByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatNewsByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
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
        ? getGetFormatNewsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].NewsByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatNewsByPlayerIDPlayeridKey(
  args: InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>,
) {
  return [':format', '/:format/NewsByPlayerID/:playerid', args] as const
}

export function useGetFormatNewsByPlayerIDPlayerid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
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
        ? getGetFormatNewsByPlayerIDPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].NewsByPlayerID[':playerid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatNewsByPlayerIDPlayerid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
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
        ? getGetFormatNewsByPlayerIDPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].NewsByPlayerID[':playerid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerPlayeridKey(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
) {
  return [':format', '/:format/Player/:playerid', args] as const
}

export function useGetFormatPlayerPlayerid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
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
        ? getGetFormatPlayerPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Player[':playerid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerPlayerid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
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
        ? getGetFormatPlayerPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Player[':playerid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameStatsByDateDateKey(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>,
) {
  return [':format', '/:format/PlayerGameStatsByDate/:date', args] as const
}

export function useGetFormatPlayerGameStatsByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
            >
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
        ? getGetFormatPlayerGameStatsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerGameStatsByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
            >
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
        ? getGetFormatPlayerGameStatsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerGameStatsByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameStatsByPlayerDatePlayeridKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByPlayer/:date/:playerid', args] as const
}

export function useGetFormatPlayerGameStatsByPlayerDatePlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
              >
            >
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
        ? getGetFormatPlayerGameStatsByPlayerDatePlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerGameStatsByPlayer[':date'][':playerid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsByPlayerDatePlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
              >
            >
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
        ? getGetFormatPlayerGameStatsByPlayerDatePlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerGameStatsByPlayer[':date'][':playerid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameStatsBySeason/:season/:playerid/:numberofgames',
    args,
  ] as const
}

export function useGetFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgames<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
              >
            >
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
        ? getGetFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerGameStatsBySeason[':season'][':playerid'][':numberofgames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
              >
            >
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
        ? getGetFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerGameStatsBySeason[':season'][':playerid'][':numberofgames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonAwayStatsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonAwayStats'][':season']['$get']>,
) {
  return [':format', '/:format/PlayerSeasonAwayStats/:season', args] as const
}

export function useGetFormatPlayerSeasonAwayStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonAwayStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonAwayStats'][':season']['$get']>
            >
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
        ? getGetFormatPlayerSeasonAwayStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonAwayStats'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerSeasonAwayStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonAwayStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonAwayStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonAwayStats'][':season']['$get']>
            >
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
        ? getGetFormatPlayerSeasonAwayStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonAwayStats'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerSeasonAwayStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonHomeStatsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonHomeStats'][':season']['$get']>,
) {
  return [':format', '/:format/PlayerSeasonHomeStats/:season', args] as const
}

export function useGetFormatPlayerSeasonHomeStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonHomeStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonHomeStats'][':season']['$get']>
            >
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
        ? getGetFormatPlayerSeasonHomeStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonHomeStats'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerSeasonHomeStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonHomeStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonHomeStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonHomeStats'][':season']['$get']>
            >
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
        ? getGetFormatPlayerSeasonHomeStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonHomeStats'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerSeasonHomeStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonSplitStatsSeasonSplitKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonSplitStats'][':season'][':split']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonSplitStats/:season/:split', args] as const
}

export function useGetFormatPlayerSeasonSplitStatsSeasonSplit<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonSplitStats'][':season'][':split']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonSplitStats'][':season'][':split']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonSplitStatsSeasonSplitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonSplitStats'][':season'][':split']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonSplitStats[':season'][':split'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonSplitStatsSeasonSplit<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonSplitStats'][':season'][':split']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonSplitStats'][':season'][':split']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonSplitStatsSeasonSplitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonSplitStats'][':season'][':split']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonSplitStats[':season'][':split'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonStatsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
) {
  return [':format', '/:format/PlayerSeasonStats/:season', args] as const
}

export function useGetFormatPlayerSeasonStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
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
        ? getGetFormatPlayerSeasonStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerSeasonStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
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
        ? getGetFormatPlayerSeasonStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerSeasonStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonStatsByPlayerSeasonPlayeridKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByPlayer/:season/:playerid', args] as const
}

export function useGetFormatPlayerSeasonStatsByPlayerSeasonPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonStatsByPlayerSeasonPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonStatsByPlayer[':season'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonStatsByPlayerSeasonPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonStatsByPlayerSeasonPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonStatsByPlayer[':season'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonStatsByTeamSeasonTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByTeam/:season/:team', args] as const
}

export function useGetFormatPlayerSeasonStatsByTeamSeasonTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonStatsByTeamSeasonTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonStatsByTeam[':season'][':team'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonStatsByTeamSeasonTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonStatsByTeamSeasonTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonStatsByTeam[':season'][':team'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonStatsSplitByTeamSeasonKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsSplitByTeam'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsSplitByTeam/:season', args] as const
}

export function useGetFormatPlayerSeasonStatsSplitByTeamSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsSplitByTeam'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsSplitByTeam'][':season']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonStatsSplitByTeamSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsSplitByTeam'][':season']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonStatsSplitByTeam[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonStatsSplitByTeamSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsSplitByTeam'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsSplitByTeam'][':season']['$get']
              >
            >
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
        ? getGetFormatPlayerSeasonStatsSplitByTeamSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsSplitByTeam'][':season']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonStatsSplitByTeam[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayersKey(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
) {
  return [':format', '/:format/Players', args] as const
}

export function useGetFormatPlayers<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayers<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayersTeamKey(
  args: InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>,
) {
  return [':format', '/:format/Players/:team', args] as const
}

export function useGetFormatPlayersTeam<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
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
        ? getGetFormatPlayersTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Players[':team'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayersTeam<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
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
        ? getGetFormatPlayersTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Players[':team'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatStadiumsKey(
  args: InferRequestType<(typeof client)[':format']['Stadiums']['$get']>,
) {
  return [':format', '/:format/Stadiums', args] as const
}

export function useGetFormatStadiums<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Stadiums']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatStadiumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Stadiums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatStadiums<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Stadiums']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatStadiumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Stadiums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatStandingsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>,
) {
  return [':format', '/:format/Standings/:season', args] as const
}

export function useGetFormatStandingsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
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
        ? getGetFormatStandingsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Standings[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatStandingsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
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
        ? getGetFormatStandingsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Standings[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatTeamGameStatsByDateDateKey(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
) {
  return [':format', '/:format/TeamGameStatsByDate/:date', args] as const
}

export function useGetFormatTeamGameStatsByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
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
        ? getGetFormatTeamGameStatsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].TeamGameStatsByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeamGameStatsByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
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
        ? getGetFormatTeamGameStatsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].TeamGameStatsByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesKey(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
  >,
) {
  return [':format', '/:format/TeamGameStatsBySeason/:season/:teamid/:numberofgames', args] as const
}

export function useGetFormatTeamGameStatsBySeasonSeasonTeamidNumberofgames<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
              >
            >
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
        ? getGetFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeamGameStatsBySeasonSeasonTeamidNumberofgames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
              >
            >
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
        ? getGetFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatTeamHittersVsPitcherGameidTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['TeamHittersVsPitcher'][':gameid'][':team']['$get']
  >,
) {
  return [':format', '/:format/TeamHittersVsPitcher/:gameid/:team', args] as const
}

export function useGetFormatTeamHittersVsPitcherGameidTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['TeamHittersVsPitcher'][':gameid'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamHittersVsPitcher'][':gameid'][':team']['$get']
              >
            >
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
        ? getGetFormatTeamHittersVsPitcherGameidTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamHittersVsPitcher'][':gameid'][':team']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].TeamHittersVsPitcher[':gameid'][':team'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeamHittersVsPitcherGameidTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['TeamHittersVsPitcher'][':gameid'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamHittersVsPitcher'][':gameid'][':team']['$get']
              >
            >
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
        ? getGetFormatTeamHittersVsPitcherGameidTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['TeamHittersVsPitcher'][':gameid'][':team']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].TeamHittersVsPitcher[':gameid'][':team'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatTeamSeasonStatsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
) {
  return [':format', '/:format/TeamSeasonStats/:season', args] as const
}

export function useGetFormatTeamSeasonStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
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
        ? getGetFormatTeamSeasonStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].TeamSeasonStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeamSeasonStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
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
        ? getGetFormatTeamSeasonStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].TeamSeasonStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatTeamsKey(
  args: InferRequestType<(typeof client)[':format']['teams']['$get']>,
) {
  return [':format', '/:format/teams', args] as const
}

export function useGetFormatTeams<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeams<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormatTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
