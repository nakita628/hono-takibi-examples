import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getGetFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdKey(
  args: InferRequestType<
    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
  >,
) {
  return [':format', '/:format/DfsSlateOwnershipProjectionsBySlateID/:slateId', args] as const
}

export function useGetFormatDfsSlateOwnershipProjectionsBySlateIDSlateId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdKey(args)
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
                (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
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
          client[':format'].DfsSlateOwnershipProjectionsBySlateID[':slateId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatDfsSlateOwnershipProjectionsBySlateIDSlateId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdKey(args)
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
                (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
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
          client[':format'].DfsSlateOwnershipProjectionsBySlateID[':slateId'].$get(
            args,
            clientOptions,
          ),
        ),
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

export function getGetFormatFantasyDefenseProjectionsByGameSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseProjectionsByGame/:season/:week', args] as const
}

export function useGetFormatFantasyDefenseProjectionsByGameSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatFantasyDefenseProjectionsByGameSeasonWeekKey(args)
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
                (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
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
          client[':format'].FantasyDefenseProjectionsByGame[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyDefenseProjectionsByGameSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatFantasyDefenseProjectionsByGameSeasonWeekKey(args)
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
                (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
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
          client[':format'].FantasyDefenseProjectionsByGame[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatFantasyDefenseProjectionsBySeasonSeasonKey(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
  >,
) {
  return [':format', '/:format/FantasyDefenseProjectionsBySeason/:season', args] as const
}

export function useGetFormatFantasyDefenseProjectionsBySeasonSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatFantasyDefenseProjectionsBySeasonSeasonKey(args)
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
                (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
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
          client[':format'].FantasyDefenseProjectionsBySeason[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatFantasyDefenseProjectionsBySeasonSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatFantasyDefenseProjectionsBySeasonSeasonKey(args)
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
                (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
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
          client[':format'].FantasyDefenseProjectionsBySeason[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridKey(
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

export function useGetFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridKey(args)
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
                (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
          client[':format'].IdpPlayerGameProjectionStatsByPlayerID[':season'][':week'][
            ':playerid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridKey(args)
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
                (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
          client[':format'].IdpPlayerGameProjectionStatsByPlayerID[':season'][':week'][
            ':playerid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamKey(
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

export function useGetFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].IdpPlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeam<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].IdpPlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/IdpPlayerGameProjectionStatsByWeek/:season/:week', args] as const
}

export function useGetFormatIdpPlayerGameProjectionStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekKey(args)
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
                (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
          client[':format'].IdpPlayerGameProjectionStatsByWeek[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatIdpPlayerGameProjectionStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekKey(args)
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
                (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
          client[':format'].IdpPlayerGameProjectionStatsByWeek[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatInjuredPlayersKey(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
) {
  return [':format', '/:format/InjuredPlayers', args] as const
}

export function useGetFormatInjuredPlayers<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
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
        ? getGetFormatInjuredPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].InjuredPlayers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatInjuredPlayers<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
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
        ? getGetFormatInjuredPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].InjuredPlayers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridKey(
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

export function useGetFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
          client[':format'].PlayerGameProjectionStatsByPlayerID[':season'][':week'][
            ':playerid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
          client[':format'].PlayerGameProjectionStatsByPlayerID[':season'][':week'][
            ':playerid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameProjectionStatsByTeam/:season/:week/:team', args] as const
}

export function useGetFormatPlayerGameProjectionStatsByTeamSeasonWeekTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].PlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameProjectionStatsByTeamSeasonWeekTeam<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
          client[':format'].PlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameProjectionStatsByWeekSeasonWeekKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameProjectionStatsByWeek/:season/:week', args] as const
}

export function useGetFormatPlayerGameProjectionStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerGameProjectionStatsByWeekSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
          client[':format'].PlayerGameProjectionStatsByWeek[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameProjectionStatsByWeekSeasonWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerGameProjectionStatsByWeekSeasonWeekKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
          client[':format'].PlayerGameProjectionStatsByWeek[':season'][':week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonProjectionStatsSeasonKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonProjectionStats/:season', args] as const
}

export function useGetFormatPlayerSeasonProjectionStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerSeasonProjectionStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
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
          client[':format'].PlayerSeasonProjectionStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonProjectionStatsSeason<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerSeasonProjectionStatsSeasonKey(args)
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
                (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
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
          client[':format'].PlayerSeasonProjectionStats[':season'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridKey(
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

export function useGetFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridKey(args)
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
                (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
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
          client[':format'].PlayerSeasonProjectionStatsByPlayerID[':season'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayerid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridKey(args)
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
                (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
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
          client[':format'].PlayerSeasonProjectionStatsByPlayerID[':season'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerSeasonProjectionStatsByTeamSeasonTeamKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonProjectionStatsByTeam/:season/:team', args] as const
}

export function useGetFormatPlayerSeasonProjectionStatsByTeamSeasonTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerSeasonProjectionStatsByTeamSeasonTeamKey(args)
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
                (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
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
          client[':format'].PlayerSeasonProjectionStatsByTeam[':season'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerSeasonProjectionStatsByTeamSeasonTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFormatPlayerSeasonProjectionStatsByTeamSeasonTeamKey(args)
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
                (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
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
          client[':format'].PlayerSeasonProjectionStatsByTeam[':season'][':team'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatUpcomingDfsSlateOwnershipProjectionsKey(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
  >,
) {
  return [':format', '/:format/UpcomingDfsSlateOwnershipProjections', args] as const
}

export function useGetFormatUpcomingDfsSlateOwnershipProjections<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
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
        ? getGetFormatUpcomingDfsSlateOwnershipProjectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].UpcomingDfsSlateOwnershipProjections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatUpcomingDfsSlateOwnershipProjections<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
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
        ? getGetFormatUpcomingDfsSlateOwnershipProjectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].UpcomingDfsSlateOwnershipProjections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
