import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
  >,
) {
  return [':format', '/:format/DfsSlateOwnershipProjectionsBySlateID/:slateId', args] as const
}

export function getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey>
  >({
    queryKey: getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].DfsSlateOwnershipProjectionsBySlateID[':slateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatDfsSlateOwnershipProjectionsBySlateIDSlateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
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
                    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey>
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
      ...getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getFormatDfsSlatesByWeekSeasonWeekQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseProjectionsByGame/:season/:week', args] as const
}

export function getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey>
  >({
    queryKey: getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyDefenseProjectionsByGame[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyDefenseProjectionsByGameSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
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
                    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey>
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
      ...getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseProjectionsBySeason/:season', args] as const
}

export function getFormatFantasyDefenseProjectionsBySeasonSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey>
  >({
    queryKey: getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].FantasyDefenseProjectionsBySeason[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatFantasyDefenseProjectionsBySeasonSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
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
                    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey>
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
      ...getFormatFantasyDefenseProjectionsBySeasonSeasonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
) {
  return [
    ':format',
    '/:format/IdpPlayerGameProjectionStatsByPlayerID/:season/:week/:playerid',
    args,
  ] as const
}

export function getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey>
  >({
    queryKey: getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].IdpPlayerGameProjectionStatsByPlayerID[':season'][':week'][
          ':playerid'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey
          >
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
      ...getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
) {
  return [
    ':format',
    '/:format/IdpPlayerGameProjectionStatsByTeam/:season/:week/:team',
    args,
  ] as const
}

export function getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
  >({
    queryKey: getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].IdpPlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
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
      ...getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/IdpPlayerGameProjectionStatsByWeek/:season/:week', args] as const
}

export function getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].IdpPlayerGameProjectionStatsByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatIdpPlayerGameProjectionStatsByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
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
      ...getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
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

export function getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameProjectionStatsByPlayerID/:season/:week/:playerid',
    args,
  ] as const
}

export function getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey>
  >({
    queryKey: getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByPlayerID[':season'][':week'][':playerid'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey>
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
      ...getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameProjectionStatsByTeam/:season/:week/:team', args] as const
}

export function getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
  >({
    queryKey: getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameProjectionStatsByTeamSeasonWeekTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
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
      ...getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameProjectionStatsByWeek/:season/:week', args] as const
}

export function getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
  >({
    queryKey: getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByWeek[':season'][':week'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameProjectionStatsByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
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
      ...getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonProjectionStatsSeasonQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonProjectionStats/:season', args] as const
}

export function getFormatPlayerSeasonProjectionStatsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonProjectionStatsSeasonQueryKey>
  >({
    queryKey: getFormatPlayerSeasonProjectionStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonProjectionStats[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonProjectionStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayerSeasonProjectionStatsSeasonQueryKey>
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
      ...getFormatPlayerSeasonProjectionStatsSeasonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
  >,
) {
  return [
    ':format',
    '/:format/PlayerSeasonProjectionStatsByPlayerID/:season/:playerid',
    args,
  ] as const
}

export function getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey>
  >({
    queryKey: getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonProjectionStatsByPlayerID[':season'][':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey>
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
      ...getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonProjectionStatsByTeam/:season/:team', args] as const
}

export function getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey>
  >({
    queryKey: getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonProjectionStatsByTeam[':season'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonProjectionStatsByTeamSeasonTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey>
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
      ...getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
  >,
) {
  return [':format', '/:format/UpcomingDfsSlateOwnershipProjections', args] as const
}

export function getFormatUpcomingDfsSlateOwnershipProjectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey>
  >({
    queryKey: getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].UpcomingDfsSlateOwnershipProjections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatUpcomingDfsSlateOwnershipProjections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
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
                    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey>
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
      ...getFormatUpcomingDfsSlateOwnershipProjectionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
