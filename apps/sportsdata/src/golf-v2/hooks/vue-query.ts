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

export function getFormatDfsSlatesByTournamentTournamentidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']>
  >,
) {
  return [':format', '/:format/DfsSlatesByTournament/:tournamentid', toValue(args)] as const
}

export function getFormatDfsSlatesByTournamentTournamentidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDfsSlatesByTournamentTournamentidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DfsSlatesByTournament[':tournamentid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDfsSlatesByTournamentTournamentid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']>
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
                    (typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']
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
                    (typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatDfsSlatesByTournamentTournamentidQueryKey>
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
            ReturnType<(typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByTournamentTournamentidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDfsSlatesByTournamentTournamentidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DfsSlatesByTournament[':tournamentid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatInjuriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Injuries']['$get']>>,
) {
  return [':format', '/:format/Injuries', toValue(args)] as const
}

export function getFormatInjuriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Injuries']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatInjuriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Injuries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatInjuries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Injuries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Injuries']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Injuries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Injuries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatInjuriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Injuries']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatInjuriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Injuries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatInjuriesByHistoricalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['InjuriesByHistorical']['$get']>
  >,
) {
  return [':format', '/:format/InjuriesByHistorical', toValue(args)] as const
}

export function getFormatInjuriesByHistoricalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['InjuriesByHistorical']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatInjuriesByHistoricalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].InjuriesByHistorical.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatInjuriesByHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['InjuriesByHistorical']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['InjuriesByHistorical']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['InjuriesByHistorical']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['InjuriesByHistorical']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatInjuriesByHistoricalQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['InjuriesByHistorical']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuriesByHistoricalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatInjuriesByHistoricalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].InjuriesByHistorical.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatLeaderboardTournamentidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>
  >,
) {
  return [':format', '/:format/Leaderboard/:tournamentid', toValue(args)] as const
}

export function getFormatLeaderboardTournamentidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatLeaderboardTournamentidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Leaderboard[':tournamentid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatLeaderboardTournamentid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>
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
                  ReturnType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatLeaderboardTournamentidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLeaderboardTournamentidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatLeaderboardTournamentidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Leaderboard[':tournamentid'].$get(toValue(args), {
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

export function getFormatPlayerTournamentProjectionStatsTournamentidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerTournamentProjectionStats/:tournamentid',
    toValue(args),
  ] as const
}

export function getFormatPlayerTournamentProjectionStatsTournamentidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerTournamentProjectionStatsTournamentidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerTournamentProjectionStats[':tournamentid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerTournamentProjectionStatsTournamentid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
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
                    (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
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
                    (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerTournamentProjectionStatsTournamentidQueryKey>
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
              (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerTournamentProjectionStatsTournamentidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerTournamentProjectionStatsTournamentidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerTournamentProjectionStats[':tournamentid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerTournamentStatsByPlayer/:tournamentid/:playerid',
    toValue(args),
  ] as const
}

export function getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerTournamentStatsByPlayer[':tournamentid'][':playerid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerTournamentStatsByPlayerTournamentidPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridQueryKey>
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
              (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerTournamentStatsByPlayer[':tournamentid'][':playerid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
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

export function getFormatTournamentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Tournaments']['$get']>>,
) {
  return [':format', '/:format/Tournaments', toValue(args)] as const
}

export function getFormatTournamentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Tournaments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTournamentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Tournaments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Tournaments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Tournaments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Tournaments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Tournaments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatTournamentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Tournaments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTournamentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTournamentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Tournaments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTournamentsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Tournaments'][':season']['$get']>
  >,
) {
  return [':format', '/:format/Tournaments/:season', toValue(args)] as const
}

export function getFormatTournamentsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Tournaments'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTournamentsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Tournaments[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTournamentsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Tournaments'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Tournaments'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Tournaments'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Tournaments'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatTournamentsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Tournaments'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTournamentsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTournamentsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Tournaments[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
