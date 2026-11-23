import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAntichessKey() {
  return ['antichess'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getAtomicKey() {
  return ['atomic'] as const
}

export function getBookmarkKey() {
  return ['bookmark'] as const
}

export function getBroadcastKey() {
  return ['broadcast'] as const
}

export function getGameKey() {
  return ['game'] as const
}

export function getInboxKey() {
  return ['inbox'] as const
}

export function getLichessKey() {
  return ['lichess'] as const
}

export function getMastersKey() {
  return ['masters'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPlayerKey() {
  return ['player'] as const
}

export function getStandardKey() {
  return ['standard'] as const
}

export function getSwissKey() {
  return ['swiss'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getGetApiUsersStatusKey(
  args: InferRequestType<typeof client.api.users.status.$get>,
) {
  return ['api', '/api/users/status', args] as const
}

export function useGetApiUsersStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.users.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsersStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.users.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsersStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPlayerKey() {
  return ['api', '/api/player'] as const
}

export function useGetApiPlayer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPlayerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.player.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPlayer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPlayerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.player.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPlayerTopNbPerfTypeKey(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
) {
  return ['api', '/api/player/top/:nb/:perfType', args] as const
}

export function useGetApiPlayerTopNbPerfType<TError = unknown>(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
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
        ? getGetApiPlayerTopNbPerfTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.player.top[':nb'][':perfType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPlayerTopNbPerfType<TError = unknown>(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
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
        ? getGetApiPlayerTopNbPerfTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.player.top[':nb'][':perfType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernameKey(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
) {
  return ['api', '/api/user/:username', args] as const
}

export function useGetApiUserUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
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
        ? getGetApiUserUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
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
        ? getGetApiUserUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernameRatingHistoryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
) {
  return ['api', '/api/user/:username/rating-history', args] as const
}

export function useGetApiUserUsernameRatingHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
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
        ? getGetApiUserUsernameRatingHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username']['rating-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsernameRatingHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
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
        ? getGetApiUserUsernameRatingHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username']['rating-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernamePerfPerfKey(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
) {
  return ['api', '/api/user/:username/perf/:perf', args] as const
}

export function useGetApiUserUsernamePerfPerf<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
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
        ? getGetApiUserUsernamePerfPerfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username'].perf[':perf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsernamePerfPerf<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
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
        ? getGetApiUserUsernamePerfPerfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username'].perf[':perf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernameActivityKey(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
) {
  return ['api', '/api/user/:username/activity', args] as const
}

export function useGetApiUserUsernameActivity<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
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
        ? getGetApiUserUsernameActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':username'].activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsernameActivity<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
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
        ? getGetApiUserUsernameActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':username'].activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPuzzleDailyKey() {
  return ['api', '/api/puzzle/daily'] as const
}

export function useGetApiPuzzleDaily<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPuzzleDailyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.daily.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPuzzleDaily<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPuzzleDailyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.daily.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPuzzleIdKey(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
) {
  return ['api', '/api/puzzle/:id', args] as const
}

export function useGetApiPuzzleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiPuzzleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPuzzleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiPuzzleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPuzzleNextKey(args: InferRequestType<typeof client.api.puzzle.next.$get>) {
  return ['api', '/api/puzzle/next', args] as const
}

export function useGetApiPuzzleNext<TError = unknown>(
  args: InferRequestType<typeof client.api.puzzle.next.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPuzzleNextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPuzzleNext<TError = unknown>(
  args: InferRequestType<typeof client.api.puzzle.next.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPuzzleNextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPuzzleBatchAngleKey(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
) {
  return ['api', '/api/puzzle/batch/:angle', args] as const
}

export function useGetApiPuzzleBatchAngle<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
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
        ? getGetApiPuzzleBatchAngleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.batch[':angle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPuzzleBatchAngle<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
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
        ? getGetApiPuzzleBatchAngleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.batch[':angle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPuzzleBatchAngleKey() {
  return ['api', '/api/puzzle/batch/:angle', 'POST'] as const
}

export function usePostApiPuzzleBatchAngle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPuzzleBatchAngleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$post']> },
      ) => parseResponse(client.api.puzzle.batch[':angle'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPuzzleActivityKey(
  args: InferRequestType<typeof client.api.puzzle.activity.$get>,
) {
  return ['api', '/api/puzzle/activity', args] as const
}

export function useGetApiPuzzleActivity<TError = unknown>(
  args: InferRequestType<typeof client.api.puzzle.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
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
        ? getGetApiPuzzleActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPuzzleActivity<TError = unknown>(
  args: InferRequestType<typeof client.api.puzzle.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
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
        ? getGetApiPuzzleActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPuzzleReplayDaysThemeKey(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
) {
  return ['api', '/api/puzzle/replay/:days/:theme', args] as const
}

export function useGetApiPuzzleReplayDaysTheme<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
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
        ? getGetApiPuzzleReplayDaysThemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.puzzle.replay[':days'][':theme'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPuzzleReplayDaysTheme<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
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
        ? getGetApiPuzzleReplayDaysThemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.puzzle.replay[':days'][':theme'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPuzzleDashboardDaysKey(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
) {
  return ['api', '/api/puzzle/dashboard/:days', args] as const
}

export function useGetApiPuzzleDashboardDays<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
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
        ? getGetApiPuzzleDashboardDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.dashboard[':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPuzzleDashboardDays<TError = unknown>(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
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
        ? getGetApiPuzzleDashboardDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.puzzle.dashboard[':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiStormDashboardUsernameKey(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
) {
  return ['api', '/api/storm/dashboard/:username', args] as const
}

export function useGetApiStormDashboardUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
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
        ? getGetApiStormDashboardUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.storm.dashboard[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStormDashboardUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
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
        ? getGetApiStormDashboardUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.storm.dashboard[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRacerKey() {
  return ['api', '/api/racer', 'POST'] as const
}

export function usePostApiRacer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.racer.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRacerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.racer.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRacerIdKey(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
) {
  return ['api', '/api/racer/:id', args] as const
}

export function useGetApiRacerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiRacerIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.racer[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRacerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiRacerIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.racer[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUsersKey() {
  return ['api', '/api/users', 'POST'] as const
}

export function usePostApiUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.users.$post> }) =>
        parseResponse(client.api.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountKey() {
  return ['api', '/api/account'] as const
}

export function useGetApiAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAccountEmailKey() {
  return ['api', '/api/account/email'] as const
}

export function useGetApiAccountEmail<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountEmailKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.email.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountEmail<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountEmailKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.email.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAccountPreferencesKey() {
  return ['api', '/api/account/preferences'] as const
}

export function useGetApiAccountPreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAccountPreferencesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountPreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAccountPreferencesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAccountKidKey() {
  return ['api', '/api/account/kid'] as const
}

export function useGetApiAccountKid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountKidKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.kid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountKid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountKidKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.kid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAccountKidKey() {
  return ['api', '/api/account/kid', 'POST'] as const
}

export function usePostApiAccountKid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.account.kid.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAccountKidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.account.kid.$post> }) =>
        parseResponse(client.api.account.kid.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGameExportGameIdKey(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['game', '/game/export/:gameId', keyArgs] as const
}

export function useGetGameExportGameId<TError = unknown>(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
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
        ? getGetGameExportGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.game.export[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGameExportGameId<TError = unknown>(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
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
        ? getGetGameExportGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.game.export[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGameGameIdChatKey(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
) {
  return ['api', '/api/game/:gameId/chat', args] as const
}

export function useGetApiGameGameIdChat<TError = unknown>(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
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
        ? getGetApiGameGameIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.game[':gameId'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGameGameIdChat<TError = unknown>(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
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
        ? getGetApiGameGameIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.game[':gameId'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernameCurrentGameKey(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/:username/current-game', keyArgs] as const
}

export function useGetApiUserUsernameCurrentGame<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
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
        ? getGetApiUserUsernameCurrentGameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username']['current-game'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsernameCurrentGame<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
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
        ? getGetApiUserUsernameCurrentGameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username']['current-game'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGamesUserUsernameKey(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/games/user/:username', keyArgs] as const
}

export function useGetApiGamesUserUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
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
        ? getGetApiGamesUserUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.games.user[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGamesUserUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
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
        ? getGetApiGamesUserUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.games.user[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiGamesExportIdsKey() {
  return ['api', '/api/games/export/_ids', 'POST'] as const
}

export function usePostApiGamesExportIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export._ids.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.games.export._ids.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGamesExportIdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.games.export._ids.$post> },
      ) => parseResponse(client.api.games.export._ids.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiStreamGamesByUsersKey() {
  return ['api', '/api/stream/games-by-users', 'POST'] as const
}

export function usePostApiStreamGamesByUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.stream)['games-by-users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.stream)['games-by-users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStreamGamesByUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.stream)['games-by-users']['$post']> },
      ) => parseResponse(client.api.stream['games-by-users'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiStreamGamesStreamIdKey() {
  return ['api', '/api/stream/games/:streamId', 'POST'] as const
}

export function usePostApiStreamGamesStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.stream.games)[':streamId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.stream.games)[':streamId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStreamGamesStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.stream.games)[':streamId']['$post']> },
      ) => parseResponse(client.api.stream.games[':streamId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiStreamGamesStreamIdAddKey() {
  return ['api', '/api/stream/games/:streamId/add', 'POST'] as const
}

export function usePostApiStreamGamesStreamIdAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.stream.games)[':streamId']['add']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.stream.games)[':streamId']['add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStreamGamesStreamIdAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.stream.games)[':streamId']['add']['$post']> },
      ) => parseResponse(client.api.stream.games[':streamId'].add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountPlayingKey(
  args: InferRequestType<typeof client.api.account.playing.$get>,
) {
  return ['api', '/api/account/playing', args] as const
}

export function useGetApiAccountPlaying<TError = unknown>(
  args: InferRequestType<typeof client.api.account.playing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
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
        ? getGetApiAccountPlayingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.playing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountPlaying<TError = unknown>(
  args: InferRequestType<typeof client.api.account.playing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
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
        ? getGetApiAccountPlayingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account.playing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiStreamGameIdKey(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
) {
  return ['api', '/api/stream/game/:id', args] as const
}

export function useGetApiStreamGameId<TError = unknown>(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
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
        ? getGetApiStreamGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.stream.game[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStreamGameId<TError = unknown>(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
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
        ? getGetApiStreamGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.stream.game[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiImportKey() {
  return ['api', '/api/import', 'POST'] as const
}

export function usePostApiImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.import.$post> }) =>
        parseResponse(client.api.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGamesExportImportsKey() {
  return ['api', '/api/games/export/imports'] as const
}

export function useGetApiGamesExportImports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGamesExportImportsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.games.export.imports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGamesExportImports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGamesExportImportsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.games.export.imports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGamesExportBookmarksKey(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/games/export/bookmarks', keyArgs] as const
}

export function useGetApiGamesExportBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
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
        ? getGetApiGamesExportBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.games.export.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGamesExportBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
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
        ? getGetApiGamesExportBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.games.export.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookmarkGameIdKey() {
  return ['bookmark', '/bookmark/:gameId', 'POST'] as const
}

export function usePostBookmarkGameId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmark)[':gameId']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bookmark)[':gameId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookmarkGameIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookmark)[':gameId']['$post']> },
      ) => parseResponse(client.bookmark[':gameId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionKey() {
  return ['api', '/api/version'] as const
}

export function useGetApiVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTvChannelsKey() {
  return ['api', '/api/tv/channels'] as const
}

export function useGetApiTvChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTvChannelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv.channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTvChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTvChannelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv.channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTvFeedKey() {
  return ['api', '/api/tv/feed'] as const
}

export function useGetApiTvFeed<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTvFeedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv.feed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTvFeed<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTvFeedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv.feed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTvChannelFeedKey(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
) {
  return ['api', '/api/tv/:channel/feed', args] as const
}

export function useGetApiTvChannelFeed<TError = unknown>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
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
        ? getGetApiTvChannelFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv[':channel'].feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTvChannelFeed<TError = unknown>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
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
        ? getGetApiTvChannelFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv[':channel'].feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTvChannelKey(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tv/:channel', keyArgs] as const
}

export function useGetApiTvChannel<TError = unknown>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTvChannelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv[':channel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTvChannel<TError = unknown>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTvChannelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tv[':channel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTournamentKey() {
  return ['api', '/api/tournament'] as const
}

export function useGetApiTournament<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTournamentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTournament<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTournamentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTournamentKey() {
  return ['api', '/api/tournament', 'POST'] as const
}

export function usePostApiTournament<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.tournament.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTournamentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.tournament.$post> }) =>
        parseResponse(client.api.tournament.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTournamentIdKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
) {
  return ['api', '/api/tournament/:id', args] as const
}

export function useGetApiTournamentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
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
        ? getGetApiTournamentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTournamentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
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
        ? getGetApiTournamentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTournamentIdKey() {
  return ['api', '/api/tournament/:id', 'POST'] as const
}

export function usePostApiTournamentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tournament)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTournamentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.tournament)[':id']['$post']> },
      ) => parseResponse(client.api.tournament[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTournamentIdJoinKey() {
  return ['api', '/api/tournament/:id/join', 'POST'] as const
}

export function usePostApiTournamentIdJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['join']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tournament)[':id']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTournamentIdJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.tournament)[':id']['join']['$post']> },
      ) => parseResponse(client.api.tournament[':id'].join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTournamentIdWithdrawKey() {
  return ['api', '/api/tournament/:id/withdraw', 'POST'] as const
}

export function usePostApiTournamentIdWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['withdraw']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tournament)[':id']['withdraw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTournamentIdWithdrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.tournament)[':id']['withdraw']['$post']> },
      ) => parseResponse(client.api.tournament[':id'].withdraw.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTournamentIdTerminateKey() {
  return ['api', '/api/tournament/:id/terminate', 'POST'] as const
}

export function usePostApiTournamentIdTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['terminate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tournament)[':id']['terminate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTournamentIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.tournament)[':id']['terminate']['$post']> },
      ) => parseResponse(client.api.tournament[':id'].terminate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTournamentTeamBattleIdKey() {
  return ['api', '/api/tournament/team-battle/:id', 'POST'] as const
}

export function usePostApiTournamentTeamBattleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)['team-battle'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tournament)['team-battle'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTournamentTeamBattleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.tournament)['team-battle'][':id']['$post']> },
      ) => parseResponse(client.api.tournament['team-battle'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTournamentIdGamesKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tournament/:id/games', keyArgs] as const
}

export function useGetApiTournamentIdGames<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
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
        ? getGetApiTournamentIdGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTournamentIdGames<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
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
        ? getGetApiTournamentIdGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTournamentIdResultsKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
) {
  return ['api', '/api/tournament/:id/results', args] as const
}

export function useGetApiTournamentIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
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
        ? getGetApiTournamentIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTournamentIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
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
        ? getGetApiTournamentIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTournamentIdTeamsKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
) {
  return ['api', '/api/tournament/:id/teams', args] as const
}

export function useGetApiTournamentIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
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
        ? getGetApiTournamentIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTournamentIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
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
        ? getGetApiTournamentIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tournament[':id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernameTournamentCreatedKey(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
) {
  return ['api', '/api/user/:username/tournament/created', args] as const
}

export function useGetApiUserUsernameTournamentCreated<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
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
        ? getGetApiUserUsernameTournamentCreatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username'].tournament.created.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsernameTournamentCreated<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
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
        ? getGetApiUserUsernameTournamentCreatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username'].tournament.created.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernameTournamentPlayedKey(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
) {
  return ['api', '/api/user/:username/tournament/played', args] as const
}

export function useGetApiUserUsernameTournamentPlayed<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
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
        ? getGetApiUserUsernameTournamentPlayedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username'].tournament.played.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsernameTournamentPlayed<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
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
        ? getGetApiUserUsernameTournamentPlayedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user[':username'].tournament.played.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSwissNewTeamIdKey() {
  return ['api', '/api/swiss/new/:teamId', 'POST'] as const
}

export function usePostApiSwissNewTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss.new)[':teamId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.swiss.new)[':teamId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSwissNewTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.swiss.new)[':teamId']['$post']> },
      ) => parseResponse(client.api.swiss.new[':teamId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSwissIdKey(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
) {
  return ['api', '/api/swiss/:id', args] as const
}

export function useGetApiSwissId<TError = unknown>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSwissIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.swiss[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSwissId<TError = unknown>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSwissIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.swiss[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSwissIdEditKey() {
  return ['api', '/api/swiss/:id/edit', 'POST'] as const
}

export function usePostApiSwissIdEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['edit']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.swiss)[':id']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSwissIdEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.swiss)[':id']['edit']['$post']> },
      ) => parseResponse(client.api.swiss[':id'].edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSwissIdScheduleNextRoundKey() {
  return ['api', '/api/swiss/:id/schedule-next-round', 'POST'] as const
}

export function usePostApiSwissIdScheduleNextRound<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSwissIdScheduleNextRoundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>
        },
      ) => parseResponse(client.api.swiss[':id']['schedule-next-round'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSwissIdJoinKey() {
  return ['api', '/api/swiss/:id/join', 'POST'] as const
}

export function usePostApiSwissIdJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['join']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.swiss)[':id']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSwissIdJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.swiss)[':id']['join']['$post']> },
      ) => parseResponse(client.api.swiss[':id'].join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSwissIdWithdrawKey() {
  return ['api', '/api/swiss/:id/withdraw', 'POST'] as const
}

export function usePostApiSwissIdWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.swiss)[':id']['withdraw']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.swiss)[':id']['withdraw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSwissIdWithdrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.swiss)[':id']['withdraw']['$post']> },
      ) => parseResponse(client.api.swiss[':id'].withdraw.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSwissIdTerminateKey() {
  return ['api', '/api/swiss/:id/terminate', 'POST'] as const
}

export function usePostApiSwissIdTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.swiss)[':id']['terminate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.swiss)[':id']['terminate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSwissIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.swiss)[':id']['terminate']['$post']> },
      ) => parseResponse(client.api.swiss[':id'].terminate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSwissIdTrfKey(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
) {
  return ['swiss', '/swiss/:id.trf', args] as const
}

export function useGetSwissIdTrf<TError = unknown>(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSwissIdTrfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.swiss[':id.trf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSwissIdTrf<TError = unknown>(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSwissIdTrfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.swiss[':id.trf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSwissIdGamesKey(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/swiss/:id/games', keyArgs] as const
}

export function useGetApiSwissIdGames<TError = unknown>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>
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
        ? getGetApiSwissIdGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.swiss[':id'].games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSwissIdGames<TError = unknown>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>
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
        ? getGetApiSwissIdGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.swiss[':id'].games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSwissIdResultsKey(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
) {
  return ['api', '/api/swiss/:id/results', args] as const
}

export function useGetApiSwissIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
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
        ? getGetApiSwissIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.swiss[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSwissIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
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
        ? getGetApiSwissIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.swiss[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTeamTeamIdSwissKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
) {
  return ['api', '/api/team/:teamId/swiss', args] as const
}

export function useGetApiTeamTeamIdSwiss<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
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
        ? getGetApiTeamTeamIdSwissKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].swiss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamTeamIdSwiss<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
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
        ? getGetApiTeamTeamIdSwissKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].swiss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiStudyStudyIdChapterIdPgnKey(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
) {
  return ['api', '/api/study/:studyId/:chapterId.pgn', args] as const
}

export function useGetApiStudyStudyIdChapterIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
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
        ? getGetApiStudyStudyIdChapterIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.study[':studyId'][':chapterId.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStudyStudyIdChapterIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
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
        ? getGetApiStudyStudyIdChapterIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.study[':studyId'][':chapterId.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiStudyStudyIdPgnKey(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
) {
  return ['api', '/api/study/:studyId.pgn', args] as const
}

export function useGetApiStudyStudyIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>
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
        ? getGetApiStudyStudyIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.study[':studyId.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStudyStudyIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>
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
        ? getGetApiStudyStudyIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.study[':studyId.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadApiStudyStudyIdPgnKey() {
  return ['api', '/api/study/:studyId.pgn', 'HEAD'] as const
}

export function useHeadApiStudyStudyIdPgn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$head']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.study)[':studyId.pgn']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiStudyStudyIdPgnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$head']> },
      ) => parseResponse(client.api.study[':studyId.pgn'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiStudyKey() {
  return ['api', '/api/study', 'POST'] as const
}

export function usePostApiStudy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.study.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.study.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStudyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.study.$post> }) =>
        parseResponse(client.api.study.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiStudyStudyIdImportPgnKey() {
  return ['api', '/api/study/:studyId/import-pgn', 'POST'] as const
}

export function usePostApiStudyStudyIdImportPgn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStudyStudyIdImportPgnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.study)[':studyId']['import-pgn']['$post']> },
      ) => parseResponse(client.api.study[':studyId']['import-pgn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiStudyStudyIdChapterIdTagsKey() {
  return ['api', '/api/study/:studyId/:chapterId/tags', 'POST'] as const
}

export function usePostApiStudyStudyIdChapterIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.study)[':studyId'][':chapterId']['tags']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStudyStudyIdChapterIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.study)[':studyId'][':chapterId']['tags']['$post']
          >
        },
      ) => parseResponse(client.api.study[':studyId'][':chapterId'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiStudyStudyIdChapterIdMovesKey() {
  return ['api', '/api/study/:studyId/:chapterId/moves', 'POST'] as const
}

export function usePostApiStudyStudyIdChapterIdMoves<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStudyStudyIdChapterIdMovesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']
          >
        },
      ) =>
        parseResponse(client.api.study[':studyId'][':chapterId'].moves.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiStudyByUsernameExportPgnKey(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
) {
  return ['api', '/api/study/by/:username/export.pgn', args] as const
}

export function useGetApiStudyByUsernameExportPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
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
        ? getGetApiStudyByUsernameExportPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.study.by[':username']['export.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStudyByUsernameExportPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
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
        ? getGetApiStudyByUsernameExportPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.study.by[':username']['export.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiStudyByUsernameKey(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
) {
  return ['api', '/api/study/by/:username', args] as const
}

export function useGetApiStudyByUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>
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
        ? getGetApiStudyByUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.study.by[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStudyByUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>
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
        ? getGetApiStudyByUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.study.by[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiStudyStudyIdChapterIdKey() {
  return ['api', '/api/study/:studyId/:chapterId', 'DELETE'] as const
}

export function useDeleteApiStudyStudyIdChapterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiStudyStudyIdChapterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>
        },
      ) => parseResponse(client.api.study[':studyId'][':chapterId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBroadcastKey(args: InferRequestType<typeof client.api.broadcast.$get>) {
  return ['api', '/api/broadcast', args] as const
}

export function useGetApiBroadcast<TError = unknown>(
  args: InferRequestType<typeof client.api.broadcast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBroadcastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcast<TError = unknown>(
  args: InferRequestType<typeof client.api.broadcast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBroadcastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBroadcastTopKey(
  args: InferRequestType<typeof client.api.broadcast.top.$get>,
) {
  return ['api', '/api/broadcast/top', args] as const
}

export function useGetApiBroadcastTop<TError = unknown>(
  args: InferRequestType<typeof client.api.broadcast.top.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
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
        ? getGetApiBroadcastTopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.top.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastTop<TError = unknown>(
  args: InferRequestType<typeof client.api.broadcast.top.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
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
        ? getGetApiBroadcastTopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.top.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBroadcastByUsernameKey(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
) {
  return ['api', '/api/broadcast/by/:username', args] as const
}

export function useGetApiBroadcastByUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
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
        ? getGetApiBroadcastByUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.by[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastByUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
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
        ? getGetApiBroadcastByUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.by[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBroadcastSearchKey(
  args: InferRequestType<typeof client.api.broadcast.search.$get>,
) {
  return ['api', '/api/broadcast/search', args] as const
}

export function useGetApiBroadcastSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.broadcast.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
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
        ? getGetApiBroadcastSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.broadcast.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
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
        ? getGetApiBroadcastSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBroadcastNewKey() {
  return ['broadcast', '/broadcast/new', 'POST'] as const
}

export function usePostBroadcastNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcast.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.broadcast.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.broadcast.new.$post> }) =>
        parseResponse(client.broadcast.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBroadcastBroadcastTournamentIdKey(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
) {
  return ['api', '/api/broadcast/:broadcastTournamentId', args] as const
}

export function useGetApiBroadcastBroadcastTournamentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
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
        ? getGetApiBroadcastBroadcastTournamentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.broadcast[':broadcastTournamentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastBroadcastTournamentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
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
        ? getGetApiBroadcastBroadcastTournamentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.broadcast[':broadcastTournamentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBroadcastBroadcastTournamentIdPlayersKey(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/players', args] as const
}

export function useGetBroadcastBroadcastTournamentIdPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
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
        ? getGetBroadcastBroadcastTournamentIdPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.broadcast[':broadcastTournamentId'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBroadcastBroadcastTournamentIdPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
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
        ? getGetBroadcastBroadcastTournamentIdPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.broadcast[':broadcastTournamentId'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBroadcastBroadcastTournamentIdPlayersPlayerIdKey(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/players/:playerId', args] as const
}

export function useGetBroadcastBroadcastTournamentIdPlayersPlayerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
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
        ? getGetBroadcastBroadcastTournamentIdPlayersPlayerIdKey(args)
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
                (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
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
          client.broadcast[':broadcastTournamentId'].players[':playerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBroadcastBroadcastTournamentIdPlayersPlayerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
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
        ? getGetBroadcastBroadcastTournamentIdPlayersPlayerIdKey(args)
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
                (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
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
          client.broadcast[':broadcastTournamentId'].players[':playerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBroadcastBroadcastTournamentIdTeamsStandingsKey(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/teams/standings', args] as const
}

export function useGetBroadcastBroadcastTournamentIdTeamsStandings<TError = unknown>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
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
        ? getGetBroadcastBroadcastTournamentIdTeamsStandingsKey(args)
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
                (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
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
          client.broadcast[':broadcastTournamentId'].teams.standings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBroadcastBroadcastTournamentIdTeamsStandings<TError = unknown>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
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
        ? getGetBroadcastBroadcastTournamentIdTeamsStandingsKey(args)
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
                (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
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
          client.broadcast[':broadcastTournamentId'].teams.standings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBroadcastBroadcastTournamentIdEditKey() {
  return ['broadcast', '/broadcast/:broadcastTournamentId/edit', 'POST'] as const
}

export function usePostBroadcastBroadcastTournamentIdEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastBroadcastTournamentIdEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']
          >
        },
      ) => parseResponse(client.broadcast[':broadcastTournamentId'].edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBroadcastBroadcastTournamentIdNewKey() {
  return ['broadcast', '/broadcast/:broadcastTournamentId/new', 'POST'] as const
}

export function usePostBroadcastBroadcastTournamentIdNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastBroadcastTournamentIdNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>
        },
      ) => parseResponse(client.broadcast[':broadcastTournamentId'].new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdKey(
  args: InferRequestType<
    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
  >,
) {
  return [
    'api',
    '/api/broadcast/:broadcastTournamentSlug/:broadcastRoundSlug/:broadcastRoundId',
    args,
  ] as const
}

export function useGetApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
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
        ? getGetApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdKey(args)
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
                (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
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
          client.api.broadcast[':broadcastTournamentSlug'][':broadcastRoundSlug'][
            ':broadcastRoundId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
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
        ? getGetApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdKey(args)
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
                (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
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
          client.api.broadcast[':broadcastTournamentSlug'][':broadcastRoundSlug'][
            ':broadcastRoundId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBroadcastRoundBroadcastRoundIdEditKey() {
  return ['broadcast', '/broadcast/round/:broadcastRoundId/edit', 'POST'] as const
}

export function usePostBroadcastRoundBroadcastRoundIdEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastRoundBroadcastRoundIdEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']
          >
        },
      ) =>
        parseResponse(client.broadcast.round[':broadcastRoundId'].edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBroadcastRoundBroadcastRoundIdResetKey() {
  return ['api', '/api/broadcast/round/:broadcastRoundId/reset', 'POST'] as const
}

export function usePostApiBroadcastRoundBroadcastRoundIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBroadcastRoundBroadcastRoundIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.broadcast.round[':broadcastRoundId'].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiBroadcastRoundBroadcastRoundIdPushKey() {
  return ['api', '/api/broadcast/round/:broadcastRoundId/push', 'POST'] as const
}

export function usePostApiBroadcastRoundBroadcastRoundIdPush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBroadcastRoundBroadcastRoundIdPushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.broadcast.round[':broadcastRoundId'].push.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiStreamBroadcastRoundBroadcastRoundIdPgnKey(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
) {
  return ['api', '/api/stream/broadcast/round/:broadcastRoundId.pgn', args] as const
}

export function useGetApiStreamBroadcastRoundBroadcastRoundIdPgn<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
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
        ? getGetApiStreamBroadcastRoundBroadcastRoundIdPgnKey(args)
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
                (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
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
          client.api.stream.broadcast.round[':broadcastRoundId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStreamBroadcastRoundBroadcastRoundIdPgn<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
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
        ? getGetApiStreamBroadcastRoundBroadcastRoundIdPgnKey(args)
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
                (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
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
          client.api.stream.broadcast.round[':broadcastRoundId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStreamBroadcastTourBroadcastTourIdPgnKey(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
) {
  return ['api', '/api/stream/broadcast/tour/:broadcastTourId.pgn', args] as const
}

export function useGetApiStreamBroadcastTourBroadcastTourIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
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
        ? getGetApiStreamBroadcastTourBroadcastTourIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.stream.broadcast.tour[':broadcastTourId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStreamBroadcastTourBroadcastTourIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
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
        ? getGetApiStreamBroadcastTourBroadcastTourIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.stream.broadcast.tour[':broadcastTourId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStreamBroadcastGroupBroadcastGroupIdPgnKey(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
) {
  return ['api', '/api/stream/broadcast/group/:broadcastGroupId.pgn', args] as const
}

export function useGetApiStreamBroadcastGroupBroadcastGroupIdPgn<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
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
        ? getGetApiStreamBroadcastGroupBroadcastGroupIdPgnKey(args)
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
                (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
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
          client.api.stream.broadcast.group[':broadcastGroupId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStreamBroadcastGroupBroadcastGroupIdPgn<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
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
        ? getGetApiStreamBroadcastGroupBroadcastGroupIdPgnKey(args)
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
                (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
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
          client.api.stream.broadcast.group[':broadcastGroupId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiBroadcastRoundBroadcastRoundIdPgnKey(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
) {
  return ['api', '/api/broadcast/round/:broadcastRoundId.pgn', args] as const
}

export function useGetApiBroadcastRoundBroadcastRoundIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
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
        ? getGetApiBroadcastRoundBroadcastRoundIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.broadcast.round[':broadcastRoundId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastRoundBroadcastRoundIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
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
        ? getGetApiBroadcastRoundBroadcastRoundIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.broadcast.round[':broadcastRoundId.pgn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiBroadcastBroadcastTournamentIdPgnKey(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
) {
  return ['api', '/api/broadcast/:broadcastTournamentId.pgn', args] as const
}

export function useGetApiBroadcastBroadcastTournamentIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
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
        ? getGetApiBroadcastBroadcastTournamentIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.broadcast[':broadcastTournamentId.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastBroadcastTournamentIdPgn<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
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
        ? getGetApiBroadcastBroadcastTournamentIdPgnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.broadcast[':broadcastTournamentId.pgn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBroadcastMyRoundsKey(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
) {
  return ['api', '/api/broadcast/my-rounds', args] as const
}

export function useGetApiBroadcastMyRounds<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
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
        ? getGetApiBroadcastMyRoundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast['my-rounds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBroadcastMyRounds<TError = unknown>(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
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
        ? getGetApiBroadcastMyRoundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.broadcast['my-rounds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFidePlayerPlayerIdKey(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
) {
  return ['api', '/api/fide/player/:playerId', args] as const
}

export function useGetApiFidePlayerPlayerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
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
        ? getGetApiFidePlayerPlayerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.fide.player[':playerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFidePlayerPlayerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
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
        ? getGetApiFidePlayerPlayerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.fide.player[':playerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFidePlayerPlayerIdRatingsKey(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
) {
  return ['api', '/api/fide/player/:playerId/ratings', args] as const
}

export function useGetApiFidePlayerPlayerIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
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
        ? getGetApiFidePlayerPlayerIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.fide.player[':playerId'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFidePlayerPlayerIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
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
        ? getGetApiFidePlayerPlayerIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.fide.player[':playerId'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFidePlayerKey(args: InferRequestType<typeof client.api.fide.player.$get>) {
  return ['api', '/api/fide/player', args] as const
}

export function useGetApiFidePlayer<TError = unknown>(
  args: InferRequestType<typeof client.api.fide.player.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFidePlayerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.fide.player.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFidePlayer<TError = unknown>(
  args: InferRequestType<typeof client.api.fide.player.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFidePlayerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.fide.player.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSimulKey() {
  return ['api', '/api/simul'] as const
}

export function useGetApiSimul<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSimulKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.simul.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSimul<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSimulKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.simul.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTeamTeamIdKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
) {
  return ['api', '/api/team/:teamId', args] as const
}

export function useGetApiTeamTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTeamTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTeamTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTeamAllKey(args: InferRequestType<typeof client.api.team.all.$get>) {
  return ['api', '/api/team/all', args] as const
}

export function useGetApiTeamAll<TError = unknown>(
  args: InferRequestType<typeof client.api.team.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTeamAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamAll<TError = unknown>(
  args: InferRequestType<typeof client.api.team.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTeamAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTeamOfUsernameKey(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
) {
  return ['api', '/api/team/of/:username', args] as const
}

export function useGetApiTeamOfUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>
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
        ? getGetApiTeamOfUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team.of[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamOfUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>
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
        ? getGetApiTeamOfUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team.of[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTeamSearchKey(args: InferRequestType<typeof client.api.team.search.$get>) {
  return ['api', '/api/team/search', args] as const
}

export function useGetApiTeamSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.team.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTeamSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.team.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTeamSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTeamTeamIdUsersKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
) {
  return ['api', '/api/team/:teamId/users', args] as const
}

export function useGetApiTeamTeamIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
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
        ? getGetApiTeamTeamIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamTeamIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
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
        ? getGetApiTeamTeamIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTeamTeamIdArenaKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
) {
  return ['api', '/api/team/:teamId/arena', args] as const
}

export function useGetApiTeamTeamIdArena<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
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
        ? getGetApiTeamTeamIdArenaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].arena.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamTeamIdArena<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
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
        ? getGetApiTeamTeamIdArenaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].arena.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamTeamIdJoinKey() {
  return ['team', '/team/:teamId/join', 'POST'] as const
}

export function usePostTeamTeamIdJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamId']['join']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.team)[':teamId']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamTeamIdJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.team)[':teamId']['join']['$post']> },
      ) => parseResponse(client.team[':teamId'].join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamTeamIdQuitKey() {
  return ['team', '/team/:teamId/quit', 'POST'] as const
}

export function usePostTeamTeamIdQuit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamId']['quit']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.team)[':teamId']['quit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamTeamIdQuitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.team)[':teamId']['quit']['$post']> },
      ) => parseResponse(client.team[':teamId'].quit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTeamTeamIdRequestsKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
) {
  return ['api', '/api/team/:teamId/requests', args] as const
}

export function useGetApiTeamTeamIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
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
        ? getGetApiTeamTeamIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTeamTeamIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
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
        ? getGetApiTeamTeamIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.team[':teamId'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTeamTeamIdRequestUserIdAcceptKey() {
  return ['api', '/api/team/:teamId/request/:userId/accept', 'POST'] as const
}

export function usePostApiTeamTeamIdRequestUserIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTeamTeamIdRequestUserIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.team[':teamId'].request[':userId'].accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiTeamTeamIdRequestUserIdDeclineKey() {
  return ['api', '/api/team/:teamId/request/:userId/decline', 'POST'] as const
}

export function usePostApiTeamTeamIdRequestUserIdDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.team)[':teamId']['request'][':userId']['decline']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.team)[':teamId']['request'][':userId']['decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTeamTeamIdRequestUserIdDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.team)[':teamId']['request'][':userId']['decline']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.team[':teamId'].request[':userId'].decline.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiTeamTeamIdKickUserIdKey() {
  return ['api', '/api/team/:teamId/kick/:userId', 'POST'] as const
}

export function usePostApiTeamTeamIdKickUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTeamTeamIdKickUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>
        },
      ) => parseResponse(client.api.team[':teamId'].kick[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamUpdatesKey(args: InferRequestType<typeof client.team.updates.$get>) {
  return ['team', '/team/updates', args] as const
}

export function useGetTeamUpdates<TError = unknown>(
  args: InferRequestType<typeof client.team.updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamUpdates<TError = unknown>(
  args: InferRequestType<typeof client.team.updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamUpdatesTeamIdKey(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
) {
  return ['team', '/team/updates/:teamId', args] as const
}

export function useGetTeamUpdatesTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
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
        ? getGetTeamUpdatesTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.updates[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamUpdatesTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
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
        ? getGetTeamUpdatesTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.updates[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamTeamIdPmAllKey() {
  return ['team', '/team/:teamId/pm-all', 'POST'] as const
}

export function usePostTeamTeamIdPmAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':teamId']['pm-all']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.team)[':teamId']['pm-all']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamTeamIdPmAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.team)[':teamId']['pm-all']['$post']> },
      ) => parseResponse(client.team[':teamId']['pm-all'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiStreamerLiveKey() {
  return ['api', '/api/streamer/live'] as const
}

export function useGetApiStreamerLive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStreamerLiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.streamer.live.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStreamerLive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStreamerLiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.streamer.live.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCrosstableUser1User2Key(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
) {
  return ['api', '/api/crosstable/:user1/:user2', args] as const
}

export function useGetApiCrosstableUser1User2<TError = unknown>(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
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
        ? getGetApiCrosstableUser1User2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.crosstable[':user1'][':user2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCrosstableUser1User2<TError = unknown>(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
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
        ? getGetApiCrosstableUser1User2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.crosstable[':user1'][':user2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPlayerAutocompleteKey(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
) {
  return ['api', '/api/player/autocomplete', args] as const
}

export function useGetApiPlayerAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
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
        ? getGetApiPlayerAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.player.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPlayerAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
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
        ? getGetApiPlayerAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.player.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserUsernameNoteKey(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
) {
  return ['api', '/api/user/:username/note', args] as const
}

export function useGetApiUserUsernameNote<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
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
        ? getGetApiUserUsernameNoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':username'].note.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUsernameNote<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
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
        ? getGetApiUserUsernameNoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':username'].note.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserUsernameNoteKey() {
  return ['api', '/api/user/:username/note', 'POST'] as const
}

export function usePostApiUserUsernameNote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)[':username']['note']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserUsernameNoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)[':username']['note']['$post']> },
      ) => parseResponse(client.api.user[':username'].note.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRelFollowingKey() {
  return ['api', '/api/rel/following'] as const
}

export function useGetApiRelFollowing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRelFollowingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rel.following.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRelFollowing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRelFollowingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rel.following.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRelFollowUsernameKey() {
  return ['api', '/api/rel/follow/:username', 'POST'] as const
}

export function usePostApiRelFollowUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.follow)[':username']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rel.follow)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRelFollowUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.rel.follow)[':username']['$post']> },
      ) => parseResponse(client.api.rel.follow[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRelUnfollowUsernameKey() {
  return ['api', '/api/rel/unfollow/:username', 'POST'] as const
}

export function usePostApiRelUnfollowUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.unfollow)[':username']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rel.unfollow)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRelUnfollowUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.rel.unfollow)[':username']['$post']> },
      ) => parseResponse(client.api.rel.unfollow[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRelBlockUsernameKey() {
  return ['api', '/api/rel/block/:username', 'POST'] as const
}

export function usePostApiRelBlockUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.block)[':username']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rel.block)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRelBlockUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.rel.block)[':username']['$post']> },
      ) => parseResponse(client.api.rel.block[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRelUnblockUsernameKey() {
  return ['api', '/api/rel/unblock/:username', 'POST'] as const
}

export function usePostApiRelUnblockUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.unblock)[':username']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rel.unblock)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRelUnblockUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.rel.unblock)[':username']['$post']> },
      ) => parseResponse(client.api.rel.unblock[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiStreamEventKey() {
  return ['api', '/api/stream/event'] as const
}

export function useGetApiStreamEvent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStreamEventKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.stream.event.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStreamEvent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStreamEventKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.stream.event.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBoardSeekKey() {
  return ['api', '/api/board/seek', 'POST'] as const
}

export function usePostApiBoardSeek<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.board.seek.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.board.seek.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardSeekKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.board.seek.$post> }) =>
        parseResponse(client.api.board.seek.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBoardGameStreamGameIdKey(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
) {
  return ['api', '/api/board/game/stream/:gameId', args] as const
}

export function useGetApiBoardGameStreamGameId<TError = unknown>(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
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
        ? getGetApiBoardGameStreamGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.board.game.stream[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBoardGameStreamGameId<TError = unknown>(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
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
        ? getGetApiBoardGameStreamGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.board.game.stream[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdMoveMoveKey() {
  return ['api', '/api/board/game/:gameId/move/:move', 'POST'] as const
}

export function usePostApiBoardGameGameIdMoveMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdMoveMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>
        },
      ) => parseResponse(client.api.board.game[':gameId'].move[':move'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBoardGameGameIdChatKey(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
) {
  return ['api', '/api/board/game/:gameId/chat', args] as const
}

export function useGetApiBoardGameGameIdChat<TError = unknown>(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
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
        ? getGetApiBoardGameGameIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.board.game[':gameId'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBoardGameGameIdChat<TError = unknown>(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
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
        ? getGetApiBoardGameGameIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.board.game[':gameId'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdChatKey() {
  return ['api', '/api/board/game/:gameId/chat', 'POST'] as const
}

export function usePostApiBoardGameGameIdChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$post']> },
      ) => parseResponse(client.api.board.game[':gameId'].chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdAbortKey() {
  return ['api', '/api/board/game/:gameId/abort', 'POST'] as const
}

export function usePostApiBoardGameGameIdAbort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['abort']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['abort']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdAbortKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.board.game)[':gameId']['abort']['$post']> },
      ) => parseResponse(client.api.board.game[':gameId'].abort.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdResignKey() {
  return ['api', '/api/board/game/:gameId/resign', 'POST'] as const
}

export function usePostApiBoardGameGameIdResign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['resign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['resign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdResignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.board.game)[':gameId']['resign']['$post']> },
      ) => parseResponse(client.api.board.game[':gameId'].resign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdDrawAcceptKey() {
  return ['api', '/api/board/game/:gameId/draw/:accept', 'POST'] as const
}

export function usePostApiBoardGameGameIdDrawAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdDrawAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']
          >
        },
      ) =>
        parseResponse(client.api.board.game[':gameId'].draw[':accept'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdTakebackAcceptKey() {
  return ['api', '/api/board/game/:gameId/takeback/:accept', 'POST'] as const
}

export function usePostApiBoardGameGameIdTakebackAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdTakebackAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.board.game[':gameId'].takeback[':accept'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdClaimVictoryKey() {
  return ['api', '/api/board/game/:gameId/claim-victory', 'POST'] as const
}

export function usePostApiBoardGameGameIdClaimVictory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdClaimVictoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>
        },
      ) =>
        parseResponse(client.api.board.game[':gameId']['claim-victory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdClaimDrawKey() {
  return ['api', '/api/board/game/:gameId/claim-draw', 'POST'] as const
}

export function usePostApiBoardGameGameIdClaimDraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdClaimDrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>
        },
      ) => parseResponse(client.api.board.game[':gameId']['claim-draw'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBoardGameGameIdBerserkKey() {
  return ['api', '/api/board/game/:gameId/berserk', 'POST'] as const
}

export function usePostApiBoardGameGameIdBerserk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBoardGameGameIdBerserkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.board.game)[':gameId']['berserk']['$post']> },
      ) => parseResponse(client.api.board.game[':gameId'].berserk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBotOnlineKey(args: InferRequestType<typeof client.api.bot.online.$get>) {
  return ['api', '/api/bot/online', args] as const
}

export function useGetApiBotOnline<TError = unknown>(
  args: InferRequestType<typeof client.api.bot.online.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBotOnlineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bot.online.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBotOnline<TError = unknown>(
  args: InferRequestType<typeof client.api.bot.online.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBotOnlineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bot.online.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBotAccountUpgradeKey() {
  return ['api', '/api/bot/account/upgrade', 'POST'] as const
}

export function usePostApiBotAccountUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.account.upgrade.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotAccountUpgradeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.bot.account.upgrade.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBotGameStreamGameIdKey(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
) {
  return ['api', '/api/bot/game/stream/:gameId', args] as const
}

export function useGetApiBotGameStreamGameId<TError = unknown>(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
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
        ? getGetApiBotGameStreamGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bot.game.stream[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBotGameStreamGameId<TError = unknown>(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
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
        ? getGetApiBotGameStreamGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bot.game.stream[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBotGameGameIdMoveMoveKey() {
  return ['api', '/api/bot/game/:gameId/move/:move', 'POST'] as const
}

export function usePostApiBotGameGameIdMoveMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdMoveMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>
        },
      ) => parseResponse(client.api.bot.game[':gameId'].move[':move'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBotGameGameIdChatKey(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
) {
  return ['api', '/api/bot/game/:gameId/chat', args] as const
}

export function useGetApiBotGameGameIdChat<TError = unknown>(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
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
        ? getGetApiBotGameGameIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bot.game[':gameId'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBotGameGameIdChat<TError = unknown>(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
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
        ? getGetApiBotGameGameIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bot.game[':gameId'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBotGameGameIdChatKey() {
  return ['api', '/api/bot/game/:gameId/chat', 'POST'] as const
}

export function usePostApiBotGameGameIdChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$post']> },
      ) => parseResponse(client.api.bot.game[':gameId'].chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBotGameGameIdAbortKey() {
  return ['api', '/api/bot/game/:gameId/abort', 'POST'] as const
}

export function usePostApiBotGameGameIdAbort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdAbortKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.bot.game)[':gameId']['abort']['$post']> },
      ) => parseResponse(client.api.bot.game[':gameId'].abort.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBotGameGameIdResignKey() {
  return ['api', '/api/bot/game/:gameId/resign', 'POST'] as const
}

export function usePostApiBotGameGameIdResign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdResignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.bot.game)[':gameId']['resign']['$post']> },
      ) => parseResponse(client.api.bot.game[':gameId'].resign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBotGameGameIdDrawAcceptKey() {
  return ['api', '/api/bot/game/:gameId/draw/:accept', 'POST'] as const
}

export function usePostApiBotGameGameIdDrawAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdDrawAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>
        },
      ) => parseResponse(client.api.bot.game[':gameId'].draw[':accept'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBotGameGameIdTakebackAcceptKey() {
  return ['api', '/api/bot/game/:gameId/takeback/:accept', 'POST'] as const
}

export function usePostApiBotGameGameIdTakebackAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdTakebackAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']
          >
        },
      ) =>
        parseResponse(client.api.bot.game[':gameId'].takeback[':accept'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBotGameGameIdClaimVictoryKey() {
  return ['api', '/api/bot/game/:gameId/claim-victory', 'POST'] as const
}

export function usePostApiBotGameGameIdClaimVictory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdClaimVictoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>
        },
      ) => parseResponse(client.api.bot.game[':gameId']['claim-victory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBotGameGameIdClaimDrawKey() {
  return ['api', '/api/bot/game/:gameId/claim-draw', 'POST'] as const
}

export function usePostApiBotGameGameIdClaimDraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBotGameGameIdClaimDrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>
        },
      ) => parseResponse(client.api.bot.game[':gameId']['claim-draw'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiChallengeKey() {
  return ['api', '/api/challenge'] as const
}

export function useGetApiChallenge<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiChallengeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.challenge.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiChallenge<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiChallengeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.challenge.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiChallengeUsernameKey() {
  return ['api', '/api/challenge/:username', 'POST'] as const
}

export function usePostApiChallengeUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':username']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.challenge)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiChallengeUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.challenge)[':username']['$post']> },
      ) => parseResponse(client.api.challenge[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiChallengeChallengeIdShowKey(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
) {
  return ['api', '/api/challenge/:challengeId/show', args] as const
}

export function useGetApiChallengeChallengeIdShow<TError = unknown>(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
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
        ? getGetApiChallengeChallengeIdShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.challenge[':challengeId'].show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiChallengeChallengeIdShow<TError = unknown>(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
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
        ? getGetApiChallengeChallengeIdShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.challenge[':challengeId'].show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiChallengeChallengeIdAcceptKey() {
  return ['api', '/api/challenge/:challengeId/accept', 'POST'] as const
}

export function usePostApiChallengeChallengeIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiChallengeChallengeIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>
        },
      ) => parseResponse(client.api.challenge[':challengeId'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiChallengeChallengeIdDeclineKey() {
  return ['api', '/api/challenge/:challengeId/decline', 'POST'] as const
}

export function usePostApiChallengeChallengeIdDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiChallengeChallengeIdDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>
        },
      ) => parseResponse(client.api.challenge[':challengeId'].decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiChallengeChallengeIdCancelKey() {
  return ['api', '/api/challenge/:challengeId/cancel', 'POST'] as const
}

export function usePostApiChallengeChallengeIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiChallengeChallengeIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>
        },
      ) => parseResponse(client.api.challenge[':challengeId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiChallengeAiKey() {
  return ['api', '/api/challenge/ai', 'POST'] as const
}

export function usePostApiChallengeAi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.ai.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.challenge.ai.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiChallengeAiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.challenge.ai.$post> }) =>
        parseResponse(client.api.challenge.ai.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiChallengeOpenKey() {
  return ['api', '/api/challenge/open', 'POST'] as const
}

export function usePostApiChallengeOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.open.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.challenge.open.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiChallengeOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.challenge.open.$post> }) =>
        parseResponse(client.api.challenge.open.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiChallengeGameIdStartClocksKey() {
  return ['api', '/api/challenge/:gameId/start-clocks', 'POST'] as const
}

export function usePostApiChallengeGameIdStartClocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiChallengeGameIdStartClocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>
        },
      ) => parseResponse(client.api.challenge[':gameId']['start-clocks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBulkPairingKey() {
  return ['api', '/api/bulk-pairing'] as const
}

export function useGetApiBulkPairing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBulkPairingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['bulk-pairing'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBulkPairing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBulkPairingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['bulk-pairing'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBulkPairingKey() {
  return ['api', '/api/bulk-pairing', 'POST'] as const
}

export function usePostApiBulkPairing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['bulk-pairing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBulkPairingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['bulk-pairing']['$post']> },
      ) => parseResponse(client.api['bulk-pairing'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBulkPairingIdStartClocksKey() {
  return ['api', '/api/bulk-pairing/:id/start-clocks', 'POST'] as const
}

export function usePostApiBulkPairingIdStartClocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBulkPairingIdStartClocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>
        },
      ) =>
        parseResponse(client.api['bulk-pairing'][':id']['start-clocks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBulkPairingIdKey(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
) {
  return ['api', '/api/bulk-pairing/:id', args] as const
}

export function useGetApiBulkPairingId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
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
        ? getGetApiBulkPairingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['bulk-pairing'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBulkPairingId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
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
        ? getGetApiBulkPairingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['bulk-pairing'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiBulkPairingIdKey() {
  return ['api', '/api/bulk-pairing/:id', 'DELETE'] as const
}

export function useDeleteApiBulkPairingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiBulkPairingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$delete']> },
      ) => parseResponse(client.api['bulk-pairing'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBulkPairingIdGamesKey(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/bulk-pairing/:id/games', keyArgs] as const
}

export function useGetApiBulkPairingIdGames<TError = unknown>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
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
        ? getGetApiBulkPairingIdGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['bulk-pairing'][':id'].games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBulkPairingIdGames<TError = unknown>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
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
        ? getGetApiBulkPairingIdGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['bulk-pairing'][':id'].games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRoundGameIdAddTimeSecondsKey() {
  return ['api', '/api/round/:gameId/add-time/:seconds', 'POST'] as const
}

export function usePostApiRoundGameIdAddTimeSeconds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRoundGameIdAddTimeSecondsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.round[':gameId']['add-time'][':seconds'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiTokenAdminChallengeKey() {
  return ['api', '/api/token/admin-challenge', 'POST'] as const
}

export function usePostApiTokenAdminChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.token)['admin-challenge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.token)['admin-challenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTokenAdminChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.token)['admin-challenge']['$post']> },
      ) => parseResponse(client.api.token['admin-challenge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboxUsernameKey() {
  return ['inbox', '/inbox/:username', 'POST'] as const
}

export function usePostInboxUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbox)[':username']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbox)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbox)[':username']['$post']> },
      ) => parseResponse(client.inbox[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCloudEvalKey(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
) {
  return ['api', '/api/cloud-eval', args] as const
}

export function useGetApiCloudEval<TError = unknown>(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiCloudEvalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['cloud-eval'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCloudEval<TError = unknown>(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiCloudEvalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['cloud-eval'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiExternalEngineKey() {
  return ['api', '/api/external-engine'] as const
}

export function useGetApiExternalEngine<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiExternalEngineKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['external-engine'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExternalEngine<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiExternalEngineKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['external-engine'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiExternalEngineKey() {
  return ['api', '/api/external-engine', 'POST'] as const
}

export function usePostApiExternalEngine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['external-engine']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExternalEngineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['external-engine']['$post']> },
      ) => parseResponse(client.api['external-engine'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiExternalEngineIdKey(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
) {
  return ['api', '/api/external-engine/:id', args] as const
}

export function useGetApiExternalEngineId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
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
        ? getGetApiExternalEngineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['external-engine'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExternalEngineId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
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
        ? getGetApiExternalEngineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['external-engine'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiExternalEngineIdKey() {
  return ['api', '/api/external-engine/:id', 'PUT'] as const
}

export function usePutApiExternalEngineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['external-engine'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiExternalEngineIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['external-engine'][':id']['$put']> },
      ) => parseResponse(client.api['external-engine'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiExternalEngineIdKey() {
  return ['api', '/api/external-engine/:id', 'DELETE'] as const
}

export function useDeleteApiExternalEngineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['external-engine'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiExternalEngineIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['external-engine'][':id']['$delete']> },
      ) => parseResponse(client.api['external-engine'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiExternalEngineIdAnalyseKey() {
  return ['api', '/api/external-engine/:id/analyse', 'POST'] as const
}

export function usePostApiExternalEngineIdAnalyse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExternalEngineIdAnalyseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>
        },
      ) => parseResponse(client.api['external-engine'][':id'].analyse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiExternalEngineWorkKey() {
  return ['api', '/api/external-engine/work', 'POST'] as const
}

export function usePostApiExternalEngineWork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['external-engine']['work']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['external-engine']['work']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExternalEngineWorkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['external-engine']['work']['$post']> },
      ) => parseResponse(client.api['external-engine'].work.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiExternalEngineWorkIdKey() {
  return ['api', '/api/external-engine/work/:id', 'POST'] as const
}

export function usePostApiExternalEngineWorkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine']['work'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['external-engine']['work'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExternalEngineWorkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['external-engine']['work'][':id']['$post']>
        },
      ) => parseResponse(client.api['external-engine'].work[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthKey(args: InferRequestType<typeof client.oauth.$get>) {
  return ['oauth', '/oauth', args] as const
}

export function useGetOauth<TError = unknown>(
  args: InferRequestType<typeof client.oauth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.oauth.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOauth<TError = unknown>(
  args: InferRequestType<typeof client.oauth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.oauth.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApiTokenKey() {
  return ['api', '/api/token', 'POST'] as const
}

export function usePostApiToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.token.$post> }) =>
        parseResponse(client.api.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiTokenKey() {
  return ['api', '/api/token', 'DELETE'] as const
}

export function useDeleteApiToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.token.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTokenTestKey() {
  return ['api', '/api/token/test', 'POST'] as const
}

export function usePostApiTokenTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.test.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.token.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTokenTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.token.test.$post> }) =>
        parseResponse(client.api.token.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMastersKey(args: InferRequestType<typeof client.masters.$get>) {
  return ['masters', '/masters', args] as const
}

export function useGetMasters<TError = unknown>(
  args: InferRequestType<typeof client.masters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMastersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.masters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMasters<TError = unknown>(
  args: InferRequestType<typeof client.masters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMastersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.masters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLichessKey(args: InferRequestType<typeof client.lichess.$get>) {
  return ['lichess', '/lichess', args] as const
}

export function useGetLichess<TError = unknown>(
  args: InferRequestType<typeof client.lichess.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLichessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lichess.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLichess<TError = unknown>(
  args: InferRequestType<typeof client.lichess.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLichessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lichess.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPlayerKey(args: InferRequestType<typeof client.player.$get>) {
  return ['player', '/player', args] as const
}

export function useGetPlayer<TError = unknown>(
  args: InferRequestType<typeof client.player.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.player.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlayer<TError = unknown>(
  args: InferRequestType<typeof client.player.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.player.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMastersPgnGameIdKey(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
) {
  return ['masters', '/masters/pgn/:gameId', args] as const
}

export function useGetMastersPgnGameId<TError = unknown>(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
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
        ? getGetMastersPgnGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masters.pgn[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMastersPgnGameId<TError = unknown>(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
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
        ? getGetMastersPgnGameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masters.pgn[':gameId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStandardKey(args: InferRequestType<typeof client.standard.$get>) {
  return ['standard', '/standard', args] as const
}

export function useGetStandard<TError = unknown>(
  args: InferRequestType<typeof client.standard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStandardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.standard.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStandard<TError = unknown>(
  args: InferRequestType<typeof client.standard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStandardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.standard.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAtomicKey(args: InferRequestType<typeof client.atomic.$get>) {
  return ['atomic', '/atomic', args] as const
}

export function useGetAtomic<TError = unknown>(
  args: InferRequestType<typeof client.atomic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtomicKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.atomic.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAtomic<TError = unknown>(
  args: InferRequestType<typeof client.atomic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtomicKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.atomic.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAntichessKey(args: InferRequestType<typeof client.antichess.$get>) {
  return ['antichess', '/antichess', args] as const
}

export function useGetAntichess<TError = unknown>(
  args: InferRequestType<typeof client.antichess.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAntichessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.antichess.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAntichess<TError = unknown>(
  args: InferRequestType<typeof client.antichess.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAntichessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.antichess.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
