import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getGetFormatActiveBoxScoresKey(
  args: InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>,
) {
  return [':format', '/:format/ActiveBoxScores', args] as const
}

export function useGetFormatActiveBoxScores<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
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
        ? getGetFormatActiveBoxScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].ActiveBoxScores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatActiveBoxScores<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
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
        ? getGetFormatActiveBoxScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].ActiveBoxScores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
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

export function getGetFormatBoxScoreSeasonWeekHometeamKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
  >,
) {
  return [':format', '/:format/BoxScore/:season/:week/:hometeam', args] as const
}

export function useGetFormatBoxScoreSeasonWeekHometeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
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
        ? getGetFormatBoxScoreSeasonWeekHometeamKey(args)
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
                (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
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
          client[':format'].BoxScore[':season'][':week'][':hometeam'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoreSeasonWeekHometeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
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
        ? getGetFormatBoxScoreSeasonWeekHometeamKey(args)
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
                (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
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
          client[':format'].BoxScore[':season'][':week'][':hometeam'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoreByScoreIDV3ScoreidKey(
  args: InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>,
) {
  return [':format', '/:format/BoxScoreByScoreIDV3/:scoreid', args] as const
}

export function useGetFormatBoxScoreByScoreIDV3Scoreid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
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
        ? getGetFormatBoxScoreByScoreIDV3ScoreidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].BoxScoreByScoreIDV3[':scoreid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoreByScoreIDV3Scoreid<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
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
        ? getGetFormatBoxScoreByScoreIDV3ScoreidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].BoxScoreByScoreIDV3[':scoreid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoreV3SeasonWeekHometeamKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
  >,
) {
  return [':format', '/:format/BoxScoreV3/:season/:week/:hometeam', args] as const
}

export function useGetFormatBoxScoreV3SeasonWeekHometeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
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
        ? getGetFormatBoxScoreV3SeasonWeekHometeamKey(args)
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
                (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
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
          client[':format'].BoxScoreV3[':season'][':week'][':hometeam'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoreV3SeasonWeekHometeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
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
        ? getGetFormatBoxScoreV3SeasonWeekHometeamKey(args)
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
                (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
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
          client[':format'].BoxScoreV3[':season'][':week'][':hometeam'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoresSeasonWeekKey(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/BoxScores/:season/:week', args] as const
}

export function useGetFormatBoxScoresSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
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
        ? getGetFormatBoxScoresSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].BoxScores[':season'][':week'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoresSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
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
        ? getGetFormatBoxScoresSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].BoxScores[':season'][':week'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoresDeltaSeasonWeekMinutesKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/BoxScoresDelta/:season/:week/:minutes', args] as const
}

export function useGetFormatBoxScoresDeltaSeasonWeekMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
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
        ? getGetFormatBoxScoresDeltaSeasonWeekMinutesKey(args)
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
                (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
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
          client[':format'].BoxScoresDelta[':season'][':week'][':minutes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoresDeltaSeasonWeekMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
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
        ? getGetFormatBoxScoresDeltaSeasonWeekMinutesKey(args)
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
                (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
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
          client[':format'].BoxScoresDelta[':season'][':week'][':minutes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
  >,
) {
  return [
    ':format',
    '/:format/BoxScoresDeltaV3/:season/:week/:playerstoinclude/:minutes',
    args,
  ] as const
}

export function useGetFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
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
        ? getGetFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesKey(args)
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
                (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
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
          client[':format'].BoxScoresDeltaV3[':season'][':week'][':playerstoinclude'][
            ':minutes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
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
        ? getGetFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesKey(args)
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
                (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
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
          client[':format'].BoxScoresDeltaV3[':season'][':week'][':playerstoinclude'][
            ':minutes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatByesSeasonKey(
  args: InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>,
) {
  return [':format', '/:format/Byes/:season', args] as const
}

export function useGetFormatByesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
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
        ? getGetFormatByesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Byes[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatByesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
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
        ? getGetFormatByesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Byes[':season'].$get(args, clientOptions)),
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

export function getGetFormatCurrentWeekKey(
  args: InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>,
) {
  return [':format', '/:format/CurrentWeek', args] as const
}

export function useGetFormatCurrentWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>
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
        ? getGetFormatCurrentWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].CurrentWeek.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatCurrentWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>
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
        ? getGetFormatCurrentWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].CurrentWeek.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatDailyFantasyPlayersDateKey(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>,
) {
  return [':format', '/:format/DailyFantasyPlayers/:date', args] as const
}

export function useGetFormatDailyFantasyPlayersDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
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
        ? getGetFormatDailyFantasyPlayersDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].DailyFantasyPlayers[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatDailyFantasyPlayersDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
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
        ? getGetFormatDailyFantasyPlayersDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].DailyFantasyPlayers[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatDailyFantasyPointsDateKey(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>,
) {
  return [':format', '/:format/DailyFantasyPoints/:date', args] as const
}

export function useGetFormatDailyFantasyPointsDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
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
        ? getGetFormatDailyFantasyPointsDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].DailyFantasyPoints[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatDailyFantasyPointsDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
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
        ? getGetFormatDailyFantasyPointsDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].DailyFantasyPoints[':date'].$get(args, clientOptions)),
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

export function getGetFormatDfsSlatesByWeekSeasonWeekKey(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/DfsSlatesByWeek/:season/:week', args] as const
}

export function useGetFormatDfsSlatesByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
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
        ? getGetFormatDfsSlatesByWeekSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].DfsSlatesByWeek[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatDfsSlatesByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
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
        ? getGetFormatDfsSlatesByWeekSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].DfsSlatesByWeek[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFantasyDefenseByGameSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseByGame/:season/:week', args] as const
}

export function useGetFormatFantasyDefenseByGameSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
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
        ? getGetFormatFantasyDefenseByGameSeasonWeekKey(args)
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
                (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
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
          client[':format'].FantasyDefenseByGame[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyDefenseByGameSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
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
        ? getGetFormatFantasyDefenseByGameSeasonWeekKey(args)
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
                (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
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
          client[':format'].FantasyDefenseByGame[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFantasyDefenseByGameByTeamSeasonWeekTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseByGameByTeam/:season/:week/:team', args] as const
}

export function useGetFormatFantasyDefenseByGameByTeamSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
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
        ? getGetFormatFantasyDefenseByGameByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].FantasyDefenseByGameByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyDefenseByGameByTeamSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
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
        ? getGetFormatFantasyDefenseByGameByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].FantasyDefenseByGameByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFantasyDefenseBySeasonSeasonKey(
  args: InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>,
) {
  return [':format', '/:format/FantasyDefenseBySeason/:season', args] as const
}

export function useGetFormatFantasyDefenseBySeasonSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
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
        ? getGetFormatFantasyDefenseBySeasonSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].FantasyDefenseBySeason[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyDefenseBySeasonSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
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
        ? getGetFormatFantasyDefenseBySeasonSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].FantasyDefenseBySeason[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFantasyDefenseBySeasonByTeamSeasonTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseBySeasonByTeam/:season/:team', args] as const
}

export function useGetFormatFantasyDefenseBySeasonByTeamSeasonTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
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
        ? getGetFormatFantasyDefenseBySeasonByTeamSeasonTeamKey(args)
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
                (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
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
          client[':format'].FantasyDefenseBySeasonByTeam[':season'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyDefenseBySeasonByTeamSeasonTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
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
        ? getGetFormatFantasyDefenseBySeasonByTeamSeasonTeamKey(args)
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
                (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
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
          client[':format'].FantasyDefenseBySeasonByTeam[':season'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFantasyPlayersKey(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>,
) {
  return [':format', '/:format/FantasyPlayers', args] as const
}

export function useGetFormatFantasyPlayers<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
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
        ? getGetFormatFantasyPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FantasyPlayers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyPlayers<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
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
        ? getGetFormatFantasyPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FantasyPlayers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFantasyPlayersIDPKey(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>,
) {
  return [':format', '/:format/FantasyPlayersIDP', args] as const
}

export function useGetFormatFantasyPlayersIDP<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
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
        ? getGetFormatFantasyPlayersIDPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FantasyPlayersIDP.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyPlayersIDP<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
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
        ? getGetFormatFantasyPlayersIDPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FantasyPlayersIDP.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFinalBoxScoresKey(
  args: InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>,
) {
  return [':format', '/:format/FinalBoxScores', args] as const
}

export function useGetFormatFinalBoxScores<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
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
        ? getGetFormatFinalBoxScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FinalBoxScores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFinalBoxScores<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
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
        ? getGetFormatFinalBoxScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].FinalBoxScores.$get(args, clientOptions)),
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

export function getGetFormatGameLeagueLeadersSeasonWeekPositionColumnKey(
  args: InferRequestType<
    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
  >,
) {
  return [':format', '/:format/GameLeagueLeaders/:season/:week/:position/:column', args] as const
}

export function useGetFormatGameLeagueLeadersSeasonWeekPositionColumn<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
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
        ? getGetFormatGameLeagueLeadersSeasonWeekPositionColumnKey(args)
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
                (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
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
          client[':format'].GameLeagueLeaders[':season'][':week'][':position'][':column'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatGameLeagueLeadersSeasonWeekPositionColumn<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
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
        ? getGetFormatGameLeagueLeadersSeasonWeekPositionColumnKey(args)
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
                (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
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
          client[':format'].GameLeagueLeaders[':season'][':week'][':position'][':column'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatGameStatsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>,
) {
  return [':format', '/:format/GameStats/:season', args] as const
}

export function useGetFormatGameStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
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
        ? getGetFormatGameStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].GameStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatGameStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
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
        ? getGetFormatGameStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].GameStats[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatGameStatsByWeekSeasonWeekKey(
  args: InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/GameStatsByWeek/:season/:week', args] as const
}

export function useGetFormatGameStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
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
        ? getGetFormatGameStatsByWeekSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].GameStatsByWeek[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatGameStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
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
        ? getGetFormatGameStatsByWeekSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].GameStatsByWeek[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatInjuriesSeasonWeekKey(
  args: InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/Injuries/:season/:week', args] as const
}

export function useGetFormatInjuriesSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
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
        ? getGetFormatInjuriesSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].Injuries[':season'][':week'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatInjuriesSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
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
        ? getGetFormatInjuriesSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].Injuries[':season'][':week'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatInjuriesSeasonWeekTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/Injuries/:season/:week/:team', args] as const
}

export function useGetFormatInjuriesSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
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
        ? getGetFormatInjuriesSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
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
          client[':format'].Injuries[':season'][':week'][':team'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatInjuriesSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
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
        ? getGetFormatInjuriesSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
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
          client[':format'].Injuries[':season'][':week'][':team'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatLastCompletedSeasonKey(
  args: InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>,
) {
  return [':format', '/:format/LastCompletedSeason', args] as const
}

export function useGetFormatLastCompletedSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
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
        ? getGetFormatLastCompletedSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].LastCompletedSeason.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatLastCompletedSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
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
        ? getGetFormatLastCompletedSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].LastCompletedSeason.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatLastCompletedWeekKey(
  args: InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>,
) {
  return [':format', '/:format/LastCompletedWeek', args] as const
}

export function useGetFormatLastCompletedWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
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
        ? getGetFormatLastCompletedWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].LastCompletedWeek.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatLastCompletedWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
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
        ? getGetFormatLastCompletedWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].LastCompletedWeek.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatLiveBoxScoresKey(
  args: InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>,
) {
  return [':format', '/:format/LiveBoxScores', args] as const
}

export function useGetFormatLiveBoxScores<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
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
        ? getGetFormatLiveBoxScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].LiveBoxScores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatLiveBoxScores<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
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
        ? getGetFormatLiveBoxScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].LiveBoxScores.$get(args, clientOptions)),
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

export function getGetFormatNewsByTeamTeamKey(
  args: InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>,
) {
  return [':format', '/:format/NewsByTeam/:team', args] as const
}

export function useGetFormatNewsByTeamTeam<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
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
        ? getGetFormatNewsByTeamTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].NewsByTeam[':team'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatNewsByTeamTeam<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
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
        ? getGetFormatNewsByTeamTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].NewsByTeam[':team'].$get(args, clientOptions)),
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

export function getGetFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameRedZoneInsideFiveStats/:season/:week', args] as const
}

export function useGetFormatPlayerGameRedZoneInsideFiveStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
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
          client[':format'].PlayerGameRedZoneInsideFiveStats[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameRedZoneInsideFiveStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
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
          client[':format'].PlayerGameRedZoneInsideFiveStats[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameRedZoneInsideTenStatsSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameRedZoneInsideTenStats/:season/:week', args] as const
}

export function useGetFormatPlayerGameRedZoneInsideTenStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameRedZoneInsideTenStatsSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
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
          client[':format'].PlayerGameRedZoneInsideTenStats[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameRedZoneInsideTenStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameRedZoneInsideTenStatsSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
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
          client[':format'].PlayerGameRedZoneInsideTenStats[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameRedZoneStatsSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameRedZoneStats/:season/:week', args] as const
}

export function useGetFormatPlayerGameRedZoneStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameRedZoneStatsSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
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
          client[':format'].PlayerGameRedZoneStats[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameRedZoneStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameRedZoneStatsSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
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
          client[':format'].PlayerGameRedZoneStats[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByPlayerID/:season/:week/:playerid', args] as const
}

export function useGetFormatPlayerGameStatsByPlayerIDSeasonWeekPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
        ? getGetFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
          client[':format'].PlayerGameStatsByPlayerID[':season'][':week'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsByPlayerIDSeasonWeekPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
        ? getGetFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
          client[':format'].PlayerGameStatsByPlayerID[':season'][':week'][':playerid'].$get(
            args,
            clientOptions,
          ),
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

export function getGetFormatPlayerGameStatsByTeamSeasonWeekTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByTeam/:season/:week/:team', args] as const
}

export function useGetFormatPlayerGameStatsByTeamSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
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
        ? getGetFormatPlayerGameStatsByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].PlayerGameStatsByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsByTeamSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
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
        ? getGetFormatPlayerGameStatsByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].PlayerGameStatsByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameStatsByWeekSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByWeek/:season/:week', args] as const
}

export function useGetFormatPlayerGameStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameStatsByWeekSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
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
          client[':format'].PlayerGameStatsByWeek[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
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
        ? getGetFormatPlayerGameStatsByWeekSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
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
          client[':format'].PlayerGameStatsByWeek[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByWeekDelta/:season/:week/:minutes', args] as const
}

export function useGetFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
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
        ? getGetFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
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
          client[':format'].PlayerGameStatsByWeekDelta[':season'][':week'][':minutes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
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
        ? getGetFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesKey(args)
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
                (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
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
          client[':format'].PlayerGameStatsByWeekDelta[':season'][':week'][':minutes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameStatsDeltaMinutesKey(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>,
) {
  return [':format', '/:format/PlayerGameStatsDelta/:minutes', args] as const
}

export function useGetFormatPlayerGameStatsDeltaMinutes<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
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
        ? getGetFormatPlayerGameStatsDeltaMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerGameStatsDelta[':minutes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameStatsDeltaMinutes<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
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
        ? getGetFormatPlayerGameStatsDeltaMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].PlayerGameStatsDelta[':minutes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerOwnershipSeasonWeekKey(
  args: InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/PlayerOwnership/:season/:week', args] as const
}

export function useGetFormatPlayerOwnershipSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
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
        ? getGetFormatPlayerOwnershipSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerOwnership[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerOwnershipSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
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
        ? getGetFormatPlayerOwnershipSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerOwnership[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonRedZoneInsideFiveStatsSeasonKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonRedZoneInsideFiveStats/:season', args] as const
}

export function useGetFormatPlayerSeasonRedZoneInsideFiveStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
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
        ? getGetFormatPlayerSeasonRedZoneInsideFiveStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
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
          client[':format'].PlayerSeasonRedZoneInsideFiveStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonRedZoneInsideFiveStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
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
        ? getGetFormatPlayerSeasonRedZoneInsideFiveStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
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
          client[':format'].PlayerSeasonRedZoneInsideFiveStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonRedZoneInsideTenStatsSeasonKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonRedZoneInsideTenStats/:season', args] as const
}

export function useGetFormatPlayerSeasonRedZoneInsideTenStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
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
        ? getGetFormatPlayerSeasonRedZoneInsideTenStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
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
          client[':format'].PlayerSeasonRedZoneInsideTenStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonRedZoneInsideTenStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
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
        ? getGetFormatPlayerSeasonRedZoneInsideTenStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
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
          client[':format'].PlayerSeasonRedZoneInsideTenStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonRedZoneStatsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>,
) {
  return [':format', '/:format/PlayerSeasonRedZoneStats/:season', args] as const
}

export function useGetFormatPlayerSeasonRedZoneStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
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
        ? getGetFormatPlayerSeasonRedZoneStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonRedZoneStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonRedZoneStatsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
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
        ? getGetFormatPlayerSeasonRedZoneStatsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayerSeasonRedZoneStats[':season'].$get(args, clientOptions),
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

export function getGetFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByPlayerID/:season/:playerid', args] as const
}

export function useGetFormatPlayerSeasonStatsByPlayerIDSeasonPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
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
        ? getGetFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridKey(args)
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
                (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
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
          client[':format'].PlayerSeasonStatsByPlayerID[':season'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonStatsByPlayerIDSeasonPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
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
        ? getGetFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridKey(args)
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
                (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
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
          client[':format'].PlayerSeasonStatsByPlayerID[':season'][':playerid'].$get(
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

export function getGetFormatPlayerSeasonThirdDownStatsSeasonKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonThirdDownStats/:season', args] as const
}

export function useGetFormatPlayerSeasonThirdDownStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
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
        ? getGetFormatPlayerSeasonThirdDownStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
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
          client[':format'].PlayerSeasonThirdDownStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonThirdDownStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
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
        ? getGetFormatPlayerSeasonThirdDownStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
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
          client[':format'].PlayerSeasonThirdDownStats[':season'].$get(args, clientOptions),
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

export function getGetFormatProBowlersSeasonKey(
  args: InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>,
) {
  return [':format', '/:format/ProBowlers/:season', args] as const
}

export function useGetFormatProBowlersSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
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
        ? getGetFormatProBowlersSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].ProBowlers[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatProBowlersSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
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
        ? getGetFormatProBowlersSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].ProBowlers[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatRecentlyUpdatedBoxScoresMinutesKey(
  args: InferRequestType<
    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/RecentlyUpdatedBoxScores/:minutes', args] as const
}

export function useGetFormatRecentlyUpdatedBoxScoresMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
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
        ? getGetFormatRecentlyUpdatedBoxScoresMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].RecentlyUpdatedBoxScores[':minutes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatRecentlyUpdatedBoxScoresMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
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
        ? getGetFormatRecentlyUpdatedBoxScoresMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].RecentlyUpdatedBoxScores[':minutes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatRookiesSeasonKey(
  args: InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>,
) {
  return [':format', '/:format/Rookies/:season', args] as const
}

export function useGetFormatRookiesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
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
        ? getGetFormatRookiesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Rookies[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatRookiesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
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
        ? getGetFormatRookiesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Rookies[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatSchedulesSeasonKey(
  args: InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>,
) {
  return [':format', '/:format/Schedules/:season', args] as const
}

export function useGetFormatSchedulesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
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
        ? getGetFormatSchedulesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Schedules[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatSchedulesSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
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
        ? getGetFormatSchedulesSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Schedules[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatScoresSeasonKey(
  args: InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>,
) {
  return [':format', '/:format/Scores/:season', args] as const
}

export function useGetFormatScoresSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
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
        ? getGetFormatScoresSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Scores[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatScoresSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
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
        ? getGetFormatScoresSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Scores[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatScoresByDateDateKey(
  args: InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>,
) {
  return [':format', '/:format/ScoresByDate/:date', args] as const
}

export function useGetFormatScoresByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
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
        ? getGetFormatScoresByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].ScoresByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatScoresByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
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
        ? getGetFormatScoresByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].ScoresByDate[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatScoresByWeekSeasonWeekKey(
  args: InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/ScoresByWeek/:season/:week', args] as const
}

export function useGetFormatScoresByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
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
        ? getGetFormatScoresByWeekSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].ScoresByWeek[':season'][':week'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatScoresByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
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
        ? getGetFormatScoresByWeekSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':format'].ScoresByWeek[':season'][':week'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatSeasonLeagueLeadersSeasonPositionColumnKey(
  args: InferRequestType<
    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
  >,
) {
  return [':format', '/:format/SeasonLeagueLeaders/:season/:position/:column', args] as const
}

export function useGetFormatSeasonLeagueLeadersSeasonPositionColumn<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
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
        ? getGetFormatSeasonLeagueLeadersSeasonPositionColumnKey(args)
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
                (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
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
          client[':format'].SeasonLeagueLeaders[':season'][':position'][':column'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatSeasonLeagueLeadersSeasonPositionColumn<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
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
        ? getGetFormatSeasonLeagueLeadersSeasonPositionColumnKey(args)
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
                (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
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
          client[':format'].SeasonLeagueLeaders[':season'][':position'][':column'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatSimulatedBoxScoresV3NumberofplaysKey(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
  >,
) {
  return [':format', '/:format/SimulatedBoxScoresV3/:numberofplays', args] as const
}

export function useGetFormatSimulatedBoxScoresV3Numberofplays<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
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
        ? getGetFormatSimulatedBoxScoresV3NumberofplaysKey(args)
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
                (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
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
          client[':format'].SimulatedBoxScoresV3[':numberofplays'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatSimulatedBoxScoresV3Numberofplays<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
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
        ? getGetFormatSimulatedBoxScoresV3NumberofplaysKey(args)
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
                (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
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
          client[':format'].SimulatedBoxScoresV3[':numberofplays'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatSimulatedScoresNumberofplaysKey(
  args: InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>,
) {
  return [':format', '/:format/SimulatedScores/:numberofplays', args] as const
}

export function useGetFormatSimulatedScoresNumberofplays<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
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
        ? getGetFormatSimulatedScoresNumberofplaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].SimulatedScores[':numberofplays'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatSimulatedScoresNumberofplays<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
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
        ? getGetFormatSimulatedScoresNumberofplaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].SimulatedScores[':numberofplays'].$get(args, clientOptions),
        ),
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

export function getGetFormatTeamGameStatsSeasonWeekKey(
  args: InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/TeamGameStats/:season/:week', args] as const
}

export function useGetFormatTeamGameStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
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
        ? getGetFormatTeamGameStatsSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].TeamGameStats[':season'][':week'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeamGameStatsSeasonWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
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
        ? getGetFormatTeamGameStatsSeasonWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].TeamGameStats[':season'][':week'].$get(args, clientOptions),
        ),
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
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
) {
  return [':format', '/:format/Teams', args] as const
}

export function useGetFormatTeams<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeams<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatTeamsSeasonKey(
  args: InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>,
) {
  return [':format', '/:format/Teams/:season', args] as const
}

export function useGetFormatTeamsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
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
        ? getGetFormatTeamsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Teams[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTeamsSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
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
        ? getGetFormatTeamsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Teams[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatTimeframesTypeKey(
  args: InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>,
) {
  return [':format', '/:format/Timeframes/:type', args] as const
}

export function useGetFormatTimeframesType<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
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
        ? getGetFormatTimeframesTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Timeframes[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatTimeframesType<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
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
        ? getGetFormatTimeframesTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].Timeframes[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatUpcomingSeasonKey(
  args: InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>,
) {
  return [':format', '/:format/UpcomingSeason', args] as const
}

export function useGetFormatUpcomingSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
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
        ? getGetFormatUpcomingSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].UpcomingSeason.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatUpcomingSeason<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
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
        ? getGetFormatUpcomingSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].UpcomingSeason.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatUpcomingWeekKey(
  args: InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>,
) {
  return [':format', '/:format/UpcomingWeek', args] as const
}

export function useGetFormatUpcomingWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
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
        ? getGetFormatUpcomingWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].UpcomingWeek.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatUpcomingWeek<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
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
        ? getGetFormatUpcomingWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].UpcomingWeek.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
