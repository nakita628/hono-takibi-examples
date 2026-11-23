import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getFormatAreAnyGamesInProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
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
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getFormatCurrentSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatCurrentSeasonDetailsQueryKey(
  args: InferRequestType<(typeof client)[':format']['CurrentSeasonDetails']['$get']>,
) {
  return [':format', '/:format/CurrentSeasonDetails', args] as const
}

export function getFormatCurrentSeasonDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['CurrentSeasonDetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonDetails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCurrentSeasonDetailsQueryKey>
  >({
    queryKey: getFormatCurrentSeasonDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].CurrentSeasonDetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCurrentSeasonDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['CurrentSeasonDetails']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonDetails']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatCurrentSeasonDetailsQueryKey>
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
      ...getFormatCurrentSeasonDetailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatCurrentSeasonTypeQueryKey(
  args: InferRequestType<(typeof client)[':format']['CurrentSeasonType']['$get']>,
) {
  return [':format', '/:format/CurrentSeasonType', args] as const
}

export function getFormatCurrentSeasonTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['CurrentSeasonType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCurrentSeasonTypeQueryKey>
  >({
    queryKey: getFormatCurrentSeasonTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].CurrentSeasonType.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCurrentSeasonType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['CurrentSeasonType']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentSeasonType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatCurrentSeasonTypeQueryKey>
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
      ...getFormatCurrentSeasonTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
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
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getFormatCurrentWeekQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatGamesSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>,
) {
  return [':format', '/:format/Games/:season', args] as const
}

export function getFormatGamesSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGamesSeasonQueryKey>
  >({
    queryKey: getFormatGamesSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Games[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatGamesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatGamesSeasonQueryKey>
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
    return { ...getFormatGamesSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatGamesByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
) {
  return [':format', '/:format/GamesByDate/:date', args] as const
}

export function getFormatGamesByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGamesByDateDateQueryKey>
  >({
    queryKey: getFormatGamesByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].GamesByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatGamesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatGamesByDateDateQueryKey>
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
      ...getFormatGamesByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatGamesByWeekSeasonWeekQueryKey(
  args: InferRequestType<(typeof client)[':format']['GamesByWeek'][':season'][':week']['$get']>,
) {
  return [':format', '/:format/GamesByWeek/:season/:week', args] as const
}

export function getFormatGamesByWeekSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByWeek'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['GamesByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['GamesByWeek'][':season'][':week']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGamesByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatGamesByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].GamesByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatGamesByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByWeek'][':season'][':week']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['GamesByWeek'][':season'][':week']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['GamesByWeek'][':season'][':week']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatGamesByWeekSeasonWeekQueryKey>
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
      ...getFormatGamesByWeekSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatInjuredPlayersQueryKey(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
) {
  return [':format', '/:format/InjuredPlayers', args] as const
}

export function getFormatInjuredPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuredPlayersQueryKey>
  >({
    queryKey: getFormatInjuredPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].InjuredPlayers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatInjuredPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatInjuredPlayersQueryKey>
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
      ...getFormatInjuredPlayersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatLeagueHierarchyQueryKey(
  args: InferRequestType<(typeof client)[':format']['LeagueHierarchy']['$get']>,
) {
  return [':format', '/:format/LeagueHierarchy', args] as const
}

export function getFormatLeagueHierarchyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LeagueHierarchy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['LeagueHierarchy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['LeagueHierarchy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatLeagueHierarchyQueryKey>
  >({
    queryKey: getFormatLeagueHierarchyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].LeagueHierarchy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatLeagueHierarchy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['LeagueHierarchy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['LeagueHierarchy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['LeagueHierarchy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatLeagueHierarchyQueryKey>
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
      ...getFormatLeagueHierarchyQueryOptions<TData, TError>(args(), clientOptions),
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getFormatPlayerPlayeridQueryOptions<TData, TError>(args(), clientOptions),
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayersQueryKey>
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
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getFormatPlayersTeamQueryOptions<TData, TError>(args(), clientOptions), ...query }
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
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getFormatStadiumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamGameStatsByWeekSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsByWeek'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/TeamGameStatsByWeek/:season/:week', args] as const
}

export function getFormatTeamGameStatsByWeekSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['TeamGameStatsByWeek'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsByWeek'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['TeamGameStatsByWeek'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatTeamGameStatsByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].TeamGameStatsByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTeamGameStatsByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['TeamGameStatsByWeek'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['TeamGameStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['TeamGameStatsByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatTeamGameStatsByWeekSeasonWeekQueryKey>
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
      ...getFormatTeamGameStatsByWeekSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
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
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getFormatTeamSeasonStatsSeasonQueryKey>
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatTeamsQueryKey>
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
    return { ...getFormatTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
