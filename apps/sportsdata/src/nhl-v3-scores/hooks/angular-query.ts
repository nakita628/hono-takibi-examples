import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
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

export function injectFormatAllTeams<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatAllTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatAreAnyGamesInProgress<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatAreAnyGamesInProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFormatCurrentSeason<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatCurrentSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatFreeAgents<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatFreeAgentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatGamesSeason<
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
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatGamesSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatGamesByDateDate<
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
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatGamesByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFormatNews<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatNewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatNewsByDateDate<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatNewsByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFormatNewsByPlayerIDPlayerid<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatNewsByPlayerIDPlayeridQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFormatPlayerPlayerid<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatPlayerPlayeridQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFormatPlayers<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatPlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatPlayersTeam<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatPlayersTeamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatStadiums<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatStadiumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFormatStandingsSeason<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatStandingsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFormatTeamGameStatsByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
) {
  return [':format', '/:format/TeamGameStatsByDate/:date', args] as const
}

export function getFormatTeamGameStatsByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
  >({
    queryKey: getFormatTeamGameStatsByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].TeamGameStatsByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFormatTeamGameStatsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatTeamGameStatsByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFormatTeamGameStatsBySeasonSeasonTeamidNumberofgames<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectFormatTeamSeasonStatsSeason<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatTeamSeasonStatsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFormatTeamsQueryKey(
  args: InferRequestType<(typeof client)[':format']['teams']['$get']>,
) {
  return [':format', '/:format/teams', args] as const
}

export function getFormatTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsQueryKey>
  >({
    queryKey: getFormatTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFormatTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
