import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatActiveMembershipsQueryKey(
  args: InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>,
) {
  return [':format', '/:format/ActiveMemberships', args] as const
}

export function getFormatActiveMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatActiveMembershipsQueryKey>
  >({
    queryKey: getFormatActiveMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].ActiveMemberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatActiveMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatActiveMembershipsQueryKey>
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
      ...getFormatActiveMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatAreasQueryKey(
  args: InferRequestType<(typeof client)[':format']['Areas']['$get']>,
) {
  return [':format', '/:format/Areas', args] as const
}

export function getFormatAreasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAreasQueryKey>
  >({
    queryKey: getFormatAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Areas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Areas']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatAreasQueryKey>
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
    return { ...getFormatAreasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatBoxScoreGameidQueryKey(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
) {
  return [':format', '/:format/BoxScore/:gameid', args] as const
}

export function getFormatBoxScoreGameidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreGameidQueryKey>
  >({
    queryKey: getFormatBoxScoreGameidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScore[':gameid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoreGameid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatBoxScoreGameidQueryKey>
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
      ...getFormatBoxScoreGameidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoresDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
) {
  return [':format', '/:format/BoxScores/:date', args] as const
}

export function getFormatBoxScoresDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDateQueryKey>
  >({
    queryKey: getFormatBoxScoresDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScores[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoresDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatBoxScoresDateQueryKey>
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
    return { ...getFormatBoxScoresDateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatCompetitionDetailsCompetitionidQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']
  >,
) {
  return [':format', '/:format/CompetitionDetails/:competitionid', args] as const
}

export function getFormatCompetitionDetailsCompetitionidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionDetailsCompetitionidQueryKey>
  >({
    queryKey: getFormatCompetitionDetailsCompetitionidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].CompetitionDetails[':competitionid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCompetitionDetailsCompetitionid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']
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
                    (typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatCompetitionDetailsCompetitionidQueryKey>
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
      ...getFormatCompetitionDetailsCompetitionidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatCompetitionsQueryKey(
  args: InferRequestType<(typeof client)[':format']['Competitions']['$get']>,
) {
  return [':format', '/:format/Competitions', args] as const
}

export function getFormatCompetitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Competitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionsQueryKey>
  >({
    queryKey: getFormatCompetitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Competitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCompetitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Competitions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatCompetitionsQueryKey>
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
    return { ...getFormatCompetitionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
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

export function getFormatHistoricalMembershipsQueryKey(
  args: InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>,
) {
  return [':format', '/:format/HistoricalMemberships', args] as const
}

export function getFormatHistoricalMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsQueryKey>
  >({
    queryKey: getFormatHistoricalMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].HistoricalMemberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatHistoricalMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatHistoricalMembershipsQueryKey>
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
      ...getFormatHistoricalMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatHistoricalMembershipsByTeamTeamidQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
  >,
) {
  return [':format', '/:format/HistoricalMembershipsByTeam/:teamid', args] as const
}

export function getFormatHistoricalMembershipsByTeamTeamidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsByTeamTeamidQueryKey>
  >({
    queryKey: getFormatHistoricalMembershipsByTeamTeamidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].HistoricalMembershipsByTeam[':teamid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatHistoricalMembershipsByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
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
                    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatHistoricalMembershipsByTeamTeamidQueryKey>
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
      ...getFormatHistoricalMembershipsByTeamTeamidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatMembershipsByTeamTeamidQueryKey(
  args: InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>,
) {
  return [':format', '/:format/MembershipsByTeam/:teamid', args] as const
}

export function getFormatMembershipsByTeamTeamidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatMembershipsByTeamTeamidQueryKey>
  >({
    queryKey: getFormatMembershipsByTeamTeamidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].MembershipsByTeam[':teamid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatMembershipsByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatMembershipsByTeamTeamidQueryKey>
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
      ...getFormatMembershipsByTeamTeamidQueryOptions<TData, TError>(args(), clientOptions),
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

export function getFormatPlayersByTeamTeamidQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>,
) {
  return [':format', '/:format/PlayersByTeam/:teamid', args] as const
}

export function getFormatPlayersByTeamTeamidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersByTeamTeamidQueryKey>
  >({
    queryKey: getFormatPlayersByTeamTeamidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayersByTeam[':teamid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayersByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatPlayersByTeamTeamidQueryKey>
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
      ...getFormatPlayersByTeamTeamidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatScheduleRoundidQueryKey(
  args: InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>,
) {
  return [':format', '/:format/Schedule/:roundid', args] as const
}

export function getFormatScheduleRoundidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScheduleRoundidQueryKey>
  >({
    queryKey: getFormatScheduleRoundidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Schedule[':roundid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatScheduleRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatScheduleRoundidQueryKey>
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
      ...getFormatScheduleRoundidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatSeasonTeamsSeasonidQueryKey(
  args: InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>,
) {
  return [':format', '/:format/SeasonTeams/:seasonid', args] as const
}

export function getFormatSeasonTeamsSeasonidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSeasonTeamsSeasonidQueryKey>
  >({
    queryKey: getFormatSeasonTeamsSeasonidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].SeasonTeams[':seasonid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatSeasonTeamsSeasonid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatSeasonTeamsSeasonidQueryKey>
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
      ...getFormatSeasonTeamsSeasonidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatStandingsRoundidQueryKey(
  args: InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>,
) {
  return [':format', '/:format/Standings/:roundid', args] as const
}

export function getFormatStandingsRoundidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStandingsRoundidQueryKey>
  >({
    queryKey: getFormatStandingsRoundidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Standings[':roundid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatStandingsRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatStandingsRoundidQueryKey>
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
      ...getFormatStandingsRoundidQueryOptions<TData, TError>(args(), clientOptions),
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

export function getFormatVenuesQueryKey(
  args: InferRequestType<(typeof client)[':format']['Venues']['$get']>,
) {
  return [':format', '/:format/Venues', args] as const
}

export function getFormatVenuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Venues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatVenuesQueryKey>
  >({
    queryKey: getFormatVenuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Venues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatVenues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Venues']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormatVenuesQueryKey>
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
    return { ...getFormatVenuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
