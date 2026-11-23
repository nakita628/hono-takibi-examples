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

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatActiveBoxScoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>>,
) {
  return [':format', '/:format/ActiveBoxScores', toValue(args)] as const
}

export function getFormatActiveBoxScoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatActiveBoxScoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].ActiveBoxScores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatActiveBoxScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatActiveBoxScoresQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['ActiveBoxScores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatActiveBoxScoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatActiveBoxScoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].ActiveBoxScores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatAllTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['AllTeams']['$get']>>,
) {
  return [':format', '/:format/AllTeams', toValue(args)] as const
}

export function getFormatAllTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['AllTeams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatAllTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].AllTeams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatAllTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['AllTeams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatAllTeamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAllTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatAllTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].AllTeams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatAreAnyGamesInProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>
  >,
) {
  return [':format', '/:format/AreAnyGamesInProgress', toValue(args)] as const
}

export function getFormatAreAnyGamesInProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatAreAnyGamesInProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].AreAnyGamesInProgress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatAreAnyGamesInProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatAreAnyGamesInProgressQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAreAnyGamesInProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatAreAnyGamesInProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].AreAnyGamesInProgress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoreSeasonWeekHometeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
    >
  >,
) {
  return [':format', '/:format/BoxScore/:season/:week/:hometeam', toValue(args)] as const
}

export function getFormatBoxScoreSeasonWeekHometeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoreSeasonWeekHometeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScore[':season'][':week'][':hometeam'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoreSeasonWeekHometeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
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
                    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
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
                    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoreSeasonWeekHometeamQueryKey>
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
              (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreSeasonWeekHometeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoreSeasonWeekHometeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScore[':season'][':week'][':hometeam'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoreByScoreIDV3ScoreidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
  >,
) {
  return [':format', '/:format/BoxScoreByScoreIDV3/:scoreid', toValue(args)] as const
}

export function getFormatBoxScoreByScoreIDV3ScoreidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoreByScoreIDV3ScoreidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScoreByScoreIDV3[':scoreid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoreByScoreIDV3Scoreid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoreByScoreIDV3ScoreidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreByScoreIDV3ScoreidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoreByScoreIDV3ScoreidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScoreByScoreIDV3[':scoreid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoreV3SeasonWeekHometeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
    >
  >,
) {
  return [':format', '/:format/BoxScoreV3/:season/:week/:hometeam', toValue(args)] as const
}

export function getFormatBoxScoreV3SeasonWeekHometeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoreV3SeasonWeekHometeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScoreV3[':season'][':week'][':hometeam'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoreV3SeasonWeekHometeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
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
                    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
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
                    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoreV3SeasonWeekHometeamQueryKey>
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
              (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreV3SeasonWeekHometeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoreV3SeasonWeekHometeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScoreV3[':season'][':week'][':hometeam'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoresSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/BoxScores/:season/:week', toValue(args)] as const
}

export function getFormatBoxScoresSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoresSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScores[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoresSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoresSeasonWeekQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoresSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScores[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
    >
  >,
) {
  return [':format', '/:format/BoxScoresDelta/:season/:week/:minutes', toValue(args)] as const
}

export function getFormatBoxScoresDeltaSeasonWeekMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScoresDelta[':season'][':week'][':minutes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoresDeltaSeasonWeekMinutes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
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
                    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
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
                    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey>
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
              (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoresDeltaSeasonWeekMinutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScoresDelta[':season'][':week'][':minutes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/BoxScoresDeltaV3/:season/:week/:playerstoinclude/:minutes',
    toValue(args),
  ] as const
}

export function getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScoresDeltaV3[':season'][':week'][':playerstoinclude'][
          ':minutes'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
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
                    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
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
                    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey>
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
              (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScoresDeltaV3[':season'][':week'][':playerstoinclude'][
            ':minutes'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatByesSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>>,
) {
  return [':format', '/:format/Byes/:season', toValue(args)] as const
}

export function getFormatByesSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatByesSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Byes[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatByesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatByesSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Byes'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatByesSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatByesSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Byes[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatCurrentSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>>,
) {
  return [':format', '/:format/CurrentSeason', toValue(args)] as const
}

export function getFormatCurrentSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatCurrentSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].CurrentSeason.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatCurrentSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatCurrentSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCurrentSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatCurrentSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].CurrentSeason.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatCurrentWeekQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>>,
) {
  return [':format', '/:format/CurrentWeek', toValue(args)] as const
}

export function getFormatCurrentWeekQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatCurrentWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].CurrentWeek.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatCurrentWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatCurrentWeekQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentWeek']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCurrentWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatCurrentWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].CurrentWeek.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDailyFantasyPlayersDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>
  >,
) {
  return [':format', '/:format/DailyFantasyPlayers/:date', toValue(args)] as const
}

export function getFormatDailyFantasyPlayersDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDailyFantasyPlayersDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DailyFantasyPlayers[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDailyFantasyPlayersDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatDailyFantasyPlayersDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDailyFantasyPlayersDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDailyFantasyPlayersDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DailyFantasyPlayers[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDailyFantasyPointsDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>
  >,
) {
  return [':format', '/:format/DailyFantasyPoints/:date', toValue(args)] as const
}

export function getFormatDailyFantasyPointsDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDailyFantasyPointsDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DailyFantasyPoints[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDailyFantasyPointsDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>
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
                  ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatDailyFantasyPointsDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDailyFantasyPointsDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDailyFantasyPointsDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DailyFantasyPoints[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDfsSlatesByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/DfsSlatesByDate/:date', toValue(args)] as const
}

export function getFormatDfsSlatesByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDfsSlatesByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DfsSlatesByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDfsSlatesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDfsSlatesByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DfsSlatesByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDfsSlatesByWeekSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/DfsSlatesByWeek/:season/:week', toValue(args)] as const
}

export function getFormatDfsSlatesByWeekSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDfsSlatesByWeekSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DfsSlatesByWeek[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDfsSlatesByWeekSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
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
                    (typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatDfsSlatesByWeekSeasonWeekQueryKey>
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
            ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByWeekSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDfsSlatesByWeekSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DfsSlatesByWeek[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyDefenseByGameSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/FantasyDefenseByGame/:season/:week', toValue(args)] as const
}

export function getFormatFantasyDefenseByGameSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyDefenseByGameSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyDefenseByGame[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFantasyDefenseByGameSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']>
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
                    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
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
                    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatFantasyDefenseByGameSeasonWeekQueryKey>
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
              (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseByGameSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyDefenseByGameSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyDefenseByGame[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/FantasyDefenseByGameByTeam/:season/:week/:team',
    toValue(args),
  ] as const
}

export function getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyDefenseByGameByTeam[':season'][':week'][':team'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatFantasyDefenseByGameByTeamSeasonWeekTeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey>
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
              (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyDefenseByGameByTeamSeasonWeekTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyDefenseByGameByTeam[':season'][':week'][':team'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyDefenseBySeasonSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
  >,
) {
  return [':format', '/:format/FantasyDefenseBySeason/:season', toValue(args)] as const
}

export function getFormatFantasyDefenseBySeasonSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyDefenseBySeasonSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyDefenseBySeason[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFantasyDefenseBySeasonSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
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
                    (typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']
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
                    (typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatFantasyDefenseBySeasonSeasonQueryKey>
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
            ReturnType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseBySeasonSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyDefenseBySeasonSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyDefenseBySeason[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
    >
  >,
) {
  return [':format', '/:format/FantasyDefenseBySeasonByTeam/:season/:team', toValue(args)] as const
}

export function getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyDefenseBySeasonByTeam[':season'][':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFantasyDefenseBySeasonByTeamSeasonTeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
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
                    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
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
                    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey>
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
              (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyDefenseBySeasonByTeamSeasonTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyDefenseBySeasonByTeam[':season'][':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>>,
) {
  return [':format', '/:format/FantasyPlayers', toValue(args)] as const
}

export function getFormatFantasyPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyPlayers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFantasyPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatFantasyPlayersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['FantasyPlayers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyPlayers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyPlayersIDPQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>,
) {
  return [':format', '/:format/FantasyPlayersIDP', toValue(args)] as const
}

export function getFormatFantasyPlayersIDPQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyPlayersIDPQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyPlayersIDP.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFantasyPlayersIDP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatFantasyPlayersIDPQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyPlayersIDPQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyPlayersIDPQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyPlayersIDP.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFinalBoxScoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>>,
) {
  return [':format', '/:format/FinalBoxScores', toValue(args)] as const
}

export function getFormatFinalBoxScoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFinalBoxScoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FinalBoxScores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFinalBoxScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatFinalBoxScoresQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['FinalBoxScores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFinalBoxScoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFinalBoxScoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FinalBoxScores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFreeAgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>>,
) {
  return [':format', '/:format/FreeAgents', toValue(args)] as const
}

export function getFormatFreeAgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFreeAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FreeAgents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFreeAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatFreeAgentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFreeAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFreeAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FreeAgents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/GameLeagueLeaders/:season/:week/:position/:column',
    toValue(args),
  ] as const
}

export function getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].GameLeagueLeaders[':season'][':week'][':position'][':column'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatGameLeagueLeadersSeasonWeekPositionColumn<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
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
                    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
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
                    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey>
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
              (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatGameLeagueLeadersSeasonWeekPositionColumnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].GameLeagueLeaders[':season'][':week'][':position'][':column'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatGameStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>
  >,
) {
  return [':format', '/:format/GameStats/:season', toValue(args)] as const
}

export function getFormatGameStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatGameStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].GameStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatGameStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatGameStatsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['GameStats'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGameStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatGameStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].GameStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatGameStatsByWeekSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/GameStatsByWeek/:season/:week', toValue(args)] as const
}

export function getFormatGameStatsByWeekSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatGameStatsByWeekSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].GameStatsByWeek[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatGameStatsByWeekSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
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
                    (typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatGameStatsByWeekSeasonWeekQueryKey>
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
            ReturnType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGameStatsByWeekSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatGameStatsByWeekSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].GameStatsByWeek[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatInjuriesSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/Injuries/:season/:week', toValue(args)] as const
}

export function getFormatInjuriesSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatInjuriesSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Injuries[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatInjuriesSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatInjuriesSeasonWeekQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuriesSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatInjuriesSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Injuries[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatInjuriesSeasonWeekTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']>
  >,
) {
  return [':format', '/:format/Injuries/:season/:week/:team', toValue(args)] as const
}

export function getFormatInjuriesSeasonWeekTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatInjuriesSeasonWeekTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Injuries[':season'][':week'][':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatInjuriesSeasonWeekTeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']>
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
                    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatInjuriesSeasonWeekTeamQueryKey>
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
            ReturnType<(typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuriesSeasonWeekTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatInjuriesSeasonWeekTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Injuries[':season'][':week'][':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatLastCompletedSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>
  >,
) {
  return [':format', '/:format/LastCompletedSeason', toValue(args)] as const
}

export function getFormatLastCompletedSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatLastCompletedSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].LastCompletedSeason.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatLastCompletedSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatLastCompletedSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['LastCompletedSeason']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLastCompletedSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatLastCompletedSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].LastCompletedSeason.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatLastCompletedWeekQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>>,
) {
  return [':format', '/:format/LastCompletedWeek', toValue(args)] as const
}

export function getFormatLastCompletedWeekQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatLastCompletedWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].LastCompletedWeek.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatLastCompletedWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatLastCompletedWeekQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['LastCompletedWeek']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLastCompletedWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatLastCompletedWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].LastCompletedWeek.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatLiveBoxScoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>>,
) {
  return [':format', '/:format/LiveBoxScores', toValue(args)] as const
}

export function getFormatLiveBoxScoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatLiveBoxScoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].LiveBoxScores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatLiveBoxScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatLiveBoxScoresQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['LiveBoxScores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLiveBoxScoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatLiveBoxScoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].LiveBoxScores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatNewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['News']['$get']>>,
) {
  return [':format', '/:format/News', toValue(args)] as const
}

export function getFormatNewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['News']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatNewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].News.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['News']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
            >
          >,
          ReturnType<typeof getFormatNewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatNewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].News.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatNewsByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/NewsByDate/:date', toValue(args)] as const
}

export function getFormatNewsByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatNewsByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].NewsByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatNewsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatNewsByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatNewsByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].NewsByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatNewsByPlayerIDPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
  >,
) {
  return [':format', '/:format/NewsByPlayerID/:playerid', toValue(args)] as const
}

export function getFormatNewsByPlayerIDPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatNewsByPlayerIDPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].NewsByPlayerID[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatNewsByPlayerIDPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
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
                  ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatNewsByPlayerIDPlayeridQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByPlayerIDPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatNewsByPlayerIDPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].NewsByPlayerID[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatNewsByTeamTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>
  >,
) {
  return [':format', '/:format/NewsByTeam/:team', toValue(args)] as const
}

export function getFormatNewsByTeamTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatNewsByTeamTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].NewsByTeam[':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatNewsByTeamTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatNewsByTeamTeamQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByTeamTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatNewsByTeamTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].NewsByTeam[':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
) {
  return [':format', '/:format/Player/:playerid', toValue(args)] as const
}

export function getFormatPlayerPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Player[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayerPlayeridQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Player[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameRedZoneInsideFiveStats/:season/:week',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameRedZoneInsideFiveStats[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameRedZoneInsideFiveStatsSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey>
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
              (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameRedZoneInsideFiveStats[':season'][':week'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameRedZoneInsideTenStats/:season/:week',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameRedZoneInsideTenStats[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameRedZoneInsideTenStatsSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey>
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
              (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameRedZoneInsideTenStats[':season'][':week'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerGameRedZoneStats/:season/:week', toValue(args)] as const
}

export function getFormatPlayerGameRedZoneStatsSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameRedZoneStats[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameRedZoneStatsSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey>
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
              (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameRedZoneStatsSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameRedZoneStats[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameStatsByPlayerID/:season/:week/:playerid',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsByPlayerID[':season'][':week'][':playerid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerGameStatsByPlayerIDSeasonWeekPlayerid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey>
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
              (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsByPlayerID[':season'][':week'][':playerid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameStatsBySeason/:season/:playerid/:numberofgames',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsBySeason[':season'][':playerid'][':numberofgames'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgames<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey>
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
              (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsBySeason[':season'][':playerid'][':numberofgames'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerGameStatsByTeam/:season/:week/:team', toValue(args)] as const
}

export function getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsByTeam[':season'][':week'][':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameStatsByTeamSeasonWeekTeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey>
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
              (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameStatsByTeamSeasonWeekTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsByTeam[':season'][':week'][':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsByWeekSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerGameStatsByWeek/:season/:week', toValue(args)] as const
}

export function getFormatPlayerGameStatsByWeekSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameStatsByWeekSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsByWeek[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameStatsByWeekSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsByWeekSeasonWeekQueryKey>
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
              (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByWeekSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameStatsByWeekSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsByWeek[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameStatsByWeekDelta/:season/:week/:minutes',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsByWeekDelta[':season'][':week'][':minutes'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey>
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
              (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsByWeekDelta[':season'][':week'][':minutes'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsDeltaMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
  >,
) {
  return [':format', '/:format/PlayerGameStatsDelta/:minutes', toValue(args)] as const
}

export function getFormatPlayerGameStatsDeltaMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameStatsDeltaMinutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsDelta[':minutes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameStatsDeltaMinutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsDeltaMinutesQueryKey>
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
            ReturnType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsDeltaMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameStatsDeltaMinutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsDelta[':minutes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerOwnershipSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/PlayerOwnership/:season/:week', toValue(args)] as const
}

export function getFormatPlayerOwnershipSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerOwnershipSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerOwnership[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerOwnershipSeasonWeek<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
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
                    (typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerOwnershipSeasonWeekQueryKey>
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
            ReturnType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerOwnershipSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerOwnershipSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerOwnership[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerSeasonRedZoneInsideFiveStats/:season', toValue(args)] as const
}

export function getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonRedZoneInsideFiveStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonRedZoneInsideFiveStatsSeason<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey>
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
              (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonRedZoneInsideFiveStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerSeasonRedZoneInsideTenStats/:season', toValue(args)] as const
}

export function getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonRedZoneInsideTenStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonRedZoneInsideTenStatsSeason<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey>
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
              (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonRedZoneInsideTenStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonRedZoneInsideTenStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonRedZoneStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
  >,
) {
  return [':format', '/:format/PlayerSeasonRedZoneStats/:season', toValue(args)] as const
}

export function getFormatPlayerSeasonRedZoneStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonRedZoneStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonRedZoneStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonRedZoneStatsSeason<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
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
                    (typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonRedZoneStatsSeasonQueryKey>
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
            ReturnType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonRedZoneStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonRedZoneStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonRedZoneStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>
  >,
) {
  return [':format', '/:format/PlayerSeasonStats/:season', toValue(args)] as const
}

export function getFormatPlayerSeasonStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonStatsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerSeasonStatsByPlayerID/:season/:playerid',
    toValue(args),
  ] as const
}

export function getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByPlayerID[':season'][':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonStatsByPlayerIDSeasonPlayerid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey>
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
              (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonStatsByPlayerID[':season'][':playerid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByTeam/:season/:team', toValue(args)] as const
}

export function getFormatPlayerSeasonStatsByTeamSeasonTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByTeam[':season'][':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonStatsByTeamSeasonTeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey>
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
              (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonStatsByTeamSeasonTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonStatsByTeam[':season'][':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonThirdDownStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']>
  >,
) {
  return [':format', '/:format/PlayerSeasonThirdDownStats/:season', toValue(args)] as const
}

export function getFormatPlayerSeasonThirdDownStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonThirdDownStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonThirdDownStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonThirdDownStatsSeason<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']>
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
                    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonThirdDownStatsSeasonQueryKey>
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
            ReturnType<(typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonThirdDownStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonThirdDownStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonThirdDownStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
) {
  return [':format', '/:format/Players', toValue(args)] as const
}

export function getFormatPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayersTeamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>>,
) {
  return [':format', '/:format/Players/:team', toValue(args)] as const
}

export function getFormatPlayersTeamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayersTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Players[':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayersTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayersTeamQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayersTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Players[':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatProBowlersSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>
  >,
) {
  return [':format', '/:format/ProBowlers/:season', toValue(args)] as const
}

export function getFormatProBowlersSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatProBowlersSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].ProBowlers[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatProBowlersSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatProBowlersSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['ProBowlers'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatProBowlersSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatProBowlersSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].ProBowlers[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRecentlyUpdatedBoxScoresMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
  >,
) {
  return [':format', '/:format/RecentlyUpdatedBoxScores/:minutes', toValue(args)] as const
}

export function getFormatRecentlyUpdatedBoxScoresMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRecentlyUpdatedBoxScoresMinutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RecentlyUpdatedBoxScores[':minutes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRecentlyUpdatedBoxScoresMinutes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
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
                    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
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
                    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatRecentlyUpdatedBoxScoresMinutesQueryKey>
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
            ReturnType<(typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRecentlyUpdatedBoxScoresMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRecentlyUpdatedBoxScoresMinutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RecentlyUpdatedBoxScores[':minutes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRookiesSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>
  >,
) {
  return [':format', '/:format/Rookies/:season', toValue(args)] as const
}

export function getFormatRookiesSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRookiesSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Rookies[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRookiesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatRookiesSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Rookies'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRookiesSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRookiesSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Rookies[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatSchedulesSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>
  >,
) {
  return [':format', '/:format/Schedules/:season', toValue(args)] as const
}

export function getFormatSchedulesSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatSchedulesSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Schedules[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatSchedulesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatSchedulesSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Schedules'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSchedulesSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatSchedulesSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Schedules[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatScoresSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>>,
) {
  return [':format', '/:format/Scores/:season', toValue(args)] as const
}

export function getFormatScoresSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatScoresSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Scores[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatScoresSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatScoresSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Scores'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScoresSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatScoresSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Scores[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatScoresByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/ScoresByDate/:date', toValue(args)] as const
}

export function getFormatScoresByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatScoresByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].ScoresByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatScoresByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatScoresByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScoresByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatScoresByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].ScoresByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatScoresByWeekSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/ScoresByWeek/:season/:week', toValue(args)] as const
}

export function getFormatScoresByWeekSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatScoresByWeekSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].ScoresByWeek[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatScoresByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatScoresByWeekSeasonWeekQueryKey>
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
            ReturnType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScoresByWeekSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatScoresByWeekSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].ScoresByWeek[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/SeasonLeagueLeaders/:season/:position/:column',
    toValue(args),
  ] as const
}

export function getFormatSeasonLeagueLeadersSeasonPositionColumnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].SeasonLeagueLeaders[':season'][':position'][':column'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatSeasonLeagueLeadersSeasonPositionColumn<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
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
                    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
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
                    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey>
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
              (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatSeasonLeagueLeadersSeasonPositionColumnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].SeasonLeagueLeaders[':season'][':position'][':column'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatSimulatedBoxScoresV3NumberofplaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']>
  >,
) {
  return [':format', '/:format/SimulatedBoxScoresV3/:numberofplays', toValue(args)] as const
}

export function getFormatSimulatedBoxScoresV3NumberofplaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatSimulatedBoxScoresV3NumberofplaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].SimulatedBoxScoresV3[':numberofplays'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatSimulatedBoxScoresV3Numberofplays<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']>
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
                    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
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
                    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatSimulatedBoxScoresV3NumberofplaysQueryKey>
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
            ReturnType<(typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSimulatedBoxScoresV3NumberofplaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatSimulatedBoxScoresV3NumberofplaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].SimulatedBoxScoresV3[':numberofplays'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatSimulatedScoresNumberofplaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
  >,
) {
  return [':format', '/:format/SimulatedScores/:numberofplays', toValue(args)] as const
}

export function getFormatSimulatedScoresNumberofplaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatSimulatedScoresNumberofplaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].SimulatedScores[':numberofplays'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatSimulatedScoresNumberofplays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
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
                    (typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']
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
                    (typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatSimulatedScoresNumberofplaysQueryKey>
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
            ReturnType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSimulatedScoresNumberofplaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatSimulatedScoresNumberofplaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].SimulatedScores[':numberofplays'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatStadiumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Stadiums']['$get']>>,
) {
  return [':format', '/:format/Stadiums', toValue(args)] as const
}

export function getFormatStadiumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Stadiums']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatStadiumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Stadiums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatStadiums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Stadiums']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatStadiumsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStadiumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatStadiumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Stadiums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatStandingsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>
  >,
) {
  return [':format', '/:format/Standings/:season', toValue(args)] as const
}

export function getFormatStandingsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatStandingsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Standings[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatStandingsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatStandingsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStandingsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatStandingsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Standings[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamGameStatsSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/TeamGameStats/:season/:week', toValue(args)] as const
}

export function getFormatTeamGameStatsSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamGameStatsSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamGameStats[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeamGameStatsSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
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
                    (typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']
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
                    (typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamGameStatsSeasonWeekQueryKey>
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
            ReturnType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamGameStatsSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamGameStats[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/TeamGameStatsBySeason/:season/:teamid/:numberofgames',
    toValue(args),
  ] as const
}

export function getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatTeamGameStatsBySeasonSeasonTeamidNumberofgames<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
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
                    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
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
                    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey>
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
              (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamSeasonStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
  >,
) {
  return [':format', '/:format/TeamSeasonStats/:season', toValue(args)] as const
}

export function getFormatTeamSeasonStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamSeasonStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamSeasonStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeamSeasonStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
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
                  ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamSeasonStatsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamSeasonStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamSeasonStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamSeasonStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams']['$get']>>,
) {
  return [':format', '/:format/Teams', toValue(args)] as const
}

export function getFormatTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
            >
          >,
          ReturnType<typeof getFormatTeamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamsSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>>,
) {
  return [':format', '/:format/Teams/:season', toValue(args)] as const
}

export function getFormatTeamsSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Teams[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeamsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatTeamsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Teams'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Teams[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTimeframesTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>
  >,
) {
  return [':format', '/:format/Timeframes/:type', toValue(args)] as const
}

export function getFormatTimeframesTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTimeframesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Timeframes[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTimeframesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatTimeframesTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Timeframes'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTimeframesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTimeframesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Timeframes[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatUpcomingSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>>,
) {
  return [':format', '/:format/UpcomingSeason', toValue(args)] as const
}

export function getFormatUpcomingSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatUpcomingSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].UpcomingSeason.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatUpcomingSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatUpcomingSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['UpcomingSeason']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatUpcomingSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].UpcomingSeason.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatUpcomingWeekQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>>,
) {
  return [':format', '/:format/UpcomingWeek', toValue(args)] as const
}

export function getFormatUpcomingWeekQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatUpcomingWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].UpcomingWeek.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatUpcomingWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatUpcomingWeekQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['UpcomingWeek']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatUpcomingWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].UpcomingWeek.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
