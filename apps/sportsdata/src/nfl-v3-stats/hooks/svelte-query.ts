import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatActiveBoxScoresQueryKey(
  args: InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>,
) {
  return [':format', '/:format/ActiveBoxScores', args] as const
}

export function getFormatActiveBoxScoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatActiveBoxScoresQueryKey>
  >({
    queryKey: getFormatActiveBoxScoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].ActiveBoxScores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatActiveBoxScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatActiveBoxScoresQueryKey>
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
      ...getFormatActiveBoxScoresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatAllTeamsQueryKey(
  args: InferRequestType<(typeof client)[':format']['AllTeams']['$get']>,
) {
  return [':format', '/:format/AllTeams', args] as const
}

export function getFormatAllTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['AllTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAllTeamsQueryKey>
  >({
    queryKey: getFormatAllTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].AllTeams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatAllTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['AllTeams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatAllTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatAllTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatAreAnyGamesInProgressQueryKey(
  args: InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
) {
  return [':format', '/:format/AreAnyGamesInProgress', args] as const
}

export function getFormatAreAnyGamesInProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAreAnyGamesInProgressQueryKey>
  >({
    queryKey: getFormatAreAnyGamesInProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].AreAnyGamesInProgress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatAreAnyGamesInProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatAreAnyGamesInProgressQueryKey>
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
      ...getFormatAreAnyGamesInProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoreSeasonWeekHometeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
  >,
) {
  return [':format', '/:format/BoxScore/:season/:week/:hometeam', args] as const
}

export function getFormatBoxScoreSeasonWeekHometeamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreSeasonWeekHometeamQueryKey>
  >({
    queryKey: getFormatBoxScoreSeasonWeekHometeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScore[':season'][':week'][':hometeam'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoreSeasonWeekHometeam<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoreSeasonWeekHometeamQueryKey>
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
      ...getFormatBoxScoreSeasonWeekHometeamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoreByScoreIDV3ScoreidQueryKey(
  args: InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>,
) {
  return [':format', '/:format/BoxScoreByScoreIDV3/:scoreid', args] as const
}

export function getFormatBoxScoreByScoreIDV3ScoreidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreByScoreIDV3ScoreidQueryKey>
  >({
    queryKey: getFormatBoxScoreByScoreIDV3ScoreidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScoreByScoreIDV3[':scoreid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoreByScoreIDV3Scoreid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoreByScoreIDV3ScoreidQueryKey>
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
      ...getFormatBoxScoreByScoreIDV3ScoreidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoreV3SeasonWeekHometeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
  >,
) {
  return [':format', '/:format/BoxScoreV3/:season/:week/:hometeam', args] as const
}

export function getFormatBoxScoreV3SeasonWeekHometeamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreV3SeasonWeekHometeamQueryKey>
  >({
    queryKey: getFormatBoxScoreV3SeasonWeekHometeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScoreV3[':season'][':week'][':hometeam'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoreV3SeasonWeekHometeam<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoreV3SeasonWeekHometeamQueryKey>
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
      ...getFormatBoxScoreV3SeasonWeekHometeamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoresSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/BoxScores/:season/:week', args] as const
}

export function getFormatBoxScoresSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresSeasonWeekQueryKey>
  >({
    queryKey: getFormatBoxScoresSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScores[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoresSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoresSeasonWeekQueryKey>
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
      ...getFormatBoxScoresSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/BoxScoresDelta/:season/:week/:minutes', args] as const
}

export function getFormatBoxScoresDeltaSeasonWeekMinutesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey>
  >({
    queryKey: getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScoresDelta[':season'][':week'][':minutes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoresDeltaSeasonWeekMinutes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey>
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
      ...getFormatBoxScoresDeltaSeasonWeekMinutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey(
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

export function getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey>
  >({
    queryKey: getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScoresDeltaV3[':season'][':week'][':playerstoinclude'][
          ':minutes'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey>
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
      ...getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatByesSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>,
) {
  return [':format', '/:format/Byes/:season', args] as const
}

export function getFormatByesSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatByesSeasonQueryKey>
  >({
    queryKey: getFormatByesSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Byes[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatByesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatByesSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatByesSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatCurrentSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
) {
  return [':format', '/:format/CurrentSeason', args] as const
}

export function getFormatCurrentSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCurrentSeasonQueryKey>
  >({
    queryKey: getFormatCurrentSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].CurrentSeason.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCurrentSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatCurrentSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatCurrentSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatCurrentWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>,
) {
  return [':format', '/:format/CurrentWeek', args] as const
}

export function getFormatCurrentWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCurrentWeekQueryKey>
  >({
    queryKey: getFormatCurrentWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].CurrentWeek.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCurrentWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatCurrentWeekQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatCurrentWeekQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatDailyFantasyPlayersDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>,
) {
  return [':format', '/:format/DailyFantasyPlayers/:date', args] as const
}

export function getFormatDailyFantasyPlayersDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDailyFantasyPlayersDateQueryKey>
  >({
    queryKey: getFormatDailyFantasyPlayersDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].DailyFantasyPlayers[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatDailyFantasyPlayersDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDailyFantasyPlayersDateQueryKey>
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
      ...getFormatDailyFantasyPlayersDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatDailyFantasyPointsDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>,
) {
  return [':format', '/:format/DailyFantasyPoints/:date', args] as const
}

export function getFormatDailyFantasyPointsDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDailyFantasyPointsDateQueryKey>
  >({
    queryKey: getFormatDailyFantasyPointsDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].DailyFantasyPoints[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatDailyFantasyPointsDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDailyFantasyPointsDateQueryKey>
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
      ...getFormatDailyFantasyPointsDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatDfsSlatesByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
) {
  return [':format', '/:format/DfsSlatesByDate/:date', args] as const
}

export function getFormatDfsSlatesByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
  >({
    queryKey: getFormatDfsSlatesByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].DfsSlatesByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatDfsSlatesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
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
      ...getFormatDfsSlatesByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatDfsSlatesByWeekSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/DfsSlatesByWeek/:season/:week', args] as const
}

export function getFormatDfsSlatesByWeekSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatDfsSlatesByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].DfsSlatesByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatDfsSlatesByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDfsSlatesByWeekSeasonWeekQueryKey>
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
      ...getFormatDfsSlatesByWeekSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyDefenseByGameSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseByGame/:season/:week', args] as const
}

export function getFormatFantasyDefenseByGameSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseByGameSeasonWeekQueryKey>
  >({
    queryKey: getFormatFantasyDefenseByGameSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyDefenseByGame[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyDefenseByGameSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatFantasyDefenseByGameSeasonWeekQueryKey>
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
      ...getFormatFantasyDefenseByGameSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseByGameByTeam/:season/:week/:team', args] as const
}

export function getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey>
  >({
    queryKey: getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyDefenseByGameByTeam[':season'][':week'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyDefenseByGameByTeamSeasonWeekTeam<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey>
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
      ...getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyDefenseBySeasonSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>,
) {
  return [':format', '/:format/FantasyDefenseBySeason/:season', args] as const
}

export function getFormatFantasyDefenseBySeasonSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseBySeasonSeasonQueryKey>
  >({
    queryKey: getFormatFantasyDefenseBySeasonSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyDefenseBySeason[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyDefenseBySeasonSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatFantasyDefenseBySeasonSeasonQueryKey>
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
      ...getFormatFantasyDefenseBySeasonSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseBySeasonByTeam/:season/:team', args] as const
}

export function getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey>
  >({
    queryKey: getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyDefenseBySeasonByTeam[':season'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyDefenseBySeasonByTeamSeasonTeam<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey>
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
      ...getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyPlayersQueryKey(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>,
) {
  return [':format', '/:format/FantasyPlayers', args] as const
}

export function getFormatFantasyPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyPlayersQueryKey>
  >({
    queryKey: getFormatFantasyPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyPlayers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatFantasyPlayersQueryKey>
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
      ...getFormatFantasyPlayersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyPlayersIDPQueryKey(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>,
) {
  return [':format', '/:format/FantasyPlayersIDP', args] as const
}

export function getFormatFantasyPlayersIDPQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyPlayersIDPQueryKey>
  >({
    queryKey: getFormatFantasyPlayersIDPQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyPlayersIDP.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyPlayersIDP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatFantasyPlayersIDPQueryKey>
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
      ...getFormatFantasyPlayersIDPQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatFinalBoxScoresQueryKey(
  args: InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>,
) {
  return [':format', '/:format/FinalBoxScores', args] as const
}

export function getFormatFinalBoxScoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFinalBoxScoresQueryKey>
  >({
    queryKey: getFormatFinalBoxScoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FinalBoxScores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFinalBoxScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatFinalBoxScoresQueryKey>
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
      ...getFormatFinalBoxScoresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatFreeAgentsQueryKey(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
) {
  return [':format', '/:format/FreeAgents', args] as const
}

export function getFormatFreeAgentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFreeAgentsQueryKey>
  >({
    queryKey: getFormatFreeAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FreeAgents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatFreeAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatFreeAgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatFreeAgentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
  >,
) {
  return [':format', '/:format/GameLeagueLeaders/:season/:week/:position/:column', args] as const
}

export function getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey>
  >({
    queryKey: getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].GameLeagueLeaders[':season'][':week'][':position'][':column'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatGameLeagueLeadersSeasonWeekPositionColumn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey>
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
      ...getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatGameStatsSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>,
) {
  return [':format', '/:format/GameStats/:season', args] as const
}

export function getFormatGameStatsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGameStatsSeasonQueryKey>
  >({
    queryKey: getFormatGameStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].GameStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatGameStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatGameStatsSeasonQueryKey>
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
      ...getFormatGameStatsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatGameStatsByWeekSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/GameStatsByWeek/:season/:week', args] as const
}

export function getFormatGameStatsByWeekSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGameStatsByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatGameStatsByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].GameStatsByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatGameStatsByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatGameStatsByWeekSeasonWeekQueryKey>
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
      ...getFormatGameStatsByWeekSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatInjuriesSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/Injuries/:season/:week', args] as const
}

export function getFormatInjuriesSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuriesSeasonWeekQueryKey>
  >({
    queryKey: getFormatInjuriesSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Injuries[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatInjuriesSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatInjuriesSeasonWeekQueryKey>
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
      ...getFormatInjuriesSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatInjuriesSeasonWeekTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/Injuries/:season/:week/:team', args] as const
}

export function getFormatInjuriesSeasonWeekTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuriesSeasonWeekTeamQueryKey>
  >({
    queryKey: getFormatInjuriesSeasonWeekTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Injuries[':season'][':week'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatInjuriesSeasonWeekTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatInjuriesSeasonWeekTeamQueryKey>
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
      ...getFormatInjuriesSeasonWeekTeamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatLastCompletedSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>,
) {
  return [':format', '/:format/LastCompletedSeason', args] as const
}

export function getFormatLastCompletedSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLastCompletedSeasonQueryKey>
  >({
    queryKey: getFormatLastCompletedSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].LastCompletedSeason.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatLastCompletedSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatLastCompletedSeasonQueryKey>
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
      ...getFormatLastCompletedSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatLastCompletedWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>,
) {
  return [':format', '/:format/LastCompletedWeek', args] as const
}

export function getFormatLastCompletedWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLastCompletedWeekQueryKey>
  >({
    queryKey: getFormatLastCompletedWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].LastCompletedWeek.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatLastCompletedWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatLastCompletedWeekQueryKey>
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
      ...getFormatLastCompletedWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatLiveBoxScoresQueryKey(
  args: InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>,
) {
  return [':format', '/:format/LiveBoxScores', args] as const
}

export function getFormatLiveBoxScoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLiveBoxScoresQueryKey>
  >({
    queryKey: getFormatLiveBoxScoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].LiveBoxScores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatLiveBoxScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatLiveBoxScoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatLiveBoxScoresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatNewsQueryKey(
  args: InferRequestType<(typeof client)[':format']['News']['$get']>,
) {
  return [':format', '/:format/News', args] as const
}

export function getFormatNewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['News']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsQueryKey>
  >({
    queryKey: getFormatNewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].News.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['News']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatNewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatNewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatNewsByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>,
) {
  return [':format', '/:format/NewsByDate/:date', args] as const
}

export function getFormatNewsByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByDateDateQueryKey>
  >({
    queryKey: getFormatNewsByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].NewsByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatNewsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatNewsByDateDateQueryKey>
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
      ...getFormatNewsByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatNewsByPlayerIDPlayeridQueryKey(
  args: InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>,
) {
  return [':format', '/:format/NewsByPlayerID/:playerid', args] as const
}

export function getFormatNewsByPlayerIDPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByPlayerIDPlayeridQueryKey>
  >({
    queryKey: getFormatNewsByPlayerIDPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].NewsByPlayerID[':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatNewsByPlayerIDPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatNewsByPlayerIDPlayeridQueryKey>
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
      ...getFormatNewsByPlayerIDPlayeridQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatNewsByTeamTeamQueryKey(
  args: InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>,
) {
  return [':format', '/:format/NewsByTeam/:team', args] as const
}

export function getFormatNewsByTeamTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByTeamTeamQueryKey>
  >({
    queryKey: getFormatNewsByTeamTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].NewsByTeam[':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatNewsByTeamTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatNewsByTeamTeamQueryKey>
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
      ...getFormatNewsByTeamTeamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerPlayeridQueryKey(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
) {
  return [':format', '/:format/Player/:playerid', args] as const
}

export function getFormatPlayerPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerPlayeridQueryKey>
  >({
    queryKey: getFormatPlayerPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Player[':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerPlayeridQueryKey>
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
      ...getFormatPlayerPlayeridQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameRedZoneInsideFiveStats/:season/:week', args] as const
}

export function getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey>
  >({
    queryKey: getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameRedZoneInsideFiveStats[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameRedZoneInsideFiveStatsSeasonWeek<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey>
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
      ...getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameRedZoneInsideTenStats/:season/:week', args] as const
}

export function getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey>
  >({
    queryKey: getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameRedZoneInsideTenStats[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameRedZoneInsideTenStatsSeasonWeek<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey>
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
      ...getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameRedZoneStats/:season/:week', args] as const
}

export function getFormatPlayerGameRedZoneStatsSeasonWeekQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey>
  >({
    queryKey: getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameRedZoneStats[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameRedZoneStatsSeasonWeek<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey>
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
      ...getFormatPlayerGameRedZoneStatsSeasonWeekQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByPlayerID/:season/:week/:playerid', args] as const
}

export function getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsByPlayerID[':season'][':week'][':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameStatsByPlayerIDSeasonWeekPlayerid<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey>
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
      ...getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey(
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

export function getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsBySeason[':season'][':playerid'][':numberofgames'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgames<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey>
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
      ...getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByTeam/:season/:week/:team', args] as const
}

export function getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsByTeam[':season'][':week'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameStatsByTeamSeasonWeekTeam<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey>
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
      ...getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsByWeekSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByWeek/:season/:week', args] as const
}

export function getFormatPlayerGameStatsByWeekSeasonWeekQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameStatsByWeekSeasonWeek<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsByWeekSeasonWeekQueryKey>
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
      ...getFormatPlayerGameStatsByWeekSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByWeekDelta/:season/:week/:minutes', args] as const
}

export function getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsByWeekDelta[':season'][':week'][':minutes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey>
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
      ...getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsDeltaMinutesQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>,
) {
  return [':format', '/:format/PlayerGameStatsDelta/:minutes', args] as const
}

export function getFormatPlayerGameStatsDeltaMinutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsDeltaMinutesQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsDeltaMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsDelta[':minutes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameStatsDeltaMinutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsDeltaMinutesQueryKey>
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
      ...getFormatPlayerGameStatsDeltaMinutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerOwnershipSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/PlayerOwnership/:season/:week', args] as const
}

export function getFormatPlayerOwnershipSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerOwnershipSeasonWeekQueryKey>
  >({
    queryKey: getFormatPlayerOwnershipSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerOwnership[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerOwnershipSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerOwnershipSeasonWeekQueryKey>
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
      ...getFormatPlayerOwnershipSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonRedZoneInsideFiveStats/:season', args] as const
}

export function getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey>
  >({
    queryKey: getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonRedZoneInsideFiveStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonRedZoneInsideFiveStatsSeason<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey>
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
      ...getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonRedZoneInsideTenStats/:season', args] as const
}

export function getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey>
  >({
    queryKey: getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonRedZoneInsideTenStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonRedZoneInsideTenStatsSeason<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey>
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
      ...getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonRedZoneStatsSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>,
) {
  return [':format', '/:format/PlayerSeasonRedZoneStats/:season', args] as const
}

export function getFormatPlayerSeasonRedZoneStatsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonRedZoneStatsSeasonQueryKey>
  >({
    queryKey: getFormatPlayerSeasonRedZoneStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonRedZoneStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonRedZoneStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonRedZoneStatsSeasonQueryKey>
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
      ...getFormatPlayerSeasonRedZoneStatsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonStatsSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
) {
  return [':format', '/:format/PlayerSeasonStats/:season', args] as const
}

export function getFormatPlayerSeasonStatsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsSeasonQueryKey>
  >({
    queryKey: getFormatPlayerSeasonStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonStatsSeasonQueryKey>
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
      ...getFormatPlayerSeasonStatsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByPlayerID/:season/:playerid', args] as const
}

export function getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey>
  >({
    queryKey: getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByPlayerID[':season'][':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonStatsByPlayerIDSeasonPlayerid<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey>
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
      ...getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByTeam/:season/:team', args] as const
}

export function getFormatPlayerSeasonStatsByTeamSeasonTeamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey>
  >({
    queryKey: getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByTeam[':season'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonStatsByTeamSeasonTeam<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey>
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
      ...getFormatPlayerSeasonStatsByTeamSeasonTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonThirdDownStatsSeasonQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonThirdDownStats/:season', args] as const
}

export function getFormatPlayerSeasonThirdDownStatsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonThirdDownStatsSeasonQueryKey>
  >({
    queryKey: getFormatPlayerSeasonThirdDownStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonThirdDownStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonThirdDownStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonThirdDownStatsSeasonQueryKey>
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
      ...getFormatPlayerSeasonThirdDownStatsSeasonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayersQueryKey(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
) {
  return [':format', '/:format/Players', args] as const
}

export function getFormatPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersQueryKey>
  >({
    queryKey: getFormatPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Players.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatPlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatPlayersTeamQueryKey(
  args: InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>,
) {
  return [':format', '/:format/Players/:team', args] as const
}

export function getFormatPlayersTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersTeamQueryKey>
  >({
    queryKey: getFormatPlayersTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Players[':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayersTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayersTeamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatPlayersTeamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatProBowlersSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>,
) {
  return [':format', '/:format/ProBowlers/:season', args] as const
}

export function getFormatProBowlersSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatProBowlersSeasonQueryKey>
  >({
    queryKey: getFormatProBowlersSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].ProBowlers[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatProBowlersSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatProBowlersSeasonQueryKey>
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
      ...getFormatProBowlersSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatRecentlyUpdatedBoxScoresMinutesQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/RecentlyUpdatedBoxScores/:minutes', args] as const
}

export function getFormatRecentlyUpdatedBoxScoresMinutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRecentlyUpdatedBoxScoresMinutesQueryKey>
  >({
    queryKey: getFormatRecentlyUpdatedBoxScoresMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].RecentlyUpdatedBoxScores[':minutes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatRecentlyUpdatedBoxScoresMinutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatRecentlyUpdatedBoxScoresMinutesQueryKey>
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
      ...getFormatRecentlyUpdatedBoxScoresMinutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatRookiesSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>,
) {
  return [':format', '/:format/Rookies/:season', args] as const
}

export function getFormatRookiesSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRookiesSeasonQueryKey>
  >({
    queryKey: getFormatRookiesSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Rookies[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatRookiesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatRookiesSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatRookiesSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatSchedulesSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>,
) {
  return [':format', '/:format/Schedules/:season', args] as const
}

export function getFormatSchedulesSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSchedulesSeasonQueryKey>
  >({
    queryKey: getFormatSchedulesSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Schedules[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatSchedulesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatSchedulesSeasonQueryKey>
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
      ...getFormatSchedulesSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatScoresSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>,
) {
  return [':format', '/:format/Scores/:season', args] as const
}

export function getFormatScoresSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScoresSeasonQueryKey>
  >({
    queryKey: getFormatScoresSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Scores[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatScoresSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatScoresSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatScoresSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatScoresByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>,
) {
  return [':format', '/:format/ScoresByDate/:date', args] as const
}

export function getFormatScoresByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScoresByDateDateQueryKey>
  >({
    queryKey: getFormatScoresByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].ScoresByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatScoresByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatScoresByDateDateQueryKey>
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
      ...getFormatScoresByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatScoresByWeekSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/ScoresByWeek/:season/:week', args] as const
}

export function getFormatScoresByWeekSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScoresByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatScoresByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].ScoresByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatScoresByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatScoresByWeekSeasonWeekQueryKey>
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
      ...getFormatScoresByWeekSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
  >,
) {
  return [':format', '/:format/SeasonLeagueLeaders/:season/:position/:column', args] as const
}

export function getFormatSeasonLeagueLeadersSeasonPositionColumnQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey>
  >({
    queryKey: getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].SeasonLeagueLeaders[':season'][':position'][':column'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatSeasonLeagueLeadersSeasonPositionColumn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey>
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
      ...getFormatSeasonLeagueLeadersSeasonPositionColumnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatSimulatedBoxScoresV3NumberofplaysQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
  >,
) {
  return [':format', '/:format/SimulatedBoxScoresV3/:numberofplays', args] as const
}

export function getFormatSimulatedBoxScoresV3NumberofplaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSimulatedBoxScoresV3NumberofplaysQueryKey>
  >({
    queryKey: getFormatSimulatedBoxScoresV3NumberofplaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].SimulatedBoxScoresV3[':numberofplays'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatSimulatedBoxScoresV3Numberofplays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatSimulatedBoxScoresV3NumberofplaysQueryKey>
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
      ...getFormatSimulatedBoxScoresV3NumberofplaysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatSimulatedScoresNumberofplaysQueryKey(
  args: InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>,
) {
  return [':format', '/:format/SimulatedScores/:numberofplays', args] as const
}

export function getFormatSimulatedScoresNumberofplaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSimulatedScoresNumberofplaysQueryKey>
  >({
    queryKey: getFormatSimulatedScoresNumberofplaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].SimulatedScores[':numberofplays'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatSimulatedScoresNumberofplays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatSimulatedScoresNumberofplaysQueryKey>
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
      ...getFormatSimulatedScoresNumberofplaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatStadiumsQueryKey(
  args: InferRequestType<(typeof client)[':format']['Stadiums']['$get']>,
) {
  return [':format', '/:format/Stadiums', args] as const
}

export function getFormatStadiumsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Stadiums']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStadiumsQueryKey>
  >({
    queryKey: getFormatStadiumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Stadiums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatStadiums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Stadiums']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatStadiumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatStadiumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatStandingsSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>,
) {
  return [':format', '/:format/Standings/:season', args] as const
}

export function getFormatStandingsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStandingsSeasonQueryKey>
  >({
    queryKey: getFormatStandingsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Standings[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatStandingsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatStandingsSeasonQueryKey>
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
      ...getFormatStandingsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamGameStatsSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/TeamGameStats/:season/:week', args] as const
}

export function getFormatTeamGameStatsSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsSeasonWeekQueryKey>
  >({
    queryKey: getFormatTeamGameStatsSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].TeamGameStats[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTeamGameStatsSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamGameStatsSeasonWeekQueryKey>
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
      ...getFormatTeamGameStatsSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
  >,
) {
  return [':format', '/:format/TeamGameStatsBySeason/:season/:teamid/:numberofgames', args] as const
}

export function getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey>
  >({
    queryKey: getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTeamGameStatsBySeasonSeasonTeamidNumberofgames<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey>
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
      ...getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamSeasonStatsSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
) {
  return [':format', '/:format/TeamSeasonStats/:season', args] as const
}

export function getFormatTeamSeasonStatsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamSeasonStatsSeasonQueryKey>
  >({
    queryKey: getFormatTeamSeasonStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].TeamSeasonStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTeamSeasonStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamSeasonStatsSeasonQueryKey>
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
      ...getFormatTeamSeasonStatsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamsQueryKey(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
) {
  return [':format', '/:format/Teams', args] as const
}

export function getFormatTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsQueryKey>
  >({
    queryKey: getFormatTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatTeamsSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>,
) {
  return [':format', '/:format/Teams/:season', args] as const
}

export function getFormatTeamsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsSeasonQueryKey>
  >({
    queryKey: getFormatTeamsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Teams[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTeamsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamsSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatTeamsSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatTimeframesTypeQueryKey(
  args: InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>,
) {
  return [':format', '/:format/Timeframes/:type', args] as const
}

export function getFormatTimeframesTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTimeframesTypeQueryKey>
  >({
    queryKey: getFormatTimeframesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Timeframes[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTimeframesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTimeframesTypeQueryKey>
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
      ...getFormatTimeframesTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatUpcomingSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>,
) {
  return [':format', '/:format/UpcomingSeason', args] as const
}

export function getFormatUpcomingSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingSeasonQueryKey>
  >({
    queryKey: getFormatUpcomingSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].UpcomingSeason.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatUpcomingSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatUpcomingSeasonQueryKey>
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
      ...getFormatUpcomingSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatUpcomingWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>,
) {
  return [':format', '/:format/UpcomingWeek', args] as const
}

export function getFormatUpcomingWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingWeekQueryKey>
  >({
    queryKey: getFormatUpcomingWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].UpcomingWeek.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatUpcomingWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatUpcomingWeekQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatUpcomingWeekQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
