import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
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

export function getGetFormatPlayerGameProjectionStatsByDateDateKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameProjectionStatsByDate/:date', args] as const
}

export function useGetFormatPlayerGameProjectionStatsByDateDate<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
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
        ? getGetFormatPlayerGameProjectionStatsByDateDateKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
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
          client[':format'].PlayerGameProjectionStatsByDate[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameProjectionStatsByDateDate<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
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
        ? getGetFormatPlayerGameProjectionStatsByDateDateKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
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
          client[':format'].PlayerGameProjectionStatsByDate[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayerGameProjectionStatsByPlayerDatePlayeridKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameProjectionStatsByPlayer/:date/:playerid', args] as const
}

export function useGetFormatPlayerGameProjectionStatsByPlayerDatePlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
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
        ? getGetFormatPlayerGameProjectionStatsByPlayerDatePlayeridKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
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
          client[':format'].PlayerGameProjectionStatsByPlayer[':date'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayerGameProjectionStatsByPlayerDatePlayerid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
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
        ? getGetFormatPlayerGameProjectionStatsByPlayerDatePlayeridKey(args)
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
                (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
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
          client[':format'].PlayerGameProjectionStatsByPlayer[':date'][':playerid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatStartingGoaltendersByDateDateKey(
  args: InferRequestType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>,
) {
  return [':format', '/:format/StartingGoaltendersByDate/:date', args] as const
}

export function useGetFormatStartingGoaltendersByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>
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
        ? getGetFormatStartingGoaltendersByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].StartingGoaltendersByDate[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatStartingGoaltendersByDateDate<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>
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
        ? getGetFormatStartingGoaltendersByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].StartingGoaltendersByDate[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
